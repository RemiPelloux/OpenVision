import { require_pathMatch } from "./pathMatch.js";
import { require_permuteDomain } from "./permuteDomain.js";
import { require_store } from "./store.js";
import { require_utils2 } from "./utils.js";
var __wakaru_require_memstore_cache;
export function require_memstore() {
if (__wakaru_require_memstore_cache) return __wakaru_require_memstore_cache;
var exports2 = {};
__wakaru_require_memstore_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.MemoryCookieStore = void 0;
var pathMatch_1 = require_pathMatch();
var permuteDomain_1 = require_permuteDomain();
var store_1 = require_store();
var utils_1 = require_utils2();
var MemoryCookieStore = class extends store_1.Store {
    constructor(){
        super();
        this.synchronous = true;
        this.idx = Object.create(null);
    }
    findCookie(domain, path64, key, callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        if (domain == null || path64 == null || key == null) {
            return promiseCallback.resolve(void 0);
        }
        const result = this.idx[domain]?.[path64]?.[key];
        return promiseCallback.resolve(result);
    }
    findCookies(domain, path64, allowSpecialUseDomain = false, callback) {
        if (typeof allowSpecialUseDomain === "function") {
            callback = allowSpecialUseDomain;
            allowSpecialUseDomain = true;
        }
        const results = [];
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        if (!domain) {
            return promiseCallback.resolve([]);
        }
        let pathMatcher;
        if (!path64) {
            pathMatcher = function matchAll(domainIndex) {
                for(const curPath in domainIndex){
                    const pathIndex = domainIndex[curPath];
                    for(const key in pathIndex){
                        const value = pathIndex[key];
                        if (value) {
                            results.push(value);
                        }
                    }
                }
            };
        } else {
            pathMatcher = function matchRFC(domainIndex) {
                for(const cookiePath in domainIndex){
                    if ((0, pathMatch_1.pathMatch)(path64, cookiePath)) {
                        const pathIndex = domainIndex[cookiePath];
                        for(const key in pathIndex){
                            const value = pathIndex[key];
                            if (value) {
                                results.push(value);
                            }
                        }
                    }
                }
            };
        }
        const domains = (0, permuteDomain_1.permuteDomain)(domain, allowSpecialUseDomain) || [
            domain
        ];
        const idx = this.idx;
        domains.forEach((curDomain)=>{
            const domainIndex = idx[curDomain];
            if (!domainIndex) {
                return;
            }
            pathMatcher(domainIndex);
        });
        return promiseCallback.resolve(results);
    }
    putCookie(cookie, callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const { domain, path: path64, key } = cookie;
        if (domain == null || path64 == null || key == null) {
            return promiseCallback.resolve(void 0);
        }
        const domainEntry = this.idx[domain] ?? Object.create(null);
        this.idx[domain] = domainEntry;
        const pathEntry = domainEntry[path64] ?? Object.create(null);
        domainEntry[path64] = pathEntry;
        pathEntry[key] = cookie;
        return promiseCallback.resolve(void 0);
    }
    updateCookie(_oldCookie, newCookie, callback) {
        if (callback) this.putCookie(newCookie, callback);
        else return this.putCookie(newCookie);
    }
    removeCookie(domain, path64, key, callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        delete this.idx[domain]?.[path64]?.[key];
        return promiseCallback.resolve(void 0);
    }
    removeCookies(domain, path64, callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const domainEntry = this.idx[domain];
        if (domainEntry) {
            if (path64) {
                delete domainEntry[path64];
            } else {
                delete this.idx[domain];
            }
        }
        return promiseCallback.resolve(void 0);
    }
    removeAllCookies(callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        this.idx = Object.create(null);
        return promiseCallback.resolve(void 0);
    }
    getAllCookies(callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const cookies = [];
        const idx = this.idx;
        const domains = Object.keys(idx);
        domains.forEach((domain)=>{
            const domainEntry = idx[domain] ?? {};
            const paths = Object.keys(domainEntry);
            paths.forEach((path64)=>{
                const pathEntry = domainEntry[path64] ?? {};
                const keys = Object.keys(pathEntry);
                keys.forEach((key)=>{
                    const keyEntry = pathEntry[key];
                    if (keyEntry != null) {
                        cookies.push(keyEntry);
                    }
                });
            });
        });
        cookies.sort((a, b2)=>{
            return (a.creationIndex || 0) - (b2.creationIndex || 0);
        });
        return promiseCallback.resolve(cookies);
    }
};
exports2.MemoryCookieStore = MemoryCookieStore;

return exports2;
}
