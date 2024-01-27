"use client"
import { useState ,useEffect} from "react";
import { firestore,app } from "@/lib/firebase";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { doc,getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const page = () => {
  const auth = getAuth(app)
  const [user,setUser] = useState<{ id: string } | null>(null)
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

if(user?.userType==='admin'){
return(
 <div>
  create button
 </div>
)
}

if(user?.userType==='user'){
return(
  <div>join community</div>
)
}

  return (
    <div>
Community
    </div>
  )
}

export default page
