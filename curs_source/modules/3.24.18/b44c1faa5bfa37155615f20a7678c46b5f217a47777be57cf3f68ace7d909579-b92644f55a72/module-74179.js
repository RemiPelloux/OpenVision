"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.first = void 0;
const n = require("./module-51078.js"), s = require("./module-50231.js");
exports.first = function(e, t) {
    const r = arguments.length >= 2;
    return (o)=>new n.Observable((i)=>{
            let a = 0;
            const c = (0, n.operate)({
                destination: i,
                next: (t)=>{
                    (!e || e(t, a++, o)) && (c.unsubscribe(), i.next(t), i.complete());
                },
                complete: ()=>{
                    r ? (i.next(t), i.complete()) : i.error(new s.EmptyError);
                }
            });
            o.subscribe(c);
        });
};
