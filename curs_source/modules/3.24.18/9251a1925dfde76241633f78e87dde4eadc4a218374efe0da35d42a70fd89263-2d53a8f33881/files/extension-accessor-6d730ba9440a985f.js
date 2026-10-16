import { require_assert } from "./private/assert.js";
import { require_extensions } from "./private/extensions.js";
var __wakaru_require_extension_accessor_cache;
export function require_extension_accessor() {
if (__wakaru_require_extension_accessor_cache) return __wakaru_require_extension_accessor_cache;
var exports2 = {};
__wakaru_require_extension_accessor_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.hasExtension = exports2.clearExtension = exports2.setExtension = exports2.getExtension = void 0;
var assert_js_1 = require_assert();
var extensions_js_1 = require_extensions();
function getExtension3(message, extension3, options2) {
    assertExtendee2(extension3, message);
    const opt = extension3.runtime.bin.makeReadOptions(options2);
    const ufs = (0, extensions_js_1.filterUnknownFields)(message.getType().runtime.bin.listUnknownFields(message), extension3.field);
    const [container, get] = (0, extensions_js_1.createExtensionContainer)(extension3);
    for (const uf of ufs){
        extension3.runtime.bin.readField(container, opt.readerFactory(uf.data), extension3.field, uf.wireType, opt);
    }
    return get();
}
exports2.getExtension = getExtension3;
function setExtension2(message, extension3, value, options2) {
    assertExtendee2(extension3, message);
    const readOpt = extension3.runtime.bin.makeReadOptions(options2);
    const writeOpt = extension3.runtime.bin.makeWriteOptions(options2);
    if (hasExtension2(message, extension3)) {
        const ufs = message.getType().runtime.bin.listUnknownFields(message).filter((uf)=>uf.no != extension3.field.no);
        message.getType().runtime.bin.discardUnknownFields(message);
        for (const uf of ufs){
            message.getType().runtime.bin.onUnknownField(message, uf.no, uf.wireType, uf.data);
        }
    }
    const writer = writeOpt.writerFactory();
    let f2 = extension3.field;
    if (!f2.opt && !f2.repeated && (f2.kind == "enum" || f2.kind == "scalar")) {
        f2 = Object.assign(Object.assign({}, extension3.field), {
            opt: true
        });
    }
    extension3.runtime.bin.writeField(f2, value, writer, writeOpt);
    const reader = readOpt.readerFactory(writer.finish());
    while(reader.pos < reader.len){
        const [no2, wireType] = reader.tag();
        const data = reader.skip(wireType, no2);
        message.getType().runtime.bin.onUnknownField(message, no2, wireType, data);
    }
}
exports2.setExtension = setExtension2;
function clearExtension(message, extension3) {
    assertExtendee2(extension3, message);
    if (hasExtension2(message, extension3)) {
        const bin = message.getType().runtime.bin;
        const ufs = bin.listUnknownFields(message).filter((uf)=>uf.no != extension3.field.no);
        bin.discardUnknownFields(message);
        for (const uf of ufs){
            bin.onUnknownField(message, uf.no, uf.wireType, uf.data);
        }
    }
}
exports2.clearExtension = clearExtension;
function hasExtension2(message, extension3) {
    const messageType = message.getType();
    return extension3.extendee.typeName === messageType.typeName && !!messageType.runtime.bin.listUnknownFields(message).find((uf)=>uf.no == extension3.field.no);
}
exports2.hasExtension = hasExtension2;
function assertExtendee2(extension3, message) {
    (0, assert_js_1.assert)(extension3.extendee.typeName == message.getType().typeName, `extension ${extension3.typeName} can only be applied to message ${extension3.extendee.typeName}`);
}

return exports2;
}
