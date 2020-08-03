import { UserActionTypes } from './user.types';
// import { fromJS } from "immutable";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});