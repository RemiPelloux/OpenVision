import { Di, Gt, Qe, st, tt } from "./Iwo.js";
import { jn } from "./SZu.js";
import { or, yi } from "./configuration.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { SXr, t4e, wqe } from "./yBp.js";
var eF, sU1, Z7, Tpe, mCt, nEn, iwi, jCm, kXr;
export { Tpe, Z7, eF, iwi, jCm, kXr, mCt, nEn, sU1 };
var __wakaru_tF_initialized = false;
export function tF() {
if (__wakaru_tF_initialized) return;
__wakaru_tF_initialized = true;
"use strict";
E(), Gt(), Qe(), Di(), fn(), or(), It(), Ji(), eF = jn("tunnelService"), sU1 = jn("sharedTunnelsService"), Z7 = ((t)=>(t.Http = "http", t.Https = "https", t))(Z7 || {}), Tpe = ((t)=>(t.ConstantPrivate = "constantPrivate", t.Private = "private", t.Public = "public", t))(Tpe || {}), mCt = ((t)=>(t[t.Notify = 1] = "Notify", t[t.OpenBrowser = 2] = "OpenBrowser", t[t.OpenPreview = 3] = "OpenPreview", t[t.Silent = 4] = "Silent", t[t.Ignore = 5] = "Ignore", t[t.OpenBrowserOnce = 6] = "OpenBrowserOnce", t))(mCt || {}), nEn = [
    "localhost",
    "127.0.0.1",
    "0:0:0:0:0:0:0:1",
    "::1"
], iwi = [
    "0.0.0.0",
    "0:0:0:0:0:0:0:0",
    "::"
], jCm = class {
    constructor(t, e, n){
        this.remoteAddress = t, this.localAddress = e, this._dispose = n, this._onDispose = new tt, this.onDidDispose = this._onDispose.event;
    }
    dispose() {
        return this._onDispose.fire(), this._dispose();
    }
}, kXr = class extends st {
    constructor(t, e){
        super(), this.logService = t, this.configurationService = e, this._onTunnelOpened = this._register(new tt), this.onTunnelOpened = this._onTunnelOpened.event, this._onTunnelClosed = this._register(new tt), this.onTunnelClosed = this._onTunnelClosed.event, this._onAddedTunnelProvider = this._register(new tt), this.onAddedTunnelProvider = this._onAddedTunnelProvider.event, this._tunnels = new Map, this._canElevate = !1, this._canChangeProtocol = !0, this._privacyOptions = [], this._factoryInProgress = new Set;
    }
    get hasTunnelProvider() {
        return !!this._tunnelProvider;
    }
    get defaultTunnelHost() {
        const t = this.configurationService.getValue("remote.localPortHost");
        return !t || t === "localhost" ? "127.0.0.1" : "0.0.0.0";
    }
    setTunnelProvider(t) {
        return this._tunnelProvider = t, t ? (this._onAddedTunnelProvider.fire(), {
            dispose: ()=>{
                this._tunnelProvider === t && (this._tunnelProvider = void 0, this._canElevate = !1, this._privacyOptions = []);
            }
        }) : (this._canElevate = !1, this._privacyOptions = [], this._onAddedTunnelProvider.fire(), {
            dispose: ()=>{}
        });
    }
    setTunnelFeatures(t) {
        this._canElevate = t.elevation, this._privacyOptions = t.privacyOptions, this._canChangeProtocol = t.protocol;
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
        const t = [], e = Array.from(this._tunnels.values());
        for (const n of e){
            const i = Array.from(n.values());
            for (const r of i){
                const s = await r.value;
                s && typeof s != "string" && t.push(s);
            }
        }
        return t;
    }
    async dispose() {
        super.dispose();
        for (const t of this._tunnels.values()){
            for (const { value: e } of t.values())await e.then((n)=>typeof n != "string" ? n?.dispose() : void 0);
            t.clear();
        }
        this._tunnels.clear();
    }
    setEnvironmentTunnel(t, e, n, i, r) {
        this.addTunnelToMap(t, e, Promise.resolve({
            tunnelRemoteHost: t,
            tunnelRemotePort: e,
            localAddress: n,
            privacy: i,
            protocol: r,
            dispose: ()=>Promise.resolve()
        }));
    }
    async getExistingTunnel(t, e) {
        (t4e(t) || wqe(t)) && (t = nEn[0]);
        const n = this.getTunnelFromMap(t, e);
        if (n) return ++n.refcount, n.value;
    }
    openTunnel(t, e, n, i, r, s = !1, o, a) {
        this.logService.trace(`ForwardedPorts: (TunnelService) openTunnel request for ${e}:${n} on local port ${r}.`);
        const l = this._tunnelProvider ?? t;
        if (!l) return;
        if (e || (e = "localhost"), i || (i = this.defaultTunnelHost), this._tunnelProvider && this._factoryInProgress.has(n)) {
            this.logService.debug("ForwardedPorts: (TunnelService) Another call to create a tunnel with the same address has occurred before the last one completed. This call will be ignored.");
            return;
        }
        const c = this.retainOrCreateTunnel(l, e, n, i, r, s, o, a);
        return c ? c.then((u)=>{
            if (u) {
                if (typeof u == "string") return this.logService.trace("ForwardedPorts: (TunnelService) The tunnel provider returned an error when creating the tunnel."), this.removeEmptyOrErrorTunnelFromMap(e, n), u;
            } else {
                this.logService.trace("ForwardedPorts: (TunnelService) New tunnel is undefined."), this.removeEmptyOrErrorTunnelFromMap(e, n);
                return;
            }
            this.logService.trace("ForwardedPorts: (TunnelService) New tunnel established.");
            const d = this.makeTunnel(u);
            return (u.tunnelRemoteHost !== e || u.tunnelRemotePort !== n) && this.logService.warn("ForwardedPorts: (TunnelService) Created tunnel does not match requirements of requested tunnel. Host or port mismatch."), o && u.privacy !== o && this.logService.warn("ForwardedPorts: (TunnelService) Created tunnel does not match requirements of requested tunnel. Privacy mismatch."), this._onTunnelOpened.fire(d), d;
        }) : (this.logService.trace("ForwardedPorts: (TunnelService) Tunnel was not created."), c);
    }
    makeTunnel(t) {
        return {
            tunnelRemotePort: t.tunnelRemotePort,
            tunnelRemoteHost: t.tunnelRemoteHost,
            tunnelLocalPort: t.tunnelLocalPort,
            localAddress: t.localAddress,
            privacy: t.privacy,
            protocol: t.protocol,
            dispose: async ()=>{
                this.logService.trace(`ForwardedPorts: (TunnelService) dispose request for ${t.tunnelRemoteHost}:${t.tunnelRemotePort} `);
                const e = this._tunnels.get(t.tunnelRemoteHost);
                if (e) {
                    const n = e.get(t.tunnelRemotePort);
                    n && (n.refcount--, await this.tryDisposeTunnel(t.tunnelRemoteHost, t.tunnelRemotePort, n));
                }
            }
        };
    }
    async tryDisposeTunnel(t, e, n) {
        if (n.refcount <= 0) {
            this.logService.trace(`ForwardedPorts: (TunnelService) Tunnel is being disposed ${t}:${e}.`);
            const i = n.value.then(async (r)=>{
                r && typeof r != "string" && (await r.dispose(!0), this._onTunnelClosed.fire({
                    host: r.tunnelRemoteHost,
                    port: r.tunnelRemotePort
                }));
            });
            return this._tunnels.has(t) && this._tunnels.get(t).delete(e), i;
        }
    }
    async closeTunnel(t, e) {
        this.logService.trace(`ForwardedPorts: (TunnelService) close request for ${t}:${e} `);
        const n = this._tunnels.get(t);
        if (n && n.has(e)) {
            const i = n.get(e);
            i.refcount = 0, await this.tryDisposeTunnel(t, e, i);
        }
    }
    addTunnelToMap(t, e, n) {
        this._tunnels.has(t) || this._tunnels.set(t, new Map), this._tunnels.get(t).set(e, {
            refcount: 1,
            value: n
        });
    }
    async removeEmptyOrErrorTunnelFromMap(t, e) {
        const n = this._tunnels.get(t);
        if (n) {
            const i = n.get(e), r = i ? await i.value : void 0;
            (!r || typeof r == "string") && n.delete(e), n.size === 0 && this._tunnels.delete(t);
        }
    }
    getTunnelFromMap(t, e) {
        const n = [
            t
        ];
        wqe(t) ? (n.push(...nEn), n.push(...iwi)) : t4e(t) && n.push(...iwi);
        const i = n.map((r)=>this._tunnels.get(r));
        for (const r of i){
            const s = r?.get(e);
            if (s) return s;
        }
    }
    canTunnel(t) {
        return !!SXr(t);
    }
    createWithProvider(t, e, n, i, r, s, o) {
        this.logService.trace(`ForwardedPorts: (TunnelService) Creating tunnel with provider ${e}:${n} on local port ${i}.`);
        const a = n;
        this._factoryInProgress.add(a);
        const l = i === void 0 ? n : i, c = {
            elevationRequired: r ? this.isPortPrivileged(l) : !1
        }, u = {
            remoteAddress: {
                host: e,
                port: n
            },
            localAddressPort: i,
            privacy: s,
            public: s ? s !== "private" : void 0,
            protocol: o
        }, d = t.forwardPort(u, c);
        return d ? (this.addTunnelToMap(e, n, d), d.finally(()=>{
            this.logService.trace("ForwardedPorts: (TunnelService) Tunnel created by provider."), this._factoryInProgress.delete(a);
        })) : this._factoryInProgress.delete(a), d;
    }
}, kXr = Re([
    F(0, Li),
    F(1, yi)
], kXr);

}
