import React from 'react'
import {Table, } from 'antd';


const dataSource = [{
key: '1',
name: 'player1',
age: 32,
address: 'Guotai Rd No11'
}, {
key: '2',
name: 'player12',
age: 42,
address: 'Guotai Rd No12'
}];

const columns = [{
title: '姓名',
dataIndex: 'name',
key: 'name',
}, {
title: '年龄',
dataIndex: 'age',
key: 'age',
}, {
title: '住址',
dataIndex: 'address',
key: 'address',
}];
      
const Interfaces = ()=>{
    return(<Table dataSource={dataSource} columns={columns} />);
}

export default Interfaces