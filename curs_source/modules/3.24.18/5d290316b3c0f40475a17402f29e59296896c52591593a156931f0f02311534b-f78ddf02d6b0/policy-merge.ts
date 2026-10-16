import { ze } from "./index_2.ts";
import { $c } from "./network-policy-utils.ts";
import { h } from "./tslib.es6.js";
import { Dc, W1 } from "./us.js";
function C9({ defaultValue: e, rank: t }) {
    return {
        defaultValue: e,
        merge: (...r)=>{
            const n = r.filter((s)=>s !== void 0);
            return n.length === 0 ? e : n.reduce((s, i)=>t[i] < t[s] ? i : s);
        }
    };
}
function L9() {
    return {
        defaultValue: [],
        merge: (...e)=>W1(...e)
    };
}
var V1, Y1;
export { C9, L9, V1, Y1 };
var __wakaru_en_initialized = false;
export function en() {
if (__wakaru_en_initialized) return;
__wakaru_en_initialized = true;
"use strict";
h(), ze(), Dc(), $c(), V1 = C9({
    defaultValue: "system",
    rank: {
        workspace: 0,
        system: 1
    }
}), Y1 = L9();

}
