import React, { useContext, useEffect, memo } from 'react';
import { ApiContext } from '../../store/StoreProvider';
import { getUsers } from '../../store/actions/userActions';

const Users = memo(() => {
  const { dispatch, users } = useContext(ApiContext);
  const contextValue = useContext(ApiContext);

  useEffect(() => {
    console.log('Users render');

    getUsers('Users', dispatch);
  }, [dispatch]);

  console.log(contextValue, 'Users context value');
  console.log(users);

  return <div>{users && users.users}</div>;
});

export default Users;
