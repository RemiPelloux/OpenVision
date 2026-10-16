import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var uC, ehl;
export { ehl, uC };
var __wakaru_LP_initialized = false;
export function LP() {
if (__wakaru_LP_initialized) return;
__wakaru_LP_initialized = true;
"use strict";
E(), It(), uC = jn("backgroundComposerService"), ehl = (t)=>{
    let e = t.trim();
    return e.startsWith("https://") && (e = e.substring(8)), e.startsWith("http://") && (e = e.substring(7)), e.startsWith("ssh://") && (e = e.substring(6).replace(/:(?!\/)/, "/")), e.includes("@") && (e = e.split("@")[1].replace(/:(?!\/)/, "/")), e.endsWith(".git") && (e = e.substring(0, e.length - 4)), e;
};

}
