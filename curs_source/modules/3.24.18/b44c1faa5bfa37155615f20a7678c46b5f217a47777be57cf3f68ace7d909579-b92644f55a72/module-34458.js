"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Scheduler = void 0;
const n = require("./module-86256.js");
class s {
    schedulerActionCtor;
    static now = n.dateTimestampProvider.now;
    constructor(e, t = s.now){
        this.schedulerActionCtor = e, this.now = t;
    }
    now;
    schedule(e, t = 0, r) {
        return new this.schedulerActionCtor(this, e).schedule(r, t);
    }
}
exports.Scheduler = s;
