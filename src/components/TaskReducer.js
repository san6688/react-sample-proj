import { MARK_COMPLETE, DELETE_TASK, CREATE_TASK, UPDATE_TASK } from './TaskActionType';
import * as Immutable from 'immutable';

const initialState = Immutable.fromJS({
  tasks: [
    {
      id: 1,
      description: 'Task 1',
      priority: 'high',
      isCompleted: false,
    },
    
    {
      id: 3,
      description: 'Task 3',
      priority: 'low',
      isCompleted: false,
    },
    {
      id: 2,
      description: 'Task 2',
      priority: 'medium',
      isCompleted: false,
    },
    {
      id: 4,
      description: 'Task 4',
      priority: '',
      isCompleted: true,
    },
    
  ]
});

const TaskReducer = (state = initialState, action) => {
  switch(action.type){
    case MARK_COMPLETE: {      
      let id = action.payload.itemId; 
      let index = state.get('tasks').findIndex((_task) => _task.get('id') === id);
      let tmpTask = state.get('tasks').get(index);
      tmpTask = tmpTask.set('isCompleted',!tmpTask.get('isCompleted'));
      return state.set('tasks', state.get('tasks').set(index, tmpTask));
    }
    case DELETE_TASK:{
      let id = action.payload.itemId;
      let index = state.get('tasks').findIndex((_task) => _task.get('id') === id);
      return state.set('tasks', state.get('tasks').delete(index));
    }
    case CREATE_TASK: {
      let newTask = Immutable.Map(action.payload.newTask);
      newTask = newTask.set('id', state.get('tasks').size + 1);
      return state.set('tasks', state.get('tasks').push(newTask));
    }
    case UPDATE_TASK: {
      let updatedTask = action.payload.task;
      let index = state.get('tasks').findIndex((_task) => _task.get('id') === updatedTask.get('id'));
      return state.set('tasks', state.get('tasks').set(index, updatedTask));
    }
    default:
      return  state;
  }
}

export default TaskReducer;