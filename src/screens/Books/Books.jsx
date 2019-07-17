import React, { useContext, useEffect, memo } from 'react';
import { ApiContext } from '../../store/StoreProvider';
import { getBooks } from '../../store/actions/bookActions';

const Books = memo(() => {
  const { dispatch, books } = useContext(ApiContext);
  const contextValue = useContext(ApiContext);

  useEffect(() => {
    console.log('Books render');

    getBooks(dispatch);
  }, [dispatch]);

  console.log(contextValue, 'Books context value');

  return <div>{books && books.fetchedBooks && <p>{books.fetchedBooks.title}</p>}</div>;
});

export default Books;
