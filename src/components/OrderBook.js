import { Row, Col, Space, Table, Tag, Typography, Popconfirm,Modal, Input } from 'antd';
import React from 'react';
import { useState, useEffect } from 'react';
import API from '../api';
import { toast, ToastContainer } from "react-toastify";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


const App = (props) => {
  // const [isEditing, setIsEditing] = useState(false);
  // const [editingStudent, setEditingStudent] = useState(null);
  // const onEditStudent = (record) => {
  //   setIsEditing(true);
  //   setEditingStudent({ ...record });
  // };
  // const resetEditing = () => {
  //   setIsEditing(false);
  //   setEditingStudent(null);
  // };
  const showPopconfirm =  () =>{

  }
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
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
          
            <DeleteOutlined
              onClick={() => {
                showPopconfirm();
              }}
            />
          </>
        );
      },
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
    <div style={{ padding: '20px', color: '#FFFFFF', backgroundColor: "#363636" }}>
      <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '10px', color: '#FFFFFF', }}>Order Book</Typography.Title>
      <Row align='top'>
        {/* <Typography.Title level={2} style={{ marginBottom: '10px' }}>Order Book</Typography.Title> */}
        <Col style={{ textAlign: 'center' }} span={11}>
          <Typography.Title level={5} style={{ marginBottom: '10px', color: '#FFFFFF', }}>Buy Orders</Typography.Title>
          <Table scroll={{ y: props.height }} pagination={false} columns={columns} dataSource={dataBuy} />
        </Col>
        <Col offset={2} style={{ textAlign: 'center' }} span={11}>
          <Typography.Title level={5} style={{ marginBottom: '10px', color: '#FFFFFF', }}>Sell Orders</Typography.Title>
          <Table scroll={{ y: props.height }} pagination={false} columns={columns} dataSource={dataSell} />
        </Col>
      </Row>
    </div>
  </>
  )
};
export default App;