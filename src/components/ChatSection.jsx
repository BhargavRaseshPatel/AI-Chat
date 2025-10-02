import React, { useContext, useState } from 'react'
import ChatItem from './ChatItem'
import { StoreContext } from '../context/ChatContext';

const ChatSection = ({  }) => {
    //   const [conversation, setConversation] = useState(initialConversation);
    const { conversation} = useContext(StoreContext)

    return (
        <div className='mt-5 flex gap-6 flex-col'>
            {conversation?.map((chat, index) => (
                <ChatItem
                    key={index}
                    chat={chat}
                    index={index}
                />
            ))}
        </div>
    )
}

export default ChatSection
