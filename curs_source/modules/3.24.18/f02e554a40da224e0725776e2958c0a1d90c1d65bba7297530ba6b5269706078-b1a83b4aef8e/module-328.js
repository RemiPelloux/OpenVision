"use strict";
require.d(exports, {
    T: ()=>i
});
var n = require("./module-8032.js"), s = require("./module-6928.js");
class i extends Error {
    constructor(t, e = n.C.Unknown, r, i, o){
        super(function(t, e) {
            return t.length ? `[${(0, s.s)(e)}] ${t}` : `[${(0, s.s)(e)}]`;
        }(t, e)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = t, this.code = e, this.metadata = new Headers(null != r ? r : {}), this.details = null != i ? i : [], this.cause = o;
    }
    static from(t, e = n.C.Unknown) {
        return t instanceof i ? t : t instanceof Error ? "AbortError" == t.name ? new i(t.message, n.C.Canceled) : new i(t.message, e, void 0, void 0, t) : new i(String(t), e, void 0, void 0, t);
    }
    findDetails(t) {
        const e = "typeName" in t ? {
            findMessage: (e)=>e === t.typeName ? t : void 0
        } : t, r = [];
        for (const t of this.details){
            if ("getType" in t) {
                e.findMessage(t.getType().typeName) && r.push(t);
                continue;
            }
            const n = e.findMessage(t.type);
            if (n) try {
                r.push(n.fromBinary(t.value));
            } catch (t) {}
        }
        return r;
    }
}
