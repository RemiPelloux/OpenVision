Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.observeOn = void 0;
const s = require("./module-5830.js"), o = require("./module-1078.js");
exports.observeOn = function(e, a = 0) {
    return (n)=>new o.Observable((r)=>{
            n.subscribe((0, o.operate)({
                destination: r,
                next: (n)=>(0, s.executeSchedule)(r, e, ()=>r.next(n), a),
                error: (n)=>(0, s.executeSchedule)(r, e, ()=>r.error(n), a),
                complete: ()=>(0, s.executeSchedule)(r, e, ()=>r.complete(), a)
            }));
        });
};
