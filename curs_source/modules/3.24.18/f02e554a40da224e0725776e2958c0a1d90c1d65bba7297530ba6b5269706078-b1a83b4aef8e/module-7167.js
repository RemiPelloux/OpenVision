"use strict";
const { staticPropertyDescriptors: n, readOperation: s, fireAProgressEvent: i } = require("./module-3742.js"), { kState: o, kError: a, kResult: u, kEvents: c, kAborted: l } = require("./module-749.js"), { webidl: m } = require("./module-8193.js"), { kEnumerableProperty: d } = require("./module-3589.js");
class f extends EventTarget {
    constructor(){
        super(), this[o] = "empty", this[u] = null, this[a] = null, this[c] = {
            loadend: null,
            error: null,
            abort: null,
            load: null,
            progress: null,
            loadstart: null
        };
    }
    readAsArrayBuffer(t) {
        m.brandCheck(this, f), m.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsArrayBuffer"
        }), t = m.converters.Blob(t, {
            strict: !1
        }), s(this, t, "ArrayBuffer");
    }
    readAsBinaryString(t) {
        m.brandCheck(this, f), m.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsBinaryString"
        }), t = m.converters.Blob(t, {
            strict: !1
        }), s(this, t, "BinaryString");
    }
    readAsText(t, e = void 0) {
        m.brandCheck(this, f), m.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsText"
        }), t = m.converters.Blob(t, {
            strict: !1
        }), void 0 !== e && (e = m.converters.DOMString(e)), s(this, t, "Text", e);
    }
    readAsDataURL(t) {
        m.brandCheck(this, f), m.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsDataURL"
        }), t = m.converters.Blob(t, {
            strict: !1
        }), s(this, t, "DataURL");
    }
    abort() {
        "empty" !== this[o] && "done" !== this[o] ? ("loading" === this[o] && (this[o] = "done", this[u] = null), this[l] = !0, i("abort", this), "loading" !== this[o] && i("loadend", this)) : this[u] = null;
    }
    get readyState() {
        switch(m.brandCheck(this, f), this[o]){
            case "empty":
                return this.EMPTY;
            case "loading":
                return this.LOADING;
            case "done":
                return this.DONE;
        }
    }
    get result() {
        return m.brandCheck(this, f), this[u];
    }
    get error() {
        return m.brandCheck(this, f), this[a];
    }
    get onloadend() {
        return m.brandCheck(this, f), this[c].loadend;
    }
    set onloadend(t) {
        m.brandCheck(this, f), this[c].loadend && this.removeEventListener("loadend", this[c].loadend), "function" == typeof t ? (this[c].loadend = t, this.addEventListener("loadend", t)) : this[c].loadend = null;
    }
    get onerror() {
        return m.brandCheck(this, f), this[c].error;
    }
    set onerror(t) {
        m.brandCheck(this, f), this[c].error && this.removeEventListener("error", this[c].error), "function" == typeof t ? (this[c].error = t, this.addEventListener("error", t)) : this[c].error = null;
    }
    get onloadstart() {
        return m.brandCheck(this, f), this[c].loadstart;
    }
    set onloadstart(t) {
        m.brandCheck(this, f), this[c].loadstart && this.removeEventListener("loadstart", this[c].loadstart), "function" == typeof t ? (this[c].loadstart = t, this.addEventListener("loadstart", t)) : this[c].loadstart = null;
    }
    get onprogress() {
        return m.brandCheck(this, f), this[c].progress;
    }
    set onprogress(t) {
        m.brandCheck(this, f), this[c].progress && this.removeEventListener("progress", this[c].progress), "function" == typeof t ? (this[c].progress = t, this.addEventListener("progress", t)) : this[c].progress = null;
    }
    get onload() {
        return m.brandCheck(this, f), this[c].load;
    }
    set onload(t) {
        m.brandCheck(this, f), this[c].load && this.removeEventListener("load", this[c].load), "function" == typeof t ? (this[c].load = t, this.addEventListener("load", t)) : this[c].load = null;
    }
    get onabort() {
        return m.brandCheck(this, f), this[c].abort;
    }
    set onabort(t) {
        m.brandCheck(this, f), this[c].abort && this.removeEventListener("abort", this[c].abort), "function" == typeof t ? (this[c].abort = t, this.addEventListener("abort", t)) : this[c].abort = null;
    }
}
f.EMPTY = f.prototype.EMPTY = 0, f.LOADING = f.prototype.LOADING = 1, f.DONE = f.prototype.DONE = 2, Object.defineProperties(f.prototype, {
    EMPTY: n,
    LOADING: n,
    DONE: n,
    readAsArrayBuffer: d,
    readAsBinaryString: d,
    readAsText: d,
    readAsDataURL: d,
    abort: d,
    readyState: d,
    result: d,
    error: d,
    onloadstart: d,
    onprogress: d,
    onload: d,
    onabort: d,
    onerror: d,
    onloadend: d,
    [Symbol.toStringTag]: {
        value: "FileReader",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }
}), Object.defineProperties(f, {
    EMPTY: n,
    LOADING: n,
    DONE: n
}), module.exports = {
    FileReader: f
};
