import { UPDATE_MODE } from './TaskFormActionType';

export const updateModeAction = (taskObj) => (
  {
    type: UPDATE_MODE,
    payload: { updateTask: taskObj},
  }
)

