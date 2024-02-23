import React from 'react'

const ChatWithAi = () => {
  return (
   <div>
     <div>
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

   </div>
  )
}

export default ChatWithAi
