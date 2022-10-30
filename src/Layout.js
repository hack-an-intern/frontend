import { Breadcrumb, Layout, Menu, Typography } from 'antd';
import React, { Component, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { Graph } from './components/Graph';
import GGraph from './components/GGraph';
import Graph_new from './components/Graph_new';
import Trade from './components/Trade';
import OrderBook from './components/OrderBook';
import TransactionHistory from './components/TransactionHistory';
import UserPortfolio from './components/UserPortfolio'
import { useSelector } from 'react-redux';
// import Portfolio from './components/Portfolio'

const { Header, Content, Footer } = Layout;
const Container = (props) => {
  const priceData = useSelector((state) => state.user.price);
  const [price, setPrice] = useState(0);
  const [pc, setPc] = useState(0);
  const [color, setColor] = useState('green');

  useEffect(() => {
    if (!priceData)
      return;
    const dp = priceData;
    setPrice(dp[dp.length - 1].price);

    if (dp.length > 1) {

      setPc(((dp[dp.length - 1].price - dp[dp.length - 2].price) / dp[dp.length - 2].price) * 100);
    }


  }, [priceData]);
  // useEffect(() => {
  //   API.get('/price/').then((res) => {
  //     console.log("datasdfasdfasa", res.data);
  //     const dp = res.data;
  //     setPrice(dp[dp.length - 1].price);

  //     if (dp.length > 1) {
  //       setPc(((dp[dp.length - 1].price - dp[dp.length - 2].price) / dp[dp.length - 2].price) * 100);
  //     }
  //   });

  // }, []);




  return (


    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ fontWeight: '900', color: 'white' }}
        />
        KSE
      </Header>
      <Content
        style={{
          padding: '0 50px',
          backgroundColor: '#010101',
          color: 'white',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Row>                <Typography.Title level={3} style={{ fontWeight: 'normal', color: '#FFFFFF', margin: 0 }}>
            Market Price
          </Typography.Title></Row>
          <Row style={{height:'500px'}}>
            <Col span={16}>
              <Row style={{ marginBottom: "20px" }}>
                <Typography.Title level={1} style={{ margin: 0, color: '#FFFFFF' }}>
                  ₹ {price}
                </Typography.Title>
                <Typography.Title level={6} style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 'normal', margin: 0 }}>
                  { }{Math.round((pc + Number.EPSILON) * 100) / 100}%
                </Typography.Title>
              </Row>

              <Graph_new />
            </Col>
            <Col style={{ marginTop: '67px' }} offset={1} span={6}>
              {/* <Graph/> */}
              <Trade inc={props.inc} />
            </Col>
          </Row>
          <Row align='top' style={{ marginTop: '30px' }}>
            <Col span={10}>
              <OrderBook height={300} inc={props.inc} />
            </Col>
            <Col offset={1} span={5}>
              {/* <Graph/> */}
              <TransactionHistory height={300} inc={props.inc}/>
            </Col>
            <Col offset={1} span={5}>
              {/* <Graph/> */}
              <UserPortfolio height={300} inc={props.inc}/>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: 'black'
        }}
      >
        <p style={{ color: "white" }}>Design and Created by it_works_on_local ©2022</p>
      </Footer>
    </Layout>
  )
};
export default Container;