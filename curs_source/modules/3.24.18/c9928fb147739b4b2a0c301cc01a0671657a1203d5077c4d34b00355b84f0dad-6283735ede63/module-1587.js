Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.finalize = void 0;
const s = require("./module-1078.js");
exports.finalize = function(e) {
    return (a)=>new s.Observable((n)=>{
            a.subscribe(n), n.add(e);
        });
};
