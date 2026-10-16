Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.startWith = void 0;
const s = require("./module-1078.js");
exports.startWith = function(...e) {
    return (a)=>new s.Observable((n)=>{
            (0, s.subscribeToArray)(e, (0, s.operate)({
                destination: n,
                complete: ()=>a.subscribe(n)
            }));
        });
};
