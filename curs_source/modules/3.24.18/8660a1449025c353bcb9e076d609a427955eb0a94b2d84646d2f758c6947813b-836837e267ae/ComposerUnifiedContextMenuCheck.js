import { gs, yt } from "./codicons.js";
import { Oml, cVe } from "./pureIcon.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Er, Le, wt } from "./yBp.js";
import { Ee, Ut, pi, xn } from "./ze.js";
var aTg, lTg, cTg;
export { aTg, cTg, lTg };
var __wakaru_Wxk_initialized = false;
export function Wxk() {
if (__wakaru_Wxk_initialized) return;
__wakaru_Wxk_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), pi(), gs(), ta(), cVe(), aTg = wt("<span>"), lTg = wt('<div class="w-3 h-3 border border-border rounded-xs flex items-center justify-center box-border relative">'), cTg = (t)=>(()=>{
        var e = lTg();
        return e.addEventListener("click", (n)=>{
            t.onClick && !t.disabled && t.onClick(n);
        }), e.style.setProperty("border-width", "1px"), e.style.setProperty("flex-shrink", "0"), Le(e, Ee(Ut, {
            get when () {
                return t.checked;
            },
            get children () {
                var n = aTg();
                return xn((i)=>{
                    var r = `${Gn.asClassName(t.codicon ?? yt.checkTwo)} before:!text-[8px] !flex items-center justify-center ${t.codicon ? "!mr-0" : "!mr-0.5"}`, s = t.checked ? "var(--vscode-button-foreground)" : "var(--vscode-editor-inactiveSelectionBackground)";
                    return r !== i.e && Er(n, i.e = r), s !== i.t && ((i.t = s) != null ? n.style.setProperty("color", s) : n.style.removeProperty("color")), i;
                }, {
                    e: void 0,
                    t: void 0
                }), n;
            }
        }), null), Le(e, Ee(Ut, {
            get when () {
                return t.showWarningBadge;
            },
            get children () {
                return Ee(Oml, {
                    get color () {
                        return t.warningBadgeColor || "var(--vscode-activityWarningBadge-background)";
                    },
                    style: {
                        transform: "translateX(3px)"
                    }
                });
            }
        }), null), xn((n)=>{
            var i = !!t.disabled, r = !t.disabled, s = t.checked ? t.customBgColor ?? "var(--vscode-button-background)" : "transparent", o = t.checked ? void 0 : "solid", a = t.checked ? t.customBorderColor ?? "var(--vscode-button-background)" : "color-mix(in srgb, var(--vscode-checkbox-selectBorder) 30%, transparent)", l = t.disabled ? .3 : 1;
            return i !== n.e && e.classList.toggle("cursor-not-allowed", n.e = i), r !== n.t && e.classList.toggle("cursor-pointer", n.t = r), s !== n.a && ((n.a = s) != null ? e.style.setProperty("background-color", s) : e.style.removeProperty("background-color")), o !== n.o && ((n.o = o) != null ? e.style.setProperty("border-style", o) : e.style.removeProperty("border-style")), a !== n.i && ((n.i = a) != null ? e.style.setProperty("border-color", a) : e.style.removeProperty("border-color")), l !== n.n && ((n.n = l) != null ? e.style.setProperty("opacity", l) : e.style.removeProperty("opacity")), n;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0
        }), e;
    })();

}
