import Image from 'next/image'
import React from 'react'
import { FiSearch } from "react-icons/fi"

const Hero = () => {
  return (
    <>
      <section className='container w-full mx-auto flex flex-col px-5 py-5 lg:flex-row  md:m-5 relative bg-[#fff4f2] '>
      <div className='mt-10 lg:w-1/2 z-10'>
          <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft lg:text-4xl xl:text-5xl  md:text-5xl lg:text-left lg:max-w-[540px] '>
            Journey from <span className='text-dark-spansoft italic font-cursive'>Feelings to Words</span>, a diary of tears and past.
          </h1>
          <p className='text-dark-light mt-4 text-center lg:text-base xl:text-xl  md:text-xl lg:text-left'>
            Welcome to <span>Feelings to Words</span>, your digital haven of inspiration and insight. Dive into our engaging narratives, explore diverse perspectives, and embark on thought-provoking journeys. Join our community where words weave wonders and curiosity knows no bounds.
          </p>
          <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
            <div className='relative'>

            </div>
            <button className='w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 '>Community</button>
          </div>



          <div className='flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
            <span className='text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base'>
              Popular tags:</span>
            <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base '>
              <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Design</li>
              <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User experience</li>
              <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User Interface</li>
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
