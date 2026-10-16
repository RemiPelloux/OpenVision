"use strict";
require.d(exports, {
    Cu: ()=>a,
    Q8: ()=>u
});
var n = require("./module-9726.js"), s = require("./module-6422.js"), i = require("./module-328.js"), o = require("./module-8032.js");
const a = 2;
function u(t) {
    const e = new TextEncoder;
    return {
        serialize (r) {
            try {
                const i = function(t, e, r) {
                    const i = {};
                    void 0 !== e && (i.error = (0, n.gO)(e, r), t = (0, s.Pb)(t, e.metadata));
                    let o = !1;
                    const a = {};
                    return t.forEach((t, e)=>{
                        o = !0, a[e] = [
                            t
                        ];
                    }), o && (i.metadata = a), i;
                }(r.metadata, r.error, t), o = JSON.stringify(i);
                return e.encode(o);
            } catch (t) {
                const e = t instanceof Error ? t.message : String(t);
                throw new i.T(`failed to serialize EndStreamResponse: ${e}`, o.C.Internal);
            }
        },
        parse (t) {
            try {
                return function(t) {
                    const e = new i.T("invalid end stream", o.C.Unknown);
                    let r;
                    try {
                        r = JSON.parse("string" == typeof t ? t : (new TextDecoder).decode(t));
                    } catch (t) {
                        throw e;
                    }
                    if ("object" != typeof r || null == r || Array.isArray(r)) throw e;
                    const s = new Headers;
                    if ("metadata" in r) {
                        if ("object" != typeof r.metadata || null == r.metadata || Array.isArray(r.metadata)) throw e;
                        for (const [t, n] of Object.entries(r.metadata)){
                            if (!Array.isArray(n) || n.some((t)=>"string" != typeof t)) throw e;
                            for (const e of n)s.append(t, e);
                        }
                    }
                    return {
                        metadata: s,
                        error: "error" in r && null != r.error ? (0, n.Nn)(r.error, s, e) : void 0
                    };
                }(t);
            } catch (t) {
                const e = t instanceof Error ? t.message : String(t);
                throw new i.T(`failed to parse EndStreamResponse: ${e}`, o.C.InvalidArgument);
            }
        }
    };
}
