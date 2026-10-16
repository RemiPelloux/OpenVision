Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AsyncSubject = void 0;
const s = require("./module-3043.js");
class o extends s.Subject {
    _value = null;
    _hasValue = !1;
    _isComplete = !1;
    _checkFinalizedStatuses(e) {
        const { hasError: a, _hasValue: n, _value: s, thrownError: o, _closed: r, _isComplete: t } = this;
        a ? e.error(o) : (r || t) && (n && e.next(s), e.complete());
    }
    next(e) {
        this._closed || (this._value = e, this._hasValue = !0);
    }
    complete() {
        const { _hasValue: e, _value: a, _isComplete: n } = this;
        n || (this._isComplete = !0, e && super.next(a), super.complete());
    }
}
exports.AsyncSubject = o;
