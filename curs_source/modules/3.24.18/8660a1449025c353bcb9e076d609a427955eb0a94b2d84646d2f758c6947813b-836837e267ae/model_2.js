import { cp } from "./objects.js";
import { Xbt, i0r } from "./reactiveStorageTypes2.js";
import { E } from "./tslib.es6.js";
import { Rp } from "./ze.js";
var gO, ihe, Yve, Zbt, r0r, Z9t, s0r, Qgn, Ott, DBd, Rri, NBd, LBd;
export { DBd, LBd, NBd, Ott, Qgn, Rri, Yve, Z9t, Zbt, gO, ihe, r0r, s0r };
var __wakaru_J0_initialized = false;
export function J0() {
if (__wakaru_J0_initialized) return;
__wakaru_J0_initialized = true;
"use strict";
E(), cp(), i0r(), gO = ((t)=>(t[t.Left = 1] = "Left", t[t.Center = 2] = "Center", t[t.Right = 4] = "Right", t[t.Full = 7] = "Full", t))(gO || {}), ihe = ((t)=>(t[t.Left = 1] = "Left", t[t.Center = 2] = "Center", t[t.Right = 3] = "Right", t))(ihe || {}), Yve = ((t)=>(t[t.Both = 0] = "Both", t[t.Right = 1] = "Right", t[t.Left = 2] = "Left", t[t.None = 3] = "None", t))(Yve || {}), Zbt = ((t)=>(t[t.TextDefined = 0] = "TextDefined", t[t.LF = 1] = "LF", t[t.CRLF = 2] = "CRLF", t))(Zbt || {}), r0r = ((t)=>(t[t.LF = 1] = "LF", t[t.CRLF = 2] = "CRLF", t))(r0r || {}), Z9t = ((t)=>(t[t.LF = 0] = "LF", t[t.CRLF = 1] = "CRLF", t))(Z9t || {}), s0r = class {
    constructor(t){
        this._textModelResolvedOptionsBrand = void 0, this.tabSize = Math.max(1, t.tabSize | 0), t.indentSize === "tabSize" ? (this.indentSize = this.tabSize, this._indentSizeIsTabSize = !0) : (this.indentSize = Math.max(1, t.indentSize | 0), this._indentSizeIsTabSize = !1), this.insertSpaces = !!t.insertSpaces, this.defaultEOL = t.defaultEOL | 0, this.trimAutoWhitespace = !!t.trimAutoWhitespace, this.bracketPairColorizationOptions = t.bracketPairColorizationOptions;
    }
    get originalIndentSize() {
        return this._indentSizeIsTabSize ? "tabSize" : this.indentSize;
    }
    equals(t) {
        return this.tabSize === t.tabSize && this._indentSizeIsTabSize === t._indentSizeIsTabSize && this.indentSize === t.indentSize && this.insertSpaces === t.insertSpaces && this.defaultEOL === t.defaultEOL && this.trimAutoWhitespace === t.trimAutoWhitespace && Rp(this.bracketPairColorizationOptions, t.bracketPairColorizationOptions);
    }
    createChangeEvent(t) {
        return {
            tabSize: this.tabSize !== t.tabSize,
            indentSize: this.indentSize !== t.indentSize,
            insertSpaces: this.insertSpaces !== t.insertSpaces,
            trimAutoWhitespace: this.trimAutoWhitespace !== t.trimAutoWhitespace
        };
    }
}, Qgn = class {
    constructor(t, e){
        this._findMatchBrand = void 0, this.range = t, this.matches = e;
    }
}, Ott = ((t)=>(t[t.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", t[t.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", t[t.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", t[t.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter", t))(Ott || {}), DBd = ()=>({
        topPromptBarData: {
            selections: [],
            selectedDocs: [],
            lastGenerationUUID: void 0,
            diffIds: [],
            initText: "",
            userBubbleDelegate: new Xbt,
            shown: !1
        }
    }), Rri = class {
    constructor(t, e, n, i, r, s){
        this.identifier = t, this.range = e, this.text = n, this.forceMoveMarkers = i, this.isAutoWhitespaceEdit = r, this._isTracked = s;
    }
}, NBd = class {
    constructor(t, e, n){
        this.regex = t, this.wordSeparators = e, this.simpleSearch = n;
    }
}, LBd = class {
    constructor(t, e, n){
        this.reverseEdits = t, this.changes = e, this.trimAutoWhitespaceLineNumbers = n;
    }
};

}
