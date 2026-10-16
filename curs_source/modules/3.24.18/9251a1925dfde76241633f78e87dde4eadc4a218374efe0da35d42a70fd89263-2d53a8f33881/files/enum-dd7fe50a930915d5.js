import { require_assert } from "./assert.js";
var __wakaru_require_enum_cache;
export function require_enum() {
if (__wakaru_require_enum_cache) return __wakaru_require_enum_cache;
var exports2 = {};
__wakaru_require_enum_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.makeEnum = exports2.makeEnumType = exports2.setEnumType = exports2.getEnumType = void 0;
var assert_js_1 = require_assert();
var enumTypeSymbol2 = Symbol("@bufbuild/protobuf/enum-type");
var pendingEnumType2 = new WeakMap();
function enumTypeInfo2(enumObject) {
    const attached = enumObject[enumTypeSymbol2];
    if (attached) {
        return attached;
    }
    const pending = pendingEnumType2.get(enumObject);
    if (!pending) {
        return void 0;
    }
    const built = makeEnumType2(pending.typeName, pending.values.map((v2)=>({
            no: v2.no,
            name: v2.name,
            localName: enumObject[v2.no]
        })), pending.opt);
    enumObject[enumTypeSymbol2] = built;
    pendingEnumType2.delete(enumObject);
    return built;
}
function getEnumType2(enumObject) {
    const t = enumTypeInfo2(enumObject);
    (0, assert_js_1.assert)(t, "missing enum type on enum object");
    return t;
}
exports2.getEnumType = getEnumType2;
function setEnumType2(enumObject, typeName, values, opt) {
    pendingEnumType2.set(enumObject, {
        typeName,
        values,
        opt
    });
    if (enumObject[enumTypeSymbol2] !== void 0) {
        delete enumObject[enumTypeSymbol2];
    }
}
exports2.setEnumType = setEnumType2;
function makeEnumType2(typeName, values, _opt) {
    const names3 = Object.create(null);
    const numbers = Object.create(null);
    const normalValues = [];
    for (const value of values){
        const n = normalizeEnumValue2(value);
        normalValues.push(n);
        names3[value.name] = n;
        numbers[value.no] = n;
    }
    return {
        typeName,
        values: normalValues,
        findName (name17) {
            return names3[name17];
        },
        findNumber (no2) {
            return numbers[no2];
        }
    };
}
exports2.makeEnumType = makeEnumType2;
function makeEnum2(typeName, values, opt) {
    const enumObject = {};
    for (const value of values){
        const n = normalizeEnumValue2(value);
        enumObject[n.localName] = n.no;
        enumObject[n.no] = n.localName;
    }
    setEnumType2(enumObject, typeName, values, opt);
    return enumObject;
}
exports2.makeEnum = makeEnum2;
function normalizeEnumValue2(value) {
    if ("localName" in value) {
        return value;
    }
    return Object.assign(Object.assign({}, value), {
        localName: value.name
    });
}

return exports2;
}
