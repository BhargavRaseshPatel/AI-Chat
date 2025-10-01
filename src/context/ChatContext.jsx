import { createContext } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [conversationHistory, setConversationHistory] = ([{
        user: 'abc',
        bot: "shdfhsi"
    }])

    const contextValue = {
        conversationHistory,
        // setConversationHistory
    }

    return (
        <StoreContext.Provider value={conversationHistory}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider; 

