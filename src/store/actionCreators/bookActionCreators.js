import * as types from '../actionTypes';

export const getBooksData = payload => {
  return {
    type: types.GET_BOOKS,
    payload
  };
};
