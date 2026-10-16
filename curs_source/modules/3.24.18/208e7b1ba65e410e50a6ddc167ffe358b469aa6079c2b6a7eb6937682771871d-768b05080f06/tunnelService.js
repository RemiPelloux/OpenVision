import { Bl, le } from "./async.js";
import { ae, it } from "./buffer.js";
import { Ie, Jn } from "./cancellation.js";
import { at, ot } from "./configuration.js";
import { B } from "./ipc.js";
import { eF } from "./ipc.net.js";
import { ST, rp } from "./ipc.net_2.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { wR } from "./network.js";
import { At, wv } from "./performance.js";
import { Nr, oe, os } from "./platform.js";
import { rG, sA } from "./ports.js";
import { Tt, et } from "./productService.js";
import { Q2e, XU, as, fb, flt, gb, im, t9e } from "./remoteAgentConnection.js";
import { X2e, hb } from "./remoteSocketFactoryService.js";
import { Ru, hO } from "./sign.js";
import { ca } from "./stopwatch.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Nd, fS, hA, pA, pS } from "./tunnel.js";
import { vt } from "./uuid.js";
import * as _lt from "net";
import * as tG from "net";
import * as vlt from "os";
function jBe(e, t, n, r = "127.0.0.1") {
    let s = !1, i, a = 1;
    const o = tG.createServer({
        pauseOnConnect: !0
    });
    function l(d, u) {
        s || (s = !0, o.removeAllListeners(), o.close(), i && clearTimeout(i), u(d));
    }
    return new Promise((d)=>{
        i = setTimeout(()=>{
            l(0, d);
        }, n), o.on("listening", ()=>{
            l(e, d);
        }), o.on("error", (u)=>{
            u && (u.code === "EADDRINUSE" || u.code === "EACCES") && a < t ? (e++, a++, o.listen(e, r)) : l(0, d);
        }), o.on("close", ()=>{
            l(0, d);
        }), o.listen(e, r);
    });
}
function v7e(e) {
    return !!e.forwardPort;
}
function k7e(e, t, n, r) {
    if (n === Nr.Windows) return !1;
    if (n === Nr.Macintosh && Nd(t)) {
        const s = /(\d+)\.(\d+)\.(\d+)/g.exec(r);
        if (s?.length === 4 && parseInt(s[1]) >= 18) return !1;
    }
    return e < 1024;
}
function nlt(e) {
    const t = new Jn;
    return setTimeout(()=>t.cancel(), e), t.token;
}
function rlt(e, t) {
    if (e.isCancellationRequested || t.isCancellationRequested) return Ie.Cancelled;
    const n = new Jn;
    return e.onCancellationRequested(()=>n.cancel()), t.onCancellationRequested(()=>n.cancel()), n.token;
}
function slt(e, t) {
    const n = new fb(t);
    return n.registerDisposable(e.onControlMessage((r)=>{
        const s = JSON.parse(r.toString()), i = mlt(s);
        i ? n.reject(i) : n.resolve(s);
    })), n.promise;
}
function ilt(e, t) {
    const n = t ? `${e}/reconnect` : e;
    return t && (wv(`code/willCreateSocket/${n}`), wv(`code/didCreateSocketOK/${n}`), wv(`code/didCreateSocketError/${n}`)), At(`code/willCreateSocket/${n}`), {
        ok: ()=>At(`code/didCreateSocketOK/${n}`),
        error: ()=>At(`code/didCreateSocketError/${n}`)
    };
}
function alt(e, t, n, r, s, i, a, o, l) {
    const d = new fb(o), u = ca.create(!1);
    e.info(`Creating a socket (${a})...`);
    const m = ilt(i, l);
    return t.connect(n, r, s, a).then((f)=>{
        d.didTimeout ? (m.error(), e.info(`Creating a socket (${a}) finished after ${u.elapsed()} ms, but this is too late and has timed out already.`), f?.dispose()) : (m.ok(), e.info(`Creating a socket (${a}) was successful after ${u.elapsed()} ms.`), d.resolve(f));
    }, (f)=>{
        m.error(), e.info(`Creating a socket (${a}) returned an error after ${u.elapsed()} ms.`), e.error(`[createSocket] ${as(f)}`), d.reject(f);
    }), d.promise;
}
async function olt(e, t, n, r) {
    const s = r9e(e, t);
    e.logService.trace(`${s} 1/6. invoking socketFactory.connect().`);
    let i;
    try {
        i = await alt(e.logService, e.remoteSocketFactoryService, e.connectTo, wR.getServerRootPath(), `reconnectionToken=${e.reconnectionToken}&reconnection=${e.reconnectionProtocol ? "true" : "false"}`, XU(t), `renderer-${XU(t)}-${e.reconnectionToken}`, r, !!e.reconnectionProtocol);
    } catch (u) {
        throw e.logService.error(`${s} socketFactory.connect() failed or timed out. Error: ${as(u)}`), u;
    }
    e.logService.trace(`${s} 2/6. socketFactory.connect() was successful.`);
    let a, o;
    e.reconnectionProtocol ? (e.reconnectionProtocol.beginAcceptReconnection(i, null), a = e.reconnectionProtocol, o = !1) : (a = new eF({
        socket: i
    }), o = !0), e.logService.trace(`${s} 3/6. sending AuthRequest control message.`);
    const l = await gb(e.signService.createNewMessage(vt()), r), d = {
        type: "auth",
        auth: e.connectionToken || "00000000000000000000",
        data: l.data
    };
    a.sendControl(ae.fromString(JSON.stringify(d)));
    try {
        const u = await slt(a, rlt(r, nlt(1e4)));
        if (u.type !== "sign" || typeof u.data != "string") {
            const T = new Error("Unexpected handshake message");
            throw T.code = "VSCODE_CONNECTION_ERROR", T;
        }
        if (e.logService.trace(`${s} 4/6. received SignRequest control message.`), !await gb(e.signService.validate(l, u.signedData), r)) {
            const T = new Error("Refused to connect to unsupported server");
            throw T.code = "VSCODE_CONNECTION_ERROR", T;
        }
        const f = await gb(e.signService.sign(u.data), r), v = {
            type: "connectionType",
            commit: e.commit,
            signedData: f,
            desiredConnectionType: t
        };
        return n && (v.args = n), e.logService.trace(`${s} 5/6. sending ConnectionTypeRequest control message.`), a.sendControl(ae.fromString(JSON.stringify(v))), {
            protocol: a,
            ownsProtocol: o
        };
    } catch (u) {
        throw u && u.code === "ETIMEDOUT" && (e.logService.error(`${s} the handshake timed out. Error:`), e.logService.error(u)), u && u.code === "VSCODE_CONNECTION_ERROR" && (e.logService.error(`${s} received error control message when negotiating connection. Error:`), e.logService.error(u)), o && t9e(a), u;
    }
}
async function clt(e, t, n) {
    const r = Date.now(), s = r9e(e, 3), { protocol: i } = await olt(e, 3, t, n);
    return e.logService.trace(`${s} 6/6. handshake finished, connection is up and running after ${glt(r)}!`), i;
}
async function dlt(e, t, n) {
    const r = await Q2e(e, vt(), null);
    return await clt(r, {
        host: t,
        port: n
    }, Ie.None);
}
function mlt(e) {
    if (e && e.type === "error") {
        const t = new Error(`Connection error: ${e.reason}`);
        return t.code = "VSCODE_CONNECTION_ERROR", t.remoteConnectionErrorReason = e.reason, t;
    }
    return null;
}
function r9e(e, t) {
    return `${im(t, e.reconnectionToken, !!e.reconnectionProtocol)}[${e.connectTo}]`;
}
function glt(e) {
    return `${Date.now() - e} ms`;
}
async function Tlt(e, t, n, r, s) {
    let i;
    for(let a = 3; a && (i?.dispose(), i = await new k9e(e, t, n, r, s).waitForReady(), !(s && sA[s] || !sA[i.tunnelLocalPort])); a--);
    return i;
}
var k9e, _b, Qf, tx;
export { Qf, Tlt, _b, alt, clt, dlt, glt, ilt, jBe, k7e, k9e, mlt, nlt, olt, r9e, rlt, slt, tx, v7e };
var __wakaru_klt_initialized = false;
export function klt() {
if (__wakaru_klt_initialized) return;
__wakaru_klt_initialized = true;
"use strict";
h(), rG(), ST(), le(), j(), oe(), at(), te(), Tt(), flt(), X2e(), hO(), hA(), it(), k9e = class extends J {
    constructor(e, t, n, r, s){
        super(), this.defaultTunnelHost = t, this.suggestedLocalPort = s, this.privacy = pA.Private, this._socketsDispose = new Map, this._options = e, this._server = _lt.createServer(), this._barrier = new Bl, this._listeningListener = ()=>this._barrier.open(), this._server.on("listening", this._listeningListener), this._connectionListener = (i)=>this._onConnection(i), this._server.on("connection", this._connectionListener), this._errorListener = ()=>{}, this._server.on("error", this._errorListener), this.tunnelRemotePort = r, this.tunnelRemoteHost = n;
    }
    async dispose() {
        super.dispose(), this._server.removeListener("listening", this._listeningListener), this._server.removeListener("connection", this._connectionListener), this._server.removeListener("error", this._errorListener), this._server.close(), Array.from(this._socketsDispose.values()).forEach((t)=>{
            t();
        });
    }
    async waitForReady() {
        const e = this.suggestedLocalPort ?? this.tunnelRemotePort, t = Nd(this.defaultTunnelHost) ? "0.0.0.0" : "127.0.0.1";
        let n = await jBe(e, 2, 1e3, t), r = null;
        return this._server.listen(n, this.defaultTunnelHost), await this._barrier.wait(), r = this._server.address(), r || (n = 0, this._server.listen(n, this.defaultTunnelHost), await this._barrier.wait(), r = this._server.address()), this.tunnelLocalPort = r.port, this.localAddress = `${this.tunnelRemoteHost === "127.0.0.1" ? "127.0.0.1" : "localhost"}:${r.port}`, this;
    }
    async _onConnection(e) {
        e.pause();
        const t = pS(this.tunnelRemoteHost) || Nd(this.tunnelRemoteHost) ? "localhost" : this.tunnelRemoteHost;
        let n;
        try {
            n = await dlt(this._options, t, this.tunnelRemotePort);
        } catch  {
            e.destroy();
            return;
        }
        const r = n.getSocket(), s = n.readEntireBuffer();
        n.dispose(), s.byteLength > 0 && e.write(s.buffer), e.on("end", ()=>{
            e.localAddress && this._socketsDispose.delete(e.localAddress), r.end();
        }), e.on("close", ()=>r.end()), e.on("error", ()=>{
            e.localAddress && this._socketsDispose.delete(e.localAddress), r instanceof rp ? r.socket.destroy() : r.end();
        }), r instanceof rp ? this._mirrorNodeSocket(e, r) : this._mirrorGenericSocket(e, r), e.localAddress && this._socketsDispose.set(e.localAddress, ()=>{
            e.end(), r.end();
        });
    }
    _mirrorGenericSocket(e, t) {
        t.onClose(()=>{
            e.destroy();
        }), t.onEnd(()=>{
            e.end();
        }), t.onData((n)=>{
            e.write(n.buffer);
        }), e.on("data", (n)=>{
            t.write(ae.wrap(n));
        }), e.on("error", ()=>{}), e.on("close", ()=>{}), e.resume();
    }
    _mirrorNodeSocket(e, t) {
        const n = t.socket;
        n.on("end", ()=>e.end()), n.on("close", ()=>e.end()), n.on("error", ()=>{
            e.destroy();
        }), n.pipe(e), e.pipe(n);
    }
}, _b = class extends fS {
    constructor(e, t, n, r, s){
        super(t, s), this.remoteSocketFactoryService = e, this.signService = n, this.productService = r;
    }
    isPortPrivileged(e) {
        return k7e(e, this.defaultTunnelHost, os, vlt.release());
    }
    retainOrCreateTunnel(e, t, n, r, s, i, a, o) {
        const l = this.getTunnelFromMap(t, n);
        if (l) return ++l.refcount, l.value;
        if (v7e(e)) return this.createWithProvider(e, t, n, s, i, a, o);
        {
            this.logService.trace(`ForwardedPorts: (TunnelService) Creating tunnel without provider ${t}:${n} on local port ${s}.`);
            const d = {
                commit: this.productService.commit,
                quality: this.productService.quality,
                addressProvider: e,
                remoteSocketFactoryService: this.remoteSocketFactoryService,
                signService: this.signService,
                logService: this.logService,
                ipcLogger: null
            }, u = Tlt(d, r, t, n, s);
            return this.logService.trace("ForwardedPorts: (TunnelService) Tunnel created without provider."), this.addTunnelToMap(t, n, u), u;
        }
    }
}, _b = B([
    w(0, hb),
    w(1, Z),
    w(2, Ru),
    w(3, et),
    w(4, ot)
], _b), Qf = class extends _b {
    constructor(e, t, n, r, s){
        super(e, t, n, r, s);
    }
}, Qf = B([
    w(0, hb),
    w(1, Z),
    w(2, Ru),
    w(3, et),
    w(4, ot)
], Qf), tx = class extends J {
    constructor(e, t, n, r, s){
        super(), this.remoteSocketFactoryService = e, this.logService = t, this.productService = n, this.signService = r, this.configurationService = s, this._tunnelServices = new Map;
    }
    async openTunnel(e, t, n, r, s, i, a, o, l) {
        if (this.logService.trace(`ForwardedPorts: (SharedTunnelService) openTunnel request for ${n}:${r} on local port ${i}.`), !this._tunnelServices.has(e)) {
            const d = new Qf(this.remoteSocketFactoryService, this.logService, this.signService, this.productService, this.configurationService);
            this._register(d), this._tunnelServices.set(e, d), d.onTunnelClosed(async ()=>{
                (await d.tunnels).length === 0 && (d.dispose(), this._tunnelServices.delete(e));
            });
        }
        return this._tunnelServices.get(e).openTunnel(t, n, r, s, i, a, o, l);
    }
}, tx = B([
    w(0, hb),
    w(1, Z),
    w(2, et),
    w(3, Ru),
    w(4, ot)
], tx);

}
