import "antd/dist/antd.css";
// import "../css/App.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      name: "Ved",
      stocks: "32",
      fiat: "45",
    },
    {
        name: "Ved",
        stocks: "32",
        fiat: "45",
    },
    {
        name: "Ved",
        stocks: "32",
        fiat: "45",
    },
    {
        name: "Ved",
        stocks: "32",
        fiat: "45",
    },
    {
        name: "Ved",
        stocks: "32",
        fiat: "45",
    },
    
  ]);
  const columns = [
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Stocks",
      dataIndex: "stocks",
    },
    {
      key: "4",
      title: "Fiat",
      dataIndex: "fiat",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
          </>
        );
      },
    },
  ];
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (
    <div >
      {/* <header className="App-header"> */}
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.stocks}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, stocks: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.fiat}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, fiat: e.target.value };
              });
            }}
          />
        </Modal>
      {/* </header> */}
    </div>
  );
}

export default App;