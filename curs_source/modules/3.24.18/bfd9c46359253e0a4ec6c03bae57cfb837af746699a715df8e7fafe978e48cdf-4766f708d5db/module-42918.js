"use strict";
const t = "undefined" != typeof Buffer, r = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, n = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function s(e, s, i) {
    null == i && null !== s && "object" == typeof s && (i = s, s = void 0), t && Buffer.isBuffer(e) && (e = e.toString()), e && 65279 === e.charCodeAt(0) && (e = e.slice(1));
    const a = JSON.parse(e, s);
    if (null === a || "object" != typeof a) return a;
    const c = i && i.protoAction || "error", l = i && i.constructorAction || "error";
    if ("ignore" === c && "ignore" === l) return a;
    if ("ignore" !== c && "ignore" !== l) {
        if (!1 === r.test(e) && !1 === n.test(e)) return a;
    } else if ("ignore" !== c && "ignore" === l) {
        if (!1 === r.test(e)) return a;
    } else if (!1 === n.test(e)) return a;
    return o(a, {
        protoAction: c,
        constructorAction: l,
        safe: i && i.safe
    });
}
function o(e, { protoAction: t = "error", constructorAction: r = "error", safe: n } = {}) {
    let s = [
        e
    ];
    for(; s.length;){
        const e = s;
        s = [];
        for (const o of e){
            if ("ignore" !== t && Object.prototype.hasOwnProperty.call(o, "__proto__")) {
                if (!0 === n) return null;
                if ("error" === t) throw new SyntaxError("Object contains forbidden prototype property");
                delete o.__proto__;
            }
            if ("ignore" !== r && Object.prototype.hasOwnProperty.call(o, "constructor") && Object.prototype.hasOwnProperty.call(o.constructor, "prototype")) {
                if (!0 === n) return null;
                if ("error" === r) throw new SyntaxError("Object contains forbidden prototype property");
                delete o.constructor;
            }
            for(const e in o){
                const t = o[e];
                t && "object" == typeof t && s.push(t);
            }
        }
    }
    return e;
}
function i(e, t, r) {
    const n = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
        return s(e, t, r);
    } finally{
        Error.stackTraceLimit = n;
    }
}
module.exports = i, module.exports.default = i, module.exports.parse = i, module.exports.safeParse = function(e, t) {
    const r = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
        return s(e, t, {
            safe: !0
        });
    } catch (e) {
        return null;
    } finally{
        Error.stackTraceLimit = r;
    }
}, module.exports.scan = o;
