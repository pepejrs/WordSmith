import React, { useState, useContext } from "react";
import {useNavigate,useParams } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import axios from "axios";


const DocAuthorization = ({ children }) => {
  const { id: documentId } = useParams()
  const Auth =useContext(AuthContext)
  const navigate =useNavigate()
  async function isContributor(){
    try {
    const  response = await axios.post("requests/isSafe",{documentId:documentId,contributorName:Auth.currentUser})
      if (response.data.safe===1){
        return children;
      }
      else if (response.data.safe===-1){
        alert("error loading document")
      }
      else{
        alert("Access Denied")
        navigate(`/myDocuments/${Auth.currentUser}`)
      }
    }
    catch(error){
      console.log("error",error)

    }
  }
  isContributor()

};

export default DocAuthorization;