import { MANIFEST_FILE, init_manifest } from "../manifest.js";
import { REVERT_HOLD_MS, init_reverted } from "../reverted.js";
var HarnessRejectedError, HarnessNotInstalledError, HarnessNotClaimedError, HarnessRevertHeldError;
export { HarnessNotClaimedError, HarnessNotInstalledError, HarnessRejectedError, HarnessRevertHeldError };
var __wakaru_init_rejections_initialized = false;
export function init_rejections() {
if (__wakaru_init_rejections_initialized) return;
__wakaru_init_rejections_initialized = true;
"use strict";
init_manifest();
init_reverted();
HarnessRejectedError = class extends Error {
    constructor(reason){
        super(reason);
        this.name = "HarnessRejectedError";
    }
};
HarnessNotInstalledError = class extends HarnessRejectedError {
    constructor(dir, options2 = {}){
        super(`${dir} ${options2.why ?? `is not installed (no ${MANIFEST_FILE})`}`);
        this.state = "is not installed";
        this.name = "HarnessNotInstalledError";
    }
};
HarnessNotClaimedError = class extends HarnessNotInstalledError {
    constructor(args){
        super(args.dir, {
            why: `is not loaded until this host can list it in ${args.marker} (${args.problem})`
        });
        this.state = "is not loaded yet";
        this.name = "HarnessNotClaimedError";
    }
};
HarnessRevertHeldError = class extends HarnessRejectedError {
    constructor(revert){
        super(`reverted by extension host pid ${revert.pid} at ${revert.revertedAt} (${revert.trigger}); held back until it is re-staged, the client updates or ${REVERT_HOLD_MS / 36e5} hours pass`);
        this.name = "HarnessRevertHeldError";
    }
};

}
