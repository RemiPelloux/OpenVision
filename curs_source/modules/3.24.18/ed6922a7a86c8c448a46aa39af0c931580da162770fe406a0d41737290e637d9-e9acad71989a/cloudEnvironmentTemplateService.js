import { _Yv } from "./ECo.js";
import { Ze } from "./instantiation.js";
import { pd } from "./qIc.js";
import { N1, gh } from "./reactive.js";
import { x } from "./tslib.es6.js";
var z1e, bCh;
export { bCh, z1e };
var __wakaru_lLe_initialized = false;
export function lLe() {
if (__wakaru_lLe_initialized) return;
__wakaru_lLe_initialized = true;
"use strict";
x(), Ze(), N1(), z1e = pd("cloudEnvironmentTemplateService"), bCh = class {
    constructor(){
        this.data = new gh(_Yv());
    }
    async refresh() {}
    async refreshIfStale(e) {}
    async refreshGitRepoEnvironmentTemplates() {}
    markGithubRepoAccessible(e) {}
    async refreshLogicalEnvironments(e) {}
    async listLogicalEnvironmentsBySearch(e, t) {
        return [];
    }
    async listGitRepoEnvironmentTemplatesBySearch(e, t) {
        return [];
    }
    lookUpGitReposMissingFromCatalog(e) {
        return !1;
    }
    isGitRepoLookupPending(e) {
        return !1;
    }
    async whenGitRepoLookupsSettled() {}
    clearForSignOut() {}
};

}
