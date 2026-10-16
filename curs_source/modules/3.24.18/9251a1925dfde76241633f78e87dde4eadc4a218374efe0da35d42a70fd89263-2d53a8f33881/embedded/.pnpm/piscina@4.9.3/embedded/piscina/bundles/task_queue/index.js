import { require_common3 } from "../common.js";
import { require_symbols11 } from "../symbols.js";
import { require_array_queue } from "./array_queue.js";
import { require_fixed_queue3 } from "./fixed_queue.js";
var __wakaru_require_task_queue_cache;
export function require_task_queue() {
if (__wakaru_require_task_queue_cache) return __wakaru_require_task_queue_cache;
var exports2 = {};
__wakaru_require_task_queue_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.TaskInfo = exports2.FixedQueue = exports2.ArrayTaskQueue = void 0;
exports2.isTaskQueue = isTaskQueue;
var node_perf_hooks_1 = require("node:perf_hooks");
var node_async_hooks_1 = require("node:async_hooks");
var common_1 = require_common3();
var symbols_1 = require_symbols11();
var array_queue_1 = require_array_queue();
Object.defineProperty(exports2, "ArrayTaskQueue", {
    enumerable: true,
    get: function() {
        return array_queue_1.ArrayTaskQueue;
    }
});
var fixed_queue_1 = require_fixed_queue3();
Object.defineProperty(exports2, "FixedQueue", {
    enumerable: true,
    get: function() {
        return fixed_queue_1.FixedQueue;
    }
});
function isTaskQueue(value) {
    return typeof value === "object" && value !== null && "size" in value && typeof value.shift === "function" && typeof value.remove === "function" && typeof value.push === "function";
}
var taskIdCounter = 0;
var TaskInfo = class extends node_async_hooks_1.AsyncResource {
    constructor(task, transferList, filename, name17, callback, abortSignal, triggerAsyncId){
        super("Piscina.Task", {
            requireManualDestroy: true,
            triggerAsyncId
        });
        this.abortListener = null;
        this.workerInfo = null;
        this.callback = callback;
        this.task = task;
        this.transferList = transferList;
        if ((0, common_1.isMovable)(task)) {
            if (this.transferList == null) {
                this.transferList = [];
            }
            this.transferList = this.transferList.concat(task[symbols_1.kTransferable]);
            this.task = task[symbols_1.kValue];
        }
        this.filename = filename;
        this.name = name17;
        this.taskId = taskIdCounter++;
        this.abortSignal = abortSignal;
        this.created = node_perf_hooks_1.performance.now();
        this.started = 0;
    }
    releaseTask() {
        const ret = this.task;
        this.task = null;
        return ret;
    }
    done(err, result) {
        this.runInAsyncScope(this.callback, null, err, result);
        this.emitDestroy();
        if (this.abortSignal && this.abortListener) {
            if ("removeEventListener" in this.abortSignal && this.abortListener) {
                this.abortSignal.removeEventListener("abort", this.abortListener);
            } else {
                this.abortSignal.off("abort", this.abortListener);
            }
        }
    }
    get [symbols_1.kQueueOptions]() {
        return symbols_1.kQueueOptions in this.task ? this.task[symbols_1.kQueueOptions] : null;
    }
    get interface() {
        return {
            taskId: this.taskId,
            filename: this.filename,
            name: this.name,
            created: this.created,
            isAbortable: this.abortSignal !== null,
            [symbols_1.kQueueOptions]: this[symbols_1.kQueueOptions]
        };
    }
};
exports2.TaskInfo = TaskInfo;

return exports2;
}
