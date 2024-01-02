import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { FaTrashAlt } from "react-icons/fa";
import { GoReply } from "react-icons/go";
import { BsFillSendFill } from "react-icons/bs";
import ReactQuill from 'react-quill';
import parse from 'html-react-parser';
import axios from 'axios';

export const TicketDetail = () => {

    const match = useParams();
    const [data, setData] = useState()
    const [value, setValue] = useState()

    const [reply, setReply] = useState(false)

    const handleReply = () => {
        setReply(!reply)
        setValue('')
    }

    console.log(match.id)

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:5001/api/feedback/${match.id}`,
            headers: {
              Authorization: sessionStorage.getItem('accessToken'),
              'Content-Type': 'application/json',
            },
            responseType: 'json',
          })
            .then(function (response) {
              console.log(response.data.feedback)
              setData(response.data.feedback)
            })
            .catch(function () {
              console.log('false')
            });
    }, [match.id])

    const renderName = (firstName, lastName) => {
        return firstName.toUpperCase() + ' ' + lastName.toUpperCase()
    }

    const handleClick = () => {
        axios({
            method: 'post',
            url: 'http://localhost:5001/api/feedback/update',
            data: {value, id: match.id},
            headers: {
              Authorization: sessionStorage.getItem('accessToken'),
              'Content-Type': 'application/json',
            },
            responseType: 'json',
          })
            .then(function (response) {
              console.log(response.data);
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            })
            .catch(function () {
              console.log('false')
            });
    }

    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };

    const getDay = (date) => {

        console.log(date)
        return new Date(date).toLocaleDateString('en-US', options);

    }
  

    return (
        <Box sx={{ flexGrow: 1, margin: '40px 0' }}>
            <ButtonGroup variant="text" aria-label="outlined primary button group" style={{margin: '12px 0'}}>
                <Button><Link to={'/app/ticket'}>{"Quay lại"}</Link></Button>
                <Button><Link to={'/app/create-ticket'}>{'tạo câu hỏi'}</Link></Button>
            </ButtonGroup>
            <Grid container spacing={2}>
                {/* <Grid item xs={3}>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="TICKET INFORMATION" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{
                                    display:'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start'
                                }}>
                                    <ListItemButton sx={{paddingTop: '0', paddingBottom: '0'}}>
                                        <ListItemText primary="Thời gian" />
                                    </ListItemButton>
                                    <ListItemButton sx={{paddingTop: '0', paddingBottom: '0'}}>
                                        <ListItemIcon>
                                            <AccessTimeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={data?.date} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                        <Divider />
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText primary="Tình trạng" />
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemText primary={data?.title} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                </Grid> */}
                <Grid item xs={12}>
                    {
                        data && 
                        <div style={{paddingTop: 12}}>    
                            <div
                                style={{fontSize: '24px'}}
                            >
                                {data.title.toUpperCase()}
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    backgroundColor: 'white',
                                    padding: 8,
                                    borderRadius: 12,
                                    marginTop: 12,
                                    boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.2)'
                                }}
                            >
                                <div style={{width: '60px'}}><Avatar /></div>
                                <div 
                                    style={{flex: 1}}
                                >
                                    <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
                                        <div style={{display: 'flex', alignItems: 'center', flexDirection:'row', justifyContent: 'space-between'}}>
                                            <div style={{display: 'flex', alignItems: 'center', flexDirection:'row'}}>
                                                <span style={{fontSize: '14px', fontWeight: '600'}}>{renderName(data.user.lastName, data.user.firstName )}</span>
                                                <span style={{fontSize: '13px', paddingLeft: '4px'}}>{'<' + data.user.email + '>'}</span>
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection:'row',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <span style={{fontSize: '13px'}}>{getDay(data.createdAt)}</span>
                                                
                                                <div  
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection:'row',
                                                        alignItems: 'center',
                                                        padding: '0 24px'
                                                    }}
                                                >
                                                    <GoReply />
                                                </div>
                                                <FaTrashAlt/>
                                            </div>
                                        </div>
                                        <span style={{fontSize: '13px'}}>to Admin</span>
                                    </div>
                                    <div 
                                        style={{display: 'flex', flexDirection: 'column', paddingTop: '8px'}}
                                    >
                                        <span style={{fontSize:'14px', paddingBottom: '8px'}}>
                                            {
                                                parse(data.value)
                                            }
                                        </span>
                                    </div>
                                    <div 
                                        style={{
                                            padding: '12px 0'
                                        }}>
                                        {
                                            !reply && data.comments.length < 1 &&                                  
                                            <Button variant='outlined' size="medium" onClick={handleReply}>
                                                <GoReply />
                                                <span style={{paddingLeft: '12px'}}>Reply</span>
                                            </Button>
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                data.comments.map((comment, key) => (
                                    <div key={key}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            backgroundColor: 'white',
                                            padding: 8,
                                            borderRadius: 12,
                                            marginTop: 12,
                                            boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.2)'
                                        }}
                                    >
                                        <div style={{width: '60px'}}><Avatar /></div>
                                        <div 
                                            style={{flex: 1}}
                                        >
                                            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
                                                <div style={{display: 'flex', alignItems: 'center', flexDirection:'row', justifyContent: 'space-between'}}>
                                                    <div style={{display: 'flex', alignItems: 'center', flexDirection:'row'}}>
                                                        <span style={{fontSize: '14px', fontWeight: '600'}}>{renderName(comment.lastName, comment.firstName )}</span>
                                                        <span style={{fontSize: '13px', paddingLeft: '4px'}}>{'<' + comment.email + '>'}</span>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection:'row',
                                                            alignItems: 'center'
                                                        }}
                                                    >
                                                        <span style={{fontSize: '13px'}}>{getDay(comment.time)}</span>
                                                        
                                                        <div  
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection:'row',
                                                                alignItems: 'center',
                                                                padding: '0 24px'
                                                            }}
                                                        >
                                                            <GoReply />
                                                        </div>
                                                        <FaTrashAlt/>
                                                    </div>
                                                </div>
                                                <span style={{fontSize: '13px'}}>Reply</span>
                                            </div>
                                            <div 
                                                style={{display: 'flex', flexDirection: 'column', paddingTop: '8px'}}
                                            >
                                                <span style={{fontSize:'14px', paddingBottom: '8px'}}>
                                                    {
                                                        parse(comment.comment)
                                                    }
                                                </span>
                                            </div>
                                            <div 
                                                style={{
                                                    padding: '12px 0'
                                                }}>
                                                {
                                                    !reply && key === data.comments.length - 1 &&                                
                                                    <Button variant='outlined' size="medium" onClick={handleReply}>
                                                        <GoReply />
                                                        <span style={{paddingLeft: '12px'}}>Reply</span>
                                                    </Button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                reply && 
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        padding: '28px 0'
                                    }}
                                >
                                    <div style={{width: '60px'}}><Avatar /></div>
                                    <div 
                                        style={{flex: 1}}
                                    >
                                        <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
                                            <div style={{display: 'flex', alignItems: 'center', flexDirection:'row', justifyContent: 'space-between'}}>
                                                <div style={{display: 'flex', alignItems: 'center', flexDirection:'row'}}>
                                                    <span style={{fontSize: '14px', fontWeight: '600'}}>{renderName(data.user.lastName, data.user.firstName )}</span>
                                                    <span style={{fontSize: '13px', paddingLeft: '4px'}}>{'<' + data.user.email + '>'}</span>
                                                </div>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection:'row',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <span style={{fontSize: '13px'}}>{data.date}</span>
                                                    
                                                    <div  
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection:'row',
                                                            alignItems: 'center',
                                                            padding: '0 24px'
                                                        }}
                                                    >
                                                        <FaTrashAlt onClick={handleReply} cursor={'pointer'}/>
                                                    </div>
                                                    <BsFillSendFill cursor={'pointer'} onClick={() => handleClick()}/>
                                                </div>
                                            </div>
                                            <div style={{display: 'flec', flexDirection: 'row'}}>
                                                <span style={{fontSize: '13px'}}>to {'Admin'}</span>
                                            </div>
                                        </div>
                                        <div 
                                            style={{display: 'flex', flexDirection: 'column', paddingTop: '24px'}}
                                        >
                                            <ReactQuill 
                                                theme='snow'
                                                value={value}
                                                onChange={(e) => setValue(e)}
                                            />
                                        </div>
                                        

                                    </div>
                                </div>
                            }
                            
                        </div>
                    }
                </Grid>
            </Grid>
        </Box>
    )
}