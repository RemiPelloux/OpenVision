"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AsyncSubject = void 0;
const n = require("./module-83043.js");
class s extends n.Subject {
    _value = null;
    _hasValue = !1;
    _isComplete = !1;
    _checkFinalizedStatuses(e) {
        const { hasError: t, _hasValue: r, _value: n, thrownError: s, _closed: o, _isComplete: i } = this;
        t ? e.error(s) : (o || i) && (r && e.next(n), e.complete());
    }
    next(e) {
        this._closed || (this._value = e, this._hasValue = !0);
    }
    complete() {
        const { _hasValue: e, _value: t, _isComplete: r } = this;
        r || (this._isComplete = !0, e && super.next(t), super.complete());
    }
}
exports.AsyncSubject = s;
