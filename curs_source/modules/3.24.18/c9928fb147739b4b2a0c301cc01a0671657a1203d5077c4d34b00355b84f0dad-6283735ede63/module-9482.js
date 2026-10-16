Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ReplaySubject = void 0;
const s = require("./module-3043.js"), o = require("./module-6256.js");
class r extends s.Subject {
    _bufferSize;
    _windowTime;
    _timestampProvider;
    _buffer = [];
    _infiniteTimeWindow = !0;
    constructor(e = 1 / 0, a = 1 / 0, n = o.dateTimestampProvider){
        super(), this._bufferSize = e, this._windowTime = a, this._timestampProvider = n, this._infiniteTimeWindow = a === 1 / 0, this._bufferSize = Math.max(1, e), this._windowTime = Math.max(1, a);
    }
    next(e) {
        const { _closed: a, _buffer: n, _infiniteTimeWindow: s, _timestampProvider: o, _windowTime: r } = this;
        a || (n.push(e), !s && n.push(o.now() + r)), this._trimBuffer(), super.next(e);
    }
    _subscribe(e) {
        this._trimBuffer();
        const a = this._innerSubscribe(e), { _infiniteTimeWindow: n, _buffer: s } = this, o = s.slice();
        for(let a = 0; a < o.length && !e.closed; a += n ? 1 : 2)e.next(o[a]);
        return this._checkFinalizedStatuses(e), a;
    }
    _trimBuffer() {
        const { _bufferSize: e, _timestampProvider: a, _buffer: n, _infiniteTimeWindow: s } = this, o = (s ? 1 : 2) * e;
        if (e < 1 / 0 && o < n.length && n.splice(0, n.length - o), !s) {
            const e = a.now();
            let s = 0;
            for(let a = 1; a < n.length && n[a] <= e; a += 2)s = a;
            s && n.splice(0, s + 1);
        }
    }
}
exports.ReplaySubject = r;
