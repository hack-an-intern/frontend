import { Space, Table, Tag , Button, Checkbox, Form, Input} from 'antd';
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
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const App = () => (
 <div>
     <div>
    <Table dataSource={data}>
        <Column title="User Name" dataIndex="firstName" key="firstName" />
        <Column title="Stocks" dataIndex="age" key="age" />
        <Column title="Fiat $" dataIndex="address" key="address" />
        <Column
        title="Action"
        key="action"
        render={(_, record) => (
            <Space size="middle">
            <a>Edit {record.lastName}</a>
            <a>Delete</a>
            </Space>
        )}
        />
    </Table>
  </div>
  <div>
  <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Stocks"
        name="stocks"
        rules={[
          {
            required: true,
            message: 'Enter Price!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Fiat $"
        name="fiat $"
        rules={[
          {
            required: true,
            message: 'Enter fiat',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
  </div>
 </div>
  
  
);
export default App;