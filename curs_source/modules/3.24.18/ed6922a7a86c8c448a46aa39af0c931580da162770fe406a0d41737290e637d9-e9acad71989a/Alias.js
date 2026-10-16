import { Awi, dcs } from "./Node_2.js";
import { ucs } from "./anchors.js";
import { Ewi, NE, Qmt, acs } from "./identity.js";
import { Rwi, Tfe, WXc, iBt } from "./qIc.js";
import { ngt } from "./toJS.js";
import { x } from "./tslib.es6.js";
import { Iwi } from "./visit.js";
var Dwi;
export { Dwi };
var __wakaru_Mwi_initialized = false;
export function Mwi() {
if (__wakaru_Mwi_initialized) return;
__wakaru_Mwi_initialized = true;
x(), ucs(), Iwi(), NE(), dcs(), ngt(), Dwi = class extends Awi {
    constructor(e){
        super(Ewi), this.source = e, Object.defineProperty(this, "tag", {
            set () {
                throw new Error("Alias nodes cannot have tags");
            }
        });
    }
    resolve(e, t) {
        if (t?.maxAliasCount === 0) throw new ReferenceError("Alias resolution is disabled");
        let n;
        t?.aliasResolveCache ? n = t.aliasResolveCache : (n = [], iBt(e, {
            Node: (r, s)=>{
                (Qmt(s) || acs(s)) && n.push(s);
            }
        }), t && (t.aliasResolveCache = n));
        let i;
        for (const r of n){
            if (r === this) break;
            r.anchor === this.source && (i = r);
        }
        return i;
    }
    toJSON(e, t) {
        if (!t) return {
            source: this.source
        };
        const { anchors: n, doc: i, maxAliasCount: r } = t, s = this.resolve(i, t);
        if (!s) {
            const a = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
            throw new ReferenceError(a);
        }
        let o = n.get(s);
        if (o || (Tfe(s, null, t), o = n.get(s)), o?.res === void 0) {
            const a = "This should not happen: Alias anchor was not resolved?";
            throw new ReferenceError(a);
        }
        if (r >= 0 && (o.count += 1, o.aliasCount === 0 && (o.aliasCount = Rwi(i, s, n)), o.count * o.aliasCount > r)) {
            const a = "Excessive alias count indicates a resource exhaustion attack";
            throw new ReferenceError(a);
        }
        return o.res;
    }
    toString(e, t, n) {
        const i = `*${this.source}`;
        if (e) {
            if (WXc(this.source), e.options.verifyAliasOrder && !e.anchors.has(this.source)) {
                const r = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
                throw new Error(r);
            }
            if (e.implicitKey) return `${i} `;
        }
        return i;
    }
};

}
