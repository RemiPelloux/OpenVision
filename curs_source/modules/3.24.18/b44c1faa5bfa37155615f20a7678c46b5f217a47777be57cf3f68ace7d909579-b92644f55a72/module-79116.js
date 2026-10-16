"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DiagConsoleLogger = void 0;
const r = [
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
];
exports.DiagConsoleLogger = class {
    constructor(){
        function e(e) {
            return function(...t) {
                if (console) {
                    let r = console[e];
                    if ("function" != typeof r && (r = console.log), "function" == typeof r) return r.apply(console, t);
                }
            };
        }
        for(let t = 0; t < r.length; t++)this[r[t].n] = e(r[t].c);
    }
};
