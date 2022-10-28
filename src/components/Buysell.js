import React from 'react';
import { Tabs, Select } from 'antd';
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
        {/* Content of Tab Pane 2 */}
        </Tabs.TabPane>
    </Tabs>
        </>

    </div>;
}

Buysell.propTypes = propTypes;
Buysell.defaultProps = defaultProps;
// #endregion

export default Buysell;