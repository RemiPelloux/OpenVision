import { Bgr, Oke, VZn, sIo } from "./agent-store-ids.ts";
import { E } from "./tslib.es6.js";
var Ugr, JZn, B6t, c1y, ttd, ntd, jgr, $gr, lhn, itd, chn, oIo, rtd, std, Hgr, u1y, otd, atd;
export { $gr, B6t, Hgr, JZn, Ugr, atd, c1y, chn, itd, jgr, lhn, ntd, oIo, otd, rtd, std, ttd, u1y };
var __wakaru_d1y_initialized = false;
export function d1y() {
if (__wakaru_d1y_initialized) return;
__wakaru_d1y_initialized = true;
"use strict";
E(), sIo(), Ugr = "inbox", JZn = "subscription-results", B6t = `${Ugr}/${JZn}/`, c1y = `${Oke}/${Bgr}`, ttd = 20, ntd = /^subscription:[A-Za-z0-9_-]+:[A-Za-z0-9_-]+:[a-f0-9]{64}$/, jgr = "interactive-child", $gr = "child-turn", lhn = VZn.source.slice(1, -1), itd = new RegExp(`^${jgr}:${lhn}:${lhn}$`, "i"), chn = `(?:bc-)?${lhn}`, oIo = new RegExp(`^${chn}$`, "i"), rtd = new RegExp(`^${$gr}:${chn}:${chn}$`, "i"), std = /^[A-Za-z0-9_-]+$/, Hgr = "\\d{4}-\\d{2}-\\d{2}T\\d{2}-\\d{2}-\\d{2}-\\d{3}Z", u1y = new RegExp(`^${Hgr}_subscription:[A-Za-z0-9_-]+:[A-Za-z0-9_-]+:[a-f0-9]{64}_[A-Za-z0-9_-]+\\.jsonl$`), otd = new RegExp(`^${Hgr}_${jgr}_${lhn}_${lhn}_[A-Za-z0-9_-]+\\.jsonl$`, "i"), atd = new RegExp(`^${Hgr}_${$gr}_${chn}_${chn}_[A-Za-z0-9_-]+\\.jsonl$`, "i");

}
