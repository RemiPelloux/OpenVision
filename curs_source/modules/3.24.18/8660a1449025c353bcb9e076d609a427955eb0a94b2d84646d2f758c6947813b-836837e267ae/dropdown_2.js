import { Am, cs, jp } from "./Sol.js";
import { M3k, rVe } from "./Ycg.js";
import { gs, yt } from "./codicons.js";
import { P3k } from "./dropdown_2.css";
import { xRn } from "./menu_3.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { D3k } from "./utils_32.js";
import { at, zr } from "./web.js";
import { Ea, Er, Le, wt, xbe, zu } from "./yBp.js";
import { Cn, Ee, On, Su, Ut, Wt, Zy, pi, vt, xn } from "./ze.js";
var R2n, PMg, MMg, P2n, M2n;
export { M2n, MMg, P2n, PMg, R2n };
var __wakaru_a_l_initialized = false;
export function a_l() {
if (__wakaru_a_l_initialized) return;
__wakaru_a_l_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), Am(), P3k(), ta(), gs(), xRn(), D3k(), R2n = wt("<span>"), PMg = wt("<div class=ya-solid-dropdown tabindex=-1><button>"), MMg = wt("<li><div><span>"), P2n = cs(null), M2n = (t)=>{
    const e = jp(), [n, i] = Wt(e.get(P2n));
    On(e.sub(P2n, ()=>i(e.get(P2n))));
    const r = (f)=>e.set(P2n, f), s = ()=>e.set(P2n, null);
    let o;
    const a = (f)=>{
        r(f), t.onOpen?.();
    }, l = ()=>{
        s(), t.onClose?.();
    }, [, c] = Wt(0);
    Cn(()=>{
        c(t.forceRerender ?? 0), l();
    });
    const { showHover: u, hideHover: d } = M3k(), h = (f)=>{
        t.onSelect(f), l();
    }, p = vt(()=>[
            zr(()=>zr(()=>!!t.useLabel)() ? t.items.find((f)=>f.id === t.value)?.label : t.value ?? t.origLabel),
            zr(()=>t.labelRightContent)
        ]), g = "ya-solid-dropdown-button-" + Math.random().toString(36).substring(2, 15);
    return (()=>{
        var f = PMg(), _ = f.firstChild, b = o;
        return typeof b == "function" ? zu(b, f) : o = f, xbe(_, Zy(()=>t.buttonHint ? {
                onMouseEnter: (y)=>u(y, t.buttonHint),
                onMouseLeave: d
            } : {}, {
            id: g,
            onClick: (y)=>{
                if (t.cannotToggle === !0) return;
                if (n()) {
                    l();
                    return;
                }
                const S = y.currentTarget.getBoundingClientRect(), k = t.isRelative === void 0 ? !0 : t.isRelative;
                y.stopImmediatePropagation(), a(k ? {
                    x: t.anchor === "top-right" ? S.width : 0,
                    y: S.height + 5
                } : {
                    x: S.left + (t.anchor === "top-right" ? S.width : 0),
                    y: S.bottom + 5
                });
            },
            get class () {
                return "input-box-button " + (t.class ?? "");
            },
            get style () {
                return {
                    "background-color": "rgba(0, 0, 0, 0)",
                    color: "var(--vscode-foreground)",
                    "padding-left": "0px",
                    display: "flex",
                    outline: "none",
                    gap: "2px",
                    "user-select": "none",
                    "align-items": "center",
                    cursor: t.cannotToggle === !0 ? "default" : "pointer",
                    ...t.buttonStyle
                };
            },
            tabIndex: -1
        }), !1, !0), Le(_, Ee(Ut, {
            get when () {
                return t.chevronRight === !0;
            },
            get children () {
                var y = R2n();
                return Le(y, p), xn((S)=>Ea(y, t.labelStyle, S)), y;
            }
        }), null), Le(_, Ee(Ut, {
            get when () {
                return t.cannotToggle !== !0;
            },
            get children () {
                var y = R2n();
                return xn((S)=>{
                    var k = {
                        "font-size": "10px",
                        "padding-left": "0px",
                        ...t.labelStyle
                    }, C = n() ? Gn.asClassName(t.reverseChevron ? yt.chevronDown : yt.chevronUp) : Gn.asClassName(t.reverseChevron ? yt.chevronUp : yt.chevronDown);
                    return S.e = Ea(y, k, S.e), C !== S.t && Er(y, S.t = C), S;
                }, {
                    e: void 0,
                    t: void 0
                }), y;
            }
        }), null), Le(_, Ee(Ut, {
            get when () {
                return t.chevronRight !== !0;
            },
            get children () {
                var y = R2n();
                return Le(y, p), xn((S)=>Ea(y, t.labelStyle, S)), y;
            }
        }), null), Le(f, Ee(Ut, {
            get when () {
                return n();
            },
            children: (y)=>{
                const S = vt(()=>t.isRelative === void 0 ? !0 : t.isRelative);
                return Ee(rVe, {
                    get shouldMountInPortal () {
                        return !S();
                    },
                    get isRelative () {
                        return S();
                    },
                    nonBlockingDirection: "vertical",
                    nonBlockingRoot: `#${g}`,
                    get anchor () {
                        return t.anchor;
                    },
                    width: "max-content",
                    class: "ya-solid-dropdown-menu",
                    style: {
                        gap: 0,
                        "background-color": "var(--vscode-settings-dropdownBackground)",
                        border: "1px solid var(--vscode-commandCenter-inactiveBorder)",
                        "border-radius": "3px",
                        "min-width": "45px",
                        "box-shadow": "0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
                        "z-index": "10000000000000000",
                        "align-items": "flex-start"
                    },
                    get position () {
                        return y();
                    },
                    close: l,
                    get children () {
                        return [
                            Ee(Su, {
                                get each () {
                                    return t.items;
                                },
                                children: (k)=>{
                                    const C = ()=>k.id === t.value;
                                    return (()=>{
                                        var T = MMg(), I = T.firstChild, A = I.firstChild;
                                        return T.addEventListener("click", (P)=>{
                                            P.stopImmediatePropagation(), h(k.id);
                                        }), I.style.setProperty("display", "flex"), I.style.setProperty("flex-direction", "column"), I.style.setProperty("align-items", "flex-start"), Le(A, ()=>k.label), Le(I, Ee(Ut, {
                                            get when () {
                                                return k.description;
                                            },
                                            get children () {
                                                var P = R2n();
                                                return P.style.setProperty("font-size", "9px"), P.style.setProperty("opacity", "0.7"), P.style.setProperty("max-width", "160px"), P.style.setProperty("line-height", "12px"), Le(P, ()=>k.description), P;
                                            }
                                        }), null), Le(T, Ee(Ut, {
                                            get when () {
                                                return C();
                                            },
                                            get children () {
                                                var P = R2n();
                                                return P.style.setProperty("font-size", "10px"), P.style.setProperty("color", "var(--vscode-list-activeSelectionForeground)"), P.style.setProperty("margin-left", "auto"), xn(()=>Er(P, Gn.asClassName(yt.check))), P;
                                            }
                                        }), null), xn((P)=>{
                                            var M = {
                                                ...t.liStyles,
                                                "background-color": C() ? "var(--vscode-list-activeSelectionBackground)" : void 0,
                                                color: C() ? "var(--vscode-list-activeSelectionForeground)" : void 0,
                                                display: "flex",
                                                "align-items": "center",
                                                gap: "4px",
                                                padding: k.description ? "2px 6px 5px 6px" : "1px 4px",
                                                "border-radius": "2px"
                                            }, O = k.description ? "12px" : "10px", N = k.description ? "18px" : void 0;
                                            return P.e = Ea(T, M, P.e), O !== P.t && ((P.t = O) != null ? A.style.setProperty("font-size", O) : A.style.removeProperty("font-size")), N !== P.a && ((P.a = N) != null ? A.style.setProperty("line-height", N) : A.style.removeProperty("line-height")), P;
                                        }, {
                                            e: void 0,
                                            t: void 0,
                                            a: void 0
                                        }), T;
                                    })();
                                }
                            }),
                            Ee(Ut, {
                                get when () {
                                    return t.belowListComponent;
                                },
                                get children () {
                                    return t.belowListComponent;
                                }
                            })
                        ];
                    }
                });
            }
        }), null), xn((y)=>Ea(f, {
                outline: "none",
                ...t.containerStyle
            }, y)), f;
    })();
};

}
