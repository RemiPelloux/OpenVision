import { D, Ei, Kv, Qe, Ya } from "./Iwo.js";
import { hA, iAe } from "./SZu.js";
import { Ft, es } from "./actions_2.js";
import { Xs, yo } from "./cancellation.js";
import { hs, rs } from "./commands.js";
import { rx1 } from "./completionListDto.js";
import { Hi, cn } from "./contextkey.js";
import { one, s6 } from "./filters.js";
import { P3a, R3a, ax1, ix1, ox1, oyi, vWr } from "./ipa.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Iy, cyt } from "./languages.js";
import { Bt } from "./nls.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Em, Rh } from "./resolverService.js";
import { A5e } from "./snippetParser.js";
import { p6t } from "./spanLifecycle.js";
import { D3, Xw } from "./stopwatch.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
var Qv, Cst, jMp, CWr, TWr, hyi, $Mp, pyi, GHt;
export { $Mp, CWr, Cst, GHt, Qv, TWr, hyi, jMp, pyi };
var __wakaru_Tst_initialized = false;
export function Tst() {
if (__wakaru_Tst_initialized) return;
__wakaru_Tst_initialized = true;
"use strict";
E(), yo(), Ei(), s6(), Qe(), D3(), To(), fn(), jc(), Qs(), Iy(), Em(), A5e(), Bt(), es(), rs(), Hi(), rx1(), Dg(), oyi(), __(), p6t(), Qv = {
    Visible: vWr,
    HasFocusedSuggestion: new cn("suggestWidgetHasFocusedSuggestion", !1, D(1589, null)),
    DetailsVisible: new cn("suggestWidgetDetailsVisible", !1, D(1590, null)),
    MultipleSuggestions: new cn("suggestWidgetMultipleSuggestions", !1, D(1591, null)),
    MakesTextEdit: new cn("suggestionMakesTextEdit", !0, D(1592, null)),
    AcceptSuggestionsOnEnter: new cn("acceptSuggestionOnEnter", !0, D(1593, null)),
    HasInsertAndReplaceRange: new cn("suggestionHasInsertAndReplaceRange", !1, D(1594, null)),
    InsertMode: new cn("suggestionInsertMode", void 0, {
        type: "string",
        description: D(1595, null)
    }),
    CanResolve: new cn("suggestionCanResolve", !1, D(1596, null))
}, Cst = new Ft("suggestWidgetStatusBar"), jMp = class {
    constructor(t, e, n, i){
        this.position = t, this.completion = e, this.container = n, this.provider = i, this.isInvalid = !1, this.score = one.Default, this.distance = 0, this.textLabel = typeof e.label == "string" ? e.label : e.label?.label, this.labelLow = this.textLabel.toLowerCase(), this.isInvalid = !this.textLabel, this.sortTextLow = e.sortText && e.sortText.toLowerCase(), this.filterTextLow = e.filterText && e.filterText.toLowerCase(), this.extensionId = e.extensionId, qt.isIRange(e.range) ? (this.editStart = new er(e.range.startLineNumber, e.range.startColumn), this.editInsertEnd = new er(e.range.endLineNumber, e.range.endColumn), this.editReplaceEnd = new er(e.range.endLineNumber, e.range.endColumn), this.isInvalid = this.isInvalid || qt.spansMultipleLines(e.range) || e.range.startLineNumber !== t.lineNumber) : (this.editStart = new er(e.range.insert.startLineNumber, e.range.insert.startColumn), this.editInsertEnd = new er(e.range.insert.endLineNumber, e.range.insert.endColumn), this.editReplaceEnd = new er(e.range.replace.endLineNumber, e.range.replace.endColumn), this.isInvalid = this.isInvalid || qt.spansMultipleLines(e.range.insert) || qt.spansMultipleLines(e.range.replace) || e.range.insert.startLineNumber !== t.lineNumber || e.range.replace.startLineNumber !== t.lineNumber || e.range.insert.startColumn !== e.range.replace.startColumn), typeof i.resolveCompletionItem != "function" && (this._resolveCache = Promise.resolve(), this._resolveDuration = 0);
    }
    get isResolved() {
        return this._resolveDuration !== void 0;
    }
    get resolveDuration() {
        return this._resolveDuration !== void 0 ? this._resolveDuration : -1;
    }
    async resolve(t) {
        if (!this._resolveCache) {
            const e = t.onCancellationRequested(()=>{
                this._resolveCache = void 0, this._resolveDuration = void 0;
            }), n = new Xw(!0);
            this._resolveCache = Promise.resolve(this.provider.resolveCompletionItem(this.completion, t)).then((i)=>{
                Object.assign(this.completion, i), this._resolveDuration = n.elapsed();
            }, (i)=>{
                Ya(i) && (this._resolveCache = void 0, this._resolveDuration = void 0);
            }).finally(()=>{
                e.dispose();
            });
        }
        return this._resolveCache;
    }
}, CWr = class {
    constructor(e = 2, n = new Set, i = new Set, r = new Map, s = !0){
        this.snippetSortOrder = e, this.kindFilter = n, this.providerFilter = i, this.providerItemsToReuse = r, this.showDeprecated = s;
    }
}, CWr.default = new CWr, TWr = CWr, hyi = [], $Mp = class {
    constructor(t, e, n, i){
        this.items = t, this.needsClipboard = e, this.durations = n, this.disposable = i;
    }
}, pyi = new Map, pyi.set(0, ox1), pyi.set(2, ax1), pyi.set(1, P3a), hs.registerCommand("_executeCompletionItemProvider", async (t, ...e)=>{
    const [n, i, r, s] = e;
    Kv(rt.isUri(n)), Kv(er.isIPosition(i)), Kv(typeof r == "string" || !r), Kv(typeof s == "number" || !s);
    const { completionProvider: o } = t.get(Nd), a = await t.get(Rh).createModelReference(n);
    try {
        const l = {
            incomplete: !1,
            suggestions: []
        }, c = [], u = a.object.textEditorModel.validatePosition(i), d = await iAe(hA("suggest.provideSuggestionItems"), async ()=>await R3a(o, a.object.textEditorModel, u, void 0, {
                triggerCharacter: r ?? void 0,
                triggerKind: r ? cyt.TriggerCharacter : cyt.Invoke
            }));
        for (const h of d.items)c.length < (s ?? 0) && c.push(h.resolve(Xs.None)), l.incomplete = l.incomplete || h.container.incomplete, l.suggestions.push(h.completion);
        try {
            return await Promise.all(c), ix1(l);
        } finally{
            setTimeout(()=>d.disposable.dispose(), 100);
        }
    } finally{
        a.dispose();
    }
}), GHt = class {
    static isAllOff(t) {
        return t.other === "off" && t.comments === "off" && t.strings === "off";
    }
    static isAllOn(t) {
        return t.other === "on" && t.comments === "on" && t.strings === "on";
    }
    static valueFor(t, e) {
        switch(e){
            case 1:
                return t.comments;
            case 2:
                return t.strings;
            default:
                return t.other;
        }
    }
};

}
