import { createStore, combineReducers } from 'redux';
import TaskReducer from './components/TaskReducer';

const appStore = createStore(TaskReducer);

export default appStore;
