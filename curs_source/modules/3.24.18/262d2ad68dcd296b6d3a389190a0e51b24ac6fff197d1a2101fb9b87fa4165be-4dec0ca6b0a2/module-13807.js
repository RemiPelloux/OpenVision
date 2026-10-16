"use strict";
require.d(exports, {
    Fm: ()=>n,
    Pu: ()=>s,
    v5: ()=>a,
    wt: ()=>i
});
const n = (0, require("./module-33002.js").cF)(Symbol("metricsBackend"), {
    record: ()=>{},
    increment: ()=>{},
    gauge: ()=>{},
    histogram: ()=>{}
});
function o(e) {
    return e.get(n);
}
function s(e, t) {
    const r = {
        name: e,
        type: "counter",
        description: t?.description,
        labelNames: t?.labelNames
    };
    return {
        increment: (e, t, n)=>{
            o(e).increment(e, r, t ?? 1, n);
        },
        record: (e, t, n)=>{
            o(e).record(e, r, t, n);
        }
    };
}
function i(e, t) {
    const r = {
        name: e,
        type: "gauge",
        description: t?.description,
        labelNames: t?.labelNames
    };
    return {
        gauge: (e, t, n)=>{
            o(e).gauge(e, r, t, n);
        },
        record: (e, t, n)=>{
            o(e).record(e, r, t, n);
        }
    };
}
function a(e, t) {
    const r = {
        name: e,
        type: "histogram",
        description: t?.description,
        labelNames: t?.labelNames
    };
    return {
        histogram: (e, t, n)=>{
            o(e).histogram(e, r, t, n);
        },
        record: (e, t, n)=>{
            o(e).record(e, r, t, n);
        }
    };
}
