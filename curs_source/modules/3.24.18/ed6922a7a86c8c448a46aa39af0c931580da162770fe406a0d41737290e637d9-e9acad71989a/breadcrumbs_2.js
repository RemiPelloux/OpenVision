import { Fjr, Lie, Qdt, YLt, nhi, opn, zdt } from "./HVr.js";
import { LLt } from "./console.js";
import { _Z, kg } from "./debug-build_3.js";
import { zr } from "./debug-logger.js";
import { Q$, z_ } from "./helpers.js";
import { $u } from "./index_10.js";
import { XH } from "./index_11.js";
import { gK } from "./inp.js";
import { F3e, NLt, ZB, tqe } from "./qIc.js";
import { Pu } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
import { Uie } from "./xhr.js";
function gS_(e) {
    return function(n) {
        Pu() === e && ZB({
            category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
            event_id: n.event_id,
            level: n.level,
            message: F3e(n)
        }, {
            event: n
        });
    };
}
function fS_(e, t) {
    return function(i) {
        if (Pu() !== e) return;
        let r, s, o = typeof t == "object" ? t.serializeAttribute : void 0, a = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
        a && a > P9n && (kg && zr.warn(`\`dom.maxStringLength\` cannot exceed ${P9n}, but a value of ${a} was configured. Sentry will use ${P9n} instead.`), a = P9n), typeof o == "string" && (o = [
            o
        ]);
        try {
            const l = i.event, u = SS_(l) ? l.target : l;
            r = gK(u, {
                keyAttrs: o,
                maxStringLength: a
            }), s = nhi(u);
        } catch  {
            r = "<unknown>";
        }
        if (r.length === 0) return;
        const c = {
            category: `ui.${i.name}`,
            message: r
        };
        s && (c.data = {
            "ui.component_name": s
        }), ZB(c, {
            event: i.event,
            name: i.name,
            global: i.global
        });
    };
}
function vS_(e) {
    return function(n) {
        if (Pu() !== e) return;
        const i = {
            category: "console",
            data: {
                arguments: n.args,
                logger: "console"
            },
            level: NLt(n.level),
            message: tqe(n.args, " ")
        };
        if (n.level === "assert") if (n.args[0] === !1) i.message = `Assertion failed: ${tqe(n.args.slice(1), " ") || "console.assert"}`, i.data.arguments = n.args.slice(1);
        else return;
        ZB(i, {
            input: n.args,
            level: n.level
        });
    };
}
function _S_(e) {
    return function(n) {
        if (Pu() !== e) return;
        const { startTimestamp: i, endTimestamp: r } = n, s = n.xhr[Uie];
        if (!i || !r || !s) return;
        const { method: o, url: a, status_code: c, body: l } = s, u = {
            method: o,
            url: a,
            status_code: c
        }, h = {
            xhr: n.xhr,
            input: l,
            startTimestamp: i,
            endTimestamp: r
        }, p = {
            category: "xhr",
            data: u,
            type: "http",
            level: opn(c)
        };
        e.emit("beforeOutgoingRequestBreadcrumb", p, h), ZB(p, h);
    };
}
function bS_(e) {
    return function(n) {
        if (Pu() !== e) return;
        const { startTimestamp: i, endTimestamp: r } = n;
        if (r && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST")) if (n.fetchData.method, n.fetchData.url, n.error) {
            const s = n.fetchData, o = {
                data: n.error,
                input: n.args,
                startTimestamp: i,
                endTimestamp: r
            }, a = {
                category: "fetch",
                data: s,
                level: "error",
                type: "http"
            };
            e.emit("beforeOutgoingRequestBreadcrumb", a, o), ZB(a, o);
        } else {
            const s = n.response, o = {
                ...n.fetchData,
                status_code: s?.status
            };
            n.fetchData.request_body_size, n.fetchData.response_body_size, s?.status;
            const a = {
                input: n.args,
                response: s,
                startTimestamp: i,
                endTimestamp: r
            }, c = {
                category: "fetch",
                data: o,
                type: "http",
                level: opn(o.status_code)
            };
            e.emit("beforeOutgoingRequestBreadcrumb", c, a), ZB(c, a);
        }
    };
}
function yS_(e) {
    return function(n) {
        if (Pu() !== e) return;
        let i = n.from, r = n.to;
        const s = Lie(z_.location.href);
        let o = i ? Lie(i) : void 0;
        const a = Lie(r);
        o?.path || (o = s), s.protocol === a.protocol && s.host === a.host && (r = a.relative), s.protocol === o.protocol && s.host === o.host && (i = o.relative), ZB({
            category: "navigation",
            data: {
                from: i,
                to: r
            }
        });
    };
}
function SS_(e) {
    return !!e && !!e.target;
}
var P9n, Yjh, Xjh, T2o;
export { P9n, SS_, T2o, Xjh, Yjh, _S_, bS_, fS_, gS_, vS_, yS_ };
var __wakaru_Zjh_initialized = false;
export function Zjh() {
if (__wakaru_Zjh_initialized) return;
__wakaru_Zjh_initialized = true;
x(), $u(), XH(), _Z(), Q$(), P9n = 1024, Yjh = "Breadcrumbs", Xjh = ((e = {})=>{
    const t = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...e
    };
    return {
        name: Yjh,
        setup (n) {
            t.console && LLt(vS_(n)), t.dom && Fjr(fS_(n, t.dom)), t.xhr && YLt(_S_(n)), t.fetch && zdt(bS_(n)), t.history && Qdt(yS_(n)), t.sentry && n.on("beforeSendEvent", gS_(n));
        }
    };
}), T2o = Xjh;

}
