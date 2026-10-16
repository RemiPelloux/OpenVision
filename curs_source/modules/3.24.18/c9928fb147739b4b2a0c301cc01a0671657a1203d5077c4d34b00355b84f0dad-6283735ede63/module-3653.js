Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BehaviorSubject = void 0;
const s = require("./module-3043.js");
class o extends s.Subject {
    _value;
    constructor(e){
        super(), this._value = e;
    }
    get value() {
        return this.getValue();
    }
    _subscribe(e) {
        const a = super._subscribe(e);
        return !a.closed && e.next(this._value), a;
    }
    getValue() {
        const { hasError: e, thrownError: a, _value: n } = this;
        if (e) throw a;
        return n;
    }
    next(e) {
        super.next(this._value = e);
    }
}
exports.BehaviorSubject = o;
