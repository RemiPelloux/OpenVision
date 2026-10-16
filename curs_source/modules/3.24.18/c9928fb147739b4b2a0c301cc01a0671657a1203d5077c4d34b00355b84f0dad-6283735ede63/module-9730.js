Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createFind = exports.find = void 0;
const s = require("./module-1078.js");
function o(e, a, n, o) {
    const r = "index" === a;
    let t = 0;
    n.subscribe((0, s.operate)({
        destination: o,
        next: (a)=>{
            const s = t++;
            e(a, s, n) && (o.next(r ? s : a), o.complete());
        },
        complete: ()=>{
            o.next(r ? -1 : void 0), o.complete();
        }
    }));
}
exports.find = function(e) {
    return (a)=>new s.Observable((n)=>o(e, "value", a, n));
}, exports.createFind = o;
