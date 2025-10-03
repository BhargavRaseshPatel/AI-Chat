import { useContext, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import PastConversation from './components/PastConversation';
import { LeftMenu } from './components/LeftMenu';
import HomePage from './components/HomePage'
import ChatHistory from './components/ChatHistory'
import ChatSection from './components/ChatSection'
import { model } from './model-question'
import { StoreContext } from './context/ChatContext'

function App() {
  const [chat, setChat] = useState(localStorage.getItem("message") || "")
  const navigate = useNavigate()
  const { addtheConversation, setConversation, saveConversationHistory } = useContext(StoreContext)

  const handleAskQuestion = (e) => {
    e.preventDefault();
    let reply = ""
    // let chat = chat.trim()
    if (!chat) {
      return alert("Please enter the question in message box")
    }

    if (model[chat]) {
      reply = model[chat]
    } else {
      reply = "Sorry, Did not understand your query!"
    }

    const data = {
      user: chat,
      bot: reply,
      date: new Date(),
      rating: '',
      feedback: ''
    }

    addtheConversation(data)
    navigate('/chat-section')
    setChat("")
    localStorage.setItem('message', "")
  }

  const handleSaveChat = () => {
    // console.log('conversation', conversation)
    // setConversationHistory((chat) => [...chat, conversation])
    saveConversationHistory()
    navigate('/')
  }

  const clearConversation = () => {
    setConversation([])
    setChat("")
  }

  const handleMessage = (event) => {
    setChat(event.target.value)
    localStorage.setItem('message', event.target.value)
  }

  return (
    <div className='flex h-screen'>
      <div className={`w-[25vw] ${process.env.NODE_ENV === 'test' ? 'block' : 'md:block hidden'}`}>
        <PastConversation closeSheet={() => { }} />
      </div>

      <div className='bg-[#ebe6f5] md:w-[75vw] w-[100vw] p-4 pt-4  h-screen relative'>
        <header className='flex items-center gap-2 ml-2'>
          <LeftMenu />
          <h1 className='text-[#9785BA] text-[28px] font-bold'>Bot AI</h1>
        </header>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/history' element={<ChatHistory />} />
          <Route path='/chat-section' element={<ChatSection />} />
        </Routes>

        <div>
          <form onSubmit={handleAskQuestion}>
            <div className='flex gap-2 absolute bottom-2 w-full right-1 left-1'>
              <input type="text" className='border-1 bg-white w-full p-2'
                placeholder='Message Bot AI...' value={chat} onChange={handleMessage} name="" id="" />
              <button type='submit' className='button' >Ask</button>
              <button type='button' className='button' onClick={handleSaveChat}>Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
