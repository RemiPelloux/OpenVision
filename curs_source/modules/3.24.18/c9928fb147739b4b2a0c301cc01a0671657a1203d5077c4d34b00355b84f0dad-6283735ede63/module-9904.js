Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scanInternals = void 0;
const s = require("./module-1078.js");
exports.scanInternals = function(e, a, n, o, r, t, i) {
    let m = n, l = a, d = 0;
    t.subscribe((0, s.operate)({
        destination: i,
        next: (a)=>{
            const n = d++;
            l = m ? e(l, a, n) : (m = !0, a), o && i.next(l);
        },
        complete: r ? ()=>{
            m && i.next(l), i.complete();
        } : void 0
    }));
};
