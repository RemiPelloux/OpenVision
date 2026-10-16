"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.generate = void 0;
const n = require("./module-44896.js"), s = require("./module-82901.js"), o = require("./module-33737.js"), i = require("./module-17096.js");
exports.generate = function(e, t, r, a, c) {
    let l, u;
    function* d() {
        for(let e = u; !t || t(e); e = r(e))yield l(e);
    }
    return 1 === arguments.length ? { initialState: u, condition: t, iterate: r, resultSelector: l = n.identity, scheduler: c } = e : (u = e, !a || (0, s.isScheduler)(a) ? (l = n.identity, c = a) : l = a), (0, o.defer)(c ? ()=>(0, i.scheduleIterable)(d(), c) : d);
};
