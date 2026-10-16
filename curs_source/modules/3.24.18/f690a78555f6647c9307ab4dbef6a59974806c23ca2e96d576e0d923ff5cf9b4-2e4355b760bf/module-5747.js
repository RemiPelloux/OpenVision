"use strict";
const { staticPropertyDescriptors: n, readOperation: r, fireAProgressEvent: o } = require("./module-2074.js"), { kState: s, kError: a, kResult: i, kEvents: c, kAborted: l } = require("./module-3153.js"), { webidl: g } = require("./module-8005.js"), { kEnumerableProperty: E } = require("./module-9361.js");
class u extends EventTarget {
    constructor(){
        super(), this[s] = "empty", this[i] = null, this[a] = null, this[c] = {
            loadend: null,
            error: null,
            abort: null,
            load: null,
            progress: null,
            loadstart: null
        };
    }
    readAsArrayBuffer(e) {
        g.brandCheck(this, u), g.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsArrayBuffer"
        }), e = g.converters.Blob(e, {
            strict: !1
        }), r(this, e, "ArrayBuffer");
    }
    readAsBinaryString(e) {
        g.brandCheck(this, u), g.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsBinaryString"
        }), e = g.converters.Blob(e, {
            strict: !1
        }), r(this, e, "BinaryString");
    }
    readAsText(e, A = void 0) {
        g.brandCheck(this, u), g.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsText"
        }), e = g.converters.Blob(e, {
            strict: !1
        }), void 0 !== A && (A = g.converters.DOMString(A)), r(this, e, "Text", A);
    }
    readAsDataURL(e) {
        g.brandCheck(this, u), g.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsDataURL"
        }), e = g.converters.Blob(e, {
            strict: !1
        }), r(this, e, "DataURL");
    }
    abort() {
        "empty" !== this[s] && "done" !== this[s] ? ("loading" === this[s] && (this[s] = "done", this[i] = null), this[l] = !0, o("abort", this), "loading" !== this[s] && o("loadend", this)) : this[i] = null;
    }
    get readyState() {
        switch(g.brandCheck(this, u), this[s]){
            case "empty":
                return this.EMPTY;
            case "loading":
                return this.LOADING;
            case "done":
                return this.DONE;
        }
    }
    get result() {
        return g.brandCheck(this, u), this[i];
    }
    get error() {
        return g.brandCheck(this, u), this[a];
    }
    get onloadend() {
        return g.brandCheck(this, u), this[c].loadend;
    }
    set onloadend(e) {
        g.brandCheck(this, u), this[c].loadend && this.removeEventListener("loadend", this[c].loadend), "function" == typeof e ? (this[c].loadend = e, this.addEventListener("loadend", e)) : this[c].loadend = null;
    }
    get onerror() {
        return g.brandCheck(this, u), this[c].error;
    }
    set onerror(e) {
        g.brandCheck(this, u), this[c].error && this.removeEventListener("error", this[c].error), "function" == typeof e ? (this[c].error = e, this.addEventListener("error", e)) : this[c].error = null;
    }
    get onloadstart() {
        return g.brandCheck(this, u), this[c].loadstart;
    }
    set onloadstart(e) {
        g.brandCheck(this, u), this[c].loadstart && this.removeEventListener("loadstart", this[c].loadstart), "function" == typeof e ? (this[c].loadstart = e, this.addEventListener("loadstart", e)) : this[c].loadstart = null;
    }
    get onprogress() {
        return g.brandCheck(this, u), this[c].progress;
    }
    set onprogress(e) {
        g.brandCheck(this, u), this[c].progress && this.removeEventListener("progress", this[c].progress), "function" == typeof e ? (this[c].progress = e, this.addEventListener("progress", e)) : this[c].progress = null;
    }
    get onload() {
        return g.brandCheck(this, u), this[c].load;
    }
    set onload(e) {
        g.brandCheck(this, u), this[c].load && this.removeEventListener("load", this[c].load), "function" == typeof e ? (this[c].load = e, this.addEventListener("load", e)) : this[c].load = null;
    }
    get onabort() {
        return g.brandCheck(this, u), this[c].abort;
    }
    set onabort(e) {
        g.brandCheck(this, u), this[c].abort && this.removeEventListener("abort", this[c].abort), "function" == typeof e ? (this[c].abort = e, this.addEventListener("abort", e)) : this[c].abort = null;
    }
}
u.EMPTY = u.prototype.EMPTY = 0, u.LOADING = u.prototype.LOADING = 1, u.DONE = u.prototype.DONE = 2, Object.defineProperties(u.prototype, {
    EMPTY: n,
    LOADING: n,
    DONE: n,
    readAsArrayBuffer: E,
    readAsBinaryString: E,
    readAsText: E,
    readAsDataURL: E,
    abort: E,
    readyState: E,
    result: E,
    error: E,
    onloadstart: E,
    onprogress: E,
    onload: E,
    onabort: E,
    onerror: E,
    onloadend: E,
    [Symbol.toStringTag]: {
        value: "FileReader",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }
}), Object.defineProperties(u, {
    EMPTY: n,
    LOADING: n,
    DONE: n
}), module.exports = {
    FileReader: u
};
