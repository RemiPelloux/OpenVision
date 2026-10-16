"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.or = exports.and = exports.not = exports.CodeGen = exports.operators = exports.varKinds = exports.ValueScopeName = exports.ValueScope = exports.Scope = exports.Name = exports.regexpCode = exports.stringify = exports.getProperty = exports.nil = exports.strConcat = exports.str = exports._ = void 0;
const n = require("./module-77442.js"), s = require("./module-77207.js");
var o = require("./module-77442.js");
Object.defineProperty(exports, "_", {
    enumerable: !0,
    get: function() {
        return o._;
    }
}), Object.defineProperty(exports, "str", {
    enumerable: !0,
    get: function() {
        return o.str;
    }
}), Object.defineProperty(exports, "strConcat", {
    enumerable: !0,
    get: function() {
        return o.strConcat;
    }
}), Object.defineProperty(exports, "nil", {
    enumerable: !0,
    get: function() {
        return o.nil;
    }
}), Object.defineProperty(exports, "getProperty", {
    enumerable: !0,
    get: function() {
        return o.getProperty;
    }
}), Object.defineProperty(exports, "stringify", {
    enumerable: !0,
    get: function() {
        return o.stringify;
    }
}), Object.defineProperty(exports, "regexpCode", {
    enumerable: !0,
    get: function() {
        return o.regexpCode;
    }
}), Object.defineProperty(exports, "Name", {
    enumerable: !0,
    get: function() {
        return o.Name;
    }
});
var i = require("./module-77207.js");
Object.defineProperty(exports, "Scope", {
    enumerable: !0,
    get: function() {
        return i.Scope;
    }
}), Object.defineProperty(exports, "ValueScope", {
    enumerable: !0,
    get: function() {
        return i.ValueScope;
    }
}), Object.defineProperty(exports, "ValueScopeName", {
    enumerable: !0,
    get: function() {
        return i.ValueScopeName;
    }
}), Object.defineProperty(exports, "varKinds", {
    enumerable: !0,
    get: function() {
        return i.varKinds;
    }
}), exports.operators = {
    GT: new n._Code(">"),
    GTE: new n._Code(">="),
    LT: new n._Code("<"),
    LTE: new n._Code("<="),
    EQ: new n._Code("==="),
    NEQ: new n._Code("!=="),
    NOT: new n._Code("!"),
    OR: new n._Code("||"),
    AND: new n._Code("&&"),
    ADD: new n._Code("+")
};
class a {
    optimizeNodes() {
        return this;
    }
    optimizeNames(e, t) {
        return this;
    }
}
class c extends a {
    constructor(e, t, r){
        super(), this.varKind = e, this.name = t, this.rhs = r;
    }
    render({ es5: e, _n: t }) {
        const r = e ? s.varKinds.var : this.varKind, n = void 0 === this.rhs ? "" : ` = ${this.rhs}`;
        return `${r} ${this.name}${n};` + t;
    }
    optimizeNames(e, t) {
        if (e[this.name.str]) return this.rhs && (this.rhs = R(this.rhs, e, t)), this;
    }
    get names() {
        return this.rhs instanceof n._CodeOrName ? this.rhs.names : {};
    }
}
class l extends a {
    constructor(e, t, r){
        super(), this.lhs = e, this.rhs = t, this.sideEffects = r;
    }
    render({ _n: e }) {
        return `${this.lhs} = ${this.rhs};` + e;
    }
    optimizeNames(e, t) {
        if (!(this.lhs instanceof n.Name) || e[this.lhs.str] || this.sideEffects) return this.rhs = R(this.rhs, e, t), this;
    }
    get names() {
        return A(this.lhs instanceof n.Name ? {} : {
            ...this.lhs.names
        }, this.rhs);
    }
}
class u extends l {
    constructor(e, t, r, n){
        super(e, r, n), this.op = t;
    }
    render({ _n: e }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + e;
    }
}
class d extends a {
    constructor(e){
        super(), this.label = e, this.names = {};
    }
    render({ _n: e }) {
        return `${this.label}:` + e;
    }
}
class p extends a {
    constructor(e){
        super(), this.label = e, this.names = {};
    }
    render({ _n: e }) {
        return `break${this.label ? ` ${this.label}` : ""};` + e;
    }
}
class m extends a {
    constructor(e){
        super(), this.error = e;
    }
    render({ _n: e }) {
        return `throw ${this.error};` + e;
    }
    get names() {
        return this.error.names;
    }
}
class h extends a {
    constructor(e){
        super(), this.code = e;
    }
    render({ _n: e }) {
        return `${this.code};` + e;
    }
    optimizeNodes() {
        return `${this.code}` ? this : void 0;
    }
    optimizeNames(e, t) {
        return this.code = R(this.code, e, t), this;
    }
    get names() {
        return this.code instanceof n._CodeOrName ? this.code.names : {};
    }
}
class f extends a {
    constructor(e = []){
        super(), this.nodes = e;
    }
    render(e) {
        return this.nodes.reduce((t, r)=>t + r.render(e), "");
    }
    optimizeNodes() {
        const { nodes: e } = this;
        let t = e.length;
        for(; t--;){
            const r = e[t].optimizeNodes();
            Array.isArray(r) ? e.splice(t, 1, ...r) : r ? e[t] = r : e.splice(t, 1);
        }
        return e.length > 0 ? this : void 0;
    }
    optimizeNames(e, t) {
        const { nodes: r } = this;
        let n = r.length;
        for(; n--;){
            const s = r[n];
            s.optimizeNames(e, t) || (M(e, s.names), r.splice(n, 1));
        }
        return r.length > 0 ? this : void 0;
    }
    get names() {
        return this.nodes.reduce((e, t)=>P(e, t.names), {});
    }
}
class g extends f {
    render(e) {
        return "{" + e._n + super.render(e) + "}" + e._n;
    }
}
class y extends f {
}
class w extends g {
}
w.kind = "else";
class v extends g {
    constructor(e, t){
        super(t), this.condition = e;
    }
    render(e) {
        let t = `if(${this.condition})` + super.render(e);
        return this.else && (t += "else " + this.else.render(e)), t;
    }
    optimizeNodes() {
        super.optimizeNodes();
        const e = this.condition;
        if (!0 === e) return this.nodes;
        let t = this.else;
        if (t) {
            const e = t.optimizeNodes();
            t = this.else = Array.isArray(e) ? new w(e) : e;
        }
        return t ? !1 === e ? t instanceof v ? t : t.nodes : this.nodes.length ? this : new v(J(e), t instanceof v ? [
            t
        ] : t.nodes) : !1 !== e && this.nodes.length ? this : void 0;
    }
    optimizeNames(e, t) {
        var r;
        if (this.else = null === (r = this.else) || void 0 === r ? void 0 : r.optimizeNames(e, t), super.optimizeNames(e, t) || this.else) return this.condition = R(this.condition, e, t), this;
    }
    get names() {
        const e = super.names;
        return A(e, this.condition), this.else && P(e, this.else.names), e;
    }
}
v.kind = "if";
class _ extends g {
}
_.kind = "for";
class b extends _ {
    constructor(e){
        super(), this.iteration = e;
    }
    render(e) {
        return `for(${this.iteration})` + super.render(e);
    }
    optimizeNames(e, t) {
        if (super.optimizeNames(e, t)) return this.iteration = R(this.iteration, e, t), this;
    }
    get names() {
        return P(super.names, this.iteration.names);
    }
}
class S extends _ {
    constructor(e, t, r, n){
        super(), this.varKind = e, this.name = t, this.from = r, this.to = n;
    }
    render(e) {
        const t = e.es5 ? s.varKinds.var : this.varKind, { name: r, from: n, to: o } = this;
        return `for(${t} ${r}=${n}; ${r}<${o}; ${r}++)` + super.render(e);
    }
    get names() {
        const e = A(super.names, this.from);
        return A(e, this.to);
    }
}
class k extends _ {
    constructor(e, t, r, n){
        super(), this.loop = e, this.varKind = t, this.name = r, this.iterable = n;
    }
    render(e) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
    }
    optimizeNames(e, t) {
        if (super.optimizeNames(e, t)) return this.iterable = R(this.iterable, e, t), this;
    }
    get names() {
        return P(super.names, this.iterable.names);
    }
}
class x extends g {
    constructor(e, t, r){
        super(), this.name = e, this.args = t, this.async = r;
    }
    render(e) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
    }
}
x.kind = "func";
class E extends f {
    render(e) {
        return "return " + super.render(e);
    }
}
E.kind = "return";
class I extends g {
    render(e) {
        let t = "try" + super.render(e);
        return this.catch && (t += this.catch.render(e)), this.finally && (t += this.finally.render(e)), t;
    }
    optimizeNodes() {
        var e, t;
        return super.optimizeNodes(), null === (e = this.catch) || void 0 === e || e.optimizeNodes(), null === (t = this.finally) || void 0 === t || t.optimizeNodes(), this;
    }
    optimizeNames(e, t) {
        var r, n;
        return super.optimizeNames(e, t), null === (r = this.catch) || void 0 === r || r.optimizeNames(e, t), null === (n = this.finally) || void 0 === n || n.optimizeNames(e, t), this;
    }
    get names() {
        const e = super.names;
        return this.catch && P(e, this.catch.names), this.finally && P(e, this.finally.names), e;
    }
}
class T extends g {
    constructor(e){
        super(), this.error = e;
    }
    render(e) {
        return `catch(${this.error})` + super.render(e);
    }
}
T.kind = "catch";
class C extends g {
    render(e) {
        return "finally" + super.render(e);
    }
}
C.kind = "finally";
function P(e, t) {
    for(const r in t)e[r] = (e[r] || 0) + (t[r] || 0);
    return e;
}
function A(e, t) {
    return t instanceof n._CodeOrName ? P(e, t.names) : e;
}
function R(e, t, r) {
    return e instanceof n.Name ? o(e) : (s = e) instanceof n._Code && s._items.some((e)=>e instanceof n.Name && 1 === t[e.str] && void 0 !== r[e.str]) ? new n._Code(e._items.reduce((e, t)=>(t instanceof n.Name && (t = o(t)), t instanceof n._Code ? e.push(...t._items) : e.push(t), e), [])) : e;
    var s;
    function o(e) {
        const n = r[e.str];
        return void 0 === n || 1 !== t[e.str] ? e : (delete t[e.str], n);
    }
}
function M(e, t) {
    for(const r in t)e[r] = (e[r] || 0) - (t[r] || 0);
}
function J(e) {
    return "boolean" == typeof e || "number" == typeof e || null === e ? !e : n._`!${q(e)}`;
}
exports.CodeGen = class {
    constructor(e, t = {}){
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
            ...t,
            _n: t.lines ? "\n" : ""
        }, this._extScope = e, this._scope = new s.Scope({
            parent: e
        }), this._nodes = [
            new y
        ];
    }
    toString() {
        return this._root.render(this.opts);
    }
    name(e) {
        return this._scope.name(e);
    }
    scopeName(e) {
        return this._extScope.name(e);
    }
    scopeValue(e, t) {
        const r = this._extScope.value(e, t);
        return (this._values[r.prefix] || (this._values[r.prefix] = new Set)).add(r), r;
    }
    getScopeValue(e, t) {
        return this._extScope.getValue(e, t);
    }
    scopeRefs(e) {
        return this._extScope.scopeRefs(e, this._values);
    }
    scopeCode() {
        return this._extScope.scopeCode(this._values);
    }
    _def(e, t, r, n) {
        const s = this._scope.toName(t);
        return void 0 !== r && n && (this._constants[s.str] = r), this._leafNode(new c(e, s, r)), s;
    }
    const(e, t, r) {
        return this._def(s.varKinds.const, e, t, r);
    }
    let(e, t, r) {
        return this._def(s.varKinds.let, e, t, r);
    }
    var(e, t, r) {
        return this._def(s.varKinds.var, e, t, r);
    }
    assign(e, t, r) {
        return this._leafNode(new l(e, t, r));
    }
    add(e, r) {
        return this._leafNode(new u(e, exports.operators.ADD, r));
    }
    code(e) {
        return "function" == typeof e ? e() : e !== n.nil && this._leafNode(new h(e)), this;
    }
    object(...e) {
        const t = [
            "{"
        ];
        for (const [r, s] of e)t.length > 1 && t.push(","), t.push(r), (r !== s || this.opts.es5) && (t.push(":"), (0, n.addCodeArg)(t, s));
        return t.push("}"), new n._Code(t);
    }
    if(e, t, r) {
        if (this._blockNode(new v(e)), t && r) this.code(t).else().code(r).endIf();
        else if (t) this.code(t).endIf();
        else if (r) throw new Error('CodeGen: "else" body without "then" body');
        return this;
    }
    elseIf(e) {
        return this._elseNode(new v(e));
    }
    else() {
        return this._elseNode(new w);
    }
    endIf() {
        return this._endBlockNode(v, w);
    }
    _for(e, t) {
        return this._blockNode(e), t && this.code(t).endFor(), this;
    }
    for(e, t) {
        return this._for(new b(e), t);
    }
    forRange(e, t, r, n, o = this.opts.es5 ? s.varKinds.var : s.varKinds.let) {
        const i = this._scope.toName(e);
        return this._for(new S(o, i, t, r), ()=>n(i));
    }
    forOf(e, t, r, o = s.varKinds.const) {
        const i = this._scope.toName(e);
        if (this.opts.es5) {
            const e = t instanceof n.Name ? t : this.var("_arr", t);
            return this.forRange("_i", 0, n._`${e}.length`, (t)=>{
                this.var(i, n._`${e}[${t}]`), r(i);
            });
        }
        return this._for(new k("of", o, i, t), ()=>r(i));
    }
    forIn(e, t, r, o = this.opts.es5 ? s.varKinds.var : s.varKinds.const) {
        if (this.opts.ownProperties) return this.forOf(e, n._`Object.keys(${t})`, r);
        const i = this._scope.toName(e);
        return this._for(new k("in", o, i, t), ()=>r(i));
    }
    endFor() {
        return this._endBlockNode(_);
    }
    label(e) {
        return this._leafNode(new d(e));
    }
    break(e) {
        return this._leafNode(new p(e));
    }
    return(e) {
        const t = new E;
        if (this._blockNode(t), this.code(e), 1 !== t.nodes.length) throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(E);
    }
    try(e, t, r) {
        if (!t && !r) throw new Error('CodeGen: "try" without "catch" and "finally"');
        const n = new I;
        if (this._blockNode(n), this.code(e), t) {
            const e = this.name("e");
            this._currNode = n.catch = new T(e), t(e);
        }
        return r && (this._currNode = n.finally = new C, this.code(r)), this._endBlockNode(T, C);
    }
    throw(e) {
        return this._leafNode(new m(e));
    }
    block(e, t) {
        return this._blockStarts.push(this._nodes.length), e && this.code(e).endBlock(t), this;
    }
    endBlock(e) {
        const t = this._blockStarts.pop();
        if (void 0 === t) throw new Error("CodeGen: not in self-balancing block");
        const r = this._nodes.length - t;
        if (r < 0 || void 0 !== e && r !== e) throw new Error(`CodeGen: wrong number of nodes: ${r} vs ${e} expected`);
        return this._nodes.length = t, this;
    }
    func(e, t = n.nil, r, s) {
        return this._blockNode(new x(e, t, r)), s && this.code(s).endFunc(), this;
    }
    endFunc() {
        return this._endBlockNode(x);
    }
    optimize(e = 1) {
        for(; e-- > 0;)this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(e) {
        return this._currNode.nodes.push(e), this;
    }
    _blockNode(e) {
        this._currNode.nodes.push(e), this._nodes.push(e);
    }
    _endBlockNode(e, t) {
        const r = this._currNode;
        if (r instanceof e || t && r instanceof t) return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${t ? `${e.kind}/${t.kind}` : e.kind}"`);
    }
    _elseNode(e) {
        const t = this._currNode;
        if (!(t instanceof v)) throw new Error('CodeGen: "else" without "if"');
        return this._currNode = t.else = e, this;
    }
    get _root() {
        return this._nodes[0];
    }
    get _currNode() {
        const e = this._nodes;
        return e[e.length - 1];
    }
    set _currNode(e) {
        const t = this._nodes;
        t[t.length - 1] = e;
    }
}, exports.not = J;
const O = D(exports.operators.AND);
exports.and = function(...e) {
    return e.reduce(O);
};
const B = D(exports.operators.OR);
function D(e) {
    return (t, r)=>t === n.nil ? r : r === n.nil ? t : n._`${q(t)} ${e} ${q(r)}`;
}
function q(e) {
    return e instanceof n.Name ? e : n._`(${e})`;
}
exports.or = function(...e) {
    return e.reduce(B);
};
