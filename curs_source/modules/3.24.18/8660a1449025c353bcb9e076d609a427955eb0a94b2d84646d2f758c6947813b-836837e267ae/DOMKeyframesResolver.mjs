import { df0 } from "./css-variables-conversion.mjs";
import { TXl, oSv } from "./dimensions.mjs";
import { aFi, jAs } from "./is-css-variable.mjs";
import { Df0 } from "./is-none.mjs";
import { Xyv, gXl } from "./keys-position.mjs";
import { Bf0 } from "./make-none-animatable.mjs";
import { Ff0, Fyv, Mf0, _bv, iXl, sRs } from "./ofv.js";
import { E } from "./tslib.es6.js";
import { dyv, jut, nXl } from "./unit-conversion.mjs";
var _Sv;
export { _Sv };
var __wakaru_Uf0_initialized = false;
export function Uf0() {
if (__wakaru_Uf0_initialized) return;
__wakaru_Uf0_initialized = true;
E(), Xyv(), oSv(), df0(), aFi(), iXl(), Df0(), Bf0(), dyv(), _Sv = class extends sRs {
    constructor(t, e, n, i, r){
        super(t, e, n, i, r, !0);
    }
    readKeyframes() {
        const { unresolvedKeyframes: t, element: e, name: n } = this;
        if (!e || !e.current) return;
        super.readKeyframes();
        for(let c = 0; c < t.length; c++){
            let u = t[c];
            if (typeof u == "string" && (u = u.trim(), jAs(u))) {
                const d = Fyv(u, e.current);
                d !== void 0 && (t[c] = d), c === t.length - 1 && (this.finalKeyframe = u);
            }
        }
        if (this.resolveNoneKeyframes(), !gXl.has(n) || t.length !== 2) return;
        const [i, r] = t, s = TXl(i), o = TXl(r), a = _bv(i), l = _bv(r);
        if (a !== l && jut[n]) {
            this.needsMeasurement = !0;
            return;
        }
        if (s !== o) if (nXl(s) && nXl(o)) for(let c = 0; c < t.length; c++){
            const u = t[c];
            typeof u == "string" && (t[c] = parseFloat(u));
        }
        else jut[n] && (this.needsMeasurement = !0);
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes: t, name: e } = this, n = [];
        for(let i = 0; i < t.length; i++)(t[i] === null || Mf0(t[i])) && n.push(i);
        n.length && Ff0(t, n, e);
    }
    measureInitialState() {
        const { element: t, unresolvedKeyframes: e, name: n } = this;
        if (!t || !t.current) return;
        n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = jut[n](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
        const i = e[e.length - 1];
        i !== void 0 && t.getValue(n, i).jump(i, !1);
    }
    measureEndState() {
        const { element: t, name: e, unresolvedKeyframes: n } = this;
        if (!t || !t.current) return;
        const i = t.getValue(e);
        i && i.jump(this.measuredOrigin, !1);
        const r = n.length - 1, s = n[r];
        n[r] = jut[e](t.measureViewportBox(), window.getComputedStyle(t.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), this.removedTransforms?.length && this.removedTransforms.forEach(([o, a])=>{
            t.getValue(o).set(a);
        }), this.resolveNoneKeyframes();
    }
};

}
