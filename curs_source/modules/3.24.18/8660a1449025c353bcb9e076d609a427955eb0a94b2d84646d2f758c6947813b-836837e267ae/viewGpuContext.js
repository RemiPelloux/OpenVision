import { D, Ei, Gt, Qe, en, st, xh } from "./Iwo.js";
import { or, yi } from "./configuration.js";
import { LDy, Y$d } from "./decorationCssRuleExtractor.js";
import { ODy, X$d } from "./decorationStyleCache.js";
import { Hn } from "./dom_2.js";
import { i6 } from "./fastDomNode.js";
import { Rsi, _oe } from "./gpuDisposable.js";
import { Cyt } from "./gpuUtils.js";
import { It, dn } from "./instantiation.js";
import { Bt } from "./nls.js";
import { Ks, Wr, Yn } from "./notification.js";
import { Jc } from "./observable.js";
import { DDy, K$d } from "./rectangleRenderer.js";
import { XAe, fWo } from "./textureAtlas.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ew, L$d, Nfn, Z$d, bc, li, rl, t6 } from "./ze.js";
var LD, Q$d;
export { LD, Q$d };
var __wakaru_yCr_initialized = false;
export function yCr() {
if (__wakaru_yCr_initialized) return;
__wakaru_yCr_initialized = true;
"use strict";
E(), Bt(), Hn(), i6(), Ei(), Qe(), Jc(), It(), fWo(), or(), Ks(), Rsi(), Cyt(), DDy(), LDy(), Gt(), ODy(), LD = class extends st {
    constructor(t, e, n, i){
        super(), this._instantiationService = e, this._notificationService = n, this.configurationService = i, this.maxGpuCols = 2e3, this.canvas = Ew(document.createElement("canvas")), this.canvas.setClassName("editorCanvas"), this._register(en.runAndSubscribe(i.onDidChangeConfiguration, (a)=>{
            if (!a || a.affectsConfiguration("editor.scrollbar.verticalScrollbarSize")) {
                const l = i.getValue("editor").scrollbar?.verticalScrollbarSize ?? 14;
                this.canvas.domNode.style.boxSizing = "border-box", this.canvas.domNode.style.paddingRight = `${l}px`;
            }
        })), this.ctx = Nfn(this.canvas.domNode.getContext("webgpu")), LD.device || (LD.device = _oe.requestDevice((a)=>{
            const l = [
                {
                    label: D(199, null),
                    run: ()=>this.configurationService.updateValue("editor.experimentalGpuAcceleration", "off")
                }
            ];
            this._notificationService.prompt(Yn.Warning, a, l);
        }).then((a)=>(LD.deviceSync = a.object, LD._atlas || (LD._atlas = this._instantiationService.createInstance(XAe, a.object.limits.maxTextureDimension2D, void 0, LD.decorationStyleCache)), a.object)));
        const r = bc(this, rl().devicePixelRatio);
        this._register(li(rl(), "resize", ()=>{
            r.set(rl().devicePixelRatio, void 0);
        })), this.devicePixelRatio = r, this._register(t6(this.devicePixelRatio, ()=>LD.atlas?.clear()));
        const s = bc(this, {
            width: this.canvas.domNode.width,
            height: this.canvas.domNode.height
        });
        this._register(L$d(this.canvas.domNode, rl(), (a, l)=>{
            this.canvas.domNode.width = a, this.canvas.domNode.height = l, s.set({
                width: a,
                height: l
            }, void 0);
        })), this.canvasDevicePixelDimensions = s;
        const o = bc(this, 0);
        this._register(this.configurationService.onDidChangeConfiguration((a)=>{
            o.set(t.configuration.options.get(151).contentLeft, void 0);
        })), this.contentLeft = o, this.rectangleRenderer = this._instantiationService.createInstance(K$d, t, this.contentLeft, this.devicePixelRatio, this.canvas.domNode, this.ctx, LD.device);
    }
    static get decorationCssRuleExtractor() {
        return LD._decorationCssRuleExtractor;
    }
    static get decorationStyleCache() {
        return LD._decorationStyleCache;
    }
    static get atlas() {
        if (!LD._atlas) throw new xh("Cannot call ViewGpuContext.textureAtlas before device is resolved");
        return LD._atlas;
    }
    get atlas() {
        return LD.atlas;
    }
    canRender(t, e, n) {
        const i = e.getViewLineRenderingData(n);
        if (i.containsRTL || i.maxColumn > this.maxGpuCols) return !1;
        if (i.inlineDecorations.length > 0) {
            let r = !0;
            for (const s of i.inlineDecorations){
                if (s.type !== 0) {
                    r = !1;
                    break;
                }
                const o = LD._decorationCssRuleExtractor.getStyleRules(this.canvas.domNode, s.inlineClassName);
                if (r &&= o.every((a)=>{
                    if (a.selectorText.includes(":")) return !1;
                    for (const l of a.style)if (!Z$d(l, a.style)) return !1;
                    return !0;
                }), !r) break;
            }
            return r;
        }
        return !0;
    }
    canRenderDetailed(t, e, n) {
        const i = e.getViewLineRenderingData(n), r = [];
        if (i.containsRTL && r.push("containsRTL"), i.maxColumn > this.maxGpuCols && r.push("maxColumn > maxGpuCols"), i.inlineDecorations.length > 0) {
            let s = !0;
            const o = [], a = [], l = [];
            for (const c of i.inlineDecorations){
                if (c.type !== 0) {
                    o.push(c.type), s = !1;
                    continue;
                }
                const u = LD._decorationCssRuleExtractor.getStyleRules(this.canvas.domNode, c.inlineClassName);
                s &&= u.every((d)=>{
                    if (d.selectorText.includes(":")) return a.push(d.selectorText), !1;
                    for (const h of d.style)if (!Z$d(h, d.style)) return l.push(`${h}: ${d.style[h]}`), !1;
                    return !0;
                });
            }
            o.length > 0 && r.push(`inlineDecorations with unsupported types (${o.map((c)=>`\`${c}\``).join(", ")})`), l.length > 0 && r.push(`inlineDecorations with unsupported CSS rules (${l.map((c)=>`\`${c}\``).join(", ")})`), a.length > 0 && r.push(`inlineDecorations with unsupported CSS selectors (${a.map((c)=>`\`${c}\``).join(", ")})`);
        }
        return r;
    }
}, LD._decorationCssRuleExtractor = new Y$d, LD._decorationStyleCache = new X$d, LD = Re([
    F(1, dn),
    F(2, Wr),
    F(3, yi)
], LD), Q$d = [
    "color",
    "font-weight",
    "opacity"
];

}
