import { L61, Wym } from "./afterAgentResponseResponse.ts";
import { Gym, O61 } from "./afterAgentThoughtResponse.ts";
import { F61, qym } from "./afterEditFileResponse.ts";
import { B61, zym } from "./afterMCPExecutionResponse.ts";
import { U61, Vym } from "./afterShellExecutionResponse.ts";
import { Kym, j61 } from "./afterTabFileEditResponse.ts";
import { $61, a7a } from "./beforeCommandExecutionHookResponse.ts";
import { H61, Yym } from "./beforePromptSubmitResponse.ts";
import { W61, Xym } from "./beforeReadFileResponse.ts";
import { G61, Zym } from "./beforeTabFileReadResponse.ts";
import { ZKr, dh } from "./hook-step.ts";
import { gSm } from "./normalize.ts";
import { Qym, q61 } from "./postToolUseFailureResponse.ts";
import { Jym, z61 } from "./postToolUseResponse.ts";
import { V61, tSm } from "./preCompactResponse.ts";
import { K61, nSm } from "./preToolUseResponse.ts";
import { Y61, iSm } from "./sessionEndResponse.ts";
import { X61, rSm } from "./sessionStartResponse.ts";
import { Z61, sSm } from "./stopResponse.ts";
import { Q61, oSm } from "./subagentStartResponse.ts";
import { J61, aSm } from "./subagentStopResponse.ts";
import { E } from "./tslib.es6.js";
import { e41, lSm } from "./workspaceOpenResponse.ts";
import { p41 } from "./yBp.js";
var JKr, eYr, c7a, fki, dSm, hSm, u7a, pSm;
export { JKr, c7a, dSm, eYr, fki, hSm, pSm, u7a };
var __wakaru_d7a_initialized = false;
export function d7a() {
if (__wakaru_d7a_initialized) return;
__wakaru_d7a_initialized = true;
"use strict";
E(), ZKr(), gSm(), L61(), O61(), F61(), B61(), U61(), j61(), $61(), H61(), W61(), G61(), q61(), z61(), V61(), K61(), Y61(), X61(), Z61(), Q61(), J61(), e41(), ZKr(), JKr = new Set([
    dh.sessionStart,
    dh.beforeSubmitPrompt,
    dh.preToolUse,
    dh.postToolUse,
    dh.postToolUseFailure
]), eYr = 60, c7a = 5, fki = 2, dSm = {
    [dh.beforeShellExecution]: a7a,
    [dh.beforeMCPExecution]: a7a,
    [dh.afterShellExecution]: Vym,
    [dh.afterMCPExecution]: zym,
    [dh.beforeReadFile]: Xym,
    [dh.afterFileEdit]: qym,
    [dh.beforeTabFileRead]: Zym,
    [dh.afterTabFileEdit]: Kym,
    [dh.beforeSubmitPrompt]: Yym,
    [dh.stop]: sSm,
    [dh.afterAgentResponse]: Wym,
    [dh.afterAgentThought]: Gym,
    [dh.sessionStart]: rSm,
    [dh.sessionEnd]: iSm,
    [dh.preCompact]: tSm,
    [dh.subagentStart]: oSm,
    [dh.subagentStop]: aSm,
    [dh.preToolUse]: nSm,
    [dh.postToolUse]: Jym,
    [dh.postToolUseFailure]: Qym,
    [dh.workspaceOpen]: lSm
}, hSm = (t, e, n)=>{
    const i = p41(t, e, n), r = dSm[t], s = r(i);
    return s.isValid ? {
        success: !0,
        data: i
    } : {
        success: !1,
        errors: s.errors
    };
}, u7a = [
    dh.beforeShellExecution,
    dh.beforeMCPExecution,
    dh.beforeReadFile,
    dh.beforeTabFileRead,
    dh.subagentStart,
    dh.preToolUse
], pSm = [
    dh.workspaceOpen
];

}
