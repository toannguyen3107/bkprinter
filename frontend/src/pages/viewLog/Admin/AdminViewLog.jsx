import {React} from 'react'
import {Button} from 'antd'
import { Link } from 'react-router-dom'

const filter = {
    backGroundColor: "white",
    width: '30vw',
    height: '10vh',
    margin: '3% auto',
    display: 'block',
    border: '2px solid black',
    fontSize: '2em',
}


export const AdminViewLog = () => {
    return (
    <>
        <div style={{marginTop: "20vh"}}>
        <Link to={'/app/FilterByName'}>
        <Button style={filter}>Theo tên người dùng</Button>
        </Link>
        <Link to={'/app/FilterByPrinter'} >
        <Button style={filter}>Theo ID máy in</Button>
        </Link>
        <Link to={'/app/viewAllUser'}>
        <Button style={filter}>In toàn bộ</Button>
        </Link>
        </div>
    </>
    );
}