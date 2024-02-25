import Image from 'next/image'
import React from 'react'
import Timeline from "@/components/ui/Timeline"
import { BookOpen } from 'lucide-react'
import Carousel from "@/components/ui/Carousel"
import Link from 'next/link'
const page = () => {

  return (
    <div>
        <section className='container w-full mx-auto flex flex-col items-center px-5 py-10 lg:flex-row relative bg-[#fbb2fb] '>
        <div className='lg:flex lg:flex-row mt-3'>
        <div className='lg:block lg:w-1/2 relative '>
          <Image height={2688} width={1536} className='object-contain rounded-lg' src="/blog-page.jpg" alt="users are reading articles" />
        </div>
        <div className='mt-10 lg:w-1/2 z-10 text-center lg:m-6 '>
          <h1 className='font-roboto text-3xl font-bold text-dark-soft lg:text-4xl xl:text-5xl md:text-5xl lg:text-left lg:max-w-[540px]'>
            Write and share blogs
          </h1>
          <p className='text-dark-light mt-4  lg:text-6xl lg:font-semibold xl:text-xl md:text-xl lg:text-left'>
            Use this platform to share your experiences, learning to spread awareness and knowledge to the women out there and make them equipped with the understanding and wisdom,
            This platform let's you write blogs, add images and icons of your choice and gives you an option to publish or unpublish the blog as per your will.
          </p>
          <div className='mt-5 lg:mt-20 border-2 px-3 py-3 rounded-md border-[#f3d0f3]'>
          <ul className="timeline timeline-vertical">
  <li>
    <div className="timeline-start timeline-box">Join platform</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <hr className="bg-primary"/>
  </li>
  <li>
  <hr className="bg-primary"/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box">Write blogs</div>
    <hr className="bg-primary"/>
  </li>
  <li>
    <hr className="bg-primary"/>
    <div className="timeline-start timeline-box">Publish blogs</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <hr/>
  </li>
</ul>
          </div>
        </div>
        </div>
      </section>
          <div className='flex flex-col  items-center justify-between bg-[#fbb2fb]'>
         <button className='border-2  font-roboto mt-5 lg:mt-9 border-[#c7678c] text-[1.5rem] lg:text-zinc-100 px-6 py-2 rounded-full text-full-500 font-semibold bg-[#d77c9f]/80 hover:bg-dark-pinkHard hover:text-white transition-all duration-300  lg:mb-8 '><Link href="https://note-taking-app-umber.vercel.app/documents">Go to blogs</Link></button>
          </div>
          {/* <div className="dropdown dropdown-right dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

   <li><Link href="/blogs/j57dk93p733rynz6s2a3cb70m16m2tbm">blog2</Link></li>
   <li><Link href="/blogs/j57btfvyp99y3jcsvr98ax16rh6m40s9">blog3</Link></li>
   <li><Link href="/blogs/j57313j6rw1cdj052f2r19m5a96m58tq">blog4</Link></li>
  </ul>
</div> */}
<Carousel/>

    </div>

  )
}

export default page
