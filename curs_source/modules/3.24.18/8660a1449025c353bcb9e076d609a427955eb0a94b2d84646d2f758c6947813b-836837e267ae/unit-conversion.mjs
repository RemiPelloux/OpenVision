import { LQt, OQt } from "./index_11.mjs";
import { UQt, iYe } from "./keys-transform.mjs";
import { QYl } from "./ofv.js";
import { lyv } from "./parse-transform.mjs";
import { E } from "./tslib.es6.js";
import { hOn, tb } from "./units.mjs";
var nXl, cyv, uyv, jut;
export { cyv, jut, nXl, uyv };
var __wakaru_dyv_initialized = false;
export function dyv() {
if (__wakaru_dyv_initialized) return;
__wakaru_dyv_initialized = true;
E(), lyv(), iYe(), OQt(), hOn(), nXl = (t)=>t === LQt || t === tb, cyv = new Set([
    "x",
    "y",
    "z"
]), uyv = UQt.filter((t)=>!cyv.has(t)), jut = {
    width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0", boxSizing: i })=>{
        const r = t.max - t.min;
        return i === "border-box" ? r : r - parseFloat(e) - parseFloat(n);
    },
    height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0", boxSizing: i })=>{
        const r = t.max - t.min;
        return i === "border-box" ? r : r - parseFloat(e) - parseFloat(n);
    },
    top: (t, { top: e })=>parseFloat(e),
    left: (t, { left: e })=>parseFloat(e),
    bottom: ({ y: t }, { top: e })=>parseFloat(e) + (t.max - t.min),
    right: ({ x: t }, { left: e })=>parseFloat(e) + (t.max - t.min),
    x: (t, { transform: e })=>QYl(e, "x"),
    y: (t, { transform: e })=>QYl(e, "y")
}, jut.translateX = jut.x, jut.translateY = jut.y;

}
