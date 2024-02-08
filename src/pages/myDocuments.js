import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { URLContext } from "../contexts/URLContext";
import { AuthContext } from "../contexts/authContext";
import AddDocuments from "../utils/addDocuments";
import { Link } from "react-router-dom";

function MyDocuments(){
    const [doclist,setDoclist] =useState(["fruits","college","internship"])
    const SERVER_URL =useContext(URLContext)
    const Auth = useContext(AuthContext)
    useEffect(()=>{
      getDocs()
    },[])
    async function getDocs(){
        try{
            const res =await axios.post(`${SERVER_URL}/fetchdocs`,{username:Auth.currentUser})
            setDoclist(prev=>res.data.doclist)
        }
        catch(error){
            console.log("error",error);
        }
    }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    async function deleteDocument(){
    try{
      const res = await axios.post(`${SERVER_URL}/deleteDocument`,{username:Auth.currentUser})
      if (res.data.result ==="success"){
        getDocs()
      }
      else if (res.data.result==="access denied"){
        console.log("you are not authorized to delete");
      }
    }
    catch(error){
      console.log(error,"could not delete");
    }
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   return(
     <>
      <h1>My documents</h1>
      <AddDocuments/>
      <ol>
        {doclist.map((doci) => {
          console.log(doci);
          return(
            <>
          <Link to={`/Documents/${doci._id}`}><li className="m-3" key={doci._id}> title: {doci.title} id: {doci._id}</li></Link>
        <button onClick={deleteDocument}>delete</button>
            </>
          )
      }
        )}
      </ol>
      <button
      type="button"
      onClick={getDocs}
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    >
      Get Docs
    </button>
    </>
  
    );
}
export default MyDocuments;