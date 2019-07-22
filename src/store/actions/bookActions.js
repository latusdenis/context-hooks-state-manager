import { getBooksData } from '../actionCreators/bookActionCreators';

export const getBooks = async dispatch => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET'
  });

  const payload = await response.json();

  dispatch(getBooksData(payload));
};
