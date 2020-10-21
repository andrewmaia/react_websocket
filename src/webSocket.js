import io from "socket.io-client";

const webSocket = io(
    "http://localhost:8000",
    {transports:["websocket","polling"]}
);

webSocket.on('connect',()=>console.log('Socket conectado'));


export default webSocket;