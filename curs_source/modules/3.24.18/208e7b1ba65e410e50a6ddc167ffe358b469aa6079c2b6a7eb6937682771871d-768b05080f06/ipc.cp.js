import { iT, le } from "./async.js";
import { ae, it } from "./buffer.js";
import { Ie, Mt } from "./cancellation.js";
import { UVe } from "./console_3.js";
import { Ve } from "./errors.js";
import { N, O, ge, se } from "./event.js";
import { Ml } from "./extensionHostStarter_2.js";
import { Qr, Wl, np } from "./ipc.js";
import { j, ve } from "./lifecycle.js";
import { ns } from "./objects.js";
import { ee } from "./platform.js";
import { nS } from "./processes.js";
import { ah } from "./processes_2.js";
import { h } from "./tslib.es6.js";
import { Ws, y7 } from "./utilityProcess.js";
import { fork as xVe } from "child_process";
function wGe(e) {
    let t = [], n = !1;
    const r = function(s) {
        if (n) {
            t.push(s);
            return;
        }
        (!e.send(s, (a)=>{
            if (a && console.error(a), n = !1, t.length > 0) {
                const o = t.slice(0);
                t = [], o.forEach((l)=>r(l));
            }
        }) || ee) && (n = !0);
    };
    return {
        send: r
    };
}
function NVe(e) {
    const t = e;
    return t && typeof t.type == "string" && typeof t.severity == "string";
}
function DVe(e) {
    const t = [];
    let n;
    try {
        const r = JSON.parse(e.arguments), s = r[r.length - 1];
        s && s.__$stack && (r.pop(), n = s.__$stack), t.push(...r);
    } catch  {
        t.push("Unable to log remote console arguments", e.arguments);
    }
    return {
        args: t,
        stack: n
    };
}
function OVe(e) {
    if (!e) return e;
    const t = e.indexOf(`
`);
    return t === -1 ? e : e.substring(0, t);
}
function LVe(e, t) {
    const { args: n, stack: r } = DVe(e), s = typeof n[0] == "string" && n.length === 1;
    let i = OVe(r);
    i && (i = `(${i.trim()})`);
    let a = [];
    if (typeof n[0] == "string" ? i && s ? a = [
        `%c[${t}] %c${n[0]} %c${i}`,
        jd("blue"),
        jd(""),
        jd("grey")
    ] : a = [
        `%c[${t}] %c${n[0]}`,
        jd("blue"),
        jd(""),
        ...n.slice(1)
    ] : a = [
        `%c[${t}]%`,
        jd("blue"),
        ...n
    ], i && !s && a.push(i), typeof console[e.severity] != "function") throw new Error("Unknown console method");
    console[e.severity].apply(console, a);
}
function jd(e) {
    return `color: ${e}`;
}
var a$;
export { DVe, LVe, NVe, OVe, a$, jd, wGe };
var __wakaru_FVe_initialized = false;
export function FVe() {
if (__wakaru_FVe_initialized) return;
__wakaru_FVe_initialized = true;
"use strict";
h(), le(), it(), Mt(), UVe(), Ve(), se(), j(), ns(), ah(), nS(), Qr(), a$ = class {
    constructor(e, t){
        this.modulePath = e, this.options = t, this.activeRequests = new ve, this.channels = new Map, this._onDidProcessExit = new N, this.onDidProcessExit = this._onDidProcessExit.event;
        const n = t && t.timeout ? t.timeout : 6e4;
        this.disposeDelayer = new iT(n), this.child = null, this._client = null;
    }
    getChannel(e) {
        const t = this;
        return {
            call (n, r, s) {
                return t.requestPromise(e, n, r, s);
            },
            listen (n, r) {
                return t.requestEvent(e, n, r);
            }
        };
    }
    requestPromise(e, t, n, r = Ie.None) {
        if (!this.disposeDelayer) return Promise.reject(new Error("disposed"));
        if (r.isCancellationRequested) return Promise.reject(Ml());
        this.disposeDelayer.cancel();
        const s = this.getCachedChannel(e), i = Wl((d)=>s.call(t, n, d)), a = r.onCancellationRequested(()=>i.cancel()), o = ge(()=>i.cancel());
        this.activeRequests.add(o);
        const l = ()=>{
            a.dispose(), this.activeRequests.deleteAndLeak(o), this.activeRequests.size === 0 && this.disposeDelayer && this.disposeDelayer.trigger(()=>this.disposeClient());
        };
        return i.then(l, l), i;
    }
    requestEvent(e, t, n) {
        if (!this.disposeDelayer) return O.None;
        this.disposeDelayer.cancel();
        let r;
        const s = new N({
            onWillAddFirstListener: ()=>{
                r = this.getCachedChannel(e).listen(t, n)(s.fire, s), this.activeRequests.add(r);
            },
            onDidRemoveLastListener: ()=>{
                this.activeRequests.delete(r), this.activeRequests.size === 0 && this.disposeDelayer && this.disposeDelayer.trigger(()=>this.disposeClient());
            }
        });
        return s.event;
    }
    get client() {
        if (!this._client) {
            const e = this.options && this.options.args ? this.options.args : [], t = Object.create(null);
            t.env = {
                ...Ws(process.env),
                VSCODE_PARENT_PID: String(process.pid)
            }, this.options && this.options.env && (t.env = {
                ...t.env,
                ...this.options.env
            }), this.options && this.options.freshExecArgv && (t.execArgv = []), this.options && typeof this.options.debug == "number" && (t.execArgv = [
                "--nolazy",
                "--inspect=" + this.options.debug
            ]), this.options && typeof this.options.debugBrk == "number" && (t.execArgv = [
                "--nolazy",
                "--inspect-brk=" + this.options.debugBrk
            ]), t.execArgv === void 0 && (t.execArgv = process.execArgv.filter((u)=>!/^--inspect(-brk)?=/.test(u)).filter((u)=>!u.startsWith("--vscode-"))), t.serialization = "advanced", y7(t.env), this.child = xVe(this.modulePath, e, t);
            const n = new N, s = O.fromNodeEventEmitter(this.child, "message", (u)=>u)((u)=>{
                if (NVe(u)) {
                    LVe(u, `IPC Library: ${this.options.serverName}`);
                    return;
                }
                u instanceof Uint8Array ? n.fire(ae.wrap(u)) : console.warn(`IPC "${this.options.serverName}" dropped an unexpected non-binary message`);
            }), i = this.options.useQueue ? wGe(this.child) : this.child, a = (u)=>this.child && this.child.connected && i.send(u.buffer), o = n.event, l = {
                send: a,
                onMessage: o
            };
            this._client = new np(l);
            const d = ()=>this.disposeClient();
            process.once("exit", d), this.child.on("error", (u)=>console.warn('IPC "' + this.options.serverName + '" errored with ' + u)), this.child.on("exit", (u, m)=>{
                process.removeListener("exit", d), s.dispose(), this.activeRequests.clear(), u !== 0 && m !== "SIGTERM" && console.warn('IPC "' + this.options.serverName + '" crashed with exit code ' + u + " and signal " + m), this.disposeDelayer?.cancel(), this.disposeClient(), this._onDidProcessExit.fire({
                    code: u,
                    signal: m
                });
            });
        }
        return this._client;
    }
    getCachedChannel(e) {
        let t = this.channels.get(e);
        return t || (t = this.client.getChannel(e), this.channels.set(e, t)), t;
    }
    disposeClient() {
        this._client && (this.child && (this.child.kill(), this.child = null), this._client = null, this.channels.clear());
    }
    dispose() {
        this._onDidProcessExit.dispose(), this.disposeDelayer?.cancel(), this.disposeDelayer = void 0, this.disposeClient(), this.activeRequests.dispose();
    }
};

}
