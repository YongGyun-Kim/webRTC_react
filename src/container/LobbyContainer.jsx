import React from 'react';
import useInput from 'hook/useInput';
import { QUEUE_REGISTRATION } from 'lib/events.js';

const LobbyContainer = ({ socket }) => {
  /***/
  const [nickName, setNickName] = useInput('');
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
