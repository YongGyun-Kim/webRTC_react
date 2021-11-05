import React from 'react';
import { Routes, Route } from 'react-router-dom';

//for react-router v6
//Switch > Routes
//useHistory > useNavigate ()
//useRouteMatch X  > 현제 매치된 라우트의 상대경로
//Route에 children & component > element
//Route는 Routes의 직속 자식이여야함
//Route에 exact Prop X > 기본적으로 들어감, 서브 경로가 필요한 경우 path 에 * 사용
//optional url 파라미터 사라짐 > 라우터 설정 두개 해야함
//서브 라우트 구현하는 다른 방법 outlet

/***********************************************/
import VideocamOffOutlinedIcon from '@material-ui/icons/VideocamOffOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';
/***********************************************/

function App() {
  return (
    // <Routes>
    //   <Route path ="/" element={}/>
    //   <Route path = "/" >
    //     <Route path ="" element={} />
    //    </Route>
    // </Routes>
    <div>
      <h2>online users : 0</h2>
      <div style={{ display: 'flex' }}>
        <div id="videoArea" style={{ border: '1px solid red' }}>
          <div
            id="myVideo"
            style={{ border: '1px solid green', position: 'relative' }}
          >
            <div>my nick</div>
            <video
              autoplay
              playsinline
              style={{ width: '400px', height: '400px' }}
            />
            <div
              style={{ display: 'flex', position: 'absolute', bottom: '5px' }}
            >
              <VideocamOutlinedIcon /> <MicOutlinedIcon />
            </div>
          </div>
          <div
            id="otherVideo"
            style={{ border: '1px solid yellow', position: 'relative' }}
          >
            <div>other nick</div>
            <video
              autoplay
              playsinline
              style={{ width: '400px', height: '400px' }}
            />
            <div
              style={{ display: 'flex', position: 'absolute', bottom: '5px' }}
            >
              <VolumeUpOutlinedIcon /> <VolumeOffOutlinedIcon />
            </div>
          </div>
        </div>
        <div
          id="chatArea"
          style={{
            height: '100%',
            width: '100%',
            border: '2px solid #8ab4f8',
            borderRadius: '20px',
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
