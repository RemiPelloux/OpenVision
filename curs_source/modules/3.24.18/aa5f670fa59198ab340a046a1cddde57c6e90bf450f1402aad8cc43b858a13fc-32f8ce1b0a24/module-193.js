require.r(exports);
require.d(exports, {
    toPlainMessage: ()=>toPlainMessage
});
var _is_message_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-194.js");
function toPlainMessage(message) {
    if (!(0, _is_message_js__WEBPACK_IMPORTED_MODULE_0__.isMessage)(message)) {
        return message;
    }
    const type = message.getType();
    const target = {};
    for (const member of type.fields.byMember()){
        const source = message[member.localName];
        let copy;
        if (member.repeated) {
            copy = source.map((e)=>toPlainValue(e));
        } else if (member.kind == "map") {
            copy = {};
            for (const [key, v] of Object.entries(source)){
                copy[key] = toPlainValue(v);
            }
        } else if (member.kind == "oneof") {
            const f = member.findField(source.case);
            copy = f ? {
                case: source.case,
                value: toPlainValue(source.value)
            } : {
                case: undefined
            };
        } else {
            copy = toPlainValue(source);
        }
        target[member.localName] = copy;
    }
    return target;
}
function toPlainValue(value) {
    if (value === undefined) {
        return value;
    }
    if ((0, _is_message_js__WEBPACK_IMPORTED_MODULE_0__.isMessage)(value)) {
        return toPlainMessage(value);
    }
    if (value instanceof Uint8Array) {
        const c = new Uint8Array(value.byteLength);
        c.set(value);
        return c;
    }
    return value;
}
