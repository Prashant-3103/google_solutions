import React from 'react'
import {FaPaperclip,FaPaperPlane} from "react-icons/fa"
const MessageInput = ({sendMessage,message,setMessage}) => {

  return (
    <div className='flex items-center p-4 border-t border-gray-200'>
<FaPaperclip className ="text-gray-400 mr-2 cursor-pointer"/>
<input type='text' placeholder='Type a message...' className='flex-1 p-2 outline-dark-light border-none rounded-full' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
<FaPaperPlane onClick={()=>{sendMessage()}} className="text-gray-500 ml-2 cursor-pointer"/>
    </div>
  )
}

export default MessageInput