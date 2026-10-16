Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.distinctUntilChanged = void 0;
const s = require("./module-4896.js"), o = require("./module-1078.js");
function r(e, a) {
    return e === a;
}
exports.distinctUntilChanged = function(e, a = s.identity) {
    return e = e ?? r, (n)=>new o.Observable((s)=>{
            let r, t = !0;
            n.subscribe((0, o.operate)({
                destination: s,
                next: (n)=>{
                    const o = a(n);
                    !t && e(r, o) || (t = !1, r = o, s.next(n));
                }
            }));
        });
};
