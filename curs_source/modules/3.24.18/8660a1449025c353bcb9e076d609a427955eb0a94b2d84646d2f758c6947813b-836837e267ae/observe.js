import { E } from "./tslib.es6.js";
var qFt;
export { qFt };
var __wakaru_Xun_initialized = false;
export function Xun() {
if (__wakaru_Xun_initialized) return;
__wakaru_Xun_initialized = true;
"use strict";
E(), qFt = (t, e, n = {})=>{
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            const i = new PerformanceObserver((r)=>{
                Promise.resolve().then(()=>{
                    e(r.getEntries());
                });
            });
            return i.observe({
                type: t,
                buffered: !0,
                ...n
            }), i;
        }
    } catch  {}
};

}
