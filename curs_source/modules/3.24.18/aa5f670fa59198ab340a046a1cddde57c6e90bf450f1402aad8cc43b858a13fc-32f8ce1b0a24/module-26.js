require.r(exports);
require.d(exports, {
    makeUtilCommon: ()=>makeUtilCommon
});
var _enum_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-9.js");
var _scalars_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-14.js");
var _scalar_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-17.js");
var _is_message_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-23.js");
function makeUtilCommon() {
    return {
        setEnumType: _enum_js__WEBPACK_IMPORTED_MODULE_0__.setEnumType,
        initPartial (source, target) {
            if (source === void 0) {
                return;
            }
            const type = target.getType();
            for (const member of type.fields.byMember()){
                const localName = member.localName, t = target, s = source;
                if (s[localName] == null) {
                    continue;
                }
                switch(member.kind){
                    case "oneof":
                        const sk = s[localName].case;
                        if (sk === void 0) {
                            continue;
                        }
                        const sourceField = member.findField(sk);
                        let val = s[localName].value;
                        if (sourceField && sourceField.kind == "message" && !(0, _is_message_js__WEBPACK_IMPORTED_MODULE_3__.isMessage)(val, sourceField.T)) {
                            val = new sourceField.T(val);
                        } else if (sourceField && sourceField.kind === "scalar" && sourceField.T === _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BYTES) {
                            val = toU8Arr(val);
                        }
                        t[localName] = {
                            case: sk,
                            value: val
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let copy = s[localName];
                        if (member.T === _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BYTES) {
                            copy = member.repeated ? copy.map(toU8Arr) : toU8Arr(copy);
                        }
                        t[localName] = copy;
                        break;
                    case "map":
                        switch(member.V.kind){
                            case "scalar":
                            case "enum":
                                if (member.V.T === _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BYTES) {
                                    for (const [k, v] of Object.entries(s[localName])){
                                        t[localName][k] = toU8Arr(v);
                                    }
                                } else {
                                    Object.assign(t[localName], s[localName]);
                                }
                                break;
                            case "message":
                                const messageType = member.V.T;
                                for (const k of Object.keys(s[localName])){
                                    let val2 = s[localName][k];
                                    if (!messageType.fieldWrapper) {
                                        val2 = new messageType(val2);
                                    }
                                    t[localName][k] = val2;
                                }
                                break;
                        }
                        break;
                    case "message":
                        const mt = member.T;
                        if (member.repeated) {
                            t[localName] = s[localName].map((val2)=>(0, _is_message_js__WEBPACK_IMPORTED_MODULE_3__.isMessage)(val2, mt) ? val2 : new mt(val2));
                        } else {
                            const val2 = s[localName];
                            if (mt.fieldWrapper) {
                                if (mt.typeName === "google.protobuf.BytesValue") {
                                    t[localName] = toU8Arr(val2);
                                } else {
                                    t[localName] = val2;
                                }
                            } else {
                                t[localName] = (0, _is_message_js__WEBPACK_IMPORTED_MODULE_3__.isMessage)(val2, mt) ? val2 : new mt(val2);
                            }
                        }
                        break;
                }
            }
        },
        equals (type, a, b) {
            if (a === b) {
                return true;
            }
            if (!a || !b) {
                return false;
            }
            return type.fields.byMember().every((m)=>{
                const va = a[m.localName];
                const vb = b[m.localName];
                if (m.repeated) {
                    if (va.length !== vb.length) {
                        return false;
                    }
                    switch(m.kind){
                        case "message":
                            return va.every((a2, i)=>m.T.equals(a2, vb[i]));
                        case "scalar":
                            return va.every((a2, i)=>(0, _scalars_js__WEBPACK_IMPORTED_MODULE_1__.scalarEquals)(m.T, a2, vb[i]));
                        case "enum":
                            return va.every((a2, i)=>(0, _scalars_js__WEBPACK_IMPORTED_MODULE_1__.scalarEquals)(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32, a2, vb[i]));
                    }
                    throw new Error(`repeated cannot contain ${m.kind}`);
                }
                switch(m.kind){
                    case "message":
                        return m.T.equals(va, vb);
                    case "enum":
                        return (0, _scalars_js__WEBPACK_IMPORTED_MODULE_1__.scalarEquals)(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32, va, vb);
                    case "scalar":
                        return (0, _scalars_js__WEBPACK_IMPORTED_MODULE_1__.scalarEquals)(m.T, va, vb);
                    case "oneof":
                        if (va.case !== vb.case) {
                            return false;
                        }
                        const s = m.findField(va.case);
                        if (s === void 0) {
                            return true;
                        }
                        switch(s.kind){
                            case "message":
                                return s.T.equals(va.value, vb.value);
                            case "enum":
                                return (0, _scalars_js__WEBPACK_IMPORTED_MODULE_1__.scalarEquals)(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32, va.value, vb.value);
                            case "scalar":
                                return (0, _scalars_js__WEBPACK_IMPORTED_MODULE_1__.scalarEquals)(s.T, va.value, vb.value);
                        }
                        throw new Error(`oneof cannot contain ${s.kind}`);
                    case "map":
                        const keys = Object.keys(va).concat(Object.keys(vb));
                        switch(m.V.kind){
                            case "message":
                                const messageType = m.V.T;
                                return keys.every((k)=>messageType.equals(va[k], vb[k]));
                            case "enum":
                                return keys.every((k)=>(0, _scalars_js__WEBPACK_IMPORTED_MODULE_1__.scalarEquals)(_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32, va[k], vb[k]));
                            case "scalar":
                                const scalarType = m.V.T;
                                return keys.every((k)=>(0, _scalars_js__WEBPACK_IMPORTED_MODULE_1__.scalarEquals)(scalarType, va[k], vb[k]));
                        }
                        break;
                }
            });
        },
        clone (message) {
            const type = message.getType(), target = new type(), any = target;
            for (const member of type.fields.byMember()){
                const source = message[member.localName];
                let copy;
                if (member.repeated) {
                    copy = source.map(cloneSingularField);
                } else if (member.kind == "map") {
                    copy = any[member.localName];
                    for (const [key, v] of Object.entries(source)){
                        copy[key] = cloneSingularField(v);
                    }
                } else if (member.kind == "oneof") {
                    const f = member.findField(source.case);
                    copy = f ? {
                        case: source.case,
                        value: cloneSingularField(source.value)
                    } : {
                        case: void 0
                    };
                } else {
                    copy = cloneSingularField(source);
                }
                any[member.localName] = copy;
            }
            for (const uf of type.runtime.bin.listUnknownFields(message)){
                type.runtime.bin.onUnknownField(any, uf.no, uf.wireType, uf.data);
            }
            return target;
        }
    };
}
function cloneSingularField(value) {
    if (value === void 0) {
        return value;
    }
    if ((0, _is_message_js__WEBPACK_IMPORTED_MODULE_3__.isMessage)(value)) {
        return value.clone();
    }
    if (value instanceof Uint8Array) {
        const c = new Uint8Array(value.byteLength);
        c.set(value);
        return c;
    }
    return value;
}
function toU8Arr(input) {
    return input instanceof Uint8Array ? input : new Uint8Array(input);
}
