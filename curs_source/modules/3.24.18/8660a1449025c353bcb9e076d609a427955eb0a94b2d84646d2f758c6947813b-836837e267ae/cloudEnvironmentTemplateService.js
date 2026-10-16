import { Il } from "./SZu.js";
import { Cvk } from "./Sol.js";
import { It } from "./instantiation.js";
import { Kf, ca } from "./reactive.js";
import { E } from "./tslib.es6.js";
var Lk, Bcg;
export { Bcg, Lk };
var __wakaru_Nw_initialized = false;
export function Nw() {
if (__wakaru_Nw_initialized) return;
__wakaru_Nw_initialized = true;
"use strict";
E(), It(), Kf(), Lk = Il("cloudEnvironmentTemplateService"), Bcg = class {
    constructor(){
        this.data = new ca(Cvk());
    }
    async refresh() {}
    async refreshIfStale(t) {}
    async refreshGitRepoEnvironmentTemplates() {}
    markGithubRepoAccessible(t) {}
    async refreshLogicalEnvironments(t) {}
    async listLogicalEnvironmentsBySearch(t, e) {
        return [];
    }
    async listGitRepoEnvironmentTemplatesBySearch(t, e) {
        return [];
    }
    lookUpGitReposMissingFromCatalog(t) {
        return !1;
    }
    isGitRepoLookupPending(t) {
        return !1;
    }
    async whenGitRepoLookupsSettled() {}
    clearForSignOut() {}
};

}
