import React from 'react';

interface UserCardProps {
  name: string;
  avatarUrl: string;
  latestMessageText: string;
  time: string;
  type: string; // You might want to replace 'string' with a more specific type
}

const UserCard: React.FC<UserCardProps> = ({ name, avatarUrl, latestMessageText, time, type }) => {
  return (
    <div className='flex items-center p-4 border-b border-gray-200 relative hover:cursor-pointer '>
      <div className='flex-shrink-0 mr-4 relative'>
        <div className='w-12 h-12 rounded-full overflow-hidden'>
          <img src={avatarUrl} alt={name} className='w-full h-full object-cover' />
        </div>
      </div>
     {type=='chat' && (
        <>
<div className='flex-1'>
    <div className='flex items-center justify-between'>
<h2 className='text-lg font-semibold'>{name}</h2>
<span className='text-xs text-gray-500'>{time}</span>
    </div>
    <p className='text-sm text-gray-500 truncate'>{latestMessageText}</p>
</div>
        </>
     )}
       {type=='user' && (
        <>
<div className='flex-1'>
    <div className='flex items-center justify-between'>
<h2 className='text-lg font-semibold'>{name}</h2>
    </div>
</div>
        </>
     )}
    </div>
  );
};

export default UserCard;
