import * as types from "./../actionTypes";

const initialState = {
  users: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default userReducer;
