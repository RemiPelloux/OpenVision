import { require_getPublicSuffix } from "./getPublicSuffix.js";
var __wakaru_require_permuteDomain_cache;
export function require_permuteDomain() {
if (__wakaru_require_permuteDomain_cache) return __wakaru_require_permuteDomain_cache;
var exports2 = {};
__wakaru_require_permuteDomain_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.permuteDomain = permuteDomain;
var getPublicSuffix_1 = require_getPublicSuffix();
function permuteDomain(domain, allowSpecialUseDomain) {
    const pubSuf = (0, getPublicSuffix_1.getPublicSuffix)(domain, {
        allowSpecialUseDomain
    });
    if (!pubSuf) {
        return void 0;
    }
    if (pubSuf == domain) {
        return [
            domain
        ];
    }
    if (domain.slice(-1) == ".") {
        domain = domain.slice(0, -1);
    }
    const prefix = domain.slice(0, -(pubSuf.length + 1));
    const parts = prefix.split(".").reverse();
    let cur = pubSuf;
    const permutations = [
        cur
    ];
    while(parts.length){
        const part = parts.shift();
        cur = `${part}.${cur}`;
        permutations.push(cur);
    }
    return permutations;
}

return exports2;
}
