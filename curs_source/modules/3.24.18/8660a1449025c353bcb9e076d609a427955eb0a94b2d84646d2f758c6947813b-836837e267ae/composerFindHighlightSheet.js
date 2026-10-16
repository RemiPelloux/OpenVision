import { E } from "./tslib.es6.js";
var f7f, v7f, lBl, _7f, cBl;
export { _7f, cBl, f7f, lBl, v7f };
var __wakaru_xPw_initialized = false;
export function xPw() {
if (__wakaru_xPw_initialized) return;
__wakaru_xPw_initialized = true;
"use strict";
E(), f7f = "composer-find-all", v7f = "composer-find-current", lBl = {
    all: f7f,
    current: v7f
}, _7f = (t)=>`
:root::highlight(${t.all}) {
	background-color: var(--cursor-bg-search-match);
}
:root::highlight(${t.current}) {
	background-color: var(--cursor-bg-search-match-current);
}
`, cBl = new WeakMap;

}
