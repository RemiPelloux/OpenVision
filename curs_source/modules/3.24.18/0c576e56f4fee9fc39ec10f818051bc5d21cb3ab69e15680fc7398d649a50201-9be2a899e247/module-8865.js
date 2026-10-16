"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NonRecordingSpan = void 0;
const n = require("./module-3637.js");
exports.NonRecordingSpan = class {
    constructor(e = n.INVALID_SPAN_CONTEXT){
        this._spanContext = e;
    }
    spanContext() {
        return this._spanContext;
    }
    setAttribute(e, t) {
        return this;
    }
    setAttributes(e) {
        return this;
    }
    addEvent(e, t) {
        return this;
    }
    addLink(e) {
        return this;
    }
    addLinks(e) {
        return this;
    }
    setStatus(e) {
        return this;
    }
    updateName(e) {
        return this;
    }
    end(e) {}
    isRecording() {
        return !1;
    }
    recordException(e, t) {}
};
