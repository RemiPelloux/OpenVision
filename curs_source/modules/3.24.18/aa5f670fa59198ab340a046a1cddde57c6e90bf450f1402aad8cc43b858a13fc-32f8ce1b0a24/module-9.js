require.r(exports);
require.d(exports, {
    getEnumType: ()=>getEnumType,
    makeEnum: ()=>makeEnum,
    makeEnumType: ()=>makeEnumType,
    setEnumType: ()=>setEnumType
});
var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-10.js");
const enumTypeSymbol = Symbol("@bufbuild/protobuf/enum-type");
function getEnumType(enumObject) {
    const t = enumObject[enumTypeSymbol];
    (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(t, "missing enum type on enum object");
    return t;
}
function setEnumType(enumObject, typeName, values, opt) {
    enumObject[enumTypeSymbol] = makeEnumType(typeName, values.map((v)=>({
            no: v.no,
            name: v.name,
            localName: enumObject[v.no]
        })), opt);
}
function makeEnumType(typeName, values, _opt) {
    const names = Object.create(null);
    const numbers = Object.create(null);
    const normalValues = [];
    for (const value of values){
        const n = normalizeEnumValue(value);
        normalValues.push(n);
        names[value.name] = n;
        numbers[value.no] = n;
    }
    return {
        typeName,
        values: normalValues,
        findName (name) {
            return names[name];
        },
        findNumber (no) {
            return numbers[no];
        }
    };
}
function makeEnum(typeName, values, opt) {
    const enumObject = {};
    for (const value of values){
        const n = normalizeEnumValue(value);
        enumObject[n.localName] = n.no;
        enumObject[n.no] = n.localName;
    }
    setEnumType(enumObject, typeName, values, opt);
    return enumObject;
}
function normalizeEnumValue(value) {
    if ("localName" in value) {
        return value;
    }
    return {
        ...value,
        localName: value.name
    };
}
