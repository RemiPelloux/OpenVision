import { Qe } from "./Iwo.js";
import { SR } from "./async_3.js";
import { FBi } from "./diff-line-navigation.react.js";
import { E } from "./tslib.es6.js";
var O6n, F6n, Yn_, Cmc;
export { Cmc, F6n, O6n, Yn_ };
var __wakaru_R_C_initialized = false;
export function R_C() {
if (__wakaru_R_C_initialized) return;
__wakaru_R_C_initialized = true;
"use strict";
E(), SR(), Qe(), FBi(), O6n = "diff-search-all", F6n = "diff-search-current", Yn_ = `
:root::highlight(${O6n}) {
  background-color: var(--cursor-bg-search-match);
}
:root::highlight(${F6n}) {
  background-color: var(--cursor-bg-search-match-current);
}
`, Cmc = new WeakMap;

}
