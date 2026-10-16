"use strict";
const { kConstruct: n } = require("./module-17945.js"), { Cache: s } = require("./module-57758.js"), { webidl: o } = require("./module-18193.js"), { kEnumerableProperty: i } = require("./module-83589.js");
class a {
    #Ke = new Map;
    constructor(){
        arguments[0] !== n && o.illegalConstructor();
    }
    async match(e, t = {}) {
        if (o.brandCheck(this, a), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.match"
        }), e = o.converters.RequestInfo(e), null != (t = o.converters.MultiCacheQueryOptions(t)).cacheName) {
            if (this.#Ke.has(t.cacheName)) {
                const r = this.#Ke.get(t.cacheName), o = new s(n, r);
                return await o.match(e, t);
            }
        } else for (const r of this.#Ke.values()){
            const o = new s(n, r), i = await o.match(e, t);
            if (void 0 !== i) return i;
        }
    }
    async has(e) {
        return o.brandCheck(this, a), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.has"
        }), e = o.converters.DOMString(e), this.#Ke.has(e);
    }
    async open(e) {
        if (o.brandCheck(this, a), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.open"
        }), e = o.converters.DOMString(e), this.#Ke.has(e)) {
            const t = this.#Ke.get(e);
            return new s(n, t);
        }
        const t = [];
        return this.#Ke.set(e, t), new s(n, t);
    }
    async delete(e) {
        return o.brandCheck(this, a), o.argumentLengthCheck(arguments, 1, {
            header: "CacheStorage.delete"
        }), e = o.converters.DOMString(e), this.#Ke.delete(e);
    }
    async keys() {
        o.brandCheck(this, a);
        return [
            ...this.#Ke.keys()
        ];
    }
}
Object.defineProperties(a.prototype, {
    [Symbol.toStringTag]: {
        value: "CacheStorage",
        configurable: !0
    },
    match: i,
    has: i,
    open: i,
    delete: i,
    keys: i
}), module.exports = {
    CacheStorage: a
};
