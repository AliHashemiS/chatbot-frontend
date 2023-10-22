import React, { useState } from 'react';
import './MessageInput.css'

function MessageInput({ onSendMessage, currentLanguage }) {
    const [text, setText] = useState('');

    const handleSendMessage = async () => {

        if (text !== '') {
            //client question
            onSendMessage(text, true);

            try {
                const response = await fetch('http://127.0.0.1:5000/api/chatbot/question', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ question: text }),
                })

                if (response.ok) {
                    const data = await response.json();
                    if (data.LanguageName === currentLanguage) {
                        const botAnswer = data.Answer;
                        //bot answer
                        onSendMessage(botAnswer, false);
                    } else {
                        onSendMessage(currentLanguage === "Spanish" ? "Lo siento, no tengo una respuesta para esa pregunta." : "Sorry, I don't have an answer to that question.", false);
                    }

                } else {
                    console.log("Error with the response");
                }

            } catch (error) {
                onSendMessage(currentLanguage === "Spanish" ? "Lo siento, no tengo una respuesta para esa pregunta." : "Sorry, I don't have an answer to that question.", false);
            }

            setText('');
        }

    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="message-input">
            <input
                className='input-text'
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={currentLanguage === "Spanish" ? "Escribe un mensaje..." : "Write the message..."}
            />
            <button className='send-button' onClick={handleSendMessage}>{currentLanguage === "Spanish" ? "Enviar" : "Send"}</button>
        </div>
    );
}

export default MessageInput;