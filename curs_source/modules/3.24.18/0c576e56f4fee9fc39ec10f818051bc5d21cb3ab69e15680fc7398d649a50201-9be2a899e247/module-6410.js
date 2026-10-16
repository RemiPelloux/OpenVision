"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.generate = void 0;
const n = require("./module-4896.js"), o = require("./module-2901.js"), s = require("./module-3737.js"), i = require("./module-7096.js");
exports.generate = function(e, t, r, a, c) {
    let u, l;
    function* d() {
        for(let e = l; !t || t(e); e = r(e))yield u(e);
    }
    return 1 === arguments.length ? { initialState: l, condition: t, iterate: r, resultSelector: u = n.identity, scheduler: c } = e : (l = e, !a || (0, o.isScheduler)(a) ? (u = n.identity, c = a) : u = a), (0, s.defer)(c ? ()=>(0, i.scheduleIterable)(d(), c) : d);
};
