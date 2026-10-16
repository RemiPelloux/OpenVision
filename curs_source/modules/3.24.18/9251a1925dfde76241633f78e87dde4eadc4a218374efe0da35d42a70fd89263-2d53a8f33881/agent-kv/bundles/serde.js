var decoder, encoder, Utf8Serde, utf8Serde, ProtoSerde, HEX_LUT;
export { HEX_LUT, ProtoSerde, Utf8Serde, decoder, encoder, utf8Serde };
var __wakaru_init_serde_initialized = false;
export function init_serde() {
if (__wakaru_init_serde_initialized) return;
__wakaru_init_serde_initialized = true;
"use strict";
decoder = new TextDecoder();
encoder = new TextEncoder();
Utf8Serde = class {
    serialize(value) {
        return encoder.encode(value);
    }
    deserialize(blob) {
        return decoder.decode(blob);
    }
    getBlobType() {
        return {
            kind: "string"
        };
    }
};
utf8Serde = new Utf8Serde();
ProtoSerde = class {
    constructor(proto){
        this.proto = proto;
    }
    serialize(value) {
        return value.toBinary();
    }
    deserialize(blob) {
        return this.proto.fromBinary(blob);
    }
    getBlobType() {
        return {
            kind: "proto",
            typeName: this.proto.typeName
        };
    }
};
HEX_LUT = Array.from({
    length: 256
}, (_2, i)=>i.toString(16).padStart(2, "0"));

}
