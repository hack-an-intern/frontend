import React from 'react'
import { Table, Typography } from 'antd'

export default function TransactionHistory() {
  const dataSource = [
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
  ];

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Seller',
      dataIndex: 'seller',
      key: 'seller',
    },
    {
      title: 'Buyer',
      dataIndex: 'buyer',
      key: 'buyer',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];

  return (<div style={{backgroundColor: "#363636", padding: '20px'}}><Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '10px', color: '#FFFFFF', }}>Order Book</Typography.Title>
    <Table dataSource={dataSource} pagination={false} columns={columns} />
  </div>
  )
}
