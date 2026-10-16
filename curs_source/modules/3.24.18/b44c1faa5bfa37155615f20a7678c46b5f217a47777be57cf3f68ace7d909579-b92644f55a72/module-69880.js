"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scheduled = void 0;
const n = require("./module-31855.js"), s = require("./module-79205.js"), o = require("./module-48553.js"), i = require("./module-17096.js"), a = require("./module-42534.js"), c = require("./module-51078.js"), l = require("./module-57081.js");
exports.scheduled = function(e, t) {
    switch((0, c.getObservableInputType)(e)){
        case c.ObservableInputType.Own:
        case c.ObservableInputType.InteropObservable:
            return (0, n.scheduleObservable)(e, t);
        case c.ObservableInputType.Promise:
            return (0, s.schedulePromise)(e, t);
        case c.ObservableInputType.ArrayLike:
            return (0, o.scheduleArray)(e, t);
        case c.ObservableInputType.Iterable:
            return (0, i.scheduleIterable)(e, t);
        case c.ObservableInputType.AsyncIterable:
            return (0, a.scheduleAsyncIterable)(e, t);
        case c.ObservableInputType.ReadableStreamLike:
            return (0, l.scheduleReadableStreamLike)(e, t);
    }
};
