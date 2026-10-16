Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.filter = void 0;
const s = require("./module-1078.js");
exports.filter = function(e, a) {
    return (n)=>new s.Observable((o)=>{
            let r = 0;
            n.subscribe((0, s.operate)({
                destination: o,
                next: (n)=>e.call(a, n, r++) && o.next(n)
            }));
        });
};
