Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.exhaustMap = void 0;
const s = require("./module-1078.js");
exports.exhaustMap = function(e) {
    return (a)=>new s.Observable((n)=>{
            let o = 0, r = null, t = !1;
            a.subscribe((0, s.operate)({
                destination: n,
                next: (a)=>{
                    r || (r = (0, s.operate)({
                        destination: n,
                        complete: ()=>{
                            r = null, t && n.complete();
                        }
                    }), (0, s.from)(e(a, o++)).subscribe(r));
                },
                complete: ()=>{
                    t = !0, !r && n.complete();
                }
            }));
        });
};
