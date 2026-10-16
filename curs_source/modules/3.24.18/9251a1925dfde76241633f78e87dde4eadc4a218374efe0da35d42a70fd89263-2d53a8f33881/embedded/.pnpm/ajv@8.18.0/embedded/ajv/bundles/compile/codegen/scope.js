import { require_code2 } from "./code.js";
var __wakaru_require_scope_cache;
export function require_scope() {
if (__wakaru_require_scope_cache) return __wakaru_require_scope_cache;
var exports2 = {};
__wakaru_require_scope_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.ValueScope = exports2.ValueScopeName = exports2.Scope = exports2.varKinds = exports2.UsedValueState = void 0;
var code_1 = require_code2();
var ValueError = class extends Error {
    constructor(name17){
        super(`CodeGen: "code" for ${name17} not defined`);
        this.value = name17.value;
    }
};
var UsedValueState;
(function(UsedValueState2) {
    UsedValueState2[UsedValueState2["Started"] = 0] = "Started";
    UsedValueState2[UsedValueState2["Completed"] = 1] = "Completed";
})(UsedValueState || (exports2.UsedValueState = UsedValueState = {}));
exports2.varKinds = {
    const: new code_1.Name("const"),
    let: new code_1.Name("let"),
    var: new code_1.Name("var")
};
var Scope = class {
    constructor({ prefixes, parent } = {}){
        this._names = {};
        this._prefixes = prefixes;
        this._parent = parent;
    }
    toName(nameOrPrefix) {
        return nameOrPrefix instanceof code_1.Name ? nameOrPrefix : this.name(nameOrPrefix);
    }
    name(prefix) {
        return new code_1.Name(this._newName(prefix));
    }
    _newName(prefix) {
        const ng = this._names[prefix] || this._nameGroup(prefix);
        return `${prefix}${ng.index++}`;
    }
    _nameGroup(prefix) {
        var _a18, _b2;
        if (((_b2 = (_a18 = this._parent) === null || _a18 === void 0 ? void 0 : _a18._prefixes) === null || _b2 === void 0 ? void 0 : _b2.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) {
            throw new Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
        }
        return this._names[prefix] = {
            prefix,
            index: 0
        };
    }
};
exports2.Scope = Scope;
var ValueScopeName = class extends code_1.Name {
    constructor(prefix, nameStr){
        super(nameStr);
        this.prefix = prefix;
    }
    setValue(value, { property, itemIndex }) {
        this.value = value;
        this.scopePath = (0, code_1._)`.${new code_1.Name(property)}[${itemIndex}]`;
    }
};
exports2.ValueScopeName = ValueScopeName;
var line = (0, code_1._)`\n`;
var ValueScope = class extends Scope {
    constructor(opts){
        super(opts);
        this._values = {};
        this._scope = opts.scope;
        this.opts = {
            ...opts,
            _n: opts.lines ? line : code_1.nil
        };
    }
    get() {
        return this._scope;
    }
    name(prefix) {
        return new ValueScopeName(prefix, this._newName(prefix));
    }
    value(nameOrPrefix, value) {
        var _a18;
        if (value.ref === void 0) throw new Error("CodeGen: ref must be passed in value");
        const name17 = this.toName(nameOrPrefix);
        const { prefix } = name17;
        const valueKey = (_a18 = value.key) !== null && _a18 !== void 0 ? _a18 : value.ref;
        let vs2 = this._values[prefix];
        if (vs2) {
            const _name = vs2.get(valueKey);
            if (_name) return _name;
        } else {
            vs2 = this._values[prefix] = new Map();
        }
        vs2.set(valueKey, name17);
        const s3 = this._scope[prefix] || (this._scope[prefix] = []);
        const itemIndex = s3.length;
        s3[itemIndex] = value.ref;
        name17.setValue(value, {
            property: prefix,
            itemIndex
        });
        return name17;
    }
    getValue(prefix, keyOrRef) {
        const vs2 = this._values[prefix];
        if (!vs2) return;
        return vs2.get(keyOrRef);
    }
    scopeRefs(scopeName, values = this._values) {
        return this._reduceValues(values, (name17)=>{
            if (name17.scopePath === void 0) throw new Error(`CodeGen: name "${name17}" has no value`);
            return (0, code_1._)`${scopeName}${name17.scopePath}`;
        });
    }
    scopeCode(values = this._values, usedValues, getCode) {
        return this._reduceValues(values, (name17)=>{
            if (name17.value === void 0) throw new Error(`CodeGen: name "${name17}" has no value`);
            return name17.value.code;
        }, usedValues, getCode);
    }
    _reduceValues(values, valueCode, usedValues = {}, getCode) {
        let code = code_1.nil;
        for(const prefix in values){
            const vs2 = values[prefix];
            if (!vs2) continue;
            const nameSet = usedValues[prefix] = usedValues[prefix] || new Map();
            vs2.forEach((name17)=>{
                if (nameSet.has(name17)) return;
                nameSet.set(name17, UsedValueState.Started);
                let c = valueCode(name17);
                if (c) {
                    const def = this.opts.es5 ? exports2.varKinds.var : exports2.varKinds.const;
                    code = (0, code_1._)`${code}${def} ${name17} = ${c};${this.opts._n}`;
                } else if (c = getCode === null || getCode === void 0 ? void 0 : getCode(name17)) {
                    code = (0, code_1._)`${code}${c}${this.opts._n}`;
                } else {
                    throw new ValueError(name17);
                }
                nameSet.set(name17, UsedValueState.Completed);
            });
        }
        return code;
    }
};
exports2.ValueScope = ValueScope;

return exports2;
}
