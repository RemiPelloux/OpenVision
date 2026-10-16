import { Czt, Pnt } from "./tool-replies.ts";
import { x } from "./tslib.es6.js";
var OUh;
export { OUh };
var __wakaru_SPo_initialized = false;
export function SPo() {
if (__wakaru_SPo_initialized) return;
__wakaru_SPo_initialized = true;
"use strict";
x(), Czt(), OUh = class {
    tools;
    constructor(e){
        this.tools = e;
    }
    async callTool(e) {
        const t = this.tools.find((r)=>r.name === e.name);
        if (t === void 0) return {
            kind: "unknown_tool",
            output: {
                error: Pnt.unknownTool(e.name)
            }
        };
        const n = t.definition.input.safeParse(e.input);
        if (!n.success) return {
            kind: "invalid_input",
            output: {
                error: n.error.issues.find((s)=>s.code === "custom")?.message ?? t.definition.invalidInputError
            }
        };
        const i = await t.execute(n.data, {
            agentId: e.agentId,
            callId: e.callId,
            line: e.line
        });
        return {
            kind: "served",
            output: t.definition.output.parse(i)
        };
    }
};

}
