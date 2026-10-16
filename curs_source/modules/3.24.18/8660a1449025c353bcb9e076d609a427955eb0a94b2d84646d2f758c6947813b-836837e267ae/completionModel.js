import { Fa, Lpr, eAe } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Cw, ti } from "./charCode.js";
import { Hfn, one, s6 } from "./filters.js";
import { E } from "./tslib.es6.js";
import { int, k3y, nWd } from "./ze.js";
var tNa, nNa;
export { nNa, tNa };
var __wakaru_pDp_initialized = false;
export function pDp() {
if (__wakaru_pDp_initialized) return;
__wakaru_pDp_initialized = true;
"use strict";
E(), bo(), Cw(), s6(), Fa(), tNa = class {
    constructor(t, e){
        this.leadingLineContent = t, this.characterCountDelta = e;
    }
}, nNa = class c$n {
    constructor(e, n, i, r, s, o, a = Hfn.default, l = void 0){
        this.clipboardText = l, this._snippetCompareFn = c$n._compareCompletionItems, this._items = e, this._column = n, this._wordDistance = r, this._options = s, this._refilterKind = 1, this._lineContext = i, this._fuzzyScoreOptions = a, o === "top" ? this._snippetCompareFn = c$n._compareCompletionItemsSnippetsUp : o === "bottom" && (this._snippetCompareFn = c$n._compareCompletionItemsSnippetsDown);
    }
    get lineContext() {
        return this._lineContext;
    }
    set lineContext(e) {
        (this._lineContext.leadingLineContent !== e.leadingLineContent || this._lineContext.characterCountDelta !== e.characterCountDelta) && (this._refilterKind = this._lineContext.characterCountDelta < e.characterCountDelta && this._filteredItems ? 2 : 1, this._lineContext = e);
    }
    get items() {
        return this._ensureCachedState(), this._filteredItems;
    }
    getItemsByProvider() {
        return this._ensureCachedState(), this._itemsByProvider;
    }
    getIncompleteProvider() {
        this._ensureCachedState();
        const e = new Set;
        for (const [n, i] of this.getItemsByProvider())i.length > 0 && i[0].container.incomplete && e.add(n);
        return e;
    }
    get stats() {
        return this._ensureCachedState(), this._stats;
    }
    _ensureCachedState() {
        this._refilterKind !== 0 && this._createCachedState();
    }
    _createCachedState() {
        this._itemsByProvider = new Map;
        const e = [], { leadingLineContent: n, characterCountDelta: i } = this._lineContext;
        let r = "", s = "";
        const o = this._refilterKind === 1 ? this._items : this._filteredItems, a = [], l = !this._options.filterGraceful || o.length > 2e3 ? int : nWd;
        for(let c = 0; c < o.length; c++){
            const u = o[c];
            if (u.isInvalid) continue;
            const d = this._itemsByProvider.get(u.provider);
            d ? d.push(u) : this._itemsByProvider.set(u.provider, [
                u
            ]);
            const h = u.position.column - u.editStart.column, p = h + i - (u.position.column - this._column);
            if (r.length !== p && (r = p === 0 ? "" : n.slice(-p), s = r.toLowerCase()), u.word = r, p === 0) u.score = one.Default;
            else {
                let g = 0;
                for(; g < h;){
                    const f = r.charCodeAt(g);
                    if (f === ti.Space || f === ti.Tab) g += 1;
                    else break;
                }
                if (g >= p) u.score = one.Default;
                else if (typeof u.completion.filterText == "string") {
                    const f = l(r, s, g, u.completion.filterText, u.filterTextLow, 0, this._fuzzyScoreOptions);
                    if (!f) continue;
                    eAe(u.completion.filterText, u.textLabel) === 0 ? u.score = f : (u.score = k3y(r, s, g, u.textLabel, u.labelLow, 0), u.score[0] = f[0]);
                } else {
                    const f = l(r, s, g, u.textLabel, u.labelLow, 0, this._fuzzyScoreOptions);
                    if (!f) continue;
                    u.score = f;
                }
            }
            u.idx = c, u.distance = this._wordDistance.distance(u.position, u.completion), a.push(u), e.push(u.textLabel.length);
        }
        this._filteredItems = a.sort(this._snippetCompareFn), this._refilterKind = 0, this._stats = {
            pLabelLen: e.length ? Lpr(e.length - .85, e, (c, u)=>c - u) : 0
        };
    }
    static _compareCompletionItems(e, n) {
        return e.score[0] > n.score[0] ? -1 : e.score[0] < n.score[0] ? 1 : e.distance < n.distance ? -1 : e.distance > n.distance ? 1 : e.idx < n.idx ? -1 : e.idx > n.idx ? 1 : 0;
    }
    static _compareCompletionItemsSnippetsDown(e, n) {
        if (e.completion.kind !== n.completion.kind) {
            if (e.completion.kind === 27) return 1;
            if (n.completion.kind === 27) return -1;
        }
        return c$n._compareCompletionItems(e, n);
    }
    static _compareCompletionItemsSnippetsUp(e, n) {
        if (e.completion.kind !== n.completion.kind) {
            if (e.completion.kind === 27) return -1;
            if (n.completion.kind === 27) return 1;
        }
        return c$n._compareCompletionItems(e, n);
    }
};

}
