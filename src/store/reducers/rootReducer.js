import userReducer from "./userReducer";
import bookReducer from "./bookReducer";

const rootReducer = ({ users, books }, action) => ({
  users: userReducer(users, action),
  books: bookReducer(books, action)
});

export default rootReducer;
