"use strict";
const t = Symbol("kDone"), r = Symbol("kRun");
module.exports = class {
    constructor(e){
        this[t] = ()=>{
            this.pending--, this[r]();
        }, this.concurrency = e || 1 / 0, this.jobs = [], this.pending = 0;
    }
    add(e) {
        this.jobs.push(e), this[r]();
    }
    [r]() {
        if (this.pending !== this.concurrency && this.jobs.length) {
            const e = this.jobs.shift();
            this.pending++, e(this[t]);
        }
    }
};
