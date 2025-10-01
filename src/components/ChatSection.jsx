import React, { useState } from 'react'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const ChatSection = ({ conversation }) => {
    return (
        <div className='mt-5 flex gap-6 flex-col'>
            {conversation.map((chat, index) => {
                const [displayRating, setDisplayRating] = useState(false)
                return (
                    <div key={index}>
                        <div className='chat-card'>
                            <img src="src/assets/person.svg" alt="" />
                            <div>
                                <h1>You</h1>
                                <p>{chat.user}</p>
                                <p className='text-sm mt-2 text-gray-500'>{new Date(chat.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                            </div>
                        </div>

                        <div className='chat-card mt-3 relative'>
                            <img src="src/assets/bot.svg" alt="" />
                            <div>
                                <h1>Soul AI</h1>
                                <p>{chat.bot}</p>

                                <div className='mt-2 flex gap-5 items-center'>
                                    <p className='text-sm  text-gray-500'>{new Date(chat.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                                    <BiLike className='size-5 hover:cursor-pointer' onClick={() => setDisplayRating(true)}/>
                                    <BiDislike className='size-5 ml-[-8px] hover:cursor-pointer' />
                                </div>
                                {displayRating &&
                                    <div>
                                        <p className='text-sm mt-5'>Rate this response</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ChatSection