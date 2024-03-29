import Image from "next/image";
import Link from 'next/link';

const Features = () => {
  return (
    <>
      <section className='container w-full mx-auto lg:items-center lg:mx-auto lg:justify-center flex flex-col items-center px-5 py-5 lg:flex-row relative bg-[#f3d0f6] '>
        <div className='lg:block  relative z-20'>
          <Image height={1100} width={1100} className='object-contain lg:mr-3 lg:mt-12 header-img h-[400px] w-[400px] rounded-lg' src="/photo.png" alt="users are reading articles" />
        </div>
        <div className='mt-10 lg:w-1/2 z-10 px-10 py-2 h-[400px] w-[400px]  text-center header-img'>
          <h1 className='font-roboto text-3xl font-bold text-dark-soft lg:text-4xl xl:text-5xl md:text-5xl lg:text-left lg:max-w-[540px]'>
            AI Chat Button
          </h1>
          <p className='text-dark-light mt-4  lg:text-6xl lg:font-semibold xl:text-xl md:text-xl lg:text-left'>
            Let's talk empowerment! Our friendly AI, armed with legal smarts, is here to guide you step by step. Share your story, get personalized support, and decide your next steps with ease. Chat with our empathetic friend now!
          </p>
          <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative items-center justify-between'>
            <button  className='border-2 mt-5 lg:mt-9 border-blue-500 text-[1.5rem] lg:text-zinc-500 px-6 py-2 rounded-full text-full-500 font-semibold bg-sky-100/50 hover:bg-dark-pinkHard hover:text-white transition-all duration-300 lg:h-[60px] lg:w-[60%] lg:mb-8 '><Link href="/chat-with-ai">Ai chat bot</Link></button>
          </div>
        </div>
      </section>

      <section className='container w-full mx-auto lg:items-center lg:mx-auto lg:justify-center flex flex-col items-center px-5 py-5 lg:flex-row relative bg-[#f3d0f6] '>
      <div className='lg:block  relative z-20 '>
          <Image height={1100} width={1100} className='object-contain lg:mr-3 lg:mt-12 header-img h-[400px] w-[400px] rounded-lg' src="/community.png" alt="users are reading articles" />
        </div>
        <div className='mt-10 lg:w-1/2 z-10 px-10 py-2 h-[400px] w-[400px]  text-center header-img'>
          <h1 className='font-roboto text-3xl font-bold text-dark-soft lg:text-4xl xl:text-5xl md:text-5xl lg:text-left lg:max-w-[540px]'>
            Community and One to one chat Button:
          </h1>
          <p className='text-dark-light lg:text-6xl lg:font-semibold mt-4  xl:text-xl md:text-xl lg:text-left'>
            "Join our supportive community. Connect with survivors, share experiences, and find strength in unity. You are not alone."
          </p>
          <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative items-center justify-between'>
            <button  className='border-2 mt-5 lg:mt-9 border-blue-500 text-[1.5rem] lg:text-zinc-500 px-6 py-2 rounded-full text-full-500 font-semibold bg-sky-100/50 hover:bg-dark-pinkHard hover:text-white transition-all duration-300 lg:h-[60px] lg:w-[60%] lg:mb-8 '><Link href="/community-chat">Community Chat</Link></button>
          </div>
        </div>

      </section>

      <section className='container w-full mx-auto lg:items-center lg:mx-auto lg:justify-center flex flex-col items-center px-5 py-5 lg:flex-row relative  bg-[#f3d0f6]'>
        <div className='lg:block  relative z-20 '>
          <Image height={1100} width={1100} className='object-contain lg:mr-3 lg:mt-12 header-img h-[400px] w-[400px] rounded-lg' src="/help.png" alt="users are reading articles" />
        </div>
        <div className='mt-10 lg:w-1/2 z-10 px-10 py-2 h-[400px] w-[400px]  text-center header-img'>
          <h1 className='font-roboto text-3xl font-bold text-dark-soft lg:text-4xl xl:text-5xl md:text-5xl lg:text-left lg:max-w-[540px]'>
            Nearerst help-centers
          </h1>
          <p className='text-dark-light mt-4  lg:text-6xl lg:font-semibold xl:text-xl md:text-xl lg:text-left'>
            Centers providing free, local support and services for victims and survivors of rape, sexual assault, sexual abuse and all other forms of sexual violence.
          </p>
          <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative items-center justify-between'>
            <button className='border-2 mt-5 lg:mt-9 border-blue-500 text-[1.5rem] lg:text-zinc-500 px-6 py-2 rounded-full text-full-500 font-semibold bg-sky-100/50 hover:bg-dark-pinkHard hover:text-white transition-all duration-300 lg:h-[60px] lg:w-[60%] lg:mb-8 '><Link href="/help-centers">Help centers</Link></button>
          </div>
        </div>
      </section>
      <section className='container w-full mx-auto lg:items-center lg:mx-auto lg:justify-center flex flex-col items-center px-5 py-5 lg:flex-row relative  bg-[#f3d0f6] '>
      <div className=' lg:block  relative z-20'>
          <Image height={1100} width={1100} className='object-contain lg:mr-3 lg:mt-12 header-img h-[400px] w-[400px] rounded-lg' src="/help.png" alt="users are reading articles" />
        </div>
        <div className='mt-10 lg:w-1/2 z-10 px-10 py-2 h-[400px] w-[400px]  text-center header-img'>
          <h1 className='font-roboto text-3xl font-bold text-dark-soft lg:text-4xl xl:text-5xl md:text-5xl lg:text-left lg:max-w-[540px]'>
            Blogs
          </h1>
          <p className='text-dark-light mt-4  lg:text-6xl lg:font-semibold xl:text-xl md:text-xl lg:text-left'>
            Share your experiences and spread awareness to make this world a safer place for women, by using our blog making platform, share and care.
          </p>
          <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative items-center justify-between'>
            <button className='border-2 mt-5 lg:mt-9 border-blue-500 text-[1.5rem] lg:text-zinc-500 px-6 py-2 rounded-full text-full-500 font-semibold bg-sky-100/50 hover:bg-dark-pinkHard hover:text-white transition-all duration-300 lg:h-[60px] lg:w-[60%] lg:mb-8 '><Link href="/blogs">Blogs</Link></button>
          </div>
        </div>

      </section>
    </>
  );
};

export default Features;
