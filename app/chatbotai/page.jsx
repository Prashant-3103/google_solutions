"use client"
import './style.css'
import { useState } from "react";
import {sendMessageToDialogflow} from "@/lib/dialogflow"
const page = () => {
const[messages,setMessages] = useState([])
const [userInput, setUserInput] = useState('');
const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!userInput) return;
    // Send user input to Dialogflow and receive a response
    const response = await sendMessageToDialogflow(userInput);
    // Update the messages state with the user's message and Dialogflow's response
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userInput, type: 'user' },
      { text: response, type: 'bot' },
    ]);
    // Clear the user input field
    setUserInput('');
  };

    return (
        <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleUserInput}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    );
}

export default page;
