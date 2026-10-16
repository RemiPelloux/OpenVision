import { Lo, Ps, S, Se, bt, jie, ns, si, ve } from "./HVr.js";
import { gFt, mFt } from "./idGenerator.js";
import { Mc, oc } from "./map.js";
import { rt } from "./nls.js";
import { dt, qi } from "./range.js";
import { Li, fo, pl } from "./resources.js";
import { x } from "./tslib.es6.js";
import { eN, yy } from "./uint.js";
var gRe, PWc, Tmt, XK;
export { PWc, Tmt, XK, gRe };
var __wakaru_xKe_initialized = false;
export function xKe() {
if (__wakaru_xKe_initialized) return;
__wakaru_xKe_initialized = true;
"use strict";
x(), si(), bt(), gFt(), Se(), oc(), Li(), Ps(), eN(), qi(), rt(), gRe = class {
    constructor(e, t, n, i){
        this.isProviderFirst = e, this.parent = t, this.link = n, this._rangeCallback = i, this.id = mFt.nextId();
    }
    get uri() {
        return this.link.uri;
    }
    get range() {
        return this._range ?? this.link.targetSelectionRange ?? this.link.range;
    }
    set range(e) {
        this._range = e, this._rangeCallback(this);
    }
    get ariaMessage() {
        const e = this.parent.getPreview(this)?.preview(this.range);
        return e ? S(1227, null, e.value, fo(this.uri), this.range.startLineNumber, this.range.startColumn) : S(1226, null, fo(this.uri), this.range.startLineNumber, this.range.startColumn);
    }
}, PWc = class {
    constructor(e){
        this._modelReference = e;
    }
    dispose() {
        this._modelReference.dispose();
    }
    preview(e, t = 8) {
        const n = this._modelReference.object.textEditorModel;
        if (!n) return;
        const { startLineNumber: i, startColumn: r, endLineNumber: s, endColumn: o } = e, a = n.getWordUntilPosition({
            lineNumber: i,
            column: r - t
        }), c = new dt(i, a.startColumn, i, r), l = new dt(s, o, s, yy.MAX_SAFE_SMALL_INTEGER), u = n.getValueInRange(c).replace(/^\s+/, ""), h = n.getValueInRange(e), p = n.getValueInRange(l).replace(/\s+$/, "");
        return {
            value: u + h + p,
            highlight: {
                start: u.length,
                end: u.length + h.length
            }
        };
    }
}, Tmt = class {
    constructor(e, t){
        this.parent = e, this.uri = t, this.children = [], this._previews = new Mc, this._isDisposed = !1;
    }
    dispose() {
        this._isDisposed = !0, Lo(this._previews.values()), this._previews.clear();
    }
    getPreview(e) {
        return this._previews.get(e.uri);
    }
    get ariaMessage() {
        const e = this.children.length;
        return e === 1 ? S(1228, null, fo(this.uri), this.uri.fsPath) : S(1229, null, e, fo(this.uri), this.uri.fsPath);
    }
    async resolve(e) {
        if (this._isDisposed) return this;
        if (this._previews.size !== 0) return this;
        for (const t of this.children){
            if (this._isDisposed) return this;
            if (!this._previews.has(t.uri)) try {
                const n = await e.createModelReference(t.uri);
                if (this._isDisposed) return n.dispose(), this;
                this._previews.set(t.uri, new PWc(n));
            } catch (n) {
                this._isDisposed || ns(n);
            }
        }
        return this;
    }
}, XK = class w1r {
    constructor(t, n){
        this.groups = [], this.references = [], this._onDidChangeReferenceRange = new ve, this.onDidChangeReferenceRange = this._onDidChangeReferenceRange.event, this._links = t, this._title = n;
        const [i] = t;
        t.sort(w1r._compareReferences);
        let r;
        for (const s of t)if ((!r || !pl.isEqual(r.uri, s.uri, !0)) && (r = new Tmt(this, s.uri), this.groups.push(r)), r.children.length === 0 || w1r._compareReferences(s, r.children[r.children.length - 1]) !== 0) {
            const o = new gRe(i === s, r, s, (a)=>this._onDidChangeReferenceRange.fire(a));
            this.references.push(o), r.children.push(o);
        }
    }
    dispose() {
        Lo(this.groups), this._onDidChangeReferenceRange.dispose(), this.groups.length = 0;
    }
    clone() {
        return new w1r(this._links, this._title);
    }
    get title() {
        return this._title;
    }
    get isEmpty() {
        return this.groups.length === 0;
    }
    get ariaMessage() {
        return this.isEmpty ? S(1230, null) : this.references.length === 1 ? S(1231, null, this.references[0].uri.fsPath) : this.groups.length === 1 ? S(1232, null, this.references.length, this.groups[0].uri.fsPath) : S(1233, null, this.references.length, this.groups.length);
    }
    nextOrPreviousReference(t, n) {
        const { parent: i } = t;
        let r = i.children.indexOf(t);
        const s = i.children.length, o = i.parent.groups.length;
        return o === 1 || n && r + 1 < s || !n && r > 0 ? (n ? r = (r + 1) % s : r = (r + s - 1) % s, i.children[r]) : (r = i.parent.groups.indexOf(i), n ? (r = (r + 1) % o, i.parent.groups[r].children[0]) : (r = (r + o - 1) % o, i.parent.groups[r].children[i.parent.groups[r].children.length - 1]));
    }
    nearestReference(t, n) {
        const i = this.references.map((r, s)=>({
                idx: s,
                prefixLen: jie(r.uri.toString(), t.toString()),
                offsetDist: Math.abs(r.range.startLineNumber - n.lineNumber) * 100 + Math.abs(r.range.startColumn - n.column)
            })).sort((r, s)=>r.prefixLen > s.prefixLen ? -1 : r.prefixLen < s.prefixLen ? 1 : r.offsetDist < s.offsetDist ? -1 : r.offsetDist > s.offsetDist ? 1 : 0)[0];
        if (i) return this.references[i.idx];
    }
    referenceAt(t, n) {
        for (const i of this.references)if (i.uri.toString() === t.toString() && dt.containsPosition(i.range, n)) return i;
    }
    firstReference() {
        for (const t of this.references)if (t.isProviderFirst) return t;
        return this.references[0];
    }
    static _compareReferences(t, n) {
        return pl.compare(t.uri, n.uri) || dt.compareRangesUsingStarts(t.range, n.range);
    }
};

}
