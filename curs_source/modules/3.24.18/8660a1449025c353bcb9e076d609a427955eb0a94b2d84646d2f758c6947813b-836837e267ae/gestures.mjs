import { rkv, yb0 } from "./focus.mjs";
import { bb0, ikv } from "./hover_2.mjs";
import { Eb0, ukv } from "./index_25.mjs";
import { Sb0, okv } from "./press.mjs";
import { E } from "./tslib.es6.js";
var dkv;
export { dkv };
var __wakaru_Ib0_initialized = false;
export function Ib0() {
if (__wakaru_Ib0_initialized) return;
__wakaru_Ib0_initialized = true;
E(), bb0(), yb0(), Sb0(), Eb0(), dkv = {
    inView: {
        Feature: ukv
    },
    tap: {
        Feature: okv
    },
    focus: {
        Feature: rkv
    },
    hover: {
        Feature: ikv
    }
};

}
