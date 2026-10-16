import { I1, QVs, cDu, dDu, mX, pX, zd } from "./agent_pb.js";
import { MMn } from "./blob-store.ts";
import { Yu } from "./browser.ts";
import { HM } from "./index_191.js";
import { DMn, F5 } from "./serde.ts";
import { e2u } from "./subagent-states.ts";
import { Kve, b4e } from "./todo_tool_pb.js";
import { x } from "./tslib.es6.js";
var t2u, n2u, wfv, Cfv, Tfv, Efv, xfv, Ifv, Afv, Rfv, Dfv;
export { Afv, Cfv, Dfv, Efv, Ifv, Rfv, Tfv, n2u, t2u, wfv, xfv };
var __wakaru_Mfv_initialized = false;
export function Mfv() {
if (__wakaru_Mfv_initialized) return;
__wakaru_Mfv_initialized = true;
"use strict";
x(), zd(), b4e(), Yu(), HM(), MMn(), DMn(), e2u(), t2u = [
    "default",
    "plan",
    "debug",
    "search"
], n2u = [
    "allowlist",
    "unrestricted",
    "auto-review"
], wfv = new Set(t2u), Cfv = new Set(n2u), Tfv = new F5(Kve), Efv = new F5(I1), xfv = new F5(pX), Ifv = new F5(mX), Afv = new F5(dDu), Rfv = new F5(QVs), Dfv = new F5(cDu);

}
