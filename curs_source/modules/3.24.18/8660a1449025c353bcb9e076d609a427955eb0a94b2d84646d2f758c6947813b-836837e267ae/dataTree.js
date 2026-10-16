import { Lvn, YBt } from "./abstractTree.js";
import { IT, np } from "./iterator.js";
import { GEr, iVo } from "./objectTreeModel.js";
import { AHe, bz } from "./tree.js";
import { E } from "./tslib.es6.js";
var Awe;
export { Awe };
var __wakaru_vYd_initialized = false;
export function vYd() {
if (__wakaru_vYd_initialized) return;
__wakaru_vYd_initialized = true;
"use strict";
E(), Lvn(), iVo(), AHe(), IT(), Awe = class extends YBt {
    constructor(t, e, n, i, r, s = {}){
        super(t, e, n, i, s), this.user = t, this.dataSource = r, this.nodesByIdentity = new Map, this.identityProvider = s.identityProvider;
    }
    getInput() {
        return this.input;
    }
    setInput(t, e) {
        if (e && !this.identityProvider) throw new bz(this.user, "Can't restore tree view state without an identity provider");
        if (this.input = t, !t) {
            this.nodesByIdentity.clear(), this.model.setChildren(null, np.empty());
            return;
        }
        if (!e) {
            this._refresh(t);
            return;
        }
        const n = [], i = [], r = (o)=>{
            const a = this.identityProvider.getId(o).toString();
            return !e.expanded[a];
        }, s = (o)=>{
            const a = this.identityProvider.getId(o.element).toString();
            e.focus.has(a) && n.push(o.element), e.selection.has(a) && i.push(o.element);
        };
        this._refresh(t, r, s), this.setFocus(n), this.setSelection(i), e && typeof e.scrollTop == "number" && (this.scrollTop = e.scrollTop);
    }
    updateChildren(t = this.input) {
        if (typeof this.input > "u") throw new bz(this.user, "Tree input not set");
        let e;
        this.identityProvider && (e = (n)=>{
            const i = this.identityProvider.getId(n).toString(), r = this.nodesByIdentity.get(i);
            if (r) return r.collapsed;
        }), this._refresh(t, e);
    }
    resort(t = this.input, e = !0) {
        this.model.resort(t === this.input ? null : t, e);
    }
    refresh(t) {
        if (t === void 0) {
            this.view.rerender();
            return;
        }
        this.model.rerender(t);
    }
    _refresh(t, e, n) {
        let i;
        if (this.identityProvider) {
            const r = new Set, s = n;
            n = (o)=>{
                const a = this.identityProvider.getId(o.element).toString();
                r.add(a), this.nodesByIdentity.set(a, o), s?.(o);
            }, i = (o)=>{
                const a = this.identityProvider.getId(o.element).toString();
                r.has(a) || this.nodesByIdentity.delete(a);
            };
        }
        this.model.setChildren(t === this.input ? null : t, this.iterate(t, e).elements, {
            onDidCreateNode: n,
            onDidDeleteNode: i
        });
    }
    iterate(t, e) {
        const n = [
            ...this.dataSource.getChildren(t)
        ];
        return {
            elements: np.map(n, (r)=>{
                const { elements: s, size: o } = this.iterate(r, e), a = this.dataSource.hasChildren ? this.dataSource.hasChildren(r) : void 0, l = o === 0 ? void 0 : e && e(r);
                return {
                    element: r,
                    children: s,
                    collapsible: a,
                    collapsed: l
                };
            }),
            size: n.length
        };
    }
    createModel(t, e) {
        return new GEr(t, e);
    }
};

}
