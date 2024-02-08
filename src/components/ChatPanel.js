import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { URLContext } from "../contexts/URLContext"
import {v4 as uuid} from "uuid"
import { TEInput } from "tw-elements-react"

export default function ChatPanel(props){
    const [msgList,setMsgList] =useState(Array.of({text:"Hi How can I help you?",id:"first",role:"model"}))
    const [prompt,setPrompt] =useState("")
    const serverurl =useContext(URLContext)
    async function sendPrompt(){
        try{
            setMsgList(prev=>[...prev,{text:prompt,id:uuid(),role:"user"}])
            let userPrompt=prompt
            setPrompt(prev=>"");
            const res =await axios.post(serverurl+"/chat/generateResponse",({quillText:props.quill.getText(),prompt:userPrompt}))
            let data =res.data
            const newMsg ={text:data.modelResponse,role:"model",id:uuid()}
            setMsgList(prev=>[...prev,newMsg])
        }
        catch(error){
            setPrompt(prev=>"error")
        }
    }
    
    return (
    <>
        
        {
            msgList.map((msg)=>(
                <h6 className={`${msg.role === "user" ? 'text-right' : 'text-left'}`}
                key={msg.id}>{msg.text}</h6>
                )
            )
        }
            <TEInput value={prompt} onChange={(e)=>{setPrompt(prev=>e.target.value)}}></TEInput>
            <button onClick={()=>{sendPrompt()}}>send</button>
     </>
    )
};