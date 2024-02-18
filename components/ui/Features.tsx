import Image from "next/image";
import Link from 'next/link';

const Features = () => {
  return (
    <>
      <section className='container w-full mx-auto flex flex-col items-center px-5 py-5 lg:flex-row relative bg-[#f3d0f6] '>
        <div className='lg:block lg:w-1/2 relative z-20'>
          <img className='object-contain h-[400px] w-[400px] rounded-lg ml-[100px] mt-10 ' src="/photo.png" alt="users are reading articles" />
        </div>
        <div className='mt-10 lg:w-1/2 z-10 text-center'>
          <h1 className='font-roboto text-3xl font-bold text-dark-soft lg:text-4xl xl:text-5xl md:text-5xl lg:text-left lg:max-w-[540px]'>
            AI Chat Button
          </h1>
          <p className='text-dark-light mt-4  lg:text-6xl lg:font-semibold xl:text-xl md:text-xl lg:text-left'>
            Let's talk empowerment! Our friendly AI, armed with legal smarts, is here to guide you step by step. Share your story, get personalized support, and decide your next steps with ease. Chat with our empathetic friend now!
          </p>
          <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
            <button className='border-2 mt-5 lg:mt-9 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold bg-sky-100/50 hover:bg-dark-pinkHard hover:text-white transition-all duration-300 lg:h-[60px] lg:w-fit '>AI Chatbot</button>
          </div>
        </div>
      </section>

      <section className='container w-full mx-auto flex flex-col items-center px-5 py-5 lg:flex-row relative bg-[#ecb9e8] '>
        <div className='mt-10 lg:w-1/2 z-10 text-center'>
          <h1 className='font-roboto text-3xl font-bold text-dark-soft lg:text-4xl xl:text-5xl md:text-5xl lg:text-left lg:max-w-[540px]'>
            Community and One to one chat Button:
          </h1>
          <p className='text-dark-light lg:text-6xl lg:font-semibold mt-4  xl:text-xl md:text-xl lg:text-left'>
            "Join our supportive community. Connect with survivors, share experiences, and find strength in unity. You are not alone."
          </p>
          <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
            <button className='border-2 lg:h-[60px] lg:w-fit mt-5 lg:mt-9 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold bg-sky-100/50 hover:bg-dark-pinkHard hover:text-white transition-all duration-300  '>Community Chat</button>
          </div>
        </div>
        <div className='lg:block lg:w-1/2 relative z-20'>
          <img className='object-contain h-[400px] w-[400px] rounded-lg ml-[100px] mt-10 ' src="/community.png" alt="users are reading articles" />
        </div>
      </section>

      <section className='container w-full mx-auto flex flex-col items-center px-5 py-5 lg:flex-row relative bg-[#fbe6f7] '>
        <div className='lg:block lg:w-1/2 relative z-20'>
          <img className='object-contain h-[400px] w-[400px] rounded-lg ml-[100px] mt-10 ' src="/help.png" alt="users are reading articles" />
        </div>
        <div className='mt-10 lg:w-1/2 z-10 text-center'>
          <h1 className='font-roboto text-3xl font-bold text-dark-soft lg:text-4xl xl:text-5xl md:text-5xl lg:text-left lg:max-w-[540px]'>
            Nearest HelpCenter :
          </h1>
          <p className='text-dark-light mt-4 lg:text-base xl:text-xl md:text-xl lg:text-left'>
            Centers providing free, local support and services for victims and survivors of rape, sexual assault, sexual abuse and all other forms of sexual violence.
          </p>
          <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative items-center justify-between'>
            <button className='border-2 mt-5 lg:mt-9 border-blue-500 text-[1.5rem] lg:text-zinc-500 px-6 py-2 rounded-full text-full-500 font-semibold bg-sky-100/50 hover:bg-dark-pinkHard hover:text-white transition-all duration-300 lg:h-[60px] lg:w-[60%] lg:mb-8 '>Help Center</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
