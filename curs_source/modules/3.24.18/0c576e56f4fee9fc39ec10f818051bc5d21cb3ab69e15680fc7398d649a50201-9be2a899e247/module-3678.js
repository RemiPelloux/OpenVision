"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.lastValueFrom = void 0;
const n = require("./module-231.js");
exports.lastValueFrom = function(e, t) {
    const r = "object" == typeof t;
    return new Promise((o, s)=>{
        let i, a = !1;
        e.subscribe({
            next: (e)=>{
                i = e, a = !0;
            },
            error: s,
            complete: ()=>{
                a ? o(i) : r ? o(t.defaultValue) : s(new n.EmptyError);
            }
        });
    });
};
