import { MARK_COMPLETE } from './TaskActionType';

//Action Creator

const markCompleteAction = (id) => {
  return {
    type: MARK_COMPLETE,
    payload: { itemId : id}, 
  }
}