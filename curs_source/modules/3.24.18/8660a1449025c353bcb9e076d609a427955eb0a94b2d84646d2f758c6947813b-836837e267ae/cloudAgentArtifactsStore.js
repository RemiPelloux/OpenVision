import { E } from "./tslib.es6.js";
var qpg;
export { qpg };
var __wakaru_ySk_initialized = false;
export function ySk() {
if (__wakaru_ySk_initialized) return;
__wakaru_ySk_initialized = true;
"use strict";
E(), qpg = class {
    constructor(t, e){
        this.agentId = t, this.artifactCacheService = e;
    }
    async listArtifacts() {
        try {
            return await this.artifactCacheService.listArtifactsCached(this.agentId);
        } catch  {
            return [];
        }
    }
    async getArtifactBytes(t) {
        return this.artifactCacheService.fetchArtifactBytes(this.agentId, t);
    }
};

}
