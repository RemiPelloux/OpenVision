import { kl } from "./browser.ts";
import { lOp } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { J4o, Q4o } from "./write_exec_pb.js";
var ydg;
export { ydg };
var __wakaru_sbk_initialized = false;
export function sbk() {
if (__wakaru_sbk_initialized) return;
__wakaru_sbk_initialized = true;
"use strict";
E(), J4o(), kl(), ydg = class {
    constructor(t, e, n, i){
        this.remoteWriteExecutor = t, this.workspaceContextService = e, this.textResourceConfigurationService = n, this.textFileService = i;
    }
    async execute(t, e, n) {
        const i = this.workspaceContextService.resolveRelativePath(e.path), s = this.textFileService.files.get(i)?.getEncoding() ?? this.textResourceConfigurationService.getValue(i, "files.encoding");
        let o = e;
        return s && s !== "utf8" && (o = new Q4o({
            ...e,
            encodingHint: lOp(s)
        })), this.remoteWriteExecutor.execute(t, o, n);
    }
};

}
