Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.distinct = void 0;
const s = require("./module-1078.js"), o = require("./module-4462.js");
exports.distinct = function(e, a) {
    return (n)=>new s.Observable((r)=>{
            const t = new Set;
            n.subscribe((0, s.operate)({
                destination: r,
                next: (a)=>{
                    const n = e ? e(a) : a;
                    t.has(n) || (t.add(n), r.next(a));
                }
            })), a && (0, s.from)(a).subscribe((0, s.operate)({
                destination: r,
                next: ()=>t.clear(),
                complete: o.noop
            }));
        });
};
