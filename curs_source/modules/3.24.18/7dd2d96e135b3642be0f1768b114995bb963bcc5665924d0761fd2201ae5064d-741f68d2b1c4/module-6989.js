"use strict";
const { kConstruct: a } = require("./module-2381.js"), { Cache: s } = require("./module-8642.js"), { webidl: o } = require("./module-8005.js"), { kEnumerableProperty: r } = require("./module-9361.js");
class i {
    #n = new Map;
    constructor(){
        arguments[0] !== a && o.illegalConstructor();
    }
    async match(e, n = {}) {
        if (o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.match"
        }), e = o.converters.RequestInfo(e), null != (n = o.converters.MultiCacheQueryOptions(n)).cacheName) {
            if (this.#n.has(n.cacheName)) {
                const t = this.#n.get(n.cacheName), o = new s(a, t);
                return await o.match(e, n);
            }
        } else for (const t of this.#n.values()){
            const o = new s(a, t), r = await o.match(e, n);
            if (void 0 !== r) return r;
        }
    }
    async has(e) {
        return o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.has"
        }), e = o.converters.DOMString(e), this.#n.has(e);
    }
    async open(e) {
        if (o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.open"
        }), e = o.converters.DOMString(e), this.#n.has(e)) {
            const n = this.#n.get(e);
            return new s(a, n);
        }
        const n = [];
        return this.#n.set(e, n), new s(a, n);
    }
    async delete(e) {
        return o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.delete"
        }), e = o.converters.DOMString(e), this.#n.delete(e);
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
    match: r,
    has: r,
    open: r,
    delete: r,
    keys: r
}), module.exports = {
    CacheStorage: i
};
