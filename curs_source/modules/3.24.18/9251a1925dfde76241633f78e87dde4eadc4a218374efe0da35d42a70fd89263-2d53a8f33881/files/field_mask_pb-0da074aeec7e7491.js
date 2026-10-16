import { Message, init_message } from "../../message.js";
import { init_proto3, proto3 } from "../../proto3.js";
var FieldMask;
export { FieldMask };
var __wakaru_init_field_mask_pb_initialized = false;
export function init_field_mask_pb() {
if (__wakaru_init_field_mask_pb_initialized) return;
__wakaru_init_field_mask_pb_initialized = true;
init_message();
init_proto3();
FieldMask = class _FieldMask extends Message {
    constructor(data){
        super();
        this.paths = [];
        proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        function protoCamelCase2(snakeCase) {
            let capNext = false;
            const b2 = [];
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
                        b2.push(c);
                        capNext = false;
                        break;
                    default:
                        if (capNext) {
                            capNext = false;
                            c = c.toUpperCase();
                        }
                        b2.push(c);
                        break;
                }
            }
            return b2.join("");
        }
        return this.paths.map((p2)=>{
            if (p2.match(/_[0-9]?_/g) || p2.match(/[A-Z]/g)) {
                throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + p2 + '" is irreversible');
            }
            return protoCamelCase2(p2);
        }).join(",");
    }
    fromJson(json2, options2) {
        if (typeof json2 !== "string") {
            throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + proto3.json.debug(json2));
        }
        if (json2 === "") {
            return this;
        }
        function camelToSnake(str3) {
            if (str3.includes("_")) {
                throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
            }
            const sc = str3.replace(/[A-Z]/g, (letter)=>"_" + letter.toLowerCase());
            return sc[0] === "_" ? sc.substring(1) : sc;
        }
        this.paths = json2.split(",").map(camelToSnake);
        return this;
    }
    static fromBinary(bytes, options2) {
        return new _FieldMask().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FieldMask().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FieldMask().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FieldMask, a, b2);
    }
};
FieldMask.runtime = proto3;
FieldMask.typeName = "google.protobuf.FieldMask";
FieldMask.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);

}
