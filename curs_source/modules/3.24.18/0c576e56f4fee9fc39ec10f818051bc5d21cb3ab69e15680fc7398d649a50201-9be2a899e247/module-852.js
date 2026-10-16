"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.firstValueFrom = void 0;
const n = require("./module-1078.js"), o = require("./module-231.js");
exports.firstValueFrom = function(e, t) {
    const r = "object" == typeof t;
    return new Promise((s, i)=>{
        const a = new n.Subscriber({
            next: (e)=>{
                s(e), a.unsubscribe();
            },
            error: i,
            complete: ()=>{
                r ? s(t.defaultValue) : i(new o.EmptyError);
            }
        });
        e.subscribe(a);
    });
};
