"use strict";
const { staticPropertyDescriptors: a, readOperation: s, fireAProgressEvent: o } = require("./module-2074.js"), { kState: r, kError: i, kResult: A, kEvents: c, kAborted: l } = require("./module-3153.js"), { webidl: d } = require("./module-8005.js"), { kEnumerableProperty: m } = require("./module-9361.js");
class u extends EventTarget {
    constructor(){
        super(), this[r] = "empty", this[A] = null, this[i] = null, this[c] = {
            loadend: null,
            error: null,
            abort: null,
            load: null,
            progress: null,
            loadstart: null
        };
    }
    readAsArrayBuffer(e) {
        d.brandCheck(this, u), d.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsArrayBuffer"
        }), e = d.converters.Blob(e, {
            strict: !1
        }), s(this, e, "ArrayBuffer");
    }
    readAsBinaryString(e) {
        d.brandCheck(this, u), d.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsBinaryString"
        }), e = d.converters.Blob(e, {
            strict: !1
        }), s(this, e, "BinaryString");
    }
    readAsText(e, n = void 0) {
        d.brandCheck(this, u), d.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsText"
        }), e = d.converters.Blob(e, {
            strict: !1
        }), void 0 !== n && (n = d.converters.DOMString(n)), s(this, e, "Text", n);
    }
    readAsDataURL(e) {
        d.brandCheck(this, u), d.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsDataURL"
        }), e = d.converters.Blob(e, {
            strict: !1
        }), s(this, e, "DataURL");
    }
    abort() {
        "empty" !== this[r] && "done" !== this[r] ? ("loading" === this[r] && (this[r] = "done", this[A] = null), this[l] = !0, o("abort", this), "loading" !== this[r] && o("loadend", this)) : this[A] = null;
    }
    get readyState() {
        switch(d.brandCheck(this, u), this[r]){
            case "empty":
                return this.EMPTY;
            case "loading":
                return this.LOADING;
            case "done":
                return this.DONE;
        }
    }
    get result() {
        return d.brandCheck(this, u), this[A];
    }
    get error() {
        return d.brandCheck(this, u), this[i];
    }
    get onloadend() {
        return d.brandCheck(this, u), this[c].loadend;
    }
    set onloadend(e) {
        d.brandCheck(this, u), this[c].loadend && this.removeEventListener("loadend", this[c].loadend), "function" == typeof e ? (this[c].loadend = e, this.addEventListener("loadend", e)) : this[c].loadend = null;
    }
    get onerror() {
        return d.brandCheck(this, u), this[c].error;
    }
    set onerror(e) {
        d.brandCheck(this, u), this[c].error && this.removeEventListener("error", this[c].error), "function" == typeof e ? (this[c].error = e, this.addEventListener("error", e)) : this[c].error = null;
    }
    get onloadstart() {
        return d.brandCheck(this, u), this[c].loadstart;
    }
    set onloadstart(e) {
        d.brandCheck(this, u), this[c].loadstart && this.removeEventListener("loadstart", this[c].loadstart), "function" == typeof e ? (this[c].loadstart = e, this.addEventListener("loadstart", e)) : this[c].loadstart = null;
    }
    get onprogress() {
        return d.brandCheck(this, u), this[c].progress;
    }
    set onprogress(e) {
        d.brandCheck(this, u), this[c].progress && this.removeEventListener("progress", this[c].progress), "function" == typeof e ? (this[c].progress = e, this.addEventListener("progress", e)) : this[c].progress = null;
    }
    get onload() {
        return d.brandCheck(this, u), this[c].load;
    }
    set onload(e) {
        d.brandCheck(this, u), this[c].load && this.removeEventListener("load", this[c].load), "function" == typeof e ? (this[c].load = e, this.addEventListener("load", e)) : this[c].load = null;
    }
    get onabort() {
        return d.brandCheck(this, u), this[c].abort;
    }
    set onabort(e) {
        d.brandCheck(this, u), this[c].abort && this.removeEventListener("abort", this[c].abort), "function" == typeof e ? (this[c].abort = e, this.addEventListener("abort", e)) : this[c].abort = null;
    }
}
u.EMPTY = u.prototype.EMPTY = 0, u.LOADING = u.prototype.LOADING = 1, u.DONE = u.prototype.DONE = 2, Object.defineProperties(u.prototype, {
    EMPTY: a,
    LOADING: a,
    DONE: a,
    readAsArrayBuffer: m,
    readAsBinaryString: m,
    readAsText: m,
    readAsDataURL: m,
    abort: m,
    readyState: m,
    result: m,
    error: m,
    onloadstart: m,
    onprogress: m,
    onload: m,
    onabort: m,
    onerror: m,
    onloadend: m,
    [Symbol.toStringTag]: {
        value: "FileReader",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }
}), Object.defineProperties(u, {
    EMPTY: a,
    LOADING: a,
    DONE: a
}), module.exports = {
    FileReader: u
};
