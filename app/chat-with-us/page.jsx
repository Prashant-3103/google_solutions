"use client"
import { useState ,useEffect} from "react";
import { firestore,app } from "@/lib/firebase";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { doc,getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Users from "./_components/Users";
import ChatRoom from "./_components/ChatRoom";
const page = () => {
    const auth = getAuth(app)
    const [user,setUser] = useState(null)
    const router = useRouter()

useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,async(user)=>{
    if(user){
        const useRef = doc(firestore,"users",user.uid)
        const userSnap = await getDoc(useRef)
        const userData = ({id: userSnap.id, ...userSnap.data()})
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

    return (
        <div className="flex">
            <div className="flex-shrink-0 w-3/12   ">
                <Users userData={user}/>
            </div>
            <div className="flex-grow w-3/12 ">
               <ChatRoom userData={user}/>
            </div>

        </div>
     );
}

export default page;
