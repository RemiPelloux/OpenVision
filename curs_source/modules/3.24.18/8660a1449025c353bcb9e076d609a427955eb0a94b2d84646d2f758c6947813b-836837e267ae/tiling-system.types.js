import { pWe } from "./LYd.js";
import { XSt } from "./drag-data.js";
import { Ajh, fIS, rva } from "./ipa.js";
import { aFr } from "./schemas_4.js";
import { E } from "./tslib.es6.js";
var QUr, Vxa;
export { QUr, Vxa };
var __wakaru_Fwn_initialized = false;
export function Fwn() {
if (__wakaru_Fwn_initialized) return;
__wakaru_Fwn_initialized = true;
"use strict";
E(), XSt(), aFr(), QUr = pWe("tiling-panel", ()=>Ajh({
        panelId: rva(),
        managerId: fIS()
    })), Vxa = {
    minPanelSize: 50,
    sashLayoutSize: 1,
    sashSize: 4,
    sashHoverSize: 12,
    edgeThreshold: .375
};

}
