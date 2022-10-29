import { Row, Col, Space, Table, Tag, Typography } from 'antd';
import React from 'react';
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
    key: '1',
    user: 'John',
    quantity: '100',
    price: 32,
  },
  {
    key: '2',
    user: 'John',
    quantity: '100',
    price: 32,
  },
  {
    key: '3',
    user: 'John',
    quantity: '100',
    price: 32,
  },
];
const data_sell = [
  {
    key: '1',
    user: 'John',
    quantity: '100',
    price: 32,
  },
  {
    key: '2',
    user: 'John',
    quantity: '100',
    price: 32,
  },
  {
    key: '3',
    user: 'John',
    quantity: '100',
    price: 32,
  },
];

const App = () => (<>
<div style={{paddingBottom: '20px', color:'#FFFFFF', backgroundColor: "#363636"}}>
<Typography.Title level={2} style={{ textAlign: 'center' , marginBottom: '10px', color:'#FFFFFF',}}>Order Book</Typography.Title>
  <Row align='middle' justify='center'>
  {/* <Typography.Title level={2} style={{ marginBottom: '10px' }}>Order Book</Typography.Title> */}
    <Col style={{textAlign: 'center'}} span={10}>
    <Typography.Title level={5} style={{ marginBottom: '10px', color:'#FFFFFF', }}>Buy Orders</Typography.Title>
  <Table pagination={false} columns={columns} dataSource={data_buy}/>
  </Col>
  <Col offset={2} style={{textAlign: 'center'}} span={10}>
  <Typography.Title level={5} style={{ marginBottom: '10px', color:'#FFFFFF', }}>Sell Orders</Typography.Title>
  <Table pagination={false} columns={columns} dataSource={data_sell}/>
  </Col>
  </Row>
  </div>
  </>
);
export default App;