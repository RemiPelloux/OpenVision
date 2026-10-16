Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toArray = void 0;
const s = require("./module-8339.js"), o = require("./module-1078.js"), r = (e, a)=>(e.push(a), e);
exports.toArray = function() {
    return (e)=>new o.Observable((a)=>{
            (0, s.reduce)(r, [])(e).subscribe(a);
        });
};
