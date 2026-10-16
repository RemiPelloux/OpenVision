require.r(exports);
require.d(exports, {
    createExtensionContainer: ()=>createExtensionContainer,
    filterUnknownFields: ()=>filterUnknownFields,
    makeExtension: ()=>makeExtension
});
var _scalars_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-14.js");
function makeExtension(runtime, typeName, extendee, field) {
    let fi;
    return {
        typeName,
        extendee,
        get field () {
            if (!fi) {
                const i = typeof field == "function" ? field() : field;
                i.name = typeName.split(".").pop();
                i.jsonName = `[${typeName}]`;
                fi = runtime.util.newFieldList([
                    i
                ]).list()[0];
            }
            return fi;
        },
        runtime
    };
}
function createExtensionContainer(extension) {
    const localName = extension.field.localName;
    const container = Object.create(null);
    container[localName] = initExtensionField(extension);
    return [
        container,
        ()=>container[localName]
    ];
}
function initExtensionField(ext) {
    const field = ext.field;
    if (field.repeated) {
        return [];
    }
    if (field.default !== void 0) {
        return field.default;
    }
    switch(field.kind){
        case "enum":
            return field.T.values[0].no;
        case "scalar":
            return (0, _scalars_js__WEBPACK_IMPORTED_MODULE_0__.scalarZeroValue)(field.T, field.L);
        case "message":
            const T = field.T, value = new T();
            return T.fieldWrapper ? T.fieldWrapper.unwrapField(value) : value;
        case "map":
            throw "map fields are not allowed to be extensions";
    }
}
function filterUnknownFields(unknownFields, field) {
    if (!field.repeated && (field.kind == "enum" || field.kind == "scalar")) {
        for(let i = unknownFields.length - 1; i >= 0; --i){
            if (unknownFields[i].no == field.no) {
                return [
                    unknownFields[i]
                ];
            }
        }
        return [];
    }
    return unknownFields.filter((uf)=>uf.no === field.no);
}
