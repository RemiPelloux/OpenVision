import { WebFetchAllowlistPrecheckResult, init_web_fetch_allowlist_precheck_exec_pb } from "../../proto/dist/generated/agent/v1/web_fetch_allowlist_precheck_exec_pb.js";
var LocalWebFetchAllowlistPrecheckExecutor;
export { LocalWebFetchAllowlistPrecheckExecutor };
var __wakaru_init_web_fetch_allowlist_precheck2_initialized = false;
export function init_web_fetch_allowlist_precheck2() {
if (__wakaru_init_web_fetch_allowlist_precheck2_initialized) return;
__wakaru_init_web_fetch_allowlist_precheck2_initialized = true;
"use strict";
init_web_fetch_allowlist_precheck_exec_pb();
LocalWebFetchAllowlistPrecheckExecutor = class {
    constructor(permissionsService){
        this.permissionsService = permissionsService;
    }
    async execute(ctx, args) {
        const allowlisted = await this.permissionsService.isWebFetchFullyAllowlisted(ctx, {
            url: args.url
        });
        return new WebFetchAllowlistPrecheckResult({
            allowlisted
        });
    }
};

}
