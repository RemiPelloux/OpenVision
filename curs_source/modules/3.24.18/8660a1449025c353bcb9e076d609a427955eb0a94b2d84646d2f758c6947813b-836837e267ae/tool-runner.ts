import { MIt, VPn } from "./tool-replies.ts";
import { E } from "./tslib.es6.js";
var Qif;
export { Qif };
var __wakaru_LTl_initialized = false;
export function LTl() {
if (__wakaru_LTl_initialized) return;
__wakaru_LTl_initialized = true;
"use strict";
E(), VPn(), Qif = class {
    tools;
    constructor(t){
        this.tools = t;
    }
    async callTool(t) {
        const e = this.tools.find((r)=>r.name === t.name);
        if (e === void 0) return {
            kind: "unknown_tool",
            output: {
                error: MIt.unknownTool(t.name)
            }
        };
        const n = e.definition.input.safeParse(t.input);
        if (!n.success) return {
            kind: "invalid_input",
            output: {
                error: n.error.issues.find((s)=>s.code === "custom")?.message ?? e.definition.invalidInputError
            }
        };
        const i = await e.execute(n.data, {
            agentId: t.agentId,
            callId: t.callId,
            line: t.line
        });
        return {
            kind: "served",
            output: e.definition.output.parse(i)
        };
    }
};

}
