import {Input, Space, Button, Table} from 'antd';
import {React, useState, useEffect} from 'react'
import { SearchOutlined } from '@ant-design/icons';
// import {datas} from '../datas'
import axios from 'axios'
import dayjs from 'dayjs';

const styleTable = {
    marginTop: '2vh',
}

const columns = [{
    title: "Tên",
    dataIndex: 'userName',
    key: 'userName',
    width: '20%',
},{
    title: "Vị trí",
    dataIndex: 'location',
    key: 'location',
    width: '10%',
},{
    title: "Tên tài liệu",
    dataIndex: 'bookName',
    key: 'bookName',
    width: '25%',
},{
    title : "ID Máy in",
    dataIndex: 'printerId',
    key: 'printerId',
    width: '15%',
},{
    title: "Giá tiền",
    dataIndex: 'price',
    key: 'price',
    width: '15%',
    render: (_, {price}) => (<p>{price}.000 VND</p>),
},{
    title: "Thời gian",
    dataIndex: 'time',
    key: 'time',
    width: '15%',
    render: (_, {time}) => (<p>{time}</p>),
}]


export const AllUser= () => {
    const [dataTable, setDataTable] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5001/api/adminLog/getAllUser?page=1').then((res) => {
            setDataTable(res.data.data)
        })
    }, [])
    return (<>
    <div style={styleTable}>
        <Table columns={columns} dataSource={dataTable} pagination={{position: ["bottomCenter"], pageSize: 8}} style={{ width: '70vw', margin: 'auto', marginTop: '50px', border: '2px solid black', borderRadius: '10px',  }}/>
    </div>
    </>);
}