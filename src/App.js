import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
    if (!localStorage.getItem('username')) {
        return <LoginForm />
    }
    return (
        <ChatEngine
            height='100vh'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            projectID='c509e118-a287-482b-bee8-f6381386792e'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;