import { Pku, hcv, pcv } from "./De_3.js";
import { Cl, He, Im, Se, cn, iy, ns, rn, si } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { dr } from "./arrays.js";
import { ac, bn } from "./async.js";
import { Ar, Eo, Ji } from "./cancellation.js";
import { YFt, i_n } from "./clickLinkGesture.js";
import { tc } from "./colorRegistry.js";
import { $n, ki, vi } from "./commands.js";
import { awe, en } from "./dom_2.js";
import { Dv, hR } from "./editOperation.js";
import { BLc, FLc, ILc, NLc, OLc, Vfi, jfi } from "./editorColors.js";
import { hes, jOt } from "./editorDom.js";
import { dA, m1 } from "./editorOptions.js";
import { Pn } from "./extensions.js";
import { Jis, nrs, trs } from "./inlayHints.js";
import { Oku } from "./inlayHintsLocations.js";
import { Ze, _t } from "./instantiation.js";
import { TJ, nfe } from "./languageFeatureDebounce.js";
import { Jc, kh } from "./languageFeatures.js";
import { Gvi, Hvi, Wp } from "./languages.js";
import { ag, oc } from "./map.js";
import { Cb, lW } from "./model_2.js";
import { di, ji, pi } from "./notification.js";
import { VS, mn, nu, vn } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Nl, bc } from "./resolverService.js";
import { Zpt, nRe } from "./stableEditorScroll.js";
import { Mv, NOt } from "./textModel.js";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Ee, Qt } from "./uri.js";
var Fku, V$s, G9i, Bku, Uku, yse;
export { Bku, Fku, G9i, Uku, V$s, yse };
var __wakaru_j$s_initialized = false;
export function j$s() {
if (__wakaru_j$s_initialized) return;
__wakaru_j$s_initialized = true;
"use strict";
x(), en(), dr(), bn(), Ar(), si(), Se(), oc(), gr(), Qt(), jOt(), Zpt(), m1(), hR(), qi(), Wp(), Cb(), Mv(), nfe(), kh(), Nl(), i_n(), nrs(), Oku(), vi(), Pn(), Ze(), ji(), tc(), as(), Fku = class dAa {
    constructor(){
        this._entries = new ag(50);
    }
    get(t) {
        const n = dAa._key(t);
        return this._entries.get(n);
    }
    set(t, n) {
        const i = dAa._key(t);
        this._entries.set(i, n);
    }
    static _key(t) {
        return `${t.uri.toString()}/${t.getVersionId()}`;
    }
}, V$s = vn("IInlayHintsCache"), mn(V$s, Fku, 1), G9i = class {
    constructor(e, t){
        this.item = e, this.index = t;
    }
    get part() {
        const e = this.item.hint.label;
        return typeof e == "string" ? {
            label: e
        } : e[this.index];
    }
}, Bku = class {
    constructor(e, t){
        this.part = e, this.hasTriggerModifier = t;
    }
}, Uku = class {
    constructor(){
        this._store = new cn, this._tokenSource = new Eo;
    }
    dispose() {
        this._store.dispose(), this._tokenSource.dispose(!0);
    }
    cancel() {
        this._tokenSource.cancel();
    }
    reset() {
        this._tokenSource.dispose(!0), this._tokenSource = new Eo;
        const e = new He;
        return this._store.value = e, {
            store: e,
            token: this._tokenSource.token
        };
    }
}, yse = class {
    constructor(e, t, n, i, r, s, o){
        this._editor = e, this._languageFeaturesService = t, this._inlayHintsCache = i, this._commandService = r, this._notificationService = s, this._instaService = o, this._disposables = new He, this._sessionDisposables = new He, this._decorationsMetadata = new Map, this._ruleFactory = new hes(this._editor), this._activeRenderMode = 0, this._debounceInfo = n.for(t.inlayHintsProvider, "InlayHint", {
            min: 25
        }), this._disposables.add(t.inlayHintsProvider.onDidChange(()=>this._update())), this._disposables.add(e.onDidChangeModel(()=>this._update())), this._disposables.add(e.onDidChangeModelLanguage(()=>this._update())), this._disposables.add(e.onDidChangeConfiguration((a)=>{
            a.hasChanged(146) && this._update();
        })), this._update();
    }
    static get(e) {
        return e.getContribution(yse.ID) ?? void 0;
    }
    dispose() {
        this._sessionDisposables.dispose(), this._removeAllDecorations(), this._disposables.dispose();
    }
    _update() {
        this._sessionDisposables.clear(), this._removeAllDecorations();
        const e = this._editor.getOption(146);
        if (e.enabled === "off") return;
        const t = this._editor.getModel();
        if (!t || !this._languageFeaturesService.inlayHintsProvider.has(t)) return;
        if (e.enabled === "on") this._activeRenderMode = 0;
        else {
            let a, c;
            e.enabled === "onUnlessPressed" ? (a = 0, c = 1) : (a = 1, c = 0), this._activeRenderMode = a, this._sessionDisposables.add(awe.getInstance().event((l)=>{
                if (!this._editor.hasModel()) return;
                const u = l.altKey && l.ctrlKey && !(l.shiftKey || l.metaKey) ? c : a;
                if (u !== this._activeRenderMode) {
                    this._activeRenderMode = u;
                    const h = this._editor.getModel(), p = this._copyInlayHintsWithCurrentAnchor(h);
                    this._updateHintsDecorators([
                        h.getFullModelRange()
                    ], p), s.schedule(0);
                }
            }));
        }
        const n = this._inlayHintsCache.get(t);
        n && this._updateHintsDecorators([
            t.getFullModelRange()
        ], n), this._sessionDisposables.add(rn(()=>{
            t.isDisposed() || this._cacheHintsForFastRestore(t);
        }));
        const i = new Set, r = this._sessionDisposables.add(new Uku);
        this._sessionDisposables.add(t.onWillDispose(()=>r.cancel()));
        const s = new ac(async ()=>{
            const a = Date.now(), { store: c, token: l } = r.reset();
            try {
                const u = await trs.create(this._languageFeaturesService.inlayHintsProvider, t, this._getHintsRanges(), l);
                if (s.delay = this._debounceInfo.update(t, Date.now() - a), l.isCancellationRequested) {
                    u.dispose();
                    return;
                }
                for (const h of u.provider)typeof h.onDidChangeInlayHints == "function" && !i.has(h) && (i.add(h), this._sessionDisposables.add(h.onDidChangeInlayHints(()=>{
                    s.isScheduled() || s.schedule();
                })));
                c.add(u), this._updateHintsDecorators(u.ranges, u.items), this._cacheHintsForFastRestore(t);
            } catch (u) {
                ns(u);
            }
        }, this._debounceInfo.get(t));
        this._sessionDisposables.add(s), s.schedule(0), this._sessionDisposables.add(this._editor.onDidScrollChange((a)=>{
            (a.scrollTopChanged || !s.isScheduled()) && s.schedule();
        }));
        const o = this._sessionDisposables.add(new cn);
        this._sessionDisposables.add(this._editor.onDidChangeModelContent((a)=>{
            r.cancel();
            const c = Math.max(s.delay, 800);
            this._cursorInfo = {
                position: this._editor.getPosition(),
                notEarlierThan: Date.now() + c
            }, o.value = Cl(()=>s.schedule(0), c), s.schedule();
        })), this._sessionDisposables.add(this._editor.onDidChangeConfiguration((a)=>{
            a.hasChanged(146) && s.schedule();
        })), this._sessionDisposables.add(this._installDblClickGesture(()=>s.schedule(0))), this._sessionDisposables.add(this._installLinkGesture()), this._sessionDisposables.add(this._installContextMenu());
    }
    _installLinkGesture() {
        const e = new He, t = e.add(new YFt(this._editor)), n = new He;
        return e.add(n), e.add(t.onMouseMoveOrRelevantKeyDown((i)=>{
            const [r] = i, s = this._getInlayHintLabelPart(r), o = this._editor.getModel();
            if (!s || !o) {
                n.clear();
                return;
            }
            const a = new Eo;
            n.add(rn(()=>a.dispose(!0))), s.item.resolve(a.token), this._activeInlayHintPart = s.part.command || s.part.location ? new Bku(s, r.hasTriggerModifier) : void 0;
            const c = o.validatePosition(s.item.hint.position).lineNumber, l = new dt(c, 1, c, o.getLineMaxColumn(c)), u = this._getInlineHintsForRange(l);
            this._updateHintsDecorators([
                l
            ], u), n.add(rn(()=>{
                this._activeInlayHintPart = void 0, this._updateHintsDecorators([
                    l
                ], u);
            }));
        })), e.add(t.onCancel(()=>n.clear())), e.add(t.onExecute(async (i)=>{
            const r = this._getInlayHintLabelPart(i);
            if (r) {
                const s = r.part;
                s.location ? this._instaService.invokeFunction(Pku, i, this._editor, s.location) : Hvi.is(s.command) && await this._invokeCommand(s.command, r.item);
            }
        })), e;
    }
    _getInlineHintsForRange(e) {
        const t = new Set;
        for (const n of this._decorationsMetadata.values())e.containsRange(n.item.anchor.range) && t.add(n.item);
        return Array.from(t);
    }
    _installDblClickGesture(e) {
        return this._editor.onMouseUp(async (t)=>{
            if (t.event.detail !== 2) return;
            const n = this._getInlayHintLabelPart(t);
            if (n && (t.event.preventDefault(), await n.item.resolve(Ji.None), iy(n.item.hint.textEdits))) {
                const i = n.item.hint.textEdits.map((r)=>Dv.replace(dt.lift(r.range), r.text));
                this._editor.executeEdits("inlayHint.default", i), e();
            }
        });
    }
    _installContextMenu() {
        return this._editor.onContextMenu(async (e)=>{
            if (!nu(e.event.target)) return;
            const t = this._getInlayHintLabelPart(e);
            t && await this._instaService.invokeFunction(hcv, this._editor, e.event.target, t);
        });
    }
    _getInlayHintLabelPart(e) {
        if (e.target.type !== 6) return;
        const t = e.target.detail.injectedText?.options;
        if (t instanceof NOt && t?.attachedData instanceof G9i) return t.attachedData;
    }
    async _invokeCommand(e, t) {
        try {
            await this._commandService.executeCommand(e.id, ...e.arguments ?? []);
        } catch (n) {
            this._notificationService.notify({
                severity: pi.Error,
                source: t.provider.displayName,
                message: n
            });
        }
    }
    _cacheHintsForFastRestore(e) {
        const t = this._copyInlayHintsWithCurrentAnchor(e);
        this._inlayHintsCache.set(e, t);
    }
    _copyInlayHintsWithCurrentAnchor(e) {
        const t = new Map;
        for (const [n, i] of this._decorationsMetadata){
            if (t.has(i.item)) continue;
            const r = e.getDecorationRange(n);
            if (r) {
                const s = new Jis(r, i.item.anchor.direction), o = i.item.with({
                    anchor: s
                });
                t.set(i.item, o);
            }
        }
        return Array.from(t.values());
    }
    _getHintsRanges() {
        const t = this._editor.getModel(), n = this._editor.getVisibleRangesPlusViewportAboveBelow(), i = [];
        for (const r of n.sort(dt.compareRangesUsingStarts)){
            const s = t.validateRange(new dt(r.startLineNumber - 30, r.startColumn, r.endLineNumber + 30, r.endColumn));
            i.length === 0 || !dt.areIntersectingOrTouching(i[i.length - 1], s) ? i.push(s) : i[i.length - 1] = dt.plusRange(i[i.length - 1], s);
        }
        return i;
    }
    _updateHintsDecorators(e, t) {
        const n = new Map;
        if (this._cursorInfo && this._cursorInfo.notEarlierThan > Date.now() && e.some((v)=>v.containsPosition(this._cursorInfo.position))) {
            const { position: v } = this._cursorInfo;
            this._cursorInfo = void 0;
            const b = new Map;
            for (const A of this._editor.getLineDecorations(v.lineNumber) ?? []){
                const R = this._decorationsMetadata.get(A.id);
                if (A.range.startColumn > v.column) continue;
                const D = R?.decoration.options[R.item.anchor.direction];
                if (D && D.attachedData !== yse._whitespaceData) {
                    const P = b.get(R.item) ?? 0;
                    b.set(R.item, P + D.content.length);
                }
            }
            const y = t.filter((A)=>A.anchor.range.startLineNumber === v.lineNumber && A.anchor.range.endColumn <= v.column), T = Array.from(b.values());
            let E;
            for(;;){
                const A = y.shift(), R = T.shift();
                if (!R && !A) break;
                if (A) n.set(A, R ?? 0), E = A;
                else if (E && R) {
                    let D = n.get(E);
                    D += R, D += T.reduce((P, N)=>P + N, 0), T.length = 0;
                    break;
                }
            }
        }
        const i = [], r = (v, b, y, T, E)=>{
            const A = {
                content: y,
                inlineClassNameAffectsLetterSpacing: !0,
                inlineClassName: b.className,
                cursorStops: T,
                attachedData: E
            };
            i.push({
                item: v,
                classNameRef: b,
                decoration: {
                    range: v.anchor.range,
                    options: {
                        description: "InlayHint",
                        showIfCollapsed: v.anchor.range.isEmpty(),
                        collapseOnReplaceEdit: !v.anchor.range.isEmpty(),
                        stickiness: 0,
                        [v.anchor.direction]: this._activeRenderMode === 0 ? A : void 0
                    }
                }
            });
        }, s = (v, b)=>{
            const y = this._ruleFactory.createClassNameRef({
                width: `${o / 3 | 0}px`,
                display: "inline-block"
            });
            r(v, y, "\u200A", b ? lW.Right : lW.None, yse._whitespaceData);
        }, { fontSize: o, fontFamily: a, padding: c, isUniform: l } = this._getLayoutInfo(), u = this._editor.getOption(146).maximumLength, h = "--code-editorInlayHintsFontFamily";
        this._editor.getContainerDomNode().style.setProperty(h, a);
        let p = {
            line: 0,
            totalLen: 0
        };
        for(let v = 0; v < t.length; v++){
            const b = t[v];
            if (p.line !== b.anchor.range.startLineNumber && (p = {
                line: b.anchor.range.startLineNumber,
                totalLen: 0
            }), u && p.totalLen > u) continue;
            b.hint.paddingLeft && s(b, !1);
            const y = typeof b.hint.label == "string" ? [
                {
                    label: b.hint.label
                }
            ] : b.hint.label, T = n.get(b);
            let E = 0;
            for(let A = 0; A < y.length; A++){
                const R = y[A], D = A === 0, P = A === y.length - 1, N = {
                    fontSize: `${o}px`,
                    fontFamily: `var(${h}), ${dA.fontFamily}`,
                    verticalAlign: l ? "baseline" : "middle",
                    unicodeBidi: "isolate"
                };
                iy(b.hint.textEdits) && (N.cursor = "default"), this._fillInColors(N, b.hint), (R.command || R.location) && this._activeInlayHintPart?.part.item === b && this._activeInlayHintPart.part.index === A && (N.textDecoration = "underline", this._activeInlayHintPart.hasTriggerModifier && (N.color = VS(ILc), N.cursor = "pointer"));
                let O = R.label;
                p.totalLen += O.length;
                let F = !1;
                const H = u !== 0 ? p.totalLen - u : 0;
                if (H > 0 && (O = O.slice(0, -H) + "\u2026", F = !0), E += O.length, T !== void 0) {
                    const $ = E - T;
                    $ >= 0 && (E -= $, O = O.slice(0, -(1 + $)) + "\u2026", F = !0);
                }
                if (c && (D && (P || F) ? (N.padding = `1px ${Math.max(1, o / 4) | 0}px`, N.borderRadius = `${o / 4 | 0}px`) : D ? (N.padding = `1px 0 1px ${Math.max(1, o / 4) | 0}px`, N.borderRadius = `${o / 4 | 0}px 0 0 ${o / 4 | 0}px`) : P || F ? (N.padding = `1px ${Math.max(1, o / 4) | 0}px 1px 0`, N.borderRadius = `0 ${o / 4 | 0}px ${o / 4 | 0}px 0`) : N.padding = "1px 0 1px 0"), r(b, this._ruleFactory.createClassNameRef(N), pcv(O), P && !b.hint.paddingRight ? lW.Right : lW.None, new G9i(b, A)), F) break;
            }
            if (T !== void 0 && E < T) {
                const A = T - E;
                r(b, this._ruleFactory.createClassNameRef({}), "\u200A".repeat(A), lW.None);
            }
            if (b.hint.paddingRight && s(b, !0), i.length > yse._MAX_DECORATORS) break;
        }
        const g = [];
        for (const [v, b] of this._decorationsMetadata){
            const y = this._editor.getModel()?.getDecorationRange(v);
            y && e.some((T)=>T.containsRange(y)) && (g.push(v), b.classNameRef.dispose(), this._decorationsMetadata.delete(v));
        }
        const f = nRe.capture(this._editor);
        this._editor.changeDecorations((v)=>{
            const b = v.deltaDecorations(g, i.map((y)=>y.decoration));
            for(let y = 0; y < b.length; y++){
                const T = i[y];
                this._decorationsMetadata.set(b[y], T);
            }
        }), f.restore(this._editor);
    }
    _fillInColors(e, t) {
        t.kind === Gvi.Parameter ? (e.backgroundColor = VS(BLc), e.color = VS(FLc)) : t.kind === Gvi.Type ? (e.backgroundColor = VS(OLc), e.color = VS(NLc)) : (e.backgroundColor = VS(jfi), e.color = VS(Vfi));
    }
    _getLayoutInfo() {
        const e = this._editor.getOption(146), t = e.padding, n = this._editor.getOption(54), i = this._editor.getOption(51);
        let r = e.fontSize;
        (!r || r < 5 || r > n) && (r = n);
        const s = e.fontFamily || i;
        return {
            fontSize: r,
            fontFamily: s,
            padding: t,
            isUniform: !t && s === i && r === n
        };
    }
    _removeAllDecorations() {
        this._editor.removeDecorations(Array.from(this._decorationsMetadata.keys()));
        for (const e of this._decorationsMetadata.values())e.classNameRef.dispose();
        this._decorationsMetadata.clear();
    }
    getInlayHintsForLine(e) {
        if (!this._editor.hasModel()) return [];
        const t = new Set, n = [];
        for (const i of this._editor.getLineDecorations(e)){
            const r = this._decorationsMetadata.get(i.id);
            r && !t.has(r.item.hint) && (t.add(r.item.hint), n.push(r.item));
        }
        return n;
    }
}, yse.ID = "editor.contrib.InlayHints", yse._MAX_DECORATORS = 1500, yse._whitespaceData = {}, yse = ie([
    C(1, Jc),
    C(2, TJ),
    C(3, V$s),
    C(4, $n),
    C(5, di),
    C(6, _t)
], yse), ki.registerCommand("_executeInlayHintProvider", async (e, ...t)=>{
    const [n, i] = t;
    Im(Ee.isUri(n)), Im(dt.isIRange(i));
    const { inlayHintsProvider: r } = e.get(Jc), s = await e.get(bc).createModelReference(n);
    try {
        const o = await trs.create(r, s.object.textEditorModel, [
            dt.lift(i)
        ], Ji.None), a = o.items.map((c)=>c.hint);
        return setTimeout(()=>o.dispose(), 0), a;
    } finally{
        s.dispose();
    }
});

}
