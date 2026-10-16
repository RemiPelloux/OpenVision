import { init_headless_defaults } from "../../daemon_metrics_exports.js";
import { init_dist20 } from "../../local-exec/dist/index.js";
var HeadlessRipgrepIgnoreAdapter;
export { HeadlessRipgrepIgnoreAdapter };
var __wakaru_init_permissions_policy_initialized = false;
export function init_permissions_policy() {
if (__wakaru_init_permissions_policy_initialized) return;
__wakaru_init_permissions_policy_initialized = true;
"use strict";
init_dist20();
init_headless_defaults();
HeadlessRipgrepIgnoreAdapter = class {
    constructor(delegate){
        this.delegate = delegate;
    }
    isIgnoredByAny(filePath) {
        return this.delegate.isIgnoredByAny(filePath);
    }
    isGitIgnored(filePath) {
        return this.delegate.isGitIgnored(filePath);
    }
    isCursorIgnored(filePath) {
        return this.delegate.isCursorIgnored(filePath);
    }
    isRepoBlocked(filePath) {
        return this.delegate.isRepoBlocked(filePath);
    }
    async listCursorIgnoreFilesByRoot(_root) {
        return [];
    }
    getCursorIgnoreMapping() {
        return this.delegate.getCursorIgnoreMapping();
    }
    getGitIgnoreMapping() {
        return this.delegate.getGitIgnoreMapping();
    }
    getRepoBlockExcludeGlobs(rootDirectory) {
        return this.delegate.getRepoBlockExcludeGlobs(rootDirectory);
    }
};

}
