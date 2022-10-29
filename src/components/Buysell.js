import { React, useState } from 'react';
import { Col, Row, Input, Button } from 'antd';

import { Tabs, Select, Radio, InputNumber } from 'antd';
const { Option } = Select;

const propTypes = {};

// order type - Limit / market
// trade-type - buy / sell
const defaultProps = {};

/**
 * 
 */
const Buyui = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  const options = [
    { label: 'Market', value: 'market' },
    { label: 'Limit', value: 'limit' },
  ];
  const [ordertype, setOrdertype] = useState('market');
  const onChangeOrdertype = ({ target: { value } }) => {
    console.log('radio4 checked', value);
    setOrdertype(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }
  return (<>
    <Row style={{marginTop: '20px'}} align='middle'>
      <Col className="gutter-row" span={10}>
      <Select
        showSearch
        placeholder="Select the user"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        size={"large"}
        style={{ width: '100%' }}
        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
      </Col>
      <Col className="gutter-row" offset={4} span={10}>
      <Radio.Group
        options={options}
        onChange={onChangeOrdertype}
        value={ordertype}
        optionType="button"
        buttonStyle="solid"
      />
      </Col>
    </Row>
    <Row style={{marginTop: '20px'}}>
      <Input size={"large"} placeholder="Number of stocks" />
    </Row>
    {ordertype=="limit" && <Row style={{marginTop: '20px'}}>
      <Input size={"large"} placeholder="Limit Value" />
    </Row>}
    <Row style={{marginTop: '20px'}}>
    <Button size={"large"} onClick={handleSubmit} style={{width: '100%'}} type="primary">Confirm Transaction</Button>
    </Row>

  </>
  )
}
const Buysell = () => {

  const onChange1 = (value) => {
    console.log('changed', value);
  };
  return <div style={{backgroundColor:"#363636", padding: '20px'}}>
    <>
      <Tabs type="card"  defaultActiveKey="1">
        <Tabs.TabPane style={{color: "#FFFFFF"}} tab="BUY" key="1" align="left">
          <Buyui />
        </Tabs.TabPane>
        <Tabs.TabPane style={{color: "#FFFFFF"}} tab="SELL" key="2" align="right">
          <Buyui />
        </Tabs.TabPane>
      </Tabs>
    </>
  </div>;
}

Buysell.propTypes = propTypes;
Buysell.defaultProps = defaultProps;
// #endregion

export default Buysell;