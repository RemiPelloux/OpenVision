"use strict";
const t = [
    "nodebuffer",
    "arraybuffer",
    "fragments"
], r = "undefined" != typeof Blob;
r && t.push("blob"), module.exports = {
    BINARY_TYPES: t,
    CLOSE_TIMEOUT: 3e4,
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    hasBlob: r,
    kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
    kListener: Symbol("kListener"),
    kStatusCode: Symbol("status-code"),
    kWebSocket: Symbol("websocket"),
    NOOP: ()=>{}
};
