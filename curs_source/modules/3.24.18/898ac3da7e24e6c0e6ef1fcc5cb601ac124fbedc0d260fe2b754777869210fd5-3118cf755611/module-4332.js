"use strict";
const n = {
    pronoun: "it",
    is: "is",
    was: "was",
    this: "this"
}, a = {
    pronoun: "they",
    is: "are",
    was: "were",
    this: "these"
};
module.exports = class {
    constructor(e, n){
        this.singular = e, this.plural = n;
    }
    pluralize(e) {
        const t = 1 === e;
        return {
            ...t ? n : a,
            count: e,
            noun: t ? this.singular : this.plural
        };
    }
};
