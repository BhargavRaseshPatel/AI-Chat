import React from 'react'
import { BiEdit } from "react-icons/bi";
import { Link } from 'react-router-dom';

const PastConversation = ({ clearConversation }) => {
    return (
        <div>
            <Link to='/' onClick={clearConversation}>
                <div className='bg-[#D7C7F4] flex h-[48px] items-center justify-center gap-3'>
                    <img src="src/assets/bot-icon.svg" alt="" />
                    <p className=' text-2xl'>New Chat</p>
                    <BiEdit className='size-8' />
                </div>
            </Link>
            <div className='flex justify-center '>
                <Link to='/chat-history'>
                    <p className=' bg-[#D7C7F4] p-3 m-2 rounded-xl font-bold'>Past Conversations</p>
                </Link>
            </div>
        </div>
    )
}

export default PastConversation