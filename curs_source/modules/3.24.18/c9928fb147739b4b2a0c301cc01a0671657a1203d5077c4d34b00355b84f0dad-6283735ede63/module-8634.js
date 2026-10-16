Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.zipWith = void 0;
const s = require("./module-1078.js"), o = require("./module-9190.js");
exports.zipWith = function(...e) {
    return (a)=>new s.Observable((n)=>{
            (0, o.zip)(a, ...e).subscribe(n);
        });
};
