"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AsapScheduler = void 0;
const n = require("./module-75488.js");
class s extends n.AsyncScheduler {
    flush(e) {
        this._active = !0;
        const t = this._scheduled;
        this._scheduled = void 0;
        const { actions: r } = this;
        let n;
        e = e || r.shift();
        do {
            if (n = e.execute(e.state, e.delay)) break;
        }while ((e = r[0]) && e.id === t && r.shift())
        if (this._active = !1, n) {
            for(; (e = r[0]) && e.id === t && r.shift();)e.unsubscribe();
            throw n;
        }
    }
}
exports.AsapScheduler = s;
