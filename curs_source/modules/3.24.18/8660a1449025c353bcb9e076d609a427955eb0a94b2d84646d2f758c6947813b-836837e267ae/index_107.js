import { Dui } from "./LYd.js";
import { Fbh } from "./index_106.js";
import { E } from "./tslib.es6.js";
var xne;
export { xne };
var __wakaru_Bbh_initialized = false;
export function Bbh() {
if (__wakaru_Bbh_initialized) return;
__wakaru_Bbh_initialized = true;
E(), Fbh(), xne = class extends Error {
    constructor(t, e, n){
        super(), typeof e == "string" && (n = e, e = void 0);
        let i = "", r = {}, s = !1;
        if (e && ("line" in e && "column" in e ? r = {
            place: e
        } : "start" in e && "end" in e ? r = {
            place: e
        } : "type" in e ? r = {
            ancestors: [
                e
            ],
            place: e.position
        } : r = {
            ...e
        }), typeof t == "string" ? i = t : !r.cause && t && (s = !0, i = t.message, r.cause = t), !r.ruleId && !r.source && typeof n == "string") {
            const a = n.indexOf(":");
            a === -1 ? r.ruleId = n : (r.source = n.slice(0, a), r.ruleId = n.slice(a + 1));
        }
        if (!r.place && r.ancestors && r.ancestors) {
            const a = r.ancestors[r.ancestors.length - 1];
            a && (r.place = a.position);
        }
        const o = r.place && "start" in r.place ? r.place.start : r.place;
        this.ancestors = r.ancestors || void 0, this.cause = r.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = o ? o.line : void 0, this.name = Dui(r.place) || "1:1", this.place = r.place || void 0, this.reason = this.message, this.ruleId = r.ruleId || void 0, this.source = r.source || void 0, this.stack = s && r.cause && typeof r.cause.stack == "string" ? r.cause.stack : "", this.actual, this.expected, this.note, this.url;
    }
}, xne.prototype.file = "", xne.prototype.name = "", xne.prototype.reason = "", xne.prototype.message = "", xne.prototype.stack = "", xne.prototype.column = void 0, xne.prototype.line = void 0, xne.prototype.ancestors = void 0, xne.prototype.cause = void 0, xne.prototype.fatal = void 0, xne.prototype.place = void 0, xne.prototype.ruleId = void 0, xne.prototype.source = void 0;

}
