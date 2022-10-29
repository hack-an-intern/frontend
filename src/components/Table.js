import { Row, Col, Space, Table, Tag, Typography } from 'antd';
import React from 'react';
import { useState, useEffect } from 'react';
import API from '../api';


const columns = [
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];








const data_buy = [
  {
    id: 1,
    user: 'John',
    quantity: '100',
    price: 32,
  },
  {
    id: 2,
    user: 'John',
    quantity: '100',
    price: 32,
  },
  {
    id: 3,
    user: 'John',
    quantity: '100',
    price: 32,
  },
];
const data_sell = [
  {
    id: 1,
    user: 'John',
    quantity: '100',
    price: 32,
  },
  {
    id: 2,
    user: 'John',
    quantity: '100',
    price: 32,
  },
  {
    id: 3,
    user: 'John',
    quantity: '100',
    price: 32,
  },
];

const App = () => {
  const [dataBuy, setDataBuy] = useState(null);
  const [dataSell, setDataSell] = useState(null);

  useEffect(() => {

    API.get('/limitorder/')
      .then(res => {
        let data = res.data;
        console.log(data);
        let buy = [];
        let sell = [];
        for (let i = 0; i < data.length; i++) {
          // if (data[i] == null) continue;
          data[i].user = data[i]?.user?.name;

          if (data[i].type === 'buy') {
            buy.push(data[i]);
          }
          else {
            sell.push(data[i]);
          }
        }
        setDataBuy(buy);
        setDataSell(sell);
        console.log("data ", dataBuy, dataSell);
      })


  }, []);
















  return (<>
    <div style={{ paddingBottom: '20px', color: '#FFFFFF', backgroundColor: "#363636" }}>
      <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '10px', color: '#FFFFFF', }}>Order Book</Typography.Title>
      <Row align='middle' justify='center'>
        {/* <Typography.Title level={2} style={{ marginBottom: '10px' }}>Order Book</Typography.Title> */}
        <Col style={{ textAlign: 'center' }} span={10}>
          <Typography.Title level={5} style={{ marginBottom: '10px', color: '#FFFFFF', }}>Buy Orders</Typography.Title>
          <Table pagination={false} columns={columns} dataSource={dataBuy} />
        </Col>
        <Col offset={2} style={{ textAlign: 'center' }} span={10}>
          <Typography.Title level={5} style={{ marginBottom: '10px', color: '#FFFFFF', }}>Sell Orders</Typography.Title>
          <Table pagination={false} columns={columns} dataSource={dataSell} />
        </Col>
      </Row>
    </div>
  </>
  )
};
export default App;