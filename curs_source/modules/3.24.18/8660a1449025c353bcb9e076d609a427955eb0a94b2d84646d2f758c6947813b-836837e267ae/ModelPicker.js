import { hdp } from "./CompactModelPickerContent.js";
import { BW } from "./Menu.js";
import { xe1 } from "./ModelPickerContent.js";
import { JY } from "./ModelPickerContext.js";
import { Ldp } from "./ModelPickerTrigger.js";
import { $e1, Edp, Ee1, Idp, Ie1, adp, g1n, ke1, w7r } from "./ipa.js";
import { ipi } from "./menu-focus.js";
import { awt } from "./menu-layer-context.js";
import { aJ } from "./menu_2.js";
import { Fdp } from "./pickerChoices.js";
import { E } from "./tslib.es6.js";
import { VFe } from "./variantSolver.js";
import { forwardRef as Oe1 } from "./react-runtime/react/esm-index-production.js";
var Wdp, nX;
export { Wdp, nX };
var __wakaru_Gdp_initialized = false;
export function Gdp() {
if (__wakaru_Gdp_initialized) return;
__wakaru_Gdp_initialized = true;
"use strict";
E(), ipi(), hdp(), xe1(), Ldp(), JY(), Fdp(), VFe(), awt(), aJ(), BW(), Wdp = ()=>{}, nX = Object.assign(Oe1($e1), {
    getSelectionDisplayName: g1n,
    Content: w7r,
    SelectedModelParametersContent: Ee1,
    SelectedModelParametersSubmenuContent: Ie1,
    ControlsContent: ke1,
    Control: Edp,
    Footer: Idp,
    CompactContent: adp
});

}
