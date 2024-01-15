"use client"
import { useState ,useEffect} from "react";
import { firestore,app } from "@/lib/firebase";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { doc,getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
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
        const userData = userSnap.data()
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
        <div>
            chatiing platform
        </div>
     );
}

export default page;
