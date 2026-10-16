import { C$e } from "./assert_2.js";
import { KMo, VMo, zMo } from "./binary-encoding.js";
import { $Mo } from "./field-wrapper.js";
import { L_t } from "./is-message.js";
import { zud } from "./reflect.js";
import { e5e } from "./scalar.js";
import { D_t } from "./scalars.js";
import { E } from "./tslib.es6.js";
var u4t, YMo, XMo;
export { XMo, YMo, u4t };
var __wakaru_$Ey_initialized = false;
export function $Ey() {
if (__wakaru_$Ey_initialized) return;
__wakaru_$Ey_initialized = true;
"use strict";
E(), KMo(), $Mo(), D_t(), C$e(), zud(), e5e(), L_t(), u4t = Symbol("@bufbuild/protobuf/unknown-fields"), YMo = {
    readUnknownFields: !0,
    readerFactory: (t)=>new VMo(t)
}, XMo = {
    writeUnknownFields: !0,
    writerFactory: ()=>new zMo
};

}
