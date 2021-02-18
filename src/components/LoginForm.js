import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        //username | password => ChatEngine => gives messages on success  || error 
        const authObject = {
            'Project-ID': "c509e118-a287-482b-bee8-f6381386792e",
            'User-Name': username,
            'User-Secret': password
        }

        try {
            axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        } catch (error) {
            setError('Oops! Invalid Credentials!');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} className="input" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" value={password} className="input" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;