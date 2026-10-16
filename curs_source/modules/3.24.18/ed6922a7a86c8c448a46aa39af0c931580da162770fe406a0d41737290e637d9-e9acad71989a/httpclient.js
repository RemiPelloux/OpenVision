import { YLt, _pi, zdt } from "./HVr.js";
import { _Z, kg } from "./debug-build_3.js";
import { zr } from "./debug-logger.js";
import { $u } from "./index_10.js";
import { XH } from "./index_11.js";
import { Bhi, Xce, qH } from "./qIc.js";
import { Pu } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
import { Og } from "./worldwide.js";
import { Uie } from "./xhr.js";
function VS_(e, t, n, i, r) {
    if (Eqh(e, n.status, n.url)) {
        const s = JS_(t, i);
        let o, a, c, l;
        Iqh() && ([o, c] = Cqh("Cookie", s), [a, l] = Cqh("Set-Cookie", n));
        const u = xqh({
            url: s.url,
            method: s.method,
            status: n.status,
            requestHeaders: o,
            responseHeaders: a,
            requestCookies: c,
            responseCookies: l,
            error: r,
            type: "fetch"
        });
        Xce(u);
    }
}
function Cqh(e, t) {
    const n = zS_(t.headers);
    let i;
    try {
        const r = n[e] || n[e.toLowerCase()] || void 0;
        r && (i = Tqh(r));
    } catch  {}
    return [
        n,
        i
    ];
}
function jS_(e, t, n, i, r) {
    if (Eqh(e, t.status, t.responseURL)) {
        let s, o, a;
        if (Iqh()) {
            try {
                const l = t.getResponseHeader("Set-Cookie") || t.getResponseHeader("set-cookie") || void 0;
                l && (o = Tqh(l));
            } catch  {}
            try {
                a = KS_(t);
            } catch  {}
            s = i;
        }
        const c = xqh({
            url: t.responseURL,
            method: n,
            status: t.status,
            requestHeaders: s,
            responseHeaders: a,
            responseCookies: o,
            error: r,
            type: "xhr"
        });
        Xce(c);
    }
}
function qS_(e) {
    if (e) {
        const t = e["Content-Length"] || e["content-length"];
        if (t) return parseInt(t, 10);
    }
}
function Tqh(e) {
    return e.split("; ").reduce((t, n)=>{
        const [i, r] = n.split("=");
        return i && r && (t[i] = r), t;
    }, {});
}
function zS_(e) {
    const t = {};
    return e.forEach((n, i)=>{
        t[i] = n;
    }), t;
}
function KS_(e) {
    const t = e.getAllResponseHeaders();
    return t ? t.split(`\r
`).reduce((n, i)=>{
        const [r, s] = i.split(": ");
        return r && s && (n[r] = s), n;
    }, {}) : {};
}
function YS_(e, t) {
    return e.some((n)=>typeof n == "string" ? t.includes(n) : n.test(t));
}
function XS_(e, t) {
    return e.some((n)=>typeof n == "number" ? n === t : t >= n[0] && t <= n[1]);
}
function ZS_(e, t) {
    _pi() && zdt((n)=>{
        if (Pu() !== e) return;
        const { response: i, args: r, error: s, virtualError: o } = n, [a, c] = r;
        i && VS_(t, a, i, c, s || o);
    }, !1);
}
function QS_(e, t) {
    "XMLHttpRequest" in Og && YLt((n)=>{
        if (Pu() !== e) return;
        const { error: i, virtualError: r } = n, s = n.xhr, o = s[Uie];
        if (!o) return;
        const { method: a, request_headers: c } = o;
        try {
            jS_(t, s, a, c, i || r);
        } catch (l) {
            kg && zr.warn("Error while extracting response event form XHR response", l);
        }
    });
}
function Eqh(e, t, n) {
    return XS_(e.failedRequestStatusCodes, t) && YS_(e.failedRequestTargets, n) && !Bhi(n, Pu());
}
function xqh(e) {
    const t = Pu(), n = t && e.error && e.error instanceof Error ? e.error.stack : void 0, i = n && t ? t.getOptions().stackParser(n, 0, 1) : void 0, r = `HTTP Client Error with status code: ${e.status}`, s = {
        message: r,
        exception: {
            values: [
                {
                    type: "Error",
                    value: r,
                    stacktrace: i ? {
                        frames: i
                    } : void 0
                }
            ]
        },
        request: {
            url: e.url,
            method: e.method,
            headers: e.requestHeaders,
            cookies: e.requestCookies
        },
        contexts: {
            response: {
                status_code: e.status,
                headers: e.responseHeaders,
                cookies: e.responseCookies,
                body_size: qS_(e.responseHeaders)
            }
        }
    };
    return qH(s, {
        type: `auto.http.client.${e.type}`,
        handled: !1
    }), s;
}
function JS_(e, t) {
    return !t && e instanceof Request || e instanceof Request && e.bodyUsed ? e : new Request(e, t);
}
function Iqh() {
    const e = Pu();
    return e ? !!e.getOptions().sendDefaultPii : !1;
}
var Aqh, Rqh, Dqh;
export { Aqh, Cqh, Dqh, Eqh, Iqh, JS_, KS_, QS_, Rqh, Tqh, VS_, XS_, YS_, ZS_, jS_, qS_, xqh, zS_ };
var __wakaru_ek__initialized = false;
export function ek_() {
if (__wakaru_ek__initialized) return;
__wakaru_ek__initialized = true;
x(), $u(), XH(), _Z(), Aqh = "HttpClient", Rqh = ((e = {})=>{
    const t = {
        failedRequestStatusCodes: [
            [
                500,
                599
            ]
        ],
        failedRequestTargets: [
            /.*/
        ],
        ...e
    };
    return {
        name: Aqh,
        setup (n) {
            ZS_(n, t), QS_(n, t);
        }
    };
}), Dqh = Rqh;

}
