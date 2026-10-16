import { GEn } from "./core_3.js";
import { Ftu, Ptu, fN } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { dUt } from "./util_2.js";
var fOi, Xtu, Ztu, Qtu;
export { Qtu, Xtu, Ztu, fOi };
var __wakaru_jHf_initialized = false;
export function jHf() {
if (__wakaru_jHf_initialized) return;
__wakaru_jHf_initialized = true;
x(), GEn(), dUt(), fOi = fN("$ZodCheck", (e, t)=>{
    var n;
    e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Xtu = fN("$ZodCheckMaxLength", (e, t)=>{
    var n;
    fOi.init(e, t), (n = e._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !Ptu(r) && r.length !== void 0;
    }), e._zod.onattach.push((i)=>{
        const r = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t.maximum < r && (i._zod.bag.maximum = t.maximum);
    }), e._zod.check = (i)=>{
        const r = i.value;
        if (r.length <= t.maximum) return;
        const o = Ftu(r);
        i.issues.push({
            origin: o,
            code: "too_big",
            maximum: t.maximum,
            inclusive: !0,
            input: r,
            inst: e,
            continue: !t.abort
        });
    };
}), Ztu = fN("$ZodCheckMinLength", (e, t)=>{
    var n;
    fOi.init(e, t), (n = e._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !Ptu(r) && r.length !== void 0;
    }), e._zod.onattach.push((i)=>{
        const r = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t.minimum > r && (i._zod.bag.minimum = t.minimum);
    }), e._zod.check = (i)=>{
        const r = i.value;
        if (r.length >= t.minimum) return;
        const o = Ftu(r);
        i.issues.push({
            origin: o,
            code: "too_small",
            minimum: t.minimum,
            inclusive: !0,
            input: r,
            inst: e,
            continue: !t.abort
        });
    };
}), Qtu = fN("$ZodCheckOverwrite", (e, t)=>{
    fOi.init(e, t), e._zod.check = (n)=>{
        n.value = t.tx(n.value);
    };
});

}
