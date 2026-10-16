var __wakaru_require_pluralizer_cache;
export function require_pluralizer() {
if (__wakaru_require_pluralizer_cache) return __wakaru_require_pluralizer_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_pluralizer_cache = module2;
"use strict";
var singulars = {
    pronoun: "it",
    is: "is",
    was: "was",
    this: "this"
};
var plurals = {
    pronoun: "they",
    is: "are",
    was: "were",
    this: "these"
};
module2.exports = class Pluralizer {
    constructor(singular, plural){
        this.singular = singular;
        this.plural = plural;
    }
    pluralize(count2) {
        const one = count2 === 1;
        const keys = one ? singulars : plurals;
        const noun = one ? this.singular : this.plural;
        return {
            ...keys,
            count: count2,
            noun
        };
    }
};

return module2.exports;
}
