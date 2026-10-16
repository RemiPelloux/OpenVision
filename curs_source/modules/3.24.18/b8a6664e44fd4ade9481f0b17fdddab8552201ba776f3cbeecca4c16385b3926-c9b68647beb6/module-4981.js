"use strict";
const { parseSetCookie: r } = require("./module-54250.js"), { stringify: s } = require("./module-76261.js"), { webidl: o } = require("./module-48005.js"), { Headers: n } = require("./module-2932.js");
function i(A, e) {
    o.argumentLengthCheck(arguments, 2, {
        header: "setCookie"
    }), o.brandCheck(A, n, {
        strict: !1
    }), e = o.converters.Cookie(e);
    s(e) && A.append("Set-Cookie", s(e));
}
o.converters.DeleteCookieAttributes = o.dictionaryConverter([
    {
        converter: o.nullableConverter(o.converters.DOMString),
        key: "path",
        defaultValue: null
    },
    {
        converter: o.nullableConverter(o.converters.DOMString),
        key: "domain",
        defaultValue: null
    }
]), o.converters.Cookie = o.dictionaryConverter([
    {
        converter: o.converters.DOMString,
        key: "name"
    },
    {
        converter: o.converters.DOMString,
        key: "value"
    },
    {
        converter: o.nullableConverter((A)=>"number" == typeof A ? o.converters["unsigned long long"](A) : new Date(A)),
        key: "expires",
        defaultValue: null
    },
    {
        converter: o.nullableConverter(o.converters["long long"]),
        key: "maxAge",
        defaultValue: null
    },
    {
        converter: o.nullableConverter(o.converters.DOMString),
        key: "domain",
        defaultValue: null
    },
    {
        converter: o.nullableConverter(o.converters.DOMString),
        key: "path",
        defaultValue: null
    },
    {
        converter: o.nullableConverter(o.converters.boolean),
        key: "secure",
        defaultValue: null
    },
    {
        converter: o.nullableConverter(o.converters.boolean),
        key: "httpOnly",
        defaultValue: null
    },
    {
        converter: o.converters.USVString,
        key: "sameSite",
        allowedValues: [
            "Strict",
            "Lax",
            "None"
        ]
    },
    {
        converter: o.sequenceConverter(o.converters.DOMString),
        key: "unparsed",
        defaultValue: []
    }
]), module.exports = {
    getCookies: function(A) {
        o.argumentLengthCheck(arguments, 1, {
            header: "getCookies"
        }), o.brandCheck(A, n, {
            strict: !1
        });
        const e = A.get("cookie"), t = {};
        if (!e) return t;
        for (const A of e.split(";")){
            const [e, ...r] = A.split("=");
            t[e.trim()] = r.join("=");
        }
        return t;
    },
    deleteCookie: function(A, e, t) {
        o.argumentLengthCheck(arguments, 2, {
            header: "deleteCookie"
        }), o.brandCheck(A, n, {
            strict: !1
        }), e = o.converters.DOMString(e), t = o.converters.DeleteCookieAttributes(t), i(A, {
            name: e,
            value: "",
            expires: new Date(0),
            ...t
        });
    },
    getSetCookies: function(A) {
        o.argumentLengthCheck(arguments, 1, {
            header: "getSetCookies"
        }), o.brandCheck(A, n, {
            strict: !1
        });
        const e = A.getSetCookie();
        return e ? e.map((A)=>r(A)) : [];
    },
    setCookie: i
};
