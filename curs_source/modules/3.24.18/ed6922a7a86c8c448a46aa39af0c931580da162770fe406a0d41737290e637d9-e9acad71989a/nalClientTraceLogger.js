import { Ahv } from "./De_3.js";
import { Fo, wi } from "./HVr.js";
import { TO, bn } from "./async.js";
import { Yu } from "./browser.ts";
import { ett, lVt } from "./browser_2.ts";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { NR } from "./workspaceProjectPaths.js";
import { $$ } from "./xmo.js";
var d0h;
export { d0h };
var __wakaru_vXv_initialized = false;
export function vXv() {
if (__wakaru_vXv_initialized) return;
__wakaru_vXv_initialized = true;
"use strict";
x(), ett(), bn(), Qt(), Yu(), Fo(), NR(), d0h = class {
    constructor(e, t, n, i){
        this.requestId = e, this.fileAppendService = t, this.workspaceContextService = n, this.pathService = i, this.pendingLines = [], this.logFilePath = null, this.initialized = !1, this.initPromise = null, this.flushDelayer = new TO(100);
    }
    async initialize() {
        if (!this.initialized) {
            if (this.initPromise) return this.initPromise;
            this.initPromise = this.doInitialize(), await this.initPromise;
        }
    }
    async doInitialize() {
        const e = await $$(this.workspaceContextService.getWorkspace(), this.pathService);
        if (e.scheme !== "file") {
            console.warn("[nal-trace] Non-local Cursor project directory, skipping trace logging");
            return;
        }
        this.logFilePath = Ee.joinPath(e, "nal-traces", lVt(this.requestId), "client.ndjson").fsPath, await this.fileAppendService.ensureDir(this.logFilePath), this.initialized = !0;
    }
    logMessage(e, t) {
        const { messageCase: n, messageSubCase: i } = Ahv(e), r = e.toJson(), s = JSON.stringify(r), o = {
            prefix: "[nal-trace]",
            timestamp: new Date().toISOString(),
            requestId: this.requestId,
            direction: t,
            messageCase: n,
            messageSubCase: i,
            messageContent: r,
            messageBinarySizeBytes: e.toBinary().byteLength,
            messageJsonSizeBytes: wi.fromString(s).byteLength
        }, a = JSON.stringify(o);
        this.pendingLines.push(a), this.flushDelayer.isTriggered() || this.flushDelayer.trigger(()=>this.flush());
    }
    async flush() {
        if (await this.initialize(), !this.logFilePath || this.pendingLines.length === 0) return;
        const e = this.pendingLines;
        this.pendingLines = [];
        const t = e.join(`
`) + `
`;
        try {
            await this.fileAppendService.appendFile(this.logFilePath, t);
        } catch (n) {
            console.error("[nal-trace] Failed to write trace log:", n), this.pendingLines = [
                ...e,
                ...this.pendingLines
            ];
        }
    }
    async finalize() {
        this.flushDelayer.cancel(), await this.flushDelayer.trigger(()=>this.flush(), 0);
    }
};

}
