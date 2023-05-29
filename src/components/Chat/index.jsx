import React from 'react'
import './chat.css'
import { BsFillChatSquareFill } from "react-icons/bs";
import ReactWhatsapp from 'react-whatsapp';

const Chat = () => {
  return (
    <div className='inner chat-container'>
        <div className='chat flex'>
            <ReactWhatsapp number='+65 8484 9948' message='Thankyou!' className='chat-icon'><BsFillChatSquareFill /></ReactWhatsapp>
        </div>
    </div>
  )
}

export default Chat
