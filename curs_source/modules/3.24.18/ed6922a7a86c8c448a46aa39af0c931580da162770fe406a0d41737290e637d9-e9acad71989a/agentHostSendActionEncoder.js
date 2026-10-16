import { BLd } from "./A3u.js";
import { ZK, lss } from "./binary-encoding.js";
import { ZW } from "./index_12.ts";
import { bi } from "./protobuf.js";
import { Bj, x$ } from "./request_context_exec_pb.js";
import { x } from "./tslib.es6.js";
function fQv(e, t) {
    return e !== void 0 && t.getType().runtime.bin.listUnknownFields(t).length === 0 && e.message.getType().runtime.bin.listUnknownFields(e.message).length === 0 && e.message.equals(t);
}
function vQv(e, t, n, i) {
    const r = e.get(n), s = fQv(r, i) ? r.frame : new lss().bytes(i.toBinary()).finish();
    return t.set(n, {
        message: i,
        frame: s
    }), s;
}
function WQi(e) {
    const t = e.getType(), n = new t(e);
    for (const i of t.runtime.bin.listUnknownFields(e))t.runtime.bin.onUnknownField(n, i.no, i.wireType, i.data);
    return n;
}
var j1o, yTh, STh;
export { STh, WQi, fQv, j1o, vQv, yTh };
var __wakaru__Qv_initialized = false;
export function _Qv() {
if (__wakaru__Qv_initialized) return;
__wakaru__Qv_initialized = true;
"use strict";
x(), ZW(), Bj(), bi(), j1o = [
    "rules",
    "agentSkills",
    "customSubagents"
], yTh = j1o.map((e)=>{
    const t = x$.fields.list().find((n)=>n.localName === e);
    if (t === void 0) throw new Error(`RequestContext has no field ${e}`);
    return t.no;
}), STh = class {
    constructor(){
        this._cache = new Map;
    }
    encode(e) {
        const t = e.action, n = t === void 0 ? void 0 : BLd(t), i = n?.requestContext;
        if (t === void 0 || n === void 0 || i === void 0) {
            const g = e.toBinary();
            return this._lastByteSnapshot = {
                bytes: g.byteLength,
                bytesSource: "send_action_request"
            }, g;
        }
        const r = new Map, s = WQi(i);
        let o = 0, a = 0, c = 0;
        j1o.forEach((g, f)=>{
            const v = yTh[f], b = s[g];
            s[g] = [];
            for (const y of b){
                const T = vQv(this._cache, r, `${v}:${y.fullPath}`, y);
                x$.runtime.bin.onUnknownField(s, v, ZK.LengthDelimited, T), g === "rules" ? o += T.byteLength : g === "agentSkills" ? a += T.byteLength : c += T.byteLength;
            }
        }), this._cache.clear();
        for (const [g, f] of r)this._cache.set(g, f);
        const l = WQi(n);
        l.requestContext = s;
        const u = WQi(t);
        u.action = {
            case: t.action.case,
            value: l
        };
        const h = WQi(e);
        h.action = u;
        const p = h.toBinary();
        return this._lastByteSnapshot = {
            bytes: p.byteLength,
            bytesSource: "send_action_request",
            rulesBytes: o,
            skillsBytes: a,
            subagentsBytes: c
        }, p;
    }
    lastByteSnapshot() {
        return this._lastByteSnapshot;
    }
    clear() {
        this._cache.clear(), this._lastByteSnapshot = void 0;
    }
};

}
