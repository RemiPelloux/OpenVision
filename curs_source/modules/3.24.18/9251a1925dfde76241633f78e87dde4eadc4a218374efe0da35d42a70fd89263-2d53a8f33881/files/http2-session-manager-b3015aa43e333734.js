import { require_node_error } from "./node-error.js";
import { require_cjs3 } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
var __wakaru_require_http2_session_manager_cache;
export function require_http2_session_manager() {
if (__wakaru_require_http2_session_manager_cache) return __wakaru_require_http2_session_manager_cache;
var exports2 = {};
__wakaru_require_http2_session_manager_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Http2SessionManager = void 0;
var http23 = require("http2");
var connect_1 = require_cjs3();
var node_error_js_1 = require_node_error();
var Http2SessionManager2 = class {
    state() {
        if (this.s.t == "ready") {
            if (this.verifying !== void 0) {
                return "verifying";
            }
            return this.s.streamCount() > 0 ? "open" : "idle";
        }
        return this.s.t;
    }
    error() {
        if (this.s.t == "error") {
            return this.s.reason;
        }
        return void 0;
    }
    constructor(url2, pingOptions, http2SessionOptions){
        var _a18, _b2, _c, _d;
        this.s = closed2();
        this.shuttingDown = [];
        this.authority = new URL(url2).origin;
        this.http2SessionOptions = http2SessionOptions;
        this.options = {
            pingIntervalMs: (_a18 = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.pingIntervalMs) !== null && _a18 !== void 0 ? _a18 : Number.POSITIVE_INFINITY,
            pingTimeoutMs: (_b2 = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.pingTimeoutMs) !== null && _b2 !== void 0 ? _b2 : 1e3 * 15,
            pingIdleConnection: (_c = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.pingIdleConnection) !== null && _c !== void 0 ? _c : false,
            idleConnectionTimeoutMs: (_d = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.idleConnectionTimeoutMs) !== null && _d !== void 0 ? _d : 1e3 * 60 * 15
        };
    }
    async connect() {
        try {
            const ready3 = await this.gotoReady();
            return ready3.streamCount() > 0 ? "open" : "idle";
        } catch (e) {
            return "error";
        }
    }
    async request(method, path64, headers, options2) {
        for(;;){
            const ready3 = await this.gotoReady();
            try {
                const stream3 = ready3.conn.request(Object.assign(Object.assign({}, headers), {
                    ":method": method,
                    ":path": path64
                }), options2);
                ready3.registerRequest(stream3);
                return stream3;
            } catch (e) {
                if (ready3.conn.closed || ready3.conn.destroyed) {
                    continue;
                }
                throw e;
            }
        }
    }
    notifyResponseByteRead(stream3) {
        if (this.s.t == "ready") {
            this.s.responseByteRead(stream3);
        }
        for (const s3 of this.shuttingDown){
            s3.responseByteRead(stream3);
        }
    }
    abort(reason) {
        var _a18, _b2, _c;
        const err = reason !== null && reason !== void 0 ? reason : new connect_1.ConnectError("connection aborted", connect_1.Code.Canceled);
        (_b2 = (_a18 = this.s).abort) === null || _b2 === void 0 ? void 0 : _b2.call(_a18, err);
        for (const s3 of this.shuttingDown){
            (_c = s3.abort) === null || _c === void 0 ? void 0 : _c.call(s3, err);
        }
        this.setState(closedOrError2(err));
    }
    abortCurrent(reason) {
        var _a18, _b2;
        const current = this.s;
        if (current.t === "ready" && current.isShuttingDown()) {
            return;
        }
        const err = reason !== null && reason !== void 0 ? reason : new connect_1.ConnectError("connection aborted", connect_1.Code.Canceled);
        (_b2 = (_a18 = current).abort) === null || _b2 === void 0 ? void 0 : _b2.call(_a18, err);
    }
    captureSessions() {
        const targets = [];
        if (typeof this.s.abort === "function") {
            targets.push(this.s);
        }
        for (const s3 of this.shuttingDown){
            if (targets.indexOf(s3) === -1) {
                targets.push(s3);
            }
        }
        return targets;
    }
    async gotoReady() {
        var _a18;
        if (this.s.t == "ready") {
            if (this.s.isShuttingDown() || this.s.conn.closed || this.s.conn.destroyed) {
                this.setState(connect3(this.authority, this.http2SessionOptions));
            } else if (this.s.requiresVerify()) {
                await this.verify(this.s);
            }
        } else if (this.s.t == "closed" || this.s.t == "error") {
            this.setState(connect3(this.authority, this.http2SessionOptions));
        }
        while(this.s.t !== "ready"){
            if (this.s.t === "error") {
                throw this.s.reason;
            }
            if (this.s.t === "unavailable") {
                throw new connect_1.ConnectError("expected h2 session, but ALPN protocol failed to negotiate", connect_1.Code.Unavailable, {
                    "authority": this.authority,
                    "issuer": (_a18 = this.s.issuer) !== null && _a18 !== void 0 ? _a18 : "unknown"
                });
            }
            if (this.s.t === "connecting") {
                await this.s.conn;
            }
        }
        return this.s;
    }
    setState(state) {
        var _a18, _b2;
        (_b2 = (_a18 = this.s).onExitState) === null || _b2 === void 0 ? void 0 : _b2.call(_a18);
        if (this.s.t == "ready" && this.s.isShuttingDown()) {
            const sd = this.s;
            this.shuttingDown.push(sd);
            sd.onClose = sd.onError = ()=>{
                const i = this.shuttingDown.indexOf(sd);
                if (i !== -1) {
                    this.shuttingDown.splice(i, 1);
                }
            };
        }
        switch(state.t){
            case "connecting":
                state.conn.then((value)=>{
                    this.setState(ready2(value, this.options));
                }, (reason)=>{
                    this.setState(closedOrError2(reason));
                });
                break;
            case "ready":
                state.onClose = ()=>this.setState(closed2());
                state.onError = (err)=>this.setState(closedOrError2(err));
                break;
            case "closed":
                break;
            case "error":
                break;
            case "unavailable":
                break;
        }
        this.s = state;
    }
    verify(stateReady) {
        if (this.verifying !== void 0) {
            return this.verifying;
        }
        this.verifying = stateReady.verify().then((success)=>{
            if (success) {
                return;
            }
            this.setState(connect3(this.authority, this.http2SessionOptions));
        }, (reason)=>{
            this.setState(closedOrError2(reason));
        }).finally(()=>{
            this.verifying = void 0;
        });
        return this.verifying;
    }
};
exports2.Http2SessionManager = Http2SessionManager2;
function closed2() {
    return {
        t: "closed"
    };
}
function error3(reason) {
    return {
        t: "error",
        reason
    };
}
function closedOrError2(reason) {
    const isCancel = reason instanceof connect_1.ConnectError && connect_1.ConnectError.from(reason).code == connect_1.Code.Canceled;
    return isCancel ? closed2() : error3(reason);
}
function connect3(authority, http2SessionOptions) {
    let resolve36;
    let reject2;
    const conn = new Promise((res, rej)=>{
        resolve36 = res;
        reject2 = rej;
    });
    const newConn = http23.connect(authority, http2SessionOptions);
    newConn.on("connect", onConnect);
    newConn.on("error", onError);
    function onConnect() {
        resolve36 === null || resolve36 === void 0 ? void 0 : resolve36(newConn);
        cleanup();
    }
    function onError(err) {
        reject2 === null || reject2 === void 0 ? void 0 : reject2((0, node_error_js_1.connectErrorFromNodeReason)(err));
        cleanup();
    }
    function cleanup() {
        newConn.off("connect", onConnect);
        newConn.off("error", onError);
    }
    return {
        t: "connecting",
        conn,
        abort (reason) {
            if (!newConn.destroyed) {
                newConn.destroy(void 0, http23.constants.NGHTTP2_CANCEL);
            }
            reject2 === null || reject2 === void 0 ? void 0 : reject2(reason);
        },
        onExitState () {
            cleanup();
        }
    };
}
function ready2(conn, options2) {
    var _b2, _c;
    assertSessionOpen2(conn);
    if (conn.encrypted === true && conn.alpnProtocol !== "h2") {
        var socket = conn.socket;
        var getPeerCertificate = socket === null || socket === void 0 ? void 0 : socket.getPeerCertificate;
        var issuer = typeof getPeerCertificate === "function" ? (_c = (_b2 = getPeerCertificate.call(socket)) === null || _b2 === void 0 ? void 0 : _b2.issuer) === null || _c === void 0 ? void 0 : _c.CN : void 0;
        if (!conn.destroyed) {
            conn.destroy();
        }
        return {
            t: "unavailable",
            issuer
        };
    }
    conn.unref();
    let lastAliveAt = Date.now();
    let streamCount = 0;
    let pingIntervalId;
    let pingTimeoutId;
    let receivedGoAway = false;
    let receivedGoAwayEnhanceYourCalmTooManyPings = false;
    let idleTimeoutId;
    resetIdleTimeout();
    const state = {
        t: "ready",
        conn,
        streamCount () {
            return streamCount;
        },
        requiresVerify () {
            const elapsedMs2 = Date.now() - lastAliveAt;
            return elapsedMs2 > options2.pingIntervalMs;
        },
        isShuttingDown () {
            return receivedGoAway;
        },
        onClose: void 0,
        onError: void 0,
        registerRequest (stream3) {
            streamCount++;
            if (streamCount == 1) {
                conn.ref();
                resetPingInterval();
                stopIdleTimeout();
            }
            stream3.once("response", ()=>{
                lastAliveAt = Date.now();
                resetPingInterval();
            });
            stream3.once("close", ()=>{
                streamCount--;
                if (streamCount == 0) {
                    conn.unref();
                    resetPingInterval();
                    resetIdleTimeout();
                }
            });
        },
        responseByteRead (stream3) {
            if (stream3.session !== conn) {
                return;
            }
            if (conn.closed || conn.destroyed) {
                return;
            }
            if (streamCount <= 0) {
                return;
            }
            lastAliveAt = Date.now();
            resetPingInterval();
        },
        verify () {
            conn.ref();
            return new Promise((resolve36)=>{
                let settled = false;
                const finish = (success)=>{
                    if (settled) {
                        return;
                    }
                    settled = true;
                    clearTimeout(verifyTimeoutId);
                    conn.off("error", onFail);
                    conn.off("close", onFail);
                    if (success && streamCount == 0) {
                        conn.unref();
                    }
                    resolve36(success);
                };
                const onFail = ()=>finish(false);
                conn.on("error", onFail);
                conn.on("close", onFail);
                const verifyTimeoutId = safeSetTimeout2(()=>{
                    state.abort(new connect_1.ConnectError("PING timed out", connect_1.Code.Unavailable));
                    finish(false);
                }, options2.pingTimeoutMs);
                commonPing(()=>finish(true));
            });
        },
        abort (reason) {
            if (!conn.destroyed) {
                conn.once("error", ()=>{});
                conn.destroy(reason, http23.constants.NGHTTP2_CANCEL);
            }
        },
        onExitState () {
            if (state.isShuttingDown()) {
                return;
            }
            cleanup();
            this.onError = void 0;
            this.onClose = void 0;
        }
    };
    function resetPingInterval() {
        stopPingInterval();
        if (streamCount > 0 || options2.pingIdleConnection) {
            pingIntervalId = safeSetTimeout2(onPingInterval, options2.pingIntervalMs);
        }
    }
    function stopPingInterval() {
        clearTimeout(pingIntervalId);
        clearTimeout(pingTimeoutId);
    }
    function onPingInterval() {
        commonPing(resetPingInterval);
    }
    function commonPing(onSuccess) {
        clearTimeout(pingTimeoutId);
        pingTimeoutId = safeSetTimeout2(()=>{
            conn.destroy(new connect_1.ConnectError("PING timed out", connect_1.Code.Unavailable), http23.constants.NGHTTP2_CANCEL);
        }, options2.pingTimeoutMs);
        conn.ping((err, duration3)=>{
            clearTimeout(pingTimeoutId);
            if (err !== null) {
                return;
            }
            if (duration3 > options2.pingTimeoutMs) {
                conn.destroy(new connect_1.ConnectError("PING timed out", connect_1.Code.Unavailable), http23.constants.NGHTTP2_CANCEL);
                return;
            }
            lastAliveAt = Date.now();
            onSuccess();
        });
    }
    function stopIdleTimeout() {
        clearTimeout(idleTimeoutId);
    }
    function resetIdleTimeout() {
        idleTimeoutId = safeSetTimeout2(onIdleTimeout, options2.idleConnectionTimeoutMs);
    }
    function onIdleTimeout() {
        conn.close();
        onClose();
    }
    function onGoaway(errorCode3, lastStreamID, opaqueData) {
        receivedGoAway = true;
        const tooManyPingsAscii = Buffer.from("too_many_pings", "ascii");
        if (errorCode3 === http23.constants.NGHTTP2_ENHANCE_YOUR_CALM && opaqueData != null && opaqueData.equals(tooManyPingsAscii)) {
            options2.pingIntervalMs = options2.pingIntervalMs * 2;
            receivedGoAwayEnhanceYourCalmTooManyPings = true;
        }
        if (errorCode3 === http23.constants.NGHTTP2_NO_ERROR) {
            const nodeMajor = parseInt(process.versions.node.split(".")[0], 10);
            if (streamCount == 0 && nodeMajor >= 18) {
                conn.destroy(new connect_1.ConnectError("received GOAWAY without any open streams", connect_1.Code.Canceled), http23.constants.NGHTTP2_NO_ERROR);
            }
        }
    }
    function onClose() {
        var _a18;
        cleanup();
        (_a18 = state.onClose) === null || _a18 === void 0 ? void 0 : _a18.call(state);
    }
    function onError(err) {
        var _a18, _b3;
        cleanup();
        if (receivedGoAwayEnhanceYourCalmTooManyPings) {
            const ce2 = new connect_1.ConnectError(`http/2 connection closed with error code ENHANCE_YOUR_CALM (0x${http23.constants.NGHTTP2_ENHANCE_YOUR_CALM.toString(16)}), too_many_pings, doubled the interval`, connect_1.Code.ResourceExhausted);
            (_a18 = state.onError) === null || _a18 === void 0 ? void 0 : _a18.call(state, ce2);
        } else {
            (_b3 = state.onError) === null || _b3 === void 0 ? void 0 : _b3.call(state, (0, node_error_js_1.connectErrorFromNodeReason)(err));
        }
    }
    function cleanup() {
        stopPingInterval();
        stopIdleTimeout();
        conn.off("error", onError);
        conn.off("close", onClose);
        conn.off("goaway", onGoaway);
    }
    conn.on("error", onError);
    conn.on("close", onClose);
    conn.on("goaway", onGoaway);
    return state;
}
function safeSetTimeout2(callback, ms2) {
    if (ms2 > 2147483647) {
        return;
    }
    return setTimeout(callback, ms2).unref();
}
function assertSessionOpen2(conn) {
    if (conn.connecting) {
        throw new connect_1.ConnectError("expected open session, but it is connecting", connect_1.Code.Internal);
    }
    if (conn.destroyed) {
        throw new connect_1.ConnectError("expected open session, but it is destroyed", connect_1.Code.Internal);
    }
    if (conn.closed) {
        throw new connect_1.ConnectError("expected open session, but it is closed", connect_1.Code.Internal);
    }
}

return exports2;
}
