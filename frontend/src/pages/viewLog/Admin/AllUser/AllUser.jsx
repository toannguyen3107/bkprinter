import {Input, Space, Button, Table} from 'antd';
import {React, useState, useEffect} from 'react'
import { SearchOutlined } from '@ant-design/icons';
import {datas} from '../datas'
import dayjs from 'dayjs';

const styleTable = {
    marginTop: '2vh',
}

const columns = [{
    title: "Tên",
    dataIndex: 'name',
    key: 'name',
    width: '20%',
},{
    title: "Vị trí",
    dataIndex: 'position',
    key: 'position',
    width: '10%',
},{
    title: "Tên tài liệu",
    dataIndex: 'nameBook',
    key: 'nameBook',
    width: '25%',
},{
    title : "ID Máy in",
    dataIndex: 'idPrinter',
    key: 'idPrinter',
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
    render: (_, {time}) => (<p>{time.format("HH:mm DD/MM/YYYY")}</p>),
}]


export const AllUser= () => {
    const [dataTable, setDataTable] = useState(datas);
    return (<>
    <div style={styleTable}>
        <Table columns={columns} dataSource={dataTable} pagination={{position: ["bottomCenter"], pageSize: 8}} style={{ width: '70vw', margin: 'auto', marginTop: '50px', border: '2px solid black', borderRadius: '10px',  }}/>
    </div>
    </>);
}