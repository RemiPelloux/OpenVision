import { F3l, IDi } from "./FieldControl.js";
import { Hcf, z1s } from "./FieldDescription.js";
import { Ucf, q1s } from "./FieldError.js";
import { Vcf, Z1s } from "./FieldItem.js";
import { Bcf, j1s } from "./FieldLabel.js";
import { Fcf } from "./FieldRoot.js";
import { Gcf, Y1s } from "./FieldValidity.js";
import { Zcf } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { $ki } from "./useRender.js";
import { createContext as Kcf } from "./react-runtime/react/esm-index-production.js";
var eTs, o6t;
export { eTs, o6t };
var __wakaru_ADi_initialized = false;
export function ADi() {
if (__wakaru_ADi_initialized) return;
__wakaru_ADi_initialized = true;
"use strict";
x(), $ki(), Fcf(), Vcf(), Gcf(), F3l(), Ucf(), Hcf(), Bcf(), eTs = Kcf(void 0), o6t = {
    Root: Zcf,
    Label: j1s,
    Description: z1s,
    Error: q1s,
    Control: IDi,
    Validity: Y1s,
    Item: Z1s
};

}
