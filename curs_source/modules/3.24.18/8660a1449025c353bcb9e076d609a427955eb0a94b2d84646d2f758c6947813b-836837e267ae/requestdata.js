import { lpy } from "./cookie.js";
import { hpy, swo } from "./getIpAddress.js";
import { hQ } from "./integration.js";
import { E } from "./tslib.es6.js";
function apy(t) {
    const e = {};
    let n = 0;
    for(; n < t.length;){
        const i = t.indexOf("=", n);
        if (i === -1) break;
        let r = t.indexOf(";", n);
        if (r === -1) r = t.length;
        else if (r < i) {
            n = t.lastIndexOf(";", i - 1) + 1;
            continue;
        }
        const s = t.slice(n, i).trim();
        if (e[s] === void 0) {
            let o = t.slice(i + 1, r).trim();
            o.charCodeAt(0) === 34 && (o = o.slice(1, -1));
            try {
                e[s] = o.indexOf("%") !== -1 ? decodeURIComponent(o) : o;
            } catch  {
                e[s] = o;
            }
        }
        n = r + 1;
    }
    return e;
}
function cpy(t) {
    return swo.map((r)=>{
        const s = t[r], o = Array.isArray(s) ? s.join(";") : s;
        return r === "Forwarded" ? upy(o) : o?.split(",").map((a)=>a.trim());
    }).reduce((r, s)=>s ? r.concat(s) : r, []).find((r)=>r !== null && dpy(r)) || null;
}
function upy(t) {
    if (!t) return null;
    for (const e of t.split(";"))if (e.startsWith("for=")) return e.slice(4);
    return null;
}
function dpy(t) {
    return /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/.test(t);
}
function ppy(t, e, n, i) {
    if (t.request = {
        ...t.request,
        ...mpy(e, i)
    }, i.ip) {
        const r = e.headers && cpy(e.headers) || n.ipAddress;
        r && (t.user = {
            ...t.user,
            ip_address: r
        });
    }
}
function mpy(t, e) {
    const n = {}, i = {
        ...t.headers
    };
    if (e.headers && (n.headers = i, e.cookies || delete i.cookie, e.ip || swo.forEach((r)=>{
        delete i[r];
    })), n.method = t.method, e.url && (n.url = t.url), e.cookies) {
        const r = t.cookies || (i?.cookie ? apy(i.cookie) : void 0);
        n.cookies = r || {};
    }
    return e.query_string && (n.query_string = t.query_string), e.data && (n.data = t.data), n;
}
var tqu, nqu, iqu, rqu;
export { apy, cpy, dpy, iqu, mpy, nqu, ppy, rqu, tqu, upy };
var __wakaru_gpy_initialized = false;
export function gpy() {
if (__wakaru_gpy_initialized) return;
__wakaru_gpy_initialized = true;
"use strict";
E(), hQ(), lpy(), hpy(), tqu = {
    cookies: !0,
    data: !0,
    headers: !0,
    query_string: !0,
    url: !0
}, nqu = "RequestData", iqu = ((t = {})=>{
    const e = {
        ...tqu,
        ...t.include
    };
    return {
        name: nqu,
        processEvent (n, i, r) {
            const { sdkProcessingMetadata: s = {} } = n, { normalizedRequest: o, ipAddress: a } = s, l = {
                ...e,
                ip: e.ip ?? r.getOptions().sendDefaultPii
            };
            return o && ppy(n, o, {
                ipAddress: a
            }, l), n;
        }
    };
}), rqu = iqu;

}
