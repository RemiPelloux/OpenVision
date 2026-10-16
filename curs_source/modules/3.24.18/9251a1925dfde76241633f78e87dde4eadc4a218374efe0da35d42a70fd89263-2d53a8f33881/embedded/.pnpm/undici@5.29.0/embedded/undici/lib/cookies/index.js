import { require_parse } from "./parse.js";
import { require_util6 } from "./util.js";
import { require_headers } from "../fetch/headers.js";
import { require_webidl } from "../fetch/webidl.js";
var __wakaru_require_cookies_cache;
export function require_cookies() {
if (__wakaru_require_cookies_cache) return __wakaru_require_cookies_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_cookies_cache = module2;
"use strict";
var { parseSetCookie } = require_parse();
var { stringify: stringify2 } = require_util6();
var { webidl } = require_webidl();
var { Headers: Headers2 } = require_headers();
function getCookies(headers) {
    webidl.argumentLengthCheck(arguments, 1, {
        header: "getCookies"
    });
    webidl.brandCheck(headers, Headers2, {
        strict: false
    });
    const cookie = headers.get("cookie");
    const out = {};
    if (!cookie) {
        return out;
    }
    for (const piece of cookie.split(";")){
        const [name17, ...value] = piece.split("=");
        out[name17.trim()] = value.join("=");
    }
    return out;
}
function deleteCookie(headers, name17, attributes) {
    webidl.argumentLengthCheck(arguments, 2, {
        header: "deleteCookie"
    });
    webidl.brandCheck(headers, Headers2, {
        strict: false
    });
    name17 = webidl.converters.DOMString(name17);
    attributes = webidl.converters.DeleteCookieAttributes(attributes);
    setCookie(headers, {
        name: name17,
        value: "",
        expires: new Date(0),
        ...attributes
    });
}
function getSetCookies(headers) {
    webidl.argumentLengthCheck(arguments, 1, {
        header: "getSetCookies"
    });
    webidl.brandCheck(headers, Headers2, {
        strict: false
    });
    const cookies = headers.getSetCookie();
    if (!cookies) {
        return [];
    }
    return cookies.map((pair)=>parseSetCookie(pair));
}
function setCookie(headers, cookie) {
    webidl.argumentLengthCheck(arguments, 2, {
        header: "setCookie"
    });
    webidl.brandCheck(headers, Headers2, {
        strict: false
    });
    cookie = webidl.converters.Cookie(cookie);
    const str3 = stringify2(cookie);
    if (str3) {
        headers.append("Set-Cookie", stringify2(cookie));
    }
}
webidl.converters.DeleteCookieAttributes = webidl.dictionaryConverter([
    {
        converter: webidl.nullableConverter(webidl.converters.DOMString),
        key: "path",
        defaultValue: null
    },
    {
        converter: webidl.nullableConverter(webidl.converters.DOMString),
        key: "domain",
        defaultValue: null
    }
]);
webidl.converters.Cookie = webidl.dictionaryConverter([
    {
        converter: webidl.converters.DOMString,
        key: "name"
    },
    {
        converter: webidl.converters.DOMString,
        key: "value"
    },
    {
        converter: webidl.nullableConverter((value)=>{
            if (typeof value === "number") {
                return webidl.converters["unsigned long long"](value);
            }
            return new Date(value);
        }),
        key: "expires",
        defaultValue: null
    },
    {
        converter: webidl.nullableConverter(webidl.converters["long long"]),
        key: "maxAge",
        defaultValue: null
    },
    {
        converter: webidl.nullableConverter(webidl.converters.DOMString),
        key: "domain",
        defaultValue: null
    },
    {
        converter: webidl.nullableConverter(webidl.converters.DOMString),
        key: "path",
        defaultValue: null
    },
    {
        converter: webidl.nullableConverter(webidl.converters.boolean),
        key: "secure",
        defaultValue: null
    },
    {
        converter: webidl.nullableConverter(webidl.converters.boolean),
        key: "httpOnly",
        defaultValue: null
    },
    {
        converter: webidl.converters.USVString,
        key: "sameSite",
        allowedValues: [
            "Strict",
            "Lax",
            "None"
        ]
    },
    {
        converter: webidl.sequenceConverter(webidl.converters.DOMString),
        key: "unparsed",
        defaultValue: []
    }
]);
module2.exports = {
    getCookies,
    deleteCookie,
    getSetCookies,
    setCookie
};

return module2.exports;
}
