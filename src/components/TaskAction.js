import { MARK_COMPLETE, DELETE_TASK, CREATE_TASK, UPDATE_TASK } from './TaskActionType';

//Action Creator

export const markCompleteAction = (id) => {
  console.log('triggering action...'+id);
  return {
    type: MARK_COMPLETE,
    payload: { itemId : id}, 
  }
}

export const deleteTaskAction = (id) => {
  return {
    type: DELETE_TASK,
    payload: { itemId : id}, 
  }
}

export const createTaskAction = (newTask) => {
  return {
    type: CREATE_TASK,
    payload: { newTask },
  }
}

export const updateTaskAction = (updatedTask) => {
  return {
    type: UPDATE_TASK,
    payload: { task : updatedTask }
  }
}