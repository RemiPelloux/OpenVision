"use strict";
function n(e) {
    const { backend: t, labels: r } = e;
    function n(e) {
        return {
            ...r,
            ...e
        };
    }
    return {
        record: (e, r, s, o)=>{
            t.record(e, r, s, n(o));
        },
        increment: (e, r, s, o)=>{
            t.increment(e, r, s, n(o));
        },
        gauge: (e, r, s, o)=>{
            t.gauge(e, r, s, n(o));
        },
        histogram: (e, r, s, o)=>{
            t.histogram(e, r, s, n(o));
        }
    };
}
require.d(exports, {
    Pu: ()=>i,
    wt: ()=>a,
    v5: ()=>c,
    ts: ()=>n,
    Fm: ()=>s
});
const s = (0, require("./module-33002.js").cF)(Symbol("metricsBackend"), {
    record: ()=>{},
    increment: ()=>{},
    gauge: ()=>{},
    histogram: ()=>{}
});
function o(e) {
    return e.get(s);
}
function i(e, t) {
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
function a(e, t) {
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
function c(e, t) {
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
