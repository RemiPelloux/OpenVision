"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduled = void 0;
const n = require("./module-31855.js"), o = require("./module-79205.js"), s = require("./module-48553.js"), i = require("./module-17096.js"), a = require("./module-42534.js"), l = require("./module-51078.js"), c = require("./module-57081.js");
exports.scheduled = function(e, t) {
    switch((0, l.getObservableInputType)(e)){
        case l.ObservableInputType.Own:
        case l.ObservableInputType.InteropObservable:
            return (0, n.scheduleObservable)(e, t);
        case l.ObservableInputType.Promise:
            return (0, o.schedulePromise)(e, t);
        case l.ObservableInputType.ArrayLike:
            return (0, s.scheduleArray)(e, t);
        case l.ObservableInputType.Iterable:
            return (0, i.scheduleIterable)(e, t);
        case l.ObservableInputType.AsyncIterable:
            return (0, a.scheduleAsyncIterable)(e, t);
        case l.ObservableInputType.ReadableStreamLike:
            return (0, c.scheduleReadableStreamLike)(e, t);
    }
};
