import { _d } from "./InputGroup.js";
import { ri } from "./LYd.js";
import { Lcs } from "./OmniboxDropdown.js";
import { Mxi, Ncs } from "./Ycg.js";
import { Dxi } from "./browserNavigation.js";
import { xc } from "./glass-storage-service.js";
import { Mt } from "./index_197.js";
import { xg } from "./scroll-area.js";
import { io } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { cR0, lR0, uR0, xec } from "./wTv.js";
import { jsx as GG } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as HRt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as IAv } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as XOn } from "./react-runtime/react/esm-index-production.js";
import { Fragment as aR0 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as fPs } from "./react-runtime/react/esm-index-production.js";
import { useImperativeHandle as oR0 } from "./react-runtime/react/esm-index-production.js";
import { forwardRef as sR0 } from "./react-runtime/react/esm-index-production.js";
import { useEffect as xAv } from "./react-runtime/react/esm-index-production.js";
var Aec, Rec, RAv;
export { Aec, RAv, Rec };
var __wakaru_dR0_initialized = false;
export function dR0() {
if (__wakaru_dR0_initialized) return;
__wakaru_dR0_initialized = true;
"use strict";
E(), Mt(), Dxi(), Lcs(), xc(), Aec = {
    inputRow: {
        kOIVth: "glass-ehausa",
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-1t1x2f9",
        k7Eaqz: "glass-euugli",
        $$css: !0
    },
    bookmarkIndicator: {
        kmuXW: "glass-2lah0s",
        kGuDYH: "glass-1wm8ruf",
        kMwMTN: "glass-1lbmi28",
        $$css: !0
    }
}, Rec = /^https?:\/\//i, RAv = sR0(function(e, n) {
    const i = IAv(64), { url: r, onNavigate: s, onEscape: o, automationService: a } = e, l = fPs(null), c = fPs(null), u = fPs(null), [d, h] = XOn(r), [p, g] = XOn(!1), [f, _] = XOn(!1);
    let b;
    i[0] === Symbol.for("react.memo_cache_sentinel") ? (b = [], i[0] = b) : b = i[0];
    const [y, S] = XOn(b), [k, C] = XOn(-1);
    let T;
    i[1] !== r ? (T = ()=>{
        _(!1), g(!0), h(r), requestAnimationFrame(()=>{
            l.current?.focus(), l.current?.select();
        });
    }, i[1] = r, i[2] = T) : T = i[2];
    const I = T;
    let A, P;
    i[3] !== I ? (A = ()=>({
            focusAndSelect: I
        }), P = [
        I
    ], i[3] = I, i[4] = A, i[5] = P) : (A = i[4], P = i[5]), oR0(n, A, P);
    let M, O;
    i[6] !== k ? (M = ()=>{
        if (k < 0 || !c.current) return;
        const Me = c.current.querySelector(`[data-suggestion-index="${k}"]`);
        Me instanceof HTMLElement && Me.scrollIntoView({
            block: "nearest"
        });
    }, O = [
        k
    ], i[6] = k, i[7] = M, i[8] = O) : (M = i[7], O = i[8]), xAv(M, O);
    let N;
    i[9] !== a ? (N = (Me)=>{
        if (!a || !Me.trim()) {
            S([]), C(-1);
            return;
        }
        const De = a.getHistory(), Ne = a.getBookmarks(io.PROFILE), be = Ncs(Me, De, Ne);
        S(be), C(-1);
    }, i[9] = a, i[10] = N) : N = i[10];
    const U = N;
    let j;
    i[11] === Symbol.for("react.memo_cache_sentinel") ? (j = ()=>{
        u.current !== null && (clearTimeout(u.current), u.current = null);
    }, i[11] = j) : j = i[11];
    const $ = j;
    let H, G;
    i[12] === Symbol.for("react.memo_cache_sentinel") ? (G = ()=>$, H = [
        $
    ], i[12] = H, i[13] = G) : (H = i[12], G = i[13]), xAv(G, H);
    const q = fPs(!1);
    let K;
    i[14] !== d || i[15] !== U ? (K = ()=>{
        $(), g(!0), q.current = !0, requestAnimationFrame(()=>{
            l.current?.select();
        }), U(d);
    }, i[14] = d, i[15] = U, i[16] = K) : K = i[16];
    const V = K;
    let Y;
    i[17] === Symbol.for("react.memo_cache_sentinel") ? (Y = ()=>{
        q.current && (q.current = !1, l.current?.select());
    }, i[17] = Y) : Y = i[17];
    const J = Y;
    let Q;
    i[18] === Symbol.for("react.memo_cache_sentinel") ? (Q = ()=>{
        $(), u.current = setTimeout(()=>{
            u.current = null, g(!1), S([]), C(-1);
        }, 150);
    }, i[18] = Q) : Q = i[18];
    const te = Q;
    let ee;
    i[19] !== s ? (ee = (Me)=>{
        $();
        const De = Mxi(Me);
        g(!1), S([]), C(-1), h(De), s(De), l.current?.blur();
    }, i[19] = s, i[20] = ee) : ee = i[20];
    const re = ee;
    let ie;
    i[21] !== re || i[22] !== d || i[23] !== o || i[24] !== k || i[25] !== y || i[26] !== U || i[27] !== r ? (ie = (Me)=>{
        if (Me.key === "Enter") Me.preventDefault(), k >= 0 && k < y.length ? re(y[k].url) : re(d);
        else if (Me.key === "ArrowDown") Me.preventDefault(), C((De)=>De < y.length - 1 ? De + 1 : De);
        else if (Me.key === "ArrowUp") Me.preventDefault(), C(uR0);
        else if (Me.key === "Escape") Me.preventDefault(), g(!1), S([]), C(-1), h(r), l.current?.blur(), o?.();
        else if (Me.key === "Tab") {
            if (xec(y, k, !0, d)) {
                Me.preventDefault();
                const Ne = k >= 0 ? y[k] : y[0];
                Ne && (h(Ne.url), U(Ne.url));
            }
        } else if (Me.key === "ArrowRight") {
            const De = xec(y, k, !0, d);
            if (De) {
                const Ne = Me.currentTarget;
                if (Ne.selectionStart === Ne.value.length) {
                    Me.preventDefault();
                    const be = d + De;
                    h(be), U(be);
                }
            }
        }
    }, i[21] = re, i[22] = d, i[23] = o, i[24] = k, i[25] = y, i[26] = U, i[27] = r, i[28] = ie) : ie = i[28];
    const oe = ie;
    let se;
    i[29] !== U ? (se = (Me)=>{
        const De = Me.target.value;
        h(De), U(De);
    }, i[29] = U, i[30] = se) : se = i[30];
    const le = se;
    let ce;
    i[31] !== r ? (ce = ()=>{
        _(!1), g(!0), h(r);
    }, i[31] = r, i[32] = ce) : ce = i[32];
    const ae = ce;
    let de;
    i[33] === Symbol.for("react.memo_cache_sentinel") ? (de = ()=>{
        _(!0);
    }, i[33] = de) : de = i[33];
    const he = de;
    let ge;
    i[34] === Symbol.for("react.memo_cache_sentinel") ? (ge = ()=>{
        _(!1);
    }, i[34] = ge) : ge = i[34];
    const pe = ge, ve = p && y.length > 0;
    let fe;
    i[35] !== d || i[36] !== p || i[37] !== k || i[38] !== y ? (fe = xec(y, k, p, d), i[35] = d, i[36] = p, i[37] = k, i[38] = y, i[39] = fe) : fe = i[39];
    const Te = fe;
    let _e;
    i[40] !== r ? (_e = lR0(r), i[40] = r, i[41] = _e) : _e = i[41];
    const Ce = _e;
    let Se, Pe;
    if (i[42] !== Te || i[43] !== le || i[44] !== ae || i[45] !== V || i[46] !== oe || i[47] !== d || i[48] !== p || i[49] !== f || i[50] !== r || i[51] !== Ce) {
        const Me = {
            className: "glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-78zum5 glass-6s0dn4 glass-1n2onr6 glass-f6zju3 glass-1yxiud8 glass-cnij5n glass-yab65l glass-jbqb8w glass-1iuyybk glass-18o3ruo glass-1e1y6u3 glass-1ed109x glass-6ikm8r glass-10wlt62 glass-uxw1ft glass-lyipyv glass-15406qy glass-g3p6pi glass-6ekqhr glass-jb2p0i glass-1wm8ruf glass-spwq11 glass-14s4slr"
        };
        Se = "glass-1n2onr6 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-78zum5 glass-6s0dn4 glass-1f1oiij", Pe = p ? GG(_d, {
            rootStyle: Aec.inputRow,
            size: "md",
            variant: "unfilled",
            children: HRt("div", {
                className: "glass-764vg1 glass-ead0dg glass-1n2onr6 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-78zum5 glass-6s0dn4",
                children: [
                    GG(_d.Input, {
                        "aria-label": "Search or enter URL",
                        autoFocus: !0,
                        className: "glass-h8yej3 glass-f6zju3 glass-196pc8s glass-cnij5n glass-22095l glass-jb2p0i glass-1wm8ruf glass-spwq11 glass-14s4slr",
                        onBlur: te,
                        onChange: le,
                        onFocus: V,
                        onKeyDown: oe,
                        onMouseUp: J,
                        placeholder: "Search or enter URL",
                        ref: l,
                        spellCheck: !1,
                        type: "text",
                        value: d
                    }),
                    Te && HRt("span", {
                        className: "glass-10l6tqk glass-13vifvy glass-3m8u43 glass-1ey2m1c glass-u96u03 glass-f6zju3 glass-1yxiud8 glass-cnij5n glass-yab65l glass-47corl glass-6ikm8r glass-10wlt62 glass-78zum5 glass-6s0dn4 glass-uxw1ft glass-jb2p0i glass-1wm8ruf glass-spwq11 glass-14s4slr",
                        children: [
                            GG("span", {
                                className: "glass-lshs6z glass-1sdyfia",
                                children: d
                            }),
                            GG("span", {
                                className: "glass-4b2ntj glass-byyjgo glass-1sdyfia",
                                children: Te
                            })
                        ]
                    })
                ]
            })
        }) : GG("div", {
            ...Me,
            className: ri("glass-omnibar-display", Me.className),
            onClick: ae,
            onMouseEnter: he,
            onMouseLeave: pe,
            children: r ? HRt(aR0, {
                children: [
                    f && GG("span", {
                        className: "glass-10l6tqk glass-13vifvy glass-3m8u43 glass-1ey2m1c glass-u96u03 glass-bfkjp0 glass-1arjqg4 glass-1e826z5 glass-fdsagq glass-6ikm8r glass-10wlt62 glass-lyipyv glass-uxw1ft glass-1wd3ewq glass-47corl glass-78zum5 glass-6s0dn4",
                        children: r
                    }),
                    HRt("span", {
                        ...{
                            0: {
                                className: "glass-78zum5 glass-6s0dn4 glass-6ikm8r glass-10wlt62 glass-euugli glass-19991ni glass-7pq1vu glass-6ekqhr glass-47corl"
                            },
                            1: {
                                className: "glass-78zum5 glass-6s0dn4 glass-6ikm8r glass-10wlt62 glass-euugli glass-19991ni glass-7pq1vu glass-6ekqhr glass-47corl glass-g01cxk"
                            }
                        }[!!f << 0],
                        children: [
                            GG("span", {
                                className: "glass-4b2ntj glass-byyjgo",
                                children: Ce.protocol
                            }),
                            GG("span", {
                                className: "glass-1wd3ewq glass-iiclqw",
                                children: Ce.domain
                            }),
                            Ce.port && GG("span", {
                                className: "glass-4b2ntj glass-byyjgo glass-6ikm8r glass-10wlt62 glass-lyipyv glass-uxw1ft",
                                children: Ce.port
                            }),
                            GG("span", {
                                className: "glass-4b2ntj glass-byyjgo glass-6ikm8r glass-10wlt62 glass-lyipyv glass-uxw1ft",
                                children: Ce.path
                            })
                        ]
                    })
                ]
            }) : GG("span", {
                className: "glass-4b2ntj glass-byyjgo",
                children: "Search or enter URL"
            })
        }), i[42] = Te, i[43] = le, i[44] = ae, i[45] = V, i[46] = oe, i[47] = d, i[48] = p, i[49] = f, i[50] = r, i[51] = Ce, i[52] = Se, i[53] = Pe;
    } else Se = i[52], Pe = i[53];
    let we;
    i[54] !== re || i[55] !== d || i[56] !== k || i[57] !== ve || i[58] !== y ? (we = ve && GG("div", {
        ref: c,
        className: "glass-10l6tqk glass-1vknick glass-aow8t4 glass-1kcukb8 glass-1m7fhj7 glass-f1vpex glass-18o3ruo glass-1dcwbjb glass-fo81ep glass-f6zju3 glass-g31tg3 glass-cnij5n glass-43mhey",
        children: GG(xg, {
            maxHeight: 320,
            scrollbarVisibility: "hover",
            children: y.map((Me, De)=>GG(cR0, {
                    index: De,
                    isSelected: De === k,
                    onHover: C,
                    onNavigate: re,
                    query: d,
                    suggestion: Me
                }, Me.url))
        })
    }), i[54] = re, i[55] = d, i[56] = k, i[57] = ve, i[58] = y, i[59] = we) : we = i[59];
    let Ie;
    return i[60] !== Se || i[61] !== Pe || i[62] !== we ? (Ie = HRt("div", {
        className: Se,
        children: [
            Pe,
            we
        ]
    }), i[60] = Se, i[61] = Pe, i[62] = we, i[63] = Ie) : Ie = i[63], Ie;
});

}
