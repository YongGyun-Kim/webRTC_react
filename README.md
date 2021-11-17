커피챗 진행중 나온 이야기를 토대로 1대1 랜덤 매칭 서비스를 만들어보자!


1. device media(카메라, 마이크) 접근 - navigator.mediaDevices
2. peer 간의 안정적이고 효율적인 통신 설정 - RTCPeerCinnection
3. peer 간의 연결을 통해 데이터 전송 - RTCDataChannel


Internet Connectivity Establishment : peer 연결이 처음 시작하게되면 여러 후보가 만들어지며 로컬과 원격이 서로 동의되어 선택되기 전까지 반복한다 이후 candidate를 사용하여 연결한다.



https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API/Protocols
ice 동작방식 : https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Session_lifetime
