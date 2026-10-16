Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ignoreElements = void 0;
const s = require("./module-1078.js"), o = require("./module-4462.js");
exports.ignoreElements = function() {
    return (e)=>new s.Observable((a)=>{
            e.subscribe((0, s.operate)({
                destination: a,
                next: o.noop
            }));
        });
};
