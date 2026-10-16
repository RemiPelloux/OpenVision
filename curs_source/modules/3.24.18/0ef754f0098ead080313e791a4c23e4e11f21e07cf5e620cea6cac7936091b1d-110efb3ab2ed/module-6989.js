"use strict";
const { kConstruct: t } = require("./module-2381.js"), { Cache: s } = require("./module-8642.js"), { webidl: o } = require("./module-8005.js"), { kEnumerableProperty: r } = require("./module-9361.js");
class i {
    #a = new Map;
    constructor(){
        arguments[0] !== t && o.illegalConstructor();
    }
    async match(e, a = {}) {
        if (o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.match"
        }), e = o.converters.RequestInfo(e), null != (a = o.converters.MultiCacheQueryOptions(a)).cacheName) {
            if (this.#a.has(a.cacheName)) {
                const n = this.#a.get(a.cacheName), o = new s(t, n);
                return await o.match(e, a);
            }
        } else for (const n of this.#a.values()){
            const o = new s(t, n), r = await o.match(e, a);
            if (void 0 !== r) return r;
        }
    }
    async has(e) {
        return o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.has"
        }), e = o.converters.DOMString(e), this.#a.has(e);
    }
    async open(e) {
        if (o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.open"
        }), e = o.converters.DOMString(e), this.#a.has(e)) {
            const a = this.#a.get(e);
            return new s(t, a);
        }
        const a = [];
        return this.#a.set(e, a), new s(t, a);
    }
    async delete(e) {
        return o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.delete"
        }), e = o.converters.DOMString(e), this.#a.delete(e);
    }
    async keys() {
        o.brandCheck(this, i);
        return [
            ...this.#a.keys()
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
