import { require_util8 } from "../../core/util.js";
import { require_webidl2 } from "../fetch/webidl.js";
import { require_symbols8 } from "./symbols.js";
import { require_util11 } from "./util.js";
var __wakaru_require_filereader2_cache;
export function require_filereader2() {
if (__wakaru_require_filereader2_cache) return __wakaru_require_filereader2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_filereader2_cache = module2;
"use strict";
var { staticPropertyDescriptors, readOperation, fireAProgressEvent } = require_util11();
var { kState, kError, kResult, kEvents, kAborted } = require_symbols8();
var { webidl } = require_webidl2();
var { kEnumerableProperty } = require_util8();
var FileReader2 = class _FileReader extends EventTarget {
    constructor(){
        super();
        this[kState] = "empty";
        this[kResult] = null;
        this[kError] = null;
        this[kEvents] = {
            loadend: null,
            error: null,
            abort: null,
            load: null,
            progress: null,
            loadstart: null
        };
    }
    readAsArrayBuffer(blob) {
        webidl.brandCheck(this, _FileReader);
        webidl.argumentLengthCheck(arguments, 1, "FileReader.readAsArrayBuffer");
        blob = webidl.converters.Blob(blob, {
            strict: false
        });
        readOperation(this, blob, "ArrayBuffer");
    }
    readAsBinaryString(blob) {
        webidl.brandCheck(this, _FileReader);
        webidl.argumentLengthCheck(arguments, 1, "FileReader.readAsBinaryString");
        blob = webidl.converters.Blob(blob, {
            strict: false
        });
        readOperation(this, blob, "BinaryString");
    }
    readAsText(blob, encoding = void 0) {
        webidl.brandCheck(this, _FileReader);
        webidl.argumentLengthCheck(arguments, 1, "FileReader.readAsText");
        blob = webidl.converters.Blob(blob, {
            strict: false
        });
        if (encoding !== void 0) {
            encoding = webidl.converters.DOMString(encoding, "FileReader.readAsText", "encoding");
        }
        readOperation(this, blob, "Text", encoding);
    }
    readAsDataURL(blob) {
        webidl.brandCheck(this, _FileReader);
        webidl.argumentLengthCheck(arguments, 1, "FileReader.readAsDataURL");
        blob = webidl.converters.Blob(blob, {
            strict: false
        });
        readOperation(this, blob, "DataURL");
    }
    abort() {
        if (this[kState] === "empty" || this[kState] === "done") {
            this[kResult] = null;
            return;
        }
        if (this[kState] === "loading") {
            this[kState] = "done";
            this[kResult] = null;
        }
        this[kAborted] = true;
        fireAProgressEvent("abort", this);
        if (this[kState] !== "loading") {
            fireAProgressEvent("loadend", this);
        }
    }
    get readyState() {
        webidl.brandCheck(this, _FileReader);
        switch(this[kState]){
            case "empty":
                return this.EMPTY;
            case "loading":
                return this.LOADING;
            case "done":
                return this.DONE;
        }
    }
    get result() {
        webidl.brandCheck(this, _FileReader);
        return this[kResult];
    }
    get error() {
        webidl.brandCheck(this, _FileReader);
        return this[kError];
    }
    get onloadend() {
        webidl.brandCheck(this, _FileReader);
        return this[kEvents].loadend;
    }
    set onloadend(fn) {
        webidl.brandCheck(this, _FileReader);
        if (this[kEvents].loadend) {
            this.removeEventListener("loadend", this[kEvents].loadend);
        }
        if (typeof fn === "function") {
            this[kEvents].loadend = fn;
            this.addEventListener("loadend", fn);
        } else {
            this[kEvents].loadend = null;
        }
    }
    get onerror() {
        webidl.brandCheck(this, _FileReader);
        return this[kEvents].error;
    }
    set onerror(fn) {
        webidl.brandCheck(this, _FileReader);
        if (this[kEvents].error) {
            this.removeEventListener("error", this[kEvents].error);
        }
        if (typeof fn === "function") {
            this[kEvents].error = fn;
            this.addEventListener("error", fn);
        } else {
            this[kEvents].error = null;
        }
    }
    get onloadstart() {
        webidl.brandCheck(this, _FileReader);
        return this[kEvents].loadstart;
    }
    set onloadstart(fn) {
        webidl.brandCheck(this, _FileReader);
        if (this[kEvents].loadstart) {
            this.removeEventListener("loadstart", this[kEvents].loadstart);
        }
        if (typeof fn === "function") {
            this[kEvents].loadstart = fn;
            this.addEventListener("loadstart", fn);
        } else {
            this[kEvents].loadstart = null;
        }
    }
    get onprogress() {
        webidl.brandCheck(this, _FileReader);
        return this[kEvents].progress;
    }
    set onprogress(fn) {
        webidl.brandCheck(this, _FileReader);
        if (this[kEvents].progress) {
            this.removeEventListener("progress", this[kEvents].progress);
        }
        if (typeof fn === "function") {
            this[kEvents].progress = fn;
            this.addEventListener("progress", fn);
        } else {
            this[kEvents].progress = null;
        }
    }
    get onload() {
        webidl.brandCheck(this, _FileReader);
        return this[kEvents].load;
    }
    set onload(fn) {
        webidl.brandCheck(this, _FileReader);
        if (this[kEvents].load) {
            this.removeEventListener("load", this[kEvents].load);
        }
        if (typeof fn === "function") {
            this[kEvents].load = fn;
            this.addEventListener("load", fn);
        } else {
            this[kEvents].load = null;
        }
    }
    get onabort() {
        webidl.brandCheck(this, _FileReader);
        return this[kEvents].abort;
    }
    set onabort(fn) {
        webidl.brandCheck(this, _FileReader);
        if (this[kEvents].abort) {
            this.removeEventListener("abort", this[kEvents].abort);
        }
        if (typeof fn === "function") {
            this[kEvents].abort = fn;
            this.addEventListener("abort", fn);
        } else {
            this[kEvents].abort = null;
        }
    }
};
FileReader2.EMPTY = FileReader2.prototype.EMPTY = 0;
FileReader2.LOADING = FileReader2.prototype.LOADING = 1;
FileReader2.DONE = FileReader2.prototype.DONE = 2;
Object.defineProperties(FileReader2.prototype, {
    EMPTY: staticPropertyDescriptors,
    LOADING: staticPropertyDescriptors,
    DONE: staticPropertyDescriptors,
    readAsArrayBuffer: kEnumerableProperty,
    readAsBinaryString: kEnumerableProperty,
    readAsText: kEnumerableProperty,
    readAsDataURL: kEnumerableProperty,
    abort: kEnumerableProperty,
    readyState: kEnumerableProperty,
    result: kEnumerableProperty,
    error: kEnumerableProperty,
    onloadstart: kEnumerableProperty,
    onprogress: kEnumerableProperty,
    onload: kEnumerableProperty,
    onabort: kEnumerableProperty,
    onerror: kEnumerableProperty,
    onloadend: kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: "FileReader",
        writable: false,
        enumerable: false,
        configurable: true
    }
});
Object.defineProperties(FileReader2, {
    EMPTY: staticPropertyDescriptors,
    LOADING: staticPropertyDescriptors,
    DONE: staticPropertyDescriptors
});
module2.exports = {
    FileReader: FileReader2
};

return module2.exports;
}
