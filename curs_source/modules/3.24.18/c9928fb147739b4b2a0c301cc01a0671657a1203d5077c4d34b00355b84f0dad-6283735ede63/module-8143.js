Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.map = void 0;
const s = require("./module-1078.js");
exports.map = function(e) {
    return (a)=>new s.Observable((n)=>{
            let o = 0;
            a.subscribe((0, s.operate)({
                destination: n,
                next: (a)=>{
                    n.next(e(a, o++));
                }
            }));
        });
};
