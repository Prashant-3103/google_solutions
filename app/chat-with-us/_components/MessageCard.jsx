import React from 'react';
import moment from 'moment'

const MessageCard= ({ message,me,other}) => {
  const isMessageFromMe = message.senderId === me.id;

  const timeAgo = (time)=>{
    const date = time?.toDate()
    const momentDate = moment(date)
    return momentDate.fromNow()
  }
  return (
    <div key={message.id} className={`flex mb-4 ${isMessageFromMe? "justify-end": "justify-start"}`}>
    <div className={`w-10 h-10 ${isMessageFromMe ? "ml-2 mr-2":"mr-2"}`}>
      {
        !isMessageFromMe ? (
          <img src={other.avatarUrl} alt='avatar' className='w-full h-full rounded-full object-cover'/>
        ) : (
          <img src={me.avatarUrl} alt='avatar' className='w-full h-full rounded-full object-cover'/>
        )
      }
</div>
<div className={`text-white p-2 rounded-md ${isMessageFromMe ? 'bg-dark-light self-end' : "bg-dark-soft self-start"}`}>
  {message.image && (
    <img className='w-60 h-40  rounded-md' src={message.image} alt='image'/>
  )}
<p className=''>{message.content}</p>
<div className='text-xs text-gray-300'>
{timeAgo(message.time)}
</div>
    </div>
    </div>
  );
};

export default MessageCard;
