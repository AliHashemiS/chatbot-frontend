import React from 'react';
import './MessageList.css'

function MessageList({ messages }) {
    return (
        <div className="message-list">
            {messages.map((message, index) => (
                <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
                    {message.text}
                </div>
            ))}
        </div>
    );
}

export default MessageList;