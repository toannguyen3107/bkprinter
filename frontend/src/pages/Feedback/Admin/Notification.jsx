import MenuItem from '@mui/material/MenuItem';
import { Avatar } from "@mui/material";
import Divider from '@mui/material/Divider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

export const Notification = ({onClick, data}) => {
    return (
        <Link to={`adminFeedback/${data.id}`}>
        <MenuItem onClick={onClick}
            sx={{
            width: '350px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0 10px'
            }}
        >
            <div><Avatar sx={{ width: 32, height: 32 }}/></div>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                paddingLeft: 12,
            }}
            >
            <span style={{fontWeight: '600'}}>{data.firstName + ' ' + data.lastName}</span>
            <span style={{fontSize: '14px'}}>{data.subject}</span>
            </div>
            <div 
                style={{
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end'
                }}  
            >
                <span>22/12/2023</span>
                <span><KeyboardArrowRightIcon/></span>
            </div>
        </MenuItem>
        <Divider />
        </Link>
    )
}