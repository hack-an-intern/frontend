import React, { useEffect, useState } from 'react'
import { Table, Typography } from 'antd'
import API from '../api';
import { useSelector } from 'react-redux';
export default function TransactionHistory(props) {
  let allTrade = useSelector(state => state.user.trade);
  const [data, setData] = useState([
    {
      key: '1',
      type: 'Buy',
      buyer: "Harsh",
      seller: "Someone",
      quantity: '50',
    },
    {
      key: '2',
      type: 'Buy',
      buyer: "Harsh",
      seller: "Someone",
      quantity: '50',
    },
  ])
  // let users = useSelector((state) => state.user.data)
  // const findusrbyid = (id) => {
  //   // for(let i=0;i<users.length;i++){
  //   //   if(users[i].id == id)
  //   //     {
  //   //       return users[i].name;
  //   //     }
  //   // }
  // }
  useEffect(() => {
    let temp = [];
    allTrade?.map((item, index) => {
      temp.push({
        key: item.id,
        type: item.type,
        user1: item.user1.name,
        user2: item.user2.name,
        quantity: item.quantity,

      })
    })
    setData(temp);
    console.log("daasdfasdfasta", data);
  }, [allTrade])
  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Seller',
      dataIndex: 'user2',
      key: 'seller',
    },
    {
      title: 'Buyer',
      dataIndex: 'user1',
      key: 'buyer',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];

  return (<div style={{ backgroundColor: "#363636", padding: '20px' }}><Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '45px', color: '#FFFFFF', }}>Transaction History</Typography.Title>
    <Table scroll={{ y: props.height }} dataSource={data} pagination={false} columns={columns} />
  </div>
  )
}
