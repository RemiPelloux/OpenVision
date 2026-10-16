"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getPublicSuffix = function(t, e = {}) {
    e = {
        ...o,
        ...e
    };
    const r = t.split("."), a = r[r.length - 1], u = !!e.allowSpecialUseDomain, c = !!e.ignoreError;
    if (u && void 0 !== a && s.includes(a)) {
        if (r.length > 1) {
            return `${r[r.length - 2]}.${a}`;
        }
        if (i.includes(a)) return a;
    }
    if (!c && void 0 !== a && s.includes(a)) throw new Error(`Cookie has domain set to the public suffix "${a}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain: true, rejectPublicSuffixes: false}.`);
    const l = (0, n.getDomain)(t, {
        allowIcannDomains: !0,
        allowPrivateDomains: !0
    });
    if (l) return l;
};
const n = require("./module-389.js"), s = [
    "local",
    "example",
    "invalid",
    "localhost",
    "test"
], i = [
    "localhost",
    "invalid"
], o = {
    allowSpecialUseDomain: !1,
    ignoreError: !1
};
