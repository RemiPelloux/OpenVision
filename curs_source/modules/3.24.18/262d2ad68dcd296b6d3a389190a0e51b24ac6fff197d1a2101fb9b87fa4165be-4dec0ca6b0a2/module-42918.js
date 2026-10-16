"use strict";
const t = "undefined" != typeof Buffer, r = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, n = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function o(e, o, i) {
    null == i && null !== o && "object" == typeof o && (i = o, o = void 0), t && Buffer.isBuffer(e) && (e = e.toString()), e && 65279 === e.charCodeAt(0) && (e = e.slice(1));
    const a = JSON.parse(e, o);
    if (null === a || "object" != typeof a) return a;
    const l = i && i.protoAction || "error", c = i && i.constructorAction || "error";
    if ("ignore" === l && "ignore" === c) return a;
    if ("ignore" !== l && "ignore" !== c) {
        if (!1 === r.test(e) && !1 === n.test(e)) return a;
    } else if ("ignore" !== l && "ignore" === c) {
        if (!1 === r.test(e)) return a;
    } else if (!1 === n.test(e)) return a;
    return s(a, {
        protoAction: l,
        constructorAction: c,
        safe: i && i.safe
    });
}
function s(e, { protoAction: t = "error", constructorAction: r = "error", safe: n } = {}) {
    let o = [
        e
    ];
    for(; o.length;){
        const e = o;
        o = [];
        for (const s of e){
            if ("ignore" !== t && Object.prototype.hasOwnProperty.call(s, "__proto__")) {
                if (!0 === n) return null;
                if ("error" === t) throw new SyntaxError("Object contains forbidden prototype property");
                delete s.__proto__;
            }
            if ("ignore" !== r && Object.prototype.hasOwnProperty.call(s, "constructor") && Object.prototype.hasOwnProperty.call(s.constructor, "prototype")) {
                if (!0 === n) return null;
                if ("error" === r) throw new SyntaxError("Object contains forbidden prototype property");
                delete s.constructor;
            }
            for(const e in s){
                const t = s[e];
                t && "object" == typeof t && o.push(t);
            }
        }
    }
    return e;
}
function i(e, t, r) {
    const n = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
        return o(e, t, r);
    } finally{
        Error.stackTraceLimit = n;
    }
}
module.exports = i, module.exports.default = i, module.exports.parse = i, module.exports.safeParse = function(e, t) {
    const r = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
        return o(e, t, {
            safe: !0
        });
    } catch (e) {
        return null;
    } finally{
        Error.stackTraceLimit = r;
    }
}, module.exports.scan = s;
