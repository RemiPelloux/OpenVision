import { le } from "./async.js";
import { ae, it } from "./buffer.js";
import { N, se } from "./event.js";
import { Hn } from "./ipc.js";
import { j, ve } from "./lifecycle.js";
import { h } from "./tslib.es6.js";
function fit([e, t, n, r]) {
    return {
        url: e,
        method: t,
        headers: n,
        body: r
    };
}
function _it(e) {
    switch(e.type){
        case "head":
            return [
                "head",
                e.status,
                e.headers
            ];
        case "chunk":
            return [
                "chunk",
                e.data
            ];
        case "end":
            return [
                "end"
            ];
        case "error":
            return [
                "error",
                e.message,
                e.aborted,
                e.refused === !0
            ];
    }
}
function C9(e) {
    try {
        return new URL(e);
    } catch  {
        return;
    }
}
function Tit(e, t) {
    const n = C9(e);
    return n === void 0 || n.username !== "" || n.password !== "" ? !1 : t.origins.includes(n.origin) ? !0 : t.allowDevLoopback && (n.protocol === "https:" || n.protocol === "http:") && lke.has(n.hostname);
}
function kit(e) {
    const t = e.toLowerCase();
    return dke.has(t) || t.startsWith(uke);
}
function yit(e, t, n) {
    if (typeof e.url != "string" || typeof e.method != "string" || !Array.isArray(e.headers) || e.body !== void 0 && !(e.body instanceof ae)) return "malformed request";
    if (e.method !== "POST") return "method not allowed";
    const r = C9(e.url);
    if (r === void 0 || !Tit(e.url, t)) return "origin not allowed";
    if (/[?#]/.test(e.url) || !pke.test(r.pathname)) return "path not allowed";
    if ((e.body?.byteLength ?? 0) > n.maxRequestBodyBytes) return "request body too large";
    let s;
    for (const i of e.headers){
        if (!Array.isArray(i) || typeof i[0] != "string" || typeof i[1] != "string") return "malformed request";
        if (!kit(i[0])) return `header not allowed: ${i[0]}`;
        i[0].toLowerCase() === "content-type" && (s = i[1].toLowerCase());
    }
    if (s === void 0 || !mke.has(s)) return "content type not allowed";
}
function wit(e) {
    for (const t of e.inFlight)t.abort(new Error("session closed"));
    e.inFlight.clear();
}
var ske, ike, ake, oke, I9, cke, lke, dke, uke, mke, pke, hke, gke, fke;
export { C9, I9, Tit, _it, ake, cke, dke, fit, fke, gke, hke, ike, kit, lke, mke, oke, pke, ske, uke, wit, yit };
var __wakaru_Eit_initialized = false;
export function Eit() {
if (__wakaru_Eit_initialized) return;
__wakaru_Eit_initialized = true;
"use strict";
h(), le(), it(), se(), j(), ske = "cursorStartupHttp", ike = "fetch", ake = "open", oke = "close", I9 = [
    "https://api2.cursor.sh",
    "https://api.origin.cursor.com"
], cke = [
    "https://staging.cursor.sh",
    "https://dev-staging.cursor.sh",
    "https://api.origin-staging.cursor.com"
], lke = new Set([
    "localhost",
    "127.0.0.1",
    "lclhst.build"
]), dke = new Set([
    "authorization",
    "content-type",
    "connect-protocol-version",
    "connect-timeout-ms",
    "connect-accept-encoding",
    "connect-content-encoding",
    "user-agent",
    "traceparent",
    "x-request-id",
    "x-amzn-trace-id",
    "x-ghost-mode",
    "x-new-onboarding-completed",
    "x-session-id",
    "x-client-key",
    "x-dev-experiment-overrides",
    "local-client-mode"
]), uke = "x-cursor-", mke = new Set([
    "application/proto",
    "application/connect+proto"
]), pke = /^\/(aiserver|origin)\.v1\.[A-Z][A-Za-z0-9]*\/[A-Z][A-Za-z0-9]*$/, hke = {
    maxRequestBodyBytes: 4 * 1024 * 1024,
    maxResponseBytes: 32 * 1024 * 1024,
    headTimeoutMs: 3e4,
    maxLifetimeMs: 5 * 6e4,
    maxInFlight: 64,
    sessionMaxMs: 12e4
}, gke = new Set([
    "content-encoding",
    "content-length",
    "set-cookie",
    "set-cookie2"
]), fke = class {
    constructor(e){
        this.options = e, this.sessions = new Map, this.limits = {
            ...hke,
            ...e.limits
        };
    }
    async call(e, t) {
        switch(t){
            case ake:
                return this.open(e);
            case oke:
                if (typeof e == "string") {
                    const n = this.sessions.get(e);
                    n !== void 0 && this.closeSession(n);
                }
                return;
        }
        throw new Error(`Call not found: ${t}`);
    }
    open(e) {
        if (typeof e != "string" || !this.options.isTrustedCaller(e)) throw new Error("caller not allowed");
        if (!this.options.isEnabled()) throw new Error("startup HTTP is disabled");
        this.forgetCaller(e);
        const t = {
            closed: !1,
            inFlight: new Set,
            timers: new ve
        };
        return this.sessions.set(e, t), t.timers.add(Hn(()=>this.closeSession(t), this.limits.sessionMaxMs)), this.options.originPolicy();
    }
    closeSession(e) {
        e.closed || (e.closed = !0);
    }
    forgetCaller(e) {
        if (typeof e != "string") return;
        const t = this.sessions.get(e);
        t !== void 0 && (this.sessions.delete(e), t.closed = !0, wit(t), t.timers.dispose());
    }
    dispose() {
        for (const e of [
            ...this.sessions.keys()
        ])this.forgetCaller(e);
    }
    refusal(e) {
        if (typeof e != "string" || !this.options.isTrustedCaller(e)) return "caller not allowed";
        const t = this.sessions.get(e);
        if (t === void 0) return "no open session";
        if (t.closed) return "session closed";
        if (t.inFlight.size >= this.limits.maxInFlight) return "too many requests in flight";
    }
    start(e, t, n, r) {
        const s = this.refusal(e);
        if (s !== void 0) {
            r({
                type: "error",
                message: s,
                aborted: !1,
                refused: !0
            });
            return;
        }
        const i = this.sessions.get(e);
        i.inFlight.add(n), this.run(t, n, r).finally(()=>i.inFlight.delete(n));
    }
    listen(e, t, n) {
        if (t !== ike) throw new Error(`Event not found: ${t}`);
        const r = fit(n), s = new AbortController, i = new N({
            onDidAddFirstListener: ()=>{
                queueMicrotask(()=>this.start(e, r, s, (a)=>i.fire(_it(a))));
            },
            onDidRemoveLastListener: ()=>{
                s.abort(), i.dispose();
            }
        });
        return i.event;
    }
    async run(e, t, n) {
        const r = t.signal;
        if (r.aborted) return;
        const s = yit(e, this.options.originPolicy(), this.limits);
        if (s !== void 0) {
            n({
                type: "error",
                message: s,
                aborted: !1,
                refused: !0
            });
            return;
        }
        const i = new ve;
        r.addEventListener("abort", ()=>i.dispose(), {
            once: !0
        });
        let a;
        const o = (d)=>{
            a ??= d, t.abort();
        }, l = i.add(Hn(()=>o("timed out waiting for the response"), this.limits.headTimeoutMs));
        i.add(Hn(()=>o("request exceeded its maximum lifetime"), this.limits.maxLifetimeMs));
        try {
            const d = new Headers(e.headers);
            d.set("Accept-Encoding", "identity");
            const u = await this.options.fetch(e.url, {
                method: "POST",
                headers: d,
                body: e.body ? new Uint8Array(e.body.buffer) : void 0,
                signal: r,
                redirect: "error",
                credentials: "omit",
                cache: "no-store"
            });
            i.delete(l);
            const m = [];
            if (u.headers.forEach((f, v)=>{
                gke.has(v.toLowerCase()) || m.push([
                    v,
                    f
                ]);
            }), n({
                type: "head",
                status: u.status,
                headers: m
            }), u.body) {
                const f = u.body.getReader();
                let v = 0;
                for(;;){
                    const { done: T, value: S } = await f.read();
                    if (T) break;
                    if (v += S.byteLength, v > this.limits.maxResponseBytes) throw o("response too large"), await f.cancel(), new Error("response too large");
                    n({
                        type: "chunk",
                        data: ae.wrap(S)
                    });
                }
            }
            n({
                type: "end"
            });
        } catch (d) {
            n({
                type: "error",
                message: a ?? (d instanceof Error ? d.message : String(d)),
                aborted: r.aborted && a === void 0
            });
        } finally{
            i.dispose();
        }
    }
};

}
