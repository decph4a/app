import React, { useState, useEffect } from 'react';

const Chat: React.FC = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (!socket || socket.readyState === WebSocket.CLOSED) {
            const ws = new WebSocket('ws://localhost:8080');
            setSocket(ws);

            ws.onmessage = (event) => {
                console.log(event.data);
            };

            ws.onclose = () => {
                setSocket(null);
            };
        }
    }, [socket]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        socket?.send(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button type="submit">送信</button>
        </form>
    );
};

export default Chat;
