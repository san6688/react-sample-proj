import { MARK_COMPLETE } from './TaskActionType';

const initialState = {
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
};

const TaskReducer = (state = initialState, action) => {
  switch(action.type){
    case MARK_COMPLETE: {
      let id = action.payload.itemId;
      let index = state.tasks.findIndex((_task) => _task.id === id); 
      let copyTasks = state.tasks.slice();
      let tmpTask= copyTasks[index];
      tmpTask.isCompleted = !tmpTask.isCompleted;
      copyTasks[index] = tmpTask
      return ({ tasks: copyTasks });
    }
    default:
      return  state;
  }
}

export default TaskReducer;