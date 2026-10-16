import { gs, yt } from "./codicons.js";
import { mk } from "./gallerySection.js";
import { IL, hp } from "./simpleButton.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Er, Le, wt } from "./yBp.js";
import { Ee, Ut, pi, xn } from "./ze.js";
var SLs, gYv, fYv;
export { SLs, fYv, gYv };
var __wakaru_MlC_initialized = false;
export function MlC() {
if (__wakaru_MlC_initialized) return;
__wakaru_MlC_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), pi(), gs(), ta(), IL(), mk(), SLs = wt("<div>"), gYv = wt("<div><div><div>"), fYv = (t)=>(()=>{
        var e = gYv(), n = e.firstChild, i = n.firstChild;
        return e.style.setProperty("background", "radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--vscode-errorForeground) 12%, var(--vscode-editorWidget-background)) -20%, color-mix(in srgb, var(--vscode-errorForeground) 1%, var(--vscode-editorWidget-background)) 70%)"), e.style.setProperty("border-radius", "4px"), e.style.setProperty("padding", "12px"), e.style.setProperty("margin-bottom", "16px"), e.style.setProperty("position", "relative"), e.style.setProperty("box-shadow", "0 0 0 1px var(--vscode-editorWidget-border)"), e.style.setProperty("border", "none"), e.style.setProperty("display", "flex"), e.style.setProperty("flex-direction", "column"), e.style.setProperty("gap", "12px"), n.style.setProperty("display", "flex"), n.style.setProperty("justify-content", "space-between"), n.style.setProperty("align-items", "flex-start"), n.style.setProperty("gap", "16px"), i.style.setProperty("color", "var(--vscode-foreground)"), i.style.setProperty("font-size", "13px"), i.style.setProperty("flex", "1"), Le(i, ()=>t.text), Le(n, Ee(Ut, {
            get when () {
                return t.onDismiss;
            },
            get children () {
                var r = SLs();
                return r.addEventListener("click", ()=>t.onDismiss?.()), r.style.setProperty("opacity", "0.8"), r.style.setProperty("height", "18px"), r.style.setProperty("width", "18px"), r.style.setProperty("display", "flex"), r.style.setProperty("align-items", "flex-end"), r.style.setProperty("justify-content", "center"), xn(()=>Er(r, `clickable ${Gn.asClassName(yt.close)}`)), r;
            }
        }), null), Le(e, Ee(Ut, {
            get when () {
                return t.primaryAction || t.secondaryAction;
            },
            get children () {
                var r = SLs();
                return r.style.setProperty("display", "flex"), r.style.setProperty("gap", "8px"), r.style.setProperty("justify-content", "flex-end"), Le(r, Ee(Ut, {
                    get when () {
                        return t.secondaryAction;
                    },
                    get children () {
                        return Ee(hp, {
                            type: "secondary",
                            get title () {
                                return t.secondaryAction?.label;
                            },
                            onClick: ()=>t.secondaryAction?.onClick(),
                            size: "small"
                        });
                    }
                }), null), Le(r, Ee(Ut, {
                    get when () {
                        return t.primaryAction;
                    },
                    get children () {
                        return Ee(hp, {
                            type: "primary",
                            get title () {
                                return t.primaryAction?.label;
                            },
                            onClick: ()=>t.primaryAction?.onClick(),
                            size: "small"
                        });
                    }
                }), null), r;
            }
        }), null), e;
    })();

}
