import React from 'react';
import useInput from 'hook/useInput';
import { QUEUE_REGISTRATION } from 'lib/events.js';
import { useNavigate } from 'react-router';

const LobbyContainer = ({ socket }) => {
  /***/
  const [nickName, setNickName] = useInput('');
  const navigate = useNavigate();

  const join = () => {
    socket.emit(QUEUE_REGISTRATION, nickName);
    navigate('/room');
  };

  return (
    <>
      <div>
        <h2>online users : 0</h2>
        <input
          type="text"
          placeholder="NickName"
          onChange={setNickName}
          value={nickName}
        />
        <button onClick={join}>Join</button>
      </div>
    </>
  );
};

export default LobbyContainer;
