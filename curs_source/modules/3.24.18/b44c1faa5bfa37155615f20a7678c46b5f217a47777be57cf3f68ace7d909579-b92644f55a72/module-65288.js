"use strict";
const t = {
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
    constructor(e, t){
        this.singular = e, this.plural = t;
    }
    pluralize(e) {
        const n = 1 === e;
        return {
            ...n ? t : r,
            count: e,
            noun: n ? this.singular : this.plural
        };
    }
};
