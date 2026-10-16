"use strict";
const n = require("./module-9963.js").a, r = require("./module-9428.js").d, o = require("./module-9428.js").t, s = require("./module-7784.js"), i = [
    "seq",
    "seqof",
    "set",
    "setof",
    "objid",
    "bool",
    "gentime",
    "utctime",
    "null_",
    "enum",
    "int",
    "objDesc",
    "bitstr",
    "bmpstr",
    "charstr",
    "genstr",
    "graphstr",
    "ia5str",
    "iso646str",
    "numstr",
    "octstr",
    "printstr",
    "t61str",
    "unistr",
    "utf8str",
    "videostr"
], a = [
    "key",
    "obj",
    "use",
    "optional",
    "explicit",
    "implicit",
    "def",
    "choice",
    "any",
    "contains"
].concat(i);
function c(e, t, A) {
    const n = {};
    this._baseState = n, n.name = A, n.enc = e, n.parent = t || null, n.children = null, n.tag = null, n.args = null, n.reverseArgs = null, n.choice = null, n.optional = !1, n.any = !1, n.obj = !1, n.use = null, n.useDecoder = null, n.key = null, n.default = null, n.explicit = null, n.implicit = null, n.contains = null, n.parent || (n.children = [], this._wrap());
}
module.exports = c;
const l = [
    "enc",
    "parent",
    "children",
    "tag",
    "args",
    "reverseArgs",
    "choice",
    "optional",
    "any",
    "obj",
    "use",
    "alteredUse",
    "key",
    "default",
    "explicit",
    "implicit",
    "contains"
];
c.prototype.clone = function() {
    const e = this._baseState, t = {};
    l.forEach(function(A) {
        t[A] = e[A];
    });
    const A = new this.constructor(t.parent);
    return A._baseState = t, A;
}, c.prototype._wrap = function() {
    const e = this._baseState;
    a.forEach(function(t) {
        this[t] = function() {
            const A = new this.constructor(this);
            return e.children.push(A), A[t].apply(A, arguments);
        };
    }, this);
}, c.prototype._init = function(e) {
    const t = this._baseState;
    s(null === t.parent), e.call(this), t.children = t.children.filter(function(e) {
        return e._baseState.parent === this;
    }, this), s.equal(t.children.length, 1, "Root node can have only one child");
}, c.prototype._useArgs = function(e) {
    const t = this._baseState, A = e.filter(function(e) {
        return e instanceof this.constructor;
    }, this);
    e = e.filter(function(e) {
        return !(e instanceof this.constructor);
    }, this), 0 !== A.length && (s(null === t.children), t.children = A, A.forEach(function(e) {
        e._baseState.parent = this;
    }, this)), 0 !== e.length && (s(null === t.args), t.args = e, t.reverseArgs = e.map(function(e) {
        if ("object" != typeof e || e.constructor !== Object) return e;
        const t = {};
        return Object.keys(e).forEach(function(A) {
            A == (0 | A) && (A |= 0);
            const n = e[A];
            t[n] = A;
        }), t;
    }));
}, [
    "_peekTag",
    "_decodeTag",
    "_use",
    "_decodeStr",
    "_decodeObjid",
    "_decodeTime",
    "_decodeNull",
    "_decodeInt",
    "_decodeBool",
    "_decodeList",
    "_encodeComposite",
    "_encodeStr",
    "_encodeObjid",
    "_encodeTime",
    "_encodeNull",
    "_encodeInt",
    "_encodeBool"
].forEach(function(e) {
    c.prototype[e] = function() {
        const t = this._baseState;
        throw new Error(e + " not implemented for encoding: " + t.enc);
    };
}), i.forEach(function(e) {
    c.prototype[e] = function() {
        const t = this._baseState, A = Array.prototype.slice.call(arguments);
        return s(null === t.tag), t.tag = e, this._useArgs(A), this;
    };
}), c.prototype.use = function(e) {
    s(e);
    const t = this._baseState;
    return s(null === t.use), t.use = e, this;
}, c.prototype.optional = function() {
    return this._baseState.optional = !0, this;
}, c.prototype.def = function(e) {
    const t = this._baseState;
    return s(null === t.default), t.default = e, t.optional = !0, this;
}, c.prototype.explicit = function(e) {
    const t = this._baseState;
    return s(null === t.explicit && null === t.implicit), t.explicit = e, this;
}, c.prototype.implicit = function(e) {
    const t = this._baseState;
    return s(null === t.explicit && null === t.implicit), t.implicit = e, this;
}, c.prototype.obj = function() {
    const e = this._baseState, t = Array.prototype.slice.call(arguments);
    return e.obj = !0, 0 !== t.length && this._useArgs(t), this;
}, c.prototype.key = function(e) {
    const t = this._baseState;
    return s(null === t.key), t.key = e, this;
}, c.prototype.any = function() {
    return this._baseState.any = !0, this;
}, c.prototype.choice = function(e) {
    const t = this._baseState;
    return s(null === t.choice), t.choice = e, this._useArgs(Object.keys(e).map(function(t) {
        return e[t];
    })), this;
}, c.prototype.contains = function(e) {
    const t = this._baseState;
    return s(null === t.use), t.contains = e, this;
}, c.prototype._decode = function(e, t) {
    const A = this._baseState;
    if (null === A.parent) return e.wrapResult(A.children[0]._decode(e, t));
    let n, r = A.default, s = !0, i = null;
    if (null !== A.key && (i = e.enterKey(A.key)), A.optional) {
        let n = null;
        if (null !== A.explicit ? n = A.explicit : null !== A.implicit ? n = A.implicit : null !== A.tag && (n = A.tag), null !== n || A.any) {
            if (s = this._peekTag(e, n, A.any), e.isError(s)) return s;
        } else {
            const n = e.save();
            try {
                null === A.choice ? this._decodeGeneric(A.tag, e, t) : this._decodeChoice(e, t), s = !0;
            } catch (e) {
                s = !1;
            }
            e.restore(n);
        }
    }
    if (A.obj && s && (n = e.enterObject()), s) {
        if (null !== A.explicit) {
            const t = this._decodeTag(e, A.explicit);
            if (e.isError(t)) return t;
            e = t;
        }
        const n = e.offset;
        if (null === A.use && null === A.choice) {
            let t;
            A.any && (t = e.save());
            const n = this._decodeTag(e, null !== A.implicit ? A.implicit : A.tag, A.any);
            if (e.isError(n)) return n;
            A.any ? r = e.raw(t) : e = n;
        }
        if (t && t.track && null !== A.tag && t.track(e.path(), n, e.length, "tagged"), t && t.track && null !== A.tag && t.track(e.path(), e.offset, e.length, "content"), A.any || (r = null === A.choice ? this._decodeGeneric(A.tag, e, t) : this._decodeChoice(e, t)), e.isError(r)) return r;
        if (A.any || null !== A.choice || null === A.children || A.children.forEach(function(A) {
            A._decode(e, t);
        }), A.contains && ("octstr" === A.tag || "bitstr" === A.tag)) {
            const n = new o(r);
            r = this._getUse(A.contains, e._reporterState.obj)._decode(n, t);
        }
    }
    return A.obj && s && (r = e.leaveObject(n)), null === A.key || null === r && !0 !== s ? null !== i && e.exitKey(i) : e.leaveKey(i, A.key, r), r;
}, c.prototype._decodeGeneric = function(e, t, A) {
    const n = this._baseState;
    return "seq" === e || "set" === e ? null : "seqof" === e || "setof" === e ? this._decodeList(t, e, n.args[0], A) : /str$/.test(e) ? this._decodeStr(t, e, A) : "objid" === e && n.args ? this._decodeObjid(t, n.args[0], n.args[1], A) : "objid" === e ? this._decodeObjid(t, null, null, A) : "gentime" === e || "utctime" === e ? this._decodeTime(t, e, A) : "null_" === e ? this._decodeNull(t, A) : "bool" === e ? this._decodeBool(t, A) : "objDesc" === e ? this._decodeStr(t, e, A) : "int" === e || "enum" === e ? this._decodeInt(t, n.args && n.args[0], A) : null !== n.use ? this._getUse(n.use, t._reporterState.obj)._decode(t, A) : t.error("unknown tag: " + e);
}, c.prototype._getUse = function(e, t) {
    const A = this._baseState;
    return A.useDecoder = this._use(e, t), s(null === A.useDecoder._baseState.parent), A.useDecoder = A.useDecoder._baseState.children[0], A.implicit !== A.useDecoder._baseState.implicit && (A.useDecoder = A.useDecoder.clone(), A.useDecoder._baseState.implicit = A.implicit), A.useDecoder;
}, c.prototype._decodeChoice = function(e, t) {
    const A = this._baseState;
    let n = null, r = !1;
    return Object.keys(A.choice).some(function(o) {
        const s = e.save(), i = A.choice[o];
        try {
            const A = i._decode(e, t);
            if (e.isError(A)) return !1;
            n = {
                type: o,
                value: A
            }, r = !0;
        } catch (t) {
            return e.restore(s), !1;
        }
        return !0;
    }, this), r ? n : e.error("Choice not matched");
}, c.prototype._createEncoderBuffer = function(e) {
    return new r(e, this.reporter);
}, c.prototype._encode = function(e, t, A) {
    const n = this._baseState;
    if (null !== n.default && n.default === e) return;
    const r = this._encodeValue(e, t, A);
    return void 0 === r || this._skipDefault(r, t, A) ? void 0 : r;
}, c.prototype._encodeValue = function(e, t, A) {
    const r = this._baseState;
    if (null === r.parent) return r.children[0]._encode(e, t || new n);
    let o = null;
    if (this.reporter = t, r.optional && void 0 === e) {
        if (null === r.default) return;
        e = r.default;
    }
    let s = null, i = !1;
    if (r.any) o = this._createEncoderBuffer(e);
    else if (r.choice) o = this._encodeChoice(e, t);
    else if (r.contains) s = this._getUse(r.contains, A)._encode(e, t), i = !0;
    else if (r.children) s = r.children.map(function(A) {
        if ("null_" === A._baseState.tag) return A._encode(null, t, e);
        if (null === A._baseState.key) return t.error("Child should have a key");
        const n = t.enterKey(A._baseState.key);
        if ("object" != typeof e) return t.error("Child expected, but input is not object");
        const r = A._encode(e[A._baseState.key], t, e);
        return t.leaveKey(n), r;
    }, this).filter(function(e) {
        return e;
    }), s = this._createEncoderBuffer(s);
    else if ("seqof" === r.tag || "setof" === r.tag) {
        if (!r.args || 1 !== r.args.length) return t.error("Too many args for : " + r.tag);
        if (!Array.isArray(e)) return t.error("seqof/setof, but data is not Array");
        const A = this.clone();
        A._baseState.implicit = null, s = this._createEncoderBuffer(e.map(function(A) {
            const n = this._baseState;
            return this._getUse(n.args[0], e)._encode(A, t);
        }, A));
    } else null !== r.use ? o = this._getUse(r.use, A)._encode(e, t) : (s = this._encodePrimitive(r.tag, e), i = !0);
    if (!r.any && null === r.choice) {
        const e = null !== r.implicit ? r.implicit : r.tag, A = null === r.implicit ? "universal" : "context";
        null === e ? null === r.use && t.error("Tag could be omitted only for .use()") : null === r.use && (o = this._encodeComposite(e, i, A, s));
    }
    return null !== r.explicit && (o = this._encodeComposite(r.explicit, !1, "context", o)), o;
}, c.prototype._encodeChoice = function(e, t) {
    const A = this._baseState, n = A.choice[e.type];
    return n || s(!1, e.type + " not found in " + JSON.stringify(Object.keys(A.choice))), n._encode(e.value, t);
}, c.prototype._encodePrimitive = function(e, t) {
    const A = this._baseState;
    if (/str$/.test(e)) return this._encodeStr(t, e);
    if ("objid" === e && A.args) return this._encodeObjid(t, A.reverseArgs[0], A.args[1]);
    if ("objid" === e) return this._encodeObjid(t, null, null);
    if ("gentime" === e || "utctime" === e) return this._encodeTime(t, e);
    if ("null_" === e) return this._encodeNull();
    if ("int" === e || "enum" === e) return this._encodeInt(t, A.args && A.reverseArgs[0]);
    if ("bool" === e) return this._encodeBool(t);
    if ("objDesc" === e) return this._encodeStr(t, e);
    throw new Error("Unsupported tag: " + e);
}, c.prototype._isNumstr = function(e) {
    return /^[0-9 ]*$/.test(e);
}, c.prototype._isPrintstr = function(e) {
    return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(e);
};
