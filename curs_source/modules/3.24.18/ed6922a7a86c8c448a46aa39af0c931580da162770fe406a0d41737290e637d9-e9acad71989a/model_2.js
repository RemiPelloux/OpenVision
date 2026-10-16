import { bu } from "./objects.js";
import { yh } from "./qIc.js";
import { $Be, Kgn } from "./reactiveStorageTypes2.js";
import { x } from "./tslib.es6.js";
var xE, nU, lW, yze, yvi, bpt, Svi, uOt, HBe, rFc, Ygn, sFc, oFc;
export { HBe, Svi, Ygn, bpt, lW, nU, oFc, rFc, sFc, uOt, xE, yvi, yze };
var __wakaru_Cb_initialized = false;
export function Cb() {
if (__wakaru_Cb_initialized) return;
__wakaru_Cb_initialized = true;
"use strict";
x(), bu(), Kgn(), xE = ((e)=>(e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full", e))(xE || {}), nU = ((e)=>(e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right", e))(nU || {}), lW = ((e)=>(e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None", e))(lW || {}), yze = ((e)=>(e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF", e))(yze || {}), yvi = ((e)=>(e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF", e))(yvi || {}), bpt = ((e)=>(e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF", e))(bpt || {}), Svi = class {
    constructor(e){
        this._textModelResolvedOptionsBrand = void 0, this.tabSize = Math.max(1, e.tabSize | 0), e.indentSize === "tabSize" ? (this.indentSize = this.tabSize, this._indentSizeIsTabSize = !0) : (this.indentSize = Math.max(1, e.indentSize | 0), this._indentSizeIsTabSize = !1), this.insertSpaces = !!e.insertSpaces, this.defaultEOL = e.defaultEOL | 0, this.trimAutoWhitespace = !!e.trimAutoWhitespace, this.bracketPairColorizationOptions = e.bracketPairColorizationOptions;
    }
    get originalIndentSize() {
        return this._indentSizeIsTabSize ? "tabSize" : this.indentSize;
    }
    equals(e) {
        return this.tabSize === e.tabSize && this._indentSizeIsTabSize === e._indentSizeIsTabSize && this.indentSize === e.indentSize && this.insertSpaces === e.insertSpaces && this.defaultEOL === e.defaultEOL && this.trimAutoWhitespace === e.trimAutoWhitespace && yh(this.bracketPairColorizationOptions, e.bracketPairColorizationOptions);
    }
    createChangeEvent(e) {
        return {
            tabSize: this.tabSize !== e.tabSize,
            indentSize: this.indentSize !== e.indentSize,
            insertSpaces: this.insertSpaces !== e.insertSpaces,
            trimAutoWhitespace: this.trimAutoWhitespace !== e.trimAutoWhitespace
        };
    }
}, uOt = class {
    constructor(e, t){
        this._findMatchBrand = void 0, this.range = e, this.matches = t;
    }
}, HBe = ((e)=>(e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter", e))(HBe || {}), rFc = ()=>({
        topPromptBarData: {
            selections: [],
            selectedDocs: [],
            lastGenerationUUID: void 0,
            diffIds: [],
            initText: "",
            userBubbleDelegate: new $Be,
            shown: !1
        }
    }), Ygn = class {
    constructor(e, t, n, i, r, s){
        this.identifier = e, this.range = t, this.text = n, this.forceMoveMarkers = i, this.isAutoWhitespaceEdit = r, this._isTracked = s;
    }
}, sFc = class {
    constructor(e, t, n){
        this.regex = e, this.wordSeparators = t, this.simpleSearch = n;
    }
}, oFc = class {
    constructor(e, t, n){
        this.reverseEdits = e, this.changes = t, this.trimAutoWhitespaceLineNumbers = n;
    }
};

}
