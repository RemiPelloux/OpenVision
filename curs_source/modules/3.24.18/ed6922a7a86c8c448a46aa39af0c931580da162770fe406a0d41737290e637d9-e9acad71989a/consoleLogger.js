import { x } from "./tslib.es6.js";
var __wakaru_Agv_cache;
export function Agv() {
if (__wakaru_Agv_cache) return __wakaru_Agv_cache;
var e = {};
__wakaru_Agv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.DiagConsoleLogger = void 0;
var t = [
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
        for(let r = 0; r < t.length; r++)this[t[r].n] = i(t[r].c);
    }
};
e.DiagConsoleLogger = n;

return e;
}
