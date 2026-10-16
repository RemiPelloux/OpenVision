import { krg } from "./cookie.js";
import { Erg, bVr } from "./getIpAddress.js";
import { YH } from "./integration.js";
import { x } from "./tslib.es6.js";
function Srg(e) {
    const t = {};
    let n = 0;
    for(; n < e.length;){
        const i = e.indexOf("=", n);
        if (i === -1) break;
        let r = e.indexOf(";", n);
        if (r === -1) r = e.length;
        else if (r < i) {
            n = e.lastIndexOf(";", i - 1) + 1;
            continue;
        }
        const s = e.slice(n, i).trim();
        if (t[s] === void 0) {
            let o = e.slice(i + 1, r).trim();
            o.charCodeAt(0) === 34 && (o = o.slice(1, -1));
            try {
                t[s] = o.indexOf("%") !== -1 ? decodeURIComponent(o) : o;
            } catch  {
                t[s] = o;
            }
        }
        n = r + 1;
    }
    return t;
}
function wrg(e) {
    return bVr.map((r)=>{
        const s = e[r], o = Array.isArray(s) ? s.join(";") : s;
        return r === "Forwarded" ? Crg(o) : o?.split(",").map((a)=>a.trim());
    }).reduce((r, s)=>s ? r.concat(s) : r, []).find((r)=>r !== null && Trg(r)) || null;
}
function Crg(e) {
    if (!e) return null;
    for (const t of e.split(";"))if (t.startsWith("for=")) return t.slice(4);
    return null;
}
function Trg(e) {
    return /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/.test(e);
}
function xrg(e, t, n, i) {
    if (e.request = {
        ...e.request,
        ...Irg(t, i)
    }, i.ip) {
        const r = t.headers && wrg(t.headers) || n.ipAddress;
        r && (e.user = {
            ...e.user,
            ip_address: r
        });
    }
}
function Irg(e, t) {
    const n = {}, i = {
        ...e.headers
    };
    if (t.headers && (n.headers = i, t.cookies || delete i.cookie, t.ip || bVr.forEach((r)=>{
        delete i[r];
    })), n.method = e.method, t.url && (n.url = e.url), t.cookies) {
        const r = e.cookies || (i?.cookie ? Srg(i.cookie) : void 0);
        n.cookies = r || {};
    }
    return t.query_string && (n.query_string = e.query_string), t.data && (n.data = e.data), n;
}
var LCc, NCc, OCc, FCc;
export { Crg, FCc, Irg, LCc, NCc, OCc, Srg, Trg, wrg, xrg };
var __wakaru_Arg_initialized = false;
export function Arg() {
if (__wakaru_Arg_initialized) return;
__wakaru_Arg_initialized = true;
"use strict";
x(), YH(), krg(), Erg(), LCc = {
    cookies: !0,
    data: !0,
    headers: !0,
    query_string: !0,
    url: !0
}, NCc = "RequestData", OCc = ((e = {})=>{
    const t = {
        ...LCc,
        ...e.include
    };
    return {
        name: NCc,
        processEvent (n, i, r) {
            const { sdkProcessingMetadata: s = {} } = n, { normalizedRequest: o, ipAddress: a } = s, c = {
                ...t,
                ip: t.ip ?? r.getOptions().sendDefaultPii
            };
            return o && xrg(n, o, {
                ipAddress: a
            }, c), n;
        }
    };
}), FCc = OCc;

}
