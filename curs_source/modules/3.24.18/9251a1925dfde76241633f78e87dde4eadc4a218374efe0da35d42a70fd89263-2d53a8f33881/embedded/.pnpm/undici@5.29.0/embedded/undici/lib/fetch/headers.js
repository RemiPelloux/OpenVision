import { require_symbols } from "../core/symbols.js";
import { require_util } from "../core/util.js";
import { require_symbols2 } from "./symbols.js";
import { require_util2 } from "./util.js";
import { require_webidl } from "./webidl.js";
var __wakaru_require_headers_cache;
export function require_headers() {
if (__wakaru_require_headers_cache) return __wakaru_require_headers_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_headers_cache = module2;
"use strict";
var { kHeadersList, kConstruct } = require_symbols();
var { kGuard } = require_symbols2();
var { kEnumerableProperty } = require_util();
var { makeIterator, isValidHeaderName, isValidHeaderValue } = require_util2();
var util2 = require("util");
var { webidl } = require_webidl();
var assert4 = require("assert");
var kHeadersMap = Symbol("headers map");
var kHeadersSortedMap = Symbol("headers map sorted");
function isHTTPWhiteSpaceCharCode(code) {
    return code === 10 || code === 13 || code === 9 || code === 32;
}
function headerValueNormalize(potentialValue) {
    let i = 0;
    let j2 = potentialValue.length;
    while(j2 > i && isHTTPWhiteSpaceCharCode(potentialValue.charCodeAt(j2 - 1)))--j2;
    while(j2 > i && isHTTPWhiteSpaceCharCode(potentialValue.charCodeAt(i)))++i;
    return i === 0 && j2 === potentialValue.length ? potentialValue : potentialValue.substring(i, j2);
}
function fill(headers, object4) {
    if (Array.isArray(object4)) {
        for(let i = 0; i < object4.length; ++i){
            const header = object4[i];
            if (header.length !== 2) {
                throw webidl.errors.exception({
                    header: "Headers constructor",
                    message: `expected name/value pair to be length 2, found ${header.length}.`
                });
            }
            appendHeader(headers, header[0], header[1]);
        }
    } else if (typeof object4 === "object" && object4 !== null) {
        const keys = Object.keys(object4);
        for(let i = 0; i < keys.length; ++i){
            appendHeader(headers, keys[i], object4[keys[i]]);
        }
    } else {
        throw webidl.errors.conversionFailed({
            prefix: "Headers constructor",
            argument: "Argument 1",
            types: [
                "sequence<sequence<ByteString>>",
                "record<ByteString, ByteString>"
            ]
        });
    }
}
function appendHeader(headers, name17, value) {
    value = headerValueNormalize(value);
    if (!isValidHeaderName(name17)) {
        throw webidl.errors.invalidArgument({
            prefix: "Headers.append",
            value: name17,
            type: "header name"
        });
    } else if (!isValidHeaderValue(value)) {
        throw webidl.errors.invalidArgument({
            prefix: "Headers.append",
            value,
            type: "header value"
        });
    }
    if (headers[kGuard] === "immutable") {
        throw new TypeError("immutable");
    } else if (headers[kGuard] === "request-no-cors") {}
    return headers[kHeadersList].append(name17, value);
}
var HeadersList = class _HeadersList {
    cookies = null;
    constructor(init){
        if (init instanceof _HeadersList) {
            this[kHeadersMap] = new Map(init[kHeadersMap]);
            this[kHeadersSortedMap] = init[kHeadersSortedMap];
            this.cookies = init.cookies === null ? null : [
                ...init.cookies
            ];
        } else {
            this[kHeadersMap] = new Map(init);
            this[kHeadersSortedMap] = null;
        }
    }
    contains(name17) {
        name17 = name17.toLowerCase();
        return this[kHeadersMap].has(name17);
    }
    clear() {
        this[kHeadersMap].clear();
        this[kHeadersSortedMap] = null;
        this.cookies = null;
    }
    append(name17, value) {
        this[kHeadersSortedMap] = null;
        const lowercaseName = name17.toLowerCase();
        const exists = this[kHeadersMap].get(lowercaseName);
        if (exists) {
            const delimiter3 = lowercaseName === "cookie" ? "; " : ", ";
            this[kHeadersMap].set(lowercaseName, {
                name: exists.name,
                value: `${exists.value}${delimiter3}${value}`
            });
        } else {
            this[kHeadersMap].set(lowercaseName, {
                name: name17,
                value
            });
        }
        if (lowercaseName === "set-cookie") {
            this.cookies ??= [];
            this.cookies.push(value);
        }
    }
    set(name17, value) {
        this[kHeadersSortedMap] = null;
        const lowercaseName = name17.toLowerCase();
        if (lowercaseName === "set-cookie") {
            this.cookies = [
                value
            ];
        }
        this[kHeadersMap].set(lowercaseName, {
            name: name17,
            value
        });
    }
    delete(name17) {
        this[kHeadersSortedMap] = null;
        name17 = name17.toLowerCase();
        if (name17 === "set-cookie") {
            this.cookies = null;
        }
        this[kHeadersMap].delete(name17);
    }
    get(name17) {
        const value = this[kHeadersMap].get(name17.toLowerCase());
        return value === void 0 ? null : value.value;
    }
    *[Symbol.iterator]() {
        for (const [name17, { value }] of this[kHeadersMap]){
            yield [
                name17,
                value
            ];
        }
    }
    get entries() {
        const headers = {};
        if (this[kHeadersMap].size) {
            for (const { name: name17, value } of this[kHeadersMap].values()){
                headers[name17] = value;
            }
        }
        return headers;
    }
};
var Headers2 = class _Headers {
    constructor(init = void 0){
        if (init === kConstruct) {
            return;
        }
        this[kHeadersList] = new HeadersList();
        this[kGuard] = "none";
        if (init !== void 0) {
            init = webidl.converters.HeadersInit(init);
            fill(this, init);
        }
    }
    append(name17, value) {
        webidl.brandCheck(this, _Headers);
        webidl.argumentLengthCheck(arguments, 2, {
            header: "Headers.append"
        });
        name17 = webidl.converters.ByteString(name17);
        value = webidl.converters.ByteString(value);
        return appendHeader(this, name17, value);
    }
    delete(name17) {
        webidl.brandCheck(this, _Headers);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "Headers.delete"
        });
        name17 = webidl.converters.ByteString(name17);
        if (!isValidHeaderName(name17)) {
            throw webidl.errors.invalidArgument({
                prefix: "Headers.delete",
                value: name17,
                type: "header name"
            });
        }
        if (this[kGuard] === "immutable") {
            throw new TypeError("immutable");
        } else if (this[kGuard] === "request-no-cors") {}
        if (!this[kHeadersList].contains(name17)) {
            return;
        }
        this[kHeadersList].delete(name17);
    }
    get(name17) {
        webidl.brandCheck(this, _Headers);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "Headers.get"
        });
        name17 = webidl.converters.ByteString(name17);
        if (!isValidHeaderName(name17)) {
            throw webidl.errors.invalidArgument({
                prefix: "Headers.get",
                value: name17,
                type: "header name"
            });
        }
        return this[kHeadersList].get(name17);
    }
    has(name17) {
        webidl.brandCheck(this, _Headers);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "Headers.has"
        });
        name17 = webidl.converters.ByteString(name17);
        if (!isValidHeaderName(name17)) {
            throw webidl.errors.invalidArgument({
                prefix: "Headers.has",
                value: name17,
                type: "header name"
            });
        }
        return this[kHeadersList].contains(name17);
    }
    set(name17, value) {
        webidl.brandCheck(this, _Headers);
        webidl.argumentLengthCheck(arguments, 2, {
            header: "Headers.set"
        });
        name17 = webidl.converters.ByteString(name17);
        value = webidl.converters.ByteString(value);
        value = headerValueNormalize(value);
        if (!isValidHeaderName(name17)) {
            throw webidl.errors.invalidArgument({
                prefix: "Headers.set",
                value: name17,
                type: "header name"
            });
        } else if (!isValidHeaderValue(value)) {
            throw webidl.errors.invalidArgument({
                prefix: "Headers.set",
                value,
                type: "header value"
            });
        }
        if (this[kGuard] === "immutable") {
            throw new TypeError("immutable");
        } else if (this[kGuard] === "request-no-cors") {}
        this[kHeadersList].set(name17, value);
    }
    getSetCookie() {
        webidl.brandCheck(this, _Headers);
        const list2 = this[kHeadersList].cookies;
        if (list2) {
            return [
                ...list2
            ];
        }
        return [];
    }
    get [kHeadersSortedMap]() {
        if (this[kHeadersList][kHeadersSortedMap]) {
            return this[kHeadersList][kHeadersSortedMap];
        }
        const headers = [];
        const names3 = [
            ...this[kHeadersList]
        ].sort((a, b2)=>a[0] < b2[0] ? -1 : 1);
        const cookies = this[kHeadersList].cookies;
        for(let i = 0; i < names3.length; ++i){
            const [name17, value] = names3[i];
            if (name17 === "set-cookie") {
                for(let j2 = 0; j2 < cookies.length; ++j2){
                    headers.push([
                        name17,
                        cookies[j2]
                    ]);
                }
            } else {
                assert4(value !== null);
                headers.push([
                    name17,
                    value
                ]);
            }
        }
        this[kHeadersList][kHeadersSortedMap] = headers;
        return headers;
    }
    keys() {
        webidl.brandCheck(this, _Headers);
        if (this[kGuard] === "immutable") {
            const value = this[kHeadersSortedMap];
            return makeIterator(()=>value, "Headers", "key");
        }
        return makeIterator(()=>[
                ...this[kHeadersSortedMap].values()
            ], "Headers", "key");
    }
    values() {
        webidl.brandCheck(this, _Headers);
        if (this[kGuard] === "immutable") {
            const value = this[kHeadersSortedMap];
            return makeIterator(()=>value, "Headers", "value");
        }
        return makeIterator(()=>[
                ...this[kHeadersSortedMap].values()
            ], "Headers", "value");
    }
    entries() {
        webidl.brandCheck(this, _Headers);
        if (this[kGuard] === "immutable") {
            const value = this[kHeadersSortedMap];
            return makeIterator(()=>value, "Headers", "key+value");
        }
        return makeIterator(()=>[
                ...this[kHeadersSortedMap].values()
            ], "Headers", "key+value");
    }
    forEach(callbackFn, thisArg = globalThis) {
        webidl.brandCheck(this, _Headers);
        webidl.argumentLengthCheck(arguments, 1, {
            header: "Headers.forEach"
        });
        if (typeof callbackFn !== "function") {
            throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        }
        for (const [key, value] of this){
            callbackFn.apply(thisArg, [
                value,
                key,
                this
            ]);
        }
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        webidl.brandCheck(this, _Headers);
        return this[kHeadersList];
    }
};
Headers2.prototype[Symbol.iterator] = Headers2.prototype.entries;
Object.defineProperties(Headers2.prototype, {
    append: kEnumerableProperty,
    delete: kEnumerableProperty,
    get: kEnumerableProperty,
    has: kEnumerableProperty,
    set: kEnumerableProperty,
    getSetCookie: kEnumerableProperty,
    keys: kEnumerableProperty,
    values: kEnumerableProperty,
    entries: kEnumerableProperty,
    forEach: kEnumerableProperty,
    [Symbol.iterator]: {
        enumerable: false
    },
    [Symbol.toStringTag]: {
        value: "Headers",
        configurable: true
    },
    [util2.inspect.custom]: {
        enumerable: false
    }
});
webidl.converters.HeadersInit = function(V2) {
    if (webidl.util.Type(V2) === "Object") {
        if (V2[Symbol.iterator]) {
            return webidl.converters["sequence<sequence<ByteString>>"](V2);
        }
        return webidl.converters["record<ByteString, ByteString>"](V2);
    }
    throw webidl.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: [
            "sequence<sequence<ByteString>>",
            "record<ByteString, ByteString>"
        ]
    });
};
module2.exports = {
    fill,
    Headers: Headers2,
    HeadersList
};

return module2.exports;
}
