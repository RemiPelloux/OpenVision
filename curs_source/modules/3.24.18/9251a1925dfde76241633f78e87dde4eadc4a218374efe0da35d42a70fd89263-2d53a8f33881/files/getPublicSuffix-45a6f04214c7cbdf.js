import { require_cjs5 } from "../../../../tldts@6.1.86/node_modules/tldts/dist/cjs/index.js";
var __wakaru_require_getPublicSuffix_cache;
export function require_getPublicSuffix() {
if (__wakaru_require_getPublicSuffix_cache) return __wakaru_require_getPublicSuffix_cache;
var exports2 = {};
__wakaru_require_getPublicSuffix_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.getPublicSuffix = getPublicSuffix;
var tldts_1 = require_cjs5();
var SPECIAL_USE_DOMAINS = [
    "local",
    "example",
    "invalid",
    "localhost",
    "test"
];
var SPECIAL_TREATMENT_DOMAINS = [
    "localhost",
    "invalid"
];
var defaultGetPublicSuffixOptions = {
    allowSpecialUseDomain: false,
    ignoreError: false
};
function getPublicSuffix(domain, options2 = {}) {
    options2 = {
        ...defaultGetPublicSuffixOptions,
        ...options2
    };
    const domainParts = domain.split(".");
    const topLevelDomain = domainParts[domainParts.length - 1];
    const allowSpecialUseDomain = !!options2.allowSpecialUseDomain;
    const ignoreError = !!options2.ignoreError;
    if (allowSpecialUseDomain && topLevelDomain !== void 0 && SPECIAL_USE_DOMAINS.includes(topLevelDomain)) {
        if (domainParts.length > 1) {
            const secondLevelDomain = domainParts[domainParts.length - 2];
            return `${secondLevelDomain}.${topLevelDomain}`;
        } else if (SPECIAL_TREATMENT_DOMAINS.includes(topLevelDomain)) {
            return topLevelDomain;
        }
    }
    if (!ignoreError && topLevelDomain !== void 0 && SPECIAL_USE_DOMAINS.includes(topLevelDomain)) {
        throw new Error(`Cookie has domain set to the public suffix "${topLevelDomain}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain: true, rejectPublicSuffixes: false}.`);
    }
    const publicSuffix = (0, tldts_1.getDomain)(domain, {
        allowIcannDomains: true,
        allowPrivateDomains: true
    });
    if (publicSuffix) return publicSuffix;
}

return exports2;
}
