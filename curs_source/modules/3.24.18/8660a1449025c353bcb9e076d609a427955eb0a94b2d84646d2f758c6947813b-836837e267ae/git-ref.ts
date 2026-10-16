import { E } from "./tslib.es6.js";
var _Op;
export { _Op };
var __wakaru_H21_initialized = false;
export function H21() {
if (__wakaru_H21_initialized) return;
__wakaru_H21_initialized = true;
"use strict";
E(), _Op = [
    /[\s~^:?*\\]/,
    /\[/,
    /\.\./,
    /@\{/,
    /\/\//,
    /\/$/,
    /\.lock$/,
    /\.$/
];

}
