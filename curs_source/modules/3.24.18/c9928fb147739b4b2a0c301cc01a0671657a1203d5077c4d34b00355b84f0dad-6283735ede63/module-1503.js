Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.combineLatestInit = exports.combineLatest = void 0;
const s = require("./module-1078.js"), o = require("./module-6800.js"), r = require("./module-4896.js"), t = require("./module-845.js"), i = require("./module-744.js");
function m(e, a = r.identity) {
    return (n)=>{
        const { length: o } = e, r = new Array(o);
        let t = o, i = o;
        for(let m = 0; m < o; m++){
            const o = (0, s.from)(e[m]);
            let l = !1;
            o.subscribe((0, s.operate)({
                destination: n,
                next: (e)=>{
                    r[m] = e, l || (l = !0, i--), i || n.next(a(Array.from(r)));
                },
                complete: ()=>{
                    --t || n.complete();
                }
            }));
        }
    };
}
exports.combineLatest = function(e, a) {
    const n = (0, o.arrayOrObject)(e);
    if (!n) throw new TypeError("sources must be an array or object");
    const { args: l, keys: d } = n;
    return 0 === l.length ? i.EMPTY : new s.Observable(m(l, d ? (e)=>(0, t.createObject)(d, e) : a ? (e)=>a(...e) : r.identity));
}, exports.combineLatestInit = m;
