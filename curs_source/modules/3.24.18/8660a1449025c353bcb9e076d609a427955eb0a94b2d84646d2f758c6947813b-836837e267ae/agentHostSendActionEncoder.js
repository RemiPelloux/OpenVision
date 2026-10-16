import { _os, fyk } from "./Ycg.js";
import { Gse } from "./binary-encoding.js";
import { hX } from "./index_12.ts";
import { hr } from "./protobuf.js";
import { Gte, mY } from "./request_context_exec_pb.js";
import { E } from "./tslib.es6.js";
import { akm } from "./yBp.js";
var zll, Ghg, qhg;
export { Ghg, qhg, zll };
var __wakaru_vyk_initialized = false;
export function vyk() {
if (__wakaru_vyk_initialized) return;
__wakaru_vyk_initialized = true;
"use strict";
E(), hX(), Gte(), hr(), zll = [
    "rules",
    "agentSkills",
    "customSubagents"
], Ghg = zll.map((t)=>{
    const e = mY.fields.list().find((n)=>n.localName === t);
    if (e === void 0) throw new Error(`RequestContext has no field ${t}`);
    return e.no;
}), qhg = class {
    constructor(){
        this._cache = new Map;
    }
    encode(t) {
        const e = t.action, n = e === void 0 ? void 0 : akm(e), i = n?.requestContext;
        if (e === void 0 || n === void 0 || i === void 0) {
            const p = t.toBinary();
            return this._lastByteSnapshot = {
                bytes: p.byteLength,
                bytesSource: "send_action_request"
            }, p;
        }
        const r = new Map, s = _os(i);
        let o = 0, a = 0, l = 0;
        zll.forEach((p, g)=>{
            const f = Ghg[g], _ = s[p];
            s[p] = [];
            for (const b of _){
                const y = fyk(this._cache, r, `${f}:${b.fullPath}`, b);
                mY.runtime.bin.onUnknownField(s, f, Gse.LengthDelimited, y), p === "rules" ? o += y.byteLength : p === "agentSkills" ? a += y.byteLength : l += y.byteLength;
            }
        }), this._cache.clear();
        for (const [p, g] of r)this._cache.set(p, g);
        const c = _os(n);
        c.requestContext = s;
        const u = _os(e);
        u.action = {
            case: e.action.case,
            value: c
        };
        const d = _os(t);
        d.action = u;
        const h = d.toBinary();
        return this._lastByteSnapshot = {
            bytes: h.byteLength,
            bytesSource: "send_action_request",
            rulesBytes: o,
            skillsBytes: a,
            subagentsBytes: l
        }, h;
    }
    lastByteSnapshot() {
        return this._lastByteSnapshot;
    }
    clear() {
        this._cache.clear(), this._lastByteSnapshot = void 0;
    }
};

}
