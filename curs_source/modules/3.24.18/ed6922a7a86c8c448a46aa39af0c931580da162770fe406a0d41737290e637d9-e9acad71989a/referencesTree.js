import { S, Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Hle, fRe } from "./countBadge.js";
import { Jge, sf } from "./defaultStyles.js";
import { en } from "./dom_2.js";
import { Yy, jV } from "./filters.js";
import { tT, ufe } from "./highlightedLabel.js";
import { TW, Tre } from "./iconLabel.js";
import { Ze, _t } from "./instantiation.js";
import { no, qr } from "./keybinding.js";
import { dc, yu } from "./label.js";
import { rt } from "./nls.js";
import { RE, Ve, Ye } from "./qIc.js";
import { Tmt, XK, gRe, xKe } from "./referencesModel.js";
import { Nl, bc } from "./resolverService.js";
import { Li, fo, ml } from "./resources.js";
import { x } from "./tslib.es6.js";
var aSi, OWc, cSi, FWc, lSi, Emt, BWc, zrs, Krs, UWc;
export { BWc, Emt, FWc, Krs, OWc, UWc, aSi, cSi, lSi, zrs };
var __wakaru_Hkg_initialized = false;
export function Hkg() {
if (__wakaru_Hkg_initialized) return;
__wakaru_Hkg_initialized = true;
"use strict";
x(), en(), fRe(), ufe(), Tre(), Yy(), Se(), Li(), Nl(), rt(), Ze(), no(), yu(), sf(), xKe(), aSi = class {
    constructor(e){
        this._resolverService = e;
    }
    hasChildren(e) {
        return e instanceof XK || e instanceof Tmt;
    }
    getChildren(e) {
        if (e instanceof XK) return e.groups;
        if (e instanceof Tmt) return e.resolve(this._resolverService).then((t)=>t.children);
        throw new Error("bad tree");
    }
}, aSi = ie([
    C(0, bc)
], aSi), OWc = class {
    getHeight() {
        return 23;
    }
    getTemplateId(e) {
        return e instanceof Tmt ? Emt.id : Krs.id;
    }
}, cSi = class {
    constructor(e){
        this._keybindingService = e;
    }
    getKeyboardNavigationLabel(e) {
        if (e instanceof gRe) {
            const t = e.parent.getPreview(e)?.preview(e.range);
            if (t) return t.value;
        }
        return fo(e.uri);
    }
    mightProducePrintableCharacter(e) {
        return this._keybindingService.mightProducePrintableCharacter(e);
    }
}, cSi = ie([
    C(0, qr)
], cSi), FWc = class {
    getId(e) {
        return e instanceof gRe ? e.id : e.uri;
    }
}, lSi = class extends we {
    constructor(e, t){
        super(), this._labelService = t;
        const n = document.createElement("div");
        n.classList.add("reference-file"), this.file = this._register(new TW(n, {
            supportHighlights: !0
        })), this.badge = this._register(new Hle(Ye(n, Ve(".count")), {}, Jge)), e.appendChild(n);
    }
    set(e, t) {
        const n = ml(e.uri);
        this.file.setLabel(this._labelService.getUriBasenameLabel(e.uri), this._labelService.getUriLabel(n, {
            relative: !0
        }), {
            title: this._labelService.getUriLabel(e.uri),
            matches: t
        });
        const i = e.children.length;
        this.badge.setCount(i), i > 1 ? this.badge.setTitleFormat(S(1219, null, i)) : this.badge.setTitleFormat(S(1220, null, i));
    }
}, lSi = ie([
    C(1, dc)
], lSi), Emt = class {
    constructor(e){
        this._instantiationService = e, this.templateId = Emt.id;
    }
    renderTemplate(e) {
        return this._instantiationService.createInstance(lSi, e);
    }
    renderElement(e, t, n) {
        n.set(e.element, RE(e.filterData));
    }
    disposeTemplate(e) {
        e.dispose();
    }
}, Emt.id = "FileReferencesRenderer", Emt = ie([
    C(0, _t)
], Emt), BWc = class extends we {
    constructor(e){
        super(), this.label = this._register(new tT(e));
    }
    set(e, t) {
        const n = e.parent.getPreview(e)?.preview(e.range);
        if (!n || !n.value) this.label.set(`${fo(e.uri)}:${e.range.startLineNumber + 1}:${e.range.startColumn + 1}`);
        else {
            const { value: i, highlight: r } = n;
            t && !jV.isDefault(t) ? (this.label.element.classList.toggle("referenceMatch", !1), this.label.set(i, RE(t))) : (this.label.element.classList.toggle("referenceMatch", !0), this.label.set(i, [
                r
            ]));
        }
    }
}, zrs = class owm {
    constructor(){
        this.templateId = owm.id;
    }
    renderTemplate(t) {
        return new BWc(t);
    }
    renderElement(t, n, i) {
        i.set(t.element, t.filterData);
    }
    disposeTemplate(t) {
        t.dispose();
    }
}, zrs.id = "OneReferenceRenderer", Krs = zrs, UWc = class {
    getWidgetAriaLabel() {
        return S(1221, null);
    }
    getAriaLabel(e) {
        return e.ariaMessage;
    }
};

}
