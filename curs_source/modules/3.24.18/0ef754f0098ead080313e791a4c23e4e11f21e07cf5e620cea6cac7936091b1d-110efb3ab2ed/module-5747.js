"use strict";
const { staticPropertyDescriptors: t, readOperation: s, fireAProgressEvent: o } = require("./module-2074.js"), { kState: r, kError: i, kResult: l, kEvents: d, kAborted: m } = require("./module-3153.js"), { webidl: c } = require("./module-8005.js"), { kEnumerableProperty: p } = require("./module-9361.js");
class A extends EventTarget {
    constructor(){
        super(), this[r] = "empty", this[l] = null, this[i] = null, this[d] = {
            loadend: null,
            error: null,
            abort: null,
            load: null,
            progress: null,
            loadstart: null
        };
    }
    readAsArrayBuffer(e) {
        c.brandCheck(this, A), c.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsArrayBuffer"
        }), e = c.converters.Blob(e, {
            strict: !1
        }), s(this, e, "ArrayBuffer");
    }
    readAsBinaryString(e) {
        c.brandCheck(this, A), c.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsBinaryString"
        }), e = c.converters.Blob(e, {
            strict: !1
        }), s(this, e, "BinaryString");
    }
    readAsText(e, a = void 0) {
        c.brandCheck(this, A), c.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsText"
        }), e = c.converters.Blob(e, {
            strict: !1
        }), void 0 !== a && (a = c.converters.DOMString(a)), s(this, e, "Text", a);
    }
    readAsDataURL(e) {
        c.brandCheck(this, A), c.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsDataURL"
        }), e = c.converters.Blob(e, {
            strict: !1
        }), s(this, e, "DataURL");
    }
    abort() {
        "empty" !== this[r] && "done" !== this[r] ? ("loading" === this[r] && (this[r] = "done", this[l] = null), this[m] = !0, o("abort", this), "loading" !== this[r] && o("loadend", this)) : this[l] = null;
    }
    get readyState() {
        switch(c.brandCheck(this, A), this[r]){
            case "empty":
                return this.EMPTY;
            case "loading":
                return this.LOADING;
            case "done":
                return this.DONE;
        }
    }
    get result() {
        return c.brandCheck(this, A), this[l];
    }
    get error() {
        return c.brandCheck(this, A), this[i];
    }
    get onloadend() {
        return c.brandCheck(this, A), this[d].loadend;
    }
    set onloadend(e) {
        c.brandCheck(this, A), this[d].loadend && this.removeEventListener("loadend", this[d].loadend), "function" == typeof e ? (this[d].loadend = e, this.addEventListener("loadend", e)) : this[d].loadend = null;
    }
    get onerror() {
        return c.brandCheck(this, A), this[d].error;
    }
    set onerror(e) {
        c.brandCheck(this, A), this[d].error && this.removeEventListener("error", this[d].error), "function" == typeof e ? (this[d].error = e, this.addEventListener("error", e)) : this[d].error = null;
    }
    get onloadstart() {
        return c.brandCheck(this, A), this[d].loadstart;
    }
    set onloadstart(e) {
        c.brandCheck(this, A), this[d].loadstart && this.removeEventListener("loadstart", this[d].loadstart), "function" == typeof e ? (this[d].loadstart = e, this.addEventListener("loadstart", e)) : this[d].loadstart = null;
    }
    get onprogress() {
        return c.brandCheck(this, A), this[d].progress;
    }
    set onprogress(e) {
        c.brandCheck(this, A), this[d].progress && this.removeEventListener("progress", this[d].progress), "function" == typeof e ? (this[d].progress = e, this.addEventListener("progress", e)) : this[d].progress = null;
    }
    get onload() {
        return c.brandCheck(this, A), this[d].load;
    }
    set onload(e) {
        c.brandCheck(this, A), this[d].load && this.removeEventListener("load", this[d].load), "function" == typeof e ? (this[d].load = e, this.addEventListener("load", e)) : this[d].load = null;
    }
    get onabort() {
        return c.brandCheck(this, A), this[d].abort;
    }
    set onabort(e) {
        c.brandCheck(this, A), this[d].abort && this.removeEventListener("abort", this[d].abort), "function" == typeof e ? (this[d].abort = e, this.addEventListener("abort", e)) : this[d].abort = null;
    }
}
A.EMPTY = A.prototype.EMPTY = 0, A.LOADING = A.prototype.LOADING = 1, A.DONE = A.prototype.DONE = 2, Object.defineProperties(A.prototype, {
    EMPTY: t,
    LOADING: t,
    DONE: t,
    readAsArrayBuffer: p,
    readAsBinaryString: p,
    readAsText: p,
    readAsDataURL: p,
    abort: p,
    readyState: p,
    result: p,
    error: p,
    onloadstart: p,
    onprogress: p,
    onload: p,
    onabort: p,
    onerror: p,
    onloadend: p,
    [Symbol.toStringTag]: {
        value: "FileReader",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }
}), Object.defineProperties(A, {
    EMPTY: t,
    LOADING: t,
    DONE: t
}), module.exports = {
    FileReader: A
};
