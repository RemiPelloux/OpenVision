Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.takeUntil = void 0;
const s = require("./module-1078.js"), o = require("./module-4462.js");
exports.takeUntil = function(e) {
    return (a)=>new s.Observable((n)=>{
            (0, s.from)(e).subscribe((0, s.operate)({
                destination: n,
                next: ()=>n.complete(),
                complete: o.noop
            })), !n.closed && a.subscribe(n);
        });
};
