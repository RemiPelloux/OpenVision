import * as $s from "./react-runtime/react/esm-index-production.js";
import * as Gb from "./react-runtime/react/esm-index-production.js";
import * as Hb from "./react-runtime/react/esm-index-production.js";
import * as Pu from "./react-runtime/react/esm-index-production.js";
import * as XD from "./react-runtime/react/esm-index-production.js";
import * as YD from "./react-runtime/react/esm-index-production.js";
import * as e4 from "./react-runtime/react/esm-index-production.js";
import * as jb from "./react-runtime/react/esm-index-production.js";
import * as n4 from "./react-runtime/react/esm-index-production.js";
import * as qD from "./react-runtime/react/esm-index-production.js";
import * as t4 from "./react-runtime/react/esm-index-production.js";
import { createElement as zb } from "./react-runtime/react/esm-index-production.js";
import { a } from "./business-error.js";
export function Wr(e) {
    const t = jb.useContext(XS);
    if (!e && t === void 0) throw new Error(Vn(27));
    return t;
}
export function Rr(e, t) {
    const r = YD.useRef(ZS);
    return r.current === ZS && (r.current = e(t)), r;
}
export function ca(e, t, r, n) {
    const o = Rr(Kp).current;
    return QS(o, e, t, r, n) && Wp(o, [
        e,
        t,
        r,
        n
    ]), o.callback;
}
export function qS(e) {
    const t = Rr(Kp).current;
    return JS(t, e) && Wp(t, e), t.callback;
}
export function Kp() {
    return {
        callback: null,
        cleanup: null,
        refs: []
    };
}
export function QS(e, t, r, n, o) {
    return e.refs[0] !== t || e.refs[1] !== r || e.refs[2] !== n || e.refs[3] !== o;
}
export function JS(e, t) {
    return e.refs.length !== t.length || e.refs.some((r, n)=>r !== t[n]);
}
export function Wp(e, t) {
    if (e.refs = t, t.every((r)=>r == null)) {
        e.callback = null;
        return;
    }
    e.callback = (r)=>{
        if (e.cleanup && (e.cleanup(), e.cleanup = null), r != null) {
            const n = Array(t.length).fill(null);
            for(let o = 0; o < t.length; o += 1){
                const i = t[o];
                if (i != null) switch(typeof i){
                    case "function":
                        {
                            const s = i(r);
                            typeof s == "function" && (n[o] = s);
                            break;
                        }
                    case "object":
                        {
                            i.current = r;
                            break;
                        }
                    default:
                }
            }
            e.cleanup = ()=>{
                for(let o = 0; o < t.length; o += 1){
                    const i = t[o];
                    if (i != null) switch(typeof i){
                        case "function":
                            {
                                const s = n[o];
                                typeof s == "function" ? s() : i(null);
                                break;
                            }
                        case "object":
                            {
                                i.current = null;
                                break;
                            }
                        default:
                    }
                }
            };
        }
    };
}
export function Dc(e) {
    return GV >= e;
}
export function Yp(e) {
    if (!XD.isValidElement(e)) return null;
    const t = e, r = t.props;
    return (Dc(19) ? r?.ref : t.ref) ?? null;
}
export function Lc(e, t) {
    if (e && !t) return e;
    if (!e && t) return t;
    if (e || t) return {
        ...e,
        ...t
    };
}
export function eE(e, t) {
    const r = {};
    for(const n in e){
        const o = e[n];
        if (t?.hasOwnProperty(n)) {
            const i = t[n](o);
            i != null && Object.assign(r, i);
            continue;
        }
        o === !0 ? r[`data-${n.toLowerCase()}`] = "" : o && (r[`data-${n.toLowerCase()}`] = o.toString());
    }
    return r;
}
export function tE(e, t) {
    return typeof e == "function" ? e(t) : e;
}
export function rE(e, t) {
    return typeof e == "function" ? e(t) : e;
}
export function Si(e, t, r, n, o) {
    if (!r && !n && !o && !e) return Ei(t);
    let i = Ei(e);
    return t && (i = la(i, t)), r && (i = la(i, r)), n && (i = la(i, n)), o && (i = la(i, o)), i;
}
export function nE(e) {
    if (e.length === 0) return Xp;
    if (e.length === 1) return Ei(e[0]);
    let t = Ei(e[0]);
    for(let r = 1; r < e.length; r += 1)t = la(t, e[r]);
    return t;
}
export function Ei(e) {
    return Fc(e) ? {
        ...qp(e, Xp)
    } : oE(e);
}
export function la(e, t) {
    return Fc(t) ? qp(t, e) : aE(e, t);
}
export function oE(e) {
    const t = {
        ...e
    };
    for(const r in t){
        const n = t[r];
        Zp(r, n) && (t[r] = Qp(n));
    }
    return t;
}
export function aE(e, t) {
    if (!t) return e;
    for(const r in t){
        const n = t[r];
        switch(r){
            case "style":
                {
                    e[r] = Lc(e.style, n);
                    break;
                }
            case "className":
                {
                    e[r] = Jp(e.className, n);
                    break;
                }
            default:
                Zp(r, n) ? e[r] = iE(e[r], n) : e[r] = n;
        }
    }
    return e;
}
export function Zp(e, t) {
    const r = e.charCodeAt(0), n = e.charCodeAt(1), o = e.charCodeAt(2);
    return r === 111 && n === 110 && o >= 65 && o <= 90 && (typeof t == "function" || typeof t > "u");
}
export function Fc(e) {
    return typeof e == "function";
}
export function qp(e, t) {
    return Fc(e) ? e(t) : e ?? Xp;
}
export function iE(e, t) {
    return t ? e ? (...r)=>{
        const n = r[0];
        if (ef(n)) {
            const i = n;
            ki(i);
            const s = t(...r);
            return i.baseUIHandlerPrevented || e?.(...r), s;
        }
        const o = t(...r);
        return e?.(...r), o;
    } : Qp(t) : e;
}
export function Qp(e) {
    return e && ((...t)=>{
        const r = t[0];
        return ef(r) && ki(r), e(...t);
    });
}
export function ki(e) {
    return e.preventBaseUIHandler = ()=>{
        e.baseUIHandlerPrevented = !0;
    }, e;
}
export function Jp(e, t) {
    return t ? e ? t + " " + e : t : e;
}
export function ef(e) {
    return e != null && typeof e == "object" && "nativeEvent" in e;
}
export function xr(e, t, r = {}) {
    let n = t.render;
    r.enabled !== !1 && (n = lE(n));
    const o = sE(t, r, n);
    if (r.enabled === !1) return null;
    const i = r.state ?? zt;
    return mE(e, n, o, i);
}
export function sE(e, t, r) {
    const { className: n, style: o } = e, { state: i = zt, ref: s, props: c, stateAttributesMapping: l, enabled: m = !0 } = t, u = m ? tE(n, i) : void 0, d = m ? rE(o, i) : void 0, p = m ? eE(i, l) : zt, h = m && c ? cE(c) : void 0, f = m ? Lc(p, h) ?? {} : zt;
    return typeof document < "u" && (m ? Array.isArray(s) ? f.ref = qS([
        f.ref,
        Yp(r),
        ...s
    ]) : f.ref = ca(f.ref, Yp(r), s) : ca(null, null)), m ? (u !== void 0 && (f.className = Jp(f.className, u)), d !== void 0 && (f.style = Lc(f.style, d)), f) : zt;
}
export function cE(e) {
    return Array.isArray(e) ? nE(e) : Si(void 0, e);
}
export function lE(e) {
    if (e?.$$typeof !== KV) return e;
    const t = $s.Children.toArray(e)[0];
    return $s.isValidElement(t) ? t : e;
}
export function mE(e, t, r, n) {
    if (t) {
        if (typeof t == "function") return t(r, n);
        const o = Si(r, t.props);
        return o.ref = r.ref, $s.cloneElement(t, o);
    }
    if (e && typeof e == "string") return uE(e, r);
    throw new Error(Vn(8));
}
export function uE(e, t) {
    return e === "button" ? zb("button", {
        type: "button",
        ...t,
        key: t.key
    }) : e === "img" ? zb("img", {
        alt: "",
        ...t,
        key: t.key
    }) : $s.createElement(e, t);
}
export function Ci() {
    return typeof window < "u";
}
export function gr(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
export function Xt(e) {
    return Ci() ? e instanceof HTMLElement || e instanceof gr(e).HTMLElement : !1;
}
export function pt(e) {
    const t = Rr(wE).current;
    return t.next = e, sB(t.effect), t.trampoline;
}
export function wE() {
    const e = {
        next: void 0,
        callback: SE,
        trampoline: a((...t)=>e.callback?.(...t), "trampoline"),
        effect: a(()=>{
            e.callback = e.next;
        }, "effect")
    };
    return e;
}
export function SE() {}
export function EE(e = !1) {
    const t = Hb.useContext(lB);
    if (t === void 0 && !e) throw new Error(Vn(16));
    return t;
}
export function kE(e) {
    const { focusableWhenDisabled: t, disabled: r, composite: n = !1, tabIndex: o = 0, isNativeButton: i } = e, s = n && t !== !1, c = n && t === !1;
    return {
        props: e4.useMemo(()=>{
            const m = {
                onKeyDown (u) {
                    r && t && u.key !== "Tab" && u.preventDefault();
                }
            };
            return n || (m.tabIndex = o, !i && r && (m.tabIndex = t ? o : -1)), (i && (t || s) || !i && r) && (m["aria-disabled"] = r), i && (!t || c) && (m.disabled = r), m;
        }, [
            n,
            r,
            t,
            s,
            c,
            i,
            o
        ])
    };
}
export function Ai(e, t, { detail: r = 0 } = {}) {
    e.dispatchEvent(new (gr(e)).PointerEvent("click", {
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        detail: r,
        shiftKey: t.shiftKey,
        ctrlKey: t.ctrlKey,
        altKey: t.altKey,
        metaKey: t.metaKey
    }));
}
export function Uc(e = {}) {
    const { disabled: t = !1, focusableWhenDisabled: r, tabIndex: n = 0, native: o = !0, composite: i } = e, s = Pu.useRef(null), c = EE(!0), l = i ?? c !== void 0, { props: m } = kE({
        focusableWhenDisabled: r,
        disabled: t,
        composite: l,
        tabIndex: n,
        isNativeButton: o
    }), u = Pu.useCallback(()=>{
        const h = s.current;
        jc(h) && l && t && m.disabled === void 0 && h.disabled && (h.disabled = !1);
    }, [
        t,
        m.disabled,
        l
    ]);
    Ke(u, [
        u
    ]);
    const d = Pu.useCallback((h = {})=>{
        const { onClick: f, onMouseDown: v, onKeyUp: x, onKeyDown: g, onPointerDown: y, ...w } = h;
        return Si({
            onClick (b) {
                if (t) {
                    b.preventDefault();
                    return;
                }
                f?.(b);
            },
            onMouseDown (b) {
                t || v?.(b);
            },
            onKeyDown (b) {
                if (t || (ki(b), g?.(b), b.baseUIHandlerPrevented)) return;
                const T = b.target === b.currentTarget, R = b.currentTarget, E = jc(R), S = !o && TE(R), A = T && (o ? E : !S), C = b.key === "Enter", P = b.key === " ", O = R.getAttribute("role"), M = O?.startsWith("menuitem") || O === "option" || O === "gridcell";
                if (T && l && P) {
                    if (b.defaultPrevented && M) return;
                    b.preventDefault(), (!o || E) && (b.preventBaseUIHandler(), Ai(R, b));
                    return;
                }
                if (!A || o || !P && !C) {
                    T && S && P && b.preventDefault();
                    return;
                }
                b.defaultPrevented || (b.preventDefault(), C && (b.preventBaseUIHandler(), Ai(R, b)));
            },
            onKeyUp (b) {
                if (!t) {
                    if (ki(b), x?.(b), b.target === b.currentTarget && o && l && jc(b.currentTarget) && b.key === " ") {
                        b.preventDefault();
                        return;
                    }
                    b.baseUIHandlerPrevented || b.target === b.currentTarget && !o && !l && !b.defaultPrevented && b.key === " " && (b.preventBaseUIHandler(), Ai(b.currentTarget, b));
                }
            },
            onPointerDown (b) {
                if (t) {
                    b.preventDefault();
                    return;
                }
                y?.(b);
            }
        }, o ? {
            type: "button"
        } : {
            role: "button"
        }, m, w);
    }, [
        t,
        m,
        l,
        o
    ]), p = pt((h)=>{
        s.current = h, u();
    });
    return {
        getButtonProps: d,
        buttonRef: p
    };
}
export function jc(e) {
    return Xt(e) && e.tagName === "BUTTON";
}
export function TE(e) {
    return Xt(e) && e.tagName === "A" && !!e.href;
}
export var mB = "none", uB = "trigger-press", dB = "trigger-hover", pB = "trigger-focus", fB = "outside-press", hB = "item-press", xB = "close-press", gB = "link-press", vB = "clear-press", bB = "chip-remove-press", yB = "track-press", wB = "increment-press", SB = "decrement-press", EB = "input-change", kB = "input-clear", TB = "input-blur", CB = "input-paste", IB = "input-press", AB = "focus-out", RB = "escape-key", NB = "close-watcher", PB = "list-navigation", _B = "keyboard", MB = "pointer", OB = "drag", DB = "wheel", LB = "scrub", FB = "cancel-open", VB = "sibling-open", BB = "disabled", UB = "missing", jB = "initial", zB = "imperative-action", HB = "swipe", GB = "window-resize";
export function Ht(e, t, r, n) {
    let o = !1, i = !1;
    const s = n ?? zt;
    return {
        reason: e,
        event: t ?? new Event("base-ui"),
        cancel () {
            o = !0;
        },
        allowPropagation () {
            i = !0;
        },
        get isCanceled () {
            return o;
        },
        get isPropagationAllowed () {
            return i;
        },
        trigger: r,
        ...s
    };
}
a(Ht, "createChangeEventDetails");
var $B = qD.forwardRef(a(function(t, r) {
    const { render: n, className: o, style: i, disabled: s = !1, nativeButton: c = !0, ...l } = t, m = Wr(), u = m.useState("open"), { getButtonProps: d, buttonRef: p } = Uc({
        disabled: s,
        native: c
    }), h = {
        disabled: s
    };
    function f(v) {
        u && m.setOpen(!1, Ht(_t.closePress, v.nativeEvent));
    }
    return a(f, "handleClick"), xr("button", t, {
        state: h,
        ref: [
            r,
            p
        ],
        props: [
            {
                onClick: f
            },
            l,
            d
        ]
    });
}, "DialogClose")), CE = 0;
function IE(e, t = "mui") {
    const [r, n] = Gb.useState(e), o = e || r;
    return Gb.useEffect(()=>{
        r == null && (CE += 1, n(`${t}-${CE}`));
    }, [
        r,
        t
    ]), o;
}
a(IE, "useGlobalId");
var AE = nf.useId;
export function zc(e, t) {
    if (AE !== void 0) {
        const r = AE();
        return e ?? (t ? `${t}-${r}` : r);
    }
    return IE(e, t);
}
a(zc, "useId");
export function po(e) {
    return zc(e, "base-ui");
}
a(po, "useBaseUiId");
export var KB = t4.forwardRef(a(function(t, r) {
    const { render: n, className: o, style: i, id: s, ...c } = t, l = Wr(), m = po(s);
    return l.useSyncedValueWithCleanup("descriptionElementId", m), xr("p", t, {
        ref: r,
        props: [
            {
                id: m
            },
            c
        ]
    });
}, "DialogDescription"));
export function af(e) {
    n4.useEffect(e, $V);
}
a(af, "useOnMount");
var Ri = 0, Ni = class nD {
    static{
        a(this, "Timeout");
    }
    static create() {
        return new nD;
    }
    currentId = Ri;
    start(t, r) {
        this.clear(), this.currentId = setTimeout(()=>{
            this.currentId = Ri, r();
        }, t);
    }
    isStarted() {
        return this.currentId !== Ri;
    }
    clear = a(()=>{
        this.currentId !== Ri && (clearTimeout(this.currentId), this.currentId = Ri);
    }, "clear");
    disposeEffect = a(()=>this.clear, "disposeEffect");
};
export function ua() {
    const e = Rr(Ni.create).current;
    return af(e.disposeEffect), e;
}
a(ua, "useTimeout");
export { $B, Ni };

export var _t = {};
Object.defineProperty(_t, "cancelOpen", {
    enumerable: true,
    get: ()=>FB
});
Object.defineProperty(_t, "chipRemovePress", {
    enumerable: true,
    get: ()=>bB
});
Object.defineProperty(_t, "clearPress", {
    enumerable: true,
    get: ()=>vB
});
Object.defineProperty(_t, "closePress", {
    enumerable: true,
    get: ()=>xB
});
Object.defineProperty(_t, "closeWatcher", {
    enumerable: true,
    get: ()=>NB
});
Object.defineProperty(_t, "decrementPress", {
    enumerable: true,
    get: ()=>SB
});
Object.defineProperty(_t, "disabled", {
    enumerable: true,
    get: ()=>BB
});
Object.defineProperty(_t, "drag", {
    enumerable: true,
    get: ()=>OB
});
Object.defineProperty(_t, "escapeKey", {
    enumerable: true,
    get: ()=>RB
});
Object.defineProperty(_t, "focusOut", {
    enumerable: true,
    get: ()=>AB
});
Object.defineProperty(_t, "imperativeAction", {
    enumerable: true,
    get: ()=>zB
});
Object.defineProperty(_t, "incrementPress", {
    enumerable: true,
    get: ()=>wB
});
Object.defineProperty(_t, "initial", {
    enumerable: true,
    get: ()=>jB
});
Object.defineProperty(_t, "inputBlur", {
    enumerable: true,
    get: ()=>TB
});
Object.defineProperty(_t, "inputChange", {
    enumerable: true,
    get: ()=>EB
});
Object.defineProperty(_t, "inputClear", {
    enumerable: true,
    get: ()=>kB
});
Object.defineProperty(_t, "inputPaste", {
    enumerable: true,
    get: ()=>CB
});
Object.defineProperty(_t, "inputPress", {
    enumerable: true,
    get: ()=>IB
});
Object.defineProperty(_t, "itemPress", {
    enumerable: true,
    get: ()=>hB
});
Object.defineProperty(_t, "keyboard", {
    enumerable: true,
    get: ()=>_B
});
Object.defineProperty(_t, "linkPress", {
    enumerable: true,
    get: ()=>gB
});
Object.defineProperty(_t, "listNavigation", {
    enumerable: true,
    get: ()=>PB
});
Object.defineProperty(_t, "missing", {
    enumerable: true,
    get: ()=>UB
});
Object.defineProperty(_t, "none", {
    enumerable: true,
    get: ()=>mB
});
Object.defineProperty(_t, "outsidePress", {
    enumerable: true,
    get: ()=>fB
});
Object.defineProperty(_t, "pointer", {
    enumerable: true,
    get: ()=>MB
});
Object.defineProperty(_t, "scrub", {
    enumerable: true,
    get: ()=>LB
});
Object.defineProperty(_t, "siblingOpen", {
    enumerable: true,
    get: ()=>VB
});
Object.defineProperty(_t, "swipe", {
    enumerable: true,
    get: ()=>HB
});
Object.defineProperty(_t, "trackPress", {
    enumerable: true,
    get: ()=>yB
});
Object.defineProperty(_t, "triggerFocus", {
    enumerable: true,
    get: ()=>pB
});
Object.defineProperty(_t, "triggerHover", {
    enumerable: true,
    get: ()=>dB
});
Object.defineProperty(_t, "triggerPress", {
    enumerable: true,
    get: ()=>uB
});
Object.defineProperty(_t, "wheel", {
    enumerable: true,
    get: ()=>DB
});
Object.defineProperty(_t, "windowResize", {
    enumerable: true,
    get: ()=>GB
});
