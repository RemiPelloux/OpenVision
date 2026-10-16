import { Oqv } from "./badge.css";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Le, wt, xbe } from "./yBp.js";
import { Zy } from "./ze.js";
var nKv, bLs;
export { bLs, nKv };
var __wakaru_$uc_initialized = false;
export function $uc() {
if (__wakaru_$uc_initialized) return;
__wakaru_$uc_initialized = true;
"use strict";
E(), at(), at(), at(), at(), Oqv(), nKv = wt("<span>"), bLs = (t)=>(()=>{
        var e = nKv();
        return xbe(e, Zy(t, {
            get class () {
                return `cursor-badge cursor-badge-${t.type ?? "default"} cursor-badge-${t.size ?? "medium"} ${t.class}`;
            },
            get style () {
                return t.style;
            }
        }), !1, !0), Le(e, ()=>t.text, null), Le(e, ()=>t.children, null), e;
    })();

}
