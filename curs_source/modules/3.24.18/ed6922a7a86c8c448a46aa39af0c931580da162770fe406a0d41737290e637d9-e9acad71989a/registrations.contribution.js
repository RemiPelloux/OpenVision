import { S } from "./HVr.js";
import { Pe, _i } from "./codicons.js";
import { tc } from "./colorRegistry.js";
import { dh } from "./iconRegistry.js";
import { rt } from "./nls.js";
import { Lt, Pi } from "./qIc.js";
import { Mv, Vd } from "./textModel.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
var Vyg, jyg, qyg, $8c, Ins, Ans, Rns, Dns, Mns, Xbi, Pns, H8c, Tvn, W8c, G8c;
export { $8c, Ans, Dns, G8c, H8c, Ins, Mns, Pns, Rns, Tvn, Vyg, W8c, Xbi, jyg, qyg };
var __wakaru_Evn_initialized = false;
export function Evn() {
if (__wakaru_Evn_initialized) return;
__wakaru_Evn_initialized = true;
"use strict";
x(), _i(), Sr(), Mv(), rt(), tc(), dh(), Vyg = Lt("diffEditor.move.border", "#8b8b8b9c", S(259, null)), jyg = Lt("diffEditor.moveActive.border", "#FFA500", S(260, null)), qyg = Lt("diffEditor.unchangedRegionShadow", {
    dark: "#000000",
    light: "#737373BF",
    hcDark: "#000000",
    hcLight: "#737373BF"
}, S(261, null)), $8c = Pi("diff-insert", Pe.add, S(262, null)), Ins = Pi("diff-remove", Pe.remove, S(263, null)), Ans = Vd.register({
    className: "line-insert",
    description: "line-insert",
    isWholeLine: !0,
    linesDecorationsClassName: "insert-sign " + Ft.asClassName($8c),
    marginClassName: "gutter-insert"
}), Rns = Vd.register({
    className: "line-delete",
    description: "line-delete",
    isWholeLine: !0,
    linesDecorationsClassName: "delete-sign " + Ft.asClassName(Ins),
    marginClassName: "gutter-delete"
}), Dns = Vd.register({
    className: "line-insert",
    description: "line-insert",
    isWholeLine: !0,
    marginClassName: "gutter-insert"
}), Mns = Vd.register({
    className: "line-delete",
    description: "line-delete",
    isWholeLine: !0,
    marginClassName: "gutter-delete"
}), Xbi = Vd.register({
    className: "char-insert",
    description: "char-insert",
    shouldFillLineOnLineBreak: !0
}), Pns = Vd.register({
    className: "char-insert",
    description: "char-insert",
    isWholeLine: !0
}), H8c = Vd.register({
    className: "char-insert diff-range-empty",
    description: "char-insert diff-range-empty"
}), Tvn = Vd.register({
    className: "char-delete",
    description: "char-delete",
    shouldFillLineOnLineBreak: !0
}), W8c = Vd.register({
    className: "char-delete",
    description: "char-delete",
    isWholeLine: !0
}), G8c = Vd.register({
    className: "char-delete diff-range-empty",
    description: "char-delete diff-range-empty"
});

}
