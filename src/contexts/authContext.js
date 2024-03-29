import axios from "axios";
import { createContext, useEffect, useState, useCallback, useMemo, useContext } from "react";
import { ServerVariables } from "../utils/serverVariables";
import {URLContext} from "./URLContext.js"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



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
    if(res.data.status==202){
    
      toast.success("Login Successful")
    }
    else if(res.data.status==401){
    
      toast.warn("Wrong credentials")
      }
      else{
      
        toast.error("Sorry Error ocurred")
      }
      return res.data.status

  }, []);

  const logout = useCallback(async () => {
    
    setCurrentUser(prev=>null);
    toast.success("Logged out")
    
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
      <ToastContainer/>
      {children}
      

    </AuthContext.Provider>
  );
};