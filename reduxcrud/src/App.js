import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { DECRIMENT, INCRIMENT, RESET } from './redux/action/action';

function App() {
  const { count } = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(INCRIMENT())}>incriment</button>
      <button onClick={() => dispatch(DECRIMENT())}>decriment</button>
      <button onClick={() => dispatch(RESET())}>reset</button>
    </div>
  );
}

export default App;
