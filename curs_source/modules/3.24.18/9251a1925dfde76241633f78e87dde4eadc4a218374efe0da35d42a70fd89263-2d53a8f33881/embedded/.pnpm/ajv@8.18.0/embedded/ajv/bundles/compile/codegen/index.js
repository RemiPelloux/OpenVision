import { require_code2 } from "./code.js";
import { require_scope } from "./scope.js";
var __wakaru_require_codegen_cache;
export function require_codegen() {
if (__wakaru_require_codegen_cache) return __wakaru_require_codegen_cache;
var exports2 = {};
__wakaru_require_codegen_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.or = exports2.and = exports2.not = exports2.CodeGen = exports2.operators = exports2.varKinds = exports2.ValueScopeName = exports2.ValueScope = exports2.Scope = exports2.Name = exports2.regexpCode = exports2.stringify = exports2.getProperty = exports2.nil = exports2.strConcat = exports2.str = exports2._ = void 0;
var code_1 = require_code2();
var scope_1 = require_scope();
var code_2 = require_code2();
Object.defineProperty(exports2, "_", {
    enumerable: true,
    get: function() {
        return code_2._;
    }
});
Object.defineProperty(exports2, "str", {
    enumerable: true,
    get: function() {
        return code_2.str;
    }
});
Object.defineProperty(exports2, "strConcat", {
    enumerable: true,
    get: function() {
        return code_2.strConcat;
    }
});
Object.defineProperty(exports2, "nil", {
    enumerable: true,
    get: function() {
        return code_2.nil;
    }
});
Object.defineProperty(exports2, "getProperty", {
    enumerable: true,
    get: function() {
        return code_2.getProperty;
    }
});
Object.defineProperty(exports2, "stringify", {
    enumerable: true,
    get: function() {
        return code_2.stringify;
    }
});
Object.defineProperty(exports2, "regexpCode", {
    enumerable: true,
    get: function() {
        return code_2.regexpCode;
    }
});
Object.defineProperty(exports2, "Name", {
    enumerable: true,
    get: function() {
        return code_2.Name;
    }
});
var scope_2 = require_scope();
Object.defineProperty(exports2, "Scope", {
    enumerable: true,
    get: function() {
        return scope_2.Scope;
    }
});
Object.defineProperty(exports2, "ValueScope", {
    enumerable: true,
    get: function() {
        return scope_2.ValueScope;
    }
});
Object.defineProperty(exports2, "ValueScopeName", {
    enumerable: true,
    get: function() {
        return scope_2.ValueScopeName;
    }
});
Object.defineProperty(exports2, "varKinds", {
    enumerable: true,
    get: function() {
        return scope_2.varKinds;
    }
});
exports2.operators = {
    GT: new code_1._Code(">"),
    GTE: new code_1._Code(">="),
    LT: new code_1._Code("<"),
    LTE: new code_1._Code("<="),
    EQ: new code_1._Code("==="),
    NEQ: new code_1._Code("!=="),
    NOT: new code_1._Code("!"),
    OR: new code_1._Code("||"),
    AND: new code_1._Code("&&"),
    ADD: new code_1._Code("+")
};
var Node2 = class {
    optimizeNodes() {
        return this;
    }
    optimizeNames(_names, _constants) {
        return this;
    }
};
var Def = class extends Node2 {
    constructor(varKind, name17, rhs){
        super();
        this.varKind = varKind;
        this.name = name17;
        this.rhs = rhs;
    }
    render({ es5, _n: _n2 }) {
        const varKind = es5 ? scope_1.varKinds.var : this.varKind;
        const rhs = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${varKind} ${this.name}${rhs};` + _n2;
    }
    optimizeNames(names3, constants14) {
        if (!names3[this.name.str]) return;
        if (this.rhs) this.rhs = optimizeExpr(this.rhs, names3, constants14);
        return this;
    }
    get names() {
        return this.rhs instanceof code_1._CodeOrName ? this.rhs.names : {};
    }
};
var Assign = class extends Node2 {
    constructor(lhs, rhs, sideEffects){
        super();
        this.lhs = lhs;
        this.rhs = rhs;
        this.sideEffects = sideEffects;
    }
    render({ _n: _n2 }) {
        return `${this.lhs} = ${this.rhs};` + _n2;
    }
    optimizeNames(names3, constants14) {
        if (this.lhs instanceof code_1.Name && !names3[this.lhs.str] && !this.sideEffects) return;
        this.rhs = optimizeExpr(this.rhs, names3, constants14);
        return this;
    }
    get names() {
        const names3 = this.lhs instanceof code_1.Name ? {} : {
            ...this.lhs.names
        };
        return addExprNames(names3, this.rhs);
    }
};
var AssignOp = class extends Assign {
    constructor(lhs, op, rhs, sideEffects){
        super(lhs, rhs, sideEffects);
        this.op = op;
    }
    render({ _n: _n2 }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + _n2;
    }
};
var Label2 = class extends Node2 {
    constructor(label){
        super();
        this.label = label;
        this.names = {};
    }
    render({ _n: _n2 }) {
        return `${this.label}:` + _n2;
    }
};
var Break = class extends Node2 {
    constructor(label){
        super();
        this.label = label;
        this.names = {};
    }
    render({ _n: _n2 }) {
        const label = this.label ? ` ${this.label}` : "";
        return `break${label};` + _n2;
    }
};
var Throw = class extends Node2 {
    constructor(error3){
        super();
        this.error = error3;
    }
    render({ _n: _n2 }) {
        return `throw ${this.error};` + _n2;
    }
    get names() {
        return this.error.names;
    }
};
var AnyCode = class extends Node2 {
    constructor(code){
        super();
        this.code = code;
    }
    render({ _n: _n2 }) {
        return `${this.code};` + _n2;
    }
    optimizeNodes() {
        return `${this.code}` ? this : void 0;
    }
    optimizeNames(names3, constants14) {
        this.code = optimizeExpr(this.code, names3, constants14);
        return this;
    }
    get names() {
        return this.code instanceof code_1._CodeOrName ? this.code.names : {};
    }
};
var ParentNode = class extends Node2 {
    constructor(nodes = []){
        super();
        this.nodes = nodes;
    }
    render(opts) {
        return this.nodes.reduce((code, n)=>code + n.render(opts), "");
    }
    optimizeNodes() {
        const { nodes } = this;
        let i = nodes.length;
        while(i--){
            const n = nodes[i].optimizeNodes();
            if (Array.isArray(n)) nodes.splice(i, 1, ...n);
            else if (n) nodes[i] = n;
            else nodes.splice(i, 1);
        }
        return nodes.length > 0 ? this : void 0;
    }
    optimizeNames(names3, constants14) {
        const { nodes } = this;
        let i = nodes.length;
        while(i--){
            const n = nodes[i];
            if (n.optimizeNames(names3, constants14)) continue;
            subtractNames(names3, n.names);
            nodes.splice(i, 1);
        }
        return nodes.length > 0 ? this : void 0;
    }
    get names() {
        return this.nodes.reduce((names3, n)=>addNames(names3, n.names), {});
    }
};
var BlockNode = class extends ParentNode {
    render(opts) {
        return "{" + opts._n + super.render(opts) + "}" + opts._n;
    }
};
var Root = class extends ParentNode {
};
var Else = class extends BlockNode {
};
Else.kind = "else";
var If = class _If extends BlockNode {
    constructor(condition, nodes){
        super(nodes);
        this.condition = condition;
    }
    render(opts) {
        let code = `if(${this.condition})` + super.render(opts);
        if (this.else) code += "else " + this.else.render(opts);
        return code;
    }
    optimizeNodes() {
        super.optimizeNodes();
        const cond = this.condition;
        if (cond === true) return this.nodes;
        let e = this.else;
        if (e) {
            const ns2 = e.optimizeNodes();
            e = this.else = Array.isArray(ns2) ? new Else(ns2) : ns2;
        }
        if (e) {
            if (cond === false) return e instanceof _If ? e : e.nodes;
            if (this.nodes.length) return this;
            return new _If(not(cond), e instanceof _If ? [
                e
            ] : e.nodes);
        }
        if (cond === false || !this.nodes.length) return void 0;
        return this;
    }
    optimizeNames(names3, constants14) {
        var _a18;
        this.else = (_a18 = this.else) === null || _a18 === void 0 ? void 0 : _a18.optimizeNames(names3, constants14);
        if (!(super.optimizeNames(names3, constants14) || this.else)) return;
        this.condition = optimizeExpr(this.condition, names3, constants14);
        return this;
    }
    get names() {
        const names3 = super.names;
        addExprNames(names3, this.condition);
        if (this.else) addNames(names3, this.else.names);
        return names3;
    }
};
If.kind = "if";
var For = class extends BlockNode {
};
For.kind = "for";
var ForLoop = class extends For {
    constructor(iteration){
        super();
        this.iteration = iteration;
    }
    render(opts) {
        return `for(${this.iteration})` + super.render(opts);
    }
    optimizeNames(names3, constants14) {
        if (!super.optimizeNames(names3, constants14)) return;
        this.iteration = optimizeExpr(this.iteration, names3, constants14);
        return this;
    }
    get names() {
        return addNames(super.names, this.iteration.names);
    }
};
var ForRange = class extends For {
    constructor(varKind, name17, from2, to3){
        super();
        this.varKind = varKind;
        this.name = name17;
        this.from = from2;
        this.to = to3;
    }
    render(opts) {
        const varKind = opts.es5 ? scope_1.varKinds.var : this.varKind;
        const { name: name17, from: from2, to: to3 } = this;
        return `for(${varKind} ${name17}=${from2}; ${name17}<${to3}; ${name17}++)` + super.render(opts);
    }
    get names() {
        const names3 = addExprNames(super.names, this.from);
        return addExprNames(names3, this.to);
    }
};
var ForIter = class extends For {
    constructor(loop, varKind, name17, iterable){
        super();
        this.loop = loop;
        this.varKind = varKind;
        this.name = name17;
        this.iterable = iterable;
    }
    render(opts) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(opts);
    }
    optimizeNames(names3, constants14) {
        if (!super.optimizeNames(names3, constants14)) return;
        this.iterable = optimizeExpr(this.iterable, names3, constants14);
        return this;
    }
    get names() {
        return addNames(super.names, this.iterable.names);
    }
};
var Func = class extends BlockNode {
    constructor(name17, args, async){
        super();
        this.name = name17;
        this.args = args;
        this.async = async;
    }
    render(opts) {
        const _async = this.async ? "async " : "";
        return `${_async}function ${this.name}(${this.args})` + super.render(opts);
    }
};
Func.kind = "func";
var Return = class extends ParentNode {
    render(opts) {
        return "return " + super.render(opts);
    }
};
Return.kind = "return";
var Try = class extends BlockNode {
    render(opts) {
        let code = "try" + super.render(opts);
        if (this.catch) code += this.catch.render(opts);
        if (this.finally) code += this.finally.render(opts);
        return code;
    }
    optimizeNodes() {
        var _a18, _b2;
        super.optimizeNodes();
        (_a18 = this.catch) === null || _a18 === void 0 ? void 0 : _a18.optimizeNodes();
        (_b2 = this.finally) === null || _b2 === void 0 ? void 0 : _b2.optimizeNodes();
        return this;
    }
    optimizeNames(names3, constants14) {
        var _a18, _b2;
        super.optimizeNames(names3, constants14);
        (_a18 = this.catch) === null || _a18 === void 0 ? void 0 : _a18.optimizeNames(names3, constants14);
        (_b2 = this.finally) === null || _b2 === void 0 ? void 0 : _b2.optimizeNames(names3, constants14);
        return this;
    }
    get names() {
        const names3 = super.names;
        if (this.catch) addNames(names3, this.catch.names);
        if (this.finally) addNames(names3, this.finally.names);
        return names3;
    }
};
var Catch = class extends BlockNode {
    constructor(error3){
        super();
        this.error = error3;
    }
    render(opts) {
        return `catch(${this.error})` + super.render(opts);
    }
};
Catch.kind = "catch";
var Finally = class extends BlockNode {
    render(opts) {
        return "finally" + super.render(opts);
    }
};
Finally.kind = "finally";
var CodeGen = class {
    constructor(extScope, opts = {}){
        this._values = {};
        this._blockStarts = [];
        this._constants = {};
        this.opts = {
            ...opts,
            _n: opts.lines ? "\n" : ""
        };
        this._extScope = extScope;
        this._scope = new scope_1.Scope({
            parent: extScope
        });
        this._nodes = [
            new Root()
        ];
    }
    toString() {
        return this._root.render(this.opts);
    }
    name(prefix) {
        return this._scope.name(prefix);
    }
    scopeName(prefix) {
        return this._extScope.name(prefix);
    }
    scopeValue(prefixOrName, value) {
        const name17 = this._extScope.value(prefixOrName, value);
        const vs2 = this._values[name17.prefix] || (this._values[name17.prefix] = new Set());
        vs2.add(name17);
        return name17;
    }
    getScopeValue(prefix, keyOrRef) {
        return this._extScope.getValue(prefix, keyOrRef);
    }
    scopeRefs(scopeName) {
        return this._extScope.scopeRefs(scopeName, this._values);
    }
    scopeCode() {
        return this._extScope.scopeCode(this._values);
    }
    _def(varKind, nameOrPrefix, rhs, constant) {
        const name17 = this._scope.toName(nameOrPrefix);
        if (rhs !== void 0 && constant) this._constants[name17.str] = rhs;
        this._leafNode(new Def(varKind, name17, rhs));
        return name17;
    }
    const(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.const, nameOrPrefix, rhs, _constant);
    }
    let(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.let, nameOrPrefix, rhs, _constant);
    }
    var(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.var, nameOrPrefix, rhs, _constant);
    }
    assign(lhs, rhs, sideEffects) {
        return this._leafNode(new Assign(lhs, rhs, sideEffects));
    }
    add(lhs, rhs) {
        return this._leafNode(new AssignOp(lhs, exports2.operators.ADD, rhs));
    }
    code(c) {
        if (typeof c == "function") c();
        else if (c !== code_1.nil) this._leafNode(new AnyCode(c));
        return this;
    }
    object(...keyValues) {
        const code = [
            "{"
        ];
        for (const [key, value] of keyValues){
            if (code.length > 1) code.push(",");
            code.push(key);
            if (key !== value || this.opts.es5) {
                code.push(":");
                (0, code_1.addCodeArg)(code, value);
            }
        }
        code.push("}");
        return new code_1._Code(code);
    }
    if(condition, thenBody, elseBody) {
        this._blockNode(new If(condition));
        if (thenBody && elseBody) {
            this.code(thenBody).else().code(elseBody).endIf();
        } else if (thenBody) {
            this.code(thenBody).endIf();
        } else if (elseBody) {
            throw new Error('CodeGen: "else" body without "then" body');
        }
        return this;
    }
    elseIf(condition) {
        return this._elseNode(new If(condition));
    }
    else() {
        return this._elseNode(new Else());
    }
    endIf() {
        return this._endBlockNode(If, Else);
    }
    _for(node, forBody) {
        this._blockNode(node);
        if (forBody) this.code(forBody).endFor();
        return this;
    }
    for(iteration, forBody) {
        return this._for(new ForLoop(iteration), forBody);
    }
    forRange(nameOrPrefix, from2, to3, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.let) {
        const name17 = this._scope.toName(nameOrPrefix);
        return this._for(new ForRange(varKind, name17, from2, to3), ()=>forBody(name17));
    }
    forOf(nameOrPrefix, iterable, forBody, varKind = scope_1.varKinds.const) {
        const name17 = this._scope.toName(nameOrPrefix);
        if (this.opts.es5) {
            const arr = iterable instanceof code_1.Name ? iterable : this.var("_arr", iterable);
            return this.forRange("_i", 0, (0, code_1._)`${arr}.length`, (i)=>{
                this.var(name17, (0, code_1._)`${arr}[${i}]`);
                forBody(name17);
            });
        }
        return this._for(new ForIter("of", varKind, name17, iterable), ()=>forBody(name17));
    }
    forIn(nameOrPrefix, obj, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.const) {
        if (this.opts.ownProperties) {
            return this.forOf(nameOrPrefix, (0, code_1._)`Object.keys(${obj})`, forBody);
        }
        const name17 = this._scope.toName(nameOrPrefix);
        return this._for(new ForIter("in", varKind, name17, obj), ()=>forBody(name17));
    }
    endFor() {
        return this._endBlockNode(For);
    }
    label(label) {
        return this._leafNode(new Label2(label));
    }
    break(label) {
        return this._leafNode(new Break(label));
    }
    return(value) {
        const node = new Return();
        this._blockNode(node);
        this.code(value);
        if (node.nodes.length !== 1) throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(Return);
    }
    try(tryBody, catchCode, finallyCode) {
        if (!catchCode && !finallyCode) throw new Error('CodeGen: "try" without "catch" and "finally"');
        const node = new Try();
        this._blockNode(node);
        this.code(tryBody);
        if (catchCode) {
            const error3 = this.name("e");
            this._currNode = node.catch = new Catch(error3);
            catchCode(error3);
        }
        if (finallyCode) {
            this._currNode = node.finally = new Finally();
            this.code(finallyCode);
        }
        return this._endBlockNode(Catch, Finally);
    }
    throw(error3) {
        return this._leafNode(new Throw(error3));
    }
    block(body, nodeCount) {
        this._blockStarts.push(this._nodes.length);
        if (body) this.code(body).endBlock(nodeCount);
        return this;
    }
    endBlock(nodeCount) {
        const len = this._blockStarts.pop();
        if (len === void 0) throw new Error("CodeGen: not in self-balancing block");
        const toClose = this._nodes.length - len;
        if (toClose < 0 || nodeCount !== void 0 && toClose !== nodeCount) {
            throw new Error(`CodeGen: wrong number of nodes: ${toClose} vs ${nodeCount} expected`);
        }
        this._nodes.length = len;
        return this;
    }
    func(name17, args = code_1.nil, async, funcBody) {
        this._blockNode(new Func(name17, args, async));
        if (funcBody) this.code(funcBody).endFunc();
        return this;
    }
    endFunc() {
        return this._endBlockNode(Func);
    }
    optimize(n = 1) {
        while(n-- > 0){
            this._root.optimizeNodes();
            this._root.optimizeNames(this._root.names, this._constants);
        }
    }
    _leafNode(node) {
        this._currNode.nodes.push(node);
        return this;
    }
    _blockNode(node) {
        this._currNode.nodes.push(node);
        this._nodes.push(node);
    }
    _endBlockNode(N1, N2) {
        const n = this._currNode;
        if (n instanceof N1 || N2 && n instanceof N2) {
            this._nodes.pop();
            return this;
        }
        throw new Error(`CodeGen: not in block "${N2 ? `${N1.kind}/${N2.kind}` : N1.kind}"`);
    }
    _elseNode(node) {
        const n = this._currNode;
        if (!(n instanceof If)) {
            throw new Error('CodeGen: "else" without "if"');
        }
        this._currNode = n.else = node;
        return this;
    }
    get _root() {
        return this._nodes[0];
    }
    get _currNode() {
        const ns2 = this._nodes;
        return ns2[ns2.length - 1];
    }
    set _currNode(node) {
        const ns2 = this._nodes;
        ns2[ns2.length - 1] = node;
    }
};
exports2.CodeGen = CodeGen;
function addNames(names3, from2) {
    for(const n in from2)names3[n] = (names3[n] || 0) + (from2[n] || 0);
    return names3;
}
function addExprNames(names3, from2) {
    return from2 instanceof code_1._CodeOrName ? addNames(names3, from2.names) : names3;
}
function optimizeExpr(expr, names3, constants14) {
    if (expr instanceof code_1.Name) return replaceName(expr);
    if (!canOptimize(expr)) return expr;
    return new code_1._Code(expr._items.reduce((items, c)=>{
        if (c instanceof code_1.Name) c = replaceName(c);
        if (c instanceof code_1._Code) items.push(...c._items);
        else items.push(c);
        return items;
    }, []));
    function replaceName(n) {
        const c = constants14[n.str];
        if (c === void 0 || names3[n.str] !== 1) return n;
        delete names3[n.str];
        return c;
    }
    function canOptimize(e) {
        return e instanceof code_1._Code && e._items.some((c)=>c instanceof code_1.Name && names3[c.str] === 1 && constants14[c.str] !== void 0);
    }
}
function subtractNames(names3, from2) {
    for(const n in from2)names3[n] = (names3[n] || 0) - (from2[n] || 0);
}
function not(x) {
    return typeof x == "boolean" || typeof x == "number" || x === null ? !x : (0, code_1._)`!${par(x)}`;
}
exports2.not = not;
var andCode = mappend(exports2.operators.AND);
function and(...args) {
    return args.reduce(andCode);
}
exports2.and = and;
var orCode = mappend(exports2.operators.OR);
function or2(...args) {
    return args.reduce(orCode);
}
exports2.or = or2;
function mappend(op) {
    return (x, y)=>x === code_1.nil ? y : y === code_1.nil ? x : (0, code_1._)`${par(x)} ${op} ${par(y)}`;
}
function par(x) {
    return x instanceof code_1.Name ? x : (0, code_1._)`(${x})`;
}

return exports2;
}
