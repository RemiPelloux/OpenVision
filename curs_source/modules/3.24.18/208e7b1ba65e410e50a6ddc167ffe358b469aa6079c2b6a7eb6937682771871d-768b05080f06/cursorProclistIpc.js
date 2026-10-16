import { h } from "./tslib.es6.js";
var rke;
export { rke };
var __wakaru_git_initialized = false;
export function git() {
if (__wakaru_git_initialized) return;
__wakaru_git_initialized = true;
"use strict";
h(), rke = class {
    constructor(e){
        this.service = e;
    }
    listen(e, t) {
        switch(t){
            case "onAgentMemoryPressureReport":
                return this.service.onAgentMemoryPressureReport;
        }
        throw new Error(`Event not found: ${t}`);
    }
    async call(e, t, n) {
        switch(t){
            case "applyConfig":
                return this.service.applyConfig(n);
            case "createSample":
                return this.service.createSample();
            case "writeSample":
                return this.service.writeSample(n);
            case "readProcessMonitorData":
                return this.service.readProcessMonitorData();
            case "getLiveNetworkBytesPerSec":
                return this.service.getLiveNetworkBytesPerSec();
            case "killAgentProcessTree":
                return this.service.killAgentProcessTree(n.pid, n.name);
            case "getProcessTreeSnapshot":
                return this.service.getProcessTreeSnapshot();
            case "getCpuProcessTreeSnapshot":
                return this.service.getCpuProcessTreeSnapshot();
            case "getSystemProcessList":
                return this.service.getSystemProcessList(n);
            case "stashPendingUploadSamples":
                return this.service.stashPendingUploadSamples(n);
            case "takePendingUploadSamples":
                return this.service.takePendingUploadSamples();
        }
        throw new Error(`Command not found: ${t}`);
    }
};

}
