import { require_errors } from "./errors.js";
import { require_util } from "./util.js";
var __wakaru_require_connect2_cache;
export function require_connect2() {
if (__wakaru_require_connect2_cache) return __wakaru_require_connect2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_connect2_cache = module2;
"use strict";
var net = require("net");
var assert4 = require("assert");
var util2 = require_util();
var { InvalidArgumentError: InvalidArgumentError3, ConnectTimeoutError } = require_errors();
var tls3;
var SessionCache;
if (global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE) {
    SessionCache = class WeakSessionCache {
        constructor(maxCachedSessions){
            this._maxCachedSessions = maxCachedSessions;
            this._sessionCache = new Map();
            this._sessionRegistry = new global.FinalizationRegistry((key)=>{
                if (this._sessionCache.size < this._maxCachedSessions) {
                    return;
                }
                const ref = this._sessionCache.get(key);
                if (ref !== void 0 && ref.deref() === void 0) {
                    this._sessionCache.delete(key);
                }
            });
        }
        get(sessionKey2) {
            const ref = this._sessionCache.get(sessionKey2);
            return ref ? ref.deref() : null;
        }
        set(sessionKey2, session) {
            if (this._maxCachedSessions === 0) {
                return;
            }
            this._sessionCache.set(sessionKey2, new WeakRef(session));
            this._sessionRegistry.register(session, sessionKey2);
        }
    };
} else {
    SessionCache = class SimpleSessionCache {
        constructor(maxCachedSessions){
            this._maxCachedSessions = maxCachedSessions;
            this._sessionCache = new Map();
        }
        get(sessionKey2) {
            return this._sessionCache.get(sessionKey2);
        }
        set(sessionKey2, session) {
            if (this._maxCachedSessions === 0) {
                return;
            }
            if (this._sessionCache.size >= this._maxCachedSessions) {
                const { value: oldestKey } = this._sessionCache.keys().next();
                this._sessionCache.delete(oldestKey);
            }
            this._sessionCache.set(sessionKey2, session);
        }
    };
}
function buildConnector({ allowH2, maxCachedSessions, socketPath, timeout: timeout2, ...opts }) {
    if (maxCachedSessions != null && (!Number.isInteger(maxCachedSessions) || maxCachedSessions < 0)) {
        throw new InvalidArgumentError3("maxCachedSessions must be a positive integer or zero");
    }
    const options2 = {
        path: socketPath,
        ...opts
    };
    const sessionCache = new SessionCache(maxCachedSessions == null ? 100 : maxCachedSessions);
    timeout2 = timeout2 == null ? 1e4 : timeout2;
    allowH2 = allowH2 != null ? allowH2 : false;
    return function connect3({ hostname: hostname3, host, protocol, port, servername, localAddress, httpSocket }, callback) {
        let socket;
        if (protocol === "https:") {
            if (!tls3) {
                tls3 = require("tls");
            }
            servername = servername || options2.servername || util2.getServerName(host) || null;
            const sessionKey2 = servername || hostname3;
            const session = sessionCache.get(sessionKey2) || null;
            assert4(sessionKey2);
            socket = tls3.connect({
                highWaterMark: 16384,
                ...options2,
                servername,
                session,
                localAddress,
                ALPNProtocols: allowH2 ? [
                    "http/1.1",
                    "h2"
                ] : [
                    "http/1.1"
                ],
                socket: httpSocket,
                port: port || 443,
                host: hostname3
            });
            socket.on("session", function(session2) {
                sessionCache.set(sessionKey2, session2);
            });
        } else {
            assert4(!httpSocket, "httpSocket can only be sent on TLS update");
            socket = net.connect({
                highWaterMark: 64 * 1024,
                ...options2,
                localAddress,
                port: port || 80,
                host: hostname3
            });
        }
        if (options2.keepAlive == null || options2.keepAlive) {
            const keepAliveInitialDelay = options2.keepAliveInitialDelay === void 0 ? 6e4 : options2.keepAliveInitialDelay;
            socket.setKeepAlive(true, keepAliveInitialDelay);
        }
        const cancelTimeout = setupTimeout(()=>onConnectTimeout(socket), timeout2);
        socket.setNoDelay(true).once(protocol === "https:" ? "secureConnect" : "connect", function() {
            cancelTimeout();
            if (callback) {
                const cb = callback;
                callback = null;
                cb(null, this);
            }
        }).on("error", function(err) {
            cancelTimeout();
            if (callback) {
                const cb = callback;
                callback = null;
                cb(err);
            }
        });
        return socket;
    };
}
function setupTimeout(onConnectTimeout2, timeout2) {
    if (!timeout2) {
        return ()=>{};
    }
    let s1 = null;
    let s22 = null;
    const timeoutId = setTimeout(()=>{
        s1 = setImmediate(()=>{
            if (process.platform === "win32") {
                s22 = setImmediate(()=>onConnectTimeout2());
            } else {
                onConnectTimeout2();
            }
        });
    }, timeout2);
    return ()=>{
        clearTimeout(timeoutId);
        clearImmediate(s1);
        clearImmediate(s22);
    };
}
function onConnectTimeout(socket) {
    util2.destroy(socket, new ConnectTimeoutError());
}
module2.exports = buildConnector;

return module2.exports;
}
