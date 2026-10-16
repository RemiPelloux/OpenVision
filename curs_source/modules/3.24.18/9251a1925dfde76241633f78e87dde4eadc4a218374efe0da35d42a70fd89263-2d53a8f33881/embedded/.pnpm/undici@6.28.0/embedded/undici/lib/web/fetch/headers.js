import { require_symbols6 } from "../../core/symbols.js";
import { require_util8 } from "../../core/util.js";
import { require_util9 } from "./util.js";
import { require_webidl2 } from "./webidl.js";
var __wakaru_require_headers5_cache;
export function require_headers5() {
if (__wakaru_require_headers5_cache) return __wakaru_require_headers5_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_headers5_cache = module2;
"use strict";
var { kConstruct } = require_symbols6();
var { kEnumerableProperty } = require_util8();
var { iteratorMixin, isValidHeaderName, isValidHeaderValue } = require_util9();
var { webidl } = require_webidl2();
var assert4 = require("node:assert");
var util2 = require("node:util");
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
    if (getHeadersGuard(headers) === "immutable") {
        throw new TypeError("immutable");
    }
    return getHeadersList(headers).append(name17, value, false);
}
function compareHeaderName(a, b2) {
    return a[0] < b2[0] ? -1 : 1;
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
    contains(name17, isLowerCase) {
        return this[kHeadersMap].has(isLowerCase ? name17 : name17.toLowerCase());
    }
    clear() {
        this[kHeadersMap].clear();
        this[kHeadersSortedMap] = null;
        this.cookies = null;
    }
    append(name17, value, isLowerCase) {
        this[kHeadersSortedMap] = null;
        const lowercaseName = isLowerCase ? name17 : name17.toLowerCase();
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
            (this.cookies ??= []).push(value);
        }
    }
    set(name17, value, isLowerCase) {
        this[kHeadersSortedMap] = null;
        const lowercaseName = isLowerCase ? name17 : name17.toLowerCase();
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
    delete(name17, isLowerCase) {
        this[kHeadersSortedMap] = null;
        if (!isLowerCase) name17 = name17.toLowerCase();
        if (name17 === "set-cookie") {
            this.cookies = null;
        }
        this[kHeadersMap].delete(name17);
    }
    get(name17, isLowerCase) {
        return this[kHeadersMap].get(isLowerCase ? name17 : name17.toLowerCase())?.value ?? null;
    }
    *[Symbol.iterator]() {
        for (const { 0: name17, 1: { value } } of this[kHeadersMap]){
            yield [
                name17,
                value
            ];
        }
    }
    get entries() {
        const headers = {};
        if (this[kHeadersMap].size !== 0) {
            for (const { name: name17, value } of this[kHeadersMap].values()){
                headers[name17] = value;
            }
        }
        return headers;
    }
    rawValues() {
        return this[kHeadersMap].values();
    }
    get entriesList() {
        const headers = [];
        if (this[kHeadersMap].size !== 0) {
            for (const { 0: lowerName, 1: { name: name17, value } } of this[kHeadersMap]){
                if (lowerName === "set-cookie") {
                    for (const cookie of this.cookies){
                        headers.push([
                            name17,
                            cookie
                        ]);
                    }
                } else {
                    headers.push([
                        name17,
                        value
                    ]);
                }
            }
        }
        return headers;
    }
    toSortedArray() {
        const size = this[kHeadersMap].size;
        const array3 = new Array(size);
        if (size <= 32) {
            if (size === 0) {
                return array3;
            }
            const iterator = this[kHeadersMap][Symbol.iterator]();
            const firstValue = iterator.next().value;
            array3[0] = [
                firstValue[0],
                firstValue[1].value
            ];
            assert4(firstValue[1].value !== null);
            for(let i = 1, j2 = 0, right = 0, left = 0, pivot = 0, x, value; i < size; ++i){
                value = iterator.next().value;
                x = array3[i] = [
                    value[0],
                    value[1].value
                ];
                assert4(x[1] !== null);
                left = 0;
                right = i;
                while(left < right){
                    pivot = left + (right - left >> 1);
                    if (array3[pivot][0] <= x[0]) {
                        left = pivot + 1;
                    } else {
                        right = pivot;
                    }
                }
                if (i !== pivot) {
                    j2 = i;
                    while(j2 > left){
                        array3[j2] = array3[--j2];
                    }
                    array3[left] = x;
                }
            }
            if (!iterator.next().done) {
                throw new TypeError("Unreachable");
            }
            return array3;
        } else {
            let i = 0;
            for (const { 0: name17, 1: { value } } of this[kHeadersMap]){
                array3[i++] = [
                    name17,
                    value
                ];
                assert4(value !== null);
            }
            return array3.sort(compareHeaderName);
        }
    }
};
var Headers2 = class _Headers {
    #guard;
    #headersList;
    constructor(init = void 0){
        webidl.util.markAsUncloneable(this);
        if (init === kConstruct) {
            return;
        }
        this.#headersList = new HeadersList();
        this.#guard = "none";
        if (init !== void 0) {
            init = webidl.converters.HeadersInit(init, "Headers contructor", "init");
            fill(this, init);
        }
    }
    append(name17, value) {
        webidl.brandCheck(this, _Headers);
        webidl.argumentLengthCheck(arguments, 2, "Headers.append");
        const prefix = "Headers.append";
        name17 = webidl.converters.ByteString(name17, prefix, "name");
        value = webidl.converters.ByteString(value, prefix, "value");
        return appendHeader(this, name17, value);
    }
    delete(name17) {
        webidl.brandCheck(this, _Headers);
        webidl.argumentLengthCheck(arguments, 1, "Headers.delete");
        const prefix = "Headers.delete";
        name17 = webidl.converters.ByteString(name17, prefix, "name");
        if (!isValidHeaderName(name17)) {
            throw webidl.errors.invalidArgument({
                prefix: "Headers.delete",
                value: name17,
                type: "header name"
            });
        }
        if (this.#guard === "immutable") {
            throw new TypeError("immutable");
        }
        if (!this.#headersList.contains(name17, false)) {
            return;
        }
        this.#headersList.delete(name17, false);
    }
    get(name17) {
        webidl.brandCheck(this, _Headers);
        webidl.argumentLengthCheck(arguments, 1, "Headers.get");
        const prefix = "Headers.get";
        name17 = webidl.converters.ByteString(name17, prefix, "name");
        if (!isValidHeaderName(name17)) {
            throw webidl.errors.invalidArgument({
                prefix,
                value: name17,
                type: "header name"
            });
        }
        return this.#headersList.get(name17, false);
    }
    has(name17) {
        webidl.brandCheck(this, _Headers);
        webidl.argumentLengthCheck(arguments, 1, "Headers.has");
        const prefix = "Headers.has";
        name17 = webidl.converters.ByteString(name17, prefix, "name");
        if (!isValidHeaderName(name17)) {
            throw webidl.errors.invalidArgument({
                prefix,
                value: name17,
                type: "header name"
            });
        }
        return this.#headersList.contains(name17, false);
    }
    set(name17, value) {
        webidl.brandCheck(this, _Headers);
        webidl.argumentLengthCheck(arguments, 2, "Headers.set");
        const prefix = "Headers.set";
        name17 = webidl.converters.ByteString(name17, prefix, "name");
        value = webidl.converters.ByteString(value, prefix, "value");
        value = headerValueNormalize(value);
        if (!isValidHeaderName(name17)) {
            throw webidl.errors.invalidArgument({
                prefix,
                value: name17,
                type: "header name"
            });
        } else if (!isValidHeaderValue(value)) {
            throw webidl.errors.invalidArgument({
                prefix,
                value,
                type: "header value"
            });
        }
        if (this.#guard === "immutable") {
            throw new TypeError("immutable");
        }
        this.#headersList.set(name17, value, false);
    }
    getSetCookie() {
        webidl.brandCheck(this, _Headers);
        const list2 = this.#headersList.cookies;
        if (list2) {
            return [
                ...list2
            ];
        }
        return [];
    }
    get [kHeadersSortedMap]() {
        if (this.#headersList[kHeadersSortedMap]) {
            return this.#headersList[kHeadersSortedMap];
        }
        const headers = [];
        const names3 = this.#headersList.toSortedArray();
        const cookies = this.#headersList.cookies;
        if (cookies === null || cookies.length === 1) {
            return this.#headersList[kHeadersSortedMap] = names3;
        }
        for(let i = 0; i < names3.length; ++i){
            const { 0: name17, 1: value } = names3[i];
            if (name17 === "set-cookie") {
                for(let j2 = 0; j2 < cookies.length; ++j2){
                    headers.push([
                        name17,
                        cookies[j2]
                    ]);
                }
            } else {
                headers.push([
                    name17,
                    value
                ]);
            }
        }
        return this.#headersList[kHeadersSortedMap] = headers;
    }
    [util2.inspect.custom](depth, options2) {
        options2.depth ??= depth;
        return `Headers ${util2.formatWithOptions(options2, this.#headersList.entries)}`;
    }
    static getHeadersGuard(o) {
        return o.#guard;
    }
    static setHeadersGuard(o, guard) {
        o.#guard = guard;
    }
    static getHeadersList(o) {
        return o.#headersList;
    }
    static setHeadersList(o, list2) {
        o.#headersList = list2;
    }
};
var { getHeadersGuard, setHeadersGuard, getHeadersList, setHeadersList } = Headers2;
Reflect.deleteProperty(Headers2, "getHeadersGuard");
Reflect.deleteProperty(Headers2, "setHeadersGuard");
Reflect.deleteProperty(Headers2, "getHeadersList");
Reflect.deleteProperty(Headers2, "setHeadersList");
iteratorMixin("Headers", Headers2, kHeadersSortedMap, 0, 1);
Object.defineProperties(Headers2.prototype, {
    append: kEnumerableProperty,
    delete: kEnumerableProperty,
    get: kEnumerableProperty,
    has: kEnumerableProperty,
    set: kEnumerableProperty,
    getSetCookie: kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: "Headers",
        configurable: true
    },
    [util2.inspect.custom]: {
        enumerable: false
    }
});
webidl.converters.HeadersInit = function(V2, prefix, argument) {
    if (webidl.util.Type(V2) === "Object") {
        const iterator = Reflect.get(V2, Symbol.iterator);
        if (!util2.types.isProxy(V2) && iterator === Headers2.prototype.entries) {
            try {
                return getHeadersList(V2).entriesList;
            } catch  {}
        }
        if (typeof iterator === "function") {
            return webidl.converters["sequence<sequence<ByteString>>"](V2, prefix, argument, iterator.bind(V2));
        }
        return webidl.converters["record<ByteString, ByteString>"](V2, prefix, argument);
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
    compareHeaderName,
    Headers: Headers2,
    HeadersList,
    getHeadersGuard,
    setHeadersGuard,
    setHeadersList,
    getHeadersList
};

return module2.exports;
}
