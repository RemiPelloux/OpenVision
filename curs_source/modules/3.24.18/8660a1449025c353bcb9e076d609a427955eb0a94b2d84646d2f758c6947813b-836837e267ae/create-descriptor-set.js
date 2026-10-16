import { C$e } from "./assert_2.js";
import { Ij, gei } from "./descriptor_pb.js";
import { QEy } from "./feature-set.js";
import { L_t } from "./is-message.js";
import { BJn } from "./names.js";
import { Uc, e5e } from "./scalar.js";
import { pdd } from "./service-type.js";
import { ZEy } from "./text-format.js";
import { E } from "./tslib.es6.js";
var JEy;
export { JEy };
var __wakaru_Udd_initialized = false;
export function Udd() {
if (__wakaru_Udd_initialized) return;
__wakaru_Udd_initialized = true;
"use strict";
E(), gei(), C$e(), pdd(), BJn(), ZEy(), QEy(), e5e(), L_t(), JEy = {
    [Ij.DOUBLE]: Uc.DOUBLE,
    [Ij.FLOAT]: Uc.FLOAT,
    [Ij.INT64]: Uc.INT64,
    [Ij.UINT64]: Uc.UINT64,
    [Ij.INT32]: Uc.INT32,
    [Ij.FIXED64]: Uc.FIXED64,
    [Ij.FIXED32]: Uc.FIXED32,
    [Ij.BOOL]: Uc.BOOL,
    [Ij.STRING]: Uc.STRING,
    [Ij.GROUP]: void 0,
    [Ij.MESSAGE]: void 0,
    [Ij.BYTES]: Uc.BYTES,
    [Ij.UINT32]: Uc.UINT32,
    [Ij.ENUM]: void 0,
    [Ij.SFIXED32]: Uc.SFIXED32,
    [Ij.SFIXED64]: Uc.SFIXED64,
    [Ij.SINT32]: Uc.SINT32,
    [Ij.SINT64]: Uc.SINT64
};

}
