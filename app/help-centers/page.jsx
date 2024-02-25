import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <h1 className='font-roboto text-3xl  py-4 justify-center mx-auto  font-bold text-dark-soft lg:text-4xl xl:text-5xl  md:text-5xl  lg:max-w-[540px] '>
          This feature is still in  <span className='text-dark-spansoft italic font-cursive'>Production</span>
          </h1>
  <section className='container w-full mx-auto lg:items-center lg:mx-auto lg:justify-center flex flex-col items-center px-5 py-5 lg:flex-row relative  bg-[#f3d0f6] '>

<div className=' lg:block  relative z-20'>
    <Image height={1100} width={1100} className='object-contain lg:mr-3 lg:mt-12 header-img h-[400px] w-[400px] rounded-lg' src="/help.png" alt="users are reading articles" />
  </div>
  <div className='mt-10 lg:w-1/2 z-10 px-10 py-2 h-[400px] w-[400px]  text-center header-img'>
    <h1 className='font-roboto text-3xl font-bold text-dark-soft lg:text-4xl xl:text-5xl md:text-5xl lg:text-left lg:max-w-[540px]'>
    Nearerst help-centers
    </h1>
    <p className='text-dark-light mt-4  lg:text-6xl lg:font-semibold xl:text-xl md:text-xl lg:text-left'>
    Centers providing free, local support and services for victims and survivors of rape, sexual assault, sexual abuse and all other forms of sexual violence.
    </p>

  </div>

</section>
    </>

  )
}

export default page
