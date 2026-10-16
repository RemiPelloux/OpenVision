import { require_symbols } from "../core/symbols.js";
import { require_headers } from "../fetch/headers.js";
import { require_fetch } from "../fetch/index.js";
import { require_request2 } from "../fetch/request.js";
import { require_global2 } from "../global.js";
import { require_constants6 } from "./constants.js";
import { require_events } from "./events.js";
import { require_symbols5 } from "./symbols.js";
import { require_util7 } from "./util.js";
var __wakaru_require_connection_cache;
export function require_connection() {
if (__wakaru_require_connection_cache) return __wakaru_require_connection_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_connection_cache = module2;
"use strict";
var diagnosticsChannel = require("diagnostics_channel");
var { uid, states } = require_constants6();
var { kReadyState, kSentClose, kByteParser, kReceivedClose } = require_symbols5();
var { fireEvent, failWebsocketConnection } = require_util7();
var { CloseEvent } = require_events();
var { makeRequest } = require_request2();
var { fetching } = require_fetch();
var { Headers: Headers2 } = require_headers();
var { getGlobalDispatcher } = require_global2();
var { kHeadersList } = require_symbols();
var channels = {};
channels.open = diagnosticsChannel.channel("undici:websocket:open");
channels.close = diagnosticsChannel.channel("undici:websocket:close");
channels.socketError = diagnosticsChannel.channel("undici:websocket:socket_error");
var crypto8;
try {
    crypto8 = require("crypto");
} catch  {}
function establishWebSocketConnection(url2, protocols, ws2, onEstablish, options2) {
    const requestURL = url2;
    requestURL.protocol = url2.protocol === "ws:" ? "http:" : "https:";
    const request3 = makeRequest({
        urlList: [
            requestURL
        ],
        serviceWorkers: "none",
        referrer: "no-referrer",
        mode: "websocket",
        credentials: "include",
        cache: "no-store",
        redirect: "error"
    });
    if (options2.headers) {
        const headersList = new Headers2(options2.headers)[kHeadersList];
        request3.headersList = headersList;
    }
    const keyValue = crypto8.randomBytes(16).toString("base64");
    request3.headersList.append("sec-websocket-key", keyValue);
    request3.headersList.append("sec-websocket-version", "13");
    for (const protocol of protocols){
        request3.headersList.append("sec-websocket-protocol", protocol);
    }
    const permessageDeflate = "";
    const controller = fetching({
        request: request3,
        useParallelQueue: true,
        dispatcher: options2.dispatcher ?? getGlobalDispatcher(),
        processResponse (response) {
            if (response.type === "error" || response.status !== 101) {
                failWebsocketConnection(ws2, "Received network error or non-101 status code.");
                return;
            }
            if (protocols.length !== 0 && !response.headersList.get("Sec-WebSocket-Protocol")) {
                failWebsocketConnection(ws2, "Server did not respond with sent protocols.");
                return;
            }
            if (response.headersList.get("Upgrade")?.toLowerCase() !== "websocket") {
                failWebsocketConnection(ws2, 'Server did not set Upgrade header to "websocket".');
                return;
            }
            if (response.headersList.get("Connection")?.toLowerCase() !== "upgrade") {
                failWebsocketConnection(ws2, 'Server did not set Connection header to "upgrade".');
                return;
            }
            const secWSAccept = response.headersList.get("Sec-WebSocket-Accept");
            const digest = crypto8.createHash("sha1").update(keyValue + uid).digest("base64");
            if (secWSAccept !== digest) {
                failWebsocketConnection(ws2, "Incorrect hash received in Sec-WebSocket-Accept header.");
                return;
            }
            const secExtension = response.headersList.get("Sec-WebSocket-Extensions");
            if (secExtension !== null && secExtension !== permessageDeflate) {
                failWebsocketConnection(ws2, "Received different permessage-deflate than the one set.");
                return;
            }
            const secProtocol = response.headersList.get("Sec-WebSocket-Protocol");
            if (secProtocol !== null && secProtocol !== request3.headersList.get("Sec-WebSocket-Protocol")) {
                failWebsocketConnection(ws2, "Protocol was not set in the opening handshake.");
                return;
            }
            response.socket.on("data", onSocketData);
            response.socket.on("close", onSocketClose);
            response.socket.on("error", onSocketError);
            if (channels.open.hasSubscribers) {
                channels.open.publish({
                    address: response.socket.address(),
                    protocol: secProtocol,
                    extensions: secExtension
                });
            }
            onEstablish(response);
        }
    });
    return controller;
}
function onSocketData(chunk) {
    if (!this.ws[kByteParser].write(chunk)) {
        this.pause();
    }
}
function onSocketClose() {
    const { ws: ws2 } = this;
    const wasClean = ws2[kSentClose] && ws2[kReceivedClose];
    let code = 1005;
    let reason = "";
    const result = ws2[kByteParser].closingInfo;
    if (result) {
        code = result.code ?? 1005;
        reason = result.reason;
    } else if (!ws2[kSentClose]) {
        code = 1006;
    }
    ws2[kReadyState] = states.CLOSED;
    fireEvent("close", ws2, CloseEvent, {
        wasClean,
        code,
        reason
    });
    if (channels.close.hasSubscribers) {
        channels.close.publish({
            websocket: ws2,
            code,
            reason
        });
    }
}
function onSocketError(error3) {
    const { ws: ws2 } = this;
    ws2[kReadyState] = states.CLOSING;
    if (channels.socketError.hasSubscribers) {
        channels.socketError.publish(error3);
    }
    this.destroy();
}
module2.exports = {
    establishWebSocketConnection
};

return module2.exports;
}
