"use client"
import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import { firestore,app } from '@/lib/firebase';
import { collection,onSnapshot,query,addDoc,serverTimestamp,where,getDocs } from 'firebase/firestore';
import { getAuth,signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';



const Users = ({ userData }) => {
  const [activeTab, setActiveTab] = useState('users');


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='shadow-lg   h-screen overflow-auto  mt-4 mb-20'>
      <div className='flex justify-between p-4'>
        <button
          onClick={() => handleTabClick('users')}
          className={`btn btn-outline rounded-full   ${activeTab === 'users' ? 'bg-dark-spansoft text-white transition-all duration-300' : ''}`}
        >
          Users
        </button>
        <button
          onClick={() => handleTabClick('Chatrooms')}
          className={`btn   btn-outline rounded-full   ${activeTab === 'Chatrooms' ? 'bg-dark-spansoft text-white transition-all duration-300' : ''}`}
        >
          Chat Rooms
        </button>
      </div>
      <div>
        {activeTab ==='Chatrooms' && (
            <>
            <h1 className='px-4 text-base font-semibold'>Chat rooms</h1>
<UserCard name="katy perry" avatarUrl="https://picsum.photos/200/300" email="key" latestMessageText="hey how are you" time="2 hour ago" type={"chat"} />
<UserCard name="katy perry" avatarUrl="https://picsum.photos/200/300" email="key" latestMessageText="hey how are you" time="2 hour ago" type={"chat"} />
            </>
        )}
      </div>
      <div>
        {activeTab ==='users' && (
            <>
            <h1 className='px-4 text-base font-semibold'>Users</h1>
<UserCard name="taylor perry" avatarUrl="https://picsum.photos/200/300" email="key" latestMessageText="hey how are you" time="2 hour ago" type={"user"} />

            </>
        )}
      </div>
    </div>
  );
};

export default Users;
