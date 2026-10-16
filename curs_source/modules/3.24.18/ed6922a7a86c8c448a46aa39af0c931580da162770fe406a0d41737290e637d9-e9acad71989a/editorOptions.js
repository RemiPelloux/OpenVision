import { Ai, Pqr, Q_, S, gNt, jn, vf } from "./HVr.js";
import { dr } from "./arrays.js";
import { rt } from "./nls.js";
import { bu } from "./objects.js";
import { Ew, RV } from "./product.js";
import { A2c, Md, QZr, R2c, _gg, dvi, kx, oOt, vpt, xa, ygg, yh } from "./qIc.js";
import { Q1, e6 } from "./scrollable.js";
import { tU, uvi } from "./textModelDefaults.js";
import { x } from "./tslib.es6.js";
import { eN, yy } from "./uint.js";
import { NAe, rze } from "./wordHelper.js";
var gwe, D2c, JZr, EE, jgn, vze, _pt, E_, I0, yle, LK, wx, aOt, M2c, P2c, t6, L2c, N2c, O2c, pvi, UBe, mvi, gvi, F2c, B2c, U2c, $2c, qgn, H2c, W2c, G2c, eQr, V2c, cOt, j2c, q2c, z2c, K2c, Y2c, X2c, Z2c, Q2c, J2c, eOc, tOc, nOc, iOc, rOc, sOc, bJ, $V, oOc, aOc, cOc, lOc, uOc, dOc, hOc, pOc, mOc, gOc, fOc, vOc, _Oc, bOc, dA, _ze, NK;
export { $2c, $V, B2c, D2c, EE, E_, F2c, G2c, H2c, I0, J2c, JZr, K2c, L2c, LK, M2c, N2c, NK, O2c, P2c, Q2c, U2c, UBe, V2c, W2c, X2c, Y2c, Z2c, _Oc, _pt, _ze, aOc, aOt, bJ, bOc, cOc, cOt, dA, dOc, eOc, eQr, fOc, gOc, gvi, gwe, hOc, iOc, j2c, jgn, lOc, mOc, mvi, nOc, oOc, pOc, pvi, q2c, qgn, rOc, sOc, t6, tOc, uOc, vOc, vze, wx, yle, z2c };
var __wakaru_m1_initialized = false;
export function m1() {
if (__wakaru_m1_initialized) return;
__wakaru_m1_initialized = true;
"use strict";
x(), dr(), bu(), jn(), e6(), eN(), uvi(), NAe(), rt(), RV(), gwe = 8, D2c = class {
    constructor(e){
        this._values = e;
    }
    hasChanged(e) {
        return this._values[e];
    }
}, JZr = class {
    constructor(){
        this.stableMinimapLayoutInput = null, this.stableFitMaxMinimapScale = 0, this.stableFitRemainingWidth = 0;
    }
}, EE = class {
    constructor(e, t, n, i){
        this.id = e, this.name = t, this.defaultValue = n, this.schema = i;
    }
    applyUpdate(e, t) {
        return dvi(e, t);
    }
    compute(e, t, n) {
        return n;
    }
}, jgn = class {
    constructor(e, t){
        this.newValue = e, this.didChange = t;
    }
}, vze = class {
    constructor(e){
        this.schema = void 0, this.id = e, this.name = "_never_", this.defaultValue = void 0;
    }
    applyUpdate(e, t) {
        return dvi(e, t);
    }
    validate(e) {
        return this.defaultValue;
    }
}, _pt = class {
    constructor(e, t, n, i){
        this.id = e, this.name = t, this.defaultValue = n, this.schema = i;
    }
    applyUpdate(e, t) {
        return dvi(e, t);
    }
    validate(e) {
        return typeof e > "u" ? this.defaultValue : e;
    }
    compute(e, t, n) {
        return n;
    }
}, E_ = class extends _pt {
    constructor(e, t, n, i = void 0){
        typeof i < "u" && (i.type = "boolean", i.default = n), super(e, t, n, i);
    }
    validate(e) {
        return Md(e, this.defaultValue);
    }
}, I0 = class ZSm extends _pt {
    static clampedInt(t, n, i, r) {
        return vpt(t, n, i, r);
    }
    constructor(t, n, i, r, s, o = void 0){
        typeof o < "u" && (o.type = "integer", o.default = i, o.minimum = r, o.maximum = s), super(t, n, i, o), this.minimum = r, this.maximum = s;
    }
    validate(t) {
        return ZSm.clampedInt(t, this.defaultValue, this.minimum, this.maximum);
    }
}, yle = class QSm extends _pt {
    static clamp(t, n, i) {
        return t < n ? n : t > i ? i : t;
    }
    static float(t, n) {
        if (typeof t == "number") return t;
        if (typeof t > "u") return n;
        const i = parseFloat(t);
        return isNaN(i) ? n : i;
    }
    constructor(t, n, i, r, s){
        typeof s < "u" && (s.type = "number", s.default = i), super(t, n, i, s), this.validationFn = r;
    }
    validate(t) {
        return this.validationFn(QSm.float(t, this.defaultValue));
    }
}, LK = class JSm extends _pt {
    static string(t, n) {
        return typeof t != "string" ? n : t;
    }
    constructor(t, n, i, r = void 0){
        typeof r < "u" && (r.type = "string", r.default = i), super(t, n, i, r);
    }
    validate(t) {
        return JSm.string(t, this.defaultValue);
    }
}, wx = class extends _pt {
    constructor(e, t, n, i, r = void 0){
        typeof r < "u" && (r.type = "string", r.enum = i, r.default = n), super(e, t, n, r), this._allowedValues = i;
    }
    validate(e) {
        return kx(e, this.defaultValue, this._allowedValues);
    }
}, aOt = class extends EE {
    constructor(e, t, n, i, r, s, o = void 0){
        typeof o < "u" && (o.type = "string", o.enum = r, o.default = i), super(e, t, n, o), this._allowedValues = r, this._convert = s;
    }
    validate(e) {
        return typeof e != "string" ? this.defaultValue : this._allowedValues.indexOf(e) === -1 ? this.defaultValue : this._convert(e);
    }
}, M2c = class extends EE {
    constructor(){
        super(2, "accessibilitySupport", 0, {
            type: "string",
            enum: [
                "auto",
                "on",
                "off"
            ],
            enumDescriptions: [
                S(322, null),
                S(323, null),
                S(324, null)
            ],
            default: "auto",
            tags: [
                "accessibility"
            ],
            description: S(325, null)
        });
    }
    validate(e) {
        switch(e){
            case "auto":
                return 0;
            case "off":
                return 1;
            case "on":
                return 2;
        }
        return this.defaultValue;
    }
    compute(e, t, n) {
        return n === 0 ? e.accessibilitySupport : n;
    }
}, P2c = class extends EE {
    constructor(){
        const e = {
            insertSpace: !0,
            ignoreEmptyLines: !0
        };
        super(23, "comments", e, {
            "editor.comments.insertSpace": {
                type: "boolean",
                default: e.insertSpace,
                description: S(326, null)
            },
            "editor.comments.ignoreEmptyLines": {
                type: "boolean",
                default: e.ignoreEmptyLines,
                description: S(327, null)
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            insertSpace: Md(t.insertSpace, this.defaultValue.insertSpace),
            ignoreEmptyLines: Md(t.ignoreEmptyLines, this.defaultValue.ignoreEmptyLines)
        };
    }
}, t6 = ((e)=>(e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin", e))(t6 || {}), L2c = class extends vze {
    constructor(){
        super(148);
    }
    compute(e, t, n) {
        const i = [
            "monaco-editor"
        ];
        return t.get(41) && i.push(t.get(41)), e.extraEditorClassName && i.push(e.extraEditorClassName), t.get(75) === "default" ? i.push("mouse-default") : t.get(75) === "copy" && i.push("mouse-copy"), t.get(116) && i.push("showUnused"), t.get(145) && i.push("showDeprecated"), i.join(" ");
    }
}, N2c = class extends E_ {
    constructor(){
        super(38, "emptySelectionClipboard", !0, {
            description: S(328, null)
        });
    }
    compute(e, t, n) {
        return n && e.emptySelectionClipboard;
    }
}, O2c = class extends EE {
    constructor(){
        const e = {
            cursorMoveOnType: !0,
            seedSearchStringFromSelection: "always",
            autoFindInSelection: "never",
            globalFindClipboard: !1,
            addExtraSpaceOnTop: !0,
            loop: !0,
            history: "workspace",
            replaceHistory: "workspace"
        };
        super(43, "find", e, {
            "editor.find.cursorMoveOnType": {
                type: "boolean",
                default: e.cursorMoveOnType,
                description: S(329, null)
            },
            "editor.find.seedSearchStringFromSelection": {
                type: "string",
                enum: [
                    "never",
                    "always",
                    "selection"
                ],
                default: e.seedSearchStringFromSelection,
                enumDescriptions: [
                    S(330, null),
                    S(331, null),
                    S(332, null)
                ],
                description: S(333, null)
            },
            "editor.find.autoFindInSelection": {
                type: "string",
                enum: [
                    "never",
                    "always",
                    "multiline"
                ],
                default: e.autoFindInSelection,
                enumDescriptions: [
                    S(334, null),
                    S(335, null),
                    S(336, null)
                ],
                description: S(337, null)
            },
            "editor.find.globalFindClipboard": {
                type: "boolean",
                default: e.globalFindClipboard,
                description: S(338, null),
                included: Ai
            },
            "editor.find.addExtraSpaceOnTop": {
                type: "boolean",
                default: e.addExtraSpaceOnTop,
                description: S(339, null)
            },
            "editor.find.loop": {
                type: "boolean",
                default: e.loop,
                description: S(340, null)
            },
            "editor.find.history": {
                type: "string",
                enum: [
                    "never",
                    "workspace"
                ],
                default: "workspace",
                enumDescriptions: [
                    S(341, null),
                    S(342, null)
                ],
                description: S(343, null)
            },
            "editor.find.replaceHistory": {
                type: "string",
                enum: [
                    "never",
                    "workspace"
                ],
                default: "workspace",
                enumDescriptions: [
                    S(344, null),
                    S(345, null)
                ],
                description: S(346, null)
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            cursorMoveOnType: Md(t.cursorMoveOnType, this.defaultValue.cursorMoveOnType),
            seedSearchStringFromSelection: typeof e.seedSearchStringFromSelection == "boolean" ? e.seedSearchStringFromSelection ? "always" : "never" : kx(t.seedSearchStringFromSelection, this.defaultValue.seedSearchStringFromSelection, [
                "never",
                "always",
                "selection"
            ]),
            autoFindInSelection: typeof e.autoFindInSelection == "boolean" ? e.autoFindInSelection ? "always" : "never" : kx(t.autoFindInSelection, this.defaultValue.autoFindInSelection, [
                "never",
                "always",
                "multiline"
            ]),
            globalFindClipboard: Md(t.globalFindClipboard, this.defaultValue.globalFindClipboard),
            addExtraSpaceOnTop: Md(t.addExtraSpaceOnTop, this.defaultValue.addExtraSpaceOnTop),
            loop: Md(t.loop, this.defaultValue.loop),
            history: kx(t.history, this.defaultValue.history, [
                "never",
                "workspace"
            ]),
            replaceHistory: kx(t.replaceHistory, this.defaultValue.replaceHistory, [
                "never",
                "workspace"
            ])
        };
    }
}, pvi = class Sin extends EE {
    constructor(){
        super(53, "fontLigatures", Sin.OFF, {
            anyOf: [
                {
                    type: "boolean",
                    description: S(347, null)
                },
                {
                    type: "string",
                    description: S(348, null)
                }
            ],
            description: S(349, null),
            default: !1
        });
    }
    validate(t) {
        return typeof t > "u" ? this.defaultValue : typeof t == "string" ? t === "false" || t.length === 0 ? Sin.OFF : t === "true" ? Sin.ON : t : t ? Sin.ON : Sin.OFF;
    }
}, pvi.OFF = '"liga" off, "calt" off', pvi.ON = '"liga" on, "calt" on', UBe = pvi, mvi = class kin extends EE {
    constructor(){
        super(56, "fontVariations", kin.OFF, {
            anyOf: [
                {
                    type: "boolean",
                    description: S(350, null)
                },
                {
                    type: "string",
                    description: S(351, null)
                }
            ],
            description: S(352, null),
            default: !1
        });
    }
    validate(t) {
        return typeof t > "u" ? this.defaultValue : typeof t == "string" ? t === "false" ? kin.OFF : t === "true" ? kin.TRANSLATE : t : t ? kin.TRANSLATE : kin.OFF;
    }
    compute(t, n, i) {
        return t.fontInfo.fontVariationSettings;
    }
}, mvi.OFF = "normal", mvi.TRANSLATE = "translate", gvi = mvi, F2c = class extends vze {
    constructor(){
        super(52);
    }
    compute(e, t, n) {
        return e.fontInfo;
    }
}, B2c = class extends vze {
    constructor(){
        super(147);
    }
    compute(e, t, n) {
        return e.inputMode === "overtype" ? t.get(84) : t.get(28);
    }
}, U2c = class extends vze {
    constructor(){
        super(157);
    }
    compute(e, t) {
        return typeof globalThis.EditContext == "function" && t.get(37);
    }
}, $2c = class extends _pt {
    constructor(){
        super(54, "fontSize", dA.fontSize, {
            type: "number",
            minimum: 6,
            maximum: 100,
            default: dA.fontSize,
            description: S(353, null)
        });
    }
    validate(e) {
        const t = yle.float(e, this.defaultValue);
        return t === 0 ? dA.fontSize : yle.clamp(t, 6, 100);
    }
    compute(e, t, n) {
        return e.fontInfo.fontSize;
    }
}, qgn = class win extends EE {
    constructor(){
        super(55, "fontWeight", dA.fontWeight, {
            anyOf: [
                {
                    type: "number",
                    minimum: win.MINIMUM_VALUE,
                    maximum: win.MAXIMUM_VALUE,
                    errorMessage: S(354, null)
                },
                {
                    type: "string",
                    pattern: "^(normal|bold|1000|[1-9][0-9]{0,2})$"
                },
                {
                    enum: win.SUGGESTION_VALUES
                }
            ],
            default: dA.fontWeight,
            description: S(355, null)
        });
    }
    validate(t) {
        return t === "normal" || t === "bold" ? t : String(I0.clampedInt(t, dA.fontWeight, win.MINIMUM_VALUE, win.MAXIMUM_VALUE));
    }
}, qgn.SUGGESTION_VALUES = [
    "normal",
    "bold",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
], qgn.MINIMUM_VALUE = 1, qgn.MAXIMUM_VALUE = 1e3, H2c = qgn, W2c = class extends EE {
    constructor(){
        const e = {
            multiple: "peek",
            multipleDefinitions: "peek",
            multipleTypeDefinitions: "peek",
            multipleDeclarations: "peek",
            multipleImplementations: "peek",
            multipleReferences: "peek",
            multipleTests: "peek",
            alternativeDefinitionCommand: "editor.action.goToReferences",
            alternativeTypeDefinitionCommand: "editor.action.goToReferences",
            alternativeDeclarationCommand: "editor.action.goToReferences",
            alternativeImplementationCommand: "",
            alternativeReferenceCommand: "",
            alternativeTestsCommand: ""
        }, t = {
            type: "string",
            enum: [
                "peek",
                "gotoAndPeek",
                "goto"
            ],
            default: e.multiple,
            enumDescriptions: [
                S(356, null),
                S(357, null),
                S(358, null)
            ]
        }, n = [
            "",
            "editor.action.referenceSearch.trigger",
            "editor.action.goToReferences",
            "editor.action.peekImplementation",
            "editor.action.goToImplementation",
            "editor.action.peekTypeDefinition",
            "editor.action.goToTypeDefinition",
            "editor.action.explainSymbol",
            "editor.action.peekDeclaration",
            "editor.action.revealDeclaration",
            "editor.action.peekDefinition",
            "editor.action.revealDefinitionAside",
            "editor.action.revealDefinition"
        ];
        super(60, "gotoLocation", e, {
            "editor.gotoLocation.multiple": {
                deprecationMessage: S(359, null)
            },
            "editor.gotoLocation.multipleDefinitions": {
                description: S(360, null),
                ...t
            },
            "editor.gotoLocation.multipleTypeDefinitions": {
                description: S(361, null),
                ...t
            },
            "editor.gotoLocation.multipleDeclarations": {
                description: S(362, null),
                ...t
            },
            "editor.gotoLocation.multipleImplementations": {
                description: S(363, null),
                ...t
            },
            "editor.gotoLocation.multipleReferences": {
                description: S(364, null),
                ...t
            },
            "editor.gotoLocation.alternativeDefinitionCommand": {
                type: "string",
                default: e.alternativeDefinitionCommand,
                enum: n,
                description: S(365, null)
            },
            "editor.gotoLocation.alternativeTypeDefinitionCommand": {
                type: "string",
                default: e.alternativeTypeDefinitionCommand,
                enum: n,
                description: S(366, null)
            },
            "editor.gotoLocation.alternativeDeclarationCommand": {
                type: "string",
                default: e.alternativeDeclarationCommand,
                enum: n,
                description: S(367, null)
            },
            "editor.gotoLocation.alternativeImplementationCommand": {
                type: "string",
                default: e.alternativeImplementationCommand,
                enum: n,
                description: S(368, null)
            },
            "editor.gotoLocation.alternativeReferenceCommand": {
                type: "string",
                default: e.alternativeReferenceCommand,
                enum: n,
                description: S(369, null)
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            multiple: kx(t.multiple, this.defaultValue.multiple, [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            multipleDefinitions: t.multipleDefinitions ?? kx(t.multipleDefinitions, "peek", [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            multipleTypeDefinitions: t.multipleTypeDefinitions ?? kx(t.multipleTypeDefinitions, "peek", [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            multipleDeclarations: t.multipleDeclarations ?? kx(t.multipleDeclarations, "peek", [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            multipleImplementations: t.multipleImplementations ?? kx(t.multipleImplementations, "peek", [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            multipleReferences: t.multipleReferences ?? kx(t.multipleReferences, "peek", [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            multipleTests: t.multipleTests ?? kx(t.multipleTests, "peek", [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            alternativeDefinitionCommand: LK.string(t.alternativeDefinitionCommand, this.defaultValue.alternativeDefinitionCommand),
            alternativeTypeDefinitionCommand: LK.string(t.alternativeTypeDefinitionCommand, this.defaultValue.alternativeTypeDefinitionCommand),
            alternativeDeclarationCommand: LK.string(t.alternativeDeclarationCommand, this.defaultValue.alternativeDeclarationCommand),
            alternativeImplementationCommand: LK.string(t.alternativeImplementationCommand, this.defaultValue.alternativeImplementationCommand),
            alternativeReferenceCommand: LK.string(t.alternativeReferenceCommand, this.defaultValue.alternativeReferenceCommand),
            alternativeTestsCommand: LK.string(t.alternativeTestsCommand, this.defaultValue.alternativeTestsCommand)
        };
    }
}, G2c = class extends EE {
    constructor(){
        const e = {
            enabled: !0,
            delay: 300,
            hidingDelay: 300,
            sticky: !0,
            above: !0
        };
        super(62, "hover", e, {
            "editor.hover.enabled": {
                type: "boolean",
                default: e.enabled,
                description: S(370, null)
            },
            "editor.hover.delay": {
                type: "number",
                default: e.delay,
                minimum: 0,
                maximum: 1e4,
                description: S(371, null)
            },
            "editor.hover.sticky": {
                type: "boolean",
                default: e.sticky,
                description: S(372, null)
            },
            "editor.hover.hidingDelay": {
                type: "integer",
                minimum: 0,
                default: e.hidingDelay,
                description: S(373, null)
            },
            "editor.hover.above": {
                type: "boolean",
                default: e.above,
                description: S(374, null)
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            enabled: Md(t.enabled, this.defaultValue.enabled),
            delay: I0.clampedInt(t.delay, this.defaultValue.delay, 0, 1e4),
            sticky: Md(t.sticky, this.defaultValue.sticky),
            hidingDelay: I0.clampedInt(t.hidingDelay, this.defaultValue.hidingDelay, 0, 6e5),
            above: Md(t.above, this.defaultValue.above)
        };
    }
}, eQr = class o1r extends vze {
    constructor(){
        super(151);
    }
    compute(t, n, i) {
        return o1r.computeLayout(n, {
            memory: t.memory,
            outerWidth: t.outerWidth,
            outerHeight: t.outerHeight,
            isDominatedByLongLines: t.isDominatedByLongLines,
            lineHeight: t.fontInfo.lineHeight,
            viewLineCount: t.viewLineCount,
            lineNumbersDigitCount: t.lineNumbersDigitCount,
            typicalHalfwidthCharacterWidth: t.fontInfo.typicalHalfwidthCharacterWidth,
            maxDigitWidth: t.fontInfo.maxDigitWidth,
            pixelRatio: t.pixelRatio,
            glyphMarginDecorationLaneCount: t.glyphMarginDecorationLaneCount
        });
    }
    static computeContainedMinimapLineCount(t) {
        const n = t.height / t.lineHeight, i = Math.floor(t.paddingTop / t.lineHeight);
        let r = Math.floor(t.paddingBottom / t.lineHeight);
        t.scrollBeyondLastLine && (r = Math.max(r, n - 1));
        const s = (i + t.viewLineCount + r) / (t.pixelRatio * t.height), o = Math.floor(t.viewLineCount / s);
        return {
            typicalViewportLineCount: n,
            extraLinesBeforeFirstLine: i,
            extraLinesBeyondLastLine: r,
            desiredRatio: s,
            minimapLineCount: o
        };
    }
    static _computeMinimapLayout(t, n) {
        const i = t.outerWidth, r = t.outerHeight, s = t.pixelRatio;
        if (!t.minimap.enabled) return {
            renderMinimap: 0,
            minimapLeft: 0,
            minimapWidth: 0,
            minimapHeightIsEditorHeight: !1,
            minimapIsSampling: !1,
            minimapScale: 1,
            minimapLineHeight: 1,
            minimapCanvasInnerWidth: 0,
            minimapCanvasInnerHeight: Math.floor(s * r),
            minimapCanvasOuterWidth: 0,
            minimapCanvasOuterHeight: r
        };
        const o = n.stableMinimapLayoutInput, a = o && t.outerHeight === o.outerHeight && t.lineHeight === o.lineHeight && t.typicalHalfwidthCharacterWidth === o.typicalHalfwidthCharacterWidth && t.pixelRatio === o.pixelRatio && t.scrollBeyondLastLine === o.scrollBeyondLastLine && t.paddingTop === o.paddingTop && t.paddingBottom === o.paddingBottom && t.minimap.enabled === o.minimap.enabled && t.minimap.side === o.minimap.side && t.minimap.size === o.minimap.size && t.minimap.showSlider === o.minimap.showSlider && t.minimap.renderCharacters === o.minimap.renderCharacters && t.minimap.maxColumn === o.minimap.maxColumn && t.minimap.scale === o.minimap.scale && t.verticalScrollbarWidth === o.verticalScrollbarWidth && t.isViewportWrapping === o.isViewportWrapping, c = t.lineHeight, l = t.typicalHalfwidthCharacterWidth, u = t.scrollBeyondLastLine, h = t.minimap.renderCharacters;
        let p = s >= 2 ? Math.round(t.minimap.scale * 2) : t.minimap.scale;
        const g = t.minimap.maxColumn, f = t.minimap.size, v = t.minimap.side, b = t.verticalScrollbarWidth, y = t.viewLineCount, T = t.remainingWidth, E = t.isViewportWrapping, A = h ? 2 : 3;
        let R = Math.floor(s * r);
        const D = R / s;
        let P = !1, N = !1, O = A * p, F = p / s, H = 1;
        if (f === "fill" || f === "fit") {
            const { typicalViewportLineCount: Y, extraLinesBeforeFirstLine: Z, extraLinesBeyondLastLine: K, desiredRatio: J, minimapLineCount: ne } = o1r.computeContainedMinimapLineCount({
                viewLineCount: y,
                scrollBeyondLastLine: u,
                paddingTop: t.paddingTop,
                paddingBottom: t.paddingBottom,
                height: r,
                lineHeight: c,
                pixelRatio: s
            });
            if (y / ne > 1) P = !0, N = !0, p = 1, O = 1, F = p / s;
            else {
                let se = !1, re = p + 1;
                if (f === "fit") {
                    const ue = Math.ceil((Z + y + K) * O);
                    E && a && T <= n.stableFitRemainingWidth ? (se = !0, re = n.stableFitMaxMinimapScale) : se = ue > R;
                }
                if (f === "fill" || se) {
                    P = !0;
                    const ue = p;
                    O = Math.min(c * s, Math.max(1, Math.floor(1 / J))), E && a && T <= n.stableFitRemainingWidth && (re = n.stableFitMaxMinimapScale), p = Math.min(re, Math.max(1, Math.floor(O / A))), p > ue && (H = Math.min(2, p / ue)), F = p / s / H, R = Math.ceil(Math.max(Y, Z + y + K) * O), E ? (n.stableMinimapLayoutInput = t, n.stableFitRemainingWidth = T, n.stableFitMaxMinimapScale = p) : (n.stableMinimapLayoutInput = null, n.stableFitRemainingWidth = 0);
                }
            }
        }
        const $ = Math.floor(g * F), W = Math.min($, Math.max(0, Math.floor((T - b - 2) * F / (l + F))) + gwe);
        let G = Math.floor(s * W);
        const q = G / s;
        G = Math.floor(G * H);
        const z = h ? 1 : 2, X = v === "left" ? 0 : i - W - b;
        return {
            renderMinimap: z,
            minimapLeft: X,
            minimapWidth: W,
            minimapHeightIsEditorHeight: P,
            minimapIsSampling: N,
            minimapScale: p,
            minimapLineHeight: O,
            minimapCanvasInnerWidth: G,
            minimapCanvasInnerHeight: R,
            minimapCanvasOuterWidth: q,
            minimapCanvasOuterHeight: D
        };
    }
    static computeLayout(t, n) {
        const i = n.outerWidth | 0, r = n.outerHeight | 0, s = n.lineHeight | 0, o = n.lineNumbersDigitCount | 0, a = n.typicalHalfwidthCharacterWidth, c = n.maxDigitWidth, l = n.pixelRatio, u = n.viewLineCount, h = t.get(142), p = h === "inherit" ? t.get(141) : h, g = p === "inherit" ? t.get(137) : p, f = t.get(140), v = n.isDominatedByLongLines, b = t.get(59), y = t.get(69).renderType !== 0, T = t.get(70), E = t.get(110), A = t.get(88), R = t.get(74), D = t.get(108), P = D.verticalScrollbarSize, N = D.verticalHasArrows, O = D.arrowSize, F = D.horizontalScrollbarSize, H = t.get(45), $ = t.get(115) !== "never";
        let W = t.get(67);
        H && $ && (W += 16);
        let G = 0;
        if (y) {
            const de = Math.max(o, T);
            G = Math.round(de * c);
        }
        let q = 0;
        b && (q = s * n.glyphMarginDecorationLaneCount);
        let z = 0, X = z + q, Y = X + G, Z = Y + W;
        const K = i - q - G - W;
        let J = !1, ne = !1, ee = -1;
        p === "inherit" && v ? (J = !0, ne = !0) : g === "on" || g === "bounded" ? ne = !0 : g === "wordWrapColumn" && (ee = f);
        const se = o1r._computeMinimapLayout({
            outerWidth: i,
            outerHeight: r,
            lineHeight: s,
            typicalHalfwidthCharacterWidth: a,
            pixelRatio: l,
            scrollBeyondLastLine: E,
            paddingTop: A.top,
            paddingBottom: A.bottom,
            minimap: R,
            verticalScrollbarWidth: P,
            viewLineCount: u,
            remainingWidth: K,
            isViewportWrapping: ne
        }, n.memory || new JZr);
        se.renderMinimap !== 0 && se.minimapLeft === 0 && (z += se.minimapWidth, X += se.minimapWidth, Y += se.minimapWidth, Z += se.minimapWidth);
        const re = K - se.minimapWidth, ue = Math.max(1, Math.floor((re - P - 2) / a)), ce = N ? O : 0;
        return ne && (ee = Math.max(1, ue), g === "bounded" && (ee = Math.min(ee, f))), {
            width: i,
            height: r,
            glyphMarginLeft: z,
            glyphMarginWidth: q,
            glyphMarginDecorationLaneCount: n.glyphMarginDecorationLaneCount,
            lineNumbersLeft: X,
            lineNumbersWidth: G,
            decorationsLeft: Y,
            decorationsWidth: W,
            contentLeft: Z,
            contentWidth: re,
            minimap: se,
            viewportColumn: ue,
            isWordWrapMinified: J,
            isViewportWrapping: ne,
            wrappingColumn: ee,
            verticalScrollbarWidth: P,
            horizontalScrollbarHeight: F,
            overviewRuler: {
                top: ce,
                width: P,
                height: r - 2 * ce,
                right: 0
            }
        };
    }
}, V2c = class extends EE {
    constructor(){
        super(144, "wrappingStrategy", "simple", {
            "editor.wrappingStrategy": {
                enumDescriptions: [
                    S(375, null),
                    S(376, null)
                ],
                type: "string",
                enum: [
                    "simple",
                    "advanced"
                ],
                default: "simple",
                description: S(377, null)
            }
        });
    }
    validate(e) {
        return kx(e, "simple", [
            "simple",
            "advanced"
        ]);
    }
    compute(e, t, n) {
        return t.get(2) === 2 ? "advanced" : n;
    }
}, cOt = ((e)=>(e.Off = "off", e.OnCode = "onCode", e.On = "on", e))(cOt || {}), j2c = class extends EE {
    constructor(){
        const e = {
            enabled: "off"
        };
        super(66, "lightbulb", e, {
            "editor.lightbulb.enabled": {
                type: "string",
                enum: [
                    "off",
                    "onCode",
                    "on"
                ],
                default: e.enabled,
                enumDescriptions: [
                    S(378, null),
                    S(379, null),
                    S(380, null)
                ],
                description: S(381, null)
            }
        });
    }
    validate(e) {
        return !e || typeof e != "object" ? this.defaultValue : {
            enabled: kx(e.enabled, this.defaultValue.enabled, [
                "off",
                "onCode",
                "on"
            ])
        };
    }
}, q2c = class extends EE {
    constructor(){
        const e = {
            enabled: !0,
            maxLineCount: 5,
            defaultModel: "outlineModel",
            scrollWithEditor: !0
        };
        super(120, "stickyScroll", e, {
            "editor.stickyScroll.enabled": {
                type: "boolean",
                default: e.enabled,
                description: S(382, null)
            },
            "editor.stickyScroll.maxLineCount": {
                type: "number",
                default: e.maxLineCount,
                minimum: 1,
                maximum: 20,
                description: S(383, null)
            },
            "editor.stickyScroll.defaultModel": {
                type: "string",
                enum: [
                    "outlineModel",
                    "foldingProviderModel",
                    "indentationModel"
                ],
                default: e.defaultModel,
                description: S(384, null)
            },
            "editor.stickyScroll.scrollWithEditor": {
                type: "boolean",
                default: e.scrollWithEditor,
                description: S(385, null)
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            enabled: Md(t.enabled, this.defaultValue.enabled),
            maxLineCount: I0.clampedInt(t.maxLineCount, this.defaultValue.maxLineCount, 1, 20),
            defaultModel: kx(t.defaultModel, this.defaultValue.defaultModel, [
                "outlineModel",
                "foldingProviderModel",
                "indentationModel"
            ]),
            scrollWithEditor: Md(t.scrollWithEditor, this.defaultValue.scrollWithEditor)
        };
    }
}, z2c = class extends EE {
    constructor(){
        const e = {
            enabled: "on",
            fontSize: 0,
            fontFamily: "",
            padding: !1,
            maximumLength: 43
        };
        super(146, "inlayHints", e, {
            "editor.inlayHints.enabled": {
                type: "string",
                default: e.enabled,
                description: S(386, null),
                enum: [
                    "on",
                    "onUnlessPressed",
                    "offUnlessPressed",
                    "off"
                ],
                markdownEnumDescriptions: [
                    S(387, null),
                    S(388, null, Ai ? "Ctrl+Option" : "Ctrl+Alt"),
                    S(389, null, Ai ? "Ctrl+Option" : "Ctrl+Alt"),
                    S(390, null)
                ]
            },
            "editor.inlayHints.fontSize": {
                type: "number",
                default: e.fontSize,
                markdownDescription: S(391, null, "`#editor.fontSize#`", "`5`")
            },
            "editor.inlayHints.fontFamily": {
                type: "string",
                default: e.fontFamily,
                markdownDescription: S(392, null, "`#editor.fontFamily#`")
            },
            "editor.inlayHints.padding": {
                type: "boolean",
                default: e.padding,
                description: S(393, null)
            },
            "editor.inlayHints.maximumLength": {
                type: "number",
                default: e.maximumLength,
                markdownDescription: S(394, null)
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return typeof t.enabled == "boolean" && (t.enabled = t.enabled ? "on" : "off"), {
            enabled: kx(t.enabled, this.defaultValue.enabled, [
                "on",
                "off",
                "offUnlessPressed",
                "onUnlessPressed"
            ]),
            fontSize: I0.clampedInt(t.fontSize, this.defaultValue.fontSize, 0, 100),
            fontFamily: LK.string(t.fontFamily, this.defaultValue.fontFamily),
            padding: Md(t.padding, this.defaultValue.padding),
            maximumLength: I0.clampedInt(t.maximumLength, this.defaultValue.maximumLength, 0, Number.MAX_SAFE_INTEGER)
        };
    }
}, K2c = class extends EE {
    constructor(){
        super(67, "lineDecorationsWidth", 10);
    }
    validate(e) {
        return typeof e == "string" && /^\d+(\.\d+)?ch$/.test(e) ? -parseFloat(e.substring(0, e.length - 2)) : I0.clampedInt(e, this.defaultValue, 0, 1e3);
    }
    compute(e, t, n) {
        return n < 0 ? I0.clampedInt(-n * e.fontInfo.typicalHalfwidthCharacterWidth, this.defaultValue, 0, 1e3) : n;
    }
}, Y2c = class extends yle {
    constructor(){
        super(68, "lineHeight", dA.lineHeight, (e)=>yle.clamp(e, 0, 150), {
            markdownDescription: S(395, null)
        });
    }
    compute(e, t, n) {
        return e.fontInfo.lineHeight;
    }
}, X2c = class extends EE {
    constructor(){
        const e = {
            enabled: !1,
            size: "proportional",
            side: "right",
            showSlider: "mouseover",
            autohide: !1,
            renderCharacters: !0,
            maxColumn: 120,
            scale: 1,
            showRegionSectionHeaders: !0,
            showMarkSectionHeaders: !0,
            markSectionHeaderRegex: "\\bMARK:\\s*(?<separator>-?)\\s*(?<label>.*)$",
            sectionHeaderFontSize: 9,
            sectionHeaderLetterSpacing: 1
        };
        super(74, "minimap", e, {
            "editor.minimap.enabled": {
                type: "boolean",
                default: e.enabled,
                description: S(396, null)
            },
            "editor.minimap.autohide": {
                type: "boolean",
                default: e.autohide,
                description: S(397, null)
            },
            "editor.minimap.size": {
                type: "string",
                enum: [
                    "proportional",
                    "fill",
                    "fit"
                ],
                enumDescriptions: [
                    S(398, null),
                    S(399, null),
                    S(400, null)
                ],
                default: e.size,
                description: S(401, null)
            },
            "editor.minimap.side": {
                type: "string",
                enum: [
                    "left",
                    "right"
                ],
                default: e.side,
                description: S(402, null)
            },
            "editor.minimap.showSlider": {
                type: "string",
                enum: [
                    "always",
                    "mouseover"
                ],
                default: e.showSlider,
                description: S(403, null)
            },
            "editor.minimap.scale": {
                type: "number",
                default: e.scale,
                minimum: 1,
                maximum: 3,
                enum: [
                    1,
                    2,
                    3
                ],
                description: S(404, null)
            },
            "editor.minimap.renderCharacters": {
                type: "boolean",
                default: e.renderCharacters,
                description: S(405, null)
            },
            "editor.minimap.maxColumn": {
                type: "number",
                default: e.maxColumn,
                description: S(406, null)
            },
            "editor.minimap.showRegionSectionHeaders": {
                type: "boolean",
                default: e.showRegionSectionHeaders,
                description: S(407, null)
            },
            "editor.minimap.showMarkSectionHeaders": {
                type: "boolean",
                default: e.showMarkSectionHeaders,
                description: S(408, null)
            },
            "editor.minimap.markSectionHeaderRegex": {
                type: "string",
                default: e.markSectionHeaderRegex,
                description: S(409, null)
            },
            "editor.minimap.sectionHeaderFontSize": {
                type: "number",
                default: e.sectionHeaderFontSize,
                description: S(410, null)
            },
            "editor.minimap.sectionHeaderLetterSpacing": {
                type: "number",
                default: e.sectionHeaderLetterSpacing,
                description: S(411, null)
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        let n = this.defaultValue.markSectionHeaderRegex;
        const i = e.markSectionHeaderRegex;
        if (typeof i == "string") try {
            new RegExp(i, "d"), n = i;
        } catch  {}
        return {
            enabled: Md(t.enabled, this.defaultValue.enabled),
            autohide: Md(t.autohide, this.defaultValue.autohide),
            size: kx(t.size, this.defaultValue.size, [
                "proportional",
                "fill",
                "fit"
            ]),
            side: kx(t.side, this.defaultValue.side, [
                "right",
                "left"
            ]),
            showSlider: kx(t.showSlider, this.defaultValue.showSlider, [
                "always",
                "mouseover"
            ]),
            renderCharacters: Md(t.renderCharacters, this.defaultValue.renderCharacters),
            scale: I0.clampedInt(t.scale, 1, 1, 3),
            maxColumn: I0.clampedInt(t.maxColumn, this.defaultValue.maxColumn, 1, 1e4),
            showRegionSectionHeaders: Md(t.showRegionSectionHeaders, this.defaultValue.showRegionSectionHeaders),
            showMarkSectionHeaders: Md(t.showMarkSectionHeaders, this.defaultValue.showMarkSectionHeaders),
            markSectionHeaderRegex: n,
            sectionHeaderFontSize: yle.clamp(t.sectionHeaderFontSize ?? this.defaultValue.sectionHeaderFontSize, 4, 32),
            sectionHeaderLetterSpacing: yle.clamp(t.sectionHeaderLetterSpacing ?? this.defaultValue.sectionHeaderLetterSpacing, 0, 5)
        };
    }
}, Z2c = class extends EE {
    constructor(){
        super(88, "padding", {
            top: 0,
            bottom: 0
        }, {
            "editor.padding.top": {
                type: "number",
                default: 0,
                minimum: 0,
                maximum: 1e3,
                description: S(412, null)
            },
            "editor.padding.bottom": {
                type: "number",
                default: 0,
                minimum: 0,
                maximum: 1e3,
                description: S(413, null)
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            top: I0.clampedInt(t.top, 0, 0, 1e3),
            bottom: I0.clampedInt(t.bottom, 0, 0, 1e3)
        };
    }
}, Q2c = class extends EE {
    constructor(){
        const e = {
            enabled: !0,
            cycle: !0
        };
        super(90, "parameterHints", e, {
            "editor.parameterHints.enabled": {
                type: "boolean",
                default: e.enabled,
                description: S(414, null)
            },
            "editor.parameterHints.cycle": {
                type: "boolean",
                default: e.cycle,
                description: S(415, null)
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            enabled: Md(t.enabled, this.defaultValue.enabled),
            cycle: Md(t.cycle, this.defaultValue.cycle)
        };
    }
}, J2c = class extends vze {
    constructor(){
        super(149);
    }
    compute(e, t, n) {
        return e.pixelRatio;
    }
}, eOc = class extends EE {
    constructor(){
        super(92, "placeholder", void 0);
    }
    validate(e) {
        return typeof e > "u" ? this.defaultValue : typeof e == "string" ? e : this.defaultValue;
    }
}, tOc = class extends EE {
    constructor(){
        const e = {
            other: "on",
            comments: "off",
            strings: "off"
        }, t = [
            {
                type: "boolean"
            },
            {
                type: "string",
                enum: [
                    "on",
                    "inline",
                    "off"
                ],
                enumDescriptions: [
                    S(416, null),
                    S(417, null),
                    S(418, null)
                ]
            }
        ];
        super(94, "quickSuggestions", e, {
            type: "object",
            additionalProperties: !1,
            properties: {
                strings: {
                    anyOf: t,
                    default: e.strings,
                    description: S(419, null)
                },
                comments: {
                    anyOf: t,
                    default: e.comments,
                    description: S(420, null)
                },
                other: {
                    anyOf: t,
                    default: e.other,
                    description: S(421, null)
                }
            },
            default: e,
            markdownDescription: S(422, null, "`#editor.suggestOnTriggerCharacters#`")
        }), this.defaultValue = e;
    }
    validate(e) {
        if (typeof e == "boolean") {
            const c = e ? "on" : "off";
            return {
                comments: c,
                strings: c,
                other: c
            };
        }
        if (!e || typeof e != "object") return this.defaultValue;
        const { other: t, comments: n, strings: i } = e, r = [
            "on",
            "inline",
            "off"
        ];
        let s, o, a;
        return typeof t == "boolean" ? s = t ? "on" : "off" : s = kx(t, this.defaultValue.other, r), typeof n == "boolean" ? o = n ? "on" : "off" : o = kx(n, this.defaultValue.comments, r), typeof i == "boolean" ? a = i ? "on" : "off" : a = kx(i, this.defaultValue.strings, r), {
            other: s,
            comments: o,
            strings: a
        };
    }
}, nOc = class extends EE {
    constructor(){
        super(69, "lineNumbers", {
            renderType: 1,
            renderFn: null
        }, {
            type: "string",
            enum: [
                "off",
                "on",
                "relative",
                "interval"
            ],
            enumDescriptions: [
                S(423, null),
                S(424, null),
                S(425, null),
                S(426, null)
            ],
            default: "on",
            description: S(427, null)
        });
    }
    validate(e) {
        let t = this.defaultValue.renderType, n = this.defaultValue.renderFn;
        return typeof e < "u" && (typeof e == "function" ? (t = 4, n = e) : e === "interval" ? t = 3 : e === "relative" ? t = 2 : e === "on" ? t = 1 : t = 0), {
            renderType: t,
            renderFn: n
        };
    }
}, iOc = class extends EE {
    constructor(){
        const e = [], t = {
            type: "number",
            description: S(428, null)
        };
        super(107, "rulers", e, {
            type: "array",
            items: {
                anyOf: [
                    t,
                    {
                        type: [
                            "object"
                        ],
                        properties: {
                            column: t,
                            color: {
                                type: "string",
                                description: S(429, null),
                                format: "color-hex"
                            }
                        }
                    }
                ]
            },
            default: e,
            description: S(430, null)
        });
    }
    validate(e) {
        if (Array.isArray(e)) {
            const t = [];
            for (const n of e)if (typeof n == "number") t.push({
                column: I0.clampedInt(n, 0, 0, 1e4),
                color: null
            });
            else if (n && typeof n == "object") {
                const i = n;
                t.push({
                    column: I0.clampedInt(i.column, 0, 0, 1e4),
                    color: i.color
                });
            }
            return t.sort((n, i)=>n.column - i.column), t;
        }
        return this.defaultValue;
    }
}, rOc = class extends EE {
    constructor(){
        super(97, "readOnlyMessage", void 0);
    }
    validate(e) {
        return !e || typeof e != "object" ? this.defaultValue : e;
    }
}, sOc = class extends EE {
    constructor(){
        const e = {
            vertical: Q1.Auto,
            horizontal: Q1.Auto,
            arrowSize: 11,
            useShadows: !0,
            verticalHasArrows: !1,
            horizontalHasArrows: !1,
            horizontalScrollbarSize: 12,
            horizontalSliderSize: 12,
            verticalScrollbarSize: 14,
            verticalSliderSize: 14,
            handleMouseWheel: !0,
            ignoreVerticalScrolling: !1,
            alwaysConsumeMouseWheel: !0,
            scrollByPage: !1,
            ignoreHorizontalScrollbarInContentHeight: !1
        };
        super(108, "scrollbar", e, {
            "editor.scrollbar.vertical": {
                type: "string",
                enum: [
                    "auto",
                    "visible",
                    "hidden"
                ],
                enumDescriptions: [
                    S(431, null),
                    S(432, null),
                    S(433, null)
                ],
                default: "auto",
                description: S(434, null)
            },
            "editor.scrollbar.horizontal": {
                type: "string",
                enum: [
                    "auto",
                    "visible",
                    "hidden"
                ],
                enumDescriptions: [
                    S(435, null),
                    S(436, null),
                    S(437, null)
                ],
                default: "auto",
                description: S(438, null)
            },
            "editor.scrollbar.verticalScrollbarSize": {
                type: "number",
                default: e.verticalScrollbarSize,
                description: S(439, null)
            },
            "editor.scrollbar.horizontalScrollbarSize": {
                type: "number",
                default: e.horizontalScrollbarSize,
                description: S(440, null)
            },
            "editor.scrollbar.scrollByPage": {
                type: "boolean",
                default: e.scrollByPage,
                description: S(441, null)
            },
            "editor.scrollbar.ignoreHorizontalScrollbarInContentHeight": {
                type: "boolean",
                default: e.ignoreHorizontalScrollbarInContentHeight,
                description: S(442, null)
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e, n = I0.clampedInt(t.horizontalScrollbarSize, this.defaultValue.horizontalScrollbarSize, 0, 1e3), i = I0.clampedInt(t.verticalScrollbarSize, this.defaultValue.verticalScrollbarSize, 0, 1e3);
        return {
            arrowSize: I0.clampedInt(t.arrowSize, this.defaultValue.arrowSize, 0, 1e3),
            vertical: R2c(t.vertical, this.defaultValue.vertical),
            horizontal: R2c(t.horizontal, this.defaultValue.horizontal),
            useShadows: Md(t.useShadows, this.defaultValue.useShadows),
            verticalHasArrows: Md(t.verticalHasArrows, this.defaultValue.verticalHasArrows),
            horizontalHasArrows: Md(t.horizontalHasArrows, this.defaultValue.horizontalHasArrows),
            handleMouseWheel: Md(t.handleMouseWheel, this.defaultValue.handleMouseWheel),
            ignoreVerticalScrolling: Md(t.ignoreVerticalScrolling, this.defaultValue.ignoreVerticalScrolling),
            alwaysConsumeMouseWheel: Md(t.alwaysConsumeMouseWheel, this.defaultValue.alwaysConsumeMouseWheel),
            horizontalScrollbarSize: n,
            horizontalSliderSize: I0.clampedInt(t.horizontalSliderSize, n, 0, 1e3),
            verticalScrollbarSize: i,
            verticalSliderSize: I0.clampedInt(t.verticalSliderSize, i, 0, 1e3),
            scrollByPage: Md(t.scrollByPage, this.defaultValue.scrollByPage),
            ignoreHorizontalScrollbarInContentHeight: Md(t.ignoreHorizontalScrollbarInContentHeight, this.defaultValue.ignoreHorizontalScrollbarInContentHeight)
        };
    }
}, bJ = "inUntrustedWorkspace", $V = {
    allowedCharacters: "editor.unicodeHighlight.allowedCharacters",
    invisibleCharacters: "editor.unicodeHighlight.invisibleCharacters",
    nonBasicASCII: "editor.unicodeHighlight.nonBasicASCII",
    ambiguousCharacters: "editor.unicodeHighlight.ambiguousCharacters",
    includeComments: "editor.unicodeHighlight.includeComments",
    includeStrings: "editor.unicodeHighlight.includeStrings",
    allowedLocales: "editor.unicodeHighlight.allowedLocales"
}, oOc = class extends EE {
    constructor(){
        const e = {
            nonBasicASCII: bJ,
            invisibleCharacters: !0,
            ambiguousCharacters: !0,
            includeComments: bJ,
            includeStrings: !0,
            allowedCharacters: {},
            allowedLocales: {
                _os: !0,
                _vscode: !0
            }
        };
        super(130, "unicodeHighlight", e, {
            [$V.nonBasicASCII]: {
                restricted: !0,
                type: [
                    "boolean",
                    "string"
                ],
                enum: [
                    !0,
                    !1,
                    bJ
                ],
                default: e.nonBasicASCII,
                description: S(443, null)
            },
            [$V.invisibleCharacters]: {
                restricted: !0,
                type: "boolean",
                default: e.invisibleCharacters,
                description: S(444, null)
            },
            [$V.ambiguousCharacters]: {
                restricted: !0,
                type: "boolean",
                default: e.ambiguousCharacters,
                description: S(445, null)
            },
            [$V.includeComments]: {
                restricted: !0,
                type: [
                    "boolean",
                    "string"
                ],
                enum: [
                    !0,
                    !1,
                    bJ
                ],
                default: e.includeComments,
                description: S(446, null)
            },
            [$V.includeStrings]: {
                restricted: !0,
                type: [
                    "boolean",
                    "string"
                ],
                enum: [
                    !0,
                    !1,
                    bJ
                ],
                default: e.includeStrings,
                description: S(447, null)
            },
            [$V.allowedCharacters]: {
                restricted: !0,
                type: "object",
                default: e.allowedCharacters,
                description: S(448, null),
                additionalProperties: {
                    type: "boolean"
                }
            },
            [$V.allowedLocales]: {
                restricted: !0,
                type: "object",
                additionalProperties: {
                    type: "boolean"
                },
                default: e.allowedLocales,
                description: S(449, null)
            }
        });
    }
    applyUpdate(e, t) {
        let n = !1;
        t.allowedCharacters && e && (yh(e.allowedCharacters, t.allowedCharacters) || (e = {
            ...e,
            allowedCharacters: t.allowedCharacters
        }, n = !0)), t.allowedLocales && e && (yh(e.allowedLocales, t.allowedLocales) || (e = {
            ...e,
            allowedLocales: t.allowedLocales
        }, n = !0));
        const i = super.applyUpdate(e, t);
        return n ? new jgn(i.newValue, !0) : i;
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            nonBasicASCII: oOt(t.nonBasicASCII, bJ, [
                !0,
                !1,
                bJ
            ]),
            invisibleCharacters: Md(t.invisibleCharacters, this.defaultValue.invisibleCharacters),
            ambiguousCharacters: Md(t.ambiguousCharacters, this.defaultValue.ambiguousCharacters),
            includeComments: oOt(t.includeComments, bJ, [
                !0,
                !1,
                bJ
            ]),
            includeStrings: oOt(t.includeStrings, bJ, [
                !0,
                !1,
                bJ
            ]),
            allowedCharacters: this.validateBooleanMap(e.allowedCharacters, this.defaultValue.allowedCharacters),
            allowedLocales: this.validateBooleanMap(e.allowedLocales, this.defaultValue.allowedLocales)
        };
    }
    validateBooleanMap(e, t) {
        if (typeof e != "object" || !e) return t;
        const n = {};
        for (const [i, r] of Object.entries(e))r === !0 && (n[i] = !0);
        return n;
    }
}, aOc = class extends EE {
    constructor(){
        const e = {
            enabled: !0,
            mode: "subwordSmart",
            showToolbar: "onHover",
            suppressSuggestions: !1,
            keepOnBlur: !1,
            fontFamily: "default",
            syntaxHighlightingEnabled: !0,
            edits: {
                enabled: !0,
                showCollapsed: !1,
                renderSideBySide: "auto",
                allowCodeShifting: "always",
                useMultiLineGhostText: !0
            }
        };
        super(64, "inlineSuggest", e, {
            "editor.inlineSuggest.enabled": {
                type: "boolean",
                default: e.enabled,
                description: S(450, null)
            },
            "editor.inlineSuggest.showToolbar": {
                type: "string",
                default: e.showToolbar,
                enum: [
                    "always",
                    "onHover",
                    "never"
                ],
                enumDescriptions: [
                    S(451, null),
                    S(452, null),
                    S(453, null)
                ],
                description: S(454, null)
            },
            "editor.inlineSuggest.syntaxHighlightingEnabled": {
                type: "boolean",
                default: e.syntaxHighlightingEnabled,
                description: S(455, null)
            },
            "editor.inlineSuggest.suppressSuggestions": {
                type: "boolean",
                default: e.suppressSuggestions,
                description: S(456, null)
            },
            "editor.inlineSuggest.fontFamily": {
                type: "string",
                default: e.fontFamily,
                description: S(457, null)
            },
            "editor.inlineSuggest.edits.allowCodeShifting": {
                type: "string",
                default: e.edits.allowCodeShifting,
                description: S(458, null),
                enum: [
                    "always",
                    "horizontal",
                    "never"
                ],
                tags: [
                    "nextEditSuggestions"
                ]
            },
            "editor.inlineSuggest.edits.renderSideBySide": {
                type: "string",
                default: e.edits.renderSideBySide,
                description: S(459, null),
                enum: [
                    "auto",
                    "never"
                ],
                enumDescriptions: [
                    S(460, null),
                    S(461, null)
                ],
                tags: [
                    "nextEditSuggestions"
                ]
            },
            "editor.inlineSuggest.edits.showCollapsed": {
                type: "boolean",
                default: e.edits.showCollapsed,
                description: S(462, null),
                tags: [
                    "nextEditSuggestions"
                ]
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            enabled: Md(t.enabled, this.defaultValue.enabled),
            mode: kx(t.mode, this.defaultValue.mode, [
                "prefix",
                "subword",
                "subwordSmart"
            ]),
            showToolbar: kx(t.showToolbar, this.defaultValue.showToolbar, [
                "always",
                "onHover",
                "never"
            ]),
            suppressSuggestions: Md(t.suppressSuggestions, this.defaultValue.suppressSuggestions),
            keepOnBlur: Md(t.keepOnBlur, this.defaultValue.keepOnBlur),
            fontFamily: LK.string(t.fontFamily, this.defaultValue.fontFamily),
            syntaxHighlightingEnabled: Md(t.syntaxHighlightingEnabled, this.defaultValue.syntaxHighlightingEnabled),
            edits: {
                enabled: Md(t.edits?.enabled, this.defaultValue.edits.enabled),
                showCollapsed: Md(t.edits?.showCollapsed, this.defaultValue.edits.showCollapsed),
                allowCodeShifting: kx(t.edits?.allowCodeShifting, this.defaultValue.edits.allowCodeShifting, [
                    "always",
                    "horizontal",
                    "never"
                ]),
                renderSideBySide: kx(t.edits?.renderSideBySide, this.defaultValue.edits.renderSideBySide, [
                    "never",
                    "auto"
                ]),
                useMultiLineGhostText: Md(t.edits?.useMultiLineGhostText, this.defaultValue.edits.useMultiLineGhostText)
            }
        };
    }
}, cOc = class extends EE {
    constructor(){
        const e = {
            enabled: tU.bracketPairColorizationOptions.enabled,
            independentColorPoolPerBracketType: tU.bracketPairColorizationOptions.independentColorPoolPerBracketType
        };
        super(15, "bracketPairColorization", e, {
            "editor.bracketPairColorization.enabled": {
                type: "boolean",
                default: e.enabled,
                markdownDescription: S(463, null, "`#workbench.colorCustomizations#`")
            },
            "editor.bracketPairColorization.independentColorPoolPerBracketType": {
                type: "boolean",
                default: e.independentColorPoolPerBracketType,
                description: S(464, null)
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            enabled: Md(t.enabled, this.defaultValue.enabled),
            independentColorPoolPerBracketType: Md(t.independentColorPoolPerBracketType, this.defaultValue.independentColorPoolPerBracketType)
        };
    }
}, lOc = class extends EE {
    constructor(){
        const e = {
            bracketPairs: !1,
            bracketPairsHorizontal: "active",
            highlightActiveBracketPair: !0,
            indentation: !0,
            highlightActiveIndentation: !0
        };
        super(16, "guides", e, {
            "editor.guides.bracketPairs": {
                type: [
                    "boolean",
                    "string"
                ],
                enum: [
                    !0,
                    "active",
                    !1
                ],
                enumDescriptions: [
                    S(465, null),
                    S(466, null),
                    S(467, null)
                ],
                default: e.bracketPairs,
                description: S(468, null)
            },
            "editor.guides.bracketPairsHorizontal": {
                type: [
                    "boolean",
                    "string"
                ],
                enum: [
                    !0,
                    "active",
                    !1
                ],
                enumDescriptions: [
                    S(469, null),
                    S(470, null),
                    S(471, null)
                ],
                default: e.bracketPairsHorizontal,
                description: S(472, null)
            },
            "editor.guides.highlightActiveBracketPair": {
                type: "boolean",
                default: e.highlightActiveBracketPair,
                description: S(473, null)
            },
            "editor.guides.indentation": {
                type: "boolean",
                default: e.indentation,
                description: S(474, null)
            },
            "editor.guides.highlightActiveIndentation": {
                type: [
                    "boolean",
                    "string"
                ],
                enum: [
                    !0,
                    "always",
                    !1
                ],
                enumDescriptions: [
                    S(475, null),
                    S(476, null),
                    S(477, null)
                ],
                default: e.highlightActiveIndentation,
                description: S(478, null)
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            bracketPairs: oOt(t.bracketPairs, this.defaultValue.bracketPairs, [
                !0,
                !1,
                "active"
            ]),
            bracketPairsHorizontal: oOt(t.bracketPairsHorizontal, this.defaultValue.bracketPairsHorizontal, [
                !0,
                !1,
                "active"
            ]),
            highlightActiveBracketPair: Md(t.highlightActiveBracketPair, this.defaultValue.highlightActiveBracketPair),
            indentation: Md(t.indentation, this.defaultValue.indentation),
            highlightActiveIndentation: oOt(t.highlightActiveIndentation, this.defaultValue.highlightActiveIndentation, [
                !0,
                !1,
                "always"
            ])
        };
    }
}, uOc = class extends EE {
    constructor(){
        const e = {
            insertMode: "insert",
            filterGraceful: !0,
            snippetsPreventQuickSuggestions: !1,
            localityBonus: !1,
            shareSuggestSelections: !1,
            selectionMode: "always",
            showIcons: !0,
            showStatusBar: !1,
            preview: !1,
            previewMode: "subwordSmart",
            showInlineDetails: !0,
            showMethods: !0,
            showFunctions: !0,
            showConstructors: !0,
            showDeprecated: !0,
            matchOnWordStartOnly: !0,
            showFields: !0,
            showVariables: !0,
            showClasses: !0,
            showStructs: !0,
            showInterfaces: !0,
            showModules: !0,
            showProperties: !0,
            showEvents: !0,
            showOperators: !0,
            showUnits: !0,
            showValues: !0,
            showConstants: !0,
            showEnums: !0,
            showEnumMembers: !0,
            showKeywords: !0,
            showWords: !0,
            showColors: !0,
            showFiles: !0,
            showReferences: !0,
            showFolders: !0,
            showTypeParameters: !0,
            showSnippets: !0,
            showUsers: !0,
            showIssues: !0
        };
        super(123, "suggest", e, {
            "editor.suggest.insertMode": {
                type: "string",
                enum: [
                    "insert",
                    "replace"
                ],
                enumDescriptions: [
                    S(479, null),
                    S(480, null)
                ],
                default: e.insertMode,
                description: S(481, null)
            },
            "editor.suggest.filterGraceful": {
                type: "boolean",
                default: e.filterGraceful,
                description: S(482, null)
            },
            "editor.suggest.localityBonus": {
                type: "boolean",
                default: e.localityBonus,
                description: S(483, null)
            },
            "editor.suggest.shareSuggestSelections": {
                type: "boolean",
                default: e.shareSuggestSelections,
                markdownDescription: S(484, null)
            },
            "editor.suggest.selectionMode": {
                type: "string",
                enum: [
                    "always",
                    "never",
                    "whenTriggerCharacter",
                    "whenQuickSuggestion"
                ],
                enumDescriptions: [
                    S(485, null),
                    S(486, null),
                    S(487, null),
                    S(488, null)
                ],
                default: e.selectionMode,
                markdownDescription: S(489, null, "`#editor.quickSuggestions#`", "`#editor.suggestOnTriggerCharacters#`")
            },
            "editor.suggest.snippetsPreventQuickSuggestions": {
                type: "boolean",
                default: e.snippetsPreventQuickSuggestions,
                description: S(490, null)
            },
            "editor.suggest.showIcons": {
                type: "boolean",
                default: e.showIcons,
                description: S(491, null)
            },
            "editor.suggest.showStatusBar": {
                type: "boolean",
                default: e.showStatusBar,
                description: S(492, null)
            },
            "editor.suggest.preview": {
                type: "boolean",
                default: e.preview,
                description: S(493, null)
            },
            "editor.suggest.showInlineDetails": {
                type: "boolean",
                default: e.showInlineDetails,
                description: S(494, null)
            },
            "editor.suggest.maxVisibleSuggestions": {
                type: "number",
                deprecationMessage: S(495, null)
            },
            "editor.suggest.filteredTypes": {
                type: "object",
                deprecationMessage: S(496, null)
            },
            "editor.suggest.showMethods": {
                type: "boolean",
                default: !0,
                markdownDescription: S(497, null)
            },
            "editor.suggest.showFunctions": {
                type: "boolean",
                default: !0,
                markdownDescription: S(498, null)
            },
            "editor.suggest.showConstructors": {
                type: "boolean",
                default: !0,
                markdownDescription: S(499, null)
            },
            "editor.suggest.showDeprecated": {
                type: "boolean",
                default: !0,
                markdownDescription: S(500, null)
            },
            "editor.suggest.matchOnWordStartOnly": {
                type: "boolean",
                default: !0,
                markdownDescription: S(501, null)
            },
            "editor.suggest.showFields": {
                type: "boolean",
                default: !0,
                markdownDescription: S(502, null)
            },
            "editor.suggest.showVariables": {
                type: "boolean",
                default: !0,
                markdownDescription: S(503, null)
            },
            "editor.suggest.showClasses": {
                type: "boolean",
                default: !0,
                markdownDescription: S(504, null)
            },
            "editor.suggest.showStructs": {
                type: "boolean",
                default: !0,
                markdownDescription: S(505, null)
            },
            "editor.suggest.showInterfaces": {
                type: "boolean",
                default: !0,
                markdownDescription: S(506, null)
            },
            "editor.suggest.showModules": {
                type: "boolean",
                default: !0,
                markdownDescription: S(507, null)
            },
            "editor.suggest.showProperties": {
                type: "boolean",
                default: !0,
                markdownDescription: S(508, null)
            },
            "editor.suggest.showEvents": {
                type: "boolean",
                default: !0,
                markdownDescription: S(509, null)
            },
            "editor.suggest.showOperators": {
                type: "boolean",
                default: !0,
                markdownDescription: S(510, null)
            },
            "editor.suggest.showUnits": {
                type: "boolean",
                default: !0,
                markdownDescription: S(511, null)
            },
            "editor.suggest.showValues": {
                type: "boolean",
                default: !0,
                markdownDescription: S(512, null)
            },
            "editor.suggest.showConstants": {
                type: "boolean",
                default: !0,
                markdownDescription: S(513, null)
            },
            "editor.suggest.showEnums": {
                type: "boolean",
                default: !0,
                markdownDescription: S(514, null)
            },
            "editor.suggest.showEnumMembers": {
                type: "boolean",
                default: !0,
                markdownDescription: S(515, null)
            },
            "editor.suggest.showKeywords": {
                type: "boolean",
                default: !0,
                markdownDescription: S(516, null)
            },
            "editor.suggest.showWords": {
                type: "boolean",
                default: !0,
                markdownDescription: S(517, null)
            },
            "editor.suggest.showColors": {
                type: "boolean",
                default: !0,
                markdownDescription: S(518, null)
            },
            "editor.suggest.showFiles": {
                type: "boolean",
                default: !0,
                markdownDescription: S(519, null)
            },
            "editor.suggest.showReferences": {
                type: "boolean",
                default: !0,
                markdownDescription: S(520, null)
            },
            "editor.suggest.showCustomcolors": {
                type: "boolean",
                default: !0,
                markdownDescription: S(521, null)
            },
            "editor.suggest.showFolders": {
                type: "boolean",
                default: !0,
                markdownDescription: S(522, null)
            },
            "editor.suggest.showTypeParameters": {
                type: "boolean",
                default: !0,
                markdownDescription: S(523, null)
            },
            "editor.suggest.showSnippets": {
                type: "boolean",
                default: !0,
                markdownDescription: S(524, null)
            },
            "editor.suggest.showUsers": {
                type: "boolean",
                default: !0,
                markdownDescription: S(525, null)
            },
            "editor.suggest.showIssues": {
                type: "boolean",
                default: !0,
                markdownDescription: S(526, null)
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            insertMode: kx(t.insertMode, this.defaultValue.insertMode, [
                "insert",
                "replace"
            ]),
            filterGraceful: Md(t.filterGraceful, this.defaultValue.filterGraceful),
            snippetsPreventQuickSuggestions: Md(t.snippetsPreventQuickSuggestions, this.defaultValue.filterGraceful),
            localityBonus: Md(t.localityBonus, this.defaultValue.localityBonus),
            shareSuggestSelections: Md(t.shareSuggestSelections, this.defaultValue.shareSuggestSelections),
            selectionMode: kx(t.selectionMode, this.defaultValue.selectionMode, [
                "always",
                "never",
                "whenQuickSuggestion",
                "whenTriggerCharacter"
            ]),
            showIcons: Md(t.showIcons, this.defaultValue.showIcons),
            showStatusBar: Md(t.showStatusBar, this.defaultValue.showStatusBar),
            preview: Md(t.preview, this.defaultValue.preview),
            previewMode: kx(t.previewMode, this.defaultValue.previewMode, [
                "prefix",
                "subword",
                "subwordSmart"
            ]),
            showInlineDetails: Md(t.showInlineDetails, this.defaultValue.showInlineDetails),
            showMethods: Md(t.showMethods, this.defaultValue.showMethods),
            showFunctions: Md(t.showFunctions, this.defaultValue.showFunctions),
            showConstructors: Md(t.showConstructors, this.defaultValue.showConstructors),
            showDeprecated: Md(t.showDeprecated, this.defaultValue.showDeprecated),
            matchOnWordStartOnly: Md(t.matchOnWordStartOnly, this.defaultValue.matchOnWordStartOnly),
            showFields: Md(t.showFields, this.defaultValue.showFields),
            showVariables: Md(t.showVariables, this.defaultValue.showVariables),
            showClasses: Md(t.showClasses, this.defaultValue.showClasses),
            showStructs: Md(t.showStructs, this.defaultValue.showStructs),
            showInterfaces: Md(t.showInterfaces, this.defaultValue.showInterfaces),
            showModules: Md(t.showModules, this.defaultValue.showModules),
            showProperties: Md(t.showProperties, this.defaultValue.showProperties),
            showEvents: Md(t.showEvents, this.defaultValue.showEvents),
            showOperators: Md(t.showOperators, this.defaultValue.showOperators),
            showUnits: Md(t.showUnits, this.defaultValue.showUnits),
            showValues: Md(t.showValues, this.defaultValue.showValues),
            showConstants: Md(t.showConstants, this.defaultValue.showConstants),
            showEnums: Md(t.showEnums, this.defaultValue.showEnums),
            showEnumMembers: Md(t.showEnumMembers, this.defaultValue.showEnumMembers),
            showKeywords: Md(t.showKeywords, this.defaultValue.showKeywords),
            showWords: Md(t.showWords, this.defaultValue.showWords),
            showColors: Md(t.showColors, this.defaultValue.showColors),
            showFiles: Md(t.showFiles, this.defaultValue.showFiles),
            showReferences: Md(t.showReferences, this.defaultValue.showReferences),
            showFolders: Md(t.showFolders, this.defaultValue.showFolders),
            showTypeParameters: Md(t.showTypeParameters, this.defaultValue.showTypeParameters),
            showSnippets: Md(t.showSnippets, this.defaultValue.showSnippets),
            showUsers: Md(t.showUsers, this.defaultValue.showUsers),
            showIssues: Md(t.showIssues, this.defaultValue.showIssues)
        };
    }
}, dOc = class extends EE {
    constructor(){
        super(118, "smartSelect", {
            selectLeadingAndTrailingWhitespace: !0,
            selectSubwords: !0
        }, {
            "editor.smartSelect.selectLeadingAndTrailingWhitespace": {
                description: S(527, null),
                default: !0,
                type: "boolean"
            },
            "editor.smartSelect.selectSubwords": {
                description: S(528, null),
                default: !0,
                type: "boolean"
            }
        });
    }
    validate(e) {
        return !e || typeof e != "object" ? this.defaultValue : {
            selectLeadingAndTrailingWhitespace: Md(e.selectLeadingAndTrailingWhitespace, this.defaultValue.selectLeadingAndTrailingWhitespace),
            selectSubwords: Md(e.selectSubwords, this.defaultValue.selectSubwords)
        };
    }
}, hOc = class extends EE {
    constructor(){
        const e = [];
        super(135, "wordSegmenterLocales", e, {
            anyOf: [
                {
                    description: S(529, null),
                    type: "string"
                },
                {
                    description: S(530, null),
                    type: "array",
                    items: {
                        type: "string"
                    }
                }
            ]
        });
    }
    validate(e) {
        if (typeof e == "string" && (e = [
            e
        ]), Array.isArray(e)) {
            const t = [];
            for (const n of e)if (typeof n == "string") try {
                Intl.Segmenter.supportedLocalesOf(n).length > 0 && t.push(n);
            } catch  {}
            return t;
        }
        return this.defaultValue;
    }
}, pOc = class extends EE {
    constructor(){
        super(143, "wrappingIndent", 1, {
            "editor.wrappingIndent": {
                type: "string",
                enum: [
                    "none",
                    "same",
                    "indent",
                    "deepIndent"
                ],
                enumDescriptions: [
                    S(531, null),
                    S(532, null),
                    S(533, null),
                    S(534, null)
                ],
                description: S(535, null),
                default: "same"
            }
        });
    }
    validate(e) {
        switch(e){
            case "none":
                return 0;
            case "same":
                return 1;
            case "indent":
                return 2;
            case "deepIndent":
                return 3;
        }
        return 1;
    }
    compute(e, t, n) {
        return t.get(2) === 2 ? 0 : n;
    }
}, mOc = class extends vze {
    constructor(){
        super(152);
    }
    compute(e, t, n) {
        const i = t.get(151);
        return {
            isDominatedByLongLines: e.isDominatedByLongLines,
            isWordWrapMinified: i.isWordWrapMinified,
            isViewportWrapping: i.isViewportWrapping,
            wrappingColumn: i.wrappingColumn
        };
    }
}, gOc = class extends EE {
    constructor(){
        const e = {
            enabled: !0,
            showDropSelector: "afterDrop"
        };
        super(36, "dropIntoEditor", e, {
            "editor.dropIntoEditor.enabled": {
                type: "boolean",
                default: e.enabled,
                markdownDescription: S(536, null)
            },
            "editor.dropIntoEditor.showDropSelector": {
                type: "string",
                markdownDescription: S(537, null),
                enum: [
                    "afterDrop",
                    "never"
                ],
                enumDescriptions: [
                    S(538, null),
                    S(539, null)
                ],
                default: "afterDrop"
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            enabled: Md(t.enabled, this.defaultValue.enabled),
            showDropSelector: kx(t.showDropSelector, this.defaultValue.showDropSelector, [
                "afterDrop",
                "never"
            ])
        };
    }
}, fOc = class extends EE {
    constructor(){
        const e = {
            enabled: !1,
            showPasteSelector: "afterPaste"
        };
        super(89, "pasteAs", e, {
            "editor.pasteAs.enabled": {
                type: "boolean",
                default: e.enabled,
                markdownDescription: S(540, null)
            },
            "editor.pasteAs.showPasteSelector": {
                type: "string",
                markdownDescription: S(541, null),
                enum: [
                    "afterPaste",
                    "never"
                ],
                enumDescriptions: [
                    S(542, null),
                    S(543, null)
                ],
                default: "afterPaste"
            }
        });
    }
    validate(e) {
        if (!e || typeof e != "object") return this.defaultValue;
        const t = e;
        return {
            enabled: Md(t.enabled, this.defaultValue.enabled),
            showPasteSelector: kx(t.showPasteSelector, this.defaultValue.showPasteSelector, [
                "afterPaste",
                "never"
            ])
        };
    }
}, vOc = "Consolas, 'Courier New', monospace", _Oc = "Menlo, Monaco, 'Courier New', monospace", bOc = "'Droid Sans Mono', 'monospace', monospace", dA = {
    fontFamily: Ai ? _Oc : vf ? bOc : vOc,
    fontWeight: "normal",
    fontSize: Ai ? 12 : 14,
    lineHeight: 0,
    letterSpacing: 0
}, _ze = [], NK = {
    acceptSuggestionOnCommitCharacter: xa(new E_(0, "acceptSuggestionOnCommitCharacter", !0, {
        markdownDescription: S(544, null)
    })),
    acceptSuggestionOnEnter: xa(new wx(1, "acceptSuggestionOnEnter", "on", [
        "on",
        "smart",
        "off"
    ], {
        markdownEnumDescriptions: [
            "",
            S(545, null),
            ""
        ],
        markdownDescription: S(546, null)
    })),
    accessibilitySupport: xa(new M2c),
    accessibilityPageSize: xa(new I0(3, "accessibilityPageSize", 500, 1, yy.MAX_SAFE_SMALL_INTEGER, {
        description: S(547, null),
        tags: [
            "accessibility"
        ]
    })),
    ariaLabel: xa(new LK(4, "ariaLabel", S(548, null))),
    ariaRequired: xa(new E_(5, "ariaRequired", !1, void 0)),
    screenReaderAnnounceInlineSuggestion: xa(new E_(8, "screenReaderAnnounceInlineSuggestion", !0, {
        description: S(549, null),
        tags: [
            "accessibility"
        ]
    })),
    autoClosingBrackets: xa(new wx(6, "autoClosingBrackets", "languageDefined", [
        "always",
        "languageDefined",
        "beforeWhitespace",
        "never"
    ], {
        enumDescriptions: [
            "",
            S(550, null),
            S(551, null),
            ""
        ],
        description: S(552, null)
    })),
    autoClosingComments: xa(new wx(7, "autoClosingComments", "languageDefined", [
        "always",
        "languageDefined",
        "beforeWhitespace",
        "never"
    ], {
        enumDescriptions: [
            "",
            S(553, null),
            S(554, null),
            ""
        ],
        description: S(555, null)
    })),
    autoClosingDelete: xa(new wx(9, "autoClosingDelete", "auto", [
        "always",
        "auto",
        "never"
    ], {
        enumDescriptions: [
            "",
            S(556, null),
            ""
        ],
        description: S(557, null)
    })),
    autoClosingOvertype: xa(new wx(10, "autoClosingOvertype", "auto", [
        "always",
        "auto",
        "never"
    ], {
        enumDescriptions: [
            "",
            S(558, null),
            ""
        ],
        description: S(559, null)
    })),
    autoClosingQuotes: xa(new wx(11, "autoClosingQuotes", "languageDefined", [
        "always",
        "languageDefined",
        "beforeWhitespace",
        "never"
    ], {
        enumDescriptions: [
            "",
            S(560, null),
            S(561, null),
            ""
        ],
        description: S(562, null)
    })),
    autoIndent: xa(new aOt(12, "autoIndent", 4, "full", [
        "none",
        "keep",
        "brackets",
        "advanced",
        "full"
    ], _gg, {
        enumDescriptions: [
            S(563, null),
            S(564, null),
            S(565, null),
            S(566, null),
            S(567, null)
        ],
        description: S(568, null)
    })),
    automaticLayout: xa(new E_(13, "automaticLayout", !1)),
    autoSurround: xa(new wx(14, "autoSurround", "languageDefined", [
        "languageDefined",
        "quotes",
        "brackets",
        "never"
    ], {
        enumDescriptions: [
            S(569, null),
            S(570, null),
            S(571, null),
            ""
        ],
        description: S(572, null)
    })),
    bracketPairColorization: xa(new cOc),
    bracketPairGuides: xa(new lOc),
    stickyTabStops: xa(new E_(121, "stickyTabStops", !1, {
        description: S(573, null)
    })),
    codeLens: xa(new E_(17, "codeLens", !0, {
        description: S(574, null)
    })),
    codeLensFontFamily: xa(new LK(18, "codeLensFontFamily", "", {
        description: S(575, null)
    })),
    codeLensFontSize: xa(new I0(19, "codeLensFontSize", 0, 0, 100, {
        type: "number",
        default: 0,
        minimum: 0,
        maximum: 100,
        markdownDescription: S(576, null)
    })),
    colorDecorators: xa(new E_(20, "colorDecorators", !0, {
        description: S(577, null)
    })),
    colorDecoratorActivatedOn: xa(new wx(154, "colorDecoratorsActivatedOn", "clickAndHover", [
        "clickAndHover",
        "hover",
        "click"
    ], {
        enumDescriptions: [
            S(578, null),
            S(579, null),
            S(580, null)
        ],
        description: S(581, null)
    })),
    colorDecoratorsLimit: xa(new I0(21, "colorDecoratorsLimit", 500, 1, 1e6, {
        markdownDescription: S(582, null)
    })),
    columnSelection: xa(new E_(22, "columnSelection", !1, {
        description: S(583, null)
    })),
    comments: xa(new P2c),
    contextmenu: xa(new E_(24, "contextmenu", !0)),
    copyWithSyntaxHighlighting: xa(new E_(25, "copyWithSyntaxHighlighting", !0, {
        description: S(584, null)
    })),
    cursorBlinking: xa(new aOt(26, "cursorBlinking", 1, "blink", [
        "blink",
        "smooth",
        "phase",
        "expand",
        "solid",
        "hidden"
    ], A2c, {
        description: S(585, null)
    })),
    cursorSmoothCaretAnimation: xa(new wx(27, "cursorSmoothCaretAnimation", "off", [
        "off",
        "explicit",
        "on"
    ], {
        enumDescriptions: [
            S(586, null),
            S(587, null),
            S(588, null)
        ],
        description: S(589, null)
    })),
    cursorStyle: xa(new aOt(28, "cursorStyle", 1, "line", [
        "line",
        "block",
        "underline",
        "line-thin",
        "block-outline",
        "underline-thin"
    ], QZr, {
        description: S(590, null)
    })),
    overtypeCursorStyle: xa(new aOt(84, "overtypeCursorStyle", 2, "block", [
        "line",
        "block",
        "underline",
        "line-thin",
        "block-outline",
        "underline-thin"
    ], QZr, {
        description: S(591, null)
    })),
    cursorSurroundingLines: xa(new I0(29, "cursorSurroundingLines", 0, 0, yy.MAX_SAFE_SMALL_INTEGER, {
        description: S(592, null)
    })),
    cursorSurroundingLinesStyle: xa(new wx(30, "cursorSurroundingLinesStyle", "default", [
        "default",
        "all"
    ], {
        enumDescriptions: [
            S(593, null),
            S(594, null)
        ],
        markdownDescription: S(595, null)
    })),
    cursorWidth: xa(new I0(31, "cursorWidth", 0, 0, yy.MAX_SAFE_SMALL_INTEGER, {
        markdownDescription: S(596, null)
    })),
    disableLayerHinting: xa(new E_(32, "disableLayerHinting", !1)),
    disableMonospaceOptimizations: xa(new E_(33, "disableMonospaceOptimizations", !1)),
    domReadOnly: xa(new E_(34, "domReadOnly", !1)),
    dragAndDrop: xa(new E_(35, "dragAndDrop", !0, {
        description: S(597, null)
    })),
    emptySelectionClipboard: xa(new N2c),
    dropIntoEditor: xa(new gOc),
    experimentalEditContextEnabled: xa(new E_(37, "experimentalEditContextEnabled", Ew.quality !== "stable", {
        description: S(598, null),
        included: gNt || Pqr || Q_
    })),
    stickyScroll: xa(new q2c),
    experimentalGpuAcceleration: xa(new wx(39, "experimentalGpuAcceleration", "off", [
        "off",
        "on"
    ], {
        tags: [
            "experimental"
        ],
        enumDescriptions: [
            S(599, null),
            S(600, null)
        ],
        description: S(601, null)
    })),
    experimentalWhitespaceRendering: xa(new wx(40, "experimentalWhitespaceRendering", "svg", [
        "svg",
        "font",
        "off"
    ], {
        enumDescriptions: [
            S(602, null),
            S(603, null),
            S(604, null)
        ],
        description: S(605, null)
    })),
    extraEditorClassName: xa(new LK(41, "extraEditorClassName", "")),
    fastScrollSensitivity: xa(new yle(42, "fastScrollSensitivity", 5, (e)=>e <= 0 ? 5 : e, {
        markdownDescription: S(606, null)
    })),
    find: xa(new O2c),
    fixedOverflowWidgets: xa(new E_(44, "fixedOverflowWidgets", !1)),
    folding: xa(new E_(45, "folding", !0, {
        description: S(607, null)
    })),
    foldingStrategy: xa(new wx(46, "foldingStrategy", "auto", [
        "auto",
        "indentation"
    ], {
        enumDescriptions: [
            S(608, null),
            S(609, null)
        ],
        description: S(610, null)
    })),
    foldingHighlight: xa(new E_(47, "foldingHighlight", !0, {
        description: S(611, null)
    })),
    foldingImportsByDefault: xa(new E_(48, "foldingImportsByDefault", !1, {
        description: S(612, null)
    })),
    foldingMaximumRegions: xa(new I0(49, "foldingMaximumRegions", 5e3, 10, 65e3, {
        description: S(613, null)
    })),
    unfoldOnClickAfterEndOfLine: xa(new E_(50, "unfoldOnClickAfterEndOfLine", !1, {
        description: S(614, null)
    })),
    fontFamily: xa(new LK(51, "fontFamily", dA.fontFamily, {
        description: S(615, null)
    })),
    fontInfo: xa(new F2c),
    fontLigatures2: xa(new UBe),
    fontSize: xa(new $2c),
    fontWeight: xa(new H2c),
    fontVariations: xa(new gvi),
    formatOnPaste: xa(new E_(57, "formatOnPaste", !1, {
        description: S(616, null)
    })),
    formatOnType: xa(new E_(58, "formatOnType", !1, {
        description: S(617, null)
    })),
    glyphMargin: xa(new E_(59, "glyphMargin", !0, {
        description: S(618, null)
    })),
    gotoLocation: xa(new W2c),
    hideCursorInOverviewRuler: xa(new E_(61, "hideCursorInOverviewRuler", !1, {
        description: S(619, null)
    })),
    hover: xa(new G2c),
    inDiffEditor: xa(new E_(63, "inDiffEditor", !1)),
    letterSpacing: xa(new yle(65, "letterSpacing", dA.letterSpacing, (e)=>yle.clamp(e, -5, 20), {
        description: S(620, null)
    })),
    lightbulb: xa(new j2c),
    lineDecorationsWidth: xa(new K2c),
    lineHeight: xa(new Y2c),
    lineNumbers: xa(new nOc),
    lineNumbersMinChars: xa(new I0(70, "lineNumbersMinChars", 5, 1, 300)),
    linkedEditing: xa(new E_(71, "linkedEditing", !1, {
        description: S(621, null)
    })),
    links: xa(new E_(72, "links", !0, {
        description: S(622, null)
    })),
    matchBrackets: xa(new wx(73, "matchBrackets", "always", [
        "always",
        "near",
        "never"
    ], {
        description: S(623, null)
    })),
    minimap: xa(new X2c),
    mouseStyle: xa(new wx(75, "mouseStyle", "text", [
        "text",
        "default",
        "copy"
    ])),
    mouseWheelScrollSensitivity: xa(new yle(76, "mouseWheelScrollSensitivity", 1, (e)=>e === 0 ? 1 : e, {
        markdownDescription: S(624, null)
    })),
    mouseWheelZoom: xa(new E_(77, "mouseWheelZoom", !1, {
        markdownDescription: S(Ai ? 625 : 626, null)
    })),
    multiCursorMergeOverlapping: xa(new E_(78, "multiCursorMergeOverlapping", !0, {
        description: S(627, null)
    })),
    multiCursorModifier: xa(new aOt(79, "multiCursorModifier", "altKey", "alt", [
        "ctrlCmd",
        "alt"
    ], ygg, {
        markdownEnumDescriptions: [
            S(628, null),
            S(629, null)
        ],
        markdownDescription: S(630, null)
    })),
    multiCursorPaste: xa(new wx(80, "multiCursorPaste", "spread", [
        "spread",
        "full"
    ], {
        markdownEnumDescriptions: [
            S(631, null),
            S(632, null)
        ],
        markdownDescription: S(633, null)
    })),
    multiCursorLimit: xa(new I0(81, "multiCursorLimit", 1e4, 1, 1e5, {
        markdownDescription: S(634, null)
    })),
    occurrencesHighlight: xa(new wx(82, "occurrencesHighlight", "singleFile", [
        "off",
        "singleFile",
        "multiFile"
    ], {
        markdownEnumDescriptions: [
            S(635, null),
            S(636, null),
            S(637, null)
        ],
        markdownDescription: S(638, null)
    })),
    occurrencesHighlightDelay: xa(new I0(83, "occurrencesHighlightDelay", 0, 0, 2e3, {
        description: S(639, null),
        tags: [
            "preview"
        ]
    })),
    overtypeOnPaste: xa(new E_(85, "overtypeOnPaste", !0, {
        description: S(640, null)
    })),
    overviewRulerBorder: xa(new E_(86, "overviewRulerBorder", !0, {
        description: S(641, null)
    })),
    overviewRulerLanes: xa(new I0(87, "overviewRulerLanes", 3, 0, 3)),
    padding: xa(new Z2c),
    pasteAs: xa(new fOc),
    parameterHints: xa(new Q2c),
    peekWidgetDefaultFocus: xa(new wx(91, "peekWidgetDefaultFocus", "tree", [
        "tree",
        "editor"
    ], {
        enumDescriptions: [
            S(642, null),
            S(643, null)
        ],
        description: S(644, null)
    })),
    placeholder: xa(new eOc),
    definitionLinkOpensInPeek: xa(new E_(93, "definitionLinkOpensInPeek", !1, {
        description: S(645, null)
    })),
    quickSuggestions: xa(new tOc),
    quickSuggestionsDelay: xa(new I0(95, "quickSuggestionsDelay", 10, 0, yy.MAX_SAFE_SMALL_INTEGER, {
        description: S(646, null)
    })),
    readOnly: xa(new E_(96, "readOnly", !1)),
    readOnlyMessage: xa(new rOc),
    renameOnType: xa(new E_(98, "renameOnType", !1, {
        description: S(647, null),
        markdownDeprecationMessage: S(648, null)
    })),
    renderControlCharacters: xa(new E_(99, "renderControlCharacters", !0, {
        description: S(649, null),
        restricted: !0
    })),
    renderFinalNewline: xa(new wx(100, "renderFinalNewline", vf ? "dimmed" : "on", [
        "off",
        "on",
        "dimmed"
    ], {
        description: S(650, null)
    })),
    renderLineHighlight: xa(new wx(101, "renderLineHighlight", "line", [
        "none",
        "gutter",
        "line",
        "all"
    ], {
        enumDescriptions: [
            "",
            "",
            "",
            S(651, null)
        ],
        description: S(652, null)
    })),
    renderLineHighlightOnlyWhenFocus: xa(new E_(102, "renderLineHighlightOnlyWhenFocus", !1, {
        description: S(653, null)
    })),
    renderValidationDecorations: xa(new wx(103, "renderValidationDecorations", "editable", [
        "editable",
        "on",
        "off"
    ])),
    renderWhitespace: xa(new wx(104, "renderWhitespace", "selection", [
        "none",
        "boundary",
        "selection",
        "trailing",
        "all"
    ], {
        enumDescriptions: [
            "",
            S(654, null),
            S(655, null),
            S(656, null),
            ""
        ],
        description: S(657, null)
    })),
    revealHorizontalRightPadding: xa(new I0(105, "revealHorizontalRightPadding", 15, 0, 1e3)),
    roundedSelection: xa(new E_(106, "roundedSelection", !0, {
        description: S(658, null)
    })),
    rulers: xa(new iOc),
    scrollbar: xa(new sOc),
    scrollBeyondLastColumn: xa(new I0(109, "scrollBeyondLastColumn", 4, 0, yy.MAX_SAFE_SMALL_INTEGER, {
        description: S(659, null)
    })),
    scrollBeyondLastLine: xa(new E_(110, "scrollBeyondLastLine", !0, {
        description: S(660, null)
    })),
    scrollPredominantAxis: xa(new E_(111, "scrollPredominantAxis", !0, {
        description: S(661, null)
    })),
    selectionClipboard: xa(new E_(112, "selectionClipboard", !0, {
        description: S(662, null),
        included: vf
    })),
    selectionHighlight: xa(new E_(113, "selectionHighlight", !0, {
        description: S(663, null)
    })),
    selectOnLineNumbers: xa(new E_(114, "selectOnLineNumbers", !0)),
    showFoldingControls: xa(new wx(115, "showFoldingControls", "mouseover", [
        "always",
        "never",
        "mouseover"
    ], {
        enumDescriptions: [
            S(664, null),
            S(665, null),
            S(666, null)
        ],
        description: S(667, null)
    })),
    showUnused: xa(new E_(116, "showUnused", !0, {
        description: S(668, null)
    })),
    showDeprecated: xa(new E_(145, "showDeprecated", !0, {
        description: S(669, null)
    })),
    inlayHints: xa(new z2c),
    snippetSuggestions: xa(new wx(117, "snippetSuggestions", "inline", [
        "top",
        "bottom",
        "inline",
        "none"
    ], {
        enumDescriptions: [
            S(670, null),
            S(671, null),
            S(672, null),
            S(673, null)
        ],
        description: S(674, null)
    })),
    smartSelect: xa(new dOc),
    smoothScrolling: xa(new E_(119, "smoothScrolling", !1, {
        description: S(675, null)
    })),
    stopRenderingLineAfter: xa(new I0(122, "stopRenderingLineAfter", 1e4, -1, yy.MAX_SAFE_SMALL_INTEGER)),
    suggest: xa(new uOc),
    inlineSuggest: xa(new aOc),
    inlineCompletionsAccessibilityVerbose: xa(new E_(155, "inlineCompletionsAccessibilityVerbose", !1, {
        description: S(676, null)
    })),
    automaticLayoutIgnoreHeight: xa(new E_(156, "automaticLayoutIgnoreHeight", !1)),
    suggestFontSize: xa(new I0(124, "suggestFontSize", 0, 0, 1e3, {
        markdownDescription: S(677, null, "`0`", "`#editor.fontSize#`")
    })),
    suggestLineHeight: xa(new I0(125, "suggestLineHeight", 0, 0, 1e3, {
        markdownDescription: S(678, null, "`0`", "`#editor.lineHeight#`")
    })),
    suggestOnTriggerCharacters: xa(new E_(126, "suggestOnTriggerCharacters", !0, {
        description: S(679, null)
    })),
    suggestSelection: xa(new wx(127, "suggestSelection", "first", [
        "first",
        "recentlyUsed",
        "recentlyUsedByPrefix"
    ], {
        markdownEnumDescriptions: [
            S(680, null),
            S(681, null),
            S(682, null)
        ],
        description: S(683, null)
    })),
    tabCompletion: xa(new wx(128, "tabCompletion", "off", [
        "on",
        "off",
        "onlySnippets"
    ], {
        enumDescriptions: [
            S(684, null),
            S(685, null),
            S(686, null)
        ],
        description: S(687, null)
    })),
    tabIndex: xa(new I0(129, "tabIndex", 0, -1, yy.MAX_SAFE_SMALL_INTEGER)),
    unicodeHighlight: xa(new oOc),
    unusualLineTerminators: xa(new wx(131, "unusualLineTerminators", "prompt", [
        "auto",
        "off",
        "prompt"
    ], {
        enumDescriptions: [
            S(688, null),
            S(689, null),
            S(690, null)
        ],
        description: S(691, null)
    })),
    useShadowDOM: xa(new E_(132, "useShadowDOM", !0)),
    useTabStops: xa(new E_(133, "useTabStops", !0, {
        description: S(692, null)
    })),
    wordBreak: xa(new wx(134, "wordBreak", "normal", [
        "normal",
        "keepAll"
    ], {
        markdownEnumDescriptions: [
            S(693, null),
            S(694, null)
        ],
        description: S(695, null)
    })),
    wordSegmenterLocales: xa(new hOc),
    wordSeparators: xa(new LK(136, "wordSeparators", rze, {
        description: S(696, null)
    })),
    wordWrap: xa(new wx(137, "wordWrap", "off", [
        "off",
        "on",
        "wordWrapColumn",
        "bounded"
    ], {
        markdownEnumDescriptions: [
            S(697, null),
            S(698, null),
            S(699, null),
            S(700, null)
        ],
        description: S(701, null)
    })),
    wordWrapBreakAfterCharacters: xa(new LK(138, "wordWrapBreakAfterCharacters", " 	})]?|/&.,;\xA2\xB0\u2032\u2033\u2030\u2103\u3001\u3002\uFF61\uFF64\uFFE0\uFF0C\uFF0E\uFF1A\uFF1B\uFF1F\uFF01\uFF05\u30FB\uFF65\u309D\u309E\u30FD\u30FE\u30FC\u30A1\u30A3\u30A5\u30A7\u30A9\u30C3\u30E3\u30E5\u30E7\u30EE\u30F5\u30F6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308E\u3095\u3096\u31F0\u31F1\u31F2\u31F3\u31F4\u31F5\u31F6\u31F7\u31F8\u31F9\u31FA\u31FB\u31FC\u31FD\u31FE\u31FF\u3005\u303B\uFF67\uFF68\uFF69\uFF6A\uFF6B\uFF6C\uFF6D\uFF6E\uFF6F\uFF70\u201D\u3009\u300B\u300D\u300F\u3011\u3015\uFF09\uFF3D\uFF5D\uFF63")),
    wordWrapBreakBeforeCharacters: xa(new LK(139, "wordWrapBreakBeforeCharacters", "([{\u2018\u201C\u3008\u300A\u300C\u300E\u3010\u3014\uFF08\uFF3B\uFF5B\uFF62\xA3\xA5\uFF04\uFFE1\uFFE5+\uFF0B")),
    wordWrapColumn: xa(new I0(140, "wordWrapColumn", 80, 1, yy.MAX_SAFE_SMALL_INTEGER, {
        markdownDescription: S(702, null)
    })),
    wordWrapOverride1: xa(new wx(141, "wordWrapOverride1", "inherit", [
        "off",
        "on",
        "inherit"
    ])),
    wordWrapOverride2: xa(new wx(142, "wordWrapOverride2", "inherit", [
        "off",
        "on",
        "inherit"
    ])),
    effectiveCursorStyle: xa(new B2c),
    editorClassName: xa(new L2c),
    defaultColorDecorators: xa(new wx(153, "defaultColorDecorators", "auto", [
        "auto",
        "always",
        "never"
    ], {
        enumDescriptions: [
            S(703, null),
            S(704, null),
            S(705, null)
        ],
        description: S(706, null)
    })),
    pixelRatio: xa(new J2c),
    tabFocusMode: xa(new E_(150, "tabFocusMode", !1, {
        markdownDescription: S(707, null)
    })),
    layoutInfo: xa(new eQr),
    wrappingInfo: xa(new mOc),
    wrappingIndent: xa(new pOc),
    wrappingStrategy: xa(new V2c),
    effectiveExperimentalEditContextEnabled: xa(new U2c),
    commentOnLineNumbers: xa(new E_(158, "commentOnLineNumbers", !1, {
        description: S(708, null)
    }))
};

}
