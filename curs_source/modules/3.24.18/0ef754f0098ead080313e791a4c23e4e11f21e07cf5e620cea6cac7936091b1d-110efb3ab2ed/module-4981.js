"use strict";
const { parseSetCookie: t } = require("./module-4250.js"), { stringify: s } = require("./module-6261.js"), { webidl: o } = require("./module-8005.js"), { Headers: r } = require("./module-2932.js");
function i(e, a) {
    o.argumentLengthCheck(arguments, 2, {
        header: "setCookie"
    }), o.brandCheck(e, r, {
        strict: !1
    }), a = o.converters.Cookie(a);
    s(a) && e.append("Set-Cookie", s(a));
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
        }), o.brandCheck(e, r, {
            strict: !1
        });
        const a = e.get("cookie"), n = {};
        if (!a) return n;
        for (const e of a.split(";")){
            const [a, ...t] = e.split("=");
            n[a.trim()] = t.join("=");
        }
        return n;
    },
    deleteCookie: function(e, a, n) {
        o.argumentLengthCheck(arguments, 2, {
            header: "deleteCookie"
        }), o.brandCheck(e, r, {
            strict: !1
        }), a = o.converters.DOMString(a), n = o.converters.DeleteCookieAttributes(n), i(e, {
            name: a,
            value: "",
            expires: new Date(0),
            ...n
        });
    },
    getSetCookies: function(e) {
        o.argumentLengthCheck(arguments, 1, {
            header: "getSetCookies"
        }), o.brandCheck(e, r, {
            strict: !1
        });
        const a = e.getSetCookie();
        return a ? a.map((e)=>t(e)) : [];
    },
    setCookie: i
};
