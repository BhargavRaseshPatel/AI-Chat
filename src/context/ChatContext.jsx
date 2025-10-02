import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [conversationHistory, setConversationHistory] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('conversations')) || [];
        } catch (error) {
            console.error("Error parsing conversations from localStorage:", error);
            return [];
        }
    });
    const [conversation, setConversation] = useState([])

    const addtheConversation = (chat) => {
        setConversation((chatHistory) => [...chatHistory, chat])
    }

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

    const clearConversation = () => {
        setConversation([])
    }

    const saveConversationHistory = () => {
        // console.log(...conversation)
        const updatedHistory = [ ...conversation,...conversationHistory,]
        setConversationHistory(updatedHistory)
        localStorage.setItem('conversations', JSON.stringify(updatedHistory))
    }

    const contextValue = {
        conversationHistory,
        setConversationHistory,
        conversation, setConversation,
        addtheConversation,
        updateFeedback, updateRating,
        saveConversationHistory, clearConversation
    }

    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;

