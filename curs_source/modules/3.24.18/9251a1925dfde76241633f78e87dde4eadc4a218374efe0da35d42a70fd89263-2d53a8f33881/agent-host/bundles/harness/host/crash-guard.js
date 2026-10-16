import { ATTEMPTS_SCHEMA, init_attempts } from "../attempts.js";
import { init_reverted } from "../reverted.js";
import { heldBy, messageOf2, readAllAttempts, readReverted, recordRevert, removeAttempts, revertedPath, writeAttempts } from "../../../../tree_chunk_napi_exports.js";
var CRASH_LOOP_WINDOW_MS, CRASH_LOOP_ATTEMPTS, HarnessCrashGuard;
export { CRASH_LOOP_ATTEMPTS, CRASH_LOOP_WINDOW_MS, HarnessCrashGuard };
var __wakaru_init_crash_guard_initialized = false;
export function init_crash_guard() {
if (__wakaru_init_crash_guard_initialized) return;
__wakaru_init_crash_guard_initialized = true;
"use strict";
init_attempts();
init_reverted();
CRASH_LOOP_WINDOW_MS = 10 * 6e4;
CRASH_LOOP_ATTEMPTS = 2;
HarnessCrashGuard = class {
    constructor(options2){
        this.options = options2;
        this.mine = new Map();
        this.finished = new Set();
        this.said = new Set();
    }
    held(install) {
        try {
            return heldBy(readReverted(this.options.rootDir), {
                install,
                clientVersion: this.options.clientVersion,
                now: this.options.now()
            });
        } catch (error3) {
            this.sayOnce(`ignoring ${revertedPath(this.options.rootDir)}: ${messageOf2(error3)}`);
            return void 0;
        }
    }
    hold(revert) {
        const now2 = this.options.now();
        const { clientVersion } = this.options;
        const record3 = {
            ...revert,
            ...clientVersion === void 0 ? {} : {
                clientVersion
            },
            revertedAt: new Date(now2).toISOString(),
            pid: process.pid
        };
        let earlier = [];
        try {
            earlier = readReverted(this.options.rootDir)?.reverts ?? [];
        } catch (error3) {
            this.sayOnce(`replacing ${revertedPath(this.options.rootDir)}: ${messageOf2(error3)}`);
        }
        try {
            recordRevert(this.options.rootDir, earlier, record3, now2);
        } catch (error3) {
            this.sayOnce(`revert of ${revert.generation.slice(0, 12)} not recorded: ${messageOf2(error3)}`);
            this.options.onWriteFailed?.("reverted", error3);
        }
        return record3;
    }
    crashLoop({ generation, install, label }) {
        const now2 = this.options.now();
        const dead = this.deadRecords().filter((record3)=>record3.attempts.some((attempt)=>attempt.install === install && now2 - Date.parse(attempt.since) < CRASH_LOOP_WINDOW_MS));
        if (dead.length < CRASH_LOOP_ATTEMPTS) {
            return void 0;
        }
        this.options.log(`${dead.length} extension hosts (pid ${dead.map((record3)=>record3.pid).join(", ")}) died with ${generation.slice(0, 12)} unfinished within ${CRASH_LOOP_WINDOW_MS / 6e4} minutes`);
        return this.hold({
            generation,
            label: label(),
            install,
            trigger: "crash_loop"
        });
    }
    lostHosts() {
        const now2 = this.options.now();
        const lost = [];
        for (const record3 of this.deadRecords()){
            if (record3.attempts.every((attempt)=>now2 - Date.parse(attempt.since) >= CRASH_LOOP_WINDOW_MS) && record3.reportedBy !== void 0) {
                this.remove(record3.pid);
                continue;
            }
            if (record3.reportedBy !== void 0) {
                continue;
            }
            for (const attempt of record3.attempts){
                lost.push({
                    pid: record3.pid,
                    generation: attempt.generation,
                    phase: attempt.phase
                });
            }
            this.write({
                ...record3,
                reportedBy: process.pid
            });
        }
        return lost;
    }
    begin({ generation, install }, phase) {
        const key = `${install}:${phase}`;
        const open7 = this.mine.get(key);
        if (open7 !== void 0) {
            open7.open += 1;
            return;
        }
        this.mine.set(key, {
            attempt: {
                generation,
                install,
                phase,
                since: new Date(this.options.now()).toISOString()
            },
            open: 1
        });
        this.writeMine();
    }
    end(install, phase) {
        const key = `${install}:${phase}`;
        const open7 = this.mine.get(key);
        if (open7 === void 0) {
            return;
        }
        open7.open -= 1;
        if (open7.open <= 0) {
            this.mine.delete(key);
            this.writeMine();
        }
    }
    turnStarted(module2) {
        if (!this.finished.has(module2.install)) {
            this.begin(module2, "turn");
        }
    }
    turnSettled(install) {
        this.end(install, "turn");
    }
    turnCompleted(install) {
        this.finished.add(install);
        if (this.mine.delete(`${install}:turn`)) {
            this.writeMine();
        }
    }
    removeMine() {
        this.remove(process.pid);
    }
    deadRecords() {
        let read;
        try {
            read = readAllAttempts(this.options.rootDir);
        } catch (error3) {
            this.sayOnce(`attempts not read: ${messageOf2(error3)}`);
            return [];
        }
        for (const problem of read.unreadable){
            this.sayOnce(`ignoring ${problem}`);
        }
        return read.records.filter((record3)=>record3.pid !== process.pid && !this.options.isProcessAlive(record3.pid));
    }
    writeMine() {
        this.write({
            schema: ATTEMPTS_SCHEMA,
            pid: process.pid,
            attempts: [
                ...this.mine.values()
            ].map(({ attempt })=>attempt)
        });
    }
    write(record3) {
        try {
            writeAttempts(this.options.rootDir, record3);
        } catch (error3) {
            this.sayOnce(`attempts of pid ${record3.pid} not written: ${messageOf2(error3)}`);
            this.options.onWriteFailed?.("attempts", error3);
        }
    }
    remove(pid) {
        try {
            removeAttempts(this.options.rootDir, pid);
        } catch (error3) {
            this.sayOnce(`attempts of pid ${pid} not removed: ${messageOf2(error3)}`);
            this.options.onWriteFailed?.("attempts", error3);
        }
    }
    sayOnce(line) {
        if (!this.said.has(line)) {
            this.said.add(line);
            this.options.log(line);
        }
    }
};

}
