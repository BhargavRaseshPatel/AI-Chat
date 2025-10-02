import React, { useContext, useState } from 'react'
import { BiLike } from "react-icons/bi";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { FeedbackDialog } from './FeedbackDialog';
import { StoreContext } from '../context/ChatContext';

const ChatItem = ({ chat, index, }) => {
    const [displayRating, setDisplayRating] = useState(false);
    const { updateRating } = useContext(StoreContext)

    return (
        <div>
            <div className='chat-card'>
                <img src="src/assets/person.svg" alt="" />
                <div>
                    <span>You</span>
                    <p>{chat.user}</p>
                    <p className='text-sm mt-2 text-gray-500'>
                        {new Date(chat.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                    </p>
                </div>
            </div>

            <div className='chat-card mt-3 relative'>
                <img src="src/assets/bot.svg" alt="" />
                <div>
                    <span>Soul AI</span>
                    <p>{chat.bot}</p>

                    <div className='mt-2 flex gap-5 items-center'>
                        <p className='text-sm text-gray-500'>
                            {new Date(chat.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                        </p>
                        <BiLike className='size-5 hover:cursor-pointer' onClick={() => setDisplayRating(true)} />
                        <FeedbackDialog
                            chat={chat}
                            index={index}
                        />
                    </div>

                    {displayRating &&
                        <div>
                            <p className='text-sm mt-5'>Rate this response</p>
                            <div className='flex'>
                                {[1, 2, 3, 4, 5].map((val) =>
                                    chat.rating >= val ? (
                                        <IoIosStar
                                            key={val}
                                            className='size-5'
                                            onClick={() => updateRating(index, val)}
                                        />
                                    ) : (
                                        <IoIosStarOutline
                                            key={val}
                                            className='size-5'
                                            onClick={() => updateRating(index, val)}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    }

                    {chat.feedback &&
                        <p className='mt-2 text-xl'>
                            <span className='font-bold'>Feedback : </span>{chat.feedback}
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatItem
