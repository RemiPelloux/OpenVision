import { Ule, kmt } from "./abstractTree.js";
import { Eg, _a } from "./iterator.js";
import { Kyi, l_n } from "./objectTreeModel.js";
import { hU, pU } from "./tree.js";
import { x } from "./tslib.es6.js";
var $le;
export { $le };
var __wakaru_wWc_initialized = false;
export function wWc() {
if (__wakaru_wWc_initialized) return;
__wakaru_wWc_initialized = true;
"use strict";
x(), Ule(), Kyi(), pU(), Eg(), $le = class extends kmt {
    constructor(e, t, n, i, r, s = {}){
        super(e, t, n, i, s), this.user = e, this.dataSource = r, this.nodesByIdentity = new Map, this.identityProvider = s.identityProvider;
    }
    getInput() {
        return this.input;
    }
    setInput(e, t) {
        if (t && !this.identityProvider) throw new hU(this.user, "Can't restore tree view state without an identity provider");
        if (this.input = e, !e) {
            this.nodesByIdentity.clear(), this.model.setChildren(null, _a.empty());
            return;
        }
        if (!t) {
            this._refresh(e);
            return;
        }
        const n = [], i = [], r = (o)=>{
            const a = this.identityProvider.getId(o).toString();
            return !t.expanded[a];
        }, s = (o)=>{
            const a = this.identityProvider.getId(o.element).toString();
            t.focus.has(a) && n.push(o.element), t.selection.has(a) && i.push(o.element);
        };
        this._refresh(e, r, s), this.setFocus(n), this.setSelection(i), t && typeof t.scrollTop == "number" && (this.scrollTop = t.scrollTop);
    }
    updateChildren(e = this.input) {
        if (typeof this.input > "u") throw new hU(this.user, "Tree input not set");
        let t;
        this.identityProvider && (t = (n)=>{
            const i = this.identityProvider.getId(n).toString(), r = this.nodesByIdentity.get(i);
            if (r) return r.collapsed;
        }), this._refresh(e, t);
    }
    resort(e = this.input, t = !0) {
        this.model.resort(e === this.input ? null : e, t);
    }
    refresh(e) {
        if (e === void 0) {
            this.view.rerender();
            return;
        }
        this.model.rerender(e);
    }
    _refresh(e, t, n) {
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
        this.model.setChildren(e === this.input ? null : e, this.iterate(e, t).elements, {
            onDidCreateNode: n,
            onDidDeleteNode: i
        });
    }
    iterate(e, t) {
        const n = [
            ...this.dataSource.getChildren(e)
        ];
        return {
            elements: _a.map(n, (r)=>{
                const { elements: s, size: o } = this.iterate(r, t), a = this.dataSource.hasChildren ? this.dataSource.hasChildren(r) : void 0, c = o === 0 ? void 0 : t && t(r);
                return {
                    element: r,
                    children: s,
                    collapsible: a,
                    collapsed: c
                };
            }),
            size: n.length
        };
    }
    createModel(e, t) {
        return new l_n(e, t);
    }
};

}
