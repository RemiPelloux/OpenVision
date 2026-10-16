import { a2f, c2f, i2f, n2f, o2f, r2f, s2f } from "./floating-ui.dom.mjs";
import { E } from "./tslib.es6.js";
import { useLayoutEffect as bpw } from "./react-runtime/react/esm-index-production.js";
var h2f, p2f, _3i, m2f, g2f, f2f, v2f, _2f, b2f;
export { _2f, _3i, b2f, f2f, g2f, h2f, m2f, p2f, v2f };
var __wakaru_lOl_initialized = false;
export function lOl() {
if (__wakaru_lOl_initialized) return;
__wakaru_lOl_initialized = true;
E(), c2f(), c2f(), h2f = typeof document < "u", p2f = function() {}, _3i = h2f ? bpw : p2f, m2f = (t, e)=>{
    const n = n2f(t);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            t,
            e
        ]
    };
}, g2f = (t, e)=>{
    const n = i2f(t);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            t,
            e
        ]
    };
}, f2f = (t, e)=>({
        fn: a2f(t).fn,
        options: [
            t,
            e
        ]
    }), v2f = (t, e)=>{
    const n = r2f(t);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            t,
            e
        ]
    };
}, _2f = (t, e)=>{
    const n = s2f(t);
    return {
        name: n.name,
        fn: n.fn,
        options: [
            t,
            e
        ]
    };
}, b2f = (t, e)=>{
    const n = o2f(t);
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
