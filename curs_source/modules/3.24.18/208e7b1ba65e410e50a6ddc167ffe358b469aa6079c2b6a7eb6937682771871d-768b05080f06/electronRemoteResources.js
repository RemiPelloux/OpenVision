import { h } from "./tslib.es6.js";
var L2, N_e, D_e;
export { D_e, L2, N_e };
var __wakaru_zet_initialized = false;
export function zet() {
if (__wakaru_zet_initialized) return;
__wakaru_zet_initialized = true;
"use strict";
h(), L2 = "request", N_e = "remoteResourceHandler", D_e = class {
    async routeCall(e, t, n) {
        if (t !== L2) throw new Error(`Call not found: ${t}`);
        const r = n[0];
        if (r?.authority) {
            const s = e.connections.find((i)=>i.ctx === r.authority);
            if (s) return s;
        }
        throw new Error("Caller not found");
    }
    routeEvent(e, t) {
        throw new Error(`Event not found: ${t}`);
    }
};

}
