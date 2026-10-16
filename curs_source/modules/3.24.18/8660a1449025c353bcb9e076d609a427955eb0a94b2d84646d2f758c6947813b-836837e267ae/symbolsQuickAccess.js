import { D } from "./Iwo.js";
import { nW, qn } from "./async.js";
import { Ju, og } from "./codeEditorService.js";
import { gs, yt } from "./codicons.js";
import { or, yi } from "./configuration.js";
import { Wo, cB, gr, p2 } from "./editorService.js";
import { HHt } from "./findController.js";
import { kJ } from "./fuzzyScorer.js";
import { xKm } from "./gYa.js";
import { cyi } from "./ipa.js";
import { Yp, qg } from "./label.js";
import { Iy, lHe } from "./languages.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { kc, qc } from "./opener.js";
import { Ipe, PGt, RGt } from "./pickerQuickAccess.js";
import { Qs, qt } from "./range.js";
import { ACi } from "./search_3.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { MXr, OB, aEn } from "./yBp.js";
var I4e;
export { I4e };
var __wakaru_DKm_initialized = false;
export function DKm() {
if (__wakaru_DKm_initialized) return;
__wakaru_DKm_initialized = true;
"use strict";
E(), Bt(), PGt(), qn(), ACi(), Iy(), qg(), Ki(), qc(), Wo(), Qs(), or(), og(), HHt(), kJ(), gs(), ta(), I4e = class extends RGt {
    constructor(t, e, n, i, r){
        super(I4e.PREFIX, {
            canAcceptInBackground: !0,
            noResultsPick: {
                label: D(9545, null)
            }
        }), this.labelService = t, this.openerService = e, this.editorService = n, this.configurationService = i, this.codeEditorService = r, this.delayer = this._register(new nW(I4e.TYPING_SEARCH_DELAY)), this.excludedProviders = new Set, this._refreshExcludedProvidersFromConfig(), this._register(this.configurationService.onDidChangeConfiguration((s)=>{
            s.affectsConfiguration("search.quickAccess.excludeSymbolProviders") && this._refreshExcludedProvidersFromConfig();
        }));
    }
    get defaultFilterValue() {
        const t = this.codeEditorService.getFocusedCodeEditor();
        if (t) return cyi(t) ?? void 0;
    }
    get configuration() {
        const t = this.configurationService.getValue().workbench?.editor;
        return {
            openEditorPinned: !t?.enablePreviewFromQuickOpen || !t?.enablePreview,
            openSideBySideDirection: t?.openSideBySideDirection
        };
    }
    _getPicks(t, e, n) {
        return this.getSymbolPicks(t, void 0, n);
    }
    async getSymbolPicks(t, e, n) {
        return this.delayer.trigger(async ()=>n.isCancellationRequested ? [] : this.doGetSymbolPicks(OB(t), e, n), e?.delay);
    }
    async doGetSymbolPicks(t, e, n) {
        let i, r;
        t.values && t.values.length > 1 ? (i = MXr(t.values[0]), r = MXr(t.values.slice(1))) : i = t;
        const s = await xKm(i.original, this.excludedProviders, n);
        if (n.isCancellationRequested) return [];
        const o = [], a = this.configuration.openSideBySideDirection;
        for (const { symbol: l, provider: c } of s){
            if (e?.skipLocal && !I4e.TREAT_AS_GLOBAL_SYMBOL_TYPES.has(l.kind) && l.containerName) continue;
            const u = l.name, d = `$(${lHe.toIcon(l.kind).id}) ${u}`, h = d.length - u.length;
            let p, g, f = !1;
            if (i.original.length > 0 && (i !== t && ([p, g] = aEn(d, {
                ...t,
                values: void 0
            }, 0, h), typeof p == "number" && (f = !0)), typeof p != "number" && ([p, g] = aEn(d, i, 0, h), typeof p != "number"))) continue;
            const _ = l.location.uri;
            let b;
            if (_) {
                const C = this.labelService.getUriLabel(_, {
                    relative: !0
                });
                l.containerName ? b = `${l.containerName} \u2022 ${C}` : b = C;
            }
            let y, S;
            if (!f && r && r.original.length > 0) {
                if (b && ([y, S] = aEn(b, r)), typeof y != "number") continue;
                typeof p == "number" && (p += y);
            }
            const k = l.tags ? l.tags.indexOf(1) >= 0 : !1;
            o.push({
                symbol: l,
                resource: _,
                score: p,
                label: d,
                ariaLabel: u,
                highlights: k ? void 0 : {
                    label: g,
                    description: S
                },
                description: b,
                strikethrough: k,
                buttons: [
                    {
                        iconClass: a === "right" ? Gn.asClassName(yt.splitHorizontal) : Gn.asClassName(yt.splitVertical),
                        tooltip: D(a === "right" ? 9546 : 9547, null)
                    }
                ],
                trigger: (C, T)=>(this.openSymbol(c, l, n, {
                        keyMods: T,
                        forceOpenSideBySide: !0
                    }), Ipe.CLOSE_PICKER),
                accept: async (C, T)=>this.openSymbol(c, l, n, {
                        keyMods: C,
                        preserveFocus: T.inBackground,
                        forcePinned: T.inBackground
                    })
            });
        }
        return e?.skipSorting || o.sort((l, c)=>this.compareSymbols(l, c)), o;
    }
    async openSymbol(t, e, n, i) {
        let r = e;
        typeof t.resolveWorkspaceSymbol == "function" && (r = await t.resolveWorkspaceSymbol(e, n) || e, n.isCancellationRequested) || (r.location.uri.scheme === Ot.http || r.location.uri.scheme === Ot.https ? await this.openerService.open(r.location.uri, {
            fromUserGesture: !0,
            allowContributedOpeners: !0
        }) : await this.editorService.openEditor({
            resource: r.location.uri,
            options: {
                preserveFocus: i?.preserveFocus,
                pinned: i.keyMods.ctrlCmd || i.forcePinned || this.configuration.openEditorPinned,
                selection: r.location.range ? qt.collapseToStart(r.location.range) : void 0
            }
        }, i.keyMods.alt || this.configuration.openEditorPinned && i.keyMods.ctrlCmd || i?.forceOpenSideBySide ? p2 : cB));
    }
    compareSymbols(t, e) {
        if (typeof t.score == "number" && typeof e.score == "number") {
            if (t.score > e.score) return -1;
            if (t.score < e.score) return 1;
        }
        if (t.symbol && e.symbol) {
            const n = t.symbol.name.toLowerCase(), i = e.symbol.name.toLowerCase(), r = n.localeCompare(i);
            if (r !== 0) return r;
        }
        if (t.symbol && e.symbol) {
            const n = lHe.toIcon(t.symbol.kind).id, i = lHe.toIcon(e.symbol.kind).id;
            return n.localeCompare(i);
        }
        return 0;
    }
    _refreshExcludedProvidersFromConfig() {
        const t = this.configurationService.getValue("search.quickAccess.excludeSymbolProviders"), e = Array.isArray(t) ? t : [];
        this.excludedProviders = new Set(e.map((n)=>n.toLowerCase()));
    }
}, I4e.PREFIX = "#", I4e.TYPING_SEARCH_DELAY = 200, I4e.TREAT_AS_GLOBAL_SYMBOL_TYPES = new Set([
    4,
    9,
    0,
    10,
    2,
    3,
    1
]), I4e = Re([
    F(0, Yp),
    F(1, kc),
    F(2, gr),
    F(3, yi),
    F(4, Ju)
], I4e);

}
