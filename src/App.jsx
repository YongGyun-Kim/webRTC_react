import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LobbyContainer from './container/LobbyContainer.jsx';
import RoomContainer from './container/RoomContainer.jsx';
import { io } from 'socket.io-client';

function App() {
  const [socket, setSocket] = useState('');
  useEffect(() => {
    // aws
    const location = window.location;
    const tempSocket = io(
      location.protocol + '//' + location.hostname + ':8000',
    );

    tempSocket.on('matching', data => {
      console.log('id : ', data.id);
      console.log('nickName : ', data.nickName);
    });

    setSocket(tempSocket);
    /* */
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LobbyContainer socket={socket} />} />
      <Route path="/room" element={<RoomContainer socket={socket} />} />
    </Routes>
  );
}

export default App;
