import React from 'react'
import MessageCard from './MessageCard'
import MessageInput from './MessageInput'
import { useEffect, useState,useRef } from 'react'
import { firestore } from '@/lib/firebase'
import { addDoc,collection,doc,serverTimestamp,onSnapshot,query,where,orderBy,updateDoc } from 'firebase/firestore'
import toast from 'react-hot-toast'
const ChatRoom = ({user,selectedChatRoom}) => {
    console.log(selectedChatRoom);
  const me = selectedChatRoom?.myData
  const other = selectedChatRoom?.otherData
  const chatRoomId = selectedChatRoom?.id
  const [message,setMessage] = useState('')
  const[messages, setMessages] = useState([])
  const messagesContainerRef = useRef(null)

  const sendMessage= async (e)=>{
    const messageCollection = collection(firestore,'messages')
    if(message.trim()===''){
        return
    }
    try {
        const messageData = {
            chatRoomId,
            senderId:me?.id,
            content: message,
            time: serverTimestamp(),
            image: "",
            messageType: 'text'
        }
     await addDoc(messageCollection,messageData)
     setMessage('')

     //update chatroom last message
     const chatroomRef = doc(firestore,'chatrooms',chatRoomId)
     await updateDoc(chatroomRef,{
        lastMessage:message
     })

    } catch (error) {
console.log(error);
    }
  }


  return (
    <div className='flex flex-col h-screen'>
<div className='flex-1 overflow-y-auto p-10'>
{messages.map((message)=>(
<MessageCard key={message.id} message={message} user={"arfath"}/>
))}
</div>
<MessageInput sendMessage={sendMessage} message={message} setMessage={setMessage}/>
    </div>
  )
}

export default ChatRoom
