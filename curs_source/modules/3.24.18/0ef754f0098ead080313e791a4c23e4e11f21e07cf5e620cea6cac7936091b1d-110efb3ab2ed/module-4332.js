"use strict";
const a = {
    pronoun: "it",
    is: "is",
    was: "was",
    this: "this"
}, n = {
    pronoun: "they",
    is: "are",
    was: "were",
    this: "these"
};
module.exports = class {
    constructor(e, a){
        this.singular = e, this.plural = a;
    }
    pluralize(e) {
        const t = 1 === e;
        return {
            ...t ? a : n,
            count: e,
            noun: t ? this.singular : this.plural
        };
    }
};
