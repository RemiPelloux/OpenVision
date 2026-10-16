import { init_dist } from "../../../context/dist/index.js";
import { createKey } from "../../../entry_exports.js";
var ToolStep, toolStepKey;
export { ToolStep, toolStepKey };
var __wakaru_init_tool_step_initialized = false;
export function init_tool_step() {
if (__wakaru_init_tool_step_initialized) return;
__wakaru_init_tool_step_initialized = true;
"use strict";
init_dist();
ToolStep = class {
    constructor(){
        this.calls = [];
    }
    track(toolCallId, toolName, execution) {
        const call = {
            toolCallId,
            toolName,
            done: false,
            settled: execution.then(()=>{
                call.done = true;
            }, ()=>{
                call.done = true;
            })
        };
        this.calls.push(call);
    }
    async waitForEarlierCalls(toolCallId, maxWaitMs, options2) {
        const index = this.calls.findIndex((call)=>call.toolCallId === toolCallId);
        if (index === -1) return void 0;
        const earlier = this.calls.slice(0, index).filter((call)=>options2?.toolNames?.has(call.toolName) ?? true);
        const running = earlier.filter((call)=>!call.done);
        if (running.length === 0) {
            if (options2?.includeSettled !== true || earlier.length === 0) return void 0;
            return {
                waitedOn: earlier.map((call)=>call.toolName),
                settled: true,
                waitMs: 0
            };
        }
        const startMs = Date.now();
        let timer2;
        const settled = await Promise.race([
            Promise.all(running.map((call)=>call.settled)).then(()=>true),
            new Promise((resolve36)=>{
                timer2 = setTimeout(()=>resolve36(false), maxWaitMs);
            })
        ]);
        clearTimeout(timer2);
        return {
            waitedOn: running.map((call)=>call.toolName),
            settled,
            waitMs: Date.now() - startMs
        };
    }
};
toolStepKey = createKey(Symbol.for("@anysphere/agent/toolStep"), void 0);

}
