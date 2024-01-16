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
const [image,setImage] = useState(null) //for uploading image

useEffect(()=>{
if(!chatRoomId) {
    return}
const unsubscribe = onSnapshot(query(collection(firestore,'messages'),where('chatRoomId','==',chatRoomId),orderBy('time','asc')),snapshot=>{
const messagesData = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))
console.log(messagesData);
setMessages(messagesData)
})
return unsubscribe
},[chatRoomId])
console.log(messages);

  const sendMessage= async (e)=>{
    const messagesCollection = collection(firestore,'messages')
    if(message =='' && !image){
        return;
    }
    try {
        const messageData = {
            chatRoomId,
            senderId:me?.id,
            content: message,
            time: serverTimestamp(),
            image: image,
            messageType: !image ? "text" : "image"
        }
     await addDoc(messagesCollection,messageData)
     setMessage('')
     setImage(null)

     //update chatroom last message
     const chatroomRef = doc(firestore,'chatrooms',chatRoomId)
     await updateDoc(chatroomRef,{
        lastMessage:message ? message : "Image",
     })

    } catch (error) {
console.log(error);
    }
  }


  return (
    <div className='flex flex-col h-screen'>
<div className='flex-1 overflow-y-auto p-10'>
{messages.map((message)=>(
<MessageCard key={message.id} message={message} me={me} other={other}/>
))}
</div>
<MessageInput sendMessage={sendMessage} message={message} setMessage={setMessage} image={image} setImage={setImage}/>
    </div>
  )
}

export default ChatRoom
