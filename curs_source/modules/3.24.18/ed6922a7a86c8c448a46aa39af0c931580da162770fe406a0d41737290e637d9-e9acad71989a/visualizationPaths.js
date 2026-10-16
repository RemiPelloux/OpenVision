import { Ps, l1 } from "./HVr.js";
import { Wss, iki, jle, rki, ski } from "./agent-store-ids.ts";
import { Ml } from "./index.ts";
import { x } from "./tslib.es6.js";
var sXs, C3u, T3u, E3u;
export { C3u, E3u, T3u, sXs };
var __wakaru_oXs_initialized = false;
export function oXs() {
if (__wakaru_oXs_initialized) return;
__wakaru_oXs_initialized = true;
"use strict";
x(), Ml(), Ps(), sXs = "[a-z0-9](?:[a-z0-9-]{0,62}[a-z0-9])?\\.html", C3u = l1(`${jle}/${iki}`), T3u = `\\/(?:${l1(rki)}|${l1(ski)})\\/[^/]+\\/${l1(Wss)}`, E3u = new RegExp(`(?:^(?:file:)?${C3u}|${T3u})\\/visualizations\\/${sXs}$`, "i");

}
