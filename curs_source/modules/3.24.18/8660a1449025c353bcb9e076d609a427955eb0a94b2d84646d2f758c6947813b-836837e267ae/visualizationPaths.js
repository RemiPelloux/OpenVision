import { Fa, dA } from "./Iwo.js";
import { Bgr, KZn, Oke, XZn, YZn } from "./agent-store-ids.ts";
import { nl } from "./index.ts";
import { E } from "./tslib.es6.js";
var uFa, gBp, fBp, vBp;
export { fBp, gBp, uFa, vBp };
var __wakaru_dFa_initialized = false;
export function dFa() {
if (__wakaru_dFa_initialized) return;
__wakaru_dFa_initialized = true;
"use strict";
E(), nl(), Fa(), uFa = "[a-z0-9](?:[a-z0-9-]{0,62}[a-z0-9])?\\.html", gBp = dA(`${Oke}/${Bgr}`), fBp = `\\/(?:${dA(KZn)}|${dA(YZn)})\\/[^/]+\\/${dA(XZn)}`, vBp = new RegExp(`(?:^(?:file:)?${gBp}|${fBp})\\/visualizations\\/${uFa}$`, "i");

}
