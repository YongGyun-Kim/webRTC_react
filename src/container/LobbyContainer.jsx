import React from 'react';
import useInput from '../hook/useInput';

const LobbyContainer = () => {
  const [nickName, setNickName] = useInput('');

  return (
    <>
      <div>
        <input type="text" />
      </div>
    </>
  );
};

export default LobbyContainer;
