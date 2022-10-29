import { Row, Col, Space, Table, Tag, Typography, Popconfirm, Modal, Input } from 'antd';
import React from 'react';
import { useState, useEffect } from 'react';
import API from '../api';
import { toast, ToastContainer } from "react-toastify";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux';

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
  const showPopconfirm = () => {

  }
  const confirmDelete = (x) => {
    console.log("id = ", x);
    API.delete(`/limitorder/${x}/`)
      .then(res => {
        toast.success("Order deleted successfully");
      })
      .catch(err => {
        console.log(err);
        toast.error("Error deleting order");
      })
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
      title: "Cancel",
      render: (record) => {
        return (
          <>
            <Popconfirm
              title="Are you sure to delete this order?"
              onConfirm={() => confirmDelete(record.id)}
              // onCancel={cancel}
              okText="Yes"
              cancelText="No">
              <a href="#"><DeleteOutlined
                onClick={() => {
                  showPopconfirm();
                }}
              /></a>
            </Popconfirm>
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


  let allLimitOrder = useSelector(state => state.user.limit);


  useEffect(() => {
    let data = allLimitOrder;
    if (!data)
      return;
    let buy = [];
    let sell = [];
    for (let i = 0; i < data.length; i++) {
      let temp = { ...data[i], user: data[i]?.user?.name };
      // let temp=[]
      if (data[i].type === 'buy') {
        buy.push(temp);
      }
      else {
        sell.push(temp);
      }
    }
    setDataBuy(buy);
    setDataSell(sell);
    console.log("data ", dataBuy, dataSell);


  }, [allLimitOrder]);





  // useEffect(() => {

  //   API.get('/limitorder/')
  //     .then(res => {
  //       let data = res.data;
  //       console.log(data);
  //       let buy = [];
  //       let sell = [];
  //       for (let i = 0; i < data.length; i++) {
  //         // if (data[i] == null) continue;
  //         data[i].user = data[i]?.user?.name;

  //         if (data[i].type === 'buy') {
  //           buy.push(data[i]);
  //         }
  //         else {
  //           sell.push(data[i]);
  //         }
  //       }
  //       setDataBuy(buy);
  //       setDataSell(sell);
  //       console.log("data ", dataBuy, dataSell);
  //     })


  // }, []);
















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