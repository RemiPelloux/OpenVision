import { De } from "./De_3.js";
import { mi } from "./index_188.js";
import { HM } from "./index_191.js";
import { r8i } from "./promptInputRichText.js";
import { x } from "./tslib.es6.js";
var wLu, CLu, TLu, _Ks, ELu, xLu;
export { CLu, ELu, TLu, _Ks, wLu, xLu };
var __wakaru_QO_initialized = false;
export function QO() {
if (__wakaru_QO_initialized) return;
__wakaru_QO_initialized = true;
"use strict";
x(), mi(), HM(), r8i(), wLu = De.object({
    label: De.string().optional(),
    rawText: De.string().optional(),
    uuid: De.string().optional()
}), CLu = De.object({
    name: De.string().optional()
}), TLu = De.object({
    commandName: De.string().optional(),
    commandContent: De.string().optional(),
    agentId: De.string().optional(),
    name: De.string().optional(),
    subagentName: De.string().optional(),
    label: De.string().optional(),
    relativeWorkspacePath: De.string().optional(),
    startLineNumber: De.number().optional(),
    lines: De.array(De.string()).optional()
}).passthrough(), _Ks = De.lazy(()=>De.object({
        type: De.string().optional(),
        text: De.string().optional(),
        children: De.array(_Ks).optional(),
        data: TLu.optional()
    }).passthrough()), ELu = De.object({
    root: De.object({
        children: De.array(_Ks)
    }).passthrough()
}).passthrough(), xLu = new Set([
    "slash-command",
    "past-chat",
    "subagent-pill",
    "code-chunk"
]);

}
