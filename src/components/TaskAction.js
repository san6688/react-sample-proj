import { MARK_COMPLETE } from './TaskActionType';

//Action Creator

export const markCompleteAction = (id) => {
  console.log('triggering action...'+id);
  return {
    type: MARK_COMPLETE,
    payload: { itemId : id}, 
  }
}