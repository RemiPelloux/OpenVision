Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.debounceTime = void 0;
const s = require("./module-2665.js"), o = require("./module-1078.js"), r = require("./module-5830.js");
exports.debounceTime = function(e, a = s.asyncScheduler) {
    return (n)=>new o.Observable((s)=>{
            let t, i;
            n.subscribe((0, o.operate)({
                destination: s,
                next: (n)=>{
                    t = n, i?.unsubscribe(), i = (0, r.executeSchedule)(s, a, ()=>{
                        i = void 0;
                        const e = t;
                        t = null, s.next(e);
                    }, e);
                },
                complete: ()=>{
                    i && s.next(t), s.complete();
                },
                finalize: ()=>{
                    t = i = null;
                }
            }));
        });
};
