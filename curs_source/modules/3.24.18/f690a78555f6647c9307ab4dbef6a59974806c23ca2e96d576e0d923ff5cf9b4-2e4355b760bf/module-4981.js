"use strict";
const { parseSetCookie: n } = require("./module-4250.js"), { stringify: r } = require("./module-6261.js"), { webidl: o } = require("./module-8005.js"), { Headers: s } = require("./module-2932.js");
function a(e, A) {
    o.argumentLengthCheck(arguments, 2, {
        header: "setCookie"
    }), o.brandCheck(e, s, {
        strict: !1
    }), A = o.converters.Cookie(A);
    r(A) && e.append("Set-Cookie", r(A));
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
        converter: o.nullableConverter((e)=>"number" == typeof e ? o.converters["unsigned long long"](e) : new Date(e)),
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
    getCookies: function(e) {
        o.argumentLengthCheck(arguments, 1, {
            header: "getCookies"
        }), o.brandCheck(e, s, {
            strict: !1
        });
        const A = e.get("cookie"), t = {};
        if (!A) return t;
        for (const e of A.split(";")){
            const [A, ...n] = e.split("=");
            t[A.trim()] = n.join("=");
        }
        return t;
    },
    deleteCookie: function(e, A, t) {
        o.argumentLengthCheck(arguments, 2, {
            header: "deleteCookie"
        }), o.brandCheck(e, s, {
            strict: !1
        }), A = o.converters.DOMString(A), t = o.converters.DeleteCookieAttributes(t), a(e, {
            name: A,
            value: "",
            expires: new Date(0),
            ...t
        });
    },
    getSetCookies: function(e) {
        o.argumentLengthCheck(arguments, 1, {
            header: "getSetCookies"
        }), o.brandCheck(e, s, {
            strict: !1
        });
        const A = e.getSetCookie();
        return A ? A.map((e)=>n(e)) : [];
    },
    setCookie: a
};
