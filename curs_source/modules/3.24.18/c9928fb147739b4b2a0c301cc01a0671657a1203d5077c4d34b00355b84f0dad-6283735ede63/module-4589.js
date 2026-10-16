Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.using = void 0;
const s = require("./module-1078.js"), o = require("./module-744.js");
exports.using = function(e, a) {
    return new s.Observable((n)=>{
        const r = e(), t = a(r);
        return (t ? (0, s.from)(t) : o.EMPTY).subscribe(n), ()=>{
            r && r.unsubscribe();
        };
    });
};
