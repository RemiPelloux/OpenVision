import { v6e } from "./cookie.js";
import { fI, y6e } from "./getIpAddress.js";
import { ar } from "./integration.js";
import { h } from "./tslib.es6.js";
function _6e(e) {
    const t = {};
    let n = 0;
    for(; n < e.length;){
        const r = e.indexOf("=", n);
        if (r === -1) break;
        let s = e.indexOf(";", n);
        if (s === -1) s = e.length;
        else if (s < r) {
            n = e.lastIndexOf(";", r - 1) + 1;
            continue;
        }
        const i = e.slice(n, r).trim();
        if (t[i] === void 0) {
            let a = e.slice(r + 1, s).trim();
            a.charCodeAt(0) === 34 && (a = a.slice(1, -1));
            try {
                t[i] = a.indexOf("%") !== -1 ? decodeURIComponent(a) : a;
            } catch  {
                t[i] = a;
            }
        }
        n = s + 1;
    }
    return t;
}
function T6e(e) {
    return fI.map((s)=>{
        const i = e[s], a = Array.isArray(i) ? i.join(";") : i;
        return s === "Forwarded" ? k6e(a) : a?.split(",").map((o)=>o.trim());
    }).reduce((s, i)=>i ? s.concat(i) : s, []).find((s)=>s !== null && S6e(s)) || null;
}
function k6e(e) {
    if (!e) return null;
    for (const t of e.split(";"))if (t.startsWith("for=")) return t.slice(4);
    return null;
}
function S6e(e) {
    return /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/.test(e);
}
function w6e(e, t, n, r) {
    if (e.request = {
        ...e.request,
        ...E6e(t, r)
    }, r.ip) {
        const s = t.headers && T6e(t.headers) || n.ipAddress;
        s && (e.user = {
            ...e.user,
            ip_address: s
        });
    }
}
function E6e(e, t) {
    const n = {}, r = {
        ...e.headers
    };
    if (t.headers && (n.headers = r, t.cookies || delete r.cookie, t.ip || fI.forEach((s)=>{
        delete r[s];
    })), n.method = e.method, t.url && (n.url = e.url), t.cookies) {
        const s = e.cookies || (r?.cookie ? _6e(r.cookie) : void 0);
        n.cookies = s || {};
    }
    return t.query_string && (n.query_string = e.query_string), t.data && (n.data = e.data), n;
}
var HW, qW, KW, b6e;
export { E6e, HW, KW, S6e, T6e, _6e, b6e, k6e, qW, w6e };
var __wakaru_R6e_initialized = false;
export function R6e() {
if (__wakaru_R6e_initialized) return;
__wakaru_R6e_initialized = true;
"use strict";
h(), ar(), v6e(), y6e(), HW = {
    cookies: !0,
    data: !0,
    headers: !0,
    query_string: !0,
    url: !0
}, qW = "RequestData", KW = ((e = {})=>{
    const t = {
        ...HW,
        ...e.include
    };
    return {
        name: qW,
        processEvent (n, r, s) {
            const { sdkProcessingMetadata: i = {} } = n, { normalizedRequest: a, ipAddress: o } = i, l = {
                ...t,
                ip: t.ip ?? s.getOptions().sendDefaultPii
            };
            return a && w6e(n, a, {
                ipAddress: o
            }, l), n;
        }
    };
}), b6e = KW;

}
