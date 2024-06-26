import { createContext } from 'react';

const ChatContext = createContext();  

const MessageUI = ({ children }) => {

        <ChatContext.Provider>
            {children}
        </ChatContext.Provider>;
    
    };
export default MessageUI;

