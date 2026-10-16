"use strict";
require.d(exports, {
    Br: ()=>a,
    Sg: ()=>c,
    Vs: ()=>i,
    aq: ()=>s,
    jE: ()=>o,
    lZ: ()=>m,
    xk: ()=>p,
    yU: ()=>l
});
const n = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$|^text\/event-stream$/i, s = /^application\/(?:json(?:; ?charset=utf-?8)?|proto)$/i, o = /^application\/connect\+?(?:json(?:; ?charset=utf-?8)?|proto)$|^text\/event-stream$/i, i = "application/proto", a = "application/json", c = "application/connect+proto", l = "application/connect+json", u = "proto", d = "json";
function p(e) {
    if ("text/event-stream" === e) return {
        stream: !0,
        binary: !0
    };
    const t = null == e ? void 0 : e.match(n);
    if (!t) return;
    return {
        stream: !!t[1],
        binary: !!t[3]
    };
}
function m(e) {
    switch(e){
        case u:
            return {
                stream: !1,
                binary: !0
            };
        case d:
            return {
                stream: !1,
                binary: !1
            };
        default:
            return;
    }
}
