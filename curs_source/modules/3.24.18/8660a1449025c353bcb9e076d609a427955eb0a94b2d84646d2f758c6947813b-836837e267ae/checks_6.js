import { hvi } from "./core_4.js";
import { Yhp, g6, qhp } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { cwn } from "./util_3.js";
var D7r, lpp, cpp, upp;
export { D7r, cpp, lpp, upp };
var __wakaru_Vt1_initialized = false;
export function Vt1() {
if (__wakaru_Vt1_initialized) return;
__wakaru_Vt1_initialized = true;
E(), hvi(), cwn(), D7r = g6("$ZodCheck", (t, e)=>{
    var n;
    t._zod ?? (t._zod = {}), t._zod.def = e, (n = t._zod).onattach ?? (n.onattach = []);
}), lpp = g6("$ZodCheckMaxLength", (t, e)=>{
    var n;
    D7r.init(t, e), (n = t._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !qhp(r) && r.length !== void 0;
    }), t._zod.onattach.push((i)=>{
        const r = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        e.maximum < r && (i._zod.bag.maximum = e.maximum);
    }), t._zod.check = (i)=>{
        const r = i.value;
        if (r.length <= e.maximum) return;
        const o = Yhp(r);
        i.issues.push({
            origin: o,
            code: "too_big",
            maximum: e.maximum,
            inclusive: !0,
            input: r,
            inst: t,
            continue: !e.abort
        });
    };
}), cpp = g6("$ZodCheckMinLength", (t, e)=>{
    var n;
    D7r.init(t, e), (n = t._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !qhp(r) && r.length !== void 0;
    }), t._zod.onattach.push((i)=>{
        const r = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        e.minimum > r && (i._zod.bag.minimum = e.minimum);
    }), t._zod.check = (i)=>{
        const r = i.value;
        if (r.length >= e.minimum) return;
        const o = Yhp(r);
        i.issues.push({
            origin: o,
            code: "too_small",
            minimum: e.minimum,
            inclusive: !0,
            input: r,
            inst: t,
            continue: !e.abort
        });
    };
}), upp = g6("$ZodCheckOverwrite", (t, e)=>{
    D7r.init(t, e), t._zod.check = (n)=>{
        n.value = e.tx(n.value);
    };
});

}
