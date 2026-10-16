import { Cl, He, Se, bt, ve, we } from "./HVr.js";
import { bn } from "./async.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var M$, Cao;
export { Cao, M$ };
var __wakaru_xX_initialized = false;
export function xX() {
if (__wakaru_xX_initialized) return;
__wakaru_xX_initialized = true;
"use strict";
x(), bn(), bt(), Se(), Pn(), Ze(), M$ = vn("everythingProviderService"), Cao = class extends we {
    constructor(){
        super(), this._onDidChangeCommandProvider = this._register(new ve), this.onDidChangeCommandProvider = this._onDidChangeCommandProvider.event, this._commandProviderGeneration = 0, this._routerProvider = {
            supportedCommands: [],
            runCommand: (e, t, n)=>{
                const i = this._commandMap.get(e);
                return i ? i.provider.runCommand(e, t, n) : Promise.resolve(void 0);
            }
        }, this._commandMap = new Map, this._onlyLocalOverrideMap = new Map, this._onlyLocalRouterProvider = {
            runCommand: (e, t)=>{
                const n = this._onlyLocalOverrideMap.get(e);
                return n ? n.provider.runCommand(e, t) : this._onlyLocalProvider?.runCommand(e, t) ?? Promise.resolve(void 0);
            }
        };
    }
    _emitCommandProviderChanges(e, t, n) {
        for (const i of t)this._commandProviderGeneration++, this._onDidChangeCommandProvider.fire({
            providerId: e,
            command: i,
            state: n,
            generation: this._commandProviderGeneration
        });
    }
    registerEverythingProvider(e, t, n) {
        if (n.length === 0) throw new Error("EverythingProvider must declare at least one supported command");
        const i = new Set;
        for (const r of n){
            if (i.has(r)) throw new Error(`EverythingProvider command '${r}' listed more than once in registration request`);
            i.add(r);
            const s = this._commandMap.get(r);
            if (s) throw new Error(`EverythingProvider command '${r}' already registered by provider ${s.providerId}`);
        }
        for (const r of n)this._commandMap.set(r, {
            providerId: e,
            provider: t
        });
        this._refreshRouter(), this._emitCommandProviderChanges(e, n, "registered");
    }
    unregisterEverythingProvider(e, t) {
        const n = [];
        for (const i of t){
            const r = this._commandMap.get(i);
            r && r.providerId === e && (this._commandMap.delete(i), n.push(i));
        }
        this._refreshRouter(), this._emitCommandProviderChanges(e, n, "unregistered");
    }
    unregisterEverythingProviderById(e) {
        let t = !1;
        const n = [];
        for (const [i, r] of Array.from(this._commandMap.entries()))r.providerId === e && (this._commandMap.delete(i), t = !0, n.push(i));
        t && (this._refreshRouter(), this._emitCommandProviderChanges(e, n, "unregistered"));
    }
    _refreshRouter() {
        if (this._commandMap.size === 0) {
            this.provider = void 0;
            return;
        }
        this._routerProvider = {
            supportedCommands: Array.from(this._commandMap.keys()),
            runCommand: this._routerProvider.runCommand
        }, this.provider = this._routerProvider;
    }
    get onlyLocalProvider() {
        if (this._onlyLocalProvider || this._onlyLocalOverrideMap.size > 0) return this._onlyLocalRouterProvider;
    }
    registerEverythingProviderAllLocal(e) {
        this._onlyLocalProvider = e;
    }
    unregisterEverythingProviderAllLocal() {
        this._onlyLocalProvider = void 0;
    }
    registerEverythingProviderAllLocalOverride(e, t, n) {
        if (n.length === 0) throw new Error("EverythingProviderAllLocal override must declare at least one supported command");
        const i = new Set;
        for (const r of n){
            if (i.has(r)) throw new Error(`EverythingProviderAllLocal override command '${r}' listed more than once in registration request`);
            i.add(r);
            const s = this._onlyLocalOverrideMap.get(r);
            if (s) throw new Error(`EverythingProviderAllLocal override command '${r}' already registered by provider ${s.providerId}`);
        }
        for (const r of n)this._onlyLocalOverrideMap.set(r, {
            providerId: e,
            provider: t
        });
    }
    unregisterEverythingProviderAllLocalOverride(e, t) {
        for (const n of t){
            const i = this._onlyLocalOverrideMap.get(n);
            i && i.providerId === e && this._onlyLocalOverrideMap.delete(n);
        }
    }
    async waitForEverythingProvider(e) {
        return this.provider ? this.provider : new Promise((t, n)=>{
            const i = Date.now(), r = ()=>{
                if (this.provider) {
                    t(this.provider);
                    return;
                }
                if (Date.now() - i >= e) {
                    n(new Error("Timeout waiting for EverythingProvider"));
                    return;
                }
                setTimeout(r, 100);
            };
            r();
        });
    }
    async waitForOnlyLocalProvider(e) {
        return this.onlyLocalProvider ? this.onlyLocalProvider : new Promise((t, n)=>{
            const i = Date.now(), r = ()=>{
                if (this.onlyLocalProvider) {
                    t(this.onlyLocalProvider);
                    return;
                }
                if (Date.now() - i >= e) {
                    n(new Error("Timeout waiting for OnlyLocalProvider"));
                    return;
                }
                setTimeout(r, 100);
            };
            r();
        });
    }
    async waitForCommandEverythingProvider(e, t) {
        const n = this._commandMap.get(t)?.provider;
        if (n) return n;
        if (e <= 0) throw new Error(`Timeout waiting for EverythingProvider with command '${t}'`);
        if (this._store.isDisposed) throw new Error(`EverythingProviderService is disposed; cannot wait for command '${t}'`);
        return new Promise((i, r)=>{
            const s = new He, o = ()=>{
                s.dispose();
            };
            s.add(this.onDidChangeCommandProvider((a)=>{
                if (a.command !== t || a.state !== "registered") return;
                const c = this._commandMap.get(t)?.provider;
                c && (o(), i(c));
            })), s.add(Cl(()=>{
                o(), r(new Error(`Timeout waiting for EverythingProvider with command '${t}'`));
            }, e));
        });
    }
}, mn(M$, Cao, 1);

}
