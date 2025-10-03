// Removed unused React import

import { useContext, useEffect } from "react";
import { BiLike } from "react-icons/bi";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { StoreContext } from "../context/ChatContext";

const ChatHistory = () => {
    const { conversationHistory } = useContext(StoreContext)

    return (
        <div className="flex justify-center flex-col">
            <p className="text-[28px] font-bold text-center mb-10">Conversation History</p>
            {conversationHistory.map((chat, index) => (
                <div key={index} className="bg-[#BFACE2] border-r-[10px] mb-5 rounded-[10px] scroll-auto">

                    <div className="">
                        <div className='chat-card-history bg-transparent'>
                            <img src="src/assets/person.svg" alt="" />
                            <div>
                                <h1>You</h1>
                                <div>{chat.user}</div>
                                <p className='text-sm mt-2 text-gray-500'>
                                    {new Date(chat.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                                </p>
                            </div>
                        </div>

                        <div className='chat-card-history mt-3 relative bg-transparent'>
                            <img src="src/assets/bot.svg" alt="" />
                            <div>
                                <h1>Soul AI</h1>
                                <p>{chat.bot}</p>

                                <div className='mt-2 flex gap-5 items-center'>
                                    <p className='text-sm text-gray-500'>
                                        {new Date(chat.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                                    </p>

                                {chat.rating && <div>
                                    <div className='flex'>
                                        {[1, 2, 3, 4, 5].map((val) =>
                                            chat.rating >= val ? (
                                                <IoIosStar
                                                    key={val}
                                                    className='size-5'
                                                />
                                            ) : (
                                                <IoIosStarOutline
                                                    key={val}
                                                    className='size-5'
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                                }
                                </div>



                                {chat.feedback &&
                                    <p className='mt-2 text-xl'>
                                        <span className='font-bold'>Feedback : </span>{chat.feedback}
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChatHistory