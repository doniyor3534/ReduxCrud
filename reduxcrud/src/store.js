import { createStore } from "redux";
import CountReducer from "./redux/Reducers/Reducers";

const store = createStore(
  CountReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;