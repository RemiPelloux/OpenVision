import { iv } from "./index_16.js";
import { Mt } from "./index_197.js";
import { wqr } from "./promptInputRichText.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var VFp, KFp, YFp, VOa, XFp, ZFp;
export { KFp, VFp, VOa, XFp, YFp, ZFp };
var __wakaru_Fx_initialized = false;
export function Fx() {
if (__wakaru_Fx_initialized) return;
__wakaru_Fx_initialized = true;
"use strict";
E(), Mt(), iv(), wqr(), VFp = ze.object({
    label: ze.string().optional(),
    rawText: ze.string().optional(),
    uuid: ze.string().optional()
}), KFp = ze.object({
    name: ze.string().optional()
}), YFp = ze.object({
    commandName: ze.string().optional(),
    commandContent: ze.string().optional(),
    agentId: ze.string().optional(),
    name: ze.string().optional(),
    subagentName: ze.string().optional(),
    label: ze.string().optional(),
    relativeWorkspacePath: ze.string().optional(),
    startLineNumber: ze.number().optional(),
    lines: ze.array(ze.string()).optional()
}).passthrough(), VOa = ze.lazy(()=>ze.object({
        type: ze.string().optional(),
        text: ze.string().optional(),
        children: ze.array(VOa).optional(),
        data: YFp.optional()
    }).passthrough()), XFp = ze.object({
    root: ze.object({
        children: ze.array(VOa)
    }).passthrough()
}).passthrough(), ZFp = new Set([
    "slash-command",
    "past-chat",
    "subagent-pill",
    "code-chunk"
]);

}
