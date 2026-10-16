import { E } from "./tslib.es6.js";
var __wakaru_Y31_cache;
export function Y31() {
if (__wakaru_Y31_cache) return __wakaru_Y31_cache;
var t = {};
__wakaru_Y31_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.DiagConsoleLogger = void 0;
var e = [
    {
        n: "error",
        c: "error"
    },
    {
        n: "warn",
        c: "warn"
    },
    {
        n: "info",
        c: "info"
    },
    {
        n: "debug",
        c: "debug"
    },
    {
        n: "verbose",
        c: "trace"
    }
], n = class {
    constructor(){
        function i(r) {
            return function(...s) {
                if (console) {
                    let o = console[r];
                    if (typeof o != "function" && (o = console.log), typeof o == "function") return o.apply(console, s);
                }
            };
        }
        for(let r = 0; r < e.length; r++)this[e[r].n] = i(e[r].c);
    }
};
t.DiagConsoleLogger = n;

return t;
}
