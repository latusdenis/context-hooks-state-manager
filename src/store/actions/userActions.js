import { getUsersData } from '../actionCreators/userActionCreators';

export const getUsers = (payload, dispatch) => {
  dispatch(getUsersData(payload));
};
