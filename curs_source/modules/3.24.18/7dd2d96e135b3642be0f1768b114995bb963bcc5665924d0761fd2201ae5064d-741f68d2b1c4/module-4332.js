"use strict";
const n = {
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
    constructor(e, n){
        this.singular = e, this.plural = n;
    }
    pluralize(e) {
        const a = 1 === e;
        return {
            ...a ? n : t,
            count: e,
            noun: a ? this.singular : this.plural
        };
    }
};
