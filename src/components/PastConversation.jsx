import React, { useContext } from 'react'
import { BiEdit } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/ChatContext';

const PastConversation = ({ closeSheet }) => {
    const { clearConversation } = useContext(StoreContext)
    return (
        <div>
            <a href='/' onClick={() => { closeSheet(); clearConversation() }}>
                <div className='bg-[#D7C7F4] flex h-[48px] items-center justify-center gap-3'>
                    <img src="src/assets/bot-icon.svg" alt="" />
                    <p className=' text-2xl'>New Chat</p>
                    <BiEdit className='size-8' />
                </div>
            </a>
            <div className='flex justify-center '>
                <div className='flex justify-center'>
                    <a href="/history" onClick={() => closeSheet()}>
                        <div className=' bg-[#D7C7F4] p-3 m-2 rounded-xl font-bold'>
                            Past Conversations
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PastConversation