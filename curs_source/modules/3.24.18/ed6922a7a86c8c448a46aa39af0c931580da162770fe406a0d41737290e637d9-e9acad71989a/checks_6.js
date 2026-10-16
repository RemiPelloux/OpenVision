import { X2n } from "./core_5.js";
import { x } from "./tslib.es6.js";
import { dGt } from "./util_4.js";
import { Keh, Veh, xN } from "./xmo.js";
var szi, Zeh, Qeh, Jeh;
export { Jeh, Qeh, Zeh, szi };
var __wakaru_ELv_initialized = false;
export function ELv() {
if (__wakaru_ELv_initialized) return;
__wakaru_ELv_initialized = true;
x(), X2n(), dGt(), szi = xN("$ZodCheck", (e, t)=>{
    var n;
    e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Zeh = xN("$ZodCheckMaxLength", (e, t)=>{
    var n;
    szi.init(e, t), (n = e._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !Veh(r) && r.length !== void 0;
    }), e._zod.onattach.push((i)=>{
        const r = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t.maximum < r && (i._zod.bag.maximum = t.maximum);
    }), e._zod.check = (i)=>{
        const r = i.value;
        if (r.length <= t.maximum) return;
        const o = Keh(r);
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
}), Qeh = xN("$ZodCheckMinLength", (e, t)=>{
    var n;
    szi.init(e, t), (n = e._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !Veh(r) && r.length !== void 0;
    }), e._zod.onattach.push((i)=>{
        const r = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t.minimum > r && (i._zod.bag.minimum = t.minimum);
    }), e._zod.check = (i)=>{
        const r = i.value;
        if (r.length >= t.minimum) return;
        const o = Keh(r);
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
}), Jeh = xN("$ZodCheckOverwrite", (e, t)=>{
    szi.init(e, t), e._zod.check = (n)=>{
        n.value = t.tx(n.value);
    };
});

}
