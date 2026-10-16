import { GS, Ty } from "./accessibility.js";
import { Ju, og } from "./codeEditorService.js";
import { boe, w4 } from "./codeEditorWidget.js";
import { nr, rs } from "./commands.js";
import { Hi, Rr } from "./contextkey.js";
import { It, dn } from "./instantiation.js";
import { RD, fA } from "./languageConfigurationRegistry.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Ks, Wr } from "./notification.js";
import { cp } from "./objects.js";
import { Dl, Ml } from "./themeService.js";
import { ehe, uwe } from "./tooltipService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { kY } from "./ze.js";
var l_e;
export { l_e };
var __wakaru_xwe_initialized = false;
export function xwe() {
if (__wakaru_xwe_initialized) return;
__wakaru_xwe_initialized = true;
"use strict";
E(), cp(), og(), boe(), RD(), Dg(), Ty(), rs(), Hi(), It(), Ks(), Dl(), uwe(), l_e = class extends w4 {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p){
        super(t, {
            ...i.getRawOptions(),
            overflowWidgetsDomNode: i.getOverflowWidgetsDomNode()
        }, n, r, s, o, a, l, c, u, d, h, p), this._parentEditor = i, this._overwriteOptions = e, super.updateOptions(this._overwriteOptions), this._register(i.onDidChangeConfiguration((g)=>this._onParentConfigurationChanged(g)));
    }
    getParentEditor() {
        return this._parentEditor;
    }
    _onParentConfigurationChanged(t) {
        super.updateOptions(this._parentEditor.getRawOptions()), super.updateOptions(this._overwriteOptions);
    }
    updateOptions(t) {
        kY(this._overwriteOptions, t, !0), super.updateOptions(this._overwriteOptions);
    }
}, l_e = Re([
    F(4, dn),
    F(5, Ju),
    F(6, nr),
    F(7, Rr),
    F(8, Ml),
    F(9, Wr),
    F(10, GS),
    F(11, fA),
    F(12, Nd),
    F(13, ehe)
], l_e);

}
