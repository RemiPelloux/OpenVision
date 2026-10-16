import { jn } from "./SZu.js";
import { bo } from "./arrays.js";
import { hVo } from "./asyncDataTree.js";
import { Hn } from "./dom_2.js";
import { od } from "./editor_2.js";
import { ivs } from "./explorerModel.js";
import { lU } from "./files_2.js";
import { It } from "./instantiation.js";
import { d2 } from "./listService.js";
import { nRe } from "./listWidget.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var CR;
export { CR };
var __wakaru_zMe_initialized = false;
export function zMe() {
if (__wakaru_zMe_initialized) return;
__wakaru_zMe_initialized = true;
"use strict";
E(), fn(), d2(), lU(), od(), nRe(), ivs(), bo(), hVo(), It(), Hn(), CR = jn("explorerService");

}
