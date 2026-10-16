import { aT } from "./floating-ui.utils.dom.js";
import { E } from "./tslib.es6.js";
var p7t, m7t, fbn, vbn, _bn, bbn, XJo, ZJo, QJo, Hlh, JJo, Wlh, eea, $St, tea, Glh, qlh, zlh, Vlh;
export { $St, Glh, Hlh, JJo, QJo, Vlh, Wlh, XJo, ZJo, _bn, bbn, eea, fbn, m7t, p7t, qlh, tea, vbn, zlh };
var __wakaru_g7t_initialized = false;
export function g7t() {
if (__wakaru_g7t_initialized) return;
__wakaru_g7t_initialized = true;
E(), aT(), p7t = "ArrowUp", m7t = "ArrowDown", fbn = "ArrowLeft", vbn = "ArrowRight", _bn = "Home", bbn = "End", XJo = "PageUp", ZJo = "PageDown", QJo = new Set([
    fbn,
    vbn
]), Hlh = new Set([
    fbn,
    vbn,
    _bn,
    bbn
]), JJo = new Set([
    p7t,
    m7t
]), Wlh = new Set([
    p7t,
    m7t,
    _bn,
    bbn
]), eea = new Set([
    ...QJo,
    ...JJo
]), $St = new Set([
    ...eea,
    _bn,
    bbn
]), tea = "Shift", Glh = "Control", qlh = "Alt", zlh = "Meta", Vlh = new Set([
    tea,
    Glh,
    qlh,
    zlh
]);

}
