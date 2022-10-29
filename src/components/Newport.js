import "antd/dist/antd.css";
// import "../css/App.css";
import { Button, Typography, Table, Modal, Input } from "antd";
import { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import API from '../api'
import getUserdata from '../redux/features/user/userThunk';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from "react-toastify";
function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState(useSelector(state => state.user.data));
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
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: "#363636", padding: '20px' }}><Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '10px', color: '#FFFFFF', }}>User Portfolio</Typography.Title>
      {/* <header className="App-header"> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Table columns={columns} pagination={false} dataSource={dataSource}></Table>
      <Modal
        title="Edit Student"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((pre) => {
            let newdata = pre.map((student) => {
              if (student.id === editingStudent.id) {
                return editingStudent;
              } else {
                return student;
              }
            });
            console.log("newdata", newdata);
            API.put(`/users/${editingStudent.id}/`, editingStudent)
              .then(res => {
                toast.success("User updated successfully")
              })
              .catch(err => {
                toast.error("Error updating user")
              });
            return newdata;
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