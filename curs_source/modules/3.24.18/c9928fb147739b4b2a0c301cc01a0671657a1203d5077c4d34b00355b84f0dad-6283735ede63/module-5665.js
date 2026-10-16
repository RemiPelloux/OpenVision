Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.forkJoin = void 0;
const s = require("./module-1078.js"), o = require("./module-6800.js"), r = require("./module-5619.js"), t = require("./module-5683.js"), i = require("./module-845.js"), m = require("./module-231.js");
exports.forkJoin = function(...e) {
    const a = (0, r.popResultSelector)(e), { args: n, keys: l } = (0, o.argsArgArrayOrObject)(e), d = new s.Observable((e)=>{
        const { length: a } = n;
        if (!a) return void e.complete();
        const o = new Array(a);
        let r = a, t = a;
        for(let d = 0; d < a; d++){
            let a = !1;
            (0, s.from)(n[d]).subscribe((0, s.operate)({
                destination: e,
                next: (e)=>{
                    a || (a = !0, t--), o[d] = e;
                },
                complete: ()=>r--,
                finalize: ()=>{
                    r && a || (0 === t ? (e.next(l ? (0, i.createObject)(l, o) : o), e.complete()) : e.error(new m.EmptyError));
                }
            }));
        }
    });
    return a ? (0, t.mapOneOrManyArgs)(a)(d) : d;
};
