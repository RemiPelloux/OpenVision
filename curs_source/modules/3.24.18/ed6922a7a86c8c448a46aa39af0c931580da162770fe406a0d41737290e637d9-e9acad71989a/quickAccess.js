import { Se, qu, rn } from "./HVr.js";
import { dr } from "./arrays.js";
import { kn, rr } from "./platform_2.js";
import { x } from "./tslib.es6.js";
var pWt, P$, gFd;
export { P$, gFd, pWt };
var __wakaru_IX_initialized = false;
export function IX() {
if (__wakaru_IX_initialized) return;
__wakaru_IX_initialized = true;
"use strict";
x(), dr(), Se(), rr(), pWt = ((e)=>(e[e.PRESERVE = 0] = "PRESERVE", e[e.LAST = 1] = "LAST", e))(pWt || {}), P$ = {
    Quickaccess: "workbench.contributions.quickaccess"
}, gFd = class {
    constructor(){
        this.providers = [], this.defaultProvider = void 0;
    }
    registerQuickAccessProvider(e) {
        return e.prefix.length === 0 ? this.defaultProvider = e : this.providers.push(e), this.providers.sort((t, n)=>n.prefix.length - t.prefix.length), rn(()=>{
            this.providers.splice(this.providers.indexOf(e), 1), this.defaultProvider === e && (this.defaultProvider = void 0);
        });
    }
    getQuickAccessProviders() {
        return qu([
            this.defaultProvider,
            ...this.providers
        ]);
    }
    getQuickAccessProvider(e) {
        return e && this.providers.find((n)=>e.startsWith(n.prefix)) || void 0 || this.defaultProvider;
    }
    clear() {
        const e = [
            ...this.providers
        ], t = this.defaultProvider;
        return this.providers = [], this.defaultProvider = void 0, ()=>{
            this.providers = e, this.defaultProvider = t;
        };
    }
}, kn.add(P$.Quickaccess, new gFd);

}
