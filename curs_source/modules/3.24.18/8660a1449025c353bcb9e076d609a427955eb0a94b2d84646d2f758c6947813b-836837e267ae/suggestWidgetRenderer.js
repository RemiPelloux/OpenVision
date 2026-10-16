import { D, Gt, Nt, Qe, tt } from "./Iwo.js";
import { gs, yt } from "./codicons.js";
import { Hn } from "./dom_2.js";
import { ms, wk } from "./files.js";
import { s6 } from "./filters.js";
import { EB } from "./getIconClasses.js";
import { Snt, mRe } from "./iconLabel.js";
import { b_ } from "./iconRegistry.js";
import { oNa, pR, rNa } from "./ipa.js";
import { Kp, Ph } from "./language.js";
import { Iy, afn } from "./languages.js";
import { dd, xp } from "./model.js";
import { Bt } from "./nls.js";
import { _Dp } from "./suggestWidgetDetails.js";
import { Gn, ta } from "./themables.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { AS, Ii, R0, fr, qa, vwe } from "./ze.js";
var Jwt, yDp, SDp, OWr;
export { Jwt, OWr, SDp, yDp };
var __wakaru_Ix1_initialized = false;
export function Ix1() {
if (__wakaru_Ix1_initialized) return;
__wakaru_Ix1_initialized = true;
"use strict";
E(), Hn(), Snt(), gs(), ta(), Gt(), s6(), Qe(), fn(), Iy(), EB(), xp(), Kp(), Bt(), ms(), b_(), Dl(), _Dp(), yDp = qa("suggest-more-info", yt.chevronRight, D(1626, null)), SDp = new (Jwt = class {
    extract(t, e) {
        if (t.textLabel.match(Jwt._regexStrict)) return e[0] = t.textLabel, !0;
        if (t.completion.detail && t.completion.detail.match(Jwt._regexStrict)) return e[0] = t.completion.detail, !0;
        if (t.completion.documentation) {
            const n = typeof t.completion.documentation == "string" ? t.completion.documentation : t.completion.documentation.value, i = Jwt._regexRelaxed.exec(n);
            if (i && (i.index === 0 || i.index + i[0].length === n.length)) return e[0] = i[0], !0;
        }
        return !1;
    }
}, Jwt._regexRelaxed = /(#([\da-fA-F]{3}){1,2}|(rgb|hsl)a\(\s*(\d{1,3}%?\s*,\s*){3}(1|0?\.\d+)\)|(rgb|hsl)\(\s*\d{1,3}%?(\s*,\s*\d{1,3}%?){2}\s*\))/, Jwt._regexStrict = new RegExp(`^${Jwt._regexRelaxed.source}$`, "i"), Jwt), OWr = class {
    constructor(t, e, n, i){
        this._editor = t, this._modelService = e, this._languageService = n, this._themeService = i, this._onDidToggleDetails = new tt, this.onDidToggleDetails = this._onDidToggleDetails.event, this.templateId = "suggestion";
    }
    dispose() {
        this._onDidToggleDetails.dispose();
    }
    renderTemplate(t) {
        const e = new Nt, n = t;
        n.classList.add("show-file-icons");
        const i = fr(t, Ii(".icon")), r = fr(i, Ii("span.colorspan")), s = fr(t, Ii(".contents")), o = fr(s, Ii(".main")), a = fr(o, Ii(".icon-label.codicon")), l = fr(o, Ii("span.left")), c = fr(o, Ii("span.right")), u = new mRe(l, {
            supportHighlights: !0,
            supportIcons: !0
        });
        e.add(u);
        const d = fr(l, Ii("span.signature-label")), h = fr(l, Ii("span.qualifier-label")), p = fr(c, Ii("span.details-label")), g = fr(c, Ii("span.readMore" + Gn.asCSSSelector(yDp)));
        return g.title = D(1627, null), {
            root: n,
            left: l,
            right: c,
            icon: i,
            colorspan: r,
            iconLabel: u,
            iconContainer: a,
            parametersLabel: d,
            qualifierLabel: h,
            detailsLabel: p,
            readMore: g,
            disposables: e,
            configureFont: ()=>{
                const _ = this._editor.getOptions(), b = _.get(52), y = b.getMassagedFontFamily(), S = b.fontFeatureSettings, k = _.get(124) || b.fontSize, C = _.get(125) || b.lineHeight, T = b.fontWeight, I = b.letterSpacing, A = `${k}px`, P = `${C}px`, M = `${I}px`;
                n.style.fontSize = A, n.style.fontWeight = T, n.style.letterSpacing = M, o.style.fontFamily = y, o.style.fontFeatureSettings = S, o.style.lineHeight = P, i.style.height = P, i.style.width = P, g.style.height = P, g.style.width = P;
            }
        };
    }
    renderElement(t, e, n) {
        n.configureFont();
        const { completion: i } = t;
        n.colorspan.style.backgroundColor = "";
        const r = {
            labelEscapeNewLines: !0,
            matches: vwe(t.score)
        }, s = [];
        if (i.kind === 19 && SDp.extract(t, s)) n.icon.className = "icon customcolor", n.iconContainer.className = "icon hide", n.colorspan.style.backgroundColor = s[0];
        else if (i.kind === 20 && this._themeService.getFileIconTheme().hasFileIcons) {
            n.icon.className = "icon hide", n.iconContainer.className = "icon hide";
            const o = pR(this._modelService, this._languageService, rt.from({
                scheme: "fake",
                path: t.textLabel
            }), wk.FILE), a = pR(this._modelService, this._languageService, rt.from({
                scheme: "fake",
                path: i.detail
            }), wk.FILE);
            r.extraClasses = o.length > a.length ? o : a;
        } else i.kind === 23 && this._themeService.getFileIconTheme().hasFolderIcons ? (n.icon.className = "icon hide", n.iconContainer.className = "icon hide", r.extraClasses = [
            pR(this._modelService, this._languageService, rt.from({
                scheme: "fake",
                path: t.textLabel
            }), wk.FOLDER),
            pR(this._modelService, this._languageService, rt.from({
                scheme: "fake",
                path: i.detail
            }), wk.FOLDER)
        ].flat()) : (n.icon.className = "icon hide", n.iconContainer.className = "", n.iconContainer.classList.add("suggest-icon", ...Gn.asClassNameArray(afn.toIcon(i.kind))));
        i.tags && i.tags.indexOf(1) >= 0 && (r.extraClasses = (r.extraClasses || []).concat([
            "deprecated"
        ]), r.matches = []), n.iconLabel.setLabel(t.textLabel, void 0, r), typeof i.label == "string" ? (n.parametersLabel.textContent = "", n.detailsLabel.textContent = oNa(i.detail || ""), n.root.classList.add("string-label")) : (n.parametersLabel.textContent = oNa(i.label.detail || ""), n.detailsLabel.textContent = oNa(i.label.description || ""), n.root.classList.remove("string-label")), this._editor.getOption(123).showInlineDetails ? R0(n.detailsLabel) : AS(n.detailsLabel), rNa(t) ? (n.right.classList.add("can-expand-details"), R0(n.readMore), n.readMore.onmousedown = (o)=>{
            o.stopPropagation(), o.preventDefault();
        }, n.readMore.onclick = (o)=>{
            o.stopPropagation(), o.preventDefault(), this._onDidToggleDetails.fire();
        }) : (n.right.classList.remove("can-expand-details"), AS(n.readMore), n.readMore.onmousedown = null, n.readMore.onclick = null);
    }
    disposeTemplate(t) {
        t.disposables.dispose();
    }
}, OWr = Re([
    F(1, dd),
    F(2, Ph),
    F(3, Ml)
], OWr);

}
