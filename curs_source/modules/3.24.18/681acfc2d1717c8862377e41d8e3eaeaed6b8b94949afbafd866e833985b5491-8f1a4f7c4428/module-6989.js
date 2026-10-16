"use strict";
const { kConstruct: n } = require("./module-2381.js"), { Cache: r } = require("./module-8642.js"), { webidl: o } = require("./module-8005.js"), { kEnumerableProperty: s } = require("./module-9361.js");
class i {
    #t = new Map;
    constructor(){
        arguments[0] !== n && o.illegalConstructor();
    }
    async match(e, t = {}) {
        if (o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.match"
        }), e = o.converters.RequestInfo(e), null != (t = o.converters.MultiCacheQueryOptions(t)).cacheName) {
            if (this.#t.has(t.cacheName)) {
                const A = this.#t.get(t.cacheName), o = new r(n, A);
                return await o.match(e, t);
            }
        } else for (const A of this.#t.values()){
            const o = new r(n, A), s = await o.match(e, t);
            if (void 0 !== s) return s;
        }
    }
    async has(e) {
        return o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.has"
        }), e = o.converters.DOMString(e), this.#t.has(e);
    }
    async open(e) {
        if (o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.open"
        }), e = o.converters.DOMString(e), this.#t.has(e)) {
            const t = this.#t.get(e);
            return new r(n, t);
        }
        const t = [];
        return this.#t.set(e, t), new r(n, t);
    }
    async delete(e) {
        return o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.delete"
        }), e = o.converters.DOMString(e), this.#t.delete(e);
    }
    async keys() {
        o.brandCheck(this, i);
        return [
            ...this.#t.keys()
        ];
    }
}
Object.defineProperties(i.prototype, {
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
    CacheStorage: i
};
