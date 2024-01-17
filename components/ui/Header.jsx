"use client"
import Link from "next/link";
import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from 'react-icons/ai';
import {useRouter} from "next/navigation";
import Logo from "@/assets/logo.jpg"
import Image from "next/image";
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app, firestore } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";
const navItemsInfo = [
    { name: "Home", type: "link", href: "/" },
    { name: "Articles",type: "link", href: "/articles" },
    { name: "Pages",type: "dropdown",items: [{title: 'About us', href: "/about"},
    {title: 'Contact us', href: "/contact"}]  },
    { name: "Pricing",type: "link", href: "pricing" },
    { name: "Faq",type: "link", href: "/faq" },
];


const NavItem=({item})=>{
    const [dropdown, setDropDown] = useState(false);
const toggleDropDownHandler= ()=>{
    setDropDown((curState)=>{
        return !curState;
    })
}




return (
    <li className="relative group">
{item.type==="link" ? (
    <>
    <Link href={item.href} className="px-4 py-2">{item.name}</Link>
    <span className='cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
    </>
) : (
    <div className='flex flex-col items-center'>
 <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropDownHandler}
          >
             <span>{item.name}</span>
            <AiOutlineDown/>
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
  <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
{item.items.map((page ,index)=>(

    <Link
key={index}
    href={page.href} className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>
{page.title}
    </Link>


))}
</ul>
            </div>

    </div>
)}
    </li>
)
}

const Header = () =>{
const router = useRouter()
const [navIsVisible, setNavIsVisible] = useState(false);
const [profileDropdown, setProfileDropdown] = useState(false);
const [loggedIn , setLoggedIn] = useState(false)
const auth = getAuth(app)
 const [user, setUser] = useState(null)


useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      const useRef = doc(firestore, "users", user.uid);
      const userSnap = await getDoc(useRef);

      if (userSnap.exists()) {
        const userData = userSnap.data()
        setUser(userData);
        setLoggedIn(true);
      } else {
        setUser(null);
        setLoggedIn(false); // Assuming you want to set to false if the user doesn't exist
        router.push('/login');
        toast.error("User data not found. Please log in again.");
      }
    } else {
      setUser(null);
      setLoggedIn(false);
      router.push('/login');
      toast.error("Please log in first to chat");
    }
  });

  return () => unsubscribe();
},[auth,router])




const navVisibilityHandler = () => {

    setNavIsVisible((curState) => {
        return !curState;
    });
}
const logoutHandler = async () => {
  try {
    await signOut(auth);
    setLoggedIn(false);
    router.push('/');
    toast.success('Logout successful!');
  } catch (error) {
    toast.error('An error occurred during logout. Please try again.');
  }
};

        return (
            <section className="sticky top-0 left-0 right-0 z-50 bg-dark-pinkHard">
            <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="logo"
                        className="w-16 object-cover rounded-full border-4 border-gray-300 hover:border-blue-200 shadow-lg hover:shadow-xl transition duration-300"
                    />
                </Link>
                <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-[#ba1aae] lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >

                    <ul className='flex flex-col items-center gap-y-5 lg:flex-row gap-x-2 font-extrabold text-white lg:text-white'>
                        {navItemsInfo.map((item) => (
                            <NavItem key={item.name} item={item}/>
                        ))}
                    </ul>
                    { loggedIn?
                 (
                     <div className='flex flex-col items-center gap-y-5 lg:flex-row gap-x-2 font-semibold text-white lg:text-dark-soft'>

<div className='relative group'>
<div className='flex flex-col items-center'>
           <button
            className="flex gap-x-1 items-center border-2 mt-5 lg:mt-0 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-dark-spansoft hover:text-white transition-all duration-300 "
            onClick={()=>setProfileDropdown(!profileDropdown)}
          >
            <span>Account</span>
            <AiOutlineDown/>
          </button>
                <div
            className={`${
              profileDropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
  <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">


<button
type='button' onClick={()=>router.push('/profile')}
    className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft '>
Profile Page  </button>


    <button onClick={logoutHandler}
type='button'
    className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>
Logout    </button>

</ul>
            </div>
            </div>
</div>


                    </div>)
                    : <button onClick={()=>router.push('/login')}
                     className='border-2 mt-5 lg:mt-0 border-blue-500 text-black px-6 py-2 rounded-full text-full-500 font-extrabold hover:bg-dark-spansoft hover:text-white transition-all duration-300'>
                        Sign in
                        </button> }

                </div>
            </header>
        </section>
        )
}
export default Header
