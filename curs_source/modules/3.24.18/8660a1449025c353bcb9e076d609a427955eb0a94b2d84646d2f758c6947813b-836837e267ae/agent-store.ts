import { $1d, B1d, OFo, fY, iz, ju, t0 } from "./agent_pb.js";
import { BSi } from "./blob-store.ts";
import { kl } from "./browser.ts";
import { iv } from "./index_16.js";
import { FSi, LO } from "./serde.ts";
import { w4p } from "./subagent-states.ts";
import { Zet, xAe } from "./todo_tool_pb.js";
import { E } from "./tslib.es6.js";
var C4p, T4p, WN1, GN1, qN1, zN1, VN1, KN1, YN1, XN1, ZN1;
export { C4p, GN1, KN1, T4p, VN1, WN1, XN1, YN1, ZN1, qN1, zN1 };
var __wakaru_QN1_initialized = false;
export function QN1() {
if (__wakaru_QN1_initialized) return;
__wakaru_QN1_initialized = true;
"use strict";
E(), ju(), Zet(), kl(), iv(), BSi(), FSi(), w4p(), C4p = [
    "default",
    "plan",
    "debug",
    "search"
], T4p = [
    "allowlist",
    "unrestricted",
    "auto-review"
], WN1 = new Set(C4p), GN1 = new Set(T4p), qN1 = new LO(xAe), zN1 = new LO(t0), VN1 = new LO(iz), KN1 = new LO(fY), YN1 = new LO($1d), XN1 = new LO(OFo), ZN1 = new LO(B1d);

}
