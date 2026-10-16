import { __toESM } from "../../../../../../../../agent-host/dist/storage/sqlite-store.js";
import { closed, closedOrError, connect2, ready } from "../../../../../../../../dashboard_connect_exports.js";
import { init_node_error } from "./node-error.js";
import { Code } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { ConnectError } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { init_esm3 } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
var http2, Http2SessionManager;
export { Http2SessionManager, http2 };
var __wakaru_init_http2_session_manager_initialized = false;
export function init_http2_session_manager() {
if (__wakaru_init_http2_session_manager_initialized) return;
__wakaru_init_http2_session_manager_initialized = true;
http2 = __toESM(require("http2"), 1);
init_esm3();
init_node_error();
Http2SessionManager = class {
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
        this.s = closed();
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
            const ready2 = await this.gotoReady();
            return ready2.streamCount() > 0 ? "open" : "idle";
        } catch (e) {
            return "error";
        }
    }
    async request(method, path64, headers, options2) {
        for(;;){
            const ready2 = await this.gotoReady();
            try {
                const stream3 = ready2.conn.request(Object.assign(Object.assign({}, headers), {
                    ":method": method,
                    ":path": path64
                }), options2);
                ready2.registerRequest(stream3);
                return stream3;
            } catch (e) {
                if (ready2.conn.closed || ready2.conn.destroyed) {
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
        const err = reason !== null && reason !== void 0 ? reason : new ConnectError("connection aborted", Code.Canceled);
        (_b2 = (_a18 = this.s).abort) === null || _b2 === void 0 ? void 0 : _b2.call(_a18, err);
        for (const s3 of this.shuttingDown){
            (_c = s3.abort) === null || _c === void 0 ? void 0 : _c.call(s3, err);
        }
        this.setState(closedOrError(err));
    }
    abortCurrent(reason) {
        var _a18, _b2;
        const current = this.s;
        if (current.t === "ready" && current.isShuttingDown()) {
            return;
        }
        const err = reason !== null && reason !== void 0 ? reason : new ConnectError("connection aborted", Code.Canceled);
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
                this.setState(connect2(this.authority, this.http2SessionOptions));
            } else if (this.s.requiresVerify()) {
                await this.verify(this.s);
            }
        } else if (this.s.t == "closed" || this.s.t == "error") {
            this.setState(connect2(this.authority, this.http2SessionOptions));
        }
        while(this.s.t !== "ready"){
            if (this.s.t === "error") {
                throw this.s.reason;
            }
            if (this.s.t === "unavailable") {
                throw new ConnectError("expected h2 session, but ALPN protocol failed to negotiate", Code.Unavailable, {
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
                    this.setState(ready(value, this.options));
                }, (reason)=>{
                    this.setState(closedOrError(reason));
                });
                break;
            case "ready":
                state.onClose = ()=>this.setState(closed());
                state.onError = (err)=>this.setState(closedOrError(err));
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
            this.setState(connect2(this.authority, this.http2SessionOptions));
        }, (reason)=>{
            this.setState(closedOrError(reason));
        }).finally(()=>{
            this.verifying = void 0;
        });
        return this.verifying;
    }
};

}
