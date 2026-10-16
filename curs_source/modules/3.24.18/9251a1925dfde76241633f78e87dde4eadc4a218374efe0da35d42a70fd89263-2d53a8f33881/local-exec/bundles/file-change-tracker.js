import { writeText } from "../../dist_exports.js";
import { init_dist3 } from "../../utils/dist/index.js";
var import_promises22, FileChangeTracker;
export { FileChangeTracker, import_promises22 };
var __wakaru_init_file_change_tracker_initialized = false;
export function init_file_change_tracker() {
if (__wakaru_init_file_change_tracker_initialized) return;
__wakaru_init_file_change_tracker_initialized = true;
"use strict";
import_promises22 = require("node:fs/promises");
init_dist3();
FileChangeTracker = class {
    constructor(workspacePath){
        this.workspacePath = workspacePath;
        this.changes = new Map();
        this.listeners = new Set();
    }
    subscribe(listener) {
        this.listeners.add(listener);
        return ()=>{
            this.listeners.delete(listener);
        };
    }
    notify(change) {
        for (const listener of this.listeners){
            listener(change);
        }
    }
    async trackChange(path64, before, after, metadata) {
        const existingChange = this.changes.get(path64);
        if (existingChange) {
            const originalBefore = existingChange.before;
            const mergedMetadata = metadata || existingChange.metadata;
            if (originalBefore === after || originalBefore === void 0 && after === void 0) {
                this.changes.delete(path64);
                this.notify();
            } else {
                const change = {
                    path: path64,
                    before: originalBefore,
                    after,
                    metadata: mergedMetadata
                };
                this.changes.set(path64, change);
                this.notify(change);
            }
        } else {
            const change = {
                path: path64,
                before,
                after,
                metadata
            };
            this.changes.set(path64, change);
            this.notify(change);
        }
    }
    getChanges() {
        return Array.from(this.changes.values());
    }
    getChange(path64) {
        return this.changes.get(path64);
    }
    hasChange(path64) {
        return this.changes.has(path64);
    }
    accept(path64) {
        const change = this.changes.get(path64);
        this.changes.delete(path64);
        this.notify(change);
    }
    acceptAll() {
        this.changes.clear();
        this.notify();
    }
    async reject(path64) {
        const change = this.changes.get(path64);
        if (!change) {
            return;
        }
        try {
            if (change.before === void 0 && change.after !== void 0) {
                await (0, import_promises22.unlink)(path64);
            } else if (change.before !== void 0 && change.after === void 0) {
                await writeText(path64, change.before, this.workspacePath);
            } else if (change.before !== void 0 && change.after !== void 0) {
                await writeText(path64, change.before, this.workspacePath);
            }
        } catch  {} finally{
            this.changes.delete(path64);
            this.notify(change);
        }
    }
    async rejectAll() {
        const paths = Array.from(this.changes.keys());
        await Promise.all(paths.map((path64)=>this.reject(path64)));
    }
    clear() {
        const change = this.changes.values().next().value;
        this.changes.clear();
        this.notify(change);
    }
    get size() {
        return this.changes.size;
    }
    dispose() {
        this.changes.clear();
        this.listeners.clear();
    }
};

}
