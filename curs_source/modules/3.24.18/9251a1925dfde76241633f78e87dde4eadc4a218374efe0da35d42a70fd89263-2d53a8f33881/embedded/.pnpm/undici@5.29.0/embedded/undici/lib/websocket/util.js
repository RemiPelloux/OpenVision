import { require_constants6 } from "./constants.js";
import { require_events } from "./events.js";
import { require_symbols5 } from "./symbols.js";
var __wakaru_require_util7_cache;
export function require_util7() {
if (__wakaru_require_util7_cache) return __wakaru_require_util7_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util7_cache = module2;
"use strict";
var { kReadyState, kController, kResponse, kBinaryType, kWebSocketURL } = require_symbols5();
var { states, opcodes } = require_constants6();
var { MessageEvent: MessageEvent2, ErrorEvent: ErrorEvent2 } = require_events();
function isEstablished(ws2) {
    return ws2[kReadyState] === states.OPEN;
}
function isClosing(ws2) {
    return ws2[kReadyState] === states.CLOSING;
}
function isClosed(ws2) {
    return ws2[kReadyState] === states.CLOSED;
}
function fireEvent(e, target, eventConstructor = Event, eventInitDict) {
    const event = new eventConstructor(e, eventInitDict);
    target.dispatchEvent(event);
}
function websocketMessageReceived(ws2, type2, data) {
    if (ws2[kReadyState] !== states.OPEN) {
        return;
    }
    let dataForEvent;
    if (type2 === opcodes.TEXT) {
        try {
            dataForEvent = new TextDecoder("utf-8", {
                fatal: true
            }).decode(data);
        } catch  {
            failWebsocketConnection(ws2, "Received invalid UTF-8 in text frame.");
            return;
        }
    } else if (type2 === opcodes.BINARY) {
        if (ws2[kBinaryType] === "blob") {
            dataForEvent = new Blob([
                data
            ]);
        } else {
            dataForEvent = new Uint8Array(data).buffer;
        }
    }
    fireEvent("message", ws2, MessageEvent2, {
        origin: ws2[kWebSocketURL].origin,
        data: dataForEvent
    });
}
function isValidSubprotocol(protocol) {
    if (protocol.length === 0) {
        return false;
    }
    for (const char of protocol){
        const code = char.charCodeAt(0);
        if (code < 33 || code > 126 || char === "(" || char === ")" || char === "<" || char === ">" || char === "@" || char === "," || char === ";" || char === ":" || char === "\\" || char === '"' || char === "/" || char === "[" || char === "]" || char === "?" || char === "=" || char === "{" || char === "}" || code === 32 || code === 9) {
            return false;
        }
    }
    return true;
}
function isValidStatusCode(code) {
    if (code >= 1e3 && code < 1015) {
        return code !== 1004 && code !== 1005 && code !== 1006;
    }
    return code >= 3e3 && code <= 4999;
}
function failWebsocketConnection(ws2, reason) {
    const { [kController]: controller, [kResponse]: response } = ws2;
    controller.abort();
    if (response?.socket && !response.socket.destroyed) {
        response.socket.destroy();
    }
    if (reason) {
        fireEvent("error", ws2, ErrorEvent2, {
            error: new Error(reason)
        });
    }
}
module2.exports = {
    isEstablished,
    isClosing,
    isClosed,
    fireEvent,
    isValidSubprotocol,
    isValidStatusCode,
    failWebsocketConnection,
    websocketMessageReceived
};

return module2.exports;
}
