import { Pn, Qe } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var WTn, eXr, T0m;
export { T0m, WTn, eXr };
var __wakaru_GTn_initialized = false;
export function GTn() {
if (__wakaru_GTn_initialized) return;
__wakaru_GTn_initialized = true;
"use strict";
E(), Qe(), It(), WTn = jn("remoteSocketFactoryService"), eXr = "RemoteSocketFactoryMissing", T0m = class {
    constructor(){
        this.factories = {};
    }
    register(t, e) {
        return this.factories[t] ??= [], this.factories[t].push(e), Pn(()=>{
            const n = this.factories[t]?.indexOf(e);
            typeof n == "number" && n >= 0 && this.factories[t]?.splice(n, 1);
        });
    }
    getSocketFactory(t) {
        return (this.factories[t.type] || []).find((n)=>n.supports(t));
    }
    connect(t, e, n, i) {
        const r = this.getSocketFactory(t);
        if (!r) throw Object.assign(new Error(`No socket factory found for ${t}`), {
            code: eXr
        });
        return r.connect(t, e, n, i);
    }
};

}
