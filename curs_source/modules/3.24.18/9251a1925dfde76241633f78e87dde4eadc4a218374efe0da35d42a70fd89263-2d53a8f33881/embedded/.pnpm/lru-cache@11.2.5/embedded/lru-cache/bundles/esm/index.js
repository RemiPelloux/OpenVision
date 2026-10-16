var defaultPerf2, warned2, PROCESS2, emitWarning2, AC2, AS2, shouldWarn2, isPosInt2, getUintArray2, ZeroArray2, Stack2, LRUCache2;
export { AC2, AS2, LRUCache2, PROCESS2, Stack2, ZeroArray2, defaultPerf2, emitWarning2, getUintArray2, isPosInt2, shouldWarn2, warned2 };
var __wakaru_init_esm5_initialized = false;
export function init_esm5() {
if (__wakaru_init_esm5_initialized) return;
__wakaru_init_esm5_initialized = true;
defaultPerf2 = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
warned2 = new Set();
PROCESS2 = typeof process === "object" && !!process ? process : {};
emitWarning2 = (msg, type2, code, fn)=>{
    typeof PROCESS2.emitWarning === "function" ? PROCESS2.emitWarning(msg, type2, code, fn) : console.error(`[${code}] ${type2}: ${msg}`);
};
AC2 = globalThis.AbortController;
AS2 = globalThis.AbortSignal;
if (typeof AC2 === "undefined") {
    AS2 = class AbortSignal {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(_2, fn) {
            this._onabort.push(fn);
        }
    };
    AC2 = class AbortController {
        constructor(){
            warnACPolyfill();
        }
        signal = new AS2();
        abort(reason) {
            if (this.signal.aborted) return;
            this.signal.reason = reason;
            this.signal.aborted = true;
            for (const fn of this.signal._onabort){
                fn(reason);
            }
            this.signal.onabort?.(reason);
        }
    };
    let printACPolyfillWarning = PROCESS2.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1";
    const warnACPolyfill = ()=>{
        if (!printACPolyfillWarning) return;
        printACPolyfillWarning = false;
        emitWarning2("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", warnACPolyfill);
    };
}
shouldWarn2 = (code)=>!warned2.has(code);
isPosInt2 = (n)=>n && n === Math.floor(n) && n > 0 && isFinite(n);
getUintArray2 = (max)=>!isPosInt2(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray2 : null;
ZeroArray2 = class extends Array {
    constructor(size){
        super(size);
        this.fill(0);
    }
};
Stack2 = class _Stack {
    heap;
    length;
    static #constructing = false;
    static create(max) {
        const HeapCls = getUintArray2(max);
        if (!HeapCls) return [];
        _Stack.#constructing = true;
        const s3 = new _Stack(max, HeapCls);
        _Stack.#constructing = false;
        return s3;
    }
    constructor(max, HeapCls){
        if (!_Stack.#constructing) {
            throw new TypeError("instantiate Stack using Stack.create(n)");
        }
        this.heap = new HeapCls(max);
        this.length = 0;
    }
    push(n) {
        this.heap[this.length++] = n;
    }
    pop() {
        return this.heap[--this.length];
    }
};
LRUCache2 = class _LRUCache {
    #max;
    #maxSize;
    #dispose;
    #onInsert;
    #disposeAfter;
    #fetchMethod;
    #memoMethod;
    #perf;
    get perf() {
        return this.#perf;
    }
    ttl;
    ttlResolution;
    ttlAutopurge;
    updateAgeOnGet;
    updateAgeOnHas;
    allowStale;
    noDisposeOnSet;
    noUpdateTTL;
    maxEntrySize;
    sizeCalculation;
    noDeleteOnFetchRejection;
    noDeleteOnStaleGet;
    allowStaleOnFetchAbort;
    allowStaleOnFetchRejection;
    ignoreFetchAbort;
    #size;
    #calculatedSize;
    #keyMap;
    #keyList;
    #valList;
    #next;
    #prev;
    #head;
    #tail;
    #free;
    #disposed;
    #sizes;
    #starts;
    #ttls;
    #autopurgeTimers;
    #hasDispose;
    #hasFetchMethod;
    #hasDisposeAfter;
    #hasOnInsert;
    static unsafeExposeInternals(c) {
        return {
            starts: c.#starts,
            ttls: c.#ttls,
            autopurgeTimers: c.#autopurgeTimers,
            sizes: c.#sizes,
            keyMap: c.#keyMap,
            keyList: c.#keyList,
            valList: c.#valList,
            next: c.#next,
            prev: c.#prev,
            get head () {
                return c.#head;
            },
            get tail () {
                return c.#tail;
            },
            free: c.#free,
            isBackgroundFetch: (p2)=>c.#isBackgroundFetch(p2),
            backgroundFetch: (k2, index, options2, context2)=>c.#backgroundFetch(k2, index, options2, context2),
            moveToTail: (index)=>c.#moveToTail(index),
            indexes: (options2)=>c.#indexes(options2),
            rindexes: (options2)=>c.#rindexes(options2),
            isStale: (index)=>c.#isStale(index)
        };
    }
    get max() {
        return this.#max;
    }
    get maxSize() {
        return this.#maxSize;
    }
    get calculatedSize() {
        return this.#calculatedSize;
    }
    get size() {
        return this.#size;
    }
    get fetchMethod() {
        return this.#fetchMethod;
    }
    get memoMethod() {
        return this.#memoMethod;
    }
    get dispose() {
        return this.#dispose;
    }
    get onInsert() {
        return this.#onInsert;
    }
    get disposeAfter() {
        return this.#disposeAfter;
    }
    constructor(options2){
        const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose: dispose2, onInsert, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, memoMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort, perf } = options2;
        if (perf !== void 0) {
            if (typeof perf?.now !== "function") {
                throw new TypeError("perf option must have a now() method if specified");
            }
        }
        this.#perf = perf ?? defaultPerf2;
        if (max !== 0 && !isPosInt2(max)) {
            throw new TypeError("max option must be a nonnegative integer");
        }
        const UintArray = max ? getUintArray2(max) : Array;
        if (!UintArray) {
            throw new Error("invalid max value: " + max);
        }
        this.#max = max;
        this.#maxSize = maxSize;
        this.maxEntrySize = maxEntrySize || this.#maxSize;
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
            if (!this.#maxSize && !this.maxEntrySize) {
                throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            }
            if (typeof this.sizeCalculation !== "function") {
                throw new TypeError("sizeCalculation set to non-function");
            }
        }
        if (memoMethod !== void 0 && typeof memoMethod !== "function") {
            throw new TypeError("memoMethod must be a function if defined");
        }
        this.#memoMethod = memoMethod;
        if (fetchMethod !== void 0 && typeof fetchMethod !== "function") {
            throw new TypeError("fetchMethod must be a function if specified");
        }
        this.#fetchMethod = fetchMethod;
        this.#hasFetchMethod = !!fetchMethod;
        this.#keyMap = new Map();
        this.#keyList = new Array(max).fill(void 0);
        this.#valList = new Array(max).fill(void 0);
        this.#next = new UintArray(max);
        this.#prev = new UintArray(max);
        this.#head = 0;
        this.#tail = 0;
        this.#free = Stack2.create(max);
        this.#size = 0;
        this.#calculatedSize = 0;
        if (typeof dispose2 === "function") {
            this.#dispose = dispose2;
        }
        if (typeof onInsert === "function") {
            this.#onInsert = onInsert;
        }
        if (typeof disposeAfter === "function") {
            this.#disposeAfter = disposeAfter;
            this.#disposed = [];
        } else {
            this.#disposeAfter = void 0;
            this.#disposed = void 0;
        }
        this.#hasDispose = !!this.#dispose;
        this.#hasOnInsert = !!this.#onInsert;
        this.#hasDisposeAfter = !!this.#disposeAfter;
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        if (this.maxEntrySize !== 0) {
            if (this.#maxSize !== 0) {
                if (!isPosInt2(this.#maxSize)) {
                    throw new TypeError("maxSize must be a positive integer if specified");
                }
            }
            if (!isPosInt2(this.maxEntrySize)) {
                throw new TypeError("maxEntrySize must be a positive integer if specified");
            }
            this.#initializeSizeTracking();
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution = isPosInt2(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
            if (!isPosInt2(this.ttl)) {
                throw new TypeError("ttl must be a positive integer if specified");
            }
            this.#initializeTTLTracking();
        }
        if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
            throw new TypeError("At least one of max, maxSize, or ttl is required");
        }
        if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
            const code = "LRU_CACHE_UNBOUNDED";
            if (shouldWarn2(code)) {
                warned2.add(code);
                const msg = "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.";
                emitWarning2(msg, "UnboundedCacheWarning", code, _LRUCache);
            }
        }
    }
    getRemainingTTL(key) {
        return this.#keyMap.has(key) ? Infinity : 0;
    }
    #initializeTTLTracking() {
        const ttls = new ZeroArray2(this.#max);
        const starts = new ZeroArray2(this.#max);
        this.#ttls = ttls;
        this.#starts = starts;
        const purgeTimers = this.ttlAutopurge ? new Array(this.#max) : void 0;
        this.#autopurgeTimers = purgeTimers;
        this.#setItemTTL = (index, ttl, start = this.#perf.now())=>{
            starts[index] = ttl !== 0 ? start : 0;
            ttls[index] = ttl;
            if (purgeTimers?.[index]) {
                clearTimeout(purgeTimers[index]);
                purgeTimers[index] = void 0;
            }
            if (ttl !== 0 && purgeTimers) {
                const t = setTimeout(()=>{
                    if (this.#isStale(index)) {
                        this.#delete(this.#keyList[index], "expire");
                    }
                }, ttl + 1);
                if (t.unref) {
                    t.unref();
                }
                purgeTimers[index] = t;
            }
        };
        this.#updateItemAge = (index)=>{
            starts[index] = ttls[index] !== 0 ? this.#perf.now() : 0;
        };
        this.#statusTTL = (status, index)=>{
            if (ttls[index]) {
                const ttl = ttls[index];
                const start = starts[index];
                if (!ttl || !start) return;
                status.ttl = ttl;
                status.start = start;
                status.now = cachedNow || getNow();
                const age = status.now - start;
                status.remainingTTL = ttl - age;
            }
        };
        let cachedNow = 0;
        const getNow = ()=>{
            const n = this.#perf.now();
            if (this.ttlResolution > 0) {
                cachedNow = n;
                const t = setTimeout(()=>cachedNow = 0, this.ttlResolution);
                if (t.unref) {
                    t.unref();
                }
            }
            return n;
        };
        this.getRemainingTTL = (key)=>{
            const index = this.#keyMap.get(key);
            if (index === void 0) {
                return 0;
            }
            const ttl = ttls[index];
            const start = starts[index];
            if (!ttl || !start) {
                return Infinity;
            }
            const age = (cachedNow || getNow()) - start;
            return ttl - age;
        };
        this.#isStale = (index)=>{
            const s3 = starts[index];
            const t = ttls[index];
            return !!t && !!s3 && (cachedNow || getNow()) - s3 > t;
        };
    }
    #updateItemAge = ()=>{};
    #statusTTL = ()=>{};
    #setItemTTL = ()=>{};
    #isStale = ()=>false;
    #initializeSizeTracking() {
        const sizes = new ZeroArray2(this.#max);
        this.#calculatedSize = 0;
        this.#sizes = sizes;
        this.#removeItemSize = (index)=>{
            this.#calculatedSize -= sizes[index];
            sizes[index] = 0;
        };
        this.#requireSize = (k2, v2, size, sizeCalculation)=>{
            if (this.#isBackgroundFetch(v2)) {
                return 0;
            }
            if (!isPosInt2(size)) {
                if (sizeCalculation) {
                    if (typeof sizeCalculation !== "function") {
                        throw new TypeError("sizeCalculation must be a function");
                    }
                    size = sizeCalculation(v2, k2);
                    if (!isPosInt2(size)) {
                        throw new TypeError("sizeCalculation return invalid (expect positive integer)");
                    }
                } else {
                    throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                }
            }
            return size;
        };
        this.#addItemSize = (index, size, status)=>{
            sizes[index] = size;
            if (this.#maxSize) {
                const maxSize = this.#maxSize - sizes[index];
                while(this.#calculatedSize > maxSize){
                    this.#evict(true);
                }
            }
            this.#calculatedSize += sizes[index];
            if (status) {
                status.entrySize = size;
                status.totalCalculatedSize = this.#calculatedSize;
            }
        };
    }
    #removeItemSize = (_i2)=>{};
    #addItemSize = (_i2, _s2, _st)=>{};
    #requireSize = (_k, _v, size, sizeCalculation)=>{
        if (size || sizeCalculation) {
            throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        }
        return 0;
    };
    *#indexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for(let i = this.#tail; true;){
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#head) {
                    break;
                } else {
                    i = this.#prev[i];
                }
            }
        }
    }
    *#rindexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for(let i = this.#head; true;){
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#tail) {
                    break;
                } else {
                    i = this.#next[i];
                }
            }
        }
    }
    #isValidIndex(index) {
        return index !== void 0 && this.#keyMap.get(this.#keyList[index]) === index;
    }
    *entries() {
        for (const i of this.#indexes()){
            if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
                yield [
                    this.#keyList[i],
                    this.#valList[i]
                ];
            }
        }
    }
    *rentries() {
        for (const i of this.#rindexes()){
            if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
                yield [
                    this.#keyList[i],
                    this.#valList[i]
                ];
            }
        }
    }
    *keys() {
        for (const i of this.#indexes()){
            const k2 = this.#keyList[i];
            if (k2 !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
                yield k2;
            }
        }
    }
    *rkeys() {
        for (const i of this.#rindexes()){
            const k2 = this.#keyList[i];
            if (k2 !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
                yield k2;
            }
        }
    }
    *values() {
        for (const i of this.#indexes()){
            const v2 = this.#valList[i];
            if (v2 !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    *rvalues() {
        for (const i of this.#rindexes()){
            const v2 = this.#valList[i];
            if (v2 !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    [Symbol.toStringTag] = "LRUCache";
    find(fn, getOptions = {}) {
        for (const i of this.#indexes()){
            const v2 = this.#valList[i];
            const value = this.#isBackgroundFetch(v2) ? v2.__staleWhileFetching : v2;
            if (value === void 0) continue;
            if (fn(value, this.#keyList[i], this)) {
                return this.get(this.#keyList[i], getOptions);
            }
        }
    }
    forEach(fn, thisp = this) {
        for (const i of this.#indexes()){
            const v2 = this.#valList[i];
            const value = this.#isBackgroundFetch(v2) ? v2.__staleWhileFetching : v2;
            if (value === void 0) continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    rforEach(fn, thisp = this) {
        for (const i of this.#rindexes()){
            const v2 = this.#valList[i];
            const value = this.#isBackgroundFetch(v2) ? v2.__staleWhileFetching : v2;
            if (value === void 0) continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    purgeStale() {
        let deleted = false;
        for (const i of this.#rindexes({
            allowStale: true
        })){
            if (this.#isStale(i)) {
                this.#delete(this.#keyList[i], "expire");
                deleted = true;
            }
        }
        return deleted;
    }
    info(key) {
        const i = this.#keyMap.get(key);
        if (i === void 0) return void 0;
        const v2 = this.#valList[i];
        const value = this.#isBackgroundFetch(v2) ? v2.__staleWhileFetching : v2;
        if (value === void 0) return void 0;
        const entry = {
            value
        };
        if (this.#ttls && this.#starts) {
            const ttl = this.#ttls[i];
            const start = this.#starts[i];
            if (ttl && start) {
                const remain = ttl - (this.#perf.now() - start);
                entry.ttl = remain;
                entry.start = Date.now();
            }
        }
        if (this.#sizes) {
            entry.size = this.#sizes[i];
        }
        return entry;
    }
    dump() {
        const arr = [];
        for (const i of this.#indexes({
            allowStale: true
        })){
            const key = this.#keyList[i];
            const v2 = this.#valList[i];
            const value = this.#isBackgroundFetch(v2) ? v2.__staleWhileFetching : v2;
            if (value === void 0 || key === void 0) continue;
            const entry = {
                value
            };
            if (this.#ttls && this.#starts) {
                entry.ttl = this.#ttls[i];
                const age = this.#perf.now() - this.#starts[i];
                entry.start = Math.floor(Date.now() - age);
            }
            if (this.#sizes) {
                entry.size = this.#sizes[i];
            }
            arr.unshift([
                key,
                entry
            ]);
        }
        return arr;
    }
    load(arr) {
        this.clear();
        for (const [key, entry] of arr){
            if (entry.start) {
                const age = Date.now() - entry.start;
                entry.start = this.#perf.now() - age;
            }
            this.set(key, entry.value, entry);
        }
    }
    set(k2, v2, setOptions = {}) {
        if (v2 === void 0) {
            this.delete(k2);
            return this;
        }
        const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
        let { noUpdateTTL = this.noUpdateTTL } = setOptions;
        const size = this.#requireSize(k2, v2, setOptions.size || 0, sizeCalculation);
        if (this.maxEntrySize && size > this.maxEntrySize) {
            if (status) {
                status.set = "miss";
                status.maxEntrySizeExceeded = true;
            }
            this.#delete(k2, "set");
            return this;
        }
        let index = this.#size === 0 ? void 0 : this.#keyMap.get(k2);
        if (index === void 0) {
            index = this.#size === 0 ? this.#tail : this.#free.length !== 0 ? this.#free.pop() : this.#size === this.#max ? this.#evict(false) : this.#size;
            this.#keyList[index] = k2;
            this.#valList[index] = v2;
            this.#keyMap.set(k2, index);
            this.#next[this.#tail] = index;
            this.#prev[index] = this.#tail;
            this.#tail = index;
            this.#size++;
            this.#addItemSize(index, size, status);
            if (status) status.set = "add";
            noUpdateTTL = false;
            if (this.#hasOnInsert) {
                this.#onInsert?.(v2, k2, "add");
            }
        } else {
            this.#moveToTail(index);
            const oldVal = this.#valList[index];
            if (v2 !== oldVal) {
                if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
                    oldVal.__abortController.abort(new Error("replaced"));
                    const { __staleWhileFetching: s3 } = oldVal;
                    if (s3 !== void 0 && !noDisposeOnSet) {
                        if (this.#hasDispose) {
                            this.#dispose?.(s3, k2, "set");
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([
                                s3,
                                k2,
                                "set"
                            ]);
                        }
                    }
                } else if (!noDisposeOnSet) {
                    if (this.#hasDispose) {
                        this.#dispose?.(oldVal, k2, "set");
                    }
                    if (this.#hasDisposeAfter) {
                        this.#disposed?.push([
                            oldVal,
                            k2,
                            "set"
                        ]);
                    }
                }
                this.#removeItemSize(index);
                this.#addItemSize(index, size, status);
                this.#valList[index] = v2;
                if (status) {
                    status.set = "replace";
                    const oldValue = oldVal && this.#isBackgroundFetch(oldVal) ? oldVal.__staleWhileFetching : oldVal;
                    if (oldValue !== void 0) status.oldValue = oldValue;
                }
            } else if (status) {
                status.set = "update";
            }
            if (this.#hasOnInsert) {
                this.onInsert?.(v2, k2, v2 === oldVal ? "update" : "replace");
            }
        }
        if (ttl !== 0 && !this.#ttls) {
            this.#initializeTTLTracking();
        }
        if (this.#ttls) {
            if (!noUpdateTTL) {
                this.#setItemTTL(index, ttl, start);
            }
            if (status) this.#statusTTL(status, index);
        }
        if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
            const dt2 = this.#disposed;
            let task;
            while(task = dt2?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
        return this;
    }
    pop() {
        try {
            while(this.#size){
                const val = this.#valList[this.#head];
                this.#evict(true);
                if (this.#isBackgroundFetch(val)) {
                    if (val.__staleWhileFetching) {
                        return val.__staleWhileFetching;
                    }
                } else if (val !== void 0) {
                    return val;
                }
            }
        } finally{
            if (this.#hasDisposeAfter && this.#disposed) {
                const dt2 = this.#disposed;
                let task;
                while(task = dt2?.shift()){
                    this.#disposeAfter?.(...task);
                }
            }
        }
    }
    #evict(free) {
        const head = this.#head;
        const k2 = this.#keyList[head];
        const v2 = this.#valList[head];
        if (this.#hasFetchMethod && this.#isBackgroundFetch(v2)) {
            v2.__abortController.abort(new Error("evicted"));
        } else if (this.#hasDispose || this.#hasDisposeAfter) {
            if (this.#hasDispose) {
                this.#dispose?.(v2, k2, "evict");
            }
            if (this.#hasDisposeAfter) {
                this.#disposed?.push([
                    v2,
                    k2,
                    "evict"
                ]);
            }
        }
        this.#removeItemSize(head);
        if (this.#autopurgeTimers?.[head]) {
            clearTimeout(this.#autopurgeTimers[head]);
            this.#autopurgeTimers[head] = void 0;
        }
        if (free) {
            this.#keyList[head] = void 0;
            this.#valList[head] = void 0;
            this.#free.push(head);
        }
        if (this.#size === 1) {
            this.#head = this.#tail = 0;
            this.#free.length = 0;
        } else {
            this.#head = this.#next[head];
        }
        this.#keyMap.delete(k2);
        this.#size--;
        return head;
    }
    has(k2, hasOptions = {}) {
        const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
        const index = this.#keyMap.get(k2);
        if (index !== void 0) {
            const v2 = this.#valList[index];
            if (this.#isBackgroundFetch(v2) && v2.__staleWhileFetching === void 0) {
                return false;
            }
            if (!this.#isStale(index)) {
                if (updateAgeOnHas) {
                    this.#updateItemAge(index);
                }
                if (status) {
                    status.has = "hit";
                    this.#statusTTL(status, index);
                }
                return true;
            } else if (status) {
                status.has = "stale";
                this.#statusTTL(status, index);
            }
        } else if (status) {
            status.has = "miss";
        }
        return false;
    }
    peek(k2, peekOptions = {}) {
        const { allowStale = this.allowStale } = peekOptions;
        const index = this.#keyMap.get(k2);
        if (index === void 0 || !allowStale && this.#isStale(index)) {
            return;
        }
        const v2 = this.#valList[index];
        return this.#isBackgroundFetch(v2) ? v2.__staleWhileFetching : v2;
    }
    #backgroundFetch(k2, index, options2, context2) {
        const v2 = index === void 0 ? void 0 : this.#valList[index];
        if (this.#isBackgroundFetch(v2)) {
            return v2;
        }
        const ac = new AC2();
        const { signal } = options2;
        signal?.addEventListener("abort", ()=>ac.abort(signal.reason), {
            signal: ac.signal
        });
        const fetchOpts = {
            signal: ac.signal,
            options: options2,
            context: context2
        };
        const cb = (v3, updateCache = false)=>{
            const { aborted: aborted2 } = ac.signal;
            const ignoreAbort = options2.ignoreFetchAbort && v3 !== void 0;
            const proceed = options2.ignoreFetchAbort || !!(options2.allowStaleOnFetchAbort && v3 !== void 0);
            if (options2.status) {
                if (aborted2 && !updateCache) {
                    options2.status.fetchAborted = true;
                    options2.status.fetchError = ac.signal.reason;
                    if (ignoreAbort) options2.status.fetchAbortIgnored = true;
                } else {
                    options2.status.fetchResolved = true;
                }
            }
            if (aborted2 && !ignoreAbort && !updateCache) {
                return fetchFail(ac.signal.reason, proceed);
            }
            const bf2 = p2;
            const vl = this.#valList[index];
            if (vl === p2 || ignoreAbort && updateCache && vl === void 0) {
                if (v3 === void 0) {
                    if (bf2.__staleWhileFetching !== void 0) {
                        this.#valList[index] = bf2.__staleWhileFetching;
                    } else {
                        this.#delete(k2, "fetch");
                    }
                } else {
                    if (options2.status) options2.status.fetchUpdated = true;
                    this.set(k2, v3, fetchOpts.options);
                }
            }
            return v3;
        };
        const eb = (er2)=>{
            if (options2.status) {
                options2.status.fetchRejected = true;
                options2.status.fetchError = er2;
            }
            return fetchFail(er2, false);
        };
        const fetchFail = (er2, proceed)=>{
            const { aborted: aborted2 } = ac.signal;
            const allowStaleAborted = aborted2 && options2.allowStaleOnFetchAbort;
            const allowStale = allowStaleAborted || options2.allowStaleOnFetchRejection;
            const noDelete = allowStale || options2.noDeleteOnFetchRejection;
            const bf2 = p2;
            if (this.#valList[index] === p2) {
                const del = !noDelete || !proceed && bf2.__staleWhileFetching === void 0;
                if (del) {
                    this.#delete(k2, "fetch");
                } else if (!allowStaleAborted) {
                    this.#valList[index] = bf2.__staleWhileFetching;
                }
            }
            if (allowStale) {
                if (options2.status && bf2.__staleWhileFetching !== void 0) {
                    options2.status.returnedStale = true;
                }
                return bf2.__staleWhileFetching;
            } else if (bf2.__returned === bf2) {
                throw er2;
            }
        };
        const pcall = (res, rej)=>{
            const fmp = this.#fetchMethod?.(k2, v2, fetchOpts);
            if (fmp && fmp instanceof Promise) {
                fmp.then((v3)=>res(v3 === void 0 ? void 0 : v3), rej);
            }
            ac.signal.addEventListener("abort", ()=>{
                if (!options2.ignoreFetchAbort || options2.allowStaleOnFetchAbort) {
                    res(void 0);
                    if (options2.allowStaleOnFetchAbort) {
                        res = (v3)=>cb(v3, true);
                    }
                }
            });
        };
        if (options2.status) options2.status.fetchDispatched = true;
        const p2 = new Promise(pcall).then(cb, eb);
        const bf = Object.assign(p2, {
            __abortController: ac,
            __staleWhileFetching: v2,
            __returned: void 0
        });
        if (index === void 0) {
            this.set(k2, bf, {
                ...fetchOpts.options,
                status: void 0
            });
            index = this.#keyMap.get(k2);
        } else {
            this.#valList[index] = bf;
        }
        return bf;
    }
    #isBackgroundFetch(p2) {
        if (!this.#hasFetchMethod) return false;
        const b2 = p2;
        return !!b2 && b2 instanceof Promise && b2.hasOwnProperty("__staleWhileFetching") && b2.__abortController instanceof AC2;
    }
    async fetch(k2, fetchOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, ttl = this.ttl, noDisposeOnSet = this.noDisposeOnSet, size = 0, sizeCalculation = this.sizeCalculation, noUpdateTTL = this.noUpdateTTL, noDeleteOnFetchRejection = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection = this.allowStaleOnFetchRejection, ignoreFetchAbort = this.ignoreFetchAbort, allowStaleOnFetchAbort = this.allowStaleOnFetchAbort, context: context2, forceRefresh = false, status, signal } = fetchOptions;
        if (!this.#hasFetchMethod) {
            if (status) status.fetch = "get";
            return this.get(k2, {
                allowStale,
                updateAgeOnGet,
                noDeleteOnStaleGet,
                status
            });
        }
        const options2 = {
            allowStale,
            updateAgeOnGet,
            noDeleteOnStaleGet,
            ttl,
            noDisposeOnSet,
            size,
            sizeCalculation,
            noUpdateTTL,
            noDeleteOnFetchRejection,
            allowStaleOnFetchRejection,
            allowStaleOnFetchAbort,
            ignoreFetchAbort,
            status,
            signal
        };
        let index = this.#keyMap.get(k2);
        if (index === void 0) {
            if (status) status.fetch = "miss";
            const p2 = this.#backgroundFetch(k2, index, options2, context2);
            return p2.__returned = p2;
        } else {
            const v2 = this.#valList[index];
            if (this.#isBackgroundFetch(v2)) {
                const stale = allowStale && v2.__staleWhileFetching !== void 0;
                if (status) {
                    status.fetch = "inflight";
                    if (stale) status.returnedStale = true;
                }
                return stale ? v2.__staleWhileFetching : v2.__returned = v2;
            }
            const isStale = this.#isStale(index);
            if (!forceRefresh && !isStale) {
                if (status) status.fetch = "hit";
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                if (status) this.#statusTTL(status, index);
                return v2;
            }
            const p2 = this.#backgroundFetch(k2, index, options2, context2);
            const hasStale = p2.__staleWhileFetching !== void 0;
            const staleVal = hasStale && allowStale;
            if (status) {
                status.fetch = isStale ? "stale" : "refresh";
                if (staleVal && isStale) status.returnedStale = true;
            }
            return staleVal ? p2.__staleWhileFetching : p2.__returned = p2;
        }
    }
    async forceFetch(k2, fetchOptions = {}) {
        const v2 = await this.fetch(k2, fetchOptions);
        if (v2 === void 0) throw new Error("fetch() returned undefined");
        return v2;
    }
    memo(k2, memoOptions = {}) {
        const memoMethod = this.#memoMethod;
        if (!memoMethod) {
            throw new Error("no memoMethod provided to constructor");
        }
        const { context: context2, forceRefresh, ...options2 } = memoOptions;
        const v2 = this.get(k2, options2);
        if (!forceRefresh && v2 !== void 0) return v2;
        const vv = memoMethod(k2, v2, {
            options: options2,
            context: context2
        });
        this.set(k2, vv, options2);
        return vv;
    }
    get(k2, getOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
        const index = this.#keyMap.get(k2);
        if (index !== void 0) {
            const value = this.#valList[index];
            const fetching = this.#isBackgroundFetch(value);
            if (status) this.#statusTTL(status, index);
            if (this.#isStale(index)) {
                if (status) status.get = "stale";
                if (!fetching) {
                    if (!noDeleteOnStaleGet) {
                        this.#delete(k2, "expire");
                    }
                    if (status && allowStale) status.returnedStale = true;
                    return allowStale ? value : void 0;
                } else {
                    if (status && allowStale && value.__staleWhileFetching !== void 0) {
                        status.returnedStale = true;
                    }
                    return allowStale ? value.__staleWhileFetching : void 0;
                }
            } else {
                if (status) status.get = "hit";
                if (fetching) {
                    return value.__staleWhileFetching;
                }
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                return value;
            }
        } else if (status) {
            status.get = "miss";
        }
    }
    #connect(p2, n) {
        this.#prev[n] = p2;
        this.#next[p2] = n;
    }
    #moveToTail(index) {
        if (index !== this.#tail) {
            if (index === this.#head) {
                this.#head = this.#next[index];
            } else {
                this.#connect(this.#prev[index], this.#next[index]);
            }
            this.#connect(this.#tail, index);
            this.#tail = index;
        }
    }
    delete(k2) {
        return this.#delete(k2, "delete");
    }
    #delete(k2, reason) {
        let deleted = false;
        if (this.#size !== 0) {
            const index = this.#keyMap.get(k2);
            if (index !== void 0) {
                if (this.#autopurgeTimers?.[index]) {
                    clearTimeout(this.#autopurgeTimers?.[index]);
                    this.#autopurgeTimers[index] = void 0;
                }
                deleted = true;
                if (this.#size === 1) {
                    this.#clear(reason);
                } else {
                    this.#removeItemSize(index);
                    const v2 = this.#valList[index];
                    if (this.#isBackgroundFetch(v2)) {
                        v2.__abortController.abort(new Error("deleted"));
                    } else if (this.#hasDispose || this.#hasDisposeAfter) {
                        if (this.#hasDispose) {
                            this.#dispose?.(v2, k2, reason);
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([
                                v2,
                                k2,
                                reason
                            ]);
                        }
                    }
                    this.#keyMap.delete(k2);
                    this.#keyList[index] = void 0;
                    this.#valList[index] = void 0;
                    if (index === this.#tail) {
                        this.#tail = this.#prev[index];
                    } else if (index === this.#head) {
                        this.#head = this.#next[index];
                    } else {
                        const pi2 = this.#prev[index];
                        this.#next[pi2] = this.#next[index];
                        const ni2 = this.#next[index];
                        this.#prev[ni2] = this.#prev[index];
                    }
                    this.#size--;
                    this.#free.push(index);
                }
            }
        }
        if (this.#hasDisposeAfter && this.#disposed?.length) {
            const dt2 = this.#disposed;
            let task;
            while(task = dt2?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
        return deleted;
    }
    clear() {
        return this.#clear("delete");
    }
    #clear(reason) {
        for (const index of this.#rindexes({
            allowStale: true
        })){
            const v2 = this.#valList[index];
            if (this.#isBackgroundFetch(v2)) {
                v2.__abortController.abort(new Error("deleted"));
            } else {
                const k2 = this.#keyList[index];
                if (this.#hasDispose) {
                    this.#dispose?.(v2, k2, reason);
                }
                if (this.#hasDisposeAfter) {
                    this.#disposed?.push([
                        v2,
                        k2,
                        reason
                    ]);
                }
            }
        }
        this.#keyMap.clear();
        this.#valList.fill(void 0);
        this.#keyList.fill(void 0);
        if (this.#ttls && this.#starts) {
            this.#ttls.fill(0);
            this.#starts.fill(0);
            for (const t of this.#autopurgeTimers ?? []){
                if (t !== void 0) clearTimeout(t);
            }
            this.#autopurgeTimers?.fill(void 0);
        }
        if (this.#sizes) {
            this.#sizes.fill(0);
        }
        this.#head = 0;
        this.#tail = 0;
        this.#free.length = 0;
        this.#calculatedSize = 0;
        this.#size = 0;
        if (this.#hasDisposeAfter && this.#disposed) {
            const dt2 = this.#disposed;
            let task;
            while(task = dt2?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
    }
};

}
