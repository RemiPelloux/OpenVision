import { D, Qe, st } from "./Iwo.js";
import { IYd, rIr } from "./countBadge.js";
import { CM, bqo } from "./defaultStyles.js";
import { Hn } from "./dom_2.js";
import { one, s6 } from "./filters.js";
import { sIr, ynt } from "./highlightedLabel.js";
import { Snt, mRe } from "./iconLabel.js";
import { It, dn } from "./instantiation.js";
import { Al, ru } from "./keybinding.js";
import { Yp, qg } from "./label.js";
import { Bt } from "./nls.js";
import { MHe, ZBt, h_e, iSt } from "./referencesModel.js";
import { Em, Rh } from "./resolverService.js";
import { Aa, Lr, Mc } from "./resources.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ii, fr, vwe } from "./ze.js";
var oIr, RYd, aIr, PYd, lIr, QBt, MYd, EVo, IVo, DYd;
export { DYd, EVo, IVo, MYd, PYd, QBt, RYd, aIr, lIr, oIr };
var __wakaru_k5y_initialized = false;
export function k5y() {
if (__wakaru_k5y_initialized) return;
__wakaru_k5y_initialized = true;
"use strict";
E(), Hn(), IYd(), sIr(), Snt(), s6(), Qe(), Lr(), Em(), Bt(), It(), ru(), qg(), CM(), iSt(), oIr = class {
    constructor(t){
        this._resolverService = t;
    }
    hasChildren(t) {
        return t instanceof h_e || t instanceof ZBt;
    }
    getChildren(t) {
        if (t instanceof h_e) return t.groups;
        if (t instanceof ZBt) return t.resolve(this._resolverService).then((e)=>e.children);
        throw new Error("bad tree");
    }
}, oIr = Re([
    F(0, Rh)
], oIr), RYd = class {
    getHeight() {
        return 23;
    }
    getTemplateId(t) {
        return t instanceof ZBt ? QBt.id : IVo.id;
    }
}, aIr = class {
    constructor(t){
        this._keybindingService = t;
    }
    getKeyboardNavigationLabel(t) {
        if (t instanceof MHe) {
            const e = t.parent.getPreview(t)?.preview(t.range);
            if (e) return e.value;
        }
        return Aa(t.uri);
    }
    mightProducePrintableCharacter(t) {
        return this._keybindingService.mightProducePrintableCharacter(t);
    }
}, aIr = Re([
    F(0, Al)
], aIr), PYd = class {
    getId(t) {
        return t instanceof MHe ? t.id : t.uri;
    }
}, lIr = class extends st {
    constructor(t, e){
        super(), this._labelService = e;
        const n = document.createElement("div");
        n.classList.add("reference-file"), this.file = this._register(new mRe(n, {
            supportHighlights: !0
        })), this.badge = this._register(new rIr(fr(n, Ii(".count")), {}, bqo)), t.appendChild(n);
    }
    set(t, e) {
        const n = Mc(t.uri);
        this.file.setLabel(this._labelService.getUriBasenameLabel(t.uri), this._labelService.getUriLabel(n, {
            relative: !0
        }), {
            title: this._labelService.getUriLabel(t.uri),
            matches: e
        });
        const i = t.children.length;
        this.badge.setCount(i), i > 1 ? this.badge.setTitleFormat(D(1219, null, i)) : this.badge.setTitleFormat(D(1220, null, i));
    }
}, lIr = Re([
    F(1, Yp)
], lIr), QBt = class {
    constructor(t){
        this._instantiationService = t, this.templateId = QBt.id;
    }
    renderTemplate(t) {
        return this._instantiationService.createInstance(lIr, t);
    }
    renderElement(t, e, n) {
        n.set(t.element, vwe(t.filterData));
    }
    disposeTemplate(t) {
        t.dispose();
    }
}, QBt.id = "FileReferencesRenderer", QBt = Re([
    F(0, dn)
], QBt), MYd = class extends st {
    constructor(t){
        super(), this.label = this._register(new ynt(t));
    }
    set(t, e) {
        const n = t.parent.getPreview(t)?.preview(t.range);
        if (!n || !n.value) this.label.set(`${Aa(t.uri)}:${t.range.startLineNumber + 1}:${t.range.startColumn + 1}`);
        else {
            const { value: i, highlight: r } = n;
            e && !one.isDefault(e) ? (this.label.element.classList.toggle("referenceMatch", !1), this.label.set(i, vwe(e))) : (this.label.element.classList.toggle("referenceMatch", !0), this.label.set(i, [
                r
            ]));
        }
    }
}, EVo = class $Rb {
    constructor(){
        this.templateId = $Rb.id;
    }
    renderTemplate(e) {
        return new MYd(e);
    }
    renderElement(e, n, i) {
        i.set(e.element, e.filterData);
    }
    disposeTemplate(e) {
        e.dispose();
    }
}, EVo.id = "OneReferenceRenderer", IVo = EVo, DYd = class {
    getWidgetAriaLabel() {
        return D(1221, null);
    }
    getAriaLabel(t) {
        return t.ariaMessage;
    }
};

}
