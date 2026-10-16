import { Se, rn } from "./HVr.js";
import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var JHt, CGi, nOd;
export { CGi, JHt, nOd };
var __wakaru_eWt_initialized = false;
export function eWt() {
if (__wakaru_eWt_initialized) return;
__wakaru_eWt_initialized = true;
"use strict";
x(), Se(), Ze(), JHt = vn("remoteSocketFactoryService"), CGi = "RemoteSocketFactoryMissing", nOd = class {
    constructor(){
        this.factories = {};
    }
    register(e, t) {
        return this.factories[e] ??= [], this.factories[e].push(t), rn(()=>{
            const n = this.factories[e]?.indexOf(t);
            typeof n == "number" && n >= 0 && this.factories[e]?.splice(n, 1);
        });
    }
    getSocketFactory(e) {
        return (this.factories[e.type] || []).find((n)=>n.supports(e));
    }
    connect(e, t, n, i) {
        const r = this.getSocketFactory(e);
        if (!r) throw Object.assign(new Error(`No socket factory found for ${e}`), {
            code: CGi
        });
        return r.connect(e, t, n, i);
    }
};

}
