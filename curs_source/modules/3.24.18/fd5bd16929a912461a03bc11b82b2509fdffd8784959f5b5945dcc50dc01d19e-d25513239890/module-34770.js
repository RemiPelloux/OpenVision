"use strict";
require.r(exports), require.d(exports, {
    contentLengthMiddleware: ()=>i,
    contentLengthMiddlewareOptions: ()=>o,
    getContentLengthPlugin: ()=>a
});
var n = require(50333);
const s = "content-length";
function i(e) {
    return (t)=>async (r)=>{
            const i = r.request;
            if (n.K.isInstance(i)) {
                const { body: t, headers: r } = i;
                if (t && -1 === Object.keys(r).map((e)=>e.toLowerCase()).indexOf(s)) try {
                    const r = e(t);
                    i.headers = {
                        ...i.headers,
                        [s]: String(r)
                    };
                } catch (e) {}
            }
            return t({
                ...r,
                request: i
            });
        };
}
const o = {
    step: "build",
    tags: [
        "SET_CONTENT_LENGTH",
        "CONTENT_LENGTH"
    ],
    name: "contentLengthMiddleware",
    override: !0
}, a = (e)=>({
        applyToStack: (t)=>{
            t.add(i(e.bodyLengthChecker), o);
        }
    });
