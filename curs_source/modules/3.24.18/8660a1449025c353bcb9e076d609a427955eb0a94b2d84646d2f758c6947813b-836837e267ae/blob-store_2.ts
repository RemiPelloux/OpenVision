import { OT } from "./index_5.ts";
import { $v, ppe } from "./ipa.js";
import { E } from "./tslib.es6.js";
var D3v, _ic;
export { D3v, _ic };
var __wakaru_N3v_initialized = false;
export function N3v() {
if (__wakaru_N3v_initialized) return;
__wakaru_N3v_initialized = true;
"use strict";
E(), OT(), D3v = class extends Error {
    constructor(t){
        super(`Claude Code blob not found: ${$v(t)}`), this.name = "ClaudeCodeBlobNotFoundError";
    }
}, _ic = class {
    constructor(){
        this.blobsByIdHex = new Map;
    }
    async addBlob(t) {
        const e = await ppe(t);
        return this.blobsByIdHex.set($v(e), new Uint8Array(t)), e;
    }
    async getBlob(t, e) {
        const n = this.blobsByIdHex.get($v(e));
        if (!n) throw new D3v(e);
        return n;
    }
    hasBlobCached(t) {
        return this.blobsByIdHex.has($v(t));
    }
    snapshotEntries() {
        return Array.from(this.blobsByIdHex.entries()).map(([t, e])=>[
                t,
                new Uint8Array(e)
            ]);
    }
};

}
