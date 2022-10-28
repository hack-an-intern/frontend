import { Space, Table, Tag } from 'antd';
import React from 'react';
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const App = () => (
  <Table dataSource={data}>
    <ColumnGroup title="Buy">
      <Column title="Quantity" dataIndex="Quantity" key="quantity" />
      <Column title="Price" dataIndex="Price" key="price" />
    </ColumnGroup>
    <ColumnGroup title="Sell">
      <Column title="Price" dataIndex="Price" key="price" />
      <Column title="Quantity" dataIndex="Quantity" key="quantity" />
    </ColumnGroup>
  </Table>
);
export default App;