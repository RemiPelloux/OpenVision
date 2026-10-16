import { require_symbols6 } from "../core/symbols.js";
import { require_dispatcher_base2 } from "./dispatcher-base.js";
import { require_fixed_queue2 } from "./fixed-queue.js";
import { require_pool_stats2 } from "./pool-stats.js";
var __wakaru_require_pool_base2_cache;
export function require_pool_base2() {
if (__wakaru_require_pool_base2_cache) return __wakaru_require_pool_base2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_pool_base2_cache = module2;
"use strict";
var DispatcherBase = require_dispatcher_base2();
var FixedQueue2 = require_fixed_queue2();
var { kConnected, kSize, kRunning, kPending, kQueued, kBusy, kFree, kUrl, kClose, kDestroy, kDispatch } = require_symbols6();
var PoolStats = require_pool_stats2();
var kClients = Symbol("clients");
var kNeedDrain = Symbol("needDrain");
var kQueue = Symbol("queue");
var kClosedResolve = Symbol("closed resolve");
var kOnDrain = Symbol("onDrain");
var kOnConnect = Symbol("onConnect");
var kOnDisconnect = Symbol("onDisconnect");
var kOnConnectionError = Symbol("onConnectionError");
var kGetDispatcher = Symbol("get dispatcher");
var kAddClient = Symbol("add client");
var kRemoveClient = Symbol("remove client");
var kStats = Symbol("stats");
var PoolBase = class extends DispatcherBase {
    constructor(opts){
        super(opts);
        this[kQueue] = new FixedQueue2();
        this[kClients] = [];
        this[kQueued] = 0;
        const pool = this;
        this[kOnDrain] = function onDrain(origin, targets) {
            const queue = pool[kQueue];
            let needDrain = false;
            while(!needDrain){
                const item = queue.shift();
                if (!item) {
                    break;
                }
                pool[kQueued]--;
                needDrain = !this.dispatch(item.opts, item.handler);
            }
            this[kNeedDrain] = needDrain;
            if (!this[kNeedDrain] && pool[kNeedDrain]) {
                pool[kNeedDrain] = false;
                pool.emit("drain", origin, [
                    pool,
                    ...targets
                ]);
            }
            if (pool[kClosedResolve] && queue.isEmpty()) {
                Promise.all(pool[kClients].map((c)=>c.close())).then(pool[kClosedResolve]);
            }
        };
        this[kOnConnect] = (origin, targets)=>{
            pool.emit("connect", origin, [
                pool,
                ...targets
            ]);
        };
        this[kOnDisconnect] = (origin, targets, err)=>{
            pool.emit("disconnect", origin, [
                pool,
                ...targets
            ], err);
        };
        this[kOnConnectionError] = (origin, targets, err)=>{
            pool.emit("connectionError", origin, [
                pool,
                ...targets
            ], err);
        };
        this[kStats] = new PoolStats(this);
    }
    get [kBusy]() {
        return this[kNeedDrain];
    }
    get [kConnected]() {
        return this[kClients].filter((client)=>client[kConnected]).length;
    }
    get [kFree]() {
        return this[kClients].filter((client)=>client[kConnected] && !client[kNeedDrain]).length;
    }
    get [kPending]() {
        let ret = this[kQueued];
        for (const { [kPending]: pending } of this[kClients]){
            ret += pending;
        }
        return ret;
    }
    get [kRunning]() {
        let ret = 0;
        for (const { [kRunning]: running } of this[kClients]){
            ret += running;
        }
        return ret;
    }
    get [kSize]() {
        let ret = this[kQueued];
        for (const { [kSize]: size } of this[kClients]){
            ret += size;
        }
        return ret;
    }
    get stats() {
        return this[kStats];
    }
    async [kClose]() {
        if (this[kQueue].isEmpty()) {
            await Promise.all(this[kClients].map((c)=>c.close()));
        } else {
            await new Promise((resolve36)=>{
                this[kClosedResolve] = resolve36;
            });
        }
    }
    async [kDestroy](err) {
        while(true){
            const item = this[kQueue].shift();
            if (!item) {
                break;
            }
            item.handler.onError(err);
        }
        await Promise.all(this[kClients].map((c)=>c.destroy(err)));
    }
    [kDispatch](opts, handler) {
        const dispatcher = this[kGetDispatcher]();
        if (!dispatcher) {
            this[kNeedDrain] = true;
            this[kQueue].push({
                opts,
                handler
            });
            this[kQueued]++;
        } else if (!dispatcher.dispatch(opts, handler)) {
            dispatcher[kNeedDrain] = true;
            this[kNeedDrain] = !this[kGetDispatcher]();
        }
        return !this[kNeedDrain];
    }
    [kAddClient](client) {
        client.on("drain", this[kOnDrain]).on("connect", this[kOnConnect]).on("disconnect", this[kOnDisconnect]).on("connectionError", this[kOnConnectionError]);
        this[kClients].push(client);
        if (this[kNeedDrain]) {
            queueMicrotask(()=>{
                if (this[kNeedDrain]) {
                    this[kOnDrain](client[kUrl], [
                        this,
                        client
                    ]);
                }
            });
        }
        return this;
    }
    [kRemoveClient](client) {
        client.close(()=>{
            const idx = this[kClients].indexOf(client);
            if (idx !== -1) {
                this[kClients].splice(idx, 1);
            }
        });
        this[kNeedDrain] = this[kClients].some((dispatcher)=>!dispatcher[kNeedDrain] && dispatcher.closed !== true && dispatcher.destroyed !== true);
    }
};
module2.exports = {
    PoolBase,
    kClients,
    kNeedDrain,
    kAddClient,
    kRemoveClient,
    kGetDispatcher
};

return module2.exports;
}
