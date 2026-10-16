"use strict";
const { kConstruct: n } = require("./module-2381.js"), { Cache: r } = require("./module-8642.js"), { webidl: o } = require("./module-8005.js"), { kEnumerableProperty: s } = require("./module-9361.js");
class a {
    #A = new Map;
    constructor(){
        arguments[0] !== n && o.illegalConstructor();
    }
    async match(e, A = {}) {
        if (o.brandCheck(this, a), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.match"
        }), e = o.converters.RequestInfo(e), null != (A = o.converters.MultiCacheQueryOptions(A)).cacheName) {
            if (this.#A.has(A.cacheName)) {
                const t = this.#A.get(A.cacheName), o = new r(n, t);
                return await o.match(e, A);
            }
        } else for (const t of this.#A.values()){
            const o = new r(n, t), s = await o.match(e, A);
            if (void 0 !== s) return s;
        }
    }
    async has(e) {
        return o.brandCheck(this, a), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.has"
        }), e = o.converters.DOMString(e), this.#A.has(e);
    }
    async open(e) {
        if (o.brandCheck(this, a), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.open"
        }), e = o.converters.DOMString(e), this.#A.has(e)) {
            const A = this.#A.get(e);
            return new r(n, A);
        }
        const A = [];
        return this.#A.set(e, A), new r(n, A);
    }
    async delete(e) {
        return o.brandCheck(this, a), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.delete"
        }), e = o.converters.DOMString(e), this.#A.delete(e);
    }
    async keys() {
        o.brandCheck(this, a);
        return [
            ...this.#A.keys()
        ];
    }
}
Object.defineProperties(a.prototype, {
    [Symbol.toStringTag]: {
        value: "CacheStorage",
        configurable: !0
    },
    match: s,
    has: s,
    open: s,
    delete: s,
    keys: s
}), module.exports = {
    CacheStorage: a
};
