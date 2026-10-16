import { $Rr, BSt, GRr, HRr, WRr, fah, jRr } from "./floating-ui.dom.js";
import { E } from "./tslib.es6.js";
import { useLayoutEffect as $Uy } from "./react-runtime/react/esm-index-production.js";
var yah, Sah, Lli, Oli, Fli, kah, Bli, VRr, wah;
export { Bli, Fli, Lli, Oli, Sah, VRr, kah, wah, yah };
var __wakaru_t7t_initialized = false;
export function t7t() {
if (__wakaru_t7t_initialized) return;
__wakaru_t7t_initialized = true;
E(), BSt(), yah = typeof document < "u", Sah = function() {}, Lli = yah ? $Uy : Sah, Oli = (t, e)=>{
    const n = jRr(t);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            t,
            e
        ]
    };
}, Fli = (t, e)=>{
    const n = $Rr(t);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            t,
            e
        ]
    };
}, kah = (t, e)=>({
        fn: fah(t).fn,
        options: [
            t,
            e
        ]
    }), Bli = (t, e)=>{
    const n = HRr(t);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            t,
            e
        ]
    };
}, VRr = (t, e)=>{
    const n = WRr(t);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            t,
            e
        ]
    };
}, wah = (t, e)=>{
    const n = GRr(t);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            t,
            e
        ]
    };
};

}
