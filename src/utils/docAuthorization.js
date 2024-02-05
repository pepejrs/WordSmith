import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { URLContext } from "../contexts/URLContext";
import axios from "axios";

const DocAuthorization = ({ children }) => {
  const { id: documentId } = useParams();
  const Auth = useContext(AuthContext);
  const SERVER_URL = useContext(URLContext);
  const navigate = useNavigate();
  async function isContributor() {
    try {
      console.log(documentId);
      const response = await axios.post(SERVER_URL + "/requests/isSafe", {
        documentId: documentId,
        contributorName: Auth.currentUser,
      });
      console.log(response.data);
      if (response.data.safe == "1" || response.data.safe == "2") {
        return true;
      } else if (response.data.safe == "-1") {
        console.log(
          "error occured while creating/fetching document in database"
        );
        navigate(`/myDocuments/${Auth.currentUser}`);
      } else {
        console.log("accessDenied");
        navigate(`/myDocuments/${Auth.currentUser}`);
      }
    } catch (error) {
      console.log("error", error);
      alert("Error loading Document");
    }
  }
  let result = isContributor();
  if (result) return children;
};

export default DocAuthorization;
