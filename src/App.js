import TextEditor from "./components/TextEditor.js"
import Home from "./pages/Home.js"
import {Routes,Route} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import { URLContextProvider } from "./contexts/URLContext.js"
import { AuthContextProvider } from "./contexts/authContext.js"

import Login from "./pages/login.js"
import Register from "./pages/register.js"
import ProtectedRoute from "./utils/protectedRoutes.js"
import Navbar from "./layout/Navbar.js"
import MyDocuments from "./pages/myDocuments.js"
import DocAuthorization from "./utils/docAuthorization.js"
import MyRequests from "./pages/myRequests.js"
import { Outlet } from "react-router-dom"
import {io} from "socket.io-client"
import { useEffect, useState } from "react"
import SocketD from "./utils/sockets.js"


function App() {
  
  
  return (
    <>
    <URLContextProvider>
     
      <AuthContextProvider>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/users/login" element={<Login/>}></Route>
            <Route path="/users/register" element={<Register/>}></Route>
            <Route path="/mydocuments/:user" element={<ProtectedRoute><MyDocuments/></ProtectedRoute>}></Route>
            <Route path="/myrequests/:user" element={<ProtectedRoute><MyRequests/></ProtectedRoute>}></Route>
            <Route path="/documents/:id" element={<DocAuthorization><TextEditor/></DocAuthorization>}></Route>
        </Routes>
    </AuthContextProvider>
        
     
      
    </URLContextProvider>
    
    </>
        
  )
}

export default App