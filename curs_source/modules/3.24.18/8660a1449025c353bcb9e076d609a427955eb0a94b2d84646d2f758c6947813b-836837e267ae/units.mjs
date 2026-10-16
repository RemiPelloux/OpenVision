import { E } from "./tslib.es6.js";
var dOn, But, FQt, tb, Cbv, Tbv, FYl;
export { But, Cbv, FQt, FYl, Tbv, dOn, tb };
var __wakaru_hOn_initialized = false;
export function hOn() {
if (__wakaru_hOn_initialized) return;
__wakaru_hOn_initialized = true;
E(), dOn = (t)=>({
        test: (e)=>typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: (e)=>`${e}${t}`
    }), But = dOn("deg"), FQt = dOn("%"), tb = dOn("px"), Cbv = dOn("vh"), Tbv = dOn("vw"), FYl = {
    ...FQt,
    parse: (t)=>FQt.parse(t) / 100,
    transform: (t)=>FQt.transform(t * 100)
};

}
