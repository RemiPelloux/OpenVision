Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.concatWith = void 0;
const s = require("./module-1078.js"), o = require("./module-3006.js");
exports.concatWith = function(...e) {
    return (a)=>new s.Observable((n)=>{
            (0, o.concatAll)()((0, s.from)([
                a,
                ...e
            ])).subscribe(n);
        });
};
