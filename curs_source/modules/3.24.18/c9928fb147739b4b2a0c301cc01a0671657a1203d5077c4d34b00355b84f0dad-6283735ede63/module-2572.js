Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.skipUntil = void 0;
const s = require("./module-1078.js"), o = require("./module-4462.js");
exports.skipUntil = function(e) {
    return (a)=>new s.Observable((n)=>{
            let r = !1;
            const t = (0, s.operate)({
                destination: n,
                next: ()=>{
                    t?.unsubscribe(), r = !0;
                },
                complete: o.noop
            });
            (0, s.from)(e).subscribe(t), a.subscribe((0, s.operate)({
                destination: n,
                next: (e)=>r && n.next(e)
            }));
        });
};
