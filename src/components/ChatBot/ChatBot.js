import React, { useState, useEffect } from 'react';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './ChatBot.css'

function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [currentLanguage, setCurrentLanguage] = useState('Spanish');

    const addMessage = (text, isUser = false) => {
        const newMessage = { text, isUser };
        setMessages((prevState) => [...prevState, newMessage]);
    };

    const handleLanguageChange = (newLanguage) => {
        setCurrentLanguage(newLanguage);
    };

    useEffect(() => {
        setMessages([])
        addMessage(currentLanguage === "Spanish" ? "¡Hola! Soy el ChatBot. ¿En qué puedo ayudarte?" : "Hello! I am the ChatBot. How can I help you?");
    }, [currentLanguage]);

    return (
        <div className="chatbot-container">
            <LanguageSwitcher
                onChangeLanguage={handleLanguageChange}
                currentLanguage={currentLanguage}
            />
            <MessageList messages={messages} />
            <MessageInput onSendMessage={addMessage} currentLanguage={currentLanguage} />
        </div>
    );
}

export default ChatBot;