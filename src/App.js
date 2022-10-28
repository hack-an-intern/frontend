
import './App.css';
import Graph from './components/Graph';
import Buysell from './components/Buysell';
import classes from './css/layout.module.css';
import { Button } from 'antd';
import { Col, Row } from 'antd';
function App() {
  return (
    <>
      <Row>
        <Col span={12}>
          <Graph/>
        </Col>
        <Col span={12}>
          {/* <Graph/> */}
        </Col>
      </Row>
    </>
  );
}

export default App;
