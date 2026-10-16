import { Op, ym } from "./accessibility.js";
import { C, ie } from "./actions_2.js";
import { Ja, md } from "./codeEditorService.js";
import { HP, Iw } from "./codeEditorWidget.js";
import { $n, vi } from "./commands.js";
import { dn, xn } from "./contextkey.js";
import { Ze, _t } from "./instantiation.js";
import { HT, uC } from "./languageConfigurationRegistry.js";
import { Jc, kh } from "./languageFeatures.js";
import { di, ji } from "./notification.js";
import { bu } from "./objects.js";
import { y3 } from "./qIc.js";
import { $r, as } from "./themeService.js";
import { PK, ure } from "./tooltipService.js";
import { x } from "./tslib.es6.js";
var r6;
export { r6 };
var __wakaru_Y7_initialized = false;
export function Y7() {
if (__wakaru_Y7_initialized) return;
__wakaru_Y7_initialized = true;
"use strict";
x(), bu(), md(), HP(), HT(), kh(), Op(), vi(), dn(), Ze(), ji(), as(), ure(), r6 = class extends Iw {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g){
        super(e, {
            ...i.getRawOptions(),
            overflowWidgetsDomNode: i.getOverflowWidgetsDomNode()
        }, n, r, s, o, a, c, l, u, h, p, g), this._parentEditor = i, this._overwriteOptions = t, super.updateOptions(this._overwriteOptions), this._register(i.onDidChangeConfiguration((f)=>this._onParentConfigurationChanged(f)));
    }
    getParentEditor() {
        return this._parentEditor;
    }
    _onParentConfigurationChanged(e) {
        super.updateOptions(this._parentEditor.getRawOptions()), super.updateOptions(this._overwriteOptions);
    }
    updateOptions(e) {
        y3(this._overwriteOptions, e, !0), super.updateOptions(this._overwriteOptions);
    }
}, r6 = ie([
    C(4, _t),
    C(5, Ja),
    C(6, $n),
    C(7, xn),
    C(8, $r),
    C(9, di),
    C(10, ym),
    C(11, uC),
    C(12, Jc),
    C(13, PK)
], r6);

}
