

let socket = new WebSocket('ws:127.0.0.1:9502');

socket.onopen = function(e) {      
    console.log('you are connect now');
    };

function send(){
    let message = document.getElementById('message').value;
    socket.send(message);
    document.getElementById('message').value = '';
}//send


// this for recive the message from server 
socket.onmessage = function(event) {

  let allMessages = document.getElementById('allMessages');
  let pra = document.createElement('p');
  pra.innerText = event.data;
  allMessages.appendChild(pra);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};