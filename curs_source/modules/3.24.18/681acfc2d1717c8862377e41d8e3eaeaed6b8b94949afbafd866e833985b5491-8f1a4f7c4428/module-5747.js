"use strict";
const { staticPropertyDescriptors: n, readOperation: r, fireAProgressEvent: o } = require("./module-2074.js"), { kState: s, kError: i, kResult: a, kEvents: c, kAborted: l } = require("./module-3153.js"), { webidl: u } = require("./module-8005.js"), { kEnumerableProperty: g } = require("./module-9361.js");
class E extends EventTarget {
    constructor(){
        super(), this[s] = "empty", this[a] = null, this[i] = null, this[c] = {
            loadend: null,
            error: null,
            abort: null,
            load: null,
            progress: null,
            loadstart: null
        };
    }
    readAsArrayBuffer(e) {
        u.brandCheck(this, E), u.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsArrayBuffer"
        }), e = u.converters.Blob(e, {
            strict: !1
        }), r(this, e, "ArrayBuffer");
    }
    readAsBinaryString(e) {
        u.brandCheck(this, E), u.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsBinaryString"
        }), e = u.converters.Blob(e, {
            strict: !1
        }), r(this, e, "BinaryString");
    }
    readAsText(e, t = void 0) {
        u.brandCheck(this, E), u.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsText"
        }), e = u.converters.Blob(e, {
            strict: !1
        }), void 0 !== t && (t = u.converters.DOMString(t)), r(this, e, "Text", t);
    }
    readAsDataURL(e) {
        u.brandCheck(this, E), u.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsDataURL"
        }), e = u.converters.Blob(e, {
            strict: !1
        }), r(this, e, "DataURL");
    }
    abort() {
        "empty" !== this[s] && "done" !== this[s] ? ("loading" === this[s] && (this[s] = "done", this[a] = null), this[l] = !0, o("abort", this), "loading" !== this[s] && o("loadend", this)) : this[a] = null;
    }
    get readyState() {
        switch(u.brandCheck(this, E), this[s]){
            case "empty":
                return this.EMPTY;
            case "loading":
                return this.LOADING;
            case "done":
                return this.DONE;
        }
    }
    get result() {
        return u.brandCheck(this, E), this[a];
    }
    get error() {
        return u.brandCheck(this, E), this[i];
    }
    get onloadend() {
        return u.brandCheck(this, E), this[c].loadend;
    }
    set onloadend(e) {
        u.brandCheck(this, E), this[c].loadend && this.removeEventListener("loadend", this[c].loadend), "function" == typeof e ? (this[c].loadend = e, this.addEventListener("loadend", e)) : this[c].loadend = null;
    }
    get onerror() {
        return u.brandCheck(this, E), this[c].error;
    }
    set onerror(e) {
        u.brandCheck(this, E), this[c].error && this.removeEventListener("error", this[c].error), "function" == typeof e ? (this[c].error = e, this.addEventListener("error", e)) : this[c].error = null;
    }
    get onloadstart() {
        return u.brandCheck(this, E), this[c].loadstart;
    }
    set onloadstart(e) {
        u.brandCheck(this, E), this[c].loadstart && this.removeEventListener("loadstart", this[c].loadstart), "function" == typeof e ? (this[c].loadstart = e, this.addEventListener("loadstart", e)) : this[c].loadstart = null;
    }
    get onprogress() {
        return u.brandCheck(this, E), this[c].progress;
    }
    set onprogress(e) {
        u.brandCheck(this, E), this[c].progress && this.removeEventListener("progress", this[c].progress), "function" == typeof e ? (this[c].progress = e, this.addEventListener("progress", e)) : this[c].progress = null;
    }
    get onload() {
        return u.brandCheck(this, E), this[c].load;
    }
    set onload(e) {
        u.brandCheck(this, E), this[c].load && this.removeEventListener("load", this[c].load), "function" == typeof e ? (this[c].load = e, this.addEventListener("load", e)) : this[c].load = null;
    }
    get onabort() {
        return u.brandCheck(this, E), this[c].abort;
    }
    set onabort(e) {
        u.brandCheck(this, E), this[c].abort && this.removeEventListener("abort", this[c].abort), "function" == typeof e ? (this[c].abort = e, this.addEventListener("abort", e)) : this[c].abort = null;
    }
}
E.EMPTY = E.prototype.EMPTY = 0, E.LOADING = E.prototype.LOADING = 1, E.DONE = E.prototype.DONE = 2, Object.defineProperties(E.prototype, {
    EMPTY: n,
    LOADING: n,
    DONE: n,
    readAsArrayBuffer: g,
    readAsBinaryString: g,
    readAsText: g,
    readAsDataURL: g,
    abort: g,
    readyState: g,
    result: g,
    error: g,
    onloadstart: g,
    onprogress: g,
    onload: g,
    onabort: g,
    onerror: g,
    onloadend: g,
    [Symbol.toStringTag]: {
        value: "FileReader",
        writable: !1,
        enumerable: !1,
        configurable: !0
    }
}), Object.defineProperties(E, {
    EMPTY: n,
    LOADING: n,
    DONE: n
}), module.exports = {
    FileReader: E
};
