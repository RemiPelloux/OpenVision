import { Qj, _Wt, sVi } from "./A3u.js";
import { d7t } from "./De_3.js";
import { S } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { TO, bn } from "./async.js";
import { Ja, md } from "./codeEditorService.js";
import { Pe, _i } from "./codicons.js";
import { Cn, qt } from "./configuration.js";
import { Ni, _1, hn, ib } from "./editorService.js";
import { p7t } from "./findController.js";
import { S_e } from "./fuzzyScorer.js";
import { dc, yu } from "./label.js";
import { Wp, bwe } from "./languages.js";
import { gt, li } from "./network.js";
import { rt } from "./nls.js";
import { eo, ko } from "./opener.js";
import { L$, Rde, Uee } from "./pickerQuickAccess.js";
import { dt, qi } from "./range.js";
import { Zet } from "./search_3.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
import { elh } from "./xmo.js";
var Hde;
export { Hde };
var __wakaru_q_o_initialized = false;
export function q_o() {
if (__wakaru_q_o_initialized) return;
__wakaru_q_o_initialized = true;
"use strict";
x(), rt(), Rde(), bn(), Zet(), Wp(), yu(), li(), ko(), Ni(), qi(), Cn(), md(), p7t(), S_e(), _i(), Sr(), Hde = class extends Uee {
    constructor(e, t, n, i, r){
        super(Hde.PREFIX, {
            canAcceptInBackground: !0,
            noResultsPick: {
                label: S(9545, null)
            }
        }), this.labelService = e, this.openerService = t, this.editorService = n, this.configurationService = i, this.codeEditorService = r, this.delayer = this._register(new TO(Hde.TYPING_SEARCH_DELAY)), this.excludedProviders = new Set, this._refreshExcludedProvidersFromConfig(), this._register(this.configurationService.onDidChangeConfiguration((s)=>{
            s.affectsConfiguration("search.quickAccess.excludeSymbolProviders") && this._refreshExcludedProvidersFromConfig();
        }));
    }
    get defaultFilterValue() {
        const e = this.codeEditorService.getFocusedCodeEditor();
        if (e) return d7t(e) ?? void 0;
    }
    get configuration() {
        const e = this.configurationService.getValue().workbench?.editor;
        return {
            openEditorPinned: !e?.enablePreviewFromQuickOpen || !e?.enablePreview,
            openSideBySideDirection: e?.openSideBySideDirection
        };
    }
    _getPicks(e, t, n) {
        return this.getSymbolPicks(e, void 0, n);
    }
    async getSymbolPicks(e, t, n) {
        return this.delayer.trigger(async ()=>n.isCancellationRequested ? [] : this.doGetSymbolPicks(Qj(e), t, n), t?.delay);
    }
    async doGetSymbolPicks(e, t, n) {
        let i, r;
        e.values && e.values.length > 1 ? (i = sVi(e.values[0]), r = sVi(e.values.slice(1))) : i = e;
        const s = await elh(i.original, this.excludedProviders, n);
        if (n.isCancellationRequested) return [];
        const o = [], a = this.configuration.openSideBySideDirection;
        for (const { symbol: c, provider: l } of s){
            if (t?.skipLocal && !Hde.TREAT_AS_GLOBAL_SYMBOL_TYPES.has(c.kind) && c.containerName) continue;
            const u = c.name, h = `$(${bwe.toIcon(c.kind).id}) ${u}`, p = h.length - u.length;
            let g, f, v = !1;
            if (i.original.length > 0 && (i !== e && ([g, f] = _Wt(h, {
                ...e,
                values: void 0
            }, 0, p), typeof g == "number" && (v = !0)), typeof g != "number" && ([g, f] = _Wt(h, i, 0, p), typeof g != "number"))) continue;
            const b = c.location.uri;
            let y;
            if (b) {
                const R = this.labelService.getUriLabel(b, {
                    relative: !0
                });
                c.containerName ? y = `${c.containerName} \u2022 ${R}` : y = R;
            }
            let T, E;
            if (!v && r && r.original.length > 0) {
                if (y && ([T, E] = _Wt(y, r)), typeof T != "number") continue;
                typeof g == "number" && (g += T);
            }
            const A = c.tags ? c.tags.indexOf(1) >= 0 : !1;
            o.push({
                symbol: c,
                resource: b,
                score: g,
                label: h,
                ariaLabel: u,
                highlights: A ? void 0 : {
                    label: f,
                    description: E
                },
                description: y,
                strikethrough: A,
                buttons: [
                    {
                        iconClass: a === "right" ? Ft.asClassName(Pe.splitHorizontal) : Ft.asClassName(Pe.splitVertical),
                        tooltip: S(a === "right" ? 9546 : 9547, null)
                    }
                ],
                trigger: (R, D)=>(this.openSymbol(l, c, n, {
                        keyMods: D,
                        forceOpenSideBySide: !0
                    }), L$.CLOSE_PICKER),
                accept: async (R, D)=>this.openSymbol(l, c, n, {
                        keyMods: R,
                        preserveFocus: D.inBackground,
                        forcePinned: D.inBackground
                    })
            });
        }
        return t?.skipSorting || o.sort((c, l)=>this.compareSymbols(c, l)), o;
    }
    async openSymbol(e, t, n, i) {
        let r = t;
        typeof e.resolveWorkspaceSymbol == "function" && (r = await e.resolveWorkspaceSymbol(t, n) || t, n.isCancellationRequested) || (r.location.uri.scheme === gt.http || r.location.uri.scheme === gt.https ? await this.openerService.open(r.location.uri, {
            fromUserGesture: !0,
            allowContributedOpeners: !0
        }) : await this.editorService.openEditor({
            resource: r.location.uri,
            options: {
                preserveFocus: i?.preserveFocus,
                pinned: i.keyMods.ctrlCmd || i.forcePinned || this.configuration.openEditorPinned,
                selection: r.location.range ? dt.collapseToStart(r.location.range) : void 0
            }
        }, i.keyMods.alt || this.configuration.openEditorPinned && i.keyMods.ctrlCmd || i?.forceOpenSideBySide ? ib : _1));
    }
    compareSymbols(e, t) {
        if (typeof e.score == "number" && typeof t.score == "number") {
            if (e.score > t.score) return -1;
            if (e.score < t.score) return 1;
        }
        if (e.symbol && t.symbol) {
            const n = e.symbol.name.toLowerCase(), i = t.symbol.name.toLowerCase(), r = n.localeCompare(i);
            if (r !== 0) return r;
        }
        if (e.symbol && t.symbol) {
            const n = bwe.toIcon(e.symbol.kind).id, i = bwe.toIcon(t.symbol.kind).id;
            return n.localeCompare(i);
        }
        return 0;
    }
    _refreshExcludedProvidersFromConfig() {
        const e = this.configurationService.getValue("search.quickAccess.excludeSymbolProviders"), t = Array.isArray(e) ? e : [];
        this.excludedProviders = new Set(t.map((n)=>n.toLowerCase()));
    }
}, Hde.PREFIX = "#", Hde.TYPING_SEARCH_DELAY = 200, Hde.TREAT_AS_GLOBAL_SYMBOL_TYPES = new Set([
    4,
    9,
    0,
    10,
    2,
    3,
    1
]), Hde = ie([
    C(0, dc),
    C(1, eo),
    C(2, hn),
    C(3, qt),
    C(4, Ja)
], Hde);

}
