import { vRe } from "./assert_2.js";
import { b5, sbn } from "./descriptor_pb.js";
import { Ewg } from "./feature-set.js";
import { LKe } from "./is-message.js";
import { I_n } from "./names.js";
import { Lc, jwe } from "./scalar.js";
import { RGc } from "./service-type.js";
import { Twg } from "./text-format.js";
import { x } from "./tslib.es6.js";
var xwg;
export { xwg };
var __wakaru_nVc_initialized = false;
export function nVc() {
if (__wakaru_nVc_initialized) return;
__wakaru_nVc_initialized = true;
"use strict";
x(), sbn(), vRe(), RGc(), I_n(), Twg(), Ewg(), jwe(), LKe(), xwg = {
    [b5.DOUBLE]: Lc.DOUBLE,
    [b5.FLOAT]: Lc.FLOAT,
    [b5.INT64]: Lc.INT64,
    [b5.UINT64]: Lc.UINT64,
    [b5.INT32]: Lc.INT32,
    [b5.FIXED64]: Lc.FIXED64,
    [b5.FIXED32]: Lc.FIXED32,
    [b5.BOOL]: Lc.BOOL,
    [b5.STRING]: Lc.STRING,
    [b5.GROUP]: void 0,
    [b5.MESSAGE]: void 0,
    [b5.BYTES]: Lc.BYTES,
    [b5.UINT32]: Lc.UINT32,
    [b5.ENUM]: void 0,
    [b5.SFIXED32]: Lc.SFIXED32,
    [b5.SFIXED64]: Lc.SFIXED64,
    [b5.SINT32]: Lc.SINT32,
    [b5.SINT64]: Lc.SINT64
};

}
