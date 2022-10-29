import { React } from 'react';
import { Col, Row, Input, Button } from 'antd';

import { Tabs, Select, Radio, InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import API from '../api';
// import { Toast } from 'react-toastify/dist/components';

const { Option } = Select;
const propTypes = {};

// order type - Limit / market
// trade-type - buy / sell
const defaultProps = {};



/**
 * 
 */
const Buyui = () => {
  
}
const Buysell = () => {

  const [id, setId] = useState();
  const [ordertype, setOrderType] = useState('limit');
  const [tradetype, setTradeType] = useState('buy');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const usersList = useSelector(state => state.user.data);
  // const onChange = (value) => {
  //   console.log(`selected ${value}`);

  // };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  const options = [
    { label: 'Market', value: 'market' },
    { label: 'Limit', value: 'limit' },
  ];
  const onChangeOrdertype = ({ target: { value } }) => {
    console.log('radio4 checked', value);
    setOrderType(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submit');
    let data = {
      id, ordertype, tradetype, quantity, price
    }
    console.log(data);
    API.post('/trade', data)
      .then(res => {
        console.log(res);

      })
      .catch(err => {
        console.log(err);
      })
  }
  let items = [
    { label: 'Buy', value: 'buy', key: 'buy', children: <Buyui/> },
    { label: 'Sell', value: 'sell', key: 'sell', children: <Buyui/> },    
  ];
  return <div style={{backgroundColor:"#363636",paddingBottom:"20px"}} >
     <div style={{backgroundColor:"#363636"}}>
    <>
      {/* <Tabs type="card"  defaultActiveKey="1">
        <Tabs.TabPane style={{color: "#FFFFFF"}} tab="BUY" key="1" align="left">
          <Buyui />
        </Tabs.TabPane>
        <Tabs.TabPane style={{color: "#FFFFFF"}} tab="SELL" key="2" align="right">
          <Buyui />
        </Tabs.TabPane>
      </Tabs> */}
      <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button onClick={()=> setTradeType("buy")} class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Buy</button>
    <button onClick={()=> setTradeType("sell")} class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Sell</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Buyui/></div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"></div>
</div>

    </>
  </div>
  <div style={{backgroundColor:"#363636",margin:"20px"}} >
  <Row style={{marginTop: '20px'}} align='middle'>
      <Col className="gutter-row" span={10}>
        <Select
          showSearch
          placeholder="Select the user"
          optionFilterProp="children"
          onChange={(e) => { setId(e) }}
          onSearch={onSearch}
          size={"large"}
          style={{ width: '100%' }}
          filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        >
          {/* <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option> */}
          {usersList ?
            (usersList.map((user, index) => { return <Option value={user.id} key={index}>{user.name}</Option> }
            )) : <><Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option></>
          }


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
    <Row style={{ marginTop: '20px' }}>
      <InputNumber size={"large"} placeholder="Number of stocks" onChange={(e) => { setQuantity(e) }} required />
    </Row>
    {ordertype == "limit" && <Row style={{ marginTop: '20px' }}>
      <InputNumber size={"large"} placeholder="Limit Value" onChange={(e) => { setPrice(e) }} required />
    </Row>}
    <Row style={{ marginTop: '20px' }}>
      <Button size={"large"} onClick={handleSubmit} style={{ width: '100%' }} type="primary">Confirm Transaction</Button>
    </Row>
  </div>
  </div>
}

Buysell.propTypes = propTypes;
Buysell.defaultProps = defaultProps;
// #endregion

export default Buysell;