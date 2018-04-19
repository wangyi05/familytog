
import initialState from './initialState';
import {FETCH_MEMBER, RECEIVE_MEMBER} from '../actions/actionTypes';

export default function member(state = initialState.member, action) {
  let newState;
  switch (action.type) {
    case FETCH_MEMBER:
      console.log('FETCH_MEMBER Action')
      return action;
    case RECEIVE_MEMBER:
      newState = action.member;
      console.log('RECEIVE_MEMBER Action')
      return newState;
    default:
      return state;
  }
}