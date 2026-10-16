require.r(exports);
require.d(exports, {
    Any: ()=>Any
});
var _message_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-12.js");
var _proto3_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-7.js");
const _Any = class _Any extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.typeUrl = "";
        this.value = new Uint8Array(0);
        _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        if (this.typeUrl === "") {
            return {};
        }
        const typeName = this.typeUrlToName(this.typeUrl);
        const messageType = options?.typeRegistry?.findMessage(typeName);
        if (!messageType) {
            throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        }
        const message = messageType.fromBinary(this.value);
        let json = message.toJson(options);
        if (typeName.startsWith("google.protobuf.") || json === null || Array.isArray(json) || typeof json !== "object") {
            json = {
                value: json
            };
        }
        json["@type"] = this.typeUrl;
        return json;
    }
    fromJson(json, options) {
        if (json === null || Array.isArray(json) || typeof json != "object") {
            throw new Error(`cannot decode message google.protobuf.Any from JSON: expected object but got ${json === null ? "null" : Array.isArray(json) ? "array" : typeof json}`);
        }
        if (Object.keys(json).length == 0) {
            return this;
        }
        const typeUrl = json["@type"];
        if (typeof typeUrl != "string" || typeUrl == "") {
            throw new Error(`cannot decode message google.protobuf.Any from JSON: "@type" is empty`);
        }
        const typeName = this.typeUrlToName(typeUrl), messageType = options?.typeRegistry?.findMessage(typeName);
        if (!messageType) {
            throw new Error(`cannot decode message google.protobuf.Any from JSON: ${typeUrl} is not in the type registry`);
        }
        let message;
        if (typeName.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(json, "value")) {
            message = messageType.fromJson(json["value"], options);
        } else {
            const copy = Object.assign({}, json);
            delete copy["@type"];
            message = messageType.fromJson(copy, options);
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
    unpack(registry) {
        if (this.typeUrl === "") {
            return void 0;
        }
        const messageType = registry.findMessage(this.typeUrlToName(this.typeUrl));
        if (!messageType) {
            return void 0;
        }
        return messageType.fromBinary(this.value);
    }
    is(type) {
        if (this.typeUrl === "") {
            return false;
        }
        const name = this.typeUrlToName(this.typeUrl);
        let typeName = "";
        if (typeof type === "string") {
            typeName = type;
        } else {
            typeName = type.typeName;
        }
        return name === typeName;
    }
    typeNameToUrl(name) {
        return `type.googleapis.com/${name}`;
    }
    typeUrlToName(url) {
        if (!url.length) {
            throw new Error(`invalid type url: ${url}`);
        }
        const slash = url.lastIndexOf("/");
        const name = slash >= 0 ? url.substring(slash + 1) : url;
        if (!name.length) {
            throw new Error(`invalid type url: ${url}`);
        }
        return name;
    }
    static pack(message) {
        const any = new _Any();
        any.packFrom(message);
        return any;
    }
    static fromBinary(bytes, options) {
        return new _Any().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Any().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Any().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.equals(_Any, a, b);
    }
};
_Any.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3;
_Any.typeName = "google.protobuf.Any";
_Any.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3.util.newFieldList(()=>[
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
let Any = _Any;
