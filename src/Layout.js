import { Breadcrumb, Layout, Menu, Typography } from 'antd';
import React, { Component } from 'react';
import { Col, Row } from 'antd';
import { Graph } from './components/Graph';
import Buysell from './components/Buysell';
import Table from './components/Table';
import TransactionHistory from './components/TransactionHistory';
// import Portfolio from './components/Portfolio'
import Newport from './components/Newport'
const { Header, Content, Footer } = Layout;
const Container = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
      />
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
        <Row>
          <Col span={16}>
          <Row>
            <Typography.Title level={3} style={{ fontWeight:'normal', color:'#FFFFFF', margin: 0 }}>
                Market Price
              </Typography.Title>
            </Row>
            <Row style={{marginBottom: "20px"}}>
              <Typography.Title level={1} style={{ margin: 0, color:'#FFFFFF'}}>
                ₹ 1,00,000
              </Typography.Title>
              <Typography.Title level={6} style={{color:'#00d09c', fontSize:'1rem', fontWeight:'normal', margin: 0 }}>
                +4000 (4.00%)
              </Typography.Title>
            </Row>

              <Graph />
          </Col>
          <Col offset={1} span={6}>
            {/* <Graph/> */}
            <Buysell />
          </Col>
        </Row>
        <Row align='top'>
          <Col span={12} style={{ padding: "30px" }}>
            <Table />
          </Col>
          <Col span={6} style={{ padding: "30px" }}>
            {/* <Graph/> */}
            <TransactionHistory />
          </Col>
          <Col span={6} style={{ padding: "25px", }}>
            {/* <Graph/> */}
            <Newport />
          </Col>
        </Row>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      <p style={{color:"white"}}>Design and Created by it_works_on_local ©2022</p>
    </Footer>
  </Layout>
);
export default Container;