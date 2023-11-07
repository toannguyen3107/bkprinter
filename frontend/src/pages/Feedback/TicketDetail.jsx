import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { ticket } from './ticket';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const getProductById = (id)  => {
    const product = ticket.find(product => product.id === id)
    if (!product) { 
        return {
            code: 401,
            message: "Product not found",
        }
    }
    else return {
        code: 200,
        data: product
    }

}

export const TicketDetail = () => {

    const match = useParams();
    const [data, setData] = useState()

    useEffect(() => {
        const product = getProductById(match.id)
        setData(product.data)
    }, [match.id])
    console.log('b')

    return (
        <Box sx={{ flexGrow: 1, margin: '40px 0' }}>
            <ButtonGroup variant="text" aria-label="outlined primary button group" style={{margin: '12px 0'}}>
                <Button><Link to={'/app/ticket'}>{"Quay lại"}</Link></Button>
                <Button><Link to={'/app/create-ticket'}>{'tạo câu hỏi'}</Link></Button>
            </ButtonGroup>
            <Grid container spacing={2}>
                <Grid item xs={4}>
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
                                        <ListItemText primary={data?.status} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <nav aria-label="main mailbox folders">
                            <List sx={{
                                    display:'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start'
                                }}>
                               
                                    <ListItemButton sx={{paddingTop: '0', paddingBottom: '0'}}>
                                        <ListItemText primary={data?.title.toUpperCase()} />
                                    </ListItemButton>
                            </List>
                        </nav>
                        <Divider />
                        <List 
                            sx={{
                                    display:'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start'
                                }}
                        >   
                            <ListItemButton sx={{paddingTop: '0', paddingBottom: '0'}}>
                                <ListItemText primary={`Đã được tạo: ${data?.date} -  bởi ${'user'}` } />
                            </ListItemButton>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={2} md={1.5}>
                                        <ListItemButton>
                                            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px'}}>
                                                <Avatar alt="Profile" src="/static/images/avatar/2.jpg" />  
                                            </Box>
                                        </ListItemButton>
                                    </Grid>
                                    <Grid item xs={10} sx={{display: 'flex', flexDirection: 'column'}}>
                                        <Link href="#" underline='none' sx={{fontSize: '20px'}}>Ho va Ten</Link>
                                        <div style={{
                                            padding: '10px 0'
                                        }}>
                                            {
                                                data?.content
                                            }
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                            
                            
                        </List>
                        <Divider />
                        {
                            data?.status === 'answered' ?<List 
                                sx={{
                                        display:'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start'
                                    }}
                            >   
                                <ListItemButton sx={{paddingTop: '0', paddingBottom: '0'}}>
                                    <ListItemText primary={`Đã được tạo: ${data?.answerDate} - bởi ${'Administrator'}` } />
                                </ListItemButton>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={2} md={1.5}>
                                            <ListItemButton>
                                                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px'}}>
                                                    <Avatar sx={{ bgcolor: '#3EA6A0'}}>
                                                        <AccountCircleIcon />
                                                    </Avatar>  
                                                </Box>
                                            </ListItemButton>
                                        </Grid>
                                        <Grid item xs={10} sx={{display: 'flex', flexDirection: 'column'}}>
                                            <Link href="#" underline='none' sx={{fontSize: '20px'}}>Dear {`${`user`}`},</Link>
                                            <div style={{
                                                padding: '10px 0'
                                            }}>
                                                {
                                                    data?.answer
                                                }
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Box>
                                
                                
                            </List> :
                                <ListItemButton sx={{paddingTop: '0', paddingBottom: '0'}}>
                                    <ListItemText primary={'Chưa có câu trả lời'} />
                                </ListItemButton>
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}