import { io } from 'socket.io-client';

const location = window.location;
console.log('11');
const socket = io(location.protocol + '//' + location.hostname + ':8000');

export default socket;
