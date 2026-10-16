Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isEmpty = void 0;
const s = require("./module-1078.js");
exports.isEmpty = function() {
    return (e)=>new s.Observable((a)=>{
            e.subscribe((0, s.operate)({
                destination: a,
                next: ()=>{
                    a.next(!1), a.complete();
                },
                complete: ()=>{
                    a.next(!0), a.complete();
                }
            }));
        });
};
