import { $0i, Drl, G0i, Ggt, H0i, V0i, W0i } from "./floating-ui.dom.js";
import { x } from "./tslib.es6.js";
import { useLayoutEffect as FMg } from "./react-runtime/react/esm-index-production.js";
var Nrl, Orl, ySn, z0i, K0i, Frl, Y0i, X0i, Brl;
export { Brl, Frl, K0i, Nrl, Orl, X0i, Y0i, ySn, z0i };
var __wakaru_jBt_initialized = false;
export function jBt() {
if (__wakaru_jBt_initialized) return;
__wakaru_jBt_initialized = true;
x(), Ggt(), Nrl = typeof document < "u", Orl = function() {}, ySn = Nrl ? FMg : Orl, z0i = (e, t)=>{
    const n = $0i(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            e,
            t
        ]
    };
}, K0i = (e, t)=>{
    const n = H0i(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            e,
            t
        ]
    };
}, Frl = (e, t)=>({
        fn: Drl(e).fn,
        options: [
            e,
            t
        ]
    }), Y0i = (e, t)=>{
    const n = W0i(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            e,
            t
        ]
    };
}, X0i = (e, t)=>{
    const n = G0i(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            e,
            t
        ]
    };
}, Brl = (e, t)=>{
    const n = V0i(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            e,
            t
        ]
    };
};

}
