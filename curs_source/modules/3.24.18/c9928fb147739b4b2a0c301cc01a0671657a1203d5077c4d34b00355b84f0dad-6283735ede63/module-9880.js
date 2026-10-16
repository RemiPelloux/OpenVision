Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduled = void 0;
const s = require("./module-1855.js"), o = require("./module-9205.js"), r = require("./module-8553.js"), t = require("./module-7096.js"), i = require("./module-2534.js"), m = require("./module-1078.js"), l = require("./module-7081.js");
exports.scheduled = function(e, a) {
    switch((0, m.getObservableInputType)(e)){
        case m.ObservableInputType.Own:
        case m.ObservableInputType.InteropObservable:
            return (0, s.scheduleObservable)(e, a);
        case m.ObservableInputType.Promise:
            return (0, o.schedulePromise)(e, a);
        case m.ObservableInputType.ArrayLike:
            return (0, r.scheduleArray)(e, a);
        case m.ObservableInputType.Iterable:
            return (0, t.scheduleIterable)(e, a);
        case m.ObservableInputType.AsyncIterable:
            return (0, i.scheduleAsyncIterable)(e, a);
        case m.ObservableInputType.ReadableStreamLike:
            return (0, l.scheduleReadableStreamLike)(e, a);
    }
};
