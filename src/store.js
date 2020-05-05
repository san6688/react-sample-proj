import { createStore, combineReducers } from 'redux';
import TaskReducer from './components/TaskReducer';

const appStore = createStore(combineReducers({
  taskState: TaskReducer,
}));

export default appStore;
