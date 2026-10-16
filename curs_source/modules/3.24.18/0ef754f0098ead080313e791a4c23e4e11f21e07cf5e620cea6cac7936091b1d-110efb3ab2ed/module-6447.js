"use strict";
const t = require("./module-6151.js"), s = require("./module-4887.js"), o = require("./module-8706.js"), r = s.implSymbol;
function i(a) {
    if (!this || this[r] || !(this instanceof i)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
    if (arguments.length < 1) throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
    const n = [];
    for(let e = 0; e < arguments.length && e < 2; ++e)n[e] = arguments[e];
    n[0] = t.USVString(n[0]), void 0 !== n[1] && (n[1] = t.USVString(n[1])), module.exports.setup(this, n);
}
i.prototype.toJSON = function() {
    if (!this || !module.exports.is(this)) throw new TypeError("Illegal invocation");
    const a = [];
    for(let e = 0; e < arguments.length && e < 0; ++e)a[e] = arguments[e];
    return this[r].toJSON.apply(this[r], a);
}, Object.defineProperty(i.prototype, "href", {
    get () {
        return this[r].href;
    },
    set (e) {
        e = t.USVString(e), this[r].href = e;
    },
    enumerable: !0,
    configurable: !0
}), i.prototype.toString = function() {
    if (!this || !module.exports.is(this)) throw new TypeError("Illegal invocation");
    return this.href;
}, Object.defineProperty(i.prototype, "origin", {
    get () {
        return this[r].origin;
    },
    enumerable: !0,
    configurable: !0
}), Object.defineProperty(i.prototype, "protocol", {
    get () {
        return this[r].protocol;
    },
    set (e) {
        e = t.USVString(e), this[r].protocol = e;
    },
    enumerable: !0,
    configurable: !0
}), Object.defineProperty(i.prototype, "username", {
    get () {
        return this[r].username;
    },
    set (e) {
        e = t.USVString(e), this[r].username = e;
    },
    enumerable: !0,
    configurable: !0
}), Object.defineProperty(i.prototype, "password", {
    get () {
        return this[r].password;
    },
    set (e) {
        e = t.USVString(e), this[r].password = e;
    },
    enumerable: !0,
    configurable: !0
}), Object.defineProperty(i.prototype, "host", {
    get () {
        return this[r].host;
    },
    set (e) {
        e = t.USVString(e), this[r].host = e;
    },
    enumerable: !0,
    configurable: !0
}), Object.defineProperty(i.prototype, "hostname", {
    get () {
        return this[r].hostname;
    },
    set (e) {
        e = t.USVString(e), this[r].hostname = e;
    },
    enumerable: !0,
    configurable: !0
}), Object.defineProperty(i.prototype, "port", {
    get () {
        return this[r].port;
    },
    set (e) {
        e = t.USVString(e), this[r].port = e;
    },
    enumerable: !0,
    configurable: !0
}), Object.defineProperty(i.prototype, "pathname", {
    get () {
        return this[r].pathname;
    },
    set (e) {
        e = t.USVString(e), this[r].pathname = e;
    },
    enumerable: !0,
    configurable: !0
}), Object.defineProperty(i.prototype, "search", {
    get () {
        return this[r].search;
    },
    set (e) {
        e = t.USVString(e), this[r].search = e;
    },
    enumerable: !0,
    configurable: !0
}), Object.defineProperty(i.prototype, "hash", {
    get () {
        return this[r].hash;
    },
    set (e) {
        e = t.USVString(e), this[r].hash = e;
    },
    enumerable: !0,
    configurable: !0
}), module.exports = {
    is: (e)=>!!e && e[r] instanceof o.implementation,
    create (e, a) {
        let n = Object.create(i.prototype);
        return this.setup(n, e, a), n;
    },
    setup (e, a, n) {
        n || (n = {}), n.wrapper = e, e[r] = new o.implementation(a, n), e[r][s.wrapperSymbol] = e;
    },
    interface: i,
    expose: {
        Window: {
            URL: i
        },
        Worker: {
            URL: i
        }
    }
};
