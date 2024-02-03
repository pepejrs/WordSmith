import axios from "axios";
import { createContext, useEffect, useState, useCallback, useMemo, useContext } from "react";
import { ServerVariables } from "../utils/serverVariables";
import {URLContext} from "./URLContext.js"




export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  
  const API_URL =useContext(URLContext)
  
  const login = useCallback(async (inputs) => {
    
      const res = await axios.post(API_URL+ServerVariables.Login, inputs);
      setCurrentUser(prev=>res.data.username);
      console.log(res.data);

  }, []);

  const logout = useCallback(async () => {
    
    setCurrentUser(prev=>null);
  
    alert("logged out!")
    console.log("current user:",currentUser);
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  const authContextValue = useMemo(() => ({ currentUser, login, logout }), [currentUser, login, logout]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};