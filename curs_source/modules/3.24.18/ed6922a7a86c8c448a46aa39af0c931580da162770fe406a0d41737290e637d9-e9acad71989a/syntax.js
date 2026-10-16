import { QT } from "./index_63.js";
import { B4g, D4g, F4g, L4g, M4g, N4g, O4g, P4g, fml, gml, mml } from "./qIc.js";
import { x } from "./tslib.es6.js";
var vml, uvs, dvs, hvs, _ml, pvs, mvs, eDe, ECe, NYe;
export { ECe, NYe, _ml, dvs, eDe, hvs, mvs, pvs, uvs, vml };
var __wakaru_U4g_initialized = false;
export function U4g() {
if (__wakaru_U4g_initialized) return;
__wakaru_U4g_initialized = true;
for(x(), QT(), vml = {
    tokenize: L4g,
    partial: !0
}, uvs = {
    tokenize: N4g,
    partial: !0
}, dvs = {
    tokenize: O4g,
    partial: !0
}, hvs = {
    tokenize: F4g,
    partial: !0
}, _ml = {
    tokenize: B4g,
    partial: !0
}, pvs = {
    name: "wwwAutolink",
    tokenize: M4g,
    previous: mml
}, mvs = {
    name: "protocolAutolink",
    tokenize: P4g,
    previous: gml
}, eDe = {
    name: "emailAutolink",
    tokenize: D4g,
    previous: fml
}, ECe = {}, NYe = 48; NYe < 123;)ECe[NYe] = eDe, NYe++, NYe === 58 ? NYe = 65 : NYe === 91 && (NYe = 97);
ECe[43] = eDe, ECe[45] = eDe, ECe[46] = eDe, ECe[95] = eDe, ECe[72] = [
    eDe,
    mvs
], ECe[104] = [
    eDe,
    mvs
], ECe[87] = [
    eDe,
    pvs
], ECe[119] = [
    eDe,
    pvs
];

}
