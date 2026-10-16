import { require_data_url } from "../fetch/data-url.js";
import { require_constants13 } from "./constants.js";
import { require_events2 } from "./events.js";
import { require_symbols10 } from "./symbols.js";
var __wakaru_require_util14_cache;
export function require_util14() {
if (__wakaru_require_util14_cache) return __wakaru_require_util14_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util14_cache = module2;
"use strict";
var { kReadyState, kController, kResponse, kBinaryType, kWebSocketURL } = require_symbols10();
var { states, opcodes } = require_constants13();
var { ErrorEvent: ErrorEvent2, createFastMessageEvent } = require_events2();
var { isUtf8: isUtf82 } = require("node:buffer");
var { collectASequenceOfCodePointsFast, removeHTTPWhitespace } = require_data_url();
function isConnecting(ws2) {
    return ws2[kReadyState] === states.CONNECTING;
}
function isEstablished(ws2) {
    return ws2[kReadyState] === states.OPEN;
}
function isClosing(ws2) {
    return ws2[kReadyState] === states.CLOSING;
}
function isClosed(ws2) {
    return ws2[kReadyState] === states.CLOSED;
}
function fireEvent(e, target, eventFactory = (type2, init)=>new Event(type2, init), eventInitDict = {}) {
    const event = eventFactory(e, eventInitDict);
    target.dispatchEvent(event);
}
function websocketMessageReceived(ws2, type2, data) {
    if (ws2[kReadyState] !== states.OPEN) {
        return;
    }
    let dataForEvent;
    if (type2 === opcodes.TEXT) {
        try {
            dataForEvent = utf8Decode(data);
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
            dataForEvent = toArrayBuffer(data);
        }
    }
    fireEvent("message", ws2, createFastMessageEvent, {
        origin: ws2[kWebSocketURL].origin,
        data: dataForEvent
    });
}
function toArrayBuffer(buffer) {
    if (buffer.byteLength === buffer.buffer.byteLength) {
        return buffer.buffer;
    }
    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}
function isValidSubprotocol(protocol) {
    if (protocol.length === 0) {
        return false;
    }
    for(let i = 0; i < protocol.length; ++i){
        const code = protocol.charCodeAt(i);
        if (code < 33 || code > 126 || code === 34 || code === 40 || code === 41 || code === 44 || code === 47 || code === 58 || code === 59 || code === 60 || code === 61 || code === 62 || code === 63 || code === 64 || code === 91 || code === 92 || code === 93 || code === 123 || code === 125) {
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
        fireEvent("error", ws2, (type2, init)=>new ErrorEvent2(type2, init), {
            error: new Error(reason),
            message: reason
        });
    }
}
function isControlFrame(opcode) {
    return opcode === opcodes.CLOSE || opcode === opcodes.PING || opcode === opcodes.PONG;
}
function isContinuationFrame(opcode) {
    return opcode === opcodes.CONTINUATION;
}
function isTextBinaryFrame(opcode) {
    return opcode === opcodes.TEXT || opcode === opcodes.BINARY;
}
function isValidOpcode(opcode) {
    return isTextBinaryFrame(opcode) || isContinuationFrame(opcode) || isControlFrame(opcode);
}
function parseExtensions(extensions) {
    const position = {
        position: 0
    };
    const extensionList = new Map();
    while(position.position < extensions.length){
        const pair = collectASequenceOfCodePointsFast(";", extensions, position);
        const [name17, value = ""] = pair.split("=");
        extensionList.set(removeHTTPWhitespace(name17, true, false), removeHTTPWhitespace(value, false, true));
        position.position++;
    }
    return extensionList;
}
function isValidClientWindowBits(value) {
    if (value.length === 0) {
        return false;
    }
    for(let i = 0; i < value.length; i++){
        const byte = value.charCodeAt(i);
        if (byte < 48 || byte > 57) {
            return false;
        }
    }
    const num = Number.parseInt(value, 10);
    return num >= 8 && num <= 15;
}
var hasIntl = typeof process.versions.icu === "string";
var fatalDecoder = hasIntl ? new TextDecoder("utf-8", {
    fatal: true
}) : void 0;
var utf8Decode = hasIntl ? fatalDecoder.decode.bind(fatalDecoder) : function(buffer) {
    if (isUtf82(buffer)) {
        return buffer.toString("utf-8");
    }
    throw new TypeError("Invalid utf-8 received.");
};
module2.exports = {
    isConnecting,
    isEstablished,
    isClosing,
    isClosed,
    fireEvent,
    isValidSubprotocol,
    isValidStatusCode,
    failWebsocketConnection,
    websocketMessageReceived,
    utf8Decode,
    isControlFrame,
    isContinuationFrame,
    isTextBinaryFrame,
    isValidOpcode,
    parseExtensions,
    isValidClientWindowBits
};

return module2.exports;
}
