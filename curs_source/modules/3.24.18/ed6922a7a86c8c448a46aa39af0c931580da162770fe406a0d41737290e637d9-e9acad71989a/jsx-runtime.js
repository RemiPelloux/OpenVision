import { x } from "./tslib.es6.js";
var VTn;
export { VTn };
var __wakaru__jl_initialized = false;
export function _jl() {
if (__wakaru__jl_initialized) return;
__wakaru__jl_initialized = true;
x(), VTn = (e, t)=>{
    if (e === "slot") return 0;
    if (e instanceof Function) return e(t);
    const { children: n, ...i } = t ?? {};
    if (e === "svg") throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
    return [
        e,
        i,
        n
    ];
};

}
