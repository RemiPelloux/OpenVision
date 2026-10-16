import { EI, Fa, Nc, Qe, WXn } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Cw, ti } from "./charCode.js";
import { Oj, Tk } from "./editOperation.js";
import { Yp, qg } from "./label.js";
import { RD, fA } from "./languageConfigurationRegistry.js";
import { Qs, qt } from "./range.js";
import { Cy, bu } from "./selection.js";
import { A5e, Cwe, aEr, a_e, cne, xoi } from "./snippetParser.js";
import { cx1 } from "./snippetSession.css";
import { $3a, B3a, F3a, H3a, O3a, U3a, fyi, j3a, zMp } from "./snippetVariables.js";
import { Kg, PC } from "./textModel.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
var W3a, G3a, q3a, gbe;
export { G3a, W3a, gbe, q3a };
var __wakaru_VMp_initialized = false;
export function VMp() {
if (__wakaru_VMp_initialized) return;
__wakaru_VMp_initialized = true;
"use strict";
E(), bo(), Cw(), Qe(), Fa(), cx1(), Oj(), Qs(), Cy(), RD(), PC(), qg(), Sr(), A5e(), zMp(), W3a = class YZe {
    constructor(e, n, i){
        this._editor = e, this._snippet = n, this._snippetLineLeadingWhitespace = i, this._offset = -1, this._nestingLevel = 1, this._placeholderGroups = WXn(n.placeholders, a_e.compareByIndex), this._placeholderGroupsIdx = -1;
    }
    initialize(e) {
        this._offset = e.newPosition;
    }
    dispose() {
        this._placeholderDecorations && this._editor.removeDecorations([
            ...this._placeholderDecorations.values()
        ]), this._placeholderGroups.length = 0;
    }
    _initDecorations() {
        if (this._offset === -1) throw new Error("Snippet not initialized!");
        if (this._placeholderDecorations) return;
        this._placeholderDecorations = new Map;
        const e = this._editor.getModel();
        this._editor.changeDecorations((n)=>{
            for (const i of this._snippet.placeholders){
                const r = this._snippet.offset(i), s = this._snippet.fullLen(i), o = qt.fromPositions(e.getPositionAt(this._offset + r), e.getPositionAt(this._offset + r + s)), a = i.isFinalTabstop ? YZe._decor.inactiveFinal : YZe._decor.inactive, l = n.addDecoration(o, a);
                this._placeholderDecorations.set(i, l);
            }
        });
    }
    move(e) {
        if (!this._editor.hasModel()) return [];
        if (this._initDecorations(), this._placeholderGroupsIdx >= 0) {
            const r = [];
            for (const s of this._placeholderGroups[this._placeholderGroupsIdx])if (s.transform) {
                const o = this._placeholderDecorations.get(s), a = this._editor.getModel().getDecorationRange(o), l = this._editor.getModel().getValueInRange(a), c = s.transform.resolve(l).split(/\r\n|\r|\n/);
                for(let u = 1; u < c.length; u++)c[u] = this._editor.getModel().normalizeIndentation(this._snippetLineLeadingWhitespace + c[u]);
                r.push(Tk.replace(a, c.join(this._editor.getModel().getEOL())));
            }
            r.length > 0 && this._editor.executeEdits("snippet.placeholderTransform", r);
        }
        let n = !1;
        e === !0 && this._placeholderGroupsIdx < this._placeholderGroups.length - 1 ? (this._placeholderGroupsIdx += 1, n = !0) : e === !1 && this._placeholderGroupsIdx > 0 && (this._placeholderGroupsIdx -= 1, n = !0);
        const i = this._editor.getModel().changeDecorations((r)=>{
            const s = new Set, o = [];
            for (const a of this._placeholderGroups[this._placeholderGroupsIdx]){
                const l = this._placeholderDecorations.get(a), c = this._editor.getModel().getDecorationRange(l);
                o.push(new bu(c.startLineNumber, c.startColumn, c.endLineNumber, c.endColumn)), n = n && this._hasPlaceholderBeenCollapsed(a), r.changeDecorationOptions(l, a.isFinalTabstop ? YZe._decor.activeFinal : YZe._decor.active), s.add(a);
                for (const u of this._snippet.enclosingPlaceholders(a)){
                    const d = this._placeholderDecorations.get(u);
                    r.changeDecorationOptions(d, u.isFinalTabstop ? YZe._decor.activeFinal : YZe._decor.active), s.add(u);
                }
            }
            for (const [a, l] of this._placeholderDecorations)s.has(a) || r.changeDecorationOptions(l, a.isFinalTabstop ? YZe._decor.inactiveFinal : YZe._decor.inactive);
            return o;
        });
        return n ? this.move(e) : i ?? [];
    }
    _hasPlaceholderBeenCollapsed(e) {
        let n = e;
        for(; n;){
            if (n instanceof a_e) {
                const i = this._placeholderDecorations.get(n);
                if (this._editor.getModel().getDecorationRange(i).isEmpty() && n.toString().length > 0) return !0;
            }
            n = n.parent;
        }
        return !1;
    }
    get isAtFirstPlaceholder() {
        return this._placeholderGroupsIdx <= 0 || this._placeholderGroups.length === 0;
    }
    get isAtLastPlaceholder() {
        return this._placeholderGroupsIdx === this._placeholderGroups.length - 1;
    }
    get hasPlaceholder() {
        return this._snippet.placeholders.length > 0;
    }
    get isTrivialSnippet() {
        if (this._snippet.placeholders.length === 0) return !0;
        if (this._snippet.placeholders.length === 1) {
            const [e] = this._snippet.placeholders;
            if (e.isFinalTabstop && this._snippet.rightMostDescendant === e) return !0;
        }
        return !1;
    }
    computePossibleSelections() {
        const e = new Map;
        for (const n of this._placeholderGroups){
            let i;
            for (const r of n){
                if (r.isFinalTabstop) break;
                i || (i = [], e.set(r.index, i));
                const s = this._placeholderDecorations.get(r), o = this._editor.getModel().getDecorationRange(s);
                if (!o) {
                    e.delete(r.index);
                    break;
                }
                i.push(o);
            }
        }
        return e;
    }
    get activeChoice() {
        if (!this._placeholderDecorations) return;
        const e = this._placeholderGroups[this._placeholderGroupsIdx][0];
        if (!e?.choice) return;
        const n = this._placeholderDecorations.get(e);
        if (!n) return;
        const i = this._editor.getModel().getDecorationRange(n);
        if (i) return {
            range: i,
            choice: e.choice
        };
    }
    get hasChoice() {
        let e = !1;
        return this._snippet.walk((n)=>(e = n instanceof xoi, !e)), e;
    }
    merge(e) {
        const n = this._editor.getModel();
        this._nestingLevel *= 10, this._editor.changeDecorations((i)=>{
            for (const r of this._placeholderGroups[this._placeholderGroupsIdx]){
                const s = e.shift();
                console.assert(s._offset !== -1), console.assert(!s._placeholderDecorations);
                const o = s._snippet.placeholderInfo.last.index;
                for (const l of s._snippet.placeholderInfo.all)l.isFinalTabstop ? l.index = r.index + (o + 1) / this._nestingLevel : l.index = r.index + l.index / this._nestingLevel;
                this._snippet.replace(r, s._snippet.children);
                const a = this._placeholderDecorations.get(r);
                i.removeDecoration(a), this._placeholderDecorations.delete(r);
                for (const l of s._snippet.placeholders){
                    const c = s._snippet.offset(l), u = s._snippet.fullLen(l), d = qt.fromPositions(n.getPositionAt(s._offset + c), n.getPositionAt(s._offset + c + u)), h = i.addDecoration(d, YZe._decor.inactive);
                    this._placeholderDecorations.set(l, h);
                }
            }
            this._placeholderGroups = WXn(this._snippet.placeholders, a_e.compareByIndex);
        });
    }
    getEnclosingRange() {
        let e;
        const n = this._editor.getModel();
        for (const i of this._placeholderDecorations.values()){
            const r = n.getDecorationRange(i) ?? void 0;
            e ? e = e.plusRange(r) : e = r;
        }
        return e;
    }
}, W3a._decor = {
    active: Kg.register({
        description: "snippet-placeholder-1",
        stickiness: 0,
        className: "snippet-placeholder"
    }),
    inactive: Kg.register({
        description: "snippet-placeholder-2",
        stickiness: 1,
        className: "snippet-placeholder"
    }),
    activeFinal: Kg.register({
        description: "snippet-placeholder-3",
        stickiness: 1,
        className: "finish-snippet-placeholder"
    }),
    inactiveFinal: Kg.register({
        description: "snippet-placeholder-4",
        stickiness: 1,
        className: "finish-snippet-placeholder"
    })
}, G3a = W3a, q3a = {
    overwriteBefore: 0,
    overwriteAfter: 0,
    adjustWhitespace: !0,
    clipboardText: void 0,
    overtypingCapturer: void 0
}, gbe = class {
    constructor(t, e, n = q3a, i){
        this._editor = t, this._template = e, this._options = n, this._languageConfigurationService = i, this._templateMerges = [], this._snippets = [];
    }
    static adjustWhitespace(t, e, n, i, r) {
        const s = t.getLineContent(e.lineNumber), o = EI(s, 0, e.column - 1);
        let a;
        return i.walk((l)=>{
            if (!(l instanceof cne) || l.parent instanceof xoi || r && !r.has(l)) return !0;
            const c = l.value.split(/\r\n|\r|\n/);
            if (n) {
                const d = i.offset(l);
                if (d === 0) c[0] = t.normalizeIndentation(c[0]);
                else {
                    a = a ?? i.toString();
                    const h = a.charCodeAt(d - 1);
                    (h === ti.LineFeed || h === ti.CarriageReturn) && (c[0] = t.normalizeIndentation(o + c[0]));
                }
                for(let h = 1; h < c.length; h++)c[h] = t.normalizeIndentation(o + c[h]);
            }
            const u = c.join(t.getEOL());
            return u !== l.value && (l.parent.replace(l, [
                new cne(u)
            ]), a = void 0), !0;
        }), o;
    }
    static adjustSelection(t, e, n, i) {
        if (n !== 0 || i !== 0) {
            const { positionLineNumber: r, positionColumn: s } = e, o = s - n, a = s + i, l = t.validateRange({
                startLineNumber: r,
                startColumn: o,
                endLineNumber: r,
                endColumn: a
            });
            e = bu.createWithDirection(l.startLineNumber, l.startColumn, l.endLineNumber, l.endColumn, e.getDirection());
        }
        return e;
    }
    static createEditsAndSnippetsFromSelections(t, e, n, i, r, s, o, a, l) {
        const c = [], u = [];
        if (!t.hasModel()) return {
            edits: c,
            snippets: u
        };
        const d = t.getModel(), h = t.invokeWithinContext((S)=>S.get(yr)), p = t.invokeWithinContext((S)=>new B3a(S.get(Yp), d)), g = ()=>o, f = d.getValueInRange(gbe.adjustSelection(d, t.getSelection(), n, 0)), _ = d.getValueInRange(gbe.adjustSelection(d, t.getSelection(), 0, i)), b = d.getLineFirstNonWhitespaceColumn(t.getSelection().positionLineNumber), y = t.getSelections().map((S, k)=>({
                selection: S,
                idx: k
            })).sort((S, k)=>qt.compareRangesUsingStarts(S.selection, k.selection));
        for (const { selection: S, idx: k } of y){
            let C = gbe.adjustSelection(d, S, n, 0), T = gbe.adjustSelection(d, S, 0, i);
            f !== d.getValueInRange(C) && (C = S), _ !== d.getValueInRange(T) && (T = S);
            const I = S.setStartPosition(C.startLineNumber, C.startColumn).setEndPosition(T.endLineNumber, T.endColumn), A = new Cwe().parse(e, !0, r), P = I.getStartPosition(), M = gbe.adjustWhitespace(d, P, s || k > 0 && b !== d.getLineFirstNonWhitespaceColumn(S.positionLineNumber), A);
            A.resolveVariables(new O3a([
                p,
                new U3a(g, k, y.length, t.getOption(80) === "spread"),
                new F3a(d, S, k, a),
                new fyi(d, S, l),
                new j3a,
                new $3a(h),
                new H3a
            ])), c[k] = Tk.replace(I, A.toString()), c[k].identifier = {
                major: k,
                minor: 0
            }, c[k]._isTracked = !0, u[k] = new G3a(t, A, M);
        }
        return {
            edits: c,
            snippets: u
        };
    }
    static createEditsAndSnippetsFromEdits(t, e, n, i, r, s, o) {
        if (!t.hasModel() || e.length === 0) return {
            edits: [],
            snippets: []
        };
        const a = [], l = t.getModel(), c = new Cwe, u = new aEr, d = new O3a([
            t.invokeWithinContext((p)=>new B3a(p.get(Yp), l)),
            new U3a(()=>r, 0, t.getSelections().length, t.getOption(80) === "spread"),
            new F3a(l, t.getSelection(), 0, s),
            new fyi(l, t.getSelection(), o),
            new j3a,
            new $3a(t.invokeWithinContext((p)=>p.get(yr))),
            new H3a
        ]);
        e = e.sort((p, g)=>qt.compareRangesUsingStarts(p.range, g.range));
        let h = 0;
        for(let p = 0; p < e.length; p++){
            const { range: g, template: f, keepWhitespace: _ } = e[p];
            if (p > 0) {
                const C = e[p - 1].range, T = qt.fromPositions(C.getEndPosition(), g.getStartPosition()), I = new cne(l.getValueInRange(T));
                u.appendChild(I), h += I.value.length;
            }
            const b = c.parseFragment(f, u);
            gbe.adjustWhitespace(l, g.getStartPosition(), _ !== void 0 ? !_ : i, u, new Set(b)), u.resolveVariables(d);
            const y = u.toString(), S = y.slice(h);
            h = y.length;
            const k = Tk.replace(g, S);
            k.identifier = {
                major: p,
                minor: 0
            }, k._isTracked = !0, a.push(k);
        }
        return c.ensureFinalTabstop(u, n, !0), {
            edits: a,
            snippets: [
                new G3a(t, u, "")
            ]
        };
    }
    dispose() {
        Nc(this._snippets);
    }
    _logInfo() {
        return `template="${this._template}", merged_templates="${this._templateMerges.join(" -> ")}"`;
    }
    insert() {
        if (!this._editor.hasModel()) return;
        const { edits: t, snippets: e } = typeof this._template == "string" ? gbe.createEditsAndSnippetsFromSelections(this._editor, this._template, this._options.overwriteBefore, this._options.overwriteAfter, !1, this._options.adjustWhitespace, this._options.clipboardText, this._options.overtypingCapturer, this._languageConfigurationService) : gbe.createEditsAndSnippetsFromEdits(this._editor, this._template, !1, this._options.adjustWhitespace, this._options.clipboardText, this._options.overtypingCapturer, this._languageConfigurationService);
        this._snippets = e, this._editor.executeEdits("snippet", t, (n)=>{
            const i = n.filter((r)=>!!r.identifier);
            for(let r = 0; r < e.length; r++)e[r].initialize(i[r].textChange);
            return this._snippets[0].hasPlaceholder ? this._move(!0) : i.map((r)=>bu.fromPositions(r.range.getEndPosition()));
        }), this._editor.revealRange(this._editor.getSelections()[0]);
    }
    merge(t, e = q3a) {
        if (!this._editor.hasModel()) return;
        this._templateMerges.push([
            this._snippets[0]._nestingLevel,
            this._snippets[0]._placeholderGroupsIdx,
            t
        ]);
        const { edits: n, snippets: i } = gbe.createEditsAndSnippetsFromSelections(this._editor, t, e.overwriteBefore, e.overwriteAfter, !0, e.adjustWhitespace, e.clipboardText, e.overtypingCapturer, this._languageConfigurationService);
        this._editor.executeEdits("snippet", n, (r)=>{
            const s = r.filter((a)=>!!a.identifier);
            for(let a = 0; a < i.length; a++)i[a].initialize(s[a].textChange);
            const o = i[0].isTrivialSnippet;
            if (!o) {
                for (const a of this._snippets)a.merge(i);
                console.assert(i.length === 0);
            }
            return this._snippets[0].hasPlaceholder && !o ? this._move(void 0) : s.map((a)=>bu.fromPositions(a.range.getEndPosition()));
        });
    }
    next() {
        const t = this._move(!0);
        this._editor.setSelections(t), this._editor.revealPositionInCenterIfOutsideViewport(t[0].getPosition());
    }
    prev() {
        const t = this._move(!1);
        this._editor.setSelections(t), this._editor.revealPositionInCenterIfOutsideViewport(t[0].getPosition());
    }
    _move(t) {
        const e = [];
        for (const n of this._snippets){
            const i = n.move(t);
            e.push(...i);
        }
        return e;
    }
    get isAtFirstPlaceholder() {
        return this._snippets[0].isAtFirstPlaceholder;
    }
    get isAtLastPlaceholder() {
        return this._snippets[0].isAtLastPlaceholder;
    }
    get hasPlaceholder() {
        return this._snippets[0].hasPlaceholder;
    }
    get hasChoice() {
        return this._snippets[0].hasChoice;
    }
    get activeChoice() {
        return this._snippets[0].activeChoice;
    }
    isSelectionWithinPlaceholders() {
        if (!this.hasPlaceholder) return !1;
        const t = this._editor.getSelections();
        if (t.length < this._snippets.length) return !1;
        const e = new Map;
        for (const n of this._snippets){
            const i = n.computePossibleSelections();
            if (e.size === 0) for (const [r, s] of i){
                s.sort(qt.compareRangesUsingStarts);
                for (const o of t)if (s[0].containsRange(o)) {
                    e.set(r, []);
                    break;
                }
            }
            if (e.size === 0) return !1;
            e.forEach((r, s)=>{
                r.push(...i.get(s));
            });
        }
        t.sort(qt.compareRangesUsingStarts);
        for (const [n, i] of e){
            if (i.length !== t.length) {
                e.delete(n);
                continue;
            }
            i.sort(qt.compareRangesUsingStarts);
            for(let r = 0; r < i.length; r++)if (!i[r].containsRange(t[r])) {
                e.delete(n);
                continue;
            }
        }
        return e.size > 0;
    }
    getEnclosingRange() {
        let t;
        for (const e of this._snippets){
            const n = e.getEnclosingRange();
            t ? t = t.plusRange(n) : t = n;
        }
        return t;
    }
}, gbe = Re([
    F(3, fA)
], gbe);

}
