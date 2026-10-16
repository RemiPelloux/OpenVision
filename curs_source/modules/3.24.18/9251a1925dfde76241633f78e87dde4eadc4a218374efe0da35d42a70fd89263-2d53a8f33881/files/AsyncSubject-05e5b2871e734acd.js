import { require_Subject } from "./Subject.js";
var __wakaru_require_AsyncSubject_cache;
export function require_AsyncSubject() {
if (__wakaru_require_AsyncSubject_cache) return __wakaru_require_AsyncSubject_cache;
var exports2 = {};
__wakaru_require_AsyncSubject_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AsyncSubject = void 0;
var Subject_js_1 = require_Subject();
var AsyncSubject2 = class extends Subject_js_1.Subject {
    _value = null;
    _hasValue = false;
    _isComplete = false;
    _checkFinalizedStatuses(subscriber) {
        const { hasError, _hasValue, _value, thrownError, _closed, _isComplete } = this;
        if (hasError) {
            subscriber.error(thrownError);
        } else if (_closed || _isComplete) {
            _hasValue && subscriber.next(_value);
            subscriber.complete();
        }
    }
    next(value) {
        if (!this._closed) {
            this._value = value;
            this._hasValue = true;
        }
    }
    complete() {
        const { _hasValue, _value, _isComplete } = this;
        if (!_isComplete) {
            this._isComplete = true;
            _hasValue && super.next(_value);
            super.complete();
        }
    }
};
exports2.AsyncSubject = AsyncSubject2;

return exports2;
}
