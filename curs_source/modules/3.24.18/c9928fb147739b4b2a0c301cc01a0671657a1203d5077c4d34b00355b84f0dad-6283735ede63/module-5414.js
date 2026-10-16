Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.onErrorResumeNext = void 0;
const s = require("./module-1078.js"), o = require("./module-9031.js"), r = require("./module-4462.js");
exports.onErrorResumeNext = function(...e) {
    const a = (0, o.argsOrArgArray)(e);
    return new s.Observable((e)=>{
        let n = 0;
        const o = ()=>{
            if (n < a.length) {
                let t;
                try {
                    t = (0, s.from)(a[n++]);
                } catch (e) {
                    return void o();
                }
                const i = (0, s.operate)({
                    destination: e,
                    error: r.noop,
                    complete: r.noop
                });
                t.subscribe(i), i.add(o);
            } else e.complete();
        };
        o();
    });
};
