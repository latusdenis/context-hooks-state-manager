import React, { useReducer } from "react";
import rootReducer from "./reducers/rootReducer";

export const ApiContext = React.createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, {});

  return (
    <ApiContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ApiContext.Provider>
  );
};
