import { GRn, HAk, LA, OAk, WAk, Y1, aEg, bMe, cEg, gme, lEg, mEg, mme, oEg, uVe } from "./Ycg.js";
import { NA } from "./api_7.js";
import { LX } from "./api_9.js";
import { Cc, V2e, Wc, _2, nS, o0t } from "./ipa.js";
import { E } from "./tslib.es6.js";
var slt, xEt, rgl;
export { rgl, slt, xEt };
var __wakaru_Eus_initialized = false;
export function Eus() {
if (__wakaru_Eus_initialized) return;
__wakaru_Eus_initialized = true;
"use strict";
E(), NA(), LX(), NA(), slt = class reu extends V2e {
    static getType() {
        return "listitem";
    }
    static clone(e) {
        return new reu(e.__value, e.__checked, e.__key);
    }
    constructor(e, n, i){
        super(i), this.__value = e === void 0 ? 1 : e, this.__checked = n;
    }
    createDOM(e) {
        const n = document.createElement("li"), i = this.getParent();
        return Y1(i) && i.getListType() === "check" && aEg(n, this, null, i), n.value = this.__value, oEg(n, e.theme, this), n;
    }
    updateDOM(e, n, i) {
        const r = this.getParent();
        return Y1(r) && r.getListType() === "check" && aEg(n, this, e, r), n.value = this.__value, oEg(n, i.theme, this), !1;
    }
    static transform() {
        return (e)=>{
            const n = e.getParent();
            Y1(n) && (gme(n), n.getListType() !== "check" && e.getChecked() != null && e.setChecked(void 0));
        };
    }
    static importDOM() {
        return {
            li: (e)=>({
                    conversion: OAk,
                    priority: 0
                })
        };
    }
    static importJSON(e) {
        const n = new reu(e.value, e.checked);
        return n.setFormat(e.format), n.setDirection(e.direction), n;
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            checked: this.getChecked(),
            type: "listitem",
            value: this.getValue(),
            version: 1
        };
    }
    append(...e) {
        for(let n = 0; n < e.length; n++){
            const i = e[n];
            if (Wc(i) && this.canMergeWith(i)) {
                const r = i.getChildren();
                this.append(...r), i.remove();
            } else super.append(i);
        }
        return this;
    }
    replace(e, n) {
        if (LA(e)) return super.replace(e);
        this.setIndent(0);
        const i = this.getParentOrThrow();
        if (!Y1(i)) return e;
        if (i.__first === this.getKey()) i.insertBefore(e);
        else if (i.__last === this.getKey()) i.insertAfter(e);
        else {
            const r = mme(i.getListType());
            let s = this.getNextSibling();
            for(; s;){
                const o = s;
                s = s.getNextSibling(), r.append(o);
            }
            i.insertAfter(e), e.insertAfter(r);
        }
        return n && this.getChildren().forEach((r)=>{
            e.append(r);
        }), this.remove(), i.getChildrenSize() === 0 && i.remove(), e;
    }
    insertAfter(e, n = !0) {
        const i = this.getParentOrThrow();
        Y1(i) || GRn(!1, "insertAfter: list node is not parent of list item node");
        const r = this.getNextSiblings();
        if (LA(e)) {
            const s = super.insertAfter(e, n), o = e.getParentOrThrow();
            return Y1(o) && gme(o), s;
        }
        if (Y1(e)) {
            let s = e;
            const o = e.getChildren();
            for(let a = o.length - 1; a >= 0; a--)s = o[a], this.insertAfter(s, n);
            return s;
        }
        if (i.insertAfter(e, n), r.length !== 0) {
            const s = mme(i.getListType());
            r.forEach((o)=>s.append(o)), e.insertAfter(s, n);
        }
        return e;
    }
    remove(e) {
        const n = this.getPreviousSibling(), i = this.getNextSibling();
        if (super.remove(e), n && i && uVe(n) && uVe(i)) mEg(n.getFirstChild(), i.getFirstChild()), i.remove();
        else if (i) {
            const r = i.getParent();
            Y1(r) && gme(r);
        }
    }
    insertNewAfter(e, n = !0) {
        const i = bMe(this.__checked == null ? void 0 : !1);
        return this.insertAfter(i, n), i;
    }
    collapseAtStart(e) {
        const n = _2();
        this.getChildren().forEach((a)=>n.append(a));
        const r = this.getParentOrThrow(), s = r.getParentOrThrow(), o = LA(s);
        if (r.getChildrenSize() === 1) if (o) r.remove(), s.select();
        else {
            r.insertBefore(n), r.remove();
            const a = e.anchor, l = e.focus, c = n.getKey();
            a.type === "element" && a.getNode().is(this) && a.set(c, a.offset, "element"), l.type === "element" && l.getNode().is(this) && l.set(c, l.offset, "element");
        }
        else r.insertBefore(n), this.remove();
        return !0;
    }
    getValue() {
        return this.getLatest().__value;
    }
    setValue(e) {
        const n = this.getWritable();
        n.__value = e;
    }
    getChecked() {
        return this.getLatest().__checked;
    }
    setChecked(e) {
        const n = this.getWritable();
        n.__checked = e;
    }
    toggleChecked() {
        this.setChecked(!this.__checked);
    }
    getIndent() {
        const e = this.getParent();
        if (e === null) return this.getLatest().__indent;
        let n = e.getParentOrThrow(), i = 0;
        for(; LA(n);)n = n.getParentOrThrow().getParentOrThrow(), i++;
        return i;
    }
    setIndent(e) {
        GRn(typeof e == "number" && e > -1, "Invalid indent value.");
        let n = this.getIndent();
        for(; n !== e;)n < e ? (HAk(this), n++) : (WAk(this), n--);
        return this;
    }
    insertBefore(e) {
        if (LA(e)) {
            const n = this.getParentOrThrow();
            if (Y1(n)) {
                const i = this.getNextSiblings();
                gme(n, i);
            }
        }
        return super.insertBefore(e);
    }
    canInsertAfter(e) {
        return LA(e);
    }
    canReplaceWith(e) {
        return LA(e);
    }
    canMergeWith(e) {
        return o0t(e) || LA(e);
    }
    extractWithChild(e, n) {
        if (!Cc(n)) return !1;
        const i = n.anchor.getNode(), r = n.focus.getNode();
        return this.isParentOf(i) && this.isParentOf(r) && this.getTextContent().length === n.getTextContent().length;
    }
    isParentRequired() {
        return !0;
    }
    createParentElementNode() {
        return mme("bullet");
    }
}, xEt = class yPb extends V2e {
    static getType() {
        return "list";
    }
    static clone(e) {
        const n = e.__listType || rgl[e.__tag];
        return new yPb(n, e.__start, e.__key);
    }
    constructor(e, n, i){
        super(i);
        const r = rgl[e] || e;
        this.__listType = r, this.__tag = r === "number" ? "ol" : "ul", this.__start = n;
    }
    getTag() {
        return this.__tag;
    }
    setListType(e) {
        const n = this.getWritable();
        n.__listType = e, n.__tag = e === "number" ? "ol" : "ul";
    }
    getListType() {
        return this.__listType;
    }
    getStart() {
        return this.__start;
    }
    createDOM(e, n) {
        const i = this.__tag, r = document.createElement(i);
        return this.__start !== 1 && r.setAttribute("start", String(this.__start)), r.__lexicalListType = this.__listType, lEg(r, e.theme, this), r;
    }
    updateDOM(e, n, i) {
        return e.__tag !== this.__tag ? !0 : (lEg(n, i.theme, this), !1);
    }
    static importDOM() {
        return {
            ol: (e)=>({
                    conversion: cEg,
                    priority: 0
                }),
            ul: (e)=>({
                    conversion: cEg,
                    priority: 0
                })
        };
    }
    static importJSON(e) {
        const n = mme(e.listType, e.start);
        return n.setFormat(e.format), n.setIndent(e.indent), n.setDirection(e.direction), n;
    }
    exportDOM(e) {
        const { element: n } = super.exportDOM(e);
        return n && (this.__start !== 1 && n.setAttribute("start", String(this.__start)), this.__listType === "check" && n.setAttribute("__lexicalListType", "check")), {
            element: n
        };
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            listType: this.getListType(),
            start: this.getStart(),
            tag: this.getTag(),
            type: "list",
            version: 1
        };
    }
    canBeEmpty() {
        return !1;
    }
    canIndent() {
        return !1;
    }
    append(...e) {
        for(let n = 0; n < e.length; n++){
            const i = e[n];
            if (LA(i)) super.append(i);
            else {
                const r = bMe();
                if (Y1(i)) r.append(i);
                else if (Wc(i)) {
                    const s = nS(i.getTextContent());
                    r.append(s);
                } else r.append(i);
                super.append(r);
            }
        }
        return gme(this), this;
    }
    extractWithChild(e) {
        return LA(e);
    }
}, rgl = {
    ol: "number",
    ul: "bullet"
};

}
