"use client"
import CreateCommunity from "@/app/community-chat/_components/CreateCommunity"
import JoinCommunity from "@/app/community-chat/_components/JoinCommunity"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app, firestore } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import toast from "react-hot-toast";
const page = () => {
  const auth = getAuth(app)
const [user,setUser] = useState(null)
const router = useRouter()
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,async(user)=>{
      if(user){
          const useRef = doc(firestore,"users",user.uid)
          const userSnap = await getDoc(useRef)
          const userData = ({id: userSnap.id,...userSnap.data()})
          setUser(userData)
      }
      else{
          setUser(null)
          router.push('/login')
          toast.error("Please log in first to chat")
      }

  })
  return ()=>unsubscribe()
  },[auth,router])
console.log(user);


  return(
    <>
<CreateCommunity user={user}/>
<JoinCommunity user={user}/>
    </>

  )
}
export default page
