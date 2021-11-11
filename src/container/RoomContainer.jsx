import React, { useEffect, useState, useRef } from 'react';

import socket from 'util/socket';
import myPeerConnection from 'util/rtcConnect';

import VideocamOffOutlinedIcon from '@material-ui/icons/VideocamOffOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';

const RoomContainer = () => {
  const [peerFace, setPeerFace] = useState('');
  const [stream, setStream] = useState();
  const myVideo = useRef();
  const userVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(stream => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });

    socket.on('matching', data => {
      console.log('id : ', data.id);
      console.log('nickName : ', data.nickName);

      myPeerConnection.addEventListener('icecandidate', data => {
        // socket.emit("")
      });
      myPeerConnection.addEventListener('addstream', data => {
        userVideo.current.srcObject = data.stream;
      });
      stream
        .getTracks()
        .forEach(track => myPeerConnection.addTrack(track, stream));
      // peer ㅅㅓㄹ저ㅇ
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
