import { mt } from "./contextkey.js";
import { eJn, rW, x_ } from "./contextkeys.js";
import { jt, k_ } from "./editor-panel-tab-kind.js";
import { cg, si } from "./editorContextKeys.js";
import { aw } from "./glass-context-key-service.js";
import { Gv, Iye, NDi, Oys, ag, xxt } from "./glassContextKeys.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { QI, ns } from "./terminalContextKey.js";
import { E } from "./tslib.es6.js";
var ohc, FQv, ahc, BQv, UQv;
export { BQv, FQv, UQv, ahc, ohc };
var __wakaru_lhc_initialized = false;
export function lhc() {
if (__wakaru_lhc_initialized) return;
__wakaru_lhc_initialized = true;
"use strict";
E(), Ma(), cg(), aw(), x_(), QI(), Gv(), k_(), ohc = mt.or(eJn, ns.focusInAny.negate()), FQv = {
    weight: 1601,
    primary: ut.CtrlCmd | Ze.KeyL,
    when: mt.and(ohc, mt.or(ag.isEqualTo(jt.File), ag.isEqualTo(jt.Terminal), mt.and(xxt, Iye.negate(), rW.negate(), si.editorTextFocus.negate()), mt.and(mt.or(ag.isEqualTo(jt.Diff), ag.isEqualTo(jt.Pr)), NDi)))
}, ahc = {
    addChatSelection: !0
}, BQv = [
    {
        weight: 650,
        primary: ut.CtrlCmd | Ze.KeyI,
        when: Oys.negate()
    },
    {
        weight: 600,
        primary: ut.CtrlCmd | Ze.KeyL,
        when: mt.and(ohc, ag.notEqualsTo(jt.Browser), ag.notEqualsTo(jt.Plan)),
        args: ahc
    }
], UQv = {
    weight: 250,
    primary: ut.CtrlCmd | Ze.KeyB,
    when: Oys.negate()
};

}
