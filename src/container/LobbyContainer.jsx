import React from 'react';
import useInput from 'hook/useInput';
import { QUEUE_REGISTRATION } from 'lib/events.js';
import { useNavigate } from 'react-router';

const LobbyContainer = ({ socket }) => {
  /***/
  const [nickName, setNickName] = useInput('');
  const history = useNavigate();

  const Join = () => {
    socket.emit(QUEUE_REGISTRATION, nickName);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="NickName"
          onChange={setNickName}
          value={nickName}
        />
        <button onClick={Join}>Join</button>
      </div>
    </>
  );
};

export default LobbyContainer;
