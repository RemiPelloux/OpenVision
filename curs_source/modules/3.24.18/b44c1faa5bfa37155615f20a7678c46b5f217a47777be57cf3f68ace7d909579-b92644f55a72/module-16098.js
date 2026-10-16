"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getPublicSuffix = function(e, t = {}) {
    t = {
        ...i,
        ...t
    };
    const r = e.split("."), a = r[r.length - 1], c = !!t.allowSpecialUseDomain, l = !!t.ignoreError;
    if (c && void 0 !== a && s.includes(a)) {
        if (r.length > 1) {
            return `${r[r.length - 2]}.${a}`;
        }
        if (o.includes(a)) return a;
    }
    if (!l && void 0 !== a && s.includes(a)) throw new Error(`Cookie has domain set to the public suffix "${a}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain: true, rejectPublicSuffixes: false}.`);
    const u = (0, n.getDomain)(e, {
        allowIcannDomains: !0,
        allowPrivateDomains: !0
    });
    if (u) return u;
};
const n = require("./module-30389.js"), s = [
    "local",
    "example",
    "invalid",
    "localhost",
    "test"
], o = [
    "localhost",
    "invalid"
], i = {
    allowSpecialUseDomain: !1,
    ignoreError: !1
};
