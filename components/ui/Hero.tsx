import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiSearch } from "react-icons/fi"

const Hero = () => {
  return (
    <>
      <section className='container w-full mx-auto flex flex-col px-5 py-5 lg:flex-row  relative bg-dark-pinkLight '>
      <div className='mt-10 lg:w-1/2 z-10'>
          <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft lg:text-4xl xl:text-5xl  md:text-5xl lg:text-left lg:max-w-[540px] '>
          Empowering <span className='text-dark-spansoft italic font-cursive'>survivors</span>, one conversation at a time.
          </h1>
          <p className='text-dark-light mt-4 text-center lg:text-base xl:text-xl  md:text-xl lg:text-left'>
          Amidst myths about crimes against women, from domestic violence to cybercrime, finding clear guidance can be overwhelming. Your voice matters, and we're here to simplify the journey, empowering survivors with clarity and unwavering support.

          </p>
          <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
            <div className='relative'>

            </div>
           <div className=" flex flex-wrap gap-x-4 gap-y-2.5 lg:text-sm xl:text-base ">
           <button className='border-2 mt-5 lg:mt-0 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-dark-spansoft hover:text-white transition-all duration-300 '>Community</button>
            <button className='border-2 mt-5 lg:mt-0 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-dark-spansoft hover:text-white transition-all duration-300 '><Link href="/chat-with-us">Chat</Link></button>
            <button className='border-2 mt-5 lg:mt-0 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-dark-spansoft hover:text-white transition-all duration-300 '>Talk to one of us</button>
           </div>

          </div>



          <div className='flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
            <span className='text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base'>
              Feel free to share:</span>
            <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base '>
              <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Stalking</li>
              <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Sexual Assault</li>
              <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Domestic Abuse</li>
              <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Emotional Abuse</li>
            </ul>
          </div>
          </div>
        <div className='hidden lg:block lg:w-1/2 relative z-20'>
          <img className='object-contain h-[400px] w-[400px] rounded-lg ml-[100px] mt-10 ' src="/hero1.png" alt="users are reading articles" />
        </div>

      </section>


    </>
  )
}

export default Hero
