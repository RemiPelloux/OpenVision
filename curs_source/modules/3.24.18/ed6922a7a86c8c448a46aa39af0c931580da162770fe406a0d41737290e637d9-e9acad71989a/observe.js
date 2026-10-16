import { x } from "./tslib.es6.js";
var Ydt;
export { Ydt };
var __wakaru_jLt_initialized = false;
export function jLt() {
if (__wakaru_jLt_initialized) return;
__wakaru_jLt_initialized = true;
"use strict";
x(), Ydt = (e, t, n = {})=>{
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            const i = new PerformanceObserver((r)=>{
                Promise.resolve().then(()=>{
                    t(r.getEntries());
                });
            });
            return i.observe({
                type: e,
                buffered: !0,
                ...n
            }), i;
        }
    } catch  {}
};

}
