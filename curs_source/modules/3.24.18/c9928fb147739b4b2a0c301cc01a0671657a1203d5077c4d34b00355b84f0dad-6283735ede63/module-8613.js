Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.throwIfEmpty = void 0;
const s = require("./module-231.js"), o = require("./module-1078.js");
function r() {
    return new s.EmptyError;
}
exports.throwIfEmpty = function(e = r) {
    return (a)=>new o.Observable((n)=>{
            let s = !1;
            a.subscribe((0, o.operate)({
                destination: n,
                next: (e)=>{
                    s = !0, n.next(e);
                },
                complete: ()=>s ? n.complete() : n.error(e())
            }));
        });
};
