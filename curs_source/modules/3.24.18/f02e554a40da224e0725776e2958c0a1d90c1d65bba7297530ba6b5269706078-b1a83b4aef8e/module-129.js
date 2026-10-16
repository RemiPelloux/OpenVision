"use strict";
require.d(exports, {
    Br: ()=>a,
    Sg: ()=>u,
    Vs: ()=>o,
    aq: ()=>s,
    jE: ()=>i,
    lZ: ()=>f,
    xk: ()=>d,
    yU: ()=>c
});
const n = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$|^text\/event-stream$/i, s = /^application\/(?:json(?:; ?charset=utf-?8)?|proto)$/i, i = /^application\/connect\+?(?:json(?:; ?charset=utf-?8)?|proto)$|^text\/event-stream$/i, o = "application/proto", a = "application/json", u = "application/connect+proto", c = "application/connect+json", l = "proto", m = "json";
function d(t) {
    if ("text/event-stream" === t) return {
        stream: !0,
        binary: !0
    };
    const e = null == t ? void 0 : t.match(n);
    if (!e) return;
    return {
        stream: !!e[1],
        binary: !!e[3]
    };
}
function f(t) {
    switch(t){
        case l:
            return {
                stream: !1,
                binary: !0
            };
        case m:
            return {
                stream: !1,
                binary: !1
            };
        default:
            return;
    }
}
