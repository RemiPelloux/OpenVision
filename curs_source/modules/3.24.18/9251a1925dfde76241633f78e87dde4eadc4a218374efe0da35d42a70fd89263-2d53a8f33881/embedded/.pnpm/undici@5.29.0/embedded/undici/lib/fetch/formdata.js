import { require_file } from "./file.js";
import { require_symbols2 } from "./symbols.js";
import { require_util2 } from "./util.js";
import { require_webidl } from "./webidl.js";
var __wakaru_require_formdata_cache;
export function require_formdata() {
if (__wakaru_require_formdata_cache) return __wakaru_require_formdata_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_formdata_cache = module2;
"use strict";
var { isBlobLike, toUSVString, makeIterator } = require_util2();
var { kState } = require_symbols2();
var { File: UndiciFile, FileLike, isFileLike } = require_file();
var { webidl } = require_webidl();
var { Blob: Blob2, File: NativeFile } = require("buffer");
var File3 = NativeFile ?? UndiciFile;
var FormData2 = class _FormData {
    constructor(form){
        if (form !== void 0) {
            throw webidl.errors.conversionFailed({
                prefix: "FormData constructor",
                argument: "Argument 1",
                types: [
                    "undefined"
                ]
            });
        }
        this[kState] = [];
    }
    append(name17, value, filename = void 0) {
        webidl.brandCheck(this, _FormData);
        webidl.argumentLengthCheck(arguments, 2, {
            header: "FormData.append"
        });
        if (arguments.length === 3 && !isBlobLike(value)) {
            throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        }
        name17 = webidl.converters.USVString(name17);
        value = isBlobLike(value) ? webidl.converters.Blob(value, {
            strict: false
        }) : webidl.converters.USVString(value);
        filename = arguments.length === 3 ? webidl.converters.USVString(filename) : void 0;
        const entry = makeEntry(name17, value, filename);
        this[kState].push(entry);
    }
    delete(name17) {
        webidl.brandCheck(this, _FormData);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "FormData.delete"
        });
        name17 = webidl.converters.USVString(name17);
        this[kState] = this[kState].filter((entry)=>entry.name !== name17);
    }
    get(name17) {
        webidl.brandCheck(this, _FormData);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "FormData.get"
        });
        name17 = webidl.converters.USVString(name17);
        const idx = this[kState].findIndex((entry)=>entry.name === name17);
        if (idx === -1) {
            return null;
        }
        return this[kState][idx].value;
    }
    getAll(name17) {
        webidl.brandCheck(this, _FormData);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "FormData.getAll"
        });
        name17 = webidl.converters.USVString(name17);
        return this[kState].filter((entry)=>entry.name === name17).map((entry)=>entry.value);
    }
    has(name17) {
        webidl.brandCheck(this, _FormData);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "FormData.has"
        });
        name17 = webidl.converters.USVString(name17);
        return this[kState].findIndex((entry)=>entry.name === name17) !== -1;
    }
    set(name17, value, filename = void 0) {
        webidl.brandCheck(this, _FormData);
        webidl.argumentLengthCheck(arguments, 2, {
            header: "FormData.set"
        });
        if (arguments.length === 3 && !isBlobLike(value)) {
            throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        }
        name17 = webidl.converters.USVString(name17);
        value = isBlobLike(value) ? webidl.converters.Blob(value, {
            strict: false
        }) : webidl.converters.USVString(value);
        filename = arguments.length === 3 ? toUSVString(filename) : void 0;
        const entry = makeEntry(name17, value, filename);
        const idx = this[kState].findIndex((entry2)=>entry2.name === name17);
        if (idx !== -1) {
            this[kState] = [
                ...this[kState].slice(0, idx),
                entry,
                ...this[kState].slice(idx + 1).filter((entry2)=>entry2.name !== name17)
            ];
        } else {
            this[kState].push(entry);
        }
    }
    entries() {
        webidl.brandCheck(this, _FormData);
        return makeIterator(()=>this[kState].map((pair)=>[
                    pair.name,
                    pair.value
                ]), "FormData", "key+value");
    }
    keys() {
        webidl.brandCheck(this, _FormData);
        return makeIterator(()=>this[kState].map((pair)=>[
                    pair.name,
                    pair.value
                ]), "FormData", "key");
    }
    values() {
        webidl.brandCheck(this, _FormData);
        return makeIterator(()=>this[kState].map((pair)=>[
                    pair.name,
                    pair.value
                ]), "FormData", "value");
    }
    forEach(callbackFn, thisArg = globalThis) {
        webidl.brandCheck(this, _FormData);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "FormData.forEach"
        });
        if (typeof callbackFn !== "function") {
            throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        }
        for (const [key, value] of this){
            callbackFn.apply(thisArg, [
                value,
                key,
                this
            ]);
        }
    }
};
FormData2.prototype[Symbol.iterator] = FormData2.prototype.entries;
Object.defineProperties(FormData2.prototype, {
    [Symbol.toStringTag]: {
        value: "FormData",
        configurable: true
    }
});
function makeEntry(name17, value, filename) {
    name17 = Buffer.from(name17).toString("utf8");
    if (typeof value === "string") {
        value = Buffer.from(value).toString("utf8");
    } else {
        if (!isFileLike(value)) {
            value = value instanceof Blob2 ? new File3([
                value
            ], "blob", {
                type: value.type
            }) : new FileLike(value, "blob", {
                type: value.type
            });
        }
        if (filename !== void 0) {
            const options2 = {
                type: value.type,
                lastModified: value.lastModified
            };
            value = NativeFile && value instanceof NativeFile || value instanceof UndiciFile ? new File3([
                value
            ], filename, options2) : new FileLike(value, filename, options2);
        }
    }
    return {
        name: name17,
        value
    };
}
module2.exports = {
    FormData: FormData2
};

return module2.exports;
}
