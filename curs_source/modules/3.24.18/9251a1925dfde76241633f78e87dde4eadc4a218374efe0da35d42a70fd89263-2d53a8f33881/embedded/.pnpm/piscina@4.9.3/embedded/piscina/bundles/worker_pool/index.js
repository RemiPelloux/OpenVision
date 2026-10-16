import { require_errors4 } from "../errors.js";
import { require_symbols11 } from "../symbols.js";
var __wakaru_require_worker_pool_cache;
export function require_worker_pool() {
if (__wakaru_require_worker_pool_cache) return __wakaru_require_worker_pool_cache;
var exports2 = {};
__wakaru_require_worker_pool_cache = exports2;
"use strict";
var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
    return mod2 && mod2.__esModule ? mod2 : {
        "default": mod2
    };
};
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.WorkerInfo = exports2.AsynchronouslyCreatedResourcePool = void 0;
var node_worker_threads_1 = require("node:worker_threads");
var node_assert_1 = __importDefault(require("node:assert"));
var errors_1 = require_errors4();
var symbols_1 = require_symbols11();
var AsynchronouslyCreatedResource = class {
    constructor(){
        this.onreadyListeners = [];
    }
    markAsReady() {
        const listeners = this.onreadyListeners;
        (0, node_assert_1.default)(listeners !== null);
        this.onreadyListeners = null;
        for (const listener of listeners){
            listener();
        }
    }
    isReady() {
        return this.onreadyListeners === null;
    }
    onReady(fn) {
        if (this.onreadyListeners === null) {
            fn();
            return;
        }
        this.onreadyListeners.push(fn);
    }
};
var AsynchronouslyCreatedResourcePool = class {
    constructor(maximumUsage){
        this.pendingItems = new Set();
        this.readyItems = new Set();
        this.maximumUsage = maximumUsage;
        this.onAvailableListeners = [];
    }
    add(item) {
        this.pendingItems.add(item);
        item.onReady(()=>{
            if (this.pendingItems.has(item)) {
                this.pendingItems.delete(item);
                this.readyItems.add(item);
                this.maybeAvailable(item);
            }
        });
    }
    delete(item) {
        this.pendingItems.delete(item);
        this.readyItems.delete(item);
    }
    findAvailable() {
        let minUsage = this.maximumUsage;
        let candidate = null;
        for (const item of this.readyItems){
            const usage = item.currentUsage();
            if (usage === 0) return item;
            if (usage < minUsage) {
                candidate = item;
                minUsage = usage;
            }
        }
        return candidate;
    }
    *[Symbol.iterator]() {
        yield* this.pendingItems;
        yield* this.readyItems;
    }
    get size() {
        return this.pendingItems.size + this.readyItems.size;
    }
    maybeAvailable(item) {
        if (item.currentUsage() < this.maximumUsage) {
            for (const listener of this.onAvailableListeners){
                listener(item);
            }
        }
    }
    onAvailable(fn) {
        this.onAvailableListeners.push(fn);
    }
};
exports2.AsynchronouslyCreatedResourcePool = AsynchronouslyCreatedResourcePool;
var WorkerInfo = class extends AsynchronouslyCreatedResource {
    constructor(worker, port, onMessage){
        super();
        this.idleTimeout = null;
        this.lastSeenResponseCount = 0;
        this.worker = worker;
        this.port = port;
        this.port.on("message", (message)=>this._handleResponse(message));
        this.onMessage = onMessage;
        this.taskInfos = new Map();
        this.sharedBuffer = new Int32Array(new SharedArrayBuffer(symbols_1.kFieldCount * Int32Array.BYTES_PER_ELEMENT));
    }
    destroy() {
        this.worker.terminate();
        this.port.close();
        this.clearIdleTimeout();
        for (const taskInfo of this.taskInfos.values()){
            taskInfo.done(errors_1.Errors.ThreadTermination());
        }
        this.taskInfos.clear();
    }
    clearIdleTimeout() {
        if (this.idleTimeout !== null) {
            clearTimeout(this.idleTimeout);
            this.idleTimeout = null;
        }
    }
    ref() {
        this.port.ref();
        return this;
    }
    unref() {
        this.port.unref();
        return this;
    }
    _handleResponse(message) {
        this.onMessage(message);
        if (this.taskInfos.size === 0) {
            this.unref();
        }
    }
    postTask(taskInfo) {
        (0, node_assert_1.default)(!this.taskInfos.has(taskInfo.taskId));
        const message = {
            task: taskInfo.releaseTask(),
            taskId: taskInfo.taskId,
            filename: taskInfo.filename,
            name: taskInfo.name
        };
        try {
            this.port.postMessage(message, taskInfo.transferList);
        } catch (err) {
            taskInfo.done(err);
            return;
        }
        taskInfo.workerInfo = this;
        this.taskInfos.set(taskInfo.taskId, taskInfo);
        this.ref();
        this.clearIdleTimeout();
        Atomics.add(this.sharedBuffer, symbols_1.kRequestCountField, 1);
        Atomics.notify(this.sharedBuffer, symbols_1.kRequestCountField, 1);
    }
    processPendingMessages() {
        const actualResponseCount = Atomics.load(this.sharedBuffer, symbols_1.kResponseCountField);
        if (actualResponseCount !== this.lastSeenResponseCount) {
            this.lastSeenResponseCount = actualResponseCount;
            let entry;
            while((entry = (0, node_worker_threads_1.receiveMessageOnPort)(this.port)) !== void 0){
                this._handleResponse(entry.message);
            }
        }
    }
    isRunningAbortableTask() {
        if (this.taskInfos.size !== 1) return false;
        const [[, task]] = this.taskInfos;
        return task.abortSignal !== null;
    }
    currentUsage() {
        if (this.isRunningAbortableTask()) return Infinity;
        return this.taskInfos.size;
    }
};
exports2.WorkerInfo = WorkerInfo;

return exports2;
}
