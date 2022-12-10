import $ from 'jquery';

'use strict'
const SOCKET_URL = 'wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self';
let socket;

const msgForm = $('#message-form');
const nameEl = $('#name');
const msgEl = $('#msg');

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();

const time = `${hours}:${minutes} ${day}/${month}/${year}`;

initConnection();

msgForm.on('submit', (e) =>{
    e.preventDefault();
    console.log('message sent');
    sendMessage();
    
})

function initConnection() {
    socket = new WebSocket(SOCKET_URL);

    socket.onopen = () => {
        console.log('socket connected');
        
    }

    socket.onclose = () => {
        console.log('connection closed');
    }

    socket.onerror = (e) => {
        console.log('error:', e);
    }

    socket.onmessage = ({ data }) => {
        const { type, payload }  = JSON.parse(data);

        if(type === 'message'){
            const { author, message, time } = payload;
            msgForm.before(
            `<div class="msg">
            <div class="author">${author}</div>
            <div class="msg-text">${message}</div>
            <div class="msg-time">${time}</div>
            </div>`
        )
        console.log(`author ${author} message ${message}`);
        }
        
    }
}
function sendMessage() {
    const message = {
        type: 'message',
        payload: {
            author: nameEl.val(),
            message: msgEl.val(),
            time: time
        }
    }

    console.log('message', message.payload.author, message.payload.message, message.payload.time);

    socket.send(JSON.stringify(message));

    msgForm[0].reset();
}
