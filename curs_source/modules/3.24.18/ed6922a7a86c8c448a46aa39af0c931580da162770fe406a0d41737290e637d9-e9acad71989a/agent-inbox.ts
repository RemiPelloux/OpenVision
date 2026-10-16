import { Ibn, Vss, iki, jle } from "./agent-store-ids.ts";
import { x } from "./tslib.es6.js";
var jss, Rbn, Mmt, oCg, Cjc, Tjc, oki, aki, D3t, Ejc, M3t, qss, xjc, Ijc, cki, aCg, Ajc, Rjc;
export { Ajc, Cjc, D3t, Ejc, Ijc, M3t, Mmt, Rbn, Rjc, Tjc, aCg, aki, cki, jss, oCg, oki, qss, xjc };
var __wakaru_cCg_initialized = false;
export function cCg() {
if (__wakaru_cCg_initialized) return;
__wakaru_cCg_initialized = true;
"use strict";
x(), Vss(), jss = "inbox", Rbn = "subscription-results", Mmt = `${jss}/${Rbn}/`, oCg = `${jle}/${iki}`, Cjc = 20, Tjc = /^subscription:[A-Za-z0-9_-]+:[A-Za-z0-9_-]+:[a-f0-9]{64}$/, oki = "interactive-child", aki = "child-turn", D3t = Ibn.source.slice(1, -1), Ejc = new RegExp(`^${oki}:${D3t}:${D3t}$`, "i"), M3t = `(?:bc-)?${D3t}`, qss = new RegExp(`^${M3t}$`, "i"), xjc = new RegExp(`^${aki}:${M3t}:${M3t}$`, "i"), Ijc = /^[A-Za-z0-9_-]+$/, cki = "\\d{4}-\\d{2}-\\d{2}T\\d{2}-\\d{2}-\\d{2}-\\d{3}Z", aCg = new RegExp(`^${cki}_subscription:[A-Za-z0-9_-]+:[A-Za-z0-9_-]+:[a-f0-9]{64}_[A-Za-z0-9_-]+\\.jsonl$`), Ajc = new RegExp(`^${cki}_${oki}_${D3t}_${D3t}_[A-Za-z0-9_-]+\\.jsonl$`, "i"), Rjc = new RegExp(`^${cki}_${aki}_${M3t}_${M3t}_[A-Za-z0-9_-]+\\.jsonl$`, "i");

}
