import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatHistory from './components/ChatHistory';
import { LeftMenu } from './components/LeftMenu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-screen'>
      <div className='w-[25vw] lg:block hidden'>
        <ChatHistory />
      </div>

      <div className='bg-[#ebe6f5] lg:w-[75vw] w-[100vw] p-2 pt-4  h-screen relative'>
        <div className='flex items-center gap-2 ml-2'>
          <LeftMenu />
          <p className='text-[#9785BA] text-[28px] font-bold'>Bot AI</p>
        </div>

        <div className='h-full w-full flex justify-center flex-col items-center gap-2' >
          <h1 className='text-[28px] '>How Can I Help You Today ?</h1>
          <img src="src/assets/bot-icon.svg" alt="" className='h-[100px] w-[100px]' />
        </div>

        <div className='absolute bottom-2 left-4 w-full'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-3 mb-10'>
            <div className='home-card'>
              <h2>Hi, what is the weather</h2>
              <p>Get immediate AI generated response</p>
            </div>

            <div className='home-card'>
              <h2>Hi, what is my location</h2>
              <p>Get immediate AI generated response</p>
            </div>

            <div className='home-card'>
              <h2>Hi, what is the temperature</h2>
              <p>Get immediate AI generated response</p>
            </div>

            <div className='home-card'>
              <h2>Hi, how are you</h2>
              <p>Get immediate AI generated response</p>
            </div>
          </div>
          <div className='flex gap-2 '>
            <input type="text" className='border-1 bg-white w-full' name="" id="" />
            <button className='button'>Ask</button>
            <button className='button'>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
