"use strict";
const { parseSetCookie: a } = require("./module-4250.js"), { stringify: s } = require("./module-6261.js"), { webidl: o } = require("./module-8005.js"), { Headers: r } = require("./module-2932.js");
function i(e, n) {
    o.argumentLengthCheck(arguments, 2, {
        header: "setCookie"
    }), o.brandCheck(e, r, {
        strict: !1
    }), n = o.converters.Cookie(n);
    s(n) && e.append("Set-Cookie", s(n));
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
        const n = e.get("cookie"), t = {};
        if (!n) return t;
        for (const e of n.split(";")){
            const [n, ...a] = e.split("=");
            t[n.trim()] = a.join("=");
        }
        return t;
    },
    deleteCookie: function(e, n, t) {
        o.argumentLengthCheck(arguments, 2, {
            header: "deleteCookie"
        }), o.brandCheck(e, r, {
            strict: !1
        }), n = o.converters.DOMString(n), t = o.converters.DeleteCookieAttributes(t), i(e, {
            name: n,
            value: "",
            expires: new Date(0),
            ...t
        });
    },
    getSetCookies: function(e) {
        o.argumentLengthCheck(arguments, 1, {
            header: "getSetCookies"
        }), o.brandCheck(e, r, {
            strict: !1
        });
        const n = e.getSetCookie();
        return n ? n.map((e)=>a(e)) : [];
    },
    setCookie: i
};
