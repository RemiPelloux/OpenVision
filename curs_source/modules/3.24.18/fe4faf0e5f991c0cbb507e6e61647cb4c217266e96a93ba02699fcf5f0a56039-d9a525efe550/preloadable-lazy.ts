import { i } from "./plugin-brand-icon.js";
import { K1r, O4i } from "./retrying-import.ts";
import { lazy as Cdi } from "./react-runtime/react/esm-index-production.js";
function Y1r(r, e) {
    const a = K1r(r, (p)=>({
            module: p,
            component: {
                default: e(p)
            }
        }));
    let s = null;
    const l = i(async ()=>(s = await a(), s.module), "preload");
    return {
        Component: Cdi(()=>s === null ? a().then((p)=>(s = p, p.component)) : J1r(s.component)),
        preload: l
    };
}
function J1r(r) {
    return Object.assign(Promise.resolve(r), {
        then (e) {
            return Promise.resolve(e?.(r));
        }
    });
}
export { J1r, Y1r };
var __wakaru_z4i_initialized = false;
export function z4i() {
if (__wakaru_z4i_initialized) return;
__wakaru_z4i_initialized = true;
"use strict";
O4i(), i(Y1r, "preloadableLazy"), i(J1r, "settled");

}
