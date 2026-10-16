require.r(exports);
require.d(exports, {
    clearExtension: ()=>clearExtension,
    getExtension: ()=>getExtension,
    hasExtension: ()=>hasExtension,
    setExtension: ()=>setExtension
});
var _private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-10.js");
var _private_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-13.js");
function getExtension(message, extension, options) {
    assertExtendee(extension, message);
    const opt = extension.runtime.bin.makeReadOptions(options);
    const ufs = (0, _private_extensions_js__WEBPACK_IMPORTED_MODULE_1__.filterUnknownFields)(message.getType().runtime.bin.listUnknownFields(message), extension.field);
    const [container, get] = (0, _private_extensions_js__WEBPACK_IMPORTED_MODULE_1__.createExtensionContainer)(extension);
    for (const uf of ufs){
        extension.runtime.bin.readField(container, opt.readerFactory(uf.data), extension.field, uf.wireType, opt);
    }
    return get();
}
function setExtension(message, extension, value, options) {
    assertExtendee(extension, message);
    const readOpt = extension.runtime.bin.makeReadOptions(options);
    const writeOpt = extension.runtime.bin.makeWriteOptions(options);
    if (hasExtension(message, extension)) {
        const ufs = message.getType().runtime.bin.listUnknownFields(message).filter((uf)=>uf.no != extension.field.no);
        message.getType().runtime.bin.discardUnknownFields(message);
        for (const uf of ufs){
            message.getType().runtime.bin.onUnknownField(message, uf.no, uf.wireType, uf.data);
        }
    }
    const writer = writeOpt.writerFactory();
    let f = extension.field;
    if (!f.opt && !f.repeated && (f.kind == "enum" || f.kind == "scalar")) {
        f = {
            ...extension.field,
            opt: true
        };
    }
    extension.runtime.bin.writeField(f, value, writer, writeOpt);
    const reader = readOpt.readerFactory(writer.finish());
    while(reader.pos < reader.len){
        const [no, wireType] = reader.tag();
        const data = reader.skip(wireType, no);
        message.getType().runtime.bin.onUnknownField(message, no, wireType, data);
    }
}
function clearExtension(message, extension) {
    assertExtendee(extension, message);
    if (hasExtension(message, extension)) {
        const bin = message.getType().runtime.bin;
        const ufs = bin.listUnknownFields(message).filter((uf)=>uf.no != extension.field.no);
        bin.discardUnknownFields(message);
        for (const uf of ufs){
            bin.onUnknownField(message, uf.no, uf.wireType, uf.data);
        }
    }
}
function hasExtension(message, extension) {
    const messageType = message.getType();
    return extension.extendee.typeName === messageType.typeName && !!messageType.runtime.bin.listUnknownFields(message).find((uf)=>uf.no == extension.field.no);
}
function assertExtendee(extension, message) {
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(extension.extendee.typeName == message.getType().typeName, `extension ${extension.typeName} can only be applied to message ${extension.extendee.typeName}`);
}
