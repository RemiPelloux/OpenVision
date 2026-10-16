"use strict";
const e = Symbol("kDone"), r = Symbol("kRun");
module.exports = class {
    constructor(t){
        this[e] = ()=>{
            this.pending--, this[r]();
        }, this.concurrency = t || 1 / 0, this.jobs = [], this.pending = 0;
    }
    add(t) {
        this.jobs.push(t), this[r]();
    }
    [r]() {
        if (this.pending !== this.concurrency && this.jobs.length) {
            const t = this.jobs.shift();
            this.pending++, t(this[e]);
        }
    }
};
