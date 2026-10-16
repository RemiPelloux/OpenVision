import { Ga, Tr } from "./Iwo.js";
import { nW, qn } from "./async.js";
import { kl } from "./browser.ts";
import { _ze, ixn } from "./browser_2.ts";
import { wX } from "./gYa.js";
import { cP1 } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { C2 } from "./workspaceProjectPaths.js";
var xug;
export { xug };
var __wakaru_w_k_initialized = false;
export function w_k() {
if (__wakaru_w_k_initialized) return;
__wakaru_w_k_initialized = true;
"use strict";
E(), _ze(), qn(), fn(), kl(), Ga(), C2(), xug = class {
    constructor(t, e, n, i){
        this.requestId = t, this.fileAppendService = e, this.workspaceContextService = n, this.pathService = i, this.pendingLines = [], this.logFilePath = null, this.initialized = !1, this.initPromise = null, this.flushDelayer = new nW(100);
    }
    async initialize() {
        if (!this.initialized) {
            if (this.initPromise) return this.initPromise;
            this.initPromise = this.doInitialize(), await this.initPromise;
        }
    }
    async doInitialize() {
        const t = await wX(this.workspaceContextService.getWorkspace(), this.pathService);
        if (t.scheme !== "file") {
            console.warn("[nal-trace] Non-local Cursor project directory, skipping trace logging");
            return;
        }
        this.logFilePath = rt.joinPath(t, "nal-traces", ixn(this.requestId), "client.ndjson").fsPath, await this.fileAppendService.ensureDir(this.logFilePath), this.initialized = !0;
    }
    logMessage(t, e) {
        const { messageCase: n, messageSubCase: i } = cP1(t), r = t.toJson(), s = JSON.stringify(r), o = {
            prefix: "[nal-trace]",
            timestamp: new Date().toISOString(),
            requestId: this.requestId,
            direction: e,
            messageCase: n,
            messageSubCase: i,
            messageContent: r,
            messageBinarySizeBytes: t.toBinary().byteLength,
            messageJsonSizeBytes: Tr.fromString(s).byteLength
        }, a = JSON.stringify(o);
        this.pendingLines.push(a), this.flushDelayer.isTriggered() || this.flushDelayer.trigger(()=>this.flush());
    }
    async flush() {
        if (await this.initialize(), !this.logFilePath || this.pendingLines.length === 0) return;
        const t = this.pendingLines;
        this.pendingLines = [];
        const e = t.join(`
`) + `
`;
        try {
            await this.fileAppendService.appendFile(this.logFilePath, e);
        } catch (n) {
            console.error("[nal-trace] Failed to write trace log:", n), this.pendingLines = [
                ...t,
                ...this.pendingLines
            ];
        }
    }
    async finalize() {
        this.flushDelayer.cancel(), await this.flushDelayer.trigger(()=>this.flush(), 0);
    }
};

}
