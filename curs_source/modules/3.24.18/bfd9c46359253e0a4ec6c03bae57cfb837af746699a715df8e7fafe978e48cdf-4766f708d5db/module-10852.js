"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.firstValueFrom = void 0;
const n = require("./module-51078.js"), s = require("./module-50231.js");
exports.firstValueFrom = function(e, t) {
    const r = "object" == typeof t;
    return new Promise((o, i)=>{
        const a = new n.Subscriber({
            next: (e)=>{
                o(e), a.unsubscribe();
            },
            error: i,
            complete: ()=>{
                r ? o(t.defaultValue) : i(new s.EmptyError);
            }
        });
        e.subscribe(a);
    });
};
