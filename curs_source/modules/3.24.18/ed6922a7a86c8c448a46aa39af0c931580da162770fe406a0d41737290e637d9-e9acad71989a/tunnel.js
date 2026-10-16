import { jGi, pUe, tet } from "./A3u.js";
import { Se, bt, jn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
var aL, sEv, X3, Bee, net, gWt, wNn, _Fd, qGi;
export { Bee, X3, _Fd, aL, gWt, net, qGi, sEv, wNn };
var __wakaru_oF_initialized = false;
export function oF() {
if (__wakaru_oF_initialized) return;
__wakaru_oF_initialized = true;
"use strict";
x(), bt(), Se(), jn(), Qt(), Cn(), Ze(), Qn(), aL = vn("tunnelService"), sEv = vn("sharedTunnelsService"), X3 = ((e)=>(e.Http = "http", e.Https = "https", e))(X3 || {}), Bee = ((e)=>(e.ConstantPrivate = "constantPrivate", e.Private = "private", e.Public = "public", e))(Bee || {}), net = ((e)=>(e[e.Notify = 1] = "Notify", e[e.OpenBrowser = 2] = "OpenBrowser", e[e.OpenPreview = 3] = "OpenPreview", e[e.Silent = 4] = "Silent", e[e.Ignore = 5] = "Ignore", e[e.OpenBrowserOnce = 6] = "OpenBrowserOnce", e))(net || {}), gWt = [
    "localhost",
    "127.0.0.1",
    "0:0:0:0:0:0:0:1",
    "::1"
], wNn = [
    "0.0.0.0",
    "0:0:0:0:0:0:0:0",
    "::"
], _Fd = class {
    constructor(e, t, n){
        this.remoteAddress = e, this.localAddress = t, this._dispose = n, this._onDispose = new ve, this.onDidDispose = this._onDispose.event;
    }
    dispose() {
        return this._onDispose.fire(), this._dispose();
    }
}, qGi = class extends we {
    constructor(e, t){
        super(), this.logService = e, this.configurationService = t, this._onTunnelOpened = this._register(new ve), this.onTunnelOpened = this._onTunnelOpened.event, this._onTunnelClosed = this._register(new ve), this.onTunnelClosed = this._onTunnelClosed.event, this._onAddedTunnelProvider = this._register(new ve), this.onAddedTunnelProvider = this._onAddedTunnelProvider.event, this._tunnels = new Map, this._canElevate = !1, this._canChangeProtocol = !0, this._privacyOptions = [], this._factoryInProgress = new Set;
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
            const i = Array.from(n.values());
            for (const r of i){
                const s = await r.value;
                s && typeof s != "string" && e.push(s);
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
    setEnvironmentTunnel(e, t, n, i, r) {
        this.addTunnelToMap(e, t, Promise.resolve({
            tunnelRemoteHost: e,
            tunnelRemotePort: t,
            localAddress: n,
            privacy: i,
            protocol: r,
            dispose: ()=>Promise.resolve()
        }));
    }
    async getExistingTunnel(e, t) {
        (pUe(e) || tet(e)) && (e = gWt[0]);
        const n = this.getTunnelFromMap(e, t);
        if (n) return ++n.refcount, n.value;
    }
    openTunnel(e, t, n, i, r, s = !1, o, a) {
        this.logService.trace(`ForwardedPorts: (TunnelService) openTunnel request for ${t}:${n} on local port ${r}.`);
        const c = this._tunnelProvider ?? e;
        if (!c) return;
        if (t || (t = "localhost"), i || (i = this.defaultTunnelHost), this._tunnelProvider && this._factoryInProgress.has(n)) {
            this.logService.debug("ForwardedPorts: (TunnelService) Another call to create a tunnel with the same address has occurred before the last one completed. This call will be ignored.");
            return;
        }
        const l = this.retainOrCreateTunnel(c, t, n, i, r, s, o, a);
        return l ? l.then((u)=>{
            if (u) {
                if (typeof u == "string") return this.logService.trace("ForwardedPorts: (TunnelService) The tunnel provider returned an error when creating the tunnel."), this.removeEmptyOrErrorTunnelFromMap(t, n), u;
            } else {
                this.logService.trace("ForwardedPorts: (TunnelService) New tunnel is undefined."), this.removeEmptyOrErrorTunnelFromMap(t, n);
                return;
            }
            this.logService.trace("ForwardedPorts: (TunnelService) New tunnel established.");
            const h = this.makeTunnel(u);
            return (u.tunnelRemoteHost !== t || u.tunnelRemotePort !== n) && this.logService.warn("ForwardedPorts: (TunnelService) Created tunnel does not match requirements of requested tunnel. Host or port mismatch."), o && u.privacy !== o && this.logService.warn("ForwardedPorts: (TunnelService) Created tunnel does not match requirements of requested tunnel. Privacy mismatch."), this._onTunnelOpened.fire(h), h;
        }) : (this.logService.trace("ForwardedPorts: (TunnelService) Tunnel was not created."), l);
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
            const i = n.value.then(async (r)=>{
                r && typeof r != "string" && (await r.dispose(!0), this._onTunnelClosed.fire({
                    host: r.tunnelRemoteHost,
                    port: r.tunnelRemotePort
                }));
            });
            return this._tunnels.has(e) && this._tunnels.get(e).delete(t), i;
        }
    }
    async closeTunnel(e, t) {
        this.logService.trace(`ForwardedPorts: (TunnelService) close request for ${e}:${t} `);
        const n = this._tunnels.get(e);
        if (n && n.has(t)) {
            const i = n.get(t);
            i.refcount = 0, await this.tryDisposeTunnel(e, t, i);
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
            const i = n.get(t), r = i ? await i.value : void 0;
            (!r || typeof r == "string") && n.delete(t), n.size === 0 && this._tunnels.delete(e);
        }
    }
    getTunnelFromMap(e, t) {
        const n = [
            e
        ];
        tet(e) ? (n.push(...gWt), n.push(...wNn)) : pUe(e) && n.push(...wNn);
        const i = n.map((r)=>this._tunnels.get(r));
        for (const r of i){
            const s = r?.get(t);
            if (s) return s;
        }
    }
    canTunnel(e) {
        return !!jGi(e);
    }
    createWithProvider(e, t, n, i, r, s, o) {
        this.logService.trace(`ForwardedPorts: (TunnelService) Creating tunnel with provider ${t}:${n} on local port ${i}.`);
        const a = n;
        this._factoryInProgress.add(a);
        const c = i === void 0 ? n : i, l = {
            elevationRequired: r ? this.isPortPrivileged(c) : !1
        }, u = {
            remoteAddress: {
                host: t,
                port: n
            },
            localAddressPort: i,
            privacy: s,
            public: s ? s !== "private" : void 0,
            protocol: o
        }, h = e.forwardPort(u, l);
        return h ? (this.addTunnelToMap(t, n, h), h.finally(()=>{
            this.logService.trace("ForwardedPorts: (TunnelService) Tunnel created by provider."), this._factoryInProgress.delete(a);
        })) : this._factoryInProgress.delete(a), h;
    }
}, qGi = ie([
    C(0, Wn),
    C(1, qt)
], qGi);

}
