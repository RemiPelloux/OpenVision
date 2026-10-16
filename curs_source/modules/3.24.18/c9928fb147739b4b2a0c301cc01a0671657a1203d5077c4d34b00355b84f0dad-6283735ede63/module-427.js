Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.connect = void 0;
const s = require("./module-1078.js"), o = require("./module-3043.js"), r = require("./module-6824.js"), t = {
    connector: ()=>new o.Subject
};
exports.connect = function(e, a = t) {
    const { connector: n } = a;
    return (a)=>new s.Observable((o)=>{
            const t = n();
            (0, s.from)(e((0, r.fromSubscribable)(t))).subscribe(o), o.add(a.subscribe(t));
        });
};
