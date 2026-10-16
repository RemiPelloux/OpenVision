import { D, Di, Ei, Mm, Nt, Qe, XE, Ya, bve, st, xa, yx } from "./Iwo.js";
import { bo } from "./arrays.js";
import { df, qn } from "./async.js";
import { Uj, x5e } from "./bulkEditService.js";
import { El, yo } from "./cancellation.js";
import { bb, hf } from "./clipboardService.js";
import { Afn, Esi } from "./clipboardUtils.js";
import { nr, rs } from "./commands.js";
import { or, yi } from "./configuration.js";
import { Hi, cn } from "./contextkey.js";
import { hnt, wHe } from "./dataTransfer.js";
import { fvn, jqo } from "./defaultProviders.js";
import { Oqo } from "./dnd_4.js";
import { Hn } from "./dom_2.js";
import { Wqo } from "./edit.js";
import { EHe, R5e } from "./editorState.js";
import { DC, o_e } from "./hierarchicalKind.js";
import { Poi, zqo } from "./inlineProgress.js";
import { It, dn } from "./instantiation.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Iy, Yri } from "./languages.js";
import { Moi, _z } from "./messageController.js";
import { Jk, tB } from "./mime.js";
import { Bt } from "./nls.js";
import { NLy, Uzd } from "./pasteEditSession.js";
import { Kzd, Noi } from "./postEditWidget.js";
import { B1, ab } from "./progress.js";
import { Cl, Gu } from "./quickInput.js";
import { Qs, qt } from "./range.js";
import { ehe, uwe } from "./tooltipService.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { Z_, fS } from "./uiOverlayService.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { Bzd, Coi, Czd, Fzd, Rzd, li, rEr } from "./ze.js";
var tzo, mEr, gEr, fEr, C4;
export { C4, fEr, gEr, mEr, tzo };
var __wakaru_bvn_initialized = false;
export function bvn() {
if (__wakaru_bvn_initialized) return;
__wakaru_bvn_initialized = true;
"use strict";
E(), Hn(), bo(), qn(), yo(), hnt(), Ei(), o_e(), Qe(), tB(), Di(), Xo(), To(), Bt(), bb(), fS(), rs(), or(), Hi(), It(), ab(), Gu(), Esi(), Oqo(), Uj(), Qs(), Iy(), Dg(), jqo(), Wqo(), NLy(), R5e(), zqo(), Moi(), Kzd(), uwe(), tzo = "editor.changePasteType", mEr = "editor.pasteAs.preferences", gEr = new cn("pasteWidgetVisible", !1, D(1053, null)), fEr = "application/vnd.code.copymetadata", C4 = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u){
        super(), this._bulkEditService = n, this._clipboardService = i, this._commandService = r, this._configService = s, this._languageFeaturesService = o, this._quickInputService = a, this._progressService = l, this._tooltipService = c, this._uiOverlayService = u, this._editor = t;
        const d = t.getContainerDomNode();
        this._register(li(d, "copy", (h)=>this.handleCopy(h))), this._register(li(d, "cut", (h)=>this.handleCopy(h))), this._register(li(d, "paste", (h)=>this.handlePaste(h), !0)), this._pasteProgressManager = this._register(new Poi("pasteIntoEditor", t, e)), this._postPasteWidgetManager = this._register(e.createInstance(Noi, "pasteIntoEditor", t, gEr, {
            id: tzo,
            label: D(1054, null)
        }, ()=>C4._configureDefaultAction ? [
                C4._configureDefaultAction
            ] : []));
    }
    static get(t) {
        return t.getContribution(C4.ID);
    }
    static setConfigureDefaultAction(t) {
        C4._configureDefaultAction = t;
    }
    changePasteType() {
        this._postPasteWidgetManager.tryShowSelector();
    }
    pasteAs(t) {
        this._editor.focus();
        try {
            this._pasteAsActionContext = {
                preferred: t
            }, this._commandService.executeCommand("editor.action.clipboardPasteAction");
        } finally{
            this._pasteAsActionContext = void 0;
        }
    }
    clearWidgets() {
        this._postPasteWidgetManager.clear();
    }
    isPasteAsEnabled() {
        return this._editor.getOption(89).enabled;
    }
    async finishedPaste() {
        await this._currentPasteOperation;
    }
    handleCopy(t) {
        if (this._editor.isChatCodeblock === !0 ? this._tooltipService.registerEvent("chat.copy.codeblock.manual") : this._editor.isSimpleWidget === !1 && this._tooltipService.registerEvent("editor.copy.non_vim_mode"), !this._editor.hasTextFocus() || (this._clipboardService.clearInternalState?.(), !t.clipboardData)) return;
        const e = this._editor.getModel(), n = this._editor.getSelections();
        if (!e || !n?.length) return;
        const i = this._editor.getOption(38);
        let r = n;
        const s = n.length === 1 && n[0].isEmpty();
        if (s) {
            if (!i) return;
            r = [
                new qt(r[0].startLineNumber, 1, r[0].startLineNumber, 1 + e.getLineLength(r[0].startLineNumber))
            ];
        }
        const o = this._editor._getViewModel()?.getPlainTextToCopy(n, i, xa), a = Array.isArray(o) ? o : null;
        if (this._uiOverlayService.lastCopyData = {
            text: Array.isArray(o) ? o.join(`
`) : o ?? "",
            range: {
                selectionStartLineNumber: r[0].startLineNumber,
                selectionStartColumn: r[0].startColumn,
                positionLineNumber: r[0].endLineNumber,
                positionColumn: r[0].endColumn
            },
            languageId: e?.getLanguageIdAtPosition(r[0].startLineNumber, r[0].startColumn) ?? "",
            uri: e.uri
        }, !this.isPasteAsEnabled()) return;
        const l = {
            multicursorText: a,
            pasteOnNewLine: s,
            mode: null
        }, c = this._languageFeaturesService.documentPasteEditProvider.ordered(e).filter((g)=>!!g.prepareDocumentPaste);
        if (!c.length) {
            this.setCopyMetadata(t.clipboardData, {
                defaultPastePayload: l
            });
            return;
        }
        const u = Rzd(t.clipboardData), d = c.flatMap((g)=>g.copyMimeTypes ?? []), h = Ai();
        this.setCopyMetadata(t.clipboardData, {
            id: h,
            providerCopyMimeTypes: d,
            defaultPastePayload: l
        });
        const p = c.map((g)=>({
                providerMimeTypes: g.copyMimeTypes,
                operation: XE((f)=>g.prepareDocumentPaste(e, r, u, f).catch((_)=>{
                        console.error(_);
                    }))
            }));
        C4._currentCopyOperation?.operations.forEach((g)=>g.operation.cancel()), C4._currentCopyOperation = {
            handle: h,
            operations: p
        };
    }
    async handlePaste(t) {
        if (!t.clipboardData || !this._editor.hasTextFocus()) return;
        _z.get(this._editor)?.closeMessage(), this._currentPasteOperation?.cancel(), this._currentPasteOperation = void 0;
        const e = this._editor.getModel(), n = this._editor.getSelections();
        if (!n?.length || !e || this._editor.getOption(96) || !this.isPasteAsEnabled() && !this._pasteAsActionContext) return;
        const i = this.fetchCopyMetadata(t), r = rEr(t.clipboardData);
        r.delete(fEr);
        const s = Array.from(t.clipboardData.files).map((l)=>l.type), o = [
            ...t.clipboardData.types,
            ...s,
            ...i?.providerCopyMimeTypes ?? [],
            Jk.uriList
        ], a = this._languageFeaturesService.documentPasteEditProvider.ordered(e).filter((l)=>{
            const c = this._pasteAsActionContext?.preferred;
            return c && !this.providerMatchesPreference(l, c) ? !1 : l.pasteMimeTypes?.some((u)=>Czd(u, o));
        });
        if (!a.length) {
            this._pasteAsActionContext?.preferred && (this.showPasteAsNoEditMessage(n, this._pasteAsActionContext.preferred), t.preventDefault(), t.stopImmediatePropagation());
            return;
        }
        t.preventDefault(), t.stopImmediatePropagation(), !this._editor.isSimpleWidget && !this._editor.isChatCodeblock && this._tooltipService.registerEvent("editor.paste"), this._pasteAsActionContext ? this.showPasteAsPick(this._pasteAsActionContext.preferred, a, n, r, i) : this.doPasteInline(a, n, r, i, t);
    }
    showPasteAsNoEditMessage(t, e) {
        const n = "only" in e ? e.only.value : "preferences" in e ? e.preferences.length ? e.preferences.map((i)=>i.value).join(", ") : D(1055, null) : e.providerId;
        _z.get(this._editor)?.showMessage(D(1056, null, n), t[0].getStartPosition());
    }
    doPasteInline(t, e, n, i, r) {
        const s = this._editor;
        if (!s.hasModel()) return;
        const o = new EHe(s, 3, void 0), a = XE(async (l)=>{
            const c = this._editor;
            if (!c.hasModel()) return;
            const u = c.getModel(), d = new Nt, h = d.add(new El(l)), p = d.add(o.token.onCancellationRequested(()=>h.cancel())), g = h.token;
            try {
                if (await this.mergeInDataFromCopy(t, n, i, g), g.isCancellationRequested) return;
                const f = t.filter((y)=>this.isSupportedPasteProvider(y, n));
                if (!f.length || f.length === 1 && f[0] instanceof fvn) return this.applyDefaultPasteHandler(n, i, g, r);
                const _ = {
                    triggerKind: Yri.Automatic
                }, b = await bve(this.getPasteEdits(f, n, u, e, _, g), d);
                if (g.isCancellationRequested) return;
                if (b.edits.length === 1 && b.edits[0].provider instanceof fvn) return this.applyDefaultPasteHandler(n, i, g, r);
                if (b.edits.length) {
                    const y = c.getOption(89).showPasteSelector === "afterPaste";
                    return d.delete(p), await this._postPasteWidgetManager.applyEditAndShowIfNeeded(e, {
                        activeEditIndex: this.getInitialActiveEditIndex(u, b.edits),
                        allEdits: b.edits
                    }, y, async (S, k)=>{
                        if (!S.provider.resolveDocumentPasteEdit) return S;
                        const C = S.provider.resolveDocumentPasteEdit(S, k), T = new df, I = await this._pasteProgressManager.showWhile(e[0].getEndPosition(), D(1057, null, S.title), yx(Promise.race([
                            T.p,
                            C
                        ]), k), {
                            cancel: ()=>T.cancel()
                        }, 0);
                        return I && (S.insertText = I.insertText, S.additionalEdit = I.additionalEdit), S;
                    }, g, b);
                }
                await this.applyDefaultPasteHandler(n, i, g, r);
            } finally{
                d.dispose(), this._currentPasteOperation === a && (this._currentPasteOperation = void 0);
            }
        });
        this._pasteProgressManager.showWhile(e[0].getEndPosition(), D(1058, null), a, {
            cancel: async ()=>{
                try {
                    if (a.cancel(), o.token.isCancellationRequested) return;
                    await this.applyDefaultPasteHandler(n, i, o.token, r);
                } finally{
                    o.dispose();
                }
            }
        }).then(()=>{
            o.dispose();
        }), this._currentPasteOperation = a;
    }
    showPasteAsPick(t, e, n, i, r) {
        const s = XE(async (o)=>{
            const a = this._editor;
            if (!a.hasModel()) return;
            const l = a.getModel(), c = new Nt, u = c.add(new EHe(a, 3, void 0, o));
            try {
                if (await this.mergeInDataFromCopy(e, i, r, u.token), u.token.isCancellationRequested) return;
                let d = e.filter((b)=>this.isSupportedPasteProvider(b, i, t));
                t && (d = d.filter((b)=>this.providerMatchesPreference(b, t)));
                const h = {
                    triggerKind: Yri.PasteAs,
                    only: t && "only" in t ? t.only : void 0
                }, p = await bve(this.getPasteEdits(d, i, l, n, h, u.token), c);
                if (u.token.isCancellationRequested) return;
                let g = p.edits;
                if (t && (g = g.filter((b)=>"only" in t ? t.only.contains(b.kind) : "preferences" in t ? t.preferences.some((y)=>y.contains(b.kind)) : t.providerId === b.provider.id)), !g.length) {
                    t && this.showPasteAsNoEditMessage(n, t);
                    return;
                }
                let f;
                if (t) f = g.at(0);
                else {
                    const b = {
                        id: "editor.pasteAs.default",
                        label: D(1059, null),
                        edit: void 0
                    }, y = await this._quickInputService.pick([
                        ...g.map((S)=>({
                                label: S.title,
                                description: S.kind?.value,
                                edit: S
                            })),
                        ...C4._configureDefaultAction ? [
                            {
                                type: "separator"
                            },
                            {
                                label: C4._configureDefaultAction.label,
                                edit: void 0
                            }
                        ] : []
                    ], {
                        placeHolder: D(1060, null)
                    });
                    if (y === b) {
                        C4._configureDefaultAction?.run();
                        return;
                    }
                    f = y?.edit;
                }
                if (!f) return;
                const _ = Fzd(l.uri, n, f);
                await this._bulkEditService.apply(_, {
                    editor: this._editor
                });
            } finally{
                c.dispose(), this._currentPasteOperation === s && (this._currentPasteOperation = void 0);
            }
        });
        this._progressService.withProgress({
            location: 10,
            title: D(1061, null)
        }, ()=>s);
    }
    setCopyMetadata(t, e) {
        t.setData(fEr, JSON.stringify(e));
    }
    fetchCopyMetadata(t) {
        if (!t.clipboardData) return;
        const e = t.clipboardData.getData(fEr);
        if (e) try {
            return JSON.parse(e);
        } catch  {
            return;
        }
        const [n, i] = Afn.getTextData(t.clipboardData);
        if (i) return {
            defaultPastePayload: {
                mode: i.mode,
                multicursorText: i.multicursorText ?? null,
                pasteOnNewLine: !!i.isFromEmptySelection
            }
        };
    }
    async mergeInDataFromCopy(t, e, n, i) {
        if (n?.id && C4._currentCopyOperation?.handle === n.id) {
            const r = C4._currentCopyOperation.operations.filter((o)=>t.some((a)=>a.pasteMimeTypes.some((l)=>Czd(l, o.providerMimeTypes)))).map((o)=>o.operation), s = await Promise.all(r);
            if (i.isCancellationRequested) return;
            for (const o of s.reverse())if (o) for (const [a, l] of o)e.replace(a, l);
        }
        if (!e.has(Jk.uriList)) {
            const r = await this._clipboardService.readResources();
            if (i.isCancellationRequested) return;
            r.length && e.append(Jk.uriList, Coi(wHe.create(r)));
        }
    }
    async getPasteEdits(t, e, n, i, r, s) {
        const o = new Nt, a = await yx(Promise.all(t.map(async (c)=>{
            try {
                const u = await c.provideDocumentPasteEdits?.(n, i, e, r, s);
                if (o.isDisposed) {
                    u?.dispose();
                    return;
                }
                return u && o.add(u), u?.edits?.map((d)=>({
                        ...d,
                        provider: c
                    }));
            } catch (u) {
                Ya(u) || console.error(u);
                return;
            }
        })), s), l = Mm(a ?? []).flat().filter((c)=>!r.only || r.only.contains(c.kind));
        return new Uzd(Bzd(l), o);
    }
    async applyDefaultPasteHandler(t, e, n, i) {
        const s = await (t.get(Jk.text) ?? t.get("text"))?.asString() ?? "";
        if (n.isCancellationRequested) return;
        const o = {
            clipboardEvent: i,
            text: s,
            pasteOnNewLine: e?.defaultPastePayload.pasteOnNewLine ?? !1,
            multicursorText: e?.defaultPastePayload.multicursorText ?? null,
            mode: null
        };
        this._editor.trigger("keyboard", "paste", o);
    }
    isSupportedPasteProvider(t, e, n) {
        return t.pasteMimeTypes?.some((i)=>e.matches(i)) ? !n || this.providerMatchesPreference(t, n) : !1;
    }
    providerMatchesPreference(t, e) {
        return "only" in e ? t.providedPasteEditKinds.some((n)=>e.only.contains(n)) : "preferences" in e ? e.preferences.some((n)=>e.preferences.some((i)=>i.contains(n))) : t.id === e.providerId;
    }
    getInitialActiveEditIndex(t, e) {
        const n = this._configService.getValue(mEr, {
            resource: t.uri
        });
        for (const i of Array.isArray(n) ? n : []){
            const r = new DC(i), s = e.findIndex((o)=>r.contains(o.kind));
            if (s >= 0) return s;
        }
        return 0;
    }
}, C4.ID = "editor.contrib.copyPasteActionController", C4 = Re([
    F(1, dn),
    F(2, x5e),
    F(3, hf),
    F(4, nr),
    F(5, yi),
    F(6, Nd),
    F(7, Cl),
    F(8, B1),
    F(9, ehe),
    F(10, Z_)
], C4);

}
