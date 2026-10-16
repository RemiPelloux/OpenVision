"use strict";
const A = {
    pronoun: "it",
    is: "is",
    was: "was",
    this: "this"
}, t = {
    pronoun: "they",
    is: "are",
    was: "were",
    this: "these"
};
module.exports = class {
    constructor(e, A){
        this.singular = e, this.plural = A;
    }
    pluralize(e) {
        const n = 1 === e;
        return {
            ...n ? A : t,
            count: e,
            noun: n ? this.singular : this.plural
        };
    }
};
