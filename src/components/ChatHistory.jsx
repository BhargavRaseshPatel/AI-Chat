// Removed unused React import

import { BiLike } from "react-icons/bi";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const ChatHistory = ({ history }) => {
    return (
        <div>
            {history.map((chat, index) => (
                <div key={index}>
                    <p className='text-[28px] text-center'>Conversation History</p>

                    <div>
                        <div className='chat-card'>
                            <img src="src/assets/person.svg" alt="" />
                            <div>
                                <h1>You</h1>
                                <p>{chat.user}</p>
                                <p className='text-sm mt-2 text-gray-500'>
                                    {new Date(chat.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                                </p>
                            </div>
                        </div>

                        <div className='chat-card mt-3 relative'>
                            <img src="src/assets/bot.svg" alt="" />
                            <div>
                                <h1>Soul AI</h1>
                                <p>{chat.bot}</p>

                                <div className='mt-2 flex gap-5 items-center'>
                                    <p className='text-sm text-gray-500'>
                                        {new Date(chat.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                                    </p>
                                    <BiLike className='size-5 hover:cursor-pointer' onClick={() => setDisplayRating(true)} />
                                    <FeedbackDialog
                                        chat={chat}
                                        onSubmitFeedback={(feedback) => onFeedback(index, feedback)}
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
                                                        onClick={() => onRating(index, val)}
                                                    />
                                                ) : (
                                                    <IoIosStarOutline
                                                        key={val}
                                                        className='size-5'
                                                        onClick={() => onRating(index, val)}
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
                </div>
            ))}
        </div>
    )
}

export default ChatHistory