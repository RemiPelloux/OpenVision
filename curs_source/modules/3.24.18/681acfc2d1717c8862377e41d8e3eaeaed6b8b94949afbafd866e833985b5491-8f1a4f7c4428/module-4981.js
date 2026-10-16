"use strict";
const { parseSetCookie: n } = require("./module-4250.js"), { stringify: r } = require("./module-6261.js"), { webidl: o } = require("./module-8005.js"), { Headers: s } = require("./module-2932.js");
function i(e, t) {
    o.argumentLengthCheck(arguments, 2, {
        header: "setCookie"
    }), o.brandCheck(e, s, {
        strict: !1
    }), t = o.converters.Cookie(t);
    r(t) && e.append("Set-Cookie", r(t));
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
        const t = e.get("cookie"), A = {};
        if (!t) return A;
        for (const e of t.split(";")){
            const [t, ...n] = e.split("=");
            A[t.trim()] = n.join("=");
        }
        return A;
    },
    deleteCookie: function(e, t, A) {
        o.argumentLengthCheck(arguments, 2, {
            header: "deleteCookie"
        }), o.brandCheck(e, s, {
            strict: !1
        }), t = o.converters.DOMString(t), A = o.converters.DeleteCookieAttributes(A), i(e, {
            name: t,
            value: "",
            expires: new Date(0),
            ...A
        });
    },
    getSetCookies: function(e) {
        o.argumentLengthCheck(arguments, 1, {
            header: "getSetCookies"
        }), o.brandCheck(e, s, {
            strict: !1
        });
        const t = e.getSetCookie();
        return t ? t.map((e)=>n(e)) : [];
    },
    setCookie: i
};
