import { b9e, pTe } from "./loadingSpinner.js";
import { Kxk } from "./simpleButton.css";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { oye, pme } from "./useComposerHoverTooltip.js";
import { at, zr } from "./web.js";
import { Ea, Er, Le, wt, xbe, zu } from "./yBp.js";
import { Ee, Ut, Zy, pi, xn } from "./ze.js";
var Jxi, hp;
export { Jxi, hp };
var __wakaru_IL_initialized = false;
export function IL() {
if (__wakaru_IL_initialized) return;
__wakaru_IL_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), Kxk(), ta(), oye(), b9e(), Jxi = wt("<div>"), hp = (t)=>{
    const { showHover: e, hideHover: n } = pme({
        delay: 300,
        additionalClasses: [
            "chat-hover-tooltip"
        ]
    }), i = ()=>t.size ?? "medium", r = (s)=>Ee(Ut, {
            get when () {
                return t.codicon && (s === "left" ? !t.renderCodiconOnRight : t.renderCodiconOnRight);
            },
            get children () {
                return zr(()=>typeof t.codicon == "object")() ? (()=>{
                    var o = Jxi();
                    return xn((a)=>{
                        var l = {
                            "font-size": "12px",
                            ...t.codiconStyle
                        }, c = Gn.asClassName(t.codicon);
                        return a.e = Ea(o, l, a.e), c !== a.t && Er(o, a.t = c), a;
                    }, {
                        e: void 0,
                        t: void 0
                    }), o;
                })() : (()=>{
                    var o = Jxi();
                    return Le(o, ()=>t.codicon), xn((a)=>Ea(o, {
                            "font-size": "12px",
                            ...t.codiconStyle
                        }, a)), o;
                })();
            }
        });
    return (()=>{
        var s = Jxi();
        return zu((o)=>t.setRef?.(o), s), s.addEventListener("blur", ()=>t.onBlur?.()), s.addEventListener("keydown", (o)=>{
            (o.key === "Enter" || o.key === " ") && (o.preventDefault(), !t.disabled && t.onClick != null && t.onClick(o));
        }), s.addEventListener("mouseleave", ()=>{
            t.onMouseLeave?.(), n();
        }), s.addEventListener("mouseenter", (o)=>{
            t.onMouseEnter?.(o), t.tooltip && e(o, t.tooltip);
        }), s.addEventListener("click", (o)=>{
            !t.disabled && t.onClick != null && t.onClick(o);
        }), xbe(s, Zy({
            get id () {
                return t.id;
            },
            get class () {
                return [
                    `cursor-button cursor-button-${t.type ?? "primary"}`,
                    t.isNotClickable ? "cursor-button-not-clickable" : `cursor-button-${t.type ?? "primary"}-clickable`,
                    t.type === "disabled" || t.disabled ? "disabled" : "",
                    t.tabFocusable ? "tab-focusable" : "",
                    i() === "small" ? "cursor-button-small" : "",
                    t.class
                ].filter(Boolean).join(" ");
            },
            get style () {
                return {
                    "user-select": "none",
                    "flex-shrink": 0,
                    ...t.style
                };
            },
            get tabIndex () {
                return t.tabFocusable ? 0 : void 0;
            }
        }, ()=>t.extras), !1, !0), Le(s, ()=>r("left"), null), Le(s, ()=>t.title, null), Le(s, ()=>t.children, null), Le(s, Ee(Ut, {
            get when () {
                return t.keyboardShortcut;
            },
            get children () {
                var o = Jxi();
                return o.style.setProperty("font-size", "10px"), Le(o, ()=>t.keyboardShortcut), xn((a)=>(a = t.keyboardShortcutOpacity ?? .6) != null ? o.style.setProperty("opacity", a) : o.style.removeProperty("opacity")), o;
            }
        }), null), Le(s, ()=>r("right"), null), Le(s, Ee(Ut, {
            get when () {
                return t.isLoading;
            },
            get children () {
                return Ee(pTe, {
                    get onPrimaryButton () {
                        return (t.type ?? "primary") === "primary";
                    },
                    extras: {
                        style: {
                            "margin-left": "4px"
                        }
                    },
                    get small () {
                        return t.smallSpinner;
                    }
                });
            }
        }), null), s;
    })();
};

}
