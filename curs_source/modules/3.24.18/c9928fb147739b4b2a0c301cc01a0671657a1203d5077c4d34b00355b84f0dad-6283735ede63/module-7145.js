Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.every = void 0;
const s = require("./module-1078.js");
exports.every = function(e, a) {
    return (n)=>new s.Observable((o)=>{
            let r = 0;
            n.subscribe((0, s.operate)({
                destination: o,
                next: (s)=>{
                    e.call(a, s, r++, n) || (o.next(!1), o.complete());
                },
                complete: ()=>{
                    o.next(!0), o.complete();
                }
            }));
        });
};
