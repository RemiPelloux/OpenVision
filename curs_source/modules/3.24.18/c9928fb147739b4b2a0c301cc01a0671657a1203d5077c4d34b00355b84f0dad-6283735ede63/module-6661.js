Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.window = void 0;
const s = require("./module-1078.js"), o = require("./module-3043.js"), r = require("./module-4462.js");
exports.window = function(e) {
    return (a)=>new s.Observable((n)=>{
            let t = new o.Subject;
            n.next(t.asObservable());
            const i = (e)=>{
                t.error(e), n.error(e);
            };
            return a.subscribe((0, s.operate)({
                destination: n,
                next: (e)=>t?.next(e),
                complete: ()=>{
                    t.complete(), n.complete();
                },
                error: i
            })), (0, s.from)(e).subscribe((0, s.operate)({
                destination: n,
                next: ()=>{
                    t.complete(), n.next(t = new o.Subject);
                },
                complete: r.noop,
                error: i
            })), ()=>{
                t?.unsubscribe(), t = null;
            };
        });
};
