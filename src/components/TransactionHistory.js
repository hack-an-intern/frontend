import React, { useEffect, useState } from 'react'
import { Table, Typography } from 'antd'
import API from '../api';
import { useSelector } from 'react-redux';
export default function TransactionHistory() {

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
  let users = useSelector((state)=>state.user.data)
  const findusrbyid = (id)=>{
    // for(let i=0;i<users.length;i++){
    //   if(users[i].id == id)
    //     {
    //       return users[i].name;
    //     }
    // }
  }
  useEffect(()=>{
    API.get("/tradehistory/")
    .then(res =>{
      console.log("sdf",res.data)
      let rec_data = res.data[0];
      rec_data.user1 = rec_data.user1.name
      rec_data.user2 = rec_data.user2.name

      setData(res.data);
    })
    .catch(err =>{
      console.log(err);
    })
  }, [])
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

  return (<div style={{backgroundColor: "#363636", padding: '20px'}}><Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '10px', color: '#FFFFFF', }}>Transaction History</Typography.Title>
    <Table dataSource={data} pagination={false} columns={columns} />
  </div>
  )
}
