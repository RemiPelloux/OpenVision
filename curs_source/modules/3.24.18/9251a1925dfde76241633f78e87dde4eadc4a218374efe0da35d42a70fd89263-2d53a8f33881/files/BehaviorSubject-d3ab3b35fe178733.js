import { require_Subject } from "./Subject.js";
var __wakaru_require_BehaviorSubject_cache;
export function require_BehaviorSubject() {
if (__wakaru_require_BehaviorSubject_cache) return __wakaru_require_BehaviorSubject_cache;
var exports2 = {};
__wakaru_require_BehaviorSubject_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.BehaviorSubject = void 0;
var Subject_js_1 = require_Subject();
var BehaviorSubject = class extends Subject_js_1.Subject {
    _value;
    constructor(_value){
        super();
        this._value = _value;
    }
    get value() {
        return this.getValue();
    }
    _subscribe(subscriber) {
        const subscription = super._subscribe(subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    }
    getValue() {
        const { hasError, thrownError, _value } = this;
        if (hasError) {
            throw thrownError;
        }
        return _value;
    }
    next(value) {
        super.next(this._value = value);
    }
};
exports2.BehaviorSubject = BehaviorSubject;

return exports2;
}
