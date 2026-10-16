import { YFv } from "./action-draft-from-wire.js";
import { w2t } from "./automations-wire-aliases.js";
import { a0i, mie, rqt, sqt } from "./automations_pb.js";
import { CDs } from "./trigger-draft-from-wire.js";
import { E } from "./tslib.es6.js";
var LJt, ZFv, QFv, JFv, e6v;
export { JFv, LJt, QFv, ZFv, e6v };
var __wakaru_C4i_initialized = false;
export function C4i() {
if (__wakaru_C4i_initialized) return;
__wakaru_C4i_initialized = true;
"use strict";
E(), w2t(), YFv(), CDs(), LJt = Symbol("wireZeroSentinel"), ZFv = {
    [rqt.UNSPECIFIED]: LJt,
    [rqt.STANDARD]: "standard",
    [rqt.HARD]: "hard"
}, QFv = {
    [sqt.UNSPECIFIED]: LJt,
    [sqt.SAME_CHAT]: "sameChat",
    [sqt.NEW_AGENT]: "newAgent"
}, JFv = {
    [a0i.UNSPECIFIED]: LJt,
    [a0i.OPEN_GIT_PR]: "openGitPr"
}, e6v = {
    [mie.UNSPECIFIED]: "private",
    [mie.USER]: "private",
    [mie.TEAM]: "team",
    [mie.TEAM_VISIBLE]: "team_visible",
    [mie.TEAM_EDITABLE]: "team_editable",
    [mie.TEAM_EDITABLE_USER]: "team_editable_user"
};

}
