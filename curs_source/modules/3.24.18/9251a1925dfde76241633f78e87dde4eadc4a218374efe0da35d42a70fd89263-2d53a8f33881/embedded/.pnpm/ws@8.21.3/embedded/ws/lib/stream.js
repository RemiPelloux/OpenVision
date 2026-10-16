import { require_websocket2 } from "./websocket.js";
var __wakaru_require_stream_cache;
export function require_stream() {
if (__wakaru_require_stream_cache) return __wakaru_require_stream_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_stream_cache = module2;
"use strict";
var WebSocket = require_websocket2();
var { Duplex } = require("stream");
function emitClose(stream3) {
    stream3.emit("close");
}
function duplexOnEnd() {
    if (!this.destroyed && this._writableState.finished) {
        this.destroy();
    }
}
function duplexOnError(err) {
    this.removeListener("error", duplexOnError);
    this.destroy();
    if (this.listenerCount("error") === 0) {
        this.emit("error", err);
    }
}
function createWebSocketStream(ws2, options2) {
    let terminateOnDestroy = true;
    const duplex = new Duplex({
        ...options2,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
    });
    ws2.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data)) ws2.pause();
    });
    ws2.once("error", function error3(err) {
        if (duplex.destroyed) return;
        terminateOnDestroy = false;
        duplex.destroy(err);
    });
    ws2.once("close", function close() {
        if (duplex.destroyed) return;
        duplex.push(null);
    });
    duplex._destroy = function(err, callback) {
        if (ws2.readyState === ws2.CLOSED) {
            callback(err);
            process.nextTick(emitClose, duplex);
            return;
        }
        let called = false;
        ws2.once("error", function error3(err2) {
            called = true;
            callback(err2);
        });
        ws2.once("close", function close() {
            if (!called) callback(err);
            process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy) ws2.terminate();
    };
    duplex._final = function(callback) {
        if (ws2.readyState === ws2.CONNECTING) {
            ws2.once("open", function open7() {
                duplex._final(callback);
            });
            return;
        }
        if (ws2._socket === null) return;
        if (ws2._socket._writableState.finished) {
            callback();
            if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
            ws2._socket.once("finish", function finish() {
                callback();
            });
            ws2.close();
        }
    };
    duplex._read = function() {
        if (ws2.isPaused) ws2.resume();
    };
    duplex._write = function(chunk, encoding, callback) {
        if (ws2.readyState === ws2.CONNECTING) {
            ws2.once("open", function open7() {
                duplex._write(chunk, encoding, callback);
            });
            return;
        }
        ws2.send(chunk, callback);
    };
    duplex.on("end", duplexOnEnd);
    duplex.on("error", duplexOnError);
    return duplex;
}
module2.exports = createWebSocketStream;

return module2.exports;
}
