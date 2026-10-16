import { CC, Ec, Ei, Kv, Nt, Pn, Qe, Vn, xr } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { bo } from "./arrays.js";
import { Yu, qn } from "./async.js";
import { El, Xs, yo } from "./cancellation.js";
import { DEr, Woi } from "./clickLinkGesture.js";
import { Ap } from "./colorRegistry.js";
import { hs, nr, rs } from "./commands.js";
import { Gve, Hn } from "./dom_2.js";
import { Oj, Tk } from "./editOperation.js";
import { B6d, Dwr, F6d, Nwr, R6d, U6d, j6d } from "./editorColors.js";
import { Cfn, gHo } from "./editorDom.js";
import { q3, s2 } from "./editorOptions.js";
import { Rn } from "./extensions.js";
import { Azo, Ezo, xzo } from "./inlayHints.js";
import { xPp } from "./inlayHintsLocations.js";
import { It, dn } from "./instantiation.js";
import { DI1, NI1, TPp } from "./ipa.js";
import { Twe, xHe } from "./languageFeatureDebounce.js";
import { Dg, Nd } from "./languageFeatures.js";
import { E0r, I0r, Iy } from "./languages.js";
import { du, kv } from "./map.js";
import { J0, Yve } from "./model_2.js";
import { Ks, Wr, Yn } from "./notification.js";
import { Qs, qt } from "./range.js";
import { Em, Rh } from "./resolverService.js";
import { Ufn, tnt } from "./stableEditorScroll.js";
import { PC, gfn } from "./textModel.js";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { $u, OI } from "./ze.js";
var APp, n3a, lWr, RPp, PPp, hbe;
export { APp, PPp, RPp, hbe, lWr, n3a };
var __wakaru_i3a_initialized = false;
export function i3a() {
if (__wakaru_i3a_initialized) return;
__wakaru_i3a_initialized = true;
"use strict";
E(), Hn(), bo(), qn(), yo(), Ei(), Qe(), du(), To(), fn(), Cfn(), Ufn(), s2(), Oj(), Qs(), Iy(), J0(), PC(), xHe(), Dg(), Em(), DEr(), Azo(), xPp(), rs(), Rn(), It(), Ks(), Ap(), Dl(), APp = class YJc {
    constructor(){
        this._entries = new kv(50);
    }
    get(e) {
        const n = YJc._key(e);
        return this._entries.get(n);
    }
    set(e, n) {
        const i = YJc._key(e);
        this._entries.set(i, n);
    }
    static _key(e) {
        return `${e.uri.toString()}/${e.getVersionId()}`;
    }
}, n3a = jn("IInlayHintsCache"), bn(n3a, APp, 1), lWr = class {
    constructor(t, e){
        this.item = t, this.index = e;
    }
    get part() {
        const t = this.item.hint.label;
        return typeof t == "string" ? {
            label: t
        } : t[this.index];
    }
}, RPp = class {
    constructor(t, e){
        this.part = t, this.hasTriggerModifier = e;
    }
}, PPp = class {
    constructor(){
        this._store = new Vn, this._tokenSource = new El;
    }
    dispose() {
        this._store.dispose(), this._tokenSource.dispose(!0);
    }
    cancel() {
        this._tokenSource.cancel();
    }
    reset() {
        this._tokenSource.dispose(!0), this._tokenSource = new El;
        const t = new Nt;
        return this._store.value = t, {
            store: t,
            token: this._tokenSource.token
        };
    }
}, hbe = class {
    constructor(t, e, n, i, r, s, o){
        this._editor = t, this._languageFeaturesService = e, this._inlayHintsCache = i, this._commandService = r, this._notificationService = s, this._instaService = o, this._disposables = new Nt, this._sessionDisposables = new Nt, this._decorationsMetadata = new Map, this._ruleFactory = new gHo(this._editor), this._activeRenderMode = 0, this._debounceInfo = n.for(e.inlayHintsProvider, "InlayHint", {
            min: 25
        }), this._disposables.add(e.inlayHintsProvider.onDidChange(()=>this._update())), this._disposables.add(t.onDidChangeModel(()=>this._update())), this._disposables.add(t.onDidChangeModelLanguage(()=>this._update())), this._disposables.add(t.onDidChangeConfiguration((a)=>{
            a.hasChanged(146) && this._update();
        })), this._update();
    }
    static get(t) {
        return t.getContribution(hbe.ID) ?? void 0;
    }
    dispose() {
        this._sessionDisposables.dispose(), this._removeAllDecorations(), this._disposables.dispose();
    }
    _update() {
        this._sessionDisposables.clear(), this._removeAllDecorations();
        const t = this._editor.getOption(146);
        if (t.enabled === "off") return;
        const e = this._editor.getModel();
        if (!e || !this._languageFeaturesService.inlayHintsProvider.has(e)) return;
        if (t.enabled === "on") this._activeRenderMode = 0;
        else {
            let a, l;
            t.enabled === "onUnlessPressed" ? (a = 0, l = 1) : (a = 1, l = 0), this._activeRenderMode = a, this._sessionDisposables.add(Gve.getInstance().event((c)=>{
                if (!this._editor.hasModel()) return;
                const u = c.altKey && c.ctrlKey && !(c.shiftKey || c.metaKey) ? l : a;
                if (u !== this._activeRenderMode) {
                    this._activeRenderMode = u;
                    const d = this._editor.getModel(), h = this._copyInlayHintsWithCurrentAnchor(d);
                    this._updateHintsDecorators([
                        d.getFullModelRange()
                    ], h), s.schedule(0);
                }
            }));
        }
        const n = this._inlayHintsCache.get(e);
        n && this._updateHintsDecorators([
            e.getFullModelRange()
        ], n), this._sessionDisposables.add(Pn(()=>{
            e.isDisposed() || this._cacheHintsForFastRestore(e);
        }));
        const i = new Set, r = this._sessionDisposables.add(new PPp);
        this._sessionDisposables.add(e.onWillDispose(()=>r.cancel()));
        const s = new Yu(async ()=>{
            const a = Date.now(), { store: l, token: c } = r.reset();
            try {
                const u = await xzo.create(this._languageFeaturesService.inlayHintsProvider, e, this._getHintsRanges(), c);
                if (s.delay = this._debounceInfo.update(e, Date.now() - a), c.isCancellationRequested) {
                    u.dispose();
                    return;
                }
                for (const d of u.provider)typeof d.onDidChangeInlayHints == "function" && !i.has(d) && (i.add(d), this._sessionDisposables.add(d.onDidChangeInlayHints(()=>{
                    s.isScheduled() || s.schedule();
                })));
                l.add(u), this._updateHintsDecorators(u.ranges, u.items), this._cacheHintsForFastRestore(e);
            } catch (u) {
                xr(u);
            }
        }, this._debounceInfo.get(e));
        this._sessionDisposables.add(s), s.schedule(0), this._sessionDisposables.add(this._editor.onDidScrollChange((a)=>{
            (a.scrollTopChanged || !s.isScheduled()) && s.schedule();
        }));
        const o = this._sessionDisposables.add(new Vn);
        this._sessionDisposables.add(this._editor.onDidChangeModelContent((a)=>{
            r.cancel();
            const l = Math.max(s.delay, 800);
            this._cursorInfo = {
                position: this._editor.getPosition(),
                notEarlierThan: Date.now() + l
            }, o.value = Ec(()=>s.schedule(0), l), s.schedule();
        })), this._sessionDisposables.add(this._editor.onDidChangeConfiguration((a)=>{
            a.hasChanged(146) && s.schedule();
        })), this._sessionDisposables.add(this._installDblClickGesture(()=>s.schedule(0))), this._sessionDisposables.add(this._installLinkGesture()), this._sessionDisposables.add(this._installContextMenu());
    }
    _installLinkGesture() {
        const t = new Nt, e = t.add(new Woi(this._editor)), n = new Nt;
        return t.add(n), t.add(e.onMouseMoveOrRelevantKeyDown((i)=>{
            const [r] = i, s = this._getInlayHintLabelPart(r), o = this._editor.getModel();
            if (!s || !o) {
                n.clear();
                return;
            }
            const a = new El;
            n.add(Pn(()=>a.dispose(!0))), s.item.resolve(a.token), this._activeInlayHintPart = s.part.command || s.part.location ? new RPp(s, r.hasTriggerModifier) : void 0;
            const l = o.validatePosition(s.item.hint.position).lineNumber, c = new qt(l, 1, l, o.getLineMaxColumn(l)), u = this._getInlineHintsForRange(c);
            this._updateHintsDecorators([
                c
            ], u), n.add(Pn(()=>{
                this._activeInlayHintPart = void 0, this._updateHintsDecorators([
                    c
                ], u);
            }));
        })), t.add(e.onCancel(()=>n.clear())), t.add(e.onExecute(async (i)=>{
            const r = this._getInlayHintLabelPart(i);
            if (r) {
                const s = r.part;
                s.location ? this._instaService.invokeFunction(TPp, i, this._editor, s.location) : E0r.is(s.command) && await this._invokeCommand(s.command, r.item);
            }
        })), t;
    }
    _getInlineHintsForRange(t) {
        const e = new Set;
        for (const n of this._decorationsMetadata.values())t.containsRange(n.item.anchor.range) && e.add(n.item);
        return Array.from(e);
    }
    _installDblClickGesture(t) {
        return this._editor.onMouseUp(async (e)=>{
            if (e.event.detail !== 2) return;
            const n = this._getInlayHintLabelPart(e);
            if (n && (e.event.preventDefault(), await n.item.resolve(Xs.None), CC(n.item.hint.textEdits))) {
                const i = n.item.hint.textEdits.map((r)=>Tk.replace(qt.lift(r.range), r.text));
                this._editor.executeEdits("inlayHint.default", i), t();
            }
        });
    }
    _installContextMenu() {
        return this._editor.onContextMenu(async (t)=>{
            if (!$u(t.event.target)) return;
            const e = this._getInlayHintLabelPart(t);
            e && await this._instaService.invokeFunction(DI1, this._editor, t.event.target, e);
        });
    }
    _getInlayHintLabelPart(t) {
        if (t.target.type !== 6) return;
        const e = t.target.detail.injectedText?.options;
        if (e instanceof gfn && e?.attachedData instanceof lWr) return e.attachedData;
    }
    async _invokeCommand(t, e) {
        try {
            await this._commandService.executeCommand(t.id, ...t.arguments ?? []);
        } catch (n) {
            this._notificationService.notify({
                severity: Yn.Error,
                source: e.provider.displayName,
                message: n
            });
        }
    }
    _cacheHintsForFastRestore(t) {
        const e = this._copyInlayHintsWithCurrentAnchor(t);
        this._inlayHintsCache.set(t, e);
    }
    _copyInlayHintsWithCurrentAnchor(t) {
        const e = new Map;
        for (const [n, i] of this._decorationsMetadata){
            if (e.has(i.item)) continue;
            const r = t.getDecorationRange(n);
            if (r) {
                const s = new Ezo(r, i.item.anchor.direction), o = i.item.with({
                    anchor: s
                });
                e.set(i.item, o);
            }
        }
        return Array.from(e.values());
    }
    _getHintsRanges() {
        const e = this._editor.getModel(), n = this._editor.getVisibleRangesPlusViewportAboveBelow(), i = [];
        for (const r of n.sort(qt.compareRangesUsingStarts)){
            const s = e.validateRange(new qt(r.startLineNumber - 30, r.startColumn, r.endLineNumber + 30, r.endColumn));
            i.length === 0 || !qt.areIntersectingOrTouching(i[i.length - 1], s) ? i.push(s) : i[i.length - 1] = qt.plusRange(i[i.length - 1], s);
        }
        return i;
    }
    _updateHintsDecorators(t, e) {
        const n = new Map;
        if (this._cursorInfo && this._cursorInfo.notEarlierThan > Date.now() && t.some((f)=>f.containsPosition(this._cursorInfo.position))) {
            const { position: f } = this._cursorInfo;
            this._cursorInfo = void 0;
            const _ = new Map;
            for (const k of this._editor.getLineDecorations(f.lineNumber) ?? []){
                const C = this._decorationsMetadata.get(k.id);
                if (k.range.startColumn > f.column) continue;
                const T = C?.decoration.options[C.item.anchor.direction];
                if (T && T.attachedData !== hbe._whitespaceData) {
                    const I = _.get(C.item) ?? 0;
                    _.set(C.item, I + T.content.length);
                }
            }
            const b = e.filter((k)=>k.anchor.range.startLineNumber === f.lineNumber && k.anchor.range.endColumn <= f.column), y = Array.from(_.values());
            let S;
            for(;;){
                const k = b.shift(), C = y.shift();
                if (!C && !k) break;
                if (k) n.set(k, C ?? 0), S = k;
                else if (S && C) {
                    let T = n.get(S);
                    T += C, T += y.reduce((I, A)=>I + A, 0), y.length = 0;
                    break;
                }
            }
        }
        const i = [], r = (f, _, b, y, S)=>{
            const k = {
                content: b,
                inlineClassNameAffectsLetterSpacing: !0,
                inlineClassName: _.className,
                cursorStops: y,
                attachedData: S
            };
            i.push({
                item: f,
                classNameRef: _,
                decoration: {
                    range: f.anchor.range,
                    options: {
                        description: "InlayHint",
                        showIfCollapsed: f.anchor.range.isEmpty(),
                        collapseOnReplaceEdit: !f.anchor.range.isEmpty(),
                        stickiness: 0,
                        [f.anchor.direction]: this._activeRenderMode === 0 ? k : void 0
                    }
                }
            });
        }, s = (f, _)=>{
            const b = this._ruleFactory.createClassNameRef({
                width: `${o / 3 | 0}px`,
                display: "inline-block"
            });
            r(f, b, "\u200A", _ ? Yve.Right : Yve.None, hbe._whitespaceData);
        }, { fontSize: o, fontFamily: a, padding: l, isUniform: c } = this._getLayoutInfo(), u = this._editor.getOption(146).maximumLength, d = "--code-editorInlayHintsFontFamily";
        this._editor.getContainerDomNode().style.setProperty(d, a);
        let h = {
            line: 0,
            totalLen: 0
        };
        for(let f = 0; f < e.length; f++){
            const _ = e[f];
            if (h.line !== _.anchor.range.startLineNumber && (h = {
                line: _.anchor.range.startLineNumber,
                totalLen: 0
            }), u && h.totalLen > u) continue;
            _.hint.paddingLeft && s(_, !1);
            const b = typeof _.hint.label == "string" ? [
                {
                    label: _.hint.label
                }
            ] : _.hint.label, y = n.get(_);
            let S = 0;
            for(let k = 0; k < b.length; k++){
                const C = b[k], T = k === 0, I = k === b.length - 1, A = {
                    fontSize: `${o}px`,
                    fontFamily: `var(${d}), ${q3.fontFamily}`,
                    verticalAlign: c ? "baseline" : "middle",
                    unicodeBidi: "isolate"
                };
                CC(_.hint.textEdits) && (A.cursor = "default"), this._fillInColors(A, _.hint), (C.command || C.location) && this._activeInlayHintPart?.part.item === _ && this._activeInlayHintPart.part.index === k && (A.textDecoration = "underline", this._activeInlayHintPart.hasTriggerModifier && (A.color = OI(R6d), A.cursor = "pointer"));
                let P = C.label;
                h.totalLen += P.length;
                let M = !1;
                const O = u !== 0 ? h.totalLen - u : 0;
                if (O > 0 && (P = P.slice(0, -O) + "\u2026", M = !0), S += P.length, y !== void 0) {
                    const N = S - y;
                    N >= 0 && (S -= N, P = P.slice(0, -(1 + N)) + "\u2026", M = !0);
                }
                if (l && (T && (I || M) ? (A.padding = `1px ${Math.max(1, o / 4) | 0}px`, A.borderRadius = `${o / 4 | 0}px`) : T ? (A.padding = `1px 0 1px ${Math.max(1, o / 4) | 0}px`, A.borderRadius = `${o / 4 | 0}px 0 0 ${o / 4 | 0}px`) : I || M ? (A.padding = `1px ${Math.max(1, o / 4) | 0}px 1px 0`, A.borderRadius = `0 ${o / 4 | 0}px ${o / 4 | 0}px 0`) : A.padding = "1px 0 1px 0"), r(_, this._ruleFactory.createClassNameRef(A), NI1(P), I && !_.hint.paddingRight ? Yve.Right : Yve.None, new lWr(_, k)), M) break;
            }
            if (y !== void 0 && S < y) {
                const k = y - S;
                r(_, this._ruleFactory.createClassNameRef({}), "\u200A".repeat(k), Yve.None);
            }
            if (_.hint.paddingRight && s(_, !0), i.length > hbe._MAX_DECORATORS) break;
        }
        const p = [];
        for (const [f, _] of this._decorationsMetadata){
            const b = this._editor.getModel()?.getDecorationRange(f);
            b && t.some((y)=>y.containsRange(b)) && (p.push(f), _.classNameRef.dispose(), this._decorationsMetadata.delete(f));
        }
        const g = tnt.capture(this._editor);
        this._editor.changeDecorations((f)=>{
            const _ = f.deltaDecorations(p, i.map((b)=>b.decoration));
            for(let b = 0; b < _.length; b++){
                const y = i[b];
                this._decorationsMetadata.set(_[b], y);
            }
        }), g.restore(this._editor);
    }
    _fillInColors(t, e) {
        e.kind === I0r.Parameter ? (t.backgroundColor = OI(j6d), t.color = OI(U6d)) : e.kind === I0r.Type ? (t.backgroundColor = OI(B6d), t.color = OI(F6d)) : (t.backgroundColor = OI(Nwr), t.color = OI(Dwr));
    }
    _getLayoutInfo() {
        const t = this._editor.getOption(146), e = t.padding, n = this._editor.getOption(54), i = this._editor.getOption(51);
        let r = t.fontSize;
        (!r || r < 5 || r > n) && (r = n);
        const s = t.fontFamily || i;
        return {
            fontSize: r,
            fontFamily: s,
            padding: e,
            isUniform: !e && s === i && r === n
        };
    }
    _removeAllDecorations() {
        this._editor.removeDecorations(Array.from(this._decorationsMetadata.keys()));
        for (const t of this._decorationsMetadata.values())t.classNameRef.dispose();
        this._decorationsMetadata.clear();
    }
    getInlayHintsForLine(t) {
        if (!this._editor.hasModel()) return [];
        const e = new Set, n = [];
        for (const i of this._editor.getLineDecorations(t)){
            const r = this._decorationsMetadata.get(i.id);
            r && !e.has(r.item.hint) && (e.add(r.item.hint), n.push(r.item));
        }
        return n;
    }
}, hbe.ID = "editor.contrib.InlayHints", hbe._MAX_DECORATORS = 1500, hbe._whitespaceData = {}, hbe = Re([
    F(1, Nd),
    F(2, Twe),
    F(3, n3a),
    F(4, nr),
    F(5, Wr),
    F(6, dn)
], hbe), hs.registerCommand("_executeInlayHintProvider", async (t, ...e)=>{
    const [n, i] = e;
    Kv(rt.isUri(n)), Kv(qt.isIRange(i));
    const { inlayHintsProvider: r } = t.get(Nd), s = await t.get(Rh).createModelReference(n);
    try {
        const o = await xzo.create(r, s.object.textEditorModel, [
            qt.lift(i)
        ], Xs.None), a = o.items.map((l)=>l.hint);
        return setTimeout(()=>o.dispose(), 0), a;
    } finally{
        s.dispose();
    }
});

}
