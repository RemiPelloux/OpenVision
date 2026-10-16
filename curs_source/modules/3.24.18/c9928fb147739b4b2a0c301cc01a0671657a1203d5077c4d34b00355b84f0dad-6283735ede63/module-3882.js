Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.skipLast = void 0;
const s = require("./module-4896.js"), o = require("./module-1078.js");
exports.skipLast = function(e) {
    return e <= 0 ? s.identity : (a)=>new o.Observable((n)=>{
            let s = new Array(e), r = 0;
            return a.subscribe((0, o.operate)({
                destination: n,
                next: (a)=>{
                    const o = r++;
                    if (o < e) s[o] = a;
                    else {
                        const r = o % e, t = s[r];
                        s[r] = a, n.next(t);
                    }
                }
            })), ()=>{
                s = null;
            };
        });
};
