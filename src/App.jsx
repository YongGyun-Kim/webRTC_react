import React from 'react';

import VideocamOffOutlinedIcon from '@material-ui/icons/VideocamOffOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';

function App() {
  return (
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
