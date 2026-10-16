import { Qe, Yo, st } from "./Iwo.js";
import { NQ } from "./cssValue.js";
import { Hn } from "./dom_2.js";
import { sIr, ynt } from "./highlightedLabel.js";
import { tRe } from "./iconLabels.js";
import { y5y } from "./iconlabel.css";
import { cp } from "./objects.js";
import { sTr } from "./range_2.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { D5d, Fj, Ii, JE, Rp, S5y, c2, fr, gz, mz, sR, yBt } from "./ze.js";
var Uvn, mRe, xYd, AYd;
export { AYd, Uvn, mRe, xYd };
var __wakaru_Snt_initialized = false;
export function Snt() {
if (__wakaru_Snt_initialized) return;
__wakaru_Snt_initialized = true;
"use strict";
E(), tRe(), Qe(), cp(), sTr(), To(), NQ(), Hn(), sIr(), gz(), sR(), y5y(), Uvn = class {
    constructor(t){
        this._element = t;
    }
    get element() {
        return this._element;
    }
    set textContent(t) {
        this.disposed || t === this._textContent || (this._textContent = t, this._element.textContent = t);
    }
    set classNames(t) {
        this.disposed || Rp(t, this._classNames) || (this._classNames = t, this._element.classList.value = "", this._element.classList.add(...t));
    }
    set empty(t) {
        this.disposed || t === this._empty || (this._empty = t, this._element.style.marginLeft = t ? "0" : "");
    }
    dispose() {
        this.disposed = !0;
    }
}, mRe = class extends st {
    constructor(t, e){
        super(), this.customHovers = new Map, this.creationOptions = e, this.domNode = this._register(new Uvn(fr(t, Ii(".monaco-icon-label")))), this.labelContainer = fr(this.domNode.element, Ii(".monaco-icon-label-container")), this.nameContainer = fr(this.labelContainer, Ii("span.monaco-icon-name-container")), e?.supportHighlights || e?.supportIcons ? this.nameNode = this._register(new AYd(this.nameContainer, !!e.supportIcons)) : this.nameNode = new xYd(this.nameContainer), this.hoverDelegate = e?.hoverDelegate ?? c2("mouse");
    }
    get element() {
        return this.domNode.element;
    }
    setLabel(t, e, n) {
        const i = [
            "monaco-icon-label"
        ], r = [
            "monaco-icon-label-container"
        ];
        let s = "";
        if (n && (n.extraClasses && i.push(...n.extraClasses), n.bold && i.push("bold"), n.italic && i.push("italic"), n.strikethrough && i.push("strikethrough"), n.disabledCommand && r.push("disabled"), n.title && (typeof n.title == "string" ? s += n.title : s += t)), this.updateIcon(n?.iconElement, n?.iconPath), this.domNode.classNames = i, this.domNode.element.setAttribute("aria-label", s), this.labelContainer.classList.value = "", this.labelContainer.classList.add(...r), this.setupHover(n?.descriptionTitle ? this.labelContainer : this.element, n?.title), this.nameNode.setLabel(t, n), e || this.descriptionNode) {
            const o = this.getOrCreateDescriptionNode();
            o instanceof ynt ? (o.set(e || "", n ? n.descriptionMatches : void 0, void 0, n?.labelEscapeNewLines, n?.supportIcons ?? this.creationOptions?.supportIcons), this.setupHover(o.element, n?.descriptionTitle)) : (o.textContent = e && n?.labelEscapeNewLines ? ynt.escapeNewLines(e, []) : e || "", this.setupHover(o.element, n?.descriptionTitle || ""), o.empty = !e);
        }
        if (n?.suffix || this.suffixNode) {
            const o = this.getOrCreateSuffixNode();
            o.textContent = n?.suffix ?? "";
        }
    }
    setupHover(t, e) {
        const n = this.customHovers.get(t);
        if (n && (n.dispose(), this.customHovers.delete(t)), !e) {
            t.removeAttribute("title");
            return;
        }
        let i = t;
        if (this.creationOptions?.hoverTargetOverride) {
            if (!JE(t, this.creationOptions.hoverTargetOverride)) throw new Error("hoverTargetOverrride must be an ancestor of the htmlElement");
            i = this.creationOptions.hoverTargetOverride;
        }
        if (this.hoverDelegate.showNativeHover) {
            let s = function(o, a) {
                Yo(a) ? o.title = yBt(a) : a?.markdownNotSupportedFallback ? o.title = a.markdownNotSupportedFallback : o.removeAttribute("title");
            };
            var r = s;
            s(i, e);
        } else {
            const s = Fj().setupManagedHover(this.hoverDelegate, i, e);
            s && this.customHovers.set(t, s);
        }
    }
    updateIcon(t, e) {
        t ? (this.clearIconPathNode(), this.setIconElementNode(t)) : e ? (this.clearIconElementNode(), this.setIconPathNode(e)) : (this.clearIconPathNode(), this.clearIconElementNode());
    }
    setIconElementNode(t) {
        this.iconElementNode !== t && (this.clearIconElementNode(), t.classList.add("monaco-icon-label-iconelement"), this.domNode.element.prepend(t), this.iconElementNode = t);
    }
    clearIconElementNode() {
        this.iconElementNode && (this.iconElementNode.remove(), this.iconElementNode = void 0);
    }
    setIconPathNode(t) {
        this.iconPathNode || (this.iconPathNode = Ii(".monaco-icon-label-iconpath"), this.domNode.element.prepend(this.iconPathNode)), this.iconPathNode.style.backgroundImage = mz(t), this.iconPathNode.style.backgroundRepeat = "no-repeat", this.iconPathNode.style.backgroundPosition = "center", this.iconPathNode.style.backgroundSize = "contain";
    }
    clearIconPathNode() {
        this.iconPathNode && (this.iconPathNode.remove(), this.iconPathNode = void 0);
    }
    dispose() {
        super.dispose();
        for (const t of this.customHovers.values())t.dispose();
        this.customHovers.clear();
    }
    getOrCreateSuffixNode() {
        if (!this.suffixNode) {
            const t = this._register(new Uvn(D5d(this.nameContainer, Ii("span.monaco-icon-suffix-container"))));
            this.suffixNode = this._register(new Uvn(fr(t.element, Ii("span.label-suffix"))));
        }
        return this.suffixNode;
    }
    getOrCreateDescriptionNode() {
        if (!this.descriptionNode) {
            const t = this._register(new Uvn(fr(this.labelContainer, Ii("span.monaco-icon-description-container"))));
            this.creationOptions?.supportDescriptionHighlights ? this.descriptionNode = this._register(new ynt(fr(t.element, Ii("span.label-description")))) : this.descriptionNode = this._register(new Uvn(fr(t.element, Ii("span.label-description"))));
        }
        return this.descriptionNode;
    }
}, xYd = class {
    constructor(t){
        this.container = t, this.label = void 0, this.singleLabel = void 0;
    }
    setLabel(t, e) {
        if (!(this.label === t && Rp({
            ...this.options,
            iconElement: void 0
        }, {
            ...e,
            iconElement: void 0
        }))) if (this.label = t, this.options = e, typeof t == "string") this.singleLabel || (this.container.innerText = "", this.container.classList.remove("multiple"), this.singleLabel = fr(this.container, Ii("a.label-name", {
            id: e?.domId
        }))), this.singleLabel.textContent = t;
        else {
            this.container.innerText = "", this.container.classList.add("multiple"), this.singleLabel = void 0;
            for(let n = 0; n < t.length; n++){
                const i = t[n], r = e?.domId && `${e?.domId}_${n}`;
                fr(this.container, Ii("a.label-name", {
                    id: r,
                    "data-icon-label-count": t.length,
                    "data-icon-label-index": n,
                    role: "treeitem"
                }, i)), n < t.length - 1 && fr(this.container, Ii("span.label-separator", void 0, e?.separator || "/"));
            }
        }
    }
}, AYd = class extends st {
    constructor(t, e){
        super(), this.container = t, this.supportIcons = e, this.label = void 0, this.singleLabel = void 0;
    }
    setLabel(t, e) {
        if (this.label === t && Rp({
            ...this.options,
            iconElement: void 0
        }, {
            ...e,
            iconElement: void 0
        })) return;
        this.label = t, this.options = e;
        const n = e?.supportIcons ?? this.supportIcons;
        if (typeof t == "string") this.singleLabel || (this.container.innerText = "", this.container.classList.remove("multiple"), this.singleLabel = this._register(new ynt(fr(this.container, Ii("a.label-name", {
            id: e?.domId
        }))))), this.singleLabel.set(t, e?.matches, void 0, e?.labelEscapeNewLines, n);
        else {
            this.container.innerText = "", this.container.classList.add("multiple"), this.singleLabel = void 0;
            const i = e?.separator || "/", r = S5y(t, i, e?.matches);
            for(let s = 0; s < t.length; s++){
                const o = t[s], a = r ? r[s] : void 0, l = e?.domId && `${e?.domId}_${s}`, c = Ii("a.label-name", {
                    id: l,
                    "data-icon-label-count": t.length,
                    "data-icon-label-index": s,
                    role: "treeitem"
                });
                this._register(new ynt(fr(this.container, c))).set(o, a, void 0, e?.labelEscapeNewLines, n), s < t.length - 1 && fr(c, Ii("span.label-separator", void 0, i));
            }
        }
    }
};

}
