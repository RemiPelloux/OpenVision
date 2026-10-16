"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.lastValueFrom = void 0;
const n = require("./module-50231.js");
exports.lastValueFrom = function(e, t) {
    const r = "object" == typeof t;
    return new Promise((s, o)=>{
        let i, a = !1;
        e.subscribe({
            next: (e)=>{
                i = e, a = !0;
            },
            error: o,
            complete: ()=>{
                a ? s(i) : r ? s(t.defaultValue) : o(new n.EmptyError);
            }
        });
    });
};
