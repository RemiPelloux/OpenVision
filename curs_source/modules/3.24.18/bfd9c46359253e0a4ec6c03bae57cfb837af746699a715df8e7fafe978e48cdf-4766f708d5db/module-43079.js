"use strict";
require.d(exports, {
    T: ()=>o
});
var n = require("./module-84959.js");
function s(e) {
    const t = n.C[e];
    return "string" != typeof t ? e.toString() : t[0].toLowerCase() + t.substring(1).replace(/[A-Z]/g, (e)=>"_" + e.toLowerCase());
}
class o extends Error {
    constructor(e, t = n.C.Unknown, r, o, i){
        super(function(e, t) {
            return e.length ? `[${s(t)}] ${e}` : `[${s(t)}]`;
        }(e, t)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e, this.code = t, this.metadata = new Headers(null != r ? r : {}), this.details = null != o ? o : [], this.cause = i;
    }
    static from(e, t = n.C.Unknown) {
        return e instanceof o ? e : e instanceof Error ? "AbortError" == e.name ? new o(e.message, n.C.Canceled) : new o(e.message, t, void 0, void 0, e) : new o(String(e), t, void 0, void 0, e);
    }
    findDetails(e) {
        const t = "typeName" in e ? {
            findMessage: (t)=>t === e.typeName ? e : void 0
        } : e, r = [];
        for (const e of this.details){
            if ("getType" in e) {
                t.findMessage(e.getType().typeName) && r.push(e);
                continue;
            }
            const n = t.findMessage(e.type);
            if (n) try {
                r.push(n.fromBinary(e.value));
            } catch (e) {}
        }
        return r;
    }
}
