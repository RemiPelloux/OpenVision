"use strict";
const { kConstruct: r } = require("./module-62381.js"), { Cache: s } = require("./module-88642.js"), { webidl: o } = require("./module-48005.js"), { kEnumerableProperty: n } = require("./module-9361.js");
class i {
    #n = new Map;
    constructor(){
        arguments[0] !== r && o.illegalConstructor();
    }
    async match(A, e = {}) {
        if (o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.match"
        }), A = o.converters.RequestInfo(A), null != (e = o.converters.MultiCacheQueryOptions(e)).cacheName) {
            if (this.#n.has(e.cacheName)) {
                const t = this.#n.get(e.cacheName), o = new s(r, t);
                return await o.match(A, e);
            }
        } else for (const t of this.#n.values()){
            const o = new s(r, t), n = await o.match(A, e);
            if (void 0 !== n) return n;
        }
    }
    async has(A) {
        return o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.has"
        }), A = o.converters.DOMString(A), this.#n.has(A);
    }
    async open(A) {
        if (o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.open"
        }), A = o.converters.DOMString(A), this.#n.has(A)) {
            const e = this.#n.get(A);
            return new s(r, e);
        }
        const e = [];
        return this.#n.set(A, e), new s(r, e);
    }
    async delete(A) {
        return o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.delete"
        }), A = o.converters.DOMString(A), this.#n.delete(A);
    }
    async keys() {
        o.brandCheck(this, i);
        return [
            ...this.#n.keys()
        ];
    }
}
Object.defineProperties(i.prototype, {
    [Symbol.toStringTag]: {
        value: "CacheStorage",
        configurable: !0
    },
    match: n,
    has: n,
    open: n,
    delete: n,
    keys: n
}), module.exports = {
    CacheStorage: i
};
