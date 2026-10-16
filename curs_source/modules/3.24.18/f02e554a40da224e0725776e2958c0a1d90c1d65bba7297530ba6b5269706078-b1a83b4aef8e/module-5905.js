"use strict";
const { parseSetCookie: n } = require("./module-8614.js"), { stringify: s } = require("./module-6233.js"), { webidl: i } = require("./module-8193.js"), { Headers: o } = require("./module-2848.js");
function a(t, e) {
    i.argumentLengthCheck(arguments, 2, {
        header: "setCookie"
    }), i.brandCheck(t, o, {
        strict: !1
    }), e = i.converters.Cookie(e);
    s(e) && t.append("Set-Cookie", s(e));
}
i.converters.DeleteCookieAttributes = i.dictionaryConverter([
    {
        converter: i.nullableConverter(i.converters.DOMString),
        key: "path",
        defaultValue: null
    },
    {
        converter: i.nullableConverter(i.converters.DOMString),
        key: "domain",
        defaultValue: null
    }
]), i.converters.Cookie = i.dictionaryConverter([
    {
        converter: i.converters.DOMString,
        key: "name"
    },
    {
        converter: i.converters.DOMString,
        key: "value"
    },
    {
        converter: i.nullableConverter((t)=>"number" == typeof t ? i.converters["unsigned long long"](t) : new Date(t)),
        key: "expires",
        defaultValue: null
    },
    {
        converter: i.nullableConverter(i.converters["long long"]),
        key: "maxAge",
        defaultValue: null
    },
    {
        converter: i.nullableConverter(i.converters.DOMString),
        key: "domain",
        defaultValue: null
    },
    {
        converter: i.nullableConverter(i.converters.DOMString),
        key: "path",
        defaultValue: null
    },
    {
        converter: i.nullableConverter(i.converters.boolean),
        key: "secure",
        defaultValue: null
    },
    {
        converter: i.nullableConverter(i.converters.boolean),
        key: "httpOnly",
        defaultValue: null
    },
    {
        converter: i.converters.USVString,
        key: "sameSite",
        allowedValues: [
            "Strict",
            "Lax",
            "None"
        ]
    },
    {
        converter: i.sequenceConverter(i.converters.DOMString),
        key: "unparsed",
        defaultValue: []
    }
]), module.exports = {
    getCookies: function(t) {
        i.argumentLengthCheck(arguments, 1, {
            header: "getCookies"
        }), i.brandCheck(t, o, {
            strict: !1
        });
        const e = t.get("cookie"), r = {};
        if (!e) return r;
        for (const t of e.split(";")){
            const [e, ...n] = t.split("=");
            r[e.trim()] = n.join("=");
        }
        return r;
    },
    deleteCookie: function(t, e, r) {
        i.argumentLengthCheck(arguments, 2, {
            header: "deleteCookie"
        }), i.brandCheck(t, o, {
            strict: !1
        }), e = i.converters.DOMString(e), r = i.converters.DeleteCookieAttributes(r), a(t, {
            name: e,
            value: "",
            expires: new Date(0),
            ...r
        });
    },
    getSetCookies: function(t) {
        i.argumentLengthCheck(arguments, 1, {
            header: "getSetCookies"
        }), i.brandCheck(t, o, {
            strict: !1
        });
        const e = t.getSetCookie();
        return e ? e.map((t)=>n(t)) : [];
    },
    setCookie: a
};
