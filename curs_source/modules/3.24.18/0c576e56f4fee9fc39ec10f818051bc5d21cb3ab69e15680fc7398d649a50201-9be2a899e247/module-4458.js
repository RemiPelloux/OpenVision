"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Scheduler = void 0;
const n = require("./module-6256.js");
class o {
    schedulerActionCtor;
    static now = n.dateTimestampProvider.now;
    constructor(e, t = o.now){
        this.schedulerActionCtor = e, this.now = t;
    }
    now;
    schedule(e, t = 0, r) {
        return new this.schedulerActionCtor(this, e).schedule(r, t);
    }
}
exports.Scheduler = o;
