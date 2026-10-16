import { t8 } from "./floating-ui.utils.dom.mjs";
import { E } from "./tslib.es6.js";
var GPf, qPf, zPf, VPf, KPf, YPf, XPf, ZPf, QPf, JPf;
export { GPf, JPf, KPf, QPf, VPf, XPf, YPf, ZPf, qPf, zPf };
var __wakaru_Pgw_initialized = false;
export function Pgw() {
if (__wakaru_Pgw_initialized) return;
__wakaru_Pgw_initialized = true;
E(), t8(), GPf = "ArrowUp", qPf = "ArrowDown", zPf = "ArrowLeft", VPf = "ArrowRight", KPf = "Home", YPf = "End", XPf = new Set([
    zPf,
    VPf
]), ZPf = new Set([
    GPf,
    qPf
]), QPf = new Set([
    ...XPf,
    ...ZPf
]), JPf = new Set([
    ...QPf,
    KPf,
    YPf
]);

}
