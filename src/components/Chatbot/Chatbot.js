import React from 'react';
import ChatBot from 'react-simple-chatbot';


function Chat() {
    return(
        <ChatBot className='chabot'
            steps={[
                {
                    id: '1',
                    message: 'What section are you interested in?',
                    trigger: '2',
                },
                {
                    id: '2',
                    options: [
                        { value: 1, label: 'About', trigger: '4' },
                        { value: 2, label: 'Projects', trigger: '3' },
                        { value: 3, label: 'Contact', trigger: '3' },
                    ],
                },
                {
                    id: '3',
                    message: 'Wrong answer, try again.',
                    trigger: '2',
                },
                {
                    id: '4',
                    message: 'Awesome! You are a telepath!',
                    end: true,
                },
            ]}
        />
    )
}


export default Chat;