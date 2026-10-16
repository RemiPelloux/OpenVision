import { createNoopHeadlessMcpLease, sameRoots, uniqueNonEmpty } from "../daemon_metrics_exports.js";
var CatalogRootMcpLease;
export { CatalogRootMcpLease };
var __wakaru_init_catalog_root_mcp_lease_initialized = false;
export function init_catalog_root_mcp_lease() {
if (__wakaru_init_catalog_root_mcp_lease_initialized) return;
__wakaru_init_catalog_root_mcp_lease_initialized = true;
"use strict";
CatalogRootMcpLease = class {
    constructor(createLease, initial, initialRoots, options2){
        this.createLease = createLease;
        this.pendingRoots = [];
        this.disposed = false;
        this.started = false;
        this.listeners = new Set();
        this.inner = initial;
        this.roots = uniqueNonEmpty(initialRoots);
        this.allowCreate = options2?.deferCreate !== true;
        this.started = options2?.deferCreate !== true;
    }
    async start(next = [], options2) {
        this.allowCreate = true;
        const queued = this.pendingRoots;
        this.pendingRoots = [];
        await this.replaceRoots(uniqueNonEmpty([
            ...this.roots,
            ...queued,
            ...next
        ]), options2);
    }
    async ensureRoots(next) {
        await this.enqueue(async ()=>{
            if (this.disposed) {
                return;
            }
            const merged = uniqueNonEmpty([
                ...this.roots,
                ...this.pendingRoots,
                ...next
            ]);
            if (!this.allowCreate) {
                this.pendingRoots = merged;
                return;
            }
            await this.replaceInner(merged);
        });
    }
    async setRoots(next) {
        await this.replaceRoots(uniqueNonEmpty(next));
    }
    async rebuild() {
        let failure2;
        await this.enqueue(async ()=>{
            if (this.disposed || !this.allowCreate || !this.started) {
                return;
            }
            const previous = this.inner;
            let created;
            try {
                created = await this.createLease(this.roots);
            } catch (error3) {
                failure2 = {
                    error: error3
                };
                this.inner = createNoopHeadlessMcpLease();
                this.attachInnerChange();
                await previous.dispose();
                this.fireDidChange();
                return;
            }
            if (this.disposed) {
                await created.dispose();
                return;
            }
            this.inner = created;
            this.attachInnerChange();
            await previous.dispose();
            this.fireDidChange();
        });
        if (failure2 !== void 0) {
            throw failure2.error;
        }
    }
    async getTools(ctx) {
        await this.awaitRefresh();
        return this.inner.getTools(ctx);
    }
    async getToolSet(ctx) {
        await this.awaitRefresh();
        return this.inner.getToolSet(ctx);
    }
    async getClients(ctx) {
        await this.awaitRefresh();
        return this.inner.getClients(ctx);
    }
    async getClient(ctx, name17) {
        await this.awaitRefresh();
        return this.inner.getClient(ctx, name17);
    }
    async getInstructions(ctx) {
        await this.awaitRefresh();
        return this.inner.getInstructions(ctx);
    }
    async getToolsForServers(ctx, serverIdentifiers) {
        await this.awaitRefresh();
        return this.inner.getToolsForServers(ctx, serverIdentifiers);
    }
    onDidChange(listener) {
        this.listeners.add(listener);
        if (this.innerChangeDisposable === void 0) {
            this.attachInnerChange();
        }
        return {
            dispose: ()=>{
                this.listeners.delete(listener);
            }
        };
    }
    async dispose() {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        this.innerChangeDisposable?.dispose();
        this.innerChangeDisposable = void 0;
        this.listeners.clear();
        if (this.refresh !== void 0) {
            const settled = await Promise.allSettled([
                this.refresh
            ]);
            const outcome = settled[0];
            if (outcome?.status === "rejected") {
                void outcome.reason;
            }
        }
        await this.inner.dispose();
    }
    async replaceRoots(next, options2) {
        await this.enqueue(async ()=>{
            if (this.disposed) {
                return;
            }
            if (!this.allowCreate) {
                this.pendingRoots = next;
                return;
            }
            await this.replaceInner(next, options2);
        });
    }
    async replaceInner(next, options2) {
        if (this.started && sameRoots(next, this.roots) && options2?.force !== true) {
            return;
        }
        try {
            const created = await this.createLease(next);
            if (this.disposed) {
                await created.dispose();
                return;
            }
            const previous = this.inner;
            this.inner = created;
            this.roots = next;
            this.pendingRoots = [];
            this.started = true;
            this.attachInnerChange();
            await previous.dispose();
            this.fireDidChange();
        } catch (error3) {
            this.pendingRoots = uniqueNonEmpty([
                ...this.pendingRoots,
                ...next
            ]);
            void (error3 instanceof Error ? error3.message : error3);
        }
    }
    attachInnerChange() {
        this.innerChangeDisposable?.dispose();
        this.innerChangeDisposable = this.inner.onDidChange(()=>{
            this.fireDidChange();
        });
    }
    fireDidChange() {
        for (const listener of this.listeners){
            listener();
        }
    }
    async enqueue(run) {
        this.refresh = (this.refresh ?? Promise.resolve()).then(run, run);
        await this.refresh;
    }
    async awaitRefresh() {
        if (this.refresh !== void 0) {
            await this.refresh;
        }
    }
};

}
