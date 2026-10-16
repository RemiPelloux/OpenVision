Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.endWith = void 0;
const s = require("./module-1078.js");
exports.endWith = function(...e) {
    return (a)=>new s.Observable((n)=>{
            a.subscribe((0, s.operate)({
                destination: n,
                complete: ()=>{
                    (0, s.subscribeToArray)(e, n);
                }
            }));
        });
};
