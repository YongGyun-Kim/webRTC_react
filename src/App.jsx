import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LobbyContainer from './container/LobbyContainer.jsx';
import RoomContainer from './container/RoomContainer.jsx';
import { io } from 'socket.io-client';
//for react-router v6
//Switch > Routes
//useHistory > useNavigate ()
//useRouteMatch X  > 현제 매치된 라우트의 상대경로
//Route에 children & component > element
//Route는 Routes의 직속 자식이여야함
//Route에 exact Prop X > 기본적으로 들어감, 서브 경로가 필요한 경우 path 에 * 사용
//optional url 파라미터 사라짐 > 라우터 설정 두개 해야함
//서브 라우트 구현하는 다른 방법 outlet
/* <Route path = "/" >
        <Route path ="" element={} />
       </Route> */

function App() {
  const [socket, setSocket] = useState('');
  useEffect(() => {
    // aws
    const location = window.location;
    const tempSocket = io(
      location.protocol + '//' + location.hostname + ':8000',
    );

    tempSocket.on('matching', data => {
      console.log(data.id);
      console.log(data.nickName);
    });

    setSocket(tempSocket);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LobbyContainer socket={socket} />} />
      <Route path="/room" element={<RoomContainer socket={socket} />} />
    </Routes>
  );
}

export default App;
