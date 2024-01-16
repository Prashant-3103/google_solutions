"use client"

import { useRouter } from "next/navigation";
import {  useState } from "react";

import Link from "next/link";
import {auth} from "../../lib/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

const Page = () => {

    const[email,setEmail] = useState("")
    const[password, setPassword] = useState("")

    const[errors, setErrors] = useState({})
    const [loading,setLoading] = useState(false)
    const router = useRouter()



const validateForm = ()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {}

    if(!email.trim() || !emailRegex.test(email)){
        newErrors.email="Email is invalid"
    }
    if(password.length<6){
        newErrors.password="Password must be at least 6 characters"
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
const userCredentials = await signInWithEmailAndPassword(auth,email,password)
const user = userCredentials.user
if(user){
    router.push('/')
}

toast.success("Successfully logged in")
router.push('/')
setErrors({})
    } catch (error) {
console.log(error);
if(error.message==="Firebase: Error (auth/invalid-credential)."){
    toast.error("Error (auth/invalid-credential)")
}


    }
    setLoading(false)
}
    return (
        <div className="flex justify-center items-center  p-10 m-2">
<form onSubmit={handleSubmit} className="space-y-4 w-full max-w-2xl shadow-lg p-10">
<h1 className="text-xl text-center font-semibold text-dark-spansoft">Feel Free to <span className="font-bold text-dark-soft">Login</span> and <span className="font-bold text-dark-soft">Chat</span> with us</h1>



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
    <button type="submit" className="btn btn-block bg-dark-soft text-dark-spansoft">
        {
        loading ? <span className="loading loading-spinner loading-sm"></span> : 'Login'}
        </button>
</div>
<span className="text-sm  text-dark-soft mt-4">Yet to connect with us ? {" "} <Link href="/register" className="text-dark-spansoft  hover:underline">Register</Link></span>

</form>
        </div>
     );
}

export default Page;
