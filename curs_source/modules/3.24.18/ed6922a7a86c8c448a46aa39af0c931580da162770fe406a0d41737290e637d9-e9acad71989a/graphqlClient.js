import { CV, JQ, Lpi, XLt } from "./HVr.js";
import { $u } from "./index_10.js";
import { XH } from "./index_11.js";
import { Chn, Thn, a1 } from "./semanticAttributes.js";
import { iv } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
import { Uie } from "./xhr.js";
function rk_(e, t) {
    e.on("beforeOutgoingRequestSpan", (n, i)=>{
        const s = iv(n).data || {};
        if (!(s[a1] === "http.client")) return;
        const c = s[Thn] || s["http.url"], l = s[Chn] || s["http.method"];
        if (!JQ(c) || !JQ(l)) return;
        const { endpoints: u } = t, h = CV(c, u), p = Fqh(i);
        if (h && p) {
            const g = Bqh(p);
            if (g) {
                const f = Oqh(g);
                n.updateName(`${l} ${c} (${f})`), n.setAttribute("graphql.document", p);
            }
        }
    });
}
function sk_(e, t) {
    e.on("beforeOutgoingRequestBreadcrumb", (n, i)=>{
        const { category: r, type: s, data: o } = n;
        if (s === "http" && (r === "fetch" || r === "xhr")) {
            const u = o?.url, { endpoints: h } = t, p = CV(u, h), g = Fqh(i);
            if (p && o && g) {
                const f = Bqh(g);
                if (!o.graphql && f) {
                    const v = Oqh(f);
                    o["graphql.document"] = f.query, o["graphql.operation"] = v;
                }
            }
        }
    });
}
function Oqh(e) {
    const { query: t, operationName: n } = e, { operationName: i = n, operationType: r } = ok_(t);
    return i ? `${r} ${i}` : `${r}`;
}
function Fqh(e) {
    const t = "xhr" in e;
    let n;
    if (t) {
        const i = e.xhr[Uie];
        n = i && XLt(i.body)[0];
    } else {
        const i = Lpi(e.input);
        n = XLt(i)[0];
    }
    return n;
}
function ok_(e) {
    const t = /^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/, n = /^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/, i = e.match(t);
    if (i) return {
        operationType: i[1],
        operationName: i[2]
    };
    const r = e.match(n);
    return r ? {
        operationType: r[1],
        operationName: void 0
    } : {
        operationType: void 0,
        operationName: void 0
    };
}
function Bqh(e) {
    let t;
    try {
        const n = JSON.parse(e);
        !!n.query && (t = n);
    } finally{
        return t;
    }
}
var Uqh, $qh, Hqh;
export { $qh, Bqh, Fqh, Hqh, Oqh, Uqh, ok_, rk_, sk_ };
var __wakaru_ak__initialized = false;
export function ak_() {
if (__wakaru_ak__initialized) return;
__wakaru_ak__initialized = true;
x(), $u(), XH(), Uqh = "GraphQLClient", $qh = ((e)=>({
        name: Uqh,
        setup (t) {
            rk_(t, e), sk_(t, e);
        }
    })), Hqh = $qh;

}
