"use strict";
const e = {
    pronoun: "it",
    is: "is",
    was: "was",
    this: "this"
}, r = {
    pronoun: "they",
    is: "are",
    was: "were",
    this: "these"
};
module.exports = class {
    constructor(t, e){
        this.singular = t, this.plural = e;
    }
    pluralize(t) {
        const n = 1 === t;
        return {
            ...n ? e : r,
            count: t,
            noun: n ? this.singular : this.plural
        };
    }
};
