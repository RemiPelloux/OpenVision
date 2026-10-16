import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Le, wt } from "./yBp.js";
var RYg, vms;
export { RYg, vms };
var __wakaru_Qkl_initialized = false;
export function Qkl() {
if (__wakaru_Qkl_initialized) return;
__wakaru_Qkl_initialized = true;
"use strict";
E(), at(), at(), RYg = wt("<div class=make-shine>"), vms = (t)=>(()=>{
        var e = RYg();
        return e.style.setProperty("display", "flex"), e.style.setProperty("align-items", "center"), e.style.setProperty("justify-content", "center"), e.style.setProperty("gap", "4px"), e.style.setProperty("opacity", "0.5"), e.style.setProperty("height", "100%"), e.style.setProperty("width", "100%"), Le(e, ()=>t.textOverride || "Loading Chat"), e;
    })();

}
