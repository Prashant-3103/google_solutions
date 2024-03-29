"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AvatarGenerator } from "random-avatar-generator";
import Link from "next/link";
import {auth,firestore} from "../../lib/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
const Page = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[community,setCommunity] = useState([])
    const [createdCommunities, setCreatedCommunities] = useState([])
    const [userType, setUserType] = useState("user")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassord]= useState("")
    const [avatarUrl, setAvatarUrl] = useState("")
    const[errors, setErrors] = useState({})
    const [loading,setLoading] = useState(false)
    const router = useRouter()
    const generateRandomAvatar= ()=>{
        const generator = new AvatarGenerator()
        return generator.generateRandomAvatar()
    }

    const handleRefreshAvatar = ()=>{
setAvatarUrl(generateRandomAvatar())
    }

    useEffect(()=>{
setAvatarUrl(generateRandomAvatar())
    },[])
const validateForm = ()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {}
    if(!name.trim()){
        newErrors.name="Name is required"
    }
    if(!email.trim() || !emailRegex.test(email)){
        newErrors.email="Email is invalid"
    }


    if(password.length<6){
        newErrors.password="Password must be at least 6 characters"
    }
    if(password!==confirmPassword)
    {
        newErrors.confirmPassword="Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length===0;
}

const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try {
if(!validateForm()) {
    setLoading(false)
    return
}

const userCredentials = await createUserWithEmailAndPassword(auth,email,password,userType,community,createdCommunities)
const user = userCredentials.user
const docRef = doc(firestore,'users',user.uid)
await setDoc(docRef,{
    name,email,avatarUrl,userType,community,createdCommunities
})
router.push('/')
toast.success("successfully registered")
setErrors({})
    } catch (error) {
console.log(error);
toast.error(error.message)
    }
    setLoading(false)
}
    return (
        <div className="flex justify-center items-center  p-10 m-2">
<form onSubmit={handleSubmit} className="space-y-4 w-full max-w-2xl shadow-lg p-10">
<h1 className="text-xl text-center font-semibold text-dark-spansoft">Feel Free to <span className="font-bold text-dark-soft">Register</span> and <span className="font-bold text-dark-soft">Chat</span> with us</h1>
<div className="flex items-center space-y-2 justify-between border border-gray-200">
<img src={avatarUrl}  className="rounded-full h-20 w-20" alt="avatar"/>
<button type="button" className="btn bg-dark-spansoft" onClick={handleRefreshAvatar}>New Avatar</button>
</div>

<div>
    <label className="label"><span className="text-base label-text font-semibold">Name</span></label>
    <input type="text" placeholder="Enter your name" className="w-full input input-bordered" value={name} onChange={(e)=>setName(e.target.value)}/>
    {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
</div>
<div>
    <label className="label"><span className="text-base label-text font-semibold">Email</span></label>
    <input type="email" placeholder="Enter your email" className="w-full input input-bordered" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
</div>
<div>
    <label className="label"><span className="text-base label-text font-semibold">Password</span></label>
    <input type="password" placeholder="Enter your password" className="w-full input input-bordered" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    {errors.password && <span className="text-sm text-red-500">{errors.password}</span>}
</div>
<div>
    <label className="label"><span className="text-base label-text font-semibold">Confirm Password</span></label>
    <input type="password" placeholder="Confirm your password" className="w-full input input-bordered" value={confirmPassword} onChange={(e)=>setConfirmPassord(e.target.value)}/>
    {errors.confirmPassword && <span className="text-sm text-red-500">{errors.confirmPassword}</span>}
</div>

<div>
    <button type="submit" className="btn btn-block bg-dark-soft text-dark-spansoft">
        {
        loading ? <span className="loading loading-spinner loading-sm"></span> : 'Register'}
        </button>
</div>
<span className="text-sm  text-dark-soft mt-4">Aready registered with us ? {" "} <Link href="/login" className="text-dark-spansoft  hover:underline">Login</Link></span>

</form>
        </div>
     );
}

export default Page;
