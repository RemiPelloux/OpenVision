import { D, Gt, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { PT, oR, wM } from "./actionbar.js";
import { vu, za } from "./actions.js";
import { Ad, Ck } from "./baseColors.js";
import { gs, yt } from "./codicons.js";
import { _b, ls } from "./color.js";
import { Ap } from "./colorRegistry.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { Hn, n0 } from "./dom_2.js";
import { MD, lwe } from "./editorColors.js";
import { Ud } from "./editorExtensions.js";
import { l_e, xwe } from "./embeddedCodeEditorWidget.js";
import { Rn } from "./extensions.js";
import { It, dn } from "./instantiation.js";
import { MC } from "./menuEntryActionViewItem.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { FQ } from "./observableCodeEditor.js";
import { UOy } from "./peekViewWidget.css";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { AS, Ii, R0, fr, kY, mn, sRe, sv, uy, z3 } from "./ze.js";
import { Dzo, pKd } from "./zoneWidget.js";
var Goi, $j, xvn, mKd, gnt, jBt, $Bt, HBt, Avn, NEr, $Oy, HOy, WOy, GOy, Nzo, qOy, zOy, VOy, Lzo, KOy;
export { $Bt, $Oy, $j, Avn, GOy, Goi, HBt, HOy, KOy, Lzo, NEr, Nzo, VOy, WOy, gnt, jBt, mKd, qOy, xvn, zOy };
var __wakaru_c_e_initialized = false;
export function c_e() {
if (__wakaru_c_e_initialized) return;
__wakaru_c_e_initialized = true;
"use strict";
E(), Hn(), PT(), vu(), gs(), ta(), _b(), Gt(), cp(), UOy(), Ud(), xwe(), pKd(), Bt(), MC(), Hi(), Rn(), It(), Ap(), FQ(), Goi = jn("IPeekViewService"), bn(Goi, class {
    constructor(){
        this._widgets = new Map;
    }
    addExclusiveWidget(t, e) {
        const n = this._widgets.get(t);
        n && (n.listener.dispose(), n.widget.dispose());
        const i = ()=>{
            const r = this._widgets.get(t);
            r && r.widget === e && (r.listener.dispose(), this._widgets.delete(t));
        };
        this._widgets.set(t, {
            widget: e,
            listener: e.onDidClose(i)
        });
    }
}, 1), ((t)=>{
    t.inPeekEditor = new cn("inReferenceSearchEditor", !0, D(1458, null)), t.notInPeekEditor = t.inPeekEditor.toNegated();
})($j || ($j = {})), xvn = class {
    constructor(t, e){
        t instanceof l_e && $j.inPeekEditor.bindTo(e);
    }
    dispose() {}
}, xvn.ID = "editor.contrib.referenceController", xvn = Re([
    F(1, Rr)
], xvn), sv(xvn.ID, xvn, 0), mKd = {
    headerBackgroundColor: ls.white,
    primaryHeadingColor: ls.fromHex("#333333"),
    secondaryHeadingColor: ls.fromHex("#6c6c6cb3")
}, gnt = class extends Dzo {
    constructor(t, e, n){
        super(t, e), this.instantiationService = n, this._onDidClose = new tt, this.onDidClose = this._onDidClose.event, kY(this.options, mKd, !1);
        const i = z3(this.editor);
        i.openedPeekWidgets.set(i.openedPeekWidgets.get() + 1, void 0);
    }
    dispose() {
        if (!this.disposed) {
            this.disposed = !0, super.dispose(), this._onDidClose.fire(this);
            const t = z3(this.editor);
            t.openedPeekWidgets.set(t.openedPeekWidgets.get() - 1, void 0);
        }
    }
    style(t) {
        const e = this.options;
        t.headerBackgroundColor && (e.headerBackgroundColor = t.headerBackgroundColor), t.primaryHeadingColor && (e.primaryHeadingColor = t.primaryHeadingColor), t.secondaryHeadingColor && (e.secondaryHeadingColor = t.secondaryHeadingColor), super.style(t);
    }
    _applyStyles() {
        super._applyStyles();
        const t = this.options;
        this._headElement && t.headerBackgroundColor && (this._headElement.style.backgroundColor = t.headerBackgroundColor.toString()), this._primaryHeading && t.primaryHeadingColor && (this._primaryHeading.style.color = t.primaryHeadingColor.toString()), this._secondaryHeading && t.secondaryHeadingColor && (this._secondaryHeading.style.color = t.secondaryHeadingColor.toString()), this._bodyElement && t.frameColor && (this._bodyElement.style.borderColor = t.frameColor.toString());
    }
    _fillContainer(t) {
        this.setCssClass("peekview-widget"), this._headElement = Ii(".head"), this._bodyElement = Ii(".body"), this._fillHead(this._headElement), this._fillBody(this._bodyElement), t.appendChild(this._headElement), t.appendChild(this._bodyElement);
    }
    _fillHead(t, e) {
        this._titleElement = Ii(".peekview-title"), this.options.supportOnTitleClick && (this._titleElement.classList.add("clickable"), n0(this._titleElement, "click", (r)=>this._onTitleClick(r))), fr(this._headElement, this._titleElement), this._fillTitleIcon(this._titleElement), this._primaryHeading = Ii("span.filename"), this._secondaryHeading = Ii("span.dirname"), this._metaHeading = Ii("span.meta"), fr(this._titleElement, this._primaryHeading, this._secondaryHeading, this._metaHeading);
        const n = Ii(".peekview-actions");
        fr(this._headElement, n);
        const i = this._getActionBarOptions();
        this._actionbarWidget = new oR(n, i), this._disposables.add(this._actionbarWidget), e || this._actionbarWidget.push(this._disposables.add(new za("peekview.close", D(1459, null), Gn.asClassName(yt.close), !0, ()=>(this.dispose(), Promise.resolve()))), {
            label: !1,
            icon: !0
        });
    }
    _fillTitleIcon(t) {}
    _getActionBarOptions() {
        return {
            actionViewItemProvider: sRe.bind(void 0, this.instantiationService),
            orientation: wM.HORIZONTAL
        };
    }
    _onTitleClick(t) {}
    setTitle(t, e) {
        this._primaryHeading && this._secondaryHeading && (this._primaryHeading.innerText = t, this._primaryHeading.setAttribute("title", t), e ? this._secondaryHeading.innerText = e : uy(this._secondaryHeading));
    }
    setMetaTitle(t) {
        this._metaHeading && (t ? (this._metaHeading.innerText = t, R0(this._metaHeading)) : AS(this._metaHeading));
    }
    _doLayout(t, e) {
        if (!this._isShowing && t < 0) {
            this.dispose();
            return;
        }
        const n = Math.ceil(this.editor.getOption(68) * 1.2), i = Math.round(t - (n + 2));
        this._doLayoutHead(n, e), this._doLayoutBody(i, e);
    }
    _doLayoutHead(t, e) {
        this._headElement && (this._headElement.style.height = `${t}px`, this._headElement.style.lineHeight = this._headElement.style.height);
    }
    _doLayoutBody(t, e) {
        this._bodyElement && (this._bodyElement.style.height = `${t}px`);
    }
}, gnt = Re([
    F(2, dn)
], gnt), jBt = mn("peekViewTitle.background", {
    dark: "#252526",
    light: "#F3F3F3",
    hcDark: ls.black,
    hcLight: ls.white
}, D(1460, null)), $Bt = mn("peekViewTitleLabel.foreground", {
    dark: ls.white,
    light: ls.black,
    hcDark: ls.white,
    hcLight: MD
}, D(1461, null)), HBt = mn("peekViewTitleDescription.foreground", {
    dark: "#ccccccb3",
    light: "#616161",
    hcDark: "#FFFFFF99",
    hcLight: "#292929"
}, D(1462, null)), Avn = mn("peekView.border", {
    dark: lwe,
    light: lwe,
    hcDark: Ad,
    hcLight: Ad
}, D(1463, null)), NEr = mn("peekViewResult.background", {
    dark: "#252526",
    light: "#F3F3F3",
    hcDark: ls.black,
    hcLight: ls.white
}, D(1464, null)), $Oy = mn("peekViewResult.lineForeground", {
    dark: "#bbbbbb",
    light: "#646465",
    hcDark: ls.white,
    hcLight: MD
}, D(1465, null)), HOy = mn("peekViewResult.fileForeground", {
    dark: ls.white,
    light: "#1E1E1E",
    hcDark: ls.white,
    hcLight: MD
}, D(1466, null)), WOy = mn("peekViewResult.selectionBackground", {
    dark: "#3399ff33",
    light: "#3399ff33",
    hcDark: null,
    hcLight: null
}, D(1467, null)), GOy = mn("peekViewResult.selectionForeground", {
    dark: ls.white,
    light: "#6C6C6C",
    hcDark: ls.white,
    hcLight: MD
}, D(1468, null)), Nzo = mn("peekViewEditor.background", {
    dark: "#001F33",
    light: "#F2F8FC",
    hcDark: ls.black,
    hcLight: ls.white
}, D(1469, null)), qOy = mn("peekViewEditorGutter.background", Nzo, D(1470, null)), zOy = mn("peekViewEditorStickyScroll.background", Nzo, D(1471, null)), VOy = mn("peekViewResult.matchHighlightBackground", {
    dark: "#ea5c004d",
    light: "#ea5c004d",
    hcDark: null,
    hcLight: null
}, D(1472, null)), Lzo = mn("peekViewEditor.matchHighlightBackground", {
    dark: "#ff8f0099",
    light: "#f5d802de",
    hcDark: null,
    hcLight: null
}, D(1473, null)), KOy = mn("peekViewEditor.matchHighlightBorder", {
    dark: null,
    light: null,
    hcDark: Ck,
    hcLight: Ck
}, D(1474, null));

}
