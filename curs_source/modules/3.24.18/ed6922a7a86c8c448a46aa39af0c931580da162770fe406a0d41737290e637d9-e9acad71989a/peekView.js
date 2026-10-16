import { S, bt, ve } from "./HVr.js";
import { Zm, cm, f1 } from "./actionbar.js";
import { Vo, er } from "./actions.js";
import { C, ie } from "./actions_2.js";
import { Vb, uc } from "./baseColors.js";
import { Pe, _i } from "./codicons.js";
import { Ci, Sm } from "./color.js";
import { tc } from "./colorRegistry.js";
import { At, dn, xn } from "./contextkey.js";
import { en, zp } from "./dom_2.js";
import { eU, p1 } from "./editorColors.js";
import { yc } from "./editorExtensions.js";
import { Y7, r6 } from "./embeddedCodeEditorWidget.js";
import { Pn } from "./extensions.js";
import { Ze, _t } from "./instantiation.js";
import { lm } from "./menuEntryActionViewItem.js";
import { rt } from "./nls.js";
import { bu } from "./objects.js";
import { kW } from "./observableCodeEditor.js";
import { rkg } from "./peekViewWidget.css";
import { Ep, Fd, Lt, Ve, Ye, gR, mn, pp, tf, vn, wM, y3 } from "./qIc.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
import { ZFt, r_n } from "./zoneWidget.js";
var QFt, NO, JFt, SHc, hRe, bKe, yKe, SKe, Hwe, s_n, okg, akg, ckg, lkg, ors, ukg, dkg, hkg, ars, pkg;
export { Hwe, JFt, NO, QFt, SHc, SKe, akg, ars, bKe, ckg, dkg, hRe, hkg, lkg, okg, ors, pkg, s_n, ukg, yKe };
var __wakaru_lU_initialized = false;
export function lU() {
if (__wakaru_lU_initialized) return;
__wakaru_lU_initialized = true;
"use strict";
x(), en(), Zm(), Vo(), _i(), Sr(), Sm(), bt(), bu(), rkg(), yc(), Y7(), r_n(), rt(), lm(), dn(), Pn(), Ze(), tc(), kW(), QFt = vn("IPeekViewService"), mn(QFt, class {
    constructor(){
        this._widgets = new Map;
    }
    addExclusiveWidget(e, t) {
        const n = this._widgets.get(e);
        n && (n.listener.dispose(), n.widget.dispose());
        const i = ()=>{
            const r = this._widgets.get(e);
            r && r.widget === t && (r.listener.dispose(), this._widgets.delete(e));
        };
        this._widgets.set(e, {
            widget: t,
            listener: t.onDidClose(i)
        });
    }
}, 1), ((e)=>{
    e.inPeekEditor = new At("inReferenceSearchEditor", !0, S(1458, null)), e.notInPeekEditor = e.inPeekEditor.toNegated();
})(NO || (NO = {})), JFt = class {
    constructor(e, t){
        e instanceof r6 && NO.inPeekEditor.bindTo(t);
    }
    dispose() {}
}, JFt.ID = "editor.contrib.referenceController", JFt = ie([
    C(1, xn)
], JFt), pp(JFt.ID, JFt, 0), SHc = {
    headerBackgroundColor: Ci.white,
    primaryHeadingColor: Ci.fromHex("#333333"),
    secondaryHeadingColor: Ci.fromHex("#6c6c6cb3")
}, hRe = class extends ZFt {
    constructor(e, t, n){
        super(e, t), this.instantiationService = n, this._onDidClose = new ve, this.onDidClose = this._onDidClose.event, y3(this.options, SHc, !1);
        const i = gR(this.editor);
        i.openedPeekWidgets.set(i.openedPeekWidgets.get() + 1, void 0);
    }
    dispose() {
        if (!this.disposed) {
            this.disposed = !0, super.dispose(), this._onDidClose.fire(this);
            const e = gR(this.editor);
            e.openedPeekWidgets.set(e.openedPeekWidgets.get() - 1, void 0);
        }
    }
    style(e) {
        const t = this.options;
        e.headerBackgroundColor && (t.headerBackgroundColor = e.headerBackgroundColor), e.primaryHeadingColor && (t.primaryHeadingColor = e.primaryHeadingColor), e.secondaryHeadingColor && (t.secondaryHeadingColor = e.secondaryHeadingColor), super.style(e);
    }
    _applyStyles() {
        super._applyStyles();
        const e = this.options;
        this._headElement && e.headerBackgroundColor && (this._headElement.style.backgroundColor = e.headerBackgroundColor.toString()), this._primaryHeading && e.primaryHeadingColor && (this._primaryHeading.style.color = e.primaryHeadingColor.toString()), this._secondaryHeading && e.secondaryHeadingColor && (this._secondaryHeading.style.color = e.secondaryHeadingColor.toString()), this._bodyElement && e.frameColor && (this._bodyElement.style.borderColor = e.frameColor.toString());
    }
    _fillContainer(e) {
        this.setCssClass("peekview-widget"), this._headElement = Ve(".head"), this._bodyElement = Ve(".body"), this._fillHead(this._headElement), this._fillBody(this._bodyElement), e.appendChild(this._headElement), e.appendChild(this._bodyElement);
    }
    _fillHead(e, t) {
        this._titleElement = Ve(".peekview-title"), this.options.supportOnTitleClick && (this._titleElement.classList.add("clickable"), zp(this._titleElement, "click", (r)=>this._onTitleClick(r))), Ye(this._headElement, this._titleElement), this._fillTitleIcon(this._titleElement), this._primaryHeading = Ve("span.filename"), this._secondaryHeading = Ve("span.dirname"), this._metaHeading = Ve("span.meta"), Ye(this._titleElement, this._primaryHeading, this._secondaryHeading, this._metaHeading);
        const n = Ve(".peekview-actions");
        Ye(this._headElement, n);
        const i = this._getActionBarOptions();
        this._actionbarWidget = new cm(n, i), this._disposables.add(this._actionbarWidget), t || this._actionbarWidget.push(this._disposables.add(new er("peekview.close", S(1459, null), Ft.asClassName(Pe.close), !0, ()=>(this.dispose(), Promise.resolve()))), {
            label: !1,
            icon: !0
        });
    }
    _fillTitleIcon(e) {}
    _getActionBarOptions() {
        return {
            actionViewItemProvider: wM.bind(void 0, this.instantiationService),
            orientation: f1.HORIZONTAL
        };
    }
    _onTitleClick(e) {}
    setTitle(e, t) {
        this._primaryHeading && this._secondaryHeading && (this._primaryHeading.innerText = e, this._primaryHeading.setAttribute("title", e), t ? this._secondaryHeading.innerText = t : Fd(this._secondaryHeading));
    }
    setMetaTitle(e) {
        this._metaHeading && (e ? (this._metaHeading.innerText = e, tf(this._metaHeading)) : Ep(this._metaHeading));
    }
    _doLayout(e, t) {
        if (!this._isShowing && e < 0) {
            this.dispose();
            return;
        }
        const n = Math.ceil(this.editor.getOption(68) * 1.2), i = Math.round(e - (n + 2));
        this._doLayoutHead(n, t), this._doLayoutBody(i, t);
    }
    _doLayoutHead(e, t) {
        this._headElement && (this._headElement.style.height = `${e}px`, this._headElement.style.lineHeight = this._headElement.style.height);
    }
    _doLayoutBody(e, t) {
        this._bodyElement && (this._bodyElement.style.height = `${e}px`);
    }
}, hRe = ie([
    C(2, _t)
], hRe), bKe = Lt("peekViewTitle.background", {
    dark: "#252526",
    light: "#F3F3F3",
    hcDark: Ci.black,
    hcLight: Ci.white
}, S(1460, null)), yKe = Lt("peekViewTitleLabel.foreground", {
    dark: Ci.white,
    light: Ci.black,
    hcDark: Ci.white,
    hcLight: p1
}, S(1461, null)), SKe = Lt("peekViewTitleDescription.foreground", {
    dark: "#ccccccb3",
    light: "#616161",
    hcDark: "#FFFFFF99",
    hcLight: "#292929"
}, S(1462, null)), Hwe = Lt("peekView.border", {
    dark: eU,
    light: eU,
    hcDark: uc,
    hcLight: uc
}, S(1463, null)), s_n = Lt("peekViewResult.background", {
    dark: "#252526",
    light: "#F3F3F3",
    hcDark: Ci.black,
    hcLight: Ci.white
}, S(1464, null)), okg = Lt("peekViewResult.lineForeground", {
    dark: "#bbbbbb",
    light: "#646465",
    hcDark: Ci.white,
    hcLight: p1
}, S(1465, null)), akg = Lt("peekViewResult.fileForeground", {
    dark: Ci.white,
    light: "#1E1E1E",
    hcDark: Ci.white,
    hcLight: p1
}, S(1466, null)), ckg = Lt("peekViewResult.selectionBackground", {
    dark: "#3399ff33",
    light: "#3399ff33",
    hcDark: null,
    hcLight: null
}, S(1467, null)), lkg = Lt("peekViewResult.selectionForeground", {
    dark: Ci.white,
    light: "#6C6C6C",
    hcDark: Ci.white,
    hcLight: p1
}, S(1468, null)), ors = Lt("peekViewEditor.background", {
    dark: "#001F33",
    light: "#F2F8FC",
    hcDark: Ci.black,
    hcLight: Ci.white
}, S(1469, null)), ukg = Lt("peekViewEditorGutter.background", ors, S(1470, null)), dkg = Lt("peekViewEditorStickyScroll.background", ors, S(1471, null)), hkg = Lt("peekViewResult.matchHighlightBackground", {
    dark: "#ea5c004d",
    light: "#ea5c004d",
    hcDark: null,
    hcLight: null
}, S(1472, null)), ars = Lt("peekViewEditor.matchHighlightBackground", {
    dark: "#ff8f0099",
    light: "#f5d802de",
    hcDark: null,
    hcLight: null
}, S(1473, null)), pkg = Lt("peekViewEditor.matchHighlightBorder", {
    dark: null,
    light: null,
    hcDark: Vb,
    hcLight: Vb
}, S(1474, null));

}
