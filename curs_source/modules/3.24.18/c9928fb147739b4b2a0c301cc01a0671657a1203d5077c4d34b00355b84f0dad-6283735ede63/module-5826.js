Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.withLatestFrom = void 0;
const s = require("./module-1078.js"), o = require("./module-4896.js"), r = require("./module-4462.js"), t = require("./module-5619.js");
exports.withLatestFrom = function(...e) {
    const a = (0, t.popResultSelector)(e);
    return (n)=>new s.Observable((t)=>{
            const i = e.length, m = new Array(i);
            let l = e.map(()=>!1), d = !1;
            for(let a = 0; a < i; a++)(0, s.from)(e[a]).subscribe((0, s.operate)({
                destination: t,
                next: (e)=>{
                    m[a] = e, d || l[a] || (l[a] = !0, (d = l.every(o.identity)) && (l = null));
                },
                complete: r.noop
            }));
            n.subscribe((0, s.operate)({
                destination: t,
                next: (e)=>{
                    if (d) {
                        const n = [
                            e,
                            ...m
                        ];
                        t.next(a ? a(...n) : n);
                    }
                }
            }));
        });
};
