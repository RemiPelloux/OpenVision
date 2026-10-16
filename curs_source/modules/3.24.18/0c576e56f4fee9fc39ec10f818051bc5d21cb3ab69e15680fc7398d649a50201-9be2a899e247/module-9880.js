"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduled = void 0;
const n = require("./module-1855.js"), o = require("./module-9205.js"), s = require("./module-8553.js"), i = require("./module-7096.js"), a = require("./module-2534.js"), c = require("./module-1078.js"), u = require("./module-7081.js");
exports.scheduled = function(e, t) {
    switch((0, c.getObservableInputType)(e)){
        case c.ObservableInputType.Own:
        case c.ObservableInputType.InteropObservable:
            return (0, n.scheduleObservable)(e, t);
        case c.ObservableInputType.Promise:
            return (0, o.schedulePromise)(e, t);
        case c.ObservableInputType.ArrayLike:
            return (0, s.scheduleArray)(e, t);
        case c.ObservableInputType.Iterable:
            return (0, i.scheduleIterable)(e, t);
        case c.ObservableInputType.AsyncIterable:
            return (0, a.scheduleAsyncIterable)(e, t);
        case c.ObservableInputType.ReadableStreamLike:
            return (0, u.scheduleReadableStreamLike)(e, t);
    }
};
