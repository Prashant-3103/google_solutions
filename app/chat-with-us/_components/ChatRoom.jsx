import React from 'react'
import MessageCard from './MessageCard'
import MessageInput from './MessageInput'

const ChatRoom = () => {
    const messages = [
        {
            id: 1,
            sender: "arfath",
            avatarUrl: "https://picsum.photos/200/300",
            content: "hey how are you",
            time: "2 hour ago"
        },
        {
            id: 2,
            sender: "taylor swift",
            avatarUrl: "https://picsum.photos/200/300",
            content: "i am fine",
            time: "1 hour ago"
        },

    ]
  return (
    <div className='flex flex-col h-screen'>
<div className='flex-1 overflow-y-auto p-10'>
{messages.map((message)=>(
<MessageCard key={message.id} message={message} user={"arfath"}/>
))}
</div>
<MessageInput/>
    </div>
  )
}

export default ChatRoom
