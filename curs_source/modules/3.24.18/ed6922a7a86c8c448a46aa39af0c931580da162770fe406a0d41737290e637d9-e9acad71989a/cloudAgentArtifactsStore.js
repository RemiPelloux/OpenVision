import { x } from "./tslib.es6.js";
var wEh;
export { wEh };
var __wakaru_SJv_initialized = false;
export function SJv() {
if (__wakaru_SJv_initialized) return;
__wakaru_SJv_initialized = true;
"use strict";
x(), wEh = class {
    constructor(e, t){
        this.agentId = e, this.artifactCacheService = t;
    }
    async listArtifacts() {
        try {
            return await this.artifactCacheService.listArtifactsCached(this.agentId);
        } catch  {
            return [];
        }
    }
    async getArtifactBytes(e) {
        return this.artifactCacheService.fetchArtifactBytes(this.agentId, e);
    }
};

}
