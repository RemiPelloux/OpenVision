Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.materialize = void 0;
const s = require("./module-1078.js");
exports.materialize = function() {
    return (e)=>new s.Observable((a)=>{
            e.subscribe((0, s.operate)({
                destination: a,
                next: (e)=>{
                    a.next((0, s.nextNotification)(e));
                },
                error: (e)=>{
                    a.next((0, s.errorNotification)(e)), a.complete();
                },
                complete: ()=>{
                    a.next(s.COMPLETE_NOTIFICATION), a.complete();
                }
            }));
        });
};
