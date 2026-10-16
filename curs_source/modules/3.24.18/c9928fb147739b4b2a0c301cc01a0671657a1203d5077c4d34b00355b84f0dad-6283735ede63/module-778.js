Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.defaultIfEmpty = void 0;
const s = require("./module-1078.js");
exports.defaultIfEmpty = function(e) {
    return (a)=>new s.Observable((n)=>{
            let o = !1;
            a.subscribe((0, s.operate)({
                destination: n,
                next: (e)=>{
                    o = !0, n.next(e);
                },
                complete: ()=>{
                    o || n.next(e), n.complete();
                }
            }));
        });
};
