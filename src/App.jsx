import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LobbyContainer from 'container/LobbyContainer.jsx';
import RoomContainer from 'container/RoomContainer.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LobbyContainer />} />
      <Route path="/room" element={<RoomContainer />} />
    </Routes>
  );
}

export default App;
