import TextEditor from "./components/TextEditor.js"
import Home from "./components/Home.js"
import {Routes,Route} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"

function App() {
  const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://guesswhoserver.onrender.com"
    : "http://localhost:7000";
    
  return (
    <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/documents/:id" element={<TextEditor SERVER_URL={SERVER_URL}/>}></Route>
    </Routes>
  )
}

export default App