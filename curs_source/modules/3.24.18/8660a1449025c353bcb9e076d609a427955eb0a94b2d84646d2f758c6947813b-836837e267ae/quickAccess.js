import { Mm, Pn, Qe } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
var ewi, e4e, FCm;
export { FCm, e4e, ewi };
var __wakaru_kqe_initialized = false;
export function kqe() {
if (__wakaru_kqe_initialized) return;
__wakaru_kqe_initialized = true;
"use strict";
E(), bo(), Qe(), Eo(), ewi = ((t)=>(t[t.PRESERVE = 0] = "PRESERVE", t[t.LAST = 1] = "LAST", t))(ewi || {}), e4e = {
    Quickaccess: "workbench.contributions.quickaccess"
}, FCm = class {
    constructor(){
        this.providers = [], this.defaultProvider = void 0;
    }
    registerQuickAccessProvider(t) {
        return t.prefix.length === 0 ? this.defaultProvider = t : this.providers.push(t), this.providers.sort((e, n)=>n.prefix.length - e.prefix.length), Pn(()=>{
            this.providers.splice(this.providers.indexOf(t), 1), this.defaultProvider === t && (this.defaultProvider = void 0);
        });
    }
    getQuickAccessProviders() {
        return Mm([
            this.defaultProvider,
            ...this.providers
        ]);
    }
    getQuickAccessProvider(t) {
        return t && this.providers.find((n)=>t.startsWith(n.prefix)) || void 0 || this.defaultProvider;
    }
    clear() {
        const t = [
            ...this.providers
        ], e = this.defaultProvider;
        return this.providers = [], this.defaultProvider = void 0, ()=>{
            this.providers = t, this.defaultProvider = e;
        };
    }
}, Fi.add(e4e.Quickaccess, new FCm);

}
