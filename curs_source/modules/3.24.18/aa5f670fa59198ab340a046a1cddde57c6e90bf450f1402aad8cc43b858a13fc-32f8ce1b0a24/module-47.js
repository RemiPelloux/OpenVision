require.r(exports);
require.d(exports, {
    FieldMask: ()=>FieldMask
});
var _message_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-12.js");
var _proto3_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-7.js");
const _FieldMask = class _FieldMask extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.paths = [];
        _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        function protoCamelCase(snakeCase) {
            let capNext = false;
            const b = [];
            for(let i = 0; i < snakeCase.length; i++){
                let c = snakeCase.charAt(i);
                switch(c){
                    case "_":
                        capNext = true;
                        break;
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        b.push(c);
                        capNext = false;
                        break;
                    default:
                        if (capNext) {
                            capNext = false;
                            c = c.toUpperCase();
                        }
                        b.push(c);
                        break;
                }
            }
            return b.join("");
        }
        return this.paths.map((p)=>{
            if (p.match(/_[0-9]?_/g) || p.match(/[A-Z]/g)) {
                throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + p + '" is irreversible');
            }
            return protoCamelCase(p);
        }).join(",");
    }
    fromJson(json, options) {
        if (typeof json !== "string") {
            throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.json.debug(json));
        }
        if (json === "") {
            return this;
        }
        function camelToSnake(str) {
            if (str.includes("_")) {
                throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
            }
            const sc = str.replace(/[A-Z]/g, (letter)=>"_" + letter.toLowerCase());
            return sc[0] === "_" ? sc.substring(1) : sc;
        }
        this.paths = json.split(",").map(camelToSnake);
        return this;
    }
    static fromBinary(bytes, options) {
        return new _FieldMask().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FieldMask().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FieldMask().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.equals(_FieldMask, a, b);
    }
};
_FieldMask.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3;
_FieldMask.typeName = "google.protobuf.FieldMask";
_FieldMask.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
let FieldMask = _FieldMask;
