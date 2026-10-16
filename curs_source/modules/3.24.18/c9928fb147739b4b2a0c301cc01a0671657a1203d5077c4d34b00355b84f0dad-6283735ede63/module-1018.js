Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.repeat = void 0;
const s = require("./module-1078.js"), o = require("./module-744.js"), r = require("./module-444.js");
exports.repeat = function(e) {
    let a, n = 1 / 0;
    return null != e && ("object" == typeof e ? { count: n = 1 / 0, delay: a } = e : n = e), n <= 0 ? ()=>o.EMPTY : (e)=>new s.Observable((o)=>{
            let t, i = 0;
            const m = ()=>{
                if (t?.unsubscribe(), t = null, null != a) {
                    const e = "number" == typeof a ? (0, r.timer)(a) : (0, s.from)(a(i)), n = (0, s.operate)({
                        destination: o,
                        next: ()=>{
                            n.unsubscribe(), l();
                        }
                    });
                    e.subscribe(n);
                } else l();
            }, l = ()=>{
                let a = !1;
                t = e.subscribe((0, s.operate)({
                    destination: o,
                    complete: ()=>{
                        ++i < n ? t ? m() : a = !0 : o.complete();
                    }
                })), a && m();
            };
            l();
        });
};
