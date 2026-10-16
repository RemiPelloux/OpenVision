Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.dematerialize = void 0;
const s = require("./module-8216.js"), o = require("./module-1078.js");
exports.dematerialize = function() {
    return (e)=>new o.Observable((a)=>{
            e.subscribe((0, o.operate)({
                destination: a,
                next: (e)=>(0, s.observeNotification)(e, a)
            }));
        });
};
