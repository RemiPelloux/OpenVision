"use strict";
require.d(exports, {
    Fm: ()=>n,
    Pu: ()=>o,
    v5: ()=>a,
    wt: ()=>i
});
const n = (0, require("./module-33002.js").cF)(Symbol("metricsBackend"), {
    record: ()=>{},
    increment: ()=>{},
    gauge: ()=>{},
    histogram: ()=>{}
});
function s(e) {
    return e.get(n);
}
function o(e, t) {
    const r = {
        name: e,
        type: "counter",
        description: t?.description,
        labelNames: t?.labelNames
    };
    return {
        increment: (e, t, n)=>{
            s(e).increment(e, r, t ?? 1, n);
        },
        record: (e, t, n)=>{
            s(e).record(e, r, t, n);
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
            s(e).gauge(e, r, t, n);
        },
        record: (e, t, n)=>{
            s(e).record(e, r, t, n);
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
            s(e).histogram(e, r, t, n);
        },
        record: (e, t, n)=>{
            s(e).record(e, r, t, n);
        }
    };
}
