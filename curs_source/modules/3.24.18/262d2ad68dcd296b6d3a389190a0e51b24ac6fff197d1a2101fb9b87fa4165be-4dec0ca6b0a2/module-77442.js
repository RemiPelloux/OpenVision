"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.regexpCode = exports.getEsmExportName = exports.getProperty = exports.safeStringify = exports.stringify = exports.strConcat = exports.addCodeArg = exports.str = exports._ = exports.nil = exports._Code = exports.Name = exports.IDENTIFIER = exports._CodeOrName = void 0;
class r {
}
exports._CodeOrName = r, exports.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
class n extends r {
    constructor(e){
        if (super(), !exports.IDENTIFIER.test(e)) throw new Error("CodeGen: name must be a valid identifier");
        this.str = e;
    }
    toString() {
        return this.str;
    }
    emptyStr() {
        return !1;
    }
    get names() {
        return {
            [this.str]: 1
        };
    }
}
exports.Name = n;
class o extends r {
    constructor(e){
        super(), this._items = "string" == typeof e ? [
            e
        ] : e;
    }
    toString() {
        return this.str;
    }
    emptyStr() {
        if (this._items.length > 1) return !1;
        const e = this._items[0];
        return "" === e || '""' === e;
    }
    get str() {
        var e;
        return null !== (e = this._str) && void 0 !== e ? e : this._str = this._items.reduce((e, t)=>`${e}${t}`, "");
    }
    get names() {
        var e;
        return null !== (e = this._names) && void 0 !== e ? e : this._names = this._items.reduce((e, t)=>(t instanceof n && (e[t.str] = (e[t.str] || 0) + 1), e), {});
    }
}
function s(e, ...t) {
    const r = [
        e[0]
    ];
    let n = 0;
    for(; n < t.length;)l(r, t[n]), r.push(e[++n]);
    return new o(r);
}
exports._Code = o, exports.nil = new o(""), exports._ = s;
const i = new o("+");
function a(e, ...t) {
    const r = [
        u(e[0])
    ];
    let n = 0;
    for(; n < t.length;)r.push(i), l(r, t[n]), r.push(i, u(e[++n]));
    return function(e) {
        let t = 1;
        for(; t < e.length - 1;){
            if (e[t] === i) {
                const r = c(e[t - 1], e[t + 1]);
                if (void 0 !== r) {
                    e.splice(t - 1, 3, r);
                    continue;
                }
                e[t++] = "+";
            }
            t++;
        }
    }(r), new o(r);
}
function l(e, t) {
    var r;
    t instanceof o ? e.push(...t._items) : t instanceof n ? e.push(t) : e.push("number" == typeof (r = t) || "boolean" == typeof r || null === r ? r : u(Array.isArray(r) ? r.join(",") : r));
}
function c(e, t) {
    if ('""' === t) return e;
    if ('""' === e) return t;
    if ("string" == typeof e) {
        if (t instanceof n || '"' !== e[e.length - 1]) return;
        return "string" != typeof t ? `${e.slice(0, -1)}${t}"` : '"' === t[0] ? e.slice(0, -1) + t.slice(1) : void 0;
    }
    return "string" != typeof t || '"' !== t[0] || e instanceof n ? void 0 : `"${e}${t.slice(1)}`;
}
function u(e) {
    return JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
exports.str = a, exports.addCodeArg = l, exports.strConcat = function(e, t) {
    return t.emptyStr() ? e : e.emptyStr() ? t : a`${e}${t}`;
}, exports.stringify = function(e) {
    return new o(u(e));
}, exports.safeStringify = u, exports.getProperty = function(e) {
    return "string" == typeof e && exports.IDENTIFIER.test(e) ? new o(`.${e}`) : s`[${e}]`;
}, exports.getEsmExportName = function(e) {
    if ("string" == typeof e && exports.IDENTIFIER.test(e)) return new o(`${e}`);
    throw new Error(`CodeGen: invalid export name: ${e}, use explicit $id name mapping`);
}, exports.regexpCode = function(e) {
    return new o(e.toString());
};
