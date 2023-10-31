import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, List, ListItem } from '@mui/material';
import data from './data.json'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export const AppBarHeader = (props) => {

    const {title, tail = false, link='#'} = props

    return (
        <Box sx={{ flexGrow: 1, backgroundColor:'#D4E4FB', margin:'12px 0'}}>
            <AppBar position="static" color='transparent' style={{boxShadow: 'none'}}>
            <Toolbar>
                {
                    title && 
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        {title}
                    </Typography>}
                {
                    tail && 
                    <Link href={link} underline="hover">
                        {tail && tail}
                    </Link>
                }
                
            </Toolbar>
            </AppBar>   
        </Box>
    )
}



export const Feedback = () => {
    
    let navigate = useNavigate(); 
    const routeChange = (path) =>{ 
        navigate(path);
    }

    return (
        <Box
            sx={{
                margin: '40px 0',
            }}
        >
            <AppBarHeader title={'Một số câu hỏi thường gặp'} tail='xem toàn bộ' link={`sample-ticket`}/>
            <List item xs={12} md={6}>
                {
                    data.slice(0, 5).map((item, index) => (
                        
                        <ListItem
                            key={index}
                        >
                            <Link href="sample-ticket" underline="hover">
                                {item.title}
                            </Link>
                           
                        </ListItem>
                        
                    ))
                }
            </List>
            <AppBarHeader title='Contact us'/>
            <Button variant="contained" style={{margin: '12px 0'}} onClick={() => routeChange('/app/create-ticket')}>Contact us</Button>
        </Box>
    )
}