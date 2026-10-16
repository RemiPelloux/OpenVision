"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AsyncScheduler = void 0;
const n = require("./module-34458.js");
class s extends n.Scheduler {
    actions = [];
    _active = !1;
    _scheduled;
    constructor(e, t = n.Scheduler.now){
        super(e, t);
    }
    flush(e) {
        const { actions: t } = this;
        if (this._active) return void t.push(e);
        let r;
        this._active = !0;
        do {
            if (r = e.execute(e.state, e.delay)) break;
        }while (e = t.shift())
        if (this._active = !1, r) {
            for(; e = t.shift();)e.unsubscribe();
            throw r;
        }
    }
}
exports.AsyncScheduler = s;
