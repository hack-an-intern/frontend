import { Breadcrumb, Layout, Menu } from 'antd';
import React, { Component } from 'react';
import { Col, Row } from 'antd';
import Graph from './components/Graph';
import Buysell from './components/Buysell';
import Table from './components/Table';
const { Header, Content, Footer } = Layout;
const Container = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
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
        <Col span={12}>
          <Graph/>
        </Col>
        <Col span={12} style={{padding: "30px"}}>
          {/* <Graph/> */}
          <Buysell/>
        </Col>
      </Row>
      <Row>
          <Table/>
      </Row>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Design and Created by it_works_on_local ©2022
    </Footer>
  </Layout>
);
export default Container;