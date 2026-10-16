"use strict";
const { staticPropertyDescriptors: r, readOperation: s, fireAProgressEvent: o } = require("./module-21289.js"), { kState: n, kError: i, kResult: a, kEvents: Q, kAborted: g } = require("./module-47192.js"), { webidl: E } = require("./module-43290.js"), { kEnumerableProperty: B } = require("./module-55201.js");
class c extends EventTarget {
    constructor(){
        super(), this[n] = "empty", this[a] = null, this[i] = null, this[Q] = {
            loadend: null,
            error: null,
            abort: null,
            load: null,
            progress: null,
            loadstart: null
        };
    }
    readAsArrayBuffer(A) {
        E.brandCheck(this, c), E.argumentLengthCheck(arguments, 1, "FileReader.readAsArrayBuffer"), A = E.converters.Blob(A, {
            strict: !1
        }), s(this, A, "ArrayBuffer");
    }
    readAsBinaryString(A) {
        E.brandCheck(this, c), E.argumentLengthCheck(arguments, 1, "FileReader.readAsBinaryString"), A = E.converters.Blob(A, {
            strict: !1
        }), s(this, A, "BinaryString");
    }
    readAsText(A, e = void 0) {
        E.brandCheck(this, c), E.argumentLengthCheck(arguments, 1, "FileReader.readAsText"), A = E.converters.Blob(A, {
            strict: !1
        }), void 0 !== e && (e = E.converters.DOMString(e, "FileReader.readAsText", "encoding")), s(this, A, "Text", e);
    }
    readAsDataURL(A) {
        E.brandCheck(this, c), E.argumentLengthCheck(arguments, 1, "FileReader.readAsDataURL"), A = E.converters.Blob(A, {
            strict: !1
        }), s(this, A, "DataURL");
    }
    abort() {
        "empty" !== this[n] && "done" !== this[n] ? ("loading" === this[n] && (this[n] = "done", this[a] = null), this[g] = !0, o("abort", this), "loading" !== this[n] && o("loadend", this)) : this[a] = null;
    }
    get readyState() {
        switch(E.brandCheck(this, c), this[n]){
            case "empty":
                return this.EMPTY;
            case "loading":
                return this.LOADING;
            case "done":
                return this.DONE;
        }
    }
    get result() {
        return E.brandCheck(this, c), this[a];
    }
    get error() {
        return E.brandCheck(this, c), this[i];
    }
    get onloadend() {
        return E.brandCheck(this, c), this[Q].loadend;
    }
    set onloadend(A) {
        E.brandCheck(this, c), this[Q].loadend && this.removeEventListener("loadend", this[Q].loadend), "function" == typeof A ? (this[Q].loadend = A, this.addEventListener("loadend", A)) : this[Q].loadend = null;
    }
    get onerror() {
        return E.brandCheck(this, c), this[Q].error;
    }
    set onerror(A) {
        E.brandCheck(this, c), this[Q].error && this.removeEventListener("error", this[Q].error), "function" == typeof A ? (this[Q].error = A, this.addEventListener("error", A)) : this[Q].error = null;
    }
    get onloadstart() {
        return E.brandCheck(this, c), this[Q].loadstart;
    }
    set onloadstart(A) {
        E.brandCheck(this, c), this[Q].loadstart && this.removeEventListener("loadstart", this[Q].loadstart), "function" == typeof A ? (this[Q].loadstart = A, this.addEventListener("loadstart", A)) : this[Q].loadstart = null;
    }
    get onprogress() {
        return E.brandCheck(this, c), this[Q].progress;
    }
    set onprogress(A) {
        E.brandCheck(this, c), this[Q].progress && this.removeEventListener("progress", this[Q].progress), "function" == typeof A ? (this[Q].progress = A, this.addEventListener("progress", A)) : this[Q].progress = null;
    }
    get onload() {
        return E.brandCheck(this, c), this[Q].load;
    }
    set onload(A) {
        E.brandCheck(this, c), this[Q].load && this.removeEventListener("load", this[Q].load), "function" == typeof A ? (this[Q].load = A, this.addEventListener("load", A)) : this[Q].load = null;
    }
    get onabort() {
        return E.brandCheck(this, c), this[Q].abort;
    }
    set onabort(A) {
        E.brandCheck(this, c), this[Q].abort && this.removeEventListener("abort", this[Q].abort), "function" == typeof A ? (this[Q].abort = A, this.addEventListener("abort", A)) : this[Q].abort = null;
    }
}
c.EMPTY = c.prototype.EMPTY = 0, c.LOADING = c.prototype.LOADING = 1, c.DONE = c.prototype.DONE = 2, Object.defineProperties(c.prototype, {
    EMPTY: r,
    LOADING: r,
    DONE: r,
    readAsArrayBuffer: B,
    readAsBinaryString: B,
    readAsText: B,
    readAsDataURL: B,
    abort: B,
    readyState: B,
    result: B,
    error: B,
    onloadstart: B,
    onprogress: B,
    onload: B,
    onabort: B,
    onerror: B,
    onloadend: B,
    [Symbol.toStringTag]: {
        value: "FileReader",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }
}), Object.defineProperties(c, {
    EMPTY: r,
    LOADING: r,
    DONE: r
}), module.exports = {
    FileReader: c
};
