import { Kr } from "./cache-env.ts";
import { t1 } from "./env-filter.ts";
import { ze } from "./index_2.ts";
import { m1 } from "./seatbelt.ts";
import { h } from "./tslib.es6.js";
import { f9 } from "./us.js";
var Yc, Ni;
export { Ni, Yc };
var __wakaru_Xr_initialized = false;
export function Xr() {
if (__wakaru_Xr_initialized) return;
__wakaru_Xr_initialized = true;
"use strict";
h(), ze(), t1(), Kr(), f9(), m1(), Yc = class extends Error {
    constructor(e, t){
        super(e), this.reason = t, this.name = "SandboxUnsupportedError";
    }
}, Ni = process.platform === "darwin";

}
