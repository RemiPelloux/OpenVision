var __classPrivateFieldSet, __classPrivateFieldGet, _a, _Stack_constructing, _LRUCache_instances, _LRUCache_max, _LRUCache_maxSize, _LRUCache_dispose, _LRUCache_onInsert, _LRUCache_disposeAfter, _LRUCache_fetchMethod, _LRUCache_memoMethod, _LRUCache_perf, _LRUCache_size, _LRUCache_calculatedSize, _LRUCache_keyMap, _LRUCache_keyList, _LRUCache_valList, _LRUCache_next, _LRUCache_prev, _LRUCache_head, _LRUCache_tail, _LRUCache_free, _LRUCache_disposed, _LRUCache_sizes, _LRUCache_starts, _LRUCache_ttls, _LRUCache_hasDispose, _LRUCache_hasFetchMethod, _LRUCache_hasDisposeAfter, _LRUCache_hasOnInsert, _LRUCache_initializeTTLTracking, _LRUCache_updateItemAge, _LRUCache_statusTTL, _LRUCache_setItemTTL, _LRUCache_isStale, _LRUCache_initializeSizeTracking, _LRUCache_removeItemSize, _LRUCache_addItemSize, _LRUCache_requireSize, _LRUCache_indexes, _LRUCache_rindexes, _LRUCache_isValidIndex, _LRUCache_evict, _LRUCache_backgroundFetch, _LRUCache_isBackgroundFetch, _LRUCache_connect, _LRUCache_moveToTail, _LRUCache_delete, _LRUCache_clear, _b, defaultPerf, warned, PROCESS, emitWarning, AC, AS, shouldWarn, isPosInt, getUintArray, ZeroArray, Stack, LRUCache;
export { AC, AS, LRUCache, PROCESS, Stack, ZeroArray, _LRUCache_addItemSize, _LRUCache_backgroundFetch, _LRUCache_calculatedSize, _LRUCache_clear, _LRUCache_connect, _LRUCache_delete, _LRUCache_dispose, _LRUCache_disposeAfter, _LRUCache_disposed, _LRUCache_evict, _LRUCache_fetchMethod, _LRUCache_free, _LRUCache_hasDispose, _LRUCache_hasDisposeAfter, _LRUCache_hasFetchMethod, _LRUCache_hasOnInsert, _LRUCache_head, _LRUCache_indexes, _LRUCache_initializeSizeTracking, _LRUCache_initializeTTLTracking, _LRUCache_instances, _LRUCache_isBackgroundFetch, _LRUCache_isStale, _LRUCache_isValidIndex, _LRUCache_keyList, _LRUCache_keyMap, _LRUCache_max, _LRUCache_maxSize, _LRUCache_memoMethod, _LRUCache_moveToTail, _LRUCache_next, _LRUCache_onInsert, _LRUCache_perf, _LRUCache_prev, _LRUCache_removeItemSize, _LRUCache_requireSize, _LRUCache_rindexes, _LRUCache_setItemTTL, _LRUCache_size, _LRUCache_sizes, _LRUCache_starts, _LRUCache_statusTTL, _LRUCache_tail, _LRUCache_ttls, _LRUCache_updateItemAge, _LRUCache_valList, _Stack_constructing, __classPrivateFieldGet, __classPrivateFieldSet, _a, _b, defaultPerf, emitWarning, getUintArray, isPosInt, shouldWarn, warned };
var __wakaru_init_lru_cache_initialized = false;
export function init_lru_cache() {
if (__wakaru_init_lru_cache_initialized) return;
__wakaru_init_lru_cache_initialized = true;
"use strict";
__classPrivateFieldSet = function(receiver, state, value, kind, f2) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
};
__classPrivateFieldGet = function(receiver, state, kind, f2) {
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
};
defaultPerf = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
warned = new Set();
PROCESS = typeof process === "object" && !!process ? process : {};
emitWarning = (msg, type2, code, fn)=>{
    typeof PROCESS.emitWarning === "function" ? PROCESS.emitWarning(msg, type2, code, fn) : console.error(`[${code}] ${type2}: ${msg}`);
};
AC = globalThis.AbortController;
AS = globalThis.AbortSignal;
if (typeof AC === "undefined") {
    AS = class AbortSignal {
        constructor(){
            this._onabort = [];
            this.aborted = false;
        }
        addEventListener(_2, fn) {
            this._onabort.push(fn);
        }
    };
    AC = class AbortController {
        constructor(){
            this.signal = new AS();
            warnACPolyfill();
        }
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
    let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1";
    const warnACPolyfill = ()=>{
        if (!printACPolyfillWarning) return;
        printACPolyfillWarning = false;
        emitWarning("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", warnACPolyfill);
    };
}
shouldWarn = (code)=>!warned.has(code);
isPosInt = (n)=>n && n === Math.floor(n) && n > 0 && Number.isFinite(n);
getUintArray = (max)=>!isPosInt(max) ? null : max <= 2 ** 8 ? Uint8Array : max <= 2 ** 16 ? Uint16Array : max <= 2 ** 32 ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
ZeroArray = class extends Array {
    constructor(size){
        super(size);
        this.fill(0);
    }
};
Stack = class {
    static create(max) {
        const HeapCls = getUintArray(max);
        if (!HeapCls) return [];
        __classPrivateFieldSet(_a, _a, true, "f", _Stack_constructing);
        const s3 = new _a(max, HeapCls);
        __classPrivateFieldSet(_a, _a, false, "f", _Stack_constructing);
        return s3;
    }
    constructor(max, HeapCls){
        if (!__classPrivateFieldGet(_a, _a, "f", _Stack_constructing)) {
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
_a = Stack;
_Stack_constructing = {
    value: false
};
LRUCache = class _LRUCache {
    get perf() {
        return __classPrivateFieldGet(this, _LRUCache_perf, "f");
    }
    static unsafeExposeInternals(c) {
        return {
            starts: __classPrivateFieldGet(c, _LRUCache_starts, "f"),
            ttls: __classPrivateFieldGet(c, _LRUCache_ttls, "f"),
            sizes: __classPrivateFieldGet(c, _LRUCache_sizes, "f"),
            keyMap: __classPrivateFieldGet(c, _LRUCache_keyMap, "f"),
            keyList: __classPrivateFieldGet(c, _LRUCache_keyList, "f"),
            valList: __classPrivateFieldGet(c, _LRUCache_valList, "f"),
            next: __classPrivateFieldGet(c, _LRUCache_next, "f"),
            prev: __classPrivateFieldGet(c, _LRUCache_prev, "f"),
            get head () {
                return __classPrivateFieldGet(c, _LRUCache_head, "f");
            },
            get tail () {
                return __classPrivateFieldGet(c, _LRUCache_tail, "f");
            },
            free: __classPrivateFieldGet(c, _LRUCache_free, "f"),
            isBackgroundFetch: (p2)=>__classPrivateFieldGet(c, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(c, p2),
            backgroundFetch: (k2, index, options2, context2)=>__classPrivateFieldGet(c, _LRUCache_instances, "m", _LRUCache_backgroundFetch).call(c, k2, index, options2, context2),
            moveToTail: (index)=>__classPrivateFieldGet(c, _LRUCache_instances, "m", _LRUCache_moveToTail).call(c, index),
            indexes: (options2)=>__classPrivateFieldGet(c, _LRUCache_instances, "m", _LRUCache_indexes).call(c, options2),
            rindexes: (options2)=>__classPrivateFieldGet(c, _LRUCache_instances, "m", _LRUCache_rindexes).call(c, options2),
            isStale: (index)=>__classPrivateFieldGet(c, _LRUCache_isStale, "f").call(c, index)
        };
    }
    get max() {
        return __classPrivateFieldGet(this, _LRUCache_max, "f");
    }
    get maxSize() {
        return __classPrivateFieldGet(this, _LRUCache_maxSize, "f");
    }
    get calculatedSize() {
        return __classPrivateFieldGet(this, _LRUCache_calculatedSize, "f");
    }
    get size() {
        return __classPrivateFieldGet(this, _LRUCache_size, "f");
    }
    get fetchMethod() {
        return __classPrivateFieldGet(this, _LRUCache_fetchMethod, "f");
    }
    get memoMethod() {
        return __classPrivateFieldGet(this, _LRUCache_memoMethod, "f");
    }
    get dispose() {
        return __classPrivateFieldGet(this, _LRUCache_dispose, "f");
    }
    get onInsert() {
        return __classPrivateFieldGet(this, _LRUCache_onInsert, "f");
    }
    get disposeAfter() {
        return __classPrivateFieldGet(this, _LRUCache_disposeAfter, "f");
    }
    constructor(options2){
        _LRUCache_instances.add(this);
        _LRUCache_max.set(this, void 0);
        _LRUCache_maxSize.set(this, void 0);
        _LRUCache_dispose.set(this, void 0);
        _LRUCache_onInsert.set(this, void 0);
        _LRUCache_disposeAfter.set(this, void 0);
        _LRUCache_fetchMethod.set(this, void 0);
        _LRUCache_memoMethod.set(this, void 0);
        _LRUCache_perf.set(this, void 0);
        _LRUCache_size.set(this, void 0);
        _LRUCache_calculatedSize.set(this, void 0);
        _LRUCache_keyMap.set(this, void 0);
        _LRUCache_keyList.set(this, void 0);
        _LRUCache_valList.set(this, void 0);
        _LRUCache_next.set(this, void 0);
        _LRUCache_prev.set(this, void 0);
        _LRUCache_head.set(this, void 0);
        _LRUCache_tail.set(this, void 0);
        _LRUCache_free.set(this, void 0);
        _LRUCache_disposed.set(this, void 0);
        _LRUCache_sizes.set(this, void 0);
        _LRUCache_starts.set(this, void 0);
        _LRUCache_ttls.set(this, void 0);
        _LRUCache_hasDispose.set(this, void 0);
        _LRUCache_hasFetchMethod.set(this, void 0);
        _LRUCache_hasDisposeAfter.set(this, void 0);
        _LRUCache_hasOnInsert.set(this, void 0);
        _LRUCache_updateItemAge.set(this, ()=>{});
        _LRUCache_statusTTL.set(this, ()=>{});
        _LRUCache_setItemTTL.set(this, ()=>{});
        _LRUCache_isStale.set(this, ()=>false);
        _LRUCache_removeItemSize.set(this, (_i2)=>{});
        _LRUCache_addItemSize.set(this, (_i2, _s2, _st)=>{});
        _LRUCache_requireSize.set(this, (_k, _v, size, sizeCalculation2)=>{
            if (size || sizeCalculation2) {
                throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
            }
            return 0;
        });
        this[_b] = "LRUCache";
        const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose: dispose2, onInsert, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, memoMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort, perf } = options2;
        if (perf !== void 0) {
            if (typeof perf?.now !== "function") {
                throw new TypeError("perf option must have a now() method if specified");
            }
        }
        __classPrivateFieldSet(this, _LRUCache_perf, perf ?? defaultPerf, "f");
        if (max !== 0 && !isPosInt(max)) {
            throw new TypeError("max option must be a nonnegative integer");
        }
        const UintArray = max ? getUintArray(max) : Array;
        if (!UintArray) {
            throw new Error(`invalid max value: ${max}`);
        }
        __classPrivateFieldSet(this, _LRUCache_max, max, "f");
        __classPrivateFieldSet(this, _LRUCache_maxSize, maxSize, "f");
        this.maxEntrySize = maxEntrySize || __classPrivateFieldGet(this, _LRUCache_maxSize, "f");
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
            if (!__classPrivateFieldGet(this, _LRUCache_maxSize, "f") && !this.maxEntrySize) {
                throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            }
            if (typeof this.sizeCalculation !== "function") {
                throw new TypeError("sizeCalculation set to non-function");
            }
        }
        if (memoMethod !== void 0 && typeof memoMethod !== "function") {
            throw new TypeError("memoMethod must be a function if defined");
        }
        __classPrivateFieldSet(this, _LRUCache_memoMethod, memoMethod, "f");
        if (fetchMethod !== void 0 && typeof fetchMethod !== "function") {
            throw new TypeError("fetchMethod must be a function if specified");
        }
        __classPrivateFieldSet(this, _LRUCache_fetchMethod, fetchMethod, "f");
        __classPrivateFieldSet(this, _LRUCache_hasFetchMethod, !!fetchMethod, "f");
        __classPrivateFieldSet(this, _LRUCache_keyMap, new Map(), "f");
        __classPrivateFieldSet(this, _LRUCache_keyList, new Array(max).fill(void 0), "f");
        __classPrivateFieldSet(this, _LRUCache_valList, new Array(max).fill(void 0), "f");
        __classPrivateFieldSet(this, _LRUCache_next, new UintArray(max), "f");
        __classPrivateFieldSet(this, _LRUCache_prev, new UintArray(max), "f");
        __classPrivateFieldSet(this, _LRUCache_head, 0, "f");
        __classPrivateFieldSet(this, _LRUCache_tail, 0, "f");
        __classPrivateFieldSet(this, _LRUCache_free, Stack.create(max), "f");
        __classPrivateFieldSet(this, _LRUCache_size, 0, "f");
        __classPrivateFieldSet(this, _LRUCache_calculatedSize, 0, "f");
        if (typeof dispose2 === "function") {
            __classPrivateFieldSet(this, _LRUCache_dispose, dispose2, "f");
        }
        if (typeof onInsert === "function") {
            __classPrivateFieldSet(this, _LRUCache_onInsert, onInsert, "f");
        }
        if (typeof disposeAfter === "function") {
            __classPrivateFieldSet(this, _LRUCache_disposeAfter, disposeAfter, "f");
            __classPrivateFieldSet(this, _LRUCache_disposed, [], "f");
        } else {
            __classPrivateFieldSet(this, _LRUCache_disposeAfter, void 0, "f");
            __classPrivateFieldSet(this, _LRUCache_disposed, void 0, "f");
        }
        __classPrivateFieldSet(this, _LRUCache_hasDispose, !!__classPrivateFieldGet(this, _LRUCache_dispose, "f"), "f");
        __classPrivateFieldSet(this, _LRUCache_hasOnInsert, !!__classPrivateFieldGet(this, _LRUCache_onInsert, "f"), "f");
        __classPrivateFieldSet(this, _LRUCache_hasDisposeAfter, !!__classPrivateFieldGet(this, _LRUCache_disposeAfter, "f"), "f");
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        if (this.maxEntrySize !== 0) {
            if (__classPrivateFieldGet(this, _LRUCache_maxSize, "f") !== 0) {
                if (!isPosInt(__classPrivateFieldGet(this, _LRUCache_maxSize, "f"))) {
                    throw new TypeError("maxSize must be a positive integer if specified");
                }
            }
            if (!isPosInt(this.maxEntrySize)) {
                throw new TypeError("maxEntrySize must be a positive integer if specified");
            }
            __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_initializeSizeTracking).call(this);
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
            if (!isPosInt(this.ttl)) {
                throw new TypeError("ttl must be a positive integer if specified");
            }
            __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_initializeTTLTracking).call(this);
        }
        if (__classPrivateFieldGet(this, _LRUCache_max, "f") === 0 && this.ttl === 0 && __classPrivateFieldGet(this, _LRUCache_maxSize, "f") === 0) {
            throw new TypeError("At least one of max, maxSize, or ttl is required");
        }
        if (!this.ttlAutopurge && !__classPrivateFieldGet(this, _LRUCache_max, "f") && !__classPrivateFieldGet(this, _LRUCache_maxSize, "f")) {
            const code = "LRU_CACHE_UNBOUNDED";
            if (shouldWarn(code)) {
                warned.add(code);
                const msg = "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.";
                emitWarning(msg, "UnboundedCacheWarning", code, _LRUCache);
            }
        }
    }
    getRemainingTTL(key) {
        return __classPrivateFieldGet(this, _LRUCache_keyMap, "f").has(key) ? Infinity : 0;
    }
    *entries() {
        for (const i of __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_indexes).call(this)){
            if (__classPrivateFieldGet(this, _LRUCache_valList, "f")[i] !== void 0 && __classPrivateFieldGet(this, _LRUCache_keyList, "f")[i] !== void 0 && !__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, __classPrivateFieldGet(this, _LRUCache_valList, "f")[i])) {
                yield [
                    __classPrivateFieldGet(this, _LRUCache_keyList, "f")[i],
                    __classPrivateFieldGet(this, _LRUCache_valList, "f")[i]
                ];
            }
        }
    }
    *rentries() {
        for (const i of __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_rindexes).call(this)){
            if (__classPrivateFieldGet(this, _LRUCache_valList, "f")[i] !== void 0 && __classPrivateFieldGet(this, _LRUCache_keyList, "f")[i] !== void 0 && !__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, __classPrivateFieldGet(this, _LRUCache_valList, "f")[i])) {
                yield [
                    __classPrivateFieldGet(this, _LRUCache_keyList, "f")[i],
                    __classPrivateFieldGet(this, _LRUCache_valList, "f")[i]
                ];
            }
        }
    }
    *keys() {
        for (const i of __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_indexes).call(this)){
            const k2 = __classPrivateFieldGet(this, _LRUCache_keyList, "f")[i];
            if (k2 !== void 0 && !__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, __classPrivateFieldGet(this, _LRUCache_valList, "f")[i])) {
                yield k2;
            }
        }
    }
    *rkeys() {
        for (const i of __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_rindexes).call(this)){
            const k2 = __classPrivateFieldGet(this, _LRUCache_keyList, "f")[i];
            if (k2 !== void 0 && !__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, __classPrivateFieldGet(this, _LRUCache_valList, "f")[i])) {
                yield k2;
            }
        }
    }
    *values() {
        for (const i of __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_indexes).call(this)){
            const v2 = __classPrivateFieldGet(this, _LRUCache_valList, "f")[i];
            if (v2 !== void 0 && !__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, __classPrivateFieldGet(this, _LRUCache_valList, "f")[i])) {
                yield __classPrivateFieldGet(this, _LRUCache_valList, "f")[i];
            }
        }
    }
    *rvalues() {
        for (const i of __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_rindexes).call(this)){
            const v2 = __classPrivateFieldGet(this, _LRUCache_valList, "f")[i];
            if (v2 !== void 0 && !__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, __classPrivateFieldGet(this, _LRUCache_valList, "f")[i])) {
                yield __classPrivateFieldGet(this, _LRUCache_valList, "f")[i];
            }
        }
    }
    [(_LRUCache_max = new WeakMap(), _LRUCache_maxSize = new WeakMap(), _LRUCache_dispose = new WeakMap(), _LRUCache_onInsert = new WeakMap(), _LRUCache_disposeAfter = new WeakMap(), _LRUCache_fetchMethod = new WeakMap(), _LRUCache_memoMethod = new WeakMap(), _LRUCache_perf = new WeakMap(), _LRUCache_size = new WeakMap(), _LRUCache_calculatedSize = new WeakMap(), _LRUCache_keyMap = new WeakMap(), _LRUCache_keyList = new WeakMap(), _LRUCache_valList = new WeakMap(), _LRUCache_next = new WeakMap(), _LRUCache_prev = new WeakMap(), _LRUCache_head = new WeakMap(), _LRUCache_tail = new WeakMap(), _LRUCache_free = new WeakMap(), _LRUCache_disposed = new WeakMap(), _LRUCache_sizes = new WeakMap(), _LRUCache_starts = new WeakMap(), _LRUCache_ttls = new WeakMap(), _LRUCache_hasDispose = new WeakMap(), _LRUCache_hasFetchMethod = new WeakMap(), _LRUCache_hasDisposeAfter = new WeakMap(), _LRUCache_hasOnInsert = new WeakMap(), _LRUCache_updateItemAge = new WeakMap(), _LRUCache_statusTTL = new WeakMap(), _LRUCache_setItemTTL = new WeakMap(), _LRUCache_isStale = new WeakMap(), _LRUCache_removeItemSize = new WeakMap(), _LRUCache_addItemSize = new WeakMap(), _LRUCache_requireSize = new WeakMap(), _LRUCache_instances = new WeakSet(), _LRUCache_initializeTTLTracking = function _LRUCache_initializeTTLTracking2() {
        const ttls = new ZeroArray(__classPrivateFieldGet(this, _LRUCache_max, "f"));
        const starts = new ZeroArray(__classPrivateFieldGet(this, _LRUCache_max, "f"));
        __classPrivateFieldSet(this, _LRUCache_ttls, ttls, "f");
        __classPrivateFieldSet(this, _LRUCache_starts, starts, "f");
        __classPrivateFieldSet(this, _LRUCache_setItemTTL, (index, ttl, start = __classPrivateFieldGet(this, _LRUCache_perf, "f").now())=>{
            starts[index] = ttl !== 0 ? start : 0;
            ttls[index] = ttl;
            if (ttl !== 0 && this.ttlAutopurge) {
                const t = setTimeout(()=>{
                    if (__classPrivateFieldGet(this, _LRUCache_isStale, "f").call(this, index)) {
                        __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_delete).call(this, __classPrivateFieldGet(this, _LRUCache_keyList, "f")[index], "expire");
                    }
                }, ttl + 1);
                if (t.unref) {
                    t.unref();
                }
            }
        }, "f");
        __classPrivateFieldSet(this, _LRUCache_updateItemAge, (index)=>{
            starts[index] = ttls[index] !== 0 ? __classPrivateFieldGet(this, _LRUCache_perf, "f").now() : 0;
        }, "f");
        __classPrivateFieldSet(this, _LRUCache_statusTTL, (status, index)=>{
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
        }, "f");
        let cachedNow = 0;
        const getNow = ()=>{
            const n = __classPrivateFieldGet(this, _LRUCache_perf, "f").now();
            if (this.ttlResolution > 0) {
                cachedNow = n;
                const t = setTimeout(()=>{
                    cachedNow = 0;
                }, this.ttlResolution);
                if (t.unref) {
                    t.unref();
                }
            }
            return n;
        };
        this.getRemainingTTL = (key)=>{
            const index = __classPrivateFieldGet(this, _LRUCache_keyMap, "f").get(key);
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
        __classPrivateFieldSet(this, _LRUCache_isStale, (index)=>{
            const s3 = starts[index];
            const t = ttls[index];
            return !!t && !!s3 && (cachedNow || getNow()) - s3 > t;
        }, "f");
    }, _LRUCache_initializeSizeTracking = function _LRUCache_initializeSizeTracking2() {
        const sizes = new ZeroArray(__classPrivateFieldGet(this, _LRUCache_max, "f"));
        __classPrivateFieldSet(this, _LRUCache_calculatedSize, 0, "f");
        __classPrivateFieldSet(this, _LRUCache_sizes, sizes, "f");
        __classPrivateFieldSet(this, _LRUCache_removeItemSize, (index)=>{
            __classPrivateFieldSet(this, _LRUCache_calculatedSize, __classPrivateFieldGet(this, _LRUCache_calculatedSize, "f") - sizes[index], "f");
            sizes[index] = 0;
        }, "f");
        __classPrivateFieldSet(this, _LRUCache_requireSize, (k2, v2, size, sizeCalculation)=>{
            if (__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, v2)) {
                return 0;
            }
            if (!isPosInt(size)) {
                if (sizeCalculation) {
                    if (typeof sizeCalculation !== "function") {
                        throw new TypeError("sizeCalculation must be a function");
                    }
                    size = sizeCalculation(v2, k2);
                    if (!isPosInt(size)) {
                        throw new TypeError("sizeCalculation return invalid (expect positive integer)");
                    }
                } else {
                    throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                }
            }
            return size;
        }, "f");
        __classPrivateFieldSet(this, _LRUCache_addItemSize, (index, size, status)=>{
            sizes[index] = size;
            if (__classPrivateFieldGet(this, _LRUCache_maxSize, "f")) {
                const maxSize = __classPrivateFieldGet(this, _LRUCache_maxSize, "f") - sizes[index];
                while(__classPrivateFieldGet(this, _LRUCache_calculatedSize, "f") > maxSize){
                    __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_evict).call(this, true);
                }
            }
            __classPrivateFieldSet(this, _LRUCache_calculatedSize, __classPrivateFieldGet(this, _LRUCache_calculatedSize, "f") + sizes[index], "f");
            if (status) {
                status.entrySize = size;
                status.totalCalculatedSize = __classPrivateFieldGet(this, _LRUCache_calculatedSize, "f");
            }
        }, "f");
    }, _LRUCache_indexes = function* _LRUCache_indexes2({ allowStale = this.allowStale } = {}) {
        if (__classPrivateFieldGet(this, _LRUCache_size, "f")) {
            for(let i = __classPrivateFieldGet(this, _LRUCache_tail, "f"); true;){
                if (!__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isValidIndex).call(this, i)) {
                    break;
                }
                if (allowStale || !__classPrivateFieldGet(this, _LRUCache_isStale, "f").call(this, i)) {
                    yield i;
                }
                if (i === __classPrivateFieldGet(this, _LRUCache_head, "f")) {
                    break;
                } else {
                    i = __classPrivateFieldGet(this, _LRUCache_prev, "f")[i];
                }
            }
        }
    }, _LRUCache_rindexes = function* _LRUCache_rindexes2({ allowStale = this.allowStale } = {}) {
        if (__classPrivateFieldGet(this, _LRUCache_size, "f")) {
            for(let i = __classPrivateFieldGet(this, _LRUCache_head, "f"); true;){
                if (!__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isValidIndex).call(this, i)) {
                    break;
                }
                if (allowStale || !__classPrivateFieldGet(this, _LRUCache_isStale, "f").call(this, i)) {
                    yield i;
                }
                if (i === __classPrivateFieldGet(this, _LRUCache_tail, "f")) {
                    break;
                } else {
                    i = __classPrivateFieldGet(this, _LRUCache_next, "f")[i];
                }
            }
        }
    }, _LRUCache_isValidIndex = function _LRUCache_isValidIndex2(index) {
        return index !== void 0 && __classPrivateFieldGet(this, _LRUCache_keyMap, "f").get(__classPrivateFieldGet(this, _LRUCache_keyList, "f")[index]) === index;
    }, Symbol.iterator)]() {
        return this.entries();
    }
    find(fn, getOptions = {}) {
        for (const i of __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_indexes).call(this)){
            const v2 = __classPrivateFieldGet(this, _LRUCache_valList, "f")[i];
            const value = __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, v2) ? v2.__staleWhileFetching : v2;
            if (value === void 0) continue;
            if (fn(value, __classPrivateFieldGet(this, _LRUCache_keyList, "f")[i], this)) {
                return this.get(__classPrivateFieldGet(this, _LRUCache_keyList, "f")[i], getOptions);
            }
        }
        return void 0;
    }
    forEach(fn, thisp = this) {
        for (const i of __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_indexes).call(this)){
            const v2 = __classPrivateFieldGet(this, _LRUCache_valList, "f")[i];
            const value = __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, v2) ? v2.__staleWhileFetching : v2;
            if (value === void 0) continue;
            fn.call(thisp, value, __classPrivateFieldGet(this, _LRUCache_keyList, "f")[i], this);
        }
    }
    rforEach(fn, thisp = this) {
        for (const i of __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_rindexes).call(this)){
            const v2 = __classPrivateFieldGet(this, _LRUCache_valList, "f")[i];
            const value = __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, v2) ? v2.__staleWhileFetching : v2;
            if (value === void 0) continue;
            fn.call(thisp, value, __classPrivateFieldGet(this, _LRUCache_keyList, "f")[i], this);
        }
    }
    purgeStale() {
        let deleted = false;
        for (const i of __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_rindexes).call(this, {
            allowStale: true
        })){
            if (__classPrivateFieldGet(this, _LRUCache_isStale, "f").call(this, i)) {
                __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_delete).call(this, __classPrivateFieldGet(this, _LRUCache_keyList, "f")[i], "expire");
                deleted = true;
            }
        }
        return deleted;
    }
    info(key) {
        const i = __classPrivateFieldGet(this, _LRUCache_keyMap, "f").get(key);
        if (i === void 0) return void 0;
        const v2 = __classPrivateFieldGet(this, _LRUCache_valList, "f")[i];
        const value = __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, v2) ? v2.__staleWhileFetching : v2;
        if (value === void 0) return void 0;
        const entry = {
            value
        };
        if (__classPrivateFieldGet(this, _LRUCache_ttls, "f") && __classPrivateFieldGet(this, _LRUCache_starts, "f")) {
            const ttl = __classPrivateFieldGet(this, _LRUCache_ttls, "f")[i];
            const start = __classPrivateFieldGet(this, _LRUCache_starts, "f")[i];
            if (ttl && start) {
                const remain = ttl - (__classPrivateFieldGet(this, _LRUCache_perf, "f").now() - start);
                entry.ttl = remain;
                entry.start = Date.now();
            }
        }
        if (__classPrivateFieldGet(this, _LRUCache_sizes, "f")) {
            entry.size = __classPrivateFieldGet(this, _LRUCache_sizes, "f")[i];
        }
        return entry;
    }
    dump() {
        const arr = [];
        for (const i of __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_indexes).call(this, {
            allowStale: true
        })){
            const key = __classPrivateFieldGet(this, _LRUCache_keyList, "f")[i];
            const v2 = __classPrivateFieldGet(this, _LRUCache_valList, "f")[i];
            const value = __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, v2) ? v2.__staleWhileFetching : v2;
            if (value === void 0 || key === void 0) continue;
            const entry = {
                value
            };
            if (__classPrivateFieldGet(this, _LRUCache_ttls, "f") && __classPrivateFieldGet(this, _LRUCache_starts, "f")) {
                entry.ttl = __classPrivateFieldGet(this, _LRUCache_ttls, "f")[i];
                const age = __classPrivateFieldGet(this, _LRUCache_perf, "f").now() - __classPrivateFieldGet(this, _LRUCache_starts, "f")[i];
                entry.start = Math.floor(Date.now() - age);
            }
            if (__classPrivateFieldGet(this, _LRUCache_sizes, "f")) {
                entry.size = __classPrivateFieldGet(this, _LRUCache_sizes, "f")[i];
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
                entry.start = __classPrivateFieldGet(this, _LRUCache_perf, "f").now() - age;
            }
            this.set(key, entry.value, entry);
        }
    }
    set(k2, v2, setOptions = {}) {
        var _c;
        if (v2 === void 0) {
            this.delete(k2);
            return this;
        }
        const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
        let { noUpdateTTL = this.noUpdateTTL } = setOptions;
        const size = __classPrivateFieldGet(this, _LRUCache_requireSize, "f").call(this, k2, v2, setOptions.size || 0, sizeCalculation);
        if (this.maxEntrySize && size > this.maxEntrySize) {
            if (status) {
                status.set = "miss";
                status.maxEntrySizeExceeded = true;
            }
            __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_delete).call(this, k2, "set");
            return this;
        }
        let index = __classPrivateFieldGet(this, _LRUCache_size, "f") === 0 ? void 0 : __classPrivateFieldGet(this, _LRUCache_keyMap, "f").get(k2);
        if (index === void 0) {
            index = __classPrivateFieldGet(this, _LRUCache_size, "f") === 0 ? __classPrivateFieldGet(this, _LRUCache_tail, "f") : __classPrivateFieldGet(this, _LRUCache_free, "f").length !== 0 ? __classPrivateFieldGet(this, _LRUCache_free, "f").pop() : __classPrivateFieldGet(this, _LRUCache_size, "f") === __classPrivateFieldGet(this, _LRUCache_max, "f") ? __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_evict).call(this, false) : __classPrivateFieldGet(this, _LRUCache_size, "f");
            __classPrivateFieldGet(this, _LRUCache_keyList, "f")[index] = k2;
            __classPrivateFieldGet(this, _LRUCache_valList, "f")[index] = v2;
            __classPrivateFieldGet(this, _LRUCache_keyMap, "f").set(k2, index);
            __classPrivateFieldGet(this, _LRUCache_next, "f")[__classPrivateFieldGet(this, _LRUCache_tail, "f")] = index;
            __classPrivateFieldGet(this, _LRUCache_prev, "f")[index] = __classPrivateFieldGet(this, _LRUCache_tail, "f");
            __classPrivateFieldSet(this, _LRUCache_tail, index, "f");
            __classPrivateFieldSet(this, _LRUCache_size, (_c = __classPrivateFieldGet(this, _LRUCache_size, "f"), _c++, _c), "f");
            __classPrivateFieldGet(this, _LRUCache_addItemSize, "f").call(this, index, size, status);
            if (status) status.set = "add";
            noUpdateTTL = false;
            if (__classPrivateFieldGet(this, _LRUCache_hasOnInsert, "f")) {
                __classPrivateFieldGet(this, _LRUCache_onInsert, "f")?.call(this, v2, k2, "add");
            }
        } else {
            __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_moveToTail).call(this, index);
            const oldVal = __classPrivateFieldGet(this, _LRUCache_valList, "f")[index];
            if (v2 !== oldVal) {
                if (__classPrivateFieldGet(this, _LRUCache_hasFetchMethod, "f") && __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, oldVal)) {
                    oldVal.__abortController.abort(new Error("replaced"));
                    const { __staleWhileFetching: s3 } = oldVal;
                    if (s3 !== void 0 && !noDisposeOnSet) {
                        if (__classPrivateFieldGet(this, _LRUCache_hasDispose, "f")) {
                            __classPrivateFieldGet(this, _LRUCache_dispose, "f")?.call(this, s3, k2, "set");
                        }
                        if (__classPrivateFieldGet(this, _LRUCache_hasDisposeAfter, "f")) {
                            __classPrivateFieldGet(this, _LRUCache_disposed, "f")?.push([
                                s3,
                                k2,
                                "set"
                            ]);
                        }
                    }
                } else if (!noDisposeOnSet) {
                    if (__classPrivateFieldGet(this, _LRUCache_hasDispose, "f")) {
                        __classPrivateFieldGet(this, _LRUCache_dispose, "f")?.call(this, oldVal, k2, "set");
                    }
                    if (__classPrivateFieldGet(this, _LRUCache_hasDisposeAfter, "f")) {
                        __classPrivateFieldGet(this, _LRUCache_disposed, "f")?.push([
                            oldVal,
                            k2,
                            "set"
                        ]);
                    }
                }
                __classPrivateFieldGet(this, _LRUCache_removeItemSize, "f").call(this, index);
                __classPrivateFieldGet(this, _LRUCache_addItemSize, "f").call(this, index, size, status);
                __classPrivateFieldGet(this, _LRUCache_valList, "f")[index] = v2;
                if (status) {
                    status.set = "replace";
                    const oldValue = oldVal && __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, oldVal) ? oldVal.__staleWhileFetching : oldVal;
                    if (oldValue !== void 0) status.oldValue = oldValue;
                }
            } else if (status) {
                status.set = "update";
            }
            if (__classPrivateFieldGet(this, _LRUCache_hasOnInsert, "f")) {
                this.onInsert?.(v2, k2, v2 === oldVal ? "update" : "replace");
            }
        }
        if (ttl !== 0 && !__classPrivateFieldGet(this, _LRUCache_ttls, "f")) {
            __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_initializeTTLTracking).call(this);
        }
        if (__classPrivateFieldGet(this, _LRUCache_ttls, "f")) {
            if (!noUpdateTTL) {
                __classPrivateFieldGet(this, _LRUCache_setItemTTL, "f").call(this, index, ttl, start);
            }
            if (status) __classPrivateFieldGet(this, _LRUCache_statusTTL, "f").call(this, status, index);
        }
        if (!noDisposeOnSet && __classPrivateFieldGet(this, _LRUCache_hasDisposeAfter, "f") && __classPrivateFieldGet(this, _LRUCache_disposed, "f")) {
            const dt2 = __classPrivateFieldGet(this, _LRUCache_disposed, "f");
            let task;
            while(task = dt2?.shift()){
                __classPrivateFieldGet(this, _LRUCache_disposeAfter, "f")?.call(this, ...task);
            }
        }
        return this;
    }
    pop() {
        try {
            while(__classPrivateFieldGet(this, _LRUCache_size, "f")){
                const val = __classPrivateFieldGet(this, _LRUCache_valList, "f")[__classPrivateFieldGet(this, _LRUCache_head, "f")];
                __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_evict).call(this, true);
                if (__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, val)) {
                    if (val.__staleWhileFetching) {
                        return val.__staleWhileFetching;
                    }
                } else if (val !== void 0) {
                    return val;
                }
            }
            return void 0;
        } finally{
            if (__classPrivateFieldGet(this, _LRUCache_hasDisposeAfter, "f") && __classPrivateFieldGet(this, _LRUCache_disposed, "f")) {
                const dt2 = __classPrivateFieldGet(this, _LRUCache_disposed, "f");
                let task;
                while(task = dt2?.shift()){
                    __classPrivateFieldGet(this, _LRUCache_disposeAfter, "f")?.call(this, ...task);
                }
            }
        }
    }
    has(k2, hasOptions = {}) {
        const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
        const index = __classPrivateFieldGet(this, _LRUCache_keyMap, "f").get(k2);
        if (index !== void 0) {
            const v2 = __classPrivateFieldGet(this, _LRUCache_valList, "f")[index];
            if (__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, v2) && v2.__staleWhileFetching === void 0) {
                return false;
            }
            if (!__classPrivateFieldGet(this, _LRUCache_isStale, "f").call(this, index)) {
                if (updateAgeOnHas) {
                    __classPrivateFieldGet(this, _LRUCache_updateItemAge, "f").call(this, index);
                }
                if (status) {
                    status.has = "hit";
                    __classPrivateFieldGet(this, _LRUCache_statusTTL, "f").call(this, status, index);
                }
                return true;
            } else if (status) {
                status.has = "stale";
                __classPrivateFieldGet(this, _LRUCache_statusTTL, "f").call(this, status, index);
            }
        } else if (status) {
            status.has = "miss";
        }
        return false;
    }
    peek(k2, peekOptions = {}) {
        const { allowStale = this.allowStale } = peekOptions;
        const index = __classPrivateFieldGet(this, _LRUCache_keyMap, "f").get(k2);
        if (index === void 0 || !allowStale && __classPrivateFieldGet(this, _LRUCache_isStale, "f").call(this, index)) {
            return;
        }
        const v2 = __classPrivateFieldGet(this, _LRUCache_valList, "f")[index];
        return __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, v2) ? v2.__staleWhileFetching : v2;
    }
    async fetch(k2, fetchOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, ttl = this.ttl, noDisposeOnSet = this.noDisposeOnSet, size = 0, sizeCalculation = this.sizeCalculation, noUpdateTTL = this.noUpdateTTL, noDeleteOnFetchRejection = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection = this.allowStaleOnFetchRejection, ignoreFetchAbort = this.ignoreFetchAbort, allowStaleOnFetchAbort = this.allowStaleOnFetchAbort, context: context2, forceRefresh = false, status, signal } = fetchOptions;
        if (!__classPrivateFieldGet(this, _LRUCache_hasFetchMethod, "f")) {
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
        const index = __classPrivateFieldGet(this, _LRUCache_keyMap, "f").get(k2);
        if (index === void 0) {
            if (status) status.fetch = "miss";
            const p2 = __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_backgroundFetch).call(this, k2, index, options2, context2);
            return p2.__returned = p2;
        } else {
            const v2 = __classPrivateFieldGet(this, _LRUCache_valList, "f")[index];
            if (__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, v2)) {
                const stale = allowStale && v2.__staleWhileFetching !== void 0;
                if (status) {
                    status.fetch = "inflight";
                    if (stale) status.returnedStale = true;
                }
                return stale ? v2.__staleWhileFetching : v2.__returned = v2;
            }
            const isStale = __classPrivateFieldGet(this, _LRUCache_isStale, "f").call(this, index);
            if (!forceRefresh && !isStale) {
                if (status) status.fetch = "hit";
                __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_moveToTail).call(this, index);
                if (updateAgeOnGet) {
                    __classPrivateFieldGet(this, _LRUCache_updateItemAge, "f").call(this, index);
                }
                if (status) __classPrivateFieldGet(this, _LRUCache_statusTTL, "f").call(this, status, index);
                return v2;
            }
            const p2 = __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_backgroundFetch).call(this, k2, index, options2, context2);
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
        const memoMethod = __classPrivateFieldGet(this, _LRUCache_memoMethod, "f");
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
        const index = __classPrivateFieldGet(this, _LRUCache_keyMap, "f").get(k2);
        if (index !== void 0) {
            const value = __classPrivateFieldGet(this, _LRUCache_valList, "f")[index];
            const fetching = __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, value);
            if (status) __classPrivateFieldGet(this, _LRUCache_statusTTL, "f").call(this, status, index);
            if (__classPrivateFieldGet(this, _LRUCache_isStale, "f").call(this, index)) {
                if (status) status.get = "stale";
                if (!fetching) {
                    if (!noDeleteOnStaleGet) {
                        __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_delete).call(this, k2, "expire");
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
                __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_moveToTail).call(this, index);
                if (updateAgeOnGet) {
                    __classPrivateFieldGet(this, _LRUCache_updateItemAge, "f").call(this, index);
                }
                return value;
            }
        } else if (status) {
            status.get = "miss";
        }
        return void 0;
    }
    delete(k2) {
        return __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_delete).call(this, k2, "delete");
    }
    clear() {
        __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_clear).call(this, "delete");
    }
};
_b = Symbol.toStringTag, _LRUCache_evict = function _LRUCache_evict2(free) {
    var _c;
    const head = __classPrivateFieldGet(this, _LRUCache_head, "f");
    const k2 = __classPrivateFieldGet(this, _LRUCache_keyList, "f")[head];
    const v2 = __classPrivateFieldGet(this, _LRUCache_valList, "f")[head];
    if (__classPrivateFieldGet(this, _LRUCache_hasFetchMethod, "f") && __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, v2)) {
        v2.__abortController.abort(new Error("evicted"));
    } else if (__classPrivateFieldGet(this, _LRUCache_hasDispose, "f") || __classPrivateFieldGet(this, _LRUCache_hasDisposeAfter, "f")) {
        if (__classPrivateFieldGet(this, _LRUCache_hasDispose, "f")) {
            __classPrivateFieldGet(this, _LRUCache_dispose, "f")?.call(this, v2, k2, "evict");
        }
        if (__classPrivateFieldGet(this, _LRUCache_hasDisposeAfter, "f")) {
            __classPrivateFieldGet(this, _LRUCache_disposed, "f")?.push([
                v2,
                k2,
                "evict"
            ]);
        }
    }
    __classPrivateFieldGet(this, _LRUCache_removeItemSize, "f").call(this, head);
    if (free) {
        __classPrivateFieldGet(this, _LRUCache_keyList, "f")[head] = void 0;
        __classPrivateFieldGet(this, _LRUCache_valList, "f")[head] = void 0;
        __classPrivateFieldGet(this, _LRUCache_free, "f").push(head);
    }
    if (__classPrivateFieldGet(this, _LRUCache_size, "f") === 1) {
        __classPrivateFieldSet(this, _LRUCache_head, __classPrivateFieldSet(this, _LRUCache_tail, 0, "f"), "f");
        __classPrivateFieldGet(this, _LRUCache_free, "f").length = 0;
    } else {
        __classPrivateFieldSet(this, _LRUCache_head, __classPrivateFieldGet(this, _LRUCache_next, "f")[head], "f");
    }
    __classPrivateFieldGet(this, _LRUCache_keyMap, "f").delete(k2);
    __classPrivateFieldSet(this, _LRUCache_size, (_c = __classPrivateFieldGet(this, _LRUCache_size, "f"), _c--, _c), "f");
    return head;
}, _LRUCache_backgroundFetch = function _LRUCache_backgroundFetch2(k2, index, options2, context2) {
    const v2 = index === void 0 ? void 0 : __classPrivateFieldGet(this, _LRUCache_valList, "f")[index];
    if (__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, v2)) {
        return v2;
    }
    const ac = new AC();
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
            return fetchFail(ac.signal.reason);
        }
        const bf2 = p2;
        const vl = __classPrivateFieldGet(this, _LRUCache_valList, "f")[index];
        if (vl === p2 || ignoreAbort && updateCache && vl === void 0) {
            if (v3 === void 0) {
                if (bf2.__staleWhileFetching !== void 0) {
                    __classPrivateFieldGet(this, _LRUCache_valList, "f")[index] = bf2.__staleWhileFetching;
                } else {
                    __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_delete).call(this, k2, "fetch");
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
        return fetchFail(er2);
    };
    const fetchFail = (er2)=>{
        const { aborted: aborted2 } = ac.signal;
        const allowStaleAborted = aborted2 && options2.allowStaleOnFetchAbort;
        const allowStale = allowStaleAborted || options2.allowStaleOnFetchRejection;
        const noDelete = allowStale || options2.noDeleteOnFetchRejection;
        const bf2 = p2;
        if (__classPrivateFieldGet(this, _LRUCache_valList, "f")[index] === p2) {
            const del = !noDelete || bf2.__staleWhileFetching === void 0;
            if (del) {
                __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_delete).call(this, k2, "fetch");
            } else if (!allowStaleAborted) {
                __classPrivateFieldGet(this, _LRUCache_valList, "f")[index] = bf2.__staleWhileFetching;
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
        return void 0;
    };
    const pcall = (res, rej)=>{
        const fmp = __classPrivateFieldGet(this, _LRUCache_fetchMethod, "f")?.call(this, k2, v2, fetchOpts);
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
        index = __classPrivateFieldGet(this, _LRUCache_keyMap, "f").get(k2);
    } else {
        __classPrivateFieldGet(this, _LRUCache_valList, "f")[index] = bf;
    }
    return bf;
}, _LRUCache_isBackgroundFetch = function _LRUCache_isBackgroundFetch2(p2) {
    if (!__classPrivateFieldGet(this, _LRUCache_hasFetchMethod, "f")) return false;
    const b2 = p2;
    return !!b2 && b2 instanceof Promise && b2.hasOwnProperty("__staleWhileFetching") && b2.__abortController instanceof AC;
}, _LRUCache_connect = function _LRUCache_connect2(p2, n) {
    __classPrivateFieldGet(this, _LRUCache_prev, "f")[n] = p2;
    __classPrivateFieldGet(this, _LRUCache_next, "f")[p2] = n;
}, _LRUCache_moveToTail = function _LRUCache_moveToTail2(index) {
    if (index !== __classPrivateFieldGet(this, _LRUCache_tail, "f")) {
        if (index === __classPrivateFieldGet(this, _LRUCache_head, "f")) {
            __classPrivateFieldSet(this, _LRUCache_head, __classPrivateFieldGet(this, _LRUCache_next, "f")[index], "f");
        } else {
            __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_connect).call(this, __classPrivateFieldGet(this, _LRUCache_prev, "f")[index], __classPrivateFieldGet(this, _LRUCache_next, "f")[index]);
        }
        __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_connect).call(this, __classPrivateFieldGet(this, _LRUCache_tail, "f"), index);
        __classPrivateFieldSet(this, _LRUCache_tail, index, "f");
    }
}, _LRUCache_delete = function _LRUCache_delete2(k2, reason) {
    var _c;
    let deleted = false;
    if (__classPrivateFieldGet(this, _LRUCache_size, "f") !== 0) {
        const index = __classPrivateFieldGet(this, _LRUCache_keyMap, "f").get(k2);
        if (index !== void 0) {
            deleted = true;
            if (__classPrivateFieldGet(this, _LRUCache_size, "f") === 1) {
                __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_clear).call(this, reason);
            } else {
                __classPrivateFieldGet(this, _LRUCache_removeItemSize, "f").call(this, index);
                const v2 = __classPrivateFieldGet(this, _LRUCache_valList, "f")[index];
                if (__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, v2)) {
                    v2.__abortController.abort(new Error("deleted"));
                } else if (__classPrivateFieldGet(this, _LRUCache_hasDispose, "f") || __classPrivateFieldGet(this, _LRUCache_hasDisposeAfter, "f")) {
                    if (__classPrivateFieldGet(this, _LRUCache_hasDispose, "f")) {
                        __classPrivateFieldGet(this, _LRUCache_dispose, "f")?.call(this, v2, k2, reason);
                    }
                    if (__classPrivateFieldGet(this, _LRUCache_hasDisposeAfter, "f")) {
                        __classPrivateFieldGet(this, _LRUCache_disposed, "f")?.push([
                            v2,
                            k2,
                            reason
                        ]);
                    }
                }
                __classPrivateFieldGet(this, _LRUCache_keyMap, "f").delete(k2);
                __classPrivateFieldGet(this, _LRUCache_keyList, "f")[index] = void 0;
                __classPrivateFieldGet(this, _LRUCache_valList, "f")[index] = void 0;
                if (index === __classPrivateFieldGet(this, _LRUCache_tail, "f")) {
                    __classPrivateFieldSet(this, _LRUCache_tail, __classPrivateFieldGet(this, _LRUCache_prev, "f")[index], "f");
                } else if (index === __classPrivateFieldGet(this, _LRUCache_head, "f")) {
                    __classPrivateFieldSet(this, _LRUCache_head, __classPrivateFieldGet(this, _LRUCache_next, "f")[index], "f");
                } else {
                    const pi2 = __classPrivateFieldGet(this, _LRUCache_prev, "f")[index];
                    __classPrivateFieldGet(this, _LRUCache_next, "f")[pi2] = __classPrivateFieldGet(this, _LRUCache_next, "f")[index];
                    const ni2 = __classPrivateFieldGet(this, _LRUCache_next, "f")[index];
                    __classPrivateFieldGet(this, _LRUCache_prev, "f")[ni2] = __classPrivateFieldGet(this, _LRUCache_prev, "f")[index];
                }
                __classPrivateFieldSet(this, _LRUCache_size, (_c = __classPrivateFieldGet(this, _LRUCache_size, "f"), _c--, _c), "f");
                __classPrivateFieldGet(this, _LRUCache_free, "f").push(index);
            }
        }
    }
    if (__classPrivateFieldGet(this, _LRUCache_hasDisposeAfter, "f") && __classPrivateFieldGet(this, _LRUCache_disposed, "f")?.length) {
        const dt2 = __classPrivateFieldGet(this, _LRUCache_disposed, "f");
        let task;
        while(task = dt2?.shift()){
            __classPrivateFieldGet(this, _LRUCache_disposeAfter, "f")?.call(this, ...task);
        }
    }
    return deleted;
}, _LRUCache_clear = function _LRUCache_clear2(reason) {
    for (const index of __classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_rindexes).call(this, {
        allowStale: true
    })){
        const v2 = __classPrivateFieldGet(this, _LRUCache_valList, "f")[index];
        if (__classPrivateFieldGet(this, _LRUCache_instances, "m", _LRUCache_isBackgroundFetch).call(this, v2)) {
            v2.__abortController.abort(new Error("deleted"));
        } else {
            const k2 = __classPrivateFieldGet(this, _LRUCache_keyList, "f")[index];
            if (__classPrivateFieldGet(this, _LRUCache_hasDispose, "f")) {
                __classPrivateFieldGet(this, _LRUCache_dispose, "f")?.call(this, v2, k2, reason);
            }
            if (__classPrivateFieldGet(this, _LRUCache_hasDisposeAfter, "f")) {
                __classPrivateFieldGet(this, _LRUCache_disposed, "f")?.push([
                    v2,
                    k2,
                    reason
                ]);
            }
        }
    }
    __classPrivateFieldGet(this, _LRUCache_keyMap, "f").clear();
    __classPrivateFieldGet(this, _LRUCache_valList, "f").fill(void 0);
    __classPrivateFieldGet(this, _LRUCache_keyList, "f").fill(void 0);
    if (__classPrivateFieldGet(this, _LRUCache_ttls, "f") && __classPrivateFieldGet(this, _LRUCache_starts, "f")) {
        __classPrivateFieldGet(this, _LRUCache_ttls, "f").fill(0);
        __classPrivateFieldGet(this, _LRUCache_starts, "f").fill(0);
    }
    if (__classPrivateFieldGet(this, _LRUCache_sizes, "f")) {
        __classPrivateFieldGet(this, _LRUCache_sizes, "f").fill(0);
    }
    __classPrivateFieldSet(this, _LRUCache_head, 0, "f");
    __classPrivateFieldSet(this, _LRUCache_tail, 0, "f");
    __classPrivateFieldGet(this, _LRUCache_free, "f").length = 0;
    __classPrivateFieldSet(this, _LRUCache_calculatedSize, 0, "f");
    __classPrivateFieldSet(this, _LRUCache_size, 0, "f");
    if (__classPrivateFieldGet(this, _LRUCache_hasDisposeAfter, "f") && __classPrivateFieldGet(this, _LRUCache_disposed, "f")) {
        const dt2 = __classPrivateFieldGet(this, _LRUCache_disposed, "f");
        let task;
        while(task = dt2?.shift()){
            __classPrivateFieldGet(this, _LRUCache_disposeAfter, "f")?.call(this, ...task);
        }
    }
};

}
