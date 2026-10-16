import { D } from "./Iwo.js";
import { gs, yt } from "./codicons.js";
import { Oj } from "./editOperation.js";
import { Bt } from "./nls.js";
import { Qs, qt } from "./range.js";
import { bPy, r$o } from "./tokenizationRegistry.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var C0r, w7, X_, afn, zri, Vri, Kri, cyt, qAe, B8d, lfn, Yri, aHe, cfn, oL, s$o, T0r, lHe, uyt, goe, o$o, Xri, E0r, I0r, a$o, BI, Htt, nBt, l$o;
export { B8d, BI, C0r, E0r, Htt, I0r, Kri, T0r, Vri, X_, Xri, Yri, a$o, aHe, afn, cfn, cyt, goe, l$o, lHe, lfn, nBt, o$o, oL, qAe, s$o, uyt, w7, zri };
var __wakaru_Iy_initialized = false;
export function Iy() {
if (__wakaru_Iy_initialized) return;
__wakaru_Iy_initialized = true;
"use strict";
E(), gs(), fn(), Oj(), Qs(), bPy(), Bt(), C0r = class {
    constructor(t, e){
        this.tokens = t, this.endState = e, this._encodedTokenizationResultBrand = void 0;
    }
}, w7 = ((t)=>(t[t.Increase = 0] = "Increase", t[t.Decrease = 1] = "Decrease", t))(w7 || {}), X_ = ((t)=>(t[t.Method = 0] = "Method", t[t.Function = 1] = "Function", t[t.Constructor = 2] = "Constructor", t[t.Field = 3] = "Field", t[t.Variable = 4] = "Variable", t[t.Class = 5] = "Class", t[t.Struct = 6] = "Struct", t[t.Interface = 7] = "Interface", t[t.Module = 8] = "Module", t[t.Property = 9] = "Property", t[t.Event = 10] = "Event", t[t.Operator = 11] = "Operator", t[t.Unit = 12] = "Unit", t[t.Value = 13] = "Value", t[t.Constant = 14] = "Constant", t[t.Enum = 15] = "Enum", t[t.EnumMember = 16] = "EnumMember", t[t.Keyword = 17] = "Keyword", t[t.Text = 18] = "Text", t[t.Color = 19] = "Color", t[t.File = 20] = "File", t[t.Reference = 21] = "Reference", t[t.Customcolor = 22] = "Customcolor", t[t.Folder = 23] = "Folder", t[t.TypeParameter = 24] = "TypeParameter", t[t.User = 25] = "User", t[t.Issue = 26] = "Issue", t[t.Snippet = 27] = "Snippet", t))(X_ || {}), ((t)=>{
    const e = new Map;
    e.set(0, yt.symbolMethod), e.set(1, yt.symbolFunction), e.set(2, yt.symbolConstructor), e.set(3, yt.symbolField), e.set(4, yt.symbolVariable), e.set(5, yt.symbolClass), e.set(6, yt.symbolStruct), e.set(7, yt.symbolInterface), e.set(8, yt.symbolModule), e.set(9, yt.symbolProperty), e.set(10, yt.symbolEvent), e.set(11, yt.symbolOperator), e.set(12, yt.symbolUnit), e.set(13, yt.symbolValue), e.set(15, yt.symbolEnum), e.set(14, yt.symbolConstant), e.set(15, yt.symbolEnum), e.set(16, yt.symbolEnumMember), e.set(17, yt.symbolKeyword), e.set(27, yt.symbolSnippet), e.set(18, yt.symbolText), e.set(19, yt.symbolColor), e.set(20, yt.symbolFile), e.set(21, yt.symbolReference), e.set(22, yt.symbolCustomColor), e.set(23, yt.symbolFolder), e.set(24, yt.symbolTypeParameter), e.set(25, yt.account), e.set(26, yt.issues);
    function n(o) {
        let a = e.get(o);
        return a || (console.info("No codicon found for CompletionItemKind " + o), a = yt.symbolProperty), a;
    }
    t.toIcon = n;
    function i(o) {
        switch(o){
            case 0:
                return D(828, null);
            case 1:
                return D(829, null);
            case 2:
                return D(830, null);
            case 3:
                return D(831, null);
            case 4:
                return D(832, null);
            case 5:
                return D(833, null);
            case 6:
                return D(834, null);
            case 7:
                return D(835, null);
            case 8:
                return D(836, null);
            case 9:
                return D(837, null);
            case 10:
                return D(838, null);
            case 11:
                return D(839, null);
            case 12:
                return D(840, null);
            case 13:
                return D(841, null);
            case 14:
                return D(842, null);
            case 15:
                return D(843, null);
            case 16:
                return D(844, null);
            case 17:
                return D(845, null);
            case 18:
                return D(846, null);
            case 19:
                return D(847, null);
            case 20:
                return D(848, null);
            case 21:
                return D(849, null);
            case 22:
                return D(850, null);
            case 23:
                return D(851, null);
            case 24:
                return D(852, null);
            case 25:
                return D(853, null);
            case 26:
                return D(854, null);
            case 27:
                return D(855, null);
            default:
                return "";
        }
    }
    t.toLabel = i;
    const r = new Map;
    r.set("method", 0), r.set("function", 1), r.set("constructor", 2), r.set("field", 3), r.set("variable", 4), r.set("class", 5), r.set("struct", 6), r.set("interface", 7), r.set("module", 8), r.set("property", 9), r.set("event", 10), r.set("operator", 11), r.set("unit", 12), r.set("value", 13), r.set("constant", 14), r.set("enum", 15), r.set("enum-member", 16), r.set("enumMember", 16), r.set("keyword", 17), r.set("snippet", 27), r.set("text", 18), r.set("color", 19), r.set("file", 20), r.set("reference", 21), r.set("customcolor", 22), r.set("folder", 23), r.set("type-parameter", 24), r.set("typeParameter", 24), r.set("account", 25), r.set("issue", 26);
    function s(o, a) {
        let l = r.get(o);
        return typeof l > "u" && !a && (l = 9), l;
    }
    t.fromString = s;
})(afn || (afn = {})), zri = ((t)=>(t[t.Deprecated = 1] = "Deprecated", t))(zri || {}), Vri = ((t)=>(t[t.None = 0] = "None", t[t.KeepWhitespace = 1] = "KeepWhitespace", t[t.InsertAsSnippet = 4] = "InsertAsSnippet", t))(Vri || {}), Kri = ((t)=>(t[t.Word = 0] = "Word", t[t.Line = 1] = "Line", t[t.Suggest = 2] = "Suggest", t))(Kri || {}), cyt = ((t)=>(t[t.Invoke = 0] = "Invoke", t[t.TriggerCharacter = 1] = "TriggerCharacter", t[t.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions", t))(cyt || {}), qAe = ((t)=>(t[t.Automatic = 0] = "Automatic", t[t.Explicit = 1] = "Explicit", t))(qAe || {}), B8d = class {
    constructor(t, e, n, i){
        this.range = t, this.text = e, this.completionKind = n, this.isSnippetText = i;
    }
    equals(t) {
        return qt.lift(this.range).equalsRange(t.range) && this.text === t.text && this.completionKind === t.completionKind && this.isSnippetText === t.isSnippetText;
    }
}, lfn = ((t)=>(t[t.Invoke = 1] = "Invoke", t[t.Auto = 2] = "Auto", t))(lfn || {}), Yri = ((t)=>(t[t.Automatic = 0] = "Automatic", t[t.PasteAs = 1] = "PasteAs", t))(Yri || {}), aHe = ((t)=>(t[t.Invoke = 1] = "Invoke", t[t.TriggerCharacter = 2] = "TriggerCharacter", t[t.ContentChange = 3] = "ContentChange", t))(aHe || {}), cfn = ((t)=>(t[t.Text = 0] = "Text", t[t.Read = 1] = "Read", t[t.Write = 2] = "Write", t))(cfn || {}), oL = ((t)=>(t[t.File = 0] = "File", t[t.Module = 1] = "Module", t[t.Namespace = 2] = "Namespace", t[t.Package = 3] = "Package", t[t.Class = 4] = "Class", t[t.Method = 5] = "Method", t[t.Property = 6] = "Property", t[t.Field = 7] = "Field", t[t.Constructor = 8] = "Constructor", t[t.Enum = 9] = "Enum", t[t.Interface = 10] = "Interface", t[t.Function = 11] = "Function", t[t.Variable = 12] = "Variable", t[t.Constant = 13] = "Constant", t[t.String = 14] = "String", t[t.Number = 15] = "Number", t[t.Boolean = 16] = "Boolean", t[t.Array = 17] = "Array", t[t.Object = 18] = "Object", t[t.Key = 19] = "Key", t[t.Null = 20] = "Null", t[t.EnumMember = 21] = "EnumMember", t[t.Struct = 22] = "Struct", t[t.Event = 23] = "Event", t[t.Operator = 24] = "Operator", t[t.TypeParameter = 25] = "TypeParameter", t))(oL || {}), s$o = {
    17: D(856, null),
    16: D(857, null),
    4: D(858, null),
    13: D(859, null),
    8: D(860, null),
    9: D(861, null),
    21: D(862, null),
    23: D(863, null),
    7: D(864, null),
    0: D(865, null),
    11: D(866, null),
    10: D(867, null),
    19: D(868, null),
    5: D(869, null),
    1: D(870, null),
    2: D(871, null),
    20: D(872, null),
    15: D(873, null),
    18: D(874, null),
    24: D(875, null),
    3: D(876, null),
    6: D(877, null),
    14: D(878, null),
    22: D(879, null),
    25: D(880, null),
    12: D(881, null)
}, T0r = ((t)=>(t[t.Deprecated = 1] = "Deprecated", t))(T0r || {}), ((t)=>{
    const e = new Map;
    e.set(0, yt.symbolFile), e.set(1, yt.symbolModule), e.set(2, yt.symbolNamespace), e.set(3, yt.symbolPackage), e.set(4, yt.symbolClass), e.set(5, yt.symbolMethod), e.set(6, yt.symbolProperty), e.set(7, yt.symbolField), e.set(8, yt.symbolConstructor), e.set(9, yt.symbolEnum), e.set(10, yt.symbolInterface), e.set(11, yt.symbolFunction), e.set(12, yt.symbolVariable), e.set(13, yt.symbolConstant), e.set(14, yt.symbolString), e.set(15, yt.symbolNumber), e.set(16, yt.symbolBoolean), e.set(17, yt.symbolArray), e.set(18, yt.symbolObject), e.set(19, yt.symbolKey), e.set(20, yt.symbolNull), e.set(21, yt.symbolEnumMember), e.set(22, yt.symbolStruct), e.set(23, yt.symbolEvent), e.set(24, yt.symbolOperator), e.set(25, yt.symbolTypeParameter);
    function n(s) {
        let o = e.get(s);
        return o || (console.info("No codicon found for SymbolKind " + s), o = yt.symbolProperty), o;
    }
    t.toIcon = n;
    const i = new Map;
    i.set(0, 20), i.set(1, 8), i.set(2, 8), i.set(3, 8), i.set(4, 5), i.set(5, 0), i.set(6, 9), i.set(7, 3), i.set(8, 2), i.set(9, 15), i.set(10, 7), i.set(11, 1), i.set(12, 4), i.set(13, 14), i.set(14, 18), i.set(15, 13), i.set(16, 13), i.set(17, 13), i.set(18, 13), i.set(19, 17), i.set(20, 13), i.set(21, 16), i.set(22, 6), i.set(23, 10), i.set(24, 11), i.set(25, 24);
    function r(s) {
        let o = i.get(s);
        return o === void 0 && (console.info("No completion kind found for SymbolKind " + s), o = 20), o;
    }
    t.toCompletionKind = r;
})(lHe || (lHe = {})), uyt = class CZi {
    constructor(e){
        this.value = e;
    }
    static fromValue(e) {
        switch(e){
            case "comment":
                return CZi.Comment;
            case "imports":
                return CZi.Imports;
            case "region":
                return CZi.Region;
        }
        return new CZi(e);
    }
}, uyt.Comment = new uyt("comment"), uyt.Imports = new uyt("imports"), uyt.Region = new uyt("region"), goe = uyt, o$o = ((t)=>(t[t.AIGenerated = 1] = "AIGenerated", t))(o$o || {}), Xri = ((t)=>(t[t.Invoke = 0] = "Invoke", t[t.Automatic = 1] = "Automatic", t))(Xri || {}), ((t)=>{
    function e(n) {
        return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
    }
    t.is = e;
})(E0r || (E0r = {})), I0r = ((t)=>(t[t.Type = 1] = "Type", t[t.Parameter = 2] = "Parameter", t))(I0r || {}), a$o = class {
    constructor(t){
        this.createSupport = t, this._tokenizationSupport = null;
    }
    dispose() {
        this._tokenizationSupport && this._tokenizationSupport.then((t)=>{
            t && t.dispose();
        });
    }
    get tokenizationSupport() {
        return this._tokenizationSupport || (this._tokenizationSupport = this.createSupport()), this._tokenizationSupport;
    }
}, BI = new r$o, Htt = new r$o, nBt = ((t)=>(t[t.None = 0] = "None", t[t.Option = 1] = "Option", t[t.Default = 2] = "Default", t[t.Preferred = 3] = "Preferred", t))(nBt || {}), l$o = ((t)=>(t[t.Invoke = 0] = "Invoke", t[t.Automatic = 1] = "Automatic", t))(l$o || {});

}
