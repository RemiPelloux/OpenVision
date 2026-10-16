import { at, ot } from "./configuration.js";
import { N, se } from "./event.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { oe } from "./platform.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { ye } from "./uri.js";
function T7e(e) {
    if (e.scheme !== "http" && e.scheme !== "https") return;
    const t = /^(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d+)$/.exec(e.authority);
    if (t) return {
        address: t[1],
        port: +t[2]
    };
}
function pS(e) {
    return hS.indexOf(e) >= 0;
}
function Nd(e) {
    return gS.indexOf(e) >= 0;
}
var wG, S7e, pA, hS, gS, fS;
export { Nd, S7e, T7e, fS, gS, hS, pA, pS, wG };
var __wakaru_hA_initialized = false;
export function hA() {
if (__wakaru_hA_initialized) return;
__wakaru_hA_initialized = true;
"use strict";
h(), se(), j(), oe(), ye(), at(), ne(), te(), wG = Q("tunnelService"), S7e = Q("sharedTunnelsService"), pA = ((e)=>(e.ConstantPrivate = "constantPrivate", e.Private = "private", e.Public = "public", e))(pA || {}), hS = [
    "localhost",
    "127.0.0.1",
    "0:0:0:0:0:0:0:1",
    "::1"
], gS = [
    "0.0.0.0",
    "0:0:0:0:0:0:0:0",
    "::"
], fS = class extends J {
    constructor(e, t){
        super(), this.logService = e, this.configurationService = t, this._onTunnelOpened = this._register(new N), this.onTunnelOpened = this._onTunnelOpened.event, this._onTunnelClosed = this._register(new N), this.onTunnelClosed = this._onTunnelClosed.event, this._onAddedTunnelProvider = this._register(new N), this.onAddedTunnelProvider = this._onAddedTunnelProvider.event, this._tunnels = new Map, this._canElevate = !1, this._canChangeProtocol = !0, this._privacyOptions = [], this._factoryInProgress = new Set;
    }
    get hasTunnelProvider() {
        return !!this._tunnelProvider;
    }
    get defaultTunnelHost() {
        const e = this.configurationService.getValue("remote.localPortHost");
        return !e || e === "localhost" ? "127.0.0.1" : "0.0.0.0";
    }
    setTunnelProvider(e) {
        return this._tunnelProvider = e, e ? (this._onAddedTunnelProvider.fire(), {
            dispose: ()=>{
                this._tunnelProvider === e && (this._tunnelProvider = void 0, this._canElevate = !1, this._privacyOptions = []);
            }
        }) : (this._canElevate = !1, this._privacyOptions = [], this._onAddedTunnelProvider.fire(), {
            dispose: ()=>{}
        });
    }
    setTunnelFeatures(e) {
        this._canElevate = e.elevation, this._privacyOptions = e.privacyOptions, this._canChangeProtocol = e.protocol;
    }
    get canChangeProtocol() {
        return this._canChangeProtocol;
    }
    get canElevate() {
        return this._canElevate;
    }
    get canChangePrivacy() {
        return this._privacyOptions.length > 0;
    }
    get privacyOptions() {
        return this._privacyOptions;
    }
    get tunnels() {
        return this.getTunnels();
    }
    async getTunnels() {
        const e = [], t = Array.from(this._tunnels.values());
        for (const n of t){
            const r = Array.from(n.values());
            for (const s of r){
                const i = await s.value;
                i && typeof i != "string" && e.push(i);
            }
        }
        return e;
    }
    async dispose() {
        super.dispose();
        for (const e of this._tunnels.values()){
            for (const { value: t } of e.values())await t.then((n)=>typeof n != "string" ? n?.dispose() : void 0);
            e.clear();
        }
        this._tunnels.clear();
    }
    setEnvironmentTunnel(e, t, n, r, s) {
        this.addTunnelToMap(e, t, Promise.resolve({
            tunnelRemoteHost: e,
            tunnelRemotePort: t,
            localAddress: n,
            privacy: r,
            protocol: s,
            dispose: ()=>Promise.resolve()
        }));
    }
    async getExistingTunnel(e, t) {
        (Nd(e) || pS(e)) && (e = hS[0]);
        const n = this.getTunnelFromMap(e, t);
        if (n) return ++n.refcount, n.value;
    }
    openTunnel(e, t, n, r, s, i = !1, a, o) {
        this.logService.trace(`ForwardedPorts: (TunnelService) openTunnel request for ${t}:${n} on local port ${s}.`);
        const l = this._tunnelProvider ?? e;
        if (!l) return;
        if (t || (t = "localhost"), r || (r = this.defaultTunnelHost), this._tunnelProvider && this._factoryInProgress.has(n)) {
            this.logService.debug("ForwardedPorts: (TunnelService) Another call to create a tunnel with the same address has occurred before the last one completed. This call will be ignored.");
            return;
        }
        const d = this.retainOrCreateTunnel(l, t, n, r, s, i, a, o);
        return d ? d.then((u)=>{
            if (u) {
                if (typeof u == "string") return this.logService.trace("ForwardedPorts: (TunnelService) The tunnel provider returned an error when creating the tunnel."), this.removeEmptyOrErrorTunnelFromMap(t, n), u;
            } else {
                this.logService.trace("ForwardedPorts: (TunnelService) New tunnel is undefined."), this.removeEmptyOrErrorTunnelFromMap(t, n);
                return;
            }
            this.logService.trace("ForwardedPorts: (TunnelService) New tunnel established.");
            const m = this.makeTunnel(u);
            return (u.tunnelRemoteHost !== t || u.tunnelRemotePort !== n) && this.logService.warn("ForwardedPorts: (TunnelService) Created tunnel does not match requirements of requested tunnel. Host or port mismatch."), a && u.privacy !== a && this.logService.warn("ForwardedPorts: (TunnelService) Created tunnel does not match requirements of requested tunnel. Privacy mismatch."), this._onTunnelOpened.fire(m), m;
        }) : (this.logService.trace("ForwardedPorts: (TunnelService) Tunnel was not created."), d);
    }
    makeTunnel(e) {
        return {
            tunnelRemotePort: e.tunnelRemotePort,
            tunnelRemoteHost: e.tunnelRemoteHost,
            tunnelLocalPort: e.tunnelLocalPort,
            localAddress: e.localAddress,
            privacy: e.privacy,
            protocol: e.protocol,
            dispose: async ()=>{
                this.logService.trace(`ForwardedPorts: (TunnelService) dispose request for ${e.tunnelRemoteHost}:${e.tunnelRemotePort} `);
                const t = this._tunnels.get(e.tunnelRemoteHost);
                if (t) {
                    const n = t.get(e.tunnelRemotePort);
                    n && (n.refcount--, await this.tryDisposeTunnel(e.tunnelRemoteHost, e.tunnelRemotePort, n));
                }
            }
        };
    }
    async tryDisposeTunnel(e, t, n) {
        if (n.refcount <= 0) {
            this.logService.trace(`ForwardedPorts: (TunnelService) Tunnel is being disposed ${e}:${t}.`);
            const r = n.value.then(async (s)=>{
                s && typeof s != "string" && (await s.dispose(!0), this._onTunnelClosed.fire({
                    host: s.tunnelRemoteHost,
                    port: s.tunnelRemotePort
                }));
            });
            return this._tunnels.has(e) && this._tunnels.get(e).delete(t), r;
        }
    }
    async closeTunnel(e, t) {
        this.logService.trace(`ForwardedPorts: (TunnelService) close request for ${e}:${t} `);
        const n = this._tunnels.get(e);
        if (n && n.has(t)) {
            const r = n.get(t);
            r.refcount = 0, await this.tryDisposeTunnel(e, t, r);
        }
    }
    addTunnelToMap(e, t, n) {
        this._tunnels.has(e) || this._tunnels.set(e, new Map), this._tunnels.get(e).set(t, {
            refcount: 1,
            value: n
        });
    }
    async removeEmptyOrErrorTunnelFromMap(e, t) {
        const n = this._tunnels.get(e);
        if (n) {
            const r = n.get(t), s = r ? await r.value : void 0;
            (!s || typeof s == "string") && n.delete(t), n.size === 0 && this._tunnels.delete(e);
        }
    }
    getTunnelFromMap(e, t) {
        const n = [
            e
        ];
        pS(e) ? (n.push(...hS), n.push(...gS)) : Nd(e) && n.push(...gS);
        const r = n.map((s)=>this._tunnels.get(s));
        for (const s of r){
            const i = s?.get(t);
            if (i) return i;
        }
    }
    canTunnel(e) {
        return !!T7e(e);
    }
    createWithProvider(e, t, n, r, s, i, a) {
        this.logService.trace(`ForwardedPorts: (TunnelService) Creating tunnel with provider ${t}:${n} on local port ${r}.`);
        const o = n;
        this._factoryInProgress.add(o);
        const l = r === void 0 ? n : r, d = {
            elevationRequired: s ? this.isPortPrivileged(l) : !1
        }, u = {
            remoteAddress: {
                host: t,
                port: n
            },
            localAddressPort: r,
            privacy: i,
            public: i ? i !== "private" : void 0,
            protocol: a
        }, m = e.forwardPort(u, d);
        return m ? (this.addTunnelToMap(t, n, m), m.finally(()=>{
            this.logService.trace("ForwardedPorts: (TunnelService) Tunnel created by provider."), this._factoryInProgress.delete(o);
        })) : this._factoryInProgress.delete(o), m;
    }
}, fS = B([
    w(0, Z),
    w(1, ot)
], fS);

}
