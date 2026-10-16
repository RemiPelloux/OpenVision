import { mwv } from "./A3u.js";
import { Okv, uMd } from "./afterAgentResponseResponse.ts";
import { Fkv, dMd } from "./afterAgentThoughtResponse.ts";
import { Bkv, hMd } from "./afterEditFileResponse.ts";
import { Ukv, pMd } from "./afterMCPExecutionResponse.ts";
import { $kv, mMd } from "./afterShellExecutionResponse.ts";
import { Hkv, gMd } from "./afterTabFileEditResponse.ts";
import { Qro, Wkv } from "./beforeCommandExecutionHookResponse.ts";
import { Gkv, fMd } from "./beforePromptSubmitResponse.ts";
import { Vkv, vMd } from "./beforeReadFileResponse.ts";
import { _Md, jkv } from "./beforeTabFileReadResponse.ts";
import { CWi, Lu } from "./hook-step.ts";
import { OMd } from "./normalize.ts";
import { bMd, qkv } from "./postToolUseFailureResponse.ts";
import { yMd, zkv } from "./postToolUseResponse.ts";
import { Kkv, kMd } from "./preCompactResponse.ts";
import { Ykv, wMd } from "./preToolUseResponse.ts";
import { CMd, Xkv } from "./sessionEndResponse.ts";
import { TMd, Zkv } from "./sessionStartResponse.ts";
import { EMd, Qkv } from "./stopResponse.ts";
import { Jkv, xMd } from "./subagentStartResponse.ts";
import { IMd, ewv } from "./subagentStopResponse.ts";
import { x } from "./tslib.es6.js";
import { AMd, twv } from "./workspaceOpenResponse.ts";
var EWi, xWi, eso, HLn, MMd, PMd, tso, LMd;
export { EWi, HLn, LMd, MMd, PMd, eso, tso, xWi };
var __wakaru_nso_initialized = false;
export function nso() {
if (__wakaru_nso_initialized) return;
__wakaru_nso_initialized = true;
"use strict";
x(), CWi(), OMd(), Okv(), Fkv(), Bkv(), Ukv(), $kv(), Hkv(), Wkv(), Gkv(), Vkv(), jkv(), qkv(), zkv(), Kkv(), Ykv(), Xkv(), Zkv(), Qkv(), Jkv(), ewv(), twv(), CWi(), EWi = new Set([
    Lu.sessionStart,
    Lu.beforeSubmitPrompt,
    Lu.preToolUse,
    Lu.postToolUse,
    Lu.postToolUseFailure
]), xWi = 60, eso = 5, HLn = 2, MMd = {
    [Lu.beforeShellExecution]: Qro,
    [Lu.beforeMCPExecution]: Qro,
    [Lu.afterShellExecution]: mMd,
    [Lu.afterMCPExecution]: pMd,
    [Lu.beforeReadFile]: vMd,
    [Lu.afterFileEdit]: hMd,
    [Lu.beforeTabFileRead]: _Md,
    [Lu.afterTabFileEdit]: gMd,
    [Lu.beforeSubmitPrompt]: fMd,
    [Lu.stop]: EMd,
    [Lu.afterAgentResponse]: uMd,
    [Lu.afterAgentThought]: dMd,
    [Lu.sessionStart]: TMd,
    [Lu.sessionEnd]: CMd,
    [Lu.preCompact]: kMd,
    [Lu.subagentStart]: xMd,
    [Lu.subagentStop]: IMd,
    [Lu.preToolUse]: wMd,
    [Lu.postToolUse]: yMd,
    [Lu.postToolUseFailure]: bMd,
    [Lu.workspaceOpen]: AMd
}, PMd = (e, t, n)=>{
    const i = mwv(e, t, n), r = MMd[e], s = r(i);
    return s.isValid ? {
        success: !0,
        data: i
    } : {
        success: !1,
        errors: s.errors
    };
}, tso = [
    Lu.beforeShellExecution,
    Lu.beforeMCPExecution,
    Lu.beforeReadFile,
    Lu.beforeTabFileRead,
    Lu.subagentStart,
    Lu.preToolUse
], LMd = [
    Lu.workspaceOpen
];

}
