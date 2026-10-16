"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.generate = void 0;
const n = require("./module-44896.js"), o = require("./module-82901.js"), s = require("./module-33737.js"), i = require("./module-17096.js");
exports.generate = function(e, t, r, a, l) {
    let c, u;
    function* d() {
        for(let e = u; !t || t(e); e = r(e))yield c(e);
    }
    return 1 === arguments.length ? { initialState: u, condition: t, iterate: r, resultSelector: c = n.identity, scheduler: l } = e : (u = e, !a || (0, o.isScheduler)(a) ? (c = n.identity, l = a) : c = a), (0, s.defer)(l ? ()=>(0, i.scheduleIterable)(d(), l) : d);
};
