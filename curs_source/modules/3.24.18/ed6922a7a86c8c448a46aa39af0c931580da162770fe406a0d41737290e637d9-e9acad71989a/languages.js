import { S } from "./HVr.js";
import { Pe, _i } from "./codicons.js";
import { hR } from "./editOperation.js";
import { rt } from "./nls.js";
import { dt, qi } from "./range.js";
import { gfg, qQr } from "./tokenizationRegistry.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
var Uvi, S3, rf, Tpt, dfn, hfn, pfn, Dze, Hge, u3c, bOt, mfn, XAe, yOt, bD, zQr, $vi, bwe, Mze, UK, KQr, gfn, Hvi, rU, dW, Wvi, SOt, Gvi, YQr, Ky, ywe, Ept, XQr;
export { $vi, Dze, Ept, Gvi, Hge, Hvi, KQr, Ky, Mze, S3, SOt, Tpt, UK, Uvi, Wvi, XAe, XQr, YQr, bD, bOt, bwe, dW, dfn, gfn, hfn, mfn, pfn, rU, rf, u3c, yOt, ywe, zQr };
var __wakaru_Wp_initialized = false;
export function Wp() {
if (__wakaru_Wp_initialized) return;
__wakaru_Wp_initialized = true;
"use strict";
x(), _i(), Qt(), hR(), qi(), gfg(), rt(), Uvi = class {
    constructor(e, t){
        this.tokens = e, this.endState = t, this._encodedTokenizationResultBrand = void 0;
    }
}, S3 = ((e)=>(e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease", e))(S3 || {}), rf = ((e)=>(e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Snippet = 27] = "Snippet", e))(rf || {}), ((e)=>{
    const t = new Map;
    t.set(0, Pe.symbolMethod), t.set(1, Pe.symbolFunction), t.set(2, Pe.symbolConstructor), t.set(3, Pe.symbolField), t.set(4, Pe.symbolVariable), t.set(5, Pe.symbolClass), t.set(6, Pe.symbolStruct), t.set(7, Pe.symbolInterface), t.set(8, Pe.symbolModule), t.set(9, Pe.symbolProperty), t.set(10, Pe.symbolEvent), t.set(11, Pe.symbolOperator), t.set(12, Pe.symbolUnit), t.set(13, Pe.symbolValue), t.set(15, Pe.symbolEnum), t.set(14, Pe.symbolConstant), t.set(15, Pe.symbolEnum), t.set(16, Pe.symbolEnumMember), t.set(17, Pe.symbolKeyword), t.set(27, Pe.symbolSnippet), t.set(18, Pe.symbolText), t.set(19, Pe.symbolColor), t.set(20, Pe.symbolFile), t.set(21, Pe.symbolReference), t.set(22, Pe.symbolCustomColor), t.set(23, Pe.symbolFolder), t.set(24, Pe.symbolTypeParameter), t.set(25, Pe.account), t.set(26, Pe.issues);
    function n(o) {
        let a = t.get(o);
        return a || (console.info("No codicon found for CompletionItemKind " + o), a = Pe.symbolProperty), a;
    }
    e.toIcon = n;
    function i(o) {
        switch(o){
            case 0:
                return S(828, null);
            case 1:
                return S(829, null);
            case 2:
                return S(830, null);
            case 3:
                return S(831, null);
            case 4:
                return S(832, null);
            case 5:
                return S(833, null);
            case 6:
                return S(834, null);
            case 7:
                return S(835, null);
            case 8:
                return S(836, null);
            case 9:
                return S(837, null);
            case 10:
                return S(838, null);
            case 11:
                return S(839, null);
            case 12:
                return S(840, null);
            case 13:
                return S(841, null);
            case 14:
                return S(842, null);
            case 15:
                return S(843, null);
            case 16:
                return S(844, null);
            case 17:
                return S(845, null);
            case 18:
                return S(846, null);
            case 19:
                return S(847, null);
            case 20:
                return S(848, null);
            case 21:
                return S(849, null);
            case 22:
                return S(850, null);
            case 23:
                return S(851, null);
            case 24:
                return S(852, null);
            case 25:
                return S(853, null);
            case 26:
                return S(854, null);
            case 27:
                return S(855, null);
            default:
                return "";
        }
    }
    e.toLabel = i;
    const r = new Map;
    r.set("method", 0), r.set("function", 1), r.set("constructor", 2), r.set("field", 3), r.set("variable", 4), r.set("class", 5), r.set("struct", 6), r.set("interface", 7), r.set("module", 8), r.set("property", 9), r.set("event", 10), r.set("operator", 11), r.set("unit", 12), r.set("value", 13), r.set("constant", 14), r.set("enum", 15), r.set("enum-member", 16), r.set("enumMember", 16), r.set("keyword", 17), r.set("snippet", 27), r.set("text", 18), r.set("color", 19), r.set("file", 20), r.set("reference", 21), r.set("customcolor", 22), r.set("folder", 23), r.set("type-parameter", 24), r.set("typeParameter", 24), r.set("account", 25), r.set("issue", 26);
    function s(o, a) {
        let c = r.get(o);
        return typeof c > "u" && !a && (c = 9), c;
    }
    e.fromString = s;
})(Tpt || (Tpt = {})), dfn = ((e)=>(e[e.Deprecated = 1] = "Deprecated", e))(dfn || {}), hfn = ((e)=>(e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet", e))(hfn || {}), pfn = ((e)=>(e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest", e))(pfn || {}), Dze = ((e)=>(e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions", e))(Dze || {}), Hge = ((e)=>(e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit", e))(Hge || {}), u3c = class {
    constructor(e, t, n, i){
        this.range = e, this.text = t, this.completionKind = n, this.isSnippetText = i;
    }
    equals(e) {
        return dt.lift(this.range).equalsRange(e.range) && this.text === e.text && this.completionKind === e.completionKind && this.isSnippetText === e.isSnippetText;
    }
}, bOt = ((e)=>(e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto", e))(bOt || {}), mfn = ((e)=>(e[e.Automatic = 0] = "Automatic", e[e.PasteAs = 1] = "PasteAs", e))(mfn || {}), XAe = ((e)=>(e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange", e))(XAe || {}), yOt = ((e)=>(e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write", e))(yOt || {}), bD = ((e)=>(e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter", e))(bD || {}), zQr = {
    17: S(856, null),
    16: S(857, null),
    4: S(858, null),
    13: S(859, null),
    8: S(860, null),
    9: S(861, null),
    21: S(862, null),
    23: S(863, null),
    7: S(864, null),
    0: S(865, null),
    11: S(866, null),
    10: S(867, null),
    19: S(868, null),
    5: S(869, null),
    1: S(870, null),
    2: S(871, null),
    20: S(872, null),
    15: S(873, null),
    18: S(874, null),
    24: S(875, null),
    3: S(876, null),
    6: S(877, null),
    14: S(878, null),
    22: S(879, null),
    25: S(880, null),
    12: S(881, null)
}, $vi = ((e)=>(e[e.Deprecated = 1] = "Deprecated", e))($vi || {}), ((e)=>{
    const t = new Map;
    t.set(0, Pe.symbolFile), t.set(1, Pe.symbolModule), t.set(2, Pe.symbolNamespace), t.set(3, Pe.symbolPackage), t.set(4, Pe.symbolClass), t.set(5, Pe.symbolMethod), t.set(6, Pe.symbolProperty), t.set(7, Pe.symbolField), t.set(8, Pe.symbolConstructor), t.set(9, Pe.symbolEnum), t.set(10, Pe.symbolInterface), t.set(11, Pe.symbolFunction), t.set(12, Pe.symbolVariable), t.set(13, Pe.symbolConstant), t.set(14, Pe.symbolString), t.set(15, Pe.symbolNumber), t.set(16, Pe.symbolBoolean), t.set(17, Pe.symbolArray), t.set(18, Pe.symbolObject), t.set(19, Pe.symbolKey), t.set(20, Pe.symbolNull), t.set(21, Pe.symbolEnumMember), t.set(22, Pe.symbolStruct), t.set(23, Pe.symbolEvent), t.set(24, Pe.symbolOperator), t.set(25, Pe.symbolTypeParameter);
    function n(s) {
        let o = t.get(s);
        return o || (console.info("No codicon found for SymbolKind " + s), o = Pe.symbolProperty), o;
    }
    e.toIcon = n;
    const i = new Map;
    i.set(0, 20), i.set(1, 8), i.set(2, 8), i.set(3, 8), i.set(4, 5), i.set(5, 0), i.set(6, 9), i.set(7, 3), i.set(8, 2), i.set(9, 15), i.set(10, 7), i.set(11, 1), i.set(12, 4), i.set(13, 14), i.set(14, 18), i.set(15, 13), i.set(16, 13), i.set(17, 13), i.set(18, 13), i.set(19, 17), i.set(20, 13), i.set(21, 16), i.set(22, 6), i.set(23, 10), i.set(24, 11), i.set(25, 24);
    function r(s) {
        let o = i.get(s);
        return o === void 0 && (console.info("No completion kind found for SymbolKind " + s), o = 20), o;
    }
    e.toCompletionKind = r;
})(bwe || (bwe = {})), Mze = class HXn {
    constructor(t){
        this.value = t;
    }
    static fromValue(t) {
        switch(t){
            case "comment":
                return HXn.Comment;
            case "imports":
                return HXn.Imports;
            case "region":
                return HXn.Region;
        }
        return new HXn(t);
    }
}, Mze.Comment = new Mze("comment"), Mze.Imports = new Mze("imports"), Mze.Region = new Mze("region"), UK = Mze, KQr = ((e)=>(e[e.AIGenerated = 1] = "AIGenerated", e))(KQr || {}), gfn = ((e)=>(e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic", e))(gfn || {}), ((e)=>{
    function t(n) {
        return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
    }
    e.is = t;
})(Hvi || (Hvi = {})), rU = ((e)=>(e[e.Collapsed = 0] = "Collapsed", e[e.Expanded = 1] = "Expanded", e))(rU || {}), dW = ((e)=>(e[e.Unresolved = 0] = "Unresolved", e[e.Resolved = 1] = "Resolved", e))(dW || {}), Wvi = ((e)=>(e[e.Current = 0] = "Current", e[e.Outdated = 1] = "Outdated", e))(Wvi || {}), SOt = ((e)=>(e[e.Editing = 0] = "Editing", e[e.Preview = 1] = "Preview", e))(SOt || {}), Gvi = ((e)=>(e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter", e))(Gvi || {}), YQr = class {
    constructor(e){
        this.createSupport = e, this._tokenizationSupport = null;
    }
    dispose() {
        this._tokenizationSupport && this._tokenizationSupport.then((e)=>{
            e && e.dispose();
        });
    }
    get tokenizationSupport() {
        return this._tokenizationSupport || (this._tokenizationSupport = this.createSupport()), this._tokenizationSupport;
    }
}, Ky = new qQr, ywe = new qQr, Ept = ((e)=>(e[e.None = 0] = "None", e[e.Option = 1] = "Option", e[e.Default = 2] = "Default", e[e.Preferred = 3] = "Preferred", e))(Ept || {}), XQr = ((e)=>(e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic", e))(XQr || {});

}
