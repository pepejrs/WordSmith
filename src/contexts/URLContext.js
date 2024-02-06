import {createContext } from "react";

export const URLContext =createContext()

export const URLContextProvider =({children})=>{
  const server_url =process.env.NODE_ENV === "production"
    ? "https://wordsmith-server.onrender.com"
    : "http://localhost:7000";
    return (
      <URLContext.Provider value={server_url}>
        {children}
      </URLContext.Provider>
    )
};
  