import { MARK_COMPLETE } from './TaskActionType';
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
    default:
      return  state;
  }
}

export default TaskReducer;