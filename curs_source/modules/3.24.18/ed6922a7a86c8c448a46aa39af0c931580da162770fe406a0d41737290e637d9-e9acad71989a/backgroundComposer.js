import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var pT, Mxo;
export { Mxo, pT };
var __wakaru_DN_initialized = false;
export function DN() {
if (__wakaru_DN_initialized) return;
__wakaru_DN_initialized = true;
"use strict";
x(), Ze(), pT = vn("backgroundComposerService"), Mxo = (e)=>{
    let t = e.trim();
    return t.startsWith("https://") && (t = t.substring(8)), t.startsWith("http://") && (t = t.substring(7)), t.startsWith("ssh://") && (t = t.substring(6).replace(/:(?!\/)/, "/")), t.includes("@") && (t = t.split("@")[1].replace(/:(?!\/)/, "/")), t.endsWith(".git") && (t = t.substring(0, t.length - 4)), t;
};

}
