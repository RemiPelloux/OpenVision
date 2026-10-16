Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bufferWhen = void 0;
const s = require("./module-1078.js"), o = require("./module-4462.js");
exports.bufferWhen = function(e) {
    return (a)=>new s.Observable((n)=>{
            let r = null, t = null;
            const i = ()=>{
                t?.unsubscribe();
                const a = r;
                r = [], a && n.next(a), (0, s.from)(e()).subscribe(t = (0, s.operate)({
                    destination: n,
                    next: i,
                    complete: o.noop
                }));
            };
            i(), a.subscribe((0, s.operate)({
                destination: n,
                next: (e)=>r?.push(e),
                complete: ()=>{
                    r && n.next(r), n.complete();
                },
                finalize: ()=>r = t = null
            }));
        });
};
