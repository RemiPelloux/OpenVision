Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.buffer = void 0;
const s = require("./module-1078.js"), o = require("./module-4462.js");
exports.buffer = function(e) {
    return (a)=>new s.Observable((n)=>{
            let r = [];
            return (0, s.from)(e).subscribe((0, s.operate)({
                destination: n,
                next: ()=>{
                    const e = r;
                    r = [], n.next(e);
                },
                complete: o.noop
            })), a.subscribe((0, s.operate)({
                destination: n,
                next: (e)=>r.push(e),
                complete: ()=>{
                    n.next(r), n.complete();
                }
            })), ()=>{
                r = null;
            };
        });
};
