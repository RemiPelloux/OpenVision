"use strict";
const { staticPropertyDescriptors: n, readOperation: s, fireAProgressEvent: o } = require("./module-33742.js"), { kState: i, kError: a, kResult: c, kEvents: l, kAborted: u } = require("./module-10749.js"), { webidl: d } = require("./module-18193.js"), { kEnumerableProperty: p } = require("./module-83589.js");
class m extends EventTarget {
    constructor(){
        super(), this[i] = "empty", this[c] = null, this[a] = null, this[l] = {
            loadend: null,
            error: null,
            abort: null,
            load: null,
            progress: null,
            loadstart: null
        };
    }
    readAsArrayBuffer(e) {
        d.brandCheck(this, m), d.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsArrayBuffer"
        }), e = d.converters.Blob(e, {
            strict: !1
        }), s(this, e, "ArrayBuffer");
    }
    readAsBinaryString(e) {
        d.brandCheck(this, m), d.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsBinaryString"
        }), e = d.converters.Blob(e, {
            strict: !1
        }), s(this, e, "BinaryString");
    }
    readAsText(e, t = void 0) {
        d.brandCheck(this, m), d.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsText"
        }), e = d.converters.Blob(e, {
            strict: !1
        }), void 0 !== t && (t = d.converters.DOMString(t)), s(this, e, "Text", t);
    }
    readAsDataURL(e) {
        d.brandCheck(this, m), d.argumentLengthCheck(arguments, 1, {
            header: "FileReader.readAsDataURL"
        }), e = d.converters.Blob(e, {
            strict: !1
        }), s(this, e, "DataURL");
    }
    abort() {
        "empty" !== this[i] && "done" !== this[i] ? ("loading" === this[i] && (this[i] = "done", this[c] = null), this[u] = !0, o("abort", this), "loading" !== this[i] && o("loadend", this)) : this[c] = null;
    }
    get readyState() {
        switch(d.brandCheck(this, m), this[i]){
            case "empty":
                return this.EMPTY;
            case "loading":
                return this.LOADING;
            case "done":
                return this.DONE;
        }
    }
    get result() {
        return d.brandCheck(this, m), this[c];
    }
    get error() {
        return d.brandCheck(this, m), this[a];
    }
    get onloadend() {
        return d.brandCheck(this, m), this[l].loadend;
    }
    set onloadend(e) {
        d.brandCheck(this, m), this[l].loadend && this.removeEventListener("loadend", this[l].loadend), "function" == typeof e ? (this[l].loadend = e, this.addEventListener("loadend", e)) : this[l].loadend = null;
    }
    get onerror() {
        return d.brandCheck(this, m), this[l].error;
    }
    set onerror(e) {
        d.brandCheck(this, m), this[l].error && this.removeEventListener("error", this[l].error), "function" == typeof e ? (this[l].error = e, this.addEventListener("error", e)) : this[l].error = null;
    }
    get onloadstart() {
        return d.brandCheck(this, m), this[l].loadstart;
    }
    set onloadstart(e) {
        d.brandCheck(this, m), this[l].loadstart && this.removeEventListener("loadstart", this[l].loadstart), "function" == typeof e ? (this[l].loadstart = e, this.addEventListener("loadstart", e)) : this[l].loadstart = null;
    }
    get onprogress() {
        return d.brandCheck(this, m), this[l].progress;
    }
    set onprogress(e) {
        d.brandCheck(this, m), this[l].progress && this.removeEventListener("progress", this[l].progress), "function" == typeof e ? (this[l].progress = e, this.addEventListener("progress", e)) : this[l].progress = null;
    }
    get onload() {
        return d.brandCheck(this, m), this[l].load;
    }
    set onload(e) {
        d.brandCheck(this, m), this[l].load && this.removeEventListener("load", this[l].load), "function" == typeof e ? (this[l].load = e, this.addEventListener("load", e)) : this[l].load = null;
    }
    get onabort() {
        return d.brandCheck(this, m), this[l].abort;
    }
    set onabort(e) {
        d.brandCheck(this, m), this[l].abort && this.removeEventListener("abort", this[l].abort), "function" == typeof e ? (this[l].abort = e, this.addEventListener("abort", e)) : this[l].abort = null;
    }
}
m.EMPTY = m.prototype.EMPTY = 0, m.LOADING = m.prototype.LOADING = 1, m.DONE = m.prototype.DONE = 2, Object.defineProperties(m.prototype, {
    EMPTY: n,
    LOADING: n,
    DONE: n,
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
}), Object.defineProperties(m, {
    EMPTY: n,
    LOADING: n,
    DONE: n
}), module.exports = {
    FileReader: m
};
