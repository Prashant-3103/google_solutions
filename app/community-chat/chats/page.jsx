"use client"
import { useState ,useEffect} from "react";
import { firestore,app } from "@/lib/firebase";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { doc,getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CommunityChatUsers from "@/app/community-chat/_components/CommunityUsers"
import CommunityChatRooms from "@/app/community-chat/_components/CommunityChatRooms";
const page = () => {

    const auth = getAuth(app)
    const [user,setUser] = useState(null)
    const router = useRouter()
const [selectedChatRoom, setSelectedChatRoom] = useState(null)
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
       <>

 <div className="flex bg-[#DBB9E0]">
 <div className="">
 <CommunityChatUsers userData={user} setSelectedChatRoom={setSelectedChatRoom}/>

 </div>
 <div className="flex-grow w-3/12 lg:ml-[200px] lg:mb-12">
 <CommunityChatRooms user={user} selectedChatRoom={selectedChatRoom}/>
    </div>
            </div>

       </>
     );
}

export default page;
