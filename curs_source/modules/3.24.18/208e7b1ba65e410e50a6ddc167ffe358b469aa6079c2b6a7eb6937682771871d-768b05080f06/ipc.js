import { Vn } from "./arrays.js";
import { le } from "./async.js";
import { ae, it } from "./buffer.js";
import { Ie, Jn, Mt } from "./cancellation.js";
import { Sr } from "./configurationRegistry.js";
import { sc } from "./decorators.js";
import { Ve, kt, wi } from "./errors.js";
import { Dv, N, O, ge, hR, se, t5 } from "./event.js";
import { Ov } from "./functional.js";
import { iR } from "./instantiationService.js";
import { Ut, j, oa, ve, yr } from "./lifecycle.js";
import { B3, pT } from "./marshalling.js";
import { rR } from "./platform_2.js";
import { jn } from "./strings.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { x } from "./uri.js";
function B(e, t, n, r) {
    var s = arguments.length, i = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(e, t, n, r);
    else for(var o = e.length - 1; o >= 0; o--)(a = e[o]) && (i = (s < 3 ? a(i) : s > 3 ? a(t, n, i) : a(t, n)) || i);
    return s > 3 && i && Object.defineProperty(t, n, i), i;
}
function cUe(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function B4(e) {
    return oa?.markAsSingleton(e), e;
}
function h5(e) {
    return e >= 65 && e <= 90;
}
function Wl(e) {
    const t = new Jn, n = e(t.token);
    let r = !1;
    const s = new Promise((i, a)=>{
        const o = t.token.onCancellationRequested(()=>{
            r = !0, o.dispose(), a(new kt);
        });
        Promise.resolve(n).then((l)=>{
            o.dispose(), t.dispose(), r ? iR(l) && l.dispose() : i(l);
        }, (l)=>{
            o.dispose(), t.dispose(), a(l);
        });
    });
    return new class {
        cancel() {
            t.cancel(), t.dispose();
        }
        then(i, a) {
            return s.then(i, a);
        }
        catch(i) {
            return this.then(void 0, i);
        }
        finally(i) {
            return s.finally(i);
        }
    };
}
function Hn(e, t = 0, n) {
    const r = setTimeout(()=>{
        e(), n && s.dispose();
    }, t), s = ge(()=>{
        clearTimeout(r), n?.delete(s);
    });
    return n?.add(s), s;
}
function Ue(e, t, n) {
    let r = null, s = null;
    if (typeof n.value == "function" ? (r = "value", s = n.value, s.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof n.get == "function" && (r = "get", s = n.get), !s) throw new Error("not supported");
    const i = `$memoize$${t}`;
    n[r] = function(...a) {
        return this.hasOwnProperty(i) || Object.defineProperty(this, i, {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: s.apply(this, a)
        }), this[i];
    };
}
function za(e, t = 0) {
    if (typeof e != "object" || e === null || t > 200) return e;
    switch(e.$mid){
        case 1:
            return x.revive(e);
        case 2:
            return new RegExp(e.source, e.flags);
        case 17:
            return new Date(e.source);
    }
    if (Array.isArray(e)) for(let n = 0; n < e.length; ++n){
        const r = e[n];
        if (r !== null && typeof r == "object") {
            const s = za(r, t + 1);
            s !== r && (e[n] = s);
        }
    }
    else {
        if (e instanceof ae || e instanceof Uint8Array) return e;
        for(const n in e)if (B3.call(e, n)) {
            const r = e[n];
            if (r !== null && typeof r == "object") {
                const s = za(r, t + 1);
                s !== r && (e[n] = s);
            }
        }
    }
    return e;
}
function ic(e) {
    switch(e){
        case 100:
            return "req";
        case 101:
            return "cancel";
        case 102:
            return "subscribe";
        case 103:
            return "unsubscribe";
    }
}
function ep(e) {
    switch(e){
        case 200:
            return "init";
        case 201:
            return "reply:";
        case 202:
        case 203:
            return "replyErr:";
        case 204:
            return "event:";
    }
}
function ac(e) {
    let t = 0;
    for(let n = 0;; n += 7){
        const r = e.readUInt8();
        if (t |= (r & 127) << n, !(r & 128)) return t;
    }
}
function oc(e, t) {
    if (t === 0) {
        e.writeUInt8(0);
        return;
    }
    do {
        let n = t & 127;
        t = t >>> 7, t > 0 && (n |= 128), e.writeUInt8(n);
    }while (t !== 0)
}
function m4e(e) {
    return !(e === null || typeof e != "object" || Array.isArray(e) || e instanceof ae || e instanceof Uint8Array || l0 && Buffer.isBuffer(e));
}
function p4e(e) {
    if (e.length < H3) return !1;
    for(let t = 0; t < e.length; t++)if (!m4e(e[t])) return !1;
    return !0;
}
function s0(e, t) {
    if (t.length >= j3) {
        const n = ae.fromString(t);
        oc(e, n.byteLength), e.writeReference(n);
        return;
    }
    ae.withPooledString(t, (n)=>{
        oc(e, n.byteLength), e.write(n);
    });
}
function Hl(e, t) {
    if (typeof t > "u") e.writeUInt8(0);
    else if (typeof t == "string") e.writeUInt8(1), s0(e, t);
    else if (l0 && Buffer.isBuffer(t)) e.writeUInt8(2), oc(e, t.byteLength), e.writeReference(ae.wrap(t));
    else if (t instanceof ae) e.writeUInt8(3), oc(e, t.byteLength), e.writeReference(t);
    else if (Array.isArray(t)) {
        if (p4e(t)) {
            const n = JSON.stringify(t);
            e.writeUInt8(5), s0(e, n);
            return;
        }
        e.writeUInt8(4), oc(e, t.length);
        for (const n of t)Hl(e, n);
    } else if (typeof t == "number" && (t | 0) === t) e.writeUInt8(6), oc(e, t);
    else if (t instanceof Uint8Array) e.writeUInt8(7), oc(e, t.length), e.writeReference(ae.wrap(t));
    else {
        const n = JSON.stringify(t);
        e.writeUInt8(5), s0(e, n);
    }
}
function ql(e) {
    switch(e.readUInt8()){
        case 0:
            return;
        case 1:
            return e.read(ac(e)).toString();
        case 2:
            return e.read(ac(e)).buffer;
        case 3:
            return e.read(ac(e));
        case 7:
            return e.read(ac(e)).buffer;
        case 4:
            {
                const n = ac(e), r = [];
                for(let s = 0; s < n; s++)r.push(ql(e));
                return r;
            }
        case 5:
            return JSON.parse(e.read(ac(e)).toString());
        case 6:
            return ac(e);
    }
}
function hT(e) {
    return {
        call (t, n, r) {
            return e.then((s)=>s.call(t, n, r));
        },
        listen (t, n) {
            const r = new hR;
            return e.then((s)=>r.input = s.listen(t, n)), r.event;
        }
    };
}
var i0, a0, G3, gT, o0, V3, $3, tp, c0, fT, l0, j3, H3, d0, np, u0, m0, q3, Oe;
export { $3, B, B4, G3, H3, Hl, Hn, Oe, Ue, V3, Wl, a0, ac, c0, cUe, d0, ep, fT, gT, h5, hT, i0, ic, j3, l0, m0, m4e, np, o0, oc, p4e, q3, ql, s0, tp, u0, za };
var __wakaru_Qr_initialized = false;
export function Qr() {
if (__wakaru_Qr_initialized) return;
__wakaru_Qr_initialized = true;
"use strict";
h(), Vn(), le(), it(), Mt(), sc(), Ve(), se(), Ov(), j(), pT(), jn(), Ze(), i0 = 50, a0 = !1, gT = class {
    constructor(e){
        this.buffer = e, this.pos = 0;
    }
    read(e) {
        const t = this.buffer.slice(this.pos, this.pos + e);
        return this.pos += t.byteLength, t;
    }
    readUInt8() {
        return this.buffer.readUInt8(this.pos++);
    }
}, o0 = 4 * 1024, V3 = 512 * 1024, $3 = 64 * 1024, c0 = ae.alloc(0), fT = class {
    constructor(){
        this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0, tp ? (this.data = tp, tp = void 0) : this.data = ae.alloc(o0);
    }
    get buffer() {
        if (!this.fragments) {
            const e = ae.alloc(this.length);
            return e.set(this.data.slice(0, this.length), 0), e;
        }
        return this.flushSegment(), ae.concat(this.fragments, this.totalLength);
    }
    ensureCapacity(e) {
        const t = this.length + e;
        if (t <= this.data.byteLength) return;
        let n = Math.max(this.data.byteLength * 2, o0);
        for(; n < t;)n *= 2;
        const r = ae.alloc(n);
        this.length > 0 && r.set(this.data.slice(0, this.length), 0), this.data = r;
    }
    flushSegment() {
        this.length > this.segmentStart && (this.fragments.push(this.data.slice(this.segmentStart, this.length)), this.segmentStart = this.length);
    }
    write(e) {
        this.ensureCapacity(e.byteLength), this.data.set(e, this.length), this.length += e.byteLength, this.totalLength += e.byteLength;
    }
    writeUInt8(e) {
        this.ensureCapacity(1), this.data.buffer[this.length++] = e, this.totalLength++;
    }
    writeReference(e) {
        if (e.byteLength < $3) {
            this.write(e);
            return;
        }
        this.fragments || (this.fragments = []), this.flushSegment(), this.fragments.push(e), this.totalLength += e.byteLength;
    }
    dispose() {
        !tp && this.data.byteLength <= V3 && this.data !== c0 && (tp = this.data), this.data = c0, this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0;
    }
}, l0 = typeof Buffer < "u", j3 = 64 * 1024, H3 = 8, d0 = class {
    constructor(e, t, n = null, r = 1e3){
        this.protocol = e, this.ctx = t, this.logger = n, this.timeoutDelay = r, this.channels = new Map, this.activeRequests = new Map, this.protocolListener = new Ut, this.pendingRequests = new Map, this.protocolListener.value = this.protocol.onMessage((s)=>this.onRawMessage(s)), this.sendResponse({
            type: 200
        });
    }
    registerChannel(e, t) {
        this.channels.set(e, t), setTimeout(()=>this.flushPendingRequests(e), 0);
    }
    sendResponse(e) {
        switch(e.type){
            case 200:
                {
                    const t = this.send([
                        e.type
                    ]);
                    this.logger?.logOutgoing(t, 0, 1, ep(e.type));
                    return;
                }
            case 201:
            case 202:
            case 204:
            case 203:
                {
                    const t = this.send([
                        e.type,
                        e.id
                    ], e.data);
                    this.logger?.logOutgoing(t, e.id, 1, ep(e.type), e.data);
                    return;
                }
        }
    }
    send(e, t = void 0) {
        const n = new fT;
        try {
            return Hl(n, e), Hl(n, t), this.sendBuffer(n.buffer);
        } finally{
            n.dispose();
        }
    }
    sendBuffer(e) {
        try {
            return this.protocol.send(e), e.byteLength;
        } catch  {
            return 0;
        }
    }
    onRawMessage(e) {
        const t = new gT(e), n = a0, r = n ? performance.now() : 0, s = ql(t), i = s[0];
        if (i !== 100 && i !== 101 && i !== 102 && i !== 103) return;
        const a = ql(t);
        if (n) {
            const o = performance.now() - r;
            o > i0 && G3?.({
                durationMs: o,
                byteLength: e.byteLength,
                requestId: s[1] ?? 0,
                channelName: s[2],
                command: s[3],
                messageType: ic(i)
            });
        }
        switch(i){
            case 100:
                return this.logger?.logIncoming(e.byteLength, s[1], 1, `${ic(i)}: ${s[2]}.${s[3]}`, a), this.onPromise({
                    type: i,
                    id: s[1],
                    channelName: s[2],
                    name: s[3],
                    arg: a
                });
            case 102:
                return this.logger?.logIncoming(e.byteLength, s[1], 1, `${ic(i)}: ${s[2]}.${s[3]}`, a), this.onEventListen({
                    type: i,
                    id: s[1],
                    channelName: s[2],
                    name: s[3],
                    arg: a
                });
            case 101:
                return this.logger?.logIncoming(e.byteLength, s[1], 1, `${ic(i)}`), this.disposeActiveRequest({
                    type: i,
                    id: s[1]
                });
            case 103:
                return this.logger?.logIncoming(e.byteLength, s[1], 1, `${ic(i)}`), this.disposeActiveRequest({
                    type: i,
                    id: s[1]
                });
        }
    }
    onPromise(e) {
        const t = this.channels.get(e.channelName);
        if (!t) {
            this.collectPendingRequest(e);
            return;
        }
        const n = new Jn;
        let r;
        try {
            r = t.call(this.ctx, e.name, e.arg, n.token);
        } catch (a) {
            r = Promise.reject(a);
        }
        const s = e.id;
        r.then((a)=>{
            this.sendResponse({
                id: s,
                data: a,
                type: 201
            });
        }, (a)=>{
            a instanceof Error ? this.sendResponse({
                id: s,
                data: {
                    message: a.message,
                    name: a.name,
                    stack: a.stack ? a.stack.split(`
`) : void 0
                },
                type: 202
            }) : this.sendResponse({
                id: s,
                data: a,
                type: 203
            });
        }).finally(()=>{
            i.dispose(), this.activeRequests.delete(e.id);
        });
        const i = ge(()=>n.cancel());
        this.activeRequests.set(e.id, i);
    }
    onEventListen(e) {
        const t = this.channels.get(e.channelName);
        if (!t) {
            this.collectPendingRequest(e);
            return;
        }
        const n = e.id, s = t.listen(this.ctx, e.name, e.arg)((i)=>this.sendResponse({
                id: n,
                data: i,
                type: 204
            }));
        this.activeRequests.set(e.id, s);
    }
    disposeActiveRequest(e) {
        const t = this.activeRequests.get(e.id);
        t && (t.dispose(), this.activeRequests.delete(e.id));
    }
    collectPendingRequest(e) {
        let t = this.pendingRequests.get(e.channelName);
        t || (t = [], this.pendingRequests.set(e.channelName, t));
        const n = Hn(()=>{
            console.error(`Unknown channel: ${e.channelName}`), e.type === 100 && this.sendResponse({
                id: e.id,
                data: {
                    name: "Unknown channel",
                    message: `Channel name '${e.channelName}' timed out after ${this.timeoutDelay}ms`,
                    stack: void 0
                },
                type: 202
            }), n.dispose();
        }, this.timeoutDelay);
        t.push({
            request: e,
            timeoutTimer: n
        });
    }
    flushPendingRequests(e) {
        const t = this.pendingRequests.get(e);
        if (t) {
            for (const n of t)switch(n.timeoutTimer.dispose(), n.request.type){
                case 100:
                    this.onPromise(n.request);
                    break;
                case 102:
                    this.onEventListen(n.request);
                    break;
            }
            this.pendingRequests.delete(e);
        }
    }
    dispose() {
        this.protocolListener.dispose(), yr(this.activeRequests.values()), this.activeRequests.clear();
        for (const e of this.pendingRequests.values())yr(e.map((t)=>t.timeoutTimer));
        this.pendingRequests.clear();
    }
}, np = class {
    constructor(e, t = null){
        this.protocol = e, this.isDisposed = !1, this.state = 0, this.activeRequests = new ve, this.handlers = new Map, this.lastRequestId = 0, this.protocolListener = new Ut, this._pendingRPCDetails = new Map, this._onDidInitialize = new N, this.onDidInitialize = this._onDidInitialize.event, this.initializeListener = new ve, this.protocolListener.value = this.protocol.onMessage((n)=>this.onBuffer(n)), this.logger = t;
    }
    getChannel(e) {
        const t = this;
        return {
            call (n, r, s) {
                return t.isDisposed ? Promise.reject(new kt) : t.requestPromise(e, n, r, s);
            },
            listen (n, r) {
                return t.isDisposed ? O.None : t.requestEvent(e, n, r);
            }
        };
    }
    requestPromise(e, t, n, r = Ie.None) {
        const s = this.lastRequestId++, a = {
            id: s,
            type: 100,
            channelName: e,
            name: t,
            arg: n
        };
        if (r.isCancellationRequested) return Promise.reject(new kt);
        let o, l;
        return new Promise((u, m)=>{
            if (r.isCancellationRequested) return m(new kt);
            const f = ()=>{
                const S = (k)=>{
                    switch(k.type){
                        case 201:
                            this.handlers.delete(s), this._pendingRPCDetails.delete(s), u(k.data);
                            break;
                        case 202:
                            {
                                this.handlers.delete(s), this._pendingRPCDetails.delete(s);
                                const y = new Error(k.data.message);
                                y.stack = Array.isArray(k.data.stack) ? k.data.stack.join(`
`) : k.data.stack, y.name = k.data.name, m(y);
                                break;
                            }
                        case 203:
                            this.handlers.delete(s), this._pendingRPCDetails.delete(s), m(k.data);
                            break;
                    }
                };
                this.handlers.set(s, S), this._pendingRPCDetails.set(s, {
                    channelName: e,
                    command: t
                });
                try {
                    this.sendRequest(a);
                } catch (k) {
                    this.handlers.delete(s), this._pendingRPCDetails.delete(s), m(k);
                }
            };
            let v = null;
            this.state === 1 ? f() : (v = Wl((S)=>this.whenInitialized()), v.then(()=>{
                v = null, f();
            }, ()=>{}));
            const T = ()=>{
                v ? (v.cancel(), v = null) : this.sendRequest({
                    id: s,
                    type: 101
                }), m(new kt);
            };
            o = r.onCancellationRequested(T), l = {
                dispose: Dv(()=>{
                    T(), o.dispose();
                })
            }, this.activeRequests.add(l);
        }).finally(()=>{
            o?.dispose(), this.activeRequests.deleteAndLeak(l), B4(l);
        });
    }
    requestEvent(e, t, n) {
        const r = this.lastRequestId++, i = {
            id: r,
            type: 102,
            channelName: e,
            name: t,
            arg: n
        };
        let a = null;
        const o = new N({
            onWillAddFirstListener: ()=>{
                if (this.isDisposed) return;
                const l = (u)=>o.fire(u.data);
                this.handlers.set(r, l);
                const d = ()=>{
                    this.activeRequests.add(o), this._pendingRPCDetails.set(r, {
                        channelName: e,
                        command: t
                    }), this.sendRequest(i);
                };
                this.state === 1 ? d() : (a = Wl((u)=>this.whenInitialized()), a.then(()=>{
                    a = null, d();
                }, ()=>{}));
            },
            onDidRemoveLastListener: ()=>{
                const l = this.handlers.delete(r);
                a ? (a.cancel(), a = null) : l && (this.activeRequests.deleteAndLeak(o), B4(o), this._pendingRPCDetails.delete(r), this.sendRequest({
                    id: r,
                    type: 103
                }));
            }
        });
        return o.event;
    }
    sendRequest(e) {
        switch(e.type){
            case 100:
            case 102:
                {
                    const t = this.send([
                        e.type,
                        e.id,
                        e.channelName,
                        e.name
                    ], e.arg);
                    this.logger?.logOutgoing(t, e.id, 0, `${ic(e.type)}: ${e.channelName}.${e.name}`, e.arg);
                    return;
                }
            case 101:
            case 103:
                {
                    const t = this.send([
                        e.type,
                        e.id
                    ]);
                    this.logger?.logOutgoing(t, e.id, 0, ic(e.type));
                    return;
                }
        }
    }
    send(e, t = void 0) {
        const n = new fT;
        try {
            return Hl(n, e), Hl(n, t), this.sendBuffer(n.buffer);
        } finally{
            n.dispose();
        }
    }
    sendBuffer(e) {
        try {
            return this.protocol.send(e), e.byteLength;
        } catch  {
            return 0;
        }
    }
    onBuffer(e) {
        const t = new gT(e), n = a0, r = n ? performance.now() : 0, s = ql(t), i = s[0];
        if (i !== 200 && i !== 201 && i !== 202 && i !== 203 && i !== 204) return;
        const a = ql(t);
        if (n) {
            const o = performance.now() - r;
            if (o > i0) {
                const l = s[1] ?? 0, d = this._pendingRPCDetails.get(l);
                G3?.({
                    durationMs: o,
                    byteLength: e.byteLength,
                    requestId: l,
                    channelName: d?.channelName,
                    command: d?.command,
                    messageType: ep(i)
                });
            }
        }
        switch(i){
            case 200:
                return this.logger?.logIncoming(e.byteLength, 0, 0, ep(i)), this.onResponse({
                    type: s[0]
                });
            case 201:
            case 202:
            case 204:
            case 203:
                return this.logger?.logIncoming(e.byteLength, s[1], 0, ep(i), a), this.onResponse({
                    type: s[0],
                    id: s[1],
                    data: a
                });
        }
    }
    onResponse(e) {
        if (e.type === 200) {
            this.state = 1, this._onDidInitialize.fire();
            return;
        }
        this.handlers.get(e.id)?.(e);
    }
    get onDidInitializePromise() {
        return O.toPromise(this.onDidInitialize, this.initializeListener);
    }
    whenInitialized() {
        return this.state === 1 ? Promise.resolve() : this.onDidInitializePromise;
    }
    dispose() {
        this.isDisposed = !0, this.protocolListener.dispose(), this.activeRequests.dispose(), this._pendingRPCDetails.clear(), this.handlers.clear(), this.initializeListener.dispose(), this._onDidInitialize.dispose();
    }
}, B([
    Ue
], np.prototype, "onDidInitializePromise", null), u0 = class {
    constructor(e, t, n){
        this.channels = new Map, this._connections = new Set, this._onDidAddConnection = new N, this.onDidAddConnection = this._onDidAddConnection.event, this._onDidRemoveConnection = new N, this.onDidRemoveConnection = this._onDidRemoveConnection.event, this.disposables = new ve, this.disposables.add(e(({ protocol: r, onDidClientDisconnect: s })=>{
            const i = O.once(r.onMessage), a = new ve, o = i((l)=>{
                const d = new gT(l), u = ql(d), m = new d0(r, u, t, n), f = new np(r, t);
                this.channels.forEach((T, S)=>m.registerChannel(S, T));
                const v = {
                    channelServer: m,
                    channelClient: f,
                    ctx: u
                };
                this._connections.add(v), this._onDidAddConnection.fire(v), a.add(s(()=>{
                    m.dispose(), f.dispose(), this._connections.delete(v), this._onDidRemoveConnection.fire(v), this.disposables.delete(a), a.dispose();
                }));
            });
            a.add(o), this.disposables.add(a);
        }));
    }
    get connections() {
        const e = [];
        return this._connections.forEach((t)=>e.push(t)), e;
    }
    getChannel(e, t) {
        const n = this;
        return {
            call (r, s, i) {
                let a;
                if (rR(t)) {
                    const l = cUe(n.connections.filter(t));
                    a = l ? Promise.resolve(l) : O.toPromise(O.filter(n.onDidAddConnection, t));
                } else a = t.routeCall(n, r, s);
                const o = a.then((l)=>l.channelClient.getChannel(e));
                return hT(o).call(r, s, i);
            },
            listen (r, s) {
                if (rR(t)) return n.getMulticastEvent(e, t, r, s);
                const i = t.routeEvent(n, r, s).then((a)=>a.channelClient.getChannel(e));
                return hT(i).listen(r, s);
            }
        };
    }
    getMulticastEvent(e, t, n, r) {
        const s = this;
        let i;
        const a = new N({
            onWillAddFirstListener: ()=>{
                i = new ve;
                const o = new t5, l = new Map, d = (m)=>{
                    const v = m.channelClient.getChannel(e).listen(n, r), T = o.add(v);
                    l.set(m, T);
                }, u = (m)=>{
                    const f = l.get(m);
                    f && (f.dispose(), l.delete(m));
                };
                s.connections.filter(t).forEach(d), O.filter(s.onDidAddConnection, t)(d, void 0, i), s.onDidRemoveConnection(u, void 0, i), o.event(a.fire, a, i), i.add(o);
            },
            onDidRemoveLastListener: ()=>{
                i?.dispose(), i = void 0;
            }
        });
        return s.disposables.add(a), a.event;
    }
    registerChannel(e, t) {
        this.channels.set(e, t);
        for (const n of this._connections)n.channelServer.registerChannel(e, t);
    }
    dispose() {
        this.disposables.dispose();
        for (const e of this._connections)e.channelClient.dispose(), e.channelServer.dispose();
        this._connections.clear(), this.channels.clear(), this._onDidAddConnection.dispose(), this._onDidRemoveConnection.dispose();
    }
}, m0 = class {
    constructor(e, t, n = null){
        const r = new fT;
        try {
            Hl(r, t), e.send(r.buffer);
        } finally{
            r.dispose();
        }
        this.channelClient = new np(e, n), this.channelServer = new d0(e, t, n);
    }
    getChannel(e) {
        return this.channelClient.getChannel(e);
    }
    registerChannel(e, t) {
        this.channelServer.registerChannel(e, t);
    }
    dispose() {
        this.channelClient.dispose(), this.channelServer.dispose();
    }
}, q3 = class {
    constructor(e){
        this.fn = e;
    }
    routeCall(e) {
        return this.route(e);
    }
    routeEvent(e) {
        return this.route(e);
    }
    async route(e) {
        for (const t of e.connections)if (await Promise.resolve(this.fn(t.ctx))) return Promise.resolve(t);
        return await O.toPromise(e.onDidAddConnection), await this.route(e);
    }
}, ((e)=>{
    const t = ()=>{};
    function n(a, o, l) {
        const d = a, u = l && l.disableMarshalling, m = (v)=>{
            const T = d[v];
            return l?.disableEventBuffering ? T : O.buffer(T, !0, void 0, o);
        }, f = new Map;
        for(const v in d)s(v) && f.set(v, m(v));
        return new class {
            listen(v, T, S) {
                const k = f.get(T);
                if (k) return k;
                const y = d[T];
                if (typeof y == "function") {
                    if (i(T)) return y.call(d, S);
                    if (s(T)) return f.set(T, m(T)), f.get(T);
                }
                throw new wi(`Event not found: ${T}`);
            }
            call(v, T, S) {
                const k = d[T];
                if (typeof k == "function") {
                    if (!u && Array.isArray(S)) for(let b = 0; b < S.length; b++)S[b] = za(S[b]);
                    let y = k.apply(d, S);
                    return y instanceof Promise || (y = Promise.resolve(y)), y;
                }
                throw new wi(`Method not found: ${T}`);
            }
        };
    }
    e.fromService = n;
    function r(a, o) {
        const l = o && o.disableMarshalling;
        return new Proxy({}, {
            get (d, u) {
                if (typeof u != "symbol") {
                    if (typeof u == "string") return o?.properties?.has(u) ? o.properties.get(u) : u === "dispose" ? t : i(u) ? function(m) {
                        return a.listen(u, m);
                    } : s(u) ? a.listen(u) : async function(...m) {
                        let f;
                        o && !Sr(o.context) ? f = [
                            o.context,
                            ...m
                        ] : f = m;
                        const v = await a.call(u, f);
                        return l ? v : za(v);
                    };
                    throw new wi(`Property not found: ${String(u)}`);
                }
            }
        });
    }
    e.toService = r;
    function s(a) {
        return a[0] === "o" && a[1] === "n" && h5(a.charCodeAt(2));
    }
    function i(a) {
        return /^onDynamic/.test(a) && h5(a.charCodeAt(9));
    }
})(Oe || (Oe = {}));

}
