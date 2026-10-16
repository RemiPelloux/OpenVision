Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduleAsyncIterable = void 0;
const s = require("./module-1078.js"), o = require("./module-5830.js");
exports.scheduleAsyncIterable = function(e, a) {
    if (!e) throw new Error("Iterable cannot be null");
    return new s.Observable((n)=>{
        (0, o.executeSchedule)(n, a, ()=>{
            const s = e[Symbol.asyncIterator]();
            (0, o.executeSchedule)(n, a, ()=>{
                s.next().then((e)=>{
                    e.done ? n.complete() : n.next(e.value);
                });
            }, 0, !0);
        });
    });
};
