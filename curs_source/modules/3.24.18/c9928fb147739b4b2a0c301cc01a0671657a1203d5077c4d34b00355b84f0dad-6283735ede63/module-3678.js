Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.lastValueFrom = void 0;
const s = require("./module-231.js");
exports.lastValueFrom = function(e, a) {
    const n = "object" == typeof a;
    return new Promise((o, r)=>{
        let t, i = !1;
        e.subscribe({
            next: (e)=>{
                t = e, i = !0;
            },
            error: r,
            complete: ()=>{
                i ? o(t) : n ? o(a.defaultValue) : r(new s.EmptyError);
            }
        });
    });
};
