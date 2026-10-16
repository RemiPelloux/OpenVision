Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sequenceEqual = void 0;
const s = require("./module-1078.js");
exports.sequenceEqual = function(e, a = (e, a)=>e === a) {
    return (n)=>new s.Observable((o)=>{
            const r = {
                buffer: [],
                complete: !1
            }, t = {
                buffer: [],
                complete: !1
            }, i = (e)=>{
                o.next(e), o.complete();
            }, m = (e, n)=>{
                const r = (0, s.operate)({
                    destination: o,
                    next: (s)=>{
                        const { buffer: o, complete: r } = n;
                        0 === o.length ? r ? i(!1) : e.buffer.push(s) : !a(s, o.shift()) && i(!1);
                    },
                    complete: ()=>{
                        e.complete = !0;
                        const { complete: a, buffer: s } = n;
                        a && i(0 === s.length), r?.unsubscribe();
                    }
                });
                return r;
            };
            n.subscribe(m(r, t)), (0, s.from)(e).subscribe(m(t, r));
        });
};
