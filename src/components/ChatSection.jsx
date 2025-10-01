import React, { useContext, useState } from 'react'
import ChatItem from './ChatItem'
import { StoreContext } from '../context/ChatContext';

const ChatSection = ({  }) => {
    //   const [conversation, setConversation] = useState(initialConversation);
    const { conversationHistory} = useContext(StoreContext)

    const updateFeedback = (index, feedback) => {
        setConversation((prev) =>
            prev.map((chat, i) => i === index ? { ...chat, feedback } : chat)
        );
    };

    const updateRating = (index, rating) => {
        setConversation((prev) =>
            prev.map((chat, i) => i === index ? { ...chat, rating } : chat)
        );
    };

    return (
        <div className='mt-5 flex gap-6 flex-col'>
            { conversationHistory?.map((chat, index) => (
                <ChatItem
                    key={index}
                    chat={chat}
                    index={index}
                    onFeedback={updateFeedback}
                    onRating={updateRating}
                />
            ))}
        </div>
    )
}

export default ChatSection
