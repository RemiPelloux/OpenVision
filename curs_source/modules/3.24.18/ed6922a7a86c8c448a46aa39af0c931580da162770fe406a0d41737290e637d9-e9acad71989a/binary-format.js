import { vRe } from "./assert_2.js";
import { dss, lss, uss } from "./binary-encoding.js";
import { rss } from "./field-wrapper.js";
import { LKe } from "./is-message.js";
import { lGc } from "./reflect.js";
import { jwe } from "./scalar.js";
import { MKe } from "./scalars.js";
import { x } from "./tslib.es6.js";
var xmt, hss, pss;
export { hss, pss, xmt };
var __wakaru_gwg_initialized = false;
export function gwg() {
if (__wakaru_gwg_initialized) return;
__wakaru_gwg_initialized = true;
"use strict";
x(), dss(), rss(), MKe(), vRe(), lGc(), jwe(), LKe(), xmt = Symbol("@bufbuild/protobuf/unknown-fields"), hss = {
    readUnknownFields: !0,
    readerFactory: (e)=>new uss(e)
}, pss = {
    writeUnknownFields: !0,
    writerFactory: ()=>new lss
};

}
