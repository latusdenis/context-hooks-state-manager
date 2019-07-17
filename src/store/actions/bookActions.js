import * as types from "../actionTypes";

export const getBooks = async dispatch => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET"
  });

  const payload = await response.json();

  dispatch({
    type: types.GET_BOOKS,
    payload
  });
};
