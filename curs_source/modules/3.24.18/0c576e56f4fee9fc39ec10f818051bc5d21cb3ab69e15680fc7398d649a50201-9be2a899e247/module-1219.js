"use strict";
require.d(exports, {
    gO: ()=>s,
    zf: ()=>i
});
class n extends Error {
    constructor(){
        super("MCP operation aborted"), this.isMcpAbortError = !0, this.name = "McpAbortError";
    }
}
function o(e) {
    return e.reason instanceof Error && !("undefined" != typeof DOMException && e.reason instanceof DOMException) ? e.reason : new n;
}
function s(e, t) {
    return t ? t.aborted ? (e.catch(()=>{}), Promise.reject(o(t))) : new Promise((r, n)=>{
        const s = ()=>n(o(t));
        t.addEventListener("abort", s, {
            once: !0
        }), e.then(r, n).finally(()=>t.removeEventListener("abort", s));
    }) : e;
}
function i(e, t) {
    return e instanceof n || !0 === t?.aborted;
}
