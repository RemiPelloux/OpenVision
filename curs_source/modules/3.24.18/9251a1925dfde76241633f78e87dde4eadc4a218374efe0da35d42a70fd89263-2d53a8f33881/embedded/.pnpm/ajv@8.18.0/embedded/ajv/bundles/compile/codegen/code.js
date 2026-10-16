var __wakaru_require_code2_cache;
export function require_code2() {
if (__wakaru_require_code2_cache) return __wakaru_require_code2_cache;
var exports2 = {};
__wakaru_require_code2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.regexpCode = exports2.getEsmExportName = exports2.getProperty = exports2.safeStringify = exports2.stringify = exports2.strConcat = exports2.addCodeArg = exports2.str = exports2._ = exports2.nil = exports2._Code = exports2.Name = exports2.IDENTIFIER = exports2._CodeOrName = void 0;
var _CodeOrName = class {
};
exports2._CodeOrName = _CodeOrName;
exports2.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
var Name = class extends _CodeOrName {
    constructor(s3){
        super();
        if (!exports2.IDENTIFIER.test(s3)) throw new Error("CodeGen: name must be a valid identifier");
        this.str = s3;
    }
    toString() {
        return this.str;
    }
    emptyStr() {
        return false;
    }
    get names() {
        return {
            [this.str]: 1
        };
    }
};
exports2.Name = Name;
var _Code = class extends _CodeOrName {
    constructor(code){
        super();
        this._items = typeof code === "string" ? [
            code
        ] : code;
    }
    toString() {
        return this.str;
    }
    emptyStr() {
        if (this._items.length > 1) return false;
        const item = this._items[0];
        return item === "" || item === '""';
    }
    get str() {
        var _a18;
        return (_a18 = this._str) !== null && _a18 !== void 0 ? _a18 : this._str = this._items.reduce((s3, c)=>`${s3}${c}`, "");
    }
    get names() {
        var _a18;
        return (_a18 = this._names) !== null && _a18 !== void 0 ? _a18 : this._names = this._items.reduce((names3, c)=>{
            if (c instanceof Name) names3[c.str] = (names3[c.str] || 0) + 1;
            return names3;
        }, {});
    }
};
exports2._Code = _Code;
exports2.nil = new _Code("");
function _2(strs, ...args) {
    const code = [
        strs[0]
    ];
    let i = 0;
    while(i < args.length){
        addCodeArg(code, args[i]);
        code.push(strs[++i]);
    }
    return new _Code(code);
}
exports2._ = _2;
var plus = new _Code("+");
function str3(strs, ...args) {
    const expr = [
        safeStringify(strs[0])
    ];
    let i = 0;
    while(i < args.length){
        expr.push(plus);
        addCodeArg(expr, args[i]);
        expr.push(plus, safeStringify(strs[++i]));
    }
    optimize(expr);
    return new _Code(expr);
}
exports2.str = str3;
function addCodeArg(code, arg) {
    if (arg instanceof _Code) code.push(...arg._items);
    else if (arg instanceof Name) code.push(arg);
    else code.push(interpolate(arg));
}
exports2.addCodeArg = addCodeArg;
function optimize(expr) {
    let i = 1;
    while(i < expr.length - 1){
        if (expr[i] === plus) {
            const res = mergeExprItems(expr[i - 1], expr[i + 1]);
            if (res !== void 0) {
                expr.splice(i - 1, 3, res);
                continue;
            }
            expr[i++] = "+";
        }
        i++;
    }
}
function mergeExprItems(a, b2) {
    if (b2 === '""') return a;
    if (a === '""') return b2;
    if (typeof a == "string") {
        if (b2 instanceof Name || a[a.length - 1] !== '"') return;
        if (typeof b2 != "string") return `${a.slice(0, -1)}${b2}"`;
        if (b2[0] === '"') return a.slice(0, -1) + b2.slice(1);
        return;
    }
    if (typeof b2 == "string" && b2[0] === '"' && !(a instanceof Name)) return `"${a}${b2.slice(1)}`;
    return;
}
function strConcat(c1, c2) {
    return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str3`${c1}${c2}`;
}
exports2.strConcat = strConcat;
function interpolate(x) {
    return typeof x == "number" || typeof x == "boolean" || x === null ? x : safeStringify(Array.isArray(x) ? x.join(",") : x);
}
function stringify2(x) {
    return new _Code(safeStringify(x));
}
exports2.stringify = stringify2;
function safeStringify(x) {
    return JSON.stringify(x).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
exports2.safeStringify = safeStringify;
function getProperty(key) {
    return typeof key == "string" && exports2.IDENTIFIER.test(key) ? new _Code(`.${key}`) : _2`[${key}]`;
}
exports2.getProperty = getProperty;
function getEsmExportName(key) {
    if (typeof key == "string" && exports2.IDENTIFIER.test(key)) {
        return new _Code(`${key}`);
    }
    throw new Error(`CodeGen: invalid export name: ${key}, use explicit $id name mapping`);
}
exports2.getEsmExportName = getEsmExportName;
function regexpCode(rx) {
    return new _Code(rx.toString());
}
exports2.regexpCode = regexpCode;

return exports2;
}
