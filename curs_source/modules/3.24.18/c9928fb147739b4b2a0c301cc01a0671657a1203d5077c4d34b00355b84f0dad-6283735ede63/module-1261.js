Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mergeWith = void 0;
const s = require("./module-1078.js"), o = require("./module-6102.js");
exports.mergeWith = function(...e) {
    return (a)=>new s.Observable((n)=>{
            (0, o.mergeAll)()((0, s.from)([
                a,
                ...e
            ])).subscribe(n);
        });
};
