"use strict";
const { parseSetCookie: n } = require("./module-58614.js"), { stringify: s } = require("./module-56233.js"), { webidl: o } = require("./module-18193.js"), { Headers: i } = require("./module-72848.js");
function a(e, t) {
    o.argumentLengthCheck(arguments, 2, {
        header: "setCookie"
    }), o.brandCheck(e, i, {
        strict: !1
    }), t = o.converters.Cookie(t);
    s(t) && e.append("Set-Cookie", s(t));
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
        }), o.brandCheck(e, i, {
            strict: !1
        });
        const t = e.get("cookie"), r = {};
        if (!t) return r;
        for (const e of t.split(";")){
            const [t, ...n] = e.split("=");
            r[t.trim()] = n.join("=");
        }
        return r;
    },
    deleteCookie: function(e, t, r) {
        o.argumentLengthCheck(arguments, 2, {
            header: "deleteCookie"
        }), o.brandCheck(e, i, {
            strict: !1
        }), t = o.converters.DOMString(t), r = o.converters.DeleteCookieAttributes(r), a(e, {
            name: t,
            value: "",
            expires: new Date(0),
            ...r
        });
    },
    getSetCookies: function(e) {
        o.argumentLengthCheck(arguments, 1, {
            header: "getSetCookies"
        }), o.brandCheck(e, i, {
            strict: !1
        });
        const t = e.getSetCookie();
        return t ? t.map((e)=>n(e)) : [];
    },
    setCookie: a
};
