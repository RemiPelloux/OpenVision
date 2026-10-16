import { O$e, dme } from "./cursor-icons.ts";
var JYn, QYn, eJn;
export { JYn, QYn, eJn };
var __wakaru_tki_initialized = false;
export function tki() {
if (__wakaru_tki_initialized) return;
__wakaru_tki_initialized = true;
"use strict";
O$e(), JYn = /(^|-)(left|right)(-|$)/, QYn = new Set([
    "history",
    "link-external",
    "list-bullets",
    "list-ordered",
    "quote",
    "redo",
    "return"
]), eJn = new Set(dme.filter((r)=>JYn.test(r) || QYn.has(r)));

}
