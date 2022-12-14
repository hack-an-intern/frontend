
import './App.css';
import 'antd/dist/antd.min.css';
import classes from './css/layout.module.css';
import Container from './Layout.js';
import 'react-toastify/dist/ReactToastify.css';
import { getUserdata, getMarketPrice, getLimitOrder, getTradeHistory } from './redux/features/user/userThunk';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from 'react';
function App() {
  const [update, setUpdate] = useState(0);
  const incupdate = () => {
    setUpdate(update + 1);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserdata());
    dispatch(getMarketPrice());
    dispatch(getLimitOrder());
    dispatch(getTradeHistory());

  }, [update]);
  return (
    <>
      <Container inc={incupdate} />
      {/* <Row>
        <Col span={12}>
          <Graph/>
        </Col>
        <Col span={12}>
          <Buysell/>
        </Col>
      </Row> */}
    </>
  );
}

export default App;
