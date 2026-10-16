import { Pa } from "./SZu.js";
import { Qq } from "./index_15.js";
import { AAo, EAo, IAo, xAo } from "./schemas.js";
import { dO, s_r } from "./schemas_2.js";
import { E } from "./tslib.es6.js";
var vvr, _vr, bvr, yvr;
export { _vr, bvr, vvr, yvr };
var __wakaru_Svr_initialized = false;
export function Svr() {
if (__wakaru_Svr_initialized) return;
__wakaru_Svr_initialized = true;
E(), Qq(), s_r(), vvr = Pa("ZodISODateTime", (t, e)=>{
    EAo.init(t, e), dO.init(t, e);
}), _vr = Pa("ZodISODate", (t, e)=>{
    IAo.init(t, e), dO.init(t, e);
}), bvr = Pa("ZodISOTime", (t, e)=>{
    xAo.init(t, e), dO.init(t, e);
}), yvr = Pa("ZodISODuration", (t, e)=>{
    AAo.init(t, e), dO.init(t, e);
});

}
