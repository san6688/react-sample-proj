import { createStore, combineReducers } from 'redux';
import TaskReducer from './components/TaskReducer';
import TaskFormReducer from './components/TaskFormReducer';

const appStore = createStore(combineReducers({
  taskState: TaskReducer,
  taskFormState: TaskFormReducer
}));

export default appStore;
