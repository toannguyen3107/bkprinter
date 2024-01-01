import {Input, Space, Button, Table} from 'antd';
import {React, useState, useEffect} from 'react'
import { SearchOutlined } from '@ant-design/icons';
// import {datas} from '../datas'
import dayjs from 'dayjs';
import axios from 'axios'
const styleInput = {
    height: '7vh',
    width: '20vw',
    fontSize: '1rem',
    border: '2px solid black',
    borderRadius: '10px',
}

const styleButton = {
    border: '2px solid black',
    width: '7vh',
    height: '7vh',
    borderRadius: '50%',
}

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
    key: 'printerID',
    width: '15%',
},{
    title: "Giá tiền",
    dataIndex: 'price',
    key: 'price',
    width: '15%',
    render: (_, {price}) => {price !== 0?(<p>{price}</p>):(<p></p>)},
},{
    title: "Thời gian",
    dataIndex: 'time',
    key: 'time',
    width: '15%',
    render: (_, {time}) => (<p>{time?time:""}</p>),
}]


export const FilterByPrinter = () => {

    const [name, setName] = useState("")
    const [dataTable, setDataTable] = useState([])

    useEffect(() => {
        console.log(name);
    }, [name]);

    const onChange = (e) => {
        setName(e.target.value);
    }

    const handleFilter = () => {
        // setDataTable(datas.filter(data => data.idPrinter === name));
        axios.get(`http://localhost:5001/api/adminLog/getByPrinter/${name}?page=1`).then(function (res) {
            // console.log(res.data.data)
            setDataTable(res.data.data)
        })
        // setDataTable(axios.get(`localhost:5001/api/adminLog/getByPrinter/${name}?page=1`).then( res => {
        //     console.log(res)
        // }))
    }

    return (<>
    <div>
        <Space direction='horizontal' style={{width: '100%', height: '10vh', paddingTop: '2vh'}}>
            <Input placeholder="Nhập ID máy in" style={styleInput} allowClear onChange={onChange} /> 
            <Button icon={<SearchOutlined />} style={styleButton} onClick={handleFilter}/>
        </Space>
    </div>
    <div style={styleTable}>
        <Table columns={columns} dataSource={dataTable} pagination={{position: ["bottomCenter"], pageSize: 8}} style={{ width: '70vw', margin: 'auto', marginTop: '50px', border: '2px solid black', borderRadius: '10px',  }}/>
    </div>
    </>);
}