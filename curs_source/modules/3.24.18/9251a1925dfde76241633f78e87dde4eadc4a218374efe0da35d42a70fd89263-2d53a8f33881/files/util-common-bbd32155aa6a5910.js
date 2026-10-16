import { require_is_message } from "../is-message.js";
import { require_enum } from "./enum.js";
import { require_scalars } from "./scalars.js";
import { require_scalar } from "../scalar.js";
var __wakaru_require_util_common_cache;
export function require_util_common() {
if (__wakaru_require_util_common_cache) return __wakaru_require_util_common_cache;
var exports2 = {};
__wakaru_require_util_common_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.makeUtilCommon = void 0;
var enum_js_1 = require_enum();
var scalars_js_1 = require_scalars();
var scalar_js_1 = require_scalar();
var is_message_js_1 = require_is_message();
function makeUtilCommon2() {
    return {
        setEnumType: enum_js_1.setEnumType,
        initPartial (source, target) {
            if (source === void 0) {
                return;
            }
            const type2 = target.getType();
            for (const member of type2.fields.byMember()){
                const localName = member.localName, t = target, s3 = source;
                if (s3[localName] == null) {
                    continue;
                }
                switch(member.kind){
                    case "oneof":
                        const sk = s3[localName].case;
                        if (sk === void 0) {
                            continue;
                        }
                        const sourceField = member.findField(sk);
                        let val = s3[localName].value;
                        if (sourceField && sourceField.kind == "message" && !(0, is_message_js_1.isMessage)(val, sourceField.T)) {
                            val = new sourceField.T(val);
                        } else if (sourceField && sourceField.kind === "scalar" && sourceField.T === scalar_js_1.ScalarType.BYTES) {
                            val = toU8Arr2(val);
                        }
                        t[localName] = {
                            case: sk,
                            value: val
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let copy = s3[localName];
                        if (member.T === scalar_js_1.ScalarType.BYTES) {
                            copy = member.repeated ? copy.map(toU8Arr2) : toU8Arr2(copy);
                        }
                        t[localName] = copy;
                        break;
                    case "map":
                        switch(member.V.kind){
                            case "scalar":
                            case "enum":
                                if (member.V.T === scalar_js_1.ScalarType.BYTES) {
                                    for (const [k2, v2] of Object.entries(s3[localName])){
                                        t[localName][k2] = toU8Arr2(v2);
                                    }
                                } else {
                                    Object.assign(t[localName], s3[localName]);
                                }
                                break;
                            case "message":
                                const messageType = member.V.T;
                                for (const k2 of Object.keys(s3[localName])){
                                    let val2 = s3[localName][k2];
                                    if (!messageType.fieldWrapper) {
                                        val2 = new messageType(val2);
                                    }
                                    t[localName][k2] = val2;
                                }
                                break;
                        }
                        break;
                    case "message":
                        const mt2 = member.T;
                        if (member.repeated) {
                            t[localName] = s3[localName].map((val2)=>(0, is_message_js_1.isMessage)(val2, mt2) ? val2 : new mt2(val2));
                        } else {
                            const val2 = s3[localName];
                            if (mt2.fieldWrapper) {
                                if (mt2.typeName === "google.protobuf.BytesValue") {
                                    t[localName] = toU8Arr2(val2);
                                } else {
                                    t[localName] = val2;
                                }
                            } else {
                                t[localName] = (0, is_message_js_1.isMessage)(val2, mt2) ? val2 : new mt2(val2);
                            }
                        }
                        break;
                }
            }
        },
        equals (type2, a, b2) {
            if (a === b2) {
                return true;
            }
            if (!a || !b2) {
                return false;
            }
            return type2.fields.byMember().every((m2)=>{
                const va = a[m2.localName];
                const vb = b2[m2.localName];
                if (m2.repeated) {
                    if (va.length !== vb.length) {
                        return false;
                    }
                    switch(m2.kind){
                        case "message":
                            return va.every((a2, i)=>m2.T.equals(a2, vb[i]));
                        case "scalar":
                            return va.every((a2, i)=>(0, scalars_js_1.scalarEquals)(m2.T, a2, vb[i]));
                        case "enum":
                            return va.every((a2, i)=>(0, scalars_js_1.scalarEquals)(scalar_js_1.ScalarType.INT32, a2, vb[i]));
                    }
                    throw new Error(`repeated cannot contain ${m2.kind}`);
                }
                switch(m2.kind){
                    case "message":
                        let a2 = va;
                        let b3 = vb;
                        if (m2.T.fieldWrapper) {
                            if (a2 !== void 0 && !(0, is_message_js_1.isMessage)(a2)) {
                                a2 = m2.T.fieldWrapper.wrapField(a2);
                            }
                            if (b3 !== void 0 && !(0, is_message_js_1.isMessage)(b3)) {
                                b3 = m2.T.fieldWrapper.wrapField(b3);
                            }
                        }
                        return m2.T.equals(a2, b3);
                    case "enum":
                        return (0, scalars_js_1.scalarEquals)(scalar_js_1.ScalarType.INT32, va, vb);
                    case "scalar":
                        return (0, scalars_js_1.scalarEquals)(m2.T, va, vb);
                    case "oneof":
                        if (va.case !== vb.case) {
                            return false;
                        }
                        const s3 = m2.findField(va.case);
                        if (s3 === void 0) {
                            return true;
                        }
                        switch(s3.kind){
                            case "message":
                                return s3.T.equals(va.value, vb.value);
                            case "enum":
                                return (0, scalars_js_1.scalarEquals)(scalar_js_1.ScalarType.INT32, va.value, vb.value);
                            case "scalar":
                                return (0, scalars_js_1.scalarEquals)(s3.T, va.value, vb.value);
                        }
                        throw new Error(`oneof cannot contain ${s3.kind}`);
                    case "map":
                        const keys = Object.keys(va).concat(Object.keys(vb));
                        switch(m2.V.kind){
                            case "message":
                                const messageType = m2.V.T;
                                return keys.every((k2)=>messageType.equals(va[k2], vb[k2]));
                            case "enum":
                                return keys.every((k2)=>(0, scalars_js_1.scalarEquals)(scalar_js_1.ScalarType.INT32, va[k2], vb[k2]));
                            case "scalar":
                                const scalarType = m2.V.T;
                                return keys.every((k2)=>(0, scalars_js_1.scalarEquals)(scalarType, va[k2], vb[k2]));
                        }
                        break;
                }
            });
        },
        clone (message) {
            const type2 = message.getType(), target = new type2(), any2 = target;
            for (const member of type2.fields.byMember()){
                const source = message[member.localName];
                let copy;
                if (member.repeated) {
                    copy = source.map(cloneSingularField2);
                } else if (member.kind == "map") {
                    copy = any2[member.localName];
                    for (const [key, v2] of Object.entries(source)){
                        copy[key] = cloneSingularField2(v2);
                    }
                } else if (member.kind == "oneof") {
                    const f2 = member.findField(source.case);
                    copy = f2 ? {
                        case: source.case,
                        value: cloneSingularField2(source.value)
                    } : {
                        case: void 0
                    };
                } else {
                    copy = cloneSingularField2(source);
                }
                any2[member.localName] = copy;
            }
            for (const uf of type2.runtime.bin.listUnknownFields(message)){
                type2.runtime.bin.onUnknownField(any2, uf.no, uf.wireType, uf.data);
            }
            return target;
        }
    };
}
exports2.makeUtilCommon = makeUtilCommon2;
function cloneSingularField2(value) {
    if (value === void 0) {
        return value;
    }
    if ((0, is_message_js_1.isMessage)(value)) {
        return value.clone();
    }
    if (value instanceof Uint8Array) {
        const c = new Uint8Array(value.byteLength);
        c.set(value);
        return c;
    }
    return value;
}
function toU8Arr2(input) {
    return input instanceof Uint8Array ? input : new Uint8Array(input);
}

return exports2;
}
