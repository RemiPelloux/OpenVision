import { require_constants7 } from "./constants.js";
var __wakaru_require_canonicalDomain_cache;
export function require_canonicalDomain() {
if (__wakaru_require_canonicalDomain_cache) return __wakaru_require_canonicalDomain_cache;
var exports2 = {};
__wakaru_require_canonicalDomain_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.canonicalDomain = canonicalDomain;
var constants_1 = require_constants7();
function domainToASCII(domain) {
    return new URL(`http://${domain}`).hostname;
}
function canonicalDomain(domainName) {
    if (domainName == null) {
        return void 0;
    }
    let str3 = domainName.trim().replace(/^\./, "");
    if (constants_1.IP_V6_REGEX_OBJECT.test(str3)) {
        if (!str3.startsWith("[")) {
            str3 = "[" + str3;
        }
        if (!str3.endsWith("]")) {
            str3 = str3 + "]";
        }
        return domainToASCII(str3).slice(1, -1);
    }
    if (/[^\u0001-\u007f]/.test(str3)) {
        return domainToASCII(str3);
    }
    return str3.toLowerCase();
}

return exports2;
}
