
import './App.css';
import Graph from './components/Graph';
import Buysell from './components/Buysell';
import classes from './css/layout.module.css';

function App() {
  return (
    <>
    <div className="layout">
      <div className={classes.graph}>
        <Graph />
      </div>
      {/* <Graph/> */}
      <Buysell/>
    </div>
    </>
  );
}

export default App;
