import { $i } from "./assert_2.js";
import { Cj, OM, Rj } from "./binary-encoding.js";
import { AM } from "./field-wrapper.js";
import { vo } from "./is-message.js";
import { yj } from "./reflect.js";
import { pi } from "./scalar.js";
import { _o } from "./scalars.js";
import { h } from "./tslib.es6.js";
var Wc, LM, UM;
export { LM, UM, Wc };
var __wakaru_Jje_initialized = false;
export function Jje() {
if (__wakaru_Jje_initialized) return;
__wakaru_Jje_initialized = true;
"use strict";
h(), OM(), AM(), _o(), $i(), yj(), pi(), vo(), Wc = Symbol("@bufbuild/protobuf/unknown-fields"), LM = {
    readUnknownFields: !0,
    readerFactory: (e)=>new Cj(e)
}, UM = {
    writeUnknownFields: !0,
    writerFactory: ()=>new Rj
};

}
