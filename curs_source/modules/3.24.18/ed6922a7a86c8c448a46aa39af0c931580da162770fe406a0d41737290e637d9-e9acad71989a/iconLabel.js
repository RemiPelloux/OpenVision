import { Se, Xr, we } from "./HVr.js";
import { MO } from "./cssValue.js";
import { en } from "./dom_2.js";
import { tT, ufe } from "./highlightedLabel.js";
import { bW } from "./iconLabels.js";
import { Ukg } from "./iconlabel.css";
import { bu } from "./objects.js";
import { $Dc, $f, $kg, AE, V7, Ve, Ye, _re, ih, iw, p5, yh } from "./qIc.js";
import { Mbi } from "./range_2.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var h3t, TW, LWc, NWc;
export { LWc, NWc, TW, h3t };
var __wakaru_Tre_initialized = false;
export function Tre() {
if (__wakaru_Tre_initialized) return;
__wakaru_Tre_initialized = true;
"use strict";
x(), bW(), Se(), bu(), Mbi(), gr(), MO(), en(), ufe(), V7(), $f(), Ukg(), h3t = class {
    constructor(e){
        this._element = e;
    }
    get element() {
        return this._element;
    }
    set textContent(e) {
        this.disposed || e === this._textContent || (this._textContent = e, this._element.textContent = e);
    }
    set classNames(e) {
        this.disposed || yh(e, this._classNames) || (this._classNames = e, this._element.classList.value = "", this._element.classList.add(...e));
    }
    set empty(e) {
        this.disposed || e === this._empty || (this._empty = e, this._element.style.marginLeft = e ? "0" : "");
    }
    dispose() {
        this.disposed = !0;
    }
}, TW = class extends we {
    constructor(e, t){
        super(), this.customHovers = new Map, this.creationOptions = t, this.domNode = this._register(new h3t(Ye(e, Ve(".monaco-icon-label")))), this.labelContainer = Ye(this.domNode.element, Ve(".monaco-icon-label-container")), this.nameContainer = Ye(this.labelContainer, Ve("span.monaco-icon-name-container")), t?.supportHighlights || t?.supportIcons ? this.nameNode = this._register(new NWc(this.nameContainer, !!t.supportIcons)) : this.nameNode = new LWc(this.nameContainer), this.hoverDelegate = t?.hoverDelegate ?? ih("mouse");
    }
    get element() {
        return this.domNode.element;
    }
    setLabel(e, t, n) {
        const i = [
            "monaco-icon-label"
        ], r = [
            "monaco-icon-label-container"
        ];
        let s = "";
        if (n && (n.extraClasses && i.push(...n.extraClasses), n.bold && i.push("bold"), n.italic && i.push("italic"), n.strikethrough && i.push("strikethrough"), n.disabledCommand && r.push("disabled"), n.title && (typeof n.title == "string" ? s += n.title : s += e)), this.updateIcon(n?.iconElement, n?.iconPath), this.domNode.classNames = i, this.domNode.element.setAttribute("aria-label", s), this.labelContainer.classList.value = "", this.labelContainer.classList.add(...r), this.setupHover(n?.descriptionTitle ? this.labelContainer : this.element, n?.title), this.nameNode.setLabel(e, n), t || this.descriptionNode) {
            const o = this.getOrCreateDescriptionNode();
            o instanceof tT ? (o.set(t || "", n ? n.descriptionMatches : void 0, void 0, n?.labelEscapeNewLines, n?.supportIcons ?? this.creationOptions?.supportIcons), this.setupHover(o.element, n?.descriptionTitle)) : (o.textContent = t && n?.labelEscapeNewLines ? tT.escapeNewLines(t, []) : t || "", this.setupHover(o.element, n?.descriptionTitle || ""), o.empty = !t);
        }
        if (n?.suffix || this.suffixNode) {
            const o = this.getOrCreateSuffixNode();
            o.textContent = n?.suffix ?? "";
        }
    }
    setupHover(e, t) {
        const n = this.customHovers.get(e);
        if (n && (n.dispose(), this.customHovers.delete(e)), !t) {
            e.removeAttribute("title");
            return;
        }
        let i = e;
        if (this.creationOptions?.hoverTargetOverride) {
            if (!iw(e, this.creationOptions.hoverTargetOverride)) throw new Error("hoverTargetOverrride must be an ancestor of the htmlElement");
            i = this.creationOptions.hoverTargetOverride;
        }
        if (this.hoverDelegate.showNativeHover) {
            let s = function(o, a) {
                Xr(a) ? o.title = _re(a) : a?.markdownNotSupportedFallback ? o.title = a.markdownNotSupportedFallback : o.removeAttribute("title");
            };
            var r = s;
            s(i, t);
        } else {
            const s = p5().setupManagedHover(this.hoverDelegate, i, t);
            s && this.customHovers.set(e, s);
        }
    }
    updateIcon(e, t) {
        e ? (this.clearIconPathNode(), this.setIconElementNode(e)) : t ? (this.clearIconElementNode(), this.setIconPathNode(t)) : (this.clearIconPathNode(), this.clearIconElementNode());
    }
    setIconElementNode(e) {
        this.iconElementNode !== e && (this.clearIconElementNode(), e.classList.add("monaco-icon-label-iconelement"), this.domNode.element.prepend(e), this.iconElementNode = e);
    }
    clearIconElementNode() {
        this.iconElementNode && (this.iconElementNode.remove(), this.iconElementNode = void 0);
    }
    setIconPathNode(e) {
        this.iconPathNode || (this.iconPathNode = Ve(".monaco-icon-label-iconpath"), this.domNode.element.prepend(this.iconPathNode)), this.iconPathNode.style.backgroundImage = AE(e), this.iconPathNode.style.backgroundRepeat = "no-repeat", this.iconPathNode.style.backgroundPosition = "center", this.iconPathNode.style.backgroundSize = "contain";
    }
    clearIconPathNode() {
        this.iconPathNode && (this.iconPathNode.remove(), this.iconPathNode = void 0);
    }
    dispose() {
        super.dispose();
        for (const e of this.customHovers.values())e.dispose();
        this.customHovers.clear();
    }
    getOrCreateSuffixNode() {
        if (!this.suffixNode) {
            const e = this._register(new h3t($Dc(this.nameContainer, Ve("span.monaco-icon-suffix-container"))));
            this.suffixNode = this._register(new h3t(Ye(e.element, Ve("span.label-suffix"))));
        }
        return this.suffixNode;
    }
    getOrCreateDescriptionNode() {
        if (!this.descriptionNode) {
            const e = this._register(new h3t(Ye(this.labelContainer, Ve("span.monaco-icon-description-container"))));
            this.creationOptions?.supportDescriptionHighlights ? this.descriptionNode = this._register(new tT(Ye(e.element, Ve("span.label-description")))) : this.descriptionNode = this._register(new h3t(Ye(e.element, Ve("span.label-description"))));
        }
        return this.descriptionNode;
    }
}, LWc = class {
    constructor(e){
        this.container = e, this.label = void 0, this.singleLabel = void 0;
    }
    setLabel(e, t) {
        if (!(this.label === e && yh({
            ...this.options,
            iconElement: void 0
        }, {
            ...t,
            iconElement: void 0
        }))) if (this.label = e, this.options = t, typeof e == "string") this.singleLabel || (this.container.innerText = "", this.container.classList.remove("multiple"), this.singleLabel = Ye(this.container, Ve("a.label-name", {
            id: t?.domId
        }))), this.singleLabel.textContent = e;
        else {
            this.container.innerText = "", this.container.classList.add("multiple"), this.singleLabel = void 0;
            for(let n = 0; n < e.length; n++){
                const i = e[n], r = t?.domId && `${t?.domId}_${n}`;
                Ye(this.container, Ve("a.label-name", {
                    id: r,
                    "data-icon-label-count": e.length,
                    "data-icon-label-index": n,
                    role: "treeitem"
                }, i)), n < e.length - 1 && Ye(this.container, Ve("span.label-separator", void 0, t?.separator || "/"));
            }
        }
    }
}, NWc = class extends we {
    constructor(e, t){
        super(), this.container = e, this.supportIcons = t, this.label = void 0, this.singleLabel = void 0;
    }
    setLabel(e, t) {
        if (this.label === e && yh({
            ...this.options,
            iconElement: void 0
        }, {
            ...t,
            iconElement: void 0
        })) return;
        this.label = e, this.options = t;
        const n = t?.supportIcons ?? this.supportIcons;
        if (typeof e == "string") this.singleLabel || (this.container.innerText = "", this.container.classList.remove("multiple"), this.singleLabel = this._register(new tT(Ye(this.container, Ve("a.label-name", {
            id: t?.domId
        }))))), this.singleLabel.set(e, t?.matches, void 0, t?.labelEscapeNewLines, n);
        else {
            this.container.innerText = "", this.container.classList.add("multiple"), this.singleLabel = void 0;
            const i = t?.separator || "/", r = $kg(e, i, t?.matches);
            for(let s = 0; s < e.length; s++){
                const o = e[s], a = r ? r[s] : void 0, c = t?.domId && `${t?.domId}_${s}`, l = Ve("a.label-name", {
                    id: c,
                    "data-icon-label-count": e.length,
                    "data-icon-label-index": s,
                    role: "treeitem"
                });
                this._register(new tT(Ye(this.container, l))).set(o, a, void 0, t?.labelEscapeNewLines, n), s < e.length - 1 && Ye(l, Ve("span.label-separator", void 0, i));
            }
        }
    }
};

}
