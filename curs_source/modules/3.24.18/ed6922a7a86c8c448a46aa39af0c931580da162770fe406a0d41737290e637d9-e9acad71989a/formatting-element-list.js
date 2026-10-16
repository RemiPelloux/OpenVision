import { x } from "./tslib.es6.js";
var fEi, JRe, xfs, Phl;
export { JRe, Phl, fEi, xfs };
var __wakaru_Z3g_initialized = false;
export function Z3g() {
if (__wakaru_Z3g_initialized) return;
__wakaru_Z3g_initialized = true;
x(), fEi = 3, (function(e) {
    e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(JRe || (JRe = {})), xfs = {
    type: JRe.Marker
}, Phl = class {
    constructor(e){
        this.treeAdapter = e, this.entries = [], this.bookmark = null;
    }
    _getNoahArkConditionCandidates(e, t) {
        const n = [], i = t.length, r = this.treeAdapter.getTagName(e), s = this.treeAdapter.getNamespaceURI(e);
        for(let o = 0; o < this.entries.length; o++){
            const a = this.entries[o];
            if (a.type === JRe.Marker) break;
            const { element: c } = a;
            if (this.treeAdapter.getTagName(c) === r && this.treeAdapter.getNamespaceURI(c) === s) {
                const l = this.treeAdapter.getAttrList(c);
                l.length === i && n.push({
                    idx: o,
                    attrs: l
                });
            }
        }
        return n;
    }
    _ensureNoahArkCondition(e) {
        if (this.entries.length < fEi) return;
        const t = this.treeAdapter.getAttrList(e), n = this._getNoahArkConditionCandidates(e, t);
        if (n.length < fEi) return;
        const i = new Map(t.map((s)=>[
                s.name,
                s.value
            ]));
        let r = 0;
        for(let s = 0; s < n.length; s++){
            const o = n[s];
            o.attrs.every((a)=>i.get(a.name) === a.value) && (r += 1, r >= fEi && this.entries.splice(o.idx, 1));
        }
    }
    insertMarker() {
        this.entries.unshift(xfs);
    }
    pushElement(e, t) {
        this._ensureNoahArkCondition(e), this.entries.unshift({
            type: JRe.Element,
            element: e,
            token: t
        });
    }
    insertElementAfterBookmark(e, t) {
        const n = this.entries.indexOf(this.bookmark);
        this.entries.splice(n, 0, {
            type: JRe.Element,
            element: e,
            token: t
        });
    }
    removeEntry(e) {
        const t = this.entries.indexOf(e);
        t !== -1 && this.entries.splice(t, 1);
    }
    clearToLastMarker() {
        const e = this.entries.indexOf(xfs);
        e === -1 ? this.entries.length = 0 : this.entries.splice(0, e + 1);
    }
    getElementEntryInScopeWithTagName(e) {
        const t = this.entries.find((n)=>n.type === JRe.Marker || this.treeAdapter.getTagName(n.element) === e);
        return t && t.type === JRe.Element ? t : null;
    }
    getElementEntry(e) {
        return this.entries.find((t)=>t.type === JRe.Element && t.element === e);
    }
};

}
