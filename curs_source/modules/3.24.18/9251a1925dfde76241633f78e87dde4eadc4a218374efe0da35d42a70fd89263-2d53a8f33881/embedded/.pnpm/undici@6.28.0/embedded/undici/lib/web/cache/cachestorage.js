import { require_util8 } from "../../core/util.js";
import { require_cache2 } from "./cache.js";
import { require_symbols9 } from "./symbols.js";
import { require_webidl2 } from "../fetch/webidl.js";
var __wakaru_require_cachestorage2_cache;
export function require_cachestorage2() {
if (__wakaru_require_cachestorage2_cache) return __wakaru_require_cachestorage2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_cachestorage2_cache = module2;
"use strict";
var { kConstruct } = require_symbols9();
var { Cache } = require_cache2();
var { webidl } = require_webidl2();
var { kEnumerableProperty } = require_util8();
var CacheStorage = class _CacheStorage {
    #caches = new Map();
    constructor(){
        if (arguments[0] !== kConstruct) {
            webidl.illegalConstructor();
        }
        webidl.util.markAsUncloneable(this);
    }
    async match(request3, options2 = {}) {
        webidl.brandCheck(this, _CacheStorage);
        webidl.argumentLengthCheck(arguments, 1, "CacheStorage.match");
        request3 = webidl.converters.RequestInfo(request3);
        options2 = webidl.converters.MultiCacheQueryOptions(options2);
        if (options2.cacheName != null) {
            if (this.#caches.has(options2.cacheName)) {
                const cacheList = this.#caches.get(options2.cacheName);
                const cache2 = new Cache(kConstruct, cacheList);
                return await cache2.match(request3, options2);
            }
        } else {
            for (const cacheList of this.#caches.values()){
                const cache2 = new Cache(kConstruct, cacheList);
                const response = await cache2.match(request3, options2);
                if (response !== void 0) {
                    return response;
                }
            }
        }
    }
    async has(cacheName) {
        webidl.brandCheck(this, _CacheStorage);
        const prefix = "CacheStorage.has";
        webidl.argumentLengthCheck(arguments, 1, prefix);
        cacheName = webidl.converters.DOMString(cacheName, prefix, "cacheName");
        return this.#caches.has(cacheName);
    }
    async open(cacheName) {
        webidl.brandCheck(this, _CacheStorage);
        const prefix = "CacheStorage.open";
        webidl.argumentLengthCheck(arguments, 1, prefix);
        cacheName = webidl.converters.DOMString(cacheName, prefix, "cacheName");
        if (this.#caches.has(cacheName)) {
            const cache3 = this.#caches.get(cacheName);
            return new Cache(kConstruct, cache3);
        }
        const cache2 = [];
        this.#caches.set(cacheName, cache2);
        return new Cache(kConstruct, cache2);
    }
    async delete(cacheName) {
        webidl.brandCheck(this, _CacheStorage);
        const prefix = "CacheStorage.delete";
        webidl.argumentLengthCheck(arguments, 1, prefix);
        cacheName = webidl.converters.DOMString(cacheName, prefix, "cacheName");
        return this.#caches.delete(cacheName);
    }
    async keys() {
        webidl.brandCheck(this, _CacheStorage);
        const keys = this.#caches.keys();
        return [
            ...keys
        ];
    }
};
Object.defineProperties(CacheStorage.prototype, {
    [Symbol.toStringTag]: {
        value: "CacheStorage",
        configurable: true
    },
    match: kEnumerableProperty,
    has: kEnumerableProperty,
    open: kEnumerableProperty,
    delete: kEnumerableProperty,
    keys: kEnumerableProperty
});
module2.exports = {
    CacheStorage
};

return module2.exports;
}
