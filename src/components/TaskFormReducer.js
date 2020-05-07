import * as Immutable from 'immutable';
import { UPDATE_MODE } from './TaskFormActionType';

const intialState = Immutable.Map({
  id: null,
  description: '',
  priority: '',
  isCompleted: false,
  updateMode: false,
})

const TaskFormReducer = (state = intialState, action) => {
  switch(action.type){
    case UPDATE_MODE:{
      const updateTask = action.payload.updateTask;
      return state.set('updateMode', true)
                  .set('description',updateTask.get('description'))
                  .set('priority',updateTask.get('priority'))
                  .set('isCompleted',updateTask.get('isCompleted'))
                  .set('id',updateTask.get('id'));
    }
    default:
      return state;
  }
}

export default TaskFormReducer;