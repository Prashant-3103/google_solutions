import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
  <div>
    <section className='container w-full mx-auto flex flex-col items-center px-5 py-5 lg:flex-row relative background-ai'>
      <div className='lg:flex lg:flex-row mt-3'>
      <div className='lg:block lg:w-1/2 relative '>
          <Image height={2688} width={1536} className='image-ai object-contain rounded-lg' src="/ai-chat.jpg" alt="users are reading articles" />
        </div>
        <div className='mt-10 lg:w-1/2 z-10 text-center lg:m-6 '>
          <h1 className='font-roboto text-3xl font-bold text-dark-soft lg:text-4xl xl:text-5xl md:text-5xl lg:text-left lg:max-w-[540px]'>
            AI Chat Bot
          </h1>
          <p className='text-red-300 mt-4  lg:text-6xl lg:font-semibold xl:text-xl md:text-xl lg:text-left'>
            Let's talk empowerment! Our friendly AI, armed with legal smarts, is here to guide you step by step. Share your story, get personalized support, and decide your next steps with ease. Chat with our empathetic friend now!
          </p>
          <div className='mt-5  lg:mt-30 px-3 py-3 rounded-md border-[#f5bbf5]'>
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
    <div className="timeline-end timeline-box">Talk to bot</div>
    <hr className="bg-primary"/>
  </li>
  <li>
    <hr className="bg-primary"/>
    <div className="timeline-start timeline-box">Get your answers</div>
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
 <link rel="stylesheet" href="" />
      <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
      <df-messenger
        project-id="women-helping-hand"
        agent-id="41d53599-4960-4de2-8a58-29a18522d151"
        language-code="en"
      >
        <df-messenger-chat-bubble chat-title="Saheli"></df-messenger-chat-bubble>
      </df-messenger>
      <style>
        {`
          df-messenger {
            z-index: 999;
            position: fixed;
            bottom: 16px;
            right: 16px;
          }
        `}
      </style>
  </div>


  )
}

export default page
