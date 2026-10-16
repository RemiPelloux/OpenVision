Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mergeInternals = void 0;
const s = require("./module-1078.js"), o = require("./module-5830.js");
exports.mergeInternals = function(e, a, n, r, t, i, m, l) {
    const d = [];
    let c = 0, T = 0, p = !1;
    const _ = ()=>{
        !p || d.length || c || a.complete();
    }, k = (e)=>c < r ? u(e) : d.push(e), u = (e)=>{
        i && a.next(e), c++;
        let l = !1;
        (0, s.from)(n(e, T++)).subscribe((0, s.operate)({
            destination: a,
            next: (e)=>{
                t?.(e), i ? k(e) : a.next(e);
            },
            complete: ()=>{
                l = !0;
            },
            finalize: ()=>{
                if (l) try {
                    for(c--; d.length && c < r;){
                        const e = d.shift();
                        m ? (0, o.executeSchedule)(a, m, ()=>u(e)) : u(e);
                    }
                    _();
                } catch (e) {
                    a.error(e);
                }
            }
        }));
    };
    return e.subscribe((0, s.operate)({
        destination: a,
        next: k,
        complete: ()=>{
            p = !0, _();
        }
    })), ()=>{
        l?.();
    };
};
