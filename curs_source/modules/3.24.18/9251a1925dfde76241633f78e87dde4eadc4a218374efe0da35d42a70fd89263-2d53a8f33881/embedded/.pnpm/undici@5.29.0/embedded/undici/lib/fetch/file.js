import { require_util } from "../core/util.js";
import { require_dataURL } from "./dataURL.js";
import { require_symbols2 } from "./symbols.js";
import { require_util2 } from "./util.js";
import { require_webidl } from "./webidl.js";
var __wakaru_require_file_cache;
export function require_file() {
if (__wakaru_require_file_cache) return __wakaru_require_file_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_file_cache = module2;
"use strict";
var { Blob: Blob2, File: NativeFile } = require("buffer");
var { types: types3 } = require("util");
var { kState } = require_symbols2();
var { isBlobLike } = require_util2();
var { webidl } = require_webidl();
var { parseMIMEType, serializeAMimeType } = require_dataURL();
var { kEnumerableProperty } = require_util();
var encoder2 = new TextEncoder();
var File3 = class _File extends Blob2 {
    constructor(fileBits, fileName, options2 = {}){
        webidl.argumentLengthCheck(arguments, 2, {
            header: "File constructor"
        });
        fileBits = webidl.converters["sequence<BlobPart>"](fileBits);
        fileName = webidl.converters.USVString(fileName);
        options2 = webidl.converters.FilePropertyBag(options2);
        const n = fileName;
        let t = options2.type;
        let d;
        substep: {
            if (t) {
                t = parseMIMEType(t);
                if (t === "failure") {
                    t = "";
                    break substep;
                }
                t = serializeAMimeType(t).toLowerCase();
            }
            d = options2.lastModified;
        }
        super(processBlobParts(fileBits, options2), {
            type: t
        });
        this[kState] = {
            name: n,
            lastModified: d,
            type: t
        };
    }
    get name() {
        webidl.brandCheck(this, _File);
        return this[kState].name;
    }
    get lastModified() {
        webidl.brandCheck(this, _File);
        return this[kState].lastModified;
    }
    get type() {
        webidl.brandCheck(this, _File);
        return this[kState].type;
    }
};
var FileLike = class _FileLike {
    constructor(blobLike, fileName, options2 = {}){
        const n = fileName;
        const t = options2.type;
        const d = options2.lastModified ?? Date.now();
        this[kState] = {
            blobLike,
            name: n,
            type: t,
            lastModified: d
        };
    }
    stream(...args) {
        webidl.brandCheck(this, _FileLike);
        return this[kState].blobLike.stream(...args);
    }
    arrayBuffer(...args) {
        webidl.brandCheck(this, _FileLike);
        return this[kState].blobLike.arrayBuffer(...args);
    }
    slice(...args) {
        webidl.brandCheck(this, _FileLike);
        return this[kState].blobLike.slice(...args);
    }
    text(...args) {
        webidl.brandCheck(this, _FileLike);
        return this[kState].blobLike.text(...args);
    }
    get size() {
        webidl.brandCheck(this, _FileLike);
        return this[kState].blobLike.size;
    }
    get type() {
        webidl.brandCheck(this, _FileLike);
        return this[kState].blobLike.type;
    }
    get name() {
        webidl.brandCheck(this, _FileLike);
        return this[kState].name;
    }
    get lastModified() {
        webidl.brandCheck(this, _FileLike);
        return this[kState].lastModified;
    }
    get [Symbol.toStringTag]() {
        return "File";
    }
};
Object.defineProperties(File3.prototype, {
    [Symbol.toStringTag]: {
        value: "File",
        configurable: true
    },
    name: kEnumerableProperty,
    lastModified: kEnumerableProperty
});
webidl.converters.Blob = webidl.interfaceConverter(Blob2);
webidl.converters.BlobPart = function(V2, opts) {
    if (webidl.util.Type(V2) === "Object") {
        if (isBlobLike(V2)) {
            return webidl.converters.Blob(V2, {
                strict: false
            });
        }
        if (ArrayBuffer.isView(V2) || types3.isAnyArrayBuffer(V2)) {
            return webidl.converters.BufferSource(V2, opts);
        }
    }
    return webidl.converters.USVString(V2, opts);
};
webidl.converters["sequence<BlobPart>"] = webidl.sequenceConverter(webidl.converters.BlobPart);
webidl.converters.FilePropertyBag = webidl.dictionaryConverter([
    {
        key: "lastModified",
        converter: webidl.converters["long long"],
        get defaultValue () {
            return Date.now();
        }
    },
    {
        key: "type",
        converter: webidl.converters.DOMString,
        defaultValue: ""
    },
    {
        key: "endings",
        converter: (value)=>{
            value = webidl.converters.DOMString(value);
            value = value.toLowerCase();
            if (value !== "native") {
                value = "transparent";
            }
            return value;
        },
        defaultValue: "transparent"
    }
]);
function processBlobParts(parts, options2) {
    const bytes = [];
    for (const element of parts){
        if (typeof element === "string") {
            let s3 = element;
            if (options2.endings === "native") {
                s3 = convertLineEndingsNative(s3);
            }
            bytes.push(encoder2.encode(s3));
        } else if (types3.isAnyArrayBuffer(element) || types3.isTypedArray(element)) {
            if (!element.buffer) {
                bytes.push(new Uint8Array(element));
            } else {
                bytes.push(new Uint8Array(element.buffer, element.byteOffset, element.byteLength));
            }
        } else if (isBlobLike(element)) {
            bytes.push(element);
        }
    }
    return bytes;
}
function convertLineEndingsNative(s3) {
    let nativeLineEnding = "\n";
    if (process.platform === "win32") {
        nativeLineEnding = "\r\n";
    }
    return s3.replace(/\r?\n/g, nativeLineEnding);
}
function isFileLike(object4) {
    return NativeFile && object4 instanceof NativeFile || object4 instanceof File3 || object4 && (typeof object4.stream === "function" || typeof object4.arrayBuffer === "function") && object4[Symbol.toStringTag] === "File";
}
module2.exports = {
    File: File3,
    FileLike,
    isFileLike
};

return module2.exports;
}
