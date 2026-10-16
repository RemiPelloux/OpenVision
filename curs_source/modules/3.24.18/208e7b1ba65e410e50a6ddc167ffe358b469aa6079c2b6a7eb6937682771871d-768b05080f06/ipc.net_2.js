import { ae, it } from "./buffer.js";
import { Ve } from "./errors.js";
import { O, se, yn } from "./event.js";
import { Qr, u0 } from "./ipc.js";
import { g0, h0, tF } from "./ipc.net.js";
import { j } from "./lifecycle.js";
import { Ce } from "./path.js";
import { Yr, oe } from "./platform.js";
import { h } from "./tslib.es6.js";
import { Wn } from "./uuid.js";
var nF, rp, zl, f0, rF;
export { f0, nF, rF, rp, zl };
var __wakaru_ST_initialized = false;
export function ST() {
if (__wakaru_ST_initialized) return;
__wakaru_ST_initialized = true;
"use strict";
h(), it(), Ve(), se(), j(), Ce(), oe(), Wn(), Qr(), tF(), nF = 3e4, rp = class {
    constructor(e, t = ""){
        this._canWrite = !0, this.debugLabel = t, this.socket = e, this.traceSocketEvent("created", {
            type: "NodeSocket"
        }), this._errorListener = (r)=>{
            if (this.traceSocketEvent("error", {
                code: r?.code,
                message: r?.message
            }), r) {
                if (r.code === "EPIPE") return;
                yn(r);
            }
        }, this.socket.on("error", this._errorListener);
        let n;
        this._closeListener = (r)=>{
            this.traceSocketEvent("close", {
                hadError: r
            }), this._canWrite = !1, n && clearTimeout(n);
        }, this.socket.on("close", this._closeListener), this._endListener = ()=>{
            this.traceSocketEvent("nodeEndReceived"), this._canWrite = !1, n = setTimeout(()=>e.destroy(), nF);
        }, this.socket.on("end", this._endListener);
    }
    traceSocketEvent(e, t) {
        h0.traceSocketEvent(this.socket, this.debugLabel, e, t);
    }
    dispose() {
        this.socket.off("error", this._errorListener), this.socket.off("close", this._closeListener), this.socket.off("end", this._endListener), this.socket.destroy();
    }
    onData(e) {
        const t = (n)=>{
            this.traceSocketEvent("read", n), e(ae.wrap(n));
        };
        return this.socket.on("data", t), {
            dispose: ()=>this.socket.off("data", t)
        };
    }
    onClose(e) {
        const t = (n)=>{
            e({
                type: 0,
                hadError: n,
                error: void 0
            });
        };
        return this.socket.on("close", t), {
            dispose: ()=>this.socket.off("close", t)
        };
    }
    onEnd(e) {
        const t = ()=>{
            e();
        };
        return this.socket.on("end", t), {
            dispose: ()=>this.socket.off("end", t)
        };
    }
    write(e) {
        if (!(this.socket.destroyed || !this._canWrite)) try {
            this.traceSocketEvent("write", e), this.socket.write(e.buffer, (t)=>{
                if (t) {
                    if (t.code === "EPIPE") return;
                    yn(t);
                }
            });
        } catch (t) {
            if (t.code === "EPIPE") return;
            yn(t);
        }
    }
    end() {
        this.traceSocketEvent("nodeEndSent"), this.socket.end();
    }
    drain() {
        return this.traceSocketEvent("nodeDrainBegin"), new Promise((e, t)=>{
            if (this.socket.bufferSize === 0) {
                this.traceSocketEvent("nodeDrainEnd"), e();
                return;
            }
            const n = ()=>{
                this.socket.off("close", n), this.socket.off("end", n), this.socket.off("error", n), this.socket.off("timeout", n), this.socket.off("drain", n), this.traceSocketEvent("nodeDrainEnd"), e();
            };
            this.socket.on("close", n), this.socket.on("end", n), this.socket.on("error", n), this.socket.on("timeout", n), this.socket.on("drain", n);
        });
    }
}, zl = process.env.XDG_RUNTIME_DIR, f0 = {
    [Yr.Linux]: 107,
    [Yr.Mac]: 103
}, rF = class Y9e extends u0 {
    static toClientConnectionEvent(t) {
        const n = O.fromNodeEventEmitter(t, "connection");
        return O.map(n, (r)=>({
                protocol: new g0(new rp(r, "ipc-server-connection")),
                onDidClientDisconnect: O.once(O.fromNodeEventEmitter(r, "close"))
            }));
    }
    constructor(t){
        super(Y9e.toClientConnectionEvent(t)), this.server = t;
    }
    dispose() {
        super.dispose(), this.server && (this.server.close(), this.server = null);
    }
};

}
