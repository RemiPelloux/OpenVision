import { require_util8 } from "../../core/util.js";
import { require_file2 } from "./file.js";
import { require_symbols7 } from "./symbols.js";
import { require_util9 } from "./util.js";
import { require_webidl2 } from "./webidl.js";
var __wakaru_require_formdata2_cache;
export function require_formdata2() {
if (__wakaru_require_formdata2_cache) return __wakaru_require_formdata2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_formdata2_cache = module2;
"use strict";
var { isBlobLike, iteratorMixin } = require_util9();
var { kState } = require_symbols7();
var { kEnumerableProperty } = require_util8();
var { FileLike, isFileLike } = require_file2();
var { webidl } = require_webidl2();
var { File: NativeFile } = require("node:buffer");
var nodeUtil = require("node:util");
var File3 = globalThis.File ?? NativeFile;
var FormData2 = class _FormData {
    constructor(form){
        webidl.util.markAsUncloneable(this);
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
        const prefix = "FormData.append";
        webidl.argumentLengthCheck(arguments, 2, prefix);
        if (arguments.length === 3 && !isBlobLike(value)) {
            throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        }
        name17 = webidl.converters.USVString(name17, prefix, "name");
        value = isBlobLike(value) ? webidl.converters.Blob(value, prefix, "value", {
            strict: false
        }) : webidl.converters.USVString(value, prefix, "value");
        filename = arguments.length === 3 ? webidl.converters.USVString(filename, prefix, "filename") : void 0;
        const entry = makeEntry(name17, value, filename);
        this[kState].push(entry);
    }
    delete(name17) {
        webidl.brandCheck(this, _FormData);
        const prefix = "FormData.delete";
        webidl.argumentLengthCheck(arguments, 1, prefix);
        name17 = webidl.converters.USVString(name17, prefix, "name");
        this[kState] = this[kState].filter((entry)=>entry.name !== name17);
    }
    get(name17) {
        webidl.brandCheck(this, _FormData);
        const prefix = "FormData.get";
        webidl.argumentLengthCheck(arguments, 1, prefix);
        name17 = webidl.converters.USVString(name17, prefix, "name");
        const idx = this[kState].findIndex((entry)=>entry.name === name17);
        if (idx === -1) {
            return null;
        }
        return this[kState][idx].value;
    }
    getAll(name17) {
        webidl.brandCheck(this, _FormData);
        const prefix = "FormData.getAll";
        webidl.argumentLengthCheck(arguments, 1, prefix);
        name17 = webidl.converters.USVString(name17, prefix, "name");
        return this[kState].filter((entry)=>entry.name === name17).map((entry)=>entry.value);
    }
    has(name17) {
        webidl.brandCheck(this, _FormData);
        const prefix = "FormData.has";
        webidl.argumentLengthCheck(arguments, 1, prefix);
        name17 = webidl.converters.USVString(name17, prefix, "name");
        return this[kState].findIndex((entry)=>entry.name === name17) !== -1;
    }
    set(name17, value, filename = void 0) {
        webidl.brandCheck(this, _FormData);
        const prefix = "FormData.set";
        webidl.argumentLengthCheck(arguments, 2, prefix);
        if (arguments.length === 3 && !isBlobLike(value)) {
            throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        }
        name17 = webidl.converters.USVString(name17, prefix, "name");
        value = isBlobLike(value) ? webidl.converters.Blob(value, prefix, "name", {
            strict: false
        }) : webidl.converters.USVString(value, prefix, "name");
        filename = arguments.length === 3 ? webidl.converters.USVString(filename, prefix, "name") : void 0;
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
    [nodeUtil.inspect.custom](depth, options2) {
        const state = this[kState].reduce((a, b2)=>{
            if (a[b2.name]) {
                if (Array.isArray(a[b2.name])) {
                    a[b2.name].push(b2.value);
                } else {
                    a[b2.name] = [
                        a[b2.name],
                        b2.value
                    ];
                }
            } else {
                a[b2.name] = b2.value;
            }
            return a;
        }, {
            __proto__: null
        });
        options2.depth ??= depth;
        options2.colors ??= true;
        const output = nodeUtil.formatWithOptions(options2, state);
        return `FormData ${output.slice(output.indexOf("]") + 2)}`;
    }
};
iteratorMixin("FormData", FormData2, kState, "name", "value");
Object.defineProperties(FormData2.prototype, {
    append: kEnumerableProperty,
    delete: kEnumerableProperty,
    get: kEnumerableProperty,
    getAll: kEnumerableProperty,
    has: kEnumerableProperty,
    set: kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: "FormData",
        configurable: true
    }
});
function makeEntry(name17, value, filename) {
    if (typeof value === "string") {} else {
        if (!isFileLike(value)) {
            value = value instanceof Blob ? new File3([
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
            value = value instanceof NativeFile ? new File3([
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
    FormData: FormData2,
    makeEntry
};

return module2.exports;
}
