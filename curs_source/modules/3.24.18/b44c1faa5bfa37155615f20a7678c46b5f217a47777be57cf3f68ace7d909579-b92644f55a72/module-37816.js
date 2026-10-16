"use strict";
require.d(exports, {
    Cu: ()=>a,
    Q8: ()=>c
});
var n = require("./module-33751.js"), s = require("./module-42481.js"), o = require("./module-92801.js"), i = require("./module-84959.js");
const a = 2;
function c(e) {
    const t = new TextEncoder;
    return {
        serialize (r) {
            try {
                const o = function(e, t, r) {
                    const o = {};
                    void 0 !== t && (o.error = (0, n.gO)(t, r), e = (0, s.Pb)(e, t.metadata));
                    let i = !1;
                    const a = {};
                    return e.forEach((e, t)=>{
                        i = !0, a[t] = [
                            e
                        ];
                    }), i && (o.metadata = a), o;
                }(r.metadata, r.error, e), i = JSON.stringify(o);
                return t.encode(i);
            } catch (e) {
                const t = e instanceof Error ? e.message : String(e);
                throw new o.T(`failed to serialize EndStreamResponse: ${t}`, i.C.Internal);
            }
        },
        parse (e) {
            try {
                return function(e) {
                    const t = new o.T("invalid end stream", i.C.Unknown);
                    let r;
                    try {
                        r = JSON.parse("string" == typeof e ? e : (new TextDecoder).decode(e));
                    } catch (e) {
                        throw t;
                    }
                    if ("object" != typeof r || null == r || Array.isArray(r)) throw t;
                    const s = new Headers;
                    if ("metadata" in r) {
                        if ("object" != typeof r.metadata || null == r.metadata || Array.isArray(r.metadata)) throw t;
                        for (const [e, n] of Object.entries(r.metadata)){
                            if (!Array.isArray(n) || n.some((e)=>"string" != typeof e)) throw t;
                            for (const t of n)s.append(e, t);
                        }
                    }
                    return {
                        metadata: s,
                        error: "error" in r && null != r.error ? (0, n.Nn)(r.error, s, t) : void 0
                    };
                }(e);
            } catch (e) {
                const t = e instanceof Error ? e.message : String(e);
                throw new o.T(`failed to parse EndStreamResponse: ${t}`, i.C.InvalidArgument);
            }
        }
    };
}
