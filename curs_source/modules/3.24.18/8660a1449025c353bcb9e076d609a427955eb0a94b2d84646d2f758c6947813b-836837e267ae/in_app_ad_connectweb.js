import { BSl, Cjg, Ejg, FSl, Ijg, OSl, Rjg, Tjg, USl } from "./in_app_ad_pb.js";
import { hr } from "./protobuf.js";
import { ke } from "./service-type.js";
import { E } from "./tslib.es6.js";
var FRi;
export { FRi };
var __wakaru_jSl_initialized = false;
export function jSl() {
if (__wakaru_jSl_initialized) return;
__wakaru_jSl_initialized = true;
"use strict";
E(), USl(), hr(), FRi = {
    typeName: "aiserver.v1.InAppAdService",
    methods: {
        hasSeenAd: {
            name: "HasSeenAd",
            I: OSl,
            O: Cjg,
            kind: ke.Unary
        },
        markAdAsSeen: {
            name: "MarkAdAsSeen",
            I: FSl,
            O: Tjg,
            kind: ke.Unary
        },
        resetUserAdViews: {
            name: "ResetUserAdViews",
            I: BSl,
            O: Ejg,
            kind: ke.Unary
        },
        getAllAdPreviews: {
            name: "GetAllAdPreviews",
            I: Ijg,
            O: Rjg,
            kind: ke.Unary
        }
    }
};

}
