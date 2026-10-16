import { require_message } from "../../message.js";
import { require_proto3 } from "../../proto3.js";
var __wakaru_require_any_pb_cache;
export function require_any_pb() {
if (__wakaru_require_any_pb_cache) return __wakaru_require_any_pb_cache;
var exports2 = {};
__wakaru_require_any_pb_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Any = void 0;
var message_js_1 = require_message();
var proto3_js_1 = require_proto3();
var Any2 = class _Any extends message_js_1.Message {
    constructor(data){
        super();
        this.typeUrl = "";
        this.value = new Uint8Array(0);
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        var _a18;
        if (this.typeUrl === "") {
            return {};
        }
        const typeName = this.typeUrlToName(this.typeUrl);
        const messageType = (_a18 = options2 === null || options2 === void 0 ? void 0 : options2.typeRegistry) === null || _a18 === void 0 ? void 0 : _a18.findMessage(typeName);
        if (!messageType) {
            throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        }
        const message = messageType.fromBinary(this.value);
        let json2 = message.toJson(options2);
        if (typeName.startsWith("google.protobuf.") || (json2 === null || Array.isArray(json2) || typeof json2 !== "object")) {
            json2 = {
                value: json2
            };
        }
        json2["@type"] = this.typeUrl;
        return json2;
    }
    fromJson(json2, options2) {
        var _a18;
        if (json2 === null || Array.isArray(json2) || typeof json2 != "object") {
            throw new Error(`cannot decode message google.protobuf.Any from JSON: expected object but got ${json2 === null ? "null" : Array.isArray(json2) ? "array" : typeof json2}`);
        }
        if (Object.keys(json2).length == 0) {
            return this;
        }
        const typeUrl = json2["@type"];
        if (typeof typeUrl != "string" || typeUrl == "") {
            throw new Error(`cannot decode message google.protobuf.Any from JSON: "@type" is empty`);
        }
        const typeName = this.typeUrlToName(typeUrl), messageType = (_a18 = options2 === null || options2 === void 0 ? void 0 : options2.typeRegistry) === null || _a18 === void 0 ? void 0 : _a18.findMessage(typeName);
        if (!messageType) {
            throw new Error(`cannot decode message google.protobuf.Any from JSON: ${typeUrl} is not in the type registry`);
        }
        let message;
        if (typeName.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(json2, "value")) {
            message = messageType.fromJson(json2["value"], options2);
        } else {
            const copy = Object.assign({}, json2);
            delete copy["@type"];
            message = messageType.fromJson(copy, options2);
        }
        this.packFrom(message);
        return this;
    }
    packFrom(message) {
        this.value = message.toBinary();
        this.typeUrl = this.typeNameToUrl(message.getType().typeName);
    }
    unpackTo(target) {
        if (!this.is(target.getType())) {
            return false;
        }
        target.fromBinary(this.value);
        return true;
    }
    unpack(registry2) {
        if (this.typeUrl === "") {
            return void 0;
        }
        const messageType = registry2.findMessage(this.typeUrlToName(this.typeUrl));
        if (!messageType) {
            return void 0;
        }
        return messageType.fromBinary(this.value);
    }
    is(type2) {
        if (this.typeUrl === "") {
            return false;
        }
        const name17 = this.typeUrlToName(this.typeUrl);
        let typeName = "";
        if (typeof type2 === "string") {
            typeName = type2;
        } else {
            typeName = type2.typeName;
        }
        return name17 === typeName;
    }
    typeNameToUrl(name17) {
        return `type.googleapis.com/${name17}`;
    }
    typeUrlToName(url2) {
        if (!url2.length) {
            throw new Error(`invalid type url: ${url2}`);
        }
        const slash = url2.lastIndexOf("/");
        const name17 = slash >= 0 ? url2.substring(slash + 1) : url2;
        if (!name17.length) {
            throw new Error(`invalid type url: ${url2}`);
        }
        return name17;
    }
    static pack(message) {
        const any2 = new _Any();
        any2.packFrom(message);
        return any2;
    }
    static fromBinary(bytes, options2) {
        return new _Any().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Any().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Any().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_Any, a, b2);
    }
};
exports2.Any = Any2;
Any2.runtime = proto3_js_1.proto3;
Any2.typeName = "google.protobuf.Any";
Any2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "type_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]);

return exports2;
}
