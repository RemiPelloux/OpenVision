var DEFAULT_LOCAL_SUBAGENT_MAX_RUNNING, LocalSubagentRunSlots;
export { DEFAULT_LOCAL_SUBAGENT_MAX_RUNNING, LocalSubagentRunSlots };
var __wakaru_init_subagent_run_settings_initialized = false;
export function init_subagent_run_settings() {
if (__wakaru_init_subagent_run_settings_initialized) return;
__wakaru_init_subagent_run_settings_initialized = true;
"use strict";
DEFAULT_LOCAL_SUBAGENT_MAX_RUNNING = 32;
LocalSubagentRunSlots = class {
    constructor(){
        this.runningCount = 0;
    }
    tryAcquire(maxRunning) {
        if (this.runningCount >= maxRunning) {
            return void 0;
        }
        this.runningCount += 1;
        let released = false;
        return ()=>{
            if (released) {
                return;
            }
            released = true;
            this.runningCount -= 1;
        };
    }
};

}
