import { $0i } from "./core_5.js";
import { E6, OUm, jUm } from "./gYa.js";
import { E } from "./tslib.es6.js";
import { uIn } from "./util_4.js";
var les, WUm, GUm, qUm;
export { GUm, WUm, les, qUm };
var __wakaru_RV1_initialized = false;
export function RV1() {
if (__wakaru_RV1_initialized) return;
__wakaru_RV1_initialized = true;
E(), $0i(), uIn(), les = E6("$ZodCheck", (t, e)=>{
    var n;
    t._zod ?? (t._zod = {}), t._zod.def = e, (n = t._zod).onattach ?? (n.onattach = []);
}), WUm = E6("$ZodCheckMaxLength", (t, e)=>{
    var n;
    les.init(t, e), (n = t._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !OUm(r) && r.length !== void 0;
    }), t._zod.onattach.push((i)=>{
        const r = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        e.maximum < r && (i._zod.bag.maximum = e.maximum);
    }), t._zod.check = (i)=>{
        const r = i.value;
        if (r.length <= e.maximum) return;
        const o = jUm(r);
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
}), GUm = E6("$ZodCheckMinLength", (t, e)=>{
    var n;
    les.init(t, e), (n = t._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !OUm(r) && r.length !== void 0;
    }), t._zod.onattach.push((i)=>{
        const r = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        e.minimum > r && (i._zod.bag.minimum = e.minimum);
    }), t._zod.check = (i)=>{
        const r = i.value;
        if (r.length >= e.minimum) return;
        const o = jUm(r);
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
}), qUm = E6("$ZodCheckOverwrite", (t, e)=>{
    les.init(t, e), t._zod.check = (n)=>{
        n.value = e.tx(n.value);
    };
});

}
