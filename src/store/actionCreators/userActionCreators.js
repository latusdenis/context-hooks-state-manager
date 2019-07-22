import * as types from '../actionTypes';

export const getUsersData = payload => {
  return {
    type: types.GET_USERS,
    payload
  };
};
