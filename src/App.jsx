import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import PastConversation from './components/PastConversation';
import { LeftMenu } from './components/LeftMenu';
import HomePage from './components/HomePage'
import ChatHistory from './components/ChatHistory'
import ChatSection from './components/ChatSection'
import { model } from './model-question'

function App() {
  const [count, setCount] = useState(0)
  const [conversation, setConversation] = useState([])
  const [conversationHistory, setConversationHistory] = useState([])
  const [chat, setChat] = useState("")
  const navigate = useNavigate()

  const handleAskQuestion = () => {
    let reply = ""
    if (!chat) {
      return alert("Please enter the question in message box")
    }

    if (model[chat]) {
      reply = model[chat]
    } else {
      reply = "Sorry, I did not get your question"
    }

    setConversation((chats) => [...chats, {
      user: chat,
      bot: reply,
      date : new Date()
    }])
    navigate('/chat-section')
    console.log(conversation)
    setChat("")

  }

  const clearConversation = () => {
    setConversation([])
    setChat("")
  }

  return (
    <div className='flex h-screen'>
      <div className='w-[25vw] lg:block hidden'>
        <PastConversation clearConversation={clearConversation}/>
      </div>

      <div className='bg-[#ebe6f5] lg:w-[75vw] w-[100vw] p-4 pt-4  h-screen relative'>
        <div className='flex items-center gap-2 ml-2'>
          <LeftMenu />
          <p className='text-[#9785BA] text-[28px] font-bold'>Bot AI</p>
        </div>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/chat-history' element={<ChatHistory />} />
          <Route path='/chat-section' element={<ChatSection conversation={conversation} />} />
        </Routes>

        <div>
          <div className='flex gap-2 absolute bottom-2 w-full right-1 left-1'>
            <input type="text" className='border-1 bg-white w-full p-2' placeholder='Enter your message' value={chat} onChange={(event) => setChat(event.target.value)} name="" id="" />
            <button className='button' onClick={handleAskQuestion}>Ask</button>
            <button className='button'>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
