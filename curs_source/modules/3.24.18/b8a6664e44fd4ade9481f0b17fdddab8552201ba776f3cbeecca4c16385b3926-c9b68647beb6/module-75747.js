"use strict";
const { staticPropertyDescriptors: r, readOperation: s, fireAProgressEvent: o } = require("./module-72074.js"), { kState: n, kError: i, kResult: E, kEvents: Q, kAborted: g } = require("./module-13153.js"), { webidl: C } = require("./module-48005.js"), { kEnumerableProperty: B } = require("./module-9361.js");
class a extends EventTarget {
    constructor(){
        super(), this[n] = "empty", this[E] = null, this[i] = null, this[Q] = {
            loadend: null,
            error: null,
            abort: null,
            load: null,
            progress: null,
            loadstart: null
        };
    }
    readAsArrayBuffer(A) {
        C.brandCheck(this, a), C.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsArrayBuffer"
        }), A = C.converters.Blob(A, {
            strict: !1
        }), s(this, A, "ArrayBuffer");
    }
    readAsBinaryString(A) {
        C.brandCheck(this, a), C.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsBinaryString"
        }), A = C.converters.Blob(A, {
            strict: !1
        }), s(this, A, "BinaryString");
    }
    readAsText(A, e = void 0) {
        C.brandCheck(this, a), C.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsText"
        }), A = C.converters.Blob(A, {
            strict: !1
        }), void 0 !== e && (e = C.converters.DOMString(e)), s(this, A, "Text", e);
    }
    readAsDataURL(A) {
        C.brandCheck(this, a), C.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsDataURL"
        }), A = C.converters.Blob(A, {
            strict: !1
        }), s(this, A, "DataURL");
    }
    abort() {
        "empty" !== this[n] && "done" !== this[n] ? ("loading" === this[n] && (this[n] = "done", this[E] = null), this[g] = !0, o("abort", this), "loading" !== this[n] && o("loadend", this)) : this[E] = null;
    }
    get readyState() {
        switch(C.brandCheck(this, a), this[n]){
            case "empty":
                return this.EMPTY;
            case "loading":
                return this.LOADING;
            case "done":
                return this.DONE;
        }
    }
    get result() {
        return C.brandCheck(this, a), this[E];
    }
    get error() {
        return C.brandCheck(this, a), this[i];
    }
    get onloadend() {
        return C.brandCheck(this, a), this[Q].loadend;
    }
    set onloadend(A) {
        C.brandCheck(this, a), this[Q].loadend && this.removeEventListener("loadend", this[Q].loadend), "function" == typeof A ? (this[Q].loadend = A, this.addEventListener("loadend", A)) : this[Q].loadend = null;
    }
    get onerror() {
        return C.brandCheck(this, a), this[Q].error;
    }
    set onerror(A) {
        C.brandCheck(this, a), this[Q].error && this.removeEventListener("error", this[Q].error), "function" == typeof A ? (this[Q].error = A, this.addEventListener("error", A)) : this[Q].error = null;
    }
    get onloadstart() {
        return C.brandCheck(this, a), this[Q].loadstart;
    }
    set onloadstart(A) {
        C.brandCheck(this, a), this[Q].loadstart && this.removeEventListener("loadstart", this[Q].loadstart), "function" == typeof A ? (this[Q].loadstart = A, this.addEventListener("loadstart", A)) : this[Q].loadstart = null;
    }
    get onprogress() {
        return C.brandCheck(this, a), this[Q].progress;
    }
    set onprogress(A) {
        C.brandCheck(this, a), this[Q].progress && this.removeEventListener("progress", this[Q].progress), "function" == typeof A ? (this[Q].progress = A, this.addEventListener("progress", A)) : this[Q].progress = null;
    }
    get onload() {
        return C.brandCheck(this, a), this[Q].load;
    }
    set onload(A) {
        C.brandCheck(this, a), this[Q].load && this.removeEventListener("load", this[Q].load), "function" == typeof A ? (this[Q].load = A, this.addEventListener("load", A)) : this[Q].load = null;
    }
    get onabort() {
        return C.brandCheck(this, a), this[Q].abort;
    }
    set onabort(A) {
        C.brandCheck(this, a), this[Q].abort && this.removeEventListener("abort", this[Q].abort), "function" == typeof A ? (this[Q].abort = A, this.addEventListener("abort", A)) : this[Q].abort = null;
    }
}
a.EMPTY = a.prototype.EMPTY = 0, a.LOADING = a.prototype.LOADING = 1, a.DONE = a.prototype.DONE = 2, Object.defineProperties(a.prototype, {
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
}), Object.defineProperties(a, {
    EMPTY: r,
    LOADING: r,
    DONE: r
}), module.exports = {
    FileReader: a
};
