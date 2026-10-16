import { i } from "./plugin-brand-icon.js";
var RNe, RS, HNt, ZNt, Nar;
export { HNt, Nar, RNe, RS, ZNt };
var __wakaru_kvi_initialized = false;
export function kvi() {
if (__wakaru_kvi_initialized) return;
__wakaru_kvi_initialized = true;
RNe = 3, (function(r) {
    r[r.Marker = 0] = "Marker", r[r.Element = 1] = "Element";
})(RS || (RS = {})), HNt = {
    type: RS.Marker
}, ZNt = class {
    constructor(e){
        this.treeAdapter = e, this.entries = [], this.bookmark = null;
    }
    _getNoahArkConditionCandidates(e, a) {
        const s = [], l = a.length, u = this.treeAdapter.getTagName(e), p = this.treeAdapter.getNamespaceURI(e);
        for(let m = 0; m < this.entries.length; m++){
            const b = this.entries[m];
            if (b.type === RS.Marker) break;
            const { element: g } = b;
            if (this.treeAdapter.getTagName(g) === u && this.treeAdapter.getNamespaceURI(g) === p) {
                const _ = this.treeAdapter.getAttrList(g);
                _.length === l && s.push({
                    idx: m,
                    attrs: _
                });
            }
        }
        return s;
    }
    _ensureNoahArkCondition(e) {
        if (this.entries.length < RNe) return;
        const a = this.treeAdapter.getAttrList(e), s = this._getNoahArkConditionCandidates(e, a);
        if (s.length < RNe) return;
        const l = new Map(a.map((p)=>[
                p.name,
                p.value
            ]));
        let u = 0;
        for(let p = 0; p < s.length; p++){
            const m = s[p];
            m.attrs.every((b)=>l.get(b.name) === b.value) && (u += 1, u >= RNe && this.entries.splice(m.idx, 1));
        }
    }
    insertMarker() {
        this.entries.unshift(HNt);
    }
    pushElement(e, a) {
        this._ensureNoahArkCondition(e), this.entries.unshift({
            type: RS.Element,
            element: e,
            token: a
        });
    }
    insertElementAfterBookmark(e, a) {
        const s = this.entries.indexOf(this.bookmark);
        this.entries.splice(s, 0, {
            type: RS.Element,
            element: e,
            token: a
        });
    }
    removeEntry(e) {
        const a = this.entries.indexOf(e);
        a !== -1 && this.entries.splice(a, 1);
    }
    clearToLastMarker() {
        const e = this.entries.indexOf(HNt);
        e === -1 ? this.entries.length = 0 : this.entries.splice(0, e + 1);
    }
    getElementEntryInScopeWithTagName(e) {
        const a = this.entries.find((s)=>s.type === RS.Marker || this.treeAdapter.getTagName(s.element) === e);
        return a && a.type === RS.Element ? a : null;
    }
    getElementEntry(e) {
        return this.entries.find((a)=>a.type === RS.Element && a.element === e);
    }
}, i(ZNt, "FormattingElementList"), Nar = ZNt;

}
