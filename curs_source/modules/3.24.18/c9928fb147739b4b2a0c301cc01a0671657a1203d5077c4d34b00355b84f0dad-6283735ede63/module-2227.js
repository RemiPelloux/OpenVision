Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sample = void 0;
const s = require("./module-1078.js"), o = require("./module-4462.js");
exports.sample = function(e) {
    return (a)=>new s.Observable((n)=>{
            let r = !1, t = null;
            a.subscribe((0, s.operate)({
                destination: n,
                next: (e)=>{
                    r = !0, t = e;
                }
            })), (0, s.from)(e).subscribe((0, s.operate)({
                destination: n,
                next: ()=>{
                    if (r) {
                        r = !1;
                        const e = t;
                        t = null, n.next(e);
                    }
                },
                complete: o.noop
            }));
        });
};
