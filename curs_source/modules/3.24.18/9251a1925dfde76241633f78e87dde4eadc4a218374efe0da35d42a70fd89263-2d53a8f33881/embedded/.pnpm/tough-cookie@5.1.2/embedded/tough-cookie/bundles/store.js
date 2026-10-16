var __wakaru_require_store_cache;
export function require_store() {
if (__wakaru_require_store_cache) return __wakaru_require_store_cache;
var exports2 = {};
__wakaru_require_store_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Store = void 0;
var Store = class {
    constructor(){
        this.synchronous = false;
    }
    findCookie(_domain, _path, _key, _callback) {
        throw new Error("findCookie is not implemented");
    }
    findCookies(_domain, _path, _allowSpecialUseDomain = false, _callback) {
        throw new Error("findCookies is not implemented");
    }
    putCookie(_cookie, _callback) {
        throw new Error("putCookie is not implemented");
    }
    updateCookie(_oldCookie, _newCookie, _callback) {
        throw new Error("updateCookie is not implemented");
    }
    removeCookie(_domain, _path, _key, _callback) {
        throw new Error("removeCookie is not implemented");
    }
    removeCookies(_domain, _path, _callback) {
        throw new Error("removeCookies is not implemented");
    }
    removeAllCookies(_callback) {
        throw new Error("removeAllCookies is not implemented");
    }
    getAllCookies(_callback) {
        throw new Error("getAllCookies is not implemented (therefore jar cannot be serialized)");
    }
};
exports2.Store = Store;

return exports2;
}
