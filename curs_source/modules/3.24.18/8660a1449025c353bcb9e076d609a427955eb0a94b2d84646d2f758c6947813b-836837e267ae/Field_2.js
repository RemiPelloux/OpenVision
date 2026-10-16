import { QOr, h4h } from "./FieldControl.js";
import { Bma, T1S } from "./FieldDescription.js";
import { Fma, w1S } from "./FieldError.js";
import { Hma, x1S } from "./FieldItem.js";
import { Oma, k1S } from "./FieldLabel.js";
import { S1S } from "./FieldRoot.js";
import { I1S, jma } from "./FieldValidity.js";
import { L1S } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { Yvn } from "./useRender.js";
import { createContext as M1S } from "./react-runtime/react/esm-index-production.js";
var qma, zUt;
export { qma, zUt };
var __wakaru_e5r_initialized = false;
export function e5r() {
if (__wakaru_e5r_initialized) return;
__wakaru_e5r_initialized = true;
"use strict";
E(), Yvn(), S1S(), x1S(), I1S(), h4h(), w1S(), T1S(), k1S(), qma = M1S(void 0), zUt = {
    Root: L1S,
    Label: Oma,
    Description: Bma,
    Error: Fma,
    Control: QOr,
    Validity: jma,
    Item: Hma
};

}
