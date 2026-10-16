import { mg0 } from "./color.mjs";
import { DQt } from "./errors.mjs";
import { Nbv } from "./immediate.mjs";
import { xR } from "./index_10.mjs";
import { qAs } from "./index_12.mjs";
import { $De, Uut } from "./index_13.mjs";
import { aFi } from "./is-css-variable.mjs";
import { cFi } from "./number.mjs";
import { Bbv, bg0, gg0, pOn, zAs } from "./ofv.js";
import { tFi } from "./pipe.mjs";
import { E } from "./tslib.es6.js";
import { KAs, fg0 } from "./visibility.mjs";
var Ubv;
export { Ubv };
var __wakaru_yg0_initialized = false;
export function yg0() {
if (__wakaru_yg0_initialized) return;
__wakaru_yg0_initialized = true;
E(), xR(), aFi(), qAs(), Uut(), mg0(), Nbv(), cFi(), fg0(), Ubv = (t, e)=>{
    const n = $De.createTransformer(e), i = pOn(t), r = pOn(e);
    return i.indexes.var.length === r.indexes.var.length && i.indexes.color.length === r.indexes.color.length && i.indexes.number.length >= r.indexes.number.length ? KAs.has(t) && !r.values.length || KAs.has(e) && !i.values.length ? gg0(t, e) : tFi(Bbv(bg0(i, r), r.values), n) : (DQt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), zAs(t, e));
};

}
