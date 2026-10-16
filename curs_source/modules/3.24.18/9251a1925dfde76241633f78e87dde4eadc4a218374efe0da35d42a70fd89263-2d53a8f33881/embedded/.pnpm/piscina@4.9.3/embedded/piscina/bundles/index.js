import { require_abort } from "./abort.js";
import { require_common3 } from "./common.js";
import { require_errors4 } from "./errors.js";
import { require_symbols11 } from "./symbols.js";
import { require_task_queue } from "./task_queue/index.js";
import { require_worker_pool } from "./worker_pool/index.js";
import { require_package } from "../package.json";
var __wakaru_require_dist3_cache;
export function require_dist3() {
if (__wakaru_require_dist3_cache) return __wakaru_require_dist3_cache;
var exports2 = {};
__wakaru_require_dist3_cache = exports2;
"use strict";
var __classPrivateFieldSet2 = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f2) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet5 = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f2) {
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
};
var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
    return mod2 && mod2.__esModule ? mod2 : {
        "default": mod2
    };
};
var _DirectlyTransferable_value;
var _ArrayBufferViewTransferable_view;
var _Piscina_pool;
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.FixedQueue = exports2.version = exports2.queueOptionsSymbol = exports2.valueSymbol = exports2.transferableSymbol = exports2.Piscina = exports2.workerData = exports2.isWorkerThread = exports2.move = void 0;
var node_worker_threads_1 = require("node:worker_threads");
var node_events_1 = require("node:events");
var node_path_1 = require("node:path");
var node_util_1 = require("node:util");
var node_perf_hooks_1 = require("node:perf_hooks");
var promises_1 = require("node:timers/promises");
var node_assert_1 = __importDefault(require("node:assert"));
var package_json_1 = require_package();
Object.defineProperty(exports2, "version", {
    enumerable: true,
    get: function() {
        return package_json_1.version;
    }
});
var symbols_1 = require_symbols11();
Object.defineProperty(exports2, "queueOptionsSymbol", {
    enumerable: true,
    get: function() {
        return symbols_1.kQueueOptions;
    }
});
Object.defineProperty(exports2, "transferableSymbol", {
    enumerable: true,
    get: function() {
        return symbols_1.kTransferable;
    }
});
Object.defineProperty(exports2, "valueSymbol", {
    enumerable: true,
    get: function() {
        return symbols_1.kValue;
    }
});
var task_queue_1 = require_task_queue();
Object.defineProperty(exports2, "FixedQueue", {
    enumerable: true,
    get: function() {
        return task_queue_1.FixedQueue;
    }
});
var worker_pool_1 = require_worker_pool();
var abort_1 = require_abort();
var errors_1 = require_errors4();
var common_1 = require_common3();
var cpuParallelism = (0, common_1.getAvailableParallelism)();
var kDefaultOptions = {
    filename: null,
    name: "default",
    minThreads: Math.max(Math.floor(cpuParallelism / 2), 1),
    maxThreads: cpuParallelism * 1.5,
    idleTimeout: 0,
    maxQueue: Infinity,
    concurrentTasksPerWorker: 1,
    useAtomics: true,
    taskQueue: new task_queue_1.ArrayTaskQueue(),
    niceIncrement: 0,
    trackUnmanagedFds: true,
    closeTimeout: 3e4,
    recordTiming: true
};
var kDefaultRunOptions = {
    transferList: void 0,
    filename: null,
    signal: null,
    name: null
};
var kDefaultCloseOptions = {
    force: false
};
var DirectlyTransferable = class {
    constructor(value){
        _DirectlyTransferable_value.set(this, void 0);
        __classPrivateFieldSet2(this, _DirectlyTransferable_value, value, "f");
    }
    get [(_DirectlyTransferable_value = new WeakMap(), symbols_1.kTransferable)]() {
        return __classPrivateFieldGet5(this, _DirectlyTransferable_value, "f");
    }
    get [symbols_1.kValue]() {
        return __classPrivateFieldGet5(this, _DirectlyTransferable_value, "f");
    }
};
var ArrayBufferViewTransferable = class {
    constructor(view){
        _ArrayBufferViewTransferable_view.set(this, void 0);
        __classPrivateFieldSet2(this, _ArrayBufferViewTransferable_view, view, "f");
    }
    get [(_ArrayBufferViewTransferable_view = new WeakMap(), symbols_1.kTransferable)]() {
        return __classPrivateFieldGet5(this, _ArrayBufferViewTransferable_view, "f").buffer;
    }
    get [symbols_1.kValue]() {
        return __classPrivateFieldGet5(this, _ArrayBufferViewTransferable_view, "f");
    }
};
var ThreadPool = class {
    constructor(publicInterface, options2){
        var _a18;
        this.skipQueue = [];
        this.completed = 0;
        this.start = node_perf_hooks_1.performance.now();
        this.inProcessPendingMessages = false;
        this.startingUp = false;
        this.closingUp = false;
        this.workerFailsDuringBootstrap = false;
        this.destroying = false;
        this.publicInterface = publicInterface;
        this.taskQueue = options2.taskQueue || new task_queue_1.ArrayTaskQueue();
        const filename = options2.filename ? (0, common_1.maybeFileURLToPath)(options2.filename) : null;
        this.options = {
            ...kDefaultOptions,
            ...options2,
            filename,
            maxQueue: 0
        };
        if (this.options.recordTiming) {
            this.runTime = (0, node_perf_hooks_1.createHistogram)();
            this.waitTime = (0, node_perf_hooks_1.createHistogram)();
        }
        if (options2.maxThreads !== void 0 && this.options.minThreads >= options2.maxThreads) {
            this.options.minThreads = options2.maxThreads;
        }
        if (options2.minThreads !== void 0 && this.options.maxThreads <= options2.minThreads) {
            this.options.maxThreads = options2.minThreads;
        }
        if (options2.maxQueue === "auto") {
            this.options.maxQueue = this.options.maxThreads ** 2;
        } else {
            this.options.maxQueue = (_a18 = options2.maxQueue) !== null && _a18 !== void 0 ? _a18 : kDefaultOptions.maxQueue;
        }
        this.workers = new worker_pool_1.AsynchronouslyCreatedResourcePool(this.options.concurrentTasksPerWorker);
        this.workers.onAvailable((w2)=>this._onWorkerAvailable(w2));
        this.startingUp = true;
        this._ensureMinimumWorkers();
        this.startingUp = false;
        this.needsDrain = false;
    }
    _ensureMinimumWorkers() {
        if (this.closingUp || this.destroying) {
            return;
        }
        while(this.workers.size < this.options.minThreads){
            this._addNewWorker();
        }
    }
    _addNewWorker() {
        const pool = this;
        const worker = new node_worker_threads_1.Worker((0, node_path_1.resolve)(__dirname, "worker.js"), {
            env: this.options.env,
            argv: this.options.argv,
            execArgv: this.options.execArgv,
            resourceLimits: this.options.resourceLimits,
            workerData: this.options.workerData,
            trackUnmanagedFds: this.options.trackUnmanagedFds
        });
        const { port1, port2 } = new node_worker_threads_1.MessageChannel();
        const workerInfo = new worker_pool_1.WorkerInfo(worker, port1, onMessage);
        if (this.startingUp) {
            workerInfo.markAsReady();
        }
        const message = {
            filename: this.options.filename,
            name: this.options.name,
            port: port2,
            sharedBuffer: workerInfo.sharedBuffer,
            useAtomics: this.options.useAtomics,
            niceIncrement: this.options.niceIncrement
        };
        worker.postMessage(message, [
            port2
        ]);
        function onMessage(message2) {
            const { taskId, result } = message2;
            const taskInfo = workerInfo.taskInfos.get(taskId);
            workerInfo.taskInfos.delete(taskId);
            pool.workers.maybeAvailable(workerInfo);
            if (taskInfo === void 0) {
                const err = new Error(`Unexpected message from Worker: ${(0, node_util_1.inspect)(message2)}`);
                pool.publicInterface.emit("error", err);
            } else {
                taskInfo.done(message2.error, result);
            }
            pool._processPendingMessages();
        }
        function onReady() {
            if (workerInfo.currentUsage() === 0) {
                workerInfo.unref();
            }
            if (!workerInfo.isReady()) {
                workerInfo.markAsReady();
            }
        }
        function onEventMessage(message2) {
            pool.publicInterface.emit("message", message2);
        }
        worker.on("message", (message2)=>{
            message2 instanceof Object && common_1.READY in message2 ? onReady() : onEventMessage(message2);
        });
        worker.on("error", (err)=>{
            this._onError(worker, workerInfo, err, false);
        });
        worker.on("exit", (exitCode)=>{
            if (this.destroying) {
                return;
            }
            const err = new Error(`worker exited with code: ${exitCode}`);
            this._onError(worker, workerInfo, err, true);
        });
        worker.unref();
        port1.on("close", ()=>{
            worker.ref();
        });
        this.workers.add(workerInfo);
    }
    _onError(worker, workerInfo, err, onlyErrorUnfinishedTasks) {
        worker.ref = ()=>{};
        const taskInfos = [
            ...workerInfo.taskInfos.values()
        ];
        workerInfo.taskInfos.clear();
        this._removeWorker(workerInfo);
        if (workerInfo.isReady() && !this.workerFailsDuringBootstrap) {
            this._ensureMinimumWorkers();
        } else {
            this.workerFailsDuringBootstrap = true;
        }
        if (taskInfos.length > 0) {
            for (const taskInfo of taskInfos){
                taskInfo.done(err, null);
            }
        } else if (!onlyErrorUnfinishedTasks) {
            this.publicInterface.emit("error", err);
        }
    }
    _processPendingMessages() {
        if (this.inProcessPendingMessages || !this.options.useAtomics) {
            return;
        }
        this.inProcessPendingMessages = true;
        try {
            for (const workerInfo of this.workers){
                workerInfo.processPendingMessages();
            }
        } finally{
            this.inProcessPendingMessages = false;
        }
    }
    _removeWorker(workerInfo) {
        workerInfo.destroy();
        this.workers.delete(workerInfo);
    }
    _onWorkerAvailable(workerInfo) {
        var _a18;
        while((this.taskQueue.size > 0 || this.skipQueue.length > 0) && workerInfo.currentUsage() < this.options.concurrentTasksPerWorker){
            const taskInfo = this.skipQueue.shift() || this.taskQueue.shift();
            if (taskInfo.abortSignal && workerInfo.taskInfos.size > 0) {
                this.skipQueue.push(taskInfo);
                break;
            }
            const now2 = node_perf_hooks_1.performance.now();
            (_a18 = this.waitTime) === null || _a18 === void 0 ? void 0 : _a18.record((0, common_1.toHistogramIntegerNano)(now2 - taskInfo.created));
            taskInfo.started = now2;
            workerInfo.postTask(taskInfo);
            this._maybeDrain();
            return;
        }
        if (this.options.idleTimeout === Infinity) {
            return;
        }
        if (workerInfo.taskInfos.size === 0 && this.workers.size > this.options.minThreads) {
            workerInfo.idleTimeout = setTimeout(()=>{
                node_assert_1.default.strictEqual(workerInfo.taskInfos.size, 0);
                if (this.workers.size > this.options.minThreads) {
                    this._removeWorker(workerInfo);
                }
            }, this.options.idleTimeout).unref();
        }
    }
    runTask(task, options2) {
        var _a18, _b2;
        let { filename, name: name17 } = options2;
        const { transferList = [] } = options2;
        if (filename == null) {
            filename = this.options.filename;
        }
        if (name17 == null) {
            name17 = this.options.name;
        }
        if (typeof filename !== "string") {
            return Promise.reject(errors_1.Errors.FilenameNotProvided());
        }
        filename = (0, common_1.maybeFileURLToPath)(filename);
        let signal;
        if (this.closingUp) {
            const closingUpAbortController = new AbortController();
            closingUpAbortController.abort("queue is closing up");
            signal = closingUpAbortController.signal;
        } else {
            signal = (_a18 = options2.signal) !== null && _a18 !== void 0 ? _a18 : null;
        }
        let resolve36;
        let reject2;
        const ret = new Promise((res, rej)=>{
            resolve36 = res;
            reject2 = rej;
        });
        const taskInfo = new task_queue_1.TaskInfo(task, transferList, filename, name17, (err, result)=>{
            var _a19;
            this.completed++;
            if (taskInfo.started) {
                (_a19 = this.runTime) === null || _a19 === void 0 ? void 0 : _a19.record((0, common_1.toHistogramIntegerNano)(node_perf_hooks_1.performance.now() - taskInfo.started));
            }
            if (err !== null) {
                reject2(err);
            } else {
                resolve36(result);
            }
            this._maybeDrain();
        }, signal, this.publicInterface.asyncResource.asyncId());
        if (signal !== null) {
            if (signal.aborted) {
                return Promise.reject(new abort_1.AbortError(signal.reason));
            }
            taskInfo.abortListener = ()=>{
                reject2(new abort_1.AbortError(signal.reason));
                if (taskInfo.workerInfo !== null) {
                    this._removeWorker(taskInfo.workerInfo);
                    this._ensureMinimumWorkers();
                } else {
                    this.taskQueue.remove(taskInfo);
                }
            };
            (0, abort_1.onabort)(signal, taskInfo.abortListener);
        }
        if (this.taskQueue.size > 0) {
            const totalCapacity = this.options.maxQueue + this.pendingCapacity();
            if (this.taskQueue.size >= totalCapacity) {
                if (this.options.maxQueue === 0) {
                    return Promise.reject(errors_1.Errors.NoTaskQueueAvailable());
                } else {
                    return Promise.reject(errors_1.Errors.TaskQueueAtLimit());
                }
            } else {
                if (this.workers.size < this.options.maxThreads) {
                    this._addNewWorker();
                }
                this.taskQueue.push(taskInfo);
            }
            this._maybeDrain();
            return ret;
        }
        let workerInfo = this.workers.findAvailable();
        if (workerInfo !== null && workerInfo.currentUsage() > 0 && signal) {
            workerInfo = null;
        }
        let waitingForNewWorker = false;
        if ((workerInfo === null || workerInfo.currentUsage() > 0) && this.workers.size < this.options.maxThreads) {
            this._addNewWorker();
            waitingForNewWorker = true;
        }
        if (workerInfo === null) {
            if (this.options.maxQueue <= 0 && !waitingForNewWorker) {
                return Promise.reject(errors_1.Errors.NoTaskQueueAvailable());
            } else {
                this.taskQueue.push(taskInfo);
            }
            this._maybeDrain();
            return ret;
        }
        const now2 = node_perf_hooks_1.performance.now();
        (_b2 = this.waitTime) === null || _b2 === void 0 ? void 0 : _b2.record((0, common_1.toHistogramIntegerNano)(now2 - taskInfo.created));
        taskInfo.started = now2;
        workerInfo.postTask(taskInfo);
        this._maybeDrain();
        return ret;
    }
    pendingCapacity() {
        return this.workers.pendingItems.size * this.options.concurrentTasksPerWorker;
    }
    _maybeDrain() {
        const totalCapacity = this.options.maxQueue + this.pendingCapacity();
        const totalQueueSize = this.taskQueue.size + this.skipQueue.length;
        if (totalQueueSize === 0) {
            this.needsDrain = false;
            this.publicInterface.emit("drain");
        }
        if (totalQueueSize >= totalCapacity) {
            this.needsDrain = true;
            this.publicInterface.emit("needsDrain");
        }
    }
    async destroy() {
        this.destroying = true;
        while(this.skipQueue.length > 0){
            const taskInfo = this.skipQueue.shift();
            taskInfo.done(new Error("Terminating worker thread"));
        }
        while(this.taskQueue.size > 0){
            const taskInfo = this.taskQueue.shift();
            taskInfo.done(new Error("Terminating worker thread"));
        }
        const exitEvents = [];
        while(this.workers.size > 0){
            const [workerInfo] = this.workers;
            exitEvents.push((0, node_events_1.once)(workerInfo.worker, "exit"));
            this._removeWorker(workerInfo);
        }
        try {
            await Promise.all(exitEvents);
        } finally{
            this.destroying = false;
        }
    }
    async close(options2) {
        this.closingUp = true;
        if (options2.force) {
            const skipQueueLength = this.skipQueue.length;
            for(let i = 0; i < skipQueueLength; i++){
                const taskInfo = this.skipQueue.shift();
                if (taskInfo.workerInfo === null) {
                    taskInfo.done(new abort_1.AbortError("pool is closed"));
                } else {
                    this.skipQueue.push(taskInfo);
                }
            }
            const taskQueueLength = this.taskQueue.size;
            for(let i = 0; i < taskQueueLength; i++){
                const taskInfo = this.taskQueue.shift();
                if (taskInfo.workerInfo === null) {
                    taskInfo.done(new abort_1.AbortError("pool is closed"));
                } else {
                    this.taskQueue.push(taskInfo);
                }
            }
        }
        const onPoolFlushed = ()=>new Promise((resolve36)=>{
                const numberOfWorkers = this.workers.size;
                if (numberOfWorkers === 0) {
                    resolve36();
                    return;
                }
                let numberOfWorkersDone = 0;
                const checkIfWorkerIsDone = (workerInfo)=>{
                    if (workerInfo.taskInfos.size === 0) {
                        numberOfWorkersDone++;
                    }
                    if (numberOfWorkers === numberOfWorkersDone) {
                        resolve36();
                    }
                };
                for (const workerInfo of this.workers){
                    checkIfWorkerIsDone(workerInfo);
                    workerInfo.port.on("message", ()=>checkIfWorkerIsDone(workerInfo));
                }
            });
        const throwOnTimeOut = async (timeout2)=>{
            await (0, promises_1.setTimeout)(timeout2);
            throw errors_1.Errors.CloseTimeout();
        };
        try {
            await Promise.race([
                onPoolFlushed(),
                throwOnTimeOut(this.options.closeTimeout)
            ]);
        } catch (error3) {
            this.publicInterface.emit("error", error3);
        } finally{
            await this.destroy();
            this.publicInterface.emit("close");
            this.closingUp = false;
        }
    }
};
var Piscina2 = class _Piscina extends node_events_1.EventEmitterAsyncResource {
    constructor(options2 = {}){
        const opts = {
            ...options2,
            "__proto__": null
        };
        super({
            ...opts,
            name: "Piscina"
        });
        _Piscina_pool.set(this, void 0);
        if (typeof opts.filename !== "string" && opts.filename != null) {
            throw new TypeError("options.filename must be a string or null");
        }
        if (typeof opts.name !== "string" && opts.name != null) {
            throw new TypeError("options.name must be a string or null");
        }
        if (opts.minThreads !== void 0 && (typeof opts.minThreads !== "number" || opts.minThreads < 0)) {
            throw new TypeError("options.minThreads must be a non-negative integer");
        }
        if (opts.maxThreads !== void 0 && (typeof opts.maxThreads !== "number" || opts.maxThreads < 1)) {
            throw new TypeError("options.maxThreads must be a positive integer");
        }
        if (opts.minThreads !== void 0 && opts.maxThreads !== void 0 && opts.minThreads > opts.maxThreads) {
            throw new RangeError("options.minThreads and options.maxThreads must not conflict");
        }
        if (opts.idleTimeout !== void 0 && (typeof opts.idleTimeout !== "number" || opts.idleTimeout < 0)) {
            throw new TypeError("options.idleTimeout must be a non-negative integer");
        }
        if (opts.maxQueue !== void 0 && opts.maxQueue !== "auto" && (typeof opts.maxQueue !== "number" || opts.maxQueue < 0)) {
            throw new TypeError("options.maxQueue must be a non-negative integer");
        }
        if (opts.concurrentTasksPerWorker !== void 0 && (typeof opts.concurrentTasksPerWorker !== "number" || opts.concurrentTasksPerWorker < 1)) {
            throw new TypeError("options.concurrentTasksPerWorker must be a positive integer");
        }
        if (opts.useAtomics !== void 0 && typeof opts.useAtomics !== "boolean") {
            throw new TypeError("options.useAtomics must be a boolean value");
        }
        if (opts.resourceLimits !== void 0 && (typeof opts.resourceLimits !== "object" || opts.resourceLimits === null)) {
            throw new TypeError("options.resourceLimits must be an object");
        }
        if (opts.taskQueue !== void 0 && !(0, task_queue_1.isTaskQueue)(opts.taskQueue)) {
            throw new TypeError("options.taskQueue must be a TaskQueue object");
        }
        if (opts.niceIncrement !== void 0 && (typeof opts.niceIncrement !== "number" || opts.niceIncrement < 0 && process.platform !== "win32")) {
            throw new TypeError("options.niceIncrement must be a non-negative integer on Unix systems");
        }
        if (opts.trackUnmanagedFds !== void 0 && typeof opts.trackUnmanagedFds !== "boolean") {
            throw new TypeError("options.trackUnmanagedFds must be a boolean value");
        }
        if (opts.closeTimeout !== void 0 && (typeof opts.closeTimeout !== "number" || opts.closeTimeout < 0)) {
            throw new TypeError("options.closeTimeout must be a non-negative integer");
        }
        __classPrivateFieldSet2(this, _Piscina_pool, new ThreadPool(this, opts), "f");
    }
    runTask(task, transferList, filename, signal) {
        if (typeof transferList === "object" && !Array.isArray(transferList) || typeof transferList === "string") {
            signal = filename;
            filename = transferList;
            transferList = void 0;
        }
        if (typeof filename === "object" && !Array.isArray(filename)) {
            signal = filename;
            filename = void 0;
        }
        if (transferList !== void 0 && !Array.isArray(transferList)) {
            return Promise.reject(new TypeError("transferList argument must be an Array"));
        }
        if (filename !== void 0 && typeof filename !== "string") {
            return Promise.reject(new TypeError("filename argument must be a string"));
        }
        if (signal !== void 0 && typeof signal !== "object") {
            return Promise.reject(new TypeError("signal argument must be an object"));
        }
        return __classPrivateFieldGet5(this, _Piscina_pool, "f").runTask(task, {
            transferList,
            filename: filename || null,
            name: "default",
            signal: signal || null
        });
    }
    run(task, options2 = kDefaultRunOptions) {
        if (options2 === null || typeof options2 !== "object") {
            return Promise.reject(new TypeError("options must be an object"));
        }
        const { transferList, filename, name: name17, signal } = options2;
        if (transferList !== void 0 && !Array.isArray(transferList)) {
            return Promise.reject(new TypeError("transferList argument must be an Array"));
        }
        if (filename != null && typeof filename !== "string") {
            return Promise.reject(new TypeError("filename argument must be a string"));
        }
        if (name17 != null && typeof name17 !== "string") {
            return Promise.reject(new TypeError("name argument must be a string"));
        }
        if (signal != null && typeof signal !== "object") {
            return Promise.reject(new TypeError("signal argument must be an object"));
        }
        return __classPrivateFieldGet5(this, _Piscina_pool, "f").runTask(task, {
            transferList,
            filename,
            name: name17,
            signal
        });
    }
    async close(options2 = kDefaultCloseOptions) {
        if (options2 === null || typeof options2 !== "object") {
            throw TypeError("options must be an object");
        }
        let { force } = options2;
        if (force !== void 0 && typeof force !== "boolean") {
            return Promise.reject(new TypeError("force argument must be a boolean"));
        }
        force !== null && force !== void 0 ? force : force = kDefaultCloseOptions.force;
        return __classPrivateFieldGet5(this, _Piscina_pool, "f").close({
            force
        });
    }
    destroy() {
        return __classPrivateFieldGet5(this, _Piscina_pool, "f").destroy();
    }
    get maxThreads() {
        return __classPrivateFieldGet5(this, _Piscina_pool, "f").options.maxThreads;
    }
    get minThreads() {
        return __classPrivateFieldGet5(this, _Piscina_pool, "f").options.minThreads;
    }
    get options() {
        return __classPrivateFieldGet5(this, _Piscina_pool, "f").options;
    }
    get threads() {
        const ret = [];
        for (const workerInfo of __classPrivateFieldGet5(this, _Piscina_pool, "f").workers){
            ret.push(workerInfo.worker);
        }
        return ret;
    }
    get queueSize() {
        const pool = __classPrivateFieldGet5(this, _Piscina_pool, "f");
        return Math.max(pool.taskQueue.size - pool.pendingCapacity(), 0);
    }
    get completed() {
        return __classPrivateFieldGet5(this, _Piscina_pool, "f").completed;
    }
    get waitTime() {
        if (!__classPrivateFieldGet5(this, _Piscina_pool, "f").waitTime) {
            return null;
        }
        return (0, common_1.createHistogramSummary)(__classPrivateFieldGet5(this, _Piscina_pool, "f").waitTime);
    }
    get runTime() {
        if (!__classPrivateFieldGet5(this, _Piscina_pool, "f").runTime) {
            return null;
        }
        return (0, common_1.createHistogramSummary)(__classPrivateFieldGet5(this, _Piscina_pool, "f").runTime);
    }
    get utilization() {
        if (!__classPrivateFieldGet5(this, _Piscina_pool, "f").runTime) {
            return 0;
        }
        const count2 = __classPrivateFieldGet5(this, _Piscina_pool, "f").runTime.count;
        if (count2 === 0) {
            return 0;
        }
        const capacity = this.duration * __classPrivateFieldGet5(this, _Piscina_pool, "f").options.maxThreads;
        const totalMeanRuntime = __classPrivateFieldGet5(this, _Piscina_pool, "f").runTime.mean / 1e3 * count2;
        return totalMeanRuntime / capacity;
    }
    get duration() {
        return node_perf_hooks_1.performance.now() - __classPrivateFieldGet5(this, _Piscina_pool, "f").start;
    }
    get needsDrain() {
        return __classPrivateFieldGet5(this, _Piscina_pool, "f").needsDrain;
    }
    static get isWorkerThread() {
        return common_1.commonState.isWorkerThread;
    }
    static get workerData() {
        return common_1.commonState.workerData;
    }
    static get version() {
        return package_json_1.version;
    }
    static get Piscina() {
        return _Piscina;
    }
    static get FixedQueue() {
        return task_queue_1.FixedQueue;
    }
    static get ArrayTaskQueue() {
        return task_queue_1.ArrayTaskQueue;
    }
    static move(val) {
        if (val != null && typeof val === "object" && typeof val !== "function") {
            if (!(0, common_1.isTransferable)(val)) {
                if (node_util_1.types.isArrayBufferView(val)) {
                    val = new ArrayBufferViewTransferable(val);
                } else {
                    val = new DirectlyTransferable(val);
                }
            }
            (0, common_1.markMovable)(val);
        }
        return val;
    }
    static get transferableSymbol() {
        return symbols_1.kTransferable;
    }
    static get valueSymbol() {
        return symbols_1.kValue;
    }
    static get queueOptionsSymbol() {
        return symbols_1.kQueueOptions;
    }
};
exports2.Piscina = Piscina2;
_Piscina_pool = new WeakMap();
exports2.default = Piscina2;
exports2.move = Piscina2.move;
exports2.isWorkerThread = Piscina2.isWorkerThread;
exports2.workerData = Piscina2.workerData;

return exports2;
}
