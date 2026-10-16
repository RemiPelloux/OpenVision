import { D } from "./Iwo.js";
import { gs, yt } from "./codicons.js";
import { Ap } from "./colorRegistry.js";
import { b_ } from "./iconRegistry.js";
import { Bt } from "./nls.js";
import { Kg, PC } from "./textModel.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { mn, qa } from "./ze.js";
var BNy, UNy, jNy, pqd, DGo, NGo, LGo, OGo, FGo, BGo, mqd, gqd, wTr, fqd, vqd;
export { BGo, BNy, DGo, FGo, LGo, NGo, OGo, UNy, fqd, gqd, jNy, mqd, pqd, vqd, wTr };
var __wakaru_CTr_initialized = false;
export function CTr() {
if (__wakaru_CTr_initialized) return;
__wakaru_CTr_initialized = true;
"use strict";
E(), gs(), ta(), PC(), Bt(), Ap(), b_(), BNy = mn("diffEditor.move.border", "#8b8b8b9c", D(259, null)), UNy = mn("diffEditor.moveActive.border", "#FFA500", D(260, null)), jNy = mn("diffEditor.unchangedRegionShadow", {
    dark: "#000000",
    light: "#737373BF",
    hcDark: "#000000",
    hcLight: "#737373BF"
}, D(261, null)), pqd = qa("diff-insert", yt.add, D(262, null)), DGo = qa("diff-remove", yt.remove, D(263, null)), NGo = Kg.register({
    className: "line-insert",
    description: "line-insert",
    isWholeLine: !0,
    linesDecorationsClassName: "insert-sign " + Gn.asClassName(pqd),
    marginClassName: "gutter-insert"
}), LGo = Kg.register({
    className: "line-delete",
    description: "line-delete",
    isWholeLine: !0,
    linesDecorationsClassName: "delete-sign " + Gn.asClassName(DGo),
    marginClassName: "gutter-delete"
}), OGo = Kg.register({
    className: "line-insert",
    description: "line-insert",
    isWholeLine: !0,
    marginClassName: "gutter-insert"
}), FGo = Kg.register({
    className: "line-delete",
    description: "line-delete",
    isWholeLine: !0,
    marginClassName: "gutter-delete"
}), BGo = Kg.register({
    className: "char-insert",
    description: "char-insert",
    shouldFillLineOnLineBreak: !0
}), mqd = Kg.register({
    className: "char-insert",
    description: "char-insert",
    isWholeLine: !0
}), gqd = Kg.register({
    className: "char-insert diff-range-empty",
    description: "char-insert diff-range-empty"
}), wTr = Kg.register({
    className: "char-delete",
    description: "char-delete",
    shouldFillLineOnLineBreak: !0
}), fqd = Kg.register({
    className: "char-delete",
    description: "char-delete",
    isWholeLine: !0
}), vqd = Kg.register({
    className: "char-delete diff-range-empty",
    description: "char-delete diff-range-empty"
});

}
