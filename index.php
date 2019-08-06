<?php
$server = new swoole_websocket_server("127.0.0.1", 9502);

$server->on('open', function($server, $req) {
    echo "connection open: {$req->fd}\n";
});

$server->on('message', function($server, $frame) {
     
   
   
  foreach($server->connections as $fd){
    $server->push($fd ,$frame->data);
  }

       
});

$server->on('close', function($server, $fd) {
    echo "connection close: {$fd}\n";
});

$server->start();