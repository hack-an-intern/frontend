import React from 'react'
import {Table} from 'antd'

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
      
  return (
    <Table dataSource={dataSource} pagination={false} columns={columns} />
  )
}
