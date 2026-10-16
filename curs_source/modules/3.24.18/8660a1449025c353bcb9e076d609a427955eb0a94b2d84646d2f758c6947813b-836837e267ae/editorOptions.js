import { D, Di, I0, _r, a_, smr, yCo } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { IC, oY } from "./product.js";
import { D5, coe } from "./scrollable.js";
import { Ywr, uz } from "./textModelDefaults.js";
import { E } from "./tslib.es6.js";
import { eI, lz } from "./uint.js";
import { P9t, qii } from "./wordHelper.js";
import { K9t, Kgn, Rp, SP, Xwr, Yl, b2y, k2y, r9d, s9d, vp, y2y } from "./ze.js";
var y5e, o9d, cjo, r2, Iri, Vbt, Y9t, RS, FI, dwe, uoe, kP, Ygn, a9d, l9d, the, c9d, u9d, d9d, Qwr, Ltt, Jwr, e0r, h9d, p9d, m9d, g9d, xri, f9d, v9d, _9d, ujo, b9d, Xgn, y9d, S9d, k9d, w9d, C9d, T9d, E9d, I9d, x9d, A9d, R9d, P9d, M9d, D9d, N9d, nhe, ine, L9d, O9d, F9d, B9d, U9d, j9d, $9d, H9d, W9d, G9d, q9d, z9d, V9d, K9d, q3, Kbt, Kve;
export { $9d, A9d, B9d, C9d, D9d, E9d, F9d, FI, G9d, H9d, I9d, Iri, Jwr, K9d, Kbt, Kve, L9d, Ltt, M9d, N9d, O9d, P9d, Qwr, R9d, RS, S9d, T9d, U9d, V9d, Vbt, W9d, Xgn, Y9t, Ygn, _9d, a9d, b9d, c9d, cjo, d9d, dwe, e0r, f9d, g9d, h9d, ine, j9d, k9d, kP, l9d, m9d, nhe, o9d, p9d, q3, q9d, r2, the, u9d, ujo, uoe, v9d, w9d, x9d, xri, y5e, y9d, z9d };
var __wakaru_s2_initialized = false;
export function s2() {
if (__wakaru_s2_initialized) return;
__wakaru_s2_initialized = true;
"use strict";
E(), bo(), cp(), Di(), coe(), lz(), Ywr(), P9t(), Bt(), oY(), y5e = 8, o9d = class {
    constructor(t){
        this._values = t;
    }
    hasChanged(t) {
        return this._values[t];
    }
}, cjo = class {
    constructor(){
        this.stableMinimapLayoutInput = null, this.stableFitMaxMinimapScale = 0, this.stableFitRemainingWidth = 0;
    }
}, r2 = class {
    constructor(t, e, n, i){
        this.id = t, this.name = e, this.defaultValue = n, this.schema = i;
    }
    applyUpdate(t, e) {
        return Xwr(t, e);
    }
    compute(t, e, n) {
        return n;
    }
}, Iri = class {
    constructor(t, e){
        this.newValue = t, this.didChange = e;
    }
}, Vbt = class {
    constructor(t){
        this.schema = void 0, this.id = t, this.name = "_never_", this.defaultValue = void 0;
    }
    applyUpdate(t, e) {
        return Xwr(t, e);
    }
    validate(t) {
        return this.defaultValue;
    }
}, Y9t = class {
    constructor(t, e, n, i){
        this.id = t, this.name = e, this.defaultValue = n, this.schema = i;
    }
    applyUpdate(t, e) {
        return Xwr(t, e);
    }
    validate(t) {
        return typeof t > "u" ? this.defaultValue : t;
    }
    compute(t, e, n) {
        return n;
    }
}, RS = class extends Y9t {
    constructor(t, e, n, i = void 0){
        typeof i < "u" && (i.type = "boolean", i.default = n), super(t, e, n, i);
    }
    validate(t) {
        return vp(t, this.defaultValue);
    }
}, FI = class kAb extends Y9t {
    static clampedInt(e, n, i, r) {
        return K9t(e, n, i, r);
    }
    constructor(e, n, i, r, s, o = void 0){
        typeof o < "u" && (o.type = "integer", o.default = i, o.minimum = r, o.maximum = s), super(e, n, i, o), this.minimum = r, this.maximum = s;
    }
    validate(e) {
        return kAb.clampedInt(e, this.defaultValue, this.minimum, this.maximum);
    }
}, dwe = class wAb extends Y9t {
    static clamp(e, n, i) {
        return e < n ? n : e > i ? i : e;
    }
    static float(e, n) {
        if (typeof e == "number") return e;
        if (typeof e > "u") return n;
        const i = parseFloat(e);
        return isNaN(i) ? n : i;
    }
    constructor(e, n, i, r, s){
        typeof s < "u" && (s.type = "number", s.default = i), super(e, n, i, s), this.validationFn = r;
    }
    validate(e) {
        return this.validationFn(wAb.float(e, this.defaultValue));
    }
}, uoe = class CAb extends Y9t {
    static string(e, n) {
        return typeof e != "string" ? n : e;
    }
    constructor(e, n, i, r = void 0){
        typeof r < "u" && (r.type = "string", r.default = i), super(e, n, i, r);
    }
    validate(e) {
        return CAb.string(e, this.defaultValue);
    }
}, kP = class extends Y9t {
    constructor(t, e, n, i, r = void 0){
        typeof r < "u" && (r.type = "string", r.enum = i, r.default = n), super(t, e, n, r), this._allowedValues = i;
    }
    validate(t) {
        return SP(t, this.defaultValue, this._allowedValues);
    }
}, Ygn = class extends r2 {
    constructor(t, e, n, i, r, s, o = void 0){
        typeof o < "u" && (o.type = "string", o.enum = r, o.default = i), super(t, e, n, o), this._allowedValues = r, this._convert = s;
    }
    validate(t) {
        return typeof t != "string" ? this.defaultValue : this._allowedValues.indexOf(t) === -1 ? this.defaultValue : this._convert(t);
    }
}, a9d = class extends r2 {
    constructor(){
        super(2, "accessibilitySupport", 0, {
            type: "string",
            enum: [
                "auto",
                "on",
                "off"
            ],
            enumDescriptions: [
                D(322, null),
                D(323, null),
                D(324, null)
            ],
            default: "auto",
            tags: [
                "accessibility"
            ],
            description: D(325, null)
        });
    }
    validate(t) {
        switch(t){
            case "auto":
                return 0;
            case "off":
                return 1;
            case "on":
                return 2;
        }
        return this.defaultValue;
    }
    compute(t, e, n) {
        return n === 0 ? t.accessibilitySupport : n;
    }
}, l9d = class extends r2 {
    constructor(){
        const t = {
            insertSpace: !0,
            ignoreEmptyLines: !0
        };
        super(23, "comments", t, {
            "editor.comments.insertSpace": {
                type: "boolean",
                default: t.insertSpace,
                description: D(326, null)
            },
            "editor.comments.ignoreEmptyLines": {
                type: "boolean",
                default: t.ignoreEmptyLines,
                description: D(327, null)
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            insertSpace: vp(e.insertSpace, this.defaultValue.insertSpace),
            ignoreEmptyLines: vp(e.ignoreEmptyLines, this.defaultValue.ignoreEmptyLines)
        };
    }
}, the = ((t)=>(t[t.Line = 1] = "Line", t[t.Block = 2] = "Block", t[t.Underline = 3] = "Underline", t[t.LineThin = 4] = "LineThin", t[t.BlockOutline = 5] = "BlockOutline", t[t.UnderlineThin = 6] = "UnderlineThin", t))(the || {}), c9d = class extends Vbt {
    constructor(){
        super(148);
    }
    compute(t, e, n) {
        const i = [
            "monaco-editor"
        ];
        return e.get(41) && i.push(e.get(41)), t.extraEditorClassName && i.push(t.extraEditorClassName), e.get(75) === "default" ? i.push("mouse-default") : e.get(75) === "copy" && i.push("mouse-copy"), e.get(116) && i.push("showUnused"), e.get(145) && i.push("showDeprecated"), i.join(" ");
    }
}, u9d = class extends RS {
    constructor(){
        super(38, "emptySelectionClipboard", !0, {
            description: D(328, null)
        });
    }
    compute(t, e, n) {
        return n && t.emptySelectionClipboard;
    }
}, d9d = class extends r2 {
    constructor(){
        const t = {
            cursorMoveOnType: !0,
            seedSearchStringFromSelection: "always",
            autoFindInSelection: "never",
            globalFindClipboard: !1,
            addExtraSpaceOnTop: !0,
            loop: !0,
            history: "workspace",
            replaceHistory: "workspace"
        };
        super(43, "find", t, {
            "editor.find.cursorMoveOnType": {
                type: "boolean",
                default: t.cursorMoveOnType,
                description: D(329, null)
            },
            "editor.find.seedSearchStringFromSelection": {
                type: "string",
                enum: [
                    "never",
                    "always",
                    "selection"
                ],
                default: t.seedSearchStringFromSelection,
                enumDescriptions: [
                    D(330, null),
                    D(331, null),
                    D(332, null)
                ],
                description: D(333, null)
            },
            "editor.find.autoFindInSelection": {
                type: "string",
                enum: [
                    "never",
                    "always",
                    "multiline"
                ],
                default: t.autoFindInSelection,
                enumDescriptions: [
                    D(334, null),
                    D(335, null),
                    D(336, null)
                ],
                description: D(337, null)
            },
            "editor.find.globalFindClipboard": {
                type: "boolean",
                default: t.globalFindClipboard,
                description: D(338, null),
                included: _r
            },
            "editor.find.addExtraSpaceOnTop": {
                type: "boolean",
                default: t.addExtraSpaceOnTop,
                description: D(339, null)
            },
            "editor.find.loop": {
                type: "boolean",
                default: t.loop,
                description: D(340, null)
            },
            "editor.find.history": {
                type: "string",
                enum: [
                    "never",
                    "workspace"
                ],
                default: "workspace",
                enumDescriptions: [
                    D(341, null),
                    D(342, null)
                ],
                description: D(343, null)
            },
            "editor.find.replaceHistory": {
                type: "string",
                enum: [
                    "never",
                    "workspace"
                ],
                default: "workspace",
                enumDescriptions: [
                    D(344, null),
                    D(345, null)
                ],
                description: D(346, null)
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            cursorMoveOnType: vp(e.cursorMoveOnType, this.defaultValue.cursorMoveOnType),
            seedSearchStringFromSelection: typeof t.seedSearchStringFromSelection == "boolean" ? t.seedSearchStringFromSelection ? "always" : "never" : SP(e.seedSearchStringFromSelection, this.defaultValue.seedSearchStringFromSelection, [
                "never",
                "always",
                "selection"
            ]),
            autoFindInSelection: typeof t.autoFindInSelection == "boolean" ? t.autoFindInSelection ? "always" : "never" : SP(e.autoFindInSelection, this.defaultValue.autoFindInSelection, [
                "never",
                "always",
                "multiline"
            ]),
            globalFindClipboard: vp(e.globalFindClipboard, this.defaultValue.globalFindClipboard),
            addExtraSpaceOnTop: vp(e.addExtraSpaceOnTop, this.defaultValue.addExtraSpaceOnTop),
            loop: vp(e.loop, this.defaultValue.loop),
            history: SP(e.history, this.defaultValue.history, [
                "never",
                "workspace"
            ]),
            replaceHistory: SP(e.replaceHistory, this.defaultValue.replaceHistory, [
                "never",
                "workspace"
            ])
        };
    }
}, Qwr = class zjn extends r2 {
    constructor(){
        super(53, "fontLigatures", zjn.OFF, {
            anyOf: [
                {
                    type: "boolean",
                    description: D(347, null)
                },
                {
                    type: "string",
                    description: D(348, null)
                }
            ],
            description: D(349, null),
            default: !1
        });
    }
    validate(e) {
        return typeof e > "u" ? this.defaultValue : typeof e == "string" ? e === "false" || e.length === 0 ? zjn.OFF : e === "true" ? zjn.ON : e : e ? zjn.ON : zjn.OFF;
    }
}, Qwr.OFF = '"liga" off, "calt" off', Qwr.ON = '"liga" on, "calt" on', Ltt = Qwr, Jwr = class Vjn extends r2 {
    constructor(){
        super(56, "fontVariations", Vjn.OFF, {
            anyOf: [
                {
                    type: "boolean",
                    description: D(350, null)
                },
                {
                    type: "string",
                    description: D(351, null)
                }
            ],
            description: D(352, null),
            default: !1
        });
    }
    validate(e) {
        return typeof e > "u" ? this.defaultValue : typeof e == "string" ? e === "false" ? Vjn.OFF : e === "true" ? Vjn.TRANSLATE : e : e ? Vjn.TRANSLATE : Vjn.OFF;
    }
    compute(e, n, i) {
        return e.fontInfo.fontVariationSettings;
    }
}, Jwr.OFF = "normal", Jwr.TRANSLATE = "translate", e0r = Jwr, h9d = class extends Vbt {
    constructor(){
        super(52);
    }
    compute(t, e, n) {
        return t.fontInfo;
    }
}, p9d = class extends Vbt {
    constructor(){
        super(147);
    }
    compute(t, e, n) {
        return t.inputMode === "overtype" ? e.get(84) : e.get(28);
    }
}, m9d = class extends Vbt {
    constructor(){
        super(157);
    }
    compute(t, e) {
        return typeof globalThis.EditContext == "function" && e.get(37);
    }
}, g9d = class extends Y9t {
    constructor(){
        super(54, "fontSize", q3.fontSize, {
            type: "number",
            minimum: 6,
            maximum: 100,
            default: q3.fontSize,
            description: D(353, null)
        });
    }
    validate(t) {
        const e = dwe.float(t, this.defaultValue);
        return e === 0 ? q3.fontSize : dwe.clamp(e, 6, 100);
    }
    compute(t, e, n) {
        return t.fontInfo.fontSize;
    }
}, xri = class Kjn extends r2 {
    constructor(){
        super(55, "fontWeight", q3.fontWeight, {
            anyOf: [
                {
                    type: "number",
                    minimum: Kjn.MINIMUM_VALUE,
                    maximum: Kjn.MAXIMUM_VALUE,
                    errorMessage: D(354, null)
                },
                {
                    type: "string",
                    pattern: "^(normal|bold|1000|[1-9][0-9]{0,2})$"
                },
                {
                    enum: Kjn.SUGGESTION_VALUES
                }
            ],
            default: q3.fontWeight,
            description: D(355, null)
        });
    }
    validate(e) {
        return e === "normal" || e === "bold" ? e : String(FI.clampedInt(e, q3.fontWeight, Kjn.MINIMUM_VALUE, Kjn.MAXIMUM_VALUE));
    }
}, xri.SUGGESTION_VALUES = [
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
], xri.MINIMUM_VALUE = 1, xri.MAXIMUM_VALUE = 1e3, f9d = xri, v9d = class extends r2 {
    constructor(){
        const t = {
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
        }, e = {
            type: "string",
            enum: [
                "peek",
                "gotoAndPeek",
                "goto"
            ],
            default: t.multiple,
            enumDescriptions: [
                D(356, null),
                D(357, null),
                D(358, null)
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
        super(60, "gotoLocation", t, {
            "editor.gotoLocation.multiple": {
                deprecationMessage: D(359, null)
            },
            "editor.gotoLocation.multipleDefinitions": {
                description: D(360, null),
                ...e
            },
            "editor.gotoLocation.multipleTypeDefinitions": {
                description: D(361, null),
                ...e
            },
            "editor.gotoLocation.multipleDeclarations": {
                description: D(362, null),
                ...e
            },
            "editor.gotoLocation.multipleImplementations": {
                description: D(363, null),
                ...e
            },
            "editor.gotoLocation.multipleReferences": {
                description: D(364, null),
                ...e
            },
            "editor.gotoLocation.alternativeDefinitionCommand": {
                type: "string",
                default: t.alternativeDefinitionCommand,
                enum: n,
                description: D(365, null)
            },
            "editor.gotoLocation.alternativeTypeDefinitionCommand": {
                type: "string",
                default: t.alternativeTypeDefinitionCommand,
                enum: n,
                description: D(366, null)
            },
            "editor.gotoLocation.alternativeDeclarationCommand": {
                type: "string",
                default: t.alternativeDeclarationCommand,
                enum: n,
                description: D(367, null)
            },
            "editor.gotoLocation.alternativeImplementationCommand": {
                type: "string",
                default: t.alternativeImplementationCommand,
                enum: n,
                description: D(368, null)
            },
            "editor.gotoLocation.alternativeReferenceCommand": {
                type: "string",
                default: t.alternativeReferenceCommand,
                enum: n,
                description: D(369, null)
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            multiple: SP(e.multiple, this.defaultValue.multiple, [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            multipleDefinitions: e.multipleDefinitions ?? SP(e.multipleDefinitions, "peek", [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            multipleTypeDefinitions: e.multipleTypeDefinitions ?? SP(e.multipleTypeDefinitions, "peek", [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            multipleDeclarations: e.multipleDeclarations ?? SP(e.multipleDeclarations, "peek", [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            multipleImplementations: e.multipleImplementations ?? SP(e.multipleImplementations, "peek", [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            multipleReferences: e.multipleReferences ?? SP(e.multipleReferences, "peek", [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            multipleTests: e.multipleTests ?? SP(e.multipleTests, "peek", [
                "peek",
                "gotoAndPeek",
                "goto"
            ]),
            alternativeDefinitionCommand: uoe.string(e.alternativeDefinitionCommand, this.defaultValue.alternativeDefinitionCommand),
            alternativeTypeDefinitionCommand: uoe.string(e.alternativeTypeDefinitionCommand, this.defaultValue.alternativeTypeDefinitionCommand),
            alternativeDeclarationCommand: uoe.string(e.alternativeDeclarationCommand, this.defaultValue.alternativeDeclarationCommand),
            alternativeImplementationCommand: uoe.string(e.alternativeImplementationCommand, this.defaultValue.alternativeImplementationCommand),
            alternativeReferenceCommand: uoe.string(e.alternativeReferenceCommand, this.defaultValue.alternativeReferenceCommand),
            alternativeTestsCommand: uoe.string(e.alternativeTestsCommand, this.defaultValue.alternativeTestsCommand)
        };
    }
}, _9d = class extends r2 {
    constructor(){
        const t = {
            enabled: !0,
            delay: 300,
            hidingDelay: 300,
            sticky: !0,
            above: !0
        };
        super(62, "hover", t, {
            "editor.hover.enabled": {
                type: "boolean",
                default: t.enabled,
                description: D(370, null)
            },
            "editor.hover.delay": {
                type: "number",
                default: t.delay,
                minimum: 0,
                maximum: 1e4,
                description: D(371, null)
            },
            "editor.hover.sticky": {
                type: "boolean",
                default: t.sticky,
                description: D(372, null)
            },
            "editor.hover.hidingDelay": {
                type: "integer",
                minimum: 0,
                default: t.hidingDelay,
                description: D(373, null)
            },
            "editor.hover.above": {
                type: "boolean",
                default: t.above,
                description: D(374, null)
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            enabled: vp(e.enabled, this.defaultValue.enabled),
            delay: FI.clampedInt(e.delay, this.defaultValue.delay, 0, 1e4),
            sticky: vp(e.sticky, this.defaultValue.sticky),
            hidingDelay: FI.clampedInt(e.hidingDelay, this.defaultValue.hidingDelay, 0, 6e5),
            above: vp(e.above, this.defaultValue.above)
        };
    }
}, ujo = class VYs extends Vbt {
    constructor(){
        super(151);
    }
    compute(e, n, i) {
        return VYs.computeLayout(n, {
            memory: e.memory,
            outerWidth: e.outerWidth,
            outerHeight: e.outerHeight,
            isDominatedByLongLines: e.isDominatedByLongLines,
            lineHeight: e.fontInfo.lineHeight,
            viewLineCount: e.viewLineCount,
            lineNumbersDigitCount: e.lineNumbersDigitCount,
            typicalHalfwidthCharacterWidth: e.fontInfo.typicalHalfwidthCharacterWidth,
            maxDigitWidth: e.fontInfo.maxDigitWidth,
            pixelRatio: e.pixelRatio,
            glyphMarginDecorationLaneCount: e.glyphMarginDecorationLaneCount
        });
    }
    static computeContainedMinimapLineCount(e) {
        const n = e.height / e.lineHeight, i = Math.floor(e.paddingTop / e.lineHeight);
        let r = Math.floor(e.paddingBottom / e.lineHeight);
        e.scrollBeyondLastLine && (r = Math.max(r, n - 1));
        const s = (i + e.viewLineCount + r) / (e.pixelRatio * e.height), o = Math.floor(e.viewLineCount / s);
        return {
            typicalViewportLineCount: n,
            extraLinesBeforeFirstLine: i,
            extraLinesBeyondLastLine: r,
            desiredRatio: s,
            minimapLineCount: o
        };
    }
    static _computeMinimapLayout(e, n) {
        const i = e.outerWidth, r = e.outerHeight, s = e.pixelRatio;
        if (!e.minimap.enabled) return {
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
        const o = n.stableMinimapLayoutInput, a = o && e.outerHeight === o.outerHeight && e.lineHeight === o.lineHeight && e.typicalHalfwidthCharacterWidth === o.typicalHalfwidthCharacterWidth && e.pixelRatio === o.pixelRatio && e.scrollBeyondLastLine === o.scrollBeyondLastLine && e.paddingTop === o.paddingTop && e.paddingBottom === o.paddingBottom && e.minimap.enabled === o.minimap.enabled && e.minimap.side === o.minimap.side && e.minimap.size === o.minimap.size && e.minimap.showSlider === o.minimap.showSlider && e.minimap.renderCharacters === o.minimap.renderCharacters && e.minimap.maxColumn === o.minimap.maxColumn && e.minimap.scale === o.minimap.scale && e.verticalScrollbarWidth === o.verticalScrollbarWidth && e.isViewportWrapping === o.isViewportWrapping, l = e.lineHeight, c = e.typicalHalfwidthCharacterWidth, u = e.scrollBeyondLastLine, d = e.minimap.renderCharacters;
        let h = s >= 2 ? Math.round(e.minimap.scale * 2) : e.minimap.scale;
        const p = e.minimap.maxColumn, g = e.minimap.size, f = e.minimap.side, _ = e.verticalScrollbarWidth, b = e.viewLineCount, y = e.remainingWidth, S = e.isViewportWrapping, k = d ? 2 : 3;
        let C = Math.floor(s * r);
        const T = C / s;
        let I = !1, A = !1, P = k * h, M = h / s, O = 1;
        if (g === "fill" || g === "fit") {
            const { typicalViewportLineCount: q, extraLinesBeforeFirstLine: K, extraLinesBeyondLastLine: V, desiredRatio: Y, minimapLineCount: J } = VYs.computeContainedMinimapLineCount({
                viewLineCount: b,
                scrollBeyondLastLine: u,
                paddingTop: e.paddingTop,
                paddingBottom: e.paddingBottom,
                height: r,
                lineHeight: l,
                pixelRatio: s
            });
            if (b / J > 1) I = !0, A = !0, h = 1, P = 1, M = h / s;
            else {
                let te = !1, ee = h + 1;
                if (g === "fit") {
                    const re = Math.ceil((K + b + V) * P);
                    S && a && y <= n.stableFitRemainingWidth ? (te = !0, ee = n.stableFitMaxMinimapScale) : te = re > C;
                }
                if (g === "fill" || te) {
                    I = !0;
                    const re = h;
                    P = Math.min(l * s, Math.max(1, Math.floor(1 / Y))), S && a && y <= n.stableFitRemainingWidth && (ee = n.stableFitMaxMinimapScale), h = Math.min(ee, Math.max(1, Math.floor(P / k))), h > re && (O = Math.min(2, h / re)), M = h / s / O, C = Math.ceil(Math.max(q, K + b + V) * P), S ? (n.stableMinimapLayoutInput = e, n.stableFitRemainingWidth = y, n.stableFitMaxMinimapScale = h) : (n.stableMinimapLayoutInput = null, n.stableFitRemainingWidth = 0);
                }
            }
        }
        const N = Math.floor(p * M), U = Math.min(N, Math.max(0, Math.floor((y - _ - 2) * M / (c + M))) + y5e);
        let j = Math.floor(s * U);
        const $ = j / s;
        j = Math.floor(j * O);
        const H = d ? 1 : 2, G = f === "left" ? 0 : i - U - _;
        return {
            renderMinimap: H,
            minimapLeft: G,
            minimapWidth: U,
            minimapHeightIsEditorHeight: I,
            minimapIsSampling: A,
            minimapScale: h,
            minimapLineHeight: P,
            minimapCanvasInnerWidth: j,
            minimapCanvasInnerHeight: C,
            minimapCanvasOuterWidth: $,
            minimapCanvasOuterHeight: T
        };
    }
    static computeLayout(e, n) {
        const i = n.outerWidth | 0, r = n.outerHeight | 0, s = n.lineHeight | 0, o = n.lineNumbersDigitCount | 0, a = n.typicalHalfwidthCharacterWidth, l = n.maxDigitWidth, c = n.pixelRatio, u = n.viewLineCount, d = e.get(142), h = d === "inherit" ? e.get(141) : d, p = h === "inherit" ? e.get(137) : h, g = e.get(140), f = n.isDominatedByLongLines, _ = e.get(59), b = e.get(69).renderType !== 0, y = e.get(70), S = e.get(110), k = e.get(88), C = e.get(74), T = e.get(108), I = T.verticalScrollbarSize, A = T.verticalHasArrows, P = T.arrowSize, M = T.horizontalScrollbarSize, O = e.get(45), N = e.get(115) !== "never";
        let U = e.get(67);
        O && N && (U += 16);
        let j = 0;
        if (b) {
            const oe = Math.max(o, y);
            j = Math.round(oe * l);
        }
        let $ = 0;
        _ && ($ = s * n.glyphMarginDecorationLaneCount);
        let H = 0, G = H + $, q = G + j, K = q + U;
        const V = i - $ - j - U;
        let Y = !1, J = !1, Q = -1;
        h === "inherit" && f ? (Y = !0, J = !0) : p === "on" || p === "bounded" ? J = !0 : p === "wordWrapColumn" && (Q = g);
        const te = VYs._computeMinimapLayout({
            outerWidth: i,
            outerHeight: r,
            lineHeight: s,
            typicalHalfwidthCharacterWidth: a,
            pixelRatio: c,
            scrollBeyondLastLine: S,
            paddingTop: k.top,
            paddingBottom: k.bottom,
            minimap: C,
            verticalScrollbarWidth: I,
            viewLineCount: u,
            remainingWidth: V,
            isViewportWrapping: J
        }, n.memory || new cjo);
        te.renderMinimap !== 0 && te.minimapLeft === 0 && (H += te.minimapWidth, G += te.minimapWidth, q += te.minimapWidth, K += te.minimapWidth);
        const ee = V - te.minimapWidth, re = Math.max(1, Math.floor((ee - I - 2) / a)), ie = A ? P : 0;
        return J && (Q = Math.max(1, re), p === "bounded" && (Q = Math.min(Q, g))), {
            width: i,
            height: r,
            glyphMarginLeft: H,
            glyphMarginWidth: $,
            glyphMarginDecorationLaneCount: n.glyphMarginDecorationLaneCount,
            lineNumbersLeft: G,
            lineNumbersWidth: j,
            decorationsLeft: q,
            decorationsWidth: U,
            contentLeft: K,
            contentWidth: ee,
            minimap: te,
            viewportColumn: re,
            isWordWrapMinified: Y,
            isViewportWrapping: J,
            wrappingColumn: Q,
            verticalScrollbarWidth: I,
            horizontalScrollbarHeight: M,
            overviewRuler: {
                top: ie,
                width: I,
                height: r - 2 * ie,
                right: 0
            }
        };
    }
}, b9d = class extends r2 {
    constructor(){
        super(144, "wrappingStrategy", "simple", {
            "editor.wrappingStrategy": {
                enumDescriptions: [
                    D(375, null),
                    D(376, null)
                ],
                type: "string",
                enum: [
                    "simple",
                    "advanced"
                ],
                default: "simple",
                description: D(377, null)
            }
        });
    }
    validate(t) {
        return SP(t, "simple", [
            "simple",
            "advanced"
        ]);
    }
    compute(t, e, n) {
        return e.get(2) === 2 ? "advanced" : n;
    }
}, Xgn = ((t)=>(t.Off = "off", t.OnCode = "onCode", t.On = "on", t))(Xgn || {}), y9d = class extends r2 {
    constructor(){
        const t = {
            enabled: "off"
        };
        super(66, "lightbulb", t, {
            "editor.lightbulb.enabled": {
                type: "string",
                enum: [
                    "off",
                    "onCode",
                    "on"
                ],
                default: t.enabled,
                enumDescriptions: [
                    D(378, null),
                    D(379, null),
                    D(380, null)
                ],
                description: D(381, null)
            }
        });
    }
    validate(t) {
        return !t || typeof t != "object" ? this.defaultValue : {
            enabled: SP(t.enabled, this.defaultValue.enabled, [
                "off",
                "onCode",
                "on"
            ])
        };
    }
}, S9d = class extends r2 {
    constructor(){
        const t = {
            enabled: !0,
            maxLineCount: 5,
            defaultModel: "outlineModel",
            scrollWithEditor: !0
        };
        super(120, "stickyScroll", t, {
            "editor.stickyScroll.enabled": {
                type: "boolean",
                default: t.enabled,
                description: D(382, null)
            },
            "editor.stickyScroll.maxLineCount": {
                type: "number",
                default: t.maxLineCount,
                minimum: 1,
                maximum: 20,
                description: D(383, null)
            },
            "editor.stickyScroll.defaultModel": {
                type: "string",
                enum: [
                    "outlineModel",
                    "foldingProviderModel",
                    "indentationModel"
                ],
                default: t.defaultModel,
                description: D(384, null)
            },
            "editor.stickyScroll.scrollWithEditor": {
                type: "boolean",
                default: t.scrollWithEditor,
                description: D(385, null)
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            enabled: vp(e.enabled, this.defaultValue.enabled),
            maxLineCount: FI.clampedInt(e.maxLineCount, this.defaultValue.maxLineCount, 1, 20),
            defaultModel: SP(e.defaultModel, this.defaultValue.defaultModel, [
                "outlineModel",
                "foldingProviderModel",
                "indentationModel"
            ]),
            scrollWithEditor: vp(e.scrollWithEditor, this.defaultValue.scrollWithEditor)
        };
    }
}, k9d = class extends r2 {
    constructor(){
        const t = {
            enabled: "on",
            fontSize: 0,
            fontFamily: "",
            padding: !1,
            maximumLength: 43
        };
        super(146, "inlayHints", t, {
            "editor.inlayHints.enabled": {
                type: "string",
                default: t.enabled,
                description: D(386, null),
                enum: [
                    "on",
                    "onUnlessPressed",
                    "offUnlessPressed",
                    "off"
                ],
                markdownEnumDescriptions: [
                    D(387, null),
                    D(388, null, _r ? "Ctrl+Option" : "Ctrl+Alt"),
                    D(389, null, _r ? "Ctrl+Option" : "Ctrl+Alt"),
                    D(390, null)
                ]
            },
            "editor.inlayHints.fontSize": {
                type: "number",
                default: t.fontSize,
                markdownDescription: D(391, null, "`#editor.fontSize#`", "`5`")
            },
            "editor.inlayHints.fontFamily": {
                type: "string",
                default: t.fontFamily,
                markdownDescription: D(392, null, "`#editor.fontFamily#`")
            },
            "editor.inlayHints.padding": {
                type: "boolean",
                default: t.padding,
                description: D(393, null)
            },
            "editor.inlayHints.maximumLength": {
                type: "number",
                default: t.maximumLength,
                markdownDescription: D(394, null)
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return typeof e.enabled == "boolean" && (e.enabled = e.enabled ? "on" : "off"), {
            enabled: SP(e.enabled, this.defaultValue.enabled, [
                "on",
                "off",
                "offUnlessPressed",
                "onUnlessPressed"
            ]),
            fontSize: FI.clampedInt(e.fontSize, this.defaultValue.fontSize, 0, 100),
            fontFamily: uoe.string(e.fontFamily, this.defaultValue.fontFamily),
            padding: vp(e.padding, this.defaultValue.padding),
            maximumLength: FI.clampedInt(e.maximumLength, this.defaultValue.maximumLength, 0, Number.MAX_SAFE_INTEGER)
        };
    }
}, w9d = class extends r2 {
    constructor(){
        super(67, "lineDecorationsWidth", 10);
    }
    validate(t) {
        return typeof t == "string" && /^\d+(\.\d+)?ch$/.test(t) ? -parseFloat(t.substring(0, t.length - 2)) : FI.clampedInt(t, this.defaultValue, 0, 1e3);
    }
    compute(t, e, n) {
        return n < 0 ? FI.clampedInt(-n * t.fontInfo.typicalHalfwidthCharacterWidth, this.defaultValue, 0, 1e3) : n;
    }
}, C9d = class extends dwe {
    constructor(){
        super(68, "lineHeight", q3.lineHeight, (t)=>dwe.clamp(t, 0, 150), {
            markdownDescription: D(395, null)
        });
    }
    compute(t, e, n) {
        return t.fontInfo.lineHeight;
    }
}, T9d = class extends r2 {
    constructor(){
        const t = {
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
        super(74, "minimap", t, {
            "editor.minimap.enabled": {
                type: "boolean",
                default: t.enabled,
                description: D(396, null)
            },
            "editor.minimap.autohide": {
                type: "boolean",
                default: t.autohide,
                description: D(397, null)
            },
            "editor.minimap.size": {
                type: "string",
                enum: [
                    "proportional",
                    "fill",
                    "fit"
                ],
                enumDescriptions: [
                    D(398, null),
                    D(399, null),
                    D(400, null)
                ],
                default: t.size,
                description: D(401, null)
            },
            "editor.minimap.side": {
                type: "string",
                enum: [
                    "left",
                    "right"
                ],
                default: t.side,
                description: D(402, null)
            },
            "editor.minimap.showSlider": {
                type: "string",
                enum: [
                    "always",
                    "mouseover"
                ],
                default: t.showSlider,
                description: D(403, null)
            },
            "editor.minimap.scale": {
                type: "number",
                default: t.scale,
                minimum: 1,
                maximum: 3,
                enum: [
                    1,
                    2,
                    3
                ],
                description: D(404, null)
            },
            "editor.minimap.renderCharacters": {
                type: "boolean",
                default: t.renderCharacters,
                description: D(405, null)
            },
            "editor.minimap.maxColumn": {
                type: "number",
                default: t.maxColumn,
                description: D(406, null)
            },
            "editor.minimap.showRegionSectionHeaders": {
                type: "boolean",
                default: t.showRegionSectionHeaders,
                description: D(407, null)
            },
            "editor.minimap.showMarkSectionHeaders": {
                type: "boolean",
                default: t.showMarkSectionHeaders,
                description: D(408, null)
            },
            "editor.minimap.markSectionHeaderRegex": {
                type: "string",
                default: t.markSectionHeaderRegex,
                description: D(409, null)
            },
            "editor.minimap.sectionHeaderFontSize": {
                type: "number",
                default: t.sectionHeaderFontSize,
                description: D(410, null)
            },
            "editor.minimap.sectionHeaderLetterSpacing": {
                type: "number",
                default: t.sectionHeaderLetterSpacing,
                description: D(411, null)
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        let n = this.defaultValue.markSectionHeaderRegex;
        const i = t.markSectionHeaderRegex;
        if (typeof i == "string") try {
            new RegExp(i, "d"), n = i;
        } catch  {}
        return {
            enabled: vp(e.enabled, this.defaultValue.enabled),
            autohide: vp(e.autohide, this.defaultValue.autohide),
            size: SP(e.size, this.defaultValue.size, [
                "proportional",
                "fill",
                "fit"
            ]),
            side: SP(e.side, this.defaultValue.side, [
                "right",
                "left"
            ]),
            showSlider: SP(e.showSlider, this.defaultValue.showSlider, [
                "always",
                "mouseover"
            ]),
            renderCharacters: vp(e.renderCharacters, this.defaultValue.renderCharacters),
            scale: FI.clampedInt(e.scale, 1, 1, 3),
            maxColumn: FI.clampedInt(e.maxColumn, this.defaultValue.maxColumn, 1, 1e4),
            showRegionSectionHeaders: vp(e.showRegionSectionHeaders, this.defaultValue.showRegionSectionHeaders),
            showMarkSectionHeaders: vp(e.showMarkSectionHeaders, this.defaultValue.showMarkSectionHeaders),
            markSectionHeaderRegex: n,
            sectionHeaderFontSize: dwe.clamp(e.sectionHeaderFontSize ?? this.defaultValue.sectionHeaderFontSize, 4, 32),
            sectionHeaderLetterSpacing: dwe.clamp(e.sectionHeaderLetterSpacing ?? this.defaultValue.sectionHeaderLetterSpacing, 0, 5)
        };
    }
}, E9d = class extends r2 {
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
                description: D(412, null)
            },
            "editor.padding.bottom": {
                type: "number",
                default: 0,
                minimum: 0,
                maximum: 1e3,
                description: D(413, null)
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            top: FI.clampedInt(e.top, 0, 0, 1e3),
            bottom: FI.clampedInt(e.bottom, 0, 0, 1e3)
        };
    }
}, I9d = class extends r2 {
    constructor(){
        const t = {
            enabled: !0,
            cycle: !0
        };
        super(90, "parameterHints", t, {
            "editor.parameterHints.enabled": {
                type: "boolean",
                default: t.enabled,
                description: D(414, null)
            },
            "editor.parameterHints.cycle": {
                type: "boolean",
                default: t.cycle,
                description: D(415, null)
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            enabled: vp(e.enabled, this.defaultValue.enabled),
            cycle: vp(e.cycle, this.defaultValue.cycle)
        };
    }
}, x9d = class extends Vbt {
    constructor(){
        super(149);
    }
    compute(t, e, n) {
        return t.pixelRatio;
    }
}, A9d = class extends r2 {
    constructor(){
        super(92, "placeholder", void 0);
    }
    validate(t) {
        return typeof t > "u" ? this.defaultValue : typeof t == "string" ? t : this.defaultValue;
    }
}, R9d = class extends r2 {
    constructor(){
        const t = {
            other: "on",
            comments: "off",
            strings: "off"
        }, e = [
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
                    D(416, null),
                    D(417, null),
                    D(418, null)
                ]
            }
        ];
        super(94, "quickSuggestions", t, {
            type: "object",
            additionalProperties: !1,
            properties: {
                strings: {
                    anyOf: e,
                    default: t.strings,
                    description: D(419, null)
                },
                comments: {
                    anyOf: e,
                    default: t.comments,
                    description: D(420, null)
                },
                other: {
                    anyOf: e,
                    default: t.other,
                    description: D(421, null)
                }
            },
            default: t,
            markdownDescription: D(422, null, "`#editor.suggestOnTriggerCharacters#`")
        }), this.defaultValue = t;
    }
    validate(t) {
        if (typeof t == "boolean") {
            const l = t ? "on" : "off";
            return {
                comments: l,
                strings: l,
                other: l
            };
        }
        if (!t || typeof t != "object") return this.defaultValue;
        const { other: e, comments: n, strings: i } = t, r = [
            "on",
            "inline",
            "off"
        ];
        let s, o, a;
        return typeof e == "boolean" ? s = e ? "on" : "off" : s = SP(e, this.defaultValue.other, r), typeof n == "boolean" ? o = n ? "on" : "off" : o = SP(n, this.defaultValue.comments, r), typeof i == "boolean" ? a = i ? "on" : "off" : a = SP(i, this.defaultValue.strings, r), {
            other: s,
            comments: o,
            strings: a
        };
    }
}, P9d = class extends r2 {
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
                D(423, null),
                D(424, null),
                D(425, null),
                D(426, null)
            ],
            default: "on",
            description: D(427, null)
        });
    }
    validate(t) {
        let e = this.defaultValue.renderType, n = this.defaultValue.renderFn;
        return typeof t < "u" && (typeof t == "function" ? (e = 4, n = t) : t === "interval" ? e = 3 : t === "relative" ? e = 2 : t === "on" ? e = 1 : e = 0), {
            renderType: e,
            renderFn: n
        };
    }
}, M9d = class extends r2 {
    constructor(){
        const t = [], e = {
            type: "number",
            description: D(428, null)
        };
        super(107, "rulers", t, {
            type: "array",
            items: {
                anyOf: [
                    e,
                    {
                        type: [
                            "object"
                        ],
                        properties: {
                            column: e,
                            color: {
                                type: "string",
                                description: D(429, null),
                                format: "color-hex"
                            }
                        }
                    }
                ]
            },
            default: t,
            description: D(430, null)
        });
    }
    validate(t) {
        if (Array.isArray(t)) {
            const e = [];
            for (const n of t)if (typeof n == "number") e.push({
                column: FI.clampedInt(n, 0, 0, 1e4),
                color: null
            });
            else if (n && typeof n == "object") {
                const i = n;
                e.push({
                    column: FI.clampedInt(i.column, 0, 0, 1e4),
                    color: i.color
                });
            }
            return e.sort((n, i)=>n.column - i.column), e;
        }
        return this.defaultValue;
    }
}, D9d = class extends r2 {
    constructor(){
        super(97, "readOnlyMessage", void 0);
    }
    validate(t) {
        return !t || typeof t != "object" ? this.defaultValue : t;
    }
}, N9d = class extends r2 {
    constructor(){
        const t = {
            vertical: D5.Auto,
            horizontal: D5.Auto,
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
        super(108, "scrollbar", t, {
            "editor.scrollbar.vertical": {
                type: "string",
                enum: [
                    "auto",
                    "visible",
                    "hidden"
                ],
                enumDescriptions: [
                    D(431, null),
                    D(432, null),
                    D(433, null)
                ],
                default: "auto",
                description: D(434, null)
            },
            "editor.scrollbar.horizontal": {
                type: "string",
                enum: [
                    "auto",
                    "visible",
                    "hidden"
                ],
                enumDescriptions: [
                    D(435, null),
                    D(436, null),
                    D(437, null)
                ],
                default: "auto",
                description: D(438, null)
            },
            "editor.scrollbar.verticalScrollbarSize": {
                type: "number",
                default: t.verticalScrollbarSize,
                description: D(439, null)
            },
            "editor.scrollbar.horizontalScrollbarSize": {
                type: "number",
                default: t.horizontalScrollbarSize,
                description: D(440, null)
            },
            "editor.scrollbar.scrollByPage": {
                type: "boolean",
                default: t.scrollByPage,
                description: D(441, null)
            },
            "editor.scrollbar.ignoreHorizontalScrollbarInContentHeight": {
                type: "boolean",
                default: t.ignoreHorizontalScrollbarInContentHeight,
                description: D(442, null)
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t, n = FI.clampedInt(e.horizontalScrollbarSize, this.defaultValue.horizontalScrollbarSize, 0, 1e3), i = FI.clampedInt(e.verticalScrollbarSize, this.defaultValue.verticalScrollbarSize, 0, 1e3);
        return {
            arrowSize: FI.clampedInt(e.arrowSize, this.defaultValue.arrowSize, 0, 1e3),
            vertical: s9d(e.vertical, this.defaultValue.vertical),
            horizontal: s9d(e.horizontal, this.defaultValue.horizontal),
            useShadows: vp(e.useShadows, this.defaultValue.useShadows),
            verticalHasArrows: vp(e.verticalHasArrows, this.defaultValue.verticalHasArrows),
            horizontalHasArrows: vp(e.horizontalHasArrows, this.defaultValue.horizontalHasArrows),
            handleMouseWheel: vp(e.handleMouseWheel, this.defaultValue.handleMouseWheel),
            ignoreVerticalScrolling: vp(e.ignoreVerticalScrolling, this.defaultValue.ignoreVerticalScrolling),
            alwaysConsumeMouseWheel: vp(e.alwaysConsumeMouseWheel, this.defaultValue.alwaysConsumeMouseWheel),
            horizontalScrollbarSize: n,
            horizontalSliderSize: FI.clampedInt(e.horizontalSliderSize, n, 0, 1e3),
            verticalScrollbarSize: i,
            verticalSliderSize: FI.clampedInt(e.verticalSliderSize, i, 0, 1e3),
            scrollByPage: vp(e.scrollByPage, this.defaultValue.scrollByPage),
            ignoreHorizontalScrollbarInContentHeight: vp(e.ignoreHorizontalScrollbarInContentHeight, this.defaultValue.ignoreHorizontalScrollbarInContentHeight)
        };
    }
}, nhe = "inUntrustedWorkspace", ine = {
    allowedCharacters: "editor.unicodeHighlight.allowedCharacters",
    invisibleCharacters: "editor.unicodeHighlight.invisibleCharacters",
    nonBasicASCII: "editor.unicodeHighlight.nonBasicASCII",
    ambiguousCharacters: "editor.unicodeHighlight.ambiguousCharacters",
    includeComments: "editor.unicodeHighlight.includeComments",
    includeStrings: "editor.unicodeHighlight.includeStrings",
    allowedLocales: "editor.unicodeHighlight.allowedLocales"
}, L9d = class extends r2 {
    constructor(){
        const t = {
            nonBasicASCII: nhe,
            invisibleCharacters: !0,
            ambiguousCharacters: !0,
            includeComments: nhe,
            includeStrings: !0,
            allowedCharacters: {},
            allowedLocales: {
                _os: !0,
                _vscode: !0
            }
        };
        super(130, "unicodeHighlight", t, {
            [ine.nonBasicASCII]: {
                restricted: !0,
                type: [
                    "boolean",
                    "string"
                ],
                enum: [
                    !0,
                    !1,
                    nhe
                ],
                default: t.nonBasicASCII,
                description: D(443, null)
            },
            [ine.invisibleCharacters]: {
                restricted: !0,
                type: "boolean",
                default: t.invisibleCharacters,
                description: D(444, null)
            },
            [ine.ambiguousCharacters]: {
                restricted: !0,
                type: "boolean",
                default: t.ambiguousCharacters,
                description: D(445, null)
            },
            [ine.includeComments]: {
                restricted: !0,
                type: [
                    "boolean",
                    "string"
                ],
                enum: [
                    !0,
                    !1,
                    nhe
                ],
                default: t.includeComments,
                description: D(446, null)
            },
            [ine.includeStrings]: {
                restricted: !0,
                type: [
                    "boolean",
                    "string"
                ],
                enum: [
                    !0,
                    !1,
                    nhe
                ],
                default: t.includeStrings,
                description: D(447, null)
            },
            [ine.allowedCharacters]: {
                restricted: !0,
                type: "object",
                default: t.allowedCharacters,
                description: D(448, null),
                additionalProperties: {
                    type: "boolean"
                }
            },
            [ine.allowedLocales]: {
                restricted: !0,
                type: "object",
                additionalProperties: {
                    type: "boolean"
                },
                default: t.allowedLocales,
                description: D(449, null)
            }
        });
    }
    applyUpdate(t, e) {
        let n = !1;
        e.allowedCharacters && t && (Rp(t.allowedCharacters, e.allowedCharacters) || (t = {
            ...t,
            allowedCharacters: e.allowedCharacters
        }, n = !0)), e.allowedLocales && t && (Rp(t.allowedLocales, e.allowedLocales) || (t = {
            ...t,
            allowedLocales: e.allowedLocales
        }, n = !0));
        const i = super.applyUpdate(t, e);
        return n ? new Iri(i.newValue, !0) : i;
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            nonBasicASCII: Kgn(e.nonBasicASCII, nhe, [
                !0,
                !1,
                nhe
            ]),
            invisibleCharacters: vp(e.invisibleCharacters, this.defaultValue.invisibleCharacters),
            ambiguousCharacters: vp(e.ambiguousCharacters, this.defaultValue.ambiguousCharacters),
            includeComments: Kgn(e.includeComments, nhe, [
                !0,
                !1,
                nhe
            ]),
            includeStrings: Kgn(e.includeStrings, nhe, [
                !0,
                !1,
                nhe
            ]),
            allowedCharacters: this.validateBooleanMap(t.allowedCharacters, this.defaultValue.allowedCharacters),
            allowedLocales: this.validateBooleanMap(t.allowedLocales, this.defaultValue.allowedLocales)
        };
    }
    validateBooleanMap(t, e) {
        if (typeof t != "object" || !t) return e;
        const n = {};
        for (const [i, r] of Object.entries(t))r === !0 && (n[i] = !0);
        return n;
    }
}, O9d = class extends r2 {
    constructor(){
        const t = {
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
        super(64, "inlineSuggest", t, {
            "editor.inlineSuggest.enabled": {
                type: "boolean",
                default: t.enabled,
                description: D(450, null)
            },
            "editor.inlineSuggest.showToolbar": {
                type: "string",
                default: t.showToolbar,
                enum: [
                    "always",
                    "onHover",
                    "never"
                ],
                enumDescriptions: [
                    D(451, null),
                    D(452, null),
                    D(453, null)
                ],
                description: D(454, null)
            },
            "editor.inlineSuggest.syntaxHighlightingEnabled": {
                type: "boolean",
                default: t.syntaxHighlightingEnabled,
                description: D(455, null)
            },
            "editor.inlineSuggest.suppressSuggestions": {
                type: "boolean",
                default: t.suppressSuggestions,
                description: D(456, null)
            },
            "editor.inlineSuggest.fontFamily": {
                type: "string",
                default: t.fontFamily,
                description: D(457, null)
            },
            "editor.inlineSuggest.edits.allowCodeShifting": {
                type: "string",
                default: t.edits.allowCodeShifting,
                description: D(458, null),
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
                default: t.edits.renderSideBySide,
                description: D(459, null),
                enum: [
                    "auto",
                    "never"
                ],
                enumDescriptions: [
                    D(460, null),
                    D(461, null)
                ],
                tags: [
                    "nextEditSuggestions"
                ]
            },
            "editor.inlineSuggest.edits.showCollapsed": {
                type: "boolean",
                default: t.edits.showCollapsed,
                description: D(462, null),
                tags: [
                    "nextEditSuggestions"
                ]
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            enabled: vp(e.enabled, this.defaultValue.enabled),
            mode: SP(e.mode, this.defaultValue.mode, [
                "prefix",
                "subword",
                "subwordSmart"
            ]),
            showToolbar: SP(e.showToolbar, this.defaultValue.showToolbar, [
                "always",
                "onHover",
                "never"
            ]),
            suppressSuggestions: vp(e.suppressSuggestions, this.defaultValue.suppressSuggestions),
            keepOnBlur: vp(e.keepOnBlur, this.defaultValue.keepOnBlur),
            fontFamily: uoe.string(e.fontFamily, this.defaultValue.fontFamily),
            syntaxHighlightingEnabled: vp(e.syntaxHighlightingEnabled, this.defaultValue.syntaxHighlightingEnabled),
            edits: {
                enabled: vp(e.edits?.enabled, this.defaultValue.edits.enabled),
                showCollapsed: vp(e.edits?.showCollapsed, this.defaultValue.edits.showCollapsed),
                allowCodeShifting: SP(e.edits?.allowCodeShifting, this.defaultValue.edits.allowCodeShifting, [
                    "always",
                    "horizontal",
                    "never"
                ]),
                renderSideBySide: SP(e.edits?.renderSideBySide, this.defaultValue.edits.renderSideBySide, [
                    "never",
                    "auto"
                ]),
                useMultiLineGhostText: vp(e.edits?.useMultiLineGhostText, this.defaultValue.edits.useMultiLineGhostText)
            }
        };
    }
}, F9d = class extends r2 {
    constructor(){
        const t = {
            enabled: uz.bracketPairColorizationOptions.enabled,
            independentColorPoolPerBracketType: uz.bracketPairColorizationOptions.independentColorPoolPerBracketType
        };
        super(15, "bracketPairColorization", t, {
            "editor.bracketPairColorization.enabled": {
                type: "boolean",
                default: t.enabled,
                markdownDescription: D(463, null, "`#workbench.colorCustomizations#`")
            },
            "editor.bracketPairColorization.independentColorPoolPerBracketType": {
                type: "boolean",
                default: t.independentColorPoolPerBracketType,
                description: D(464, null)
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            enabled: vp(e.enabled, this.defaultValue.enabled),
            independentColorPoolPerBracketType: vp(e.independentColorPoolPerBracketType, this.defaultValue.independentColorPoolPerBracketType)
        };
    }
}, B9d = class extends r2 {
    constructor(){
        const t = {
            bracketPairs: !1,
            bracketPairsHorizontal: "active",
            highlightActiveBracketPair: !0,
            indentation: !0,
            highlightActiveIndentation: !0
        };
        super(16, "guides", t, {
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
                    D(465, null),
                    D(466, null),
                    D(467, null)
                ],
                default: t.bracketPairs,
                description: D(468, null)
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
                    D(469, null),
                    D(470, null),
                    D(471, null)
                ],
                default: t.bracketPairsHorizontal,
                description: D(472, null)
            },
            "editor.guides.highlightActiveBracketPair": {
                type: "boolean",
                default: t.highlightActiveBracketPair,
                description: D(473, null)
            },
            "editor.guides.indentation": {
                type: "boolean",
                default: t.indentation,
                description: D(474, null)
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
                    D(475, null),
                    D(476, null),
                    D(477, null)
                ],
                default: t.highlightActiveIndentation,
                description: D(478, null)
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            bracketPairs: Kgn(e.bracketPairs, this.defaultValue.bracketPairs, [
                !0,
                !1,
                "active"
            ]),
            bracketPairsHorizontal: Kgn(e.bracketPairsHorizontal, this.defaultValue.bracketPairsHorizontal, [
                !0,
                !1,
                "active"
            ]),
            highlightActiveBracketPair: vp(e.highlightActiveBracketPair, this.defaultValue.highlightActiveBracketPair),
            indentation: vp(e.indentation, this.defaultValue.indentation),
            highlightActiveIndentation: Kgn(e.highlightActiveIndentation, this.defaultValue.highlightActiveIndentation, [
                !0,
                !1,
                "always"
            ])
        };
    }
}, U9d = class extends r2 {
    constructor(){
        const t = {
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
        super(123, "suggest", t, {
            "editor.suggest.insertMode": {
                type: "string",
                enum: [
                    "insert",
                    "replace"
                ],
                enumDescriptions: [
                    D(479, null),
                    D(480, null)
                ],
                default: t.insertMode,
                description: D(481, null)
            },
            "editor.suggest.filterGraceful": {
                type: "boolean",
                default: t.filterGraceful,
                description: D(482, null)
            },
            "editor.suggest.localityBonus": {
                type: "boolean",
                default: t.localityBonus,
                description: D(483, null)
            },
            "editor.suggest.shareSuggestSelections": {
                type: "boolean",
                default: t.shareSuggestSelections,
                markdownDescription: D(484, null)
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
                    D(485, null),
                    D(486, null),
                    D(487, null),
                    D(488, null)
                ],
                default: t.selectionMode,
                markdownDescription: D(489, null, "`#editor.quickSuggestions#`", "`#editor.suggestOnTriggerCharacters#`")
            },
            "editor.suggest.snippetsPreventQuickSuggestions": {
                type: "boolean",
                default: t.snippetsPreventQuickSuggestions,
                description: D(490, null)
            },
            "editor.suggest.showIcons": {
                type: "boolean",
                default: t.showIcons,
                description: D(491, null)
            },
            "editor.suggest.showStatusBar": {
                type: "boolean",
                default: t.showStatusBar,
                description: D(492, null)
            },
            "editor.suggest.preview": {
                type: "boolean",
                default: t.preview,
                description: D(493, null)
            },
            "editor.suggest.showInlineDetails": {
                type: "boolean",
                default: t.showInlineDetails,
                description: D(494, null)
            },
            "editor.suggest.maxVisibleSuggestions": {
                type: "number",
                deprecationMessage: D(495, null)
            },
            "editor.suggest.filteredTypes": {
                type: "object",
                deprecationMessage: D(496, null)
            },
            "editor.suggest.showMethods": {
                type: "boolean",
                default: !0,
                markdownDescription: D(497, null)
            },
            "editor.suggest.showFunctions": {
                type: "boolean",
                default: !0,
                markdownDescription: D(498, null)
            },
            "editor.suggest.showConstructors": {
                type: "boolean",
                default: !0,
                markdownDescription: D(499, null)
            },
            "editor.suggest.showDeprecated": {
                type: "boolean",
                default: !0,
                markdownDescription: D(500, null)
            },
            "editor.suggest.matchOnWordStartOnly": {
                type: "boolean",
                default: !0,
                markdownDescription: D(501, null)
            },
            "editor.suggest.showFields": {
                type: "boolean",
                default: !0,
                markdownDescription: D(502, null)
            },
            "editor.suggest.showVariables": {
                type: "boolean",
                default: !0,
                markdownDescription: D(503, null)
            },
            "editor.suggest.showClasses": {
                type: "boolean",
                default: !0,
                markdownDescription: D(504, null)
            },
            "editor.suggest.showStructs": {
                type: "boolean",
                default: !0,
                markdownDescription: D(505, null)
            },
            "editor.suggest.showInterfaces": {
                type: "boolean",
                default: !0,
                markdownDescription: D(506, null)
            },
            "editor.suggest.showModules": {
                type: "boolean",
                default: !0,
                markdownDescription: D(507, null)
            },
            "editor.suggest.showProperties": {
                type: "boolean",
                default: !0,
                markdownDescription: D(508, null)
            },
            "editor.suggest.showEvents": {
                type: "boolean",
                default: !0,
                markdownDescription: D(509, null)
            },
            "editor.suggest.showOperators": {
                type: "boolean",
                default: !0,
                markdownDescription: D(510, null)
            },
            "editor.suggest.showUnits": {
                type: "boolean",
                default: !0,
                markdownDescription: D(511, null)
            },
            "editor.suggest.showValues": {
                type: "boolean",
                default: !0,
                markdownDescription: D(512, null)
            },
            "editor.suggest.showConstants": {
                type: "boolean",
                default: !0,
                markdownDescription: D(513, null)
            },
            "editor.suggest.showEnums": {
                type: "boolean",
                default: !0,
                markdownDescription: D(514, null)
            },
            "editor.suggest.showEnumMembers": {
                type: "boolean",
                default: !0,
                markdownDescription: D(515, null)
            },
            "editor.suggest.showKeywords": {
                type: "boolean",
                default: !0,
                markdownDescription: D(516, null)
            },
            "editor.suggest.showWords": {
                type: "boolean",
                default: !0,
                markdownDescription: D(517, null)
            },
            "editor.suggest.showColors": {
                type: "boolean",
                default: !0,
                markdownDescription: D(518, null)
            },
            "editor.suggest.showFiles": {
                type: "boolean",
                default: !0,
                markdownDescription: D(519, null)
            },
            "editor.suggest.showReferences": {
                type: "boolean",
                default: !0,
                markdownDescription: D(520, null)
            },
            "editor.suggest.showCustomcolors": {
                type: "boolean",
                default: !0,
                markdownDescription: D(521, null)
            },
            "editor.suggest.showFolders": {
                type: "boolean",
                default: !0,
                markdownDescription: D(522, null)
            },
            "editor.suggest.showTypeParameters": {
                type: "boolean",
                default: !0,
                markdownDescription: D(523, null)
            },
            "editor.suggest.showSnippets": {
                type: "boolean",
                default: !0,
                markdownDescription: D(524, null)
            },
            "editor.suggest.showUsers": {
                type: "boolean",
                default: !0,
                markdownDescription: D(525, null)
            },
            "editor.suggest.showIssues": {
                type: "boolean",
                default: !0,
                markdownDescription: D(526, null)
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            insertMode: SP(e.insertMode, this.defaultValue.insertMode, [
                "insert",
                "replace"
            ]),
            filterGraceful: vp(e.filterGraceful, this.defaultValue.filterGraceful),
            snippetsPreventQuickSuggestions: vp(e.snippetsPreventQuickSuggestions, this.defaultValue.filterGraceful),
            localityBonus: vp(e.localityBonus, this.defaultValue.localityBonus),
            shareSuggestSelections: vp(e.shareSuggestSelections, this.defaultValue.shareSuggestSelections),
            selectionMode: SP(e.selectionMode, this.defaultValue.selectionMode, [
                "always",
                "never",
                "whenQuickSuggestion",
                "whenTriggerCharacter"
            ]),
            showIcons: vp(e.showIcons, this.defaultValue.showIcons),
            showStatusBar: vp(e.showStatusBar, this.defaultValue.showStatusBar),
            preview: vp(e.preview, this.defaultValue.preview),
            previewMode: SP(e.previewMode, this.defaultValue.previewMode, [
                "prefix",
                "subword",
                "subwordSmart"
            ]),
            showInlineDetails: vp(e.showInlineDetails, this.defaultValue.showInlineDetails),
            showMethods: vp(e.showMethods, this.defaultValue.showMethods),
            showFunctions: vp(e.showFunctions, this.defaultValue.showFunctions),
            showConstructors: vp(e.showConstructors, this.defaultValue.showConstructors),
            showDeprecated: vp(e.showDeprecated, this.defaultValue.showDeprecated),
            matchOnWordStartOnly: vp(e.matchOnWordStartOnly, this.defaultValue.matchOnWordStartOnly),
            showFields: vp(e.showFields, this.defaultValue.showFields),
            showVariables: vp(e.showVariables, this.defaultValue.showVariables),
            showClasses: vp(e.showClasses, this.defaultValue.showClasses),
            showStructs: vp(e.showStructs, this.defaultValue.showStructs),
            showInterfaces: vp(e.showInterfaces, this.defaultValue.showInterfaces),
            showModules: vp(e.showModules, this.defaultValue.showModules),
            showProperties: vp(e.showProperties, this.defaultValue.showProperties),
            showEvents: vp(e.showEvents, this.defaultValue.showEvents),
            showOperators: vp(e.showOperators, this.defaultValue.showOperators),
            showUnits: vp(e.showUnits, this.defaultValue.showUnits),
            showValues: vp(e.showValues, this.defaultValue.showValues),
            showConstants: vp(e.showConstants, this.defaultValue.showConstants),
            showEnums: vp(e.showEnums, this.defaultValue.showEnums),
            showEnumMembers: vp(e.showEnumMembers, this.defaultValue.showEnumMembers),
            showKeywords: vp(e.showKeywords, this.defaultValue.showKeywords),
            showWords: vp(e.showWords, this.defaultValue.showWords),
            showColors: vp(e.showColors, this.defaultValue.showColors),
            showFiles: vp(e.showFiles, this.defaultValue.showFiles),
            showReferences: vp(e.showReferences, this.defaultValue.showReferences),
            showFolders: vp(e.showFolders, this.defaultValue.showFolders),
            showTypeParameters: vp(e.showTypeParameters, this.defaultValue.showTypeParameters),
            showSnippets: vp(e.showSnippets, this.defaultValue.showSnippets),
            showUsers: vp(e.showUsers, this.defaultValue.showUsers),
            showIssues: vp(e.showIssues, this.defaultValue.showIssues)
        };
    }
}, j9d = class extends r2 {
    constructor(){
        super(118, "smartSelect", {
            selectLeadingAndTrailingWhitespace: !0,
            selectSubwords: !0
        }, {
            "editor.smartSelect.selectLeadingAndTrailingWhitespace": {
                description: D(527, null),
                default: !0,
                type: "boolean"
            },
            "editor.smartSelect.selectSubwords": {
                description: D(528, null),
                default: !0,
                type: "boolean"
            }
        });
    }
    validate(t) {
        return !t || typeof t != "object" ? this.defaultValue : {
            selectLeadingAndTrailingWhitespace: vp(t.selectLeadingAndTrailingWhitespace, this.defaultValue.selectLeadingAndTrailingWhitespace),
            selectSubwords: vp(t.selectSubwords, this.defaultValue.selectSubwords)
        };
    }
}, $9d = class extends r2 {
    constructor(){
        const t = [];
        super(135, "wordSegmenterLocales", t, {
            anyOf: [
                {
                    description: D(529, null),
                    type: "string"
                },
                {
                    description: D(530, null),
                    type: "array",
                    items: {
                        type: "string"
                    }
                }
            ]
        });
    }
    validate(t) {
        if (typeof t == "string" && (t = [
            t
        ]), Array.isArray(t)) {
            const e = [];
            for (const n of t)if (typeof n == "string") try {
                Intl.Segmenter.supportedLocalesOf(n).length > 0 && e.push(n);
            } catch  {}
            return e;
        }
        return this.defaultValue;
    }
}, H9d = class extends r2 {
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
                    D(531, null),
                    D(532, null),
                    D(533, null),
                    D(534, null)
                ],
                description: D(535, null),
                default: "same"
            }
        });
    }
    validate(t) {
        switch(t){
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
    compute(t, e, n) {
        return e.get(2) === 2 ? 0 : n;
    }
}, W9d = class extends Vbt {
    constructor(){
        super(152);
    }
    compute(t, e, n) {
        const i = e.get(151);
        return {
            isDominatedByLongLines: t.isDominatedByLongLines,
            isWordWrapMinified: i.isWordWrapMinified,
            isViewportWrapping: i.isViewportWrapping,
            wrappingColumn: i.wrappingColumn
        };
    }
}, G9d = class extends r2 {
    constructor(){
        const t = {
            enabled: !0,
            showDropSelector: "afterDrop"
        };
        super(36, "dropIntoEditor", t, {
            "editor.dropIntoEditor.enabled": {
                type: "boolean",
                default: t.enabled,
                markdownDescription: D(536, null)
            },
            "editor.dropIntoEditor.showDropSelector": {
                type: "string",
                markdownDescription: D(537, null),
                enum: [
                    "afterDrop",
                    "never"
                ],
                enumDescriptions: [
                    D(538, null),
                    D(539, null)
                ],
                default: "afterDrop"
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            enabled: vp(e.enabled, this.defaultValue.enabled),
            showDropSelector: SP(e.showDropSelector, this.defaultValue.showDropSelector, [
                "afterDrop",
                "never"
            ])
        };
    }
}, q9d = class extends r2 {
    constructor(){
        const t = {
            enabled: !1,
            showPasteSelector: "afterPaste"
        };
        super(89, "pasteAs", t, {
            "editor.pasteAs.enabled": {
                type: "boolean",
                default: t.enabled,
                markdownDescription: D(540, null)
            },
            "editor.pasteAs.showPasteSelector": {
                type: "string",
                markdownDescription: D(541, null),
                enum: [
                    "afterPaste",
                    "never"
                ],
                enumDescriptions: [
                    D(542, null),
                    D(543, null)
                ],
                default: "afterPaste"
            }
        });
    }
    validate(t) {
        if (!t || typeof t != "object") return this.defaultValue;
        const e = t;
        return {
            enabled: vp(e.enabled, this.defaultValue.enabled),
            showPasteSelector: SP(e.showPasteSelector, this.defaultValue.showPasteSelector, [
                "afterPaste",
                "never"
            ])
        };
    }
}, z9d = "Consolas, 'Courier New', monospace", V9d = "Menlo, Monaco, 'Courier New', monospace", K9d = "'Droid Sans Mono', 'monospace', monospace", q3 = {
    fontFamily: _r ? V9d : a_ ? K9d : z9d,
    fontWeight: "normal",
    fontSize: _r ? 12 : 14,
    lineHeight: 0,
    letterSpacing: 0
}, Kbt = [], Kve = {
    acceptSuggestionOnCommitCharacter: Yl(new RS(0, "acceptSuggestionOnCommitCharacter", !0, {
        markdownDescription: D(544, null)
    })),
    acceptSuggestionOnEnter: Yl(new kP(1, "acceptSuggestionOnEnter", "on", [
        "on",
        "smart",
        "off"
    ], {
        markdownEnumDescriptions: [
            "",
            D(545, null),
            ""
        ],
        markdownDescription: D(546, null)
    })),
    accessibilitySupport: Yl(new a9d),
    accessibilityPageSize: Yl(new FI(3, "accessibilityPageSize", 500, 1, eI.MAX_SAFE_SMALL_INTEGER, {
        description: D(547, null),
        tags: [
            "accessibility"
        ]
    })),
    ariaLabel: Yl(new uoe(4, "ariaLabel", D(548, null))),
    ariaRequired: Yl(new RS(5, "ariaRequired", !1, void 0)),
    screenReaderAnnounceInlineSuggestion: Yl(new RS(8, "screenReaderAnnounceInlineSuggestion", !0, {
        description: D(549, null),
        tags: [
            "accessibility"
        ]
    })),
    autoClosingBrackets: Yl(new kP(6, "autoClosingBrackets", "languageDefined", [
        "always",
        "languageDefined",
        "beforeWhitespace",
        "never"
    ], {
        enumDescriptions: [
            "",
            D(550, null),
            D(551, null),
            ""
        ],
        description: D(552, null)
    })),
    autoClosingComments: Yl(new kP(7, "autoClosingComments", "languageDefined", [
        "always",
        "languageDefined",
        "beforeWhitespace",
        "never"
    ], {
        enumDescriptions: [
            "",
            D(553, null),
            D(554, null),
            ""
        ],
        description: D(555, null)
    })),
    autoClosingDelete: Yl(new kP(9, "autoClosingDelete", "auto", [
        "always",
        "auto",
        "never"
    ], {
        enumDescriptions: [
            "",
            D(556, null),
            ""
        ],
        description: D(557, null)
    })),
    autoClosingOvertype: Yl(new kP(10, "autoClosingOvertype", "auto", [
        "always",
        "auto",
        "never"
    ], {
        enumDescriptions: [
            "",
            D(558, null),
            ""
        ],
        description: D(559, null)
    })),
    autoClosingQuotes: Yl(new kP(11, "autoClosingQuotes", "languageDefined", [
        "always",
        "languageDefined",
        "beforeWhitespace",
        "never"
    ], {
        enumDescriptions: [
            "",
            D(560, null),
            D(561, null),
            ""
        ],
        description: D(562, null)
    })),
    autoIndent: Yl(new Ygn(12, "autoIndent", 4, "full", [
        "none",
        "keep",
        "brackets",
        "advanced",
        "full"
    ], b2y, {
        enumDescriptions: [
            D(563, null),
            D(564, null),
            D(565, null),
            D(566, null),
            D(567, null)
        ],
        description: D(568, null)
    })),
    automaticLayout: Yl(new RS(13, "automaticLayout", !1)),
    autoSurround: Yl(new kP(14, "autoSurround", "languageDefined", [
        "languageDefined",
        "quotes",
        "brackets",
        "never"
    ], {
        enumDescriptions: [
            D(569, null),
            D(570, null),
            D(571, null),
            ""
        ],
        description: D(572, null)
    })),
    bracketPairColorization: Yl(new F9d),
    bracketPairGuides: Yl(new B9d),
    stickyTabStops: Yl(new RS(121, "stickyTabStops", !1, {
        description: D(573, null)
    })),
    codeLens: Yl(new RS(17, "codeLens", !0, {
        description: D(574, null)
    })),
    codeLensFontFamily: Yl(new uoe(18, "codeLensFontFamily", "", {
        description: D(575, null)
    })),
    codeLensFontSize: Yl(new FI(19, "codeLensFontSize", 0, 0, 100, {
        type: "number",
        default: 0,
        minimum: 0,
        maximum: 100,
        markdownDescription: D(576, null)
    })),
    colorDecorators: Yl(new RS(20, "colorDecorators", !0, {
        description: D(577, null)
    })),
    colorDecoratorActivatedOn: Yl(new kP(154, "colorDecoratorsActivatedOn", "clickAndHover", [
        "clickAndHover",
        "hover",
        "click"
    ], {
        enumDescriptions: [
            D(578, null),
            D(579, null),
            D(580, null)
        ],
        description: D(581, null)
    })),
    colorDecoratorsLimit: Yl(new FI(21, "colorDecoratorsLimit", 500, 1, 1e6, {
        markdownDescription: D(582, null)
    })),
    columnSelection: Yl(new RS(22, "columnSelection", !1, {
        description: D(583, null)
    })),
    comments: Yl(new l9d),
    contextmenu: Yl(new RS(24, "contextmenu", !0)),
    copyWithSyntaxHighlighting: Yl(new RS(25, "copyWithSyntaxHighlighting", !0, {
        description: D(584, null)
    })),
    cursorBlinking: Yl(new Ygn(26, "cursorBlinking", 1, "blink", [
        "blink",
        "smooth",
        "phase",
        "expand",
        "solid",
        "hidden"
    ], y2y, {
        description: D(585, null)
    })),
    cursorSmoothCaretAnimation: Yl(new kP(27, "cursorSmoothCaretAnimation", "off", [
        "off",
        "explicit",
        "on"
    ], {
        enumDescriptions: [
            D(586, null),
            D(587, null),
            D(588, null)
        ],
        description: D(589, null)
    })),
    cursorStyle: Yl(new Ygn(28, "cursorStyle", 1, "line", [
        "line",
        "block",
        "underline",
        "line-thin",
        "block-outline",
        "underline-thin"
    ], r9d, {
        description: D(590, null)
    })),
    overtypeCursorStyle: Yl(new Ygn(84, "overtypeCursorStyle", 2, "block", [
        "line",
        "block",
        "underline",
        "line-thin",
        "block-outline",
        "underline-thin"
    ], r9d, {
        description: D(591, null)
    })),
    cursorSurroundingLines: Yl(new FI(29, "cursorSurroundingLines", 0, 0, eI.MAX_SAFE_SMALL_INTEGER, {
        description: D(592, null)
    })),
    cursorSurroundingLinesStyle: Yl(new kP(30, "cursorSurroundingLinesStyle", "default", [
        "default",
        "all"
    ], {
        enumDescriptions: [
            D(593, null),
            D(594, null)
        ],
        markdownDescription: D(595, null)
    })),
    cursorWidth: Yl(new FI(31, "cursorWidth", 0, 0, eI.MAX_SAFE_SMALL_INTEGER, {
        markdownDescription: D(596, null)
    })),
    disableLayerHinting: Yl(new RS(32, "disableLayerHinting", !1)),
    disableMonospaceOptimizations: Yl(new RS(33, "disableMonospaceOptimizations", !1)),
    domReadOnly: Yl(new RS(34, "domReadOnly", !1)),
    dragAndDrop: Yl(new RS(35, "dragAndDrop", !0, {
        description: D(597, null)
    })),
    emptySelectionClipboard: Yl(new u9d),
    dropIntoEditor: Yl(new G9d),
    experimentalEditContextEnabled: Yl(new RS(37, "experimentalEditContextEnabled", IC.quality !== "stable", {
        description: D(598, null),
        included: smr || yCo || I0
    })),
    stickyScroll: Yl(new S9d),
    experimentalGpuAcceleration: Yl(new kP(39, "experimentalGpuAcceleration", "off", [
        "off",
        "on"
    ], {
        tags: [
            "experimental"
        ],
        enumDescriptions: [
            D(599, null),
            D(600, null)
        ],
        description: D(601, null)
    })),
    experimentalWhitespaceRendering: Yl(new kP(40, "experimentalWhitespaceRendering", "svg", [
        "svg",
        "font",
        "off"
    ], {
        enumDescriptions: [
            D(602, null),
            D(603, null),
            D(604, null)
        ],
        description: D(605, null)
    })),
    extraEditorClassName: Yl(new uoe(41, "extraEditorClassName", "")),
    fastScrollSensitivity: Yl(new dwe(42, "fastScrollSensitivity", 5, (t)=>t <= 0 ? 5 : t, {
        markdownDescription: D(606, null)
    })),
    find: Yl(new d9d),
    fixedOverflowWidgets: Yl(new RS(44, "fixedOverflowWidgets", !1)),
    folding: Yl(new RS(45, "folding", !0, {
        description: D(607, null)
    })),
    foldingStrategy: Yl(new kP(46, "foldingStrategy", "auto", [
        "auto",
        "indentation"
    ], {
        enumDescriptions: [
            D(608, null),
            D(609, null)
        ],
        description: D(610, null)
    })),
    foldingHighlight: Yl(new RS(47, "foldingHighlight", !0, {
        description: D(611, null)
    })),
    foldingImportsByDefault: Yl(new RS(48, "foldingImportsByDefault", !1, {
        description: D(612, null)
    })),
    foldingMaximumRegions: Yl(new FI(49, "foldingMaximumRegions", 5e3, 10, 65e3, {
        description: D(613, null)
    })),
    unfoldOnClickAfterEndOfLine: Yl(new RS(50, "unfoldOnClickAfterEndOfLine", !1, {
        description: D(614, null)
    })),
    fontFamily: Yl(new uoe(51, "fontFamily", q3.fontFamily, {
        description: D(615, null)
    })),
    fontInfo: Yl(new h9d),
    fontLigatures2: Yl(new Ltt),
    fontSize: Yl(new g9d),
    fontWeight: Yl(new f9d),
    fontVariations: Yl(new e0r),
    formatOnPaste: Yl(new RS(57, "formatOnPaste", !1, {
        description: D(616, null)
    })),
    formatOnType: Yl(new RS(58, "formatOnType", !1, {
        description: D(617, null)
    })),
    glyphMargin: Yl(new RS(59, "glyphMargin", !0, {
        description: D(618, null)
    })),
    gotoLocation: Yl(new v9d),
    hideCursorInOverviewRuler: Yl(new RS(61, "hideCursorInOverviewRuler", !1, {
        description: D(619, null)
    })),
    hover: Yl(new _9d),
    inDiffEditor: Yl(new RS(63, "inDiffEditor", !1)),
    letterSpacing: Yl(new dwe(65, "letterSpacing", q3.letterSpacing, (t)=>dwe.clamp(t, -5, 20), {
        description: D(620, null)
    })),
    lightbulb: Yl(new y9d),
    lineDecorationsWidth: Yl(new w9d),
    lineHeight: Yl(new C9d),
    lineNumbers: Yl(new P9d),
    lineNumbersMinChars: Yl(new FI(70, "lineNumbersMinChars", 5, 1, 300)),
    linkedEditing: Yl(new RS(71, "linkedEditing", !1, {
        description: D(621, null)
    })),
    links: Yl(new RS(72, "links", !0, {
        description: D(622, null)
    })),
    matchBrackets: Yl(new kP(73, "matchBrackets", "always", [
        "always",
        "near",
        "never"
    ], {
        description: D(623, null)
    })),
    minimap: Yl(new T9d),
    mouseStyle: Yl(new kP(75, "mouseStyle", "text", [
        "text",
        "default",
        "copy"
    ])),
    mouseWheelScrollSensitivity: Yl(new dwe(76, "mouseWheelScrollSensitivity", 1, (t)=>t === 0 ? 1 : t, {
        markdownDescription: D(624, null)
    })),
    mouseWheelZoom: Yl(new RS(77, "mouseWheelZoom", !1, {
        markdownDescription: D(_r ? 625 : 626, null)
    })),
    multiCursorMergeOverlapping: Yl(new RS(78, "multiCursorMergeOverlapping", !0, {
        description: D(627, null)
    })),
    multiCursorModifier: Yl(new Ygn(79, "multiCursorModifier", "altKey", "alt", [
        "ctrlCmd",
        "alt"
    ], k2y, {
        markdownEnumDescriptions: [
            D(628, null),
            D(629, null)
        ],
        markdownDescription: D(630, null)
    })),
    multiCursorPaste: Yl(new kP(80, "multiCursorPaste", "spread", [
        "spread",
        "full"
    ], {
        markdownEnumDescriptions: [
            D(631, null),
            D(632, null)
        ],
        markdownDescription: D(633, null)
    })),
    multiCursorLimit: Yl(new FI(81, "multiCursorLimit", 1e4, 1, 1e5, {
        markdownDescription: D(634, null)
    })),
    occurrencesHighlight: Yl(new kP(82, "occurrencesHighlight", "singleFile", [
        "off",
        "singleFile",
        "multiFile"
    ], {
        markdownEnumDescriptions: [
            D(635, null),
            D(636, null),
            D(637, null)
        ],
        markdownDescription: D(638, null)
    })),
    occurrencesHighlightDelay: Yl(new FI(83, "occurrencesHighlightDelay", 0, 0, 2e3, {
        description: D(639, null),
        tags: [
            "preview"
        ]
    })),
    overtypeOnPaste: Yl(new RS(85, "overtypeOnPaste", !0, {
        description: D(640, null)
    })),
    overviewRulerBorder: Yl(new RS(86, "overviewRulerBorder", !0, {
        description: D(641, null)
    })),
    overviewRulerLanes: Yl(new FI(87, "overviewRulerLanes", 3, 0, 3)),
    padding: Yl(new E9d),
    pasteAs: Yl(new q9d),
    parameterHints: Yl(new I9d),
    peekWidgetDefaultFocus: Yl(new kP(91, "peekWidgetDefaultFocus", "tree", [
        "tree",
        "editor"
    ], {
        enumDescriptions: [
            D(642, null),
            D(643, null)
        ],
        description: D(644, null)
    })),
    placeholder: Yl(new A9d),
    definitionLinkOpensInPeek: Yl(new RS(93, "definitionLinkOpensInPeek", !1, {
        description: D(645, null)
    })),
    quickSuggestions: Yl(new R9d),
    quickSuggestionsDelay: Yl(new FI(95, "quickSuggestionsDelay", 10, 0, eI.MAX_SAFE_SMALL_INTEGER, {
        description: D(646, null)
    })),
    readOnly: Yl(new RS(96, "readOnly", !1)),
    readOnlyMessage: Yl(new D9d),
    renameOnType: Yl(new RS(98, "renameOnType", !1, {
        description: D(647, null),
        markdownDeprecationMessage: D(648, null)
    })),
    renderControlCharacters: Yl(new RS(99, "renderControlCharacters", !0, {
        description: D(649, null),
        restricted: !0
    })),
    renderFinalNewline: Yl(new kP(100, "renderFinalNewline", a_ ? "dimmed" : "on", [
        "off",
        "on",
        "dimmed"
    ], {
        description: D(650, null)
    })),
    renderLineHighlight: Yl(new kP(101, "renderLineHighlight", "line", [
        "none",
        "gutter",
        "line",
        "all"
    ], {
        enumDescriptions: [
            "",
            "",
            "",
            D(651, null)
        ],
        description: D(652, null)
    })),
    renderLineHighlightOnlyWhenFocus: Yl(new RS(102, "renderLineHighlightOnlyWhenFocus", !1, {
        description: D(653, null)
    })),
    renderValidationDecorations: Yl(new kP(103, "renderValidationDecorations", "editable", [
        "editable",
        "on",
        "off"
    ])),
    renderWhitespace: Yl(new kP(104, "renderWhitespace", "selection", [
        "none",
        "boundary",
        "selection",
        "trailing",
        "all"
    ], {
        enumDescriptions: [
            "",
            D(654, null),
            D(655, null),
            D(656, null),
            ""
        ],
        description: D(657, null)
    })),
    revealHorizontalRightPadding: Yl(new FI(105, "revealHorizontalRightPadding", 15, 0, 1e3)),
    roundedSelection: Yl(new RS(106, "roundedSelection", !0, {
        description: D(658, null)
    })),
    rulers: Yl(new M9d),
    scrollbar: Yl(new N9d),
    scrollBeyondLastColumn: Yl(new FI(109, "scrollBeyondLastColumn", 4, 0, eI.MAX_SAFE_SMALL_INTEGER, {
        description: D(659, null)
    })),
    scrollBeyondLastLine: Yl(new RS(110, "scrollBeyondLastLine", !0, {
        description: D(660, null)
    })),
    scrollPredominantAxis: Yl(new RS(111, "scrollPredominantAxis", !0, {
        description: D(661, null)
    })),
    selectionClipboard: Yl(new RS(112, "selectionClipboard", !0, {
        description: D(662, null),
        included: a_
    })),
    selectionHighlight: Yl(new RS(113, "selectionHighlight", !0, {
        description: D(663, null)
    })),
    selectOnLineNumbers: Yl(new RS(114, "selectOnLineNumbers", !0)),
    showFoldingControls: Yl(new kP(115, "showFoldingControls", "mouseover", [
        "always",
        "never",
        "mouseover"
    ], {
        enumDescriptions: [
            D(664, null),
            D(665, null),
            D(666, null)
        ],
        description: D(667, null)
    })),
    showUnused: Yl(new RS(116, "showUnused", !0, {
        description: D(668, null)
    })),
    showDeprecated: Yl(new RS(145, "showDeprecated", !0, {
        description: D(669, null)
    })),
    inlayHints: Yl(new k9d),
    snippetSuggestions: Yl(new kP(117, "snippetSuggestions", "inline", [
        "top",
        "bottom",
        "inline",
        "none"
    ], {
        enumDescriptions: [
            D(670, null),
            D(671, null),
            D(672, null),
            D(673, null)
        ],
        description: D(674, null)
    })),
    smartSelect: Yl(new j9d),
    smoothScrolling: Yl(new RS(119, "smoothScrolling", !1, {
        description: D(675, null)
    })),
    stopRenderingLineAfter: Yl(new FI(122, "stopRenderingLineAfter", 1e4, -1, eI.MAX_SAFE_SMALL_INTEGER)),
    suggest: Yl(new U9d),
    inlineSuggest: Yl(new O9d),
    inlineCompletionsAccessibilityVerbose: Yl(new RS(155, "inlineCompletionsAccessibilityVerbose", !1, {
        description: D(676, null)
    })),
    automaticLayoutIgnoreHeight: Yl(new RS(156, "automaticLayoutIgnoreHeight", !1)),
    suggestFontSize: Yl(new FI(124, "suggestFontSize", 0, 0, 1e3, {
        markdownDescription: D(677, null, "`0`", "`#editor.fontSize#`")
    })),
    suggestLineHeight: Yl(new FI(125, "suggestLineHeight", 0, 0, 1e3, {
        markdownDescription: D(678, null, "`0`", "`#editor.lineHeight#`")
    })),
    suggestOnTriggerCharacters: Yl(new RS(126, "suggestOnTriggerCharacters", !0, {
        description: D(679, null)
    })),
    suggestSelection: Yl(new kP(127, "suggestSelection", "first", [
        "first",
        "recentlyUsed",
        "recentlyUsedByPrefix"
    ], {
        markdownEnumDescriptions: [
            D(680, null),
            D(681, null),
            D(682, null)
        ],
        description: D(683, null)
    })),
    tabCompletion: Yl(new kP(128, "tabCompletion", "off", [
        "on",
        "off",
        "onlySnippets"
    ], {
        enumDescriptions: [
            D(684, null),
            D(685, null),
            D(686, null)
        ],
        description: D(687, null)
    })),
    tabIndex: Yl(new FI(129, "tabIndex", 0, -1, eI.MAX_SAFE_SMALL_INTEGER)),
    unicodeHighlight: Yl(new L9d),
    unusualLineTerminators: Yl(new kP(131, "unusualLineTerminators", "prompt", [
        "auto",
        "off",
        "prompt"
    ], {
        enumDescriptions: [
            D(688, null),
            D(689, null),
            D(690, null)
        ],
        description: D(691, null)
    })),
    useShadowDOM: Yl(new RS(132, "useShadowDOM", !0)),
    useTabStops: Yl(new RS(133, "useTabStops", !0, {
        description: D(692, null)
    })),
    wordBreak: Yl(new kP(134, "wordBreak", "normal", [
        "normal",
        "keepAll"
    ], {
        markdownEnumDescriptions: [
            D(693, null),
            D(694, null)
        ],
        description: D(695, null)
    })),
    wordSegmenterLocales: Yl(new $9d),
    wordSeparators: Yl(new uoe(136, "wordSeparators", qii, {
        description: D(696, null)
    })),
    wordWrap: Yl(new kP(137, "wordWrap", "off", [
        "off",
        "on",
        "wordWrapColumn",
        "bounded"
    ], {
        markdownEnumDescriptions: [
            D(697, null),
            D(698, null),
            D(699, null),
            D(700, null)
        ],
        description: D(701, null)
    })),
    wordWrapBreakAfterCharacters: Yl(new uoe(138, "wordWrapBreakAfterCharacters", " 	})]?|/&.,;\xA2\xB0\u2032\u2033\u2030\u2103\u3001\u3002\uFF61\uFF64\uFFE0\uFF0C\uFF0E\uFF1A\uFF1B\uFF1F\uFF01\uFF05\u30FB\uFF65\u309D\u309E\u30FD\u30FE\u30FC\u30A1\u30A3\u30A5\u30A7\u30A9\u30C3\u30E3\u30E5\u30E7\u30EE\u30F5\u30F6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308E\u3095\u3096\u31F0\u31F1\u31F2\u31F3\u31F4\u31F5\u31F6\u31F7\u31F8\u31F9\u31FA\u31FB\u31FC\u31FD\u31FE\u31FF\u3005\u303B\uFF67\uFF68\uFF69\uFF6A\uFF6B\uFF6C\uFF6D\uFF6E\uFF6F\uFF70\u201D\u3009\u300B\u300D\u300F\u3011\u3015\uFF09\uFF3D\uFF5D\uFF63")),
    wordWrapBreakBeforeCharacters: Yl(new uoe(139, "wordWrapBreakBeforeCharacters", "([{\u2018\u201C\u3008\u300A\u300C\u300E\u3010\u3014\uFF08\uFF3B\uFF5B\uFF62\xA3\xA5\uFF04\uFFE1\uFFE5+\uFF0B")),
    wordWrapColumn: Yl(new FI(140, "wordWrapColumn", 80, 1, eI.MAX_SAFE_SMALL_INTEGER, {
        markdownDescription: D(702, null)
    })),
    wordWrapOverride1: Yl(new kP(141, "wordWrapOverride1", "inherit", [
        "off",
        "on",
        "inherit"
    ])),
    wordWrapOverride2: Yl(new kP(142, "wordWrapOverride2", "inherit", [
        "off",
        "on",
        "inherit"
    ])),
    effectiveCursorStyle: Yl(new p9d),
    editorClassName: Yl(new c9d),
    defaultColorDecorators: Yl(new kP(153, "defaultColorDecorators", "auto", [
        "auto",
        "always",
        "never"
    ], {
        enumDescriptions: [
            D(703, null),
            D(704, null),
            D(705, null)
        ],
        description: D(706, null)
    })),
    pixelRatio: Yl(new x9d),
    tabFocusMode: Yl(new RS(150, "tabFocusMode", !1, {
        markdownDescription: D(707, null)
    })),
    layoutInfo: Yl(new ujo),
    wrappingInfo: Yl(new W9d),
    wrappingIndent: Yl(new H9d),
    wrappingStrategy: Yl(new b9d),
    effectiveExperimentalEditContextEnabled: Yl(new m9d),
    commentOnLineNumbers: Yl(new RS(158, "commentOnLineNumbers", !1, {
        description: D(708, null)
    }))
};

}
