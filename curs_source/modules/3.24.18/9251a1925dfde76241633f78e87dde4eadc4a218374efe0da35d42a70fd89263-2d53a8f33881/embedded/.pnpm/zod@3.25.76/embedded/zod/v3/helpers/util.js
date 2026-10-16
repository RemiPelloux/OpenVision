var util, objectUtil, ZodParsedType, getParsedType;
export { ZodParsedType, getParsedType, objectUtil, util };
var __wakaru_init_util_initialized = false;
export function init_util() {
if (__wakaru_init_util_initialized) return;
__wakaru_init_util_initialized = true;
(function(util2) {
    util2.assertEqual = (_2)=>{};
    function assertIs2(_arg) {}
    util2.assertIs = assertIs2;
    function assertNever3(_x) {
        throw new Error();
    }
    util2.assertNever = assertNever3;
    util2.arrayToEnum = (items)=>{
        const obj = {};
        for (const item of items){
            obj[item] = item;
        }
        return obj;
    };
    util2.getValidEnumValues = (obj)=>{
        const validKeys = util2.objectKeys(obj).filter((k2)=>typeof obj[obj[k2]] !== "number");
        const filtered = {};
        for (const k2 of validKeys){
            filtered[k2] = obj[k2];
        }
        return util2.objectValues(filtered);
    };
    util2.objectValues = (obj)=>{
        return util2.objectKeys(obj).map(function(e) {
            return obj[e];
        });
    };
    util2.objectKeys = typeof Object.keys === "function" ? (obj)=>Object.keys(obj) : (object4)=>{
        const keys = [];
        for(const key in object4){
            if (Object.prototype.hasOwnProperty.call(object4, key)) {
                keys.push(key);
            }
        }
        return keys;
    };
    util2.find = (arr, checker)=>{
        for (const item of arr){
            if (checker(item)) return item;
        }
        return void 0;
    };
    util2.isInteger = typeof Number.isInteger === "function" ? (val)=>Number.isInteger(val) : (val)=>typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
    function joinValues2(array3, separator = " | ") {
        return array3.map((val)=>typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util2.joinValues = joinValues2;
    util2.jsonStringifyReplacer = (_2, value)=>{
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(util || (util = {}));
(function(objectUtil2) {
    objectUtil2.mergeShapes = (first, second)=>{
        return {
            ...first,
            ...second
        };
    };
})(objectUtil || (objectUtil = {}));
ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]);
getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};

}
