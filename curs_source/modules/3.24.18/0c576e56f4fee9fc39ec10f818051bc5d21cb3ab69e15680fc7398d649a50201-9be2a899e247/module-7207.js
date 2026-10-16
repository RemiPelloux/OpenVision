"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ValueScope = exports.ValueScopeName = exports.Scope = exports.varKinds = exports.UsedValueState = void 0;
const n = require("./module-7442.js");
class o extends Error {
    constructor(e){
        super(`CodeGen: "code" for ${e} not defined`), this.value = e.value;
    }
}
var s;
!function(e) {
    e[e.Started = 0] = "Started", e[e.Completed = 1] = "Completed";
}(s || (exports.UsedValueState = s = {})), exports.varKinds = {
    const: new n.Name("const"),
    let: new n.Name("let"),
    var: new n.Name("var")
};
class i {
    constructor({ prefixes: e, parent: t } = {}){
        this._names = {}, this._prefixes = e, this._parent = t;
    }
    toName(e) {
        return e instanceof n.Name ? e : this.name(e);
    }
    name(e) {
        return new n.Name(this._newName(e));
    }
    _newName(e) {
        return `${e}${(this._names[e] || this._nameGroup(e)).index++}`;
    }
    _nameGroup(e) {
        var t, r;
        if ((null === (r = null === (t = this._parent) || void 0 === t ? void 0 : t._prefixes) || void 0 === r ? void 0 : r.has(e)) || this._prefixes && !this._prefixes.has(e)) throw new Error(`CodeGen: prefix "${e}" is not allowed in this scope`);
        return this._names[e] = {
            prefix: e,
            index: 0
        };
    }
}
exports.Scope = i;
class a extends n.Name {
    constructor(e, t){
        super(t), this.prefix = e;
    }
    setValue(e, { property: t, itemIndex: r }) {
        this.value = e, this.scopePath = n._`.${new n.Name(t)}[${r}]`;
    }
}
exports.ValueScopeName = a;
const c = n._`\n`;
exports.ValueScope = class extends i {
    constructor(e){
        super(e), this._values = {}, this._scope = e.scope, this.opts = {
            ...e,
            _n: e.lines ? c : n.nil
        };
    }
    get() {
        return this._scope;
    }
    name(e) {
        return new a(e, this._newName(e));
    }
    value(e, t) {
        var r;
        if (void 0 === t.ref) throw new Error("CodeGen: ref must be passed in value");
        const n = this.toName(e), { prefix: o } = n, s = null !== (r = t.key) && void 0 !== r ? r : t.ref;
        let i = this._values[o];
        if (i) {
            const e = i.get(s);
            if (e) return e;
        } else i = this._values[o] = new Map;
        i.set(s, n);
        const a = this._scope[o] || (this._scope[o] = []), c = a.length;
        return a[c] = t.ref, n.setValue(t, {
            property: o,
            itemIndex: c
        }), n;
    }
    getValue(e, t) {
        const r = this._values[e];
        if (r) return r.get(t);
    }
    scopeRefs(e, t = this._values) {
        return this._reduceValues(t, (t)=>{
            if (void 0 === t.scopePath) throw new Error(`CodeGen: name "${t}" has no value`);
            return n._`${e}${t.scopePath}`;
        });
    }
    scopeCode(e = this._values, t, r) {
        return this._reduceValues(e, (e)=>{
            if (void 0 === e.value) throw new Error(`CodeGen: name "${e}" has no value`);
            return e.value.code;
        }, t, r);
    }
    _reduceValues(e, r, i = {}, a) {
        let c = n.nil;
        for(const u in e){
            const l = e[u];
            if (!l) continue;
            const d = i[u] = i[u] || new Map;
            l.forEach((e)=>{
                if (d.has(e)) return;
                d.set(e, s.Started);
                let i = r(e);
                if (i) {
                    const r = this.opts.es5 ? exports.varKinds.var : exports.varKinds.const;
                    c = n._`${c}${r} ${e} = ${i};${this.opts._n}`;
                } else {
                    if (!(i = null == a ? void 0 : a(e))) throw new o(e);
                    c = n._`${c}${i}${this.opts._n}`;
                }
                d.set(e, s.Completed);
            });
        }
        return c;
    }
};
