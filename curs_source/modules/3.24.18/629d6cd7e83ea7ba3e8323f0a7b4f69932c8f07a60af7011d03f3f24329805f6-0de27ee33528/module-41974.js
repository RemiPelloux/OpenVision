"use strict";
const { kConstruct: r } = require("./module-71716.js"), { Cache: s } = require("./module-91947.js"), { webidl: o } = require("./module-43290.js"), { kEnumerableProperty: n } = require("./module-55201.js");
class i {
    #S = new Map;
    constructor(){
        arguments[0] !== r && o.illegalConstructor(), o.util.markAsUncloneable(this);
    }
    async match(A, e = {}) {
        if (o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, "CacheStorage.match"), A = o.converters.RequestInfo(A), null != (e = o.converters.MultiCacheQueryOptions(e)).cacheName) {
            if (this.#S.has(e.cacheName)) {
                const t = this.#S.get(e.cacheName), o = new s(r, t);
                return await o.match(A, e);
            }
        } else for (const t of this.#S.values()){
            const o = new s(r, t), n = await o.match(A, e);
            if (void 0 !== n) return n;
        }
    }
    async has(A) {
        o.brandCheck(this, i);
        const e = "CacheStorage.has";
        return o.argumentLengthCheck(arguments, 1, e), A = o.converters.DOMString(A, e, "cacheName"), this.#S.has(A);
    }
    async open(A) {
        o.brandCheck(this, i);
        const e = "CacheStorage.open";
        if (o.argumentLengthCheck(arguments, 1, e), A = o.converters.DOMString(A, e, "cacheName"), this.#S.has(A)) {
            const e = this.#S.get(A);
            return new s(r, e);
        }
        const t = [];
        return this.#S.set(A, t), new s(r, t);
    }
    async delete(A) {
        o.brandCheck(this, i);
        const e = "CacheStorage.delete";
        return o.argumentLengthCheck(arguments, 1, e), A = o.converters.DOMString(A, e, "cacheName"), this.#S.delete(A);
    }
    async keys() {
        o.brandCheck(this, i);
        return [
            ...this.#S.keys()
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
