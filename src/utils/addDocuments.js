
import {v4 as uuid } from "uuid"
import {useNavigate} from "react-router-dom"

export default function AddDocuments(){
    const navigate =useNavigate()
    const docId =uuid()
     function handleAddDocument(e){
        e.preventDefault()
        navigate(`/Documents/${docId}`)

     }

    return(

        <button onClick={handleAddDocument}>Add new blank document </button>

    )
}