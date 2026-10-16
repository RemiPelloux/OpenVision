import { Dl, Npi, Ps, Se, _ge, bt, jn, ns, si, ve, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
function yRo(e) {
    Dl && (kRo || (kRo = !0, console.warn("Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq")), console.warn(e.message));
}
function i3h(e) {
    return e[0] === "o" && e[1] === "n" && _ge(e.charCodeAt(2));
}
function r3h(e) {
    return /^onDynamic/.test(e) && _ge(e.charCodeAt(9));
}
var SRo, s3h, kRo, o3h, wRo, a3h, c3h, l3h, u3h, d3h;
export { SRo, a3h, c3h, d3h, i3h, kRo, l3h, o3h, r3h, s3h, u3h, wRo, yRo };
var __wakaru_h3h_initialized = false;
export function h3h() {
if (__wakaru_h3h_initialized) return;
__wakaru_h3h_initialized = true;
"use strict";
x(), si(), bt(), Se(), jn(), Ps(), SRo = "default", s3h = "$initialize", kRo = !1, o3h = class {
    constructor(e, t, n, i, r){
        this.vsWorker = e, this.req = t, this.channel = n, this.method = i, this.args = r, this.type = 0;
    }
}, wRo = class {
    constructor(e, t, n, i){
        this.vsWorker = e, this.seq = t, this.res = n, this.err = i, this.type = 1;
    }
}, a3h = class {
    constructor(e, t, n, i, r){
        this.vsWorker = e, this.req = t, this.channel = n, this.eventName = i, this.arg = r, this.type = 2;
    }
}, c3h = class {
    constructor(e, t, n){
        this.vsWorker = e, this.req = t, this.event = n, this.type = 3;
    }
}, l3h = class {
    constructor(e, t){
        this.vsWorker = e, this.req = t, this.type = 4;
    }
}, u3h = class {
    constructor(e){
        this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = Object.create(null), this._pendingEmitters = new Map, this._pendingEvents = new Map;
    }
    setWorkerId(e) {
        this._workerId = e;
    }
    sendMessage(e, t, n) {
        const i = String(++this._lastSentReq);
        return new Promise((r, s)=>{
            this._pendingReplies[i] = {
                resolve: r,
                reject: s
            }, this._send(new o3h(this._workerId, i, e, t, n));
        });
    }
    listen(e, t, n) {
        let i = null;
        const r = new ve({
            onWillAddFirstListener: ()=>{
                i = String(++this._lastSentReq), this._pendingEmitters.set(i, r), this._send(new a3h(this._workerId, i, e, t, n));
            },
            onDidRemoveLastListener: ()=>{
                this._pendingEmitters.delete(i), this._send(new l3h(this._workerId, i)), i = null;
            }
        });
        return r.event;
    }
    handleMessage(e) {
        !e || !e.vsWorker || this._workerId !== -1 && e.vsWorker !== this._workerId || this._handleMessage(e);
    }
    createProxyToRemoteChannel(e, t) {
        const n = {
            get: (i, r)=>(typeof r == "string" && !i[r] && (r3h(r) ? i[r] = (s)=>this.listen(e, r, s) : i3h(r) ? i[r] = this.listen(e, r, void 0) : r.charCodeAt(0) === 36 && (i[r] = async (...s)=>(await t?.(), this.sendMessage(e, r, s)))), i[r])
        };
        return new Proxy(Object.create(null), n);
    }
    _handleMessage(e) {
        switch(e.type){
            case 1:
                return this._handleReplyMessage(e);
            case 0:
                return this._handleRequestMessage(e);
            case 2:
                return this._handleSubscribeEventMessage(e);
            case 3:
                return this._handleEventMessage(e);
            case 4:
                return this._handleUnsubscribeEventMessage(e);
        }
    }
    _handleReplyMessage(e) {
        if (!this._pendingReplies[e.seq]) {
            console.warn("Got reply to unknown seq");
            return;
        }
        const t = this._pendingReplies[e.seq];
        if (delete this._pendingReplies[e.seq], e.err) {
            let n = e.err;
            e.err.$isError && (n = new Error, n.name = e.err.name, n.message = e.err.message, n.stack = e.err.stack), t.reject(n);
            return;
        }
        t.resolve(e.res);
    }
    _handleRequestMessage(e) {
        const t = e.req;
        this._handler.handleMessage(e.channel, e.method, e.args).then((i)=>{
            this._send(new wRo(this._workerId, t, i, void 0));
        }, (i)=>{
            i.detail instanceof Error && (i.detail = Npi(i.detail)), this._send(new wRo(this._workerId, t, void 0, Npi(i)));
        });
    }
    _handleSubscribeEventMessage(e) {
        const t = e.req, n = this._handler.handleEvent(e.channel, e.eventName, e.arg)((i)=>{
            this._send(new c3h(this._workerId, t, i));
        });
        this._pendingEvents.set(t, n);
    }
    _handleEventMessage(e) {
        if (!this._pendingEmitters.has(e.req)) {
            console.warn("Got event for unknown req");
            return;
        }
        this._pendingEmitters.get(e.req).fire(e.event);
    }
    _handleUnsubscribeEventMessage(e) {
        if (!this._pendingEvents.has(e.req)) {
            console.warn("Got unsubscribe for unknown req");
            return;
        }
        this._pendingEvents.get(e.req).dispose(), this._pendingEvents.delete(e.req);
    }
    _send(e) {
        const t = [];
        if (e.type === 0) for(let n = 0; n < e.args.length; n++){
            const i = e.args[n];
            (i instanceof ArrayBuffer || typeof MessagePort < "u" && i instanceof MessagePort) && t.push(i);
        }
        else e.type === 1 && e.res instanceof ArrayBuffer && t.push(e.res);
        this._handler.sendMessage(e, t);
    }
}, d3h = class extends we {
    constructor(e){
        super(), this._localChannels = new Map, this._remoteChannels = new Map, this._worker = this._register(e), this._register(this._worker.onMessage((t)=>{
            this._protocol.handleMessage(t);
        })), this._register(this._worker.onError((t)=>{
            yRo(t), ns(t);
        })), this._protocol = new u3h({
            sendMessage: (t, n)=>{
                this._worker.postMessage(t, n);
            },
            handleMessage: (t, n, i)=>this._handleMessage(t, n, i),
            handleEvent: (t, n, i)=>this._handleEvent(t, n, i)
        }), this._protocol.setWorkerId(this._worker.getId()), this._onModuleLoaded = this._protocol.sendMessage(SRo, s3h, [
            this._worker.getId()
        ]), this.proxy = this._protocol.createProxyToRemoteChannel(SRo, async ()=>{
            await this._onModuleLoaded;
        }), this._onModuleLoaded.catch((t)=>{
            this._onError("Worker failed to load ", t);
        });
    }
    _handleMessage(e, t, n) {
        const i = this._localChannels.get(e);
        if (!i) return Promise.reject(new Error(`Missing channel ${e} on main thread`));
        if (typeof i[t] != "function") return Promise.reject(new Error(`Missing method ${t} on main thread channel ${e}`));
        try {
            return Promise.resolve(i[t].apply(i, n));
        } catch (r) {
            return Promise.reject(r);
        }
    }
    _handleEvent(e, t, n) {
        const i = this._localChannels.get(e);
        if (!i) throw new Error(`Missing channel ${e} on main thread`);
        if (r3h(t)) {
            const r = i[t].call(i, n);
            if (typeof r != "function") throw new Error(`Missing dynamic event ${t} on main thread channel ${e}.`);
            return r;
        }
        if (i3h(t)) {
            const r = i[t];
            if (typeof r != "function") throw new Error(`Missing event ${t} on main thread channel ${e}.`);
            return r;
        }
        throw new Error(`Malformed event name ${t}`);
    }
    setChannel(e, t) {
        this._localChannels.set(e, t);
    }
    getChannel(e) {
        if (!this._remoteChannels.has(e)) {
            const t = this._protocol.createProxyToRemoteChannel(e, async ()=>{
                await this._onModuleLoaded;
            });
            this._remoteChannels.set(e, t);
        }
        return this._remoteChannels.get(e);
    }
    _onError(e, t) {
        console.error(e), console.info(t);
    }
};

}
