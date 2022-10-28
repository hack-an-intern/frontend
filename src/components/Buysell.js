import React from 'react';
import { Tabs, Select,Radio,InputNumber } from 'antd';
const { Option } = Select;

const propTypes = {};


const defaultProps = {};

/**
 * 
 */

const Buysell = () => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
        };
        const onSearch = (value) => {
        console.log('search:', value);
        };
        const onChange1 = (value: number) => {
            console.log('changed', value);
          };
    return <div>
        <>
        <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="BUY" key="1">
        <Select
            showSearch
            placeholder="Select the user"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
        </Select>

        </Tabs.TabPane>
        <Tabs.TabPane tab="SELL" key="2">
              <Select
            showSearch
            placeholder="Select the user"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
        </Select>
        </Tabs.TabPane>
    </Tabs>
        </>
        <Radio.Group
      defaultValue="c"
      buttonStyle="solid"
      style={{
        marginTop: 16,
        marginRight:20,
      }}
    >
      <Radio.Button value="a">Market Order</Radio.Button>
      <Radio.Button value="b">Limit Order</Radio.Button>
    </Radio.Group>
    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange1} />
    <button type="button" class="btn btn-success">Success</button>
    </div>;
}

Buysell.propTypes = propTypes;
Buysell.defaultProps = defaultProps;
// #endregion

export default Buysell;