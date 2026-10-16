import { require_common } from "./common.js";
import { require_exception } from "./exception.js";
import { require_type } from "./type.js";
var __wakaru_require_schema_cache;
export function require_schema() {
if (__wakaru_require_schema_cache) return __wakaru_require_schema_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_schema_cache = module2;
"use strict";
var common2 = require_common();
var YAMLException2 = require_exception();
var Type3 = require_type();
function compileList(schema2, name17, result) {
    var exclude = [];
    schema2.include.forEach(function(includedSchema) {
        result = compileList(includedSchema, name17, result);
    });
    schema2[name17].forEach(function(currentType) {
        result.forEach(function(previousType, previousIndex) {
            if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
                exclude.push(previousIndex);
            }
        });
        result.push(currentType);
    });
    return result.filter(function(type2, index) {
        return exclude.indexOf(index) === -1;
    });
}
function compileMap() {
    var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {}
    }, index, length;
    function collectType(type2) {
        result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
    }
    for(index = 0, length = arguments.length; index < length; index += 1){
        arguments[index].forEach(collectType);
    }
    return result;
}
function Schema2(definition) {
    this.include = definition.include || [];
    this.implicit = definition.implicit || [];
    this.explicit = definition.explicit || [];
    this.implicit.forEach(function(type2) {
        if (type2.loadKind && type2.loadKind !== "scalar") {
            throw new YAMLException2("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        }
    });
    this.compiledImplicit = compileList(this, "implicit", []);
    this.compiledExplicit = compileList(this, "explicit", []);
    this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
}
Schema2.DEFAULT = null;
Schema2.create = function createSchema() {
    var schemas, types3;
    switch(arguments.length){
        case 1:
            schemas = Schema2.DEFAULT;
            types3 = arguments[0];
            break;
        case 2:
            schemas = arguments[0];
            types3 = arguments[1];
            break;
        default:
            throw new YAMLException2("Wrong number of arguments for Schema.create function");
    }
    schemas = common2.toArray(schemas);
    types3 = common2.toArray(types3);
    if (!schemas.every(function(schema2) {
        return schema2 instanceof Schema2;
    })) {
        throw new YAMLException2("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
    }
    if (!types3.every(function(type2) {
        return type2 instanceof Type3;
    })) {
        throw new YAMLException2("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
    return new Schema2({
        include: schemas,
        explicit: types3
    });
};
module2.exports = Schema2;

return module2.exports;
}
