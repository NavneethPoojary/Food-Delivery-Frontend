import { createContext, useReducer } from "react";

const authReducer = (state, action) => {
  switch (action.type) {
    case "USER_SIGNUP":
      return { ...state, user: action.payload };
  }
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const initialState = {
    user: [],
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  console.log(state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
