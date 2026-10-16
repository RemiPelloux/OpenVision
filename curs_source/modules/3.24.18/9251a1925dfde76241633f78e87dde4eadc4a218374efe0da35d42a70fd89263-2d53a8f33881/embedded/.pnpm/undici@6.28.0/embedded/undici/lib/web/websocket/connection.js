import { require_diagnostics } from "../../core/diagnostics.js";
import { require_headers5 } from "../fetch/headers.js";
import { require_fetch2 } from "../fetch/index.js";
import { require_request4 } from "../fetch/request.js";
import { require_util9 } from "../fetch/util.js";
import { require_constants13 } from "./constants.js";
import { require_events2 } from "./events.js";
import { require_frame2 } from "./frame.js";
import { require_symbols10 } from "./symbols.js";
import { require_util14 } from "./util.js";
var __wakaru_require_connection2_cache;
export function require_connection2() {
if (__wakaru_require_connection2_cache) return __wakaru_require_connection2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_connection2_cache = module2;
"use strict";
var { uid, states, sentCloseFrameState, emptyBuffer, opcodes } = require_constants13();
var { kReadyState, kSentClose, kByteParser, kReceivedClose, kResponse } = require_symbols10();
var { fireEvent, failWebsocketConnection, isClosing, isClosed, isEstablished, parseExtensions } = require_util14();
var { channels } = require_diagnostics();
var { CloseEvent } = require_events2();
var { makeRequest } = require_request4();
var { fetching } = require_fetch2();
var { Headers: Headers2, getHeadersList } = require_headers5();
var { getDecodeSplit } = require_util9();
var { WebsocketFrameSend } = require_frame2();
var crypto8;
try {
    crypto8 = require("node:crypto");
} catch  {}
function establishWebSocketConnection(url2, protocols, client, ws2, onEstablish, options2) {
    const requestURL = url2;
    requestURL.protocol = url2.protocol === "ws:" ? "http:" : "https:";
    const request3 = makeRequest({
        urlList: [
            requestURL
        ],
        client,
        serviceWorkers: "none",
        referrer: "no-referrer",
        mode: "websocket",
        credentials: "include",
        cache: "no-store",
        redirect: "error"
    });
    if (options2.headers) {
        const headersList = getHeadersList(new Headers2(options2.headers));
        request3.headersList = headersList;
    }
    const keyValue = crypto8.randomBytes(16).toString("base64");
    request3.headersList.append("sec-websocket-key", keyValue);
    request3.headersList.append("sec-websocket-version", "13");
    for (const protocol of protocols){
        request3.headersList.append("sec-websocket-protocol", protocol);
    }
    const permessageDeflate = "permessage-deflate; client_max_window_bits";
    request3.headersList.append("sec-websocket-extensions", permessageDeflate);
    const controller = fetching({
        request: request3,
        useParallelQueue: true,
        dispatcher: options2.dispatcher,
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
            let extensions;
            if (secExtension !== null) {
                extensions = parseExtensions(secExtension);
                if (!extensions.has("permessage-deflate")) {
                    failWebsocketConnection(ws2, "Sec-WebSocket-Extensions header does not match.");
                    return;
                }
            }
            const secProtocol = response.headersList.get("Sec-WebSocket-Protocol");
            if (secProtocol !== null) {
                const requestProtocols = getDecodeSplit("sec-websocket-protocol", request3.headersList);
                if (!requestProtocols.includes(secProtocol)) {
                    failWebsocketConnection(ws2, "Protocol was not set in the opening handshake.");
                    return;
                }
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
            onEstablish(response, extensions);
        }
    });
    return controller;
}
function closeWebSocketConnection(ws2, code, reason, reasonByteLength) {
    if (isClosing(ws2) || isClosed(ws2)) {} else if (!isEstablished(ws2)) {
        failWebsocketConnection(ws2, "Connection was closed before it was established.");
        ws2[kReadyState] = states.CLOSING;
    } else if (ws2[kSentClose] === sentCloseFrameState.NOT_SENT) {
        ws2[kSentClose] = sentCloseFrameState.PROCESSING;
        const frame = new WebsocketFrameSend();
        if (code !== void 0 && reason === void 0) {
            frame.frameData = Buffer.allocUnsafe(2);
            frame.frameData.writeUInt16BE(code, 0);
        } else if (code !== void 0 && reason !== void 0) {
            frame.frameData = Buffer.allocUnsafe(2 + reasonByteLength);
            frame.frameData.writeUInt16BE(code, 0);
            frame.frameData.write(reason, 2, "utf-8");
        } else {
            frame.frameData = emptyBuffer;
        }
        const socket = ws2[kResponse].socket;
        socket.write(frame.createFrame(opcodes.CLOSE));
        ws2[kSentClose] = sentCloseFrameState.SENT;
        ws2[kReadyState] = states.CLOSING;
    } else {
        ws2[kReadyState] = states.CLOSING;
    }
}
function onSocketData(chunk) {
    if (!this.ws[kByteParser].write(chunk)) {
        this.pause();
    }
}
function onSocketClose() {
    const { ws: ws2 } = this;
    const { [kResponse]: response } = ws2;
    response.socket.off("data", onSocketData);
    response.socket.off("close", onSocketClose);
    response.socket.off("error", onSocketError);
    const wasClean = ws2[kSentClose] === sentCloseFrameState.SENT && ws2[kReceivedClose];
    let code = 1005;
    let reason = "";
    const result = ws2[kByteParser].closingInfo;
    if (result && !result.error) {
        code = result.code ?? 1005;
        reason = result.reason;
    } else if (!ws2[kReceivedClose]) {
        code = 1006;
    }
    ws2[kReadyState] = states.CLOSED;
    fireEvent("close", ws2, (type2, init)=>new CloseEvent(type2, init), {
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
    establishWebSocketConnection,
    closeWebSocketConnection
};

return module2.exports;
}
