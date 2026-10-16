Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Scheduler = void 0;
const s = require("./module-6256.js");
class o {
    schedulerActionCtor;
    static now = s.dateTimestampProvider.now;
    constructor(e, a = o.now){
        this.schedulerActionCtor = e, this.now = a;
    }
    now;
    schedule(e, a = 0, n) {
        return new this.schedulerActionCtor(this, e).schedule(n, a);
    }
}
exports.Scheduler = o;
