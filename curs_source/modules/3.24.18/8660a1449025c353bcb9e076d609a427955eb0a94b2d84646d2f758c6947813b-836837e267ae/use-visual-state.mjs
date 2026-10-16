import { NAs, aOn } from "./PresenceContext.mjs";
import { r8 } from "./index_18.mjs";
import { bFi, kRs } from "./index_22.mjs";
import { MAs, j_0 } from "./ofv.js";
import { E } from "./tslib.es6.js";
import { DAs } from "./use-constant.mjs";
import { useContext as $1v } from "./react-runtime/react/esm-index-production.js";
var rZl;
export { rZl };
var __wakaru_H1v_initialized = false;
export function H1v() {
if (__wakaru_H1v_initialized) return;
__wakaru_H1v_initialized = true;
"use client";
E(), r8(), kRs(), NAs(), DAs(), rZl = (t)=>(e, n)=>{
        const i = $1v(bFi), r = $1v(aOn), s = ()=>j_0(t, e, i, r);
        return n ? s() : MAs(s);
    };

}
