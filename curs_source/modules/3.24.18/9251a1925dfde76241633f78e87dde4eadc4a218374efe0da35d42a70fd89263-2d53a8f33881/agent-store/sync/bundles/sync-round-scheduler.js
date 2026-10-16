import { isPathLane } from "../../../tree_chunk_napi_exports.js";
var ROUND_ABANDONED, SyncRoundStoodAsideError, SyncRoundScheduler;
export { ROUND_ABANDONED, SyncRoundScheduler, SyncRoundStoodAsideError };
var __wakaru_init_sync_round_scheduler_initialized = false;
export function init_sync_round_scheduler() {
if (__wakaru_init_sync_round_scheduler_initialized) return;
__wakaru_init_sync_round_scheduler_initialized = true;
"use strict";
ROUND_ABANDONED = Symbol("sync-round-abandoned");
SyncRoundStoodAsideError = class extends Error {
    constructor(){
        super("Agent store full sync stood aside for path sync");
        this.name = "SyncRoundStoodAsideError";
    }
};
SyncRoundScheduler = class {
    constructor(){
        this.pending = [];
        this.yielding = false;
    }
    enqueue(kind, run) {
        return new Promise((resolve36, reject2)=>{
            const entry = {
                kind,
                run,
                resolve: resolve36,
                reject: reject2
            };
            if (isPathLane(kind)) {
                if (kind === "path") {
                    this.fullRoundStandAside?.abort(new SyncRoundStoodAsideError());
                }
                const fullIdx = this.pending.findIndex((item)=>item.kind === "full");
                if (fullIdx === -1) {
                    this.pending.push(entry);
                } else {
                    this.pending.splice(fullIdx, 0, entry);
                }
            } else {
                this.pending.push(entry);
            }
            void this.ensurePump();
        });
    }
    hasPendingPathRounds() {
        return this.pending.some((entry)=>isPathLane(entry.kind));
    }
    async yieldToPathRounds() {
        const fullRoundRunning = this.fullRoundStandAside !== void 0;
        if (!fullRoundRunning || this.yielding || !this.hasPendingPathRounds()) {
            return;
        }
        this.yielding = true;
        try {
            for(;;){
                if (this.fullRoundStandAside?.signal.aborted === true) {
                    return;
                }
                const idx = this.pending.findIndex((entry)=>isPathLane(entry.kind));
                if (idx === -1) {
                    return;
                }
                const [next] = this.pending.splice(idx, 1);
                try {
                    next.resolve(await next.run(void 0));
                } catch (error3) {
                    next.reject(error3);
                }
            }
        } finally{
            this.yielding = false;
        }
    }
    abandonInFlight() {
        const pending = this.pending.splice(0);
        for (const entry of pending){
            entry.reject(new Error("Agent store sync round abandoned by watchdog"));
        }
        this.abandonInFlightReject?.(ROUND_ABANDONED);
        this.abandonInFlightReject = void 0;
        this.fullRoundStandAside = void 0;
    }
    async drain() {
        while(this.pending.length > 0 || this.pumping !== void 0){
            await (this.pumping ?? Promise.resolve());
        }
    }
    ensurePump() {
        if (this.pumping !== void 0) {
            return;
        }
        this.pumping = this.pump().finally(()=>{
            this.pumping = void 0;
            if (this.pending.length > 0) {
                this.ensurePump();
            }
        });
    }
    async pump() {
        while(this.pending.length > 0){
            const next = this.pending.shift();
            const standAside = next.kind === "full" ? new AbortController() : void 0;
            if (standAside !== void 0) {
                this.fullRoundStandAside = standAside;
            }
            const runPromise = next.run(standAside?.signal);
            const abandonPromise = new Promise((_2, reject2)=>{
                this.abandonInFlightReject = reject2;
            });
            try {
                const summary = await Promise.race([
                    runPromise,
                    abandonPromise
                ]);
                next.resolve(summary);
            } catch (error3) {
                if (error3 === ROUND_ABANDONED) {
                    void runPromise.then(next.resolve, next.reject);
                    break;
                }
                next.reject(error3);
            } finally{
                if (this.abandonInFlightReject !== void 0) {
                    this.abandonInFlightReject = void 0;
                }
                if (this.fullRoundStandAside === standAside) {
                    this.fullRoundStandAside = void 0;
                }
            }
        }
    }
};

}
