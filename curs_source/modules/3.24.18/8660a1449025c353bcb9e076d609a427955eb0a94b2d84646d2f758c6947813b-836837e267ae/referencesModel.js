import { D, Ei, Fa, Gt, Ike, Nc, Qe, tt, xr } from "./Iwo.js";
import { qfn, zfn } from "./idGenerator.js";
import { du, gd } from "./map.js";
import { Bt } from "./nls.js";
import { Qs, qt } from "./range.js";
import { Aa, Iu, Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { eI, lz } from "./uint.js";
var MHe, EYd, ZBt, h_e;
export { EYd, MHe, ZBt, h_e };
var __wakaru_iSt_initialized = false;
export function iSt() {
if (__wakaru_iSt_initialized) return;
__wakaru_iSt_initialized = true;
"use strict";
E(), Ei(), Gt(), zfn(), Qe(), du(), Lr(), Fa(), lz(), Qs(), Bt(), MHe = class {
    constructor(t, e, n, i){
        this.isProviderFirst = t, this.parent = e, this.link = n, this._rangeCallback = i, this.id = qfn.nextId();
    }
    get uri() {
        return this.link.uri;
    }
    get range() {
        return this._range ?? this.link.targetSelectionRange ?? this.link.range;
    }
    set range(t) {
        this._range = t, this._rangeCallback(this);
    }
    get ariaMessage() {
        const t = this.parent.getPreview(this)?.preview(this.range);
        return t ? D(1227, null, t.value, Aa(this.uri), this.range.startLineNumber, this.range.startColumn) : D(1226, null, Aa(this.uri), this.range.startLineNumber, this.range.startColumn);
    }
}, EYd = class {
    constructor(t){
        this._modelReference = t;
    }
    dispose() {
        this._modelReference.dispose();
    }
    preview(t, e = 8) {
        const n = this._modelReference.object.textEditorModel;
        if (!n) return;
        const { startLineNumber: i, startColumn: r, endLineNumber: s, endColumn: o } = t, a = n.getWordUntilPosition({
            lineNumber: i,
            column: r - e
        }), l = new qt(i, a.startColumn, i, r), c = new qt(s, o, s, eI.MAX_SAFE_SMALL_INTEGER), u = n.getValueInRange(l).replace(/^\s+/, ""), d = n.getValueInRange(t), h = n.getValueInRange(c).replace(/\s+$/, "");
        return {
            value: u + d + h,
            highlight: {
                start: u.length,
                end: u.length + d.length
            }
        };
    }
}, ZBt = class {
    constructor(t, e){
        this.parent = t, this.uri = e, this.children = [], this._previews = new gd, this._isDisposed = !1;
    }
    dispose() {
        this._isDisposed = !0, Nc(this._previews.values()), this._previews.clear();
    }
    getPreview(t) {
        return this._previews.get(t.uri);
    }
    get ariaMessage() {
        const t = this.children.length;
        return t === 1 ? D(1228, null, Aa(this.uri), this.uri.fsPath) : D(1229, null, t, Aa(this.uri), this.uri.fsPath);
    }
    async resolve(t) {
        if (this._isDisposed) return this;
        if (this._previews.size !== 0) return this;
        for (const e of this.children){
            if (this._isDisposed) return this;
            if (!this._previews.has(e.uri)) try {
                const n = await t.createModelReference(e.uri);
                if (this._isDisposed) return n.dispose(), this;
                this._previews.set(e.uri, new EYd(n));
            } catch (n) {
                this._isDisposed || xr(n);
            }
        }
        return this;
    }
}, h_e = class pXs {
    constructor(e, n){
        this.groups = [], this.references = [], this._onDidChangeReferenceRange = new tt, this.onDidChangeReferenceRange = this._onDidChangeReferenceRange.event, this._links = e, this._title = n;
        const [i] = e;
        e.sort(pXs._compareReferences);
        let r;
        for (const s of e)if ((!r || !Iu.isEqual(r.uri, s.uri, !0)) && (r = new ZBt(this, s.uri), this.groups.push(r)), r.children.length === 0 || pXs._compareReferences(s, r.children[r.children.length - 1]) !== 0) {
            const o = new MHe(i === s, r, s, (a)=>this._onDidChangeReferenceRange.fire(a));
            this.references.push(o), r.children.push(o);
        }
    }
    dispose() {
        Nc(this.groups), this._onDidChangeReferenceRange.dispose(), this.groups.length = 0;
    }
    clone() {
        return new pXs(this._links, this._title);
    }
    get title() {
        return this._title;
    }
    get isEmpty() {
        return this.groups.length === 0;
    }
    get ariaMessage() {
        return this.isEmpty ? D(1230, null) : this.references.length === 1 ? D(1231, null, this.references[0].uri.fsPath) : this.groups.length === 1 ? D(1232, null, this.references.length, this.groups[0].uri.fsPath) : D(1233, null, this.references.length, this.groups.length);
    }
    nextOrPreviousReference(e, n) {
        const { parent: i } = e;
        let r = i.children.indexOf(e);
        const s = i.children.length, o = i.parent.groups.length;
        return o === 1 || n && r + 1 < s || !n && r > 0 ? (n ? r = (r + 1) % s : r = (r + s - 1) % s, i.children[r]) : (r = i.parent.groups.indexOf(i), n ? (r = (r + 1) % o, i.parent.groups[r].children[0]) : (r = (r + o - 1) % o, i.parent.groups[r].children[i.parent.groups[r].children.length - 1]));
    }
    nearestReference(e, n) {
        const i = this.references.map((r, s)=>({
                idx: s,
                prefixLen: Ike(r.uri.toString(), e.toString()),
                offsetDist: Math.abs(r.range.startLineNumber - n.lineNumber) * 100 + Math.abs(r.range.startColumn - n.column)
            })).sort((r, s)=>r.prefixLen > s.prefixLen ? -1 : r.prefixLen < s.prefixLen ? 1 : r.offsetDist < s.offsetDist ? -1 : r.offsetDist > s.offsetDist ? 1 : 0)[0];
        if (i) return this.references[i.idx];
    }
    referenceAt(e, n) {
        for (const i of this.references)if (i.uri.toString() === e.toString() && qt.containsPosition(i.range, n)) return i;
    }
    firstReference() {
        for (const e of this.references)if (e.isProviderFirst) return e;
        return this.references[0];
    }
    static _compareReferences(e, n) {
        return Iu.compare(e.uri, n.uri) || qt.compareRangesUsingStarts(e.range, n.range);
    }
};

}
