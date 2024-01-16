"use client"
import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import { firestore,app } from '@/lib/firebase';
import { collection,onSnapshot,query,addDoc,serverTimestamp,where,getDocs, doc, QuerySnapshot } from 'firebase/firestore';
import { getAuth,signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const Users = ({ userData }) => {
  const [activeTab, setActiveTab] = useState('users');
const [loading,setLoading] = useState(false)
const[loading2, setLoading2] = useState(false)
const[users,setUsers] = useState([])
const router = useRouter()
const[userChatRooms,setUserChatRooms] = useState([])
const auth = getAuth(app)
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  //get all users
  useEffect(()=>{
setLoading(true);
const tastQuery =query(collection(firestore,'users'))
const unsubscribe = onSnapshot(tastQuery,(QuerySnapshot)=>{
  const users = QuerySnapshot.docs.map((doc)=>({
    id: doc.id,
    ...doc.data()
  }))
  setUsers(users)
  setLoading(false)
})
return unsubscribe
  },[])

console.log(users);
const handleLogOut = ()=>{
signOut(auth).then(()=>{
  toast.success('Logged successfully')
router.push('/')
})
}

//get users chatRooms

useEffect(()=>{
setLoading(true)
if(!userData?.id){
  return
}
const chatroomsQuery = query(collection(firestore,'chatrooms'),where('users','array-contains',userData.id))
const unsubscribeChatrooms = onSnapshot(chatroomsQuery,(QuerySnapshot)=>{
  const chatrooms = QuerySnapshot.docs.map((doc)=>({
    id: doc.id,
    ...doc.data()
  }))
  setUserChatRooms(chatrooms)
  setLoading(false)
})
return ()=> unsubscribeChatrooms()
},[userData])



const createChat = async(user)=>{
//chatroom already exists
const existingChatroom = query(collection(firestore,'chatrooms'),where('users','==',[user.id,userData.id]))
try {
const existingChatroomSnapShots = await getDocs(existingChatroom)
if(existingChatroomSnapShots.docs.length>0){
  toast.error('Chatroom already exists')
  return
}
//chatRoom doest exist we create one

const usersData = {
  [userData.id]:userData,
  [user.id]:user
}

const chatRoomData = {
  users: [user.id,userData.id],
  usersData,
  timestamp: serverTimestamp(),
  lastMessage: null
}
const chatRoomRef = await addDoc(collection(firestore,'chatrooms'),chatRoomData)
console.log("chatRoom has been created with id", chatRoomRef.id);
setActiveTab('Chatrooms')

} catch (error) {
toast.error(error.message)
toast.error("failed")
}
}

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
        <button
          onClick={handleLogOut}
          className={`btn   btn-outline rounded-full bg-red-400 hover:bg-red-200 hover:text-red-600  `}
        >
          Log out
        </button>
      </div>
      <div>
        {activeTab ==='Chatrooms' && (
            <>
            <h1 className='px-4 text-base font-semibold'>Chat rooms</h1>
            {
              userChatRooms.map((chatroom)=>(
                <div key={chatroom.id} onClick={()=>{createChat(chatroom)}} >
   <UserCard
                  name={chatroom.usersData[chatroom.users.find((id) => id !== userData?.id)].name}
                  avatarUrl={chatroom.usersData[chatroom.users.find((id) => id !== userData?.id)].avatarUrl}
                  latestMessage={chatroom.lastMessage}
                  time="2 hour ago"
                  type={"chat"}
                />

                </div>
              ))
            }
         </>
        )}
      </div>
      <div>
        {activeTab ==='users' && (
            <>
            <h1 className='px-4 text-base font-semibold'>Users</h1>
            { loading ? <p>Loading...</p> : users.map((user)=>(
<div key={user.id} onClick={()=>{createChat(user)}}>
   { user.id!==userData?.id && (
      <UserCard name={user.name} avatarUrl={user.avatarUrl} time="2 hour ago" type={"user"} />

            )}
            </div>
            )

            )}
            </>

        )}
      </div>
    </div>
  );
};

export default Users;
