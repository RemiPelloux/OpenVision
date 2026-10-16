"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BehaviorSubject = void 0;
const n = require("./module-3043.js");
class o extends n.Subject {
    _value;
    constructor(e){
        super(), this._value = e;
    }
    get value() {
        return this.getValue();
    }
    _subscribe(e) {
        const t = super._subscribe(e);
        return !t.closed && e.next(this._value), t;
    }
    getValue() {
        const { hasError: e, thrownError: t, _value: r } = this;
        if (e) throw t;
        return r;
    }
    next(e) {
        super.next(this._value = e);
    }
}
exports.BehaviorSubject = o;
