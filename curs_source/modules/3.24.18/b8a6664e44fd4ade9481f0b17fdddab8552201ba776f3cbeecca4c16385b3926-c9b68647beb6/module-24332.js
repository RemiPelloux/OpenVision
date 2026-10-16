"use strict";
const e = {
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
    constructor(A, e){
        this.singular = A, this.plural = e;
    }
    pluralize(A) {
        const r = 1 === A;
        return {
            ...r ? e : t,
            count: A,
            noun: r ? this.singular : this.plural
        };
    }
};
