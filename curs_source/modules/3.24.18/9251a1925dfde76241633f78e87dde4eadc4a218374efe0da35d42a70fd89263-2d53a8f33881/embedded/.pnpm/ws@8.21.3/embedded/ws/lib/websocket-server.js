import { require_constants8 } from "./constants.js";
import { require_extension } from "./extension.js";
import { require_permessage_deflate } from "./permessage-deflate.js";
import { require_subprotocol } from "./subprotocol.js";
import { require_websocket2 } from "./websocket.js";
var __wakaru_require_websocket_server_cache;
export function require_websocket_server() {
if (__wakaru_require_websocket_server_cache) return __wakaru_require_websocket_server_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_websocket_server_cache = module2;
"use strict";
var EventEmitter = require("events");
var http4 = require("http");
var { Duplex } = require("stream");
var { createHash: createHash31 } = require("crypto");
var extension3 = require_extension();
var PerMessageDeflate = require_permessage_deflate();
var subprotocol = require_subprotocol();
var WebSocket = require_websocket2();
var { CLOSE_TIMEOUT, GUID, kWebSocket } = require_constants8();
var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
var RUNNING = 0;
var CLOSING = 1;
var CLOSED = 2;
var WebSocketServer = class extends EventEmitter {
    constructor(options2, callback){
        super();
        options2 = {
            allowSynchronousEvents: true,
            autoPong: true,
            maxBufferedChunks: 256 * 1024,
            maxFragments: 16 * 1024,
            maxPayload: 100 * 1024 * 1024,
            skipUTF8Validation: false,
            perMessageDeflate: false,
            handleProtocols: null,
            clientTracking: true,
            closeTimeout: CLOSE_TIMEOUT,
            verifyClient: null,
            noServer: false,
            backlog: null,
            server: null,
            host: null,
            path: null,
            port: null,
            WebSocket,
            ...options2
        };
        if (options2.port == null && !options2.server && !options2.noServer || options2.port != null && (options2.server || options2.noServer) || options2.server && options2.noServer) {
            throw new TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
        }
        if (options2.port != null) {
            this._server = http4.createServer((req, res)=>{
                const body = http4.STATUS_CODES[426];
                res.writeHead(426, {
                    "Content-Length": body.length,
                    "Content-Type": "text/plain"
                });
                res.end(body);
            });
            this._server.listen(options2.port, options2.host, options2.backlog, callback);
        } else if (options2.server) {
            this._server = options2.server;
        }
        if (this._server) {
            const emitConnection = this.emit.bind(this, "connection");
            this._removeListeners = addListeners(this._server, {
                listening: this.emit.bind(this, "listening"),
                error: this.emit.bind(this, "error"),
                upgrade: (req, socket, head)=>{
                    this.handleUpgrade(req, socket, head, emitConnection);
                }
            });
        }
        if (options2.perMessageDeflate === true) options2.perMessageDeflate = {};
        if (options2.clientTracking) {
            this.clients = new Set();
            this._shouldEmitClose = false;
        }
        this.options = options2;
        this._state = RUNNING;
    }
    address() {
        if (this.options.noServer) {
            throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server) return null;
        return this._server.address();
    }
    close(cb) {
        if (this._state === CLOSED) {
            if (cb) {
                this.once("close", ()=>{
                    cb(new Error("The server is not running"));
                });
            }
            process.nextTick(emitClose, this);
            return;
        }
        if (cb) this.once("close", cb);
        if (this._state === CLOSING) return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
            if (this._server) {
                this._removeListeners();
                this._removeListeners = this._server = null;
            }
            if (this.clients) {
                if (!this.clients.size) {
                    process.nextTick(emitClose, this);
                } else {
                    this._shouldEmitClose = true;
                }
            } else {
                process.nextTick(emitClose, this);
            }
        } else {
            const server = this._server;
            this._removeListeners();
            this._removeListeners = this._server = null;
            server.close(()=>{
                emitClose(this);
            });
        }
    }
    shouldHandle(req) {
        if (this.options.path) {
            const index = req.url.indexOf("?");
            const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
            if (pathname !== this.options.path) return false;
        }
        return true;
    }
    handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const upgrade = req.headers.upgrade;
        const version4 = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
            const message = "Invalid HTTP method";
            abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
            return;
        }
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
            const message = "Invalid Upgrade header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
        }
        if (key === void 0 || !keyRegex.test(key)) {
            const message = "Missing or invalid Sec-WebSocket-Key header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
        }
        if (version4 !== 13 && version4 !== 8) {
            const message = "Missing or invalid Sec-WebSocket-Version header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
                "Sec-WebSocket-Version": "13, 8"
            });
            return;
        }
        if (!this.shouldHandle(req)) {
            abortHandshake(socket, 400);
            return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = new Set();
        if (secWebSocketProtocol !== void 0) {
            try {
                protocols = subprotocol.parse(secWebSocketProtocol);
            } catch (err) {
                const message = "Invalid Sec-WebSocket-Protocol header";
                abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
                return;
            }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
            const perMessageDeflate = new PerMessageDeflate({
                ...this.options.perMessageDeflate,
                isServer: true,
                maxPayload: this.options.maxPayload
            });
            try {
                const offers = extension3.parse(secWebSocketExtensions);
                if (offers[PerMessageDeflate.extensionName]) {
                    perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
                    extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
                }
            } catch (err) {
                const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
                abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
                return;
            }
        }
        if (this.options.verifyClient) {
            const info2 = {
                origin: req.headers[`${version4 === 8 ? "sec-websocket-origin" : "origin"}`],
                secure: !!(req.socket.authorized || req.socket.encrypted),
                req
            };
            if (this.options.verifyClient.length === 2) {
                this.options.verifyClient(info2, (verified, code, message, headers)=>{
                    if (!verified) {
                        return abortHandshake(socket, code || 401, message, headers);
                    }
                    this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
                });
                return;
            }
            if (!this.options.verifyClient(info2)) return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
    }
    completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable) return socket.destroy();
        if (socket[kWebSocket]) {
            throw new Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
        }
        if (this._state > RUNNING) return abortHandshake(socket, 503);
        const digest = createHash31("sha1").update(key + GUID).digest("base64");
        const headers = [
            "HTTP/1.1 101 Switching Protocols",
            "Upgrade: websocket",
            "Connection: Upgrade",
            `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws2 = new this.options.WebSocket(null, void 0, this.options);
        if (protocols.size) {
            const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
            if (protocol) {
                headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
                ws2._protocol = protocol;
            }
        }
        if (extensions[PerMessageDeflate.extensionName]) {
            const params = extensions[PerMessageDeflate.extensionName].params;
            const value = extension3.format({
                [PerMessageDeflate.extensionName]: [
                    params
                ]
            });
            headers.push(`Sec-WebSocket-Extensions: ${value}`);
            ws2._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws2.setSocket(socket, head, {
            allowSynchronousEvents: this.options.allowSynchronousEvents,
            maxBufferedChunks: this.options.maxBufferedChunks,
            maxFragments: this.options.maxFragments,
            maxPayload: this.options.maxPayload,
            skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
            this.clients.add(ws2);
            ws2.on("close", ()=>{
                this.clients.delete(ws2);
                if (this._shouldEmitClose && !this.clients.size) {
                    process.nextTick(emitClose, this);
                }
            });
        }
        cb(ws2, req);
    }
};
module2.exports = WebSocketServer;
function addListeners(server, map4) {
    for (const event of Object.keys(map4))server.on(event, map4[event]);
    return function removeListeners() {
        for (const event of Object.keys(map4)){
            server.removeListener(event, map4[event]);
        }
    };
}
function emitClose(server) {
    server._state = CLOSED;
    server.emit("close");
}
function socketOnError() {
    this.destroy();
}
function abortHandshake(socket, code, message, headers) {
    message = message || http4.STATUS_CODES[code];
    headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
    };
    socket.once("finish", socket.destroy);
    socket.end(`HTTP/1.1 ${code} ${http4.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h)=>`${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message);
}
function abortHandshakeOrEmitwsClientError(server, req, socket, code, message, headers) {
    if (server.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server.emit("wsClientError", err, socket, req);
    } else {
        abortHandshake(socket, code, message, headers);
    }
}

return module2.exports;
}
