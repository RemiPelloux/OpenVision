import { Ct, S, Se, Zu, bt, si, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { N6c, W_g } from "./decorationCssRuleExtractor.js";
import { G_g, O6c } from "./decorationStyleCache.js";
import { en } from "./dom_2.js";
import { Tx } from "./fastDomNode.js";
import { Qfn, VK } from "./gpuDisposable.js";
import { r5e } from "./gpuUtils.js";
import { Ze, _t } from "./instantiation.js";
import { rt } from "./nls.js";
import { di, ji, pi } from "./notification.js";
import { qa } from "./observable.js";
import { F6c, Kpt, Xo, Xt, k6c, sa, xO, x_ } from "./qIc.js";
import { $_g, L6c } from "./rectangleRenderer.js";
import { hts, qge } from "./textureAtlas.js";
import { x } from "./tslib.es6.js";
var J1, B6c;
export { B6c, J1 };
var __wakaru_Jfn_initialized = false;
export function Jfn() {
if (__wakaru_Jfn_initialized) return;
__wakaru_Jfn_initialized = true;
"use strict";
x(), rt(), en(), Tx(), si(), Se(), qa(), Ze(), hts(), Cn(), ji(), Qfn(), r5e(), $_g(), W_g(), bt(), G_g(), J1 = class extends we {
    constructor(e, t, n, i){
        super(), this._instantiationService = t, this._notificationService = n, this.configurationService = i, this.maxGpuCols = 2e3, this.canvas = x_(document.createElement("canvas")), this.canvas.setClassName("editorCanvas"), this._register(Ct.runAndSubscribe(i.onDidChangeConfiguration, (a)=>{
            if (!a || a.affectsConfiguration("editor.scrollbar.verticalScrollbarSize")) {
                const c = i.getValue("editor").scrollbar?.verticalScrollbarSize ?? 14;
                this.canvas.domNode.style.boxSizing = "border-box", this.canvas.domNode.style.paddingRight = `${c}px`;
            }
        })), this.ctx = Kpt(this.canvas.domNode.getContext("webgpu")), J1.device || (J1.device = VK.requestDevice((a)=>{
            const c = [
                {
                    label: S(199, null),
                    run: ()=>this.configurationService.updateValue("editor.experimentalGpuAcceleration", "off")
                }
            ];
            this._notificationService.prompt(pi.Warning, a, c);
        }).then((a)=>(J1.deviceSync = a.object, J1._atlas || (J1._atlas = this._instantiationService.createInstance(qge, a.object.limits.maxTextureDimension2D, void 0, J1.decorationStyleCache)), a.object)));
        const r = Xo(this, sa().devicePixelRatio);
        this._register(Xt(sa(), "resize", ()=>{
            r.set(sa().devicePixelRatio, void 0);
        })), this.devicePixelRatio = r, this._register(xO(this.devicePixelRatio, ()=>J1.atlas?.clear()));
        const s = Xo(this, {
            width: this.canvas.domNode.width,
            height: this.canvas.domNode.height
        });
        this._register(k6c(this.canvas.domNode, sa(), (a, c)=>{
            this.canvas.domNode.width = a, this.canvas.domNode.height = c, s.set({
                width: a,
                height: c
            }, void 0);
        })), this.canvasDevicePixelDimensions = s;
        const o = Xo(this, 0);
        this._register(this.configurationService.onDidChangeConfiguration((a)=>{
            o.set(e.configuration.options.get(151).contentLeft, void 0);
        })), this.contentLeft = o, this.rectangleRenderer = this._instantiationService.createInstance(L6c, e, this.contentLeft, this.devicePixelRatio, this.canvas.domNode, this.ctx, J1.device);
    }
    static get decorationCssRuleExtractor() {
        return J1._decorationCssRuleExtractor;
    }
    static get decorationStyleCache() {
        return J1._decorationStyleCache;
    }
    static get atlas() {
        if (!J1._atlas) throw new Zu("Cannot call ViewGpuContext.textureAtlas before device is resolved");
        return J1._atlas;
    }
    get atlas() {
        return J1.atlas;
    }
    canRender(e, t, n) {
        const i = t.getViewLineRenderingData(n);
        if (i.containsRTL || i.maxColumn > this.maxGpuCols) return !1;
        if (i.inlineDecorations.length > 0) {
            let r = !0;
            for (const s of i.inlineDecorations){
                if (s.type !== 0) {
                    r = !1;
                    break;
                }
                const o = J1._decorationCssRuleExtractor.getStyleRules(this.canvas.domNode, s.inlineClassName);
                if (r &&= o.every((a)=>{
                    if (a.selectorText.includes(":")) return !1;
                    for (const c of a.style)if (!F6c(c, a.style)) return !1;
                    return !0;
                }), !r) break;
            }
            return r;
        }
        return !0;
    }
    canRenderDetailed(e, t, n) {
        const i = t.getViewLineRenderingData(n), r = [];
        if (i.containsRTL && r.push("containsRTL"), i.maxColumn > this.maxGpuCols && r.push("maxColumn > maxGpuCols"), i.inlineDecorations.length > 0) {
            let s = !0;
            const o = [], a = [], c = [];
            for (const l of i.inlineDecorations){
                if (l.type !== 0) {
                    o.push(l.type), s = !1;
                    continue;
                }
                const u = J1._decorationCssRuleExtractor.getStyleRules(this.canvas.domNode, l.inlineClassName);
                s &&= u.every((h)=>{
                    if (h.selectorText.includes(":")) return a.push(h.selectorText), !1;
                    for (const p of h.style)if (!F6c(p, h.style)) return c.push(`${p}: ${h.style[p]}`), !1;
                    return !0;
                });
            }
            o.length > 0 && r.push(`inlineDecorations with unsupported types (${o.map((l)=>`\`${l}\``).join(", ")})`), c.length > 0 && r.push(`inlineDecorations with unsupported CSS rules (${c.map((l)=>`\`${l}\``).join(", ")})`), a.length > 0 && r.push(`inlineDecorations with unsupported CSS selectors (${a.map((l)=>`\`${l}\``).join(", ")})`);
        }
        return r;
    }
}, J1._decorationCssRuleExtractor = new N6c, J1._decorationStyleCache = new O6c, J1 = ie([
    C(1, _t),
    C(2, di),
    C(3, qt)
], J1), B6c = [
    "color",
    "font-weight",
    "opacity"
];

}
