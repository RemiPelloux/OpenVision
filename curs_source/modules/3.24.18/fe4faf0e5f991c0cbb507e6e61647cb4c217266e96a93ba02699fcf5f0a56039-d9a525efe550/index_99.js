import { TJ } from "./index_97.js";
import { Jmr } from "./index_98.js";
import { i } from "./plugin-brand-icon.js";
var bPt, N0;
export { N0, bPt };
var __wakaru_vxi_initialized = false;
export function vxi() {
if (__wakaru_vxi_initialized) return;
__wakaru_vxi_initialized = true;
Jmr(), bPt = class extends Error {
    constructor(e, a, s){
        super(), typeof a == "string" && (s = a, a = void 0);
        let l = "", u = {}, p = !1;
        if (a && ("line" in a && "column" in a ? u = {
            place: a
        } : "start" in a && "end" in a ? u = {
            place: a
        } : "type" in a ? u = {
            ancestors: [
                a
            ],
            place: a.position
        } : u = {
            ...a
        }), typeof e == "string" ? l = e : !u.cause && e && (p = !0, l = e.message, u.cause = e), !u.ruleId && !u.source && typeof s == "string") {
            const b = s.indexOf(":");
            b === -1 ? u.ruleId = s : (u.source = s.slice(0, b), u.ruleId = s.slice(b + 1));
        }
        if (!u.place && u.ancestors && u.ancestors) {
            const b = u.ancestors[u.ancestors.length - 1];
            b && (u.place = b.position);
        }
        const m = u.place && "start" in u.place ? u.place.start : u.place;
        this.ancestors = u.ancestors || void 0, this.cause = u.cause || void 0, this.column = m ? m.column : void 0, this.fatal = void 0, this.file, this.message = l, this.line = m ? m.line : void 0, this.name = TJ(u.place) || "1:1", this.place = u.place || void 0, this.reason = this.message, this.ruleId = u.ruleId || void 0, this.source = u.source || void 0, this.stack = p && u.cause && typeof u.cause.stack == "string" ? u.cause.stack : "", this.actual, this.expected, this.note, this.url;
    }
}, i(bPt, "VFileMessage"), N0 = bPt, N0.prototype.file = "", N0.prototype.name = "", N0.prototype.reason = "", N0.prototype.message = "", N0.prototype.stack = "", N0.prototype.column = void 0, N0.prototype.line = void 0, N0.prototype.ancestors = void 0, N0.prototype.cause = void 0, N0.prototype.fatal = void 0, N0.prototype.place = void 0, N0.prototype.ruleId = void 0, N0.prototype.source = void 0;

}
