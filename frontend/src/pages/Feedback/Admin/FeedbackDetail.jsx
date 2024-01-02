import { useParams } from 'react-router-dom'
import { Avatar } from "@mui/material";
import { useState, useEffect } from 'react';
// import { BsThreeDotsVertical } from "react-icons/bs";
import Button from '@mui/material/Button';
import { deepOrange} from '@mui/material/colors';
import 'react-quill/dist/quill.snow.css';
import { FaTrashAlt } from "react-icons/fa";
import { GoReply } from "react-icons/go";
import { BsFillSendFill } from "react-icons/bs";
import ReactQuill from 'react-quill';
import parse from 'html-react-parser';
import axios from 'axios'


export const FeedbackDetail = () => {

    const match = useParams();
    const [data, setData] = useState()
    const [value, setValue] = useState('')
    const [reply, setReply] = useState(false)

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

    const handleReply = () => {
        setReply(!reply)
        setValue('')
    }

    const handleSendReply = () => {
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

    return (

        <div style={{
            paddingTop: '5%'
        }}>
            {
                data &&  
                <>    
                    <div
                        style={{fontSize: '24px', paddingLeft: '60px'}}
                    >
                        {data.title}
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
                                        <span style={{fontSize: '14px', fontWeight: '600'}}>{renderName(data.user.firstName, data.user.lastName)}</span>
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
                            <div
                                key={key}
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
                                                <span style={{fontSize: '14px', fontWeight: '600'}}>{comment.firstName + ' ' + comment.lastName}</span>
                                                <span style={{fontSize: '13px', paddingLeft: '4px'}}>{'<' + comment.email + '>'}</span>
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
                            <div style={{width: '60px'}}><Avatar sx={{ bgcolor: deepOrange[500] }}>Ad</Avatar></div>
                            <div 
                                style={{flex: 1}}
                            >
                                <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
                                    <div style={{display: 'flex', alignItems: 'center', flexDirection:'row', justifyContent: 'space-between'}}>
                                        <div style={{display: 'flex', alignItems: 'center', flexDirection:'row'}}>
                                            <span style={{fontSize: '14px', fontWeight: '600'}}>{'Admin'}</span>
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
                                            <BsFillSendFill onClick={handleSendReply} cursor={'pointer'}/>
                                        </div>
                                    </div>
                                    <div style={{display: 'flec', flexDirection: 'row'}}>
                                        <span style={{fontSize: '13px'}}>to {data.lastName}</span>
                                        <span style={{fontSize: '13px', paddingLeft: '4px'}}>{'<' + data.email + '>'}</span>
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
                    
                </>
            }
        </div>
       
    )
}