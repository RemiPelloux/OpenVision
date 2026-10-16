Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.generate = void 0;
const s = require("./module-4896.js"), o = require("./module-2901.js"), r = require("./module-3737.js"), t = require("./module-7096.js");
exports.generate = function(e, a, n, i, m) {
    let l, d;
    function* c() {
        for(let e = d; !a || a(e); e = n(e))yield l(e);
    }
    return 1 === arguments.length ? { initialState: d, condition: a, iterate: n, resultSelector: l = s.identity, scheduler: m } = e : (d = e, !i || (0, o.isScheduler)(i) ? (l = s.identity, m = i) : l = i), (0, r.defer)(m ? ()=>(0, t.scheduleIterable)(c(), m) : c);
};
