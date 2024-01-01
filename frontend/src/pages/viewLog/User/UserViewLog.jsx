import React, { useEffect, useState } from 'react'
import { DatePicker, Space, Button, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import dayjs from 'dayjs';
import axios from 'axios'

const { RangePicker } = DatePicker;

const styleSearchBar = {
    width: '100%',
    height: '10vh',
    paddingTop: '2vh',
    fontSize: '2em',
}

const styleSearch = {
    border: '2px solid black',
    width: '20vw',
    height: '7vh',
    borderRadius: '10px',
}

const styleButton = {
    border: '2px solid black',
    width: '8vw',
    height: '7vh',
    borderRadius: '10px',
}

const styleTable = {
    marginTop: '2vh',
}

const columns = [{
    title: "ID Máy in",
    dataIndex: 'printerId',
    key: '1',
    width: '15%',
},{
    title: "Vị trí",
    dataIndex: 'location',
    key: '2',
    width: '10%',
},{
    title: "Tên tài liệu",
    dataIndex: 'bookName',
    key: '3',
    width: '30%',
},{
    title: "Giá tiền",
    dataIndex: 'price',
    key: '4',
    width: '15%',
    render: (_, {price}) => (<p>{price}.000 VND</p>),
},{
    title: "Thời gian",
    dataIndex: 'time',
    key: '5',
    width: '30%',
    render: (_, {time}) => (<p>{time}</p>),
}]



export const UserViewLog = () => {
    
    const dateFormat = "DD-MM-YYYY";
    const [startDate, setStartDate] = useState(dayjs("28-08-2023", dateFormat));
    const [endDate, setEndDate] = useState(dayjs());
    const [dataTable, setDataTable] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/userLog?page=1', {
            headers: {
                Authorization: sessionStorage.getItem('accessToken')
              }
        }).then(res => setDataTable(res.data.data))
    }, []);
    const handleFilter = () => {
        setDataTable(dataTable.filter(data => {
            return (dayjs(data.time, "HH:mm DD/MM/YYYY").isBefore(endDate)) && (dayjs(data.time, "HH:mm DD/MM/YYYY").isAfter(startDate))
        }));
    }

    const onCalendarChange = (dates) => {
        setStartDate(dates[0]);
        setEndDate(dates[1]);
    }

    return (
        <>
        <div style={styleSearchBar}>
            <Space direction="horizontal" size={40}>
                <RangePicker style={styleSearch} format={dateFormat} value={[startDate, endDate]} placeholder={["Bắt đầu", "Kết thúc"]} onCalendarChange={onCalendarChange} suffixIcon={<CalendarMonthIcon color="disabled"/>}/> 
                <Button style={styleButton} onClick={handleFilter} icon={<SearchOutlined />}>Search</Button>
            </Space>
        </div>
        <div style={styleTable}>
            <Table columns={columns}dataSource={dataTable} pagination={{position: ["bottomCenter"], pageSize: 8}} style={{ width: '70vw', margin: 'auto', marginTop: '50px', border: '2px solid black', borderRadius: '10px'}}/>
        </div>
        </>
    );
}
// defaultValue={[defaultStartDate, defaultEndDate]} value={[dataStartDate, dataEndDate]}
// value={[dataStartDate, dataEndDate]} format={dateFormat}