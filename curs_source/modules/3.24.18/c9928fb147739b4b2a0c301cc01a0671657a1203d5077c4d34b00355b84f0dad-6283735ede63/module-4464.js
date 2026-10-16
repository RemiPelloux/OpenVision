Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.subscribeOn = void 0;
const s = require("./module-1078.js");
exports.subscribeOn = function(e, a = 0) {
    return (n)=>new s.Observable((s)=>{
            s.add(e.schedule(()=>n.subscribe(s), a));
        });
};
