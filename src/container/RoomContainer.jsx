import React, { useEffect, useState, useRef } from 'react';

import VideocamOffOutlinedIcon from '@material-ui/icons/VideocamOffOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';

const RoomContainer = ({ socket }) => {
  const [peerFace, setPeerFace] = useState('');
  const [stream, setStream] = useState();
  const myVideo = useRef();
  const userVideo = useRef();
  const [myPeerConnection, setMyPeerConnection] = useState(
    new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            'stun:stun.l.google.com:19302',
            'stun:stun1.l.google.com:19302',
            'stun:stun2.l.google.com:19302',
            'stun:stun3.l.google.com:19302',
            'stun:stun4.l.google.com:19302',
          ],
        },
      ],
    }),
  );

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(stream => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });
  }, []);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div id="videoArea" style={{ border: '1px solid red' }}>
          <div
            id="myVideo"
            style={{ border: '1px solid green', position: 'relative' }}
          >
            <div>my nick</div>
            <video
              autoPlay
              playsInline
              style={{ width: '400px', height: '400px' }}
              ref={myVideo}
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
              autoPlay
              playsInline
              style={{ width: '400px', height: '400px' }}
              ref={userVideo}
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
};

export default RoomContainer;
