Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.zip = void 0;
const s = require("./module-1078.js"), o = require("./module-9031.js"), r = require("./module-744.js"), t = require("./module-5619.js");
exports.zip = function(...e) {
    const a = (0, t.popResultSelector)(e), n = (0, o.argsOrArgArray)(e);
    return n.length ? new s.Observable((e)=>{
        let o = n.map(()=>[]), r = n.map(()=>!1);
        e.add(()=>{
            o = r = null;
        });
        for(let t = 0; !e.closed && t < n.length; t++)(0, s.from)(n[t]).subscribe((0, s.operate)({
            destination: e,
            next: (n)=>{
                if (o[t].push(n), o.every((e)=>e.length)) {
                    const n = o.map((e)=>e.shift());
                    e.next(a ? a(...n) : n), o.some((e, a)=>!e.length && r[a]) && e.complete();
                }
            },
            complete: ()=>{
                r[t] = !0, !o[t].length && e.complete();
            }
        }));
        return ()=>{
            o = r = null;
        };
    }) : r.EMPTY;
};
