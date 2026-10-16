import { PMu } from "./De_3.js";
import { Yu } from "./browser.ts";
import { x } from "./tslib.es6.js";
import { dYs, uYs } from "./write_exec_pb.js";
var t1h;
export { t1h };
var __wakaru_rZv_initialized = false;
export function rZv() {
if (__wakaru_rZv_initialized) return;
__wakaru_rZv_initialized = true;
"use strict";
x(), dYs(), Yu(), t1h = class {
    constructor(e, t, n, i){
        this.remoteWriteExecutor = e, this.workspaceContextService = t, this.textResourceConfigurationService = n, this.textFileService = i;
    }
    async execute(e, t, n) {
        const i = this.workspaceContextService.resolveRelativePath(t.path), s = this.textFileService.files.get(i)?.getEncoding() ?? this.textResourceConfigurationService.getValue(i, "files.encoding");
        let o = t;
        return s && s !== "utf8" && (o = new uYs({
            ...t,
            encodingHint: PMu(s)
        })), this.remoteWriteExecutor.execute(e, o, n);
    }
};

}
