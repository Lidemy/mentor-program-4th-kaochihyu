// 引入 rootReducer，傳入 createStore
import { createStore } from 'redux';
import rootReducer from './reducers';

export default createStore(
  rootReducer,
);
