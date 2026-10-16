import { $i } from "./assert_2.js";
import { Tn, og } from "./descriptor_pb.js";
import { oHe } from "./feature-set.js";
import { vo } from "./is-message.js";
import { Mh } from "./names.js";
import { V, pi } from "./scalar.js";
import { Hj } from "./service-type.js";
import { aHe } from "./text-format.js";
import { h } from "./tslib.es6.js";
var cHe;
export { cHe };
var __wakaru__H_initialized = false;
export function _H() {
if (__wakaru__H_initialized) return;
__wakaru__H_initialized = true;
"use strict";
h(), og(), $i(), Hj(), Mh(), aHe(), oHe(), pi(), vo(), cHe = {
    [Tn.DOUBLE]: V.DOUBLE,
    [Tn.FLOAT]: V.FLOAT,
    [Tn.INT64]: V.INT64,
    [Tn.UINT64]: V.UINT64,
    [Tn.INT32]: V.INT32,
    [Tn.FIXED64]: V.FIXED64,
    [Tn.FIXED32]: V.FIXED32,
    [Tn.BOOL]: V.BOOL,
    [Tn.STRING]: V.STRING,
    [Tn.GROUP]: void 0,
    [Tn.MESSAGE]: void 0,
    [Tn.BYTES]: V.BYTES,
    [Tn.UINT32]: V.UINT32,
    [Tn.ENUM]: void 0,
    [Tn.SFIXED32]: V.SFIXED32,
    [Tn.SFIXED64]: V.SFIXED64,
    [Tn.SINT32]: V.SINT32,
    [Tn.SINT64]: V.SINT64
};

}
