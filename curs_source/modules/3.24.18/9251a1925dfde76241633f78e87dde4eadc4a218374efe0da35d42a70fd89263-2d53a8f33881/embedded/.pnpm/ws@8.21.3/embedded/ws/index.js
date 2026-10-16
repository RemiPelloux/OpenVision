import { require_extension } from "./lib/extension.js";
import { require_permessage_deflate } from "./lib/permessage-deflate.js";
import { require_receiver2 } from "./lib/receiver.js";
import { require_sender } from "./lib/sender.js";
import { require_stream } from "./lib/stream.js";
import { require_subprotocol } from "./lib/subprotocol.js";
import { require_websocket_server } from "./lib/websocket-server.js";
import { require_websocket2 } from "./lib/websocket.js";
var __wakaru_require_ws_cache;
export function require_ws() {
if (__wakaru_require_ws_cache) return __wakaru_require_ws_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_ws_cache = module2;
"use strict";
var createWebSocketStream = require_stream();
var extension3 = require_extension();
var PerMessageDeflate = require_permessage_deflate();
var Receiver = require_receiver2();
var Sender = require_sender();
var subprotocol = require_subprotocol();
var WebSocket = require_websocket2();
var WebSocketServer = require_websocket_server();
WebSocket.createWebSocketStream = createWebSocketStream;
WebSocket.extension = extension3;
WebSocket.PerMessageDeflate = PerMessageDeflate;
WebSocket.Receiver = Receiver;
WebSocket.Sender = Sender;
WebSocket.Server = WebSocketServer;
WebSocket.subprotocol = subprotocol;
WebSocket.WebSocket = WebSocket;
WebSocket.WebSocketServer = WebSocketServer;
module2.exports = WebSocket;

return module2.exports;
}
