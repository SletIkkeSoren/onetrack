import { UserActionTypes } from './user.types';
import { Map } from 'immutable';

const INITIAL_STATE = {
  Map,
  loading: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      };
    case UserActionTypes.LOADING_USER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default userReducer;