"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.onErrorResumeNext = void 0;
const n = require("./module-51078.js"), s = require("./module-79031.js"), o = require("./module-64462.js");
exports.onErrorResumeNext = function(...e) {
    const t = (0, s.argsOrArgArray)(e);
    return new n.Observable((e)=>{
        let r = 0;
        const s = ()=>{
            if (r < t.length) {
                let i;
                try {
                    i = (0, n.from)(t[r++]);
                } catch (e) {
                    return void s();
                }
                const a = (0, n.operate)({
                    destination: e,
                    error: o.noop,
                    complete: o.noop
                });
                i.subscribe(a), a.add(s);
            } else e.complete();
        };
        s();
    });
};
