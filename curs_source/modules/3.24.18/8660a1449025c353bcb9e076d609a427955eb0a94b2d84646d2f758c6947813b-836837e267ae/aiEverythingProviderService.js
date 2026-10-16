import { Ec, Gt, Nt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { qn } from "./async.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var fX, zja;
export { fX, zja };
var __wakaru_Vae_initialized = false;
export function Vae() {
if (__wakaru_Vae_initialized) return;
__wakaru_Vae_initialized = true;
"use strict";
E(), qn(), Gt(), Qe(), Rn(), It(), fX = jn("everythingProviderService"), zja = class extends st {
    constructor(){
        super(), this._onDidChangeCommandProvider = this._register(new tt), this.onDidChangeCommandProvider = this._onDidChangeCommandProvider.event, this._commandProviderGeneration = 0, this._routerProvider = {
            supportedCommands: [],
            runCommand: (t, e, n)=>{
                const i = this._commandMap.get(t);
                return i ? i.provider.runCommand(t, e, n) : Promise.resolve(void 0);
            }
        }, this._commandMap = new Map, this._onlyLocalOverrideMap = new Map, this._onlyLocalRouterProvider = {
            runCommand: (t, e)=>{
                const n = this._onlyLocalOverrideMap.get(t);
                return n ? n.provider.runCommand(t, e) : this._onlyLocalProvider?.runCommand(t, e) ?? Promise.resolve(void 0);
            }
        };
    }
    _emitCommandProviderChanges(t, e, n) {
        for (const i of e)this._commandProviderGeneration++, this._onDidChangeCommandProvider.fire({
            providerId: t,
            command: i,
            state: n,
            generation: this._commandProviderGeneration
        });
    }
    registerEverythingProvider(t, e, n) {
        if (n.length === 0) throw new Error("EverythingProvider must declare at least one supported command");
        const i = new Set;
        for (const r of n){
            if (i.has(r)) throw new Error(`EverythingProvider command '${r}' listed more than once in registration request`);
            i.add(r);
            const s = this._commandMap.get(r);
            if (s) throw new Error(`EverythingProvider command '${r}' already registered by provider ${s.providerId}`);
        }
        for (const r of n)this._commandMap.set(r, {
            providerId: t,
            provider: e
        });
        this._refreshRouter(), this._emitCommandProviderChanges(t, n, "registered");
    }
    unregisterEverythingProvider(t, e) {
        const n = [];
        for (const i of e){
            const r = this._commandMap.get(i);
            r && r.providerId === t && (this._commandMap.delete(i), n.push(i));
        }
        this._refreshRouter(), this._emitCommandProviderChanges(t, n, "unregistered");
    }
    unregisterEverythingProviderById(t) {
        let e = !1;
        const n = [];
        for (const [i, r] of Array.from(this._commandMap.entries()))r.providerId === t && (this._commandMap.delete(i), e = !0, n.push(i));
        e && (this._refreshRouter(), this._emitCommandProviderChanges(t, n, "unregistered"));
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
    registerEverythingProviderAllLocal(t) {
        this._onlyLocalProvider = t;
    }
    unregisterEverythingProviderAllLocal() {
        this._onlyLocalProvider = void 0;
    }
    registerEverythingProviderAllLocalOverride(t, e, n) {
        if (n.length === 0) throw new Error("EverythingProviderAllLocal override must declare at least one supported command");
        const i = new Set;
        for (const r of n){
            if (i.has(r)) throw new Error(`EverythingProviderAllLocal override command '${r}' listed more than once in registration request`);
            i.add(r);
            const s = this._onlyLocalOverrideMap.get(r);
            if (s) throw new Error(`EverythingProviderAllLocal override command '${r}' already registered by provider ${s.providerId}`);
        }
        for (const r of n)this._onlyLocalOverrideMap.set(r, {
            providerId: t,
            provider: e
        });
    }
    unregisterEverythingProviderAllLocalOverride(t, e) {
        for (const n of e){
            const i = this._onlyLocalOverrideMap.get(n);
            i && i.providerId === t && this._onlyLocalOverrideMap.delete(n);
        }
    }
    async waitForEverythingProvider(t) {
        return this.provider ? this.provider : new Promise((e, n)=>{
            const i = Date.now(), r = ()=>{
                if (this.provider) {
                    e(this.provider);
                    return;
                }
                if (Date.now() - i >= t) {
                    n(new Error("Timeout waiting for EverythingProvider"));
                    return;
                }
                setTimeout(r, 100);
            };
            r();
        });
    }
    async waitForOnlyLocalProvider(t) {
        return this.onlyLocalProvider ? this.onlyLocalProvider : new Promise((e, n)=>{
            const i = Date.now(), r = ()=>{
                if (this.onlyLocalProvider) {
                    e(this.onlyLocalProvider);
                    return;
                }
                if (Date.now() - i >= t) {
                    n(new Error("Timeout waiting for OnlyLocalProvider"));
                    return;
                }
                setTimeout(r, 100);
            };
            r();
        });
    }
    async waitForCommandEverythingProvider(t, e) {
        const n = this._commandMap.get(e)?.provider;
        if (n) return n;
        if (t <= 0) throw new Error(`Timeout waiting for EverythingProvider with command '${e}'`);
        if (this._store.isDisposed) throw new Error(`EverythingProviderService is disposed; cannot wait for command '${e}'`);
        return new Promise((i, r)=>{
            const s = new Nt, o = ()=>{
                s.dispose();
            };
            s.add(this.onDidChangeCommandProvider((a)=>{
                if (a.command !== e || a.state !== "registered") return;
                const l = this._commandMap.get(e)?.provider;
                l && (o(), i(l));
            })), s.add(Ec(()=>{
                o(), r(new Error(`Timeout waiting for EverythingProvider with command '${e}'`));
            }, t));
        });
    }
}, bn(fX, zja, 1);

}
