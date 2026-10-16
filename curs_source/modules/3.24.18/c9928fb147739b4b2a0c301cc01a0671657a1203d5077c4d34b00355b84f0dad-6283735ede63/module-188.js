Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.findIndex = void 0;
const s = require("./module-1078.js"), o = require("./module-9730.js");
exports.findIndex = function(e) {
    return (a)=>new s.Observable((n)=>(0, o.createFind)(e, "index", a, n));
};
