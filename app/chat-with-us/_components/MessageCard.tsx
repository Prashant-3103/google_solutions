import React from 'react';

interface User {
  avatarUrl: string;
  email: string;
  name: string;
}

interface Message {
  id: number;
  sender: string;
  avatarUrl: string;
  content: string;
  time: string;
}

interface MessageCardProps {
  message: Message;
  user: User;
}

const MessageCard: React.FC<MessageCardProps> = ({ message, user }) => {
  const isMessageFromMe = message.sender === user;
  return (
    <div key={message.id} className={`flex mb-4 ${isMessageFromMe? "justify-end": "justify-start"}`}>
    <div className={`w-10 h-10 ${isMessageFromMe ? "ml-2 mr-2":"mr-2"}`}>
        <img src={message.avatarUrl} alt='avatar' className='w-full h-full rounded-full object-cover'/>
</div>
<div className={`text-white p-2 rounded-md ${isMessageFromMe ? 'bg-dark-light self-end' : "bg-dark-soft self-start"}`}>
<p className=''>{message.content}</p>
<div className='text-xs text-gray-300'>

</div>
    </div>
    </div>
  );
};

export default MessageCard;
