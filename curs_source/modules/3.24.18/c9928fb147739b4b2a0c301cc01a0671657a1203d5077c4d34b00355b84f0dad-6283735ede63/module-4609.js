Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.skipWhile = void 0;
const s = require("./module-1078.js");
exports.skipWhile = function(e) {
    return (a)=>new s.Observable((n)=>{
            let o = !1, r = 0;
            a.subscribe((0, s.operate)({
                destination: n,
                next: (a)=>(o || (o = !e(a, r++))) && n.next(a)
            }));
        });
};
