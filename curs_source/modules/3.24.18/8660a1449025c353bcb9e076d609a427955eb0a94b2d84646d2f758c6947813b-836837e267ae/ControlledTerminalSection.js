import { pk } from "./_Hv.js";
import { mk } from "./gallerySection.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { Ee } from "./ze.js";
var eVv, tVv;
export { eVv, tVv };
var __wakaru_baC_initialized = false;
export function baC() {
if (__wakaru_baC_initialized) return;
__wakaru_baC_initialized = true;
"use strict";
E(), at(), at(), mk(), eVv = wt("<div>deprecated"), tVv = ()=>Ee(pk, {
        title: "Controlled Terminal",
        get children () {
            return eVv();
        }
    });

}
