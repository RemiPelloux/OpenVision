import { gvl } from "./index_101.js";
import { bwn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var _j;
export { _j };
var __wakaru_fvl_initialized = false;
export function fvl() {
if (__wakaru_fvl_initialized) return;
__wakaru_fvl_initialized = true;
x(), gvl(), _j = class extends Error {
    constructor(e, t, n){
        super(), typeof t == "string" && (n = t, t = void 0);
        let i = "", r = {}, s = !1;
        if (t && ("line" in t && "column" in t ? r = {
            place: t
        } : "start" in t && "end" in t ? r = {
            place: t
        } : "type" in t ? r = {
            ancestors: [
                t
            ],
            place: t.position
        } : r = {
            ...t
        }), typeof e == "string" ? i = e : !r.cause && e && (s = !0, i = e.message, r.cause = e), !r.ruleId && !r.source && typeof n == "string") {
            const a = n.indexOf(":");
            a === -1 ? r.ruleId = n : (r.source = n.slice(0, a), r.ruleId = n.slice(a + 1));
        }
        if (!r.place && r.ancestors && r.ancestors) {
            const a = r.ancestors[r.ancestors.length - 1];
            a && (r.place = a.position);
        }
        const o = r.place && "start" in r.place ? r.place.start : r.place;
        this.ancestors = r.ancestors || void 0, this.cause = r.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = o ? o.line : void 0, this.name = bwn(r.place) || "1:1", this.place = r.place || void 0, this.reason = this.message, this.ruleId = r.ruleId || void 0, this.source = r.source || void 0, this.stack = s && r.cause && typeof r.cause.stack == "string" ? r.cause.stack : "", this.actual, this.expected, this.note, this.url;
    }
}, _j.prototype.file = "", _j.prototype.name = "", _j.prototype.reason = "", _j.prototype.message = "", _j.prototype.stack = "", _j.prototype.column = void 0, _j.prototype.line = void 0, _j.prototype.ancestors = void 0, _j.prototype.cause = void 0, _j.prototype.fatal = void 0, _j.prototype.place = void 0, _j.prototype.ruleId = void 0, _j.prototype.source = void 0;

}
