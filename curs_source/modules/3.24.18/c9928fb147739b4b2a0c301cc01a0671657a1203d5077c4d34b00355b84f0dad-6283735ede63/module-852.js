Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.firstValueFrom = void 0;
const s = require("./module-1078.js"), o = require("./module-231.js");
exports.firstValueFrom = function(e, a) {
    const n = "object" == typeof a;
    return new Promise((r, t)=>{
        const i = new s.Subscriber({
            next: (e)=>{
                r(e), i.unsubscribe();
            },
            error: t,
            complete: ()=>{
                n ? r(a.defaultValue) : t(new o.EmptyError);
            }
        });
        e.subscribe(i);
    });
};
