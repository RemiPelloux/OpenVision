import { D0 } from "./floating-ui.utils.dom.js";
import { x } from "./tslib.es6.js";
var n5t, i5t, ZSn, QSn, JSn, ekn, eps, rol, tps, sol, nps, r5t, ool, aol, col, lol, uol;
export { JSn, QSn, ZSn, aol, col, ekn, eps, i5t, lol, n5t, nps, ool, r5t, rol, sol, tps, uol };
var __wakaru_tkn_initialized = false;
export function tkn() {
if (__wakaru_tkn_initialized) return;
__wakaru_tkn_initialized = true;
x(), D0(), n5t = "ArrowUp", i5t = "ArrowDown", ZSn = "ArrowLeft", QSn = "ArrowRight", JSn = "Home", ekn = "End", eps = new Set([
    ZSn,
    QSn
]), rol = new Set([
    ZSn,
    QSn,
    JSn,
    ekn
]), tps = new Set([
    n5t,
    i5t
]), sol = new Set([
    n5t,
    i5t,
    JSn,
    ekn
]), nps = new Set([
    ...eps,
    ...tps
]), r5t = new Set([
    ...nps,
    JSn,
    ekn
]), ool = "Shift", aol = "Control", col = "Alt", lol = "Meta", uol = new Set([
    ool,
    aol,
    col,
    lol
]);

}
