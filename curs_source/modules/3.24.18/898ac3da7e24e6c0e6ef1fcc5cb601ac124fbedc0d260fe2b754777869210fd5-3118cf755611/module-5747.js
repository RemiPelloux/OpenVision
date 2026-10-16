"use strict";
const { staticPropertyDescriptors: t, readOperation: s, fireAProgressEvent: o } = require("./module-2074.js"), { kState: r, kError: i, kResult: A, kEvents: l, kAborted: c } = require("./module-3153.js"), { webidl: m } = require("./module-8005.js"), { kEnumerableProperty: d } = require("./module-9361.js");
class g extends EventTarget {
    constructor(){
        super(), this[r] = "empty", this[A] = null, this[i] = null, this[l] = {
            loadend: null,
            error: null,
            abort: null,
            load: null,
            progress: null,
            loadstart: null
        };
    }
    readAsArrayBuffer(e) {
        m.brandCheck(this, g), m.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsArrayBuffer"
        }), e = m.converters.Blob(e, {
            strict: !1
        }), s(this, e, "ArrayBuffer");
    }
    readAsBinaryString(e) {
        m.brandCheck(this, g), m.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsBinaryString"
        }), e = m.converters.Blob(e, {
            strict: !1
        }), s(this, e, "BinaryString");
    }
    readAsText(e, n = void 0) {
        m.brandCheck(this, g), m.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsText"
        }), e = m.converters.Blob(e, {
            strict: !1
        }), void 0 !== n && (n = m.converters.DOMString(n)), s(this, e, "Text", n);
    }
    readAsDataURL(e) {
        m.brandCheck(this, g), m.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsDataURL"
        }), e = m.converters.Blob(e, {
            strict: !1
        }), s(this, e, "DataURL");
    }
    abort() {
        "empty" !== this[r] && "done" !== this[r] ? ("loading" === this[r] && (this[r] = "done", this[A] = null), this[c] = !0, o("abort", this), "loading" !== this[r] && o("loadend", this)) : this[A] = null;
    }
    get readyState() {
        switch(m.brandCheck(this, g), this[r]){
            case "empty":
                return this.EMPTY;
            case "loading":
                return this.LOADING;
            case "done":
                return this.DONE;
        }
    }
    get result() {
        return m.brandCheck(this, g), this[A];
    }
    get error() {
        return m.brandCheck(this, g), this[i];
    }
    get onloadend() {
        return m.brandCheck(this, g), this[l].loadend;
    }
    set onloadend(e) {
        m.brandCheck(this, g), this[l].loadend && this.removeEventListener("loadend", this[l].loadend), "function" == typeof e ? (this[l].loadend = e, this.addEventListener("loadend", e)) : this[l].loadend = null;
    }
    get onerror() {
        return m.brandCheck(this, g), this[l].error;
    }
    set onerror(e) {
        m.brandCheck(this, g), this[l].error && this.removeEventListener("error", this[l].error), "function" == typeof e ? (this[l].error = e, this.addEventListener("error", e)) : this[l].error = null;
    }
    get onloadstart() {
        return m.brandCheck(this, g), this[l].loadstart;
    }
    set onloadstart(e) {
        m.brandCheck(this, g), this[l].loadstart && this.removeEventListener("loadstart", this[l].loadstart), "function" == typeof e ? (this[l].loadstart = e, this.addEventListener("loadstart", e)) : this[l].loadstart = null;
    }
    get onprogress() {
        return m.brandCheck(this, g), this[l].progress;
    }
    set onprogress(e) {
        m.brandCheck(this, g), this[l].progress && this.removeEventListener("progress", this[l].progress), "function" == typeof e ? (this[l].progress = e, this.addEventListener("progress", e)) : this[l].progress = null;
    }
    get onload() {
        return m.brandCheck(this, g), this[l].load;
    }
    set onload(e) {
        m.brandCheck(this, g), this[l].load && this.removeEventListener("load", this[l].load), "function" == typeof e ? (this[l].load = e, this.addEventListener("load", e)) : this[l].load = null;
    }
    get onabort() {
        return m.brandCheck(this, g), this[l].abort;
    }
    set onabort(e) {
        m.brandCheck(this, g), this[l].abort && this.removeEventListener("abort", this[l].abort), "function" == typeof e ? (this[l].abort = e, this.addEventListener("abort", e)) : this[l].abort = null;
    }
}
g.EMPTY = g.prototype.EMPTY = 0, g.LOADING = g.prototype.LOADING = 1, g.DONE = g.prototype.DONE = 2, Object.defineProperties(g.prototype, {
    EMPTY: t,
    LOADING: t,
    DONE: t,
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
}), Object.defineProperties(g, {
    EMPTY: t,
    LOADING: t,
    DONE: t
}), module.exports = {
    FileReader: g
};
