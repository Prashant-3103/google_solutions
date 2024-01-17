import Image from "next/image";
import Link from 'next/link'
const Features = () => {
  return (
    <>
    <section className='container w-full mx-auto flex flex-col px-5 py-5 lg:flex-row   relative bg-[#eba7e7] '>
       <div className=' lg:block lg:w-1/2 relative z-20'>
        <img className='object-contain h-[400px] w-[400px] rounded-lg ml-[100px] mt-10 ' src="/photo.png" alt="users are reading articles" />
      </div>
    <div className='mt-10 lg:w-1/2 z-10'>
        <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft lg:text-4xl xl:text-5xl  md:text-5xl lg:text-left lg:max-w-[540px] '>
        AI Chat Button
        </h1>
        <p className='text-dark-light mt-4 text-center lg:text-base xl:text-xl  md:text-xl lg:text-left'>
        Let's talk empowerment! Our friendly AI, armed with legal smarts, is here to guide you step by step. Share your story, get personalized support, and decide your next steps with ease. Chat with our empathetic friend now!


        </p>
        <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
        </div>
        </div>
    </section>
    <section className='container w-full mx-auto flex flex-col px-5 py-5 lg:flex-row   relative bg-[#ecb9e8] '>
    <div className='mt-10 lg:w-1/2 z-10'>
        <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft lg:text-4xl xl:text-5xl  md:text-5xl lg:text-left lg:max-w-[540px] '>
        Community and One to one chat Button:
        </h1>
        <p className='text-dark-light mt-4 text-center lg:text-base xl:text-xl  md:text-xl lg:text-left'>
        "Join our supportive community. Connect with survivors, share experiences, and find strength in unity. You are not alone."


        </p>
        <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
        </div>
        </div>
        <div className=' lg:block lg:w-1/2 relative z-20'>
        <img className='object-contain h-[400px] w-[400px] rounded-lg ml-[100px] mt-10 ' src="/community.png" alt="users are reading articles" />
      </div>
    </section>
    <section className='container w-full mx-auto flex flex-col px-5 py-5 lg:flex-row   relative bg-[#eba7e7] '>
       <div className=' lg:block lg:w-1/2 relative z-20'>
        <img className='object-contain h-[400px] w-[400px] rounded-lg ml-[100px] mt-10 ' src="/help.png" alt="users are reading articles" />
      </div>
    <div className='  mt-10 lg:w-1/2 z-10'>
        <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft lg:text-4xl xl:text-5xl  md:text-5xl lg:text-left lg:max-w-[540px] '>
        Nearest HelpCenter :
        </h1>
        <p className='text-dark-light mt-4 text-center lg:text-base xl:text-xl  md:text-xl lg:text-left'>
        Centers providing free, local support and services for victims and survivors of rape, sexual assault, sexual abuse and all other forms of sexual violence .

        </p>
        <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
        </div>
        </div>

    </section>

    </>

  );
};

export default Features;
