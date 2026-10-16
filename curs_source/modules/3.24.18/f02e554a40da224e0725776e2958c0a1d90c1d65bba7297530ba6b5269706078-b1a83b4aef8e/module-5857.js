"use strict";
const { kConstruct: n } = require("./module-7945.js"), { Cache: s } = require("./module-7758.js"), { webidl: i } = require("./module-8193.js"), { kEnumerableProperty: o } = require("./module-3589.js");
class a {
    #m = new Map;
    constructor(){
        arguments[0] !== n && i.illegalConstructor();
    }
    async match(t, e = {}) {
        if (i.brandCheck(this, a), i.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.match"
        }), t = i.converters.RequestInfo(t), null != (e = i.converters.MultiCacheQueryOptions(e)).cacheName) {
            if (this.#m.has(e.cacheName)) {
                const r = this.#m.get(e.cacheName), i = new s(n, r);
                return await i.match(t, e);
            }
        } else for (const r of this.#m.values()){
            const i = new s(n, r), o = await i.match(t, e);
            if (void 0 !== o) return o;
        }
    }
    async has(t) {
        return i.brandCheck(this, a), i.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.has"
        }), t = i.converters.DOMString(t), this.#m.has(t);
    }
    async open(t) {
        if (i.brandCheck(this, a), i.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.open"
        }), t = i.converters.DOMString(t), this.#m.has(t)) {
            const e = this.#m.get(t);
            return new s(n, e);
        }
        const e = [];
        return this.#m.set(t, e), new s(n, e);
    }
    async delete(t) {
        return i.brandCheck(this, a), i.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.delete"
        }), t = i.converters.DOMString(t), this.#m.delete(t);
    }
    async keys() {
        i.brandCheck(this, a);
        return [
            ...this.#m.keys()
        ];
    }
}
Object.defineProperties(a.prototype, {
    [Symbol.toStringTag]: {
        value: "CacheStorage",
        configurable: !0
    },
    match: o,
    has: o,
    open: o,
    delete: o,
    keys: o
}), module.exports = {
    CacheStorage: a
};
