Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.StopWatch = void 0;
const n = globalThis.performance && "function" == typeof globalThis.performance.now;
class i {
    static create(e) {
        return new i(e);
    }
    constructor(e){
        this._now = n && !1 === e ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
    }
    stop() {
        this._stopTime = this._now();
    }
    reset() {
        this._startTime = this._now(), this._stopTime = -1;
    }
    elapsed() {
        return -1 !== this._stopTime ? this._stopTime - this._startTime : this._now() - this._startTime;
    }
}
exports.StopWatch = i;
