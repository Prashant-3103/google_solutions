"use client"
import { useState ,useEffect} from "react";
import { firestore,app } from "@/lib/firebase";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, doc,getDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const page = () => {
  const [name, setName] = useState("")
  const [description,setDescription] = useState("")
  const [permitted, setPermitted] = useState(false)
  const [users, setUsers] = useState([])
  const[errors, setErrors] = useState({})
  const [loading,setLoading] = useState(false)

  const validateForm = ()=>{
    const newErrors = {}
    if(!name.trim()){
        newErrors.name="Name is required"
    }

    if (description.length <= 10) {
      newErrors.description = "Description should be above 10 characters";
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length===0;
}

const handleSubmit = async(e)=>{
  e.preventDefault()
  setLoading(true)
  try {
const communityCollection = collection(firestore,"communities")
if(!validateForm()) {
  setLoading(false)
  return
}
const communityData = {
  name: name,
  description: description,
  time: serverTimestamp(),
  users,
  permitted
}
await addDoc(communityCollection,communityData)
    setName("")
    setDescription("")
setLoading(false)
toast.success("created community")
  } catch (error) {
console.log(error);
toast.error(error.message)
  }
  setLoading(false)
}


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

if(user?.userType==='admin'){
return(
  <div className='mx-auto lg:-mt-[65px] max-w-6xl  px-6 lg:px-8'>
      <div className='mt-16 flow-root sm:mt-24'>
        <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
        <div className='flex h-screen flex-col'>
<div className='flex-1 overflow-y-auto p-10'>

            <h1 className='font-roboto text-3xl  font-bold text-dark-soft lg:text-7xl  lg:justify-center lg:items-center xl:text-5xl  md:text-5xl lg:text-center lg:max-w-[540px] '>
           Create <span className='text-dark-spansoft italic font-cursive'> C</span>ommunities
           </h1>
           <div className="mockup-browser mt-6  border border-gray-400 bg-base-300">
  <div className="mockup-browser-toolbar ">
    <div className="input"><span className="text-dark-spansoft text-opacity-80 text-lg font-medium">Create a community, a safe place..</span></div>
  </div>
  <div className="flex justify-center px-4 py-16 bg-base-200">{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn border-2 mt-5 lg:mt-9 border-zinc-300/30 text-[1.5rem] lg:text-zinc-500 px-6 py-2 rounded-full text-full-500 font-semibold bg-gray-300/40 hover:bg-dark-pinkHard/90 hover:text-white transition-all duration-300 lg:h-[60px] lg:w-[60%] lg:mb-8 " onClick={()=>document.getElementById('my_modal_1').showModal()}>Create community</button>
<dialog id="my_modal_1" className="modal text-red-50">
  <div className="modal-box bg-white/80">
    <h3 className="font-bold text-lg text-black">Hello!</h3>
    <p className="py-4 text-black/80">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form onSubmit={handleSubmit} method="dialog">
<div className="flex justify-center  p-10 m-2">
<div className="flex  flex-col">
    <label className="label"><span className="text-base label-text font-bold text-black">Name</span></label>
    <input type="text" placeholder="Type here" className="input text-black  input-bordered w-full max-w-xs" value={name} onChange={(e)=>setName(e.target.value)} />
    {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
    <label className="label"><span className="text-base label-text text-black font-bold" >Description</span></label>
    <textarea className="textarea textarea-bordered text-black" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
    {errors.description && <span className="text-sm text-red-500">{errors.description}</span>}
</div>
</div>
<button type="submit" className="btn bg-dark-hard/70 hover:bg-dark-light text-dark-spansoft"  onClick={async () => {
      if (validateForm()) {
        await document.getElementById('my_modal_1').close();
      }
    }}>
    Submit
  </button>
      </form>
    </div>
  </div>
</dialog></div>
</div>

{/*  */}

</div>
    </div>
        </div>
      </div>
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
