import * as types from "./../actionTypes";

const initialState = {
  fetchedBooks: null
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOOKS:
      return { ...state, fetchedBooks: action.payload };

    default:
      return state;
  }
};

export default bookReducer;
