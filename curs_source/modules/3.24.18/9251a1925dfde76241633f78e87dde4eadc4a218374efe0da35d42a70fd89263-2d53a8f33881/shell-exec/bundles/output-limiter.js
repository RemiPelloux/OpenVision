import { coalesceAdjacentShellOutputEvents } from "../../bidi_connect_exports.js";
import { init_dist3 } from "../../utils/dist/index.js";
var SHELL_OUTPUT_LIMITER_DEFAULTS, ShellOutputLimiter;
export { SHELL_OUTPUT_LIMITER_DEFAULTS, ShellOutputLimiter };
var __wakaru_init_output_limiter_initialized = false;
export function init_output_limiter() {
if (__wakaru_init_output_limiter_initialized) return;
__wakaru_init_output_limiter_initialized = true;
"use strict";
init_dist3();
SHELL_OUTPUT_LIMITER_DEFAULTS = {
    flushIntervalMs: 50,
    maxBufferedBytes: 256 * 1024
};
ShellOutputLimiter = class {
    writable;
    pending = [];
    pendingBytes = 0;
    flushTimeout;
    flushPromise;
    flushIntervalMs;
    maxBufferedBytes;
    constructor(writable, options2){
        this.writable = writable;
        this.flushIntervalMs = options2?.flushIntervalMs ?? SHELL_OUTPUT_LIMITER_DEFAULTS.flushIntervalMs;
        this.maxBufferedBytes = options2?.maxBufferedBytes ?? SHELL_OUTPUT_LIMITER_DEFAULTS.maxBufferedBytes;
    }
    async push(type2, data) {
        if (data.length === 0) return;
        this.pending.push({
            type: type2,
            data
        });
        this.pendingBytes += data.length;
        if (this.pendingBytes >= this.maxBufferedBytes) {
            await this.flush();
            return;
        }
        this.scheduleFlush();
    }
    async flush() {
        this.clearFlushTimeout();
        if (this.flushPromise) {
            await this.flushPromise;
            if (this.pendingBytes > 0) {
                await this.flush();
            }
            return;
        }
        if (this.pendingBytes === 0) return;
        const pendingEvents = this.pending;
        this.pending = [];
        this.pendingBytes = 0;
        this.flushPromise = this.writeBufferedOutput(pendingEvents);
        try {
            await this.flushPromise;
        } finally{
            this.flushPromise = void 0;
        }
    }
    async close() {
        await this.flush();
    }
    scheduleFlush() {
        if (this.flushTimeout !== void 0) return;
        this.flushTimeout = setTimeout(()=>{
            this.flushTimeout = void 0;
            void this.flush();
        }, this.flushIntervalMs);
    }
    clearFlushTimeout() {
        if (this.flushTimeout === void 0) return;
        clearTimeout(this.flushTimeout);
        this.flushTimeout = void 0;
    }
    async writeBufferedOutput(events) {
        for (const event of coalesceAdjacentShellOutputEvents(events)){
            try {
                await this.writable.write(event);
            } catch  {}
        }
    }
};

}
