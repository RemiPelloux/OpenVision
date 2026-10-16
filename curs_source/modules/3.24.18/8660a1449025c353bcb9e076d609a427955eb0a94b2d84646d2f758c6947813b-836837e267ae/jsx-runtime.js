import { E } from "./tslib.es6.js";
var Ogi;
export { Ogi };
var __wakaru_HQh_initialized = false;
export function HQh() {
if (__wakaru_HQh_initialized) return;
__wakaru_HQh_initialized = true;
E(), Ogi = (t, e)=>{
    if (t === "slot") return 0;
    if (t instanceof Function) return t(e);
    const { children: n, ...i } = e ?? {};
    if (t === "svg") throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
    return [
        t,
        i,
        n
    ];
};

}
