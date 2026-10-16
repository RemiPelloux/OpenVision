"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ReplaySubject = void 0;
const n = require("./module-3043.js"), o = require("./module-6256.js");
class s extends n.Subject {
    _bufferSize;
    _windowTime;
    _timestampProvider;
    _buffer = [];
    _infiniteTimeWindow = !0;
    constructor(e = 1 / 0, t = 1 / 0, r = o.dateTimestampProvider){
        super(), this._bufferSize = e, this._windowTime = t, this._timestampProvider = r, this._infiniteTimeWindow = t === 1 / 0, this._bufferSize = Math.max(1, e), this._windowTime = Math.max(1, t);
    }
    next(e) {
        const { _closed: t, _buffer: r, _infiniteTimeWindow: n, _timestampProvider: o, _windowTime: s } = this;
        t || (r.push(e), !n && r.push(o.now() + s)), this._trimBuffer(), super.next(e);
    }
    _subscribe(e) {
        this._trimBuffer();
        const t = this._innerSubscribe(e), { _infiniteTimeWindow: r, _buffer: n } = this, o = n.slice();
        for(let t = 0; t < o.length && !e.closed; t += r ? 1 : 2)e.next(o[t]);
        return this._checkFinalizedStatuses(e), t;
    }
    _trimBuffer() {
        const { _bufferSize: e, _timestampProvider: t, _buffer: r, _infiniteTimeWindow: n } = this, o = (n ? 1 : 2) * e;
        if (e < 1 / 0 && o < r.length && r.splice(0, r.length - o), !n) {
            const e = t.now();
            let n = 0;
            for(let t = 1; t < r.length && r[t] <= e; t += 2)n = t;
            n && r.splice(0, n + 1);
        }
    }
}
exports.ReplaySubject = s;
