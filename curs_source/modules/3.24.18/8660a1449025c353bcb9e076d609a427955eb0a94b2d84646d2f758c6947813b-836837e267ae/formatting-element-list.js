import { E } from "./tslib.es6.js";
var AMr, gWe, $ia, tgh;
export { $ia, AMr, gWe, tgh };
var __wakaru_Mzy_initialized = false;
export function Mzy() {
if (__wakaru_Mzy_initialized) return;
__wakaru_Mzy_initialized = true;
E(), AMr = 3, (function(t) {
    t[t.Marker = 0] = "Marker", t[t.Element = 1] = "Element";
})(gWe || (gWe = {})), $ia = {
    type: gWe.Marker
}, tgh = class {
    constructor(t){
        this.treeAdapter = t, this.entries = [], this.bookmark = null;
    }
    _getNoahArkConditionCandidates(t, e) {
        const n = [], i = e.length, r = this.treeAdapter.getTagName(t), s = this.treeAdapter.getNamespaceURI(t);
        for(let o = 0; o < this.entries.length; o++){
            const a = this.entries[o];
            if (a.type === gWe.Marker) break;
            const { element: l } = a;
            if (this.treeAdapter.getTagName(l) === r && this.treeAdapter.getNamespaceURI(l) === s) {
                const c = this.treeAdapter.getAttrList(l);
                c.length === i && n.push({
                    idx: o,
                    attrs: c
                });
            }
        }
        return n;
    }
    _ensureNoahArkCondition(t) {
        if (this.entries.length < AMr) return;
        const e = this.treeAdapter.getAttrList(t), n = this._getNoahArkConditionCandidates(t, e);
        if (n.length < AMr) return;
        const i = new Map(e.map((s)=>[
                s.name,
                s.value
            ]));
        let r = 0;
        for(let s = 0; s < n.length; s++){
            const o = n[s];
            o.attrs.every((a)=>i.get(a.name) === a.value) && (r += 1, r >= AMr && this.entries.splice(o.idx, 1));
        }
    }
    insertMarker() {
        this.entries.unshift($ia);
    }
    pushElement(t, e) {
        this._ensureNoahArkCondition(t), this.entries.unshift({
            type: gWe.Element,
            element: t,
            token: e
        });
    }
    insertElementAfterBookmark(t, e) {
        const n = this.entries.indexOf(this.bookmark);
        this.entries.splice(n, 0, {
            type: gWe.Element,
            element: t,
            token: e
        });
    }
    removeEntry(t) {
        const e = this.entries.indexOf(t);
        e !== -1 && this.entries.splice(e, 1);
    }
    clearToLastMarker() {
        const t = this.entries.indexOf($ia);
        t === -1 ? this.entries.length = 0 : this.entries.splice(0, t + 1);
    }
    getElementEntryInScopeWithTagName(t) {
        const e = this.entries.find((n)=>n.type === gWe.Marker || this.treeAdapter.getTagName(n.element) === t);
        return e && e.type === gWe.Element ? e : null;
    }
    getElementEntry(t) {
        return this.entries.find((e)=>e.type === gWe.Element && e.element === t);
    }
};

}
