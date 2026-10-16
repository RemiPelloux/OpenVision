import { X1 } from "./TransWithoutContext.js";
import { Pe, a, fr } from "./business-error.js";
import { Lt, P2, xt } from "./commerce-provider.js";
import { vi } from "./context.js";
import { D1 } from "./i18n.js";
import { ta } from "./i18nInstance.js";
import { A2, op } from "./i18n_2.js";
import { pd } from "./i18next.js";
import { H2, J2, K2, Nt, Q2, W2, X2, Z2, aS, eS, kc, nS, oS, q2, rS, tS } from "./payment-methods.js";
import { f2 } from "./renderTranslation.js";
import { dS } from "./stripe-stub.js";
import { cp } from "./use-payment-methods.js";
import { lS } from "./use-stripe-js.js";
import { gS } from "./use-stripe-scope-appearance.js";
import { hr } from "./use-translation.js";
import { Be } from "./useTranslation.js";
import { Dn, Ut, na } from "./utils_2.js";
import { $B, AB, Ai, BB, CB, Ci, DB, Dc, EB, EE, Ei, FB, Fc, GB, HB, IB, JS, Jp, KB, Kp, LB, Lc, MB, NB, OB, PB, QS, Qp, RB, Rr, SB, SE, Si, TB, TE, UB, Uc, VB, Wp, Wr, Xt, Yp, Zp, _B, aE, bB, cE, ca, dB, eE, ef, fB, gB, gr, hB, iE, jB, jc, kB, kE, ki, lE, la, mB, mE, nE, oE, pB, pt, qS, qp, rE, sE, tE, uB, uE, vB, wB, wE, xB, xr, yB, zB } from "./_t.js";
import { $t, B9, Bc, DE, EN, FE, Ii, Jt, LE, Le, Ln, M9, ME, OE, P9, U9, Ue, V9, VE, Vc, WC, Yt, ZB, _C, _E, _e, ah, bE, bh, bl, br, cs, fl, gh, gl, hh, hl, hm, hn, it, j9, kN, l0, lT, mT, ma, mh, nr, pC, pN, pr, qB, rr, sa, sf, u0, uo, vE, vh, vo, wi, wt, xh, xl, yE, ya, yh, yt } from "./RE.js";
import { $z, FN, Gz } from "./vm.js";
var _t = {};
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
var vr = {};
Object.defineProperty(vr, "engine", {
    enumerable: true,
    get: ()=>DE
});
Object.defineProperty(vr, "env", {
    enumerable: true,
    get: ()=>FE
});
Object.defineProperty(vr, "mediaQuery", {
    enumerable: true,
    get: ()=>VE
});
Object.defineProperty(vr, "os", {
    enumerable: true,
    get: ()=>RE
});
Object.defineProperty(vr, "screenReader", {
    enumerable: true,
    get: ()=>LE
});
var RE = {};
Object.defineProperty(RE, "android", {
    enumerable: true,
    get: ()=>_E
});
Object.defineProperty(RE, "apple", {
    enumerable: true,
    get: ()=>OE
});
Object.defineProperty(RE, "ios", {
    enumerable: true,
    get: ()=>sf
});
Object.defineProperty(RE, "linux", {
    enumerable: true,
    get: ()=>qB
});
Object.defineProperty(RE, "mac", {
    enumerable: true,
    get: ()=>ME
});
Object.defineProperty(RE, "windows", {
    enumerable: true,
    get: ()=>ZB
});
var vm = {};
Object.defineProperty(vm, "Indicator", {
    enumerable: true,
    get: ()=>$z
});
Object.defineProperty(vm, "Root", {
    enumerable: true,
    get: ()=>Gz
});
!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b87316f6-4241-56fc-95ae-fb24931e1adf");
    } catch (e) {}
}();
function Us(e) {
    var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
    if (r) return r.call(e);
    if (e && typeof e.length == "number") return {
        next: function() {
            return e && n >= e.length && (e = void 0), {
                value: e && e[n++],
                done: !e
            };
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
import { Fragment as Ob, isValidElement as Ho, cloneElement as Au, createElement as to, Children as lD } from "./react-runtime/react/esm-index-production.js";
import { createContext as mD } from "./react-runtime/react/esm-index-production.js";
import { useContext as uD } from "./react-runtime/react/esm-index-production.js";
import js from "./react-runtime/react/esm-index-production.js";
import Go from "./react-runtime/react/esm-index-production.js";
import { useContext as dD } from "./react-runtime/react/esm-index-production.js";
import { useSyncExternalStore as zs } from "./react-runtime/react/esm-index-production.js";
import { useContext as pD, useCallback as Db, useMemo as Ru, useEffect as fD, useRef as Hs, useState as hD } from "./react-runtime/react/esm-index-production.js";
import "./react-runtime/react/esm-index-production.js";
import { createElement as xD, useMemo as gD } from "./react-runtime/react/esm-index-production.js";
import "./react-runtime/react/esm-index-production.js";
import "./react-runtime/react/esm-index-production.js";
import { lazy as vD } from "./react-runtime/react/esm-index-production.js";
import { createContext as bD, use as yD, useMemo as wD, useState as SD } from "./react-runtime/react/esm-index-production.js";
import { jsx as Lb } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useEffect as ED, useMemo as kD, useSyncExternalStore as TD } from "./react-runtime/react/esm-index-production.js";
import { useEffect as CD, useMemo as ID, useSyncExternalStore as AD } from "./react-runtime/react/esm-index-production.js";
import { createContext as RD, use as ND, useCallback as PD, useEffect as _D, useLayoutEffect as Fb, useMemo as Nu, useState as ro } from "./react-runtime/react/esm-index-production.js";
import { jsx as qt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useEffect as Vb, useRef as MD, useState as OD } from "./react-runtime/react/esm-index-production.js";
import { useCallback as DD, useSyncExternalStore as LD } from "./react-runtime/react/esm-index-production.js";
import { useEffect as FD, useRef as VD, useState as BD } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as UD, useMemo as jD, useState as zD } from "./react-runtime/react/esm-index-production.js";
import { Fragment as HD, jsx as $o, jsxs as Bb } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Fragment as GD, createContext as $D } from "./react-runtime/react/esm-index-production.js";
import { jsx as Pn } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { flushSync as Ub } from "./react-runtime/react-dom/esm-index-production.js";
import { Fragment as KD, jsx as mt, jsxs as Gs } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as WD from "./react-runtime/react/esm-index-production.js";
import * as jb from "./react-runtime/react/esm-index-production.js";
import * as $s from "./react-runtime/react/esm-index-production.js";
import * as YD from "./react-runtime/react/esm-index-production.js";
import * as XD from "./react-runtime/react/esm-index-production.js";
import * as ZD from "./react-runtime/react/esm-index-production.js";
import { createElement as zb } from "./react-runtime/react/esm-index-production.js";
import * as qD from "./react-runtime/react/esm-index-production.js";
import * as Pu from "./react-runtime/react/esm-index-production.js";
import * as QD from "./react-runtime/react/esm-index-production.js";
import * as JD from "./react-runtime/react/esm-index-production.js";
import * as Hb from "./react-runtime/react/esm-index-production.js";
import * as e4 from "./react-runtime/react/esm-index-production.js";
import * as t4 from "./react-runtime/react/esm-index-production.js";
import * as Gb from "./react-runtime/react/esm-index-production.js";
import * as r4 from "./react-runtime/react/esm-index-production.js";
import * as n4 from "./react-runtime/react/esm-index-production.js";
import * as tr from "./react-runtime/react/esm-index-production.js";
import * as $b from "./react-runtime/react/esm-index-production.js";
import { jsx as o4 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Bt from "./react-runtime/react/esm-index-production.js";
import * as Kb from "./react-runtime/react-dom/esm-index-production.js";
import { jsx as _u, jsxs as Wb } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Ks from "./react-runtime/react/esm-index-production.js";
import "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Yb, jsxs as a4 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Mu from "./react-runtime/react/esm-index-production.js";
import * as lr from "./react-runtime/react/esm-index-production.js";
import * as Xb from "./react-runtime/react/esm-index-production.js";
import "./react-runtime/react-dom/esm-index-production.js";
import * as i4 from "./react-runtime/react/esm-index-production.js";
import * as s4 from "./react-runtime/react/esm-index-production.js";
import { useDebugValue as c4, useEffect as l4, useMemo as m4, useRef as u4, useSyncExternalStore as d4 } from "./react-runtime/react/esm-index-production.js";
import * as p4 from "./react-runtime/react/esm-index-production.js";
import * as ni from "./react-runtime/react/esm-index-production.js";
import * as Zb from "./react-runtime/react/esm-index-production.js";
import * as f4 from "./react-runtime/react/esm-index-production.js";
import * as qb from "./react-runtime/react-dom/esm-index-production.js";
import * as Qb from "./react-runtime/react/esm-index-production.js";
import * as Jb from "./react-runtime/react/esm-index-production.js";
import { jsx as h4 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as x4 from "./react-runtime/react/esm-index-production.js";
import * as g4 from "./react-runtime/react/esm-index-production.js";
import { jsx as v4 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as ey, jsxs as b4 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as y4 from "./react-runtime/react/esm-index-production.js";
import * as ty from "./react-runtime/react/esm-index-production.js";
import * as Ou from "./react-runtime/react/esm-index-production.js";
import { jsx as ry, jsxs as w4 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as S4 from "./react-runtime/react/esm-index-production.js";
import * as E4 from "./react-runtime/react/esm-index-production.js";
import * as k4 from "./react-runtime/react/esm-index-production.js";
import * as T4 from "./react-runtime/react/esm-index-production.js";
import * as Du from "./react-runtime/react/esm-index-production.js";
import * as C4 from "./react-runtime/react/esm-index-production.js";
import { createContext as ny, use as no, useCallback as I4, useEffect as Ko, useId as oy, useMemo as A4, useRef as dn, useState as Ws } from "./react-runtime/react/esm-index-production.js";
import { useMemo as R4 } from "./react-runtime/react/esm-index-production.js";
import { useEffect as N4 } from "./react-runtime/react/esm-index-production.js";
import { useCallback as P4, useRef as ay } from "./react-runtime/react/esm-index-production.js";
import { useCallback as _4, useRef as M4 } from "./react-runtime/react/esm-index-production.js";
import { jsx as iy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as sy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import "./react-runtime/react/esm-jsx-runtime-production.js";
import { createContext as O4, use as D4 } from "./react-runtime/react/esm-index-production.js";
import { jsx as L4 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as cy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { createContext as F4, use as V4 } from "./react-runtime/react/esm-index-production.js";
import { createContext as B4, use as U4, useMemo as j4 } from "./react-runtime/react/esm-index-production.js";
import { jsx as z4 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useEffect as H4, useMemo as G4, useSyncExternalStore as $4 } from "./react-runtime/react/esm-index-production.js";
import { useCallback as K4 } from "./react-runtime/react/esm-index-production.js";
import { useCallback as W4, useLayoutEffect as Lu, useRef as Fu, useState as mr } from "./react-runtime/react/esm-index-production.js";
import { createContext as Y4, use as X4, useCallback as Z4, useEffect as q4, useId as Q4, useMemo as J4 } from "./react-runtime/react/esm-index-production.js";
import { Fragment as eL, jsx as Wo } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as tL, useState as rL } from "./react-runtime/react/esm-index-production.js";
import { Fragment as nL, jsx as jr, jsxs as Vu } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { createPortal as oL } from "./react-runtime/react-dom/esm-index-production.js";
import { Fragment as aL, jsx as Yo, jsxs as iL } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as ly, Fragment as sL } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useMemo as cL, useRef as Bu, useState as my, useContext as lL } from "./react-runtime/react/esm-index-production.js";
import { createContext as mL } from "./react-runtime/react/esm-index-production.js";
import { useRef as uL } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as dL, useEffect as pL } from "./react-runtime/react/esm-index-production.js";
import { jsx as uy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as fL from "./react-runtime/react/esm-index-production.js";
import { useId as hL, useRef as dy, useMemo as py } from "./react-runtime/react/esm-index-production.js";
import { createContext as xL } from "./react-runtime/react/esm-index-production.js";
import { jsx as gL } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as fy from "./react-runtime/react/esm-index-production.js";
import { useId as vL, useRef as hy, useContext as bL, useInsertionEffect as yL } from "./react-runtime/react/esm-index-production.js";
import { createContext as wL } from "./react-runtime/react/esm-index-production.js";
import * as SL from "./react-runtime/react/esm-index-production.js";
import { useContext as EL, useId as kL, useEffect as TL, useCallback as CL } from "./react-runtime/react/esm-index-production.js";
import { Children as IL, isValidElement as AL } from "./react-runtime/react/esm-index-production.js";
import { createContext as RL } from "./react-runtime/react/esm-index-production.js";
import { jsxs as NL, jsx as PL } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { forwardRef as _L, useContext as Uu } from "./react-runtime/react/esm-index-production.js";
import { createContext as ML } from "./react-runtime/react/esm-index-production.js";
import { useContext as OL, useMemo as DL } from "./react-runtime/react/esm-index-production.js";
import { Fragment as LL, useMemo as FL, createElement as VL } from "./react-runtime/react/esm-index-production.js";
import { useMemo as BL } from "./react-runtime/react/esm-index-production.js";
import { useMemo as UL } from "./react-runtime/react/esm-index-production.js";
import { useContext as xy } from "./react-runtime/react/esm-index-production.js";
import { useRef as gy, useInsertionEffect as jL, useCallback as zL } from "./react-runtime/react/esm-index-production.js";
import { useContext as oi, useRef as Ys, useInsertionEffect as HL, useEffect as GL } from "./react-runtime/react/esm-index-production.js";
import { createContext as $L } from "./react-runtime/react/esm-index-production.js";
import { Fragment as KL } from "./react-runtime/react/esm-index-production.js";
import { jsx as WL } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useContext as vy, Component as YL } from "./react-runtime/react/esm-index-production.js";
import { useContext as XL, useState as ZL, useEffect as qL } from "./react-runtime/react/esm-index-production.js";
import { useState as QL } from "./react-runtime/react/esm-index-production.js";
import { isValidElement as JL, useMemo as eF, useState as by } from "./react-runtime/react/esm-index-production.js";
import { jsx as yy, jsxs as tF } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Suspense as rF, lazy as nF, useState as oF } from "./react-runtime/react/esm-index-production.js";
import { jsx as wy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useEffect as _n, useMemo as aF, useRef as ur, useState as Sy } from "./react-runtime/react/esm-index-production.js";
import { Fragment as iF, jsx as fe, jsxs as Dt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as sF } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Xs, jsxs as Ey } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Xo from "./react-runtime/react/esm-index-production.js";
import * as ju from "./react-runtime/react/esm-index-production.js";
import * as ky from "./react-runtime/react/esm-index-production.js";
import * as Ty from "./react-runtime/react/esm-index-production.js";
import * as Cy from "./react-runtime/react/esm-index-production.js";
import * as Iy from "./react-runtime/react/esm-index-production.js";
import * as cF from "./react-runtime/react/esm-index-production.js";
import * as Ay from "./react-runtime/react/esm-index-production.js";
import * as Ry from "./react-runtime/react/esm-index-production.js";
import * as Ny from "./react-runtime/react/esm-index-production.js";
import { jsx as Py, jsxs as lF } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as _y from "./react-runtime/react/esm-index-production.js";
import { jsx as My } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as mF } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Oy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as uF, useState as dF } from "./react-runtime/react/esm-index-production.js";
import { Fragment as pF, jsx as oo, jsxs as Dy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { createPortal as fF } from "./react-runtime/react-dom/esm-index-production.js";
import { use as zu, useLayoutEffect as hF, useRef as Ly, useState as ai } from "./react-runtime/react/esm-index-production.js";
import { Fragment as xF, jsx as ze, jsxs as pn } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Zo, jsxs as gF } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Fy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Vy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as By } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Mn, jsxs as Hu } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useId as vF } from "./react-runtime/react/esm-index-production.js";
import { use as Uy, useEffect as bF, useRef as yF } from "./react-runtime/react/esm-index-production.js";
import { Fragment as jy, jsx as kt, jsxs as ii } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useEffect as wF, useRef as zy, useState as Hy } from "./react-runtime/react/esm-index-production.js";
import { jsx as ao } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useCallback as SF, useEffect as EF, useState as kF } from "./react-runtime/react/esm-index-production.js";
import { Fragment as TF, jsx as Zs, jsxs as CF } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Gy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useCallback as IF, useState as si } from "./react-runtime/react/esm-index-production.js";
import { useId as AF, useRef as RF, useState as NF } from "./react-runtime/react/esm-index-production.js";
import { Fragment as PF, jsx as ht, jsxs as qo } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { use as qs, useId as _F, useRef as Gu, useState as Qs } from "./react-runtime/react/esm-index-production.js";
import { Fragment as MF, jsx as Ne, jsxs as dr } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as $y } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Ky } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Fragment as OF, jsx as fn, jsxs as $u } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { createContext as DF, memo as LF, use as FF, useEffect as Wy, useMemo as VF, useRef as Yy, useState as zr } from "./react-runtime/react/esm-index-production.js";
import { useEffect as BF, useRef as Ku, useState as UF } from "./react-runtime/react/esm-index-production.js";
import { jsx as Js } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useCallback as jF, useEffect as Xy, useId as zF, useRef as ec, useState as HF } from "./react-runtime/react/esm-index-production.js";
import { Fragment as tc, jsx as ye, jsxs as Qt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Zy, jsxs as GF } from "./react-runtime/react/esm-jsx-runtime-production.js";
import "./react-runtime/react/esm-jsx-runtime-production.js";
import { createContext as $F, use as KF } from "./react-runtime/react/esm-index-production.js";
import { jsx as qy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Qy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Jy } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Aw(e) {
    return e == null || typeof e == "number" || typeof e == "boolean";
}
function gd(e, t, r, n) {
    const o = Aw(n) ? n : r(n);
    let i = t.get(o);
    return typeof i > "u" && (i = e.call(this, n), t.set(o, i)), i;
}
function vd(e, t, r) {
    const n = Array.prototype.slice.call(arguments, 3), o = r(n);
    let i = t.get(o);
    return typeof i > "u" && (i = e.apply(this, n), t.set(o, i)), i;
}
function uc(e, t, r, n, o) {
    return r.bind(t, e, n, o);
}
function Rw(e, t) {
    const r = e.length === 1 ? gd : vd;
    return uc(e, this, r, t.cache.create(), t.serializer);
}
function Nw(e, t) {
    return uc(e, this, vd, t.cache.create(), t.serializer);
}
function Pw(e, t) {
    return uc(e, this, gd, t.cache.create(), t.serializer);
}
function Fw(e) {
    return e.replace(/^(.*?)-/, "");
}
function yd(e) {
    switch(e){
        case "sign-auto":
            return {
                signDisplay: "auto"
            };
        case "sign-accounting":
        case "()":
            return {
                currencySign: "accounting"
            };
        case "sign-always":
        case "+!":
            return {
                signDisplay: "always"
            };
        case "sign-accounting-always":
        case "()!":
            return {
                signDisplay: "always",
                currencySign: "accounting"
            };
        case "sign-except-zero":
        case "+?":
            return {
                signDisplay: "exceptZero"
            };
        case "sign-accounting-except-zero":
        case "()?":
            return {
                signDisplay: "exceptZero",
                currencySign: "accounting"
            };
        case "sign-never":
        case "+_":
            return {
                signDisplay: "never"
            };
    }
}
function wd(e) {
    const t = {}, r = yd(e);
    return r || t;
}
function Td(e) {
    return e.type === 0;
}
function Hw(e) {
    return e.type === 1;
}
function Cd(e) {
    return e.type === 2;
}
function Id(e) {
    return e.type === 3;
}
function Ad(e) {
    return e.type === 4;
}
function Rd(e) {
    return e.type === 5;
}
function Nd(e) {
    return e.type === 6;
}
function Gw(e) {
    return e.type === 7;
}
function Pd(e) {
    return e.type === 8;
}
function _d(e) {
    return !!(e && typeof e == "object" && e.type === 0);
}
function pc(e) {
    return !!(e && typeof e == "object" && e.type === 1);
}
function $e(e, t) {
    return {
        start: e,
        end: t
    };
}
function Yw(e) {
    if (e.length === 0) return null;
    let t = 1, r = 1;
    for(let n = 0; n < e.length;){
        const o = e.charCodeAt(n);
        switch(o){
            case 35:
            case 39:
            case 60:
            case 123:
            case 125:
                return null;
        }
        if (o === 10) t++, r = 1, n++;
        else if (r++, o >= 55296 && o <= 56319 && n + 1 < e.length) {
            const i = e.charCodeAt(n + 1);
            n += i >= 56320 && i <= 57343 ? 2 : 1;
        } else n++;
    }
    return {
        offset: e.length,
        line: t,
        column: r
    };
}
function fc(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Xw(e) {
    return fc(e) || e === 47;
}
function Zw(e) {
    return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function qw(e) {
    return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function hc(e) {
    e.forEach((t)=>{
        if (delete t.location, Rd(t) || Nd(t)) for(const r in t.options)delete t.options[r].location, hc(t.options[r].value);
        else Cd(t) && _d(t.style) || (Id(t) || Ad(t)) && pc(t.style) ? delete t.style.location : Pd(t) && hc(t.children);
    });
}
function c1(e) {
    return e.length < 2 ? e : e.reduce((t, r)=>{
        const n = t[t.length - 1];
        return !n || n.type !== 0 || r.type !== 0 ? t.push(r) : n.value += r.value, t;
    }, []);
}
function l1(e) {
    return typeof e == "function";
}
function m1(e, t) {
    return t ? {
        ...e,
        ...t,
        ...Object.keys(e).reduce((r, n)=>(r[n] = {
                ...e[n],
                ...t[n]
            }, r), {})
    } : e;
}
function u1(e, t) {
    return t ? Object.keys(e).reduce((r, n)=>(r[n] = m1(e[n], t[n]), r), {
        ...e
    }) : e;
}
function xc(e) {
    return {
        create () {
            return {
                get (t) {
                    return e[t];
                },
                set (t, r) {
                    e[t] = r;
                }
            };
        }
    };
}
function x1(e, t) {
    return y1(e) || b1(e, t) || v1(e, t) || g1();
}
function g1() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v1(e, t) {
    if (e) {
        if (typeof e == "string") return Vd(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vd(e, t);
    }
}
function Vd(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for(var r = 0, n = new Array(t); r < t; r++)n[r] = e[r];
    return n;
}
function b1(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [], n = !0, o = !1, i = void 0;
        try {
            for(var s = e[Symbol.iterator](), c; !(n = (c = s.next()).done) && (r.push(c.value), !(t && r.length === t)); n = !0);
        } catch (l) {
            o = !0, i = l;
        } finally{
            try {
                !n && s.return != null && s.return();
            } finally{
                if (o) throw i;
            }
        }
        return r;
    }
}
function y1(e) {
    if (Array.isArray(e)) return e;
}
function Bd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable;
        })), r.push.apply(r, n);
    }
    return r;
}
function Ud(e) {
    for(var t = 1; t < arguments.length; t++){
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Bd(Object(r), !0).forEach(function(n) {
            w1(e, n, r[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
    }
    return e;
}
function w1(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}
function S1(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function jd(e, t) {
    for(var r = 0; r < t.length; r++){
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function E1(e, t, r) {
    return t && jd(e.prototype, t), r && jd(e, r), e;
}
function k1() {
    return {
        memoize: !0,
        memoizeFallback: !1,
        bindI18n: "",
        bindI18nStore: "",
        parseErrorHandler: a(function(t, r, n, o) {
            return n;
        }, "parseErrorHandler"),
        parseLngForICU: a(function(t) {
            return t;
        }, "parseLngForICU"),
        escapeVariables: !1
    };
}
async function O1(e, t) {
    const r = Array.isArray(t) ? t : [
        t
    ], n = await Promise.all(r.map((o)=>typeof o == "function" ? o(e) : Promise.resolve(o)));
    return Object.assign({}, ...n);
}
function B1(e) {
    const t = [];
    for(const r in e)e[r] === null ? t.push(r) : t.push(r + '="' + String(e[r]).replace(/"/g, "&quot;") + '"');
    return t.length ? " " + t.join(" ") : "";
}
function Wd(e, t) {
    switch(t.type){
        case "text":
            return e + t.content;
        case "tag":
            {
                const r = t.voidElement && t.name.toLowerCase() !== "!doctype" ? "/>" : ">";
                return e += "<" + t.name + (t.attrs ? B1(t.attrs) : "") + r, t.voidElement ? e : e + t.children.reduce(Wd, "") + "</" + t.name + ">";
            }
        case "comment":
            return e += "<!--" + t.comment + "-->", e;
    }
}
function U1(e) {
    return e.reduce(function(t, r) {
        return t + Wd("", r);
    }, "");
}
function Qd({ children: e, count: t, parent: r, i18nKey: n, context: o, tOptions: i = {}, values: s, defaults: c, components: l, ns: m, i18n: u, t: d, shouldUnescape: p, ...h }) {
    const { i18n: f, defaultNS: v } = uD(vi) || {}, x = u || f || ta(), g = d || x?.t.bind(x);
    return X1({
        children: e,
        count: t,
        parent: r,
        i18nKey: n,
        context: o,
        tOptions: i,
        values: s,
        defaults: c,
        components: l,
        ns: m || g?.ns || v || x?.options?.defaultNS,
        i18n: x,
        t: d,
        shouldUnescape: p,
        ...h
    });
}
function ep({ i18nKey: e, defaultTranslation: t, content: r, ns: n, values: o = {}, i18n: i, t: s }) {
    const c = i || ta();
    if (!c) return Dn(c, "NO_I18NEXT_INSTANCE", "IcuTrans: You need to pass in an i18next instance using i18nextReactModule", {
        i18nKey: e
    }), Go.createElement(Go.Fragment, {}, t);
    const l = s || c.t?.bind(c) || ((p)=>p);
    let m = n || l.ns || c.options?.defaultNS;
    m = Ut(m) ? [
        m
    ] : m || [
        "translation"
    ];
    let u = o;
    c.options?.interpolation?.defaultVariables && (u = o && Object.keys(o).length > 0 ? {
        ...o,
        ...c.options.interpolation.defaultVariables
    } : {
        ...c.options.interpolation.defaultVariables
    });
    const d = l(e || t, {
        defaultValue: t,
        ...u,
        ns: m
    });
    try {
        const p = f2(d, r);
        return Go.createElement(Go.Fragment, {}, ...p);
    } catch (p) {
        return na(c, "ICU_TRANS_RENDER_ERROR", `IcuTrans component error for key "${e}": ${p.message}`, {
            i18nKey: e,
            error: p
        }), Go.createElement(Go.Fragment, {}, d);
    }
}
function x2({ i18nKey: e, defaultTranslation: t, content: r, ns: n, values: o = {}, i18n: i, t: s }) {
    const { i18n: c, defaultNS: l } = dD(vi) || {}, m = i || c || ta(), u = s || m?.t.bind(m);
    return ep({
        i18nKey: e,
        defaultTranslation: t,
        content: r,
        ns: n || u?.ns || l || m?.options?.defaultNS,
        values: o,
        i18n: m,
        t: s
    });
}
function y2({ i18n: e, defaultNS: t, children: r }) {
    const n = gD(()=>({
            i18n: e,
            defaultNS: t
        }), [
        e,
        t
    ]);
    return xD(vi.Provider, {
        value: n
    }, r);
}
function S2(e, t, r) {
    const n = pd();
    return D1(e, t, n, {
        bindGlobalReactInstance: !1
    }).catch((o)=>{
        r ? r(o) : console.error("[i18n] scoped instance init failed", o);
    }), n;
}
function k2(e) {
    const t = new Map;
    return a(async function(n) {
        const o = t.get(n);
        if (o) return o;
        const i = (async ()=>{
            try {
                return await e(n);
            } catch (s) {
                return console.error("[i18n] Failed to load messages", s), t.delete(n), {};
            }
        })();
        return t.set(n, i), i;
    }, "messageLoader");
}
function ap() {
    let e;
    return {
        pick (t) {
            return e ?? t;
        },
        replaceFailed (t, r) {
            (e === void 0 || e === t) && (e = vD(r));
        }
    };
}
function M2(e) {
    return ()=>{};
}
function O2() {
    return Promise.resolve();
}
function up(e, t = Date.now()) {
    return e.expMonth === void 0 || e.expYear === void 0 ? !1 : t >= Date.UTC(e.expYear, e.expMonth, 1);
}
function j2(e, t) {
    if (e.expMonth === void 0 || e.expYear === void 0) return;
    const r = `${String(e.expMonth).padStart(2, "0")}/${e.expYear}`;
    return up(e) ? t("Expired {expiry}", {
        expiry: r
    }) : t("Expires {expiry}", {
        expiry: r
    });
}
function z2() {
    let e = null;
    const t = new Set;
    return {
        handle: a(()=>e, "handle"),
        whenRegistered (r) {
            if (e !== null) return Promise.resolve(e);
            const { promise: n, resolve: o } = Promise.withResolvers(), i = setTimeout(()=>{
                t.delete(s), o(null);
            }, r);
            function s(c) {
                clearTimeout(i), o(c);
            }
            return a(s, "settle"), t.add(s), n;
        },
        register (r) {
            if (e !== null && e !== r) throw new Error("a PaymentMethodsProvider supports one registered setup handler at a time");
            e = r;
            for (const n of t)n(r);
            return t.clear(), a(function() {
                e === r && (e = null);
            }, "unregister");
        }
    };
}
function G2() {
    let e = {
        add: {
            status: "idle"
        },
        attempts: {},
        mounted: !1,
        onFixed: void 0,
        onRosterChange: void 0
    };
    return {
        pending: new Set,
        read: a(()=>e, "read"),
        write (t) {
            e = {
                ...e,
                ...t
            };
        }
    };
}
function Kr({ children: e, className: t, disabled: r, onClick: n, render: o }) {
    return o !== void 0 ? o({
        children: e,
        disabled: r,
        onClick: n,
        type: "button"
    }) : qt("button", {
        type: "button",
        className: t,
        disabled: r,
        onClick: n,
        children: e
    });
}
function Y2(e, t) {
    return t.canRemove && !e.isDefault && t.paymentMethods.length > 1;
}
pr(lS, {
    Elements: ()=>xp,
    ExpressCheckoutElement: ()=>mS,
    PaymentElement: ()=>gp,
    loadStripe: ()=>uS,
    useElements: ()=>vp,
    useStripe: ()=>bp
});
function xp() {
    return null;
}
function mS() {
    return null;
}
function gp() {
    return null;
}
function vp() {
    return null;
}
function bp() {
    return null;
}
async function uS() {
    return null;
}
async function pS(e) {
    try {
        const { loadStripe: t } = await Promise.resolve().then(()=>(dS(), lS));
        return await t(e);
    } catch (t) {
        return console.error("[commerce-ui] Stripe.js failed to load", t), null;
    }
}
function fS(e, t) {
    const [r] = OD(()=>pS(e)), n = MD(t);
    return Vb(()=>{
        n.current = t;
    }), Vb(()=>{
        let o = !0;
        return r.then(a(function(s) {
            s === null && o && n.current?.();
        }, "reportMissingStripe")), a(function() {
            o = !1;
        }, "unmount");
    }, [
        r
    ]), r;
}
function Sp(e, t) {
    return JSON.stringify(e) === JSON.stringify(t) ? e : t;
}
pr(yS, {
    StripeSetupPayment: ()=>wS
});
function wS({ className: e, currency: t, onLoadFailed: r }) {
    const n = Nt(), { appearance: o, attachContainer: i } = gS(), { publishableKey: s } = n;
    return s === void 0 ? null : $o(ES, {
        publishableKey: s,
        currency: t,
        appearance: o,
        onLoadFailed: r,
        children: $o(SS, {
            className: e,
            containerRef: i,
            onLoadFailed: r
        })
    }, s);
}
function SS({ className: e, containerRef: t, onLoadFailed: r }) {
    const [n, o] = zD(null), i = Nt(), { add: s } = i, { setCollectorReady: c } = i.actions, l = s.status === "collecting" || s.status === "submitting" || s.status === "requires-action" || s.status === "failed";
    return !l && n !== null && o(null), UD(()=>{
        if (l) return a(function() {
            c(!1);
        }, "unmountedWhileCollecting");
    }, [
        c,
        l
    ]), Bb(HD, {
        children: [
            $o(kS, {
                onTokenizeError: o
            }),
            l ? Bb("div", {
                ref: t,
                className: e,
                children: [
                    $o(gp, {
                        onReady: a(()=>c(!0), "onReady"),
                        onLoadError: a(()=>r?.(), "onLoadError")
                    }),
                    n === null ? null : $o("p", {
                        role: "alert",
                        children: n
                    })
                ]
            }) : null
        ]
    });
}
function ES({ children: e, currency: t, appearance: r, publishableKey: n, onLoadFailed: o }) {
    const i = fS(n, o), s = {
        mode: "setup",
        paymentMethodCreation: "manual",
        paymentMethodTypes: [
            "card"
        ],
        loader: "never",
        appearance: r
    };
    return t !== void 0 && (s.currency = t.toLowerCase()), $o(xp, {
        stripe: i,
        options: s,
        children: e
    });
}
function kS({ onTokenizeError: e }) {
    const t = bp(), r = vp(), { t: n } = Be(), o = jD(()=>t === null ? null : {
            async resolvePaymentMethod () {
                if (e(null), r === null) return "invalid";
                const i = await r.submit();
                if (i.error !== void 0) return i.error.type !== "validation_error" && e(i.error.message ?? n("Something went wrong. Try again.")), "invalid";
                const s = await t.createPaymentMethod({
                    elements: r
                });
                return s.error !== void 0 ? (s.error.type !== "validation_error" && e(s.error.message ?? n("Something went wrong. Try again.")), "invalid") : {
                    paymentMethodId: s.paymentMethod.id
                };
            },
            async handleAction (i) {
                if (i.kind !== "stripe-setup-action") throw new Error(`Stripe setup handler cannot handle a '${i.kind}' action`);
                const { error: s } = await t.handleNextAction({
                    clientSecret: i.clientSecret
                });
                if (s !== void 0) throw new Pe("SETUP_ACTION_FAILED", s.message ?? "Stripe setup action failed", {
                    retriable: !0
                });
            }
        }, [
        r,
        e,
        t,
        n
    ]);
    return H2(o), null;
}
fr();
var Tc = 1e6, TS = new Map;
a(sa, "currencyFractionDigits");
function so(e, t) {
    return {
        currencyCode: t,
        unitMicros: Math.round(e * Tc)
    };
}
a(so, "moneyFromUnits");
function Cc(e, t) {
    if (!Number.isInteger(e)) throw new RangeError(`Minor units must be an integer, got ${e}`);
    const r = e * (Tc / 10 ** sa(t));
    if (!Number.isSafeInteger(r)) throw new RangeError(`${e} minor units of ${t} exceed the safe integer range in micros`);
    return {
        currencyCode: t,
        unitMicros: r
    };
}
a(Cc, "moneyFromMinorUnits");
function Ic(e) {
    const t = Tc / 10 ** sa(e.currencyCode);
    return Math.round(e.unitMicros / t);
}
a(Ic, "moneyToMinorUnits");
a(Ln, "moneyEqual");
a(Yt, "formatMoneyAmount");
var NV = {
    setTimeout: a((e, t)=>setTimeout(e, t), "setTimeout"),
    clearTimeout: a((e)=>clearTimeout(e), "clearTimeout"),
    setInterval: a((e, t)=>setInterval(e, t), "setInterval"),
    clearInterval: a((e)=>clearInterval(e), "clearInterval")
}, PV = class {
    static{
        a(this, "TimeoutManager");
    }
    #e = NV;
    #t = !1;
    setTimeoutProvider(e) {
        this.#e = e;
    }
    setTimeout(e, t) {
        return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
        this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
        return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
        this.#e.clearInterval(e);
    }
}, co = new PV;
function CS(e) {
    setTimeout(e, 0);
}
a(CS, "systemSetTimeoutZero");
var _V = typeof window > "u" || "Deno" in globalThis;
function Pt() {}
a(Pt, "noop");
function IS(e, t) {
    return typeof e == "function" ? e(t) : e;
}
a(IS, "functionalUpdate");
function Ep(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
a(Ep, "isValidTimeout");
function kp(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
}
a(kp, "timeUntilStale");
function ft(e, t) {
    return typeof e == "function" ? e(t) : e;
}
a(ft, "resolveQueryValue");
function Tp(e, t) {
    const { type: r = "all", exact: n, fetchStatus: o, predicate: i, queryKey: s, stale: c } = e;
    if (s) {
        if (n) {
            if (t.queryHash !== Ac(s, t.options)) return !1;
        } else if (!mo(t.queryKey, s)) return !1;
    }
    if (r !== "all") {
        const l = t.isActive();
        if (r === "active" && !l || r === "inactive" && l) return !1;
    }
    return !(typeof c == "boolean" && t.isStale() !== c || o && o !== t.state.fetchStatus || i && !i(t));
}
a(Tp, "matchQuery");
function Cp(e, t) {
    const { exact: r, status: n, predicate: o, mutationKey: i } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (r) {
            if (lo(t.options.mutationKey) !== lo(i)) return !1;
        } else if (!mo(t.options.mutationKey, i)) return !1;
    }
    return !(n && t.state.status !== n || o && !o(t));
}
a(Cp, "matchMutation");
function Ac(e, t) {
    return (t?.queryKeyHashFn || lo)(e);
}
a(Ac, "hashQueryKeyByOptions");
function lo(e) {
    return JSON.stringify(e, (t, r)=>Nc(r) ? Object.keys(r).sort().reduce((n, o)=>(n[o] = r[o], n), {}) : r);
}
a(lo, "hashKey");
function mo(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (Array.isArray(e) && Array.isArray(t)) {
            if (t.length > e.length) return !1;
            for(let n = 0; n < t.length; n++)if (!mo(e[n], t[n])) return !1;
            return !0;
        }
        const r = Object.keys(t);
        for (const n of r)if (!mo(e[n], t[n])) return !1;
        return !0;
    }
    return !1;
}
a(mo, "partialMatchKey");
var MV = Object.prototype.hasOwnProperty;
function Ip(e, t, r = 0) {
    if (e === t) return e;
    if (r > 500) return t;
    const n = Ap(e) && Ap(t);
    if (!n && !(Nc(e) && Nc(t))) return t;
    const o = (n ? e : Object.keys(e)).length, i = n ? t : Object.keys(t), s = i.length, c = n ? new Array(s) : {};
    let l = 0;
    for(let m = 0; m < s; m++){
        const u = n ? m : i[m], d = e[u], p = t[u];
        if (d === p) {
            c[u] = d, (n ? m < o : MV.call(e, u)) && l++;
            continue;
        }
        if (d === null || p === null || typeof d != "object" || typeof p != "object") {
            c[u] = p;
            continue;
        }
        const h = Ip(d, p, r + 1);
        c[u] = h, h === d && l++;
    }
    return o === s && l === o ? e : c;
}
a(Ip, "replaceEqualDeep");
function Rc(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
    for(const r in e)if (e[r] !== t[r]) return !1;
    return !0;
}
a(Rc, "shallowEqualObjects");
function Ap(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
}
a(Ap, "isPlainArray");
function Nc(e) {
    if (!Rp(e)) return !1;
    const t = Object.getPrototypeOf(e), r = t?.constructor;
    if (r === void 0) return !0;
    if (typeof r != "function") return !1;
    const n = r.prototype;
    return !(!Rp(n) || !n.hasOwnProperty("isPrototypeOf") || t !== Object.prototype);
}
a(Nc, "isPlainObject");
function Rp(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
a(Rp, "hasObjectPrototype");
function AS(e) {
    return new Promise((t)=>{
        co.setTimeout(t, e);
    });
}
a(AS, "sleep");
function Pc(e, t, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? Ip(e, t) : t;
}
a(Pc, "replaceData");
function RS(e, t, r = 0) {
    const n = [
        ...e,
        t
    ];
    return r && n.length > r ? n.slice(1) : n;
}
a(RS, "addToEnd");
function NS(e, t, r = 0) {
    const n = [
        t,
        ...e
    ];
    return r && n.length > r ? n.slice(0, -1) : n;
}
a(NS, "addToStart");
var Np = Symbol();
function Pp(e, t) {
    return !e.queryFn && t?.initialPromise ? ()=>t.initialPromise : !e.queryFn || e.queryFn === Np ? ()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
a(Pp, "ensureQueryFn");
function PS(e, t, r) {
    let n = !1, o;
    return Object.defineProperty(e, "signal", {
        enumerable: !0,
        get: a(()=>(o ??= t(), n || (n = !0, o.aborted ? r() : o.addEventListener("abort", r, {
                once: !0
            })), o), "get")
    }), e;
}
a(PS, "addConsumeAwareSignal");
var OV = a(()=>_V, "isServerFn"), _p = a(()=>OV(), "isServer"), bi = class {
    static{
        a(this, "Subscribable");
    }
    constructor(){
        this.listeners = new Set, this.subscribe = this.subscribe.bind(this);
    }
    subscribe(e) {
        return this.listeners.add(e), this.onSubscribe(), ()=>{
            this.listeners.delete(e), this.onUnsubscribe();
        };
    }
    hasListeners() {
        return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
}, DV = class extends bi {
    static{
        a(this, "FocusManager");
    }
    #e;
    #t;
    #r;
    constructor(){
        super(), this.#r = (e)=>{
            if (typeof window < "u" && window.addEventListener) {
                const t = a(()=>e(), "listener");
                return window.addEventListener("visibilitychange", t, !1), ()=>{
                    window.removeEventListener("visibilitychange", t);
                };
            }
        };
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#r);
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(), this.#t = void 0);
    }
    setEventListener(e) {
        this.#r = e, this.#t?.(), this.#t = e((t)=>{
            typeof t == "boolean" ? this.setFocused(t) : this.onFocus();
        });
    }
    setFocused(e) {
        this.#e !== e && (this.#e = e, this.onFocus());
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach((t)=>{
            t(e);
        });
    }
    isFocused() {
        return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden";
    }
}, Mp = new DV;
function _S(e) {
    let t;
    if (e.then((r)=>(t = r, r), Pt)?.catch?.(Pt), t !== void 0) return {
        data: t
    };
}
a(_S, "tryResolveSync");
function MS(e) {
    return {
        mutationKey: e.options.mutationKey,
        state: e.state,
        ...e.options.scope && {
            scope: e.options.scope
        },
        ...e.meta && {
            meta: e.meta
        }
    };
}
a(MS, "dehydrateMutation");
function OS(e, t, r) {
    const n = e.promise?.then(t).catch((o)=>r?.(o) === !1 ? Promise.reject(o) : Promise.reject(new Error("redacted")));
    return n?.catch(Pt), n;
}
a(OS, "dehydratePromise");
function DS(e, t, r) {
    return {
        dehydratedAt: Date.now(),
        state: {
            ...e.state,
            ...e.state.data !== void 0 && {
                data: t ? t(e.state.data) : e.state.data
            }
        },
        queryKey: e.queryKey,
        queryHash: e.queryHash,
        ...e.state.status === "pending" && {
            promise: OS(e, t, r)
        },
        ...e.meta && {
            meta: e.meta
        },
        ...e.queryType && {
            queryType: e.queryType
        }
    };
}
a(DS, "dehydrateQuery");
function LS(e) {
    return e.state.isPaused;
}
a(LS, "defaultShouldDehydrateMutation");
function Op(e) {
    return e.state.status === "success";
}
a(Op, "defaultShouldDehydrateQuery");
function FS(e, t = {}) {
    const r = t.shouldDehydrateMutation ?? e.getDefaultOptions().dehydrate?.shouldDehydrateMutation ?? LS, n = e.getMutationCache().getAll().flatMap((c)=>r(c) ? [
            MS(c)
        ] : []), o = t.shouldDehydrateQuery ?? e.getDefaultOptions().dehydrate?.shouldDehydrateQuery ?? Op, i = t.shouldRedactErrors ?? e.getDefaultOptions().dehydrate?.shouldRedactErrors, s = t.serializeData ?? e.getDefaultOptions().dehydrate?.serializeData;
    return {
        mutations: n,
        queries: e.getQueryCache().getAll().flatMap((c)=>o(c) ? [
                DS(c, s, i)
            ] : [])
    };
}
a(FS, "dehydrate");
function VS(e, t, r) {
    const n = e.getMutationCache(), o = e.getQueryCache(), i = r?.defaultOptions?.deserializeData ?? e.getDefaultOptions().hydrate?.deserializeData;
    t.mutations?.forEach(({ state: s, ...c })=>{
        n.build(e, {
            ...e.getDefaultOptions().hydrate?.mutations,
            ...r?.defaultOptions?.mutations,
            ...c
        }, s);
    }), t.queries?.forEach(({ queryKey: s, state: c, queryHash: l, meta: m, promise: u, dehydratedAt: d, queryType: p })=>{
        const h = u ? _S(u) : void 0, f = c.data === void 0 ? h?.data : c.data, v = f === void 0 ? f : i ? i(f) : f;
        let x = o.get(l);
        const g = x?.state.status === "pending", y = x?.state.fetchStatus === "fetching";
        if (x) {
            const w = h && d > x.state.dataUpdatedAt;
            if (c.dataUpdatedAt > x.state.dataUpdatedAt || w) {
                const { fetchStatus: b, ...T } = c;
                x.setState({
                    ...T,
                    data: v,
                    ...c.status === "pending" && v !== void 0 && {
                        status: "success",
                        dataUpdatedAt: d,
                        ...!y && {
                            fetchStatus: "idle"
                        }
                    }
                });
            }
        } else x = o.build(e, {
            ...e.getDefaultOptions().hydrate?.queries,
            ...r?.defaultOptions?.queries,
            queryKey: s,
            queryHash: l,
            meta: m,
            _type: p
        }, {
            ...c,
            data: v,
            fetchStatus: "idle",
            status: c.status === "pending" && v !== void 0 ? "success" : c.status,
            ...c.status === "pending" && v !== void 0 && {
                dataUpdatedAt: d
            }
        });
        u && !h && !g && !y && d > x.state.dataUpdatedAt && x.fetch(void 0, {
            initialPromise: Promise.resolve(u).then(i)
        }).catch(Pt);
    });
}
a(VS, "hydrate");
var LV = CS;
function BS() {
    let e = [], t = 0, r = a((c)=>{
        c();
    }, "notifyFn"), n = a((c)=>{
        c();
    }, "batchNotifyFn"), o = LV;
    const i = a((c)=>{
        t ? e.push(c) : o(()=>{
            r(c);
        });
    }, "schedule"), s = a(()=>{
        const c = e;
        e = [], c.length && o(()=>{
            n(()=>{
                c.forEach((l)=>{
                    r(l);
                });
            });
        });
    }, "flush");
    return {
        batch: a((c)=>{
            let l;
            t++;
            try {
                l = c();
            } finally{
                t--, t || s();
            }
            return l;
        }, "batch"),
        batchCalls: a((c)=>(...l)=>{
                i(()=>{
                    c(...l);
                });
            }, "batchCalls"),
        schedule: i,
        setNotifyFunction: a((c)=>{
            r = c;
        }, "setNotifyFunction"),
        setBatchNotifyFunction: a((c)=>{
            n = c;
        }, "setBatchNotifyFunction"),
        setScheduler: a((c)=>{
            o = c;
        }, "setScheduler")
    };
}
a(BS, "createNotifyManager");
var jt = BS(), FV = class extends bi {
    static{
        a(this, "OnlineManager");
    }
    #e = !0;
    #t;
    #r;
    constructor(){
        super(), this.#r = (e)=>{
            if (typeof window < "u" && window.addEventListener) {
                const t = a(()=>e(!0), "onlineListener"), r = a(()=>e(!1), "offlineListener");
                return window.addEventListener("online", t, !1), window.addEventListener("offline", r, !1), ()=>{
                    window.removeEventListener("online", t), window.removeEventListener("offline", r);
                };
            }
        };
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#r);
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(), this.#t = void 0);
    }
    setEventListener(e) {
        this.#r = e, this.#t?.(), this.#t = e(this.setOnline.bind(this));
    }
    setOnline(e) {
        this.#e !== e && (this.#e = e, this.listeners.forEach((t)=>{
            t(e);
        }));
    }
    isOnline() {
        return this.#e;
    }
}, _c = new FV;
function US(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
}
a(US, "defaultRetryDelay");
function Dp(e) {
    return (e ?? "online") === "online" ? _c.isOnline() : !0;
}
a(Dp, "canFetch");
var Lp = class extends Error {
    static{
        a(this, "CancelledError");
    }
    constructor(e){
        super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
    }
};
function Fp(e) {
    let t = !1, r = 0, n, o = "pending", i, s;
    const c = new Promise((y, w)=>{
        i = y, s = w;
    });
    c.catch(Pt);
    const l = a(()=>o !== "pending", "isResolved"), m = a((y)=>{
        if (!l()) {
            const w = new Lp(y);
            v(w), e.onCancel?.(w);
        }
    }, "cancel"), u = a(()=>{
        t = !0;
    }, "cancelRetry"), d = a(()=>{
        t = !1;
    }, "continueRetry"), p = a(()=>Mp.isFocused() && (e.networkMode === "always" || _c.isOnline()) && e.canRun(), "canContinue"), h = a(()=>Dp(e.networkMode) && e.canRun(), "canStart"), f = a((y)=>{
        l() || (n?.(), o = "resolved", i(y));
    }, "resolve"), v = a((y)=>{
        l() || (n?.(), o = "rejected", s(y));
    }, "reject"), x = a(()=>new Promise((y)=>{
            n = a((w)=>{
                (l() || p()) && y(w);
            }, "continueFn"), e.onPause?.();
        }).then(()=>{
            n = void 0, l() || e.onContinue?.();
        }), "pause"), g = a(()=>{
        if (l()) return;
        let y;
        const w = r === 0 ? e.initialPromise : void 0;
        try {
            y = w ?? e.fn();
        } catch (b) {
            y = Promise.reject(b);
        }
        Promise.resolve(y).then(f).catch((b)=>{
            if (l()) return;
            const T = e.retry ?? (_p() ? 0 : 3), R = e.retryDelay ?? US, E = typeof R == "function" ? R(r, b) : R, S = T === !0 || typeof T == "number" && r < T || typeof T == "function" && T(r, b);
            if (t || !S) {
                v(b);
                return;
            }
            r++, e.onFail?.(r, b), AS(E).then(()=>p() ? void 0 : x()).then(()=>{
                t ? v(b) : g();
            });
        });
    }, "run");
    return {
        promise: c,
        status: a(()=>o, "status"),
        cancel: m,
        continue: a(()=>(n?.(), c), "continue"),
        cancelRetry: u,
        continueRetry: d,
        canStart: h,
        start: a(()=>(h() ? g() : x().then(g), c), "start")
    };
}
a(Fp, "createRetryer");
var jS = class {
    static{
        a(this, "Removable");
    }
    #e;
    destroy() {
        this.clearGcTimeout();
    }
    scheduleGc() {
        this.clearGcTimeout(), Ep(this.gcTime) && (this.#e = co.setTimeout(()=>{
            this.optionalRemove();
        }, this.gcTime));
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (_p() ? 1 / 0 : 3e5));
    }
    clearGcTimeout() {
        this.#e !== void 0 && (co.clearTimeout(this.#e), this.#e = void 0);
    }
};
function zS(e) {
    return {
        onFetch: a((t, r)=>{
            const n = t.options, o = t.fetchOptions?.meta?.fetchMore?.direction, i = t.state.data?.pages || [], s = t.state.data?.pageParams || [];
            let c = {
                pages: [],
                pageParams: []
            }, l = 0;
            const m = a(async ()=>{
                let u = !1;
                const d = a((f)=>{
                    PS(f, ()=>t.signal, ()=>u = !0);
                }, "addSignalProperty"), p = Pp(t.options, t.fetchOptions), h = a(async (f, v, x)=>{
                    if (u) return Promise.reject(t.signal.reason);
                    if (v == null && f.pages.length) return Promise.resolve(f);
                    const y = a(()=>{
                        const R = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: v,
                            direction: x ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return d(R), R;
                    }, "createQueryFnContext")(), w = await p(y), { maxPages: b } = t.options, T = x ? NS : RS;
                    return {
                        pages: T(f.pages, w, b),
                        pageParams: T(f.pageParams, v, b)
                    };
                }, "fetchPage");
                if (o && i.length) {
                    const f = o === "backward", v = f ? HS : Vp, x = {
                        pages: i,
                        pageParams: s
                    };
                    c = await h(x, v(n, x), f);
                } else {
                    const f = e ?? i.length;
                    do {
                        const v = l === 0 ? s[0] ?? n.initialPageParam : Vp(n, c);
                        if (l > 0 && v == null) break;
                        c = await h(c, v), l++;
                    }while (l < f)
                }
                return c;
            }, "fetchFn");
            t.options.persister ? t.fetchFn = ()=>t.options.persister?.(m, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, r) : t.fetchFn = m;
        }, "onFetch")
    };
}
a(zS, "infiniteQueryBehavior");
function Vp(e, { pages: t, pageParams: r }) {
    const n = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
}
a(Vp, "getNextPageParam");
function HS(e, { pages: t, pageParams: r }) {
    return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
}
a(HS, "getPreviousPageParam");
var VV = class extends jS {
    static{
        a(this, "Query");
    }
    #e;
    #t;
    #r;
    #n;
    #a;
    #o;
    #i;
    #c;
    constructor(e){
        super(), this.#c = !1, this.#i = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#a = e.client, this.#n = this.#a.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#t = jp(this.options), this.state = e.state ?? this.#t, this.scheduleGc();
    }
    get meta() {
        return this.options.meta;
    }
    get queryType() {
        return this.#e;
    }
    get promise() {
        return this.#o?.promise;
    }
    setOptions(e) {
        if (this.options = {
            ...this.#i,
            ...e
        }, e?._type && (this.#e = e._type), this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
            const t = jp(this.options);
            t.data !== void 0 && (this.setState(Up(t.data, t.dataUpdatedAt)), this.#t = t);
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this);
    }
    setData(e, t) {
        const r = Pc(this.state.data, e, this.options);
        return this.#s({
            data: r,
            type: "success",
            dataUpdatedAt: t?.updatedAt,
            manual: t?.manual
        }), r;
    }
    setState(e) {
        this.#s({
            type: "setState",
            state: e
        });
    }
    cancel(e) {
        const t = this.#o?.promise;
        return this.#o?.cancel(e), t ? t.then(Pt).catch(Pt) : Promise.resolve();
    }
    destroy() {
        super.destroy(), this.cancel({
            silent: !0
        });
    }
    get resetState() {
        return this.#t;
    }
    reset() {
        this.destroy(), this.setState(this.resetState);
    }
    isActive() {
        return this.observers.some((e)=>ft(e.options.enabled, this) !== !1);
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Np || !this.isFetched();
    }
    isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some((e)=>ft(e.options.staleTime, this) === "static") : !1;
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some((e)=>e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(e = 0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !kp(this.state.dataUpdatedAt, e);
    }
    onFocus() {
        this.observers.find((e)=>e.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }), this.#o?.continue();
    }
    onOnline() {
        this.observers.find((e)=>e.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }), this.#o?.continue();
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#n.notify({
            type: "observerAdded",
            query: this,
            observer: e
        }));
    }
    removeObserver(e) {
        const t = this.observers.indexOf(e);
        t !== -1 && (this.observers.splice(t, 1), this.observers.length || (this.#o && (this.#c || this.state.fetchStatus === "paused" && this.state.status === "pending" ? this.#o.cancel({
            revert: !0
        }) : this.#o.cancelRetry()), this.scheduleGc()), this.#n.notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }));
    }
    getObserversCount() {
        return this.observers.length;
    }
    invalidate() {
        this.state.isInvalidated || this.#s({
            type: "invalidate"
        });
    }
    async fetch(e, t) {
        if (this.state.fetchStatus !== "idle" && this.#o?.status() !== "rejected") {
            if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({
                silent: !0
            });
            else if (this.#o) return this.#o.continueRetry(), this.#o.promise;
        }
        if (e && this.setOptions(e), !this.options.queryFn) {
            const l = this.observers.find((m)=>m.options.queryFn);
            l && this.setOptions(l.options);
        }
        const r = new AbortController, n = a((l)=>{
            Object.defineProperty(l, "signal", {
                enumerable: !0,
                get: a(()=>(this.#c = !0, r.signal), "get")
            });
        }, "addSignalProperty"), o = a(()=>{
            const l = Pp(this.options, t), u = a(()=>{
                const d = {
                    client: this.#a,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return n(d), d;
            }, "createQueryFnContext")();
            return this.#c = !1, this.options.persister ? this.options.persister(l, u, this) : l(u);
        }, "fetchFn"), s = a(()=>{
            const l = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#a,
                state: this.state,
                fetchFn: o
            };
            return n(l), l;
        }, "createFetchContext")();
        (this.#e === "infinite" ? zS(this.options.pages) : this.options.behavior)?.onFetch(s, this), this.#r = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== s.fetchOptions?.meta) && this.#s({
            type: "fetch",
            meta: s.fetchOptions?.meta
        });
        const c = this.#o = Fp({
            initialPromise: t?.initialPromise,
            fn: s.fetchFn,
            onCancel: a((l)=>{
                l instanceof Lp && l.revert && this.setState({
                    ...this.#r,
                    fetchStatus: "idle"
                }), r.abort();
            }, "onCancel"),
            onFail: a((l, m)=>{
                this.#s({
                    type: "failed",
                    failureCount: l,
                    error: m
                });
            }, "onFail"),
            onPause: a(()=>{
                this.#s({
                    type: "pause"
                });
            }, "onPause"),
            onContinue: a(()=>{
                this.#s({
                    type: "continue"
                });
            }, "onContinue"),
            retry: s.options.retry,
            retryDelay: s.options.retryDelay,
            networkMode: s.options.networkMode,
            canRun: a(()=>!0, "canRun")
        });
        try {
            const l = await c.start();
            if (l === void 0) throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(l), this.#n.config.onSuccess?.(l, this), this.#n.config.onSettled?.(l, this.state.error, this), l;
        } catch (l) {
            if (l instanceof Lp) {
                if (l.silent) return this.#o.promise;
                if (l.revert) {
                    if (this.state.data === void 0) throw l;
                    return this.state.data;
                }
            }
            throw this.#s({
                type: "error",
                error: l
            }), this.#n.config.onError?.(l, this), this.#n.config.onSettled?.(this.state.data, l, this), l;
        } finally{
            this.#o === c && (this.#o = void 0), this.scheduleGc();
        }
    }
    #s(e) {
        const t = a((r)=>{
            switch(e.type){
                case "failed":
                    return {
                        ...r,
                        fetchFailureCount: e.failureCount,
                        fetchFailureReason: e.error
                    };
                case "pause":
                    return {
                        ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return {
                        ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return {
                        ...r,
                        ...Bp(r.data, this.options),
                        fetchMeta: e.meta ?? null
                    };
                case "success":
                    const n = {
                        ...r,
                        ...Up(e.data, e.dataUpdatedAt),
                        dataUpdateCount: r.dataUpdateCount + 1,
                        ...!e.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return this.#r = e.manual ? n : void 0, n;
                case "error":
                    const o = e.error;
                    return {
                        ...r,
                        error: o,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: o,
                        fetchStatus: "idle",
                        status: "error",
                        isInvalidated: !0
                    };
                case "invalidate":
                    return {
                        ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return {
                        ...r,
                        ...e.state
                    };
            }
        }, "reducer");
        this.state = t(this.state), jt.batch(()=>{
            this.observers.slice().forEach((r)=>{
                r.onQueryUpdate();
            }), this.#n.notify({
                query: this,
                type: "updated",
                action: e
            });
        });
    }
};
function Bp(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Dp(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    };
}
a(Bp, "fetchState");
function Up(e, t) {
    return {
        data: e,
        dataUpdatedAt: t ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    };
}
a(Up, "successState");
function jp(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = t !== void 0, n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? n ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    };
}
a(jp, "getDefaultState");
var BV = class extends bi {
    static{
        a(this, "QueryObserver");
    }
    #e;
    #t = void 0;
    #r = void 0;
    #n = void 0;
    #a;
    #o;
    #i;
    #c;
    #s;
    #p;
    #m;
    #u;
    #l;
    #f = new Set;
    constructor(e, t){
        super(), this.options = t, this.#e = e, this.#i = null, this.bindMethods(), this.setOptions(t);
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#t.addObserver(this), zp(this.#t, this.options) ? this.#d() : this.updateResult(), this.#b());
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy();
    }
    shouldFetchOnReconnect() {
        return Mc(this.#t, this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
        return Mc(this.#t, this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
        this.listeners = new Set, this.#y(), this.#w(), this.#t.removeObserver(this);
    }
    setOptions(e) {
        const t = this.options, r = this.#t;
        if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof ft(this.options.enabled, this.#t) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        this.#S(), this.#t.setOptions(this.options), t._defaulted && !Rc(this.options, t) && this.#e.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this
        });
        const n = this.hasListeners();
        n && Hp(this.#t, r, this.options, t) && this.#d(), this.updateResult(), n && (this.#t !== r || ft(this.options.enabled, this.#t) !== ft(t.enabled, this.#t) || ft(this.options.staleTime, this.#t) !== ft(t.staleTime, this.#t)) && this.#x();
        const o = this.#g();
        n && (this.#t !== r || ft(this.options.enabled, this.#t) !== ft(t.enabled, this.#t) || o !== this.#l) && this.#v(o);
    }
    getOptimisticResult(e) {
        const t = this.#e.getQueryCache().build(this.#e, e), r = this.createResult(t, e);
        return Rc(this.getCurrentResult(), r) || (this.#n = r, this.#o = this.options, this.#a = this.#t.state), r;
    }
    getCurrentResult() {
        return this.#n;
    }
    trackResult(e, t) {
        return new Proxy(e, {
            get: a((r, n)=>(this.trackProp(n), t?.(n), Reflect.get(r, n)), "get")
        });
    }
    trackProp(e) {
        this.#f.add(e);
    }
    getCurrentQuery() {
        return this.#t;
    }
    refetch({ ...e } = {}) {
        return this.fetch({
            ...e
        });
    }
    fetchOptimistic(e) {
        const t = this.#e.defaultQueryOptions(e), r = this.#e.getQueryCache().build(this.#e, t);
        let n = a(()=>{}, "unsubscribe"), o;
        const i = new Promise((s)=>{
            o = s, n = this.#e.getQueryCache().subscribe((c)=>{
                c.type === "updated" && c.query.queryHash === r.queryHash && r.state.data !== void 0 && (n(), s(this.createResult(r, t)));
            });
        });
        return Promise.race([
            r.fetch().then(()=>{
                const s = this.createResult(r, t);
                return o?.(s), s;
            }).finally(()=>{
                n();
            }),
            i
        ]);
    }
    fetch(e) {
        return this.#d({
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then(()=>(this.updateResult(), this.#n));
    }
    #d(e) {
        this.#S();
        let t = this.#t.fetch(this.options, e);
        return e?.throwOnError || (t = t.catch(Pt)), t;
    }
    #h(e) {
        return !_p() && ft(this.options.enabled, this.#t) !== !1 && Ep(e);
    }
    #x() {
        this.#y();
        const e = ft(this.options.staleTime, this.#t);
        if (this.#n.isStale || !this.#h(e)) return;
        const t = kp(this.#n.dataUpdatedAt, e) + 1;
        this.#m = co.setTimeout(()=>{
            this.#n.isStale || this.updateResult();
        }, t);
    }
    #g() {
        return ft(this.options.refetchInterval, this.#t) ?? !1;
    }
    #v(e) {
        this.#w(), this.#l = e, !(this.#l === 0 || !this.#h(this.#l)) && (this.#u = co.setInterval(()=>{
            (this.options.refetchIntervalInBackground || Mp.isFocused()) && this.#d();
        }, this.#l));
    }
    #b() {
        this.#x(), this.#v(this.#g());
    }
    #y() {
        this.#m !== void 0 && (co.clearTimeout(this.#m), this.#m = void 0);
    }
    #w() {
        this.#u !== void 0 && (co.clearInterval(this.#u), this.#u = void 0);
    }
    createResult(e, t) {
        const r = this.#t, n = this.options, o = this.#n, i = this.#a, s = this.#o, c = e !== r ? e.state : this.#r, { state: l } = e;
        let m = {
            ...l
        }, u = !1, d;
        if (t._optimisticResults) {
            const T = this.hasListeners(), R = !T && zp(e, t), E = T && Hp(e, r, t, n);
            (R || E) && (m = {
                ...m,
                ...Bp(l.data, e.options)
            }), t._optimisticResults === "isRestoring" && (m.fetchStatus = "idle");
        }
        let { error: p, errorUpdatedAt: h, status: f } = m;
        d = m.data;
        let v = !1;
        if (t.placeholderData !== void 0 && d === void 0 && f === "pending") {
            let T;
            o?.isPlaceholderData && t.placeholderData === s?.placeholderData ? (T = o.data, v = !0) : T = typeof t.placeholderData == "function" ? t.placeholderData(this.#p?.state.data, this.#p) : t.placeholderData, T !== void 0 && (f = "success", d = Pc(o?.data, T, t), u = !0);
        }
        if (t.select && d !== void 0 && !v) if (o && d === i?.data && t.select === this.#c) d = this.#s;
        else try {
            this.#c = t.select, d = t.select(d), d = Pc(o?.data, d, t), this.#s = d, this.#i = null;
        } catch (T) {
            this.#i = T;
        }
        else d === void 0 && (this.#i = null);
        this.#i && (p = this.#i, d = this.#s, h = Date.now(), f = "error", u = !1);
        const x = m.fetchStatus === "fetching", g = f === "pending", y = f === "error", w = g && x, b = d !== void 0;
        return {
            status: f,
            fetchStatus: m.fetchStatus,
            isPending: g,
            isSuccess: f === "success",
            isError: y,
            isInitialLoading: w,
            isLoading: w,
            data: d,
            dataUpdatedAt: m.dataUpdatedAt,
            error: p,
            errorUpdatedAt: h,
            failureCount: m.fetchFailureCount,
            failureReason: m.fetchFailureReason,
            errorUpdateCount: m.errorUpdateCount,
            isFetched: e.isFetched(),
            isFetchedAfterMount: m.dataUpdateCount > c.dataUpdateCount || m.errorUpdateCount > c.errorUpdateCount,
            isFetching: x,
            isRefetching: x && !g,
            isLoadingError: y && !b,
            isPaused: m.fetchStatus === "paused",
            isPlaceholderData: u,
            isRefetchError: y && b,
            isStale: Oc(e, t),
            refetch: this.refetch,
            isEnabled: ft(t.enabled, e) !== !1
        };
    }
    updateResult() {
        const e = this.#n, t = this.createResult(this.#t, this.options);
        if (this.#a = this.#t.state, this.#o = this.options, this.#a.data !== void 0 && (this.#p = this.#t), Rc(t, e)) return;
        this.#n = t;
        const n = a(()=>{
            if (!e) return !0;
            const { notifyOnChangeProps: o } = this.options, i = typeof o == "function" ? o() : o;
            if (i === "all" || !i && !this.#f.size) return !0;
            const s = new Set(i ?? this.#f);
            return this.options.throwOnError && s.add("error"), Object.keys(this.#n).some((c)=>{
                const l = c;
                return this.#n[l] !== e[l] && s.has(l);
            });
        }, "shouldNotifyListeners")();
        jt.batch(()=>{
            n && this.listeners.forEach((o)=>{
                o(this.#n);
            }), this.#e.getQueryCache().notify({
                query: this.#t,
                type: "observerResultsUpdated"
            });
        });
    }
    #S() {
        const e = this.#e.getQueryCache().build(this.#e, this.options);
        if (e === this.#t) return;
        const t = this.#t;
        this.#t = e, this.#r = e.state, this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && this.#b();
    }
};
function GS(e, t) {
    return ft(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && ft(t.retryOnMount, e) === !1);
}
a(GS, "shouldLoadOnMount");
function zp(e, t) {
    return GS(e, t) || e.state.data !== void 0 && Mc(e, t, t.refetchOnMount);
}
a(zp, "shouldFetchOnMount");
function Mc(e, t, r) {
    if (ft(t.enabled, e) !== !1 && ft(t.staleTime, e) !== "static") {
        const n = ft(r, e);
        return n === "always" || n !== !1 && Oc(e, t);
    }
    return !1;
}
a(Mc, "shouldFetchOn");
function Hp(e, t, r, n) {
    return (e !== t || ft(n.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && Oc(e, r);
}
a(Hp, "shouldFetchOptionally");
function Oc(e, t) {
    return ft(t.enabled, e) !== !1 && e.isStaleByTime(ft(t.staleTime, e));
}
a(Oc, "isStale");
var UV = class extends jS {
    static{
        a(this, "Mutation");
    }
    #e;
    #t;
    #r;
    #n;
    constructor(e){
        super(), this.#e = e.client, this.mutationId = e.mutationId, this.#r = e.mutationCache, this.#t = [], this.state = e.state || $S(), this.setOptions(e.options), this.scheduleGc();
    }
    setOptions(e) {
        this.options = e, this.updateGcTime(this.options.gcTime);
    }
    get meta() {
        return this.options.meta;
    }
    addObserver(e) {
        this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#r.notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }));
    }
    removeObserver(e) {
        this.#t = this.#t.filter((t)=>t !== e), this.scheduleGc(), this.#r.notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        });
    }
    optionalRemove() {
        this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#r.remove(this));
    }
    continue() {
        return this.#n?.continue() ?? (this.state.status === "pending" ? this.execute(this.state.variables) : Promise.resolve());
    }
    async execute(e) {
        const t = a(()=>{
            this.#a({
                type: "continue"
            });
        }, "onContinue"), r = {
            client: this.#e,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        }, n = this.#n = Fp({
            fn: a(()=>this.options.mutationFn ? this.options.mutationFn(e, r) : Promise.reject(new Error("No mutationFn found")), "fn"),
            onFail: a((s, c)=>{
                this.#a({
                    type: "failed",
                    failureCount: s,
                    error: c
                });
            }, "onFail"),
            onPause: a(()=>{
                this.#a({
                    type: "pause"
                });
            }, "onPause"),
            onContinue: t,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: a(()=>this.#r.canRun(this), "canRun")
        }), o = this.state.status === "pending", i = !n.canStart();
        try {
            if (o) t();
            else {
                this.#a({
                    type: "pending",
                    variables: e,
                    isPaused: i
                }), this.#r.config.onMutate && await this.#r.config.onMutate(e, this, r);
                const c = await this.options.onMutate?.(e, r);
                c !== this.state.context && this.#a({
                    type: "pending",
                    context: c,
                    variables: e,
                    isPaused: i
                });
            }
            const s = await n.start();
            return await this.#r.config.onSuccess?.(s, e, this.state.context, this, r), await this.options.onSuccess?.(s, e, this.state.context, r), await this.#r.config.onSettled?.(s, null, this.state.variables, this.state.context, this, r), await this.options.onSettled?.(s, null, e, this.state.context, r), this.#a({
                type: "success",
                data: s
            }), s;
        } catch (s) {
            try {
                await this.#r.config.onError?.(s, e, this.state.context, this, r);
            } catch (c) {
                Promise.reject(c);
            }
            try {
                await this.options.onError?.(s, e, this.state.context, r);
            } catch (c) {
                Promise.reject(c);
            }
            try {
                await this.#r.config.onSettled?.(void 0, s, this.state.variables, this.state.context, this, r);
            } catch (c) {
                Promise.reject(c);
            }
            try {
                await this.options.onSettled?.(void 0, s, e, this.state.context, r);
            } catch (c) {
                Promise.reject(c);
            }
            throw this.#a({
                type: "error",
                error: s
            }), s;
        } finally{
            this.#n === n && (this.#n = void 0), this.#r.runNext(this);
        }
    }
    #a(e) {
        const t = a((r)=>{
            switch(e.type){
                case "failed":
                    return {
                        ...r,
                        failureCount: e.failureCount,
                        failureReason: e.error
                    };
                case "pause":
                    return {
                        ...r,
                        isPaused: !0
                    };
                case "continue":
                    return {
                        ...r,
                        isPaused: !1
                    };
                case "pending":
                    return {
                        ...r,
                        context: e.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: e.isPaused,
                        status: "pending",
                        variables: e.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...r,
                        data: e.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return {
                        ...r,
                        data: void 0,
                        error: e.error,
                        failureCount: r.failureCount + 1,
                        failureReason: e.error,
                        isPaused: !1,
                        status: "error"
                    };
            }
        }, "reducer");
        this.state = t(this.state), jt.batch(()=>{
            this.#t.forEach((r)=>{
                r.onMutationUpdate(e);
            }), this.#r.notify({
                mutation: this,
                type: "updated",
                action: e
            });
        });
    }
};
function $S() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
}
a($S, "getDefaultState");
var jV = class extends bi {
    static{
        a(this, "MutationCache");
    }
    #e;
    #t;
    #r;
    constructor(e = {}){
        super(), this.config = e, this.#e = new Set, this.#t = new Map, this.#r = 0;
    }
    build(e, t, r) {
        const n = new UV({
            client: e,
            mutationCache: this,
            mutationId: ++this.#r,
            options: e.defaultMutationOptions(t),
            state: r
        });
        return this.add(n), n;
    }
    add(e) {
        this.#e.add(e);
        const t = yi(e);
        if (typeof t == "string") {
            const r = this.#t.get(t);
            r ? r.push(e) : this.#t.set(t, [
                e
            ]);
        }
        this.notify({
            type: "added",
            mutation: e
        });
    }
    remove(e) {
        if (this.#e.delete(e)) {
            const t = yi(e);
            if (typeof t == "string") {
                const r = this.#t.get(t);
                if (r) if (r.length > 1) {
                    const n = r.indexOf(e);
                    n !== -1 && r.splice(n, 1);
                } else r[0] === e && this.#t.delete(t);
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        });
    }
    canRun(e) {
        const t = yi(e);
        if (typeof t == "string") {
            const r = this.#t.get(t)?.find((n)=>n.state.status === "pending");
            return !r || r === e;
        } else return !0;
    }
    runNext(e) {
        const t = yi(e);
        return typeof t == "string" ? this.#t.get(t)?.find((r)=>r !== e && r.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve();
    }
    clear() {
        jt.batch(()=>{
            this.#e.forEach((e)=>{
                this.notify({
                    type: "removed",
                    mutation: e
                });
            }), this.#e.clear(), this.#t.clear();
        });
    }
    getAll() {
        return Array.from(this.#e);
    }
    find(e) {
        const t = {
            exact: !0,
            ...e
        };
        return this.getAll().find((r)=>Cp(t, r));
    }
    findAll(e = {}) {
        return this.getAll().filter((t)=>Cp(e, t));
    }
    notify(e) {
        jt.batch(()=>{
            this.listeners.forEach((t)=>{
                t(e);
            });
        });
    }
    resumePausedMutations() {
        const e = this.getAll().filter((t)=>t.state.isPaused);
        return jt.batch(()=>Promise.all(e.map((t)=>t.continue().catch(Pt))));
    }
};
function yi(e) {
    return e.options.scope?.id;
}
a(yi, "scopeFor");
var Gp = class extends bi {
    static{
        a(this, "QueryCache");
    }
    #e;
    constructor(e = {}){
        super(), this.config = e, this.#e = new Map;
    }
    build(e, t, r) {
        const n = t.queryKey, o = t.queryHash ?? Ac(n, t);
        let i = this.get(o);
        return i || (i = new VV({
            client: e,
            queryKey: n,
            queryHash: o,
            options: e.defaultQueryOptions(t),
            state: r,
            defaultOptions: e.getQueryDefaults(n)
        }), this.add(i)), i;
    }
    add(e) {
        this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
            type: "added",
            query: e
        }));
    }
    remove(e) {
        this.#e.get(e.queryHash) === e && (e.destroy(), this.#e.delete(e.queryHash), this.notify({
            type: "removed",
            query: e
        }));
    }
    clear() {
        jt.batch(()=>{
            this.getAll().forEach((e)=>{
                this.remove(e);
            });
        });
    }
    get(e) {
        return this.#e.get(e);
    }
    getAll() {
        return [
            ...this.#e.values()
        ];
    }
    find(e) {
        const t = {
            exact: !0,
            ...e
        };
        return this.getAll().find((r)=>Tp(t, r));
    }
    findAll(e = {}) {
        const t = this.getAll();
        return Object.keys(e).length > 0 ? t.filter((r)=>Tp(e, r)) : t;
    }
    notify(e) {
        jt.batch(()=>{
            this.listeners.forEach((t)=>{
                t(e);
            });
        });
    }
    onFocus() {
        jt.batch(()=>{
            this.getAll().forEach((e)=>{
                e.onFocus();
            });
        });
    }
    onOnline() {
        jt.batch(()=>{
            this.getAll().forEach((e)=>{
                e.onOnline();
            });
        });
    }
}, KS = class {
    static{
        a(this, "QueryClient");
    }
    #e;
    #t;
    #r;
    #n;
    #a;
    #o;
    #i;
    #c;
    constructor(e = {}){
        this.#e = e.queryCache || new Gp, this.#t = e.mutationCache || new jV, this.#r = e.defaultOptions || {}, this.#n = new Map, this.#a = new Map, this.#o = 0;
    }
    mount() {
        this.#o++, this.#o === 1 && (this.#i = Mp.subscribe(async (e)=>{
            e && (await this.resumePausedMutations(), this.#e.onFocus());
        }), this.#c = _c.subscribe(async (e)=>{
            e && (await this.resumePausedMutations(), this.#e.onOnline());
        }));
    }
    unmount() {
        this.#o--, this.#o === 0 && (this.#i?.(), this.#i = void 0, this.#c?.(), this.#c = void 0);
    }
    isFetching(e) {
        return this.#e.findAll({
            ...e,
            fetchStatus: "fetching"
        }).length;
    }
    isMutating(e) {
        return this.#t.findAll({
            ...e,
            status: "pending"
        }).length;
    }
    getQueryData(e) {
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e), r = this.#e.build(this, t), n = r.state.data;
        return n === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime(ft(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(n));
    }
    getQueriesData(e) {
        return this.#e.findAll(e).map(({ queryKey: t, state: r })=>[
                t,
                r.data
            ]);
    }
    setQueryData(e, t, r) {
        const n = this.defaultQueryOptions({
            queryKey: e
        }), o = this.#e.get(n.queryHash)?.state.data, i = IS(t, o);
        if (i !== void 0) return this.#e.build(this, n).setData(i, {
            ...r,
            manual: !0
        });
    }
    setQueriesData(e, t, r) {
        return jt.batch(()=>this.#e.findAll(e).map(({ queryKey: n })=>[
                    n,
                    this.setQueryData(n, t, r)
                ]));
    }
    getQueryState(e) {
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
        const t = this.#e;
        jt.batch(()=>{
            t.findAll(e).forEach((r)=>{
                t.remove(r);
            });
        });
    }
    resetQueries(e, t) {
        const r = this.#e;
        return jt.batch(()=>{
            const n = r.findAll(e), o = new Set(n);
            return n.forEach((i)=>{
                i.reset();
            }), this.refetchQueries({
                type: "active",
                predicate: a((i)=>o.has(i), "predicate")
            }, t);
        });
    }
    cancelQueries(e, t = {}) {
        const r = {
            revert: !0,
            ...t
        }, n = jt.batch(()=>this.#e.findAll(e).map((o)=>o.cancel(r)));
        return Promise.all(n).then(Pt).catch(Pt);
    }
    invalidateQueries(e, t = {}) {
        return jt.batch(()=>(this.#e.findAll(e).forEach((r)=>{
                r.invalidate();
            }), e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
                ...e,
                type: e?.refetchType ?? e?.type ?? "active"
            }, t)));
    }
    refetchQueries(e, t = {}) {
        const r = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }, n = jt.batch(()=>this.#e.findAll(e).filter((o)=>!o.isDisabled() && !o.isStatic()).map((o)=>{
                let i = o.fetch(void 0, r);
                return r.throwOnError || (i = i.catch(Pt)), o.state.fetchStatus === "paused" ? Promise.resolve() : i;
            }));
        return Promise.all(n).then(Pt);
    }
    async query(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = this.#e.build(this, t), n = r.isStaleByTime(ft(t.staleTime, r)) ? await r.fetch(t) : r.state.data, o = t.select;
        return o ? o(n) : n;
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = this.#e.build(this, t);
        return r.isStaleByTime(ft(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data);
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Pt).catch(Pt);
    }
    infiniteQuery(e) {
        return e._type = "infinite", this.query(e);
    }
    fetchInfiniteQuery(e) {
        return e._type = "infinite", this.fetchQuery(e);
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Pt).catch(Pt);
    }
    ensureInfiniteQueryData(e) {
        return e._type = "infinite", this.ensureQueryData(e);
    }
    resumePausedMutations() {
        return _c.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
        return this.#e;
    }
    getMutationCache() {
        return this.#t;
    }
    getDefaultOptions() {
        return this.#r;
    }
    setDefaultOptions(e) {
        this.#r = e;
    }
    setQueryDefaults(e, t) {
        this.#n.set(lo(e), {
            queryKey: e,
            defaultOptions: t
        });
    }
    getQueryDefaults(e) {
        const t = [
            ...this.#n.values()
        ], r = {};
        return t.forEach((n)=>{
            mo(e, n.queryKey) && Object.assign(r, n.defaultOptions);
        }), r;
    }
    setMutationDefaults(e, t) {
        this.#a.set(lo(e), {
            mutationKey: e,
            defaultOptions: t
        });
    }
    getMutationDefaults(e) {
        const t = [
            ...this.#a.values()
        ], r = {};
        return t.forEach((n)=>{
            mo(e, n.mutationKey) && Object.assign(r, n.defaultOptions);
        }), r;
    }
    defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
            ...this.#r.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Ac(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Np && (t.enabled = !1), t;
    }
    defaultMutationOptions(e) {
        return e?._defaulted ? e : {
            ...this.#r.mutations,
            ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        };
    }
    clear() {
        this.#e.clear(), this.#t.clear();
    }
};
function $p(e, t) {
    const r = new BV(e, {
        refetchOnWindowFocus: !0,
        ...t
    });
    function n() {
        const s = r.getCurrentResult();
        return {
            status: s.data === void 0 ? s.status === "error" ? "error" : "loading" : "success",
            data: s.data,
            error: s.error ?? void 0,
            isRevalidating: s.isFetching
        };
    }
    a(n, "toSnapshot");
    let o = r.getCurrentResult(), i = n();
    return {
        subscribe (s) {
            return r.subscribe(()=>s());
        },
        getSnapshot () {
            const s = r.getCurrentResult();
            return s !== o && (o = s, i = n()), i;
        },
        refresh (s) {
            const c = r.getCurrentQuery();
            return s?.restart === !0 && c.state.data === void 0 && c.cancel({
                silent: !0
            }), r.refetch().then(a(function() {}, "discardResult"));
        },
        dispose () {
            r.destroy();
        }
    };
}
a($p, "createReadObserver");
function Fn() {
    return [
        "prepaid-wallet"
    ];
}
a(Fn, "getPrepaidWalletQueryKey");
a(wi, "autoTopUpRulesEqual");
function WS({ edge: e, walletTtlMs: t = 15e3, mintIdempotencyKey: r = a(()=>crypto.randomUUID(), "mintIdempotencyKey"), onBackgroundError: n }) {
    const o = new KS({
        queryCache: new Gp({
            onError (v, x) {
                x.state.data !== void 0 && n?.(Error.isError(v) ? v : new Error(String(v), {
                    cause: v
                }));
            }
        }),
        defaultOptions: {
            queries: {
                staleTime: t,
                gcTime: 2 * t,
                retry: !1
            }
        }
    });
    o.mount();
    const i = {
        queryKey: Fn(),
        queryFn: a(()=>e.getWallet(), "queryFn")
    };
    function s() {
        return o.invalidateQueries({
            queryKey: Fn()
        });
    }
    a(s, "invalidateWallet");
    function c() {
        return o.refetchQueries({
            queryKey: Fn()
        });
    }
    a(c, "refetchWallet");
    const l = new Map, m = new Map;
    function u(v) {
        return `${v.currencyCode}:${v.unitMicros}`;
    }
    a(u, "amountKey");
    function d(v, x) {
        const g = u(x), y = v.get(g);
        if (y !== void 0) return y;
        const w = r();
        return v.set(g, w), w;
    }
    a(d, "attemptKey");
    function p(v) {
        o.setQueryData(Fn(), (x)=>x === void 0 ? x : {
                ...x,
                autoTopUp: v
            });
    }
    a(p, "writeRuleIntoCache");
    async function h(v) {
        const x = d(l, v), g = await e.topUp({
            amount: v,
            idempotencyKey: x
        });
        return l.delete(u(v)), g.kind !== "failed" && await c(), g;
    }
    a(h, "topUp");
    async function f(v) {
        const x = await e.setAutoTopUpRule(v);
        return p(x), await c(), x;
    }
    return a(f, "setAutoTopUpRule"), {
        capabilities: e.capabilities,
        fetchWallet () {
            return o.fetchQuery(i);
        },
        peekWallet () {
            return o.getQueryData(Fn());
        },
        prefetchWallet () {
            return o.prefetchQuery(i);
        },
        observeWallet () {
            return $p(o, i);
        },
        invalidateWallet: s,
        topUp: h,
        async startInlineTopUp (v, x = {}) {
            if (e.startInlineTopUp === void 0) throw new Error("This prepaid edge cannot collect a payment method inline");
            const g = d(m, v), y = await e.startInlineTopUp({
                amount: v,
                idempotencyKey: g,
                ...x
            });
            return m.delete(u(v)), y;
        },
        setAutoTopUpRule: f,
        async setMonthlySpendLimit (v) {
            if (e.setMonthlySpendLimit === void 0) throw new Error("This prepaid edge has no monthly spend limit");
            const x = await e.setMonthlySpendLimit(v);
            return o.setQueryData(Fn(), (g)=>g === void 0 ? g : {
                    ...g,
                    monthlySpendLimit: x
                }), await c(), x;
        },
        async syncPaymentInfo () {
            e.syncPaymentInfo !== void 0 && (await e.syncPaymentInfo(), await c());
        },
        async submit ({ rule: v, amount: x }) {
            let g;
            if (v !== void 0 && (g = await f(v)), x === null) return g === void 0 ? {
                kind: "nothing"
            } : {
                kind: "rule-saved",
                rule: g
            };
            const y = await h(x);
            return {
                kind: "top-up",
                rule: g === void 0 ? o.getQueryData(Fn())?.autoTopUp ?? null : g,
                outcome: y
            };
        },
        dispose () {
            o.clear(), o.unmount();
        }
    };
}
a(WS, "createPrepaidClient"), Lt();
var zV = `/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties;
.x-commerce *, .x-commerce, .x-commerce ::after, .x-commerce::after, .x-commerce ::before, .x-commerce::before, .x-commerce ::backdrop, .x-commerce::backdrop, .x-commerce ::file-selector-button, .x-commerce::file-selector-button {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
}
.x-commerce hr, hr.x-commerce {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}
.x-commerce abbr:where([title]), abbr.x-commerce:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
.x-commerce h1, h1.x-commerce, .x-commerce h2, h2.x-commerce, .x-commerce h3, h3.x-commerce, .x-commerce h4, h4.x-commerce, .x-commerce h5, h5.x-commerce, .x-commerce h6, h6.x-commerce {
  font-size: inherit;
  font-weight: inherit;
}
.x-commerce a, a.x-commerce {
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}
.x-commerce b, b.x-commerce, .x-commerce strong, strong.x-commerce {
  font-weight: bolder;
}
.x-commerce code, code.x-commerce, .x-commerce kbd, kbd.x-commerce, .x-commerce samp, samp.x-commerce, .x-commerce pre, pre.x-commerce {
  font-family: var(--default-mono-font-family, var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace));
  font-feature-settings: var(--default-mono-font-feature-settings, normal);
  font-variation-settings: var(--default-mono-font-variation-settings, normal);
  font-size: 1em;
}
.x-commerce small, small.x-commerce {
  font-size: 80%;
}
.x-commerce sub, sub.x-commerce, .x-commerce sup, sup.x-commerce {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
.x-commerce sub, sub.x-commerce {
  bottom: -0.25em;
}
.x-commerce sup, sup.x-commerce {
  top: -0.5em;
}
.x-commerce table, table.x-commerce {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}
.x-commerce :-moz-focusring:where(:not(iframe)), .x-commerce:-moz-focusring:where(:not(iframe)) {
  outline: auto;
}
.x-commerce progress, progress.x-commerce {
  vertical-align: baseline;
}
.x-commerce summary, summary.x-commerce {
  display: list-item;
}
.x-commerce ol, ol.x-commerce, .x-commerce ul, ul.x-commerce, .x-commerce menu, menu.x-commerce {
  list-style: none;
}
.x-commerce img, img.x-commerce, .x-commerce svg, svg.x-commerce, .x-commerce video, video.x-commerce, .x-commerce canvas, canvas.x-commerce, .x-commerce audio, audio.x-commerce, .x-commerce iframe, iframe.x-commerce, .x-commerce embed, embed.x-commerce, .x-commerce object, object.x-commerce {
  display: block;
  vertical-align: middle;
}
.x-commerce img, img.x-commerce, .x-commerce video, video.x-commerce {
  max-width: 100%;
  height: auto;
}
.x-commerce button, button.x-commerce, .x-commerce input, input.x-commerce, .x-commerce select, select.x-commerce, .x-commerce optgroup, optgroup.x-commerce, .x-commerce textarea, textarea.x-commerce, .x-commerce ::file-selector-button, .x-commerce::file-selector-button {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}
.x-commerce :where(select:is([multiple], [size])) optgroup, .x-commerce:where(select:is([multiple], [size])) optgroup {
  font-weight: bolder;
}
.x-commerce :where(select:is([multiple], [size])) optgroup option, .x-commerce:where(select:is([multiple], [size])) optgroup option {
  padding-inline-start: 20px;
}
.x-commerce ::file-selector-button, .x-commerce::file-selector-button {
  margin-inline-end: 4px;
}
.x-commerce ::placeholder, .x-commerce::placeholder {
  opacity: 1;
}
@supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
  .x-commerce ::placeholder, .x-commerce::placeholder {
    color: currentcolor;
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, currentcolor 50%, transparent);
    }
  }
}
.x-commerce textarea, textarea.x-commerce {
  resize: vertical;
}
.x-commerce ::-webkit-search-decoration, .x-commerce::-webkit-search-decoration {
  -webkit-appearance: none;
}
.x-commerce ::-webkit-date-and-time-value, .x-commerce::-webkit-date-and-time-value {
  min-height: 1lh;
  text-align: inherit;
}
.x-commerce ::-webkit-datetime-edit, .x-commerce::-webkit-datetime-edit {
  display: inline-flex;
}
.x-commerce ::-webkit-datetime-edit-fields-wrapper, .x-commerce::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}
.x-commerce ::-webkit-datetime-edit, .x-commerce::-webkit-datetime-edit, .x-commerce ::-webkit-datetime-edit-year-field, .x-commerce::-webkit-datetime-edit-year-field, .x-commerce ::-webkit-datetime-edit-month-field, .x-commerce::-webkit-datetime-edit-month-field, .x-commerce ::-webkit-datetime-edit-day-field, .x-commerce::-webkit-datetime-edit-day-field, .x-commerce ::-webkit-datetime-edit-hour-field, .x-commerce::-webkit-datetime-edit-hour-field, .x-commerce ::-webkit-datetime-edit-minute-field, .x-commerce::-webkit-datetime-edit-minute-field, .x-commerce ::-webkit-datetime-edit-second-field, .x-commerce::-webkit-datetime-edit-second-field, .x-commerce ::-webkit-datetime-edit-millisecond-field, .x-commerce::-webkit-datetime-edit-millisecond-field, .x-commerce ::-webkit-datetime-edit-meridiem-field, .x-commerce::-webkit-datetime-edit-meridiem-field {
  padding-block: 0;
}
.x-commerce ::-webkit-calendar-picker-indicator, .x-commerce::-webkit-calendar-picker-indicator {
  line-height: 1;
}
.x-commerce :-moz-ui-invalid, .x-commerce:-moz-ui-invalid {
  box-shadow: none;
}
.x-commerce button, button.x-commerce, .x-commerce input:where([type='button'], [type='reset'], [type='submit']), input.x-commerce:where([type='button'], [type='reset'], [type='submit']), .x-commerce ::file-selector-button, .x-commerce::file-selector-button {
  appearance: button;
}
.x-commerce ::-webkit-inner-spin-button, .x-commerce::-webkit-inner-spin-button, .x-commerce ::-webkit-outer-spin-button, .x-commerce::-webkit-outer-spin-button {
  height: auto;
}
.x-commerce [hidden]:where(:not([hidden='until-found'])), .x-commerce[hidden]:where(:not([hidden='until-found'])) {
  display: none !important;
}
.x-commerce .\\@container\\/choice, .x-commerce.\\@container\\/choice {
  container-type: inline-size;
  container-name: choice;
}
.x-commerce .\\@container\\/grid, .x-commerce.\\@container\\/grid {
  container-type: inline-size;
  container-name: grid;
}
.x-commerce .\\@container\\/plan-title, .x-commerce.\\@container\\/plan-title {
  container-type: inline-size;
  container-name: plan-title;
}
.x-commerce .\\@container\\/review, .x-commerce.\\@container\\/review {
  container-type: inline-size;
  container-name: review;
}
.x-commerce .\\@container\\/single, .x-commerce.\\@container\\/single {
  container-type: inline-size;
  container-name: single;
}
.x-commerce .\\@container, .x-commerce.\\@container {
  container-type: inline-size;
}
.x-commerce .pointer-events-auto, .x-commerce.pointer-events-auto {
  pointer-events: auto;
}
.x-commerce .pointer-events-none, .x-commerce.pointer-events-none {
  pointer-events: none;
}
.x-commerce .collapse, .x-commerce.collapse {
  visibility: collapse;
}
.x-commerce .invisible, .x-commerce.invisible {
  visibility: hidden;
}
.x-commerce .visible, .x-commerce.visible {
  visibility: visible;
}
.x-commerce .sr-only, .x-commerce.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border-width: 0;
}
.x-commerce .x-button, .x-commerce.x-button {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: calc(var(--spacing, 0.25rem) * 2);
  border-radius: 9999px;
  --tw-font-weight: var(--font-weight-medium, 500);
  font-weight: var(--font-weight-medium, 500);
  -webkit-user-select: none;
  user-select: none;
  .x-commerce &:focus-visible, .x-commerce&:focus-visible {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .x-commerce &:focus-visible, .x-commerce&:focus-visible {
    outline-style: var(--tw-outline-style);
    outline-width: 2px;
  }
  .x-commerce &:focus-visible, .x-commerce&:focus-visible {
    outline-offset: 2px;
  }
  .x-commerce &:disabled, .x-commerce&:disabled {
    cursor: not-allowed;
  }
  .x-commerce &:disabled, .x-commerce&:disabled {
    opacity: var(--x-btn-disabled-opacity,0.7);
  }
  .x-commerce &[aria-disabled="true"], .x-commerce&[aria-disabled="true"] {
    cursor: not-allowed;
  }
  .x-commerce &[aria-disabled="true"], .x-commerce&[aria-disabled="true"] {
    opacity: var(--x-btn-disabled-opacity,0.7);
  }
}
.x-commerce .absolute, .x-commerce.absolute {
  position: absolute;
}
.x-commerce .fixed, .x-commerce.fixed {
  position: fixed;
}
.x-commerce .relative, .x-commerce.relative {
  position: relative;
}
.x-commerce .static, .x-commerce.static {
  position: static;
}
.x-commerce .sticky, .x-commerce.sticky {
  position: sticky;
}
.x-commerce .inset-0, .x-commerce.inset-0 {
  inset: 0px;
}
.x-commerce .inset-x-0, .x-commerce.inset-x-0 {
  inset-inline: 0px;
}
.x-commerce .inset-x-\\[calc\\(var\\(--x-plan-tabs-page-x\\,0px\\)\\*-1\\)\\],.x-commerce.inset-x-\\[calc\\(var\\(--x-plan-tabs-page-x\\,0px\\)\\*-1\\)\\] {
  inset-inline: calc(var(--x-plan-tabs-page-x,0px) * -1);
}
.x-commerce .inset-y-0, .x-commerce.inset-y-0 {
  inset-block: 0px;
}
.x-commerce .inset-y-0\\.5, .x-commerce.inset-y-0\\.5 {
  inset-block: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .start-0, .x-commerce.start-0 {
  inset-inline-start: calc(var(--spacing, 0.25rem) * 0);
}
.x-commerce .start-0\\.5, .x-commerce.start-0\\.5 {
  inset-inline-start: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .start-1, .x-commerce.start-1 {
  inset-inline-start: calc(var(--spacing, 0.25rem) * 1);
}
.x-commerce .start-2, .x-commerce.start-2 {
  inset-inline-start: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .start-3, .x-commerce.start-3 {
  inset-inline-start: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .start-\\[calc\\(var\\(--x-safe-start\\)\\+0\\.75rem\\)\\], .x-commerce.start-\\[calc\\(var\\(--x-safe-start\\)\\+0\\.75rem\\)\\] {
  inset-inline-start: calc(var(--x-safe-start) + 0.75rem);
}
.x-commerce .start-\\[calc\\(var\\(--x-safe-start\\)\\+1rem\\)\\], .x-commerce.start-\\[calc\\(var\\(--x-safe-start\\)\\+1rem\\)\\] {
  inset-inline-start: calc(var(--x-safe-start) + 1rem);
}
.x-commerce .end-2, .x-commerce.end-2 {
  inset-inline-end: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .end-3, .x-commerce.end-3 {
  inset-inline-end: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .end-4, .x-commerce.end-4 {
  inset-inline-end: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .end-\\[4\\%\\], .x-commerce.end-\\[4\\%\\] {
  inset-inline-end: 4%;
}
.x-commerce .top-0, .x-commerce.top-0 {
  top: 0px;
}
.x-commerce .top-1, .x-commerce.top-1 {
  top: var(--spacing, 0.25rem);
}
.x-commerce .top-1\\/2, .x-commerce.top-1\\/2 {
  top: calc(1 / 2 * 100%);
}
.x-commerce .top-2, .x-commerce.top-2 {
  top: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .top-3, .x-commerce.top-3 {
  top: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .top-4, .x-commerce.top-4 {
  top: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .top-6, .x-commerce.top-6 {
  top: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .top-10, .x-commerce.top-10 {
  top: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .top-14, .x-commerce.top-14 {
  top: calc(var(--spacing, 0.25rem) * 14);
}
.x-commerce .top-\\[-7\\.14\\%\\], .x-commerce.top-\\[-7\\.14\\%\\] {
  top: -7.14%;
}
.x-commerce .top-\\[-32px\\], .x-commerce.top-\\[-32px\\] {
  top: -32px;
}
.x-commerce .top-\\[7\\.64px\\], .x-commerce.top-\\[7\\.64px\\] {
  top: 7.64px;
}
.x-commerce .top-\\[9\\.43\\%\\], .x-commerce.top-\\[9\\.43\\%\\] {
  top: 9.43%;
}
.x-commerce .top-\\[10px\\], .x-commerce.top-\\[10px\\] {
  top: 10px;
}
.x-commerce .top-\\[13\\%\\], .x-commerce.top-\\[13\\%\\] {
  top: 13%;
}
.x-commerce .top-\\[13\\.93\\%\\], .x-commerce.top-\\[13\\.93\\%\\] {
  top: 13.93%;
}
.x-commerce .top-\\[14\\.44\\%\\], .x-commerce.top-\\[14\\.44\\%\\] {
  top: 14.44%;
}
.x-commerce .top-\\[24\\.64\\%\\], .x-commerce.top-\\[24\\.64\\%\\] {
  top: 24.64%;
}
.x-commerce .top-\\[30\\.36\\%\\], .x-commerce.top-\\[30\\.36\\%\\] {
  top: 30.36%;
}
.x-commerce .top-\\[37\\.23\\%\\], .x-commerce.top-\\[37\\.23\\%\\] {
  top: 37.23%;
}
.x-commerce .top-\\[50\\.54\\%\\], .x-commerce.top-\\[50\\.54\\%\\] {
  top: 50.54%;
}
.x-commerce .top-\\[59\\.11\\%\\], .x-commerce.top-\\[59\\.11\\%\\] {
  top: 59.11%;
}
.x-commerce .top-\\[63\\.68\\%\\], .x-commerce.top-\\[63\\.68\\%\\] {
  top: 63.68%;
}
.x-commerce .top-\\[78\\.23\\%\\], .x-commerce.top-\\[78\\.23\\%\\] {
  top: 78.23%;
}
.x-commerce .top-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+0\\.75rem\\)\\],.x-commerce.top-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+0\\.75rem\\)\\] {
  top: calc(env(safe-area-inset-top,0px) + 0.75rem);
}
.x-commerce .top-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+1rem\\)\\],.x-commerce.top-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+1rem\\)\\] {
  top: calc(env(safe-area-inset-top,0px) + 1rem);
}
.x-commerce .right-0, .x-commerce.right-0 {
  right: 0px;
}
.x-commerce .right-2, .x-commerce.right-2 {
  right: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .right-3, .x-commerce.right-3 {
  right: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .bottom-0, .x-commerce.bottom-0 {
  bottom: 0px;
}
.x-commerce .bottom-1, .x-commerce.bottom-1 {
  bottom: var(--spacing, 0.25rem);
}
.x-commerce .bottom-2, .x-commerce.bottom-2 {
  bottom: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .bottom-\\[calc\\(var\\(--x-plan-tabs-page-bottom\\,0px\\)\\*-1\\)\\],.x-commerce.bottom-\\[calc\\(var\\(--x-plan-tabs-page-bottom\\,0px\\)\\*-1\\)\\] {
  bottom: calc(var(--x-plan-tabs-page-bottom,0px) * -1);
}
.x-commerce .left-0, .x-commerce.left-0 {
  left: 0px;
}
.x-commerce .left-1\\/2, .x-commerce.left-1\\/2 {
  left: calc(1 / 2 * 100%);
}
.x-commerce .left-2, .x-commerce.left-2 {
  left: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .left-4, .x-commerce.left-4 {
  left: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .left-10, .x-commerce.left-10 {
  left: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .left-\\[-4\\.79\\%\\], .x-commerce.left-\\[-4\\.79\\%\\] {
  left: -4.79%;
}
.x-commerce .left-\\[-60px\\], .x-commerce.left-\\[-60px\\] {
  left: -60px;
}
.x-commerce .left-\\[2\\.34\\%\\], .x-commerce.left-\\[2\\.34\\%\\] {
  left: 2.34%;
}
.x-commerce .left-\\[3\\.21\\%\\], .x-commerce.left-\\[3\\.21\\%\\] {
  left: 3.21%;
}
.x-commerce .left-\\[5\\.54\\%\\], .x-commerce.left-\\[5\\.54\\%\\] {
  left: 5.54%;
}
.x-commerce .left-\\[6\\.716px\\], .x-commerce.left-\\[6\\.716px\\] {
  left: 6.716px;
}
.x-commerce .left-\\[9\\.71\\%\\], .x-commerce.left-\\[9\\.71\\%\\] {
  left: 9.71%;
}
.x-commerce .left-\\[9px\\], .x-commerce.left-\\[9px\\] {
  left: 9px;
}
.x-commerce .left-\\[13\\.41\\%\\], .x-commerce.left-\\[13\\.41\\%\\] {
  left: 13.41%;
}
.x-commerce .left-\\[13\\.68\\%\\], .x-commerce.left-\\[13\\.68\\%\\] {
  left: 13.68%;
}
.x-commerce .left-\\[22\\.34\\%\\], .x-commerce.left-\\[22\\.34\\%\\] {
  left: 22.34%;
}
.x-commerce .left-\\[22\\.68\\%\\], .x-commerce.left-\\[22\\.68\\%\\] {
  left: 22.68%;
}
.x-commerce .left-\\[25\\.01\\%\\], .x-commerce.left-\\[25\\.01\\%\\] {
  left: 25.01%;
}
.x-commerce .left-\\[35px\\], .x-commerce.left-\\[35px\\] {
  left: 35px;
}
.x-commerce .left-\\[58\\.53\\%\\], .x-commerce.left-\\[58\\.53\\%\\] {
  left: 58.53%;
}
.x-commerce .left-\\[calc\\(50\\%-12px\\)\\], .x-commerce.left-\\[calc\\(50\\%-12px\\)\\] {
  left: calc(50% - 12px);
}
.x-commerce .left-\\[calc\\(50\\%-52px\\)\\], .x-commerce.left-\\[calc\\(50\\%-52px\\)\\] {
  left: calc(50% - 52px);
}
.x-commerce .isolate, .x-commerce.isolate {
  isolation: isolate;
}
.x-commerce .-z-10, .x-commerce.-z-10 {
  z-index: calc(10 * -1);
}
.x-commerce .z-5, .x-commerce.z-5 {
  z-index: 5;
}
.x-commerce .z-10, .x-commerce.z-10 {
  z-index: 10;
}
.x-commerce .z-20, .x-commerce.z-20 {
  z-index: 20;
}
.x-commerce .z-50, .x-commerce.z-50 {
  z-index: 50;
}
.x-commerce .z-\\[70\\], .x-commerce.z-\\[70\\] {
  z-index: 70;
}
.x-commerce .z-\\[9999\\], .x-commerce.z-\\[9999\\] {
  z-index: 9999;
}
.x-commerce .col-span-2, .x-commerce.col-span-2 {
  grid-column: span 2 / span 2;
}
.x-commerce .col-start-1, .x-commerce.col-start-1 {
  grid-column-start: 1;
}
.x-commerce .col-start-2, .x-commerce.col-start-2 {
  grid-column-start: 2;
}
.x-commerce .row-start-1, .x-commerce.row-start-1 {
  grid-row-start: 1;
}
.x-commerce .container, .x-commerce.container {
  width: 100%;
  @media (width >= 517px) {
    max-width: 517px;
  }
  @media (width >= 774px) {
    max-width: 774px;
  }
  @media (width >= 1117px) {
    max-width: 1117px;
  }
  @media (width >= 1150px) {
    max-width: 1150px;
  }
  @media (width >= 40rem) {
    max-width: 40rem;
  }
  @media (width >= 48rem) {
    max-width: 48rem;
  }
  @media (width >= 64rem) {
    max-width: 64rem;
  }
  @media (width >= 80rem) {
    max-width: 80rem;
  }
  @media (width >= 96rem) {
    max-width: 96rem;
  }
}
.x-commerce .-m-\\(--x-modal-pad\\), .x-commerce.-m-\\(--x-modal-pad\\) {
  margin: calc(var(--x-modal-pad) * -1);
}
.x-commerce .-m-3, .x-commerce.-m-3 {
  margin: calc(var(--spacing, 0.25rem) * -3);
}
.x-commerce .m-0, .x-commerce.m-0 {
  margin: 0px;
}
.x-commerce .-mx-\\(--x-modal-pad\\), .x-commerce.-mx-\\(--x-modal-pad\\) {
  margin-inline: calc(var(--x-modal-pad) * -1);
}
.x-commerce .-mx-2, .x-commerce.-mx-2 {
  margin-inline: calc(var(--spacing, 0.25rem) * -2);
}
.x-commerce .-mx-3, .x-commerce.-mx-3 {
  margin-inline: calc(var(--spacing, 0.25rem) * -3);
}
.x-commerce .-mx-6, .x-commerce.-mx-6 {
  margin-inline: calc(var(--spacing, 0.25rem) * -6);
}
.x-commerce .mx-0\\.5, .x-commerce.mx-0\\.5 {
  margin-inline: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .mx-1\\.5, .x-commerce.mx-1\\.5 {
  margin-inline: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .mx-2, .x-commerce.mx-2 {
  margin-inline: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .mx-3, .x-commerce.mx-3 {
  margin-inline: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .mx-\\[calc\\(var\\(--x-commerce-gutter\\,0px\\)\\*-1\\)\\],.x-commerce.mx-\\[calc\\(var\\(--x-commerce-gutter\\,0px\\)\\*-1\\)\\] {
  margin-inline: calc(var(--x-commerce-gutter,0px) * -1);
}
.x-commerce .mx-auto, .x-commerce.mx-auto {
  margin-inline: auto;
}
.x-commerce .-my-\\(--x-number-flow-bleed\\), .x-commerce.-my-\\(--x-number-flow-bleed\\) {
  margin-block: calc(var(--x-number-flow-bleed) * -1);
}
.x-commerce .-my-2, .x-commerce.-my-2 {
  margin-block: calc(var(--spacing, 0.25rem) * -2);
}
.x-commerce .-my-4, .x-commerce.-my-4 {
  margin-block: calc(var(--spacing, 0.25rem) * -4);
}
.x-commerce .-my-\\[7px\\], .x-commerce.-my-\\[7px\\] {
  margin-block: calc(7px * -1);
}
.x-commerce .my-0, .x-commerce.my-0 {
  margin-block: 0px;
}
.x-commerce .my-0\\.5, .x-commerce.my-0\\.5 {
  margin-block: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .my-1, .x-commerce.my-1 {
  margin-block: var(--spacing, 0.25rem);
}
.x-commerce .my-2, .x-commerce.my-2 {
  margin-block: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .my-8, .x-commerce.my-8 {
  margin-block: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .my-auto, .x-commerce.my-auto {
  margin-block: auto;
}
.x-commerce .-ms-1, .x-commerce.-ms-1 {
  margin-inline-start: calc(var(--spacing, 0.25rem) * -1);
}
.x-commerce .-ms-2, .x-commerce.-ms-2 {
  margin-inline-start: calc(var(--spacing, 0.25rem) * -2);
}
.x-commerce .-ms-\\[9px\\], .x-commerce.-ms-\\[9px\\] {
  margin-inline-start: calc(9px * -1);
}
.x-commerce .ms-1, .x-commerce.ms-1 {
  margin-inline-start: var(--spacing, 0.25rem);
}
.x-commerce .ms-auto, .x-commerce.ms-auto {
  margin-inline-start: auto;
}
.x-commerce .-me-1, .x-commerce.-me-1 {
  margin-inline-end: calc(var(--spacing, 0.25rem) * -1);
}
.x-commerce .-me-2, .x-commerce.-me-2 {
  margin-inline-end: calc(var(--spacing, 0.25rem) * -2);
}
.x-commerce .-me-2\\.5, .x-commerce.-me-2\\.5 {
  margin-inline-end: calc(var(--spacing, 0.25rem) * -2.5);
}
.x-commerce .-me-\\[9px\\], .x-commerce.-me-\\[9px\\] {
  margin-inline-end: calc(9px * -1);
}
.x-commerce .me-0\\.5, .x-commerce.me-0\\.5 {
  margin-inline-end: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .me-1, .x-commerce.me-1 {
  margin-inline-end: var(--spacing, 0.25rem);
}
.x-commerce .me-1\\.5, .x-commerce.me-1\\.5 {
  margin-inline-end: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .me-auto, .x-commerce.me-auto {
  margin-inline-end: auto;
}
.x-commerce .-mt-2, .x-commerce.-mt-2 {
  margin-top: calc(var(--spacing, 0.25rem) * -2);
}
.x-commerce .-mt-3, .x-commerce.-mt-3 {
  margin-top: calc(var(--spacing, 0.25rem) * -3);
}
.x-commerce .-mt-4, .x-commerce.-mt-4 {
  margin-top: calc(var(--spacing, 0.25rem) * -4);
}
.x-commerce .mt-0\\.5, .x-commerce.mt-0\\.5 {
  margin-top: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .mt-1, .x-commerce.mt-1 {
  margin-top: var(--spacing, 0.25rem);
}
.x-commerce .mt-2, .x-commerce.mt-2 {
  margin-top: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .mt-3, .x-commerce.mt-3 {
  margin-top: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .mt-4, .x-commerce.mt-4 {
  margin-top: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .mt-5, .x-commerce.mt-5 {
  margin-top: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .mt-6, .x-commerce.mt-6 {
  margin-top: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .mt-8, .x-commerce.mt-8 {
  margin-top: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .mt-auto, .x-commerce.mt-auto {
  margin-top: auto;
}
.x-commerce .mt-px, .x-commerce.mt-px {
  margin-top: 1px;
}
.x-commerce .-mb-\\(--x-plan-tabs-page-bottom\\,0px\\),.x-commerce.-mb-\\(--x-plan-tabs-page-bottom\\,0px\\) {
  margin-bottom: calc(var(--x-plan-tabs-page-bottom,0px) * -1);
}
.x-commerce .-mb-2, .x-commerce.-mb-2 {
  margin-bottom: calc(var(--spacing, 0.25rem) * -2);
}
.x-commerce .-mb-3, .x-commerce.-mb-3 {
  margin-bottom: calc(var(--spacing, 0.25rem) * -3);
}
.x-commerce .-mb-6, .x-commerce.-mb-6 {
  margin-bottom: calc(var(--spacing, 0.25rem) * -6);
}
.x-commerce .-mb-\\[max\\(1rem\\,env\\(safe-area-inset-bottom\\,0px\\)\\)\\],.x-commerce.-mb-\\[max\\(1rem\\,env\\(safe-area-inset-bottom\\,0px\\)\\)\\] {
  margin-bottom: calc(max(1rem, env(safe-area-inset-bottom,0px)) * -1);
}
.x-commerce .-mb-px, .x-commerce.-mb-px {
  margin-bottom: -1px;
}
.x-commerce .mb-1, .x-commerce.mb-1 {
  margin-bottom: var(--spacing, 0.25rem);
}
.x-commerce .mb-2, .x-commerce.mb-2 {
  margin-bottom: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .mb-4, .x-commerce.mb-4 {
  margin-bottom: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .mb-6, .x-commerce.mb-6 {
  margin-bottom: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .mb-7, .x-commerce.mb-7 {
  margin-bottom: calc(var(--spacing, 0.25rem) * 7);
}
.x-commerce .box-content, .x-commerce.box-content {
  box-sizing: content-box;
}
.x-commerce .scrollbar-hide, .x-commerce.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
  .x-commerce &::-webkit-scrollbar, .x-commerce&::-webkit-scrollbar {
    display: none;
  }
}
.x-commerce .x-button-slot, .x-commerce.x-button-slot {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
}
.x-commerce .line-clamp-1, .x-commerce.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.x-commerce .line-clamp-2, .x-commerce.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.x-commerce .line-clamp-3, .x-commerce.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.x-commerce .line-clamp-4, .x-commerce.line-clamp-4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.x-commerce .line-clamp-5, .x-commerce.line-clamp-5 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}
.x-commerce .block, .x-commerce.block {
  display: block;
}
.x-commerce .contents, .x-commerce.contents {
  display: contents;
}
.x-commerce .flex, .x-commerce.flex {
  display: flex;
}
.x-commerce .grid, .x-commerce.grid {
  display: grid;
}
.x-commerce .hidden, .x-commerce.hidden {
  display: none;
}
.x-commerce .inline, .x-commerce.inline {
  display: inline;
}
.x-commerce .inline-block, .x-commerce.inline-block {
  display: inline-block;
}
.x-commerce .inline-flex, .x-commerce.inline-flex {
  display: inline-flex;
}
.x-commerce .inline-grid, .x-commerce.inline-grid {
  display: inline-grid;
}
.x-commerce .table, .x-commerce.table {
  display: table;
}
.x-commerce .\\[field-sizing\\:content\\], .x-commerce.\\[field-sizing\\:content\\] {
  field-sizing: content;
}
.x-commerce .aspect-\\[61\\/57\\], .x-commerce.aspect-\\[61\\/57\\] {
  aspect-ratio: 61/57;
}
.x-commerce .aspect-\\[900\\/490\\], .x-commerce.aspect-\\[900\\/490\\] {
  aspect-ratio: 900/490;
}
.x-commerce .aspect-square, .x-commerce.aspect-square {
  aspect-ratio: 1 / 1;
}
.x-commerce .aspect-video, .x-commerce.aspect-video {
  aspect-ratio: var(--aspect-video, 16 / 9);
}
.x-commerce .size-1\\.5, .x-commerce.size-1\\.5 {
  width: calc(var(--spacing, 0.25rem) * 1.5);
  height: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .size-2, .x-commerce.size-2 {
  width: calc(var(--spacing, 0.25rem) * 2);
  height: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .size-2\\.5, .x-commerce.size-2\\.5 {
  width: calc(var(--spacing, 0.25rem) * 2.5);
  height: calc(var(--spacing, 0.25rem) * 2.5);
}
.x-commerce .size-3, .x-commerce.size-3 {
  width: calc(var(--spacing, 0.25rem) * 3);
  height: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .size-3\\.5, .x-commerce.size-3\\.5 {
  width: calc(var(--spacing, 0.25rem) * 3.5);
  height: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .size-4, .x-commerce.size-4 {
  width: calc(var(--spacing, 0.25rem) * 4);
  height: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .size-5, .x-commerce.size-5 {
  width: calc(var(--spacing, 0.25rem) * 5);
  height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .size-6, .x-commerce.size-6 {
  width: calc(var(--spacing, 0.25rem) * 6);
  height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .size-7, .x-commerce.size-7 {
  width: calc(var(--spacing, 0.25rem) * 7);
  height: calc(var(--spacing, 0.25rem) * 7);
}
.x-commerce .size-8, .x-commerce.size-8 {
  width: calc(var(--spacing, 0.25rem) * 8);
  height: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .size-9, .x-commerce.size-9 {
  width: calc(var(--spacing, 0.25rem) * 9);
  height: calc(var(--spacing, 0.25rem) * 9);
}
.x-commerce .size-10, .x-commerce.size-10 {
  width: calc(var(--spacing, 0.25rem) * 10);
  height: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .size-16, .x-commerce.size-16 {
  width: calc(var(--spacing, 0.25rem) * 16);
  height: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .size-\\[0\\.85em\\], .x-commerce.size-\\[0\\.85em\\] {
  width: 0.85em;
  height: 0.85em;
}
.x-commerce .size-\\[16px\\], .x-commerce.size-\\[16px\\] {
  width: 16px;
  height: 16px;
}
.x-commerce .size-\\[18px\\], .x-commerce.size-\\[18px\\] {
  width: 18px;
  height: 18px;
}
.x-commerce .size-\\[22px\\], .x-commerce.size-\\[22px\\] {
  width: 22px;
  height: 22px;
}
.x-commerce .size-\\[26px\\], .x-commerce.size-\\[26px\\] {
  width: 26px;
  height: 26px;
}
.x-commerce .size-\\[29px\\], .x-commerce.size-\\[29px\\] {
  width: 29px;
  height: 29px;
}
.x-commerce .size-\\[61\\.714px\\], .x-commerce.size-\\[61\\.714px\\] {
  width: 61.714px;
  height: 61.714px;
}
.x-commerce .size-full, .x-commerce.size-full {
  width: 100%;
  height: 100%;
}
.x-commerce .h-0, .x-commerce.h-0 {
  height: 0px;
}
.x-commerce .h-1, .x-commerce.h-1 {
  height: var(--spacing, 0.25rem);
}
.x-commerce .h-1\\.5, .x-commerce.h-1\\.5 {
  height: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .h-3\\.5, .x-commerce.h-3\\.5 {
  height: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .h-4, .x-commerce.h-4 {
  height: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .h-5, .x-commerce.h-5 {
  height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .h-6, .x-commerce.h-6 {
  height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .h-7, .x-commerce.h-7 {
  height: calc(var(--spacing, 0.25rem) * 7);
}
.x-commerce .h-8, .x-commerce.h-8 {
  height: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .h-9, .x-commerce.h-9 {
  height: calc(var(--spacing, 0.25rem) * 9);
}
.x-commerce .h-10, .x-commerce.h-10 {
  height: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .h-11, .x-commerce.h-11 {
  height: calc(var(--spacing, 0.25rem) * 11);
}
.x-commerce .h-12, .x-commerce.h-12 {
  height: calc(var(--spacing, 0.25rem) * 12);
}
.x-commerce .h-14, .x-commerce.h-14 {
  height: calc(var(--spacing, 0.25rem) * 14);
}
.x-commerce .h-16, .x-commerce.h-16 {
  height: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .h-24, .x-commerce.h-24 {
  height: calc(var(--spacing, 0.25rem) * 24);
}
.x-commerce .h-40, .x-commerce.h-40 {
  height: calc(var(--spacing, 0.25rem) * 40);
}
.x-commerce .h-48, .x-commerce.h-48 {
  height: calc(var(--spacing, 0.25rem) * 48);
}
.x-commerce .h-60, .x-commerce.h-60 {
  height: calc(var(--spacing, 0.25rem) * 60);
}
.x-commerce .h-64, .x-commerce.h-64 {
  height: calc(var(--spacing, 0.25rem) * 64);
}
.x-commerce .h-\\[1lh\\], .x-commerce.h-\\[1lh\\] {
  height: 1lh;
}
.x-commerce .h-\\[11\\.79\\%\\], .x-commerce.h-\\[11\\.79\\%\\] {
  height: 11.79%;
}
.x-commerce .h-\\[14\\.29\\%\\], .x-commerce.h-\\[14\\.29\\%\\] {
  height: 14.29%;
}
.x-commerce .h-\\[20\\.71\\%\\], .x-commerce.h-\\[20\\.71\\%\\] {
  height: 20.71%;
}
.x-commerce .h-\\[20px\\], .x-commerce.h-\\[20px\\] {
  height: 20px;
}
.x-commerce .h-\\[22px\\], .x-commerce.h-\\[22px\\] {
  height: 22px;
}
.x-commerce .h-\\[25\\.36\\%\\], .x-commerce.h-\\[25\\.36\\%\\] {
  height: 25.36%;
}
.x-commerce .h-\\[26px\\], .x-commerce.h-\\[26px\\] {
  height: 26px;
}
.x-commerce .h-\\[28px\\], .x-commerce.h-\\[28px\\] {
  height: 28px;
}
.x-commerce .h-\\[29\\.46\\%\\], .x-commerce.h-\\[29\\.46\\%\\] {
  height: 29.46%;
}
.x-commerce .h-\\[33\\.21\\%\\], .x-commerce.h-\\[33\\.21\\%\\] {
  height: 33.21%;
}
.x-commerce .h-\\[34px\\], .x-commerce.h-\\[34px\\] {
  height: 34px;
}
.x-commerce .h-\\[36px\\], .x-commerce.h-\\[36px\\] {
  height: 36px;
}
.x-commerce .h-\\[43px\\], .x-commerce.h-\\[43px\\] {
  height: 43px;
}
.x-commerce .h-\\[48\\.76px\\], .x-commerce.h-\\[48\\.76px\\] {
  height: 48.76px;
}
.x-commerce .h-\\[50px\\], .x-commerce.h-\\[50px\\] {
  height: 50px;
}
.x-commerce .h-\\[55px\\], .x-commerce.h-\\[55px\\] {
  height: 55px;
}
.x-commerce .h-\\[60\\.18\\%\\], .x-commerce.h-\\[60\\.18\\%\\] {
  height: 60.18%;
}
.x-commerce .h-\\[71\\.25\\%\\], .x-commerce.h-\\[71\\.25\\%\\] {
  height: 71.25%;
}
.x-commerce .h-\\[76\\.07\\%\\], .x-commerce.h-\\[76\\.07\\%\\] {
  height: 76.07%;
}
.x-commerce .h-\\[82px\\], .x-commerce.h-\\[82px\\] {
  height: 82px;
}
.x-commerce .h-\\[88px\\], .x-commerce.h-\\[88px\\] {
  height: 88px;
}
.x-commerce .h-\\[94\\.29\\%\\], .x-commerce.h-\\[94\\.29\\%\\] {
  height: 94.29%;
}
.x-commerce .h-\\[114\\.29\\%\\], .x-commerce.h-\\[114\\.29\\%\\] {
  height: 114.29%;
}
.x-commerce .h-\\[124px\\], .x-commerce.h-\\[124px\\] {
  height: 124px;
}
.x-commerce .h-\\[136px\\], .x-commerce.h-\\[136px\\] {
  height: 136px;
}
.x-commerce .h-\\[142px\\], .x-commerce.h-\\[142px\\] {
  height: 142px;
}
.x-commerce .h-\\[149px\\], .x-commerce.h-\\[149px\\] {
  height: 149px;
}
.x-commerce .h-\\[200px\\], .x-commerce.h-\\[200px\\] {
  height: 200px;
}
.x-commerce .h-\\[254px\\], .x-commerce.h-\\[254px\\] {
  height: 254px;
}
.x-commerce .h-\\[340px\\], .x-commerce.h-\\[340px\\] {
  height: 340px;
}
.x-commerce .h-\\[420px\\], .x-commerce.h-\\[420px\\] {
  height: 420px;
}
.x-commerce .h-\\[460px\\], .x-commerce.h-\\[460px\\] {
  height: 460px;
}
.x-commerce .h-\\[497px\\], .x-commerce.h-\\[497px\\] {
  height: 497px;
}
.x-commerce .h-\\[872px\\], .x-commerce.h-\\[872px\\] {
  height: 872px;
}
.x-commerce .h-\\[min\\(880px\\,calc\\(100dvh-32px\\)\\)\\],.x-commerce.h-\\[min\\(880px\\,calc\\(100dvh-32px\\)\\)\\] {
  height: min(880px, calc(100dvh - 32px));
}
.x-commerce .h-auto, .x-commerce.h-auto {
  height: auto;
}
.x-commerce .h-dvh, .x-commerce.h-dvh {
  height: 100dvh;
}
.x-commerce .h-full, .x-commerce.h-full {
  height: 100%;
}
.x-commerce .h-px, .x-commerce.h-px {
  height: 1px;
}
.x-commerce .max-h-\\(--available-height\\), .x-commerce.max-h-\\(--available-height\\) {
  max-height: var(--available-height);
}
.x-commerce .max-h-\\[70dvh\\], .x-commerce.max-h-\\[70dvh\\] {
  max-height: 70dvh;
}
.x-commerce .max-h-\\[280px\\], .x-commerce.max-h-\\[280px\\] {
  max-height: 280px;
}
.x-commerce .max-h-\\[420px\\], .x-commerce.max-h-\\[420px\\] {
  max-height: 420px;
}
.x-commerce .max-h-\\[calc\\(100dvh-32px\\)\\], .x-commerce.max-h-\\[calc\\(100dvh-32px\\)\\] {
  max-height: calc(100dvh - 32px);
}
.x-commerce .min-h-0, .x-commerce.min-h-0 {
  min-height: 0px;
}
.x-commerce .min-h-4, .x-commerce.min-h-4 {
  min-height: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .min-h-5, .x-commerce.min-h-5 {
  min-height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .min-h-6, .x-commerce.min-h-6 {
  min-height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .min-h-9, .x-commerce.min-h-9 {
  min-height: calc(var(--spacing, 0.25rem) * 9);
}
.x-commerce .min-h-10, .x-commerce.min-h-10 {
  min-height: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .min-h-12, .x-commerce.min-h-12 {
  min-height: calc(var(--spacing, 0.25rem) * 12);
}
.x-commerce .min-h-16, .x-commerce.min-h-16 {
  min-height: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .min-h-28, .x-commerce.min-h-28 {
  min-height: calc(var(--spacing, 0.25rem) * 28);
}
.x-commerce .min-h-40, .x-commerce.min-h-40 {
  min-height: calc(var(--spacing, 0.25rem) * 40);
}
.x-commerce .min-h-48, .x-commerce.min-h-48 {
  min-height: calc(var(--spacing, 0.25rem) * 48);
}
.x-commerce .min-h-\\[43px\\], .x-commerce.min-h-\\[43px\\] {
  min-height: 43px;
}
.x-commerce .min-h-\\[45px\\], .x-commerce.min-h-\\[45px\\] {
  min-height: 45px;
}
.x-commerce .min-h-\\[62px\\], .x-commerce.min-h-\\[62px\\] {
  min-height: 62px;
}
.x-commerce .min-h-\\[149px\\], .x-commerce.min-h-\\[149px\\] {
  min-height: 149px;
}
.x-commerce .min-h-\\[calc\\(var\\(--x-plan-tabs-footer-h\\,0px\\)\\+--spacing\\(28\\)\\)\\],.x-commerce.min-h-\\[calc\\(var\\(--x-plan-tabs-footer-h\\,0px\\)\\+--spacing\\(28\\)\\)\\] {
  min-height: calc(var(--x-plan-tabs-footer-h,0px) + calc(var(--spacing, 0.25rem) * 28));
}
.x-commerce .min-h-dvh, .x-commerce.min-h-dvh {
  min-height: 100dvh;
}
.x-commerce .min-h-full, .x-commerce.min-h-full {
  min-height: 100%;
}
.x-commerce .min-h-lh, .x-commerce.min-h-lh {
  min-height: 1lh;
}
.x-commerce .w-\\(--anchor-width\\), .x-commerce.w-\\(--anchor-width\\) {
  width: var(--anchor-width);
}
.x-commerce .w-0, .x-commerce.w-0 {
  width: 0px;
}
.x-commerce .w-1\\.5, .x-commerce.w-1\\.5 {
  width: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .w-1\\/2, .x-commerce.w-1\\/2 {
  width: calc(1 / 2 * 100%);
}
.x-commerce .w-2, .x-commerce.w-2 {
  width: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .w-2\\/3, .x-commerce.w-2\\/3 {
  width: calc(2 / 3 * 100%);
}
.x-commerce .w-3\\/4, .x-commerce.w-3\\/4 {
  width: calc(3 / 4 * 100%);
}
.x-commerce .w-3\\/6, .x-commerce.w-3\\/6 {
  width: calc(3 / 6 * 100%);
}
.x-commerce .w-4\\/6, .x-commerce.w-4\\/6 {
  width: calc(4 / 6 * 100%);
}
.x-commerce .w-5\\/6, .x-commerce.w-5\\/6 {
  width: calc(5 / 6 * 100%);
}
.x-commerce .w-6, .x-commerce.w-6 {
  width: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .w-8, .x-commerce.w-8 {
  width: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .w-9, .x-commerce.w-9 {
  width: calc(var(--spacing, 0.25rem) * 9);
}
.x-commerce .w-10, .x-commerce.w-10 {
  width: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .w-11\\/12, .x-commerce.w-11\\/12 {
  width: calc(11 / 12 * 100%);
}
.x-commerce .w-12, .x-commerce.w-12 {
  width: calc(var(--spacing, 0.25rem) * 12);
}
.x-commerce .w-16, .x-commerce.w-16 {
  width: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .w-20, .x-commerce.w-20 {
  width: calc(var(--spacing, 0.25rem) * 20);
}
.x-commerce .w-24, .x-commerce.w-24 {
  width: calc(var(--spacing, 0.25rem) * 24);
}
.x-commerce .w-28, .x-commerce.w-28 {
  width: calc(var(--spacing, 0.25rem) * 28);
}
.x-commerce .w-32, .x-commerce.w-32 {
  width: calc(var(--spacing, 0.25rem) * 32);
}
.x-commerce .w-36, .x-commerce.w-36 {
  width: calc(var(--spacing, 0.25rem) * 36);
}
.x-commerce .w-40, .x-commerce.w-40 {
  width: calc(var(--spacing, 0.25rem) * 40);
}
.x-commerce .w-48, .x-commerce.w-48 {
  width: calc(var(--spacing, 0.25rem) * 48);
}
.x-commerce .w-52, .x-commerce.w-52 {
  width: calc(var(--spacing, 0.25rem) * 52);
}
.x-commerce .w-56, .x-commerce.w-56 {
  width: calc(var(--spacing, 0.25rem) * 56);
}
.x-commerce .w-64, .x-commerce.w-64 {
  width: calc(var(--spacing, 0.25rem) * 64);
}
.x-commerce .w-72, .x-commerce.w-72 {
  width: calc(var(--spacing, 0.25rem) * 72);
}
.x-commerce .w-80, .x-commerce.w-80 {
  width: calc(var(--spacing, 0.25rem) * 80);
}
.x-commerce .w-\\[11\\.79\\%\\], .x-commerce.w-\\[11\\.79\\%\\] {
  width: 11.79%;
}
.x-commerce .w-\\[13\\.21\\%\\], .x-commerce.w-\\[13\\.21\\%\\] {
  width: 13.21%;
}
.x-commerce .w-\\[16\\%\\], .x-commerce.w-\\[16\\%\\] {
  width: 16%;
}
.x-commerce .w-\\[18\\.93\\%\\], .x-commerce.w-\\[18\\.93\\%\\] {
  width: 18.93%;
}
.x-commerce .w-\\[18px\\], .x-commerce.w-\\[18px\\] {
  width: 18px;
}
.x-commerce .w-\\[20px\\], .x-commerce.w-\\[20px\\] {
  width: 20px;
}
.x-commerce .w-\\[21\\%\\], .x-commerce.w-\\[21\\%\\] {
  width: 21%;
}
.x-commerce .w-\\[24\\%\\], .x-commerce.w-\\[24\\%\\] {
  width: 24%;
}
.x-commerce .w-\\[31\\.61\\%\\], .x-commerce.w-\\[31\\.61\\%\\] {
  width: 31.61%;
}
.x-commerce .w-\\[33\\.21\\%\\], .x-commerce.w-\\[33\\.21\\%\\] {
  width: 33.21%;
}
.x-commerce .w-\\[34px\\], .x-commerce.w-\\[34px\\] {
  width: 34px;
}
.x-commerce .w-\\[35\\.71\\%\\], .x-commerce.w-\\[35\\.71\\%\\] {
  width: 35.71%;
}
.x-commerce .w-\\[36\\%\\], .x-commerce.w-\\[36\\%\\] {
  width: 36%;
}
.x-commerce .w-\\[43\\.21\\%\\], .x-commerce.w-\\[43\\.21\\%\\] {
  width: 43.21%;
}
.x-commerce .w-\\[48px\\], .x-commerce.w-\\[48px\\] {
  width: 48px;
}
.x-commerce .w-\\[50\\.568px\\], .x-commerce.w-\\[50\\.568px\\] {
  width: 50.568px;
}
.x-commerce .w-\\[68\\.93\\%\\], .x-commerce.w-\\[68\\.93\\%\\] {
  width: 68.93%;
}
.x-commerce .w-\\[70px\\], .x-commerce.w-\\[70px\\] {
  width: 70px;
}
.x-commerce .w-\\[72vw\\], .x-commerce.w-\\[72vw\\] {
  width: 72vw;
}
.x-commerce .w-\\[75\\%\\], .x-commerce.w-\\[75\\%\\] {
  width: 75%;
}
.x-commerce .w-\\[77\\.68\\%\\], .x-commerce.w-\\[77\\.68\\%\\] {
  width: 77.68%;
}
.x-commerce .w-\\[93\\.333\\%\\], .x-commerce.w-\\[93\\.333\\%\\] {
  width: 93.333%;
}
.x-commerce .w-\\[100cqw\\], .x-commerce.w-\\[100cqw\\] {
  width: 100cqw;
}
.x-commerce .w-\\[104px\\], .x-commerce.w-\\[104px\\] {
  width: 104px;
}
.x-commerce .w-\\[109\\.59\\%\\], .x-commerce.w-\\[109\\.59\\%\\] {
  width: 109.59%;
}
.x-commerce .w-\\[144px\\], .x-commerce.w-\\[144px\\] {
  width: 144px;
}
.x-commerce .w-\\[240px\\], .x-commerce.w-\\[240px\\] {
  width: 240px;
}
.x-commerce .w-\\[260px\\], .x-commerce.w-\\[260px\\] {
  width: 260px;
}
.x-commerce .w-\\[280px\\], .x-commerce.w-\\[280px\\] {
  width: 280px;
}
.x-commerce .w-\\[300px\\], .x-commerce.w-\\[300px\\] {
  width: 300px;
}
.x-commerce .w-\\[318px\\], .x-commerce.w-\\[318px\\] {
  width: 318px;
}
.x-commerce .w-\\[320px\\], .x-commerce.w-\\[320px\\] {
  width: 320px;
}
.x-commerce .w-\\[360px\\], .x-commerce.w-\\[360px\\] {
  width: 360px;
}
.x-commerce .w-\\[372px\\], .x-commerce.w-\\[372px\\] {
  width: 372px;
}
.x-commerce .w-\\[388px\\], .x-commerce.w-\\[388px\\] {
  width: 388px;
}
.x-commerce .w-\\[400px\\], .x-commerce.w-\\[400px\\] {
  width: 400px;
}
.x-commerce .w-\\[413px\\], .x-commerce.w-\\[413px\\] {
  width: 413px;
}
.x-commerce .w-\\[430px\\], .x-commerce.w-\\[430px\\] {
  width: 430px;
}
.x-commerce .w-\\[450px\\], .x-commerce.w-\\[450px\\] {
  width: 450px;
}
.x-commerce .w-\\[500px\\], .x-commerce.w-\\[500px\\] {
  width: 500px;
}
.x-commerce .w-\\[600px\\], .x-commerce.w-\\[600px\\] {
  width: 600px;
}
.x-commerce .w-\\[822px\\], .x-commerce.w-\\[822px\\] {
  width: 822px;
}
.x-commerce .w-\\[1080px\\], .x-commerce.w-\\[1080px\\] {
  width: 1080px;
}
.x-commerce .w-\\[1296px\\], .x-commerce.w-\\[1296px\\] {
  width: 1296px;
}
.x-commerce .w-\\[calc\\(50\\%-2px\\)\\], .x-commerce.w-\\[calc\\(50\\%-2px\\)\\] {
  width: calc(50% - 2px);
}
.x-commerce .w-\\[min\\(24rem\\,calc\\(100vw-2rem\\)\\,calc\\(var\\(--available-width\\,100vw\\)-1rem\\)\\)\\],.x-commerce.w-\\[min\\(24rem\\,calc\\(100vw-2rem\\)\\,calc\\(var\\(--available-width\\,100vw\\)-1rem\\)\\)\\] {
  width: min(24rem, calc(100vw - 2rem), calc(var(--available-width,100vw) - 1rem));
}
.x-commerce .w-auto, .x-commerce.w-auto {
  width: auto;
}
.x-commerce .w-fit, .x-commerce.w-fit {
  width: fit-content;
}
.x-commerce .w-full, .x-commerce.w-full {
  width: 100%;
}
.x-commerce .max-w-4xl, .x-commerce.max-w-4xl {
  max-width: var(--container-4xl, 56rem);
}
.x-commerce .max-w-72, .x-commerce.max-w-72 {
  max-width: calc(var(--spacing, 0.25rem) * 72);
}
.x-commerce .max-w-\\[50\\%\\], .x-commerce.max-w-\\[50\\%\\] {
  max-width: 50%;
}
.x-commerce .max-w-\\[320px\\], .x-commerce.max-w-\\[320px\\] {
  max-width: 320px;
}
.x-commerce .max-w-\\[360px\\], .x-commerce.max-w-\\[360px\\] {
  max-width: 360px;
}
.x-commerce .max-w-\\[400px\\], .x-commerce.max-w-\\[400px\\] {
  max-width: 400px;
}
.x-commerce .max-w-\\[420px\\], .x-commerce.max-w-\\[420px\\] {
  max-width: 420px;
}
.x-commerce .max-w-\\[440px\\], .x-commerce.max-w-\\[440px\\] {
  max-width: 440px;
}
.x-commerce .max-w-\\[450px\\], .x-commerce.max-w-\\[450px\\] {
  max-width: 450px;
}
.x-commerce .max-w-\\[480px\\], .x-commerce.max-w-\\[480px\\] {
  max-width: 480px;
}
.x-commerce .max-w-\\[570px\\], .x-commerce.max-w-\\[570px\\] {
  max-width: 570px;
}
.x-commerce .max-w-\\[610px\\], .x-commerce.max-w-\\[610px\\] {
  max-width: 610px;
}
.x-commerce .max-w-\\[916px\\], .x-commerce.max-w-\\[916px\\] {
  max-width: 916px;
}
.x-commerce .max-w-\\[calc\\(100vw-32px\\)\\], .x-commerce.max-w-\\[calc\\(100vw-32px\\)\\] {
  max-width: calc(100vw - 32px);
}
.x-commerce .max-w-full, .x-commerce.max-w-full {
  max-width: 100%;
}
.x-commerce .max-w-none, .x-commerce.max-w-none {
  max-width: none;
}
.x-commerce .max-w-sm, .x-commerce.max-w-sm {
  max-width: var(--container-sm, 24rem);
}
.x-commerce .max-w-xl, .x-commerce.max-w-xl {
  max-width: var(--container-xl, 36rem);
}
.x-commerce .min-w-0, .x-commerce.min-w-0 {
  min-width: 0px;
}
.x-commerce .min-w-6, .x-commerce.min-w-6 {
  min-width: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .min-w-8, .x-commerce.min-w-8 {
  min-width: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .min-w-9, .x-commerce.min-w-9 {
  min-width: calc(var(--spacing, 0.25rem) * 9);
}
.x-commerce .min-w-10, .x-commerce.min-w-10 {
  min-width: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .min-w-12, .x-commerce.min-w-12 {
  min-width: calc(var(--spacing, 0.25rem) * 12);
}
.x-commerce .min-w-60, .x-commerce.min-w-60 {
  min-width: calc(var(--spacing, 0.25rem) * 60);
}
.x-commerce .min-w-\\[1ch\\], .x-commerce.min-w-\\[1ch\\] {
  min-width: 1ch;
}
.x-commerce .min-w-\\[76px\\], .x-commerce.min-w-\\[76px\\] {
  min-width: 76px;
}
.x-commerce .min-w-\\[180px\\], .x-commerce.min-w-\\[180px\\] {
  min-width: 180px;
}
.x-commerce .min-w-\\[200px\\], .x-commerce.min-w-\\[200px\\] {
  min-width: 200px;
}
.x-commerce .min-w-\\[var\\(--anchor-width\\)\\], .x-commerce.min-w-\\[var\\(--anchor-width\\)\\] {
  min-width: var(--anchor-width);
}
.x-commerce .min-w-min, .x-commerce.min-w-min {
  min-width: min-content;
}
.x-commerce .flex-1, .x-commerce.flex-1 {
  flex: 1;
}
.x-commerce .flex-none, .x-commerce.flex-none {
  flex: none;
}
.x-commerce .shrink, .x-commerce.shrink {
  flex-shrink: 1;
}
.x-commerce .shrink-0, .x-commerce.shrink-0 {
  flex-shrink: 0;
}
.x-commerce .grow, .x-commerce.grow {
  flex-grow: 1;
}
.x-commerce .basis-0, .x-commerce.basis-0 {
  flex-basis: 0px;
}
.x-commerce .border-collapse, .x-commerce.border-collapse {
  border-collapse: collapse;
}
.x-commerce .origin-\\[var\\(--transform-origin\\)\\], .x-commerce.origin-\\[var\\(--transform-origin\\)\\] {
  transform-origin: var(--transform-origin);
}
.x-commerce .-translate-x-1\\/2, .x-commerce.-translate-x-1\\/2 {
  --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .translate-x-0, .x-commerce.translate-x-0 {
  --tw-translate-x: 0px;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .translate-x-\\[2px\\], .x-commerce.translate-x-\\[2px\\] {
  --tw-translate-x: 2px;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .translate-x-\\[3px\\], .x-commerce.translate-x-\\[3px\\] {
  --tw-translate-x: 3px;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .translate-x-\\[calc\\(50cqw-50\\%\\)\\], .x-commerce.translate-x-\\[calc\\(50cqw-50\\%\\)\\] {
  --tw-translate-x: calc(50cqw - 50%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .translate-x-\\[calc\\(100cqw-100\\%\\)\\], .x-commerce.translate-x-\\[calc\\(100cqw-100\\%\\)\\] {
  --tw-translate-x: calc(100cqw - 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .translate-x-full, .x-commerce.translate-x-full {
  --tw-translate-x: 100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .-translate-y-1\\/2, .x-commerce.-translate-y-1\\/2 {
  --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .scale-0, .x-commerce.scale-0 {
  --tw-scale-x: 0%;
  --tw-scale-y: 0%;
  --tw-scale-z: 0%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .scale-50, .x-commerce.scale-50 {
  --tw-scale-x: 50%;
  --tw-scale-y: 50%;
  --tw-scale-z: 50%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .-scale-x-100, .x-commerce.-scale-x-100 {
  --tw-scale-x: calc(100% * -1);
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .rotate-180, .x-commerce.rotate-180 {
  rotate: 180deg;
}
.x-commerce .transform, .x-commerce.transform {
  transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
}
.x-commerce .transform-gpu, .x-commerce.transform-gpu {
  transform: translateZ(0) var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
}
.x-commerce .animate-\\[x-commerce-price-fade-in_110ms_ease-out\\], .x-commerce.animate-\\[x-commerce-price-fade-in_110ms_ease-out\\] {
  animation: x-commerce-price-fade-in 110ms ease-out;
}
.x-commerce .animate-\\[x-commerce-price-fade-out_110ms_ease-in_forwards\\], .x-commerce.animate-\\[x-commerce-price-fade-out_110ms_ease-in_forwards\\] {
  animation: x-commerce-price-fade-out 110ms ease-in forwards;
}
.x-commerce .animate-fade-in, .x-commerce.animate-fade-in {
  animation: fadeIn 150ms ease-out;
}
.x-commerce .animate-spin, .x-commerce.animate-spin {
  animation: var(--animate-spin, spin 1s linear infinite);
}
.x-commerce .cursor-auto, .x-commerce.cursor-auto {
  cursor: auto;
}
.x-commerce .cursor-default, .x-commerce.cursor-default {
  cursor: default;
}
.x-commerce .cursor-not-allowed, .x-commerce.cursor-not-allowed {
  cursor: not-allowed;
}
.x-commerce .cursor-pointer, .x-commerce.cursor-pointer {
  cursor: pointer;
}
.x-commerce .cursor-text, .x-commerce.cursor-text {
  cursor: text;
}
.x-commerce .cursor-wait, .x-commerce.cursor-wait {
  cursor: wait;
}
.x-commerce .resize, .x-commerce.resize {
  resize: both;
}
.x-commerce .snap-x, .x-commerce.snap-x {
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
}
.x-commerce .snap-mandatory, .x-commerce.snap-mandatory {
  --tw-scroll-snap-strictness: mandatory;
}
.x-commerce .snap-proximity, .x-commerce.snap-proximity {
  --tw-scroll-snap-strictness: proximity;
}
.x-commerce .snap-center, .x-commerce.snap-center {
  scroll-snap-align: center;
}
.x-commerce .snap-start, .x-commerce.snap-start {
  scroll-snap-align: start;
}
.x-commerce .scroll-px-\\[var\\(--x-commerce-gutter\\,0\\.75rem\\)\\],.x-commerce.scroll-px-\\[var\\(--x-commerce-gutter\\,0\\.75rem\\)\\] {
  scroll-padding-inline: var(--x-commerce-gutter,0.75rem);
}
.x-commerce .scroll-px-\\[var\\(--x-commerce-gutter\\,0px\\)\\],.x-commerce.scroll-px-\\[var\\(--x-commerce-gutter\\,0px\\)\\] {
  scroll-padding-inline: var(--x-commerce-gutter,0px);
}
.x-commerce .scroll-py-6, .x-commerce.scroll-py-6 {
  scroll-padding-block: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .scroll-py-8, .x-commerce.scroll-py-8 {
  scroll-padding-block: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .scroll-pt-\\[59px\\], .x-commerce.scroll-pt-\\[59px\\] {
  scroll-padding-top: 59px;
}
.x-commerce .scroll-pt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+56px\\)\\],.x-commerce.scroll-pt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+56px\\)\\] {
  scroll-padding-top: calc(env(safe-area-inset-top,0px) + 56px);
}
.x-commerce .scroll-pt-\\[calc\\(var\\(--x-modal-header-h\\,0px\\)\\+--spacing\\(6\\)\\)\\],.x-commerce.scroll-pt-\\[calc\\(var\\(--x-modal-header-h\\,0px\\)\\+--spacing\\(6\\)\\)\\] {
  scroll-padding-top: calc(var(--x-modal-header-h,0px) + calc(var(--spacing, 0.25rem) * 6));
}
.x-commerce .scroll-pb-6, .x-commerce.scroll-pb-6 {
  scroll-padding-bottom: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .scroll-pb-\\[calc\\(var\\(--x-modal-footer-h\\,0px\\)\\+--spacing\\(6\\)\\)\\],.x-commerce.scroll-pb-\\[calc\\(var\\(--x-modal-footer-h\\,0px\\)\\+--spacing\\(6\\)\\)\\] {
  scroll-padding-bottom: calc(var(--x-modal-footer-h,0px) + calc(var(--spacing, 0.25rem) * 6));
}
.x-commerce .\\[scrollbar-width\\:none\\], .x-commerce.\\[scrollbar-width\\:none\\] {
  scrollbar-width: none;
}
.x-commerce .\\[scrollbar-gutter\\:stable\\], .x-commerce.\\[scrollbar-gutter\\:stable\\] {
  scrollbar-gutter: stable;
}
.x-commerce .list-none, .x-commerce.list-none {
  list-style-type: none;
}
.x-commerce .appearance-none, .x-commerce.appearance-none {
  appearance: none;
}
.x-commerce .grid-cols-1, .x-commerce.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.x-commerce .grid-cols-2, .x-commerce.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.x-commerce .grid-cols-8, .x-commerce.grid-cols-8 {
  grid-template-columns: repeat(8, minmax(0, 1fr));
}
.x-commerce .grid-cols-\\[2\\.25rem_minmax\\(0\\,1fr\\)\\],.x-commerce.grid-cols-\\[2\\.25rem_minmax\\(0\\,1fr\\)\\] {
  grid-template-columns: 2.25rem minmax(0,1fr);
}
.x-commerce .grid-cols-\\[2\\.25rem_minmax\\(0\\,1fr\\)_2\\.25rem\\],.x-commerce.grid-cols-\\[2\\.25rem_minmax\\(0\\,1fr\\)_2\\.25rem\\] {
  grid-template-columns: 2.25rem minmax(0,1fr) 2.25rem;
}
.x-commerce .grid-cols-\\[auto_auto\\], .x-commerce.grid-cols-\\[auto_auto\\] {
  grid-template-columns: auto auto;
}
.x-commerce .grid-cols-\\[auto_minmax\\(0\\,1fr\\)\\],.x-commerce.grid-cols-\\[auto_minmax\\(0\\,1fr\\)\\] {
  grid-template-columns: auto minmax(0,1fr);
}
.x-commerce .grid-rows-\\[0fr\\], .x-commerce.grid-rows-\\[0fr\\] {
  grid-template-rows: 0fr;
}
.x-commerce .grid-rows-\\[1fr\\], .x-commerce.grid-rows-\\[1fr\\] {
  grid-template-rows: 1fr;
}
.x-commerce .flex-col, .x-commerce.flex-col {
  flex-direction: column;
}
.x-commerce .flex-col-reverse, .x-commerce.flex-col-reverse {
  flex-direction: column-reverse;
}
.x-commerce .flex-row, .x-commerce.flex-row {
  flex-direction: row;
}
.x-commerce .flex-nowrap, .x-commerce.flex-nowrap {
  flex-wrap: nowrap;
}
.x-commerce .flex-wrap, .x-commerce.flex-wrap {
  flex-wrap: wrap;
}
.x-commerce .place-items-center, .x-commerce.place-items-center {
  place-items: center;
}
.x-commerce .content-start, .x-commerce.content-start {
  align-content: flex-start;
}
.x-commerce .items-baseline, .x-commerce.items-baseline {
  align-items: baseline;
}
.x-commerce .items-center, .x-commerce.items-center {
  align-items: center;
}
.x-commerce .items-end, .x-commerce.items-end {
  align-items: flex-end;
}
.x-commerce .items-start, .x-commerce.items-start {
  align-items: flex-start;
}
.x-commerce .items-stretch, .x-commerce.items-stretch {
  align-items: stretch;
}
.x-commerce .justify-between, .x-commerce.justify-between {
  justify-content: space-between;
}
.x-commerce .justify-center, .x-commerce.justify-center {
  justify-content: center;
}
.x-commerce .justify-end, .x-commerce.justify-end {
  justify-content: flex-end;
}
.x-commerce .justify-items-center, .x-commerce.justify-items-center {
  justify-items: center;
}
.x-commerce .gap-0, .x-commerce.gap-0 {
  gap: 0px;
}
.x-commerce .gap-0\\.5, .x-commerce.gap-0\\.5 {
  gap: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .gap-1, .x-commerce.gap-1 {
  gap: var(--spacing, 0.25rem);
}
.x-commerce .gap-1\\.5, .x-commerce.gap-1\\.5 {
  gap: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .gap-2, .x-commerce.gap-2 {
  gap: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .gap-2\\.5, .x-commerce.gap-2\\.5 {
  gap: calc(var(--spacing, 0.25rem) * 2.5);
}
.x-commerce .gap-3, .x-commerce.gap-3 {
  gap: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .gap-3\\.5, .x-commerce.gap-3\\.5 {
  gap: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .gap-4, .x-commerce.gap-4 {
  gap: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .gap-5, .x-commerce.gap-5 {
  gap: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .gap-6, .x-commerce.gap-6 {
  gap: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .gap-7, .x-commerce.gap-7 {
  gap: calc(var(--spacing, 0.25rem) * 7);
}
.x-commerce .gap-8, .x-commerce.gap-8 {
  gap: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .gap-10, .x-commerce.gap-10 {
  gap: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .gap-px, .x-commerce.gap-px {
  gap: 1px;
}
.x-commerce :where(.space-y-1 > :not(:last-child)), .x-commerce:where(.space-y-1 > :not(:last-child)) {
  --tw-space-y-reverse: 0;
  margin-block-start: calc(var(--spacing, 0.25rem) * var(--tw-space-y-reverse));
  margin-block-end: calc(var(--spacing, 0.25rem) * calc(1 - var(--tw-space-y-reverse)));
}
.x-commerce :where(.space-y-2 > :not(:last-child)), .x-commerce:where(.space-y-2 > :not(:last-child)) {
  --tw-space-y-reverse: 0;
  margin-block-start: calc(calc(var(--spacing, 0.25rem) * 2) * var(--tw-space-y-reverse));
  margin-block-end: calc(calc(var(--spacing, 0.25rem) * 2) * calc(1 - var(--tw-space-y-reverse)));
}
.x-commerce :where(.space-y-3 > :not(:last-child)), .x-commerce:where(.space-y-3 > :not(:last-child)) {
  --tw-space-y-reverse: 0;
  margin-block-start: calc(calc(var(--spacing, 0.25rem) * 3) * var(--tw-space-y-reverse));
  margin-block-end: calc(calc(var(--spacing, 0.25rem) * 3) * calc(1 - var(--tw-space-y-reverse)));
}
.x-commerce .gap-x-1, .x-commerce.gap-x-1 {
  column-gap: var(--spacing, 0.25rem);
}
.x-commerce .gap-x-1\\.5, .x-commerce.gap-x-1\\.5 {
  column-gap: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .gap-x-2, .x-commerce.gap-x-2 {
  column-gap: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .gap-x-3, .x-commerce.gap-x-3 {
  column-gap: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .gap-x-4, .x-commerce.gap-x-4 {
  column-gap: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .gap-x-\\[300px\\], .x-commerce.gap-x-\\[300px\\] {
  column-gap: 300px;
}
.x-commerce .gap-x-px, .x-commerce.gap-x-px {
  column-gap: 1px;
}
.x-commerce .gap-y-1, .x-commerce.gap-y-1 {
  row-gap: var(--spacing, 0.25rem);
}
.x-commerce .gap-y-3, .x-commerce.gap-y-3 {
  row-gap: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .gap-y-4, .x-commerce.gap-y-4 {
  row-gap: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .gap-y-\\[300px\\], .x-commerce.gap-y-\\[300px\\] {
  row-gap: 300px;
}
.x-commerce .self-center, .x-commerce.self-center {
  align-self: center;
}
.x-commerce .self-end, .x-commerce.self-end {
  align-self: flex-end;
}
.x-commerce .self-start, .x-commerce.self-start {
  align-self: flex-start;
}
.x-commerce .self-stretch, .x-commerce.self-stretch {
  align-self: stretch;
}
.x-commerce .justify-self-end, .x-commerce.justify-self-end {
  justify-self: flex-end;
}
.x-commerce .truncate, .x-commerce.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.x-commerce .overflow-clip, .x-commerce.overflow-clip {
  overflow: clip;
}
.x-commerce .overflow-hidden, .x-commerce.overflow-hidden {
  overflow: hidden;
}
.x-commerce .overflow-visible, .x-commerce.overflow-visible {
  overflow: visible;
}
.x-commerce .overflow-visible\\!, .x-commerce.overflow-visible\\! {
  overflow: visible !important;
}
.x-commerce .overflow-x-auto, .x-commerce.overflow-x-auto {
  overflow-x: auto;
}
.x-commerce .overflow-x-clip, .x-commerce.overflow-x-clip {
  overflow-x: clip;
}
.x-commerce .overflow-y-auto, .x-commerce.overflow-y-auto {
  overflow-y: auto;
}
.x-commerce .overflow-y-hidden, .x-commerce.overflow-y-hidden {
  overflow-y: hidden;
}
.x-commerce .overscroll-contain, .x-commerce.overscroll-contain {
  overscroll-behavior: contain;
}
.x-commerce .overscroll-none, .x-commerce.overscroll-none {
  overscroll-behavior: none;
}
.x-commerce .overscroll-x-none, .x-commerce.overscroll-x-none {
  overscroll-behavior-x: none;
}
.x-commerce .overscroll-y-none, .x-commerce.overscroll-y-none {
  overscroll-behavior-y: none;
}
.x-commerce .rounded, .x-commerce.rounded {
  border-radius: calc(12px * var(--x-radius-m));
}
.x-commerce .rounded-2xl, .x-commerce.rounded-2xl {
  border-radius: var(--radius-2xl, 1rem);
}
.x-commerce .rounded-3xl, .x-commerce.rounded-3xl {
  border-radius: var(--radius-3xl, 1.5rem);
}
.x-commerce .rounded-\\[11px\\], .x-commerce.rounded-\\[11px\\] {
  border-radius: 11px;
}
.x-commerce .rounded-\\[12px\\], .x-commerce.rounded-\\[12px\\] {
  border-radius: 12px;
}
.x-commerce .rounded-\\[14\\.4px\\], .x-commerce.rounded-\\[14\\.4px\\] {
  border-radius: 14.4px;
}
.x-commerce .rounded-\\[14px\\], .x-commerce.rounded-\\[14px\\] {
  border-radius: 14px;
}
.x-commerce .rounded-\\[18px\\], .x-commerce.rounded-\\[18px\\] {
  border-radius: 18px;
}
.x-commerce .rounded-\\[20px\\], .x-commerce.rounded-\\[20px\\] {
  border-radius: 20px;
}
.x-commerce .rounded-\\[22\\%\\], .x-commerce.rounded-\\[22\\%\\] {
  border-radius: 22%;
}
.x-commerce .rounded-\\[22px\\], .x-commerce.rounded-\\[22px\\] {
  border-radius: 22px;
}
.x-commerce .rounded-\\[24px\\], .x-commerce.rounded-\\[24px\\] {
  border-radius: 24px;
}
.x-commerce .rounded-\\[32px\\], .x-commerce.rounded-\\[32px\\] {
  border-radius: 32px;
}
.x-commerce .rounded-\\[44px\\], .x-commerce.rounded-\\[44px\\] {
  border-radius: 44px;
}
.x-commerce .rounded-\\[calc\\(12px\\*var\\(--x-radius-m\\,1\\)\\)\\],.x-commerce.rounded-\\[calc\\(12px\\*var\\(--x-radius-m\\,1\\)\\)\\] {
  border-radius: calc(12px * var(--x-radius-m,1));
}
.x-commerce .rounded-full, .x-commerce.rounded-full {
  border-radius: 9999px;
}
.x-commerce .rounded-lg, .x-commerce.rounded-lg {
  border-radius: calc(24px * var(--x-radius-m));
}
.x-commerce .rounded-md, .x-commerce.rounded-md {
  border-radius: calc(16px * var(--x-radius-m));
}
.x-commerce .rounded-none, .x-commerce.rounded-none {
  border-radius: 0px;
}
.x-commerce .rounded-sm, .x-commerce.rounded-sm {
  border-radius: calc(8px * var(--x-radius-m));
}
.x-commerce .rounded-xl, .x-commerce.rounded-xl {
  border-radius: calc(32px * var(--x-radius-m));
}
.x-commerce .rounded-xs, .x-commerce.rounded-xs {
  border-radius: calc(4px * var(--x-radius-m));
}
.x-commerce .rounded-e-lg, .x-commerce.rounded-e-lg {
  border-start-end-radius: calc(24px * var(--x-radius-m));
  border-end-end-radius: calc(24px * var(--x-radius-m));
}
.x-commerce .rounded-t-\\[32px\\], .x-commerce.rounded-t-\\[32px\\] {
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}
.x-commerce .rounded-l-lg, .x-commerce.rounded-l-lg {
  border-top-left-radius: calc(24px * var(--x-radius-m));
  border-bottom-left-radius: calc(24px * var(--x-radius-m));
}
.x-commerce .border, .x-commerce.border {
  border-style: var(--tw-border-style);
  border-width: 1px;
}
.x-commerce .border-0, .x-commerce.border-0 {
  border-style: var(--tw-border-style);
  border-width: 0px;
}
.x-commerce .border-2, .x-commerce.border-2 {
  border-style: var(--tw-border-style);
  border-width: 2px;
}
.x-commerce .border-\\[0\\.5px\\], .x-commerce.border-\\[0\\.5px\\] {
  border-style: var(--tw-border-style);
  border-width: 0.5px;
}
.x-commerce .border-\\[10px\\], .x-commerce.border-\\[10px\\] {
  border-style: var(--tw-border-style);
  border-width: 10px;
}
.x-commerce .border-t, .x-commerce.border-t {
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
}
.x-commerce .border-t-\\[0\\.5px\\], .x-commerce.border-t-\\[0\\.5px\\] {
  border-top-style: var(--tw-border-style);
  border-top-width: 0.5px;
}
.x-commerce .border-b, .x-commerce.border-b {
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
}
.x-commerce .border-b-\\[0\\.5px\\], .x-commerce.border-b-\\[0\\.5px\\] {
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 0.5px;
}
.x-commerce .border-solid, .x-commerce.border-solid {
  --tw-border-style: solid;
  border-style: solid;
}
.x-commerce .border-\\(--x-fg-brand\\), .x-commerce.border-\\(--x-fg-brand\\) {
  border-color: var(--x-fg-brand);
}
.x-commerce .border-\\[\\#3d3d3d\\], .x-commerce.border-\\[\\#3d3d3d\\] {
  border-color: #3d3d3d;
}
.x-commerce .border-\\[\\#0890ff\\], .x-commerce.border-\\[\\#0890ff\\] {
  border-color: #0890ff;
}
.x-commerce .border-\\[\\#b42318\\], .x-commerce.border-\\[\\#b42318\\] {
  border-color: #b42318;
}
.x-commerce .border-\\[\\#c4c4c4\\], .x-commerce.border-\\[\\#c4c4c4\\] {
  border-color: #c4c4c4;
}
.x-commerce .border-\\[\\#d93025\\], .x-commerce.border-\\[\\#d93025\\] {
  border-color: #d93025;
}
.x-commerce .border-\\[\\#dadce0\\], .x-commerce.border-\\[\\#dadce0\\] {
  border-color: #dadce0;
}
.x-commerce .border-\\[\\#e5e5e5\\], .x-commerce.border-\\[\\#e5e5e5\\] {
  border-color: #e5e5e5;
}
.x-commerce .border-black-10, .x-commerce.border-black-10 {
  border-color: var(--x-black-10);
}
.x-commerce .border-black\\/4, .x-commerce.border-black\\/4 {
  border-color: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-black) 4%, transparent);
  }
}
.x-commerce .border-black\\/10, .x-commerce.border-black\\/10 {
  border-color: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-black) 10%, transparent);
  }
}
.x-commerce .border-blue-500, .x-commerce.border-blue-500 {
  border-color: var(--x-blue-500);
}
.x-commerce .border-current, .x-commerce.border-current {
  border-color: currentcolor;
}
.x-commerce .border-destructive, .x-commerce.border-destructive {
  border-color: var(--x-border-destructive);
}
.x-commerce .border-destructive-light, .x-commerce.border-destructive-light {
  border-color: var(--x-border-destructive-light);
}
.x-commerce .border-destructive\\/60, .x-commerce.border-destructive\\/60 {
  border-color: var(--x-border-destructive);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-border-destructive) 60%, transparent);
  }
}
.x-commerce .border-elevated, .x-commerce.border-elevated {
  border-color: var(--x-border-elevated);
}
.x-commerce .border-fg-alpha-05, .x-commerce.border-fg-alpha-05 {
  border-color: var(--x-fg-alpha-05);
}
.x-commerce .border-fg-alpha-06, .x-commerce.border-fg-alpha-06 {
  border-color: var(--x-fg-alpha-06);
}
.x-commerce .border-fg-alpha-10, .x-commerce.border-fg-alpha-10 {
  border-color: var(--x-fg-alpha-10);
}
.x-commerce .border-fg-alpha-20, .x-commerce.border-fg-alpha-20 {
  border-color: var(--x-fg-alpha-20);
}
.x-commerce .border-media, .x-commerce.border-media {
  border-color: var(--x-border-media);
}
.x-commerce .border-neutral-500, .x-commerce.border-neutral-500 {
  border-color: var(--x-neutral-500);
}
.x-commerce .border-neutral-900, .x-commerce.border-neutral-900 {
  border-color: var(--x-neutral-900);
}
.x-commerce .border-normal, .x-commerce.border-normal {
  border-color: var(--x-border-normal);
}
.x-commerce .border-normal\\/40, .x-commerce.border-normal\\/40 {
  border-color: var(--x-border-normal);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-border-normal) 40%, transparent);
  }
}
.x-commerce .border-red-400\\/80, .x-commerce.border-red-400\\/80 {
  border-color: var(--x-red-400);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-red-400) 80%, transparent);
  }
}
.x-commerce .border-teal-500, .x-commerce.border-teal-500 {
  border-color: var(--x-teal-500);
}
.x-commerce .border-transparent, .x-commerce.border-transparent {
  border-color: transparent;
}
.x-commerce .border-white\\/30, .x-commerce.border-white\\/30 {
  border-color: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-white) 30%, transparent);
  }
}
.x-commerce .bg-\\[\\#0b5cab\\], .x-commerce.bg-\\[\\#0b5cab\\] {
  background-color: #0b5cab;
}
.x-commerce .bg-\\[\\#1a73e8\\], .x-commerce.bg-\\[\\#1a73e8\\] {
  background-color: #1a73e8;
}
.x-commerce .bg-\\[\\#1c1c1e\\], .x-commerce.bg-\\[\\#1c1c1e\\] {
  background-color: #1c1c1e;
}
.x-commerce .bg-\\[\\#0890ff\\], .x-commerce.bg-\\[\\#0890ff\\] {
  background-color: #0890ff;
}
.x-commerce .bg-\\[\\#0890ff\\]\\/12, .x-commerce.bg-\\[\\#0890ff\\]\\/12 {
  background-color: color-mix(in oklab, #0890ff 12%, transparent);
}
.x-commerce .bg-\\[\\#050505\\], .x-commerce.bg-\\[\\#050505\\] {
  background-color: #050505;
}
.x-commerce .bg-\\[\\#626262\\], .x-commerce.bg-\\[\\#626262\\] {
  background-color: #626262;
}
.x-commerce .bg-\\[\\#f5f5f5\\], .x-commerce.bg-\\[\\#f5f5f5\\] {
  background-color: #f5f5f5;
}
.x-commerce .bg-\\[\\#f9f8f7\\], .x-commerce.bg-\\[\\#f9f8f7\\] {
  background-color: #f9f8f7;
}
.x-commerce .bg-\\[\\#fcfcfc\\], .x-commerce.bg-\\[\\#fcfcfc\\] {
  background-color: #fcfcfc;
}
.x-commerce .bg-\\[rgba\\(118\\,118\\,128\\,0\\.12\\)\\],.x-commerce.bg-\\[rgba\\(118\\,118\\,128\\,0\\.12\\)\\] {
  background-color: rgba(118,118,128,0.12);
}
.x-commerce .bg-\\[var\\(--x-modal-bg\\,var\\(--x-bg-modal\\)\\)\\],.x-commerce.bg-\\[var\\(--x-modal-bg\\,var\\(--x-bg-modal\\)\\)\\] {
  background-color: var(--x-modal-bg,var(--x-bg-modal));
}
.x-commerce .bg-\\[var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)\\],.x-commerce.bg-\\[var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)\\] {
  background-color: var(--x-modal-bg,var(--x-bg-primary));
}
.x-commerce .bg-amber-400, .x-commerce.bg-amber-400 {
  background-color: var(--color-amber-400, oklch(82.8% 0.189 84.429));
}
.x-commerce .bg-black, .x-commerce.bg-black {
  background-color: var(--x-black);
}
.x-commerce .bg-black-04, .x-commerce.bg-black-04 {
  background-color: var(--x-black-04);
}
.x-commerce .bg-black-40, .x-commerce.bg-black-40 {
  background-color: var(--x-black-40);
}
.x-commerce .bg-black-80, .x-commerce.bg-black-80 {
  background-color: var(--x-black-80);
}
.x-commerce .bg-black\\/40, .x-commerce.bg-black\\/40 {
  background-color: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-black) 40%, transparent);
  }
}
.x-commerce .bg-black\\/50, .x-commerce.bg-black\\/50 {
  background-color: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-black) 50%, transparent);
  }
}
.x-commerce .bg-blue-500, .x-commerce.bg-blue-500 {
  background-color: var(--x-blue-500);
}
.x-commerce .bg-blue-500\\/10, .x-commerce.bg-blue-500\\/10 {
  background-color: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-blue-500) 10%, transparent);
  }
}
.x-commerce .bg-blue-500\\/12, .x-commerce.bg-blue-500\\/12 {
  background-color: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-blue-500) 12%, transparent);
  }
}
.x-commerce .bg-btn-brand, .x-commerce.bg-btn-brand {
  background-color: var(--x-btn-brand);
}
.x-commerce .bg-btn-destructive, .x-commerce.bg-btn-destructive {
  background-color: var(--x-btn-destructive);
}
.x-commerce .bg-btn-inverted, .x-commerce.bg-btn-inverted {
  background-color: var(--x-btn-inverted);
}
.x-commerce .bg-btn-primary, .x-commerce.bg-btn-primary {
  background-color: var(--x-btn-primary);
}
.x-commerce .bg-btn-secondary, .x-commerce.bg-btn-secondary {
  background-color: var(--x-btn-secondary);
}
.x-commerce .bg-btn-tertiary, .x-commerce.bg-btn-tertiary {
  background-color: var(--x-btn-tertiary);
}
.x-commerce .bg-destructive, .x-commerce.bg-destructive {
  background-color: var(--x-bg-destructive);
}
.x-commerce .bg-destructive\\/30, .x-commerce.bg-destructive\\/30 {
  background-color: var(--x-bg-destructive);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-bg-destructive) 30%, transparent);
  }
}
.x-commerce .bg-fg-alpha-05, .x-commerce.bg-fg-alpha-05 {
  background-color: var(--x-fg-alpha-05);
}
.x-commerce .bg-fg-alpha-10, .x-commerce.bg-fg-alpha-10 {
  background-color: var(--x-fg-alpha-10);
}
.x-commerce .bg-fg-alpha-20, .x-commerce.bg-fg-alpha-20 {
  background-color: var(--x-fg-alpha-20);
}
.x-commerce .bg-fg-alpha-40, .x-commerce.bg-fg-alpha-40 {
  background-color: var(--x-fg-alpha-40);
}
.x-commerce .bg-info, .x-commerce.bg-info {
  background-color: var(--x-bg-info);
}
.x-commerce .bg-inputs, .x-commerce.bg-inputs {
  background-color: var(--x-bg-inputs);
}
.x-commerce .bg-modal, .x-commerce.bg-modal {
  background-color: var(--x-bg-modal);
}
.x-commerce .bg-neutral-500, .x-commerce.bg-neutral-500 {
  background-color: var(--x-neutral-500);
}
.x-commerce .bg-neutral-700, .x-commerce.bg-neutral-700 {
  background-color: var(--x-neutral-700);
}
.x-commerce .bg-neutral-900, .x-commerce.bg-neutral-900 {
  background-color: var(--x-neutral-900);
}
.x-commerce .bg-overlay-normal, .x-commerce.bg-overlay-normal {
  background-color: var(--x-overlay-normal);
}
.x-commerce .bg-primary, .x-commerce.bg-primary {
  background-color: var(--x-bg-primary);
}
.x-commerce .bg-primary\\/60, .x-commerce.bg-primary\\/60 {
  background-color: var(--x-bg-primary);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-bg-primary) 60%, transparent);
  }
}
.x-commerce .bg-purple-500, .x-commerce.bg-purple-500 {
  background-color: var(--x-purple-500);
}
.x-commerce .bg-quaternary, .x-commerce.bg-quaternary {
  background-color: var(--x-bg-quaternary);
}
.x-commerce .bg-secondary, .x-commerce.bg-secondary {
  background-color: var(--x-bg-secondary);
}
.x-commerce .bg-success, .x-commerce.bg-success {
  background-color: var(--x-bg-success);
}
.x-commerce .bg-tertiary, .x-commerce.bg-tertiary {
  background-color: var(--x-bg-tertiary);
}
.x-commerce .bg-transparent, .x-commerce.bg-transparent {
  background-color: transparent;
}
.x-commerce .bg-warning, .x-commerce.bg-warning {
  background-color: var(--x-bg-warning);
}
.x-commerce .bg-white, .x-commerce.bg-white {
  background-color: var(--x-white);
}
.x-commerce .bg-white-20, .x-commerce.bg-white-20 {
  background-color: var(--x-white-20);
}
.x-commerce .bg-linear-to-b, .x-commerce.bg-linear-to-b {
  --tw-gradient-position: to bottom;
  @supports (background-image: linear-gradient(in lab, red, red)) {
    --tw-gradient-position: to bottom in oklab;
  }
  background-image: linear-gradient(var(--tw-gradient-stops));
}
.x-commerce .bg-linear-to-br, .x-commerce.bg-linear-to-br {
  --tw-gradient-position: to bottom right;
  @supports (background-image: linear-gradient(in lab, red, red)) {
    --tw-gradient-position: to bottom right in oklab;
  }
  background-image: linear-gradient(var(--tw-gradient-stops));
}
.x-commerce .bg-\\[linear-gradient\\(to_bottom\\,transparent\\,var\\(--x-bg-primary\\)_--spacing\\(4\\)\\)\\],.x-commerce.bg-\\[linear-gradient\\(to_bottom\\,transparent\\,var\\(--x-bg-primary\\)_--spacing\\(4\\)\\)\\] {
  background-image: linear-gradient(to bottom,transparent,var(--x-bg-primary) calc(var(--spacing, 0.25rem) * 4));
}
.x-commerce .bg-\\[repeating-linear-gradient\\(45deg\\,\\#1d9bf0_0\\,\\#1d9bf0_22px\\,\\#8b5cf6_22px\\,\\#8b5cf6_44px\\)\\],.x-commerce.bg-\\[repeating-linear-gradient\\(45deg\\,\\#1d9bf0_0\\,\\#1d9bf0_22px\\,\\#8b5cf6_22px\\,\\#8b5cf6_44px\\)\\] {
  background-image: repeating-linear-gradient(45deg,#1d9bf0 0,#1d9bf0 22px,#8b5cf6 22px,#8b5cf6 44px);
}
.x-commerce .from-\\(--x-btn-primary\\), .x-commerce.from-\\(--x-btn-primary\\) {
  --tw-gradient-from: var(--x-btn-primary);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .from-\\[\\#0890ff\\]\\/1, .x-commerce.from-\\[\\#0890ff\\]\\/1 {
  --tw-gradient-from: color-mix(in oklab, #0890ff 1%, transparent);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .from-\\[\\#d6e9ff\\], .x-commerce.from-\\[\\#d6e9ff\\] {
  --tw-gradient-from: #d6e9ff;
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .from-blue-400, .x-commerce.from-blue-400 {
  --tw-gradient-from: var(--x-blue-400);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .from-blue-500\\/1, .x-commerce.from-blue-500\\/1 {
  --tw-gradient-from: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-gradient-from: color-mix(in oklab, var(--x-blue-500) 1%, transparent);
  }
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .from-gray-700, .x-commerce.from-gray-700 {
  --tw-gradient-from: var(--color-gray-700, oklch(37.3% 0.034 259.733));
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .from-indigo-500, .x-commerce.from-indigo-500 {
  --tw-gradient-from: var(--color-indigo-500, oklch(58.5% 0.233 277.117));
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .via-fuchsia-500, .x-commerce.via-fuchsia-500 {
  --tw-gradient-via: var(--color-fuchsia-500, oklch(66.7% 0.295 322.15));
  --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-via-stops);
}
.x-commerce .to-\\[\\#0890ff\\]\\/8, .x-commerce.to-\\[\\#0890ff\\]\\/8 {
  --tw-gradient-to: color-mix(in oklab, #0890ff 8%, transparent);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .to-\\[\\#b5d6ff\\], .x-commerce.to-\\[\\#b5d6ff\\] {
  --tw-gradient-to: #b5d6ff;
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\],.x-commerce.to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\] {
  --tw-gradient-to: var(--x-btn-primary);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-gradient-to: color-mix(in srgb,var(--x-btn-primary),var(--x-bg-primary) 16%);
  }
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .to-amber-400, .x-commerce.to-amber-400 {
  --tw-gradient-to: var(--color-amber-400, oklch(82.8% 0.189 84.429));
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .to-blue-500\\/5, .x-commerce.to-blue-500\\/5 {
  --tw-gradient-to: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-gradient-to: color-mix(in oklab, var(--x-blue-500) 5%, transparent);
  }
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .to-gray-900, .x-commerce.to-gray-900 {
  --tw-gradient-to: var(--color-gray-900, oklch(21% 0.034 264.665));
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .to-purple-600, .x-commerce.to-purple-600 {
  --tw-gradient-to: var(--x-purple-600);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .\\[mask-image\\:linear-gradient\\(to_bottom\\,black\\,transparent\\)\\],.x-commerce.\\[mask-image\\:linear-gradient\\(to_bottom\\,black\\,transparent\\)\\] {
  mask-image: linear-gradient(to bottom,black,transparent);
}
.x-commerce .\\[mask-image\\:linear-gradient\\(to_right\\,transparent\\,black_24px\\,black_calc\\(100\\%-24px\\)\\,transparent\\)\\,linear-gradient\\(to_bottom\\,transparent\\,black_24px\\,black_calc\\(100\\%-24px\\)\\,transparent\\)\\],.x-commerce.\\[mask-image\\:linear-gradient\\(to_right\\,transparent\\,black_24px\\,black_calc\\(100\\%-24px\\)\\,transparent\\)\\,linear-gradient\\(to_bottom\\,transparent\\,black_24px\\,black_calc\\(100\\%-24px\\)\\,transparent\\)\\] {
  mask-image: linear-gradient(to right,transparent,black 24px,black calc(100% - 24px),transparent),linear-gradient(to bottom,transparent,black 24px,black calc(100% - 24px),transparent);
}
.x-commerce .\\[mask-image\\:linear-gradient\\(to_top\\,black\\,transparent\\)\\],.x-commerce.\\[mask-image\\:linear-gradient\\(to_top\\,black\\,transparent\\)\\] {
  mask-image: linear-gradient(to top,black,transparent);
}
.x-commerce .mask-\\[linear-gradient\\(to_bottom\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-y-start\\,0px\\)\\,32px\\)\\)\\],.x-commerce.mask-\\[linear-gradient\\(to_bottom\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-y-start\\,0px\\)\\,32px\\)\\)\\] {
  mask-image: linear-gradient(to bottom,transparent,black min(var(--scroll-area-overflow-y-start,0px), 32px));
}
.x-commerce .mask-\\[linear-gradient\\(to_bottom\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-y-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-y-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\],.x-commerce.mask-\\[linear-gradient\\(to_bottom\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-y-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-y-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\] {
  mask-image: linear-gradient(to bottom,transparent,black min(var(--scroll-area-overflow-y-start,0px), 32px),black calc(100% - min(var(--scroll-area-overflow-y-end,0px), 32px)),transparent);
}
.x-commerce .mask-\\[linear-gradient\\(to_bottom\\,transparent_var\\(--x-number-flow-fade-out\\)\\,black_var\\(--x-number-flow-bleed\\)\\,black_calc\\(100\\%_-_var\\(--x-number-flow-bleed\\)\\)\\,transparent_calc\\(100\\%_-_var\\(--x-number-flow-fade-out\\)\\)\\)\\],.x-commerce.mask-\\[linear-gradient\\(to_bottom\\,transparent_var\\(--x-number-flow-fade-out\\)\\,black_var\\(--x-number-flow-bleed\\)\\,black_calc\\(100\\%_-_var\\(--x-number-flow-bleed\\)\\)\\,transparent_calc\\(100\\%_-_var\\(--x-number-flow-fade-out\\)\\)\\)\\] {
  mask-image: linear-gradient(to bottom,transparent var(--x-number-flow-fade-out),black var(--x-number-flow-bleed),black calc(100% - var(--x-number-flow-bleed)),transparent calc(100% - var(--x-number-flow-fade-out)));
}
.x-commerce .\\[mask-composite\\:intersect\\], .x-commerce.\\[mask-composite\\:intersect\\] {
  mask-composite: intersect;
}
.x-commerce .object-contain, .x-commerce.object-contain {
  object-fit: contain;
}
.x-commerce .object-cover, .x-commerce.object-cover {
  object-fit: cover;
}
.x-commerce .object-bottom, .x-commerce.object-bottom {
  object-position: bottom;
}
.x-commerce .object-left-bottom, .x-commerce.object-left-bottom {
  object-position: left bottom;
}
.x-commerce .p-\\(--x-modal-pad\\), .x-commerce.p-\\(--x-modal-pad\\) {
  padding: var(--x-modal-pad);
}
.x-commerce .p-0, .x-commerce.p-0 {
  padding: 0px;
}
.x-commerce .p-0\\.5, .x-commerce.p-0\\.5 {
  padding: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .p-1, .x-commerce.p-1 {
  padding: var(--spacing, 0.25rem);
}
.x-commerce .p-2, .x-commerce.p-2 {
  padding: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .p-3, .x-commerce.p-3 {
  padding: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .p-4, .x-commerce.p-4 {
  padding: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .p-5, .x-commerce.p-5 {
  padding: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .p-6, .x-commerce.p-6 {
  padding: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .p-8, .x-commerce.p-8 {
  padding: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .p-16, .x-commerce.p-16 {
  padding: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .p-20, .x-commerce.p-20 {
  padding: calc(var(--spacing, 0.25rem) * 20);
}
.x-commerce .p-\\[18px\\], .x-commerce.p-\\[18px\\] {
  padding: 18px;
}
.x-commerce .p-\\[23px\\], .x-commerce.p-\\[23px\\] {
  padding: 23px;
}
.x-commerce .px-\\(--x-modal-pad\\), .x-commerce.px-\\(--x-modal-pad\\) {
  padding-inline: var(--x-modal-pad);
}
.x-commerce .px-0, .x-commerce.px-0 {
  padding-inline: 0px;
}
.x-commerce .px-1\\.5, .x-commerce.px-1\\.5 {
  padding-inline: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .px-2, .x-commerce.px-2 {
  padding-inline: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .px-2\\.5, .x-commerce.px-2\\.5 {
  padding-inline: calc(var(--spacing, 0.25rem) * 2.5);
}
.x-commerce .px-3, .x-commerce.px-3 {
  padding-inline: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .px-3\\.5, .x-commerce.px-3\\.5 {
  padding-inline: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .px-4, .x-commerce.px-4 {
  padding-inline: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .px-5, .x-commerce.px-5 {
  padding-inline: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .px-6, .x-commerce.px-6 {
  padding-inline: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .px-8, .x-commerce.px-8 {
  padding-inline: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .px-\\[25px\\], .x-commerce.px-\\[25px\\] {
  padding-inline: 25px;
}
.x-commerce .px-\\[var\\(--x-commerce-gutter\\,0\\.75rem\\)\\],.x-commerce.px-\\[var\\(--x-commerce-gutter\\,0\\.75rem\\)\\] {
  padding-inline: var(--x-commerce-gutter,0.75rem);
}
.x-commerce .px-\\[var\\(--x-commerce-gutter\\,0px\\)\\],.x-commerce.px-\\[var\\(--x-commerce-gutter\\,0px\\)\\] {
  padding-inline: var(--x-commerce-gutter,0px);
}
.x-commerce .py-\\(--x-number-flow-bleed\\), .x-commerce.py-\\(--x-number-flow-bleed\\) {
  padding-block: var(--x-number-flow-bleed);
}
.x-commerce .py-0, .x-commerce.py-0 {
  padding-block: 0px;
}
.x-commerce .py-0\\.5, .x-commerce.py-0\\.5 {
  padding-block: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .py-1, .x-commerce.py-1 {
  padding-block: var(--spacing, 0.25rem);
}
.x-commerce .py-1\\.5, .x-commerce.py-1\\.5 {
  padding-block: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .py-2, .x-commerce.py-2 {
  padding-block: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .py-2\\.5, .x-commerce.py-2\\.5 {
  padding-block: calc(var(--spacing, 0.25rem) * 2.5);
}
.x-commerce .py-3, .x-commerce.py-3 {
  padding-block: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .py-3\\.5, .x-commerce.py-3\\.5 {
  padding-block: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .py-4, .x-commerce.py-4 {
  padding-block: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .py-6, .x-commerce.py-6 {
  padding-block: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .py-8, .x-commerce.py-8 {
  padding-block: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .py-12, .x-commerce.py-12 {
  padding-block: calc(var(--spacing, 0.25rem) * 12);
}
.x-commerce .py-\\[3px\\], .x-commerce.py-\\[3px\\] {
  padding-block: 3px;
}
.x-commerce .py-\\[9px\\], .x-commerce.py-\\[9px\\] {
  padding-block: 9px;
}
.x-commerce .py-\\[10px\\], .x-commerce.py-\\[10px\\] {
  padding-block: 10px;
}
.x-commerce .py-\\[15px\\], .x-commerce.py-\\[15px\\] {
  padding-block: 15px;
}
.x-commerce .py-\\[22px\\], .x-commerce.py-\\[22px\\] {
  padding-block: 22px;
}
.x-commerce .ps-1, .x-commerce.ps-1 {
  padding-inline-start: var(--spacing, 0.25rem);
}
.x-commerce .ps-2, .x-commerce.ps-2 {
  padding-inline-start: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .ps-10, .x-commerce.ps-10 {
  padding-inline-start: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .ps-\\[35px\\], .x-commerce.ps-\\[35px\\] {
  padding-inline-start: 35px;
}
.x-commerce .pe-1, .x-commerce.pe-1 {
  padding-inline-end: var(--spacing, 0.25rem);
}
.x-commerce .pe-2, .x-commerce.pe-2 {
  padding-inline-end: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .pe-3, .x-commerce.pe-3 {
  padding-inline-end: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .pe-4, .x-commerce.pe-4 {
  padding-inline-end: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .pe-10, .x-commerce.pe-10 {
  padding-inline-end: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .pt-1, .x-commerce.pt-1 {
  padding-top: var(--spacing, 0.25rem);
}
.x-commerce .pt-1\\.5, .x-commerce.pt-1\\.5 {
  padding-top: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .pt-2, .x-commerce.pt-2 {
  padding-top: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .pt-3, .x-commerce.pt-3 {
  padding-top: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .pt-4, .x-commerce.pt-4 {
  padding-top: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .pt-5, .x-commerce.pt-5 {
  padding-top: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .pt-6, .x-commerce.pt-6 {
  padding-top: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .pt-16, .x-commerce.pt-16 {
  padding-top: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .pt-\\[5px\\], .x-commerce.pt-\\[5px\\] {
  padding-top: 5px;
}
.x-commerce .pt-\\[59px\\], .x-commerce.pt-\\[59px\\] {
  padding-top: 59px;
}
.x-commerce .pt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+2px\\)\\],.x-commerce.pt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+2px\\)\\] {
  padding-top: calc(env(safe-area-inset-top,0px) + 2px);
}
.x-commerce .pt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+4rem\\)\\],.x-commerce.pt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+4rem\\)\\] {
  padding-top: calc(env(safe-area-inset-top,0px) + 4rem);
}
.x-commerce .pt-\\[calc\\(var\\(--flow-inset-top\\,0px\\)\\+24px\\)\\],.x-commerce.pt-\\[calc\\(var\\(--flow-inset-top\\,0px\\)\\+24px\\)\\] {
  padding-top: calc(var(--flow-inset-top,0px) + 24px);
}
.x-commerce .pt-\\[env\\(safe-area-inset-top\\,0px\\)\\],.x-commerce.pt-\\[env\\(safe-area-inset-top\\,0px\\)\\] {
  padding-top: env(safe-area-inset-top,0px);
}
.x-commerce .pr-4, .x-commerce.pr-4 {
  padding-right: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .pr-16, .x-commerce.pr-16 {
  padding-right: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .pr-\\[env\\(safe-area-inset-right\\,0px\\)\\],.x-commerce.pr-\\[env\\(safe-area-inset-right\\,0px\\)\\] {
  padding-right: env(safe-area-inset-right,0px);
}
.x-commerce .pr-\\[max\\(16px\\,env\\(safe-area-inset-right\\,0px\\)\\)\\],.x-commerce.pr-\\[max\\(16px\\,env\\(safe-area-inset-right\\,0px\\)\\)\\] {
  padding-right: max(16px, env(safe-area-inset-right,0px));
}
.x-commerce .pr-\\[max\\(24px\\,env\\(safe-area-inset-right\\,0px\\)\\)\\],.x-commerce.pr-\\[max\\(24px\\,env\\(safe-area-inset-right\\,0px\\)\\)\\] {
  padding-right: max(24px, env(safe-area-inset-right,0px));
}
.x-commerce .pb-0, .x-commerce.pb-0 {
  padding-bottom: 0px;
}
.x-commerce .pb-1, .x-commerce.pb-1 {
  padding-bottom: var(--spacing, 0.25rem);
}
.x-commerce .pb-1\\.5, .x-commerce.pb-1\\.5 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .pb-2, .x-commerce.pb-2 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .pb-2\\.5, .x-commerce.pb-2\\.5 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 2.5);
}
.x-commerce .pb-3, .x-commerce.pb-3 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .pb-4, .x-commerce.pb-4 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .pb-6, .x-commerce.pb-6 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .pb-8, .x-commerce.pb-8 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .pb-\\[34px\\], .x-commerce.pb-\\[34px\\] {
  padding-bottom: 34px;
}
.x-commerce .pb-\\[calc\\(env\\(safe-area-inset-bottom\\,0px\\)\\+24px\\)\\],.x-commerce.pb-\\[calc\\(env\\(safe-area-inset-bottom\\,0px\\)\\+24px\\)\\] {
  padding-bottom: calc(env(safe-area-inset-bottom,0px) + 24px);
}
.x-commerce .pb-\\[calc\\(max\\(var\\(--x-plan-tabs-page-bottom\\,0px\\)\\,env\\(safe-area-inset-bottom\\,0px\\)\\)\\+--spacing\\(3\\)\\)\\],.x-commerce.pb-\\[calc\\(max\\(var\\(--x-plan-tabs-page-bottom\\,0px\\)\\,env\\(safe-area-inset-bottom\\,0px\\)\\)\\+--spacing\\(3\\)\\)\\] {
  padding-bottom: calc(max(var(--x-plan-tabs-page-bottom,0px), env(safe-area-inset-bottom,0px)) + calc(var(--spacing, 0.25rem) * 3));
}
.x-commerce .pb-\\[calc\\(var\\(--x-plan-tabs-footer-h\\,0px\\)\\+--spacing\\(3\\)\\)\\],.x-commerce.pb-\\[calc\\(var\\(--x-plan-tabs-footer-h\\,0px\\)\\+--spacing\\(3\\)\\)\\] {
  padding-bottom: calc(var(--x-plan-tabs-footer-h,0px) + calc(var(--spacing, 0.25rem) * 3));
}
.x-commerce .pb-\\[env\\(safe-area-inset-bottom\\,0px\\)\\],.x-commerce.pb-\\[env\\(safe-area-inset-bottom\\,0px\\)\\] {
  padding-bottom: env(safe-area-inset-bottom,0px);
}
.x-commerce .pb-\\[max\\(1rem\\,env\\(safe-area-inset-bottom\\,0px\\)\\)\\],.x-commerce.pb-\\[max\\(1rem\\,env\\(safe-area-inset-bottom\\,0px\\)\\)\\] {
  padding-bottom: max(1rem, env(safe-area-inset-bottom,0px));
}
.x-commerce .pl-10, .x-commerce.pl-10 {
  padding-left: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .pl-\\[env\\(safe-area-inset-left\\,0px\\)\\],.x-commerce.pl-\\[env\\(safe-area-inset-left\\,0px\\)\\] {
  padding-left: env(safe-area-inset-left,0px);
}
.x-commerce .pl-\\[max\\(16px\\,env\\(safe-area-inset-left\\,0px\\)\\)\\],.x-commerce.pl-\\[max\\(16px\\,env\\(safe-area-inset-left\\,0px\\)\\)\\] {
  padding-left: max(16px, env(safe-area-inset-left,0px));
}
.x-commerce .pl-\\[max\\(24px\\,env\\(safe-area-inset-left\\,0px\\)\\)\\],.x-commerce.pl-\\[max\\(24px\\,env\\(safe-area-inset-left\\,0px\\)\\)\\] {
  padding-left: max(24px, env(safe-area-inset-left,0px));
}
.x-commerce .text-center, .x-commerce.text-center {
  text-align: center;
}
.x-commerce .text-end, .x-commerce.text-end {
  text-align: end;
}
.x-commerce .text-justify, .x-commerce.text-justify {
  text-align: justify;
}
.x-commerce .text-left, .x-commerce.text-left {
  text-align: left;
}
.x-commerce .text-start, .x-commerce.text-start {
  text-align: start;
}
.x-commerce .align-\\[-0\\.08em\\], .x-commerce.align-\\[-0\\.08em\\] {
  vertical-align: -0.08em;
}
.x-commerce .align-middle, .x-commerce.align-middle {
  vertical-align: middle;
}
.x-commerce .\\[font-family\\:-apple-system\\,BlinkMacSystemFont\\,\\'SF_Pro\\'\\,\\'SF_Pro_Text\\'\\,system-ui\\,sans-serif\\],.x-commerce.\\[font-family\\:-apple-system\\,BlinkMacSystemFont\\,\\'SF_Pro\\'\\,\\'SF_Pro_Text\\'\\,system-ui\\,sans-serif\\] {
  font-family: -apple-system,BlinkMacSystemFont,'SF Pro','SF Pro Text',system-ui,sans-serif;
}
.x-commerce .\\[font-family\\:var\\(--x-font-sans\\)\\], .x-commerce.\\[font-family\\:var\\(--x-font-sans\\)\\] {
  font-family: var(--x-font-sans);
}
.x-commerce .text-body, .x-commerce.text-body {
  font-size: calc(15 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(20 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-headline1, .x-commerce.text-headline1 {
  font-size: calc(20 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(24 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-headline2, .x-commerce.text-headline2 {
  font-size: calc(17 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(20 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-sm, .x-commerce.text-sm {
  font-size: var(--text-sm, 0.875rem);
  line-height: var(--tw-leading, var(--text-sm--line-height, calc(1.25 / 0.875)));
}
.x-commerce .text-subtext1, .x-commerce.text-subtext1 {
  font-size: calc(14 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(16 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-subtext2, .x-commerce.text-subtext2 {
  font-size: calc(13 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(16 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-subtext3, .x-commerce.text-subtext3 {
  font-size: calc(11 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(12 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-title1, .x-commerce.text-title1 {
  font-size: calc(34 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(40 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-title2, .x-commerce.text-title2 {
  font-size: calc(30 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(36 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-title3, .x-commerce.text-title3 {
  font-size: calc(26 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(32 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-title4, .x-commerce.text-title4 {
  font-size: calc(23 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(28 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-xs, .x-commerce.text-xs {
  font-size: var(--text-xs, 0.75rem);
  line-height: var(--tw-leading, var(--text-xs--line-height, calc(1 / 0.75)));
}
.x-commerce .text-\\[10px\\], .x-commerce.text-\\[10px\\] {
  font-size: 10px;
}
.x-commerce .text-\\[11px\\], .x-commerce.text-\\[11px\\] {
  font-size: 11px;
}
.x-commerce .text-\\[12px\\], .x-commerce.text-\\[12px\\] {
  font-size: 12px;
}
.x-commerce .text-\\[13px\\], .x-commerce.text-\\[13px\\] {
  font-size: 13px;
}
.x-commerce .text-\\[14px\\], .x-commerce.text-\\[14px\\] {
  font-size: 14px;
}
.x-commerce .text-\\[15px\\], .x-commerce.text-\\[15px\\] {
  font-size: 15px;
}
.x-commerce .text-\\[16px\\], .x-commerce.text-\\[16px\\] {
  font-size: 16px;
}
.x-commerce .text-\\[17px\\], .x-commerce.text-\\[17px\\] {
  font-size: 17px;
}
.x-commerce .text-\\[18px\\], .x-commerce.text-\\[18px\\] {
  font-size: 18px;
}
.x-commerce .text-\\[20px\\], .x-commerce.text-\\[20px\\] {
  font-size: 20px;
}
.x-commerce .text-\\[22px\\], .x-commerce.text-\\[22px\\] {
  font-size: 22px;
}
.x-commerce .text-\\[24px\\], .x-commerce.text-\\[24px\\] {
  font-size: 24px;
}
.x-commerce .text-\\[28px\\], .x-commerce.text-\\[28px\\] {
  font-size: 28px;
}
.x-commerce .text-\\[32px\\], .x-commerce.text-\\[32px\\] {
  font-size: 32px;
}
.x-commerce .text-\\[44px\\], .x-commerce.text-\\[44px\\] {
  font-size: 44px;
}
.x-commerce .text-\\[length\\:inherit\\], .x-commerce.text-\\[length\\:inherit\\] {
  font-size: inherit;
}
.x-commerce .leading-4, .x-commerce.leading-4 {
  --tw-leading: calc(var(--spacing, 0.25rem) * 4);
  line-height: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .leading-5, .x-commerce.leading-5 {
  --tw-leading: calc(var(--spacing, 0.25rem) * 5);
  line-height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .leading-6, .x-commerce.leading-6 {
  --tw-leading: calc(var(--spacing, 0.25rem) * 6);
  line-height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .leading-7, .x-commerce.leading-7 {
  --tw-leading: calc(var(--spacing, 0.25rem) * 7);
  line-height: calc(var(--spacing, 0.25rem) * 7);
}
.x-commerce .leading-8, .x-commerce.leading-8 {
  --tw-leading: calc(var(--spacing, 0.25rem) * 8);
  line-height: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .leading-\\[1\\.2\\], .x-commerce.leading-\\[1\\.2\\] {
  --tw-leading: 1.2;
  line-height: 1.2;
}
.x-commerce .leading-\\[1\\.3\\], .x-commerce.leading-\\[1\\.3\\] {
  --tw-leading: 1.3;
  line-height: 1.3;
}
.x-commerce .leading-\\[1\\.15\\], .x-commerce.leading-\\[1\\.15\\] {
  --tw-leading: 1.15;
  line-height: 1.15;
}
.x-commerce .leading-\\[13px\\], .x-commerce.leading-\\[13px\\] {
  --tw-leading: 13px;
  line-height: 13px;
}
.x-commerce .leading-\\[14px\\], .x-commerce.leading-\\[14px\\] {
  --tw-leading: 14px;
  line-height: 14px;
}
.x-commerce .leading-\\[17\\.895px\\], .x-commerce.leading-\\[17\\.895px\\] {
  --tw-leading: 17.895px;
  line-height: 17.895px;
}
.x-commerce .leading-\\[18px\\], .x-commerce.leading-\\[18px\\] {
  --tw-leading: 18px;
  line-height: 18px;
}
.x-commerce .leading-\\[19px\\], .x-commerce.leading-\\[19px\\] {
  --tw-leading: 19px;
  line-height: 19px;
}
.x-commerce .leading-\\[22px\\], .x-commerce.leading-\\[22px\\] {
  --tw-leading: 22px;
  line-height: 22px;
}
.x-commerce .leading-\\[23\\.86px\\], .x-commerce.leading-\\[23\\.86px\\] {
  --tw-leading: 23.86px;
  line-height: 23.86px;
}
.x-commerce .leading-\\[25px\\], .x-commerce.leading-\\[25px\\] {
  --tw-leading: 25px;
  line-height: 25px;
}
.x-commerce .leading-\\[28px\\], .x-commerce.leading-\\[28px\\] {
  --tw-leading: 28px;
  line-height: 28px;
}
.x-commerce .leading-\\[34px\\], .x-commerce.leading-\\[34px\\] {
  --tw-leading: 34px;
  line-height: 34px;
}
.x-commerce .leading-none, .x-commerce.leading-none {
  --tw-leading: 1;
  line-height: 1;
}
.x-commerce .font-\\[510\\], .x-commerce.font-\\[510\\] {
  --tw-font-weight: 510;
  font-weight: 510;
}
.x-commerce .font-\\[590\\], .x-commerce.font-\\[590\\] {
  --tw-font-weight: 590;
  font-weight: 590;
}
.x-commerce .font-\\[weight\\:inherit\\], .x-commerce.font-\\[weight\\:inherit\\] {
  --tw-font-weight: inherit;
  font-weight: inherit;
}
.x-commerce .font-bold, .x-commerce.font-bold {
  --tw-font-weight: var(--font-weight-bold, 700);
  font-weight: var(--font-weight-bold, 700);
}
.x-commerce .font-extrabold, .x-commerce.font-extrabold {
  --tw-font-weight: var(--font-weight-extrabold, 800);
  font-weight: var(--font-weight-extrabold, 800);
}
.x-commerce .font-medium, .x-commerce.font-medium {
  --tw-font-weight: var(--font-weight-medium, 500);
  font-weight: var(--font-weight-medium, 500);
}
.x-commerce .font-normal, .x-commerce.font-normal {
  --tw-font-weight: var(--font-weight-normal, 400);
  font-weight: var(--font-weight-normal, 400);
}
.x-commerce .font-semibold, .x-commerce.font-semibold {
  --tw-font-weight: var(--font-weight-semibold, 600);
  font-weight: var(--font-weight-semibold, 600);
}
.x-commerce .tracking-\\[-0\\.02em\\], .x-commerce.tracking-\\[-0\\.02em\\] {
  --tw-tracking: -0.02em;
  letter-spacing: -0.02em;
}
.x-commerce .tracking-\\[-0\\.004em\\], .x-commerce.tracking-\\[-0\\.004em\\] {
  --tw-tracking: -0.004em;
  letter-spacing: -0.004em;
}
.x-commerce .tracking-\\[-0\\.4px\\], .x-commerce.tracking-\\[-0\\.4px\\] {
  --tw-tracking: -0.4px;
  letter-spacing: -0.4px;
}
.x-commerce .tracking-\\[-0\\.005em\\], .x-commerce.tracking-\\[-0\\.005em\\] {
  --tw-tracking: -0.005em;
  letter-spacing: -0.005em;
}
.x-commerce .tracking-\\[-0\\.08px\\], .x-commerce.tracking-\\[-0\\.08px\\] {
  --tw-tracking: -0.08px;
  letter-spacing: -0.08px;
}
.x-commerce .tracking-\\[-0\\.12px\\], .x-commerce.tracking-\\[-0\\.12px\\] {
  --tw-tracking: -0.12px;
  letter-spacing: -0.12px;
}
.x-commerce .tracking-\\[-0\\.15px\\], .x-commerce.tracking-\\[-0\\.15px\\] {
  --tw-tracking: -0.15px;
  letter-spacing: -0.15px;
}
.x-commerce .tracking-\\[-0\\.26px\\], .x-commerce.tracking-\\[-0\\.26px\\] {
  --tw-tracking: -0.26px;
  letter-spacing: -0.26px;
}
.x-commerce .tracking-\\[-0\\.38px\\], .x-commerce.tracking-\\[-0\\.38px\\] {
  --tw-tracking: -0.38px;
  letter-spacing: -0.38px;
}
.x-commerce .tracking-\\[-0\\.46px\\], .x-commerce.tracking-\\[-0\\.46px\\] {
  --tw-tracking: -0.46px;
  letter-spacing: -0.46px;
}
.x-commerce .tracking-\\[-0\\.085px\\], .x-commerce.tracking-\\[-0\\.085px\\] {
  --tw-tracking: -0.085px;
  letter-spacing: -0.085px;
}
.x-commerce .tracking-\\[0\\.2px\\], .x-commerce.tracking-\\[0\\.2px\\] {
  --tw-tracking: 0.2px;
  letter-spacing: 0.2px;
}
.x-commerce .tracking-\\[0\\.06px\\], .x-commerce.tracking-\\[0\\.06px\\] {
  --tw-tracking: 0.06px;
  letter-spacing: 0.06px;
}
.x-commerce .tracking-\\[0\\.12px\\], .x-commerce.tracking-\\[0\\.12px\\] {
  --tw-tracking: 0.12px;
  letter-spacing: 0.12px;
}
.x-commerce .tracking-\\[0\\.15px\\], .x-commerce.tracking-\\[0\\.15px\\] {
  --tw-tracking: 0.15px;
  letter-spacing: 0.15px;
}
.x-commerce .tracking-\\[0\\.16em\\], .x-commerce.tracking-\\[0\\.16em\\] {
  --tw-tracking: 0.16em;
  letter-spacing: 0.16em;
}
.x-commerce .tracking-\\[0\\.16px\\], .x-commerce.tracking-\\[0\\.16px\\] {
  --tw-tracking: 0.16px;
  letter-spacing: 0.16px;
}
.x-commerce .tracking-\\[0\\.23px\\], .x-commerce.tracking-\\[0\\.23px\\] {
  --tw-tracking: 0.23px;
  letter-spacing: 0.23px;
}
.x-commerce .tracking-\\[0\\.31px\\], .x-commerce.tracking-\\[0\\.31px\\] {
  --tw-tracking: 0.31px;
  letter-spacing: 0.31px;
}
.x-commerce .tracking-\\[0\\.35px\\], .x-commerce.tracking-\\[0\\.35px\\] {
  --tw-tracking: 0.35px;
  letter-spacing: 0.35px;
}
.x-commerce .tracking-\\[0\\.43px\\], .x-commerce.tracking-\\[0\\.43px\\] {
  --tw-tracking: 0.43px;
  letter-spacing: 0.43px;
}
.x-commerce .tracking-\\[0\\.44px\\], .x-commerce.tracking-\\[0\\.44px\\] {
  --tw-tracking: 0.44px;
  letter-spacing: 0.44px;
}
.x-commerce .tracking-\\[0\\.47px\\], .x-commerce.tracking-\\[0\\.47px\\] {
  --tw-tracking: 0.47px;
  letter-spacing: 0.47px;
}
.x-commerce .text-pretty, .x-commerce.text-pretty {
  text-wrap: pretty;
}
.x-commerce .break-words, .x-commerce.break-words {
  overflow-wrap: break-word;
}
.x-commerce .wrap-anywhere, .x-commerce.wrap-anywhere {
  overflow-wrap: anywhere;
}
.x-commerce .wrap-break-word, .x-commerce.wrap-break-word {
  overflow-wrap: break-word;
}
.x-commerce .break-all, .x-commerce.break-all {
  word-break: break-all;
}
.x-commerce .whitespace-normal, .x-commerce.whitespace-normal {
  white-space: normal;
}
.x-commerce .whitespace-nowrap, .x-commerce.whitespace-nowrap {
  white-space: nowrap;
}
.x-commerce .whitespace-pre, .x-commerce.whitespace-pre {
  white-space: pre;
}
.x-commerce .whitespace-pre-wrap, .x-commerce.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.x-commerce .text-\\[\\#1a1a1a\\], .x-commerce.text-\\[\\#1a1a1a\\] {
  color: #1a1a1a;
}
.x-commerce .text-\\[\\#3c4043\\], .x-commerce.text-\\[\\#3c4043\\] {
  color: #3c4043;
}
.x-commerce .text-\\[\\#5e5e5e\\], .x-commerce.text-\\[\\#5e5e5e\\] {
  color: #5e5e5e;
}
.x-commerce .text-\\[\\#333\\], .x-commerce.text-\\[\\#333\\] {
  color: #333;
}
.x-commerce .text-\\[\\#0890ff\\], .x-commerce.text-\\[\\#0890ff\\] {
  color: #0890ff;
}
.x-commerce .text-\\[\\#003087\\], .x-commerce.text-\\[\\#003087\\] {
  color: #003087;
}
.x-commerce .text-\\[\\#202124\\], .x-commerce.text-\\[\\#202124\\] {
  color: #202124;
}
.x-commerce .text-\\[\\#b42318\\], .x-commerce.text-\\[\\#b42318\\] {
  color: #b42318;
}
.x-commerce .text-\\[\\#d93025\\], .x-commerce.text-\\[\\#d93025\\] {
  color: #d93025;
}
.x-commerce .text-\\[\\#f5f5f7\\], .x-commerce.text-\\[\\#f5f5f7\\] {
  color: #f5f5f7;
}
.x-commerce .text-\\[\\#fcfcfc\\], .x-commerce.text-\\[\\#fcfcfc\\] {
  color: #fcfcfc;
}
.x-commerce .text-\\[color\\:inherit\\], .x-commerce.text-\\[color\\:inherit\\] {
  color: inherit;
}
.x-commerce .text-\\[var\\(--x-bg-primary\\)\\], .x-commerce.text-\\[var\\(--x-bg-primary\\)\\] {
  color: var(--x-bg-primary);
}
.x-commerce .text-\\[var\\(--x-fg-destructive\\)\\]\\!, .x-commerce.text-\\[var\\(--x-fg-destructive\\)\\]\\! {
  color: var(--x-fg-destructive) !important;
}
.x-commerce .text-black, .x-commerce.text-black {
  color: var(--x-black);
}
.x-commerce .text-black-70, .x-commerce.text-black-70 {
  color: var(--x-black-70);
}
.x-commerce .text-blue-500, .x-commerce.text-blue-500 {
  color: var(--x-blue-500);
}
.x-commerce .text-blue-600, .x-commerce.text-blue-600 {
  color: var(--x-blue-600);
}
.x-commerce .text-brand, .x-commerce.text-brand {
  color: var(--x-fg-brand);
}
.x-commerce .text-destructive, .x-commerce.text-destructive {
  color: var(--x-fg-destructive);
}
.x-commerce .text-fg-alpha-10, .x-commerce.text-fg-alpha-10 {
  color: var(--x-fg-alpha-10);
}
.x-commerce .text-inherit, .x-commerce.text-inherit {
  color: inherit;
}
.x-commerce .text-inverted, .x-commerce.text-inverted {
  color: var(--x-fg-inverted);
}
.x-commerce .text-on-color, .x-commerce.text-on-color {
  color: var(--x-fg-on-color);
}
.x-commerce .text-plum-500, .x-commerce.text-plum-500 {
  color: var(--x-plum-500);
}
.x-commerce .text-primary, .x-commerce.text-primary {
  color: var(--x-fg-primary);
}
.x-commerce .text-primary\\/70, .x-commerce.text-primary\\/70 {
  color: var(--x-fg-primary);
  @supports (color: color-mix(in lab, red, red)) {
    color: color-mix(in oklab, var(--x-fg-primary) 70%, transparent);
  }
}
.x-commerce .text-red-400, .x-commerce.text-red-400 {
  color: var(--x-red-400);
}
.x-commerce .text-secondary, .x-commerce.text-secondary {
  color: var(--x-fg-secondary);
}
.x-commerce .text-success, .x-commerce.text-success {
  color: var(--x-fg-success);
}
.x-commerce .text-teal-500, .x-commerce.text-teal-500 {
  color: var(--x-teal-500);
}
.x-commerce .text-tertiary, .x-commerce.text-tertiary {
  color: var(--x-fg-tertiary);
}
.x-commerce .text-transparent, .x-commerce.text-transparent {
  color: transparent;
}
.x-commerce .text-warning, .x-commerce.text-warning {
  color: var(--x-fg-warning);
}
.x-commerce .text-white, .x-commerce.text-white {
  color: var(--x-white);
}
.x-commerce .text-white-70, .x-commerce.text-white-70 {
  color: var(--x-white-70);
}
.x-commerce .capitalize, .x-commerce.capitalize {
  text-transform: capitalize;
}
.x-commerce .lowercase, .x-commerce.lowercase {
  text-transform: lowercase;
}
.x-commerce .uppercase, .x-commerce.uppercase {
  text-transform: uppercase;
}
.x-commerce .italic, .x-commerce.italic {
  font-style: italic;
}
.x-commerce .tabular-nums, .x-commerce.tabular-nums {
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
}
.x-commerce .line-through, .x-commerce.line-through {
  text-decoration-line: line-through;
}
.x-commerce .underline, .x-commerce.underline {
  text-decoration-line: underline;
}
.x-commerce .antialiased, .x-commerce.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.x-commerce .opacity-0, .x-commerce.opacity-0 {
  opacity: 0%;
}
.x-commerce .opacity-25, .x-commerce.opacity-25 {
  opacity: 25%;
}
.x-commerce .opacity-40, .x-commerce.opacity-40 {
  opacity: 40%;
}
.x-commerce .opacity-50, .x-commerce.opacity-50 {
  opacity: 50%;
}
.x-commerce .opacity-60, .x-commerce.opacity-60 {
  opacity: 60%;
}
.x-commerce .opacity-70, .x-commerce.opacity-70 {
  opacity: 70%;
}
.x-commerce .opacity-75, .x-commerce.opacity-75 {
  opacity: 75%;
}
.x-commerce .opacity-100, .x-commerce.opacity-100 {
  opacity: 100%;
}
.x-commerce .mix-blend-soft-light, .x-commerce.mix-blend-soft-light {
  mix-blend-mode: soft-light;
}
.x-commerce .shadow, .x-commerce.shadow {
  --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-2xl, .x-commerce.shadow-2xl {
  --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, rgb(0 0 0 / 0.25));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_0_0\\.3px_rgba\\(0\\,0\\,0\\,0\\.16\\)\\,0_23px_20px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\,0_7px_9px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\],.x-commerce.shadow-\\[0_0_0\\.3px_rgba\\(0\\,0\\,0\\,0\\.16\\)\\,0_23px_20px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\,0_7px_9px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\] {
  --tw-shadow: 0 0 0.3px var(--tw-shadow-color, rgba(0,0,0,0.16)), 0 23px 20px var(--tw-shadow-color, rgba(0,0,0,0.08)), 0 7px 9px var(--tw-shadow-color, rgba(0,0,0,0.12));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_0_0_0_transparent\\], .x-commerce.shadow-\\[0_0_0_0_transparent\\] {
  --tw-shadow: 0 0 0 0 var(--tw-shadow-color, transparent);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_0_2px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\],.x-commerce.shadow-\\[0_0_2px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\] {
  --tw-shadow: 0 0 2px var(--tw-shadow-color, rgba(0,0,0,0.06));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_0_12px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\],.x-commerce.shadow-\\[0_0_12px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\] {
  --tw-shadow: 0 0 12px var(--tw-shadow-color, rgba(0,0,0,0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\],.x-commerce.shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\] {
  --tw-shadow: 0 1px 2px var(--tw-shadow-color, rgba(0,0,0,0.08));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_2px_6px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\],.x-commerce.shadow-\\[0_2px_6px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\] {
  --tw-shadow: 0 2px 6px var(--tw-shadow-color, rgba(0,0,0,0.12));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_2px_8px_rgba\\(0\\,0\\,0\\,0\\.04\\)\\],.x-commerce.shadow-\\[0_2px_8px_rgba\\(0\\,0\\,0\\,0\\.04\\)\\] {
  --tw-shadow: 0 2px 8px var(--tw-shadow-color, rgba(0,0,0,0.04));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_2px_10px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\],.x-commerce.shadow-\\[0_2px_10px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\] {
  --tw-shadow: 0 2px 10px var(--tw-shadow-color, rgba(0,0,0,0.06));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_4px_24px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\],.x-commerce.shadow-\\[0_4px_24px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\] {
  --tw-shadow: 0 4px 24px var(--tw-shadow-color, rgba(0,0,0,0.12));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_40px_0_0_var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)\\],.x-commerce.shadow-\\[0_40px_0_0_var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)\\] {
  --tw-shadow: 0 40px 0 0 var(--tw-shadow-color, var(--x-modal-bg,var(--x-bg-primary)));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0px_0px_0px_1px_rgba\\(20\\,20\\,20\\,0\\.08\\)\\,0px_0px_4px_0px_rgba\\(20\\,20\\,20\\,0\\.07\\)\\,0px_16px_24px_0px_rgba\\(20\\,20\\,20\\,0\\.07\\)\\],.x-commerce.shadow-\\[0px_0px_0px_1px_rgba\\(20\\,20\\,20\\,0\\.08\\)\\,0px_0px_4px_0px_rgba\\(20\\,20\\,20\\,0\\.07\\)\\,0px_16px_24px_0px_rgba\\(20\\,20\\,20\\,0\\.07\\)\\] {
  --tw-shadow: 0px 0px 0px 1px var(--tw-shadow-color, rgba(20,20,20,0.08)), 0px 0px 4px 0px var(--tw-shadow-color, rgba(20,20,20,0.07)), 0px 16px 24px 0px var(--tw-shadow-color, rgba(20,20,20,0.07));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0px_0px_12px_0px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\],.x-commerce.shadow-\\[0px_0px_12px_0px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\] {
  --tw-shadow: 0px 0px 12px 0px var(--tw-shadow-color, rgba(0,0,0,0.2));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0px_0px_16px_0px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\,0px_10\\.154px_32\\.307px_1\\.846px_rgba\\(0\\,0\\,0\\,0\\.36\\)\\,0px_0px_0px_0\\.231px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\],.x-commerce.shadow-\\[0px_0px_16px_0px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\,0px_10\\.154px_32\\.307px_1\\.846px_rgba\\(0\\,0\\,0\\,0\\.36\\)\\,0px_0px_0px_0\\.231px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\] {
  --tw-shadow: 0px 0px 16px 0px var(--tw-shadow-color, rgba(0,0,0,0.12)), 0px 10.154px 32.307px 1.846px var(--tw-shadow-color, rgba(0,0,0,0.36)), 0px 0px 0px 0.231px var(--tw-shadow-color, rgba(0,0,0,0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0px_0px_16px_0px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\],.x-commerce.shadow-\\[0px_0px_16px_0px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\] {
  --tw-shadow: 0px 0px 16px 0px var(--tw-shadow-color, rgba(0,0,0,0.12));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0px_1px_2px_0px_rgba\\(0\\,0\\,0\\,0\\.15\\)\\,0px_0px_8px_0px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\],.x-commerce.shadow-\\[0px_1px_2px_0px_rgba\\(0\\,0\\,0\\,0\\.15\\)\\,0px_0px_8px_0px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\] {
  --tw-shadow: 0px 1px 2px 0px var(--tw-shadow-color, rgba(0,0,0,0.15)), 0px 0px 8px 0px var(--tw-shadow-color, rgba(0,0,0,0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-lg, .x-commerce.shadow-lg {
  --tw-shadow: var(--x-shadow-lg);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-none, .x-commerce.shadow-none {
  --tw-shadow: 0 0 #0000;
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-sm, .x-commerce.shadow-sm {
  --tw-shadow: var(--x-shadow-sm);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-xs, .x-commerce.shadow-xs {
  --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .ring, .x-commerce.ring {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .ring-1, .x-commerce.ring-1 {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .ring-2, .x-commerce.ring-2 {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .ring-\\[\\#0890ff\\], .x-commerce.ring-\\[\\#0890ff\\] {
  --tw-ring-color: #0890ff;
}
.x-commerce .ring-black\\/10, .x-commerce.ring-black\\/10 {
  --tw-ring-color: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-ring-color: color-mix(in oklab, var(--x-black) 10%, transparent);
  }
}
.x-commerce .ring-blue-500, .x-commerce.ring-blue-500 {
  --tw-ring-color: var(--x-blue-500);
}
.x-commerce .ring-fg-alpha-15, .x-commerce.ring-fg-alpha-15 {
  --tw-ring-color: var(--x-fg-alpha-15);
}
.x-commerce .outline-hidden, .x-commerce.outline-hidden {
  --tw-outline-style: none;
  outline-style: none;
  @media (forced-colors: active) {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
}
.x-commerce .x-link:focus-visible, .x-commerce.x-link:focus-visible {
  outline-width: 1px;
  outline-style: var(--tw-outline-style);
  outline-width: 2px;
  outline-offset: 2px;
}
.x-commerce .outline, .x-commerce.outline {
  outline-style: var(--tw-outline-style);
  outline-width: 1px;
}
.x-commerce .blur, .x-commerce.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
}
.x-commerce .drop-shadow-\\[0px_0px_6px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\],.x-commerce.drop-shadow-\\[0px_0px_6px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\] {
  --tw-drop-shadow-size: drop-shadow(0px 0px 6px var(--tw-drop-shadow-color, rgba(0,0,0,0.2)));
  --tw-drop-shadow: var(--tw-drop-shadow-size);
  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
}
.x-commerce .filter, .x-commerce.filter {
  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
}
.x-commerce .backdrop-blur-\\[6px\\], .x-commerce.backdrop-blur-\\[6px\\] {
  --tw-backdrop-blur: blur(6px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
}
.x-commerce .backdrop-blur-lg, .x-commerce.backdrop-blur-lg {
  --tw-backdrop-blur: blur(var(--blur-lg, 16px));
  -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
}
.x-commerce .backdrop-blur-xs, .x-commerce.backdrop-blur-xs {
  --tw-backdrop-blur: blur(var(--blur-xs, 4px));
  -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
}
.x-commerce .transition, .x-commerce.transition {
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[background-color\\], .x-commerce.transition-\\[background-color\\] {
  transition-property: background-color;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[color\\,border-color\\,box-shadow\\,background-color\\],.x-commerce.transition-\\[color\\,border-color\\,box-shadow\\,background-color\\] {
  transition-property: color,border-color,box-shadow,background-color;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[grid-template-rows\\,margin\\,opacity\\],.x-commerce.transition-\\[grid-template-rows\\,margin\\,opacity\\] {
  transition-property: grid-template-rows,margin,opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[grid-template-rows\\], .x-commerce.transition-\\[grid-template-rows\\] {
  transition-property: grid-template-rows;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[height\\], .x-commerce.transition-\\[height\\] {
  transition-property: height;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[opacity\\,scale\\],.x-commerce.transition-\\[opacity\\,scale\\] {
  transition-property: opacity,scale;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[scale\\,opacity\\],.x-commerce.transition-\\[scale\\,opacity\\] {
  transition-property: scale,opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[scale\\,rotate\\],.x-commerce.transition-\\[scale\\,rotate\\] {
  transition-property: scale,rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[transform\\,opacity\\],.x-commerce.transition-\\[transform\\,opacity\\] {
  transition-property: transform,opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[translate\\,rotate\\],.x-commerce.transition-\\[translate\\,rotate\\] {
  transition-property: translate,rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-all, .x-commerce.transition-all {
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-colors, .x-commerce.transition-colors {
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-opacity, .x-commerce.transition-opacity {
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-transform, .x-commerce.transition-transform {
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-none, .x-commerce.transition-none {
  transition-property: none;
}
.x-commerce .delay-0, .x-commerce.delay-0 {
  transition-delay: 0ms;
}
.x-commerce .delay-\\[60ms\\], .x-commerce.delay-\\[60ms\\] {
  transition-delay: 60ms;
}
.x-commerce .duration-\\(--x-commerce-motion-duration\\), .x-commerce.duration-\\(--x-commerce-motion-duration\\) {
  --tw-duration: var(--x-commerce-motion-duration);
  transition-duration: var(--x-commerce-motion-duration);
}
.x-commerce .duration-100, .x-commerce.duration-100 {
  --tw-duration: 100ms;
  transition-duration: 100ms;
}
.x-commerce .duration-150, .x-commerce.duration-150 {
  --tw-duration: 150ms;
  transition-duration: 150ms;
}
.x-commerce .duration-200, .x-commerce.duration-200 {
  --tw-duration: 200ms;
  transition-duration: 200ms;
}
.x-commerce .duration-300, .x-commerce.duration-300 {
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.x-commerce .duration-\\[400ms\\], .x-commerce.duration-\\[400ms\\] {
  --tw-duration: 400ms;
  transition-duration: 400ms;
}
.x-commerce .ease-\\(--x-commerce-motion-ease\\), .x-commerce.ease-\\(--x-commerce-motion-ease\\) {
  --tw-ease: var(--x-commerce-motion-ease);
  transition-timing-function: var(--x-commerce-motion-ease);
}
.x-commerce .ease-\\[cubic-bezier\\(0\\.2\\,1\\.15\\,0\\.4\\,1\\)\\],.x-commerce.ease-\\[cubic-bezier\\(0\\.2\\,1\\.15\\,0\\.4\\,1\\)\\] {
  --tw-ease: cubic-bezier(0.2,1.15,0.4,1);
  transition-timing-function: cubic-bezier(0.2,1.15,0.4,1);
}
.x-commerce .ease-\\[cubic-bezier\\(0\\.34\\,1\\.56\\,0\\.64\\,1\\)\\],.x-commerce.ease-\\[cubic-bezier\\(0\\.34\\,1\\.56\\,0\\.64\\,1\\)\\] {
  --tw-ease: cubic-bezier(0.34,1.56,0.64,1);
  transition-timing-function: cubic-bezier(0.34,1.56,0.64,1);
}
.x-commerce .ease-out, .x-commerce.ease-out {
  --tw-ease: var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
  transition-timing-function: var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
}
.x-commerce .\\[contain\\:layout\\], .x-commerce.\\[contain\\:layout\\] {
  contain: layout;
}
.x-commerce .\\[contain\\:size\\], .x-commerce.\\[contain\\:size\\] {
  contain: size;
}
.x-commerce .outline-none, .x-commerce.outline-none {
  --tw-outline-style: none;
  outline-style: none;
}
.x-commerce .select-none, .x-commerce.select-none {
  -webkit-user-select: none;
  user-select: none;
}
.x-commerce .\\[--flow-inset-top\\:env\\(safe-area-inset-top\\,0px\\)\\],.x-commerce.\\[--flow-inset-top\\:env\\(safe-area-inset-top\\,0px\\)\\] {
  --flow-inset-top: env(safe-area-inset-top,0px);
}
.x-commerce .\\[--x-btn-disabled-opacity\\:0\\.4\\], .x-commerce.\\[--x-btn-disabled-opacity\\:0\\.4\\] {
  --x-btn-disabled-opacity: 0.4;
}
.x-commerce .\\[--x-commerce-gutter\\:--spacing\\(3\\)\\], .x-commerce.\\[--x-commerce-gutter\\:--spacing\\(3\\)\\] {
  --x-commerce-gutter: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .\\[--x-commerce-gutter\\:1rem\\], .x-commerce.\\[--x-commerce-gutter\\:1rem\\] {
  --x-commerce-gutter: 1rem;
}
.x-commerce .\\[--x-commerce-plan-row-card\\:279px\\], .x-commerce.\\[--x-commerce-plan-row-card\\:279px\\] {
  --x-commerce-plan-row-card: 279px;
}
.x-commerce .\\[--x-commerce-surface-cap\\:100svh\\], .x-commerce.\\[--x-commerce-surface-cap\\:100svh\\] {
  --x-commerce-surface-cap: 100svh;
}
.x-commerce .\\[--x-modal-bg\\:var\\(--x-bg-modal\\)\\], .x-commerce.\\[--x-modal-bg\\:var\\(--x-bg-modal\\)\\] {
  --x-modal-bg: var(--x-bg-modal);
}
.x-commerce .\\[--x-modal-pad\\:--spacing\\(6\\)\\], .x-commerce.\\[--x-modal-pad\\:--spacing\\(6\\)\\] {
  --x-modal-pad: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .\\[--x-modal-pad\\:0px\\], .x-commerce.\\[--x-modal-pad\\:0px\\] {
  --x-modal-pad: 0px;
}
.x-commerce .\\[--x-number-flow-fade-out\\:calc\\(\\(1_-_var\\(--x-number-flow-fade\\)\\)_\\*_var\\(--x-number-flow-bleed\\)\\)\\], .x-commerce.\\[--x-number-flow-fade-out\\:calc\\(\\(1_-_var\\(--x-number-flow-fade\\)\\)_\\*_var\\(--x-number-flow-bleed\\)\\)\\] {
  --x-number-flow-fade-out: calc((1 - var(--x-number-flow-fade)) * var(--x-number-flow-bleed));
}
.x-commerce .\\[--x-plan-tabs-page-bottom\\:1rem\\], .x-commerce.\\[--x-plan-tabs-page-bottom\\:1rem\\] {
  --x-plan-tabs-page-bottom: 1rem;
}
.x-commerce .\\[--x-plan-tabs-page-bottom\\:34px\\], .x-commerce.\\[--x-plan-tabs-page-bottom\\:34px\\] {
  --x-plan-tabs-page-bottom: 34px;
}
.x-commerce .\\[--x-plan-tabs-page-bottom\\:env\\(safe-area-inset-bottom\\,0px\\)\\],.x-commerce.\\[--x-plan-tabs-page-bottom\\:env\\(safe-area-inset-bottom\\,0px\\)\\] {
  --x-plan-tabs-page-bottom: env(safe-area-inset-bottom,0px);
}
.x-commerce .\\[--x-plan-tabs-page-bottom\\:var\\(--x-modal-pad\\)\\], .x-commerce.\\[--x-plan-tabs-page-bottom\\:var\\(--x-modal-pad\\)\\] {
  --x-plan-tabs-page-bottom: var(--x-modal-pad);
}
.x-commerce .\\[--x-plan-tabs-page-x\\:1rem\\], .x-commerce.\\[--x-plan-tabs-page-x\\:1rem\\] {
  --x-plan-tabs-page-x: 1rem;
}
.x-commerce .\\[--x-plan-tabs-page-x\\:var\\(--x-modal-pad\\)\\], .x-commerce.\\[--x-plan-tabs-page-x\\:var\\(--x-modal-pad\\)\\] {
  --x-plan-tabs-page-x: var(--x-modal-pad);
}
.x-commerce .\\[--x-plan-tabs-page\\:var\\(--x-bg-primary\\)\\], .x-commerce.\\[--x-plan-tabs-page\\:var\\(--x-bg-primary\\)\\] {
  --x-plan-tabs-page: var(--x-bg-primary);
}
.x-commerce .\\[--x-safe-start\\:env\\(safe-area-inset-left\\,0px\\)\\],.x-commerce.\\[--x-safe-start\\:env\\(safe-area-inset-left\\,0px\\)\\] {
  --x-safe-start: env(safe-area-inset-left,0px);
}
.x-commerce .\\[--x-tab-pill-dir\\:1\\], .x-commerce.\\[--x-tab-pill-dir\\:1\\] {
  --x-tab-pill-dir: 1;
}
.x-commerce .\\[-webkit-mask-image\\:linear-gradient\\(to_bottom\\,black\\,transparent\\)\\],.x-commerce.\\[-webkit-mask-image\\:linear-gradient\\(to_bottom\\,black\\,transparent\\)\\] {
  -webkit-mask-image: linear-gradient(to bottom,black,transparent);
}
.x-commerce .\\[-webkit-mask-image\\:linear-gradient\\(to_top\\,black\\,transparent\\)\\],.x-commerce.\\[-webkit-mask-image\\:linear-gradient\\(to_top\\,black\\,transparent\\)\\] {
  -webkit-mask-image: linear-gradient(to top,black,transparent);
}
.x-commerce .\\[-webkit-touch-callout\\:none\\], .x-commerce.\\[-webkit-touch-callout\\:none\\] {
  -webkit-touch-callout: none;
}
.x-commerce .\\[grid-area\\:1\\/1\\], .x-commerce.\\[grid-area\\:1\\/1\\] {
  grid-area: 1/1;
}
.x-commerce .ring-inset, .x-commerce.ring-inset {
  --tw-ring-inset: inset;
}
.x-commerce :is(.\\*\\*\\:scroll-mt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+52px\\)\\] *),.x-commerce:is(.\\*\\*\\:scroll-mt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+52px\\)\\] *) {
  scroll-margin-top: calc(env(safe-area-inset-top,0px) + 52px);
}
.x-commerce .not-first\\:border-t:not(:first-child), .x-commerce.not-first\\:border-t:not(:first-child) {
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
}
.x-commerce .not-first\\:border-black\\/6:not(:first-child), .x-commerce.not-first\\:border-black\\/6:not(:first-child) {
  border-color: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-black) 6%, transparent);
  }
}
.x-commerce .not-first\\:pt-3:not(:first-child), .x-commerce.not-first\\:pt-3:not(:first-child) {
  padding-top: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .not-first\\:pt-3\\.5:not(:first-child), .x-commerce.not-first\\:pt-3\\.5:not(:first-child) {
  padding-top: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .not-has-\\[\\>\\[data-list-group\\]\\]\\:bg-black-04:not(:has( > [data-list-group])), .x-commerce.not-has-\\[\\>\\[data-list-group\\]\\]\\:bg-black-04:not(:has( > [data-list-group])) {
  background-color: var(--x-black-04);
}
.x-commerce .not-has-\\[\\>\\[data-list-group\\]\\]\\:p-1:not(:has( > [data-list-group])), .x-commerce.not-has-\\[\\>\\[data-list-group\\]\\]\\:p-1:not(:has( > [data-list-group])) {
  padding: var(--spacing, 0.25rem);
}
@media (hover: hover) {
  .x-commerce .group-hover\\:translate-x-0\\.5:is(:where(.group):hover *), .x-commerce.group-hover\\:translate-x-0\\.5:is(:where(.group):hover *) {
    --tw-translate-x: calc(var(--spacing, 0.25rem) * 0.5);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .group-hover\\:text-primary:is(:where(.group):hover *), .x-commerce.group-hover\\:text-primary:is(:where(.group):hover *) {
    color: var(--x-fg-primary);
  }
  .x-commerce .group-hover\\:underline:is(:where(.group):hover *), .x-commerce.group-hover\\:underline:is(:where(.group):hover *) {
    text-decoration-line: underline;
  }
}
.x-commerce .group-active\\:text-primary:is(:where(.group):active *), .x-commerce.group-active\\:text-primary:is(:where(.group):active *) {
  color: var(--x-fg-primary);
}
.x-commerce .group-active\\:underline:is(:where(.group):active *), .x-commerce.group-active\\:underline:is(:where(.group):active *) {
  text-decoration-line: underline;
}
.x-commerce .group-data-checked\\:scale-100:is(:where(.group)[data-checked] *), .x-commerce.group-data-checked\\:scale-100:is(:where(.group)[data-checked] *) {
  --tw-scale-x: 100%;
  --tw-scale-y: 100%;
  --tw-scale-z: 100%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .group-data-checked\\/tile\\:scale-100:is(:where(.group\\/tile)[data-checked] *), .x-commerce.group-data-checked\\/tile\\:scale-100:is(:where(.group\\/tile)[data-checked] *) {
  --tw-scale-x: 100%;
  --tw-scale-y: 100%;
  --tw-scale-z: 100%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .group-data-checked\\/tile\\:opacity-0:is(:where(.group\\/tile)[data-checked] *), .x-commerce.group-data-checked\\/tile\\:opacity-0:is(:where(.group\\/tile)[data-checked] *) {
  opacity: 0%;
}
.x-commerce .group-data-checked\\/tile\\:opacity-100:is(:where(.group\\/tile)[data-checked] *), .x-commerce.group-data-checked\\/tile\\:opacity-100:is(:where(.group\\/tile)[data-checked] *) {
  opacity: 100%;
}
.x-commerce .group-data-\\[checked\\]\\/switch\\:translate-x-\\[16px\\]:is(:where(.group\\/switch)[data-checked] *), .x-commerce.group-data-\\[checked\\]\\/switch\\:translate-x-\\[16px\\]:is(:where(.group\\/switch)[data-checked] *) {
  --tw-translate-x: 16px;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .group-data-\\[checked\\]\\/switch\\:translate-x-\\[23px\\]:is(:where(.group\\/switch)[data-checked] *), .x-commerce.group-data-\\[checked\\]\\/switch\\:translate-x-\\[23px\\]:is(:where(.group\\/switch)[data-checked] *) {
  --tw-translate-x: 23px;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .group-data-\\[checked\\]\\/switch\\:bg-blue-500:is(:where(.group\\/switch)[data-checked] *), .x-commerce.group-data-\\[checked\\]\\/switch\\:bg-blue-500:is(:where(.group\\/switch)[data-checked] *) {
  background-color: var(--x-blue-500);
}
.x-commerce .group-data-\\[checked\\]\\/switch\\:bg-green-500:is(:where(.group\\/switch)[data-checked] *), .x-commerce.group-data-\\[checked\\]\\/switch\\:bg-green-500:is(:where(.group\\/switch)[data-checked] *) {
  background-color: var(--x-green-500);
}
.x-commerce .group-data-\\[checked\\]\\/switch\\:bg-red-500:is(:where(.group\\/switch)[data-checked] *), .x-commerce.group-data-\\[checked\\]\\/switch\\:bg-red-500:is(:where(.group\\/switch)[data-checked] *) {
  background-color: var(--x-red-500);
}
.x-commerce .group-data-\\[scroll-fade\\=both\\]\\/surface\\:opacity-100:is(:where(.group\\/surface)[data-scroll-fade="both"] *), .x-commerce.group-data-\\[scroll-fade\\=both\\]\\/surface\\:opacity-100:is(:where(.group\\/surface)[data-scroll-fade="both"] *) {
  opacity: 100%;
}
.x-commerce .group-data-\\[scroll-fade\\=end\\]\\/surface\\:opacity-100:is(:where(.group\\/surface)[data-scroll-fade="end"] *), .x-commerce.group-data-\\[scroll-fade\\=end\\]\\/surface\\:opacity-100:is(:where(.group\\/surface)[data-scroll-fade="end"] *) {
  opacity: 100%;
}
.x-commerce .group-data-\\[scroll-fade\\=start\\]\\/surface\\:opacity-100:is(:where(.group\\/surface)[data-scroll-fade="start"] *), .x-commerce.group-data-\\[scroll-fade\\=start\\]\\/surface\\:opacity-100:is(:where(.group\\/surface)[data-scroll-fade="start"] *) {
  opacity: 100%;
}
.x-commerce .peer-data-\\[scroll-fade\\=both\\]\\:opacity-100:is(:where(.peer)[data-scroll-fade="both"] ~ *), .x-commerce.peer-data-\\[scroll-fade\\=both\\]\\:opacity-100:is(:where(.peer)[data-scroll-fade="both"] ~ *) {
  opacity: 100%;
}
.x-commerce .peer-data-\\[scroll-fade\\=end\\]\\:opacity-100:is(:where(.peer)[data-scroll-fade="end"] ~ *), .x-commerce.peer-data-\\[scroll-fade\\=end\\]\\:opacity-100:is(:where(.peer)[data-scroll-fade="end"] ~ *) {
  opacity: 100%;
}
.x-commerce .peer-data-\\[scroll-fade\\=start\\]\\:opacity-100:is(:where(.peer)[data-scroll-fade="start"] ~ *), .x-commerce.peer-data-\\[scroll-fade\\=start\\]\\:opacity-100:is(:where(.peer)[data-scroll-fade="start"] ~ *) {
  opacity: 100%;
}
.x-commerce .placeholder\\:text-secondary::placeholder, .x-commerce.placeholder\\:text-secondary::placeholder {
  color: var(--x-fg-secondary);
}
.x-commerce .placeholder\\:text-tertiary::placeholder, .x-commerce.placeholder\\:text-tertiary::placeholder {
  color: var(--x-fg-tertiary);
}
.x-commerce .before\\:pointer-events-none::before, .x-commerce.before\\:pointer-events-none::before {
  content: var(--tw-content);
  pointer-events: none;
}
.x-commerce .before\\:absolute::before, .x-commerce.before\\:absolute::before {
  content: var(--tw-content);
  position: absolute;
}
.x-commerce .before\\:-inset-x-\\(--x-modal-pad\\)::before, .x-commerce.before\\:-inset-x-\\(--x-modal-pad\\)::before {
  content: var(--tw-content);
  inset-inline: calc(var(--x-modal-pad) * -1);
}
.x-commerce .before\\:-inset-x-3::before, .x-commerce.before\\:-inset-x-3::before {
  content: var(--tw-content);
  inset-inline: calc(var(--spacing, 0.25rem) * -3);
}
.x-commerce .before\\:inset-x-0::before, .x-commerce.before\\:inset-x-0::before {
  content: var(--tw-content);
  inset-inline: 0px;
}
.x-commerce .before\\:-top-\\(--x-modal-pad\\)::before, .x-commerce.before\\:-top-\\(--x-modal-pad\\)::before {
  content: var(--tw-content);
  top: calc(var(--x-modal-pad) * -1);
}
.x-commerce .before\\:-top-6::before, .x-commerce.before\\:-top-6::before {
  content: var(--tw-content);
  top: calc(var(--spacing, 0.25rem) * -6);
}
.x-commerce .before\\:-top-8::before, .x-commerce.before\\:-top-8::before {
  content: var(--tw-content);
  top: calc(var(--spacing, 0.25rem) * -8);
}
.x-commerce .before\\:-bottom-\\(--x-modal-pad\\)::before, .x-commerce.before\\:-bottom-\\(--x-modal-pad\\)::before {
  content: var(--tw-content);
  bottom: calc(var(--x-modal-pad) * -1);
}
.x-commerce .before\\:-bottom-3::before, .x-commerce.before\\:-bottom-3::before {
  content: var(--tw-content);
  bottom: calc(var(--spacing, 0.25rem) * -3);
}
.x-commerce .before\\:-bottom-8::before, .x-commerce.before\\:-bottom-8::before {
  content: var(--tw-content);
  bottom: calc(var(--spacing, 0.25rem) * -8);
}
.x-commerce .before\\:bottom-full::before, .x-commerce.before\\:bottom-full::before {
  content: var(--tw-content);
  bottom: 100%;
}
.x-commerce .before\\:-z-10::before, .x-commerce.before\\:-z-10::before {
  content: var(--tw-content);
  z-index: calc(10 * -1);
}
.x-commerce .before\\:hidden::before, .x-commerce.before\\:hidden::before {
  content: var(--tw-content);
  display: none;
}
.x-commerce .before\\:h-6::before, .x-commerce.before\\:h-6::before {
  content: var(--tw-content);
  height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .before\\:h-8::before, .x-commerce.before\\:h-8::before {
  content: var(--tw-content);
  height: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .before\\:h-14::before, .x-commerce.before\\:h-14::before {
  content: var(--tw-content);
  height: calc(var(--spacing, 0.25rem) * 14);
}
.x-commerce .before\\:h-screen::before, .x-commerce.before\\:h-screen::before {
  content: var(--tw-content);
  height: 100vh;
}
.x-commerce .before\\:bg-\\(--x-modal-bg\\)::before, .x-commerce.before\\:bg-\\(--x-modal-bg\\)::before {
  content: var(--tw-content);
  background-color: var(--x-modal-bg);
}
.x-commerce .before\\:bg-\\(--x-plan-tabs-page\\)::before, .x-commerce.before\\:bg-\\(--x-plan-tabs-page\\)::before {
  content: var(--tw-content);
  background-color: var(--x-plan-tabs-page);
}
.x-commerce .before\\:bg-modal::before, .x-commerce.before\\:bg-modal::before {
  content: var(--tw-content);
  background-color: var(--x-bg-modal);
}
.x-commerce .before\\:bg-primary::before, .x-commerce.before\\:bg-primary::before {
  content: var(--tw-content);
  background-color: var(--x-bg-primary);
}
.x-commerce .before\\:bg-linear-to-b::before, .x-commerce.before\\:bg-linear-to-b::before {
  content: var(--tw-content);
  --tw-gradient-position: to bottom;
  @supports (background-image: linear-gradient(in lab, red, red)) {
    --tw-gradient-position: to bottom in oklab;
  }
  background-image: linear-gradient(var(--tw-gradient-stops));
}
.x-commerce .before\\:bg-linear-to-t::before, .x-commerce.before\\:bg-linear-to-t::before {
  content: var(--tw-content);
  --tw-gradient-position: to top;
  @supports (background-image: linear-gradient(in lab, red, red)) {
    --tw-gradient-position: to top in oklab;
  }
  background-image: linear-gradient(var(--tw-gradient-stops));
}
.x-commerce .before\\:bg-\\[linear-gradient\\(to_bottom\\,transparent\\,var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)_--spacing\\(6\\)\\)\\]::before,.x-commerce.before\\:bg-\\[linear-gradient\\(to_bottom\\,transparent\\,var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)_--spacing\\(6\\)\\)\\]::before {
  content: var(--tw-content);
  background-image: linear-gradient(to bottom,transparent,var(--x-modal-bg,var(--x-bg-primary)) calc(var(--spacing, 0.25rem) * 6));
}
.x-commerce .before\\:from-\\(--x-modal-bg\\)::before, .x-commerce.before\\:from-\\(--x-modal-bg\\)::before {
  content: var(--tw-content);
  --tw-gradient-from: var(--x-modal-bg);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .before\\:from-\\[var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)\\]::before,.x-commerce.before\\:from-\\[var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)\\]::before {
  content: var(--tw-content);
  --tw-gradient-from: var(--x-modal-bg,var(--x-bg-primary));
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .before\\:to-transparent::before, .x-commerce.before\\:to-transparent::before {
  content: var(--tw-content);
  --tw-gradient-to: transparent;
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .before\\:mask-\\[linear-gradient\\(to_bottom\\,black_calc\\(100\\%-32px\\)\\,rgb\\(0_0_0\\/var\\(--x-modal-fade\\)\\)_calc\\(100\\%-32px\\)\\,transparent\\)\\]::before,.x-commerce.before\\:mask-\\[linear-gradient\\(to_bottom\\,black_calc\\(100\\%-32px\\)\\,rgb\\(0_0_0\\/var\\(--x-modal-fade\\)\\)_calc\\(100\\%-32px\\)\\,transparent\\)\\]::before {
  content: var(--tw-content);
  mask-image: linear-gradient(to bottom,black calc(100% - 32px),rgb(0 0 0/var(--x-modal-fade)) calc(100% - 32px),transparent);
}
.x-commerce .before\\:mask-\\[linear-gradient\\(to_top\\,black\\,transparent\\)\\]::before,.x-commerce.before\\:mask-\\[linear-gradient\\(to_top\\,black\\,transparent\\)\\]::before {
  content: var(--tw-content);
  mask-image: linear-gradient(to top,black,transparent);
}
.x-commerce .before\\:mask-\\[linear-gradient\\(to_top\\,black_calc\\(100\\%-32px\\)\\,rgb\\(0_0_0\\/var\\(--x-modal-fade\\)\\)_calc\\(100\\%-32px\\)\\,transparent\\)\\]::before,.x-commerce.before\\:mask-\\[linear-gradient\\(to_top\\,black_calc\\(100\\%-32px\\)\\,rgb\\(0_0_0\\/var\\(--x-modal-fade\\)\\)_calc\\(100\\%-32px\\)\\,transparent\\)\\]::before {
  content: var(--tw-content);
  mask-image: linear-gradient(to top,black calc(100% - 32px),rgb(0 0 0/var(--x-modal-fade)) calc(100% - 32px),transparent);
}
.x-commerce .before\\:opacity-0::before, .x-commerce.before\\:opacity-0::before {
  content: var(--tw-content);
  opacity: 0%;
}
.x-commerce .before\\:transition-opacity::before, .x-commerce.before\\:transition-opacity::before {
  content: var(--tw-content);
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .before\\:\\[transition-property\\:--x-modal-fade\\]::before, .x-commerce.before\\:\\[transition-property\\:--x-modal-fade\\]::before {
  content: var(--tw-content);
  transition-property: --x-modal-fade;
}
.x-commerce .before\\:duration-150::before, .x-commerce.before\\:duration-150::before {
  content: var(--tw-content);
  --tw-duration: 150ms;
  transition-duration: 150ms;
}
.x-commerce .before\\:ease-out::before, .x-commerce.before\\:ease-out::before {
  content: var(--tw-content);
  --tw-ease: var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
  transition-timing-function: var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
}
.x-commerce .before\\:content-\\[\\'\\'\\]::before, .x-commerce.before\\:content-\\[\\'\\'\\]::before {
  --tw-content: '';
  content: var(--tw-content);
}
.x-commerce .before\\:content-\\[\\'\\\\2060\\'\\]::before, .x-commerce.before\\:content-\\[\\'\\\\2060\\'\\]::before {
  --tw-content: '\\2060';
  content: var(--tw-content);
}
.x-commerce .before\\:content-\\[attr\\(data-price\\)\\]::before, .x-commerce.before\\:content-\\[attr\\(data-price\\)\\]::before {
  --tw-content: attr(data-price);
  content: var(--tw-content);
}
.x-commerce .before\\:\\[--x-modal-fade\\:0\\]::before, .x-commerce.before\\:\\[--x-modal-fade\\:0\\]::before {
  content: var(--tw-content);
  --x-modal-fade: 0;
}
.x-commerce .group-data-\\[overflow-y-end\\]\\/choice-column\\:before\\:opacity-100:is(:where(.group\\/choice-column)[data-overflow-y-end] *)::before, .x-commerce.group-data-\\[overflow-y-end\\]\\/choice-column\\:before\\:opacity-100:is(:where(.group\\/choice-column)[data-overflow-y-end] *)::before {
  content: var(--tw-content);
  opacity: 100%;
}
.x-commerce .group-data-\\[scroll-fade\\=both\\]\\/migration-scroll\\:before\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="both"] *)::before, .x-commerce.group-data-\\[scroll-fade\\=both\\]\\/migration-scroll\\:before\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="both"] *)::before {
  content: var(--tw-content);
  opacity: 100%;
}
.x-commerce .group-data-\\[scroll-fade\\=both\\]\\/xds-modal\\:before\\:\\[--x-modal-fade\\:1\\]:is(:where(.group\\/xds-modal)[data-scroll-fade="both"] *)::before, .x-commerce.group-data-\\[scroll-fade\\=both\\]\\/xds-modal\\:before\\:\\[--x-modal-fade\\:1\\]:is(:where(.group\\/xds-modal)[data-scroll-fade="both"] *)::before {
  content: var(--tw-content);
  --x-modal-fade: 1;
}
.x-commerce .group-data-\\[scroll-fade\\=end\\]\\/migration-scroll\\:before\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="end"] *)::before, .x-commerce.group-data-\\[scroll-fade\\=end\\]\\/migration-scroll\\:before\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="end"] *)::before {
  content: var(--tw-content);
  opacity: 100%;
}
.x-commerce .group-data-\\[scroll-fade\\=end\\]\\/xds-modal\\:before\\:\\[--x-modal-fade\\:1\\]:is(:where(.group\\/xds-modal)[data-scroll-fade="end"] *)::before, .x-commerce.group-data-\\[scroll-fade\\=end\\]\\/xds-modal\\:before\\:\\[--x-modal-fade\\:1\\]:is(:where(.group\\/xds-modal)[data-scroll-fade="end"] *)::before {
  content: var(--tw-content);
  --x-modal-fade: 1;
}
.x-commerce .group-data-\\[scroll-fade\\=start\\]\\/xds-modal\\:before\\:\\[--x-modal-fade\\:1\\]:is(:where(.group\\/xds-modal)[data-scroll-fade="start"] *)::before, .x-commerce.group-data-\\[scroll-fade\\=start\\]\\/xds-modal\\:before\\:\\[--x-modal-fade\\:1\\]:is(:where(.group\\/xds-modal)[data-scroll-fade="start"] *)::before {
  content: var(--tw-content);
  --x-modal-fade: 1;
}
.x-commerce .after\\:pointer-events-none::after, .x-commerce.after\\:pointer-events-none::after {
  content: var(--tw-content);
  pointer-events: none;
}
.x-commerce .after\\:absolute::after, .x-commerce.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}
.x-commerce .after\\:inset-0::after, .x-commerce.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}
.x-commerce .after\\:-inset-x-\\(--x-modal-pad\\)::after, .x-commerce.after\\:-inset-x-\\(--x-modal-pad\\)::after {
  content: var(--tw-content);
  inset-inline: calc(var(--x-modal-pad) * -1);
}
.x-commerce .after\\:inset-x-0::after, .x-commerce.after\\:inset-x-0::after {
  content: var(--tw-content);
  inset-inline: 0px;
}
.x-commerce .after\\:top-full::after, .x-commerce.after\\:top-full::after {
  content: var(--tw-content);
  top: 100%;
}
.x-commerce .after\\:-bottom-\\(--x-modal-pad\\)::after, .x-commerce.after\\:-bottom-\\(--x-modal-pad\\)::after {
  content: var(--tw-content);
  bottom: calc(var(--x-modal-pad) * -1);
}
.x-commerce .after\\:block::after, .x-commerce.after\\:block::after {
  content: var(--tw-content);
  display: block;
}
.x-commerce .after\\:size-1\\.5::after, .x-commerce.after\\:size-1\\.5::after {
  content: var(--tw-content);
  width: calc(var(--spacing, 0.25rem) * 1.5);
  height: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .after\\:h-8::after, .x-commerce.after\\:h-8::after {
  content: var(--tw-content);
  height: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .after\\:h-14::after, .x-commerce.after\\:h-14::after {
  content: var(--tw-content);
  height: calc(var(--spacing, 0.25rem) * 14);
}
.x-commerce .after\\:h-\\[calc\\(var\\(--x-plan-tabs-footer-h\\,0px\\)\\+--spacing\\(3\\)\\)\\]::after,.x-commerce.after\\:h-\\[calc\\(var\\(--x-plan-tabs-footer-h\\,0px\\)\\+--spacing\\(3\\)\\)\\]::after {
  content: var(--tw-content);
  height: calc(var(--x-plan-tabs-footer-h,0px) + calc(var(--spacing, 0.25rem) * 3));
}
.x-commerce .after\\:shrink-0::after, .x-commerce.after\\:shrink-0::after {
  content: var(--tw-content);
  flex-shrink: 0;
}
.x-commerce .after\\:rounded-\\[inherit\\]::after, .x-commerce.after\\:rounded-\\[inherit\\]::after {
  content: var(--tw-content);
  border-radius: inherit;
}
.x-commerce .after\\:rounded-full::after, .x-commerce.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}
.x-commerce .after\\:border::after, .x-commerce.after\\:border::after {
  content: var(--tw-content);
  border-style: var(--tw-border-style);
  border-width: 1px;
}
.x-commerce .after\\:border-\\[0\\.63px\\]::after, .x-commerce.after\\:border-\\[0\\.63px\\]::after {
  content: var(--tw-content);
  border-style: var(--tw-border-style);
  border-width: 0.63px;
}
.x-commerce .after\\:border-\\[rgba\\(252\\,252\\,252\\,0\\.06\\)\\]::after,.x-commerce.after\\:border-\\[rgba\\(252\\,252\\,252\\,0\\.06\\)\\]::after {
  content: var(--tw-content);
  border-color: rgba(252,252,252,0.06);
}
.x-commerce .after\\:border-\\[rgba\\(255\\,255\\,255\\,0\\.1\\)\\]::after,.x-commerce.after\\:border-\\[rgba\\(255\\,255\\,255\\,0\\.1\\)\\]::after {
  content: var(--tw-content);
  border-color: rgba(255,255,255,0.1);
}
.x-commerce .after\\:bg-modal::after, .x-commerce.after\\:bg-modal::after {
  content: var(--tw-content);
  background-color: var(--x-bg-modal);
}
.x-commerce .after\\:bg-white::after, .x-commerce.after\\:bg-white::after {
  content: var(--tw-content);
  background-color: var(--x-white);
}
.x-commerce .after\\:bg-linear-to-t::after, .x-commerce.after\\:bg-linear-to-t::after {
  content: var(--tw-content);
  --tw-gradient-position: to top;
  @supports (background-image: linear-gradient(in lab, red, red)) {
    --tw-gradient-position: to top in oklab;
  }
  background-image: linear-gradient(var(--tw-gradient-stops));
}
.x-commerce .after\\:from-\\(--x-modal-bg\\)::after, .x-commerce.after\\:from-\\(--x-modal-bg\\)::after {
  content: var(--tw-content);
  --tw-gradient-from: var(--x-modal-bg);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .after\\:to-transparent::after, .x-commerce.after\\:to-transparent::after {
  content: var(--tw-content);
  --tw-gradient-to: transparent;
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .after\\:mask-\\[linear-gradient\\(to_bottom\\,black\\,transparent\\)\\]::after,.x-commerce.after\\:mask-\\[linear-gradient\\(to_bottom\\,black\\,transparent\\)\\]::after {
  content: var(--tw-content);
  mask-image: linear-gradient(to bottom,black,transparent);
}
.x-commerce .after\\:opacity-0::after, .x-commerce.after\\:opacity-0::after {
  content: var(--tw-content);
  opacity: 0%;
}
.x-commerce .after\\:transition-opacity::after, .x-commerce.after\\:transition-opacity::after {
  content: var(--tw-content);
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .after\\:duration-150::after, .x-commerce.after\\:duration-150::after {
  content: var(--tw-content);
  --tw-duration: 150ms;
  transition-duration: 150ms;
}
.x-commerce .after\\:ease-out::after, .x-commerce.after\\:ease-out::after {
  content: var(--tw-content);
  --tw-ease: var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
  transition-timing-function: var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
}
.x-commerce .after\\:content-\\[\\'\\'\\]::after, .x-commerce.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}
.x-commerce .group-data-\\[scroll-fade\\=both\\]\\/migration-scroll\\:after\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="both"] *)::after, .x-commerce.group-data-\\[scroll-fade\\=both\\]\\/migration-scroll\\:after\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="both"] *)::after {
  content: var(--tw-content);
  opacity: 100%;
}
.x-commerce .group-data-\\[scroll-fade\\=start\\]\\/migration-scroll\\:after\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="start"] *)::after, .x-commerce.group-data-\\[scroll-fade\\=start\\]\\/migration-scroll\\:after\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="start"] *)::after {
  content: var(--tw-content);
  opacity: 100%;
}
.x-commerce .first\\:mt-0:first-child, .x-commerce.first\\:mt-0:first-child {
  margin-top: 0px;
}
.x-commerce .first\\:mb-1:first-child, .x-commerce.first\\:mb-1:first-child {
  margin-bottom: var(--spacing, 0.25rem);
}
.x-commerce .first\\:border-t-0:first-child, .x-commerce.first\\:border-t-0:first-child {
  border-top-style: var(--tw-border-style);
  border-top-width: 0px;
}
.x-commerce .first\\:pt-0:first-child, .x-commerce.first\\:pt-0:first-child {
  padding-top: 0px;
}
.x-commerce .first\\:pt-4:first-child, .x-commerce.first\\:pt-4:first-child {
  padding-top: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .last\\:pb-0:last-child, .x-commerce.last\\:pb-0:last-child {
  padding-bottom: 0px;
}
.x-commerce .last\\:pb-4:last-child, .x-commerce.last\\:pb-4:last-child {
  padding-bottom: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .empty\\:hidden:empty, .x-commerce.empty\\:hidden:empty {
  display: none;
}
.x-commerce .focus-within\\:border-active:focus-within, .x-commerce.focus-within\\:border-active:focus-within {
  border-color: var(--x-border-active);
}
.x-commerce .focus-within\\:border-destructive:focus-within, .x-commerce.focus-within\\:border-destructive:focus-within {
  border-color: var(--x-border-destructive);
}
.x-commerce .focus-within\\:border-normal:focus-within, .x-commerce.focus-within\\:border-normal:focus-within {
  border-color: var(--x-border-normal);
}
.x-commerce .focus-within\\:shadow-focus:focus-within, .x-commerce.focus-within\\:shadow-focus:focus-within {
  --tw-shadow: var(--x-shadow-focus);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .focus-within\\:shadow-focus-destructive:focus-within, .x-commerce.focus-within\\:shadow-focus-destructive:focus-within {
  --tw-shadow: var(--x-shadow-focus-destructive);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
@media (hover: hover) {
  .x-commerce .hover\\:border-active:hover, .x-commerce.hover\\:border-active:hover {
    border-color: var(--x-border-active);
  }
  .x-commerce .hover\\:border-destructive:hover, .x-commerce.hover\\:border-destructive:hover {
    border-color: var(--x-border-destructive);
  }
  .x-commerce .hover\\:border-hover:hover, .x-commerce.hover\\:border-hover:hover {
    border-color: var(--x-border-hover);
  }
  .x-commerce .hover\\:border-neutral-700:hover, .x-commerce.hover\\:border-neutral-700:hover {
    border-color: var(--x-neutral-700);
  }
  .x-commerce .hover\\:bg-\\[var\\(--x-hover-subtle\\)\\]:hover, .x-commerce.hover\\:bg-\\[var\\(--x-hover-subtle\\)\\]:hover {
    background-color: var(--x-hover-subtle);
  }
  .x-commerce .hover\\:bg-black-50:hover, .x-commerce.hover\\:bg-black-50:hover {
    background-color: var(--x-black-50);
  }
  .x-commerce .hover\\:bg-btn-brand-hover:hover, .x-commerce.hover\\:bg-btn-brand-hover:hover {
    background-color: var(--x-btn-brand-hover);
  }
  .x-commerce .hover\\:bg-btn-destructive-hover:hover, .x-commerce.hover\\:bg-btn-destructive-hover:hover {
    background-color: var(--x-btn-destructive-hover);
  }
  .x-commerce .hover\\:bg-btn-ghost-hover:hover, .x-commerce.hover\\:bg-btn-ghost-hover:hover {
    background-color: var(--x-btn-ghost-hover);
  }
  .x-commerce .hover\\:bg-btn-inverted-hover:hover, .x-commerce.hover\\:bg-btn-inverted-hover:hover {
    background-color: var(--x-btn-inverted-hover);
  }
  .x-commerce .hover\\:bg-btn-primary-hover:hover, .x-commerce.hover\\:bg-btn-primary-hover:hover {
    background-color: var(--x-btn-primary-hover);
  }
  .x-commerce .hover\\:bg-btn-secondary-hover:hover, .x-commerce.hover\\:bg-btn-secondary-hover:hover {
    background-color: var(--x-btn-secondary-hover);
  }
  .x-commerce .hover\\:bg-btn-tertiary-hover:hover, .x-commerce.hover\\:bg-btn-tertiary-hover:hover {
    background-color: var(--x-btn-tertiary-hover);
  }
  .x-commerce .hover\\:bg-fg-alpha-10:hover, .x-commerce.hover\\:bg-fg-alpha-10:hover {
    background-color: var(--x-fg-alpha-10);
  }
  .x-commerce .hover\\:bg-fg-alpha-30:hover, .x-commerce.hover\\:bg-fg-alpha-30:hover {
    background-color: var(--x-fg-alpha-30);
  }
  .x-commerce .hover\\:bg-fg-alpha-50:hover, .x-commerce.hover\\:bg-fg-alpha-50:hover {
    background-color: var(--x-fg-alpha-50);
  }
  .x-commerce .hover\\:bg-gray-100:hover, .x-commerce.hover\\:bg-gray-100:hover {
    background-color: var(--color-gray-100, oklch(96.7% 0.003 264.542));
  }
  .x-commerce .hover\\:bg-purple-600:hover, .x-commerce.hover\\:bg-purple-600:hover {
    background-color: var(--x-purple-600);
  }
  .x-commerce .hover\\:bg-teal-500:hover, .x-commerce.hover\\:bg-teal-500:hover {
    background-color: var(--x-teal-500);
  }
  .x-commerce .hover\\:bg-white-10:hover, .x-commerce.hover\\:bg-white-10:hover {
    background-color: var(--x-white-10);
  }
  .x-commerce .hover\\:bg-white-30:hover, .x-commerce.hover\\:bg-white-30:hover {
    background-color: var(--x-white-30);
  }
  .x-commerce .hover\\:bg-white-90:hover, .x-commerce.hover\\:bg-white-90:hover {
    background-color: var(--x-white-90);
  }
  .x-commerce .hover\\:from-\\(--x-btn-primary-hover\\):hover, .x-commerce.hover\\:from-\\(--x-btn-primary-hover\\):hover {
    --tw-gradient-from: var(--x-btn-primary-hover);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .x-commerce .hover\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-hover\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:hover,.x-commerce.hover\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-hover\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:hover {
    --tw-gradient-to: var(--x-btn-primary-hover);
  }
  @supports (color: color-mix(in lab, red, red)) {
    .x-commerce .hover\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-hover\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:hover,.x-commerce.hover\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-hover\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:hover {
      --tw-gradient-to: color-mix(in srgb,var(--x-btn-primary-hover),var(--x-bg-primary) 16%);
    }
  }
  .x-commerce .hover\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-hover\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:hover,.x-commerce.hover\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-hover\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:hover {
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .x-commerce .hover\\:text-on-color:hover, .x-commerce.hover\\:text-on-color:hover {
    color: var(--x-fg-on-color);
  }
  .x-commerce .hover\\:text-primary:hover, .x-commerce.hover\\:text-primary:hover {
    color: var(--x-fg-primary);
  }
  .x-commerce .hover\\:underline:hover, .x-commerce.hover\\:underline:hover {
    text-decoration-line: underline;
  }
  .x-commerce .hover\\:opacity-90:hover, .x-commerce.hover\\:opacity-90:hover {
    opacity: 90%;
  }
  .x-commerce .hover\\:shadow-md:hover, .x-commerce.hover\\:shadow-md:hover {
    --tw-shadow: var(--x-shadow-md);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
}
.x-commerce .focus\\:border-active:focus, .x-commerce.focus\\:border-active:focus {
  border-color: var(--x-border-active);
}
.x-commerce .focus\\:border-destructive:focus, .x-commerce.focus\\:border-destructive:focus {
  border-color: var(--x-border-destructive);
}
.x-commerce .focus\\:text-primary:focus, .x-commerce.focus\\:text-primary:focus {
  color: var(--x-fg-primary);
}
.x-commerce .focus-visible\\:border-active:focus-visible, .x-commerce.focus-visible\\:border-active:focus-visible {
  border-color: var(--x-border-active);
}
.x-commerce .focus-visible\\:bg-\\(--x-hover-subtle\\):focus-visible, .x-commerce.focus-visible\\:bg-\\(--x-hover-subtle\\):focus-visible {
  background-color: var(--x-hover-subtle);
}
.x-commerce .focus-visible\\:bg-\\[var\\(--x-bg-destructive\\)\\]:focus-visible, .x-commerce.focus-visible\\:bg-\\[var\\(--x-bg-destructive\\)\\]:focus-visible {
  background-color: var(--x-bg-destructive);
}
.x-commerce .focus-visible\\:bg-\\[var\\(--x-hover-subtle\\)\\]:focus-visible, .x-commerce.focus-visible\\:bg-\\[var\\(--x-hover-subtle\\)\\]:focus-visible {
  background-color: var(--x-hover-subtle);
}
.x-commerce .focus-visible\\:bg-black-10:focus-visible, .x-commerce.focus-visible\\:bg-black-10:focus-visible {
  background-color: var(--x-black-10);
}
.x-commerce .focus-visible\\:bg-fg-alpha-10:focus-visible, .x-commerce.focus-visible\\:bg-fg-alpha-10:focus-visible {
  background-color: var(--x-fg-alpha-10);
}
.x-commerce .focus-visible\\:bg-white-10:focus-visible, .x-commerce.focus-visible\\:bg-white-10:focus-visible {
  background-color: var(--x-white-10);
}
.x-commerce .focus-visible\\:text-primary:focus-visible, .x-commerce.focus-visible\\:text-primary:focus-visible {
  color: var(--x-fg-primary);
}
.x-commerce .focus-visible\\:shadow-focus:focus-visible, .x-commerce.focus-visible\\:shadow-focus:focus-visible {
  --tw-shadow: var(--x-shadow-focus);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .focus-visible\\:ring-2:focus-visible, .x-commerce.focus-visible\\:ring-2:focus-visible {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .focus-visible\\:ring-blue-500:focus-visible, .x-commerce.focus-visible\\:ring-blue-500:focus-visible {
  --tw-ring-color: var(--x-blue-500);
}
.x-commerce .focus-visible\\:outline:focus-visible, .x-commerce.focus-visible\\:outline:focus-visible {
  outline-style: var(--tw-outline-style);
  outline-width: 1px;
}
.x-commerce .focus-visible\\:outline-2:focus-visible, .x-commerce.focus-visible\\:outline-2:focus-visible {
  outline-style: var(--tw-outline-style);
  outline-width: 2px;
}
.x-commerce .focus-visible\\:-outline-offset-1:focus-visible, .x-commerce.focus-visible\\:-outline-offset-1:focus-visible {
  outline-offset: calc(1px * -1);
}
.x-commerce .focus-visible\\:-outline-offset-2:focus-visible, .x-commerce.focus-visible\\:-outline-offset-2:focus-visible {
  outline-offset: calc(2px * -1);
}
.x-commerce .focus-visible\\:outline-offset-2:focus-visible, .x-commerce.focus-visible\\:outline-offset-2:focus-visible {
  outline-offset: 2px;
}
.x-commerce .focus-visible\\:outline-offset-4:focus-visible, .x-commerce.focus-visible\\:outline-offset-4:focus-visible {
  outline-offset: 4px;
}
.x-commerce .focus-visible\\:outline-focus:focus-visible, .x-commerce.focus-visible\\:outline-focus:focus-visible {
  outline-color: var(--x-ring);
}
.x-commerce .active\\:bg-black-60:active, .x-commerce.active\\:bg-black-60:active {
  background-color: var(--x-black-60);
}
.x-commerce .active\\:bg-btn-brand-pressed:active, .x-commerce.active\\:bg-btn-brand-pressed:active {
  background-color: var(--x-btn-brand-pressed);
}
.x-commerce .active\\:bg-btn-destructive-pressed:active, .x-commerce.active\\:bg-btn-destructive-pressed:active {
  background-color: var(--x-btn-destructive-pressed);
}
.x-commerce .active\\:bg-btn-ghost-pressed:active, .x-commerce.active\\:bg-btn-ghost-pressed:active {
  background-color: var(--x-btn-ghost-pressed);
}
.x-commerce .active\\:bg-btn-inverted-pressed:active, .x-commerce.active\\:bg-btn-inverted-pressed:active {
  background-color: var(--x-btn-inverted-pressed);
}
.x-commerce .active\\:bg-btn-primary-pressed:active, .x-commerce.active\\:bg-btn-primary-pressed:active {
  background-color: var(--x-btn-primary-pressed);
}
.x-commerce .active\\:bg-btn-secondary-pressed:active, .x-commerce.active\\:bg-btn-secondary-pressed:active {
  background-color: var(--x-btn-secondary-pressed);
}
.x-commerce .active\\:bg-btn-tertiary-pressed:active, .x-commerce.active\\:bg-btn-tertiary-pressed:active {
  background-color: var(--x-btn-tertiary-pressed);
}
.x-commerce .active\\:bg-fg-alpha-60:active, .x-commerce.active\\:bg-fg-alpha-60:active {
  background-color: var(--x-fg-alpha-60);
}
.x-commerce .active\\:bg-white-15:active, .x-commerce.active\\:bg-white-15:active {
  background-color: var(--x-white-15);
}
.x-commerce .active\\:bg-white-40:active, .x-commerce.active\\:bg-white-40:active {
  background-color: var(--x-white-40);
}
.x-commerce .active\\:bg-white-80:active, .x-commerce.active\\:bg-white-80:active {
  background-color: var(--x-white-80);
}
.x-commerce .active\\:from-\\(--x-btn-primary-pressed\\):active, .x-commerce.active\\:from-\\(--x-btn-primary-pressed\\):active {
  --tw-gradient-from: var(--x-btn-primary-pressed);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .active\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-pressed\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:active,.x-commerce.active\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-pressed\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:active {
  --tw-gradient-to: var(--x-btn-primary-pressed);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-gradient-to: color-mix(in srgb,var(--x-btn-primary-pressed),var(--x-bg-primary) 16%);
  }
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
@media (hover: hover) {
  .x-commerce .enabled\\:hover\\:bg-btn-primary-hover:enabled:hover, .x-commerce.enabled\\:hover\\:bg-btn-primary-hover:enabled:hover {
    background-color: var(--x-btn-primary-hover);
  }
  .x-commerce .enabled\\:hover\\:bg-btn-secondary-hover:enabled:hover, .x-commerce.enabled\\:hover\\:bg-btn-secondary-hover:enabled:hover {
    background-color: var(--x-btn-secondary-hover);
  }
}
.x-commerce .disabled\\:pointer-events-none:disabled, .x-commerce.disabled\\:pointer-events-none:disabled {
  pointer-events: none;
}
.x-commerce .disabled\\:cursor-default:disabled, .x-commerce.disabled\\:cursor-default:disabled {
  cursor: default;
}
.x-commerce .disabled\\:cursor-not-allowed:disabled, .x-commerce.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}
.x-commerce .disabled\\:opacity-50:disabled, .x-commerce.disabled\\:opacity-50:disabled {
  opacity: 50%;
}
.x-commerce .disabled\\:opacity-60:disabled, .x-commerce.disabled\\:opacity-60:disabled {
  opacity: 60%;
}
.x-commerce .disabled\\:opacity-70:disabled, .x-commerce.disabled\\:opacity-70:disabled {
  opacity: 70%;
}
@media (hover: hover) {
  .x-commerce .disabled\\:hover\\:border-normal:disabled:hover, .x-commerce.disabled\\:hover\\:border-normal:disabled:hover {
    border-color: var(--x-border-normal);
  }
}
.x-commerce :where([data-theme='dark']) .in-data-\\[theme\\=\\'dark\\'\\]\\:block, .x-commerce:where([data-theme='dark']) .in-data-\\[theme\\=\\'dark\\'\\]\\:block {
  display: block;
}
.x-commerce :where([data-theme='dark']) .in-data-\\[theme\\=\\'dark\\'\\]\\:hidden, .x-commerce:where([data-theme='dark']) .in-data-\\[theme\\=\\'dark\\'\\]\\:hidden {
  display: none;
}
.x-commerce :where(:is(.x-commerce-plan-picker)) .in-\\[\\.x-commerce-plan-picker\\]\\:min-h-6, .x-commerce:where(:is(.x-commerce-plan-picker)) .in-\\[\\.x-commerce-plan-picker\\]\\:min-h-6 {
  min-height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce :where(:is(.x-commerce-plan-picker)) .in-\\[\\.x-commerce-plan-picker\\]\\:items-center, .x-commerce:where(:is(.x-commerce-plan-picker)) .in-\\[\\.x-commerce-plan-picker\\]\\:items-center {
  align-items: center;
}
.x-commerce .has-disabled\\:pointer-events-none:has(:disabled), .x-commerce.has-disabled\\:pointer-events-none:has(:disabled) {
  pointer-events: none;
}
.x-commerce .has-disabled\\:opacity-50:has(:disabled), .x-commerce.has-disabled\\:opacity-50:has(:disabled) {
  opacity: 50%;
}
@media (hover: hover) {
  .x-commerce .has-disabled\\:hover\\:border-normal:has(:disabled):hover, .x-commerce.has-disabled\\:hover\\:border-normal:has(:disabled):hover {
    border-color: var(--x-border-normal);
  }
}
.x-commerce .has-\\[\\[data-checkout-success\\]\\]\\:mx-auto:has(:is([data-checkout-success])), .x-commerce.has-\\[\\[data-checkout-success\\]\\]\\:mx-auto:has(:is([data-checkout-success])) {
  margin-inline: auto;
}
.x-commerce .has-\\[\\[data-checkout-success\\]\\]\\:max-w-\\[450px\\]:has(:is([data-checkout-success])), .x-commerce.has-\\[\\[data-checkout-success\\]\\]\\:max-w-\\[450px\\]:has(:is([data-checkout-success])) {
  max-width: 450px;
}
.x-commerce .aria-expanded\\:bg-black-50[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-black-50[aria-expanded="true"] {
  background-color: var(--x-black-50);
}
.x-commerce .aria-expanded\\:bg-btn-brand-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-brand-hover[aria-expanded="true"] {
  background-color: var(--x-btn-brand-hover);
}
.x-commerce .aria-expanded\\:bg-btn-destructive-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-destructive-hover[aria-expanded="true"] {
  background-color: var(--x-btn-destructive-hover);
}
.x-commerce .aria-expanded\\:bg-btn-ghost-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-ghost-hover[aria-expanded="true"] {
  background-color: var(--x-btn-ghost-hover);
}
.x-commerce .aria-expanded\\:bg-btn-inverted-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-inverted-hover[aria-expanded="true"] {
  background-color: var(--x-btn-inverted-hover);
}
.x-commerce .aria-expanded\\:bg-btn-primary-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-primary-hover[aria-expanded="true"] {
  background-color: var(--x-btn-primary-hover);
}
.x-commerce .aria-expanded\\:bg-btn-secondary-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-secondary-hover[aria-expanded="true"] {
  background-color: var(--x-btn-secondary-hover);
}
.x-commerce .aria-expanded\\:bg-btn-tertiary-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-tertiary-hover[aria-expanded="true"] {
  background-color: var(--x-btn-tertiary-hover);
}
.x-commerce .aria-expanded\\:bg-fg-alpha-50[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-fg-alpha-50[aria-expanded="true"] {
  background-color: var(--x-fg-alpha-50);
}
.x-commerce .aria-expanded\\:bg-white-10[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-white-10[aria-expanded="true"] {
  background-color: var(--x-white-10);
}
.x-commerce .aria-expanded\\:bg-white-30[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-white-30[aria-expanded="true"] {
  background-color: var(--x-white-30);
}
.x-commerce .aria-expanded\\:bg-white-90[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-white-90[aria-expanded="true"] {
  background-color: var(--x-white-90);
}
.x-commerce .data-checked\\:border-\\(--x-fg-primary\\)[data-checked], .x-commerce.data-checked\\:border-\\(--x-fg-primary\\)[data-checked] {
  border-color: var(--x-fg-primary);
}
.x-commerce .data-checked\\:border-transparent[data-checked], .x-commerce.data-checked\\:border-transparent[data-checked] {
  border-color: transparent;
}
.x-commerce .data-checked\\:bg-blue-500\\/5[data-checked], .x-commerce.data-checked\\:bg-blue-500\\/5[data-checked] {
  background-color: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-blue-500) 5%, transparent);
  }
}
.x-commerce .data-checked\\:text-primary[data-checked], .x-commerce.data-checked\\:text-primary[data-checked] {
  color: var(--x-fg-primary);
}
.x-commerce .data-checked\\:ring-2[data-checked], .x-commerce.data-checked\\:ring-2[data-checked] {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .data-checked\\:ring-blue-500[data-checked], .x-commerce.data-checked\\:ring-blue-500[data-checked] {
  --tw-ring-color: var(--x-blue-500);
}
.x-commerce .data-disabled\\:cursor-not-allowed[data-disabled], .x-commerce.data-disabled\\:cursor-not-allowed[data-disabled] {
  cursor: not-allowed;
}
.x-commerce .data-disabled\\:opacity-50[data-disabled], .x-commerce.data-disabled\\:opacity-50[data-disabled] {
  opacity: 50%;
}
.x-commerce .data-disabled\\:opacity-70[data-disabled], .x-commerce.data-disabled\\:opacity-70[data-disabled] {
  opacity: 70%;
}
.x-commerce .data-disabled\\:opacity-100[data-disabled], .x-commerce.data-disabled\\:opacity-100[data-disabled] {
  opacity: 100%;
}
.x-commerce .data-ending-style\\:opacity-0[data-ending-style], .x-commerce.data-ending-style\\:opacity-0[data-ending-style] {
  opacity: 0%;
}
.x-commerce .data-ending-style\\:duration-200[data-ending-style], .x-commerce.data-ending-style\\:duration-200[data-ending-style] {
  --tw-duration: 200ms;
  transition-duration: 200ms;
}
.x-commerce .data-highlighted\\:bg-\\(--x-hover-subtle\\)[data-highlighted], .x-commerce.data-highlighted\\:bg-\\(--x-hover-subtle\\)[data-highlighted] {
  background-color: var(--x-hover-subtle);
}
@media (hover: hover) {
  .x-commerce .data-highlighted\\:hover\\:bg-\\(--x-hover-subtle\\)[data-highlighted]:hover, .x-commerce.data-highlighted\\:hover\\:bg-\\(--x-hover-subtle\\)[data-highlighted]:hover {
    background-color: var(--x-hover-subtle);
  }
  .x-commerce .data-highlighted\\:hover\\:bg-\\[var\\(--x-bg-destructive\\)\\][data-highlighted]:hover, .x-commerce.data-highlighted\\:hover\\:bg-\\[var\\(--x-bg-destructive\\)\\][data-highlighted]:hover {
    background-color: var(--x-bg-destructive);
  }
  .x-commerce .data-highlighted\\:hover\\:bg-\\[var\\(--x-hover-subtle\\)\\][data-highlighted]:hover, .x-commerce.data-highlighted\\:hover\\:bg-\\[var\\(--x-hover-subtle\\)\\][data-highlighted]:hover {
    background-color: var(--x-hover-subtle);
  }
  .x-commerce .data-highlighted\\:hover\\:bg-black-10[data-highlighted]:hover, .x-commerce.data-highlighted\\:hover\\:bg-black-10[data-highlighted]:hover {
    background-color: var(--x-black-10);
  }
  .x-commerce .data-highlighted\\:hover\\:bg-fg-alpha-10[data-highlighted]:hover, .x-commerce.data-highlighted\\:hover\\:bg-fg-alpha-10[data-highlighted]:hover {
    background-color: var(--x-fg-alpha-10);
  }
  .x-commerce .data-highlighted\\:hover\\:bg-white-10[data-highlighted]:hover, .x-commerce.data-highlighted\\:hover\\:bg-white-10[data-highlighted]:hover {
    background-color: var(--x-white-10);
  }
}
.x-commerce .data-placeholder\\:text-tertiary[data-placeholder], .x-commerce.data-placeholder\\:text-tertiary[data-placeholder] {
  color: var(--x-fg-tertiary);
}
.x-commerce .data-popup-open\\:bg-\\[var\\(--x-hover-subtle\\)\\][data-popup-open], .x-commerce.data-popup-open\\:bg-\\[var\\(--x-hover-subtle\\)\\][data-popup-open] {
  background-color: var(--x-hover-subtle);
}
.x-commerce .data-popup-open\\:bg-black-10[data-popup-open], .x-commerce.data-popup-open\\:bg-black-10[data-popup-open] {
  background-color: var(--x-black-10);
}
.x-commerce .data-popup-open\\:bg-fg-alpha-10[data-popup-open], .x-commerce.data-popup-open\\:bg-fg-alpha-10[data-popup-open] {
  background-color: var(--x-fg-alpha-10);
}
.x-commerce .data-popup-open\\:bg-white-10[data-popup-open], .x-commerce.data-popup-open\\:bg-white-10[data-popup-open] {
  background-color: var(--x-white-10);
}
.x-commerce .data-starting-style\\:scale-0[data-starting-style], .x-commerce.data-starting-style\\:scale-0[data-starting-style] {
  --tw-scale-x: 0%;
  --tw-scale-y: 0%;
  --tw-scale-z: 0%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .data-starting-style\\:opacity-0[data-starting-style], .x-commerce.data-starting-style\\:opacity-0[data-starting-style] {
  opacity: 0%;
}
.x-commerce .data-unchecked\\:opacity-0[data-unchecked], .x-commerce.data-unchecked\\:opacity-0[data-unchecked] {
  opacity: 0%;
}
.x-commerce .data-\\[disabled\\]\\:pointer-events-none[data-disabled], .x-commerce.data-\\[disabled\\]\\:pointer-events-none[data-disabled] {
  pointer-events: none;
}
.x-commerce .data-\\[disabled\\]\\:opacity-50[data-disabled], .x-commerce.data-\\[disabled\\]\\:opacity-50[data-disabled] {
  opacity: 50%;
}
.x-commerce .data-\\[ending-style\\]\\:scale-95[data-ending-style], .x-commerce.data-\\[ending-style\\]\\:scale-95[data-ending-style] {
  --tw-scale-x: 95%;
  --tw-scale-y: 95%;
  --tw-scale-z: 95%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .data-\\[ending-style\\]\\:opacity-0[data-ending-style], .x-commerce.data-\\[ending-style\\]\\:opacity-0[data-ending-style] {
  opacity: 0%;
}
.x-commerce .data-\\[popup-open\\]\\:rotate-180[data-popup-open], .x-commerce.data-\\[popup-open\\]\\:rotate-180[data-popup-open] {
  rotate: 180deg;
}
.x-commerce .data-\\[popup-open\\]\\:border-active[data-popup-open], .x-commerce.data-\\[popup-open\\]\\:border-active[data-popup-open] {
  border-color: var(--x-border-active);
}
.x-commerce .data-\\[popup-open\\]\\:border-destructive[data-popup-open], .x-commerce.data-\\[popup-open\\]\\:border-destructive[data-popup-open] {
  border-color: var(--x-border-destructive);
}
.x-commerce .data-\\[popup-open\\]\\:shadow-focus[data-popup-open], .x-commerce.data-\\[popup-open\\]\\:shadow-focus[data-popup-open] {
  --tw-shadow: var(--x-shadow-focus);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .data-\\[starting-style\\]\\:scale-95[data-starting-style], .x-commerce.data-\\[starting-style\\]\\:scale-95[data-starting-style] {
  --tw-scale-x: 95%;
  --tw-scale-y: 95%;
  --tw-scale-z: 95%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .data-\\[starting-style\\]\\:opacity-0[data-starting-style], .x-commerce.data-\\[starting-style\\]\\:opacity-0[data-starting-style] {
  opacity: 0%;
}
@media (prefers-reduced-motion: no-preference) {
  .x-commerce .motion-safe\\:animate-pulse, .x-commerce.motion-safe\\:animate-pulse {
    animation: var(--animate-pulse, pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite);
  }
  @media (hover: hover) {
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[-1\\.04\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[-1\\.04\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: -1.04%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[-4\\.5\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[-4\\.5\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: -4.5%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[-10\\.17\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[-10\\.17\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: -10.17%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[-11\\.3\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[-11\\.3\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: -11.3%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[-13\\.87\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[-13\\.87\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: -13.87%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[4\\.81\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[4\\.81\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: 4.81%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[9\\.22\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[9\\.22\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: 9.22%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:-translate-y-\\[1\\.674\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:-translate-y-\\[1\\.674\\%\\]:is(:where(.group):hover *) {
      --tw-translate-y: calc(1.674% * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-y-\\[-1\\.41\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-y-\\[-1\\.41\\%\\]:is(:where(.group):hover *) {
      --tw-translate-y: -1.41%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-y-\\[-7\\.58\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-y-\\[-7\\.58\\%\\]:is(:where(.group):hover *) {
      --tw-translate-y: -7.58%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-y-\\[-14\\.09\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-y-\\[-14\\.09\\%\\]:is(:where(.group):hover *) {
      --tw-translate-y: -14.09%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-y-\\[0\\.26\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-y-\\[0\\.26\\%\\]:is(:where(.group):hover *) {
      --tw-translate-y: 0.26%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:scale-100:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:scale-100:is(:where(.group):hover *) {
      --tw-scale-x: 100%;
      --tw-scale-y: 100%;
      --tw-scale-z: 100%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:rotate-\\[-1deg\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:rotate-\\[-1deg\\]:is(:where(.group):hover *) {
      rotate: -1deg;
    }
    .x-commerce .motion-safe\\:group-hover\\:rotate-\\[-2deg\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:rotate-\\[-2deg\\]:is(:where(.group):hover *) {
      rotate: -2deg;
    }
    .x-commerce .motion-safe\\:group-hover\\:rotate-\\[-3deg\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:rotate-\\[-3deg\\]:is(:where(.group):hover *) {
      rotate: -3deg;
    }
    .x-commerce .motion-safe\\:group-hover\\:rotate-\\[1deg\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:rotate-\\[1deg\\]:is(:where(.group):hover *) {
      rotate: 1deg;
    }
    .x-commerce .motion-safe\\:group-hover\\:rotate-\\[3deg\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:rotate-\\[3deg\\]:is(:where(.group):hover *) {
      rotate: 3deg;
    }
    .x-commerce .motion-safe\\:group-hover\\:rotate-\\[5deg\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:rotate-\\[5deg\\]:is(:where(.group):hover *) {
      rotate: 5deg;
    }
    .x-commerce .motion-safe\\:group-hover\\:delay-0:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:delay-0:is(:where(.group):hover *) {
      transition-delay: 0ms;
    }
    .x-commerce .motion-safe\\:group-hover\\:delay-\\[60ms\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:delay-\\[60ms\\]:is(:where(.group):hover *) {
      transition-delay: 60ms;
    }
  }
}
@media (prefers-reduced-motion: reduce) {
  .x-commerce .motion-reduce\\:hidden, .x-commerce.motion-reduce\\:hidden {
    display: none;
  }
  .x-commerce .motion-reduce\\:animate-none, .x-commerce.motion-reduce\\:animate-none {
    animation: none;
  }
  .x-commerce .motion-reduce\\:transition-none, .x-commerce.motion-reduce\\:transition-none {
    transition-property: none;
  }
  .x-commerce .motion-reduce\\:before\\:transition-none::before, .x-commerce.motion-reduce\\:before\\:transition-none::before {
    content: var(--tw-content);
    transition-property: none;
  }
  .x-commerce .motion-reduce\\:after\\:transition-none::after, .x-commerce.motion-reduce\\:after\\:transition-none::after {
    content: var(--tw-content);
    transition-property: none;
  }
}
@media (width < 729px) {
  .x-commerce .max-\\[729px\\]\\:static, .x-commerce.max-\\[729px\\]\\:static {
    position: static;
  }
  .x-commerce .max-\\[729px\\]\\:shrink-0, .x-commerce.max-\\[729px\\]\\:shrink-0 {
    flex-shrink: 0;
  }
  .x-commerce .max-\\[729px\\]\\:before\\:hidden::before, .x-commerce.max-\\[729px\\]\\:before\\:hidden::before {
    content: var(--tw-content);
    display: none;
  }
}
@media (width < 517px) {
  .x-commerce .max-narrow\\:inset-0, .x-commerce.max-narrow\\:inset-0 {
    inset: 0px;
  }
  .x-commerce .max-narrow\\:inset-x-2, .x-commerce.max-narrow\\:inset-x-2 {
    inset-inline: calc(var(--spacing, 0.25rem) * 2);
  }
  .x-commerce .max-narrow\\:inset-x-4, .x-commerce.max-narrow\\:inset-x-4 {
    inset-inline: calc(var(--spacing, 0.25rem) * 4);
  }
  .x-commerce .max-narrow\\:top-1\\/2, .x-commerce.max-narrow\\:top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .x-commerce .max-narrow\\:bottom-2, .x-commerce.max-narrow\\:bottom-2 {
    bottom: calc(var(--spacing, 0.25rem) * 2);
  }
  .x-commerce .max-narrow\\:bottom-auto, .x-commerce.max-narrow\\:bottom-auto {
    bottom: auto;
  }
  .x-commerce .max-narrow\\:mx-auto, .x-commerce.max-narrow\\:mx-auto {
    margin-inline: auto;
  }
  .x-commerce .max-narrow\\:max-h-\\(--x-commerce-surface-cap\\), .x-commerce.max-narrow\\:max-h-\\(--x-commerce-surface-cap\\) {
    max-height: var(--x-commerce-surface-cap);
  }
  .x-commerce .max-narrow\\:max-h-\\[85svh\\], .x-commerce.max-narrow\\:max-h-\\[85svh\\] {
    max-height: 85svh;
  }
  .x-commerce .max-narrow\\:max-h-\\[calc\\(100svh-2rem\\)\\], .x-commerce.max-narrow\\:max-h-\\[calc\\(100svh-2rem\\)\\] {
    max-height: calc(100svh - 2rem);
  }
  .x-commerce .max-narrow\\:min-h-full, .x-commerce.max-narrow\\:min-h-full {
    min-height: 100%;
  }
  .x-commerce .max-narrow\\:w-\\[calc\\(100vw-1rem\\)\\], .x-commerce.max-narrow\\:w-\\[calc\\(100vw-1rem\\)\\] {
    width: calc(100vw - 1rem);
  }
  .x-commerce .max-narrow\\:max-w-\\[400px\\], .x-commerce.max-narrow\\:max-w-\\[400px\\] {
    max-width: 400px;
  }
  .x-commerce .max-narrow\\:max-w-\\[calc\\(100vw-1rem\\)\\], .x-commerce.max-narrow\\:max-w-\\[calc\\(100vw-1rem\\)\\] {
    max-width: calc(100vw - 1rem);
  }
  .x-commerce .max-narrow\\:-translate-y-1\\/2, .x-commerce.max-narrow\\:-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .max-narrow\\:touch-none, .x-commerce.max-narrow\\:touch-none {
    touch-action: none;
  }
  .x-commerce .max-narrow\\:rounded-lg, .x-commerce.max-narrow\\:rounded-lg {
    border-radius: calc(24px * var(--x-radius-m));
  }
  .x-commerce .max-narrow\\:rounded-none, .x-commerce.max-narrow\\:rounded-none {
    border-radius: 0px;
  }
  .x-commerce .max-narrow\\:rounded-xl, .x-commerce.max-narrow\\:rounded-xl {
    border-radius: calc(32px * var(--x-radius-m));
  }
  .x-commerce .max-narrow\\:bg-primary, .x-commerce.max-narrow\\:bg-primary {
    background-color: var(--x-bg-primary);
  }
  .x-commerce .max-narrow\\:p-0, .x-commerce.max-narrow\\:p-0 {
    padding: 0px;
  }
  .x-commerce .max-narrow\\:p-4, .x-commerce.max-narrow\\:p-4 {
    padding: calc(var(--spacing, 0.25rem) * 4);
  }
  .x-commerce .max-narrow\\:p-6, .x-commerce.max-narrow\\:p-6 {
    padding: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .max-narrow\\:pb-\\[env\\(safe-area-inset-bottom\\,0px\\)\\],.x-commerce.max-narrow\\:pb-\\[env\\(safe-area-inset-bottom\\,0px\\)\\] {
    padding-bottom: env(safe-area-inset-bottom,0px);
  }
  .x-commerce .max-narrow\\:text-\\[length\\:max\\(16px\\,calc\\(16\\/var\\(--x-root-font-size\\,16\\)\\*1rem\\)\\)\\],.x-commerce.max-narrow\\:text-\\[length\\:max\\(16px\\,calc\\(16\\/var\\(--x-root-font-size\\,16\\)\\*1rem\\)\\)\\] {
    font-size: max(16px, calc(16 / var(--x-root-font-size,16) * 1rem));
  }
  .x-commerce .max-narrow\\:shadow-none, .x-commerce.max-narrow\\:shadow-none {
    --tw-shadow: 0 0 #0000;
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .x-commerce .max-narrow\\:\\[--x-modal-bg\\:var\\(--x-bg-primary\\)\\], .x-commerce.max-narrow\\:\\[--x-modal-bg\\:var\\(--x-bg-primary\\)\\] {
    --x-modal-bg: var(--x-bg-primary);
  }
  .x-commerce .max-narrow\\:\\[--x-modal-pad\\:--spacing\\(4\\)\\], .x-commerce.max-narrow\\:\\[--x-modal-pad\\:--spacing\\(4\\)\\] {
    --x-modal-pad: calc(var(--spacing, 0.25rem) * 4);
  }
  .x-commerce .max-narrow\\:\\[--x-modal-pad\\:0px\\], .x-commerce.max-narrow\\:\\[--x-modal-pad\\:0px\\] {
    --x-modal-pad: 0px;
  }
  .x-commerce .max-narrow\\:data-\\[ending-style\\]\\:translate-y-\\[calc\\(100\\%\\+8px\\)\\][data-ending-style], .x-commerce.max-narrow\\:data-\\[ending-style\\]\\:translate-y-\\[calc\\(100\\%\\+8px\\)\\][data-ending-style] {
    --tw-translate-y: calc(100% + 8px);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .max-narrow\\:data-\\[ending-style\\]\\:translate-y-full[data-ending-style], .x-commerce.max-narrow\\:data-\\[ending-style\\]\\:translate-y-full[data-ending-style] {
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .max-narrow\\:data-\\[ending-style\\]\\:scale-95[data-ending-style], .x-commerce.max-narrow\\:data-\\[ending-style\\]\\:scale-95[data-ending-style] {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .x-commerce .max-narrow\\:data-\\[ending-style\\]\\:opacity-0[data-ending-style], .x-commerce.max-narrow\\:data-\\[ending-style\\]\\:opacity-0[data-ending-style] {
    opacity: 0%;
  }
  .x-commerce .max-narrow\\:data-\\[starting-style\\]\\:translate-y-\\[calc\\(100\\%\\+8px\\)\\][data-starting-style], .x-commerce.max-narrow\\:data-\\[starting-style\\]\\:translate-y-\\[calc\\(100\\%\\+8px\\)\\][data-starting-style] {
    --tw-translate-y: calc(100% + 8px);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .max-narrow\\:data-\\[starting-style\\]\\:translate-y-full[data-starting-style], .x-commerce.max-narrow\\:data-\\[starting-style\\]\\:translate-y-full[data-starting-style] {
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .max-narrow\\:data-\\[starting-style\\]\\:scale-95[data-starting-style], .x-commerce.max-narrow\\:data-\\[starting-style\\]\\:scale-95[data-starting-style] {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .x-commerce .max-narrow\\:data-\\[starting-style\\]\\:opacity-0[data-starting-style], .x-commerce.max-narrow\\:data-\\[starting-style\\]\\:opacity-0[data-starting-style] {
    opacity: 0%;
  }
}
@media (width < 360px) {
  .x-commerce .max-\\[360px\\]\\:max-w-\\[calc\\(100vw-16px\\)\\], .x-commerce.max-\\[360px\\]\\:max-w-\\[calc\\(100vw-16px\\)\\] {
    max-width: calc(100vw - 16px);
  }
}
@media (width < 40rem) {
  .x-commerce .max-sm\\:grow, .x-commerce.max-sm\\:grow {
    flex-grow: 1;
  }
  .x-commerce .max-sm\\:grow-\\[1000000\\], .x-commerce.max-sm\\:grow-\\[1000000\\] {
    flex-grow: 1000000;
  }
  .x-commerce .max-sm\\:flex-col, .x-commerce.max-sm\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .max-sm\\:flex-nowrap, .x-commerce.max-sm\\:flex-nowrap {
    flex-wrap: nowrap;
  }
}
@media (width >= 360px) {
  .x-commerce .min-\\[360px\\]\\:px-8, .x-commerce.min-\\[360px\\]\\:px-8 {
    padding-inline: calc(var(--spacing, 0.25rem) * 8);
  }
}
@media (width >= 517px) {
  .x-commerce .narrow\\:inset-auto, .x-commerce.narrow\\:inset-auto {
    inset: auto;
  }
  .x-commerce .narrow\\:top-1\\/2, .x-commerce.narrow\\:top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .x-commerce .narrow\\:left-1\\/2, .x-commerce.narrow\\:left-1\\/2 {
    left: calc(1 / 2 * 100%);
  }
  .x-commerce .narrow\\:-mx-8, .x-commerce.narrow\\:-mx-8 {
    margin-inline: calc(var(--spacing, 0.25rem) * -8);
  }
  .x-commerce .narrow\\:max-h-\\(--x-commerce-surface-cap\\), .x-commerce.narrow\\:max-h-\\(--x-commerce-surface-cap\\) {
    max-height: var(--x-commerce-surface-cap);
  }
  .x-commerce .narrow\\:max-h-\\[calc\\(100dvh-2rem\\)\\], .x-commerce.narrow\\:max-h-\\[calc\\(100dvh-2rem\\)\\] {
    max-height: calc(100dvh - 2rem);
  }
  .x-commerce .narrow\\:max-h-\\[min\\(85svh\\,640px\\)\\],.x-commerce.narrow\\:max-h-\\[min\\(85svh\\,640px\\)\\] {
    max-height: min(85svh, 640px);
  }
  .x-commerce .narrow\\:w-\\[min\\(450px\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(450px\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(450px, calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(500px\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(500px\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(500px, calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(524px\\,calc\\(100vw-4rem\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(524px\\,calc\\(100vw-4rem\\)\\)\\] {
    width: min(524px, calc(100vw - 4rem));
  }
  .x-commerce .narrow\\:w-\\[min\\(634px\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(634px\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(634px, calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(916px\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(916px\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(916px, calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(974px\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(974px\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(974px, calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(calc\\(2\\*var\\(--x-commerce-plan-card-max\\)\\+60px\\)\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(calc\\(2\\*var\\(--x-commerce-plan-card-max\\)\\+60px\\)\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(calc(2 * var(--x-commerce-plan-card-max) + 60px), calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(calc\\(4\\*var\\(--x-commerce-plan-row-card\\)\\+84px\\)\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(calc\\(4\\*var\\(--x-commerce-plan-row-card\\)\\+84px\\)\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(calc(4 * var(--x-commerce-plan-row-card) + 84px), calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(calc\\(var\\(--x-commerce-plan-card-max\\)\\+490px\\)\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(calc\\(var\\(--x-commerce-plan-card-max\\)\\+490px\\)\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(calc(var(--x-commerce-plan-card-max) + 490px), calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-fit, .x-commerce.narrow\\:w-fit {
    width: fit-content;
  }
  .x-commerce .narrow\\:w-full, .x-commerce.narrow\\:w-full {
    width: 100%;
  }
  .x-commerce .narrow\\:max-w-\\[400px\\], .x-commerce.narrow\\:max-w-\\[400px\\] {
    max-width: 400px;
  }
  .x-commerce .narrow\\:max-w-\\[524px\\], .x-commerce.narrow\\:max-w-\\[524px\\] {
    max-width: 524px;
  }
  .x-commerce .narrow\\:max-w-\\[634px\\], .x-commerce.narrow\\:max-w-\\[634px\\] {
    max-width: 634px;
  }
  .x-commerce .narrow\\:max-w-\\[880px\\], .x-commerce.narrow\\:max-w-\\[880px\\] {
    max-width: 880px;
  }
  .x-commerce .narrow\\:max-w-\\[calc\\(100vw-4rem\\)\\], .x-commerce.narrow\\:max-w-\\[calc\\(100vw-4rem\\)\\] {
    max-width: calc(100vw - 4rem);
  }
  .x-commerce .narrow\\:-translate-x-1\\/2, .x-commerce.narrow\\:-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .narrow\\:-translate-y-1\\/2, .x-commerce.narrow\\:-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .narrow\\:grid-cols-2, .x-commerce.narrow\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .x-commerce .narrow\\:rounded-3xl, .x-commerce.narrow\\:rounded-3xl {
    border-radius: var(--radius-3xl, 1.5rem);
  }
  .x-commerce .narrow\\:rounded-lg, .x-commerce.narrow\\:rounded-lg {
    border-radius: calc(24px * var(--x-radius-m));
  }
  .x-commerce .narrow\\:p-0, .x-commerce.narrow\\:p-0 {
    padding: 0px;
  }
  .x-commerce .narrow\\:p-6, .x-commerce.narrow\\:p-6 {
    padding: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .narrow\\:p-8, .x-commerce.narrow\\:p-8 {
    padding: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .narrow\\:px-0, .x-commerce.narrow\\:px-0 {
    padding-inline: 0px;
  }
  .x-commerce .narrow\\:px-8, .x-commerce.narrow\\:px-8 {
    padding-inline: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .narrow\\:ring-1, .x-commerce.narrow\\:ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .x-commerce .narrow\\:\\[--x-commerce-surface-cap\\:calc\\(100svh-96px\\)\\], .x-commerce.narrow\\:\\[--x-commerce-surface-cap\\:calc\\(100svh-96px\\)\\] {
    --x-commerce-surface-cap: calc(100svh - 96px);
  }
  .x-commerce .narrow\\:first\\:text-start:first-child, .x-commerce.narrow\\:first\\:text-start:first-child {
    text-align: start;
  }
  .x-commerce .narrow\\:last\\:text-end:last-child, .x-commerce.narrow\\:last\\:text-end:last-child {
    text-align: end;
  }
  .x-commerce .narrow\\:has-\\[\\.x-commerce-plan-picker\\>li\\:nth-child\\(2\\)\\:last-child\\]\\:w-\\[min\\(calc\\(2\\*var\\(--x-commerce-plan-row-card\\)\\+60px\\)\\,calc\\(100vw-96px\\)\\)\\]:has(:is(.x-commerce-plan-picker > li:nth-child(2):last-child)),.x-commerce.narrow\\:has-\\[\\.x-commerce-plan-picker\\>li\\:nth-child\\(2\\)\\:last-child\\]\\:w-\\[min\\(calc\\(2\\*var\\(--x-commerce-plan-row-card\\)\\+60px\\)\\,calc\\(100vw-96px\\)\\)\\]:has(:is(.x-commerce-plan-picker > li:nth-child(2):last-child)) {
    width: min(calc(2 * var(--x-commerce-plan-row-card) + 60px), calc(100vw - 96px));
  }
  .x-commerce .narrow\\:has-\\[\\.x-commerce-plan-picker\\>li\\:nth-child\\(3\\)\\:last-child\\]\\:w-\\[min\\(calc\\(3\\*var\\(--x-commerce-plan-row-card\\)\\+72px\\)\\,calc\\(100vw-96px\\)\\)\\]:has(:is(.x-commerce-plan-picker > li:nth-child(3):last-child)),.x-commerce.narrow\\:has-\\[\\.x-commerce-plan-picker\\>li\\:nth-child\\(3\\)\\:last-child\\]\\:w-\\[min\\(calc\\(3\\*var\\(--x-commerce-plan-row-card\\)\\+72px\\)\\,calc\\(100vw-96px\\)\\)\\]:has(:is(.x-commerce-plan-picker > li:nth-child(3):last-child)) {
    width: min(calc(3 * var(--x-commerce-plan-row-card) + 72px), calc(100vw - 96px));
  }
  .x-commerce .narrow\\:has-\\[\\.x-commerce-plan-picker\\>li\\:only-child\\]\\:w-\\[min\\(calc\\(var\\(--x-commerce-plan-row-card\\)\\+48px\\)\\,calc\\(100vw-96px\\)\\)\\]:has(:is(.x-commerce-plan-picker > li:only-child)),.x-commerce.narrow\\:has-\\[\\.x-commerce-plan-picker\\>li\\:only-child\\]\\:w-\\[min\\(calc\\(var\\(--x-commerce-plan-row-card\\)\\+48px\\)\\,calc\\(100vw-96px\\)\\)\\]:has(:is(.x-commerce-plan-picker > li:only-child)) {
    width: min(calc(var(--x-commerce-plan-row-card) + 48px), calc(100vw - 96px));
  }
  .x-commerce .narrow\\:data-\\[ending-style\\]\\:-translate-x-1\\/2[data-ending-style], .x-commerce.narrow\\:data-\\[ending-style\\]\\:-translate-x-1\\/2[data-ending-style] {
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .narrow\\:data-\\[ending-style\\]\\:-translate-y-1\\/2[data-ending-style], .x-commerce.narrow\\:data-\\[ending-style\\]\\:-translate-y-1\\/2[data-ending-style] {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .narrow\\:data-\\[ending-style\\]\\:scale-95[data-ending-style], .x-commerce.narrow\\:data-\\[ending-style\\]\\:scale-95[data-ending-style] {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .x-commerce .narrow\\:data-\\[ending-style\\]\\:opacity-0[data-ending-style], .x-commerce.narrow\\:data-\\[ending-style\\]\\:opacity-0[data-ending-style] {
    opacity: 0%;
  }
  .x-commerce .narrow\\:data-\\[starting-style\\]\\:-translate-x-1\\/2[data-starting-style], .x-commerce.narrow\\:data-\\[starting-style\\]\\:-translate-x-1\\/2[data-starting-style] {
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .narrow\\:data-\\[starting-style\\]\\:-translate-y-1\\/2[data-starting-style], .x-commerce.narrow\\:data-\\[starting-style\\]\\:-translate-y-1\\/2[data-starting-style] {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .narrow\\:data-\\[starting-style\\]\\:scale-95[data-starting-style], .x-commerce.narrow\\:data-\\[starting-style\\]\\:scale-95[data-starting-style] {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .x-commerce .narrow\\:data-\\[starting-style\\]\\:opacity-0[data-starting-style], .x-commerce.narrow\\:data-\\[starting-style\\]\\:opacity-0[data-starting-style] {
    opacity: 0%;
  }
  .x-commerce .narrow\\:data-\\[width\\=content\\]\\:w-max[data-width="content"], .x-commerce.narrow\\:data-\\[width\\=content\\]\\:w-max[data-width="content"] {
    width: max-content;
  }
  .x-commerce .narrow\\:data-\\[width\\=content\\]\\:min-w-\\[min\\(524px\\,calc\\(100vw-4rem\\)\\)\\][data-width="content"],.x-commerce.narrow\\:data-\\[width\\=content\\]\\:min-w-\\[min\\(524px\\,calc\\(100vw-4rem\\)\\)\\][data-width="content"] {
    min-width: min(524px, calc(100vw - 4rem));
  }
}
@media (width >= 730px) {
  .x-commerce .min-\\[730px\\]\\:hidden, .x-commerce.min-\\[730px\\]\\:hidden {
    display: none;
  }
  .x-commerce .min-\\[730px\\]\\:flex-1, .x-commerce.min-\\[730px\\]\\:flex-1 {
    flex: 1;
  }
}
@media (width >= 1012px) {
  .x-commerce .min-\\[1012px\\]\\:flex, .x-commerce.min-\\[1012px\\]\\:flex {
    display: flex;
  }
  .x-commerce .min-\\[1012px\\]\\:h-\\[min\\(80vh\\,750px\\)\\],.x-commerce.min-\\[1012px\\]\\:h-\\[min\\(80vh\\,750px\\)\\] {
    height: min(80vh, 750px);
  }
  .x-commerce .min-\\[1012px\\]\\:min-h-0, .x-commerce.min-\\[1012px\\]\\:min-h-0 {
    min-height: 0px;
  }
  .x-commerce .min-\\[1012px\\]\\:flex-1, .x-commerce.min-\\[1012px\\]\\:flex-1 {
    flex: 1;
  }
  .x-commerce .min-\\[1012px\\]\\:flex-col, .x-commerce.min-\\[1012px\\]\\:flex-col {
    flex-direction: column;
  }
}
@media (width >= 40rem) {
  .x-commerce .sm\\:-mx-8, .x-commerce.sm\\:-mx-8 {
    margin-inline: calc(var(--spacing, 0.25rem) * -8);
  }
  .x-commerce .sm\\:ms-auto, .x-commerce.sm\\:ms-auto {
    margin-inline-start: auto;
  }
  .x-commerce .sm\\:inline, .x-commerce.sm\\:inline {
    display: inline;
  }
  .x-commerce .sm\\:w-auto, .x-commerce.sm\\:w-auto {
    width: auto;
  }
  .x-commerce .sm\\:max-w-max, .x-commerce.sm\\:max-w-max {
    max-width: max-content;
  }
  .x-commerce .sm\\:grow-\\[1000000\\], .x-commerce.sm\\:grow-\\[1000000\\] {
    flex-grow: 1000000;
  }
  .x-commerce .sm\\:basis-\\[min-content\\], .x-commerce.sm\\:basis-\\[min-content\\] {
    flex-basis: min-content;
  }
  .x-commerce .sm\\:flex-row, .x-commerce.sm\\:flex-row {
    flex-direction: row;
  }
  .x-commerce .sm\\:items-center, .x-commerce.sm\\:items-center {
    align-items: center;
  }
  .x-commerce .sm\\:justify-end, .x-commerce.sm\\:justify-end {
    justify-content: flex-end;
  }
  .x-commerce .sm\\:p-5, .x-commerce.sm\\:p-5 {
    padding: calc(var(--spacing, 0.25rem) * 5);
  }
  .x-commerce .sm\\:px-6, .x-commerce.sm\\:px-6 {
    padding-inline: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .sm\\:px-8, .x-commerce.sm\\:px-8 {
    padding-inline: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .sm\\:pb-10, .x-commerce.sm\\:pb-10 {
    padding-bottom: calc(var(--spacing, 0.25rem) * 10);
  }
  .x-commerce .sm\\:\\[--x-plan-tabs-page-x\\:1\\.5rem\\], .x-commerce.sm\\:\\[--x-plan-tabs-page-x\\:1\\.5rem\\] {
    --x-plan-tabs-page-x: 1.5rem;
  }
}
@media (width >= 48rem) {
  .x-commerce .md\\:mx-0, .x-commerce.md\\:mx-0 {
    margin-inline: 0px;
  }
  .x-commerce .md\\:w-60, .x-commerce.md\\:w-60 {
    width: calc(var(--spacing, 0.25rem) * 60);
  }
  .x-commerce .md\\:flex-none, .x-commerce.md\\:flex-none {
    flex: none;
  }
  .x-commerce .md\\:snap-none, .x-commerce.md\\:snap-none {
    scroll-snap-type: none;
  }
  .x-commerce .md\\:scroll-px-3, .x-commerce.md\\:scroll-px-3 {
    scroll-padding-inline: calc(var(--spacing, 0.25rem) * 3);
  }
  .x-commerce .md\\:px-3, .x-commerce.md\\:px-3 {
    padding-inline: calc(var(--spacing, 0.25rem) * 3);
  }
}
@container (width < 890px) {
  .x-commerce .\\@max-\\[890px\\]\\:flex-col, .x-commerce.\\@max-\\[890px\\]\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .\\@max-\\[890px\\]\\:gap-3, .x-commerce.\\@max-\\[890px\\]\\:gap-3 {
    gap: calc(var(--spacing, 0.25rem) * 3);
  }
  .x-commerce .\\@max-\\[890px\\]\\:text-center, .x-commerce.\\@max-\\[890px\\]\\:text-center {
    text-align: center;
  }
}
@container (width < 706px) {
  .x-commerce .\\@max-\\[706px\\]\\:flex-col, .x-commerce.\\@max-\\[706px\\]\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .\\@max-\\[706px\\]\\:gap-3, .x-commerce.\\@max-\\[706px\\]\\:gap-3 {
    gap: calc(var(--spacing, 0.25rem) * 3);
  }
  .x-commerce .\\@max-\\[706px\\]\\:text-center, .x-commerce.\\@max-\\[706px\\]\\:text-center {
    text-align: center;
  }
}
@container (width < 420px) {
  .x-commerce .\\@max-\\[420px\\]\\:sr-only, .x-commerce.\\@max-\\[420px\\]\\:sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border-width: 0;
  }
}
@container (width < 401px) {
  .x-commerce .\\@max-\\[401px\\]\\:order-last, .x-commerce.\\@max-\\[401px\\]\\:order-last {
    order: 9999;
  }
  .x-commerce .\\@max-\\[401px\\]\\:contents, .x-commerce.\\@max-\\[401px\\]\\:contents {
    display: contents;
  }
  .x-commerce .\\@max-\\[401px\\]\\:flex-1, .x-commerce.\\@max-\\[401px\\]\\:flex-1 {
    flex: 1;
  }
}
@container plan-title (width < 232px) {
  .x-commerce .\\@max-\\[232px\\]\\/plan-title\\:text-\\[20px\\], .x-commerce.\\@max-\\[232px\\]\\/plan-title\\:text-\\[20px\\] {
    font-size: 20px;
  }
}
@container (width < 220px) {
  .x-commerce .\\@max-\\[220px\\]\\:sr-only, .x-commerce.\\@max-\\[220px\\]\\:sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border-width: 0;
  }
}
@container (width < 200px) {
  .x-commerce .\\@max-\\[200px\\]\\:order-last, .x-commerce.\\@max-\\[200px\\]\\:order-last {
    order: 9999;
  }
  .x-commerce .\\@max-\\[200px\\]\\:contents, .x-commerce.\\@max-\\[200px\\]\\:contents {
    display: contents;
  }
  .x-commerce .\\@max-\\[200px\\]\\:flex-1, .x-commerce.\\@max-\\[200px\\]\\:flex-1 {
    flex: 1;
  }
  .x-commerce .\\@max-\\[200px\\]\\:flex-col, .x-commerce.\\@max-\\[200px\\]\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .\\@max-\\[200px\\]\\:items-start, .x-commerce.\\@max-\\[200px\\]\\:items-start {
    align-items: flex-start;
  }
  .x-commerce .\\@max-\\[200px\\]\\:gap-0\\.5, .x-commerce.\\@max-\\[200px\\]\\:gap-0\\.5 {
    gap: calc(var(--spacing, 0.25rem) * 0.5);
  }
}
@container (width >= 420px) {
  .x-commerce .\\@min-\\[420px\\]\\:w-4, .x-commerce.\\@min-\\[420px\\]\\:w-4 {
    width: calc(var(--spacing, 0.25rem) * 4);
  }
}
@container (width >= 560px) {
  .x-commerce .\\@min-\\[560px\\]\\:top-4, .x-commerce.\\@min-\\[560px\\]\\:top-4 {
    top: calc(var(--spacing, 0.25rem) * 4);
  }
  .x-commerce .\\@min-\\[560px\\]\\:left-4, .x-commerce.\\@min-\\[560px\\]\\:left-4 {
    left: calc(var(--spacing, 0.25rem) * 4);
  }
  .x-commerce .\\@min-\\[560px\\]\\:size-8, .x-commerce.\\@min-\\[560px\\]\\:size-8 {
    width: calc(var(--spacing, 0.25rem) * 8);
    height: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .\\@min-\\[560px\\]\\:w-full, .x-commerce.\\@min-\\[560px\\]\\:w-full {
    width: 100%;
  }
  .x-commerce .\\@min-\\[560px\\]\\:grid-cols-3, .x-commerce.\\@min-\\[560px\\]\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .x-commerce .\\@min-\\[560px\\]\\:flex-col, .x-commerce.\\@min-\\[560px\\]\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .\\@min-\\[560px\\]\\:items-stretch, .x-commerce.\\@min-\\[560px\\]\\:items-stretch {
    align-items: stretch;
  }
  .x-commerce .\\@min-\\[560px\\]\\:gap-4, .x-commerce.\\@min-\\[560px\\]\\:gap-4 {
    gap: calc(var(--spacing, 0.25rem) * 4);
  }
  .x-commerce .\\@min-\\[560px\\]\\:rounded-2xl, .x-commerce.\\@min-\\[560px\\]\\:rounded-2xl {
    border-radius: var(--radius-2xl, 1rem);
  }
  .x-commerce .\\@min-\\[560px\\]\\:rounded-lg, .x-commerce.\\@min-\\[560px\\]\\:rounded-lg {
    border-radius: calc(24px * var(--x-radius-m));
  }
}
@container grid (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:row-span-2, .x-commerce.\\@min-\\[586px\\]\\/grid\\:row-span-2 {
    grid-row: span 2 / span 2;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:row-span-3, .x-commerce.\\@min-\\[586px\\]\\/grid\\:row-span-3 {
    grid-row: span 3 / span 3;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:grid, .x-commerce.\\@min-\\[586px\\]\\/grid\\:grid {
    display: grid;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:min-h-0, .x-commerce.\\@min-\\[586px\\]\\/grid\\:min-h-0 {
    min-height: 0px;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:min-h-\\[2lh\\], .x-commerce.\\@min-\\[586px\\]\\/grid\\:min-h-\\[2lh\\] {
    min-height: 2lh;
  }
}
@container single (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/single\\:w-\\(--x-commerce-plan-card-max\\), .x-commerce.\\@min-\\[586px\\]\\/single\\:w-\\(--x-commerce-plan-card-max\\) {
    width: var(--x-commerce-plan-card-max);
  }
}
@container grid (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:min-w-\\(--x-commerce-plan-row-card\\), .x-commerce.\\@min-\\[586px\\]\\/grid\\:min-w-\\(--x-commerce-plan-row-card\\) {
    min-width: var(--x-commerce-plan-row-card);
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:flex-1, .x-commerce.\\@min-\\[586px\\]\\/grid\\:flex-1 {
    flex: 1;
  }
}
@container single (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/single\\:flex-1, .x-commerce.\\@min-\\[586px\\]\\/single\\:flex-1 {
    flex: 1;
  }
}
@container grid (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:snap-x, .x-commerce.\\@min-\\[586px\\]\\/grid\\:snap-x {
    scroll-snap-type: x var(--tw-scroll-snap-strictness);
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:snap-mandatory, .x-commerce.\\@min-\\[586px\\]\\/grid\\:snap-mandatory {
    --tw-scroll-snap-strictness: mandatory;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:auto-cols-\\[minmax\\(min-content\\,1fr\\)\\],.x-commerce.\\@min-\\[586px\\]\\/grid\\:auto-cols-\\[minmax\\(min-content\\,1fr\\)\\] {
    grid-auto-columns: minmax(min-content,1fr);
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:grid-flow-col, .x-commerce.\\@min-\\[586px\\]\\/grid\\:grid-flow-col {
    grid-auto-flow: column;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:auto-rows-\\[minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[586px\\]\\/grid\\:auto-rows-\\[minmax\\(0\\,1fr\\)\\] {
    grid-auto-rows: minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:grid-cols-none, .x-commerce.\\@min-\\[586px\\]\\/grid\\:grid-cols-none {
    grid-template-columns: none;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:grid-rows-\\[auto_auto_minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[586px\\]\\/grid\\:grid-rows-\\[auto_auto_minmax\\(0\\,1fr\\)\\] {
    grid-template-rows: auto auto minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:grid-rows-subgrid, .x-commerce.\\@min-\\[586px\\]\\/grid\\:grid-rows-subgrid {
    grid-template-rows: subgrid;
  }
}
@container single (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/single\\:flex-row, .x-commerce.\\@min-\\[586px\\]\\/single\\:flex-row {
    flex-direction: row;
  }
}
@container grid (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:justify-start, .x-commerce.\\@min-\\[586px\\]\\/grid\\:justify-start {
    justify-content: flex-start;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:gap-y-0, .x-commerce.\\@min-\\[586px\\]\\/grid\\:gap-y-0 {
    row-gap: 0px;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:overflow-y-auto, .x-commerce.\\@min-\\[586px\\]\\/grid\\:overflow-y-auto {
    overflow-y: auto;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:mask-\\[linear-gradient\\(to_right\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-x-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-x-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\],.x-commerce.\\@min-\\[586px\\]\\/grid\\:mask-\\[linear-gradient\\(to_right\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-x-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-x-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\] {
    mask-image: linear-gradient(to right,transparent,black min(var(--scroll-area-overflow-x-start,0px), 32px),black calc(100% - min(var(--scroll-area-overflow-x-end,0px), 32px)),transparent);
  }
}
@container (width >= 706px) {
  .x-commerce .\\@min-\\[706px\\]\\:contents, .x-commerce.\\@min-\\[706px\\]\\:contents {
    display: contents;
  }
  .x-commerce .\\@min-\\[706px\\]\\:grid, .x-commerce.\\@min-\\[706px\\]\\:grid {
    display: grid;
  }
  .x-commerce .\\@min-\\[706px\\]\\:grid-cols-\\[1fr_auto_1fr\\], .x-commerce.\\@min-\\[706px\\]\\:grid-cols-\\[1fr_auto_1fr\\] {
    grid-template-columns: 1fr auto 1fr;
  }
}
@container (width >= 800px) {
  .x-commerce .\\@min-\\[800px\\]\\:static, .x-commerce.\\@min-\\[800px\\]\\:static {
    position: static;
  }
  .x-commerce .\\@min-\\[800px\\]\\:start-7, .x-commerce.\\@min-\\[800px\\]\\:start-7 {
    inset-inline-start: calc(var(--spacing, 0.25rem) * 7);
  }
  .x-commerce .\\@min-\\[800px\\]\\:top-7, .x-commerce.\\@min-\\[800px\\]\\:top-7 {
    top: calc(var(--spacing, 0.25rem) * 7);
  }
  .x-commerce .\\@min-\\[800px\\]\\:col-start-1, .x-commerce.\\@min-\\[800px\\]\\:col-start-1 {
    grid-column-start: 1;
  }
  .x-commerce .\\@min-\\[800px\\]\\:col-start-2, .x-commerce.\\@min-\\[800px\\]\\:col-start-2 {
    grid-column-start: 2;
  }
  .x-commerce .\\@min-\\[800px\\]\\:row-start-1, .x-commerce.\\@min-\\[800px\\]\\:row-start-1 {
    grid-row-start: 1;
  }
  .x-commerce .\\@min-\\[800px\\]\\:mt-6, .x-commerce.\\@min-\\[800px\\]\\:mt-6 {
    margin-top: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .\\@min-\\[800px\\]\\:-mb-3, .x-commerce.\\@min-\\[800px\\]\\:-mb-3 {
    margin-bottom: calc(var(--spacing, 0.25rem) * -3);
  }
  .x-commerce .\\@min-\\[800px\\]\\:block, .x-commerce.\\@min-\\[800px\\]\\:block {
    display: block;
  }
  .x-commerce .\\@min-\\[800px\\]\\:contents, .x-commerce.\\@min-\\[800px\\]\\:contents {
    display: contents;
  }
  .x-commerce .\\@min-\\[800px\\]\\:flex, .x-commerce.\\@min-\\[800px\\]\\:flex {
    display: flex;
  }
  .x-commerce .\\@min-\\[800px\\]\\:max-h-\\(--x-commerce-surface-cap\\), .x-commerce.\\@min-\\[800px\\]\\:max-h-\\(--x-commerce-surface-cap\\) {
    max-height: var(--x-commerce-surface-cap);
  }
  .x-commerce .\\@min-\\[800px\\]\\:min-h-0, .x-commerce.\\@min-\\[800px\\]\\:min-h-0 {
    min-height: 0px;
  }
  .x-commerce .\\@min-\\[800px\\]\\:flex-1, .x-commerce.\\@min-\\[800px\\]\\:flex-1 {
    flex: 1;
  }
  .x-commerce .\\@min-\\[800px\\]\\:scroll-pt-18, .x-commerce.\\@min-\\[800px\\]\\:scroll-pt-18 {
    scroll-padding-top: calc(var(--spacing, 0.25rem) * 18);
  }
  .x-commerce .\\@min-\\[800px\\]\\:grid-cols-\\[minmax\\(0\\,1fr\\)_minmax\\(0\\,380px\\)\\],.x-commerce.\\@min-\\[800px\\]\\:grid-cols-\\[minmax\\(0\\,1fr\\)_minmax\\(0\\,380px\\)\\] {
    grid-template-columns: minmax(0,1fr) minmax(0,380px);
  }
  .x-commerce .\\@min-\\[800px\\]\\:grid-cols-\\[minmax\\(0\\,1fr\\)_minmax\\(0\\,420px\\)\\],.x-commerce.\\@min-\\[800px\\]\\:grid-cols-\\[minmax\\(0\\,1fr\\)_minmax\\(0\\,420px\\)\\] {
    grid-template-columns: minmax(0,1fr) minmax(0,420px);
  }
  .x-commerce .\\@min-\\[800px\\]\\:grid-rows-\\[minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[800px\\]\\:grid-rows-\\[minmax\\(0\\,1fr\\)\\] {
    grid-template-rows: minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[800px\\]\\:flex-col, .x-commerce.\\@min-\\[800px\\]\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .\\@min-\\[800px\\]\\:justify-start, .x-commerce.\\@min-\\[800px\\]\\:justify-start {
    justify-content: flex-start;
  }
  .x-commerce .\\@min-\\[800px\\]\\:gap-3, .x-commerce.\\@min-\\[800px\\]\\:gap-3 {
    gap: calc(var(--spacing, 0.25rem) * 3);
  }
  .x-commerce .\\@min-\\[800px\\]\\:overflow-y-auto, .x-commerce.\\@min-\\[800px\\]\\:overflow-y-auto {
    overflow-y: auto;
  }
  .x-commerce .\\@min-\\[800px\\]\\:rounded-none, .x-commerce.\\@min-\\[800px\\]\\:rounded-none {
    border-radius: 0px;
  }
  .x-commerce .\\@min-\\[800px\\]\\:border-0, .x-commerce.\\@min-\\[800px\\]\\:border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
  .x-commerce .\\@min-\\[800px\\]\\:bg-transparent, .x-commerce.\\@min-\\[800px\\]\\:bg-transparent {
    background-color: transparent;
  }
  .x-commerce .\\@min-\\[800px\\]\\:p-0, .x-commerce.\\@min-\\[800px\\]\\:p-0 {
    padding: 0px;
  }
  .x-commerce .\\@min-\\[800px\\]\\:p-7, .x-commerce.\\@min-\\[800px\\]\\:p-7 {
    padding: calc(var(--spacing, 0.25rem) * 7);
  }
  .x-commerce .\\@min-\\[800px\\]\\:p-8, .x-commerce.\\@min-\\[800px\\]\\:p-8 {
    padding: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .\\@min-\\[800px\\]\\:px-8, .x-commerce.\\@min-\\[800px\\]\\:px-8 {
    padding-inline: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .\\@min-\\[800px\\]\\:pt-6, .x-commerce.\\@min-\\[800px\\]\\:pt-6 {
    padding-top: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .\\@min-\\[800px\\]\\:pt-15, .x-commerce.\\@min-\\[800px\\]\\:pt-15 {
    padding-top: calc(var(--spacing, 0.25rem) * 15);
  }
  .x-commerce .\\@min-\\[800px\\]\\:pt-16, .x-commerce.\\@min-\\[800px\\]\\:pt-16 {
    padding-top: calc(var(--spacing, 0.25rem) * 16);
  }
  .x-commerce .\\@min-\\[800px\\]\\:pt-20, .x-commerce.\\@min-\\[800px\\]\\:pt-20 {
    padding-top: calc(var(--spacing, 0.25rem) * 20);
  }
  .x-commerce .\\@min-\\[800px\\]\\:pb-0, .x-commerce.\\@min-\\[800px\\]\\:pb-0 {
    padding-bottom: 0px;
  }
  .x-commerce .\\@min-\\[800px\\]\\:pb-8, .x-commerce.\\@min-\\[800px\\]\\:pb-8 {
    padding-bottom: calc(var(--spacing, 0.25rem) * 8);
  }
}
@container (width >= 880px) {
  .x-commerce .\\@min-\\[880px\\]\\:col-span-1, .x-commerce.\\@min-\\[880px\\]\\:col-span-1 {
    grid-column: span 1 / span 1;
  }
  .x-commerce .\\@min-\\[880px\\]\\:grid-cols-3, .x-commerce.\\@min-\\[880px\\]\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@container (width >= 891px) {
  .x-commerce .\\@min-\\[891px\\]\\:contents, .x-commerce.\\@min-\\[891px\\]\\:contents {
    display: contents;
  }
  .x-commerce .\\@min-\\[891px\\]\\:grid, .x-commerce.\\@min-\\[891px\\]\\:grid {
    display: grid;
  }
  .x-commerce .\\@min-\\[891px\\]\\:grid-cols-\\[1fr_auto_1fr\\], .x-commerce.\\@min-\\[891px\\]\\:grid-cols-\\[1fr_auto_1fr\\] {
    grid-template-columns: 1fr auto 1fr;
  }
}
@container review (width >= 980px) {
  .x-commerce .\\@min-\\[980px\\]\\/review\\:relative, .x-commerce.\\@min-\\[980px\\]\\/review\\:relative {
    position: relative;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:static, .x-commerce.\\@min-\\[980px\\]\\/review\\:static {
    position: static;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:col-start-1, .x-commerce.\\@min-\\[980px\\]\\/review\\:col-start-1 {
    grid-column-start: 1;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:col-start-2, .x-commerce.\\@min-\\[980px\\]\\/review\\:col-start-2 {
    grid-column-start: 2;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:row-span-2, .x-commerce.\\@min-\\[980px\\]\\/review\\:row-span-2 {
    grid-row: span 2 / span 2;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:row-start-1, .x-commerce.\\@min-\\[980px\\]\\/review\\:row-start-1 {
    grid-row-start: 1;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:row-start-2, .x-commerce.\\@min-\\[980px\\]\\/review\\:row-start-2 {
    grid-row-start: 2;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:flex, .x-commerce.\\@min-\\[980px\\]\\/review\\:flex {
    display: flex;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:grid, .x-commerce.\\@min-\\[980px\\]\\/review\\:grid {
    display: grid;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:min-h-0, .x-commerce.\\@min-\\[980px\\]\\/review\\:min-h-0 {
    min-height: 0px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:w-auto, .x-commerce.\\@min-\\[980px\\]\\/review\\:w-auto {
    width: auto;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:flex-1, .x-commerce.\\@min-\\[980px\\]\\/review\\:flex-1 {
    flex: 1;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:grid-cols-\\[500px_minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[980px\\]\\/review\\:grid-cols-\\[500px_minmax\\(0\\,1fr\\)\\] {
    grid-template-columns: 500px minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:grid-rows-\\[auto_minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[980px\\]\\/review\\:grid-rows-\\[auto_minmax\\(0\\,1fr\\)\\] {
    grid-template-rows: auto minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:flex-col, .x-commerce.\\@min-\\[980px\\]\\/review\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:items-start, .x-commerce.\\@min-\\[980px\\]\\/review\\:items-start {
    align-items: flex-start;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:justify-start, .x-commerce.\\@min-\\[980px\\]\\/review\\:justify-start {
    justify-content: flex-start;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:bg-secondary, .x-commerce.\\@min-\\[980px\\]\\/review\\:bg-secondary {
    background-color: var(--x-bg-secondary);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:mask-\\[linear-gradient\\(to_bottom\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-y-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-y-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\],.x-commerce.\\@min-\\[980px\\]\\/review\\:mask-\\[linear-gradient\\(to_bottom\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-y-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-y-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\] {
    mask-image: linear-gradient(to bottom,transparent,black min(var(--scroll-area-overflow-y-start,0px), 32px),black calc(100% - min(var(--scroll-area-overflow-y-end,0px), 32px)),transparent);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:px-0, .x-commerce.\\@min-\\[980px\\]\\/review\\:px-0 {
    padding-inline: 0px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:px-6, .x-commerce.\\@min-\\[980px\\]\\/review\\:px-6 {
    padding-inline: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:px-8, .x-commerce.\\@min-\\[980px\\]\\/review\\:px-8 {
    padding-inline: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:px-\\[60px\\], .x-commerce.\\@min-\\[980px\\]\\/review\\:px-\\[60px\\] {
    padding-inline: 60px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:pt-6, .x-commerce.\\@min-\\[980px\\]\\/review\\:pt-6 {
    padding-top: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:pt-\\[30px\\], .x-commerce.\\@min-\\[980px\\]\\/review\\:pt-\\[30px\\] {
    padding-top: 30px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:pt-\\[60px\\], .x-commerce.\\@min-\\[980px\\]\\/review\\:pt-\\[60px\\] {
    padding-top: 60px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:pb-0, .x-commerce.\\@min-\\[980px\\]\\/review\\:pb-0 {
    padding-bottom: 0px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:pb-10, .x-commerce.\\@min-\\[980px\\]\\/review\\:pb-10 {
    padding-bottom: calc(var(--spacing, 0.25rem) * 10);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:pb-12, .x-commerce.\\@min-\\[980px\\]\\/review\\:pb-12 {
    padding-bottom: calc(var(--spacing, 0.25rem) * 12);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:text-\\[32px\\], .x-commerce.\\@min-\\[980px\\]\\/review\\:text-\\[32px\\] {
    font-size: 32px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:leading-\\[1\\.2\\], .x-commerce.\\@min-\\[980px\\]\\/review\\:leading-\\[1\\.2\\] {
    --tw-leading: 1.2;
    line-height: 1.2;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:tracking-normal, .x-commerce.\\@min-\\[980px\\]\\/review\\:tracking-normal {
    --tw-tracking: var(--tracking-normal, 0em);
    letter-spacing: var(--tracking-normal, 0em);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:before\\:hidden::before, .x-commerce.\\@min-\\[980px\\]\\/review\\:before\\:hidden::before {
    content: var(--tw-content);
    display: none;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:focus-visible\\:outline-2:focus-visible, .x-commerce.\\@min-\\[980px\\]\\/review\\:focus-visible\\:outline-2:focus-visible {
    outline-style: var(--tw-outline-style);
    outline-width: 2px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:focus-visible\\:-outline-offset-2:focus-visible, .x-commerce.\\@min-\\[980px\\]\\/review\\:focus-visible\\:-outline-offset-2:focus-visible {
    outline-offset: calc(2px * -1);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:focus-visible\\:outline-focus:focus-visible, .x-commerce.\\@min-\\[980px\\]\\/review\\:focus-visible\\:outline-focus:focus-visible {
    outline-color: var(--x-ring);
  }
}
@container choice (width >= 1042px) {
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:grid, .x-commerce.\\@min-\\[1042px\\]\\/choice\\:grid {
    display: grid;
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:grid-cols-\\[360px_minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[1042px\\]\\/choice\\:grid-cols-\\[360px_minmax\\(0\\,1fr\\)\\] {
    grid-template-columns: 360px minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:grid-rows-\\[minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[1042px\\]\\/choice\\:grid-rows-\\[minmax\\(0\\,1fr\\)\\] {
    grid-template-rows: minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:gap-x-\\[38px\\], .x-commerce.\\@min-\\[1042px\\]\\/choice\\:gap-x-\\[38px\\] {
    column-gap: 38px;
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:ps-\\[26px\\], .x-commerce.\\@min-\\[1042px\\]\\/choice\\:ps-\\[26px\\] {
    padding-inline-start: 26px;
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:pe-\\[32px\\], .x-commerce.\\@min-\\[1042px\\]\\/choice\\:pe-\\[32px\\] {
    padding-inline-end: 32px;
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:pt-\\[5px\\], .x-commerce.\\@min-\\[1042px\\]\\/choice\\:pt-\\[5px\\] {
    padding-top: 5px;
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:pt-\\[27px\\], .x-commerce.\\@min-\\[1042px\\]\\/choice\\:pt-\\[27px\\] {
    padding-top: 27px;
  }
}
@container (width >= 32rem) {
  .x-commerce .\\@lg\\:h-auto, .x-commerce.\\@lg\\:h-auto {
    height: auto;
  }
  .x-commerce .\\@lg\\:min-h-32, .x-commerce.\\@lg\\:min-h-32 {
    min-height: calc(var(--spacing, 0.25rem) * 32);
  }
  .x-commerce .\\@lg\\:w-2\\/5, .x-commerce.\\@lg\\:w-2\\/5 {
    width: calc(2 / 5 * 100%);
  }
  .x-commerce .\\@lg\\:max-w-72, .x-commerce.\\@lg\\:max-w-72 {
    max-width: calc(var(--spacing, 0.25rem) * 72);
  }
  .x-commerce .\\@lg\\:shrink-0, .x-commerce.\\@lg\\:shrink-0 {
    flex-shrink: 0;
  }
  .x-commerce .\\@lg\\:flex-row, .x-commerce.\\@lg\\:flex-row {
    flex-direction: row;
  }
  .x-commerce .\\@lg\\:gap-5, .x-commerce.\\@lg\\:gap-5 {
    gap: calc(var(--spacing, 0.25rem) * 5);
  }
}
.x-commerce .rtl\\:-translate-x-\\[calc\\(50cqw-50\\%\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *), .x-commerce.rtl\\:-translate-x-\\[calc\\(50cqw-50\\%\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
  --tw-translate-x: calc(calc(50cqw - 50%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .rtl\\:-translate-x-\\[calc\\(100cqw-100\\%\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *), .x-commerce.rtl\\:-translate-x-\\[calc\\(100cqw-100\\%\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
  --tw-translate-x: calc(calc(100cqw - 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .rtl\\:-translate-x-full:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *), .x-commerce.rtl\\:-translate-x-full:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
  --tw-translate-x: -100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .rtl\\:-scale-x-100:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *), .x-commerce.rtl\\:-scale-x-100:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
  --tw-scale-x: calc(100% * -1);
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .rtl\\:\\[--x-safe-start\\:env\\(safe-area-inset-right\\,0px\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *),.x-commerce.rtl\\:\\[--x-safe-start\\:env\\(safe-area-inset-right\\,0px\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
  --x-safe-start: env(safe-area-inset-right,0px);
}
.x-commerce .rtl\\:\\[--x-tab-pill-dir\\:-1\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *), .x-commerce.rtl\\:\\[--x-tab-pill-dir\\:-1\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
  --x-tab-pill-dir: -1;
}
@container grid (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:rtl\\:mask-\\[linear-gradient\\(to_left\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-x-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-x-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *),.x-commerce.\\@min-\\[586px\\]\\/grid\\:rtl\\:mask-\\[linear-gradient\\(to_left\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-x-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-x-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
    mask-image: linear-gradient(to left,transparent,black min(var(--scroll-area-overflow-x-start,0px), 32px),black calc(100% - min(var(--scroll-area-overflow-x-end,0px), 32px)),transparent);
  }
}
.x-commerce .dark\\:border-\\[\\#c4c4c4\\]:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:border-\\[\\#c4c4c4\\]:where([data-theme='dark'], [data-theme='dark'] *) {
  border-color: #c4c4c4;
}
.x-commerce .dark\\:border-normal:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:border-normal:where([data-theme='dark'], [data-theme='dark'] *) {
  border-color: var(--x-border-normal);
}
.x-commerce .dark\\:border-white\\/8:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:border-white\\/8:where([data-theme='dark'], [data-theme='dark'] *) {
  border-color: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-white) 8%, transparent);
  }
}
.x-commerce .dark\\:border-white\\/10:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:border-white\\/10:where([data-theme='dark'], [data-theme='dark'] *) {
  border-color: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-white) 10%, transparent);
  }
}
.x-commerce .dark\\:bg-black:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-black:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-black);
}
.x-commerce .dark\\:bg-btn-secondary:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-btn-secondary:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-btn-secondary);
}
.x-commerce .dark\\:bg-fg-alpha-05:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-fg-alpha-05:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-fg-alpha-05);
}
.x-commerce .dark\\:bg-fg-alpha-10:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-fg-alpha-10:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-fg-alpha-10);
}
.x-commerce .dark\\:bg-secondary:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-secondary:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-bg-secondary);
}
.x-commerce .dark\\:bg-tertiary:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-tertiary:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-bg-tertiary);
}
.x-commerce .dark\\:bg-transparent:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-transparent:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: transparent;
}
.x-commerce .dark\\:bg-white-04:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-white-04:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-white-04);
}
.x-commerce .dark\\:bg-white-08:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-white-08:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-white-08);
}
.x-commerce .dark\\:bg-white\\/4:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-white\\/4:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-white) 4%, transparent);
  }
}
.x-commerce .dark\\:bg-\\[linear-gradient\\(to_bottom\\,transparent\\,var\\(--x-bg-secondary\\)_--spacing\\(4\\)\\)\\]:where([data-theme='dark'], [data-theme='dark'] *),.x-commerce.dark\\:bg-\\[linear-gradient\\(to_bottom\\,transparent\\,var\\(--x-bg-secondary\\)_--spacing\\(4\\)\\)\\]:where([data-theme='dark'], [data-theme='dark'] *) {
  background-image: linear-gradient(to bottom,transparent,var(--x-bg-secondary) calc(var(--spacing, 0.25rem) * 4));
}
.x-commerce .dark\\:from-\\[\\#0b2f5c\\]:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:from-\\[\\#0b2f5c\\]:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-gradient-from: #0b2f5c;
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .dark\\:from-\\[\\#0890ff\\]\\/5:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:from-\\[\\#0890ff\\]\\/5:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-gradient-from: color-mix(in oklab, #0890ff 5%, transparent);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .dark\\:from-blue-500\\/5:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:from-blue-500\\/5:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-gradient-from: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-gradient-from: color-mix(in oklab, var(--x-blue-500) 5%, transparent);
  }
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .dark\\:to-\\[\\#0890ff\\]\\/15:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:to-\\[\\#0890ff\\]\\/15:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-gradient-to: color-mix(in oklab, #0890ff 15%, transparent);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .dark\\:to-\\[\\#07407b\\]:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:to-\\[\\#07407b\\]:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-gradient-to: #07407b;
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .dark\\:to-blue-500\\/15:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:to-blue-500\\/15:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-gradient-to: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-gradient-to: color-mix(in oklab, var(--x-blue-500) 15%, transparent);
  }
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .dark\\:text-\\[\\#009cde\\]:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:text-\\[\\#009cde\\]:where([data-theme='dark'], [data-theme='dark'] *) {
  color: #009cde;
}
.x-commerce .dark\\:text-white:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:text-white:where([data-theme='dark'], [data-theme='dark'] *) {
  color: var(--x-white);
}
.x-commerce .dark\\:shadow-\\[0_0_16px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\]:where([data-theme='dark'], [data-theme='dark'] *),.x-commerce.dark\\:shadow-\\[0_0_16px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\]:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-shadow: 0 0 16px var(--tw-shadow-color, rgba(0,0,0,0.2));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .dark\\:shadow-none:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:shadow-none:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-shadow: 0 0 #0000;
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .dark\\:invert:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:invert:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-invert: invert(100%);
  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
}
.x-commerce .dark\\:not-first\\:border-white\\/10:where([data-theme='dark'], [data-theme='dark'] *):not(:first-child), .x-commerce.dark\\:not-first\\:border-white\\/10:where([data-theme='dark'], [data-theme='dark'] *):not(:first-child) {
  border-color: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-white) 10%, transparent);
  }
}
.x-commerce .not-has-\\[\\>\\[data-list-group\\]\\]\\:dark\\:bg-white-04:not(:has( > [data-list-group])):where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.not-has-\\[\\>\\[data-list-group\\]\\]\\:dark\\:bg-white-04:not(:has( > [data-list-group])):where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-white-04);
}
@media (hover: hover) {
  .x-commerce .dark\\:hover\\:bg-btn-secondary-hover:where([data-theme='dark'], [data-theme='dark'] *):hover, .x-commerce.dark\\:hover\\:bg-btn-secondary-hover:where([data-theme='dark'], [data-theme='dark'] *):hover {
    background-color: var(--x-btn-secondary-hover);
  }
}
@starting-style {
  .x-commerce .starting\\:-mb-5, .x-commerce.starting\\:-mb-5 {
    margin-bottom: calc(var(--spacing, 0.25rem) * -5);
  }
  .x-commerce .starting\\:grid-rows-\\[0fr\\], .x-commerce.starting\\:grid-rows-\\[0fr\\] {
    grid-template-rows: 0fr;
  }
  .x-commerce .starting\\:opacity-0, .x-commerce.starting\\:opacity-0 {
    opacity: 0%;
  }
}
@media (pointer: coarse) {
  .x-commerce .pointer-coarse\\:text-\\[length\\:max\\(16px\\,calc\\(16\\/var\\(--x-root-font-size\\,16\\)\\*1rem\\)\\)\\],.x-commerce.pointer-coarse\\:text-\\[length\\:max\\(16px\\,calc\\(16\\/var\\(--x-root-font-size\\,16\\)\\*1rem\\)\\)\\] {
    font-size: max(16px, calc(16 / var(--x-root-font-size,16) * 1rem));
  }
}
.x-commerce .\\[\\&_a\\]\\:text-inherit a, .x-commerce.\\[\\&_a\\]\\:text-inherit a {
  color: inherit;
}
.x-commerce .\\[\\&_a\\]\\:text-primary a, .x-commerce.\\[\\&_a\\]\\:text-primary a {
  color: var(--x-fg-primary);
}
.x-commerce .\\[\\&_a\\]\\:underline a, .x-commerce.\\[\\&_a\\]\\:underline a {
  text-decoration-line: underline;
}
.x-commerce .\\[\\&_path\\]\\:animate-checkmark path, .x-commerce.\\[\\&_path\\]\\:animate-checkmark path {
  animation: checkmark 250ms ease-out forwards;
}
.x-commerce .\\[\\&_strong\\]\\:font-semibold strong, .x-commerce.\\[\\&_strong\\]\\:font-semibold strong {
  --tw-font-weight: var(--font-weight-semibold, 600);
  font-weight: var(--font-weight-semibold, 600);
}
.x-commerce .\\[\\&_strong\\]\\:text-primary strong, .x-commerce.\\[\\&_strong\\]\\:text-primary strong {
  color: var(--x-fg-primary);
}
.x-commerce .\\[\\&_svg\\]\\:size-3 svg, .x-commerce.\\[\\&_svg\\]\\:size-3 svg {
  width: calc(var(--spacing, 0.25rem) * 3);
  height: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .\\[\\&_svg\\]\\:size-3\\.5 svg, .x-commerce.\\[\\&_svg\\]\\:size-3\\.5 svg {
  width: calc(var(--spacing, 0.25rem) * 3.5);
  height: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .\\[\\&_svg\\]\\:size-4 svg, .x-commerce.\\[\\&_svg\\]\\:size-4 svg {
  width: calc(var(--spacing, 0.25rem) * 4);
  height: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .\\[\\&_svg\\]\\:size-5 svg, .x-commerce.\\[\\&_svg\\]\\:size-5 svg {
  width: calc(var(--spacing, 0.25rem) * 5);
  height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .\\[\\&_svg\\]\\:size-6 svg, .x-commerce.\\[\\&_svg\\]\\:size-6 svg {
  width: calc(var(--spacing, 0.25rem) * 6);
  height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .\\[\\&_svg\\]\\:size-7 svg, .x-commerce.\\[\\&_svg\\]\\:size-7 svg {
  width: calc(var(--spacing, 0.25rem) * 7);
  height: calc(var(--spacing, 0.25rem) * 7);
}
.x-commerce .\\[\\&_svg\\]\\:size-\\[1em\\] svg, .x-commerce.\\[\\&_svg\\]\\:size-\\[1em\\] svg {
  width: 1em;
  height: 1em;
}
.x-commerce .\\[\\&_svg\\]\\:size-\\[17px\\] svg, .x-commerce.\\[\\&_svg\\]\\:size-\\[17px\\] svg {
  width: 17px;
  height: 17px;
}
.x-commerce .\\[\\&_svg\\]\\:size-\\[18px\\] svg, .x-commerce.\\[\\&_svg\\]\\:size-\\[18px\\] svg {
  width: 18px;
  height: 18px;
}
.x-commerce .\\[\\&_svg\\]\\:size-\\[20px\\] svg, .x-commerce.\\[\\&_svg\\]\\:size-\\[20px\\] svg {
  width: 20px;
  height: 20px;
}
.x-commerce .\\[\\&_svg\\]\\:size-\\[30\\.857px\\] svg, .x-commerce.\\[\\&_svg\\]\\:size-\\[30\\.857px\\] svg {
  width: 30.857px;
  height: 30.857px;
}
.x-commerce .\\[\\&_svg\\]\\:transition-transform svg, .x-commerce.\\[\\&_svg\\]\\:transition-transform svg {
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .\\[\\&_svg\\]\\:duration-200 svg, .x-commerce.\\[\\&_svg\\]\\:duration-200 svg {
  --tw-duration: 200ms;
  transition-duration: 200ms;
}
@media (hover: hover) {
  .x-commerce .group-hover\\:\\[\\&_svg\\]\\:scale-110:is(:where(.group):hover *) svg, .x-commerce.group-hover\\:\\[\\&_svg\\]\\:scale-110:is(:where(.group):hover *) svg {
    --tw-scale-x: 110%;
    --tw-scale-y: 110%;
    --tw-scale-z: 110%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .x-commerce .group-hover\\:\\[\\&_svg\\]\\:rotate-\\[7deg\\]:is(:where(.group):hover *) svg, .x-commerce.group-hover\\:\\[\\&_svg\\]\\:rotate-\\[7deg\\]:is(:where(.group):hover *) svg {
    rotate: 7deg;
  }
}
.x-commerce .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-3 svg:not([class*='size-']), .x-commerce.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-3 svg:not([class*='size-']) {
  width: calc(var(--spacing, 0.25rem) * 3);
  height: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*='size-']), .x-commerce.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*='size-']) {
  width: calc(var(--spacing, 0.25rem) * 4);
  height: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-5 svg:not([class*='size-']), .x-commerce.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-5 svg:not([class*='size-']) {
  width: calc(var(--spacing, 0.25rem) * 5);
  height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6 svg:not([class*='size-']), .x-commerce.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6 svg:not([class*='size-']) {
  width: calc(var(--spacing, 0.25rem) * 6);
  height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-\\[18px\\] svg:not([class*='size-']), .x-commerce.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-\\[18px\\] svg:not([class*='size-']) {
  width: 18px;
  height: 18px;
}
.x-commerce .\\[\\&\\:\\:-webkit-scrollbar\\]\\:hidden::-webkit-scrollbar, .x-commerce.\\[\\&\\:\\:-webkit-scrollbar\\]\\:hidden::-webkit-scrollbar {
  display: none;
}
.x-commerce .\\[\\&\\:\\:-webkit-slider-thumb\\]\\:size-5::-webkit-slider-thumb, .x-commerce.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:size-5::-webkit-slider-thumb {
  width: calc(var(--spacing, 0.25rem) * 5);
  height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .\\[\\&\\:\\:-webkit-slider-thumb\\]\\:appearance-none::-webkit-slider-thumb, .x-commerce.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:appearance-none::-webkit-slider-thumb {
  appearance: none;
}
.x-commerce .\\[\\&\\:\\:-webkit-slider-thumb\\]\\:rounded-full::-webkit-slider-thumb, .x-commerce.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:rounded-full::-webkit-slider-thumb {
  border-radius: 9999px;
}
.x-commerce .\\[\\&\\:\\:-webkit-slider-thumb\\]\\:bg-white::-webkit-slider-thumb, .x-commerce.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:bg-white::-webkit-slider-thumb {
  background-color: var(--x-white);
}
.x-commerce .\\[\\&\\:has\\(\\+\\*\\:not\\(\\:empty\\)\\)\\]\\:hidden:has( + :not(:empty)), .x-commerce.\\[\\&\\:has\\(\\+\\*\\:not\\(\\:empty\\)\\)\\]\\:hidden:has( + :not(:empty)) {
  display: none;
}
@media (width < 517px) {
  .x-commerce .max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]\\]\\:h-12 > [data-slot=xds-button], .x-commerce.max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]\\]\\:h-12 > [data-slot=xds-button] {
    height: calc(var(--spacing, 0.25rem) * 12);
  }
  .x-commerce .max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]\\]\\:flex-1 > [data-slot=xds-button], .x-commerce.max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]\\]\\:flex-1 > [data-slot=xds-button] {
    flex: 1;
  }
  .x-commerce .max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]\\]\\:text-headline2 > [data-slot=xds-button], .x-commerce.max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]\\]\\:text-headline2 > [data-slot=xds-button] {
    font-size: calc(17 / var(--x-root-font-size, 16) * 1rem);
    line-height: var(--tw-leading, calc(20 / var(--x-root-font-size, 16) * 1rem));
  }
  .x-commerce .max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6 > [data-slot=xds-button] svg:not([class*='size-']), .x-commerce.max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6 > [data-slot=xds-button] svg:not([class*='size-']) {
    width: calc(var(--spacing, 0.25rem) * 6);
    height: calc(var(--spacing, 0.25rem) * 6);
  }
}
.x-commerce .\\[\\&\\>input\\]\\:min-w-16 > input, .x-commerce.\\[\\&\\>input\\]\\:min-w-16 > input {
  min-width: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .\\[\\&\\>li\\:first-child\\]\\:border-t > li:first-child, .x-commerce.\\[\\&\\>li\\:first-child\\]\\:border-t > li:first-child {
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
}
.x-commerce .\\[\\&\\>li\\:first-child\\]\\:pt-6 > li:first-child, .x-commerce.\\[\\&\\>li\\:first-child\\]\\:pt-6 > li:first-child {
  padding-top: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .\\[\\&\\>svg\\]\\:size-\\[18px\\] > svg, .x-commerce.\\[\\&\\>svg\\]\\:size-\\[18px\\] > svg {
  width: 18px;
  height: 18px;
}
.x-commerce .\\[\\&\\>svg\\]\\:shrink-0 > svg, .x-commerce.\\[\\&\\>svg\\]\\:shrink-0 > svg {
  flex-shrink: 0;
}
.x-commerce .\\[\\&\\>svg\\]\\:text-tertiary > svg, .x-commerce.\\[\\&\\>svg\\]\\:text-tertiary > svg {
  color: var(--x-fg-tertiary);
}
@media (height<720px) {
  .x-commerce .\\[\\@media\\(height\\<720px\\)\\]\\:bottom-3, .x-commerce.\\[\\@media\\(height\\<720px\\)\\]\\:bottom-3 {
    bottom: calc(var(--spacing, 0.25rem) * 3);
  }
  .x-commerce .\\[\\@media\\(height\\<720px\\)\\]\\:overflow-visible\\!, .x-commerce.\\[\\@media\\(height\\<720px\\)\\]\\:overflow-visible\\! {
    overflow: visible !important;
  }
  .x-commerce .\\[\\@media\\(height\\<720px\\)\\]\\:before\\:opacity-100::before, .x-commerce.\\[\\@media\\(height\\<720px\\)\\]\\:before\\:opacity-100::before {
    content: var(--tw-content);
    opacity: 100%;
  }
}
@media (min-height:720px) {
  .x-commerce .\\[\\@media\\(min-height\\:720px\\)\\]\\:h-full, .x-commerce.\\[\\@media\\(min-height\\:720px\\)\\]\\:h-full {
    height: 100%;
  }
  .x-commerce .\\[\\@media\\(min-height\\:720px\\)\\]\\:flex-1, .x-commerce.\\[\\@media\\(min-height\\:720px\\)\\]\\:flex-1 {
    flex: 1;
  }
}
.cursor-commerce {
  --x-black: #000000;
  --x-white: #ffffff;
  --x-neutral-000: #f2f2f2;
  --x-neutral-050: #ebebeb;
  --x-neutral-100: #d9d9d9;
  --x-neutral-200: #cccccc;
  --x-neutral-300: #b2b2b2;
  --x-neutral-400: #999999;
  --x-neutral-500: #808080;
  --x-neutral-600: #666666;
  --x-neutral-700: #4d4d4d;
  --x-neutral-800: #333333;
  --x-neutral-900: #262626;
  --x-neutral-1000: #141414;
  --x-neutral-1100: #0d0d0d;
  --x-blue-000: #eafaff;
  --x-blue-050: #d7f6ff;
  --x-blue-100: #bff2ff;
  --x-blue-200: #97e3ff;
  --x-blue-300: #6bc9fb;
  --x-blue-400: #43b3f6;
  --x-blue-500: #1d9bf0;
  --x-blue-600: #0083eb;
  --x-blue-700: #006fd6;
  --x-blue-800: #005ac2;
  --x-blue-900: #003886;
  --x-blue-1000: #00154a;
  --x-blue-1100: #02113d;
  --x-green-000: #edfff9;
  --x-green-050: #dbf8eb;
  --x-green-100: #c2f1dc;
  --x-green-200: #92e3bf;
  --x-green-300: #61d6a3;
  --x-green-400: #31c88e;
  --x-green-500: #00ba7c;
  --x-green-600: #009c64;
  --x-green-700: #007e50;
  --x-green-800: #00613d;
  --x-green-900: #004329;
  --x-green-1000: #00251a;
  --x-green-1100: #002218;
  --x-red-000: #fff0f1;
  --x-red-050: #fedee3;
  --x-red-100: #fdc9ce;
  --x-red-200: #fb9fa8;
  --x-red-300: #f87580;
  --x-red-400: #f64b5c;
  --x-red-500: #f4212e;
  --x-red-600: #d11a28;
  --x-red-700: #ae1425;
  --x-red-800: #8a0d20;
  --x-red-900: #67070f;
  --x-red-1000: #440004;
  --x-red-1100: #3d0105;
  --x-orange-000: #fef5ec;
  --x-orange-050: #ffeddb;
  --x-orange-100: #ffe0c2;
  --x-orange-200: #ffc692;
  --x-orange-300: #ffad61;
  --x-orange-400: #ff9331;
  --x-orange-500: #ff7a00;
  --x-orange-600: #d86000;
  --x-orange-700: #b04500;
  --x-orange-800: #892b00;
  --x-orange-900: #692100;
  --x-orange-1000: #491600;
  --x-orange-1100: #3c1201;
  --x-yellow-000: #fffdea;
  --x-yellow-050: #fffed7;
  --x-yellow-100: #fffec0;
  --x-yellow-200: #fff595;
  --x-yellow-300: #ffeb6b;
  --x-yellow-400: #ffe042;
  --x-yellow-500: #ffd400;
  --x-yellow-600: #dcab00;
  --x-yellow-700: #b88200;
  --x-yellow-800: #955900;
  --x-yellow-900: #6f3e00;
  --x-yellow-1000: #482300;
  --x-yellow-1100: #3d1e02;
  --x-purple-000: #f5f3ff;
  --x-purple-050: #ece8ff;
  --x-purple-100: #dfd8ff;
  --x-purple-200: #c5b7ff;
  --x-purple-300: #ac97ff;
  --x-purple-400: #9276ff;
  --x-purple-500: #7856ff;
  --x-purple-600: #6545db;
  --x-purple-700: #5234b7;
  --x-purple-800: #3f2292;
  --x-purple-900: #2c116e;
  --x-purple-1000: #19004a;
  --x-purple-1100: #160634;
  --x-plum-000: #ffefff;
  --x-plum-050: #fae0fa;
  --x-plum-100: #f4cdf5;
  --x-plum-200: #e9a7eb;
  --x-plum-300: #df82e0;
  --x-plum-400: #d45cd6;
  --x-plum-500: #c936cc;
  --x-plum-600: #ab2bae;
  --x-plum-700: #8d2090;
  --x-plum-800: #701671;
  --x-plum-900: #520b53;
  --x-plum-1000: #340035;
  --x-plum-1100: #2d032d;
  --x-magenta-000: #fff1f8;
  --x-magenta-050: #ffdded;
  --x-magenta-100: #fec7e1;
  --x-magenta-200: #fd9bc9;
  --x-magenta-300: #fb70b0;
  --x-magenta-400: #fa4498;
  --x-magenta-500: #f91880;
  --x-magenta-600: #d4136d;
  --x-magenta-700: #af0e5a;
  --x-magenta-800: #890a46;
  --x-magenta-900: #640533;
  --x-magenta-1000: #3f001f;
  --x-magenta-1100: #37011c;
  --x-teal-000: #e9feff;
  --x-teal-050: #d1f8fa;
  --x-teal-100: #b3f1f4;
  --x-teal-200: #78e4e8;
  --x-teal-300: #3cd6dd;
  --x-teal-400: #00c9d1;
  --x-teal-500: #00afb6;
  --x-teal-600: #009399;
  --x-teal-700: #00777c;
  --x-teal-800: #005a5f;
  --x-teal-900: #003e42;
  --x-teal-1000: #002225;
  --x-teal-1100: #022023;
  --x-black-00: rgba(0, 0, 0, 0);
  --x-black-01: rgba(0, 0, 0, 0.01);
  --x-black-02: rgba(0, 0, 0, 0.02);
  --x-black-03: rgba(0, 0, 0, 0.03);
  --x-black-04: rgba(0, 0, 0, 0.04);
  --x-black-05: rgba(0, 0, 0, 0.05);
  --x-black-06: rgba(0, 0, 0, 0.06);
  --x-black-07: rgba(0, 0, 0, 0.07);
  --x-black-08: rgba(0, 0, 0, 0.08);
  --x-black-09: rgba(0, 0, 0, 0.09);
  --x-black-10: rgba(0, 0, 0, 0.1);
  --x-black-15: rgba(0, 0, 0, 0.15);
  --x-black-20: rgba(0, 0, 0, 0.2);
  --x-black-30: rgba(0, 0, 0, 0.3);
  --x-black-40: rgba(0, 0, 0, 0.4);
  --x-black-50: rgba(0, 0, 0, 0.5);
  --x-black-60: rgba(0, 0, 0, 0.6);
  --x-black-70: rgba(0, 0, 0, 0.7);
  --x-black-80: rgba(0, 0, 0, 0.8);
  --x-black-85: rgba(0, 0, 0, 0.85);
  --x-black-90: rgba(0, 0, 0, 0.9);
  --x-black-95: rgba(0, 0, 0, 0.95);
  --x-white-00: rgba(255, 255, 255, 0);
  --x-white-01: rgba(255, 255, 255, 0.01);
  --x-white-02: rgba(255, 255, 255, 0.02);
  --x-white-03: rgba(255, 255, 255, 0.03);
  --x-white-04: rgba(255, 255, 255, 0.04);
  --x-white-05: rgba(255, 255, 255, 0.05);
  --x-white-06: rgba(255, 255, 255, 0.06);
  --x-white-07: rgba(255, 255, 255, 0.07);
  --x-white-08: rgba(255, 255, 255, 0.08);
  --x-white-09: rgba(255, 255, 255, 0.09);
  --x-white-10: rgba(255, 255, 255, 0.1);
  --x-white-15: rgba(255, 255, 255, 0.15);
  --x-white-20: rgba(255, 255, 255, 0.2);
  --x-white-30: rgba(255, 255, 255, 0.3);
  --x-white-40: rgba(255, 255, 255, 0.4);
  --x-white-50: rgba(255, 255, 255, 0.5);
  --x-white-60: rgba(255, 255, 255, 0.6);
  --x-white-70: rgba(255, 255, 255, 0.7);
  --x-white-80: rgba(255, 255, 255, 0.8);
  --x-white-85: rgba(255, 255, 255, 0.85);
  --x-white-90: rgba(255, 255, 255, 0.9);
  --x-white-95: rgba(255, 255, 255, 0.95);
  --x-radius-m: 1;
  --x-font-sans: TwitterChirp, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif;
}
.cursor-commerce[data-theme='dark'], .cursor-commerce[data-theme='dark'], .x-commerce .dark-theme, .x-commerce.dark-theme {
  --x-blue-000: #02113d;
  --x-blue-050: #00154a;
  --x-blue-100: #003886;
  --x-blue-200: #005ac2;
  --x-blue-300: #006fd6;
  --x-blue-400: #0083eb;
  --x-blue-500: #1d9bf0;
  --x-blue-600: #43b3f6;
  --x-blue-700: #6bc9fb;
  --x-blue-800: #97e3ff;
  --x-blue-900: #bff2ff;
  --x-blue-1000: #d7f6ff;
  --x-blue-1100: #eafaff;
  --x-green-000: #002218;
  --x-green-050: #00251a;
  --x-green-100: #004329;
  --x-green-200: #00613d;
  --x-green-300: #007e50;
  --x-green-400: #009c64;
  --x-green-500: #00ba7c;
  --x-green-600: #31c88e;
  --x-green-700: #61d6a3;
  --x-green-800: #92e3bf;
  --x-green-900: #c2f1dc;
  --x-green-1000: #dbf8eb;
  --x-green-1100: #edfff9;
  --x-red-000: #3d0105;
  --x-red-050: #440004;
  --x-red-100: #67070f;
  --x-red-200: #8a0d20;
  --x-red-300: #ae1425;
  --x-red-400: #d11a28;
  --x-red-500: #f4212e;
  --x-red-600: #f64b5c;
  --x-red-700: #f87580;
  --x-red-800: #fb9fa8;
  --x-red-900: #fdc9ce;
  --x-red-1000: #fedee3;
  --x-red-1100: #fff0f1;
  --x-orange-000: #3c1201;
  --x-orange-050: #491600;
  --x-orange-100: #692100;
  --x-orange-200: #892b00;
  --x-orange-300: #b04500;
  --x-orange-400: #d86000;
  --x-orange-500: #ff7a00;
  --x-orange-600: #ff9331;
  --x-orange-700: #ffad61;
  --x-orange-800: #ffc692;
  --x-orange-900: #ffe0c2;
  --x-orange-1000: #ffeddb;
  --x-orange-1100: #fef5ec;
  --x-yellow-000: #3d1e02;
  --x-yellow-050: #482300;
  --x-yellow-100: #6f3e00;
  --x-yellow-200: #955900;
  --x-yellow-300: #b88200;
  --x-yellow-400: #dcab00;
  --x-yellow-500: #ffd400;
  --x-yellow-600: #ffe042;
  --x-yellow-700: #ffeb6b;
  --x-yellow-800: #fff595;
  --x-yellow-900: #fffec0;
  --x-yellow-1000: #fffed7;
  --x-yellow-1100: #fffdea;
  --x-purple-000: #160634;
  --x-purple-050: #19004a;
  --x-purple-100: #2c116e;
  --x-purple-200: #3f2292;
  --x-purple-300: #5234b7;
  --x-purple-400: #6545db;
  --x-purple-500: #7856ff;
  --x-purple-600: #9276ff;
  --x-purple-700: #ac97ff;
  --x-purple-800: #c5b7ff;
  --x-purple-900: #dfd8ff;
  --x-purple-1000: #ece8ff;
  --x-purple-1100: #f5f3ff;
  --x-plum-000: #2d032d;
  --x-plum-050: #340035;
  --x-plum-100: #520b53;
  --x-plum-200: #701671;
  --x-plum-300: #8d2090;
  --x-plum-400: #ab2bae;
  --x-plum-500: #c936cc;
  --x-plum-600: #d45cd6;
  --x-plum-700: #df82e0;
  --x-plum-800: #e9a7eb;
  --x-plum-900: #f4cdf5;
  --x-plum-1000: #fae0fa;
  --x-plum-1100: #ffefff;
  --x-magenta-000: #37011c;
  --x-magenta-050: #3f001f;
  --x-magenta-100: #640533;
  --x-magenta-200: #890a46;
  --x-magenta-300: #af0e5a;
  --x-magenta-400: #d4136d;
  --x-magenta-500: #f91880;
  --x-magenta-600: #fa4498;
  --x-magenta-700: #fb70b0;
  --x-magenta-800: #fd9bc9;
  --x-magenta-900: #fec7e1;
  --x-magenta-1000: #ffdded;
  --x-magenta-1100: #fff1f8;
  --x-teal-000: #022023;
  --x-teal-050: #002225;
  --x-teal-100: #003e42;
  --x-teal-200: #005a5f;
  --x-teal-300: #00777c;
  --x-teal-400: #009399;
  --x-teal-500: #00afb6;
  --x-teal-600: #00c9d1;
  --x-teal-700: #3cd6dd;
  --x-teal-800: #78e4e8;
  --x-teal-900: #b3f1f4;
  --x-teal-1000: #d1f8fa;
  --x-teal-1100: #e9feff;
}
.cursor-commerce, .cursor-commerce[data-theme='light'], .cursor-commerce[data-theme='light'], .x-commerce .light-theme, .x-commerce.light-theme {
  color-scheme: light;
  --x-bg-primary: var(--x-white);
  --x-bg-secondary: var(--x-neutral-000);
  --x-bg-tertiary: var(--x-neutral-050);
  --x-bg-quaternary: var(--x-black-04);
  --x-bg-sheets: var(--x-white);
  --x-bg-inputs: var(--x-black-04);
  --x-bg-modal: var(--x-white);
  --x-bg-transparent: transparent;
  --x-bg-destructive: var(--x-red-050);
  --x-bg-success: var(--x-green-000);
  --x-bg-info: var(--x-blue-000);
  --x-bg-warning: var(--x-yellow-000);
  --x-bg-subscribe: var(--x-plum-050);
  --x-fg-primary: var(--x-black);
  --x-fg-secondary: var(--x-black-60);
  --x-fg-tertiary: var(--x-black-30);
  --x-fg-inverted: var(--x-white);
  --x-fg-on-color: var(--x-white);
  --x-fg-brand: var(--x-blue-500);
  --x-fg-destructive: var(--x-red-500);
  --x-fg-success: var(--x-green-500);
  --x-fg-warning: var(--x-yellow-500);
  --x-fg-subscribe: var(--x-plum-500);
  --x-border-normal: var(--x-black-15);
  --x-border-hover: var(--x-black-20);
  --x-border-active: var(--x-black-30);
  --x-border-media: var(--x-black-04);
  --x-border-elevated: rgba(255, 255, 255, 0.2);
  --x-border-destructive: var(--x-red-500);
  --x-border-destructive-light: var(--x-red-100);
  --x-btn-primary: var(--x-black);
  --x-btn-primary-hover: var(--x-black-80);
  --x-btn-primary-pressed: var(--x-black-70);
  --x-btn-secondary: var(--x-neutral-050);
  --x-btn-secondary-hover: var(--x-neutral-100);
  --x-btn-secondary-pressed: var(--x-neutral-200);
  --x-btn-tertiary: var(--x-black-04);
  --x-btn-tertiary-hover: var(--x-black-08);
  --x-btn-tertiary-pressed: var(--x-black-15);
  --x-btn-tertiary-opaque: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    --x-btn-tertiary-opaque: color-mix(
    in srgb,
    var(--x-black) 4%,
    var(--x-bg-primary)
  );
  }
  --x-btn-tertiary-opaque-hover: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    --x-btn-tertiary-opaque-hover: color-mix(
    in srgb,
    var(--x-black) 8%,
    var(--x-bg-primary)
  );
  }
  --x-btn-tertiary-opaque-pressed: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    --x-btn-tertiary-opaque-pressed: color-mix(
    in srgb,
    var(--x-black) 15%,
    var(--x-bg-primary)
  );
  }
  --x-btn-ghost-hover: var(--x-black-04);
  --x-btn-ghost-pressed: var(--x-black-15);
  --x-btn-inverted: var(--x-white);
  --x-btn-inverted-hover: var(--x-white-90);
  --x-btn-inverted-pressed: var(--x-white-80);
  --x-btn-brand: var(--x-blue-500);
  --x-btn-brand-hover: var(--x-blue-600);
  --x-btn-brand-pressed: var(--x-blue-700);
  --x-btn-destructive: var(--x-red-500);
  --x-btn-destructive-hover: var(--x-red-600);
  --x-btn-destructive-pressed: var(--x-red-700);
  --x-hover-subtle: var(--x-black-04);
  --x-overlay-normal: var(--x-black-20);
  --x-overlay-strong: var(--x-black-40);
  --x-toast-bg: rgba(34, 34, 34, 0.6);
  --x-tooltip-bg: var(--x-neutral-800);
  --x-tooltip-fg: var(--x-white);
  --x-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --x-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --x-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --x-shadow-toast: 0 8px 32px rgba(0, 0, 0, 0.2);
  --x-shadow-popup: 0 4px 20px rgba(0, 0, 0, 0.08);
  --x-ring: var(--x-blue-500);
  --x-shadow-focus: 0 0 0 2px var(--x-ring);
  @supports (color: color-mix(in lab, red, red)) {
    --x-shadow-focus: 0 0 0 2px color-mix(in srgb, var(--x-ring) 75%, transparent);
  }
  --x-shadow-focus-destructive: 0 0 0 2px
    var(--x-border-destructive);
  @supports (color: color-mix(in lab, red, red)) {
    --x-shadow-focus-destructive: 0 0 0 2px
    color-mix(in srgb, var(--x-border-destructive) 80%, transparent);
  }
}
.cursor-commerce[data-theme='dark'], .cursor-commerce[data-theme='dark'], .x-commerce .dark-theme, .x-commerce.dark-theme {
  color-scheme: dark;
  --x-bg-primary: var(--x-black);
  --x-bg-secondary: var(--x-neutral-1000);
  --x-bg-tertiary: var(--x-neutral-900);
  --x-bg-quaternary: var(--x-white-04);
  --x-bg-modal: var(--x-neutral-1000);
  --x-bg-sheets: var(--x-neutral-1000);
  --x-bg-inputs: var(--x-white-08);
  --x-bg-transparent: transparent;
  --x-bg-destructive: var(--x-red-050);
  --x-bg-success: var(--x-green-000);
  --x-bg-info: var(--x-blue-000);
  --x-bg-warning: var(--x-yellow-000);
  --x-bg-subscribe: var(--x-plum-050);
  --x-fg-primary: var(--x-white);
  --x-fg-secondary: var(--x-white-60);
  --x-fg-tertiary: var(--x-white-30);
  --x-fg-inverted: var(--x-black);
  --x-fg-on-color: var(--x-white);
  --x-fg-brand: var(--x-blue-500);
  --x-fg-destructive: var(--x-red-500);
  --x-fg-success: var(--x-green-500);
  --x-fg-warning: var(--x-yellow-500);
  --x-fg-subscribe: var(--x-plum-500);
  --x-border-normal: var(--x-white-15);
  --x-border-hover: var(--x-white-20);
  --x-border-active: var(--x-white-30);
  --x-border-media: var(--x-white-04);
  --x-border-elevated: rgba(255, 255, 255, 0.2);
  --x-border-destructive: var(--x-red-500);
  --x-border-destructive-light: var(--x-red-100);
  --x-btn-primary: var(--x-white);
  --x-btn-primary-hover: var(--x-white-80);
  --x-btn-primary-pressed: var(--x-white-70);
  --x-btn-secondary: var(--x-neutral-900);
  --x-btn-secondary-hover: var(--x-neutral-800);
  --x-btn-secondary-pressed: var(--x-neutral-700);
  --x-btn-tertiary: var(--x-white-10);
  --x-btn-tertiary-hover: var(--x-white-15);
  --x-btn-tertiary-pressed: var(--x-white-20);
  --x-btn-tertiary-opaque: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    --x-btn-tertiary-opaque: color-mix(
    in srgb,
    var(--x-white) 10%,
    var(--x-bg-primary)
  );
  }
  --x-btn-tertiary-opaque-hover: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    --x-btn-tertiary-opaque-hover: color-mix(
    in srgb,
    var(--x-white) 15%,
    var(--x-bg-primary)
  );
  }
  --x-btn-tertiary-opaque-pressed: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    --x-btn-tertiary-opaque-pressed: color-mix(
    in srgb,
    var(--x-white) 20%,
    var(--x-bg-primary)
  );
  }
  --x-btn-ghost-hover: var(--x-white-08);
  --x-btn-ghost-pressed: var(--x-white-15);
  --x-btn-inverted: var(--x-black);
  --x-btn-inverted-hover: var(--x-black-90);
  --x-btn-inverted-pressed: var(--x-black-80);
  --x-btn-brand: var(--x-blue-500);
  --x-btn-brand-hover: var(--x-blue-600);
  --x-btn-brand-pressed: var(--x-blue-700);
  --x-btn-destructive: var(--x-red-500);
  --x-btn-destructive-hover: var(--x-red-600);
  --x-btn-destructive-pressed: var(--x-red-700);
  --x-hover-subtle: var(--x-white-08);
  --x-overlay-normal: var(--x-black-40);
  --x-overlay-strong: var(--x-black-80);
  --x-toast-bg: rgba(34, 34, 34, 0.6);
  --x-tooltip-bg: var(--x-neutral-300);
  --x-tooltip-fg: var(--x-black);
  --x-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
  --x-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  --x-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
  --x-shadow-toast: 0 8px 32px rgba(0, 0, 0, 0.35);
  --x-shadow-popup: 0 4px 20px rgba(0, 0, 0, 0.4);
  --x-ring: var(--x-blue-500);
  --x-shadow-focus: 0 0 0 2px var(--x-ring);
  @supports (color: color-mix(in lab, red, red)) {
    --x-shadow-focus: 0 0 0 2px color-mix(in srgb, var(--x-ring) 75%, transparent);
  }
  --x-shadow-focus-destructive: 0 0 0 2px
    var(--x-border-destructive);
  @supports (color: color-mix(in lab, red, red)) {
    --x-shadow-focus-destructive: 0 0 0 2px
    color-mix(in srgb, var(--x-border-destructive) 80%, transparent);
  }
}
.cursor-commerce, .cursor-commerce[data-theme='light'], .cursor-commerce[data-theme='light'], .x-commerce .light-theme, .x-commerce.light-theme {
  --x-fg-alpha-00: rgba(0, 0, 0, 0);
  --x-fg-alpha-01: rgba(0, 0, 0, 0.01);
  --x-fg-alpha-02: rgba(0, 0, 0, 0.02);
  --x-fg-alpha-03: rgba(0, 0, 0, 0.03);
  --x-fg-alpha-04: rgba(0, 0, 0, 0.04);
  --x-fg-alpha-05: rgba(0, 0, 0, 0.05);
  --x-fg-alpha-06: rgba(0, 0, 0, 0.06);
  --x-fg-alpha-07: rgba(0, 0, 0, 0.07);
  --x-fg-alpha-08: rgba(0, 0, 0, 0.08);
  --x-fg-alpha-09: rgba(0, 0, 0, 0.09);
  --x-fg-alpha-10: rgba(0, 0, 0, 0.1);
  --x-fg-alpha-15: rgba(0, 0, 0, 0.15);
  --x-fg-alpha-20: rgba(0, 0, 0, 0.2);
  --x-fg-alpha-30: rgba(0, 0, 0, 0.3);
  --x-fg-alpha-40: rgba(0, 0, 0, 0.4);
  --x-fg-alpha-50: rgba(0, 0, 0, 0.5);
  --x-fg-alpha-60: rgba(0, 0, 0, 0.6);
  --x-fg-alpha-70: rgba(0, 0, 0, 0.7);
  --x-fg-alpha-80: rgba(0, 0, 0, 0.8);
  --x-fg-alpha-85: rgba(0, 0, 0, 0.85);
  --x-fg-alpha-90: rgba(0, 0, 0, 0.9);
  --x-fg-alpha-95: rgba(0, 0, 0, 0.95);
  --x-fg-alpha-100: rgba(0, 0, 0, 1);
  --x-bg-alpha-00: rgba(255, 255, 255, 0);
  --x-bg-alpha-01: rgba(255, 255, 255, 0.01);
  --x-bg-alpha-02: rgba(255, 255, 255, 0.02);
  --x-bg-alpha-03: rgba(255, 255, 255, 0.03);
  --x-bg-alpha-04: rgba(255, 255, 255, 0.04);
  --x-bg-alpha-05: rgba(255, 255, 255, 0.05);
  --x-bg-alpha-06: rgba(255, 255, 255, 0.06);
  --x-bg-alpha-07: rgba(255, 255, 255, 0.07);
  --x-bg-alpha-08: rgba(255, 255, 255, 0.08);
  --x-bg-alpha-09: rgba(255, 255, 255, 0.09);
  --x-bg-alpha-10: rgba(255, 255, 255, 0.1);
  --x-bg-alpha-15: rgba(255, 255, 255, 0.15);
  --x-bg-alpha-20: rgba(255, 255, 255, 0.2);
  --x-bg-alpha-30: rgba(255, 255, 255, 0.3);
  --x-bg-alpha-40: rgba(255, 255, 255, 0.4);
  --x-bg-alpha-50: rgba(255, 255, 255, 0.5);
  --x-bg-alpha-60: rgba(255, 255, 255, 0.6);
  --x-bg-alpha-70: rgba(255, 255, 255, 0.7);
  --x-bg-alpha-80: rgba(255, 255, 255, 0.8);
  --x-bg-alpha-85: rgba(255, 255, 255, 0.85);
  --x-bg-alpha-90: rgba(255, 255, 255, 0.9);
  --x-bg-alpha-95: rgba(255, 255, 255, 0.95);
  --x-bg-alpha-100: rgba(255, 255, 255, 1);
}
.cursor-commerce[data-theme='dark'], .cursor-commerce[data-theme='dark'], .x-commerce .dark-theme, .x-commerce.dark-theme {
  --x-fg-alpha-00: rgba(255, 255, 255, 0);
  --x-fg-alpha-01: rgba(255, 255, 255, 0.01);
  --x-fg-alpha-02: rgba(255, 255, 255, 0.02);
  --x-fg-alpha-03: rgba(255, 255, 255, 0.03);
  --x-fg-alpha-04: rgba(255, 255, 255, 0.04);
  --x-fg-alpha-05: rgba(255, 255, 255, 0.05);
  --x-fg-alpha-06: rgba(255, 255, 255, 0.06);
  --x-fg-alpha-07: rgba(255, 255, 255, 0.07);
  --x-fg-alpha-08: rgba(255, 255, 255, 0.08);
  --x-fg-alpha-09: rgba(255, 255, 255, 0.09);
  --x-fg-alpha-10: rgba(255, 255, 255, 0.1);
  --x-fg-alpha-15: rgba(255, 255, 255, 0.15);
  --x-fg-alpha-20: rgba(255, 255, 255, 0.2);
  --x-fg-alpha-30: rgba(255, 255, 255, 0.3);
  --x-fg-alpha-40: rgba(255, 255, 255, 0.4);
  --x-fg-alpha-50: rgba(255, 255, 255, 0.5);
  --x-fg-alpha-60: rgba(255, 255, 255, 0.6);
  --x-fg-alpha-70: rgba(255, 255, 255, 0.7);
  --x-fg-alpha-80: rgba(255, 255, 255, 0.8);
  --x-fg-alpha-85: rgba(255, 255, 255, 0.85);
  --x-fg-alpha-90: rgba(255, 255, 255, 0.9);
  --x-fg-alpha-95: rgba(255, 255, 255, 0.95);
  --x-fg-alpha-100: rgba(255, 255, 255, 1);
  --x-bg-alpha-00: rgba(0, 0, 0, 0);
  --x-bg-alpha-01: rgba(0, 0, 0, 0.01);
  --x-bg-alpha-02: rgba(0, 0, 0, 0.02);
  --x-bg-alpha-03: rgba(0, 0, 0, 0.03);
  --x-bg-alpha-04: rgba(0, 0, 0, 0.04);
  --x-bg-alpha-05: rgba(0, 0, 0, 0.05);
  --x-bg-alpha-06: rgba(0, 0, 0, 0.06);
  --x-bg-alpha-07: rgba(0, 0, 0, 0.07);
  --x-bg-alpha-08: rgba(0, 0, 0, 0.08);
  --x-bg-alpha-09: rgba(0, 0, 0, 0.09);
  --x-bg-alpha-10: rgba(0, 0, 0, 0.1);
  --x-bg-alpha-15: rgba(0, 0, 0, 0.15);
  --x-bg-alpha-20: rgba(0, 0, 0, 0.2);
  --x-bg-alpha-30: rgba(0, 0, 0, 0.3);
  --x-bg-alpha-40: rgba(0, 0, 0, 0.4);
  --x-bg-alpha-50: rgba(0, 0, 0, 0.5);
  --x-bg-alpha-60: rgba(0, 0, 0, 0.6);
  --x-bg-alpha-70: rgba(0, 0, 0, 0.7);
  --x-bg-alpha-80: rgba(0, 0, 0, 0.8);
  --x-bg-alpha-85: rgba(0, 0, 0, 0.85);
  --x-bg-alpha-90: rgba(0, 0, 0, 0.9);
  --x-bg-alpha-95: rgba(0, 0, 0, 0.95);
  --x-bg-alpha-100: rgba(0, 0, 0, 1);
}
.x-commerce .x-commerce, .x-commerce.x-commerce {
  color: var(--x-fg-primary);
}
.x-commerce .x-commerce-brand-mark, .x-commerce.x-commerce-brand-mark {
  color: inherit;
}
@keyframes x-commerce-rise {
  from {
    opacity: 0;
    translate: 0 10px;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}
@keyframes x-commerce-pop {
  0% {
    opacity: 0;
    scale: 0.5;
  }
  70% {
    scale: 1.08;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}
@keyframes x-commerce-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes x-commerce-pulse {
  50% {
    opacity: 0.5;
  }
}
@keyframes x-commerce-price-fade-in {
  from {
    opacity: 0;
  }
}
@keyframes x-commerce-price-fade-out {
  to {
    opacity: 0;
  }
}
@keyframes x-commerce-modal-in {
  from {
    opacity: 0;
    scale: 0.96;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
.x-commerce .x-commerce-rise, .x-commerce.x-commerce-rise {
  animation: x-commerce-rise 0.35s ease-out backwards;
}
.x-commerce .x-commerce-stagger > *, .x-commerce.x-commerce-stagger > * {
  animation: x-commerce-rise 0.35s ease-out backwards;
}
.x-commerce .x-commerce-stagger > *:nth-child(2), .x-commerce.x-commerce-stagger > *:nth-child(2) {
  animation-delay: 70ms;
}
.x-commerce .x-commerce-stagger > *:nth-child(3), .x-commerce.x-commerce-stagger > *:nth-child(3) {
  animation-delay: 140ms;
}
.x-commerce .x-commerce-stagger > *:nth-child(4), .x-commerce.x-commerce-stagger > *:nth-child(4) {
  animation-delay: 210ms;
}
.x-commerce .x-commerce-stagger > *:nth-child(n + 5), .x-commerce.x-commerce-stagger > *:nth-child(n + 5) {
  animation-delay: 280ms;
}
@media (prefers-reduced-motion: no-preference) {
  .x-commerce .x-commerce-step-forward, .x-commerce.x-commerce-step-forward, .x-commerce .x-commerce-step-back, .x-commerce.x-commerce-step-back {
    animation: x-commerce-fade-in var(--x-commerce-motion-duration) var(--x-commerce-motion-ease) backwards;
  }
}
.x-commerce .x-commerce-fade-in, .x-commerce.x-commerce-fade-in {
  animation: x-commerce-fade-in 0.2s ease-out both;
}
.x-commerce .x-commerce-pop, .x-commerce.x-commerce-pop {
  animation: x-commerce-pop 0.4s ease-out both;
}
.x-commerce .x-commerce-modal-in, .x-commerce.x-commerce-modal-in {
  animation: x-commerce-modal-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@media (prefers-reduced-motion: reduce) {
  .x-commerce .x-commerce-rise, .x-commerce.x-commerce-rise, .x-commerce .x-commerce-stagger > *, .x-commerce.x-commerce-stagger > *, .x-commerce .x-commerce-step-forward, .x-commerce.x-commerce-step-forward, .x-commerce .x-commerce-step-back, .x-commerce.x-commerce-step-back, .x-commerce .x-commerce-fade-in, .x-commerce.x-commerce-fade-in, .x-commerce .x-commerce-modal-in, .x-commerce.x-commerce-modal-in, .x-commerce .x-commerce-pop, .x-commerce.x-commerce-pop {
    animation-duration: 0.01ms;
    animation-delay: 0ms;
  }
}
.x-commerce .x-commerce-modal .x-commerce-rise, .x-commerce.x-commerce-modal .x-commerce-rise, .x-commerce .x-commerce-modal .x-commerce-stagger:not(.x-commerce-plan-picker) > *, .x-commerce.x-commerce-modal .x-commerce-stagger:not(.x-commerce-plan-picker) > *, .x-commerce .x-commerce-modal .x-commerce-fade-in, .x-commerce.x-commerce-modal .x-commerce-fade-in, .x-commerce .x-commerce-modal .x-commerce-pop, .x-commerce.x-commerce-modal .x-commerce-pop, .x-commerce [data-x-commerce-returning] .x-commerce-stagger > *, .x-commerce[data-x-commerce-returning] .x-commerce-stagger > * {
  animation: none;
}
@media (prefers-reduced-motion: reduce) {
  .x-commerce .x-commerce-modal, .x-commerce.x-commerce-modal, .x-commerce .x-commerce-modal *, .x-commerce.x-commerce-modal * {
    transition: none;
  }
}
.cursor-commerce {
  --x-commerce-motion-duration: 270ms;
  --x-commerce-motion-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --x-commerce-step-out: 100ms;
  --x-commerce-step-in: calc(
    var(--x-commerce-motion-duration) - var(--x-commerce-step-out)
  );
  --x-commerce-column-delay: calc(var(--x-commerce-motion-duration) - 40ms);
  --x-commerce-column-in: 220ms;
  --x-commerce-column-stagger: 45ms;
  --x-commerce-plan-card-max: 324px;
  --x-commerce-plan-row-card: 362px;
}
.x-commerce .x-commerce-step-surface, .x-commerce.x-commerce-step-surface {
  view-transition-name: x-commerce-step-surface;
  view-transition-class: x-commerce-step;
}
.x-commerce .x-commerce-step-content, .x-commerce.x-commerce-step-content {
  view-transition-name: x-commerce-step-content;
  view-transition-class: x-commerce-step;
}
.x-commerce .x-commerce-step-surface .x-commerce-summary-tint, .x-commerce.x-commerce-step-surface .x-commerce-summary-tint {
  view-transition-name: x-commerce-summary-tint;
  view-transition-class: x-commerce-step;
}
.x-commerce .x-commerce-step-surface .x-commerce-plan-transit .x-commerce-plan-head, .x-commerce.x-commerce-step-surface .x-commerce-plan-transit .x-commerce-plan-head, .x-commerce .x-commerce-step-surface .x-commerce-summary .x-commerce-plan-head, .x-commerce.x-commerce-step-surface .x-commerce-summary .x-commerce-plan-head {
  view-transition-name: x-commerce-plan-head;
  view-transition-class: x-commerce-step;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(1), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(1) {
  view-transition-name: x-commerce-payment-row-1;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(2), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(2) {
  view-transition-name: x-commerce-payment-row-2;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(3), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(3) {
  view-transition-name: x-commerce-payment-row-3;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(4), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(4) {
  view-transition-name: x-commerce-payment-row-4;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(5), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(5) {
  view-transition-name: x-commerce-payment-row-5;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(6), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(6) {
  view-transition-name: x-commerce-payment-row-6;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(7), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(7) {
  view-transition-name: x-commerce-payment-row-7;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(8), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(8) {
  view-transition-name: x-commerce-payment-row-8;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-summary-actions, .x-commerce.x-commerce-step-surface .x-commerce-summary-actions {
  view-transition-name: x-commerce-summary-actions;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-preparing, .x-commerce.x-commerce-step-surface .x-commerce-preparing {
  min-height: var(--x-commerce-surface-cap);
}
.x-commerce .x-commerce-step-surface .x-commerce-step-content, .x-commerce.x-commerce-step-surface .x-commerce-step-content, .x-commerce .x-commerce-step-surface .x-commerce-summary-tint, .x-commerce.x-commerce-step-surface .x-commerce-summary-tint, .x-commerce .x-commerce-step-surface .x-commerce-plan-head, .x-commerce.x-commerce-step-surface .x-commerce-plan-head, .x-commerce .x-commerce-step-surface .x-commerce-summary-actions, .x-commerce.x-commerce-step-surface .x-commerce-summary-actions, .x-commerce .x-commerce-step-surface .x-commerce-payment-column > *, .x-commerce.x-commerce-step-surface .x-commerce-payment-column > * {
  view-transition-group: x-commerce-step-surface;
}
.cursor-commerce::view-transition {
  --x-commerce-step-radius: calc(24px * var(--x-radius-m));
  @media (width < 517px) {
    --x-commerce-step-radius: 0px;
  }
}
.cursor-commerce::view-transition-group-children(x-commerce-step-surface) {
  overflow: clip;
  border-radius: var(--x-commerce-step-radius);
}
.x-commerce .x-commerce.x-commerce-step-surface, .x-commerce.x-commerce.x-commerce-step-surface {
  transition-property: opacity, translate, scale, transform;
}
.x-commerce .x-commerce-step-surface :has(.x-commerce-step-title), .x-commerce.x-commerce-step-surface :has(.x-commerce-step-title) {
  transition: none;
}
.cursor-commerce::view-transition-group(.x-commerce-step) {
  animation-delay: var(--x-commerce-step-out);
  animation-duration: var(--x-commerce-step-in);
  animation-timing-function: var(--x-commerce-motion-ease);
  animation-fill-mode: both;
}
.cursor-commerce::view-transition-group(x-commerce-step-surface) {
  z-index: 1;
  border-radius: var(--x-commerce-step-radius);
  box-shadow: 0 0 0 1px var(--x-border-normal), var(--x-shadow-lg);
}
.cursor-commerce::view-transition-group(x-commerce-summary-tint) {
  z-index: 2;
}
.cursor-commerce::view-transition-group(x-commerce-step-content) {
  z-index: 3;
}
.cursor-commerce::view-transition-group(x-commerce-plan-head), .cursor-commerce::view-transition-group(.x-commerce-payment-row) {
  z-index: 4;
}
.cursor-commerce::view-transition-group(.x-commerce-payment-row) {
  animation-delay: var(--x-commerce-step-out);
  animation-duration: var(--x-commerce-step-in);
  animation-timing-function: var(--x-commerce-motion-ease);
  animation-fill-mode: both;
}
.cursor-commerce::view-transition-old(.x-commerce-payment-row) {
  animation: x-commerce-step-fade-out var(--x-commerce-step-out) cubic-bezier(0.4, 0, 1, 1) both;
}
.cursor-commerce::view-transition-new(.x-commerce-payment-row) {
  animation: x-commerce-column-enter var(--x-commerce-column-in) var(--x-commerce-motion-ease) var(--x-commerce-column-delay) both;
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-1) {
  animation-delay: calc( var(--x-commerce-column-delay) + 0 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-2) {
  animation-delay: calc( var(--x-commerce-column-delay) + 1 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-3) {
  animation-delay: calc( var(--x-commerce-column-delay) + 2 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-4) {
  animation-delay: calc( var(--x-commerce-column-delay) + 3 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-5) {
  animation-delay: calc( var(--x-commerce-column-delay) + 4 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-6) {
  animation-delay: calc( var(--x-commerce-column-delay) + 5 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-7) {
  animation-delay: calc( var(--x-commerce-column-delay) + 6 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-8) {
  animation-delay: calc( var(--x-commerce-column-delay) + 7 * var(--x-commerce-column-stagger) );
}
@keyframes x-commerce-column-enter {
  from {
    opacity: 0;
    translate: 0 12px;
  }
}
.cursor-commerce::view-transition-old(x-commerce-plan-head), .cursor-commerce::view-transition-new(x-commerce-plan-head) {
  inset: 0 auto auto 0;
  width: auto;
  height: auto;
}
.cursor-commerce::view-transition-old(x-commerce-step-surface) {
  display: none;
}
.cursor-commerce::view-transition-new(x-commerce-step-surface) {
  animation: none;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cursor-commerce::view-transition-image-pair(x-commerce-step-surface) {
  overflow: clip;
  border-radius: var(--x-commerce-step-radius);
}
.cursor-commerce::view-transition-old(x-commerce-step-content), .cursor-commerce::view-transition-new(x-commerce-step-content) {
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: none;
}
.cursor-commerce::view-transition-image-pair(x-commerce-step-content) {
  overflow: clip;
  border-radius: var(--x-commerce-step-radius);
}
.cursor-commerce::view-transition-old(x-commerce-step-content) {
  animation: x-commerce-step-leave var(--x-commerce-step-out) cubic-bezier(0.4, 0, 1, 1) both;
}
.cursor-commerce::view-transition-new(x-commerce-step-content) {
  animation: x-commerce-fade-in var(--x-commerce-step-in) cubic-bezier(0.6, 0, 1, 1) var(--x-commerce-step-out) both, x-commerce-step-grow var(--x-commerce-step-in) var(--x-commerce-motion-ease) var(--x-commerce-step-out) both;
}
.cursor-commerce::view-transition-old(x-commerce-summary-tint), .cursor-commerce::view-transition-new(x-commerce-summary-tint) {
  inset: 0;
  width: 100%;
  height: 100%;
}
.cursor-commerce::view-transition-old(x-commerce-summary-tint) {
  animation: x-commerce-step-fade-out var(--x-commerce-step-out) cubic-bezier(0.4, 0, 1, 1) both;
}
.cursor-commerce::view-transition-new(x-commerce-summary-tint) {
  animation: x-commerce-fade-in var(--x-commerce-step-in) cubic-bezier(0.6, 0, 1, 1) var(--x-commerce-step-out) both;
}
@keyframes x-commerce-step-leave {
  to {
    opacity: 0;
    scale: 0.96;
  }
}
@keyframes x-commerce-step-grow {
  from {
    scale: 0.96;
  }
}
@keyframes x-commerce-step-fade-out {
  to {
    opacity: 0;
  }
}
.x-commerce .x-commerce-credits-surface, .x-commerce.x-commerce-credits-surface {
  view-transition-name: x-commerce-credits-surface;
  view-transition-class: x-commerce-credits-step;
}
.cursor-commerce::view-transition-group(.x-commerce-credits-step), .cursor-commerce::view-transition-old(.x-commerce-credits-step), .cursor-commerce::view-transition-new(.x-commerce-credits-step) {
  animation-duration: var(--x-commerce-motion-duration);
  animation-timing-function: var(--x-commerce-motion-ease);
}
.cursor-commerce::view-transition-old(x-commerce-credits-surface), .cursor-commerce::view-transition-new(x-commerce-credits-surface) {
  overflow: clip;
  border-radius: var(--x-commerce-credits-radius);
  inline-size: auto;
  block-size: auto;
}
.cursor-commerce::view-transition {
  --x-commerce-credits-radius: calc(24px * var(--x-radius-m));
  @media (width < 517px) {
    --x-commerce-credits-radius: calc(32px * var(--x-radius-m));
  }
}
.cursor-commerce::view-transition-image-pair(x-commerce-credits-surface) {
  overflow: clip;
  border-radius: var(--x-commerce-credits-radius);
}
.cursor-commerce::view-transition-group(x-commerce-credits-surface) {
  border-radius: var(--x-commerce-credits-radius);
  background-color: var(--x-bg-modal);
  box-shadow: var(--x-shadow-lg);
}
.x-commerce .x-commerce-credits-footer, .x-commerce.x-commerce-credits-footer {
  view-transition-name: x-commerce-credits-footer;
  view-transition-class: x-commerce-credits-step;
}
.x-commerce .x-commerce-credits-footer .x-commerce-credits-primary, .x-commerce.x-commerce-credits-footer .x-commerce-credits-primary {
  view-transition-name: x-commerce-credits-primary;
  view-transition-class: x-commerce-credits-step;
}
.cursor-commerce::view-transition-old(x-commerce-credits-footer), .cursor-commerce::view-transition-new(x-commerce-credits-footer) {
  inline-size: auto;
  block-size: auto;
}
.cursor-commerce::view-transition-image-pair(x-commerce-credits-footer) {
  overflow: clip;
}
.cursor-commerce::view-transition-old(x-commerce-credits-primary), .cursor-commerce::view-transition-new(x-commerce-credits-primary) {
  inset: 0;
  inline-size: auto;
  block-size: auto;
  margin: auto;
}
.cursor-commerce::view-transition-image-pair(x-commerce-credits-primary) {
  overflow: clip;
  border-radius: 9999px;
}
.cursor-commerce::view-transition-old(x-commerce-credits-primary.x-commerce-credits-step), .cursor-commerce::view-transition-new(x-commerce-credits-primary.x-commerce-credits-step) {
  animation-duration: calc(var(--x-commerce-motion-duration) / 2);
}
.x-commerce .x-commerce-stacked-scrim, .x-commerce.x-commerce-stacked-scrim {
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms var(--x-commerce-motion-ease);
}
.x-commerce .x-commerce-stacked-scrim[data-open], .x-commerce.x-commerce-stacked-scrim[data-open] {
  opacity: 1;
  pointer-events: auto;
}
.x-commerce [role='dialog']:has(~ .x-commerce-stacked-scrim), .x-commerce[role='dialog']:has(~ .x-commerce-stacked-scrim) {
  transition-timing-function: var(--x-commerce-motion-ease);
}
.x-commerce [role='dialog']:has(~ .x-commerce-stacked-scrim[data-open]), .x-commerce[role='dialog']:has(~ .x-commerce-stacked-scrim[data-open]) {
  transform: scale(0.95);
}
@media (prefers-reduced-motion: reduce) {
  .x-commerce .x-commerce-stacked-scrim, .x-commerce.x-commerce-stacked-scrim, .x-commerce [role='dialog']:has(~ .x-commerce-stacked-scrim), .x-commerce[role='dialog']:has(~ .x-commerce-stacked-scrim) {
    transition-duration: 0.01ms;
  }
}
@container (width < 200px) {
  .x-commerce .x-commerce-plan-offer, .x-commerce.x-commerce-plan-offer {
    flex-basis: 100%;
    min-height: 24px;
  }
}
@media (width >= 730px) {
  .x-commerce .x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-step-content, .x-commerce.x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-step-content {
    flex: none;
  }
  .x-commerce .x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-grid-step-header, .x-commerce.x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-grid-step-header {
    position: static;
  }
  .x-commerce .x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-grid-step-header::before, .x-commerce.x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-grid-step-header::before {
    display: none;
  }
  .x-commerce .x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-surface-fade, .x-commerce.x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-surface-fade {
    display: block;
  }
}
@container grid (width >= 586px) {
  .x-commerce .x-commerce-plan-picker > li:not(:only-child) [data-fits-row], .x-commerce.x-commerce-plan-picker > li:not(:only-child) [data-fits-row] {
    contain: size;
  }
}
@container single (width >= 586px) {
  .x-commerce .x-commerce-plan-single [data-fits-row], .x-commerce.x-commerce-plan-single [data-fits-row] {
    contain: size;
    overflow-y: auto;
  }
}
.x-commerce .x-commerce-price, .x-commerce.x-commerce-price {
  display: inline-flex;
  align-items: baseline;
  gap: 0.375rem;
}
.x-commerce .x-commerce-price s, .x-commerce.x-commerce-price s {
  color: var(--x-neutral-400);
  font-weight: 400;
}
.cursor-commerce[data-theme='dark'] .x-commerce-price s {
  color: var(--x-neutral-600);
}
.x-commerce .x-commerce-totals [data-billing-summary], .x-commerce.x-commerce-totals [data-billing-summary] {
  margin: 0 0 0.5rem;
  color: var(--x-fg-secondary);
  font-size: 0.875rem;
}
.x-commerce .x-commerce-totals [data-billing-summary='offer'], .x-commerce.x-commerce-totals [data-billing-summary='offer'] {
  margin: 0.75rem 0 0.125rem;
  color: var(--x-fg-primary);
  font-size: 1.0625rem;
  font-weight: 700;
}
.x-commerce .x-commerce-totals [data-billing-summary='standing'], .x-commerce.x-commerce-totals [data-billing-summary='standing'] {
  margin: 0 0 0.875rem;
  color: var(--x-fg-primary);
}
.x-commerce .x-commerce-totals [data-billing-summary='tax'], .x-commerce.x-commerce-totals [data-billing-summary='tax'] {
  margin: 0.5rem 0 0;
}
.x-commerce .x-commerce-totals dl, .x-commerce.x-commerce-totals dl {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
}
.x-commerce .x-commerce-totals dl > div, .x-commerce.x-commerce-totals dl > div {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}
.x-commerce .x-commerce-totals dl > div:last-child, .x-commerce.x-commerce-totals dl > div:last-child {
  font-weight: 700;
}
.x-commerce .x-commerce-totals dd, .x-commerce.x-commerce-totals dd {
  margin: 0;
  font-variant-numeric: tabular-nums;
}
.x-commerce .x-commerce-totals dd[data-placeholder], .x-commerce.x-commerce-totals dd[data-placeholder] {
  color: var(--x-fg-tertiary);
}
.x-commerce .x-commerce-summary-lines .x-commerce-totals dl, .x-commerce.x-commerce-summary-lines .x-commerce-totals dl {
  gap: 0.75rem;
}
.x-commerce .x-commerce-summary-lines .x-commerce-totals dl > div, .x-commerce.x-commerce-summary-lines .x-commerce-totals dl > div {
  color: var(--x-fg-secondary);
  line-height: 1.25rem;
}
.x-commerce .x-commerce-summary-lines .x-commerce-totals dl > div:last-child, .x-commerce.x-commerce-summary-lines .x-commerce-totals dl > div:last-child {
  color: var(--x-fg-primary);
  font-weight: 500;
}
.x-commerce .x-commerce-summary-lines .x-commerce-totals [data-billing-summary], .x-commerce.x-commerce-summary-lines .x-commerce-totals [data-billing-summary] {
  margin-bottom: 0.5rem;
}
.x-commerce .x-commerce-totals dd:empty, .x-commerce.x-commerce-totals dd:empty {
  width: 3rem;
  height: 1em;
  border-radius: 0.25rem;
  background: var(--x-bg-secondary);
  align-self: center;
}
@media (prefers-reduced-motion: no-preference) {
  .x-commerce .x-commerce-totals dd:empty, .x-commerce.x-commerce-totals dd:empty {
    animation: x-commerce-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
}
.x-commerce .x-commerce-error-state, .x-commerce.x-commerce-error-state {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.x-commerce .x-commerce-error-state > p, .x-commerce.x-commerce-error-state > p {
  color: var(--x-fg-secondary);
  font-size: var(--text-headline1);
  line-height: var(--text-headline1--line-height);
  text-align: center;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-scroll-snap-strictness {
  syntax: "*";
  inherits: false;
  initial-value: proximity;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-gradient-position {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-via {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-to {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-via-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0%;
}
@property --tw-gradient-via-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 50%;
}
@property --tw-gradient-to-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes checkmark {
  0% {
    stroke-dashoffset: 24;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    .x-commerce *, .x-commerce, .x-commerce ::before, .x-commerce::before, .x-commerce ::after, .x-commerce::after, .x-commerce ::backdrop, .x-commerce::backdrop {
      --tw-font-weight: initial;
      --tw-outline-style: solid;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-scroll-snap-strictness: proximity;
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-gradient-position: initial;
      --tw-gradient-from: #0000;
      --tw-gradient-via: #0000;
      --tw-gradient-to: #0000;
      --tw-gradient-stops: initial;
      --tw-gradient-via-stops: initial;
      --tw-gradient-from-position: 0%;
      --tw-gradient-via-position: 50%;
      --tw-gradient-to-position: 100%;
      --tw-leading: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
    }
  }
}
`, Ar = {};
pr(Ar, {
    Backdrop: ()=>iB,
    Close: ()=>$B,
    Description: ()=>KB,
    Handle: ()=>lT,
    Popup: ()=>P9,
    Portal: ()=>M9,
    Root: ()=>V9,
    Title: ()=>U9,
    Trigger: ()=>j9,
    Viewport: ()=>B9,
    createHandle: ()=>mT
});
function YS(e, t) {
    return a(function(n, ...o) {
        const i = new URL(e);
        return i.searchParams.set("code", n.toString()), o.forEach((s)=>i.searchParams.append("args[]", s)), `${t} error #${n}; visit ${i} for the full message.`;
    }, "formatErrorMessage");
}
a(YS, "createFormatErrorMessage");
var HV = YS("https://base-ui.com/production-error", "Base UI"), Vn = HV, XS = jb.createContext(void 0);
a(Wr, "useDialogRootContext");
var ZS = {};
a(Rr, "useRefWithInit");
a(ca, "useMergedRefs");
a(qS, "useMergedRefsN");
a(Kp, "createForkRef");
a(QS, "didChange");
a(JS, "didChangeN");
a(Wp, "update");
var GV = parseInt(ZD.version, 10);
a(Dc, "isReactVersionAtLeast");
a(Yp, "getReactElementRef");
a(Lc, "mergeObjects");
a(yt, "NOOP");
var $V = Object.freeze([]), zt = Object.freeze({});
a(eE, "getStateAttributesProps");
a(tE, "resolveClassName");
a(rE, "resolveStyle");
var Xp = {};
a(Si, "mergeProps");
a(nE, "mergePropsN");
a(Ei, "createInitialMergedProps");
a(la, "mergeInto");
a(oE, "copyInitialProps");
a(aE, "mutablyMergeInto");
a(Zp, "isEventHandler");
a(Fc, "isPropsGetter");
a(qp, "resolvePropsGetter");
a(iE, "mergeEventHandlers");
a(Qp, "wrapEventHandler");
a(ki, "makeEventPreventable");
a(Jp, "mergeClassNames");
a(ef, "isSyntheticEvent");
a(xr, "useRenderElement");
a(sE, "useRenderElementProps");
a(cE, "resolveRenderFunctionProps");
var KV = Symbol.for("react.lazy");
a(lE, "unwrapLazyRenderProp");
a(mE, "evaluateRenderProp");
a(uE, "renderTag");
var tf = "data-starting-style", dE = "data-ending-style", WV = {
    [tf]: ""
}, YV = {
    [dE]: ""
}, rf = {
    transitionStatus (e) {
        return e === "starting" ? WV : e === "ending" ? YV : null;
    }
}, Ti = {};
pr(Ti, {
    align: ()=>QV,
    anchorHidden: ()=>hE,
    closed: ()=>fE,
    endingStyle: ()=>ZV,
    open: ()=>pE,
    side: ()=>qV,
    startingStyle: ()=>XV
});
var pE = "data-open", fE = "data-closed", XV = tf, ZV = dE, hE = "data-anchor-hidden", qV = "data-side", QV = "data-align", xE = "data-popup-open", JV = "data-pressed", eB = {
    [xE]: ""
}, hK = {
    [xE]: "",
    [JV]: ""
}, tB = {
    [pE]: ""
}, rB = {
    [fE]: ""
}, nB = {
    [hE]: ""
}, oB = {
    open (e) {
        return e ? eB : null;
    }
}, gE = {
    open (e) {
        return e ? tB : rB;
    },
    anchorHidden (e) {
        return e ? nB : null;
    }
}, aB = {
    ...gE,
    ...rf
}, iB = WD.forwardRef(a(function(t, r) {
    const { render: n, className: o, style: i, forceRender: s = !1, ...c } = t, l = Wr(), m = l.useState("open"), u = l.useState("nested"), d = l.useState("mounted"), p = l.useState("transitionStatus");
    return xr("div", t, {
        state: {
            open: m,
            transitionStatus: p
        },
        ref: [
            l.context.backdropRef,
            r
        ],
        stateAttributesMapping: aB,
        props: [
            {
                role: "presentation",
                hidden: !d,
                style: {
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            },
            c
        ],
        enabled: s || !u
    });
}, "DialogBackdrop"));
a(Ci, "hasWindow");
a(Jt, "getNodeName");
a(gr, "getWindow");
a(vE, "getDocumentElement");
a(Vc, "isNode");
a(ma, "isElement");
a(Xt, "isHTMLElement");
a(uo, "isShadowRoot");
a(bE, "isOverflowElement");
a(Bc, "isLastTraversableNode");
a(Ii, "getComputedStyle");
a(yE, "getParentNode");
var nf = {
    ...QD
}, of = nf.useInsertionEffect, sB = of && of !== nf.useLayoutEffect ? of : (e)=>e();
a(pt, "useStableCallback");
a(wE, "createStableCallback");
a(SE, "assertNotCalled");
var cB = a(()=>{}, "noop"), Ke = typeof document < "u" ? JD.useLayoutEffect : cB, lB = Hb.createContext(void 0);
a(EE, "useCompositeRootContext");
a(kE, "useFocusableWhenDisabled");
a(wt, "ownerDocument");
a(Ai, "dispatchClickWithModifiers");
a(Uc, "useButton");
a(jc, "isButtonElement");
a(TE, "isValidLinkElement");
function VN(e) {
    return My("svg", {
        fill: "none",
        height: "1em",
        viewBox: "0 0 24 24",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: My("path", {
            d: "M6.5 12.5L10.5 16.5L17.5 8",
            pathLength: FN,
            stroke: "currentColor",
            strokeDasharray: FN,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 3
        })
    });
}
a(VN, "CheckmarkThick");
function BN({ className: e, label: t, ref: r, ...n }) {
    const o = Ey(vm.Root, {
        ref: r,
        className: a((i)=>_e("group relative inline-flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-xs border transition-colors", i.checked ? "border-transparent" : "border-neutral-500", i.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer", "hover:opacity-90", e), "className"),
        ...n,
        children: [
            Xs(vm.Indicator, {
                className: "bg-btn-primary absolute inset-0 transition-[transform,opacity] duration-100 ease-out data-ending-style:opacity-0 data-ending-style:duration-200 data-starting-style:scale-0"
            }),
            Xs(vm.Indicator, {
                className: "text-inverted [&_path]:animate-checkmark relative flex items-center justify-center transition-opacity duration-200 ease-out data-ending-style:opacity-0 [&_svg]:size-5",
                children: Xs(VN, {})
            })
        ]
    });
    return t ? Ey("label", {
        className: "flex cursor-pointer items-center gap-3",
        children: [
            o,
            Xs("span", {
                className: "text-body text-primary",
                children: t
            })
        ]
    }) : o;
}
a(BN, "Checkbox");
var Kz = hn("inline-flex h-5 shrink-0 items-center gap-1 rounded-sm px-2 text-subtext3 font-medium [&_svg]:size-[1em]", {
    variants: {
        variant: {
            overlay: "bg-black-80 text-on-color",
            neutral: "bg-secondary text-primary"
        }
    },
    defaultVariants: {
        variant: "overlay"
    }
});
function E0({ children: e, className: t, icon: r, variant: n, ref: o, ...i }) {
    return mF("div", {
        ref: o,
        className: _e(Kz({
            variant: n
        }), t),
        ...i,
        children: [
            r,
            e
        ]
    });
}
a(E0, "Chip");
function k0(e) {
    return Oy("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        "data-icon": "icon-checkmark-circle-fill",
        viewBox: "0 0 24 24",
        display: "flex",
        role: "img",
        width: "1em",
        height: "1em",
        ...e,
        children: Oy("path", {
            fillRule: "evenodd",
            d: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-1.37 11.54-1.96-1.78-1.34 1.48 3.54 3.22 5.41-6.84-1.56-1.24z",
            clipRule: "evenodd"
        })
    });
}
a(k0, "IconCheckmarkCircleFill");
function UN({ mode: e = "manage", teamId: t, disabled: r = !1, onFixed: n, onRosterChange: o, onPendingChange: i, addOpen: s, onAddOpenChange: c, trackView: l = !1 }) {
    return fe(K2, {
        mode: e,
        teamId: t,
        onFixed: n,
        onRosterChange: o,
        children: fe(jN, {
            disabled: r,
            onPendingChange: i,
            addOpen: s,
            onAddOpenChange: c,
            trackView: l
        })
    });
}
a(UN, "PaymentMethodsPanel");
function jN({ disabled: e, onPendingChange: t, addOpen: r, onAddOpenChange: n, trackView: o }) {
    const { t: i } = Be(), { tracker: s } = xt(), c = Nt(), { add: l, busy: m, canAdd: u, mode: d, paymentMethods: p, status: h } = c, { beginAdd: f, cancelAdd: v } = c.actions, x = ur(t), g = ur(n);
    _n(()=>{
        x.current = t, g.current = n;
    }), _n(()=>{
        x.current?.(m);
    }, [
        m
    ]), _n(()=>()=>{
            x.current?.(!1);
        }, []);
    const y = l.status === "collecting" || l.status === "submitting" || l.status === "requires-action" || l.status === "failed", w = r !== void 0, b = w ? r : y, [T, R] = Sy(), E = ur(l.status), S = ur(!1);
    _n(()=>{
        const j = E.current;
        E.current = l.status, S.current = l.status === "added" && (j !== "added" || S.current), S.current && !m && (S.current = !1, g.current?.(!1));
    }, [
        l.status,
        m
    ]), _n(()=>{
        r === !0 && l.status === "idle" && u && !m && f(), r === !1 && (l.status === "collecting" || l.status === "failed") && v();
    }, [
        r,
        l.status,
        u,
        m,
        f,
        v
    ]);
    const A = !b && u && (l.status === "idle" || l.status === "added"), C = ur(null), P = ur(null), O = ur(null), M = ur(!1), F = ur(!1);
    _n(()=>{
        b && !M.current && (F.current = !1, (w ? O : P).current?.focus()), !b && M.current && (F.current = !0), M.current = b, F.current && A && C.current !== null && (F.current = !1, C.current.focus());
    }, [
        b,
        A,
        w
    ]);
    const K = l.status === "submitting" || l.status === "requires-action", [re, te] = Sy(!1);
    !re && h === "success" && !c.isRevalidating && te(!0);
    const J = h === "loading" || !re && h === "success" && p.length === 0 && c.isRevalidating;
    let $;
    h === "error" ? $ = "failed" : J || ($ = p.length === 0 ? "empty" : "loaded");
    const ee = ur(new Set);
    _n(()=>{
        !o || $ === void 0 || ee.current.has($) || (ee.current.add($), s.track({
            name: "manage_view",
            surface: "payment-methods",
            state: $
        }));
    }, [
        s,
        o,
        $
    ]);
    const W = c.canVault && c.publishableKeyStatus === "unavailable", ne = c.canVault && c.publishableKeyStatus === "unconfigured", xe = i(d === "fix" ? "Add a card for renewal" : "Add a card");
    return Dt("section", {
        className: "x-commerce flex w-full flex-col gap-4",
        "aria-busy": m || void 0,
        children: [
            fe(aS, {
                className: "sr-only"
            }),
            d === "fix" && !b ? fe("p", {
                className: "text-secondary text-[15px]",
                children: i("Choose the card for your next renewal, or add a new one. Nothing is charged now.")
            }) : null,
            J && !b ? Dt(iF, {
                children: [
                    fe("p", {
                        role: "status",
                        className: "sr-only",
                        children: i("Loading your payment methods\u2026")
                    }),
                    fe("div", {
                        "aria-hidden": !0,
                        className: "flex flex-col gap-3",
                        children: Dt("div", {
                            className: "border-normal rounded-2xl border p-5",
                            children: [
                                fe($t, {
                                    className: "h-6 w-40"
                                }),
                                fe($t, {
                                    className: "mt-3 h-4 w-28"
                                })
                            ]
                        })
                    })
                ]
            }) : null,
            h === "error" && !b ? Dt("div", {
                className: "x-commerce-rise flex flex-col items-start gap-4",
                children: [
                    fe("p", {
                        role: "alert",
                        className: "text-primary text-[15px]",
                        children: i("Something went wrong while loading your payment methods.")
                    }),
                    fe(Le, {
                        variant: "secondary",
                        size: "md",
                        disabled: e,
                        onClick: a(()=>void c.actions.refresh(), "onClick"),
                        children: i("Retry")
                    })
                ]
            }) : null,
            h === "success" && !J && !b && p.length === 0 ? fe("p", {
                className: "text-primary x-commerce-rise text-[15px]",
                children: i("You have no saved payment methods.")
            }) : null,
            p.length > 0 && !b ? fe("ul", {
                className: "x-commerce-subscription-list x-commerce-stagger flex list-none flex-col gap-3 p-0",
                children: p.map((j)=>fe(zN, {
                        method: j,
                        disabled: e
                    }, j.paymentMethodId))
            }) : null,
            l.status === "added" && !b ? Dt("p", {
                role: "status",
                className: "text-primary x-commerce-rise flex items-center gap-2 text-[15px]",
                children: [
                    fe(k0, {
                        "aria-hidden": !0,
                        className: "text-success size-5"
                    }),
                    d === "fix" ? i("{card} will be used for your next renewal.", {
                        card: kc(l.paymentMethod, i)
                    }) : i("{card} was added.", {
                        card: kc(l.paymentMethod, i)
                    })
                ]
            }) : null,
            Dt("div", {
                ref: O,
                tabIndex: w && b ? -1 : void 0,
                "aria-label": w && b ? xe : void 0,
                role: w && b ? "group" : void 0,
                className: b ? "x-commerce-rise flex flex-col gap-4 outline-none" : "contents",
                children: [
                    b && !w ? fe(it, {
                        ref: P,
                        as: "h3",
                        size: "headline2",
                        weight: "bold",
                        tabIndex: -1,
                        children: xe
                    }) : null,
                    b && !y && (W || ne) ? Dt("div", {
                        className: "flex flex-col items-start gap-4",
                        children: [
                            fe("p", {
                                role: "alert",
                                className: "text-primary text-[15px]",
                                children: i("Adding a card is unavailable right now.")
                            }),
                            W ? fe(Le, {
                                variant: "secondary",
                                size: "md",
                                disabled: e,
                                onClick: a(()=>void c.actions.refresh(), "onClick"),
                                children: i("Retry")
                            }) : null
                        ]
                    }) : null,
                    Dt("div", {
                        className: b && !W && !ne ? "relative min-h-28" : "hidden",
                        children: [
                            !b || c.collectorReady ? null : T === void 0 ? Dt("div", {
                                "aria-hidden": !0,
                                className: "absolute inset-0 flex flex-col gap-2",
                                children: [
                                    fe($t, {
                                        className: "h-12 w-full rounded-lg"
                                    }),
                                    fe($t, {
                                        className: "h-12 w-full rounded-lg"
                                    })
                                ]
                            }) : Dt("div", {
                                className: "absolute inset-0 flex flex-col items-start gap-3",
                                children: [
                                    fe(it, {
                                        as: "p",
                                        color: "destructive",
                                        role: "alert",
                                        children: i("Card details couldn't load. Try again.")
                                    }),
                                    fe(Le, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: a(()=>{
                                            R(void 0), T();
                                        }, "onClick"),
                                        children: i("Retry")
                                    })
                                ]
                            }),
                            fe("div", {
                                "aria-hidden": !c.collectorReady || void 0,
                                inert: !c.collectorReady || void 0,
                                className: c.collectorReady ? "opacity-100 transition-opacity duration-300" : "opacity-0",
                                children: fe(kN, {
                                    onFailed: a((j)=>R(()=>j), "onFailed")
                                })
                            })
                        ]
                    }),
                    y && d === "manage" && p.length > 0 ? fe(BN, {
                        label: i("Use as my default payment method"),
                        checked: l.makeDefault,
                        disabled: K,
                        onCheckedChange: a((j)=>c.actions.setAddMakeDefault(j), "onCheckedChange")
                    }) : null,
                    fe(nS, {
                        className: "text-destructive x-commerce-rise text-[15px]"
                    }),
                    b && l.status === "added" ? fe(Le, {
                        variant: "primary",
                        size: "lg",
                        fullWidth: !0,
                        loading: !0,
                        disabled: !0,
                        children: i(d === "fix" ? "Use this card" : "Save card")
                    }) : null,
                    y ? Dt("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            fe(tS, {
                                render: a((j)=>fe(Le, {
                                        ...j,
                                        disabled: j.disabled || e,
                                        variant: "primary",
                                        size: "lg",
                                        fullWidth: !0,
                                        loading: K
                                    }), "render")
                            }),
                            w ? null : fe(rS, {
                                render: a((j)=>fe(Le, {
                                        ...j,
                                        variant: "ghost",
                                        size: "lg",
                                        fullWidth: !0
                                    }), "render")
                            })
                        ]
                    }) : null
                ]
            }),
            !b && W ? Dt("div", {
                className: "flex flex-col items-start gap-3",
                children: [
                    fe("p", {
                        className: "text-secondary text-[15px]",
                        children: i("Adding a card is unavailable right now.")
                    }),
                    fe(Le, {
                        variant: "secondary",
                        size: "md",
                        disabled: e,
                        onClick: a(()=>void c.actions.refresh(), "onClick"),
                        children: i("Retry")
                    })
                ]
            }) : null,
            b ? null : fe(eS, {
                render: a((j)=>fe(Le, {
                        ...j,
                        ref: C,
                        disabled: j.disabled || e,
                        variant: p.length === 0 ? "primary" : "secondary",
                        size: "md",
                        className: "self-start",
                        onClick: a(()=>{
                            j.onClick(), n?.(!0);
                        }, "onClick")
                    }), "render"),
                children: i(d === "fix" ? "Add a new card" : "Add payment method")
            })
        ]
    });
}
a(jN, "PaymentMethodsPanelBody");
function zN({ method: e, disabled: t }) {
    const { t: r } = Be(), { locale: n } = xt(), o = Nt(), i = o.attempts[e.paymentMethodId], s = ur(null), c = ur(!1), l = i?.kind === "remove", m = aF(()=>new Intl.DateTimeFormat(n, {
            dateStyle: "medium"
        }), [
        n
    ]), u = up(e), d = i?.status === "submitting" || i?.status === "requires-action";
    _n(()=>{
        !l && c.current && s.current?.focus(), c.current = l;
    }, [
        l
    ]);
    const p = kc(e, r), h = j2(e, r);
    return Dt("li", {
        className: "border-normal bg-primary rounded-2xl border p-5 shadow-sm",
        "aria-busy": d || void 0,
        children: [
            Dt("div", {
                className: "flex flex-wrap items-center justify-between gap-x-2 gap-y-1",
                children: [
                    fe(it, {
                        ref: s,
                        as: "h3",
                        size: "headline1",
                        weight: "bold",
                        className: "min-w-0",
                        tabIndex: -1,
                        children: p
                    }),
                    Dt("div", {
                        className: "flex items-center gap-2",
                        children: [
                            e.isDefault ? fe(E0, {
                                variant: "neutral",
                                children: r("Default")
                            }) : null,
                            u ? fe(E0, {
                                variant: "neutral",
                                children: r("Expired")
                            }) : null
                        ]
                    })
                ]
            }),
            Dt("p", {
                className: "text-secondary mt-2 text-sm",
                children: [
                    h,
                    h !== void 0 && e.addedAt !== void 0 ? " \xB7 " : null,
                    e.addedAt === void 0 ? null : r("Added {date}", {
                        date: m.format(e.addedAt)
                    })
                ]
            }),
            i?.kind === "fix" && i.status === "fixed" ? fe("p", {
                role: "status",
                className: "text-primary mt-3 text-sm",
                children: r("This card will be used for your next renewal.")
            }) : null,
            i?.kind === "fix" && i.status === "requires-action" ? fe("p", {
                role: "status",
                className: "text-primary mt-3 text-sm",
                children: r("Confirm the verification from your bank to continue.")
            }) : null,
            fe(oS, {
                paymentMethodId: e.paymentMethodId,
                className: "text-destructive mt-3 text-sm"
            }),
            Dt("div", {
                className: "mt-4 flex w-full flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:items-center",
                children: [
                    fe(J2, {
                        paymentMethodId: e.paymentMethodId,
                        render: a((f)=>fe(Le, {
                                ...f,
                                disabled: f.disabled || t || u,
                                variant: "primary",
                                size: "md",
                                loading: i?.kind === "fix" && d
                            }), "render")
                    }),
                    fe(W2, {
                        paymentMethodId: e.paymentMethodId,
                        render: a((f)=>fe(Le, {
                                ...f,
                                disabled: f.disabled || t || u,
                                variant: "secondary",
                                size: "md",
                                loading: i?.kind === "set-default" && d
                            }), "render")
                    }),
                    fe(q2, {
                        paymentMethodId: e.paymentMethodId,
                        render: a((f)=>fe(Le, {
                                ...f,
                                autoFocus: i?.status === "confirming",
                                variant: "secondary",
                                size: "md"
                            }), "render")
                    }),
                    fe(Z2, {
                        paymentMethodId: e.paymentMethodId,
                        render: a((f)=>fe(Le, {
                                ...f,
                                disabled: f.disabled || t,
                                variant: "destructive",
                                size: "md",
                                loading: i?.kind === "remove" && d
                            }), "render")
                    }),
                    fe(X2, {
                        paymentMethodId: e.paymentMethodId,
                        render: a((f)=>fe(Le, {
                                ...f,
                                disabled: f.disabled || t,
                                className: "border-destructive text-destructive",
                                variant: "outline",
                                size: "md"
                            }), "render")
                    }),
                    fe(Q2, {
                        paymentMethodId: e.paymentMethodId,
                        render: a((f)=>fe(Le, {
                                ...f,
                                variant: "ghost",
                                size: "md"
                            }), "render")
                    })
                ]
            }),
            o.canRemove && o.paymentMethods.length === 1 ? fe("p", {
                className: "text-secondary mt-3 text-sm",
                children: r("Add another card before removing this one.")
            }) : null,
            l && i.status !== "failed" ? fe("p", {
                className: "text-primary mt-3 text-sm",
                children: r("Removing this card does not change your subscriptions.")
            }) : null
        ]
    });
}
a(zN, "PaymentMethodCard"), hr();
function HN({ open: e, container: t, onClose: r, onRosterChange: n }) {
    const { t: o } = Be(), [i, s] = dF(!1), c = uF(!1);
    if (t === null) return null;
    function l() {
        c.current || r();
    }
    return a(l, "close"), Dy(pF, {
        children: [
            fF(oo("div", {
                role: "presentation",
                "data-open": e ? "" : void 0,
                className: "x-commerce x-commerce-stacked-scrim bg-overlay-normal fixed inset-0 z-50",
                onClick: i ? void 0 : l
            }), t),
            oo(Ue, {
                open: e,
                onOpenChange: a((m)=>{
                    m || l();
                }, "onOpenChange"),
                size: "md",
                container: t,
                disablePointerDismissal: i,
                children: Dy(Ue.Content, {
                    className: "x-commerce text-body",
                    backdropClassName: "x-commerce",
                    children: [
                        oo(Ue.Header, {
                            hideClose: i,
                            children: oo(Ue.Title, {
                                children: o("Payment methods")
                            })
                        }),
                        oo(Ue.Body, {
                            className: "max-h-[70dvh] [scrollbar-gutter:stable] overflow-x-clip overflow-y-auto overscroll-contain",
                            children: oo("div", {
                                className: "overflow-clip",
                                children: oo(UN, {
                                    onRosterChange: n,
                                    onPendingChange: a((m)=>{
                                        c.current = m, s(m);
                                    }, "onPendingChange")
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
a(HN, "PaymentMethodsDialog"), hr();
function GN(e) {
    return Fy("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        "data-icon": "icon-info-circle-fill",
        viewBox: "0 0 24 24",
        display: "flex",
        role: "img",
        width: "1em",
        height: "1em",
        ...e,
        children: Fy("path", {
            fillRule: "evenodd",
            d: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-1.75 9.1v1.8h.71l-.35 2.47a.9.9 0 0 0 .89 1.03h1.75v-1.8h-.71l.35-2.47a.9.9 0 0 0-.9-1.03zM12 7.4a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2",
            clipRule: "evenodd"
        })
    });
}
a(GN, "IconInfoCircleFill");
function T0(e) {
    return Vy("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        "data-icon": "icon-warning-fill",
        viewBox: "0 0 24 24",
        display: "flex",
        role: "img",
        width: "1em",
        height: "1em",
        ...e,
        children: Vy("path", {
            fillRule: "evenodd",
            d: "M9.4 3.5a3 3 0 0 1 5.2 0L22.4 17a3 3 0 0 1-2.6 4.5H4.2A3 3 0 0 1 1.6 17zM12 15.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4m0-6.95c-.8 0-1.4.7-1.3 1.49l.55 4.01h1.5l.55-4.01A1.3 1.3 0 0 0 12 8.25",
            clipRule: "evenodd"
        })
    });
}
a(T0, "IconWarningFill");
var Wz = hn("flex w-full items-start gap-2 rounded-sm border px-4 py-3 text-start", {
    variants: {
        tone: {
            info: "border-transparent bg-info",
            success: "border-transparent bg-success",
            warning: "border-transparent bg-warning",
            danger: "border-destructive-light bg-destructive"
        }
    },
    defaultVariants: {
        tone: "info"
    }
}), Yz = {
    info: "text-brand",
    success: "text-success",
    warning: "text-warning",
    danger: "text-destructive"
}, Xz = {
    info: Zo(GN, {}),
    success: Zo(k0, {}),
    warning: Zo(T0, {}),
    danger: Zo(T0, {})
};
function Lr({ children: e, className: t, icon: r, ref: n, tone: o = "info", ...i }) {
    const s = r === void 0 ? Xz[o] : r;
    return gF("div", {
        ref: n,
        role: "status",
        "aria-live": o === "danger" ? "assertive" : "polite",
        className: _e(Wz({
            tone: o
        }), t),
        ...i,
        children: [
            s != null && Zo("span", {
                "aria-hidden": !0,
                className: _e("inline-flex size-5 shrink-0 items-center justify-center [&_svg]:size-5", Yz[o]),
                children: s
            }),
            Zo("div", {
                className: "flex min-h-5 min-w-0 flex-1 flex-col justify-center gap-1",
                children: e
            })
        ]
    });
}
a(Lr, "Callout");
function $N(e) {
    return By("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        "data-icon": "icon-chevron-left-sm",
        viewBox: "0 0 24 24",
        display: "flex",
        role: "img",
        width: "1em",
        height: "1em",
        ...e,
        children: By("path", {
            d: "M13.91 7.5 9.41 12l4.5 4.5-1.41 1.41L6.59 12l5.91-5.91z"
        })
    });
}
a($N, "IconChevronLeftSm");
var KN = hn([
    "w-full text-body text-primary outline-hidden",
    "max-narrow:text-[length:max(16px,calc(16/var(--x-root-font-size,16)*1rem))]",
    "pointer-coarse:text-[length:max(16px,calc(16/var(--x-root-font-size,16)*1rem))]",
    "transition-[color,border-color,box-shadow,background-color] duration-200 ease-out",
    "border",
    "placeholder:text-tertiary",
    "disabled:pointer-events-none disabled:opacity-50 disabled:hover:border-normal"
], {
    variants: {
        variant: {
            outline: "border-normal bg-transparent hover:border-active",
            filled: "border-transparent bg-inputs"
        },
        size: {
            sm: "h-9 px-3 text-subtext1",
            md: "h-10 px-4 text-body",
            "md-lg": "h-[43px] px-4 text-body",
            lg: "h-12 px-4 text-body"
        },
        pill: {
            true: "rounded-full",
            false: "rounded-sm"
        },
        error: {
            true: "border-destructive focus:border-destructive"
        }
    },
    defaultVariants: {
        variant: "outline",
        size: "md",
        pill: !1
    }
}), ls = {
    active: "focus-within:border-active",
    destructive: "focus-within:border-destructive",
    normal: "focus-within:border-normal",
    ring: "focus-within:shadow-focus",
    ringDestructive: "focus-within:shadow-focus-destructive"
};
function WN(e, t, r) {
    return e === "ring" ? _e("shadow-[0_0_0_0_transparent]", r ? ls.ringDestructive : ls.ring) : r ? ls.destructive : t === "filled" ? ls.normal : ls.active;
}
a(WN, "getFocusClassname");
function C0({ className: e, disabled: t, error: r, focusEffect: n, helperText: o, icon: i, id: s, label: c, pill: l, prefix: m, ref: u, size: d, suffix: p, trailing: h, variant: f, ...v }) {
    const x = vF(), g = s ?? x, y = `${g}-helper`, w = m != null || p != null, b = WN(n ?? "border", f, r), T = {
        "data-slot": "xds-input",
        "aria-describedby": o ? y : void 0,
        "aria-invalid": r === !0 ? !0 : void 0,
        id: g,
        ref: u,
        disabled: t
    };
    return Hu("div", {
        className: "flex flex-col gap-1.5",
        children: [
            c && Mn("label", {
                htmlFor: g,
                className: "text-subtext1 text-primary font-medium",
                children: c
            }),
            w ? Hu("label", {
                htmlFor: g,
                className: _e(KN({
                    className: _e("flex cursor-text items-center", b, t && "pointer-events-none opacity-50"),
                    error: r,
                    pill: l,
                    size: d,
                    variant: f
                }), e),
                children: [
                    m == null ? null : Mn("span", {
                        className: "shrink-0",
                        children: m
                    }),
                    Mn("input", {
                        ...T,
                        className: "placeholder:text-tertiary min-w-0 flex-1 border-0 bg-transparent p-0 outline-hidden",
                        ...v
                    }),
                    p == null ? null : Mn("span", {
                        className: "shrink-0",
                        children: p
                    })
                ]
            }) : Hu("div", {
                className: "relative",
                children: [
                    i && Mn("span", {
                        className: "text-tertiary absolute start-3 top-1/2 -translate-y-1/2 [&_svg]:size-[18px]",
                        children: i
                    }),
                    Mn("input", {
                        ...T,
                        className: _e(KN({
                            className: _e(i ? "ps-10" : "", h ? "pe-10" : "", b),
                            error: r,
                            pill: l,
                            size: d,
                            variant: f
                        }), e),
                        ...v
                    }),
                    h && Mn("span", {
                        className: "text-tertiary absolute end-3 top-1/2 -translate-y-1/2 [&_svg]:size-[18px]",
                        children: h
                    })
                ]
            }),
            o && Mn("span", {
                id: y,
                className: _e("text-subtext2", r ? "text-destructive" : "text-secondary"),
                children: o
            })
        ]
    });
}
a(C0, "Input");
function I0({ onClose: e, onToppedUp: t, onBack: r, onSubmittingChange: n, titleRef: o }) {
    return ze(hh, {
        view: "auto-top-up",
        holdDueTopUp: !0,
        onSubmittingChange: n,
        onSettled: a((i)=>{
            i.kind === "rule-saved" ? e() : t(i);
        }, "onSettled"),
        children: ze(YN, {
            onClose: e,
            onBack: r,
            titleRef: o
        })
    });
}
a(I0, "AutoTopUpStep");
function YN({ onClose: e, onBack: t, titleRef: r }) {
    const n = zu(br), { state: o } = nr(), { t: i } = Be();
    return o.wallet.status === "ready" ? ze(XN, {
        wallet: o.wallet.wallet,
        onClose: e,
        onBack: t,
        titleRef: r
    }) : pn(xF, {
        children: [
            ze(A0, {
                titleRef: r
            }),
            ze(n.Body, {
                children: o.wallet.status === "error" ? ze(Lr, {
                    tone: "danger",
                    role: "alert",
                    children: pn("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                            ze(it, {
                                size: "body",
                                children: i("Could not load the credit balance")
                            }),
                            ze(Le, {
                                size: "sm",
                                variant: "secondary",
                                onClick: o.wallet.retry,
                                children: i("Try again")
                            })
                        ]
                    })
                }) : pn("div", {
                    className: "flex flex-col gap-4",
                    "aria-busy": !0,
                    children: [
                        ze($t, {
                            className: "h-10 w-full"
                        }),
                        ze($t, {
                            className: "h-10 w-full"
                        }),
                        ze($t, {
                            className: "h-10 w-full"
                        })
                    ]
                })
            })
        ]
    });
}
a(YN, "AutoTopUpBody");
function A0({ hideClose: e, titleRef: t }) {
    const r = zu(br), { t: n } = Be();
    return pn(r.Header, {
        hideClose: e,
        children: [
            ze(r.Title, {
                ref: t,
                tabIndex: t === void 0 ? void 0 : -1,
                children: n("Automatic top-ups")
            }),
            ze(r.Description, {
                className: "mt-1",
                children: n("Add credits when your balance is low.")
            })
        ]
    });
}
a(A0, "AutoTopUpHeader");
function XN({ wallet: e, onClose: t, onBack: r, titleRef: n }) {
    const o = zu(br), { state: i, actions: s } = nr(), { t: c } = Be(), { locale: l, client: m } = xt(), { refresh: u } = ya(), [d, p] = ai(!1), [h, f] = ai(!1), v = Ly(null), [x, g] = ai(null);
    hF(()=>{
        g(v.current?.closest('[role="dialog"]')?.parentElement ?? document.body);
    }, []);
    const y = e.availability.kind === "unavailable", w = m.capabilities.authed, b = cp({
        provider: "STRIPE"
    }), T = b.status === "success" || b.status === "error", R = w && !y && b.status === "success" && b.paymentMethods.length === 0, E = Ly(0), [S, A] = ai(!1), C = w && !y && !R && (!T || S);
    function P() {
        const $ = E.current + 1;
        E.current = $, A(!0), u().finally(()=>{
            E.current === $ && A(!1);
        });
    }
    a(P, "handleRosterChange");
    const O = i.baselineRule?.enabled === !0, [M, F] = ai(null), K = i.failure === M ? null : i.failure, re = K === null ? null : ZN(K, i.baselineRule, l, c), te = !R && K?.kind === "error" && K.code === "PAYMENT_METHOD_REQUIRED";
    async function J() {
        p(!0), await s.disable(), p(!1);
    }
    return a(J, "handleDisable"), pn(bh, {
        className: "x-commerce contents",
        children: [
            ze(A0, {
                hideClose: i.submitting,
                titleRef: n
            }),
            pn(o.Body, {
                ref: v,
                className: "flex flex-col gap-4",
                children: [
                    e.availability.kind === "unavailable" ? ze(Lr, {
                        tone: "warning",
                        children: e.availability.reason === "not-permitted" ? c("Only a billing admin can manage credits for this account") : c("Prepaid credits are not available for this account yet")
                    }) : null,
                    re === null ? null : ze(Lr, {
                        tone: "danger",
                        role: "alert",
                        children: te ? pn("div", {
                            className: "flex items-center justify-between gap-3",
                            children: [
                                ze(it, {
                                    size: "body",
                                    children: re
                                }),
                                ze(Le, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: a(()=>{
                                        f(!0);
                                    }, "onClick"),
                                    children: c("Add Payment Method")
                                })
                            ]
                        }) : re
                    }),
                    R ? ze(it, {
                        size: "subtext1",
                        color: "tertiary",
                        children: c("Auto top-up charges the saved payment method. Add a payment method first.")
                    }) : null,
                    ze(R0, {
                        field: "threshold",
                        label: c("Top up when balance is below")
                    }),
                    ze(R0, {
                        field: "autoTopUpAmount",
                        label: c("Top up amount")
                    })
                ]
            }),
            pn(o.StepFooter, {
                className: "flex justify-end pt-2",
                children: [
                    r === void 0 ? null : ze(Le, {
                        variant: "ghost",
                        className: _e(!O && "me-auto"),
                        leading: ze($N, {
                            "aria-hidden": !0,
                            className: "-ms-2 -me-1 rtl:-scale-x-100"
                        }),
                        disabled: i.submitting,
                        onClick: r,
                        children: c("Back")
                    }),
                    O ? ze(Le, {
                        variant: "ghost",
                        className: "me-auto",
                        disabled: i.submitting || y,
                        loading: d,
                        onClick: a(()=>{
                            J();
                        }, "onClick"),
                        children: ze(it, {
                            as: "span",
                            size: "inherit",
                            weight: "inherit",
                            color: "destructive",
                            children: c("Turn Off")
                        })
                    }) : null,
                    O || r !== void 0 ? null : ze(Le, {
                        variant: "secondary",
                        disabled: i.submitting,
                        onClick: t,
                        children: c("Cancel")
                    }),
                    R ? ze(Le, {
                        className: "x-commerce-credits-primary",
                        disabled: i.submitting,
                        onClick: a(()=>{
                            f(!0);
                        }, "onClick"),
                        children: c("Add Payment Method")
                    }) : C ? ze(Le, {
                        className: "x-commerce-credits-primary",
                        loading: !0,
                        disabled: !0,
                        children: c("Save")
                    }) : ze(vh, {
                        render: a(({ children: $, disabled: ee })=>ze(Le, {
                                render: ze("button", {
                                    type: "submit"
                                }),
                                className: "x-commerce-credits-primary",
                                disabled: ee,
                                loading: i.submitting && !d,
                                children: $
                            }), "render")
                    })
                ]
            }),
            ze(EN, {
                container: x
            }),
            ze(HN, {
                open: h,
                container: x,
                onClose: a(()=>{
                    f(!1), te && F(i.failure);
                }, "onClose"),
                onRosterChange: P
            })
        ]
    });
}
a(XN, "RuleView");
function ZN(e, t, r, n) {
    if (e.kind === "rule-issue" || !e.ruleSaved || t === null) return yh(e, n);
    const o = Yt(t.amount, r, {
        trailingZeroDisplay: "stripIfInteger"
    });
    return e.kind === "declined" ? n("Auto top-up is set, but the {topUpAmount} charge failed. Try another card to add credits.", {
        topUpAmount: o
    }) : n("Auto top-up is set, but the {topUpAmount} charge failed. Try again later to add credits.", {
        topUpAmount: o
    });
}
a(ZN, "ruleFailureMessage");
function R0({ field: e, label: t }) {
    const { meta: r } = nr(), { locale: n } = xt(), { symbol: o, side: i } = xl(n, r.currencyCode), s = ze("span", {
        "aria-hidden": !0,
        children: o
    });
    return pn("div", {
        className: "flex flex-col gap-1.5",
        children: [
            ze(it, {
                as: "label",
                htmlFor: r.fieldId(e),
                size: "subtext1",
                children: t
            }),
            ze(xh, {
                field: e,
                render: a((c)=>ze(C0, {
                        ...c,
                        error: c["aria-invalid"] === !0,
                        placeholder: "0",
                        prefix: i === "start" ? s : void 0,
                        suffix: i === "end" ? s : void 0
                    }), "render")
            }),
            ze(gh, {
                field: e,
                className: "text-subtext3 text-destructive"
            })
        ]
    });
}
a(R0, "RuleField"), Lt(), hr();
function bm({ settled: e, onDone: t, renderEmbeddedCheckout: r }) {
    const n = Uy(br), { t: o } = Be(), { locale: i } = xt(), s = yF(null);
    bF(()=>{
        s.current?.focus();
    }, []);
    const { wallet: c, error: l } = ya(), m = a((v)=>Yt(v, i, {
            trailingZeroDisplay: "stripIfInteger"
        }), "money"), u = c === void 0 || l !== void 0 ? null : Yt(c.balance, i, {
        minorUnits: "floor"
    }), d = kt(Le, {
        variant: "primary",
        ref: s,
        onClick: t,
        children: o("Done")
    }), p = kt(Le, {
        variant: "secondary",
        onClick: t,
        children: o("Close")
    });
    if (e.kind === "inline") {
        const v = m(e.amount);
        return e.handoff.kind === "redirect" ? ii(ms, {
            title: o("Continue to payment"),
            description: o("Add a payment method to complete the {amount} top-up.", {
                amount: v
            }),
            children: [
                p,
                kt(Le, {
                    variant: "primary",
                    ref: s,
                    render: kt("a", {
                        href: e.handoff.url,
                        rel: "noreferrer"
                    }),
                    children: o("Continue to payment")
                })
            ]
        }) : ii(jy, {
            children: [
                ii(n.Header, {
                    children: [
                        kt(n.Title, {
                            children: o("Add a payment method")
                        }),
                        kt(n.Description, {
                            className: "mt-1",
                            children: o("Complete the {amount} top-up below.", {
                                amount: v
                            })
                        })
                    ]
                }),
                kt(n.Body, {
                    children: r?.(e.handoff) ?? kt(Lr, {
                        tone: "info",
                        children: o("This surface cannot collect a payment method inline yet.")
                    })
                }),
                kt(n.Footer, {
                    children: kt(Le, {
                        variant: "ghost",
                        ref: s,
                        onClick: t,
                        children: o("Close")
                    })
                })
            ]
        });
    }
    const { outcome: h } = e, f = m(h.amount);
    switch(h.kind){
        case "succeeded":
            return kt(ms, {
                title: o("Credits added"),
                description: u === null ? o("Added {amount}.", {
                    amount: f
                }) : o("Added {amount}. Your balance is now {balance}.", {
                    amount: f,
                    balance: u
                }),
                children: d
            });
        case "processing":
            return kt(ms, {
                title: o("Payment processing"),
                description: o("The {amount} charge is still being confirmed. The balance updates as soon as it settles.", {
                    amount: f
                }),
                children: d
            });
        case "invoice":
            return ii(ms, {
                title: o("Pay the invoice to add credits"),
                description: o("An invoice for {amount} is on its way. The balance updates as soon as it is paid.", {
                    amount: f
                }),
                children: [
                    p,
                    kt(Le, {
                        variant: "primary",
                        ref: s,
                        render: kt("a", {
                            href: h.invoiceUrl,
                            target: "_blank",
                            rel: "noreferrer"
                        }),
                        children: o("Open invoice")
                    })
                ]
            });
        default:
            return h;
    }
}
a(bm, "TopUpSettledView");
function ms({ title: e, description: t, children: r }) {
    const n = Uy(br);
    return ii(jy, {
        children: [
            kt(n.Header, {
                children: kt(n.Title, {
                    children: e
                })
            }),
            kt(n.Body, {
                className: "x-commerce pt-2",
                children: kt(n.Description, {
                    children: t
                })
            }),
            kt(n.Footer, {
                className: "justify-end pt-2",
                children: r
            })
        ]
    });
}
a(ms, "SettledLayout");
function N0({ open: e, onOpenChange: t }) {
    const [r, n] = Hy(!1), o = zy(!1), { tracker: i } = xt(), s = zy(!1);
    wF(()=>{
        e && (s.current = !1);
    }, [
        e
    ]);
    const [c, l] = Hy(null);
    !e && c !== null && l(null);
    function m() {
        i.track({
            name: "top_up_dismissed",
            view: "auto-top-up",
            submitted: s.current
        }), t(!1);
    }
    a(m, "close");
    function u(d) {
        if (d) {
            t(!0);
            return;
        }
        o.current || m();
    }
    return a(u, "handleOpenChange"), ao(Ue, {
        open: e,
        onOpenChange: u,
        size: "md",
        mobileSize: "md",
        portal: !1,
        disablePointerDismissal: r,
        children: c === null ? ao(Ue.Content, {
            className: "x-commerce x-commerce-modal-in text-body gap-4",
            backdropClassName: "x-commerce x-commerce-fade-in",
            children: e ? ao(br, {
                value: ah,
                children: ao(I0, {
                    onClose: m,
                    onToppedUp: l,
                    onSubmittingChange: a((d)=>{
                        o.current = d, n(d), d && (s.current = !0);
                    }, "onSubmittingChange")
                })
            }) : null
        }) : ao(Ue.Content, {
            className: "x-commerce x-commerce-modal-in text-body gap-4",
            backdropClassName: "x-commerce",
            children: ao(br, {
                value: ah,
                children: ao(bm, {
                    settled: c,
                    onDone: m,
                    renderEmbeddedCheckout: void 0
                })
            })
        })
    });
}
a(N0, "AutoTopUpModal"), Lt();
var Zz = `/*
 * The Cursor skin for xAI's commerce recipes (\`@x-clients/commerce-ui\` on
 * \`@x-clients/xds\`). Applied under a \`.cursor-commerce\` host element; the host
 * also carries \`data-theme="light" | "dark"\`, which XDS's own token sheet keys
 * its light/dark defaults off.
 *
 * Almost everything in \`commerce.css\` resolves through a variable: colors
 * through XDS's semantic \`--x-*\` tokens, sizes through Tailwind's \`--spacing\`
 * unit, corner radii through XDS's \`--x-radius-m\` scale. The first block
 * remaps those onto \`@anysphere/ui\`'s \`--cursor-*\` design tokens, so the
 * recipe follows the host theme (light, dark, custom) with no per-theme work
 * here. The remaining rules cover the few values \`commerce.css\` hard-codes:
 * the type scale, the pill radius, the z-index layer.
 */

.cursor-commerce .x-commerce,
.cursor-commerce.x-commerce {
  /* Density: Tailwind's 4px spacing unit becomes 3px, so \`h-9\` controls are
     27px, the \`h-12\` amount field 36px and \`p-6\` modal padding 18px. */
  --spacing: 0.1875rem;
  /* Radius scale: \`rounded-lg\` is \`calc(24px * --x-radius-m)\`; 0.25 lands on
     6px (\`--cursor-radius-base\`), \`rounded-md\` on 4px, \`rounded-sm\` on 2px. */
  --x-radius-m: 0.25;

  /* Surfaces */
  --x-bg-modal: var(--cursor-bg-elevated);
  --x-bg-primary: var(--cursor-bg-elevated);
  --x-bg-sheets: var(--cursor-bg-elevated);
  --x-bg-secondary: var(--cursor-bg-quaternary);
  --x-bg-tertiary: var(--cursor-bg-quaternary);
  --x-bg-inputs: var(--cursor-bg-quaternary);
  --x-bg-destructive: var(--cursor-bg-danger-quaternary);
  --x-bg-success: var(--cursor-bg-success-quaternary);
  --x-bg-warning: var(--cursor-bg-warning-quaternary);
  --x-bg-info: var(--cursor-bg-accent-quaternary);
  /* The same scrim \`@anysphere/ui\`'s Dialog draws. */
  --x-overlay-normal: rgba(0, 0, 0, 0.5);
  --x-overlay-strong: rgba(0, 0, 0, 0.8);
  --x-hover-subtle: var(--cursor-bg-quaternary);

  /* Strokes */
  --x-border-normal: var(--cursor-stroke-secondary);
  --x-border-hover: var(--cursor-stroke-primary);
  --x-border-active: var(--cursor-stroke-primary);
  --x-border-elevated: var(--cursor-stroke-secondary);
  --x-border-destructive: var(--cursor-danger);
  --x-border-destructive-light: var(--cursor-bg-danger-secondary);
  --x-ring: var(--cursor-stroke-accent);

  /* Text */
  --x-fg-primary: var(--cursor-text-primary);
  --x-fg-secondary: var(--cursor-text-secondary);
  --x-fg-tertiary: var(--cursor-text-tertiary);
  /* \`text-inverted\` is the label XDS's \`primary\` button paints over its
     \`--x-btn-primary\` fill, which is \`--cursor-text-primary\` below: the same
     pair as \`@anysphere/ui\`'s monochrome primary button, whose label is
     \`--cursor-bg-editor\`. Not \`--cursor-text-invert\`: hosts may define that
     as an on-color white (Sand does), which vanishes into the white fill in
     dark mode. */
  --x-fg-inverted: var(--cursor-bg-editor);
  --x-fg-on-color: var(--cursor-text-invert);
  --x-fg-brand: var(--cursor-accent);
  --x-fg-destructive: var(--cursor-danger);
  --x-fg-success: var(--cursor-success);
  --x-fg-warning: var(--cursor-warn);

  /* Buttons: XDS \`primary\` is Cursor's monochrome primary; the neutral
     variants use the same fill ladder as \`@anysphere/ui\`'s buttons. */
  --x-btn-primary: var(--cursor-text-primary);
  --x-btn-primary-hover: var(--cursor-text-secondary);
  --x-btn-primary-pressed: var(--cursor-text-secondary);
  --x-btn-secondary: var(--cursor-bg-tertiary);
  --x-btn-secondary-hover: var(--cursor-bg-secondary);
  --x-btn-secondary-pressed: var(--cursor-bg-primary);
  --x-btn-tertiary: var(--cursor-bg-quaternary);
  --x-btn-tertiary-hover: var(--cursor-bg-tertiary);
  --x-btn-tertiary-pressed: var(--cursor-bg-secondary);
  --x-btn-ghost-hover: var(--cursor-bg-quaternary);
  --x-btn-ghost-pressed: var(--cursor-bg-tertiary);
  --x-btn-inverted: var(--cursor-bg-elevated);
  --x-btn-inverted-hover: var(--cursor-bg-quaternary);
  --x-btn-inverted-pressed: var(--cursor-bg-tertiary);
  --x-btn-destructive: var(--cursor-bg-danger-primary);
  --x-btn-destructive-hover: var(--cursor-button-danger-hover-background);
  --x-btn-destructive-pressed: var(--cursor-button-danger-hover-background);

  /* Elevation: Cursor dialogs are a 1px stroke over a soft shadow. */
  --x-shadow-lg: 0 0 0 1px var(--cursor-stroke-secondary), 0 8px 24px rgba(0, 0, 0, 0.24);
  --x-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.16);
  --x-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);

  font-family: var(--cursor-font-family-sans, inherit);
}

/* Type scale: \`commerce.css\` carries these as literal pixel sizes. */
.cursor-commerce .x-commerce .text-headline1 {
  font-size: var(--cursor-font-size-lg, 14px);
  line-height: var(--cursor-line-height-lg, 22px);
  font-weight: var(--cursor-font-weight-semibold, 600);
}
.cursor-commerce .x-commerce .text-headline2 {
  font-size: var(--cursor-font-size-lg, 14px);
  line-height: var(--cursor-line-height-lg, 22px);
  font-weight: var(--cursor-font-weight-semibold, 600);
}
.cursor-commerce .x-commerce .text-body {
  font-size: var(--cursor-font-size-base, 13px);
  line-height: var(--cursor-line-height-base, 18px);
}
.cursor-commerce .x-commerce .text-subtext1 {
  font-size: var(--cursor-font-size-sm, 12px);
  line-height: var(--cursor-line-height-sm, 16px);
}
.cursor-commerce .x-commerce .text-subtext2,
.cursor-commerce .x-commerce .text-subtext3 {
  font-size: var(--cursor-font-size-xs, 11px);
  line-height: var(--cursor-line-height-xs, 14px);
}
/* The credit balance on the credits card: 30px on grok.com, a settings figure here. */
.cursor-commerce .x-commerce .text-title2 {
  font-size: 20px;
  line-height: 26px;
}
/* The amount field. */
.cursor-commerce .x-commerce .text-title3 {
  font-size: 24px;
  line-height: 28px;
}
.cursor-commerce .x-commerce input.h-12 {
  height: 48px;
}

/* Pills become Cursor corners. XDS's Button is a framer-motion element that
   writes \`border-radius: 9999px\` as an inline style (its size-animation
   workaround), which only \`!important\` outranks. */
.cursor-commerce .x-commerce .rounded-full {
  border-radius: var(--cursor-radius-base, 6px);
}
.cursor-commerce .x-commerce [data-slot="xds-button"] {
  /* The radius arrives as an inline style from framer-motion, which nothing but !important outranks. */
  border-radius: var(--cursor-radius-base, 6px) !important;
}
/* XDS buttons force a medium weight; Cursor buttons are regular. */
.cursor-commerce .x-commerce button.font-medium {
  font-weight: var(--cursor-font-weight-normal, 400);
}

/* The dialog is rendered in place (\`portal: false\`) at Tailwind's \`z-50\`;
   lift it onto the host's modal layer so nothing in the shell paints over it. */
.cursor-commerce .x-commerce.z-50,
.cursor-commerce .x-commerce .z-50 {
  z-index: var(--ui-portal-layer-z-index-modal, 3000);
}

/* Sand's dialog chrome, for hosts that pass \`skin="sand"\`. It paints with
   Sand's \`--sand-*\` tokens, which other hosts do not define. \`:where()\` adds
   no specificity, so each rule weighs against the Cursor skin above on its
   own selector. */
.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] {
  border-radius: 14px !important;
  border: 1px solid var(--sand-border-default) !important;
  background-color: var(--sand-bg-elevated) !important;
  box-shadow: none !important;
  padding-top: 12px !important;
  padding-inline: 16px !important;
  padding-bottom: 16px !important;
  color: var(--sand-text-primary);
  font-family: inherit;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] .sticky.top-0 {
  align-items: flex-start;
}

.cursor-commerce:where([data-skin="sand"]) .bg-overlay-normal {
  background-color: var(--sand-bg-scrim) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] h2,
.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] .text-headline1,
.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] .text-headline2 {
  font-size: var(--sand-font-size-lg, 15px) !important;
  line-height: 22px !important;
  font-weight: var(--sand-font-weight-semibold, 600) !important;
  color: var(--sand-text-primary) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] p.text-body {
  font-size: var(--sand-font-size-lg, 15px) !important;
  line-height: 22px !important;
  font-weight: var(--sand-font-weight-regular, 425) !important;
  color: var(--sand-text-tertiary) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] .text-subtext1 {
  font-size: var(--sand-font-size-sm, 13px) !important;
  line-height: 18px !important;
  font-weight: var(--sand-font-weight-regular, 425) !important;
  color: var(--sand-text-secondary) !important;
}

.cursor-commerce:where([data-skin="sand"]) label:has([data-slot="xds-input"]) {
  box-sizing: border-box;
  min-height: 32px;
  height: 32px;
  border-radius: 8px !important;
  border: 1px solid var(--sand-border-default) !important;
  background-color: var(--sand-bg-base) !important;
  padding: 0 10px !important;
  color: var(--sand-text-primary);
}

.cursor-commerce:where([data-skin="sand"]) label:has([data-slot="xds-input"]):focus-within {
  border-color: var(--sand-border-strong) !important;
  box-shadow: 0 0 0 1px var(--sand-border-focus);
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-input"] {
  font-family: inherit;
  font-size: var(--sand-font-size-sm, 13px) !important;
  line-height: 18px !important;
  font-weight: var(--sand-font-weight-regular, 425) !important;
  color: var(--sand-text-primary) !important;
}

.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-modal-surface"]
  button.rounded-full:not([data-slot="xds-button"]) {
  width: 32px !important;
  height: 32px !important;
  min-width: 32px;
  min-height: 32px;
  margin-top: calc(10px - 12px) !important;
  margin-inline-end: calc(10px - 16px) !important;
  margin-bottom: 0 !important;
  margin-inline-start: 0 !important;
  align-self: flex-start;
  border-radius: 9999px !important;
  color: var(--sand-text-secondary) !important;
}

.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-modal-surface"]
  button.rounded-full:not([data-slot="xds-button"]):hover {
  background-color: var(--sand-fill-secondary) !important;
}

.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-modal-surface"]
  button.rounded-full:not([data-slot="xds-button"])
  svg {
  width: 14px !important;
  height: 14px !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-footer"] {
  display: flex !important;
  align-items: center;
  justify-content: flex-end;
  gap: 8px !important;
  padding-top: 12px !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"] {
  border-radius: 9999px !important;
  height: 24px !important;
  min-height: 24px !important;
  padding: 4px 10px !important;
  font-family: inherit;
  font-size: 12px !important;
  line-height: 16px !important;
  font-weight: var(--sand-font-weight-regular, 425) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"].bg-btn-primary,
.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"].x-commerce-credits-primary {
  background-color: var(--sand-fill-primary) !important;
  color: var(--sand-text-on-primary) !important;
}

.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-button"].bg-btn-primary:hover:not(:disabled),
.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-button"].x-commerce-credits-primary:hover:not(:disabled) {
  background-color: var(--sand-fill-primary-hover) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"].bg-btn-primary:disabled,
.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-button"].x-commerce-credits-primary:disabled {
  background-color: var(--sand-fill-primary-disabled) !important;
  color: var(--sand-text-disabled) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"].bg-btn-secondary {
  background-color: var(--sand-fill-secondary) !important;
  color: var(--sand-text-primary) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"][data-sand-billing-destructive],
.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"]:has(.text-destructive) {
  background-color: transparent !important;
  color: var(--sand-text-danger) !important;
}

.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-button"][data-sand-billing-destructive]:hover:not(:disabled),
.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-button"]:has(.text-destructive):hover:not(:disabled) {
  background-color: var(--sand-fill-danger-subtle) !important;
}

.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-button"]:has(.text-destructive)
  .text-destructive {
  color: var(--sand-text-danger) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"][aria-pressed] {
  height: 32px !important;
  min-height: 32px !important;
  border-radius: 9999px !important;
  border-color: var(--sand-border-default) !important;
  font-size: var(--sand-font-size-sm, 13px) !important;
  font-weight: var(--sand-font-weight-regular, 425) !important;
  color: var(--sand-text-primary) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"][aria-pressed="true"] {
  background-color: var(--sand-fill-secondary) !important;
  border-color: transparent !important;
}

/* The credits card in the IDE's and Glass's Plan & Usage tab, the hosts that
   pass no skin: shaped like the tab's other cards (an \`@anysphere/ui\` Section
   body), with the note under it. The selectors follow commerce-ui's
   \`CreditsCard\` markup: the card's box, then the note, open its section,
   and the card's dialogs render in place after them, so every rule reaches
   only the box or the note. \`:not([data-skin])\` keeps them off Sand and
   outranks the utilities and the type scale above without \`!important\`. */
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > :first-child {
  border-width: 0;
  border-radius: var(--cursor-radius-xl, 12px);
  background-color: var(--cursor-bg-quinary);
}
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > .bg-destructive\\/30 {
  background-color: var(--cursor-bg-red-quinary);
}
/* The balance, as \`@anysphere/ui\`'s 3xl figure. */
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > :first-child .text-title1 {
  font-size: 22px;
  line-height: 26px;
  letter-spacing: var(--cursor-letter-spacing-3xl, -0.26px);
}
/* Pending top-ups, in body text like the rows. */
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > :first-child .text-subtext2 {
  font-size: var(--cursor-font-size-base, 13px);
  line-height: var(--cursor-line-height-base, 18px);
}
/* Rows on the tab's 24px row height. */
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > :first-child dl {
  gap: var(--cursor-spacing-0-5, 2px);
}
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > :first-child dl > div {
  min-height: var(--cursor-spacing-6, 24px);
  column-gap: var(--cursor-spacing-3, 12px);
}
/* The note, on the card's inset in the tab's small type. */
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > p {
  margin: 0;
  padding: var(--cursor-spacing-3, 12px);
  font-size: var(--cursor-font-size-sm, 12px);
  line-height: var(--cursor-line-height-sm, 16px);
}
`;
fr();
function P0(e) {
    return [
        "billing-info",
        e.provider,
        e.teamId ?? ""
    ];
}
a(P0, "getBillingInfoQueryKey");
function qN(e) {
    return e.taxBehavior === "inclusive" || e.taxInclusive === !0;
}
a(qN, "isTaxInclusive");
function QN(e) {
    return [
        "browse",
        e.product,
        e.country,
        e.platform,
        [
            ...e.skuIds ?? []
        ].sort().join(",")
    ];
}
a(QN, "getBrowseQueryKey"), fr(), fr();
function JN({ edge: e, subscriptionId: t, skuId: r, pricingId: n, quantity: o, country: i, platform: s, product: c }) {
    function l(m) {
        if (e.updateAcquisition === void 0) return Promise.reject(new Pe("UNIMPLEMENTED", "change-sku execute is not available on this edge", {
            retriable: !1
        }));
        const u = {
            subscriptionId: t,
            cartId: m.cartId,
            idempotencyKey: m.idempotencyKey
        };
        return m.payment.kind === "in-app-purchase" ? u.storeProof = m.payment.proof : m.payment.paymentMethodId !== void 0 && (u.paymentMethodId = m.payment.paymentMethodId), e.updateAcquisition(u);
    }
    return a(l, "applyUpdate"), {
        mint (m, u) {
            return u.throwIfAborted(), e.prepareChangeSkuCart === void 0 ? Promise.reject(new Pe("UNIMPLEMENTED", "change-sku quote is not available on this edge", {
                retriable: !1
            })) : e.prepareChangeSkuCart({
                subscriptionId: t,
                skuId: r,
                pricingId: n,
                quantity: o,
                idempotencyKey: crypto.randomUUID(),
                country: i,
                platform: s,
                product: c
            });
        },
        settle: l,
        resume: l
    };
}
a(JN, "createChangeSkuCheckoutPath"), fr(), fr();
function eP({ edge: e, selections: t, platform: r, getSessionToken: n, preparedSession: o }) {
    const i = t.map(function(c) {
        return {
            ...c
        };
    }), s = o === void 0 ? void 0 : {
        ...o
    };
    return {
        async mint (c, l) {
            if (l.throwIfAborted(), s !== void 0 && (c || s.expiresAt <= Date.now())) throw new Pe("OFFER_REVIEW_REQUIRED", "the prepared offer must be reviewed again", {
                retriable: !1
            });
            const m = await (s === void 0 ? n(c ? {
                fresh: !0
            } : void 0) : Promise.resolve(s.token));
            if (l.throwIfAborted(), s !== void 0 && s.expiresAt <= Date.now()) throw new Pe("OFFER_REVIEW_REQUIRED", "the prepared offer expired before cart creation", {
                retriable: !1
            });
            return e.getCartForSession({
                sessionToken: m,
                selections: i.map(function(u) {
                    return {
                        ...u
                    };
                }),
                platform: r
            });
        },
        async settle (c) {
            const l = {
                cartId: c.cartId,
                payment: c.payment,
                idempotencyKey: c.idempotencyKey
            };
            return c.billingAddress !== void 0 && (l.billingAddress = c.billingAddress), c.billingEmail !== void 0 && (l.billingEmail = c.billingEmail), e.acquire(l);
        },
        async resume (c) {
            try {
                return await e.getAcquisitionStatus(c.purchaseId);
            } catch (l) {
                if (l instanceof Pe && (!l.retriable || l.code === "CART_EXPIRED" || l.code === "CART_ALREADY_CONSUMED" || l.code === "CART_STALE")) throw l;
                return {
                    status: "PENDING",
                    purchaseId: c.purchaseId
                };
            }
        }
    };
}
a(eP, "createSessionCheckoutPath");
var qz = {
    AC: "ASCN 1ZZ",
    AD: "AD[1-7]0\\d",
    AF: "\\d{4}",
    AI: "(?:AI-)?2640",
    AL: "\\d{4}",
    AM: "(?:37)?\\d{4}",
    AR: "[A-HJ-NP-Z]\\d{4}[A-Z]{3}",
    AS: "(96799)(?:[ \\-](\\d{4}))?",
    AT: "\\d{4}",
    AU: "\\d{4}",
    AX: "22\\d{3}",
    AZ: "\\d{4}",
    BA: "\\d{5}",
    BB: "BB\\d{5}",
    BD: "\\d{4}",
    BE: "\\d{4}",
    BG: "\\d{4}",
    BH: "(?:^|\\b)(?:1[0-2]|[1-9])\\d{2}(?:$|\\b)",
    BL: "9[78][01]\\d{2}",
    BM: "[A-Z]{2} ?[A-Z0-9]{2}",
    BN: "[A-Z]{2} ?\\d{4}",
    BR: "\\d{5}-?\\d{3}",
    BT: "\\d{5}",
    BY: "\\d{6}",
    CA: "[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z] ?\\d[ABCEGHJ-NPRSTV-Z]\\d",
    CC: "6799",
    CH: "\\d{4}",
    CL: "\\d{7}",
    CN: "\\d{6}",
    CO: "\\d{6}",
    CR: "\\d{4,5}|\\d{3}-\\d{4}",
    CU: "\\d{5}",
    CV: "\\d{4}",
    CX: "6798",
    CY: "\\d{4}",
    CZ: "\\d{3} ?\\d{2}",
    DE: "\\d{5}",
    DK: "\\d{4}",
    DO: "\\d{5}",
    DZ: "\\d{5}",
    EC: "\\d{6}",
    EE: "\\d{5}",
    EG: "\\d{7}|\\d{5}",
    EH: "\\d{5}",
    ES: "\\d{5}",
    ET: "\\d{4}",
    FI: "\\d{5}",
    FK: "FIQQ 1ZZ",
    FM: "(9694[1-4])(?:[ \\-](\\d{4}))?",
    FO: "\\d{3}",
    FR: "\\d{2} ?\\d{3}",
    GB: "GIR ?0AA|(?:(?:AB|AL|B|BA|BB|BD|BF|BH|BL|BN|BR|BS|BT|BX|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(?:\\d[\\dA-Z]? ?\\d[ABD-HJLN-UW-Z]{2}))|BFPO ?\\d{1,4}",
    GE: "\\d{4}",
    GF: "9[78]3\\d{2}",
    GG: "GY\\d[\\dA-Z]? ?\\d[ABD-HJLN-UW-Z]{2}",
    GI: "GX11 1AA",
    GL: "39\\d{2}",
    GN: "\\d{3}",
    GP: "9[78][01]\\d{2}",
    GR: "\\d{3} ?\\d{2}",
    GS: "SIQQ 1ZZ",
    GT: "\\d{5}",
    GU: "(969(?:[12]\\d|3[12]))(?:[ \\-](\\d{4}))?",
    GW: "\\d{4}",
    HM: "\\d{4}",
    HN: "\\d{5}",
    HR: "\\d{5}",
    HT: "\\d{4}",
    HU: "\\d{4}",
    ID: "\\d{5}",
    IE: "[\\dA-Z]{3} ?[\\dA-Z]{4}",
    IL: "\\d{5}(?:\\d{2})?",
    IM: "IM\\d[\\dA-Z]? ?\\d[ABD-HJLN-UW-Z]{2}",
    IN: "\\d{6}",
    IO: "BBND 1ZZ",
    IQ: "\\d{5}",
    IR: "\\d{5}-?\\d{5}",
    IS: "\\d{3}",
    IT: "\\d{5}",
    JE: "JE\\d[\\dA-Z]? ?\\d[ABD-HJLN-UW-Z]{2}",
    JO: "\\d{5}",
    JP: "\\d{3}-?\\d{4}",
    KE: "\\d{5}",
    KG: "\\d{6}",
    KH: "\\d{5,6}",
    KR: "\\d{5}",
    KW: "\\d{5}",
    KY: "KY\\d-\\d{4}",
    KZ: "\\d{6}",
    LA: "\\d{5}",
    LB: "(?:\\d{4})(?: ?(?:\\d{4}))?",
    LI: "948[5-9]|949[0-8]",
    LK: "\\d{5}",
    LR: "\\d{4}",
    LS: "\\d{3}",
    LT: "\\d{5}",
    LU: "\\d{4}",
    LV: "LV-\\d{4}",
    MA: "\\d{5}",
    MC: "980\\d{2}",
    MD: "\\d{4}",
    ME: "8\\d{4}",
    MF: "9[78][01]\\d{2}",
    MG: "\\d{3}",
    MH: "(969[67]\\d)(?:[ \\-](\\d{4}))?",
    MK: "\\d{4}",
    MM: "\\d{5}",
    MN: "\\d{5}",
    MP: "(9695[012])(?:[ \\-](\\d{4}))?",
    MQ: "9[78]2\\d{2}",
    MT: "[A-Z]{3} ?\\d{2,4}",
    MU: "\\d{3}(?:\\d{2}|[A-Z]{2}\\d{3})",
    MV: "\\d{5}",
    MX: "\\d{5}",
    MY: "\\d{5}",
    MZ: "\\d{4}",
    NA: "\\d{5}",
    NC: "988\\d{2}",
    NE: "\\d{4}",
    NF: "2899",
    NG: "\\d{6}",
    NI: "\\d{5}",
    NL: "[1-9]\\d{3} ?(?:[A-RT-Z][A-Z]|S[BCE-RT-Z])",
    NO: "\\d{4}",
    NP: "\\d{5}",
    NZ: "\\d{4}",
    OM: "(?:PC )?\\d{3}",
    PE: "(?:LIMA \\d{1,2}|CALLAO 0?\\d)|[0-2]\\d{4}",
    PF: "987\\d{2}",
    PG: "\\d{3}",
    PH: "\\d{4}",
    PK: "\\d{5}",
    PL: "\\d{2}-\\d{3}",
    PM: "9[78]5\\d{2}",
    PN: "PCRN 1ZZ",
    PR: "(00[679]\\d{2})(?:[ \\-](\\d{4}))?",
    PT: "\\d{4}-\\d{3}",
    PW: "(969(?:39|40))(?:[ \\-](\\d{4}))?",
    PY: "\\d{6}",
    RE: "9[78]4\\d{2}",
    RO: "\\d{6}",
    RS: "\\d{5,6}",
    RU: "\\d{6}",
    SA: "\\d{5}",
    SD: "\\d{5}",
    SE: "\\d{3} ?\\d{2}",
    SG: "\\d{6}",
    SH: "(?:ASCN|STHL) 1ZZ",
    SI: "\\d{4}",
    SJ: "\\d{4}",
    SK: "\\d{3} ?\\d{2}",
    SM: "4789\\d",
    SN: "\\d{5}",
    SO: "[A-Z]{2} ?\\d{5}",
    SV: "[1-3][1-7][0-2]\\d",
    SZ: "[HLMS]\\d{3}",
    TA: "TDCU 1ZZ",
    TC: "TKCA 1ZZ",
    TH: "\\d{5}",
    TJ: "\\d{6}",
    TM: "\\d{6}",
    TN: "\\d{4}",
    TR: "\\d{5}",
    TT: "\\d{6}",
    TW: "\\d{3}(?:\\d{2,3})?",
    TZ: "\\d{4,5}",
    UA: "\\d{5}",
    UM: "96898",
    US: "(\\d{5})(?:[ \\-](\\d{4}))?",
    UY: "\\d{5}",
    UZ: "\\d{6}",
    VA: "00120",
    VC: "VC\\d{4}",
    VE: "\\d{4}",
    VG: "VG\\d{4}",
    VI: "(008(?:(?:[0-4]\\d)|(?:5[01])))(?:[ \\-](\\d{4}))?",
    VN: "\\d{5}\\d?",
    WF: "986\\d{2}",
    XK: "[1-7]\\d{4}",
    YT: "976\\d{2}",
    ZA: "\\d{4}",
    ZM: "\\d{5}"
}, Qz = Object.fromEntries(Object.entries(qz).map(([e, t])=>[
        e,
        new RegExp(`^(?:${t})$`)
    ]));
function tP(e, t) {
    const r = t.trim().toUpperCase(), n = e.trim().toUpperCase();
    if (n === "" || r === "") return !1;
    const o = Qz[n];
    return o === void 0 ? /\d/.test(r) : o.test(r);
}
a(tP, "isPostalCodeWellFormed");
function rP(e) {
    const t = e.regionCode.trim().toUpperCase(), r = e.postalCode.trim();
    if (t === "" || !tP(t, r)) return;
    const n = e.addressLines?.flatMap((o)=>o.trim() || []) ?? [];
    return {
        regionCode: t,
        postalCode: r,
        administrativeAreaCode: e.administrativeAreaCode?.trim() || void 0,
        addressLines: n.length > 0 ? n : void 0,
        locality: e.locality?.trim() || void 0
    };
}
a(rP, "normalizeTaxAddress");
function _0(e) {
    return e.kind === "in-app-purchase" ? e : e.paymentMethodId === void 0 ? {
        kind: "charge"
    } : {
        kind: "charge",
        paymentMethodId: e.paymentMethodId
    };
}
a(_0, "toAcquirePayment");
var nP = [
    500,
    1e3,
    2e3,
    4e3,
    8e3
], oP = 3, us = new Set([
    "BENEFIT_NOT_ELIGIBLE",
    "SKU_NOT_AVAILABLE_IN_MARKET",
    "MIXED_RECURRENCE_INTERVAL",
    "SELECTION_NOT_IN_SESSION",
    "PLATFORM_NOT_IN_SESSION",
    "AMBIGUOUS_SELECTION"
]), Va = new Set([
    "CART_EXPIRED",
    "CART_ALREADY_CONSUMED",
    "CART_STALE"
]), Jz = 8e3, aP = new Set([
    "idle",
    "mintingCart",
    "cartReady",
    "failed"
]), iP = new Set([
    "cartReady",
    "failed"
]), M0 = new Set([
    "SESSION_EXPIRED",
    "SESSION_INVALID",
    "SESSION_SUBJECT_MISMATCH"
]);
function ym(e) {
    return nP[Math.min(e, nP.length - 1)];
}
a(ym, "backoffMs");
function sP(e) {
    const t = e.trim();
    if (t !== "") return t;
}
a(sP, "normalizeBillingEmail");
function cP(e) {
    return e.paymentPending === !0 || e.status === "submitting" || e.status === "polling" || e.status === "requiresAction";
}
a(cP, "holdsPayment");
function O0({ edge: e, selections: t, platform: r, path: n, getSessionToken: o, preparedSession: i, claimPayment: s, handleAction: c, inAppPurchaseAcquireAttempts: l = 1, collectBillingEmail: m = !1, taxInclusive: u = !1, returnUrl: d, teamId: p, resume: h }) {
    const f = i === void 0 ? void 0 : {
        ...i
    }, v = n ?? eP({
        edge: e,
        selections: t,
        platform: r,
        preparedSession: f,
        getSessionToken: o ?? a(function() {
            return Promise.reject(new Error("session checkout needs getSessionToken or a path"));
        }, "missingSessionToken")
    }), x = new Set;
    let g = 0, y, w, b = {
        status: "idle"
    }, T = 0, R, E = !1, S = {
        status: "idle",
        selections: t,
        cartRevision: g,
        taxEstimate: b,
        submitRefused: E,
        submitQueued: !1,
        collectBillingEmail: m,
        taxInclusive: u
    }, A = 0, C, P = !1, O, M, F, K;
    const re = new Map;
    let te, J = !1, $ = !1, ee = !1, W = !1, ne = !1, xe = 0, j = structuredClone(h), oe, ce, ve;
    function U(_) {
        S = {
            ..._,
            billingAddress: y,
            billingEmail: w,
            cartRevision: g,
            collectBillingEmail: m,
            inAppPurchasePending: ee,
            paymentPending: $,
            submitQueued: R !== void 0,
            submitRefused: E,
            taxEstimate: b,
            taxInclusive: u
        };
        const X = [
            ...x
        ];
        for (const z of X)z();
    }
    a(U, "emit");
    function qe() {
        if (oe !== void 0 && (clearTimeout(oe), oe = void 0), ce !== void 0 && (clearTimeout(ce), ce = void 0), ve !== void 0) {
            const _ = ve;
            ve = void 0, _();
        }
    }
    a(qe, "clearTimers");
    function He(_) {
        return new Promise(a(function(z) {
            ve = a(function() {
                ve = void 0, z();
            }, "onSleep"), ce = setTimeout(a(function() {
                ce = void 0;
                const Se = ve;
                ve = void 0, Se?.();
            }, "onDelay"), _);
        }, "scheduleDelay"));
    }
    a(He, "delay");
    function We() {
        return C?.abort(), C = void 0, qe(), A += 1, A;
    }
    a(We, "beginWork");
    function H(_) {
        return P || _ !== A;
    }
    a(H, "isStale");
    function le(_, X, z = {}) {
        U({
            status: "failed",
            selections: t,
            cart: S.cart,
            ...z,
            error: {
                code: "TRANSPORT_FAILURE",
                message: Error.isError(_) ? _.message : String(_),
                retriable: !0,
                recovery: X
            }
        });
    }
    a(le, "failFromUnknown");
    function Ee(_ = S.cart) {
        U({
            status: "failed",
            selections: t,
            cart: _,
            error: {
                code: "OFFER_REVIEW_REQUIRED",
                message: "the prepared offer must be reviewed again",
                retriable: !1
            }
        });
    }
    a(Ee, "failOfferReview");
    function Oe(_) {
        if (_ instanceof Pe) {
            if (f !== void 0 && (M0.has(_.code) || Va.has(_.code) || us.has(_.code))) {
                Ee();
                return;
            }
            M0.has(_.code) && (W = !0);
            const X = M0.has(_.code) || _.retriable && !us.has(_.code) ? "re-mint-cart" : void 0;
            U({
                status: "failed",
                selections: t,
                cart: S.cart,
                error: {
                    code: _.code,
                    message: _.message,
                    retriable: _.retriable,
                    recovery: X
                }
            });
            return;
        }
        le(_, "re-mint-cart");
    }
    a(Oe, "failMint");
    function Me(_) {
        if (f !== void 0) {
            Ee(_);
            return;
        }
        W = !0, U({
            status: "failed",
            selections: t,
            cart: _,
            error: {
                code: "CART_EXPIRED",
                message: "cart is already expired",
                retriable: !0,
                recovery: "re-mint-cart"
            }
        });
    }
    a(Me, "failCartExpired");
    function ie(_, X) {
        if ($ || S.status !== "cartReady") return;
        const z = _ - Date.now();
        if (z <= 0) {
            Me(S.cart);
            return;
        }
        oe = setTimeout(a(function() {
            if (oe = void 0, !(H(X) || S.status !== "cartReady")) {
                if (f !== void 0) {
                    Me(S.cart);
                    return;
                }
                D({
                    freshSession: !1
                });
            }
        }, "onCartExpiry"), z);
    }
    a(ie, "armExpiry");
    function q(_) {
        b = _, _.status !== "error" && (E = !1);
        const X = _.status === "pending" ? void 0 : R;
        X !== void 0 && (R = void 0), U(S), X !== void 0 && Ye(X);
    }
    a(q, "setTaxEstimate");
    function Z() {
        return b.status === "error" && b.error.code === "ADDRESS_INVALID";
    }
    a(Z, "quoteRefused");
    function me() {
        return m && w === void 0;
    }
    a(me, "billingEmailMissing");
    function Ie() {
        E = !0, U(S);
    }
    a(Ie, "refuseSubmit");
    function Ae(_, X) {
        ne = !1, J = !1, $ = !1;
        const z = S.cart;
        X.code === "ADDRESS_INVALID" ? (E = !0, b = {
            status: "error",
            error: X
        }, U({
            status: "cartReady",
            selections: t,
            cart: z
        })) : U({
            status: "cartReady",
            selections: t,
            cart: z,
            error: X
        }), !(z === void 0 || H(_)) && ie(f === void 0 ? z.expiresAt : Math.min(z.expiresAt, f.expiresAt), _);
    }
    a(Ae, "stayForBillingFix");
    function Ge(_) {
        _ === T && b.status === "pending" && q({
            status: "idle"
        });
    }
    a(Ge, "settleDiscardedEstimate");
    function et(_, X) {
        return P || _ !== T || X !== g || !iP.has(S.status);
    }
    a(et, "isEstimateStale");
    function je() {
        return !P && e.estimateTax !== void 0 && y !== void 0 && S.cart !== void 0 && iP.has(S.status);
    }
    a(je, "canEstimate");
    async function k() {
        const _ = S.cart, X = y;
        if (!je() || _ === void 0 || X === void 0) return;
        const z = ++T, ae = g;
        if (q({
            status: "pending"
        }), et(z, ae)) return;
        let Se;
        try {
            const de = await Promise.race([
                e.estimateTax?.({
                    cartId: _.cartId,
                    billingAddress: X
                }),
                new Promise((cn, Qn)=>{
                    Se = setTimeout(()=>Qn(new Error("tax estimate timed out")), Jz);
                })
            ]);
            if (de === void 0 || et(z, ae)) {
                Ge(z);
                return;
            }
            q({
                status: "ready",
                estimate: de
            });
        } catch (de) {
            if (et(z, ae)) {
                Ge(z);
                return;
            }
            q({
                status: "error",
                error: de instanceof Pe ? {
                    code: de.code,
                    message: de.message,
                    retriable: de.retriable
                } : {
                    code: "TRANSPORT_FAILURE",
                    message: Error.isError(de) ? de.message : String(de),
                    retriable: !0
                }
            });
        } finally{
            clearTimeout(Se);
        }
    }
    a(k, "runEstimate");
    async function I(_, X, z) {
        if (!(H(_) || z.aborted)) try {
            if (f !== void 0 && (X || f.expiresAt <= Date.now())) {
                Ee();
                return;
            }
            const ae = await v.mint(X, z);
            if (H(_)) return;
            if (f !== void 0 && f.expiresAt <= Date.now()) {
                Ee(ae);
                return;
            }
            if (ae.expiresAt <= Date.now()) {
                if (f !== void 0) {
                    Me(ae);
                    return;
                }
                if (!X) {
                    W = !0, I(_, !0, z);
                    return;
                }
                Me(ae);
                return;
            }
            if (ae.payload.platform !== r) {
                U({
                    status: "failed",
                    selections: t,
                    cart: ae,
                    error: {
                        code: "CART_PLATFORM_MISMATCH",
                        message: `cart payload is ${ae.payload.platform}, checkout committed ${r}`,
                        retriable: !1
                    }
                });
                return;
            }
            if (ae.payload.platform === "STRIPE" && ae.payload.publishableKey === void 0) {
                U({
                    status: "failed",
                    selections: t,
                    cart: ae,
                    error: {
                        code: "STRIPE_PUBLISHABLE_KEY_MISSING",
                        message: "STRIPE cart payload carries no publishableKey",
                        retriable: !1
                    }
                });
                return;
            }
            if (ae.payload.platform === "PAYPAL" && ae.payload.tokenizationKey === void 0) {
                U({
                    status: "failed",
                    selections: t,
                    cart: ae,
                    error: {
                        code: "PAYPAL_TOKENIZATION_KEY_MISSING",
                        message: "PAYPAL cart payload carries no tokenizationKey",
                        retriable: !1
                    }
                });
                return;
            }
            if (W = !1, g += 1, b = y !== void 0 && e.estimateTax !== void 0 ? {
                status: "pending"
            } : {
                status: "idle"
            }, U({
                status: "cartReady",
                selections: t,
                cart: ae
            }), H(_)) return;
            if (j !== void 0) {
                const Se = j;
                j = void 0;
                const de = ae.selections[0]?.pricingId;
                if (Se.platform === r && Ln(ae.total, Se.expected.total) && (Se.expected.pricingId === void 0 || de === void 0 || de === Se.expected.pricingId)) {
                    y = Se.billingAddress, w = Se.billingEmail, O = Se.attemptKey, K = Se.attachKey, M = Se.billingAddress, F = Se.billingEmail, xe = Se.rounds, te = {
                        kind: "charge",
                        paymentMethodId: Se.paymentMethodId
                    }, ne = !0, he("action");
                    return;
                }
            }
            ie(f === void 0 ? ae.expiresAt : Math.min(ae.expiresAt, f.expiresAt), _), k();
        } catch (ae) {
            if (H(_)) return;
            Oe(ae);
        }
    }
    a(I, "runMint");
    function D({ freshSession: _ }) {
        R = void 0;
        const X = We(), z = new AbortController;
        C = z;
        const ae = _ || W;
        W = ae, O = void 0, ne = !1, xe = 0, U({
            status: "mintingCart",
            selections: t,
            cart: S.cart
        }), I(X, ae, z.signal);
    }
    a(D, "mintCart");
    async function V(_, X) {
        for(let z = 0;; z += 1){
            if (H(X)) return;
            try {
                return await v.settle(_);
            } catch (ae) {
                if (ae instanceof Pe || z + 1 >= l) throw ae;
                if (await He(ym(z)), H(X)) return;
            }
        }
    }
    a(V, "runSettleAttempts");
    function G(_, X, z) {
        const ae = S.cart;
        switch(_.status){
            case "SUCCEEDED":
                {
                    $ = !1;
                    const Se = {
                        status: "succeeded",
                        selections: t,
                        cart: ae,
                        purchaseId: _.purchaseId,
                        subscriptionId: _.subscriptionId
                    };
                    _.effectiveAt !== void 0 && (Se.effectiveAt = _.effectiveAt), U(Se);
                    return;
                }
            case "PENDING":
                U({
                    status: "polling",
                    selections: t,
                    cart: ae,
                    purchaseId: _.purchaseId,
                    inFlightFrom: z
                }), Qe(_.purchaseId, X, 0, z);
                return;
            case "REQUIRES_ACTION":
                if (xe += 1, xe > oP) {
                    Q(_.purchaseId);
                    return;
                }
                U({
                    status: "requiresAction",
                    selections: t,
                    cart: ae,
                    purchaseId: _.purchaseId
                }), Ce(_.action, _.purchaseId, X);
                return;
            case "FAILED":
                if (_.error.code === "BILLING_EMAIL_INVALID" || _.error.code === "ADDRESS_INVALID") {
                    Ae(X, _.error);
                    return;
                }
                if (S.status === "polling" && $ && Va.has(_.error.code)) {
                    ne = !0, U({
                        status: "failed",
                        selections: t,
                        cart: ae,
                        purchaseId: _.purchaseId,
                        error: {
                            ..._.error,
                            recovery: _.error.retriable ? "retry-payment" : void 0
                        }
                    });
                    return;
                }
                if ($ = te?.kind === "in-app-purchase", Va.has(_.error.code) && te?.kind !== "in-app-purchase") {
                    D({
                        freshSession: !0
                    });
                    return;
                }
                if (_.error.retriable && !us.has(_.error.code)) {
                    ne = $, U({
                        status: "failed",
                        selections: t,
                        cart: ae,
                        purchaseId: _.purchaseId,
                        error: {
                            ..._.error,
                            recovery: "retry-payment"
                        }
                    });
                    return;
                }
                U({
                    status: "failed",
                    selections: t,
                    cart: ae,
                    purchaseId: _.purchaseId,
                    error: _.error
                });
        }
    }
    a(G, "applyOutcome");
    function Q(_) {
        xe = 0, ne = !0, U({
            status: "failed",
            selections: t,
            cart: S.cart,
            purchaseId: _,
            error: {
                code: "AUTHENTICATION_STALLED",
                message: "authentication was still required after the challenge completed",
                retriable: !0,
                recovery: "retry-payment"
            }
        });
    }
    a(Q, "failAuthenticationStalled");
    function ue(_) {
        U({
            status: "failed",
            selections: t,
            cart: S.cart,
            purchaseId: _,
            error: {
                code: "AUTHENTICATION_UNAVAILABLE",
                message: "the required authentication step has no handler",
                retriable: !1
            }
        });
    }
    a(ue, "failAuthenticationUnavailable");
    async function Ce(_, X, z) {
        if (!H(z)) {
            if (!c) {
                ue(X);
                return;
            }
            try {
                const ae = await c(_);
                if (H(z) || S.status !== "requiresAction") return;
                if (ae === "unhandled") {
                    ue(X);
                    return;
                }
                if (X === void 0) {
                    if (ne = !0, xe > 1 && (await He(ym(xe - 2)), H(z) || S.status !== "requiresAction")) return;
                    he("action");
                    return;
                }
                dt(X, "action");
            } catch (ae) {
                if (H(z) || S.status !== "requiresAction") return;
                ne = !0, le(ae, "retry-payment", {
                    purchaseId: X,
                    cart: S.cart
                });
            }
        }
    }
    a(Ce, "runHandleAction");
    async function Qe(_, X, z, ae) {
        if (H(X)) return;
        const Se = S.cart;
        if (Se === void 0 || O === void 0) {
            U({
                status: "failed",
                selections: t,
                cart: Se,
                purchaseId: _,
                error: {
                    code: "RESUME_STATE_LOST",
                    message: "resume needs the cart and attempt key of the charge",
                    retriable: !1,
                    recovery: void 0
                }
            });
            return;
        }
        if (!(z > 0 && (await He(ym(z - 1)), H(X)))) try {
            const de = await v.resume({
                purchaseId: _,
                cartId: Se.cartId,
                idempotencyKey: O,
                payment: te ? _0(te) : {
                    kind: "charge"
                }
            });
            if (H(X)) return;
            if (de.status === "PENDING") {
                Qe(_, X, z + 1, ae);
                return;
            }
            G(de, X, ae);
        } catch (de) {
            if (H(X)) return;
            if (de instanceof Pe) {
                if (Va.has(de.code) && !$ && te?.kind !== "in-app-purchase") {
                    D({
                        freshSession: !0
                    });
                    return;
                }
                if (!de.retriable || Va.has(de.code)) {
                    ne = $, U({
                        status: "failed",
                        selections: t,
                        cart: Se,
                        purchaseId: _,
                        error: {
                            code: de.code,
                            message: de.message,
                            retriable: de.retriable,
                            recovery: de.retriable ? "retry-payment" : void 0
                        }
                    });
                    return;
                }
            }
            Qe(_, X, z + 1, ae);
        }
    }
    a(Qe, "resumePending");
    function dt(_, X) {
        const z = We();
        U({
            status: "polling",
            selections: t,
            cart: S.cart,
            purchaseId: _,
            inFlightFrom: X
        }), Qe(_, z, 0, X);
    }
    a(dt, "startPolling");
    async function Kt(_, X, z) {
        if (H(z)) return;
        const ae = {
            provider: r,
            paymentMethodId: _,
            idempotencyKey: K
        };
        d !== void 0 && r === "STRIPE" && (ae.returnUrl = d), p !== void 0 && (ae.teamId = p);
        try {
            const Se = await e.attachPaymentMethod(ae);
            if (H(z)) return;
            if (Se.status === "requires-action") {
                if (xe += 1, xe > oP) {
                    Q(void 0);
                    return;
                }
                const cn = {
                    platform: r,
                    paymentMethodId: _,
                    attachKey: K,
                    attemptKey: O,
                    rounds: xe,
                    expected: {
                        total: X.total
                    }
                }, Qn = X.selections[0]?.pricingId;
                if (Qn !== void 0 && (cn.expected.pricingId = Qn), M !== void 0 && (cn.billingAddress = M), F !== void 0 && (cn.billingEmail = F), Se.action.kind === "stripe-setup-action") {
                    const Oo = Se.action.clientSecret, Zt = Oo.indexOf("_secret_");
                    Oo.startsWith("seti_") && Zt > 0 && (cn.setupIntentId = Oo.slice(0, Zt));
                }
                U({
                    status: "requiresAction",
                    selections: t,
                    cart: X,
                    redirectResume: cn
                }), Ce(Se.action, void 0, z);
                return;
            }
            const de = Se.paymentMethod.paymentMethodId;
            return re.set(_, de), re.set(de, de), de;
        } catch (Se) {
            if (H(z)) return;
            if (Se instanceof Pe) {
                ne = !1, U({
                    status: "failed",
                    selections: t,
                    cart: S.cart,
                    error: {
                        code: Se.code,
                        message: Se.message,
                        retriable: Se.retriable,
                        recovery: Se.retriable && !us.has(Se.code) ? r === "PAYPAL" ? "re-mint-cart" : "retry-payment" : void 0
                    }
                });
                return;
            }
            ne = !0, le(Se, "retry-payment", {
                cart: S.cart
            });
            return;
        }
    }
    a(Kt, "runAttach");
    async function tt(_, X) {
        if (H(_)) return;
        let z = te;
        const ae = S.cart;
        if (!z || !ae) return;
        if (z.kind === "charge" && z.paymentMethodId !== void 0 && z.alreadyVaulted !== !0) {
            const de = re.get(z.paymentMethodId) ?? await Kt(z.paymentMethodId, ae, _);
            if (de === void 0 || H(_)) return;
            de !== z.paymentMethodId && (z = {
                kind: "charge",
                paymentMethodId: de
            }, te = z);
        }
        const Se = {
            cartId: ae.cartId,
            payment: _0(z),
            idempotencyKey: O
        };
        z.kind === "charge" && M !== void 0 && (Se.billingAddress = M), z.kind === "charge" && m && F !== void 0 && (Se.billingEmail = F);
        try {
            $ = !0;
            const de = z.kind === "in-app-purchase" ? await V(Se, _) : await v.settle(Se);
            if (de === void 0 || H(_)) return;
            G(de, _, X);
        } catch (de) {
            if (H(_)) return;
            if (de instanceof Pe && (de.code === "BILLING_EMAIL_INVALID" || de.code === "ADDRESS_INVALID")) {
                Ae(_, {
                    code: de.code,
                    message: de.message,
                    retriable: de.retriable
                });
                return;
            }
            if (de instanceof Pe) {
                if ($ = z.kind === "in-app-purchase", Va.has(de.code) && z.kind !== "in-app-purchase") {
                    D({
                        freshSession: !0
                    });
                    return;
                }
                ne = $, U({
                    status: "failed",
                    selections: t,
                    cart: ae,
                    purchaseId: S.purchaseId,
                    error: {
                        code: de.code,
                        message: de.message,
                        retriable: de.retriable,
                        recovery: de.retriable && !us.has(de.code) ? "retry-payment" : void 0
                    }
                });
                return;
            }
            ne = !0, le(de, "retry-payment", {
                purchaseId: S.purchaseId,
                cart: ae
            });
        }
    }
    a(tt, "runSubmit");
    function he(_ = "confirm") {
        if (!te || !S.cart) return;
        if (f !== void 0 && !J && (f.expiresAt <= Date.now() || S.cart.expiresAt <= Date.now())) {
            qe(), Ee();
            return;
        }
        if (!ee && s?.() === !1) {
            U({
                status: "failed",
                selections: t,
                cart: S.cart,
                error: {
                    code: "PAYMENT_PENDING",
                    message: "another checkout payment must be reconciled first",
                    retriable: !1
                }
            });
            return;
        }
        J = !0, ee = !1;
        const X = We();
        (!ne || O === void 0) && (O = crypto.randomUUID(), K = crypto.randomUUID(), M = y, F = w, xe = 0), U({
            status: "submitting",
            selections: t,
            cart: S.cart,
            inFlightFrom: _
        }), tt(X, _);
    }
    a(he, "submit");
    function ot() {
        S.status === "succeeded" || S.status === "cancelled" || (We(), U({
            status: "cancelled",
            selections: t,
            cart: S.cart,
            purchaseId: S.purchaseId,
            subscriptionId: S.subscriptionId
        }));
    }
    a(ot, "cancel");
    function Ye(_) {
        if (P) return;
        const X = S.status;
        switch(_.type){
            case "start":
                if (X !== "idle") return;
                D({
                    freshSession: !1
                });
                return;
            case "setBillingAddress":
                {
                    if (ee || !aP.has(X)) return;
                    const z = rP(_.address);
                    if (JSON.stringify(z) === JSON.stringify(y) && b.status !== "error") return;
                    if (R = void 0, y = z, T += 1, je()) {
                        k();
                        return;
                    }
                    q({
                        status: "idle"
                    });
                    return;
                }
            case "setBillingEmail":
                {
                    if (ee || !aP.has(X)) return;
                    const z = sP(_.email);
                    if (z === w) return;
                    w = z, Z() || (E = !1), U(S.error?.code === "BILLING_EMAIL_INVALID" ? {
                        ...S,
                        error: void 0
                    } : S);
                    return;
                }
            case "submitCharge":
                if (X !== "cartReady" || ee) return;
                if (b.status === "pending") {
                    R = _, U(S);
                    return;
                }
                if (Z() || me()) {
                    Ie();
                    return;
                }
                te = _.paymentMethodId === void 0 ? {
                    kind: "charge"
                } : {
                    kind: "charge",
                    paymentMethodId: _.paymentMethodId
                }, ne = !1, he();
                return;
            case "submitSavedCharge":
                if (X !== "cartReady" || ee || _.paymentMethodId === "") return;
                if (b.status === "pending") {
                    R = _, U(S);
                    return;
                }
                if (Z() || me()) {
                    Ie();
                    return;
                }
                te = {
                    kind: "charge",
                    paymentMethodId: _.paymentMethodId,
                    alreadyVaulted: !0
                }, ne = !1, he();
                return;
            case "beginInAppPurchase":
                {
                    const z = S.cart;
                    if (X !== "cartReady" || z === void 0 || ee || $ || r !== "APPLE" && r !== "APPLE_IAP" && r !== "GOOGLE") return;
                    if (z.expiresAt <= Date.now() || f !== void 0 && f.expiresAt <= Date.now()) {
                        qe(), Me(z);
                        return;
                    }
                    if (s?.() === !1) {
                        U({
                            status: "failed",
                            selections: t,
                            cart: z,
                            error: {
                                code: "PAYMENT_PENDING",
                                message: "another checkout payment must be reconciled first",
                                retriable: !1
                            }
                        });
                        return;
                    }
                    We(), R = void 0, J = !0, $ = !0, ee = !0, U(S);
                    return;
                }
            case "cancelInAppPurchase":
                {
                    if (!ee) return;
                    const z = S.cart, ae = We();
                    ee = !1, J = !1, $ = !1, U(S), z !== void 0 && !H(ae) && ie(f === void 0 ? z.expiresAt : Math.min(z.expiresAt, f.expiresAt), ae);
                    return;
                }
            case "submitInAppPurchaseProof":
                if (X !== "cartReady") return;
                te = {
                    kind: "in-app-purchase",
                    proof: _.proof
                }, ne = !1, he();
                return;
            case "retry":
                if (X !== "failed") return;
                if (S.error?.recovery === "retry-payment") {
                    if (b.status === "pending") {
                        R = _, U(S);
                        return;
                    }
                    if (Z() || !ne && me()) {
                        Ie();
                        return;
                    }
                    he();
                    return;
                }
                S.error?.recovery === "re-mint-cart" && D({
                    freshSession: !1
                });
                return;
            case "cancel":
                R = void 0, ot();
        }
    }
    return a(Ye, "send"), {
        subscribe (_) {
            return P ? a(function() {}, "alreadyDisposed") : (x.add(_), a(function() {
                x.delete(_);
            }, "unsubscribe"));
        },
        getSnapshot () {
            return S;
        },
        send: Ye,
        dispose () {
            P = !0, We(), x.clear();
        }
    };
}
a(O0, "createCheckoutFlow");
function lP(e) {
    return [
        "checkout-session",
        "name" in e.paywall ? `name:${e.paywall.name}` : `product:${e.paywall.productLine}`,
        e.country,
        [
            ...e.platforms
        ].sort().join(","),
        e.teamId ?? ""
    ];
}
a(lP, "getCheckoutSessionQueryKey");
function wm(e) {
    return [
        "payment-methods",
        e.provider,
        e.teamId ?? ""
    ];
}
a(wm, "getPaymentMethodsQueryKey");
function D0(e) {
    return [
        ...wm(e),
        e.paymentMethodId,
        "billing-address"
    ];
}
a(D0, "getPaymentMethodBillingAddressQueryKey");
function mP(e) {
    return [
        "subscriptions",
        String(e?.includeTerminated === !0)
    ];
}
a(mP, "getSubscriptionsQueryKey");
function uP(e) {
    return typeof e == "object" && e !== null;
}
a(uP, "isDehydratedState");
var eH = [
    "product",
    "country",
    "platform"
], L0 = 3e4;
function F0(e, t) {
    for (const [r, n] of t)if (e.subscriptionId === n.pendingReplacementId && e.supersedesSubscriptionId === r) return !0;
    return !1;
}
a(F0, "isHiddenSuccessor");
function dP({ edge: e, market: t, browseDefaults: r, sessionDefaults: n, catalogTtlMs: o = 3e5, subscriptionsTtlMs: i = 3e4, initialCatalog: s, onBackgroundError: c }) {
    const l = new KS({
        queryCache: new Gp({
            onError (k, I) {
                I.state.data !== void 0 && c?.(k);
            }
        }),
        defaultOptions: {
            queries: {
                staleTime: o,
                gcTime: 2 * o,
                retry: !1,
                networkMode: "offlineFirst"
            }
        }
    });
    l.mount();
    const m = new Set;
    s && uP(s.state) && VS(l, s.state);
    const u = new Map, d = new Set, p = new Map, h = new Set, f = new Set, v = new Set;
    let x;
    async function g(k) {
        const I = await e.adoptCheckoutSession(k);
        return m.add(I.token), I;
    }
    a(g, "adoptCheckoutSession");
    function y(k) {
        if (f.has(k.token)) return;
        f.add(k.token);
        for (const [D, V] of l.getQueriesData({
            queryKey: [
                "checkout-session"
            ]
        }))V?.token === k.token && l.invalidateQueries({
            queryKey: D,
            exact: !0,
            refetchType: "none"
        });
        const I = [
            ...v
        ];
        for (const D of I)D();
    }
    a(y, "rejectCheckoutSession");
    function w(k, I) {
        if (!I) return O0(k);
        let D = !1, V = !1;
        const G = k.preparedSession === void 0 ? void 0 : {
            ...k.preparedSession
        }, Q = new Set, ue = new Set, Ce = O0({
            ...k,
            claimPayment () {
                return x !== void 0 && x !== dt ? !1 : (x = dt, !0);
            }
        });
        function Qe() {
            return cP(Ce.getSnapshot());
        }
        a(Qe, "isPending");
        const dt = {
            getSnapshot: Ce.getSnapshot,
            subscribe (tt, he) {
                if (!h.has(dt)) return a(function() {}, "alreadyDisposed");
                const ot = he?.retainOnDetach ? ue : Q;
                return ot.add(tt), a(function() {
                    ot.delete(tt);
                }, "unsubscribe");
            },
            send (tt) {
                if (h.has(dt)) {
                    if (tt.type === "cancel") {
                        Qe() || Ce.send(tt), dt.dispose();
                        return;
                    }
                    Ce.send(tt);
                }
            },
            dispose () {
                D = !0, Q.clear(), !Qe() && (ue.clear(), Kt(), Ce.dispose(), h.delete(dt), x === dt && (x = void 0));
            }
        }, Kt = Ce.subscribe(a(function() {
            const he = [
                ...Q,
                ...ue
            ], { status: ot, error: Ye } = Ce.getSnapshot(), _ = ot === "succeeded" && !V;
            _ && (V = !0), !Qe() && x === dt && (x = void 0), ot === "failed" && Ye?.code === "OFFER_REVIEW_REQUIRED" && G !== void 0 && y(G);
            for (const X of he)X();
            _ && (l.invalidateQueries({
                queryKey: [
                    "payment-methods"
                ]
            }), l.invalidateQueries({
                queryKey: [
                    "subscriptions"
                ]
            }), l.invalidateQueries({
                queryKey: [
                    "legacy-subscriptions"
                ]
            }), l.invalidateQueries({
                queryKey: [
                    "invoices"
                ]
            }), l.invalidateQueries({
                queryKey: [
                    "billing-info"
                ]
            })), D && !Qe() && dt.dispose();
        }, "observeCheckout"));
        return h.add(dt), dt;
    }
    a(w, "createClientCheckoutFlow");
    function b(k) {
        for (const [I, D] of u){
            const V = k.find((G)=>G.subscriptionId === I && G.supersededBySubscriptionId !== void 0)?.supersededBySubscriptionId;
            D.pendingReplacementId === void 0 && V !== void 0 && u.set(I, {
                ...D,
                pendingReplacementId: V
            });
        }
        return k.flatMap((I)=>{
            if (d.has(I.subscriptionId)) return I.status === "TERMINATED" ? [
                I
            ] : [];
            if (F0(I, u)) return [];
            const D = u.get(I.subscriptionId);
            if (D === void 0 || I.status === "TERMINATED") return [
                I
            ];
            if ((I.status === "GRACE" || I.status === "EXPIRING") && I.expiresAt !== void 0) {
                const { scheduledChange: Ce, supersededBySubscriptionId: Qe, ...dt } = I;
                return [
                    {
                        ...dt,
                        expiresAt: D.effectiveAt
                    }
                ];
            }
            const { nextRecurringAt: V, scheduledChange: G, supersededBySubscriptionId: Q, ...ue } = I;
            return [
                {
                    ...ue,
                    status: "EXPIRING",
                    expiresAt: D.effectiveAt
                }
            ];
        });
    }
    a(b, "reconcileConfirmedCancellations");
    const T = new Map;
    function R(k, I) {
        return k.some((D)=>D.subscriptionId === I);
    }
    a(R, "includesSubscription");
    function E(k, I) {
        const D = [
            ...T.entries()
        ].find(([, Q])=>Q.successor.subscriptionId === k);
        if (D === void 0) {
            T.set(k, {
                supersededIds: new Set([
                    k
                ]),
                successor: I,
                caughtUpQueryHashes: new Set
            });
            return;
        }
        const [V, G] = D;
        T.set(V, {
            supersededIds: new Set([
                ...G.supersededIds,
                k
            ]),
            successor: I,
            caughtUpQueryHashes: new Set
        });
    }
    a(E, "recordConfirmedSwitch");
    function S(k, I) {
        return I.has(k.subscriptionId) && k.status !== "TERMINATED";
    }
    a(S, "isLiveSupersededRow");
    function A(k) {
        let I = k;
        for (const { supersededIds: D, successor: V } of T.values()){
            let G = R(I, V.subscriptionId);
            I = I.flatMap((Q)=>S(Q, D) ? G ? [] : (G = !0, [
                    V
                ]) : [
                    Q
                ]), G || (I = [
                ...I,
                V
            ]);
        }
        return I;
    }
    a(A, "reconcileConfirmedSwitches");
    const C = new Map;
    function P(k) {
        return k.filter((I)=>I.status !== "TERMINATED").flatMap((I)=>I.items.map((D)=>`${I.subscriptionId}:${D.pricingId}:${I.status}`)).sort().join("|");
    }
    a(P, "holdingsFingerprintOf");
    function O(k, I) {
        const D = C.get(I), V = P(k);
        C.set(I, V), D !== void 0 && D !== V && l.resetQueries({
            queryKey: [
                "checkout-session"
            ]
        });
    }
    a(O, "resetCheckoutSessionsWhenHoldingsChange");
    const M = new Map;
    function F(k) {
        for (const [, I] of l.getQueriesData({
            queryKey: [
                "subscriptions"
            ]
        })){
            const D = I?.find((V)=>V.subscriptionId === k);
            if (D !== void 0) return D;
        }
    }
    a(F, "cachedSubscription");
    function K(k, I, D) {
        const V = k.find((ue)=>ue.subscriptionId === I);
        if (V === void 0) return k.length > 0;
        if (V.status === "TERMINATED" || V.status === "EXPIRING" && !p.has(I) || V.supersededBySubscriptionId !== void 0 || V.scheduledChange?.pricingId === D.pricingId && V.scheduledChange.quantity === D.quantity) return !0;
        const [G, ...Q] = V.items;
        return Q.length === 0 && G?.pricingId === D.pricingId;
    }
    a(K, "reflectsScheduledChange");
    function re(k) {
        let I = k;
        for (const [D, { change: V, heldRow: G }] of M)if (!K(I, D, V)) {
            if (I.length === 0 && G !== void 0 && G.subscriptionId === D) {
                I = [
                    {
                        ...G,
                        scheduledChange: V
                    }
                ];
                continue;
            }
            I = I.map((Q)=>Q.subscriptionId === D ? {
                    ...Q,
                    scheduledChange: V
                } : Q);
        }
        return I;
    }
    a(re, "reconcileScheduledChanges");
    function te(k, I) {
        const D = l.getQueryCache().findAll({
            queryKey: [
                "subscriptions"
            ]
        }).map((G)=>G.queryHash);
        function V(G) {
            return D.every((Q)=>G.has(Q));
        }
        a(V, "everyQueryCaughtUp");
        for (const [G, Q] of T)R(k, Q.successor.subscriptionId) && !k.some((ue)=>S(ue, Q.supersededIds)) && (Q.caughtUpQueryHashes.add(I), V(Q.caughtUpQueryHashes) && T.delete(G));
        for (const [G, Q] of M)K(k, G, Q.change) && (Q.caughtUpQueryHashes.add(I), V(Q.caughtUpQueryHashes) && M.delete(G));
        for (const [G, Q] of p){
            const ue = k.find((Ce)=>Ce.subscriptionId === G);
            (ue === void 0 ? k.length > 0 : ue.status === "TERMINATED" || ue.status !== "EXPIRING" && ue.expiresAt === void 0 && (Q.pendingReplacementId === void 0 || ue.supersededBySubscriptionId !== Q.pendingReplacementId) && (Q.cancelledScheduledChange === void 0 || ue.scheduledChange?.pricingId !== Q.cancelledScheduledChange.pricingId || ue.scheduledChange.quantity !== Q.cancelledScheduledChange.quantity)) && (Q.caughtUpQueryHashes.add(I), V(Q.caughtUpQueryHashes) && p.delete(G));
        }
    }
    a(te, "releaseSwitchesReadBy");
    function J(k) {
        return k.flatMap((I)=>{
            if (F0(I, p)) return [];
            const D = p.get(I.subscriptionId);
            if (D === void 0 || I.status === "TERMINATED") return [
                I
            ];
            const { expiresAt: V, ...G } = I;
            return G.supersededBySubscriptionId === D.pendingReplacementId && (G.supersededBySubscriptionId = void 0), D.cancelledScheduledChange !== void 0 && G.scheduledChange?.pricingId === D.cancelledScheduledChange.pricingId && G.scheduledChange.quantity === D.cancelledScheduledChange.quantity && delete G.scheduledChange, I.status !== "EXPIRING" ? [
                G
            ] : [
                {
                    ...G,
                    status: "ACTIVE",
                    nextRecurringAt: D.renewsAt
                }
            ];
        });
    }
    a(J, "reconcileConfirmedReinstatements");
    function $(k) {
        return J(b(re(A(k))));
    }
    a($, "reconcileConfirmedMutations");
    function ee(k, I) {
        (I.code === "SUBSCRIPTION_NOT_FOUND" || I.code === "SUBSCRIPTION_TERMINATED") && (u.delete(k), p.delete(k), d.add(k), W());
    }
    a(ee, "hideUntilTerminated");
    function W() {
        l.setQueriesData({
            queryKey: [
                "subscriptions"
            ]
        }, (k)=>k === void 0 ? void 0 : $(k)), l.invalidateQueries({
            queryKey: [
                "subscriptions"
            ]
        });
    }
    a(W, "writeConfirmedIntoCaches");
    function ne(k, I) {
        return l.getQueriesData({
            queryKey: [
                "browse"
            ]
        }).flatMap(([, D])=>D?.skuPricings ?? []).find((D)=>D.skuId === k && D.pricing.pricingId === I);
    }
    a(ne, "findCachedSkuPricing");
    function xe(k) {
        const I = JN(k);
        let D;
        function V(G) {
            if (G.status !== "SUCCEEDED" || D === void 0) return G;
            C.clear(), l.resetQueries({
                queryKey: [
                    "checkout-session"
                ]
            });
            const Q = ne(k.skuId, k.pricingId);
            if (G.subscriptionId === k.subscriptionId) {
                if (D.changeSkuTiming !== "SCHEDULED" || G.effectiveAt === void 0) return l.invalidateQueries({
                    queryKey: [
                        "subscriptions"
                    ]
                }), G;
                const Ce = {
                    skuId: k.skuId,
                    pricingId: k.pricingId,
                    quantity: k.quantity,
                    effectiveAt: G.effectiveAt
                };
                return Q !== void 0 && (Ce.skuPricing = Q), M.set(k.subscriptionId, {
                    change: Ce,
                    heldRow: F(k.subscriptionId),
                    caughtUpQueryHashes: new Set
                }), delete p.get(k.subscriptionId)?.cancelledScheduledChange, W(), G;
            }
            const ue = {
                skuId: k.skuId,
                pricingId: k.pricingId,
                quantity: k.quantity
            };
            return Q !== void 0 && (ue.skuPricing = Q), E(k.subscriptionId, {
                subscriptionId: G.subscriptionId,
                status: "ACTIVE",
                items: [
                    ue
                ],
                components: Q?.grants ?? [],
                catalogVersion: D.catalogVersion,
                billingPlatform: k.platform,
                startsAt: Date.now(),
                supersedesSubscriptionId: k.subscriptionId
            }), W(), G;
        }
        return a(V, "recordSwitch"), {
            async mint (G, Q) {
                return D = await I.mint(G, Q), D;
            },
            settle: a((G)=>I.settle(G).then(V), "settle"),
            resume: a((G)=>I.resume(G).then(V), "resume")
        };
    }
    a(xe, "createRecordedChangeSkuCheckoutPath");
    function j(k) {
        const I = {
            ...t,
            ...r,
            ...k
        }, { product: D, country: V, platform: G, skuIds: Q } = I;
        if (D === void 0 || V === void 0 || G === void 0) {
            const ue = eH.filter((Ce)=>I[Ce] === void 0);
            throw new Error(`browse request is missing ${ue.join(", ")} \u2014 supply market or browseDefaults on the client or pass the fields per call`);
        }
        return {
            product: D,
            country: V,
            platform: G,
            skuIds: Q
        };
    }
    a(j, "resolveBrowseRequest");
    function oe(k) {
        return {
            queryKey: QN(k),
            queryFn: a(()=>e.browse(k), "queryFn")
        };
    }
    a(oe, "getBrowseQueryOptions");
    function ce(k) {
        const I = {
            country: t?.country,
            paywall: t?.product === void 0 ? void 0 : {
                productLine: t.product
            },
            platforms: t?.platform === void 0 ? void 0 : [
                t.platform
            ],
            ...n,
            ...k
        }, { paywall: D, country: V, platforms: G, teamId: Q } = I;
        if (D === void 0 || V === void 0 || G === void 0) {
            const ue = [
                "paywall",
                "country",
                "platforms"
            ].filter((Ce)=>I[Ce] === void 0);
            throw new Error(`checkout-session request is missing ${ue.join(", ")} \u2014 supply market or sessionDefaults on the client or pass the fields per call`);
        }
        if (G.length === 0) throw new Error("checkout-session platforms must be non-empty");
        return Q === void 0 ? {
            paywall: D,
            country: V,
            platforms: G
        } : {
            paywall: D,
            country: V,
            platforms: G,
            teamId: Q
        };
    }
    a(ce, "resolveCheckoutSessionRequest");
    function ve(k) {
        return {
            queryKey: lP(k),
            async queryFn () {
                const I = await e.createCheckoutSession(k);
                return m.add(I.token), I;
            },
            gcTime: Number.POSITIVE_INFINITY,
            staleTime: a((I)=>{
                const { data: D, dataUpdatedAt: V } = I.state;
                return D === void 0 || f.has(D.token) ? 0 : Math.max(0, D.expiresAt - L0 - V);
            }, "staleTime")
        };
    }
    a(ve, "getCheckoutSessionQueryOptions");
    function U(k) {
        return $p(l, k);
    }
    a(U, "observeQuery");
    function qe(k, I) {
        l.setQueryData(wm(k), (D)=>D === void 0 ? D : {
                paymentMethods: I(D.paymentMethods)
            });
    }
    a(qe, "writeRoster");
    function He(k, I) {
        return [
            {
                ...I,
                isDefault: !0
            },
            ...k.filter((D)=>D.paymentMethodId !== I.paymentMethodId).map((D)=>({
                    ...D,
                    isDefault: !1
                }))
        ];
    }
    a(He, "promoteToDefault");
    function We(k, I) {
        if (I.status !== "saved") return;
        const { paymentMethod: D } = I;
        qe(k, (V)=>{
            if (D.isDefault) return He(V, D);
            const G = V.findIndex((Q)=>Q.paymentMethodId === D.paymentMethodId);
            return G === -1 ? [
                ...V,
                D
            ] : V.with(G, D);
        });
    }
    a(We, "writeSetupOutcome");
    async function H(k, I) {
        let D;
        try {
            D = await k();
        } catch (V) {
            throw V instanceof Pe && l.invalidateQueries({
                queryKey: [
                    "payment-methods"
                ]
            }), V;
        }
        return I(D), l.invalidateQueries({
            queryKey: [
                "payment-methods"
            ]
        }), D;
    }
    a(H, "runPaymentMethodMutation");
    function le(k) {
        return new Error(`commerce client: the edge does not implement ${k}`);
    }
    a(le, "unsupportedEdgeMethod");
    const Ee = e.setDefaultPaymentMethod?.bind(e), Oe = e.deletePaymentMethod?.bind(e), Me = e.savePaymentMethod?.bind(e), ie = e.fixPaymentMethod?.bind(e), q = e.syncPaymentInfo?.bind(e), Z = e.reinstateSubscription?.bind(e), me = e.getStripePublishableKey?.bind(e), Ie = e.listInvoices?.bind(e), Ae = e.getBillingInfo?.bind(e), Ge = e.setBillingInfo?.bind(e), et = e.getPaymentMethodBillingAddress?.bind(e), je = e.setPaymentMethodBillingAddress?.bind(e);
    return {
        capabilities: e.capabilities,
        paymentMethodActions: {
            setDefault: Ee !== void 0,
            delete: Oe !== void 0,
            save: Me !== void 0,
            fix: ie !== void 0,
            sync: q !== void 0
        },
        servesBillingInfo: Ae !== void 0 && Ge !== void 0,
        servesInvoices: Ie !== void 0,
        servesPaymentMethodBillingAddress: et !== void 0 && je !== void 0,
        servesStripePublishableKey: me !== void 0,
        subscriptionActions: {
            reinstate: Z !== void 0
        },
        getAccountEmail () {
            return e.getAccountEmail?.() ?? Promise.resolve("");
        },
        getMigrationRefundAmount () {
            return Promise.resolve(null);
        },
        resolveBrowseRequest: j,
        browse (k) {
            return l.fetchQuery(oe(j(k)));
        },
        prefetchBrowse (k) {
            return l.prefetchQuery(oe(j(k)));
        },
        observeBrowse (k) {
            return U(oe(j(k)));
        },
        resolveCheckoutSessionRequest: ce,
        fetchCheckoutSession (k) {
            return l.fetchQuery(ve(ce(k)));
        },
        prefetchCheckoutSession (k) {
            return l.prefetchQuery(ve(ce(k)));
        },
        observeCheckoutSession (k) {
            const I = U({
                ...ve(ce(k)),
                refetchInterval (Q) {
                    if (Q.state.data === void 0) return !1;
                    const ue = Q.state.data.expiresAt - L0 - Date.now();
                    return ue > 0 ? ue : L0;
                }
            }), D = new Set;
            let V, G;
            return {
                ...I,
                subscribe (Q) {
                    const ue = I.subscribe(Q), Ce = a(()=>Q(), "onRejection");
                    v.add(Ce);
                    function Qe() {
                        ue(), v.delete(Ce), D.delete(Qe);
                    }
                    return a(Qe, "unsubscribe"), D.add(Qe), Qe;
                },
                getSnapshot () {
                    const Q = I.getSnapshot(), ue = Q.data !== void 0 && f.has(Q.data.token);
                    return (G === void 0 || Q !== V || G.isRejected !== ue) && (V = Q, G = {
                        ...Q,
                        isRejected: ue
                    }), G;
                },
                dispose () {
                    for (const Q of D)Q();
                    I.dispose();
                }
            };
        },
        rejectCheckoutSession: y,
        async invalidateCheckoutSession (k) {
            if (k?.rejectCached) {
                for (const [, I] of l.getQueriesData({
                    queryKey: [
                        "checkout-session"
                    ]
                }))I !== void 0 && y(I);
                await l.cancelQueries({
                    queryKey: [
                        "checkout-session"
                    ]
                });
            }
            return l.invalidateQueries({
                queryKey: [
                    "checkout-session"
                ]
            });
        },
        adoptCheckoutSession: g,
        ownsCheckoutSession (k) {
            return m.has(k.token);
        },
        observeCheckoutSessionAdoption (k) {
            return U({
                queryKey: [
                    "checkout-session-adoption",
                    k.token
                ],
                async queryFn () {
                    const I = await g({
                        sessionToken: k.token
                    });
                    return {
                        ...k,
                        ...I,
                        expiresAt: Math.min(k.expiresAt, I.expiresAt)
                    };
                },
                staleTime: Number.POSITIVE_INFINITY,
                gcTime: Number.POSITIVE_INFINITY,
                refetchOnWindowFocus: !1,
                refetchOnReconnect: !1,
                retryOnMount: !1
            });
        },
        observeSubscriptions (k) {
            const I = mP(k);
            return U({
                queryKey: I,
                queryFn: a(async ({ signal: D })=>{
                    const V = await e.getSubscriptions(k);
                    if (!D.aborted) {
                        const G = lo(I);
                        te(V, G), O($(V), G);
                    }
                    return $(V);
                }, "queryFn"),
                staleTime: i
            });
        },
        observeLegacySubscriptions () {
            if (e.getLegacySubscriptions !== void 0) return U({
                queryKey: [
                    "legacy-subscriptions"
                ],
                queryFn: a(async ()=>await e.getLegacySubscriptions?.() ?? [], "queryFn"),
                staleTime: i
            });
        },
        async cancelSubscription (k) {
            let I;
            try {
                I = await e.cancelSubscription(k);
            } catch (ue) {
                throw ue instanceof Pe && ee(k.subscriptionId, ue), ue;
            }
            if (I.kind === "store-managed") return I;
            const D = l.getQueriesData({
                queryKey: [
                    "subscriptions"
                ]
            }).flatMap(([, ue])=>ue ?? []).find((ue)=>ue.subscriptionId === k.subscriptionId), V = M.get(k.subscriptionId)?.change ?? D?.scheduledChange;
            M.delete(k.subscriptionId), d.delete(k.subscriptionId), p.delete(k.subscriptionId);
            const G = D?.supersededBySubscriptionId, Q = u.get(k.subscriptionId);
            return u.set(k.subscriptionId, {
                effectiveAt: I.effectiveAt,
                pendingReplacementId: Q?.pendingReplacementId ?? G,
                cancelledScheduledChange: Q?.cancelledScheduledChange ?? V
            }), W(), I;
        },
        async reinstateSubscription (k) {
            if (Z === void 0) throw le("reinstateSubscription");
            let I;
            try {
                I = await Z(k);
            } catch (V) {
                throw V instanceof Pe && ee(k.subscriptionId, V), V;
            }
            if (I.kind !== "reinstated") return I;
            M.delete(k.subscriptionId), d.delete(k.subscriptionId);
            const D = u.get(k.subscriptionId);
            return p.set(k.subscriptionId, {
                renewsAt: I.renewsAt,
                pendingReplacementId: D?.pendingReplacementId,
                cancelledScheduledChange: D?.cancelledScheduledChange,
                caughtUpQueryHashes: new Set
            }), u.delete(k.subscriptionId), W(), I;
        },
        async invalidateSubscriptions () {
            await Promise.all([
                l.invalidateQueries({
                    queryKey: [
                        "subscriptions"
                    ]
                }),
                l.invalidateQueries({
                    queryKey: [
                        "legacy-subscriptions"
                    ]
                })
            ]);
        },
        observePaymentMethods (k) {
            const I = wm(k), D = U({
                queryKey: I,
                queryFn: a(()=>e.listPaymentMethods(k), "queryFn"),
                staleTime: 0
            });
            return {
                ...D,
                dispose () {
                    D.dispose();
                    const V = l.getQueryCache().find({
                        queryKey: I
                    });
                    V !== void 0 && V.getObserversCount() === 0 && l.removeQueries({
                        queryKey: I,
                        exact: !0
                    });
                }
            };
        },
        invalidatePaymentMethods () {
            return l.invalidateQueries({
                queryKey: [
                    "payment-methods"
                ]
            });
        },
        async setDefaultPaymentMethod (k) {
            if (Ee === void 0) throw le("setDefaultPaymentMethod");
            await H(()=>Ee(k), ()=>{
                qe(k, (I)=>{
                    const D = I.find((V)=>V.paymentMethodId === k.paymentMethodId);
                    return D === void 0 ? I : He(I, D);
                });
            });
        },
        async deletePaymentMethod (k) {
            if (Oe === void 0) throw le("deletePaymentMethod");
            await H(()=>Oe(k), ()=>{
                qe(k, (I)=>I.filter((D)=>D.paymentMethodId !== k.paymentMethodId));
            });
        },
        savePaymentMethod (k) {
            if (Me === void 0) throw le("savePaymentMethod");
            return H(()=>Me(k), (I)=>We(k, I));
        },
        fixPaymentMethod (k) {
            if (ie === void 0) throw le("fixPaymentMethod");
            return H(()=>ie(k), (I)=>{
                We(k, I), I.status === "saved" && l.invalidateQueries({
                    queryKey: [
                        "subscriptions"
                    ]
                });
            });
        },
        async syncPaymentInfo (k) {
            if (q === void 0) throw le("syncPaymentInfo");
            await q(k);
        },
        observeStripePublishableKey () {
            if (me === void 0) throw le("getStripePublishableKey");
            return U({
                queryKey: [
                    "stripe-publishable-key"
                ],
                queryFn: me,
                staleTime: Number.POSITIVE_INFINITY
            });
        },
        observeInvoices (k = {}) {
            if (Ie === void 0) throw le("listInvoices");
            return U({
                queryKey: [
                    "invoices",
                    k.teamId ?? ""
                ],
                queryFn: a(()=>Ie(k), "queryFn"),
                staleTime: i
            });
        },
        observeBillingInfo (k) {
            if (Ae === void 0) throw le("getBillingInfo");
            return U({
                queryKey: P0(k),
                queryFn: a(()=>Ae(k), "queryFn"),
                staleTime: i
            });
        },
        async setBillingInfo (k) {
            if (Ge === void 0) throw le("setBillingInfo");
            await Ge(k);
            const I = P0(k);
            l.setQueryData(I, (D)=>D === void 0 ? D : {
                    ...k.billingInfo,
                    address: k.billingInfo.address ?? D.address
                }), l.invalidateQueries({
                queryKey: I
            });
        },
        observePaymentMethodBillingAddress (k) {
            if (et === void 0) throw le("getPaymentMethodBillingAddress");
            return U({
                queryKey: D0(k),
                queryFn: a(()=>et(k), "queryFn"),
                staleTime: i
            });
        },
        async setPaymentMethodBillingAddress (k) {
            if (je === void 0) throw le("setPaymentMethodBillingAddress");
            const I = await je(k), D = D0(k);
            await l.cancelQueries({
                queryKey: D
            }), l.setQueryData(D, (V)=>({
                    ...V,
                    ...I
                }));
        },
        createCheckoutFlow ({ selections: k, session: I, initialSession: D, preparedSession: V, retainPending: G, platform: Q, handleAction: ue, inAppPurchaseAcquireAttempts: Ce, collectBillingEmail: Qe, returnUrl: dt, resume: Kt, changeSku: tt }) {
            if (tt !== void 0) {
                const Ye = k[0]?.skuId;
                if (Ye === void 0) throw new Error("change-sku checkout needs a sku");
                const _ = {
                    ...t,
                    ...r
                }.product;
                if (_ === void 0) throw new Error("change-sku checkout needs a product line \u2014 supply market or browseDefaults");
                return w({
                    collectBillingEmail: Qe,
                    edge: e,
                    handleAction: ue,
                    inAppPurchaseAcquireAttempts: Ce,
                    path: xe({
                        edge: e,
                        subscriptionId: tt.subscriptionId,
                        skuId: Ye,
                        pricingId: tt.pricingId,
                        quantity: tt.quantity,
                        country: tt.country,
                        platform: tt.platform,
                        product: _
                    }),
                    platform: tt.platform,
                    resume: Kt,
                    returnUrl: dt,
                    selections: k,
                    taxInclusive: tt.taxInclusive
                }, G);
            }
            const he = ce(I), ot = Q ?? (he.platforms.length === 1 ? he.platforms[0] : void 0);
            if (ot === void 0) throw new Error("checkout is missing its committed platform \u2014 pass platform when the session pins more than one candidate");
            if (!he.platforms.includes(ot)) throw new Error(`checkout platform ${ot} is not among the session's candidate platforms`);
            return w({
                collectBillingEmail: Qe,
                edge: e,
                getSessionToken: (()=>{
                    let Ye = D;
                    return async ({ fresh: _ = !1 } = {})=>{
                        if (!_ && Ye !== void 0 && Ye.expiresAt > Date.now()) return Ye.token;
                        const X = ve(he);
                        return Ye = await l.fetchQuery(_ ? {
                            ...X,
                            staleTime: 0
                        } : X), Ye.token;
                    };
                })(),
                handleAction: ue,
                inAppPurchaseAcquireAttempts: Ce,
                platform: ot,
                preparedSession: V,
                resume: Kt,
                returnUrl: dt,
                selections: k,
                taxInclusive: V?.skuPricings.some((Ye)=>qN(Ye.pricing) && Ye.pricing.billingPlatform === ot && k.some((_)=>_.skuId === Ye.skuId && (_.interval === void 0 || _.interval === Ye.pricing.interval))),
                teamId: he.teamId
            }, G);
        },
        getPendingCheckout () {
            return x;
        },
        invalidateCatalog () {
            return l.invalidateQueries({
                queryKey: [
                    "browse"
                ]
            });
        },
        dehydrateCatalog () {
            return {
                state: FS(l, {
                    shouldDehydrateQuery: a((k)=>Op(k) && (k.queryKey[0] === "browse" || k.queryKey[0] === "checkout-session"), "shouldDehydrateQuery")
                })
            };
        },
        dispose () {
            for (const k of h)k.dispose();
            u.clear(), d.clear(), p.clear(), l.unmount(), l.clear();
        }
    };
}
a(dP, "createCommerceClient");
var pP = "PREPAID_ONLY_HOST";
function Sr(e) {
    return Promise.reject(new Pe(pP, `This host mounts only the prepaid-credit surface; ${e} is not available here.`, {
        retriable: !1
    }));
}
a(Sr, "unsupported");
function V0() {
    return {
        capabilities: {
            authed: !0
        },
        browse: a(()=>Sr("browsing the catalog"), "browse"),
        createCheckoutSession: a(()=>Sr("checkout"), "createCheckoutSession"),
        adoptCheckoutSession: a(()=>Sr("checkout"), "adoptCheckoutSession"),
        getCartForSession: a(()=>Sr("checkout"), "getCartForSession"),
        attachPaymentMethod: a(()=>Sr("attaching a payment method"), "attachPaymentMethod"),
        acquire: a(()=>Sr("purchasing a subscription"), "acquire"),
        getAcquisitionStatus: a(()=>Sr("purchasing a subscription"), "getAcquisitionStatus"),
        getEntitlements: a(()=>Sr("reading entitlements"), "getEntitlements"),
        getSubscriptions: a(()=>Sr("reading subscriptions"), "getSubscriptions"),
        cancelSubscription: a(()=>Sr("cancelling a subscription"), "cancelSubscription"),
        listPaymentMethods: a(()=>Sr("listing payment methods"), "listPaymentMethods")
    };
}
a(V0, "createPrepaidOnlyCommerceEdge");
function B0() {
    return dP({
        edge: V0()
    });
}
a(B0, "createPrepaidOnlyCommerceClient");
var fP = `${zV}
${Zz}`, tH = "anysphere-xai-commerce-prepaid", rH = "anysphere-xai-commerce-prepaid", nH = a(()=>{}, "NO_COMMERCE_NAVIGATION");
function ds({ prepaidClient: e, themeType: t, skin: r, locale: n = "en", onOpenUrl: o, className: i, children: s }) {
    const [c] = kF(B0);
    EF(()=>()=>c.dispose(), [
        c
    ]);
    const l = SF((m)=>{
        const u = hP(m.target);
        u === null || u.href === "" || (m.preventDefault(), !(m.type === "auxclick" && m.button !== 1) && o(u.href));
    }, [
        o
    ]);
    return CF(TF, {
        children: [
            Zs("style", {
                href: tH,
                precedence: rH,
                children: fP
            }),
            Zs("div", {
                className: i === void 0 ? "cursor-commerce" : `cursor-commerce ${i}`,
                "data-skin": r,
                "data-theme": t,
                onAuxClickCapture: l,
                onClickCapture: l,
                children: Zs(P2, {
                    client: c,
                    locale: n,
                    navigate: nH,
                    children: Zs(_C, {
                        client: e,
                        children: s
                    })
                })
            })
        ]
    });
}
a(ds, "CursorPrepaidSurface");
function hP(e) {
    return e === null || typeof e.closest != "function" ? null : e.closest("a[href]");
}
a(hP, "anchorOf");
function xP({ prepaidClient: e, open: t, onOpenChange: r, themeType: n, skin: o, locale: i, onOpenUrl: s }) {
    return Gy(ds, {
        locale: i,
        onOpenUrl: s,
        prepaidClient: e,
        skin: o,
        themeType: n,
        children: Gy(N0, {
            onOpenChange: r,
            open: t
        })
    });
}
a(xP, "CursorAutoTopUpModal"), A2();
var gP = [
    "Buy credits",
    "Auto top-up when balance is low",
    "Set Up",
    "Purchase Credits",
    "Automatic top-ups",
    "Top up amount",
    "Top up when balance is below",
    "Turn Off",
    "Save",
    "Cancel",
    "Done",
    "Extra usage credits",
    "Buy Credits",
    "Set Auto Top-Up",
    "Monthly usage",
    "Monthly spend limit",
    "Edit monthly spend limit",
    "Monthly spend limit reached. Increase your limit to continue working.",
    "Set a monthly limit for usage credits"
], oH = {
    "Extra usage credits": "Additional usage credits",
    "Monthly usage": "Monthly additional usage",
    "Monthly spend limit": "Monthly additional usage limit",
    "Buy Credits": "Buy credits",
    "Set Auto Top-Up": "Set auto top-up",
    "Edit monthly spend limit": "Edit monthly additional usage limit",
    "Monthly spend limit reached. Increase your limit to continue working.": "Monthly additional usage limit reached. Increase your limit to continue working.",
    "Set a monthly limit for usage credits": "A monthly spend limit for your additional usage."
}, aH = "translation";
function vP(e) {
    return gP.includes(e);
}
a(vP, "isCopyKey");
async function bP(e, t) {
    const { instance: r, ready: n } = op(e);
    if (await n, !r.isInitialized) return;
    const o = {};
    for (const [c, l] of Object.entries(t))vP(c) && typeof l == "string" && l.length > 0 && (o[c] = l);
    if (Object.keys(o).length === 0) return;
    const i = r.resolvedLanguage ?? r.language;
    r.addResourceBundle(i, aH, o, !0, !0), r.services.i18nFormat?.clearCache?.();
}
a(bP, "applyCursorCommerceCopy"), Lt(), Lt(), Lt(), fr();
var iH = 1e6;
function yP(e, t, r) {
    const n = {
        currencyCode: r,
        unitMicros: iH
    };
    if (e.trim() === "") return t === null ? {
        kind: "unchanged"
    } : {
        kind: "invalid",
        issue: {
            code: "AMOUNT_FORMAT"
        }
    };
    const o = rr(e, r);
    return o === null ? {
        kind: "invalid",
        issue: {
            code: "AMOUNT_FORMAT"
        }
    } : o.unitMicros > 0 && o.unitMicros < n.unitMicros ? {
        kind: "invalid",
        issue: {
            code: "BELOW_MINIMUM",
            limit: n
        }
    } : t !== null && Ln(o, t) ? {
        kind: "unchanged"
    } : {
        kind: "ready",
        limit: o
    };
}
a(yP, "planMonthlySpendLimit");
function wP({ wallet: e, onDone: t, onSavingChange: r }) {
    const { client: n } = gl(), { locale: o } = xt(), [i] = si(()=>e.monthlySpendLimit ?? null), [s, c] = si(()=>i === null ? "" : hl(vo(i), o)), [l, m] = si(null), [u, d] = si(null), [p, h] = si(null), f = i?.currencyCode ?? e.balance.currencyCode, v = e.availability.kind === "unavailable", x = fl(s, o), g = yP(x, i, f), y = IF(a(function() {
        m((T)=>T?.code === "AMOUNT_FORMAT" ? T : {
                code: "AMOUNT_FORMAT"
            });
    }, "refuseInput"), []);
    async function w(b, T) {
        h(null), d(b), r?.(!0);
        try {
            await n.setMonthlySpendLimit(T);
        } catch (R) {
            h({
                code: R instanceof Pe ? R.code : void 0
            }), d(null), r?.(!1);
            return;
        }
        d(null), r?.(!1), t();
    }
    return a(w, "write"), {
        state: {
            currencyCode: f,
            failure: p,
            issue: l,
            saved: i,
            saving: u,
            value: s,
            zeroLimit: rr(x, f)?.unitMicros === 0
        },
        actions: {
            refuseInput: y,
            async save () {
                if (!(u !== null || v)) {
                    if (g.kind === "invalid") {
                        m(g.issue);
                        return;
                    }
                    if (g.kind === "unchanged") {
                        t();
                        return;
                    }
                    await w("limit", g.limit);
                }
            },
            setValue (b) {
                c(b), m(null);
            },
            async removeLimit () {
                u !== null || v || i === null || (m(null), await w("off", null));
            }
        }
    };
}
a(wP, "useMonthlySpendLimitForm"), hr();
function U0({ open: e, onOpenChange: t }) {
    const [r, n] = NF(!1), o = RF(!1);
    function i(s) {
        !s && o.current || t(s);
    }
    return a(i, "handleOpenChange"), ht(Ue, {
        open: e,
        onOpenChange: i,
        size: "md",
        mobileSize: "md",
        portal: !1,
        disablePointerDismissal: r,
        children: ht(Ue.Content, {
            className: "x-commerce x-commerce-modal-in text-body gap-4",
            backdropClassName: "x-commerce x-commerce-fade-in",
            children: e ? ht(SP, {
                onClose: a(()=>{
                    t(!1);
                }, "onClose"),
                onSavingChange: a((s)=>{
                    o.current = s, n(s);
                }, "onSavingChange")
            }) : null
        })
    });
}
a(U0, "MonthlySpendLimitModal");
function SP({ onClose: e, onSavingChange: t }) {
    const { status: r, wallet: n, refresh: o } = ya(), { t: i } = Be();
    return n !== void 0 ? ht(EP, {
        wallet: n,
        onClose: e,
        onSavingChange: t
    }) : qo(PF, {
        children: [
            ht(j0, {
                hideClose: !1
            }),
            ht(Ue.Body, {
                children: r === "error" ? ht(Lr, {
                    tone: "danger",
                    role: "alert",
                    children: qo("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                            ht(it, {
                                size: "body",
                                children: i("Could not load the credit balance")
                            }),
                            ht(Le, {
                                size: "sm",
                                variant: "secondary",
                                onClick: a(()=>{
                                    o();
                                }, "onClick"),
                                children: i("Try again")
                            })
                        ]
                    })
                }) : ht($t, {
                    className: "h-10 w-full",
                    "aria-busy": !0
                })
            })
        ]
    });
}
a(SP, "MonthlySpendLimitBody");
function j0({ hideClose: e }) {
    const { t } = Be();
    return ht(Ue.Header, {
        hideClose: e,
        children: ht(Ue.Title, {
            weight: "regular",
            children: t("Monthly spend limit")
        })
    });
}
a(j0, "MonthlySpendLimitHeader");
function EP({ wallet: e, onClose: t, onSavingChange: r }) {
    const { state: n, actions: o } = wP({
        wallet: e,
        onDone: t,
        onSavingChange: r
    }), { t: i } = Be(), s = n.saving !== null, c = e.availability.kind === "unavailable";
    return qo("form", {
        className: "x-commerce contents",
        noValidate: !0,
        onSubmit: a((l)=>{
            l.preventDefault(), o.save();
        }, "onSubmit"),
        children: [
            ht(j0, {
                hideClose: s
            }),
            qo(Ue.Body, {
                className: "flex flex-col gap-4",
                children: [
                    n.failure === null ? null : ht(Lr, {
                        tone: "danger",
                        role: "alert",
                        children: n.failure.code === "PERMISSION_DENIED" ? i("Only a billing admin can manage credits for this account") : i("The request could not be completed")
                    }),
                    ht(kP, {
                        state: n,
                        actions: o
                    })
                ]
            }),
            qo(Ue.Footer, {
                className: "flex justify-end pt-2",
                children: [
                    n.saved === null ? ht(Le, {
                        variant: "secondary",
                        disabled: s,
                        onClick: t,
                        children: i("Cancel")
                    }) : ht(Le, {
                        variant: "secondary",
                        disabled: s || c,
                        loading: n.saving === "off",
                        onClick: a(()=>{
                            o.removeLimit();
                        }, "onClick"),
                        children: i("Remove limit")
                    }),
                    ht(Le, {
                        render: ht("button", {
                            type: "submit"
                        }),
                        disabled: s || c,
                        loading: n.saving === "limit",
                        children: i("Save")
                    })
                ]
            })
        ]
    });
}
a(EP, "MonthlySpendLimitForm");
function kP({ state: e, actions: t }) {
    const { t: r } = Be(), { locale: n } = xt(), o = AF(), i = `${o}-issue`, s = `${o}-zero`, c = e.issue === null ? e.zeroLimit ? s : void 0 : i, { ref: l, onChange: m } = mh({
        value: e.value,
        onValueChange: t.setValue,
        onRefuse: t.refuseInput
    }), { symbol: u, side: d } = xl(n, e.currencyCode), p = ht("span", {
        "aria-hidden": !0,
        children: u
    });
    return qo("div", {
        className: "flex flex-col gap-2",
        children: [
            ht(it, {
                as: "label",
                htmlFor: o,
                size: "subtext1",
                children: r("Set a monthly limit for usage credits")
            }),
            ht(C0, {
                ref: l,
                id: o,
                name: "monthlySpendLimit",
                value: e.value,
                inputMode: "decimal",
                autoComplete: "off",
                placeholder: "0",
                disabled: e.saving !== null,
                error: e.issue !== null,
                "aria-describedby": c,
                prefix: d === "start" ? p : void 0,
                suffix: d === "end" ? p : void 0,
                onChange: m
            }),
            e.issue === null ? null : ht("p", {
                id: i,
                className: "text-subtext3 text-destructive",
                role: "alert",
                children: TP(e.issue, r, n, e.currencyCode)
            }),
            e.issue === null && e.zeroLimit ? ht("p", {
                id: s,
                className: "text-subtext3 text-destructive",
                role: "status",
                children: r("Setting the limit to {zeroAmount} will prevent additional spending", {
                    zeroAmount: Yt(so(0, e.currencyCode), n, {
                        trailingZeroDisplay: "stripIfInteger"
                    })
                })
            }) : null
        ]
    });
}
a(kP, "MonthlySpendLimitField");
function TP(e, t, r, n) {
    switch(e.code){
        case "AMOUNT_FORMAT":
            return t(n === "USD" ? "Enter a dollar amount" : "Enter a valid amount");
        case "BELOW_MINIMUM":
            return t("Must be at least {minimumAmount}", {
                minimumAmount: Yt(e.limit, r, {
                    trailingZeroDisplay: "stripIfInteger"
                })
            });
        default:
            return e;
    }
}
a(TP, "monthlySpendLimitIssueMessage"), Lt(), Lt(), hr();
function CP(e) {
    return $y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        "data-icon": "icon-chevron-right-sm",
        viewBox: "0 0 24 24",
        display: "flex",
        role: "img",
        width: "1em",
        height: "1em",
        ...e,
        children: $y("path", {
            d: "M15.91 12 10 17.91 8.59 16.5l4.5-4.5-4.5-4.5L10 6.09z"
        })
    });
}
a(CP, "IconChevronRightSm");
function IP(e) {
    return Ky("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        "data-icon": "icon-refresh",
        viewBox: "0 0 24 24",
        display: "flex",
        role: "img",
        width: "1em",
        height: "1em",
        ...e,
        children: Ky("path", {
            d: "M21.45 13A9.5 9.5 0 0 1 5 18.42V21H3v-5.96L2.99 15H9v2H6.41a7.5 7.5 0 0 0 13.02-4zM12 2.5a9.5 9.5 0 0 1 7 3.08V3h2v5.96l.01.04H15V7h2.59a7.5 7.5 0 0 0-13.02 4H2.55A9.5 9.5 0 0 1 12 2.5"
        })
    });
}
a(IP, "IconRefresh");
var sH = DF(null);
function AP({ animated: e, bleed: t = mH, className: r, digits: n, duration: o = lH, format: i, locales: s, ref: c, render: l, trend: m, value: u, ...d }) {
    const p = FF(sH), h = e ?? p?.animated ?? !0, [f, v] = zr(u), [x, g] = zr(0);
    let y = m ?? p?.trend ?? x;
    if (u !== f) {
        const C = u < f ? -1 : 1;
        y = m ?? p?.trend ?? C, v(u), g(C);
    }
    const w = PP(s, i), { symbols: b, text: T } = VF(()=>{
        const C = w.formatToParts(u);
        return {
            symbols: RP(C),
            text: C.map((P)=>P.value).join("")
        };
    }, [
        w,
        u
    ]), [R] = zr(u), [E] = zr(()=>new Set(b.map((C)=>C.key))), S = h && u !== R, A = a((C)=>S && !E.has(C), "isEntering");
    return bl({
        defaultTagName: "span",
        ref: c,
        render: l,
        props: {
            ...d,
            className: _e("inline-flex", r),
            children: $u(OF, {
                children: [
                    fn("span", {
                        className: "sr-only",
                        children: T
                    }),
                    $u("span", {
                        "aria-hidden": !0,
                        dir: "ltr",
                        className: "flex select-none",
                        children: [
                            fn("span", {
                                className: "invisible w-0",
                                children: "0"
                            }),
                            b.map((C)=>C.kind === "digit" ? fn(cH, {
                                    animated: h,
                                    bleed: t,
                                    digit: C.digit,
                                    duration: o,
                                    entering: A(C.key),
                                    max: n?.[C.place]?.max ?? 9,
                                    trend: y
                                }, C.key) : fn("span", {
                                    className: _e("whitespace-pre", A(C.key) && "animate-fade-in motion-reduce:animate-none"),
                                    children: C.text
                                }, C.key))
                        ]
                    })
                ]
            })
        }
    });
}
a(AP, "NumberFlow");
var cH = LF(a(function(t) {
    const r = t.entering && t.animated, [n, o] = zr(r), [i, s] = zr(r ? 0 : t.digit), [c, l] = zr(t.digit), [m, u] = zr(()=>r ? 1 : 0), [d, p] = zr(r ? 0 : t.digit), [h, f] = zr(t.digit);
    t.digit !== h && (f(t.digit), t.animated ? (s(n ? c : d), l(t.digit), u((b)=>b + 1), o(!0)) : (p(t.digit), l(t.digit), o(!1))), !t.animated && n && (p(t.digit), l(t.digit), o(!1));
    const v = n && t.animated, { fade: x, y: g } = DP({
        duration: t.duration,
        enabled: v,
        from: i,
        max: t.max,
        onComplete () {
            p(t.digit), o(!1);
        },
        rollId: m,
        to: c,
        trend: t.trend
    }), y = t.entering ? "animate-fade-in motion-reduce:animate-none" : void 0;
    if (!v) return fn("span", {
        className: y,
        children: t.digit
    });
    const w = {
        "--x-number-flow-fade": x,
        "--x-number-flow-bleed": t.bleed
    };
    return $u("span", {
        className: _e("relative inline-block h-[1lh]", y),
        children: [
            fn("span", {
                className: "invisible",
                children: t.digit
            }),
            fn(cs.span, {
                className: _e("absolute inset-0 -my-(--x-number-flow-bleed) overflow-clip py-(--x-number-flow-bleed) text-center", "[--x-number-flow-fade-out:calc((1_-_var(--x-number-flow-fade))_*_var(--x-number-flow-bleed))]", "mask-[linear-gradient(to_bottom,transparent_var(--x-number-flow-fade-out),black_var(--x-number-flow-bleed),black_calc(100%_-_var(--x-number-flow-bleed)),transparent_calc(100%_-_var(--x-number-flow-fade-out)))]"),
                style: w,
                children: fn(cs.span, {
                    className: "block",
                    style: {
                        y: g
                    },
                    children: MP(t.max)
                })
            })
        ]
    });
}, "NumberFlowDigit"));
function RP(e) {
    let t = 0, r = 0;
    for (const s of e)s.type === "integer" ? t += s.value.length : s.type === "group" && (r += 1);
    const n = [];
    let o = 0;
    const i = new Map;
    for (const s of e)if (s.type === "integer" || s.type === "fraction") for (const c of s.value){
        const l = s.type === "integer", m = l ? t -= 1 : o -= 1, u = `${l ? "int" : "frac"}:${m}`, d = c.charCodeAt(0) - 48;
        d >= 0 && d <= 9 ? n.push({
            kind: "digit",
            key: u,
            digit: d,
            place: m
        }) : n.push({
            kind: "symbol",
            key: `${u}:${c}`,
            text: c
        });
    }
    else if (s.type === "group") r -= 1, n.push({
        kind: "symbol",
        key: `group:${r}`,
        text: s.value
    });
    else {
        const c = i.get(s.type) ?? 0;
        i.set(s.type, c + 1), n.push({
            kind: "symbol",
            key: `${s.type}:${c}:${s.value}`,
            text: s.value
        });
    }
    return n;
}
a(RP, "getFlowSymbols");
var NP = new Map;
function PP(e, t) {
    const r = JSON.stringify([
        e,
        t
    ]);
    let n = NP.get(r);
    return n === void 0 && (n = new Intl.NumberFormat(e, t), NP.set(r, n)), n;
}
a(PP, "getFormatter");
function Sm(e) {
    return (e + 1) * 2;
}
a(Sm, "getStripCellCount");
var _P = new Map;
function MP(e) {
    let t = _P.get(e);
    return t === void 0 && (t = Array.from({
        length: Sm(e)
    }, (r, n)=>fn("span", {
            className: "block h-[1lh]",
            children: n % (e + 1)
        }, n)), _P.set(e, t)), t;
}
a(MP, "getStripCells");
var lH = 350, mH = "0.45em";
function OP(e) {
    return {
        type: "spring",
        visualDuration: e / 1e3,
        bounce: .18
    };
}
a(OP, "getRollTransition");
function Io(e, t) {
    return `${-e * 100 / Sm(t)}%`;
}
a(Io, "getStripOffset");
function DP({ duration: e, enabled: t, from: r, max: n, onComplete: o, rollId: i, to: s, trend: c }) {
    const l = u0(), m = hm(Io(r, n)), u = hm(0), d = Yy(o), p = Yy(c);
    return Wy(()=>{
        d.current = o, p.current = c;
    }, [
        o,
        c
    ]), Wy(()=>{
        if (!t || i === 0) return;
        if (l || r === s) {
            m.set(Io(s, n)), u.set(0), d.current();
            return;
        }
        const f = n + 1, v = Sm(n);
        let x = -Number.parseFloat(m.get()) * v / 100;
        Number.isFinite(x) || (x = r, m.set(Io(r, n)));
        let g = p.current >= 0 ? s + f * Math.ceil((x - s) / f) : s + f * Math.floor((x - s) / f);
        if (g >= v || g < 0) {
            const b = g < 0 ? f : -f;
            x += b, g += b, m.set(Io(x, n));
        }
        const y = pN(m, Io(g, n), {
            ...OP(e),
            onComplete () {
                m.set(Io(s, n)), d.current();
            }
        }), w = pN(u, [
            null,
            1,
            1,
            0
        ], {
            duration: e / 1e3,
            ease: "easeOut",
            times: [
                0,
                .12,
                .68,
                1
            ]
        });
        return ()=>{
            y.stop(), w.stop();
        };
    }, [
        e,
        t,
        u,
        r,
        n,
        l,
        i,
        s,
        m
    ]), {
        fade: l0(u, String),
        y: m
    };
}
a(DP, "useDigitRoll");
function LP({ onDone: e, onSubmittingChange: t, onViewChange: r, returnUrl: n, renderEmbeddedCheckout: o }) {
    const i = qs(br), [s, c] = Qs("buy"), [l, m] = Qs(null), u = Gu(null), d = Gu(null);
    function p(h) {
        r?.(h === "buy" ? "add" : "auto-top-up"), i.swapStep(()=>{
            c(h);
        }, ()=>h === "auto-top-up" ? d.current : u.current);
    }
    return a(p, "changeStep"), l !== null ? Ne(i.Surface, {
        children: Ne(bm, {
            settled: l,
            onDone: e,
            renderEmbeddedCheckout: o
        })
    }) : Ne(i.Surface, {
        children: Ne(hh, {
            view: "add",
            returnUrl: n,
            onSubmittingChange: t,
            children: s === "buy" ? Ne(FP, {
                setUpRef: u,
                onSetUpAutoTopUp: a(()=>{
                    p("auto-top-up");
                }, "onSetUpAutoTopUp"),
                onDone: e,
                renderEmbeddedCheckout: o
            }) : Ne(I0, {
                titleRef: d,
                onBack: a(()=>{
                    p("buy");
                }, "onBack"),
                onClose: e,
                onToppedUp: m,
                onSubmittingChange: t
            })
        })
    });
}
a(LP, "TopUpPanel");
function FP({ setUpRef: e, onSetUpAutoTopUp: t, onDone: r, renderEmbeddedCheckout: n }) {
    const o = qs(br), { state: i } = nr(), { t: s } = Be(), { settled: c } = i;
    return c !== null && c.kind !== "rule-saved" ? Ne(bm, {
        settled: c,
        onDone: r,
        renderEmbeddedCheckout: n
    }) : i.wallet.status !== "ready" ? dr(MF, {
        children: [
            Ne(z0, {}),
            Ne(o.Body, {
                children: i.wallet.status === "error" ? Ne(Lr, {
                    tone: "danger",
                    role: "alert",
                    children: dr("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                            Ne(it, {
                                size: "body",
                                children: s("Could not load the credit balance")
                            }),
                            Ne(Le, {
                                size: "sm",
                                variant: "secondary",
                                onClick: i.wallet.retry,
                                children: s("Try again")
                            })
                        ]
                    })
                }) : dr("div", {
                    className: "flex flex-col gap-3",
                    "aria-busy": !0,
                    children: [
                        Ne($t, {
                            className: "h-16 w-full rounded-lg"
                        }),
                        Ne($t, {
                            className: "h-10 w-full rounded-lg"
                        }),
                        Ne($t, {
                            className: "h-14 w-full rounded-lg"
                        })
                    ]
                })
            })
        ]
    }) : Ne(VP, {
        wallet: i.wallet.wallet,
        setUpRef: e,
        onSetUpAutoTopUp: t
    });
}
a(FP, "BuyCreditsStep");
function z0({ hideClose: e }) {
    const t = qs(br), { t: r } = Be();
    return dr(t.Header, {
        hideClose: e,
        children: [
            Ne(t.Title, {
                children: r("Buy credits")
            }),
            Ne(t.Description, {
                className: "mt-1",
                children: r("Top up your balance to avoid interruptions.")
            })
        ]
    });
}
a(z0, "BuyCreditsHeader");
function VP({ wallet: e, setUpRef: t, onSetUpAutoTopUp: r }) {
    const n = qs(br), { state: o } = nr(), { t: i } = Be(), [s, c] = Qs(!1), l = e.availability.kind === "unavailable", m = e.availability.kind === "available" && e.availability.topUpMethod === "saved-payment-method";
    return dr(bh, {
        className: "x-commerce contents",
        children: [
            Ne(z0, {
                hideClose: o.submitting
            }),
            dr(n.Body, {
                className: "flex flex-col gap-4",
                children: [
                    l ? Ne(Lr, {
                        tone: "warning",
                        children: e.availability.kind === "unavailable" && e.availability.reason === "not-permitted" ? i("Only a billing admin can manage credits for this account") : i("Prepaid credits are not available for this account yet")
                    }) : null,
                    o.failure === null ? null : Ne(Lr, {
                        tone: "danger",
                        role: "alert",
                        children: yh(o.failure, i)
                    }),
                    dr("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            Ne(UP, {
                                roll: s,
                                onAmountEdited: a(()=>{
                                    c(!1);
                                }, "onAmountEdited")
                            }),
                            Ne("div", {
                                className: "flex gap-2",
                                children: Ne(WC, {
                                    children: a(({ amount: u, label: d, selected: p, disabled: h, select: f })=>Ne(Le, {
                                            variant: "custom",
                                            render: Ne("button", {
                                                type: "button",
                                                disabled: h
                                            }),
                                            className: _e("flex-1 border border-solid duration-200 ease-out motion-reduce:transition-none", p ? "border-transparent bg-btn-secondary hover:bg-btn-secondary-hover active:bg-btn-secondary-pressed" : "border-normal bg-transparent hover:bg-btn-ghost-hover active:bg-btn-ghost-pressed"),
                                            "aria-pressed": p,
                                            disabled: h,
                                            onClick: a(()=>{
                                                c(!0), f();
                                            }, "onClick"),
                                            children: d
                                        }, u.unitMicros), "children")
                                })
                            })
                        ]
                    }),
                    e.autoTopUp?.enabled === !0 ? null : Ne(BP, {
                        buttonRef: t,
                        disabled: o.submitting || l,
                        onOpen: r
                    }),
                    !l && !m ? Ne(it, {
                        size: "subtext1",
                        color: "tertiary",
                        children: i("No card on file. Checkout collects a payment method first.")
                    }) : null
                ]
            }),
            Ne(n.StepFooter, {
                className: "flex justify-end pt-2",
                children: Ne(vh, {
                    checkoutLabel: i("Purchase Credits"),
                    saveLabel: i("Purchase Credits"),
                    render: a(({ children: u, disabled: d })=>Ne(Le, {
                            render: Ne("button", {
                                type: "submit"
                            }),
                            className: "x-commerce-credits-primary",
                            disabled: d,
                            loading: o.submitting,
                            children: u
                        }), "render")
                })
            })
        ]
    });
}
a(VP, "CheckoutView");
function BP({ buttonRef: e, disabled: t, onOpen: r }) {
    const { t: n } = Be(), o = _F();
    return dr("div", {
        className: "bg-quaternary flex items-center justify-between gap-3 rounded-[12px] p-3",
        children: [
            dr("div", {
                className: "flex min-w-0 items-center gap-2",
                children: [
                    Ne(IP, {
                        "aria-hidden": !0,
                        className: "text-secondary size-4 shrink-0"
                    }),
                    Ne(it, {
                        id: o,
                        children: n("Auto top-up when balance is low")
                    })
                ]
            }),
            Ne(Le, {
                ref: e,
                variant: "secondary",
                size: "sm",
                trailing: Ne(CP, {
                    "aria-hidden": !0,
                    className: "-ms-1 -me-2 rtl:-scale-x-100"
                }),
                "aria-describedby": o,
                disabled: t,
                onClick: r,
                children: n("Set Up")
            })
        ]
    });
}
a(BP, "AutoTopUpRow");
function UP({ roll: e, onAmountEdited: t }) {
    const { state: r, meta: n } = nr(), { locale: o } = xt(), { t: i } = Be(), { symbol: s, side: c } = xl(o, n.currencyCode), l = rr(r.canonicalValues.amount, n.currencyCode);
    return dr("div", {
        className: "flex flex-col gap-1",
        children: [
            Ne(xh, {
                field: "amount",
                render: a((m)=>Ne(jP, {
                        ...m,
                        symbol: s,
                        side: c,
                        "aria-label": i("Amount"),
                        locale: o,
                        units: l === null ? 0 : l.unitMicros / 1e6,
                        fractionDigits: sa(n.currencyCode),
                        roll: e,
                        onAmountEdited: t
                    }), "render")
            }),
            Ne(gh, {
                field: "amount",
                className: "text-subtext2 text-destructive"
            })
        ]
    });
}
a(UP, "AmountField");
function jP({ symbol: e, side: t, locale: r, units: n, fractionDigits: o, roll: i, onAmountEdited: s, ref: c, ...l }) {
    const m = Gu(null), [u, d] = Qs(!1), p = l["aria-invalid"] === !0, h = i && !u && l.value.trim() !== "";
    function f(v) {
        const x = m.current;
        if (x === null || v.target === x || v.button !== 0) return;
        v.preventDefault();
        const { left: g, right: y } = x.getBoundingClientRect(), w = v.clientX < g ? 0 : v.clientX > y ? x.value.length : null;
        x.focus(), w !== null && x.setSelectionRange(w, w);
    }
    return a(f, "handleFramePointerDown"), dr("div", {
        className: _e("border-normal flex cursor-text items-center justify-center gap-0.5 rounded-[12px] border px-4 py-4", "hover:border-active focus-within:border-active", p && "border-destructive focus-within:border-destructive", l.disabled && "pointer-events-none opacity-50"),
        onPointerDown: f,
        children: [
            t === "start" ? Ne(H0, {
                children: e
            }) : null,
            dr("span", {
                className: "relative inline-flex items-center justify-center",
                children: [
                    Ne(AP, {
                        "aria-hidden": !0,
                        animated: h,
                        bleed: "11px",
                        className: _e("text-title1 text-primary font-normal", !h && "invisible absolute"),
                        format: {
                            maximumFractionDigits: o,
                            trailingZeroDisplay: "stripIfInteger"
                        },
                        locales: r,
                        value: n
                    }),
                    Ne("input", {
                        ...l,
                        ref: a((v)=>(m.current = v, c(v)), "ref"),
                        placeholder: "0",
                        size: Math.max(1, l.value.length),
                        onFocus: a(()=>{
                            d(!0);
                        }, "onFocus"),
                        onBlur: a(()=>{
                            d(!1);
                        }, "onBlur"),
                        onChange: a((v)=>{
                            s(), l.onChange(v);
                        }, "onChange"),
                        className: h ? "absolute inset-0 bg-transparent p-0 text-transparent outline-hidden" : "text-title1 placeholder:text-tertiary [field-sizing:content] h-10 w-auto min-w-[1ch] border-0 bg-transparent p-0 text-start font-normal outline-hidden"
                    })
                ]
            }),
            t === "end" ? Ne(H0, {
                children: e
            }) : null
        ]
    });
}
a(jP, "CurrencyAmountInput");
function H0({ children: e }) {
    return Ne("span", {
        "aria-hidden": !0,
        className: "text-title1 text-primary font-normal",
        children: e
    });
}
a(H0, "AmountSymbol");
function G0({ open: e, onOpenChange: t, returnUrl: r, renderEmbeddedCheckout: n }) {
    const [o, i] = UF(!1), s = Ku(!1), { tracker: c } = xt(), l = Ku("add"), m = Ku(!1);
    BF(()=>{
        e && (l.current = "add", m.current = !1);
    }, [
        e
    ]);
    function u() {
        c.track({
            name: "top_up_dismissed",
            view: l.current,
            submitted: m.current
        }), t(!1);
    }
    a(u, "close");
    function d(h) {
        if (h) {
            t(!0);
            return;
        }
        s.current || u();
    }
    a(d, "handleOpenChange");
    function p(h) {
        s.current = h, i(h), h && (m.current = !0);
    }
    return a(p, "handleSubmittingChange"), Js(Ue, {
        open: e,
        onOpenChange: d,
        size: "md",
        mobileSize: "md",
        portal: !1,
        disablePointerDismissal: o,
        children: Js(Ue.Content, {
            className: "x-commerce x-commerce-modal-in x-commerce-credits-surface text-body gap-4",
            backdropClassName: "x-commerce x-commerce-fade-in",
            children: e ? Js(br, {
                value: ah,
                children: Js(LP, {
                    returnUrl: r,
                    renderEmbeddedCheckout: n,
                    onDone: u,
                    onSubmittingChange: p,
                    onViewChange: a((h)=>{
                        l.current = h;
                    }, "onViewChange")
                })
            }) : null
        })
    });
}
a(G0, "TopUpModal"), hr();
function zP(e) {
    return GF("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        "data-icon": "icon-warning",
        viewBox: "0 0 24 24",
        display: "flex",
        role: "img",
        width: "1em",
        height: "1em",
        ...e,
        children: [
            Zy("path", {
                d: "M12 15.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4m0-6.45c.8 0 1.4.7 1.29 1.48L12.75 14h-1.5l-.54-3.77A1.3 1.3 0 0 1 12 8.75"
            }),
            Zy("path", {
                fillRule: "evenodd",
                d: "M9.4 3.5a3 3 0 0 1 5.2 0L22.4 17a3 3 0 0 1-2.6 4.5H4.2A3 3 0 0 1 1.6 17zm3.47 1a1 1 0 0 0-1.74 0L3.34 18a1 1 0 0 0 .87 1.5h15.58a1 1 0 0 0 .87-1.5z",
                clipRule: "evenodd"
            })
        ]
    });
}
a(zP, "IconWarning");
var uH = $F(null), dH = hn("rounded-xs x-link focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-70", {
    variants: {
        underline: {
            true: "hover:underline",
            false: "",
            always: "underline"
        }
    },
    defaultVariants: {
        underline: !0
    }
});
function HP({ className: e, color: t = "brand", render: r, size: n = "inherit", underline: o, weight: i = "inherit", ref: s, ...c }) {
    const l = KF(uH);
    return bl({
        defaultTagName: "a",
        props: {
            className: _e(dH({
                underline: o
            }), pC({
                color: t,
                size: n,
                weight: i
            }), e),
            ...c
        },
        ref: s,
        render: r ?? l ?? void 0
    });
}
a(HP, "Link");
function GP(e) {
    return e !== null && e.enabled ? e : null;
}
a(GP, "activeRule");
function $0({ balance: e, monthlyUsage: t, monthlySpendLimit: r }) {
    return t !== void 0 && r !== void 0 && r !== null && e.unitMicros <= 0 && t.currencyCode === r.currencyCode && t.unitMicros >= r.unitMicros;
}
a($0, "spendLimitReached");
function $P({ className: e, returnUrl: t, renderEmbeddedCheckout: r }) {
    const { status: n, wallet: o, refresh: i } = ya(), [s, c] = HF(null), { t: l } = Be(), m = KP(s), { tracker: u } = xt();
    let d;
    o !== void 0 ? d = o.availability.kind === "unavailable" ? "unavailable" : "ready" : n === "error" && (d = "failed");
    const p = o === void 0 ? void 0 : o.autoTopUp?.enabled === !0, h = ec(new Set);
    Xy(()=>{
        if (d === void 0 || h.current.has(d)) return;
        h.current.add(d);
        const v = {
            name: "credits_view",
            state: d
        };
        p !== void 0 && (v.autoTopUpEnabled = p), u.track(v);
    }, [
        p,
        u,
        d
    ]);
    function f(v) {
        v || c(null);
    }
    return a(f, "close"), Qt("section", {
        className: "x-commerce",
        "aria-label": l("Credits"),
        "data-slot": "credits-card",
        children: [
            ye(WP, {
                className: e,
                limitReached: o !== void 0 && $0(o),
                children: n === "error" && o === void 0 ? ye(Lr, {
                    tone: "danger",
                    role: "alert",
                    children: Qt("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                            ye(it, {
                                size: "body",
                                children: l("Could not load the credit balance")
                            }),
                            ye(Le, {
                                size: "sm",
                                variant: "secondary",
                                onClick: a(()=>{
                                    i();
                                }, "onClick"),
                                children: l("Try again")
                            })
                        ]
                    })
                }) : o === void 0 ? ye(YP, {}) : ye(ZP, {
                    wallet: o,
                    autoTopUpControlRef: m,
                    onAddCredits: a(()=>{
                        c("buy");
                    }, "onAddCredits"),
                    onEditAutoTopUp: a(()=>{
                        c("auto-top-up");
                    }, "onEditAutoTopUp"),
                    onEditMonthlySpendLimit: a(()=>{
                        c("monthly-spend-limit");
                    }, "onEditMonthlySpendLimit")
                })
            }),
            ye(G0, {
                open: s === "buy",
                onOpenChange: f,
                returnUrl: t,
                renderEmbeddedCheckout: r
            }),
            ye(N0, {
                open: s === "auto-top-up",
                onOpenChange: f
            }),
            ye(U0, {
                open: s === "monthly-spend-limit",
                onOpenChange: f
            })
        ]
    });
}
a($P, "CreditsCard");
function KP(e) {
    const t = ec(null), r = ec(!1), n = ec(e);
    return Xy(()=>{
        const o = n.current;
        n.current = e, !(e !== null || o !== "auto-top-up") && document.activeElement === document.body && t.current?.focus();
    }, [
        e
    ]), jF(a(function(i) {
        if (i !== null) return t.current = i, r.current && (r.current = !1, i.focus()), ()=>{
            t.current === i && (t.current = null), document.activeElement === i && (r.current = !0, queueMicrotask(()=>{
                r.current = !1;
            }));
        };
    }, "attach"), []);
}
a(KP, "useAutoTopUpControlFocus");
function WP({ className: e, limitReached: t, children: r }) {
    const { t: n } = Be();
    return Qt(tc, {
        children: [
            ye("div", {
                className: _e("rounded-2xl border p-4", e, t ? "border-destructive/60 bg-destructive/30" : "border-normal bg-primary"),
                children: r
            }),
            ye(it, {
                as: "p",
                size: "subtext2",
                color: t ? "destructive" : "tertiary",
                className: "mx-1.5 mt-2",
                children: n(t ? "Monthly spend limit reached. Increase your limit to continue working." : "Credits expire after two years")
            })
        ]
    });
}
a(WP, "CreditsCardFrame");
function YP() {
    return Qt("div", {
        className: "flex flex-col gap-4",
        "aria-busy": !0,
        children: [
            ye($t, {
                className: "h-4 w-24"
            }),
            ye($t, {
                className: "h-8 w-32"
            }),
            ye($t, {
                className: "h-5 w-full"
            }),
            ye($t, {
                className: "h-5 w-full"
            })
        ]
    });
}
a(YP, "CreditsCardSkeleton");
var XP = {
    autoTopUpOff: {
        header: "@max-[401px]:contents",
        buttons: "@max-[401px]:order-last",
        share: "@max-[401px]:flex-1"
    },
    autoTopUpOn: {
        header: "@max-[200px]:contents",
        buttons: "@max-[200px]:order-last",
        share: "@max-[200px]:flex-1"
    }
}, pH = "@max-[200px]:flex-col @max-[200px]:items-start @max-[200px]:gap-0.5";
function ZP({ wallet: e, onAddCredits: t, onEditAutoTopUp: r, onEditMonthlySpendLimit: n, autoTopUpControlRef: o }) {
    const { t: i } = Be(), { locale: s } = xt(), c = GP(e.autoTopUp), { monthlyUsage: l, monthlySpendLimit: m } = e, u = $0(e), d = e.availability.kind === "available", p = Yt(e.balance, s, {
        minorUnits: "floor"
    }), h = l === void 0 ? null : Yt(l, s, {
        minorUnits: "floor"
    }), f = c === null ? XP.autoTopUpOff : XP.autoTopUpOn;
    return Qt("div", {
        className: "@container flex flex-col gap-4",
        children: [
            Qt("div", {
                className: _e("flex flex-wrap items-center gap-2", f.header),
                children: [
                    ye(it, {
                        size: "body",
                        className: "min-w-[76px] flex-1",
                        children: i("Extra usage credits")
                    }),
                    Qt("div", {
                        className: _e("flex flex-wrap gap-2", f.buttons),
                        children: [
                            ye("div", {
                                className: f.share,
                                children: ye(Le, {
                                    variant: "outline",
                                    size: "sm",
                                    fullWidth: !0,
                                    disabled: !d,
                                    onClick: t,
                                    children: i("Buy Credits")
                                })
                            }),
                            c === null ? ye("div", {
                                className: f.share,
                                children: ye(Le, {
                                    ref: o,
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    disabled: !d,
                                    onClick: r,
                                    children: i("Set Auto Top-Up")
                                })
                            }) : null
                        ]
                    })
                ]
            }),
            Qt("div", {
                className: "flex flex-col gap-1",
                children: [
                    ye(it, {
                        size: "body",
                        color: "secondary",
                        children: ye(Qd, {
                            i18nKey: "<balance>{balance}</balance> remaining",
                            values: {
                                balance: p
                            },
                            components: {
                                balance: ye(it, {
                                    size: "title1",
                                    color: "primary",
                                    className: "me-0.5"
                                })
                            }
                        })
                    }),
                    e.pendingTopUps > 0 ? ye(it, {
                        size: "subtext2",
                        color: "secondary",
                        children: i("{count, plural, one {# top-up} other {# top-ups}} pending", {
                            count: e.pendingTopUps
                        })
                    }) : null
                ]
            }),
            c === null && l === void 0 && m === void 0 ? null : Qt("dl", {
                className: "m-0 flex flex-col gap-2",
                children: [
                    l === void 0 ? null : ye(Em, {
                        label: i("Monthly usage"),
                        danger: u,
                        children: ye(it, {
                            size: "body",
                            color: u ? "destructive" : "secondary",
                            children: h
                        })
                    }),
                    m === void 0 ? null : ye(Em, {
                        label: i("Monthly spend limit"),
                        danger: u,
                        children: d && n !== void 0 ? ye(K0, {
                            hint: i("Edit monthly spend limit"),
                            danger: u,
                            onClick: n,
                            children: ye(Y0, {
                                limit: m
                            })
                        }) : Qt("span", {
                            className: "flex items-center gap-1",
                            children: [
                                u ? qP : null,
                                ye(it, {
                                    size: "body",
                                    color: u ? "destructive" : "secondary",
                                    children: ye(Y0, {
                                        limit: m
                                    })
                                })
                            ]
                        })
                    }),
                    c === null ? null : ye(Em, {
                        label: i("Auto top-up"),
                        children: d ? ye(K0, {
                            hint: i("Edit auto top-up"),
                            controlRef: o,
                            onClick: r,
                            children: ye(W0, {
                                rule: c
                            })
                        }) : ye(it, {
                            size: "body",
                            color: "secondary",
                            children: ye(W0, {
                                rule: c
                            })
                        })
                    })
                ]
            }),
            e.availability.kind === "unavailable" ? ye(it, {
                size: "subtext1",
                color: "tertiary",
                children: e.availability.reason === "not-permitted" ? i("Only a billing admin can manage credits for this account") : i("Prepaid credits are not available for this account yet")
            }) : null
        ]
    });
}
a(ZP, "CreditsCardView");
function Em({ label: e, danger: t = !1, children: r }) {
    return Qt("div", {
        className: _e("flex items-center justify-between gap-3", pH),
        children: [
            ye(it, {
                as: "dt",
                size: "body",
                color: t ? "destructive" : "secondary",
                className: "shrink-0",
                children: e
            }),
            ye("dd", {
                className: "m-0 flex min-w-0 items-center gap-1",
                children: r
            })
        ]
    });
}
a(Em, "SummaryRow");
var qP = ye("span", {
    className: "text-destructive flex shrink-0",
    children: ye(zP, {
        "aria-hidden": !0,
        className: "size-3.5"
    })
}), fH = "text-secondary group-hover:text-primary group-active:text-primary", hH = "text-tertiary group-hover:text-primary group-active:text-primary";
function K0({ hint: e, danger: t = !1, controlRef: r, onClick: n, children: o }) {
    const { t: i } = Be(), s = zF();
    return Qt(tc, {
        children: [
            ye(HP, {
                render: ye("button", {
                    type: "button",
                    ref: r
                }),
                color: "primary",
                size: "body",
                underline: !1,
                "aria-describedby": s,
                onClick: n,
                children: Qt("span", {
                    className: "group flex cursor-pointer items-center gap-1 text-start",
                    children: [
                        t ? qP : null,
                        Qt("span", {
                            className: _e("group-hover:underline group-active:underline", t ? "text-destructive" : hH),
                            children: [
                                ye("span", {
                                    className: t ? void 0 : fH,
                                    children: o
                                }),
                                " ",
                                ye("span", {
                                    "aria-hidden": !0,
                                    className: t ? "text-tertiary" : void 0,
                                    children: "\xB7"
                                }),
                                " ",
                                i("Edit")
                            ]
                        })
                    ]
                })
            }),
            ye("span", {
                id: s,
                hidden: !0,
                children: e
            })
        ]
    });
}
a(K0, "EditSummaryLink");
function W0({ rule: e }) {
    const { t } = Be(), { locale: r } = xt();
    function n(o) {
        return Yt(o, r, {
            trailingZeroDisplay: "stripIfInteger"
        });
    }
    return a(n, "money"), ye(tc, {
        children: t("{topUpAmount} when below {thresholdAmount}", {
            topUpAmount: n(e.amount),
            thresholdAmount: n(e.threshold)
        })
    });
}
a(W0, "AutoTopUpSummary");
function Y0({ limit: e }) {
    const { t } = Be(), { locale: r } = xt();
    return e === null ? ye("span", {
        className: "text-tertiary group-hover:text-primary group-active:text-primary",
        children: t("Not set")
    }) : ye(tc, {
        children: Yt(e, r, {
            trailingZeroDisplay: "stripIfInteger"
        })
    });
}
a(Y0, "MonthlySpendLimitSummary");
function QP({ prepaidClient: e, themeType: t, skin: r, locale: n, onOpenUrl: o, returnUrl: i, className: s }) {
    return qy(ds, {
        className: s,
        locale: n,
        onOpenUrl: o,
        prepaidClient: e,
        skin: r,
        themeType: t,
        children: qy($P, {
            returnUrl: i
        })
    });
}
a(QP, "CursorCreditsCard");
var X0 = 2147483647;
function km(e) {
    return {
        kind: "refused",
        code: "INVALID_ARGUMENT",
        message: e
    };
}
a(km, "refused");
function JP(e) {
    if (e === void 0) return null;
    const t = Number(e);
    return Number.isSafeInteger(t) ? t : null;
}
a(JP, "knownCents");
function Z0({ hardLimit: e, noUsageBasedAllowed: t }) {
    return t || e <= 0 ? 0 : e >= X0 ? null : e * 100;
}
a(Z0, "limitCentsFromHardLimit");
function e_(e) {
    if (e === null) return {
        kind: "ok",
        fields: {
            hardLimit: X0,
            noUsageBasedAllowed: !1
        }
    };
    if (e === 0) return {
        kind: "ok",
        fields: {
            hardLimit: 0,
            noUsageBasedAllowed: !0
        }
    };
    const t = e / 100;
    return t < 0 ? km("The limit can't be negative") : t >= X0 ? km("The limit is too large") : Number.isInteger(t) ? {
        kind: "ok",
        fields: {
            hardLimit: t,
            noUsageBasedAllowed: !1
        }
    } : km("The limit must be a whole number of dollars");
}
a(e_, "hardLimitWriteFromLimitCents");
function t_(e, t) {
    if (!e.eligible) return null;
    const r = e.autoTopUp;
    return {
        monthlyUsageCents: JP(e.spentThisMonthCents),
        limitCents: Z0(t),
        autoTopUp: r === void 0 ? null : {
            enabled: r.enabled,
            thresholdCents: Number(r.thresholdCents),
            topUpAmountCents: Number(r.topUpAmountCents)
        }
    };
}
a(t_, "cursorSettingsFromReads");
function r_({ prepaidClient: e, open: t, onOpenChange: r, themeType: n, skin: o, locale: i, onOpenUrl: s }) {
    return Qy(ds, {
        locale: i,
        onOpenUrl: s,
        prepaidClient: e,
        skin: o,
        themeType: n,
        children: Qy(U0, {
            onOpenChange: r,
            open: t
        })
    });
}
a(r_, "CursorMonthlySpendLimitModal"), fr();
var n_ = 3e3, q0 = 3e4, o_ = 15e3, xH = {
    now: a(()=>performance.now(), "now"),
    schedule (e, t) {
        const r = setTimeout(e, t);
        return ()=>clearTimeout(r);
    }
}, Q0 = "USD", gH = {
    PAYMENT_METHOD_REQUIRED: "A saved payment method is required",
    PERMISSION_DENIED: "Not permitted to manage this wallet",
    INVALID_ARGUMENT: "The value was refused",
    FAILED_PRECONDITION: "The setting cannot be changed for this account right now",
    UNAVAILABLE: "The setting could not be saved; try again"
};
function Ba(e) {
    return Cc(e, Q0);
}
a(Ba, "moneyFromCents");
function Tm(e) {
    if (e.currencyCode !== Q0) throw new Pe("INVALID_ARGUMENT", `Cursor keeps this setting in ${Q0}, not ${e.currencyCode}`, {
        retriable: !1
    });
    return Ic(e);
}
a(Tm, "centsFromMoney");
function J0(e) {
    if (e.kind === "ok") return e.value;
    throw new Pe(e.code, e.message ?? gH[e.code], {
        retriable: e.code === "UNAVAILABLE"
    });
}
a(J0, "settledValue");
function ev(e) {
    return {
        enabled: e.enabled,
        threshold: Ba(e.thresholdCents),
        amount: Ba(e.topUpAmountCents),
        monthlyCap: null
    };
}
a(ev, "autoTopUpRuleFrom");
function tv(e) {
    const t = {};
    return e.limitCents !== void 0 && (t.monthlySpendLimit = e.limitCents === null ? null : Ba(e.limitCents)), e.monthlyUsageCents !== void 0 && e.monthlyUsageCents !== null && (t.monthlyUsage = Ba(e.monthlyUsageCents)), e.autoTopUp !== void 0 && (t.autoTopUp = e.autoTopUp === null ? null : ev(e.autoTopUp)), t;
}
a(tv, "cursorFieldsFrom");
function a_(e, t) {
    let r, n, o, i;
    async function s(l) {
        try {
            const m = await e.readSettings(), u = t.now(), d = o !== void 0 && u < o.until ? o : void 0, p = m === null || d === void 0 ? m : {
                ...m,
                limitCents: d.limitCents
            }, h = p === null ? {} : tv(p);
            if (n === l) {
                const f = u + q0;
                r = {
                    answer: h,
                    expiresAt: d === void 0 ? f : Math.min(f, d.until)
                }, i = p;
            }
            return h;
        } finally{
            n === l && (n = void 0);
        }
    }
    a(s, "settle");
    function c(l) {
        r = void 0, n = void 0, i !== null && (i = {
            monthlyUsageCents: void 0,
            limitCents: void 0,
            autoTopUp: void 0,
            ...i,
            ...l
        });
    }
    return a(c, "saved"), {
        read () {
            const l = t.now();
            if (r !== void 0 && l < r.expiresAt) return {
                answer: Promise.resolve(r.answer),
                startedAt: l
            };
            if (n?.answer !== void 0 && l - n.startedAt < q0) return {
                answer: n.answer,
                startedAt: n.startedAt
            };
            const m = {
                startedAt: l
            };
            return n = m, m.answer = s(m), {
                answer: m.answer,
                startedAt: l
            };
        },
        lastAnswer () {
            return i == null ? {} : tv(i);
        },
        limitSaved (l) {
            c({
                limitCents: l
            }), o = {
                limitCents: l,
                until: t.now() + o_
            };
        },
        ruleSaved (l) {
            c({
                autoTopUp: l
            });
        }
    };
}
a(a_, "cursorSettingsReads");
function i_(e, t, r, n) {
    return new Promise((o)=>{
        let i = !1, s = !1, c;
        const l = e.startedAt + n_ - n.now();
        let m = l <= 0;
        const u = a((p)=>{
            i || (i = !0, c?.(), o(p));
        }, "finish"), d = a(()=>{
            m && s && u(r());
        }, "giveUpIfDue");
        m || (c = n.schedule(()=>{
            m = !0, d();
        }, l)), t.then(()=>{
            s = !0, d();
        }, ()=>u({})), e.answer.then(u, ()=>u(r()));
    });
}
a(i_, "cursorFieldsFor");
function s_(e, t, r = xH) {
    const n = a_(t, r);
    return {
        ...e,
        async getWallet () {
            const o = e.getWallet(), [i, s] = await Promise.all([
                o,
                i_(n.read(), o, ()=>n.lastAnswer(), r)
            ]), c = {
                ...i
            };
            return delete c.monthlyUsage, delete c.monthlySpendLimit, {
                ...c,
                ...s
            };
        },
        async setMonthlySpendLimit (o) {
            const i = J0(await t.setAdditionalUsageLimit(o === null ? null : Tm(o))), s = i === null ? null : Ba(i);
            return n.limitSaved(i), s;
        },
        async setAutoTopUpRule (o) {
            const i = J0(await t.setAutoTopUpRule(o === null ? null : {
                enabled: o.enabled,
                thresholdCents: Tm(o.threshold),
                topUpAmountCents: Tm(o.amount)
            })), s = i === null ? null : ev(i);
            return n.ruleSaved(i), s;
        }
    };
}
a(s_, "withCursorOwnedSettings");
function c_({ prepaidClient: e, open: t, onOpenChange: r, returnUrl: n, themeType: o, skin: i, locale: s, onOpenUrl: c }) {
    return Jy(ds, {
        locale: s,
        onOpenUrl: c,
        prepaidClient: e,
        skin: i,
        themeType: o,
        children: Jy(G0, {
            onOpenChange: r,
            open: t,
            returnUrl: n
        })
    });
}
a(c_, "CursorTopUpModal");
function Cm(e, t) {
    return e !== null && typeof e == "object" && "$typeName" in e && typeof e.$typeName == "string" ? t === void 0 ? !0 : t.typeName === e.$typeName : !1;
}
a(Cm, "isMessage");
var N;
(function(e) {
    e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64";
})(N || (N = {}));
function l_() {
    const e = this.buf;
    let t = this.pos, r = 0, n = 0;
    for(let i = 0; i < 28; i += 7){
        const s = e[t++];
        if (r |= (s & 127) << i, (s & 128) == 0) {
            this.pos = t, this.assertBounds(), this.varint64Lo = r, this.varint64Hi = n;
            return;
        }
    }
    const o = e[t++];
    if (r |= (o & 15) << 28, n = (o & 112) >> 4, (o & 128) == 0) {
        this.pos = t, this.assertBounds(), this.varint64Lo = r, this.varint64Hi = n;
        return;
    }
    for(let i = 3; i <= 31; i += 7){
        const s = e[t++];
        if (n |= (s & 127) << i, (s & 128) == 0) {
            this.pos = t, this.assertBounds(), this.varint64Lo = r, this.varint64Hi = n;
            return;
        }
    }
    throw new Error("invalid varint");
}
a(l_, "varint64read");
var Im = 4294967296;
function rv(e) {
    const t = e[0] === "-";
    t && (e = e.slice(1));
    const r = 1e6;
    let n = 0, o = 0;
    function i(s, c) {
        const l = Number(e.slice(s, c));
        o *= r, n = n * r + l, n >= Im && (o = o + (n / Im | 0), n = n % Im);
    }
    return a(i, "add1e6digit"), i(-24, -18), i(-18, -12), i(-12, -6), i(-6), t ? ov(n, o) : Am(n, o);
}
a(rv, "int64FromString");
function m_(e, t) {
    let r = Am(e, t);
    const n = r.hi & 2147483648;
    n && (r = ov(r.lo, r.hi));
    const o = nv(r.lo, r.hi);
    return n ? "-" + o : o;
}
a(m_, "int64ToString");
function nv(e, t) {
    if ({ lo: e, hi: t } = u_(e, t), t <= 2097151) return String(Im * t + e);
    const r = e & 16777215, n = (e >>> 24 | t << 8) & 16777215, o = t >> 16 & 65535;
    let i = r + n * 6777216 + o * 6710656, s = n + o * 8147497, c = o * 2;
    const l = 1e7;
    return i >= l && (s += Math.floor(i / l), i %= l), s >= l && (c += Math.floor(s / l), s %= l), c.toString() + d_(s) + d_(i);
}
a(nv, "uInt64ToString");
function u_(e, t) {
    return {
        lo: e >>> 0,
        hi: t >>> 0
    };
}
a(u_, "toUnsigned");
function Am(e, t) {
    return {
        lo: e | 0,
        hi: t | 0
    };
}
a(Am, "newBits");
function ov(e, t) {
    return t = ~t, e ? e = ~e + 1 : t += 1, Am(e, t);
}
a(ov, "negate");
var d_ = a((e)=>{
    const t = String(e);
    return "0000000".slice(t.length) + t;
}, "decimalFrom1e7WithLeadingZeros");
function p_(e, t) {
    if (e >>> 0 < 128) {
        t.push(e);
        return;
    }
    if (e >= 0) {
        for(; e > 127;)t.push(e & 127 | 128), e = e >>> 7;
        t.push(e);
    } else {
        for(let r = 0; r < 9; r++)t.push(e & 127 | 128), e = e >> 7;
        t.push(1);
    }
}
a(p_, "varint32write");
function f_() {
    let e = this.buf[this.pos++];
    if ((e & 128) === 0) return this.assertBounds(), e;
    let t = e & 127;
    if (e = this.buf[this.pos++], t |= (e & 127) << 7, (e & 128) === 0) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (e & 127) << 14, (e & 128) === 0) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (e & 127) << 21, (e & 128) === 0) return this.assertBounds(), t;
    e = this.buf[this.pos++], t |= (e & 15) << 28;
    for(let r = 5; (e & 128) !== 0 && r < 10; r++)e = this.buf[this.pos++];
    if ((e & 128) !== 0) throw new Error("invalid varint");
    return this.assertBounds(), t >>> 0;
}
a(f_, "varint32read");
var st = h_();
function h_() {
    const e = new DataView(new ArrayBuffer(8));
    if (typeof BigInt == "function" && typeof e.getBigInt64 == "function" && typeof e.getBigUint64 == "function" && typeof e.setBigInt64 == "function" && typeof e.setBigUint64 == "function" && (!!globalThis.Deno || !!globalThis.Bun || typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
        const r = BigInt("-9223372036854775808"), n = BigInt("9223372036854775807"), o = BigInt("0"), i = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: !0,
            parse (s) {
                const c = typeof s == "bigint" ? s : BigInt(s);
                if (c > n || c < r) throw new Error(`invalid int64: ${s}`);
                return c;
            },
            uParse (s) {
                const c = typeof s == "bigint" ? s : BigInt(s);
                if (c > i || c < o) throw new Error(`invalid uint64: ${s}`);
                return c;
            },
            enc (s) {
                return e.setBigInt64(0, this.parse(s), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                };
            },
            uEnc (s) {
                return e.setBigInt64(0, this.uParse(s), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                };
            },
            dec (s, c) {
                return e.setInt32(0, s, !0), e.setInt32(4, c, !0), e.getBigInt64(0, !0);
            },
            uDec (s, c) {
                return e.setInt32(0, s, !0), e.setInt32(4, c, !0), e.getBigUint64(0, !0);
            }
        };
    }
    return {
        zero: "0",
        supported: !1,
        parse (r) {
            return typeof r != "string" && (r = r.toString()), av(r), r;
        },
        uParse (r) {
            return typeof r != "string" && (r = r.toString()), iv(r), r;
        },
        enc (r) {
            return typeof r != "string" && (r = r.toString()), av(r), rv(r);
        },
        uEnc (r) {
            return typeof r != "string" && (r = r.toString()), iv(r), rv(r);
        },
        dec (r, n) {
            return m_(r, n);
        },
        uDec (r, n) {
            return nv(r, n);
        }
    };
}
a(h_, "makeInt64Support");
function av(e) {
    if (!/^-?[0-9]+$/.test(e)) throw new Error("invalid int64: " + e);
}
a(av, "assertInt64String");
function iv(e) {
    if (!/^[0-9]+$/.test(e)) throw new Error("invalid uint64: " + e);
}
a(iv, "assertUInt64String");
function on(e, t) {
    switch(e){
        case N.STRING:
            return "";
        case N.BOOL:
            return !1;
        case N.DOUBLE:
        case N.FLOAT:
            return 0;
        case N.INT64:
        case N.UINT64:
        case N.SFIXED64:
        case N.FIXED64:
        case N.SINT64:
            return t ? "0" : st.zero;
        case N.BYTES:
            return new Uint8Array(0);
        default:
            return 0;
    }
}
a(on, "scalarZeroValue");
function x_(e, t) {
    switch(e){
        case N.BOOL:
            return t === !1;
        case N.STRING:
            return t === "";
        case N.BYTES:
            return t instanceof Uint8Array && !t.byteLength;
        case N.DOUBLE:
        case N.FLOAT:
            return Object.is(t, 0);
        default:
            return t == 0;
    }
}
a(x_, "isScalarZeroValue");
var g_ = 2, ar = Symbol.for("reflect unsafe local");
function v_(e, t) {
    const r = e[t.localName].case;
    return r === void 0 ? r : t.fields.find((n)=>n.localName === r);
}
a(v_, "unsafeOneofCase");
function b_(e, t) {
    const r = t.localName;
    if (t.oneof) return e[t.oneof.localName].case === r;
    if (t.presence != g_) return e[r] !== void 0 && Object.prototype.hasOwnProperty.call(e, r);
    switch(t.fieldKind){
        case "list":
            return e[r].length > 0;
        case "map":
            return Object.keys(e[r]).length > 0;
        case "scalar":
            return !x_(t.scalar, e[r]);
        case "enum":
            return e[r] !== t.enum.values[0].number;
    }
    throw new Error("message field with implicit presence");
}
a(b_, "unsafeIsSet");
function Ua(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t) && e[t] !== void 0;
}
a(Ua, "unsafeIsSetExplicit");
function y_(e, t) {
    if (t.oneof) {
        const r = e[t.oneof.localName];
        return r.case === t.localName ? r.value : void 0;
    }
    return e[t.localName];
}
a(y_, "unsafeGet");
function w_(e, t, r) {
    t.oneof ? e[t.oneof.localName] = {
        case: t.localName,
        value: r
    } : e[t.localName] = r;
}
a(w_, "unsafeSet");
function S_(e, t) {
    const r = t.localName;
    if (t.oneof) {
        const n = t.oneof.localName;
        e[n].case === r && (e[n] = {
            case: void 0
        });
    } else if (t.presence != g_) delete e[r];
    else switch(t.fieldKind){
        case "map":
            e[r] = {};
            break;
        case "list":
            e[r] = [];
            break;
        case "enum":
            e[r] = t.enum.values[0].number;
            break;
        case "scalar":
            e[r] = on(t.scalar, t.longAsString);
            break;
    }
}
a(S_, "unsafeClear");
function Sn(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e);
}
a(Sn, "isObject");
function Rm(e, t) {
    var r, n, o, i;
    if (Sn(e) && ar in e && "add" in e && "field" in e && typeof e.field == "function") {
        if (t !== void 0) {
            const s = t, c = e.field();
            return s.listKind == c.listKind && s.scalar === c.scalar && ((r = s.message) === null || r === void 0 ? void 0 : r.typeName) === ((n = c.message) === null || n === void 0 ? void 0 : n.typeName) && ((o = s.enum) === null || o === void 0 ? void 0 : o.typeName) === ((i = c.enum) === null || i === void 0 ? void 0 : i.typeName);
        }
        return !0;
    }
    return !1;
}
a(Rm, "isReflectList");
function Nm(e, t) {
    var r, n, o, i;
    if (Sn(e) && ar in e && "has" in e && "field" in e && typeof e.field == "function") {
        if (t !== void 0) {
            const s = t, c = e.field();
            return s.mapKey === c.mapKey && s.mapKind == c.mapKind && s.scalar === c.scalar && ((r = s.message) === null || r === void 0 ? void 0 : r.typeName) === ((n = c.message) === null || n === void 0 ? void 0 : n.typeName) && ((o = s.enum) === null || o === void 0 ? void 0 : o.typeName) === ((i = c.enum) === null || i === void 0 ? void 0 : i.typeName);
        }
        return !0;
    }
    return !1;
}
a(Nm, "isReflectMap");
function Pm(e, t) {
    return Sn(e) && ar in e && "desc" in e && Sn(e.desc) && e.desc.kind === "message" && (t === void 0 || e.desc.typeName == t.typeName);
}
a(Pm, "isReflectMessage");
function E_(e) {
    return cv(e.$typeName);
}
a(E_, "isWrapper");
function Xn(e) {
    const t = e.fields[0];
    return cv(e.typeName) && t !== void 0 && t.fieldKind == "scalar" && t.name == "value" && t.number == 1;
}
a(Xn, "isWrapperDesc");
function sv(e) {
    switch(e.typeName){
        case "google.protobuf.Any":
        case "google.protobuf.Timestamp":
        case "google.protobuf.Duration":
        case "google.protobuf.FieldMask":
        case "google.protobuf.Struct":
        case "google.protobuf.Value":
        case "google.protobuf.ListValue":
            return !0;
        default:
            return Xn(e);
    }
}
a(sv, "hasCustomJsonRepresentation");
var vH = new Set([
    "google.protobuf.DoubleValue",
    "google.protobuf.FloatValue",
    "google.protobuf.Int64Value",
    "google.protobuf.UInt64Value",
    "google.protobuf.Int32Value",
    "google.protobuf.UInt32Value",
    "google.protobuf.BoolValue",
    "google.protobuf.StringValue",
    "google.protobuf.BytesValue"
]);
function cv(e) {
    return vH.has(e);
}
a(cv, "isWrapperTypeName");
var bH = 999, yH = 998, k_ = 2;
function At(e, t) {
    return Cm(t, e) ? t : lv(e)(t);
}
a(At, "create");
var T_ = new WeakMap;
function lv(e) {
    let t = T_.get(e);
    return t === void 0 && (t = R_(e), T_.set(e, t)), t;
}
a(lv, "compiledCreate");
var mv = 0, C_ = 1, I_ = 2, A_ = 3;
function R_(e) {
    const t = e.typeName, { properties: r, prototype: n } = N_(e);
    return (o)=>{
        let i;
        n !== void 0 ? (i = Object.create(n), i.$typeName = t) : i = {
            $typeName: t
        };
        for(let s = 0; s < r.length; s++){
            const c = r[s], l = c.name, m = o?.[l];
            switch(c.kind){
                case mv:
                    m != null ? i[l] = c.convert !== void 0 ? c.convert(m) : m : c.constant !== void 0 && (i[l] = c.constant);
                    break;
                case C_:
                    i[l] = c.convert !== void 0 && Array.isArray(m) ? m.map(c.convert) : m ?? [];
                    break;
                case I_:
                    if (c.convert === void 0 || !Sn(m)) i[l] = m ?? {};
                    else {
                        const u = {}, d = Object.keys(m);
                        for(let p = 0; p < d.length; p++)u[d[p]] = c.convert(m[d[p]]);
                        i[l] = u;
                    }
                    break;
                case A_:
                    {
                        const u = m;
                        if (u?.case != null) {
                            const d = c.convert.get(u.case);
                            if (d !== void 0) {
                                i[l] = {
                                    case: u.case,
                                    value: d(u.value)
                                };
                                break;
                            }
                        }
                        i[l] = {
                            case: void 0
                        };
                        break;
                    }
            }
        }
        return i;
    };
}
a(R_, "compileCreate");
function N_(e) {
    var t, r;
    const n = [], o = {}, i = __(e);
    for (const s of e.members){
        const c = s.localName;
        if (s.kind == "oneof") {
            n.push({
                name: c,
                kind: A_,
                constant: void 0,
                convert: P_(s)
            });
            continue;
        }
        switch(s.fieldKind){
            case "message":
                {
                    n.push({
                        name: c,
                        kind: mv,
                        constant: void 0,
                        convert: ps(s)
                    });
                    break;
                }
            case "list":
                {
                    n.push({
                        name: c,
                        kind: C_,
                        constant: void 0,
                        convert: s.listKind == "message" ? (t = ps(s)) !== null && t !== void 0 ? t : ((l)=>l) : s.scalar == N.BYTES ? ja : void 0
                    });
                    break;
                }
            case "map":
                {
                    n.push({
                        name: c,
                        kind: I_,
                        constant: void 0,
                        convert: s.mapKind == "message" ? (r = ps(s)) !== null && r !== void 0 ? r : ((l)=>l) : s.scalar == N.BYTES ? ja : void 0
                    });
                    break;
                }
            default:
                {
                    const l = M_(s);
                    n.push({
                        name: c,
                        kind: mv,
                        constant: s.presence == k_ ? l : void 0,
                        convert: s.fieldKind == "scalar" && s.scalar == N.BYTES ? ja : void 0
                    }), i && (o[c] = l);
                    break;
                }
        }
    }
    return {
        properties: n,
        prototype: i ? o : void 0
    };
}
a(N_, "compileInitMessage");
function P_(e) {
    const t = new Map;
    for (const r of e.fields){
        let n;
        r.fieldKind == "message" ? n = ps(r) : r.fieldKind == "scalar" && r.scalar == N.BYTES && (n = ja), t.set(r.localName, n ?? ((o)=>o));
    }
    return t;
}
a(P_, "compileConvertOneof");
function ps(e) {
    if (e.fieldKind == "message" && !e.oneof && Xn(e.message)) return e.message.fields[0].scalar == N.BYTES ? ja : void 0;
    if (e.message.typeName == "google.protobuf.Struct" && e.parent.typeName !== "google.protobuf.Value") return;
    const t = e.message;
    let r;
    return (n)=>!Sn(n) || Cm(n, t) ? n : (r ?? (r = lv(t)), r(n));
}
a(ps, "compileConvertMessage");
function ja(e) {
    return Array.isArray(e) ? new Uint8Array(e) : e;
}
a(ja, "toU8Arr");
function __(e) {
    switch(e.file.edition){
        case bH:
            return !1;
        case yH:
            return !0;
        default:
            return e.fields.some((t)=>t.presence != k_ && t.fieldKind != "message" && !t.oneof);
    }
}
a(__, "needsPrototypeChain");
function M_(e) {
    const t = e.getDefaultValue();
    return t !== void 0 ? e.fieldKind == "scalar" && e.longAsString ? t.toString() : t : e.fieldKind == "scalar" ? on(e.scalar, e.longAsString) : e.enum.values[0].number;
}
a(M_, "createZeroValue");
var wH = [
    "FieldValueInvalidError",
    "FieldListRangeError",
    "ForeignFieldError"
], ct = class extends Error {
    static{
        a(this, "FieldError");
    }
    constructor(e, t, r = "FieldValueInvalidError"){
        super(t), this.name = r, this.field = ()=>e;
    }
};
function O_(e) {
    return e instanceof Error && wH.includes(e.name) && "field" in e && typeof e.field == "function";
}
a(O_, "isFieldError");
var uv;
function D_(e) {
    var t;
    uv = Object.assign(Object.assign({}, e), {
        encodeUtf8Into: (t = e.encodeUtf8Into) !== null && t !== void 0 ? t : dv(e.encodeUtf8.bind(e))
    });
}
a(D_, "configureTextEncoding");
function _m() {
    if (!uv) {
        const e = globalThis;
        if (!e.TextEncoder || !e.TextDecoder) throw new Error("encoding API missing: install TextEncoder and TextDecoder on globalThis");
        const t = new e.TextEncoder, r = new e.TextDecoder;
        let n;
        const o = {
            encodeUtf8 (s) {
                return t.encode(s);
            },
            decodeUtf8 (s, c) {
                return c ? (n || (n = new e.TextDecoder("utf-8", {
                    fatal: !0
                })), n.decode(s)) : r.decode(s);
            },
            checkUtf8 (s) {
                try {
                    return encodeURIComponent(s), !0;
                } catch  {
                    return !1;
                }
            }
        };
        t.encodeInto && (o.encodeUtf8Into = t.encodeInto.bind(t));
        const i = String.prototype.isWellFormed;
        i && (o.checkUtf8 = (s)=>i.call(s)), D_(o);
    }
    return uv;
}
a(_m, "getTextEncoding");
function dv(e) {
    return (t, r)=>{
        const n = e(t);
        return r.set(n), {
            written: n.byteLength
        };
    };
}
a(dv, "emulateEncodeInto");
var gt;
(function(e) {
    e[e.Varint = 0] = "Varint", e[e.Bit64 = 1] = "Bit64", e[e.LengthDelimited = 2] = "LengthDelimited", e[e.StartGroup = 3] = "StartGroup", e[e.EndGroup = 4] = "EndGroup", e[e.Bit32 = 5] = "Bit32";
})(gt || (gt = {}));
var L_ = 34028234663852886e22, F_ = -34028234663852886e22, V_ = 4294967295, B_ = 2147483647, U_ = -2147483648, j_ = class {
    static{
        a(this, "BinaryWriter");
    }
    constructor(e){
        this.stackPos = [], this.encodeUtf8Into = e ? dv(e) : _m().encodeUtf8Into, this.buffer = z_, this.viewCache = EH, this.pos = 0;
    }
    ensureCapacity(e) {
        const t = this.pos + e;
        if (t > this.buffer.length) {
            let r = this.buffer.length || SH;
            for(; r < t;)r *= 2;
            const n = new Uint8Array(r);
            this.pos > 0 && n.set(this.buffer), this.buffer = n;
        }
    }
    view() {
        const e = this.buffer, t = this.viewCache;
        if (t.byteLength === e.byteLength) return t;
        const r = new DataView(e.buffer);
        return this.viewCache = r, r;
    }
    finish() {
        const e = this.buffer.slice(0, this.pos);
        return this.pos = 0, this.stackPos = [], e;
    }
    fork() {
        return this.stackPos.push(this.pos), this.ensureCapacity(fs), this.buffer[this.pos++] = 0, this;
    }
    join() {
        const e = this.stackPos.pop();
        if (e === void 0) throw new Error("invalid state, fork stack empty");
        const t = this.pos - e - fs, r = Mm(t);
        return r > fs && (this.ensureCapacity(r - fs), this.buffer.copyWithin(e + r, e + fs, this.pos)), this.pos = e, this.uint32(t), this.pos += t, this;
    }
    tag(e, t) {
        return this.uint32((e << 3 | t) >>> 0);
    }
    raw(e) {
        return this.ensureCapacity(e.length), this.buffer.set(e, this.pos), this.pos += e.length, this;
    }
    uint32(e) {
        if (fv(e), this.ensureCapacity(5), e < 128) return this.buffer[this.pos++] = e, this;
        for(; e > 127;)this.buffer[this.pos++] = e & 127 | 128, e >>>= 7;
        return this.buffer[this.pos++] = e, this;
    }
    int32(e) {
        if (Om(e), e >= 0) return this.uint32(e);
        this.ensureCapacity(10);
        for(let t = 0; t < 9; t++)this.buffer[this.pos++] = e & 127 | 128, e >>= 7;
        return this.buffer[this.pos++] = 1, this;
    }
    bool(e) {
        return this.ensureCapacity(1), this.buffer[this.pos++] = e ? 1 : 0, this;
    }
    bytes(e) {
        return this.uint32(e.byteLength), this.raw(e);
    }
    string(e) {
        typeof e != "string" && (e = String(e));
        const t = e.length;
        if (t <= H_) {
            this.ensureCapacity(t + 1);
            const c = this.buffer;
            let l = this.pos;
            c[l++] = t;
            let m = 0;
            for(; m < t; m++){
                const u = e.charCodeAt(m);
                if (u > 127) break;
                c[l++] = u;
            }
            if (m == t) return this.pos = l, this;
        }
        this.ensureCapacity(t * 3 + 5);
        const r = Mm(t), n = this.buffer, o = this.pos, { written: i } = this.encodeUtf8Into(e, n.subarray(o + r)), s = Mm(i);
        return s != r && n.copyWithin(o + s, o + r, o + r + i), this.uint32(i), this.pos += i, this;
    }
    float(e) {
        return G_(e), this.ensureCapacity(4), this.view().setFloat32(this.pos, e, !0), this.pos += 4, this;
    }
    double(e) {
        return this.ensureCapacity(8), this.view().setFloat64(this.pos, e, !0), this.pos += 8, this;
    }
    fixed32(e) {
        return fv(e), this.ensureCapacity(4), this.view().setUint32(this.pos, e, !0), this.pos += 4, this;
    }
    sfixed32(e) {
        return Om(e), this.ensureCapacity(4), this.view().setInt32(this.pos, e, !0), this.pos += 4, this;
    }
    sint32(e) {
        return Om(e), this.uint32((e << 1 ^ e >> 31) >>> 0);
    }
    sfixed64(e) {
        const t = st.enc(e);
        this.ensureCapacity(8);
        const r = this.view();
        return r.setInt32(this.pos, t.lo, !0), r.setInt32(this.pos + 4, t.hi, !0), this.pos += 8, this;
    }
    fixed64(e) {
        const t = st.uEnc(e);
        this.ensureCapacity(8);
        const r = this.view();
        return r.setInt32(this.pos, t.lo, !0), r.setInt32(this.pos + 4, t.hi, !0), this.pos += 8, this;
    }
    int64(e) {
        const t = st.enc(e);
        return this.writeVarint64(t.lo, t.hi);
    }
    sint64(e) {
        const t = st.enc(e), r = t.hi >> 31, n = t.lo << 1 ^ r, o = (t.hi << 1 | t.lo >>> 31) ^ r;
        return this.writeVarint64(n, o);
    }
    uint64(e) {
        const t = st.uEnc(e);
        return this.writeVarint64(t.lo, t.hi);
    }
    writeVarint64(e, t) {
        this.ensureCapacity(10);
        const r = this.buffer;
        let n = this.pos;
        for(let s = 0; s < 28; s = s + 7){
            const c = e >>> s, l = !(!(c >>> 7) && t == 0);
            if (r[n++] = (l ? c | 128 : c) & 255, !l) return this.pos = n, this;
        }
        const o = e >>> 28 & 15 | (t & 7) << 4, i = t >> 3 != 0;
        if (r[n++] = (i ? o | 128 : o) & 255, !i) return this.pos = n, this;
        for(let s = 3; s < 31; s = s + 7){
            const c = t >>> s, l = !!(c >>> 7);
            if (r[n++] = (l ? c | 128 : c) & 255, !l) return this.pos = n, this;
        }
        return r[n++] = t >>> 31 & 1, this.pos = n, this;
    }
}, SH = 128, fs = 1, z_ = new Uint8Array(0), EH = new DataView(z_.buffer), H_ = 32;
function Mm(e) {
    return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5;
}
a(Mm, "varint32Size");
var pv = class {
    static{
        a(this, "BinaryReader");
    }
    constructor(e, t = _m().decodeUtf8){
        this.decodeUtf8 = t, this.varint64Lo = 0, this.varint64Hi = 0, this.varint64 = l_, this.uint32 = f_, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength);
    }
    tag() {
        const e = this.pos, t = this.uint32(), r = this.pos - e;
        if (r > 5 || r == 5 && this.buf[this.pos - 1] > 15) throw new Error("illegal tag: varint overflows uint32");
        const n = t >>> 3, o = t & 7;
        if (n <= 0 || o > 5) throw new Error("illegal tag: field no " + n + " wire type " + o);
        return [
            n,
            o
        ];
    }
    skip(e, t, r = 100) {
        let n = this.pos;
        switch(e){
            case gt.Varint:
                for(; this.buf[this.pos++] & 128;);
                break;
            case gt.Bit64:
                this.pos += 4;
            case gt.Bit32:
                this.pos += 4;
                break;
            case gt.LengthDelimited:
                let o = this.uint32();
                this.pos += o;
                break;
            case gt.StartGroup:
                if (r <= 0) throw new Error("maximum recursion depth reached");
                for(;;){
                    const [i, s] = this.tag();
                    if (s === gt.EndGroup) {
                        if (t !== void 0 && i !== t) throw new Error("invalid end group tag");
                        break;
                    }
                    this.skip(s, i, r - 1);
                }
                break;
            default:
                throw new Error("cant skip wire type " + e);
        }
        return this.assertBounds(), this.buf.subarray(n, this.pos);
    }
    assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
    }
    int32() {
        return this.uint32() | 0;
    }
    sint32() {
        let e = this.uint32();
        return e >>> 1 ^ -(e & 1);
    }
    int64() {
        return this.varint64(), st.dec(this.varint64Lo, this.varint64Hi);
    }
    uint64() {
        return this.varint64(), st.uDec(this.varint64Lo, this.varint64Hi);
    }
    sint64() {
        this.varint64();
        let e = this.varint64Lo, t = this.varint64Hi, r = -(e & 1);
        return e = (e >>> 1 | (t & 1) << 31) ^ r, t = t >>> 1 ^ r, st.dec(e, t);
    }
    bool() {
        const e = this.buf[this.pos];
        return e < 128 ? (this.pos++, e !== 0) : (this.varint64(), this.varint64Lo !== 0 || this.varint64Hi !== 0);
    }
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
        return st.uDec(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
        return st.dec(this.sfixed32(), this.sfixed32());
    }
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
        let e = this.uint32(), t = this.pos;
        return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e);
    }
    string(e) {
        const t = this.bytes(), r = t.length;
        if (r <= H_) {
            const n = new Array(r);
            for(let o = 0; o < r; o++){
                const i = t[o];
                if (i > 127) return this.decodeUtf8(t, e);
                n[o] = i;
            }
            return String.fromCharCode.apply(String, n);
        }
        return this.decodeUtf8(t, e);
    }
};
function Om(e) {
    if (typeof e == "string") e = Number(e);
    else if (typeof e != "number") throw new Error("invalid int32: " + typeof e);
    if (!Number.isInteger(e) || e > B_ || e < U_) throw new Error("invalid int32: " + e);
}
a(Om, "assertInt32");
function fv(e) {
    if (typeof e == "string") e = Number(e);
    else if (typeof e != "number") throw new Error("invalid uint32: " + typeof e);
    if (!Number.isInteger(e) || e > V_ || e < 0) throw new Error("invalid uint32: " + e);
}
a(fv, "assertUInt32");
function G_(e) {
    if (typeof e == "string") {
        const t = e;
        if (e = Number(e), Number.isNaN(e) && t !== "NaN") throw new Error("invalid float32: " + t);
    } else if (typeof e != "number") throw new Error("invalid float32: " + typeof e);
    if (Number.isFinite(e) && (e > L_ || e < F_)) throw new Error("invalid float32: " + e);
}
a(G_, "assertFloat32");
function hv(e, t) {
    const r = e.fieldKind == "list" ? Rm(t, e) : e.fieldKind == "map" ? Nm(t, e) : Dm(e, t);
    if (r === !0) return;
    let n;
    switch(e.fieldKind){
        case "list":
            n = `expected ${vv(e)}, got ${St(t)}`;
            break;
        case "map":
            n = `expected ${bv(e)}, got ${St(t)}`;
            break;
        default:
            n = Er(e, t, r);
    }
    return new ct(e, n);
}
a(hv, "checkField");
function xv(e, t, r) {
    const n = Dm(e, r);
    if (n !== !0) return new ct(e, `list item #${t + 1}: ${Er(e, r, n)}`);
}
a(xv, "checkListItem");
function $_(e, t, r) {
    const n = En(e.mapKey)(t);
    if (n !== !0) return new ct(e, `invalid map key: ${Er({
        scalar: e.mapKey
    }, t, n)}`);
    const o = Dm(e, r);
    if (o !== !0) return new ct(e, `map entry ${St(t)}: ${Er(e, r, o)}`);
}
a($_, "checkMapEntry");
function Dm(e, t) {
    return e.scalar !== void 0 ? En(e.scalar)(t) : e.enum !== void 0 ? e.enum.open ? En(N.INT32)(t) : e.enum.values.some((r)=>r.number === t) : Pm(t, e.message);
}
a(Dm, "checkSingular");
function En(e) {
    switch(e){
        case N.DOUBLE:
            return (t)=>typeof t == "number";
        case N.FLOAT:
            return (t)=>typeof t != "number" ? !1 : Number.isNaN(t) || !Number.isFinite(t) ? !0 : t > L_ || t < F_ ? `${t.toFixed()} out of range` : !0;
        case N.INT32:
        case N.SFIXED32:
        case N.SINT32:
            return (t)=>typeof t != "number" || !Number.isInteger(t) ? !1 : t > B_ || t < U_ ? `${t.toFixed()} out of range` : !0;
        case N.FIXED32:
        case N.UINT32:
            return (t)=>typeof t != "number" || !Number.isInteger(t) ? !1 : t > V_ || t < 0 ? `${t.toFixed()} out of range` : !0;
        case N.BOOL:
            return (t)=>typeof t == "boolean";
        case N.STRING:
            return (t)=>typeof t != "string" ? !1 : _m().checkUtf8(t) || "invalid UTF8";
        case N.BYTES:
            return (t)=>t instanceof Uint8Array;
        case N.INT64:
        case N.SFIXED64:
        case N.SINT64:
            return (t)=>{
                if (typeof t == "bigint" || typeof t == "number" || typeof t == "string" && t.length > 0) try {
                    return st.parse(t), !0;
                } catch  {
                    return `${t} out of range`;
                }
                return !1;
            };
        case N.FIXED64:
        case N.UINT64:
            return (t)=>{
                if (typeof t == "bigint" || typeof t == "number" || typeof t == "string" && t.length > 0) try {
                    return st.uParse(t), !0;
                } catch  {
                    return `${t} out of range`;
                }
                return !1;
            };
    }
}
a(En, "checkScalarValue");
function Er(e, t, r) {
    return r = typeof r == "string" ? `: ${r}` : `, got ${St(t)}`, e.scalar !== void 0 ? `expected ${K_(e.scalar)}` + r : e.enum !== void 0 ? `expected ${e.enum.toString()}` + r : `expected ${gv(e.message)}` + r;
}
a(Er, "reasonSingular");
function St(e) {
    switch(typeof e){
        case "object":
            return e === null ? "null" : e instanceof Uint8Array ? `Uint8Array(${e.length})` : Array.isArray(e) ? `Array(${e.length})` : Rm(e) ? vv(e.field()) : Nm(e) ? bv(e.field()) : Pm(e) ? gv(e.desc) : Cm(e) ? `message ${e.$typeName}` : "object";
        case "string":
            return e.length > 30 ? "string" : `"${e.split('"').join('\\"')}"`;
        case "boolean":
            return String(e);
        case "number":
            return String(e);
        case "bigint":
            return String(e) + "n";
        default:
            return typeof e;
    }
}
a(St, "formatVal");
function gv(e) {
    return `ReflectMessage (${e.typeName})`;
}
a(gv, "formatReflectMessage");
function vv(e) {
    switch(e.listKind){
        case "message":
            return `ReflectList (${e.message.toString()})`;
        case "enum":
            return `ReflectList (${e.enum.toString()})`;
        case "scalar":
            return `ReflectList (${N[e.scalar]})`;
    }
}
a(vv, "formatReflectList");
function bv(e) {
    switch(e.mapKind){
        case "message":
            return `ReflectMap (${N[e.mapKey]}, ${e.message.toString()})`;
        case "enum":
            return `ReflectMap (${N[e.mapKey]}, ${e.enum.toString()})`;
        case "scalar":
            return `ReflectMap (${N[e.mapKey]}, ${N[e.scalar]})`;
    }
}
a(bv, "formatReflectMap");
function K_(e) {
    switch(e){
        case N.STRING:
            return "string";
        case N.BOOL:
            return "boolean";
        case N.INT64:
        case N.SINT64:
        case N.SFIXED64:
            return "bigint (int64)";
        case N.UINT64:
        case N.FIXED64:
            return "bigint (uint64)";
        case N.BYTES:
            return "Uint8Array";
        case N.DOUBLE:
            return "number (float64)";
        case N.FLOAT:
            return "number (float32)";
        case N.FIXED32:
        case N.UINT32:
            return "number (uint32)";
        case N.INT32:
        case N.SFIXED32:
        case N.SINT32:
            return "number (int32)";
    }
}
a(K_, "scalarTypeDescription");
var kH = 0;
function Fr(e) {
    if (W_(e)) return {
        toMessage: a((r)=>Lm(r), "toMessage"),
        toLocal: a((r)=>Fm(r), "toLocal")
    };
    if (e.fieldKind == "message" && !e.oneof && Xn(e.message)) {
        const r = e.message, n = r.fields[0].localName;
        return {
            toMessage: a((o)=>{
                const i = At(r);
                return o !== void 0 && (i[n] = o), i;
            }, "toMessage"),
            toLocal: a((o)=>o[n], "toLocal")
        };
    }
    const t = e.message;
    return {
        toMessage: a((r)=>r === void 0 ? At(t) : r, "toMessage"),
        toLocal: a((r)=>r, "toLocal")
    };
}
a(Fr, "localMessageMapper");
function W_(e) {
    return e.message.typeName == "google.protobuf.Struct" && e.parent.typeName != "google.protobuf.Value";
}
a(W_, "usesJsonRepresentation");
function Lm(e) {
    const t = {
        $typeName: "google.protobuf.Struct",
        fields: {}
    };
    if (Sn(e)) for (const r of Object.keys(e))t.fields[r] = wv(e[r]);
    return t;
}
a(Lm, "wktStructToReflect");
function Fm(e) {
    const t = {};
    for (const r of Object.keys(e.fields))t[r] = yv(e.fields[r]);
    return t;
}
a(Fm, "wktStructToLocal");
function yv(e) {
    switch(e.kind.case){
        case "structValue":
            return Fm(e.kind.value);
        case "listValue":
            return e.kind.value.values.map(yv);
        case "nullValue":
        case void 0:
            return null;
        default:
            return e.kind.value;
    }
}
a(yv, "wktValueToLocal");
function wv(e) {
    const t = {
        $typeName: "google.protobuf.Value",
        kind: {
            case: void 0
        }
    };
    switch(typeof e){
        case "number":
            t.kind = {
                case: "numberValue",
                value: e
            };
            break;
        case "string":
            t.kind = {
                case: "stringValue",
                value: e
            };
            break;
        case "boolean":
            t.kind = {
                case: "boolValue",
                value: e
            };
            break;
        case "object":
            if (e === null) t.kind = {
                case: "nullValue",
                value: kH
            };
            else if (Array.isArray(e)) {
                const r = {
                    $typeName: "google.protobuf.ListValue",
                    values: []
                };
                if (Array.isArray(e)) for (const n of e)r.values.push(wv(n));
                t.kind = {
                    case: "listValue",
                    value: r
                };
            } else t.kind = {
                case: "structValue",
                value: Lm(e)
            };
            break;
    }
    return t;
}
a(wv, "wktValueToReflect");
function Y_(e, t, r = !0) {
    return new Z_(e, t, r);
}
a(Y_, "reflect");
var X_ = new WeakMap, Z_ = class {
    static{
        a(this, "ReflectMessageImpl");
    }
    get sortedFields() {
        const e = X_.get(this.desc);
        if (e) return e;
        const t = this.desc.fields.concat().sort((r, n)=>r.number - n.number);
        return X_.set(this.desc, t), t;
    }
    constructor(e, t, r = !0){
        this.lists = new Map, this.maps = new Map, this.check = r, this.desc = e, this.message = this[ar] = t ?? At(e), this.fields = e.fields, this.oneofs = e.oneofs, this.members = e.members;
    }
    findNumber(e) {
        return this._fieldsByNumber || (this._fieldsByNumber = new Map(this.desc.fields.map((t)=>[
                t.number,
                t
            ]))), this._fieldsByNumber.get(e);
    }
    oneofCase(e) {
        return za(this.message, e), v_(this.message, e);
    }
    isSet(e) {
        return za(this.message, e), b_(this.message, e);
    }
    clear(e) {
        za(this.message, e), S_(this.message, e);
    }
    get(e) {
        za(this.message, e);
        const t = y_(this.message, e);
        switch(e.fieldKind){
            case "list":
                let r = this.lists.get(e);
                return (!r || r[ar] !== t) && this.lists.set(e, r = new TH(e, t, this.check)), r;
            case "map":
                let n = this.maps.get(e);
                return (!n || n[ar] !== t) && this.maps.set(e, n = new CH(e, t, this.check)), n;
            case "message":
                return Bm(e, t, this.check);
            case "scalar":
                return t === void 0 ? on(e.scalar, !1) : zm(e, t);
            case "enum":
                return t ?? e.enum.values[0].number;
        }
    }
    set(e, t) {
        if (za(this.message, e), this.check) {
            const n = hv(e, t);
            if (n) throw n;
        }
        let r;
        e.fieldKind == "message" ? r = Vm(e, t) : Nm(t) || Rm(t) ? r = t[ar] : r = Hm(e, t), w_(this.message, e, r);
    }
    getUnknown() {
        return this.message.$unknown;
    }
    setUnknown(e) {
        this.message.$unknown = e;
    }
};
function za(e, t) {
    if (t.parent.typeName !== e.$typeName) throw new ct(t, `cannot use ${t.toString()} with message ${e.$typeName}`, "ForeignFieldError");
}
a(za, "assertOwn");
var TH = class {
    static{
        a(this, "ReflectListImpl");
    }
    field() {
        return this._field;
    }
    get size() {
        return this._arr.length;
    }
    constructor(e, t, r){
        this._field = e, this._arr = this[ar] = t, this.check = r;
    }
    get(e) {
        const t = this._arr[e];
        return t === void 0 ? void 0 : Um(this._field, t, this.check);
    }
    set(e, t) {
        if (e < 0 || e >= this._arr.length) throw new ct(this._field, `list item #${e + 1}: out of range`);
        if (this.check) {
            const r = xv(this._field, e, t);
            if (r) throw r;
        }
        this._arr[e] = Sv(this._field, t);
    }
    add(e) {
        if (this.check) {
            const t = xv(this._field, this._arr.length, e);
            if (t) throw t;
        }
        this._arr.push(Sv(this._field, e));
    }
    clear() {
        this._arr.splice(0, this._arr.length);
    }
    [Symbol.iterator]() {
        return this.values();
    }
    keys() {
        return this._arr.keys();
    }
    *values() {
        for (const e of this._arr)yield Um(this._field, e, this.check);
    }
    *entries() {
        for(let e = 0; e < this._arr.length; e++)yield [
            e,
            Um(this._field, this._arr[e], this.check)
        ];
    }
}, CH = class {
    static{
        a(this, "ReflectMapImpl");
    }
    constructor(e, t, r = !0){
        this.obj = this[ar] = t ?? {}, this.check = r, this._field = e;
    }
    field() {
        return this._field;
    }
    set(e, t) {
        if (this.check) {
            const r = $_(this._field, e, t);
            if (r) throw r;
        }
        return this.obj[hs(e)] = q_(this._field, t), this;
    }
    delete(e) {
        const t = hs(e), r = Object.prototype.hasOwnProperty.call(this.obj, t);
        return r && delete this.obj[t], r;
    }
    clear() {
        for (const e of Object.keys(this.obj))delete this.obj[e];
    }
    get(e) {
        let t = this.obj[hs(e)];
        return t !== void 0 && (t = jm(this._field, t, this.check)), t;
    }
    has(e) {
        return Object.prototype.hasOwnProperty.call(this.obj, hs(e));
    }
    *keys() {
        for (const e of Object.keys(this.obj))yield Ev(e, this._field.mapKey);
    }
    *entries() {
        for (const e of Object.entries(this.obj))yield [
            Ev(e[0], this._field.mapKey),
            jm(this._field, e[1], this.check)
        ];
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    get size() {
        return Object.keys(this.obj).length;
    }
    *values() {
        for (const e of Object.values(this.obj))yield jm(this._field, e, this.check);
    }
    forEach(e, t) {
        for (const r of this.entries())e.call(t, r[1], r[0], this);
    }
};
function Vm(e, t) {
    return Pm(t) ? E_(t.message) && !e.oneof && e.fieldKind == "message" ? t.message.value : t.desc.typeName == "google.protobuf.Struct" && e.parent.typeName != "google.protobuf.Value" ? Fm(t.message) : t.message : t;
}
a(Vm, "messageToLocal");
function Bm(e, t, r) {
    return t !== void 0 && (Xn(e.message) && !e.oneof && e.fieldKind == "message" ? t = {
        $typeName: e.message.typeName,
        value: zm(e.message.fields[0], t)
    } : e.message.typeName == "google.protobuf.Struct" && e.parent.typeName != "google.protobuf.Value" && Sn(t) && (t = Lm(t))), new Z_(e.message, t, r);
}
a(Bm, "messageToReflect");
function Sv(e, t) {
    return e.listKind == "message" ? Vm(e, t) : Hm(e, t);
}
a(Sv, "listItemToLocal");
function Um(e, t, r) {
    return e.listKind == "message" ? Bm(e, t, r) : zm(e, t);
}
a(Um, "listItemToReflect");
function q_(e, t) {
    return e.mapKind == "message" ? Vm(e, t) : Hm(e, t);
}
a(q_, "mapValueToLocal");
function jm(e, t, r) {
    return e.mapKind == "message" ? Bm(e, t, r) : t;
}
a(jm, "mapValueToReflect");
function hs(e) {
    return typeof e == "string" || typeof e == "number" ? e : String(e);
}
a(hs, "mapKeyToLocal");
function Ev(e, t) {
    switch(t){
        case N.STRING:
            return e;
        case N.INT32:
        case N.FIXED32:
        case N.UINT32:
        case N.SFIXED32:
        case N.SINT32:
            {
                const r = Number.parseInt(e);
                if (Number.isFinite(r)) return r;
                break;
            }
        case N.BOOL:
            switch(e){
                case "true":
                    return !0;
                case "false":
                    return !1;
            }
            break;
        case N.UINT64:
        case N.FIXED64:
            try {
                return st.uParse(e);
            } catch  {}
            break;
        default:
            try {
                return st.parse(e);
            } catch  {}
            break;
    }
    return e;
}
a(Ev, "mapKeyToReflect");
function zm(e, t) {
    switch(e.scalar){
        case N.INT64:
        case N.SFIXED64:
        case N.SINT64:
            "longAsString" in e && e.longAsString && typeof t == "string" && (t = st.parse(t));
            break;
        case N.FIXED64:
        case N.UINT64:
            "longAsString" in e && e.longAsString && typeof t == "string" && (t = st.uParse(t));
            break;
    }
    return t;
}
a(zm, "longToReflect");
function Hm(e, t) {
    switch(e.scalar){
        case N.INT64:
        case N.SFIXED64:
        case N.SINT64:
            "longAsString" in e && e.longAsString ? t = String(t) : (typeof t == "string" || typeof t == "number") && (t = st.parse(t));
            break;
        case N.FIXED64:
        case N.UINT64:
            "longAsString" in e && e.longAsString ? t = String(t) : (typeof t == "string" || typeof t == "number") && (t = st.uParse(t));
            break;
    }
    return t;
}
a(Hm, "longToLocal");
var Q_ = Uint8Array.prototype.setFromBase64;
function Gm(e) {
    const t = e.length;
    let r = t - (t + 3 >> 2);
    (t & 3) == 0 && e[t - 1] == "=" && (r -= e[t - 2] == "=" ? 2 : 1);
    const n = new Uint8Array(r);
    let o = -1;
    if (Q_) try {
        const i = Q_.call(n, e);
        i.read == t && (o = i.written);
    } catch  {}
    return o < 0 && (o = J_(n, e)), o == r ? n : n.subarray(0, o);
}
a(Gm, "base64Decode");
function J_(e, t) {
    const r = nM();
    let n = 0, o = 0, i, s = 0;
    for(let c = 0; c < t.length; c++){
        if (i = r[t.charCodeAt(c)], i === void 0) switch(t[c]){
            case "=":
                o = 0;
            case `
`:
            case "\r":
            case "	":
            case " ":
                continue;
            default:
                throw Error("invalid base64 string");
        }
        switch(o){
            case 0:
                s = i, o = 1;
                break;
            case 1:
                e[n++] = s << 2 | (i & 48) >> 4, s = i, o = 2;
                break;
            case 2:
                e[n++] = (s & 15) << 4 | (i & 60) >> 2, s = i, o = 3;
                break;
            case 3:
                e[n++] = (s & 3) << 6 | i, o = 0;
                break;
        }
    }
    if (o == 1) throw Error("invalid base64 string");
    return n;
}
a(J_, "setFromBase64");
var eM = Uint8Array.prototype.toBase64, IH = {
    std: {
        alphabet: "base64",
        omitPadding: !1
    },
    std_raw: {
        alphabet: "base64",
        omitPadding: !0
    },
    url: {
        alphabet: "base64url",
        omitPadding: !0
    }
};
function tM(e, t = "std") {
    if (eM) return eM.call(e, IH[t]);
    const r = kv(t), n = t == "std";
    let o = "", i = 0, s, c = 0;
    for(let l = 0; l < e.length; l++)switch(s = e[l], i){
        case 0:
            o += r[s >> 2], c = (s & 3) << 4, i = 1;
            break;
        case 1:
            o += r[c | s >> 4], c = (s & 15) << 2, i = 2;
            break;
        case 2:
            o += r[c | s >> 6], o += r[s & 63], i = 0;
            break;
    }
    return i && (o += r[c], n && (o += "=", i == 1 && (o += "="))), o;
}
a(tM, "base64Encode");
var $m, rM, Ha;
function kv(e) {
    return $m || ($m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), rM = $m.slice(0, -2).concat("-", "_")), e == "url" ? rM : $m;
}
a(kv, "getEncodeTable");
function nM() {
    if (!Ha) {
        Ha = [];
        const e = kv("std");
        for(let t = 0; t < e.length; t++)Ha[e[t].charCodeAt(0)] = t;
        Ha[45] = e.indexOf("+"), Ha[95] = e.indexOf("/");
    }
    return Ha;
}
a(nM, "getDecodeTable");
function Ao(e) {
    let t = !1;
    const r = [];
    for(let n = 0; n < e.length; n++){
        let o = e.charAt(n);
        switch(o){
            case "_":
                t = !0;
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                r.push(o), t = !1;
                break;
            default:
                t && (t = !1, o = o.toUpperCase()), r.push(o);
                break;
        }
    }
    return r.join("");
}
a(Ao, "protoCamelCase");
function Tv(e) {
    return e.replace(/[A-Z]/g, (t)=>"_" + t.toLowerCase());
}
a(Tv, "protoSnakeCase");
var AH = new Set([
    "constructor",
    "toString",
    "toJSON",
    "valueOf"
]);
function Ga(e) {
    return AH.has(e) ? e + "$" : e;
}
a(Ga, "safeObjectProperty");
function Km(e) {
    for (const t of e.field)Ua(t, "jsonName") || (t.jsonName = Ao(t.name));
    e.nestedType.forEach(Km);
}
a(Km, "restoreJsonNames");
function oM(e, t) {
    const r = e.values.find((n)=>n.name === t);
    if (!r) throw new Error(`cannot parse ${e} default value: ${t}`);
    return r.number;
}
a(oM, "parseTextFormatEnumValue");
function aM(e, t) {
    switch(e){
        case N.STRING:
            return t;
        case N.BYTES:
            {
                const r = iM(t);
                if (r === !1) throw new Error(`cannot parse ${N[e]} default value: ${t}`);
                return r;
            }
        case N.INT64:
        case N.SFIXED64:
        case N.SINT64:
            return st.parse(t);
        case N.UINT64:
        case N.FIXED64:
            return st.uParse(t);
        case N.DOUBLE:
        case N.FLOAT:
            switch(t){
                case "inf":
                    return Number.POSITIVE_INFINITY;
                case "-inf":
                    return Number.NEGATIVE_INFINITY;
                case "nan":
                    return Number.NaN;
                default:
                    return parseFloat(t);
            }
        case N.BOOL:
            return t === "true";
        case N.INT32:
        case N.UINT32:
        case N.SINT32:
        case N.FIXED32:
        case N.SFIXED32:
            return parseInt(t, 10);
    }
}
a(aM, "parseTextFormatScalarValue");
function iM(e) {
    const t = [], r = {
        tail: e,
        c: "",
        next () {
            return this.tail.length == 0 ? !1 : (this.c = this.tail[0], this.tail = this.tail.substring(1), !0);
        },
        take (n) {
            if (this.tail.length >= n) {
                const o = this.tail.substring(0, n);
                return this.tail = this.tail.substring(n), o;
            }
            return !1;
        }
    };
    for(; r.next();)switch(r.c){
        case "\\":
            if (r.next()) switch(r.c){
                case "\\":
                    t.push(r.c.charCodeAt(0));
                    break;
                case "b":
                    t.push(8);
                    break;
                case "f":
                    t.push(12);
                    break;
                case "n":
                    t.push(10);
                    break;
                case "r":
                    t.push(13);
                    break;
                case "t":
                    t.push(9);
                    break;
                case "v":
                    t.push(11);
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                    {
                        const n = r.c, o = r.take(2);
                        if (o === !1) return !1;
                        const i = parseInt(n + o, 8);
                        if (Number.isNaN(i)) return !1;
                        t.push(i);
                        break;
                    }
                case "x":
                    {
                        const n = r.c, o = r.take(2);
                        if (o === !1) return !1;
                        const i = parseInt(n + o, 16);
                        if (Number.isNaN(i)) return !1;
                        t.push(i);
                        break;
                    }
                case "u":
                    {
                        const n = r.c, o = r.take(4);
                        if (o === !1) return !1;
                        const i = parseInt(n + o, 16);
                        if (Number.isNaN(i)) return !1;
                        const s = new Uint8Array(4);
                        new DataView(s.buffer).setInt32(0, i, !0), t.push(s[0], s[1], s[2], s[3]);
                        break;
                    }
                case "U":
                    {
                        const n = r.c, o = r.take(8);
                        if (o === !1) return !1;
                        const i = st.uEnc(n + o), s = new Uint8Array(8), c = new DataView(s.buffer);
                        c.setInt32(0, i.lo, !0), c.setInt32(4, i.hi, !0), t.push(s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7]);
                        break;
                    }
            }
            break;
        default:
            t.push(r.c.charCodeAt(0));
    }
    return new Uint8Array(t);
}
a(iM, "unescapeBytesDefaultValue");
function* Wm(e) {
    switch(e.kind){
        case "file":
            for (const t of e.messages)yield t, yield* Wm(t);
            yield* e.enums, yield* e.services, yield* e.extensions;
            break;
        case "message":
            for (const t of e.nestedMessages)yield t, yield* Wm(t);
            yield* e.nestedEnums, yield* e.nestedExtensions;
            break;
    }
}
a(Wm, "nestedTypes");
function Cv(...e) {
    const t = sM();
    if (!e.length) return t;
    if ("$typeName" in e[0] && e[0].$typeName == "google.protobuf.FileDescriptorSet") {
        for (const r of e[0].file)Rv(r, t);
        return t;
    }
    if ("$typeName" in e[0]) {
        let r = function(s) {
            const c = [];
            for (const l of s.dependency){
                if (t.getFile(l) != null || i.has(l)) continue;
                const m = o(l);
                if (!m) throw new Error(`Unable to resolve ${l}, imported by ${s.name}`);
                "kind" in m ? t.addFile(m, !1, !0) : (i.add(m.name), c.push(m));
            }
            return c.concat(...c.map(r));
        };
        a(r, "recurseDeps");
        const n = e[0], o = e[1], i = new Set;
        for (const s of [
            n,
            ...r(n)
        ].reverse())Rv(s, t);
    } else for (const r of e)for (const n of r.files)t.addFile(n);
    return t;
}
a(Cv, "createFileRegistry");
function sM() {
    const e = new Map, t = new Map, r = new Map;
    return {
        kind: "registry",
        types: e,
        extendees: t,
        [Symbol.iterator] () {
            return e.values();
        },
        get files () {
            return r.values();
        },
        addFile (n, o, i) {
            if (r.set(n.proto.name, n), !o) for (const s of Wm(n))this.add(s);
            if (i) for (const s of n.dependencies)this.addFile(s, o, i);
        },
        add (n) {
            if (n.kind == "extension") {
                let o = t.get(n.extendee.typeName);
                o || t.set(n.extendee.typeName, o = new Map), o.set(n.number, n);
            }
            e.set(n.typeName, n);
        },
        get (n) {
            return e.get(n);
        },
        getFile (n) {
            return r.get(n);
        },
        getMessage (n) {
            const o = e.get(n);
            return o?.kind == "message" ? o : void 0;
        },
        getEnum (n) {
            const o = e.get(n);
            return o?.kind == "enum" ? o : void 0;
        },
        getExtension (n) {
            const o = e.get(n);
            return o?.kind == "extension" ? o : void 0;
        },
        getExtensionFor (n, o) {
            var i;
            return (i = t.get(n.typeName)) === null || i === void 0 ? void 0 : i.get(o);
        },
        getService (n) {
            const o = e.get(n);
            return o?.kind == "service" ? o : void 0;
        }
    };
}
a(sM, "createBaseRegistry");
var RH = 998, NH = 999, PH = 9999, _H = 9, xs = 10, gs = 11, MH = 12, cM = 14, Iv = 3, OH = 2, lM = 1, DH = 0, Av = 1, mM = 2, LH = 3, FH = 1, VH = 2, BH = 1, UH = 2, jH = 1001, uM = {
    998: {
        fieldPresence: 1,
        enumType: 2,
        repeatedFieldEncoding: 2,
        utf8Validation: 3,
        messageEncoding: 1,
        jsonFormat: 2,
        enforceNamingStyle: 2,
        defaultSymbolVisibility: 1
    },
    999: {
        fieldPresence: 2,
        enumType: 1,
        repeatedFieldEncoding: 1,
        utf8Validation: 2,
        messageEncoding: 1,
        jsonFormat: 1,
        enforceNamingStyle: 2,
        defaultSymbolVisibility: 1
    },
    1e3: {
        fieldPresence: 1,
        enumType: 1,
        repeatedFieldEncoding: 1,
        utf8Validation: 2,
        messageEncoding: 1,
        jsonFormat: 1,
        enforceNamingStyle: 2,
        defaultSymbolVisibility: 1
    },
    1001: {
        fieldPresence: 1,
        enumType: 1,
        repeatedFieldEncoding: 1,
        utf8Validation: 2,
        messageEncoding: 1,
        jsonFormat: 1,
        enforceNamingStyle: 1,
        defaultSymbolVisibility: 2
    }
};
function Rv(e, t) {
    var r, n;
    const o = {
        kind: "file",
        proto: e,
        deprecated: (n = (r = e.options) === null || r === void 0 ? void 0 : r.deprecated) !== null && n !== void 0 ? n : !1,
        edition: hM(e),
        name: e.name.replace(/\.proto$/, ""),
        dependencies: xM(e, t),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString () {
            return `file ${e.name}`;
        }
    }, i = new Map, s = {
        get (c) {
            return i.get(c);
        },
        add (c) {
            var l;
            kr(((l = c.proto.options) === null || l === void 0 ? void 0 : l.mapEntry) === !0), i.set(c.typeName, c);
        }
    };
    for (const c of e.enumType)Nv(c, o, void 0, t);
    for (const c of e.messageType)Pv(c, o, void 0, t, s);
    for (const c of e.service)dM(c, o, t);
    Ym(o, t);
    for (const c of i.values())Xm(c, t, s);
    for (const c of o.messages)Xm(c, t, s), Ym(c, t);
    t.addFile(o, !0);
}
a(Rv, "addFile");
function Ym(e, t) {
    switch(e.kind){
        case "file":
            for (const r of e.proto.extension){
                const n = Zm(r, e, t);
                e.extensions.push(n), t.add(n);
            }
            break;
        case "message":
            for (const r of e.proto.extension){
                const n = Zm(r, e, t);
                e.nestedExtensions.push(n), t.add(n);
            }
            for (const r of e.nestedMessages)Ym(r, t);
            break;
    }
}
a(Ym, "addExtensions");
function Xm(e, t, r) {
    const n = e.proto.oneofDecl.map((i)=>fM(i, e)), o = new Set;
    for (const i of e.proto.field){
        const s = bM(i, n), c = Zm(i, e, t, s, r);
        e.fields.push(c), e.field[c.localName] = c, s === void 0 ? e.members.push(c) : (s.fields.push(c), o.has(s) || (o.add(s), e.members.push(s)));
    }
    for (const i of n.filter((s)=>o.has(s)))e.oneofs.push(i);
    for (const i of e.nestedMessages)Xm(i, t, r);
}
a(Xm, "addFields");
function Nv(e, t, r, n) {
    var o, i, s, c, l;
    const m = gM(e.name, e.value), u = {
        kind: "enum",
        proto: e,
        deprecated: (i = (o = e.options) === null || o === void 0 ? void 0 : o.deprecated) !== null && i !== void 0 ? i : !1,
        file: t,
        parent: r,
        open: !0,
        name: e.name,
        typeName: vs(e, r, t),
        value: {},
        values: [],
        sharedPrefix: m,
        toString () {
            return `enum ${this.typeName}`;
        }
    };
    u.open = EM(u), n.add(u);
    for (const d of e.value){
        const p = d.name;
        u.values.push(u.value[d.number] = {
            kind: "enum_value",
            proto: d,
            deprecated: (c = (s = d.options) === null || s === void 0 ? void 0 : s.deprecated) !== null && c !== void 0 ? c : !1,
            parent: u,
            name: p,
            localName: Ga(m == null ? p : p.substring(m.length)),
            number: d.number,
            toString () {
                return `enum value ${u.typeName}.${p}`;
            }
        });
    }
    ((l = r?.nestedEnums) !== null && l !== void 0 ? l : t.enums).push(u);
}
a(Nv, "addEnum");
function Pv(e, t, r, n, o) {
    var i, s, c, l;
    const m = {
        kind: "message",
        proto: e,
        deprecated: (s = (i = e.options) === null || i === void 0 ? void 0 : i.deprecated) !== null && s !== void 0 ? s : !1,
        file: t,
        parent: r,
        name: e.name,
        typeName: vs(e, r, t),
        fields: [],
        field: {},
        oneofs: [],
        members: [],
        nestedEnums: [],
        nestedMessages: [],
        nestedExtensions: [],
        toString () {
            return `message ${this.typeName}`;
        }
    };
    ((c = e.options) === null || c === void 0 ? void 0 : c.mapEntry) === !0 ? o.add(m) : (((l = r?.nestedMessages) !== null && l !== void 0 ? l : t.messages).push(m), n.add(m));
    for (const u of e.enumType)Nv(u, t, m, n);
    for (const u of e.nestedType)Pv(u, t, m, n, o);
}
a(Pv, "addMessage");
function dM(e, t, r) {
    var n, o;
    const i = {
        kind: "service",
        proto: e,
        deprecated: (o = (n = e.options) === null || n === void 0 ? void 0 : n.deprecated) !== null && o !== void 0 ? o : !1,
        file: t,
        name: e.name,
        typeName: vs(e, void 0, t),
        methods: [],
        method: {},
        toString () {
            return `service ${this.typeName}`;
        }
    };
    t.services.push(i), r.add(i);
    for (const s of e.method){
        const c = pM(s, i, r);
        i.methods.push(c), i.method[c.localName] = c;
    }
}
a(dM, "addService");
function pM(e, t, r) {
    var n, o, i, s;
    let c;
    e.clientStreaming && e.serverStreaming ? c = "bidi_streaming" : e.clientStreaming ? c = "client_streaming" : e.serverStreaming ? c = "server_streaming" : c = "unary";
    const l = r.getMessage(an(e.inputType)), m = r.getMessage(an(e.outputType));
    kr(l, `invalid MethodDescriptorProto: input_type ${e.inputType} not found`), kr(m, `invalid MethodDescriptorProto: output_type ${e.inputType} not found`);
    const u = e.name;
    return {
        kind: "rpc",
        proto: e,
        deprecated: (o = (n = e.options) === null || n === void 0 ? void 0 : n.deprecated) !== null && o !== void 0 ? o : !1,
        parent: t,
        name: u,
        localName: Ga(u.length ? Ga(u[0].toLowerCase() + u.substring(1)) : u),
        methodKind: c,
        input: l,
        output: m,
        idempotency: (s = (i = e.options) === null || i === void 0 ? void 0 : i.idempotencyLevel) !== null && s !== void 0 ? s : DH,
        toString () {
            return `rpc ${t.typeName}.${u}`;
        }
    };
}
a(pM, "newMethod");
function fM(e, t) {
    return {
        kind: "oneof",
        proto: e,
        deprecated: !1,
        parent: t,
        fields: [],
        name: e.name,
        localName: Ga(Ao(e.name)),
        toString () {
            return `oneof ${t.typeName}.${this.name}`;
        }
    };
}
a(fM, "newOneof");
function Zm(e, t, r, n, o) {
    var i, s, c;
    const l = o === void 0, m = {
        kind: "field",
        proto: e,
        deprecated: (s = (i = e.options) === null || i === void 0 ? void 0 : i.deprecated) !== null && s !== void 0 ? s : !1,
        name: e.name,
        number: e.number,
        scalar: void 0,
        message: void 0,
        enum: void 0,
        presence: yM(e, n, l, t),
        utf8Validation: kM(e, t),
        listKind: void 0,
        mapKind: void 0,
        mapKey: void 0,
        delimitedEncoding: void 0,
        packed: void 0,
        longAsString: !1,
        getDefaultValue: void 0
    };
    let u;
    if (l) {
        const f = t.kind == "file" ? t : t.file, v = t.kind == "file" ? void 0 : t, x = vs(e, v, f);
        m.kind = "extension", m.file = f, m.parent = v, m.oneof = void 0, m.typeName = x, m.jsonName = `[${x}]`, u = a(()=>`extension ${x}`, "toStr");
        const g = r.getMessage(an(e.extendee));
        kr(g, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`), m.extendee = g;
    } else {
        const f = t;
        kr(f.kind == "message"), m.parent = f, m.oneof = n, m.localName = n ? Ao(e.name) : Ga(Ao(e.name)), m.jsonName = e.jsonName, u = a(()=>`field ${f.typeName}.${e.name}`, "toStr");
    }
    Object.defineProperty(m, "toString", {
        value: u,
        writable: !0,
        enumerable: !0,
        configurable: !0
    });
    const d = e.label, p = e.type, h = (c = e.options) === null || c === void 0 ? void 0 : c.jstype;
    if (d === Iv) {
        const f = p == gs ? o?.get(an(e.typeName)) : void 0;
        if (f) {
            m.fieldKind = "map";
            const { key: v, value: x } = SM(f);
            return m.mapKey = v.scalar, m.mapKind = x.fieldKind, m.message = x.message, m.delimitedEncoding = !1, m.enum = x.enum, m.scalar = x.scalar, m;
        }
        switch(m.fieldKind = "list", p){
            case gs:
            case xs:
                m.listKind = "message", m.message = r.getMessage(an(e.typeName)), kr(m.message), m.delimitedEncoding = _v(e, t);
                break;
            case cM:
                m.listKind = "enum", m.enum = r.getEnum(an(e.typeName)), kr(m.enum);
                break;
            default:
                m.listKind = "scalar", m.scalar = p, m.longAsString = h == lM;
                break;
        }
        return m.packed = wM(e, t), m;
    }
    switch(p){
        case gs:
        case xs:
            m.fieldKind = "message", m.message = r.getMessage(an(e.typeName)), kr(m.message, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), m.delimitedEncoding = _v(e, t), m.getDefaultValue = ()=>{};
            break;
        case cM:
            {
                const f = r.getEnum(an(e.typeName));
                kr(f !== void 0, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), m.fieldKind = "enum", m.enum = r.getEnum(an(e.typeName)), m.getDefaultValue = ()=>Ua(e, "defaultValue") ? oM(f, e.defaultValue) : void 0;
                break;
            }
        default:
            {
                m.fieldKind = "scalar", m.scalar = p, m.longAsString = h == lM, m.getDefaultValue = ()=>Ua(e, "defaultValue") ? aM(p, e.defaultValue) : void 0;
                break;
            }
    }
    return m;
}
a(Zm, "newField");
function hM(e) {
    switch(e.syntax){
        case "":
        case "proto2":
            return RH;
        case "proto3":
            return NH;
        case "editions":
            if (e.edition === PH) return jH;
            if (e.edition in uM) return e.edition;
            throw new Error(`${e.name}: unsupported edition`);
        default:
            throw new Error(`${e.name}: unsupported syntax "${e.syntax}"`);
    }
}
a(hM, "getFileEdition");
function xM(e, t) {
    return e.dependency.map((r)=>{
        const n = t.getFile(r);
        if (!n) throw new Error(`Cannot find ${r}, imported by ${e.name}`);
        return n;
    });
}
a(xM, "findFileDependencies");
function gM(e, t) {
    const r = vM(e) + "_";
    for (const n of t){
        if (!n.name.toLowerCase().startsWith(r)) return;
        const o = n.name.substring(r.length);
        if (o.length == 0 || /^\d/.test(o)) return;
    }
    return r;
}
a(gM, "findEnumSharedPrefix");
function vM(e) {
    return (e.substring(0, 1) + e.substring(1).replace(/[A-Z]/g, (t)=>"_" + t)).toLowerCase();
}
a(vM, "camelToSnakeCase");
function vs(e, t, r) {
    let n;
    return t ? n = `${t.typeName}.${e.name}` : r.proto.package.length > 0 ? n = `${r.proto.package}.${e.name}` : n = `${e.name}`, n;
}
a(vs, "makeTypeName");
function an(e) {
    return e.startsWith(".") ? e.substring(1) : e;
}
a(an, "trimLeadingDot");
function bM(e, t) {
    if (!Ua(e, "oneofIndex") || e.proto3Optional) return;
    const r = t[e.oneofIndex];
    return kr(r, `invalid FieldDescriptorProto: oneof #${e.oneofIndex} for field #${e.number} not found`), r;
}
a(bM, "findOneof");
function yM(e, t, r, n) {
    if (e.label == OH) return LH;
    if (e.label == Iv) return mM;
    if (t || e.proto3Optional || r) return Av;
    const o = Zn("fieldPresence", {
        proto: e,
        parent: n
    });
    return o == mM && (e.type == gs || e.type == xs) ? Av : o;
}
a(yM, "getFieldPresence");
function wM(e, t) {
    if (e.label != Iv) return !1;
    switch(e.type){
        case _H:
        case MH:
        case xs:
        case gs:
            return !1;
    }
    const r = e.options;
    return r && Ua(r, "packed") ? r.packed : FH == Zn("repeatedFieldEncoding", {
        proto: e,
        parent: t
    });
}
a(wM, "isPackedField");
function SM(e) {
    const t = e.fields.find((n)=>n.number === 1), r = e.fields.find((n)=>n.number === 2);
    return kr(t && t.fieldKind == "scalar" && t.scalar != N.BYTES && t.scalar != N.FLOAT && t.scalar != N.DOUBLE && r && r.fieldKind != "list" && r.fieldKind != "map"), {
        key: t,
        value: r
    };
}
a(SM, "findMapEntryFields");
function EM(e) {
    var t;
    return BH == Zn("enumType", {
        proto: e.proto,
        parent: (t = e.parent) !== null && t !== void 0 ? t : e.file
    });
}
a(EM, "isEnumOpen");
function _v(e, t) {
    return e.type == xs ? !0 : VH == Zn("messageEncoding", {
        proto: e,
        parent: t
    });
}
a(_v, "isDelimitedEncoding");
function kM(e, t) {
    return UH == Zn("utf8Validation", {
        proto: e,
        parent: t
    });
}
a(kM, "isUtf8Validated");
function Zn(e, t) {
    var r, n;
    const o = (r = t.proto.options) === null || r === void 0 ? void 0 : r.features;
    if (o) {
        const i = o[e];
        if (i != 0) return i;
    }
    if ("kind" in t) {
        if (t.kind == "message") return Zn(e, (n = t.parent) !== null && n !== void 0 ? n : t.file);
        const i = uM[t.edition];
        if (!i) throw new Error(`feature default for edition ${t.edition} not found`);
        return i[e];
    }
    return Zn(e, t.parent);
}
a(Zn, "resolveFeature");
function kr(e, t) {
    if (!e) throw new Error(t);
}
a(kr, "assert");
function TM(e) {
    const t = CM(e);
    return t.messageType.forEach(Km), Cv(t, ()=>{}).getFile(t.name);
}
a(TM, "boot");
function CM(e) {
    return Object.assign(Object.create({
        syntax: "",
        edition: 0
    }), Object.assign(Object.assign({
        $typeName: "google.protobuf.FileDescriptorProto",
        dependency: [],
        publicDependency: [],
        weakDependency: [],
        optionDependency: [],
        service: [],
        extension: []
    }, e), {
        messageType: e.messageType.map(Mv),
        enumType: e.enumType.map(Ov)
    }));
}
a(CM, "bootFileDescriptorProto");
function Mv(e) {
    var t, r, n, o, i, s, c, l;
    return Object.assign(Object.create({
        visibility: 0
    }), {
        $typeName: "google.protobuf.DescriptorProto",
        name: e.name,
        field: (r = (t = e.field) === null || t === void 0 ? void 0 : t.map(IM)) !== null && r !== void 0 ? r : [],
        extension: [],
        nestedType: (o = (n = e.nestedType) === null || n === void 0 ? void 0 : n.map(Mv)) !== null && o !== void 0 ? o : [],
        enumType: (s = (i = e.enumType) === null || i === void 0 ? void 0 : i.map(Ov)) !== null && s !== void 0 ? s : [],
        extensionRange: (l = (c = e.extensionRange) === null || c === void 0 ? void 0 : c.map((u)=>Object.assign({
                $typeName: "google.protobuf.DescriptorProto.ExtensionRange"
            }, u))) !== null && l !== void 0 ? l : [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: []
    });
}
a(Mv, "bootDescriptorProto");
function IM(e) {
    return Object.assign(Object.create({
        label: 1,
        typeName: "",
        extendee: "",
        defaultValue: "",
        oneofIndex: 0,
        jsonName: "",
        proto3Optional: !1
    }), Object.assign(Object.assign({
        $typeName: "google.protobuf.FieldDescriptorProto"
    }, e), {
        options: e.options ? AM(e.options) : void 0
    }));
}
a(IM, "bootFieldDescriptorProto");
function AM(e) {
    var t, r, n;
    return Object.assign(Object.create({
        ctype: 0,
        packed: !1,
        jstype: 0,
        lazy: !1,
        unverifiedLazy: !1,
        deprecated: !1,
        weak: !1,
        debugRedact: !1,
        retention: 0
    }), Object.assign(Object.assign({
        $typeName: "google.protobuf.FieldOptions"
    }, e), {
        targets: (t = e.targets) !== null && t !== void 0 ? t : [],
        editionDefaults: (n = (r = e.editionDefaults) === null || r === void 0 ? void 0 : r.map((i)=>Object.assign({
                $typeName: "google.protobuf.FieldOptions.EditionDefault"
            }, i))) !== null && n !== void 0 ? n : [],
        uninterpretedOption: []
    }));
}
a(AM, "bootFieldOptions");
function Ov(e) {
    return Object.assign(Object.create({
        visibility: 0
    }), {
        $typeName: "google.protobuf.EnumDescriptorProto",
        name: e.name,
        reservedName: [],
        reservedRange: [],
        value: e.value.map((r)=>Object.assign({
                $typeName: "google.protobuf.EnumValueDescriptorProto"
            }, r))
    });
}
a(Ov, "bootEnumDescriptorProto");
function sn(e, t, ...r) {
    return r.reduce((n, o)=>n.nestedMessages[o], e.messages[t]);
}
a(sn, "messageDesc");
function qm(e, t, ...r) {
    if (r.length == 0) return e.enums[t];
    const n = r.pop();
    return r.reduce((o, i)=>o.nestedMessages[i], e.messages[t]).nestedEnums[n];
}
a(qm, "enumDesc");
function Qm(e) {
    const t = {};
    for (const r of e.values)t[r.localName] = r.number, t[r.number] = r.localName;
    return t;
}
a(Qm, "tsEnum");
var zH = TM({
    name: "google/protobuf/descriptor.proto",
    package: "google.protobuf",
    messageType: [
        {
            name: "FileDescriptorSet",
            field: [
                {
                    name: "file",
                    number: 1,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.FileDescriptorProto"
                }
            ],
            extensionRange: [
                {
                    start: 536e6,
                    end: 536000001
                }
            ]
        },
        {
            name: "FileDescriptorProto",
            field: [
                {
                    name: "name",
                    number: 1,
                    type: 9,
                    label: 1
                },
                {
                    name: "package",
                    number: 2,
                    type: 9,
                    label: 1
                },
                {
                    name: "dependency",
                    number: 3,
                    type: 9,
                    label: 3
                },
                {
                    name: "public_dependency",
                    number: 10,
                    type: 5,
                    label: 3
                },
                {
                    name: "weak_dependency",
                    number: 11,
                    type: 5,
                    label: 3
                },
                {
                    name: "option_dependency",
                    number: 15,
                    type: 9,
                    label: 3
                },
                {
                    name: "message_type",
                    number: 4,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.DescriptorProto"
                },
                {
                    name: "enum_type",
                    number: 5,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.EnumDescriptorProto"
                },
                {
                    name: "service",
                    number: 6,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.ServiceDescriptorProto"
                },
                {
                    name: "extension",
                    number: 7,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.FieldDescriptorProto"
                },
                {
                    name: "options",
                    number: 8,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FileOptions"
                },
                {
                    name: "source_code_info",
                    number: 9,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.SourceCodeInfo"
                },
                {
                    name: "syntax",
                    number: 12,
                    type: 9,
                    label: 1
                },
                {
                    name: "edition",
                    number: 14,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.Edition"
                }
            ]
        },
        {
            name: "DescriptorProto",
            field: [
                {
                    name: "name",
                    number: 1,
                    type: 9,
                    label: 1
                },
                {
                    name: "field",
                    number: 2,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.FieldDescriptorProto"
                },
                {
                    name: "extension",
                    number: 6,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.FieldDescriptorProto"
                },
                {
                    name: "nested_type",
                    number: 3,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.DescriptorProto"
                },
                {
                    name: "enum_type",
                    number: 4,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.EnumDescriptorProto"
                },
                {
                    name: "extension_range",
                    number: 5,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.DescriptorProto.ExtensionRange"
                },
                {
                    name: "oneof_decl",
                    number: 8,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.OneofDescriptorProto"
                },
                {
                    name: "options",
                    number: 7,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.MessageOptions"
                },
                {
                    name: "reserved_range",
                    number: 9,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.DescriptorProto.ReservedRange"
                },
                {
                    name: "reserved_name",
                    number: 10,
                    type: 9,
                    label: 3
                },
                {
                    name: "visibility",
                    number: 11,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.SymbolVisibility"
                }
            ],
            nestedType: [
                {
                    name: "ExtensionRange",
                    field: [
                        {
                            name: "start",
                            number: 1,
                            type: 5,
                            label: 1
                        },
                        {
                            name: "end",
                            number: 2,
                            type: 5,
                            label: 1
                        },
                        {
                            name: "options",
                            number: 3,
                            type: 11,
                            label: 1,
                            typeName: ".google.protobuf.ExtensionRangeOptions"
                        }
                    ]
                },
                {
                    name: "ReservedRange",
                    field: [
                        {
                            name: "start",
                            number: 1,
                            type: 5,
                            label: 1
                        },
                        {
                            name: "end",
                            number: 2,
                            type: 5,
                            label: 1
                        }
                    ]
                }
            ]
        },
        {
            name: "ExtensionRangeOptions",
            field: [
                {
                    name: "uninterpreted_option",
                    number: 999,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.UninterpretedOption"
                },
                {
                    name: "declaration",
                    number: 2,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.ExtensionRangeOptions.Declaration",
                    options: {
                        retention: 2
                    }
                },
                {
                    name: "features",
                    number: 50,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet"
                },
                {
                    name: "verification",
                    number: 3,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.ExtensionRangeOptions.VerificationState",
                    defaultValue: "UNVERIFIED",
                    options: {
                        retention: 2
                    }
                }
            ],
            nestedType: [
                {
                    name: "Declaration",
                    field: [
                        {
                            name: "number",
                            number: 1,
                            type: 5,
                            label: 1
                        },
                        {
                            name: "full_name",
                            number: 2,
                            type: 9,
                            label: 1
                        },
                        {
                            name: "type",
                            number: 3,
                            type: 9,
                            label: 1
                        },
                        {
                            name: "reserved",
                            number: 5,
                            type: 8,
                            label: 1
                        },
                        {
                            name: "repeated",
                            number: 6,
                            type: 8,
                            label: 1
                        }
                    ]
                }
            ],
            enumType: [
                {
                    name: "VerificationState",
                    value: [
                        {
                            name: "DECLARATION",
                            number: 0
                        },
                        {
                            name: "UNVERIFIED",
                            number: 1
                        }
                    ]
                }
            ],
            extensionRange: [
                {
                    start: 1e3,
                    end: 536870912
                }
            ]
        },
        {
            name: "FieldDescriptorProto",
            field: [
                {
                    name: "name",
                    number: 1,
                    type: 9,
                    label: 1
                },
                {
                    name: "number",
                    number: 3,
                    type: 5,
                    label: 1
                },
                {
                    name: "label",
                    number: 4,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FieldDescriptorProto.Label"
                },
                {
                    name: "type",
                    number: 5,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FieldDescriptorProto.Type"
                },
                {
                    name: "type_name",
                    number: 6,
                    type: 9,
                    label: 1
                },
                {
                    name: "extendee",
                    number: 2,
                    type: 9,
                    label: 1
                },
                {
                    name: "default_value",
                    number: 7,
                    type: 9,
                    label: 1
                },
                {
                    name: "oneof_index",
                    number: 9,
                    type: 5,
                    label: 1
                },
                {
                    name: "json_name",
                    number: 10,
                    type: 9,
                    label: 1
                },
                {
                    name: "options",
                    number: 8,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FieldOptions"
                },
                {
                    name: "proto3_optional",
                    number: 17,
                    type: 8,
                    label: 1
                }
            ],
            enumType: [
                {
                    name: "Type",
                    value: [
                        {
                            name: "TYPE_DOUBLE",
                            number: 1
                        },
                        {
                            name: "TYPE_FLOAT",
                            number: 2
                        },
                        {
                            name: "TYPE_INT64",
                            number: 3
                        },
                        {
                            name: "TYPE_UINT64",
                            number: 4
                        },
                        {
                            name: "TYPE_INT32",
                            number: 5
                        },
                        {
                            name: "TYPE_FIXED64",
                            number: 6
                        },
                        {
                            name: "TYPE_FIXED32",
                            number: 7
                        },
                        {
                            name: "TYPE_BOOL",
                            number: 8
                        },
                        {
                            name: "TYPE_STRING",
                            number: 9
                        },
                        {
                            name: "TYPE_GROUP",
                            number: 10
                        },
                        {
                            name: "TYPE_MESSAGE",
                            number: 11
                        },
                        {
                            name: "TYPE_BYTES",
                            number: 12
                        },
                        {
                            name: "TYPE_UINT32",
                            number: 13
                        },
                        {
                            name: "TYPE_ENUM",
                            number: 14
                        },
                        {
                            name: "TYPE_SFIXED32",
                            number: 15
                        },
                        {
                            name: "TYPE_SFIXED64",
                            number: 16
                        },
                        {
                            name: "TYPE_SINT32",
                            number: 17
                        },
                        {
                            name: "TYPE_SINT64",
                            number: 18
                        }
                    ]
                },
                {
                    name: "Label",
                    value: [
                        {
                            name: "LABEL_OPTIONAL",
                            number: 1
                        },
                        {
                            name: "LABEL_REPEATED",
                            number: 3
                        },
                        {
                            name: "LABEL_REQUIRED",
                            number: 2
                        }
                    ]
                }
            ]
        },
        {
            name: "OneofDescriptorProto",
            field: [
                {
                    name: "name",
                    number: 1,
                    type: 9,
                    label: 1
                },
                {
                    name: "options",
                    number: 2,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.OneofOptions"
                }
            ]
        },
        {
            name: "EnumDescriptorProto",
            field: [
                {
                    name: "name",
                    number: 1,
                    type: 9,
                    label: 1
                },
                {
                    name: "value",
                    number: 2,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.EnumValueDescriptorProto"
                },
                {
                    name: "options",
                    number: 3,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.EnumOptions"
                },
                {
                    name: "reserved_range",
                    number: 4,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.EnumDescriptorProto.EnumReservedRange"
                },
                {
                    name: "reserved_name",
                    number: 5,
                    type: 9,
                    label: 3
                },
                {
                    name: "visibility",
                    number: 6,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.SymbolVisibility"
                }
            ],
            nestedType: [
                {
                    name: "EnumReservedRange",
                    field: [
                        {
                            name: "start",
                            number: 1,
                            type: 5,
                            label: 1
                        },
                        {
                            name: "end",
                            number: 2,
                            type: 5,
                            label: 1
                        }
                    ]
                }
            ]
        },
        {
            name: "EnumValueDescriptorProto",
            field: [
                {
                    name: "name",
                    number: 1,
                    type: 9,
                    label: 1
                },
                {
                    name: "number",
                    number: 2,
                    type: 5,
                    label: 1
                },
                {
                    name: "options",
                    number: 3,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.EnumValueOptions"
                }
            ]
        },
        {
            name: "ServiceDescriptorProto",
            field: [
                {
                    name: "name",
                    number: 1,
                    type: 9,
                    label: 1
                },
                {
                    name: "method",
                    number: 2,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.MethodDescriptorProto"
                },
                {
                    name: "options",
                    number: 3,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.ServiceOptions"
                }
            ]
        },
        {
            name: "MethodDescriptorProto",
            field: [
                {
                    name: "name",
                    number: 1,
                    type: 9,
                    label: 1
                },
                {
                    name: "input_type",
                    number: 2,
                    type: 9,
                    label: 1
                },
                {
                    name: "output_type",
                    number: 3,
                    type: 9,
                    label: 1
                },
                {
                    name: "options",
                    number: 4,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.MethodOptions"
                },
                {
                    name: "client_streaming",
                    number: 5,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "server_streaming",
                    number: 6,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                }
            ]
        },
        {
            name: "FileOptions",
            field: [
                {
                    name: "java_package",
                    number: 1,
                    type: 9,
                    label: 1
                },
                {
                    name: "java_outer_classname",
                    number: 8,
                    type: 9,
                    label: 1
                },
                {
                    name: "java_multiple_files",
                    number: 10,
                    type: 8,
                    label: 1,
                    defaultValue: "false",
                    options: {}
                },
                {
                    name: "java_generate_equals_and_hash",
                    number: 20,
                    type: 8,
                    label: 1,
                    options: {
                        deprecated: !0
                    }
                },
                {
                    name: "java_string_check_utf8",
                    number: 27,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "optimize_for",
                    number: 9,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FileOptions.OptimizeMode",
                    defaultValue: "SPEED"
                },
                {
                    name: "go_package",
                    number: 11,
                    type: 9,
                    label: 1
                },
                {
                    name: "cc_generic_services",
                    number: 16,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "java_generic_services",
                    number: 17,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "py_generic_services",
                    number: 18,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "deprecated",
                    number: 23,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "cc_enable_arenas",
                    number: 31,
                    type: 8,
                    label: 1,
                    defaultValue: "true"
                },
                {
                    name: "objc_class_prefix",
                    number: 36,
                    type: 9,
                    label: 1
                },
                {
                    name: "csharp_namespace",
                    number: 37,
                    type: 9,
                    label: 1
                },
                {
                    name: "swift_prefix",
                    number: 39,
                    type: 9,
                    label: 1
                },
                {
                    name: "php_class_prefix",
                    number: 40,
                    type: 9,
                    label: 1
                },
                {
                    name: "php_namespace",
                    number: 41,
                    type: 9,
                    label: 1
                },
                {
                    name: "php_metadata_namespace",
                    number: 44,
                    type: 9,
                    label: 1
                },
                {
                    name: "ruby_package",
                    number: 45,
                    type: 9,
                    label: 1
                },
                {
                    name: "features",
                    number: 50,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet"
                },
                {
                    name: "uninterpreted_option",
                    number: 999,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.UninterpretedOption"
                }
            ],
            enumType: [
                {
                    name: "OptimizeMode",
                    value: [
                        {
                            name: "SPEED",
                            number: 1
                        },
                        {
                            name: "CODE_SIZE",
                            number: 2
                        },
                        {
                            name: "LITE_RUNTIME",
                            number: 3
                        }
                    ]
                }
            ],
            extensionRange: [
                {
                    start: 1e3,
                    end: 536870912
                }
            ]
        },
        {
            name: "MessageOptions",
            field: [
                {
                    name: "message_set_wire_format",
                    number: 1,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "no_standard_descriptor_accessor",
                    number: 2,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "deprecated",
                    number: 3,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "map_entry",
                    number: 7,
                    type: 8,
                    label: 1
                },
                {
                    name: "deprecated_legacy_json_field_conflicts",
                    number: 11,
                    type: 8,
                    label: 1,
                    options: {
                        deprecated: !0
                    }
                },
                {
                    name: "features",
                    number: 12,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet"
                },
                {
                    name: "uninterpreted_option",
                    number: 999,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.UninterpretedOption"
                }
            ],
            extensionRange: [
                {
                    start: 1e3,
                    end: 536870912
                }
            ]
        },
        {
            name: "FieldOptions",
            field: [
                {
                    name: "ctype",
                    number: 1,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FieldOptions.CType",
                    defaultValue: "STRING"
                },
                {
                    name: "packed",
                    number: 2,
                    type: 8,
                    label: 1
                },
                {
                    name: "jstype",
                    number: 6,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FieldOptions.JSType",
                    defaultValue: "JS_NORMAL"
                },
                {
                    name: "lazy",
                    number: 5,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "unverified_lazy",
                    number: 15,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "deprecated",
                    number: 3,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "weak",
                    number: 10,
                    type: 8,
                    label: 1,
                    defaultValue: "false",
                    options: {
                        deprecated: !0
                    }
                },
                {
                    name: "debug_redact",
                    number: 16,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "retention",
                    number: 17,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FieldOptions.OptionRetention"
                },
                {
                    name: "targets",
                    number: 19,
                    type: 14,
                    label: 3,
                    typeName: ".google.protobuf.FieldOptions.OptionTargetType"
                },
                {
                    name: "edition_defaults",
                    number: 20,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.FieldOptions.EditionDefault"
                },
                {
                    name: "features",
                    number: 21,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet"
                },
                {
                    name: "feature_support",
                    number: 22,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FieldOptions.FeatureSupport"
                },
                {
                    name: "uninterpreted_option",
                    number: 999,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.UninterpretedOption"
                }
            ],
            nestedType: [
                {
                    name: "EditionDefault",
                    field: [
                        {
                            name: "edition",
                            number: 3,
                            type: 14,
                            label: 1,
                            typeName: ".google.protobuf.Edition"
                        },
                        {
                            name: "value",
                            number: 2,
                            type: 9,
                            label: 1
                        }
                    ]
                },
                {
                    name: "FeatureSupport",
                    field: [
                        {
                            name: "edition_introduced",
                            number: 1,
                            type: 14,
                            label: 1,
                            typeName: ".google.protobuf.Edition"
                        },
                        {
                            name: "edition_deprecated",
                            number: 2,
                            type: 14,
                            label: 1,
                            typeName: ".google.protobuf.Edition"
                        },
                        {
                            name: "deprecation_warning",
                            number: 3,
                            type: 9,
                            label: 1
                        },
                        {
                            name: "edition_removed",
                            number: 4,
                            type: 14,
                            label: 1,
                            typeName: ".google.protobuf.Edition"
                        },
                        {
                            name: "removal_error",
                            number: 5,
                            type: 9,
                            label: 1
                        }
                    ]
                }
            ],
            enumType: [
                {
                    name: "CType",
                    value: [
                        {
                            name: "STRING",
                            number: 0
                        },
                        {
                            name: "CORD",
                            number: 1
                        },
                        {
                            name: "STRING_PIECE",
                            number: 2
                        }
                    ]
                },
                {
                    name: "JSType",
                    value: [
                        {
                            name: "JS_NORMAL",
                            number: 0
                        },
                        {
                            name: "JS_STRING",
                            number: 1
                        },
                        {
                            name: "JS_NUMBER",
                            number: 2
                        }
                    ]
                },
                {
                    name: "OptionRetention",
                    value: [
                        {
                            name: "RETENTION_UNKNOWN",
                            number: 0
                        },
                        {
                            name: "RETENTION_RUNTIME",
                            number: 1
                        },
                        {
                            name: "RETENTION_SOURCE",
                            number: 2
                        }
                    ]
                },
                {
                    name: "OptionTargetType",
                    value: [
                        {
                            name: "TARGET_TYPE_UNKNOWN",
                            number: 0
                        },
                        {
                            name: "TARGET_TYPE_FILE",
                            number: 1
                        },
                        {
                            name: "TARGET_TYPE_EXTENSION_RANGE",
                            number: 2
                        },
                        {
                            name: "TARGET_TYPE_MESSAGE",
                            number: 3
                        },
                        {
                            name: "TARGET_TYPE_FIELD",
                            number: 4
                        },
                        {
                            name: "TARGET_TYPE_ONEOF",
                            number: 5
                        },
                        {
                            name: "TARGET_TYPE_ENUM",
                            number: 6
                        },
                        {
                            name: "TARGET_TYPE_ENUM_ENTRY",
                            number: 7
                        },
                        {
                            name: "TARGET_TYPE_SERVICE",
                            number: 8
                        },
                        {
                            name: "TARGET_TYPE_METHOD",
                            number: 9
                        }
                    ]
                }
            ],
            extensionRange: [
                {
                    start: 1e3,
                    end: 536870912
                }
            ]
        },
        {
            name: "OneofOptions",
            field: [
                {
                    name: "features",
                    number: 1,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet"
                },
                {
                    name: "uninterpreted_option",
                    number: 999,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.UninterpretedOption"
                }
            ],
            extensionRange: [
                {
                    start: 1e3,
                    end: 536870912
                }
            ]
        },
        {
            name: "EnumOptions",
            field: [
                {
                    name: "allow_alias",
                    number: 2,
                    type: 8,
                    label: 1
                },
                {
                    name: "deprecated",
                    number: 3,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "deprecated_legacy_json_field_conflicts",
                    number: 6,
                    type: 8,
                    label: 1,
                    options: {
                        deprecated: !0
                    }
                },
                {
                    name: "features",
                    number: 7,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet"
                },
                {
                    name: "uninterpreted_option",
                    number: 999,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.UninterpretedOption"
                }
            ],
            extensionRange: [
                {
                    start: 1e3,
                    end: 536870912
                }
            ]
        },
        {
            name: "EnumValueOptions",
            field: [
                {
                    name: "deprecated",
                    number: 1,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "features",
                    number: 2,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet"
                },
                {
                    name: "debug_redact",
                    number: 3,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "feature_support",
                    number: 4,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FieldOptions.FeatureSupport"
                },
                {
                    name: "uninterpreted_option",
                    number: 999,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.UninterpretedOption"
                }
            ],
            extensionRange: [
                {
                    start: 1e3,
                    end: 536870912
                }
            ]
        },
        {
            name: "ServiceOptions",
            field: [
                {
                    name: "features",
                    number: 34,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet"
                },
                {
                    name: "deprecated",
                    number: 33,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "uninterpreted_option",
                    number: 999,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.UninterpretedOption"
                }
            ],
            extensionRange: [
                {
                    start: 1e3,
                    end: 536870912
                }
            ]
        },
        {
            name: "MethodOptions",
            field: [
                {
                    name: "deprecated",
                    number: 33,
                    type: 8,
                    label: 1,
                    defaultValue: "false"
                },
                {
                    name: "idempotency_level",
                    number: 34,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.MethodOptions.IdempotencyLevel",
                    defaultValue: "IDEMPOTENCY_UNKNOWN"
                },
                {
                    name: "features",
                    number: 35,
                    type: 11,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet"
                },
                {
                    name: "uninterpreted_option",
                    number: 999,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.UninterpretedOption"
                }
            ],
            enumType: [
                {
                    name: "IdempotencyLevel",
                    value: [
                        {
                            name: "IDEMPOTENCY_UNKNOWN",
                            number: 0
                        },
                        {
                            name: "NO_SIDE_EFFECTS",
                            number: 1
                        },
                        {
                            name: "IDEMPOTENT",
                            number: 2
                        }
                    ]
                }
            ],
            extensionRange: [
                {
                    start: 1e3,
                    end: 536870912
                }
            ]
        },
        {
            name: "UninterpretedOption",
            field: [
                {
                    name: "name",
                    number: 2,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.UninterpretedOption.NamePart"
                },
                {
                    name: "identifier_value",
                    number: 3,
                    type: 9,
                    label: 1
                },
                {
                    name: "positive_int_value",
                    number: 4,
                    type: 4,
                    label: 1
                },
                {
                    name: "negative_int_value",
                    number: 5,
                    type: 3,
                    label: 1
                },
                {
                    name: "double_value",
                    number: 6,
                    type: 1,
                    label: 1
                },
                {
                    name: "string_value",
                    number: 7,
                    type: 12,
                    label: 1
                },
                {
                    name: "aggregate_value",
                    number: 8,
                    type: 9,
                    label: 1
                }
            ],
            nestedType: [
                {
                    name: "NamePart",
                    field: [
                        {
                            name: "name_part",
                            number: 1,
                            type: 9,
                            label: 2
                        },
                        {
                            name: "is_extension",
                            number: 2,
                            type: 8,
                            label: 2
                        }
                    ]
                }
            ]
        },
        {
            name: "FeatureSet",
            field: [
                {
                    name: "field_presence",
                    number: 1,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet.FieldPresence",
                    options: {
                        retention: 1,
                        targets: [
                            4,
                            1
                        ],
                        editionDefaults: [
                            {
                                value: "EXPLICIT",
                                edition: 900
                            },
                            {
                                value: "IMPLICIT",
                                edition: 999
                            },
                            {
                                value: "EXPLICIT",
                                edition: 1e3
                            }
                        ]
                    }
                },
                {
                    name: "enum_type",
                    number: 2,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet.EnumType",
                    options: {
                        retention: 1,
                        targets: [
                            6,
                            1
                        ],
                        editionDefaults: [
                            {
                                value: "CLOSED",
                                edition: 900
                            },
                            {
                                value: "OPEN",
                                edition: 999
                            }
                        ]
                    }
                },
                {
                    name: "repeated_field_encoding",
                    number: 3,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet.RepeatedFieldEncoding",
                    options: {
                        retention: 1,
                        targets: [
                            4,
                            1
                        ],
                        editionDefaults: [
                            {
                                value: "EXPANDED",
                                edition: 900
                            },
                            {
                                value: "PACKED",
                                edition: 999
                            }
                        ]
                    }
                },
                {
                    name: "utf8_validation",
                    number: 4,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet.Utf8Validation",
                    options: {
                        retention: 1,
                        targets: [
                            4,
                            1
                        ],
                        editionDefaults: [
                            {
                                value: "NONE",
                                edition: 900
                            },
                            {
                                value: "VERIFY",
                                edition: 999
                            }
                        ]
                    }
                },
                {
                    name: "message_encoding",
                    number: 5,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet.MessageEncoding",
                    options: {
                        retention: 1,
                        targets: [
                            4,
                            1
                        ],
                        editionDefaults: [
                            {
                                value: "LENGTH_PREFIXED",
                                edition: 900
                            }
                        ]
                    }
                },
                {
                    name: "json_format",
                    number: 6,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet.JsonFormat",
                    options: {
                        retention: 1,
                        targets: [
                            3,
                            6,
                            1
                        ],
                        editionDefaults: [
                            {
                                value: "LEGACY_BEST_EFFORT",
                                edition: 900
                            },
                            {
                                value: "ALLOW",
                                edition: 999
                            }
                        ]
                    }
                },
                {
                    name: "enforce_naming_style",
                    number: 7,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet.EnforceNamingStyle",
                    options: {
                        retention: 2,
                        targets: [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9
                        ],
                        editionDefaults: [
                            {
                                value: "STYLE_LEGACY",
                                edition: 900
                            },
                            {
                                value: "STYLE2024",
                                edition: 1001
                            }
                        ]
                    }
                },
                {
                    name: "default_symbol_visibility",
                    number: 8,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility",
                    options: {
                        retention: 2,
                        targets: [
                            1
                        ],
                        editionDefaults: [
                            {
                                value: "EXPORT_ALL",
                                edition: 900
                            },
                            {
                                value: "EXPORT_TOP_LEVEL",
                                edition: 1001
                            }
                        ]
                    }
                }
            ],
            nestedType: [
                {
                    name: "VisibilityFeature",
                    enumType: [
                        {
                            name: "DefaultSymbolVisibility",
                            value: [
                                {
                                    name: "DEFAULT_SYMBOL_VISIBILITY_UNKNOWN",
                                    number: 0
                                },
                                {
                                    name: "EXPORT_ALL",
                                    number: 1
                                },
                                {
                                    name: "EXPORT_TOP_LEVEL",
                                    number: 2
                                },
                                {
                                    name: "LOCAL_ALL",
                                    number: 3
                                },
                                {
                                    name: "STRICT",
                                    number: 4
                                }
                            ]
                        }
                    ]
                }
            ],
            enumType: [
                {
                    name: "FieldPresence",
                    value: [
                        {
                            name: "FIELD_PRESENCE_UNKNOWN",
                            number: 0
                        },
                        {
                            name: "EXPLICIT",
                            number: 1
                        },
                        {
                            name: "IMPLICIT",
                            number: 2
                        },
                        {
                            name: "LEGACY_REQUIRED",
                            number: 3
                        }
                    ]
                },
                {
                    name: "EnumType",
                    value: [
                        {
                            name: "ENUM_TYPE_UNKNOWN",
                            number: 0
                        },
                        {
                            name: "OPEN",
                            number: 1
                        },
                        {
                            name: "CLOSED",
                            number: 2
                        }
                    ]
                },
                {
                    name: "RepeatedFieldEncoding",
                    value: [
                        {
                            name: "REPEATED_FIELD_ENCODING_UNKNOWN",
                            number: 0
                        },
                        {
                            name: "PACKED",
                            number: 1
                        },
                        {
                            name: "EXPANDED",
                            number: 2
                        }
                    ]
                },
                {
                    name: "Utf8Validation",
                    value: [
                        {
                            name: "UTF8_VALIDATION_UNKNOWN",
                            number: 0
                        },
                        {
                            name: "VERIFY",
                            number: 2
                        },
                        {
                            name: "NONE",
                            number: 3
                        }
                    ]
                },
                {
                    name: "MessageEncoding",
                    value: [
                        {
                            name: "MESSAGE_ENCODING_UNKNOWN",
                            number: 0
                        },
                        {
                            name: "LENGTH_PREFIXED",
                            number: 1
                        },
                        {
                            name: "DELIMITED",
                            number: 2
                        }
                    ]
                },
                {
                    name: "JsonFormat",
                    value: [
                        {
                            name: "JSON_FORMAT_UNKNOWN",
                            number: 0
                        },
                        {
                            name: "ALLOW",
                            number: 1
                        },
                        {
                            name: "LEGACY_BEST_EFFORT",
                            number: 2
                        }
                    ]
                },
                {
                    name: "EnforceNamingStyle",
                    value: [
                        {
                            name: "ENFORCE_NAMING_STYLE_UNKNOWN",
                            number: 0
                        },
                        {
                            name: "STYLE2024",
                            number: 1
                        },
                        {
                            name: "STYLE_LEGACY",
                            number: 2
                        }
                    ]
                }
            ],
            extensionRange: [
                {
                    start: 1e3,
                    end: 9995
                },
                {
                    start: 9995,
                    end: 1e4
                },
                {
                    start: 1e4,
                    end: 10001
                }
            ]
        },
        {
            name: "FeatureSetDefaults",
            field: [
                {
                    name: "defaults",
                    number: 1,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault"
                },
                {
                    name: "minimum_edition",
                    number: 4,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.Edition"
                },
                {
                    name: "maximum_edition",
                    number: 5,
                    type: 14,
                    label: 1,
                    typeName: ".google.protobuf.Edition"
                }
            ],
            nestedType: [
                {
                    name: "FeatureSetEditionDefault",
                    field: [
                        {
                            name: "edition",
                            number: 3,
                            type: 14,
                            label: 1,
                            typeName: ".google.protobuf.Edition"
                        },
                        {
                            name: "overridable_features",
                            number: 4,
                            type: 11,
                            label: 1,
                            typeName: ".google.protobuf.FeatureSet"
                        },
                        {
                            name: "fixed_features",
                            number: 5,
                            type: 11,
                            label: 1,
                            typeName: ".google.protobuf.FeatureSet"
                        }
                    ]
                }
            ]
        },
        {
            name: "SourceCodeInfo",
            field: [
                {
                    name: "location",
                    number: 1,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.SourceCodeInfo.Location"
                }
            ],
            nestedType: [
                {
                    name: "Location",
                    field: [
                        {
                            name: "path",
                            number: 1,
                            type: 5,
                            label: 3,
                            options: {
                                packed: !0
                            }
                        },
                        {
                            name: "span",
                            number: 2,
                            type: 5,
                            label: 3,
                            options: {
                                packed: !0
                            }
                        },
                        {
                            name: "leading_comments",
                            number: 3,
                            type: 9,
                            label: 1
                        },
                        {
                            name: "trailing_comments",
                            number: 4,
                            type: 9,
                            label: 1
                        },
                        {
                            name: "leading_detached_comments",
                            number: 6,
                            type: 9,
                            label: 3
                        }
                    ]
                }
            ],
            extensionRange: [
                {
                    start: 536e6,
                    end: 536000001
                }
            ]
        },
        {
            name: "GeneratedCodeInfo",
            field: [
                {
                    name: "annotation",
                    number: 1,
                    type: 11,
                    label: 3,
                    typeName: ".google.protobuf.GeneratedCodeInfo.Annotation"
                }
            ],
            nestedType: [
                {
                    name: "Annotation",
                    field: [
                        {
                            name: "path",
                            number: 1,
                            type: 5,
                            label: 3,
                            options: {
                                packed: !0
                            }
                        },
                        {
                            name: "source_file",
                            number: 2,
                            type: 9,
                            label: 1
                        },
                        {
                            name: "begin",
                            number: 3,
                            type: 5,
                            label: 1
                        },
                        {
                            name: "end",
                            number: 4,
                            type: 5,
                            label: 1
                        },
                        {
                            name: "semantic",
                            number: 5,
                            type: 14,
                            label: 1,
                            typeName: ".google.protobuf.GeneratedCodeInfo.Annotation.Semantic"
                        }
                    ],
                    enumType: [
                        {
                            name: "Semantic",
                            value: [
                                {
                                    name: "NONE",
                                    number: 0
                                },
                                {
                                    name: "SET",
                                    number: 1
                                },
                                {
                                    name: "ALIAS",
                                    number: 2
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    enumType: [
        {
            name: "Edition",
            value: [
                {
                    name: "EDITION_UNKNOWN",
                    number: 0
                },
                {
                    name: "EDITION_LEGACY",
                    number: 900
                },
                {
                    name: "EDITION_PROTO2",
                    number: 998
                },
                {
                    name: "EDITION_PROTO3",
                    number: 999
                },
                {
                    name: "EDITION_2023",
                    number: 1e3
                },
                {
                    name: "EDITION_2024",
                    number: 1001
                },
                {
                    name: "EDITION_UNSTABLE",
                    number: 9999
                },
                {
                    name: "EDITION_1_TEST_ONLY",
                    number: 1
                },
                {
                    name: "EDITION_2_TEST_ONLY",
                    number: 2
                },
                {
                    name: "EDITION_99997_TEST_ONLY",
                    number: 99997
                },
                {
                    name: "EDITION_99998_TEST_ONLY",
                    number: 99998
                },
                {
                    name: "EDITION_99999_TEST_ONLY",
                    number: 99999
                },
                {
                    name: "EDITION_MAX",
                    number: 2147483647
                }
            ]
        },
        {
            name: "SymbolVisibility",
            value: [
                {
                    name: "VISIBILITY_UNSET",
                    number: 0
                },
                {
                    name: "VISIBILITY_LOCAL",
                    number: 1
                },
                {
                    name: "VISIBILITY_EXPORT",
                    number: 2
                }
            ]
        }
    ]
}), HH = sn(zH, 1), RM;
(function(e) {
    e[e.DECLARATION = 0] = "DECLARATION", e[e.UNVERIFIED = 1] = "UNVERIFIED";
})(RM || (RM = {}));
var NM;
(function(e) {
    e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.GROUP = 10] = "GROUP", e[e.MESSAGE = 11] = "MESSAGE", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.ENUM = 14] = "ENUM", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64";
})(NM || (NM = {}));
var PM;
(function(e) {
    e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REPEATED = 3] = "REPEATED", e[e.REQUIRED = 2] = "REQUIRED";
})(PM || (PM = {}));
var _M;
(function(e) {
    e[e.SPEED = 1] = "SPEED", e[e.CODE_SIZE = 2] = "CODE_SIZE", e[e.LITE_RUNTIME = 3] = "LITE_RUNTIME";
})(_M || (_M = {}));
var MM;
(function(e) {
    e[e.STRING = 0] = "STRING", e[e.CORD = 1] = "CORD", e[e.STRING_PIECE = 2] = "STRING_PIECE";
})(MM || (MM = {}));
var OM;
(function(e) {
    e[e.JS_NORMAL = 0] = "JS_NORMAL", e[e.JS_STRING = 1] = "JS_STRING", e[e.JS_NUMBER = 2] = "JS_NUMBER";
})(OM || (OM = {}));
var DM;
(function(e) {
    e[e.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e[e.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e[e.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
})(DM || (DM = {}));
var LM;
(function(e) {
    e[e.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e[e.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e[e.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e[e.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e[e.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e[e.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e[e.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e[e.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e[e.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e[e.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
})(LM || (LM = {}));
var FM;
(function(e) {
    e[e.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e[e.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e[e.IDEMPOTENT = 2] = "IDEMPOTENT";
})(FM || (FM = {}));
var VM;
(function(e) {
    e[e.DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0] = "DEFAULT_SYMBOL_VISIBILITY_UNKNOWN", e[e.EXPORT_ALL = 1] = "EXPORT_ALL", e[e.EXPORT_TOP_LEVEL = 2] = "EXPORT_TOP_LEVEL", e[e.LOCAL_ALL = 3] = "LOCAL_ALL", e[e.STRICT = 4] = "STRICT";
})(VM || (VM = {}));
var BM;
(function(e) {
    e[e.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e[e.EXPLICIT = 1] = "EXPLICIT", e[e.IMPLICIT = 2] = "IMPLICIT", e[e.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
})(BM || (BM = {}));
var UM;
(function(e) {
    e[e.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e[e.OPEN = 1] = "OPEN", e[e.CLOSED = 2] = "CLOSED";
})(UM || (UM = {}));
var jM;
(function(e) {
    e[e.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e[e.PACKED = 1] = "PACKED", e[e.EXPANDED = 2] = "EXPANDED";
})(jM || (jM = {}));
var zM;
(function(e) {
    e[e.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e[e.VERIFY = 2] = "VERIFY", e[e.NONE = 3] = "NONE";
})(zM || (zM = {}));
var HM;
(function(e) {
    e[e.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e[e.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e[e.DELIMITED = 2] = "DELIMITED";
})(HM || (HM = {}));
var GM;
(function(e) {
    e[e.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e[e.ALLOW = 1] = "ALLOW", e[e.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
})(GM || (GM = {}));
var $M;
(function(e) {
    e[e.ENFORCE_NAMING_STYLE_UNKNOWN = 0] = "ENFORCE_NAMING_STYLE_UNKNOWN", e[e.STYLE2024 = 1] = "STYLE2024", e[e.STYLE_LEGACY = 2] = "STYLE_LEGACY";
})($M || ($M = {}));
var KM;
(function(e) {
    e[e.NONE = 0] = "NONE", e[e.SET = 1] = "SET", e[e.ALIAS = 2] = "ALIAS";
})(KM || (KM = {}));
var WM;
(function(e) {
    e[e.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e[e.EDITION_LEGACY = 900] = "EDITION_LEGACY", e[e.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e[e.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e[e.EDITION_2023 = 1e3] = "EDITION_2023", e[e.EDITION_2024 = 1001] = "EDITION_2024", e[e.EDITION_UNSTABLE = 9999] = "EDITION_UNSTABLE", e[e.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e[e.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e[e.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e[e.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e[e.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e[e.EDITION_MAX = 2147483647] = "EDITION_MAX";
})(WM || (WM = {}));
var YM;
(function(e) {
    e[e.VISIBILITY_UNSET = 0] = "VISIBILITY_UNSET", e[e.VISIBILITY_LOCAL = 1] = "VISIBILITY_LOCAL", e[e.VISIBILITY_EXPORT = 2] = "VISIBILITY_EXPORT";
})(YM || (YM = {}));
function Dv(e) {
    return Object.assign(Object.assign({
        readUnknownFields: !0,
        recursionLimit: 100
    }, e), {
        depth: 0
    });
}
a(Dv, "makeReadContext");
function $a(e, t, r) {
    const n = At(e);
    return Jm(e).read(n, new pv(t), Dv(r), t.byteLength), n;
}
a($a, "fromBinary");
var XM = new WeakMap;
function Jm(e) {
    let t = XM.get(e);
    return t === void 0 && (t = ZM(e)), t;
}
a(Jm, "compiledReader");
function ZM(e) {
    const t = String(e), r = new Map, n = {
        read: qM(t, r),
        readGroup: QM(t, r)
    };
    XM.set(e, n);
    for (const o of e.fields)r.set(o.number, Lv(o));
    return n;
}
a(ZM, "compileMessage");
function qM(e, t) {
    return (r, n, o, i)=>{
        var s;
        if (++o.depth > o.recursionLimit) throw new Error(`cannot decode ${e} from binary: maximum recursion depth of ${o.recursionLimit} reached`);
        const c = n.pos + i, l = (s = r.$unknown) !== null && s !== void 0 ? s : [];
        for(; n.pos < c;){
            const [m, u] = n.tag(), d = t.get(m);
            if (d === void 0) {
                const p = n.skip(u, m, o.recursionLimit - o.depth);
                o.readUnknownFields && l.push({
                    no: m,
                    wireType: u,
                    data: p
                });
                continue;
            }
            d(r, n, o, u);
        }
        l.length > 0 && (r.$unknown = l), o.depth--;
    };
}
a(qM, "compileMessageReader");
function QM(e, t) {
    return (r, n, o, i)=>{
        var s;
        if (++o.depth > o.recursionLimit) throw new Error(`cannot decode ${e} from binary: maximum recursion depth of ${o.recursionLimit} reached`);
        let c, l;
        const m = (s = r.$unknown) !== null && s !== void 0 ? s : [];
        for(; n.pos < n.len && ([c, l] = n.tag(), l != gt.EndGroup);){
            const u = t.get(c);
            if (u === void 0) {
                const d = n.skip(l, c, o.recursionLimit - o.depth);
                o.readUnknownFields && m.push({
                    no: c,
                    wireType: l,
                    data: d
                });
                continue;
            }
            u(r, n, o, l);
        }
        if (l != gt.EndGroup || c !== i) throw new Error("invalid end group tag");
        m.length > 0 && (r.$unknown = m), o.depth--;
    };
}
a(QM, "compileGroupReader");
function JM(e, t, r, n, o) {
    Lv(r)(e[ar], t, o, n);
}
a(JM, "readField");
function Lv(e) {
    switch(e.fieldKind){
        case "scalar":
            return e3(e);
        case "enum":
            return t3(e);
        case "message":
            return r3(e);
        case "list":
            return n3(e);
        case "map":
            return o3(e);
    }
}
a(Lv, "compileFieldReader");
function e3(e) {
    const t = bs(e.scalar, e.utf8Validation, e.longAsString), r = e.localName;
    if (e.oneof) {
        const n = e.oneof.localName;
        return (o, i)=>{
            o[n] = {
                case: r,
                value: t(i)
            };
        };
    }
    return (n, o)=>{
        n[r] = t(o);
    };
}
a(e3, "compileScalarFieldReader");
function t3(e) {
    var t;
    const r = e.localName, n = (t = e.oneof) === null || t === void 0 ? void 0 : t.localName;
    if (e.enum.open) return n !== void 0 ? (s, c)=>{
        s[n] = {
            case: r,
            value: c.int32()
        };
    } : (s, c)=>{
        s[r] = c.int32();
    };
    const o = e.enum.values, i = e.number;
    return (s, c, l, m)=>{
        var u;
        const d = c.int32();
        if (o.some((p)=>p.number === d)) n !== void 0 ? s[n] = {
            case: r,
            value: d
        } : s[r] = d;
        else if (l.readUnknownFields) {
            const p = [];
            p_(d, p);
            const h = (u = s.$unknown) !== null && u !== void 0 ? u : [];
            h.push({
                no: i,
                wireType: m,
                data: new Uint8Array(p)
            }), s.$unknown = h;
        }
    };
}
a(t3, "compileEnumFieldReader");
function r3(e) {
    const t = e.localName, { toMessage: r, toLocal: n } = Fr(e), o = Fv(e);
    if (e.oneof) {
        const i = e.oneof.localName;
        return (s, c, l)=>{
            const m = s[i], u = r(m.case === t ? m.value : void 0);
            o(u, c, l), s[i] = {
                case: t,
                value: n(u)
            };
        };
    }
    return (i, s, c)=>{
        const l = r(i[t]);
        o(l, s, c), i[t] = n(l);
    };
}
a(r3, "compileMessageFieldReader");
function Fv(e) {
    const t = Jm(e.message);
    if (e.delimitedEncoding) {
        const r = e.number;
        return (n, o, i)=>t.readGroup(n, o, i, r);
    }
    return (r, n, o)=>t.read(r, n, o, n.uint32());
}
a(Fv, "compileChildReader");
function n3(e) {
    const t = e.localName;
    if (e.listKind == "message") {
        const { toMessage: s, toLocal: c } = Fr(e), l = Fv(e);
        return (m, u, d)=>{
            const p = s(void 0);
            l(p, u, d), m[t].push(c(p));
        };
    }
    const r = e.listKind == "enum" ? N.INT32 : e.scalar, n = e.listKind == "scalar" ? e.longAsString : !1, o = bs(r, e.utf8Validation, n), i = r != N.STRING && r != N.BYTES;
    return (s, c, l, m)=>{
        const u = s[t];
        if (m == gt.LengthDelimited && i) {
            const d = c.uint32() + c.pos;
            for(; c.pos < d;)u.push(o(c));
        } else u.push(o(c));
    };
}
a(n3, "compileListFieldReader");
function o3(e) {
    const t = e.localName, r = bs(e.mapKey, e.utf8Validation, !1), n = on(e.mapKey, !1);
    let o, i;
    switch(e.mapKind){
        case "scalar":
            {
                const s = e.scalar, c = bs(s, e.utf8Validation, !1);
                if (o = a((l)=>c(l), "readValue"), s == N.BYTES) i = a(()=>new Uint8Array(0), "valueDefault");
                else {
                    const l = on(s, !1);
                    i = a(()=>l, "valueDefault");
                }
                break;
            }
        case "enum":
            {
                const s = e.enum.values[0].number;
                o = a((c)=>c.int32(), "readValue"), i = a(()=>s, "valueDefault");
                break;
            }
        case "message":
            {
                const { toMessage: s, toLocal: c } = Fr(e), l = Jm(e.message).read;
                o = a((m, u)=>{
                    const d = s(void 0);
                    return l(d, m, u, m.uint32()), c(d);
                }, "readValue"), i = a(()=>c(s(void 0)), "valueDefault");
                break;
            }
    }
    return (s, c, l)=>{
        const m = s[t];
        let u, d;
        const p = c.uint32(), h = c.pos + p;
        for(; c.pos < h;){
            const [f] = c.tag();
            switch(f){
                case 1:
                    u = r(c);
                    break;
                case 2:
                    d = o(c, l);
                    break;
            }
        }
        u === void 0 && (u = n), d === void 0 && (d = i()), m[u] = d;
    };
}
a(o3, "compileMapFieldReader");
function bs(e, t, r) {
    switch(e){
        case N.STRING:
            return (n)=>n.string(t);
        case N.BOOL:
            return (n)=>n.bool();
        case N.DOUBLE:
            return (n)=>n.double();
        case N.FLOAT:
            return (n)=>n.float();
        case N.INT32:
            return (n)=>n.int32();
        case N.INT64:
            return r ? (n)=>String(n.int64()) : (n)=>n.int64();
        case N.UINT64:
            return r ? (n)=>String(n.uint64()) : (n)=>n.uint64();
        case N.FIXED64:
            return r ? (n)=>String(n.fixed64()) : (n)=>n.fixed64();
        case N.BYTES:
            return (n)=>n.bytes();
        case N.FIXED32:
            return (n)=>n.fixed32();
        case N.SFIXED32:
            return (n)=>n.sfixed32();
        case N.SFIXED64:
            return r ? (n)=>String(n.sfixed64()) : (n)=>n.sfixed64();
        case N.SINT64:
            return r ? (n)=>String(n.sint64()) : (n)=>n.sint64();
        case N.UINT32:
            return (n)=>n.uint32();
        case N.SINT32:
            return (n)=>n.sint32();
    }
}
a(bs, "compileScalarReader");
function qn(e, t) {
    var r;
    const n = $a(HH, Gm(e));
    return n.messageType.forEach(Km), n.dependency = (r = t?.map((i)=>i.proto.name)) !== null && r !== void 0 ? r : [], Cv(n, (i)=>t?.find((s)=>s.proto.name === i)).getFile(n.name);
}
a(qn, "fileDesc");
var GH = qn("Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM");
function a3(e) {
    return Number(e.seconds) * 1e3 + Math.round(e.nanos / 1e6);
}
a(a3, "timestampMs");
var i3 = qn("Chlnb29nbGUvcHJvdG9idWYvYW55LnByb3RvEg9nb29nbGUucHJvdG9idWYiJgoDQW55EhAKCHR5cGVfdXJsGAEgASgJEg0KBXZhbHVlGAIgASgMQnYKE2NvbS5nb29nbGUucHJvdG9idWZCCEFueVByb3RvUAFaLGdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2FueXBiogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"), $H = sn(i3, 0), KH = 2, WH = 3, s3 = {
    writeUnknownFields: !0
};
function c3(e) {
    return e ? Object.assign(Object.assign({}, s3), e) : s3;
}
a(c3, "makeWriteOptions");
function Vv(e, t, r) {
    const n = new j_;
    return eu(e)(n, c3(r), t), n.finish();
}
a(Vv, "toBinary");
var l3 = new WeakMap;
function eu(e) {
    let t = l3.get(e);
    return t === void 0 && (t = m3(e)), t;
}
a(eu, "compiledWriter");
function m3(e) {
    const t = e.typeName, r = e.fields.concat().sort((s, c)=>s.number - c.number), n = r[0], o = [], i = a((s, c, l)=>{
        if (l.$typeName !== t && n !== void 0) throw new ct(n, `cannot use ${n} with message ${l.$typeName}`, "ForeignFieldError");
        for(let u = 0; u < o.length; u++)o[u](s, c, l);
        const m = l.$unknown;
        if (m !== void 0 && c.writeUnknownFields) for(let u = 0; u < m.length; u++){
            const { no: d, wireType: p, data: h } = m[u];
            s.tag(d, p).raw(h);
        }
    }, "compiled");
    l3.set(e, i);
    for (const s of r)o.push(Bv(s));
    return i;
}
a(m3, "compileMessage");
function Bv(e) {
    switch(e.fieldKind){
        case "message":
        case "scalar":
        case "enum":
            return u3(e);
        case "list":
            return p3(e);
        case "map":
            return f3(e);
    }
}
a(Bv, "compileField");
function u3(e) {
    const t = d3(e), r = e.localName;
    if (e.oneof) {
        const n = e.oneof.localName;
        return (o, i, s)=>{
            const c = s[n];
            c.case === r && t(o, i, c.value);
        };
    }
    if (e.presence != KH) {
        const n = e.presence == WH ? `cannot encode ${e} to binary: required field not set` : void 0;
        return (o, i, s)=>{
            const c = s[r];
            if (c !== void 0 && Object.prototype.hasOwnProperty.call(s, r)) t(o, i, c);
            else if (n !== void 0) throw new Error(n);
        };
    }
    if (e.fieldKind == "enum") {
        const n = e.enum.values[0].number;
        return (o, i, s)=>{
            const c = s[r];
            c !== n && t(o, i, c);
        };
    }
    switch(e.scalar){
        case N.BOOL:
            return (n, o, i)=>{
                const s = i[r];
                s !== !1 && t(n, o, s);
            };
        case N.STRING:
            return (n, o, i)=>{
                const s = i[r];
                s !== "" && t(n, o, s);
            };
        case N.BYTES:
            return (n, o, i)=>{
                const s = i[r];
                (!(s instanceof Uint8Array) || s.byteLength > 0) && t(n, o, s);
            };
        case N.DOUBLE:
        case N.FLOAT:
            return (n, o, i)=>{
                const s = i[r];
                Object.is(s, 0) || t(n, o, s);
            };
        default:
            return (n, o, i)=>{
                const s = i[r];
                s != 0 && t(n, o, s);
            };
    }
}
a(u3, "compileSingularField");
function d3(e) {
    switch(e.fieldKind){
        case "message":
            {
                const { toMessage: t } = Fr(e), r = Uv(e);
                return (n, o, i)=>{
                    r(n, o, t(i));
                };
            }
        case "scalar":
        case "enum":
            {
                const t = e.fieldKind == "enum" ? N.INT32 : e.scalar, r = e.number, n = ws(t), o = ys(t, e.parent.typeName, e.name);
                return (i, s, c)=>{
                    i.tag(r, n), o(i, c);
                };
            }
    }
}
a(d3, "compileSingularValue");
function p3(e) {
    const t = e.localName, r = e.number;
    switch(e.listKind){
        case "message":
            {
                const { toMessage: n } = Fr(e), o = Uv(e);
                return (i, s, c)=>{
                    const l = c[t];
                    for(let m = 0; m < l.length; m++)o(i, s, n(l[m]));
                };
            }
        case "scalar":
        case "enum":
            {
                const n = e.listKind == "enum" ? N.INT32 : e.scalar, o = ys(n, e.parent.typeName, e.name);
                if (e.packed) return (s, c, l)=>{
                    const m = l[t];
                    if (m.length != 0) {
                        s.tag(r, gt.LengthDelimited).fork();
                        for(let u = 0; u < m.length; u++)o(s, m[u]);
                        s.join();
                    }
                };
                const i = ws(n);
                return (s, c, l)=>{
                    const m = l[t];
                    for(let u = 0; u < m.length; u++)s.tag(r, i), o(s, m[u]);
                };
            }
    }
}
a(p3, "compileListField");
function f3(e) {
    const t = e.localName, r = e.number, n = h3(e);
    if (e.mapKind == "message") {
        const { toMessage: c } = Fr(e), l = eu(e.message);
        return (m, u, d)=>{
            const p = d[t], h = Object.keys(p);
            for(let f = 0; f < h.length; f++){
                const v = h[f];
                m.tag(r, gt.LengthDelimited).fork(), n(m, v), m.tag(2, gt.LengthDelimited).fork(), l(m, u, c(p[v])), m.join(), m.join();
            }
        };
    }
    const o = e.mapKind == "enum" ? N.INT32 : e.scalar, i = ws(o), s = ys(o, e.parent.typeName, e.name);
    return (c, l, m)=>{
        const u = m[t], d = Object.keys(u);
        for(let p = 0; p < d.length; p++){
            const h = d[p];
            c.tag(r, gt.LengthDelimited).fork(), n(c, h), c.tag(2, i), s(c, u[h]), c.join();
        }
    };
}
a(f3, "compileMapField");
function h3(e) {
    const t = ws(e.mapKey), r = ys(e.mapKey, e.parent.typeName, e.name), n = x3(e.mapKey);
    return (o, i)=>{
        o.tag(1, t), r(o, n(i));
    };
}
a(h3, "compileMapKey");
function x3(e) {
    switch(e){
        case N.STRING:
            return (t)=>t;
        case N.BOOL:
            return (t)=>t === "true" ? !0 : t === "false" ? !1 : t;
        case N.UINT64:
        case N.FIXED64:
            return (t)=>{
                try {
                    return st.uParse(t);
                } catch  {
                    return t;
                }
            };
        case N.INT64:
        case N.SFIXED64:
        case N.SINT64:
            return (t)=>{
                try {
                    return st.parse(t);
                } catch  {
                    return t;
                }
            };
        default:
            return (t)=>{
                const r = Number.parseInt(t);
                return Number.isFinite(r) ? r : t;
            };
    }
}
a(x3, "compileMapKeyConverter");
function ys(e, t, r) {
    const n = g3(e);
    return (o, i)=>{
        try {
            n(o, i);
        } catch (s) {
            throw s instanceof Error ? new Error(`cannot encode field ${t}.${r} to binary: ${s.message}`) : s;
        }
    };
}
a(ys, "compileScalarValue");
function g3(e) {
    switch(e){
        case N.STRING:
            return (t, r)=>t.string(r);
        case N.BOOL:
            return (t, r)=>t.bool(r);
        case N.DOUBLE:
            return (t, r)=>t.double(r);
        case N.FLOAT:
            return (t, r)=>t.float(r);
        case N.INT32:
            return (t, r)=>t.int32(r);
        case N.INT64:
            return (t, r)=>t.int64(r);
        case N.UINT64:
            return (t, r)=>t.uint64(r);
        case N.FIXED64:
            return (t, r)=>t.fixed64(r);
        case N.BYTES:
            return (t, r)=>t.bytes(r);
        case N.FIXED32:
            return (t, r)=>t.fixed32(r);
        case N.SFIXED32:
            return (t, r)=>t.sfixed32(r);
        case N.SFIXED64:
            return (t, r)=>t.sfixed64(r);
        case N.SINT64:
            return (t, r)=>t.sint64(r);
        case N.UINT32:
            return (t, r)=>t.uint32(r);
        case N.SINT32:
            return (t, r)=>t.sint32(r);
    }
}
a(g3, "compileScalarWrite");
function v3(e, t, r, n) {
    Bv(n)(e, t, r[ar]);
}
a(v3, "writeField");
function Uv(e) {
    const t = e.number, r = eu(e.message);
    return e.delimitedEncoding ? (n, o, i)=>{
        n.tag(t, gt.StartGroup), r(n, o, i), n.tag(t, gt.EndGroup);
    } : (n, o, i)=>{
        n.tag(t, gt.LengthDelimited).fork(), r(n, o, i), n.join();
    };
}
a(Uv, "compileChildWriter");
function ws(e) {
    switch(e){
        case N.BYTES:
        case N.STRING:
            return gt.LengthDelimited;
        case N.DOUBLE:
        case N.FIXED64:
        case N.SFIXED64:
            return gt.Bit64;
        case N.FIXED32:
        case N.SFIXED32:
        case N.FLOAT:
            return gt.Bit32;
        default:
            return gt.Varint;
    }
}
a(ws, "writeTypeOfScalar");
function b3(e, t, r) {
    let n = !1;
    return r || (r = At($H), n = !0), r.value = Vv(e, t), r.typeUrl = S3(t.$typeName), n ? r : void 0;
}
a(b3, "anyPack");
function y3(e, t) {
    if (e.typeUrl === "") return !1;
    const r = typeof t == "string" ? t : t.typeName, n = jv(e.typeUrl);
    return r === n;
}
a(y3, "anyIs");
function w3(e, t) {
    if (e.typeUrl === "") return;
    const r = t.kind == "message" ? t : t.getMessage(jv(e.typeUrl));
    if (!(!r || !y3(e, r))) return $a(r, e.value);
}
a(w3, "anyUnpack");
function S3(e) {
    return `type.googleapis.com/${e}`;
}
a(S3, "typeNameToUrl");
function jv(e) {
    const t = e.lastIndexOf("/"), r = t >= 0 ? e.substring(t + 1) : e;
    if (!r.length) throw new Error(`invalid type url: ${e}`);
    return r;
}
a(jv, "typeUrlToName");
var YH = qn("Chtnb29nbGUvcHJvdG9idWYvZW1wdHkucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIHCgVFbXB0eUJ9ChNjb20uZ29vZ2xlLnByb3RvYnVmQgpFbXB0eVByb3RvUAFaLmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2VtcHR5cGL4AQGiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw"), zv = qn("Chxnb29nbGUvcHJvdG9idWYvc3RydWN0LnByb3RvEg9nb29nbGUucHJvdG9idWYihAEKBlN0cnVjdBIzCgZmaWVsZHMYASADKAsyIy5nb29nbGUucHJvdG9idWYuU3RydWN0LkZpZWxkc0VudHJ5GkUKC0ZpZWxkc0VudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAEi6gEKBVZhbHVlEjAKCm51bGxfdmFsdWUYASABKA4yGi5nb29nbGUucHJvdG9idWYuTnVsbFZhbHVlSAASFgoMbnVtYmVyX3ZhbHVlGAIgASgBSAASFgoMc3RyaW5nX3ZhbHVlGAMgASgJSAASFAoKYm9vbF92YWx1ZRgEIAEoCEgAEi8KDHN0cnVjdF92YWx1ZRgFIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RIABIwCgpsaXN0X3ZhbHVlGAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLkxpc3RWYWx1ZUgAQgYKBGtpbmQiMwoJTGlzdFZhbHVlEiYKBnZhbHVlcxgBIAMoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZSobCglOdWxsVmFsdWUSDgoKTlVMTF9WQUxVRRAAQn8KE2NvbS5nb29nbGUucHJvdG9idWZCC1N0cnVjdFByb3RvUAFaL2dvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3N0cnVjdHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"), XH = sn(zv, 0), E3 = sn(zv, 1), ZH = sn(zv, 2), Hv;
(function(e) {
    e[e.NULL_VALUE = 0] = "NULL_VALUE";
})(Hv || (Hv = {}));
function k3(e, t, r) {
    Gv(t, e);
    const n = C3(e.$unknown, t), [o, i, s] = Ss(t), c = Dv(r);
    for (const l of n)JM(o, new pv(l.data), i, l.wireType, c);
    return s();
}
a(k3, "getExtension");
function T3(e, t, r) {
    var n;
    Gv(t, e);
    const o = ((n = e.$unknown) !== null && n !== void 0 ? n : []).filter((m)=>m.no !== t.number), [i, s] = Ss(t, r), c = new j_;
    v3(c, {
        writeUnknownFields: !0
    }, i, s);
    const l = new pv(c.finish());
    for(; l.pos < l.len;){
        const [m, u] = l.tag(), d = l.skip(u, m);
        o.push({
            no: m,
            wireType: u,
            data: d
        });
    }
    e.$unknown = o;
}
a(T3, "setExtension");
function C3(e, t) {
    if (e === void 0) return [];
    if (t.fieldKind === "enum" || t.fieldKind === "scalar") {
        for(let r = e.length - 1; r >= 0; --r)if (e[r].no == t.number) return [
            e[r]
        ];
        return [];
    }
    return e.filter((r)=>r.no === t.number);
}
a(C3, "filterUnknownFields");
function Ss(e, t) {
    const r = e.typeName, n = Object.assign(Object.assign({}, e), {
        kind: "field",
        parent: e.extendee,
        localName: r
    }), o = Object.assign(Object.assign({}, e.extendee), {
        fields: [
            n
        ],
        members: [
            n
        ],
        oneofs: []
    }), i = At(o, t !== void 0 ? {
        [r]: t
    } : void 0);
    return [
        Y_(o, i),
        n,
        ()=>{
            const s = i[r];
            if (s === void 0) {
                const c = e.message;
                return Xn(c) ? on(c.fields[0].scalar, c.fields[0].longAsString) : At(c);
            }
            return s;
        }
    ];
}
a(Ss, "createExtensionContainer");
function Gv(e, t) {
    if (e.extendee.typeName != t.$typeName) throw new Error(`extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
a(Gv, "assertExtendee");
var I3 = Date.parse("0001-01-01T00:00:00Z"), A3 = Date.parse("9999-12-31T23:59:59Z"), R3 = -315576e6, N3 = 315576e6, qH = 3, QH = 2, P3 = {
    alwaysEmitImplicit: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1
};
function _3(e) {
    return e ? Object.assign(Object.assign({}, P3), e) : P3;
}
a(_3, "makeWriteOptions");
function M3(e, t, r) {
    return Es(e)(_3(r), t);
}
a(M3, "toJson");
function O3(e, t, r) {
    var n;
    const o = M3(e, t, r);
    return JSON.stringify(o, null, (n = r?.prettySpaces) !== null && n !== void 0 ? n : 0);
}
a(O3, "toJsonString");
var $v = new WeakMap;
function Es(e) {
    let t = $v.get(e);
    return t === void 0 && (t = D3(e)), t;
}
a(Es, "compiledWriter");
function D3(e) {
    const t = e.typeName, r = L3(e);
    if (r !== void 0) {
        const c = e.fields[0], l = a((m, u)=>{
            if (u.$typeName !== t && c !== void 0) throw new ct(c, `cannot use ${c} with message ${u.$typeName}`, "ForeignFieldError");
            return r(m, u);
        }, "compiledWriter");
        return $v.set(e, l), l;
    }
    const n = e.fields.concat().sort((c, l)=>c.number - l.number), o = n[0], i = [], s = a((c, l)=>{
        if (l.$typeName !== t && o !== void 0) throw new ct(o, `cannot use ${o} with message ${l.$typeName}`, "ForeignFieldError");
        const m = {};
        for(let u = 0; u < i.length; u++)i[u](c, l, m);
        return c.registry && z3(m, c, c.registry, l, e), m;
    }, "compiledWriter");
    $v.set(e, s);
    for (const c of n)i.push(F3(c));
    return s;
}
a(D3, "compileMessage");
function L3(e) {
    if (e.typeName.startsWith("google.protobuf.")) switch(e.typeName){
        case "google.protobuf.Any":
            return (t, r)=>H3(r, t);
        case "google.protobuf.Timestamp":
            return (t, r)=>K3(r);
        case "google.protobuf.Duration":
            return (t, r)=>G3(r);
        case "google.protobuf.FieldMask":
            return (t, r)=>$3(r);
        case "google.protobuf.Struct":
            return (t, r)=>Zv(r);
        case "google.protobuf.Value":
            return (t, r)=>nu(r);
        case "google.protobuf.ListValue":
            return (t, r)=>qv(r);
        default:
            if (Xn(e)) {
                const t = e.fields[0], r = t.localName, n = on(t.scalar, !1), o = ks(t);
                return (i, s)=>{
                    const c = s[r];
                    return o(i, c === void 0 ? n : c);
                };
            }
            return;
    }
}
a(L3, "compileWkt");
function F3(e) {
    switch(e.fieldKind){
        case "scalar":
        case "enum":
        case "message":
            return V3(e);
        case "list":
        case "map":
            {
                const t = e.fieldKind == "list" ? Wv(e) : Yv(e), r = e.name, n = e.jsonName, o = e.localName;
                return (i, s, c)=>{
                    const l = t(i, s[o]);
                    l !== void 0 && (c[i.useProtoFieldName ? r : n] = l);
                };
            }
    }
}
a(F3, "compileField");
function V3(e) {
    const t = Kv(e), r = e.name, n = e.jsonName, o = e.localName;
    if (e.oneof) {
        const i = e.oneof.localName;
        return (s, c, l)=>{
            const m = c[i];
            m.case === o && (l[s.useProtoFieldName ? r : n] = t(s, m.value));
        };
    }
    if (e.presence != QH) {
        const i = e.presence == qH ? `cannot encode ${e} to JSON: required field not set` : void 0;
        return (s, c, l)=>{
            const m = c[o];
            if (m !== void 0 && Object.prototype.hasOwnProperty.call(c, o)) l[s.useProtoFieldName ? r : n] = t(s, m);
            else if (i !== void 0) throw new Error(i);
        };
    }
    if (e.fieldKind == "enum") {
        const i = e.enum.values[0].number;
        return (s, c, l)=>{
            const m = c[o];
            (m !== i || s.alwaysEmitImplicit) && (l[s.useProtoFieldName ? r : n] = t(s, m));
        };
    }
    switch(e.scalar){
        case N.BOOL:
            return (i, s, c)=>{
                const l = s[o];
                (l !== !1 || i.alwaysEmitImplicit) && (c[i.useProtoFieldName ? r : n] = t(i, l));
            };
        case N.STRING:
            return (i, s, c)=>{
                const l = s[o];
                (l !== "" || i.alwaysEmitImplicit) && (c[i.useProtoFieldName ? r : n] = t(i, l));
            };
        case N.BYTES:
            return (i, s, c)=>{
                const l = s[o];
                (!(l instanceof Uint8Array) || l.byteLength > 0 || i.alwaysEmitImplicit) && (c[i.useProtoFieldName ? r : n] = t(i, l));
            };
        case N.DOUBLE:
        case N.FLOAT:
            return (i, s, c)=>{
                const l = s[o];
                (!Object.is(l, 0) || i.alwaysEmitImplicit) && (c[i.useProtoFieldName ? r : n] = t(i, l));
            };
        default:
            return (i, s, c)=>{
                const l = s[o];
                (l != 0 || i.alwaysEmitImplicit) && (c[i.useProtoFieldName ? r : n] = t(i, l));
            };
    }
}
a(V3, "compileSingularField");
function B3(e) {
    switch(e.fieldKind){
        case "scalar":
        case "enum":
        case "message":
            return Kv(e);
        case "list":
            return Wv(e);
        case "map":
            return Yv(e);
    }
}
a(B3, "compileFieldValue");
function Kv(e) {
    switch(e.fieldKind){
        case "scalar":
            return ks(e);
        case "enum":
            return ru(e);
        case "message":
            return tu(e);
    }
}
a(Kv, "compileSingularValue");
function tu(e) {
    const { toMessage: t } = Fr(e), r = Es(e.message);
    return (n, o)=>r(n, t(o));
}
a(tu, "compileMessageValue");
function Wv(e) {
    const t = U3(e);
    return (r, n)=>{
        const o = n;
        if (o.length == 0 && !r.alwaysEmitImplicit) return;
        const i = [];
        for(let s = 0; s < o.length; s++)i.push(t(r, o[s]));
        return i;
    };
}
a(Wv, "compileListValue");
function U3(e) {
    switch(e.listKind){
        case "scalar":
            return ks(e);
        case "enum":
            return ru(e);
        case "message":
            return tu(e);
    }
}
a(U3, "compileListItemValue");
function Yv(e) {
    const t = j3(e);
    return (r, n)=>{
        const o = n, i = Object.keys(o);
        if (i.length == 0 && !r.alwaysEmitImplicit) return;
        const s = {};
        for(let c = 0; c < i.length; c++){
            const l = i[c];
            s[l] = t(r, o[l]);
        }
        return s;
    };
}
a(Yv, "compileMapValue");
function j3(e) {
    switch(e.mapKind){
        case "scalar":
            return ks(e);
        case "enum":
            return ru(e);
        case "message":
            return tu(e);
    }
}
a(j3, "compileMapEntryValue");
function ru(e) {
    const t = e.enum;
    return t.typeName == "google.protobuf.NullValue" ? (r, n)=>{
        if (typeof n != "number") throw Xv(t, n);
        return null;
    } : (r, n)=>{
        var o, i;
        if (typeof n != "number") throw Xv(t, n);
        return r.enumAsInteger ? n : (i = (o = t.value[n]) === null || o === void 0 ? void 0 : o.name) !== null && i !== void 0 ? i : n;
    };
}
a(ru, "compileEnumValue");
function Xv(e, t) {
    return new Error(`cannot encode ${e} to JSON: expected number, got ${St(t)}`);
}
a(Xv, "errorEnumValue");
function ks(e) {
    switch(e.scalar){
        case N.INT32:
        case N.SFIXED32:
        case N.SINT32:
        case N.FIXED32:
        case N.UINT32:
            return (t, r)=>{
                if (typeof r != "number") throw Ro(e, r);
                return r;
            };
        case N.FLOAT:
        case N.DOUBLE:
            return (t, r)=>{
                if (typeof r != "number") throw Ro(e, r);
                return Number.isNaN(r) ? "NaN" : r === Number.POSITIVE_INFINITY ? "Infinity" : r === Number.NEGATIVE_INFINITY ? "-Infinity" : r;
            };
        case N.STRING:
            return (t, r)=>{
                if (typeof r != "string") throw Ro(e, r);
                return r;
            };
        case N.BOOL:
            return (t, r)=>{
                if (typeof r != "boolean") throw Ro(e, r);
                return r;
            };
        case N.UINT64:
        case N.FIXED64:
        case N.INT64:
        case N.SFIXED64:
        case N.SINT64:
            return (t, r)=>{
                if (typeof r == "bigint" || typeof r == "string" || typeof r == "number" && Number.isInteger(r)) return r.toString();
                throw Ro(e, r);
            };
        case N.BYTES:
            return (t, r)=>{
                if (r instanceof Uint8Array) return tM(r);
                throw Ro(e, r);
            };
    }
}
a(ks, "compileScalarValue");
function Ro(e, t) {
    var r;
    return new Error(`cannot encode ${e} to JSON: ${(r = hv(e, t)) === null || r === void 0 ? void 0 : r.message}`);
}
a(Ro, "errorScalarValue");
function z3(e, t, r, n, o) {
    const i = n.$unknown;
    if (i === void 0) return;
    const s = new Set;
    for(let c = 0; c < i.length; c++){
        const { no: l } = i[c];
        if (!s.has(l)) {
            s.add(l);
            const m = r.getExtensionFor(o, l);
            if (!m) continue;
            const u = k3(n, m), [d, p] = Ss(m, u), h = d[ar], f = B3(p)(t, h[p.localName]);
            f !== void 0 && (e[m.jsonName] = f);
        }
    }
}
a(z3, "writeExtensions");
function H3(e, t) {
    if (e.typeUrl === "") return {};
    const { registry: r } = t;
    let n, o;
    if (r && (n = w3(e, r), n && (o = r.getMessage(n.$typeName))), !o || !n) throw new Error(`cannot encode message ${e.$typeName} to JSON: "${e.typeUrl}" is not in the type registry`);
    const i = sv(o) ? {
        value: Es(o)(t, n)
    } : Es(o)(t, n);
    return i["@type"] = e.typeUrl, i;
}
a(H3, "anyToJson");
function G3(e) {
    const t = Number(e.seconds), r = e.nanos;
    if (t > N3 || t < R3) throw new Error(`cannot encode message ${e.$typeName} to JSON: value out of range`);
    if (t > 0 && r < 0 || t < 0 && r > 0) throw new Error(`cannot encode message ${e.$typeName} to JSON: nanos sign must match seconds sign`);
    let n = e.seconds.toString();
    if (r !== 0) {
        let o = Math.abs(r).toString();
        o = "0".repeat(9 - o.length) + o, o.substring(3) === "000000" ? o = o.substring(0, 3) : o.substring(6) === "000" && (o = o.substring(0, 6)), n += "." + o, r < 0 && t == 0 && (n = "-" + n);
    }
    return n + "s";
}
a(G3, "durationToJson");
function $3(e) {
    return e.paths.map((t)=>{
        if (Tv(Ao(t)) !== t) throw new Error(`cannot encode message ${e.$typeName} to JSON: lowerCamelCase of path name "${t}" is irreversible`);
        return Ao(t);
    }).join(",");
}
a($3, "fieldMaskToJson");
function Zv(e) {
    const t = {}, r = Object.keys(e.fields);
    for(let n = 0; n < r.length; n++){
        const o = r[n];
        t[o] = nu(e.fields[o]);
    }
    return t;
}
a(Zv, "structToJson");
function nu(e) {
    switch(e.kind.case){
        case "nullValue":
            return null;
        case "numberValue":
            if (!Number.isFinite(e.kind.value)) throw new Error(`${e.$typeName} cannot be NaN or Infinity`);
            return e.kind.value;
        case "boolValue":
            return e.kind.value;
        case "stringValue":
            return e.kind.value;
        case "structValue":
            return Zv(e.kind.value);
        case "listValue":
            return qv(e.kind.value);
        default:
            throw new Error(`${e.$typeName} must have a value`);
    }
}
a(nu, "valueToJson");
function qv(e) {
    return e.values.map(nu);
}
a(qv, "listValueToJson");
function K3(e) {
    const t = Number(e.seconds) * 1e3;
    if (t < I3 || t > A3) throw new Error(`cannot encode message ${e.$typeName} to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
    if (e.nanos < 0) throw new Error(`cannot encode message ${e.$typeName} to JSON: nanos must not be negative`);
    if (e.nanos > 999999999) throw new Error(`cannot encode message ${e.$typeName} to JSON: nanos must not be greater than 99999999`);
    let r = "Z";
    if (e.nanos > 0) {
        const n = (e.nanos + 1e9).toString().substring(1);
        n.substring(3) === "000000" ? r = "." + n.substring(0, 3) + "Z" : n.substring(6) === "000" ? r = "." + n.substring(0, 6) + "Z" : r = "." + n + "Z";
    }
    return new Date(t).toISOString().replace(".000Z", r);
}
a(K3, "timestampToJson");
var JH = 2;
function W3(e) {
    return Object.assign(Object.assign({
        ignoreUnknownFields: !1,
        recursionLimit: 100
    }, e), {
        depth: 0
    });
}
a(W3, "makeReadContext");
function Y3(e, t, r) {
    return X3(e, iO(t, e.typeName), r);
}
a(Y3, "fromJsonString");
function X3(e, t, r) {
    const n = At(e);
    return Z3(e, n, t, r), n;
}
a(X3, "fromJson");
function Z3(e, t, r, n) {
    try {
        No(e)(t, r, W3(n));
    } catch (o) {
        throw O_(o) ? new Error(`cannot decode ${o.field()} from JSON: ${o.message}`, {
            cause: o
        }) : o;
    }
}
a(Z3, "readMessage");
var Qv = new WeakMap;
function No(e) {
    let t = Qv.get(e);
    return t === void 0 && (t = q3(e)), t;
}
a(No, "compiledReader");
function q3(e) {
    const t = String(e), r = Q3(e);
    if (r !== void 0) {
        const s = a((c, l, m)=>{
            if (++m.depth > m.recursionLimit) throw new Error(`cannot decode ${t} from JSON: maximum recursion depth of ${m.recursionLimit} reached`);
            r(c, l, m), m.depth--;
        }, "compiled");
        return Qv.set(e, s), s;
    }
    const n = e.typeName, o = new Map, i = a((s, c, l)=>{
        var m;
        if (++l.depth > l.recursionLimit) throw new Error(`cannot decode ${t} from JSON: maximum recursion depth of ${l.recursionLimit} reached`);
        if (c == null || Array.isArray(c) || typeof c != "object") throw new Error(`cannot decode ${t} from JSON: ${St(c)}`);
        const u = new Map, d = new Set, p = Object.keys(c);
        for(let h = 0; h < p.length; h++){
            const f = p[h], v = c[f], x = o.get(f);
            if (x !== void 0) {
                const g = x.field;
                if (d.has(g)) throw new ct(g, "set multiple times");
                if (d.add(g), x.oneofScalarNullSkip && v === null) continue;
                if (x.oneof) {
                    const y = u.get(x.oneof);
                    if (y !== void 0) throw new ct(x.oneof, `oneof set multiple times by ${y.name} and ${g.name}`);
                    u.set(x.oneof, g);
                }
                x.read(s, v, l);
            } else {
                const g = f.startsWith("[") && f.endsWith("]") ? (m = l.registry) === null || m === void 0 ? void 0 : m.getExtension(f.substring(1, f.length - 1)) : void 0;
                if (g?.extendee.typeName == n) {
                    const [y, w, b] = Ss(g);
                    Jv(w)(y[ar], v, l), T3(s, g, b());
                }
                if (g === void 0 && !l.ignoreUnknownFields) throw new Error(`cannot decode ${t} from JSON: key "${f}" is unknown`);
            }
        }
        l.depth--;
    }, "compiled");
    Qv.set(e, i);
    for (const s of e.fields){
        const c = {
            read: Jv(s),
            field: s,
            oneof: s.oneof,
            oneofScalarNullSkip: s.oneof !== void 0 && s.fieldKind == "scalar"
        };
        o.set(s.name, c).set(s.jsonName, c);
    }
    return i;
}
a(q3, "compileMessage");
function Q3(e) {
    if (e.typeName.startsWith("google.protobuf.")) switch(e.typeName){
        case "google.protobuf.Any":
            return (t, r, n)=>cO(t, r, n);
        case "google.protobuf.Timestamp":
            return (t, r)=>lO(t, r);
        case "google.protobuf.Duration":
            return (t, r)=>mO(t, r);
        case "google.protobuf.FieldMask":
            return (t, r)=>uO(t, r);
        case "google.protobuf.Struct":
            return (t, r, n)=>nb(t, r, n);
        case "google.protobuf.Value":
            return (t, r, n)=>cu(t, r, n);
        case "google.protobuf.ListValue":
            return (t, r, n)=>ob(t, r, n);
        default:
            if (Xn(e)) {
                const t = e.fields[0], r = t.localName, n = t.scalar, o = t.longAsString, i = tb(t);
                return (s, c)=>{
                    c === null ? s[r] = on(n, o) : s[r] = i(c);
                };
            }
            return;
    }
}
a(Q3, "compileWkt");
function Jv(e) {
    switch(e.fieldKind){
        case "scalar":
            return J3(e);
        case "enum":
            return eO(e);
        case "message":
            return tO(e);
        case "list":
            return rO(e);
        case "map":
            return oO(e);
    }
}
a(Jv, "compileFieldReader");
function J3(e) {
    const t = tb(e), r = e.localName;
    if (e.oneof) {
        const o = e.oneof.localName;
        return (i, s)=>{
            i[o] = {
                case: r,
                value: t(s)
            };
        };
    }
    const n = eb(e);
    return (o, i)=>{
        i === null ? n(o) : o[r] = t(i);
    };
}
a(J3, "compileScalarFieldReader");
function eb(e) {
    const t = e.localName;
    if (e.presence != JH) return (o)=>{
        delete o[t];
    };
    if (e.fieldKind == "enum") {
        const o = e.enum.values[0].number;
        return (i)=>{
            i[t] = o;
        };
    }
    const r = e.scalar, n = e.longAsString;
    return (o)=>{
        o[t] = on(r, n);
    };
}
a(eb, "compileClear");
function eO(e) {
    const t = ou(e.enum), r = au(e.enum), n = e.localName, o = e.enum.typeName != "google.protobuf.NullValue";
    if (e.oneof) {
        const s = e.oneof.localName;
        return (c, l, m)=>{
            if (l === null && o) {
                c[s].case === n && (c[s] = {
                    case: void 0
                });
                return;
            }
            const u = t(l, m.ignoreUnknownFields);
            if (u === Ka) return;
            const d = r(u);
            if (d !== !0) throw new ct(e, Er(e, u, d));
            c[s] = {
                case: n,
                value: u
            };
        };
    }
    const i = eb(e);
    return (s, c, l)=>{
        if (c === null && o) {
            i(s);
            return;
        }
        const m = t(c, l.ignoreUnknownFields);
        if (m === Ka) return;
        const u = r(m);
        if (u !== !0) throw new ct(e, Er(e, m, u));
        s[n] = m;
    };
}
a(eO, "compileEnumFieldReader");
function tO(e) {
    const t = e.localName, { toMessage: r, toLocal: n } = Fr(e), o = No(e.message), i = e.message.typeName != "google.protobuf.Value";
    if (e.oneof) {
        const s = e.oneof.localName;
        return (c, l, m)=>{
            const u = c[s];
            if (l === null && i) {
                u.case === t && (c[s] = {
                    case: void 0
                });
                return;
            }
            const d = r(u.case === t ? u.value : void 0);
            o(d, l, m), c[s] = {
                case: t,
                value: n(d)
            };
        };
    }
    return (s, c, l)=>{
        if (c === null && i) {
            delete s[t];
            return;
        }
        const m = r(s[t]);
        o(m, c, l), s[t] = n(m);
    };
}
a(tO, "compileMessageFieldReader");
function rO(e) {
    const t = e.localName, r = nO(e);
    return (n, o, i)=>{
        if (o === null) return;
        if (!Array.isArray(o)) throw new ct(e, "expected Array, got " + St(o));
        const s = n[t];
        for(let c = 0; c < o.length; c++){
            const l = r(o[c], i, s.length);
            l !== Ka && s.push(l);
        }
    };
}
a(rO, "compileListFieldReader");
function nO(e) {
    switch(e.listKind){
        case "scalar":
            {
                const t = iu(e), r = En(e.scalar), n = su(e);
                return (o, i, s)=>{
                    if (o === null) throw new ct(e, "list item must not be null");
                    const c = t(o), l = r(c);
                    if (l !== !0) throw new ct(e, `list item #${s + 1}: ${Er(e, c, l)}`);
                    return n(c);
                };
            }
        case "enum":
            {
                const t = ou(e.enum), r = au(e.enum), n = e.enum.typeName != "google.protobuf.NullValue";
                return (o, i, s)=>{
                    if (o === null && n) throw new ct(e, "list item must not be null");
                    const c = t(o, i.ignoreUnknownFields);
                    if (c === Ka) return c;
                    const l = r(c);
                    if (l !== !0) throw new ct(e, `list item #${s + 1}: ${Er(e, c, l)}`);
                    return c;
                };
            }
        case "message":
            {
                const { toMessage: t, toLocal: r } = Fr(e), n = No(e.message), o = e.message.typeName != "google.protobuf.Value";
                return (i, s)=>{
                    if (i === null && o) throw new ct(e, "list item must not be null");
                    const c = t(void 0);
                    return n(c, i, s), r(c);
                };
            }
    }
}
a(nO, "compileListItemReader");
function oO(e) {
    const t = e.localName, r = e.mapKey, n = aO(r), o = En(r);
    let i, s, c = a((m)=>m, "toLocalValue"), l = !0;
    switch(e.mapKind){
        case "scalar":
            {
                i = iu(e), s = En(e.scalar), c = su(e);
                break;
            }
        case "enum":
            {
                const m = ou(e.enum);
                i = a((u, d)=>m(u, d.ignoreUnknownFields), "parseValue"), s = au(e.enum), l = e.enum.typeName != "google.protobuf.NullValue";
                break;
            }
        case "message":
            {
                const { toMessage: m, toLocal: u } = Fr(e), d = No(e.message);
                l = e.message.typeName != "google.protobuf.Value", i = a((p, h)=>{
                    const f = m(void 0);
                    return d(f, p, h), u(f);
                }, "parseValue");
                break;
            }
    }
    return (m, u, d)=>{
        if (u === null) return;
        if (typeof u != "object" || Array.isArray(u)) throw new ct(e, "expected object, got " + St(u));
        const p = m[t], h = new Set, f = Object.keys(u);
        for(let v = 0; v < f.length; v++){
            const x = f[v], g = u[x], y = n(x);
            if (h.has(y)) throw new ct(e, `duplicate map key "${x}"`);
            if (h.add(y), g === null && l) throw new ct(e, "map value must not be null");
            const w = i(g, d);
            if (w === Ka) continue;
            const b = o(y);
            if (b !== !0) throw new ct(e, `invalid map key: ${Er({
                scalar: r
            }, y, b)}`);
            if (s !== void 0) {
                const T = s(w);
                if (T !== !0) throw new ct(e, `map entry ${St(y)}: ${Er(e, w, T)}`);
            }
            p[y] = c(w);
        }
    };
}
a(oO, "compileMapFieldReader");
var Ka = Symbol();
function ou(e) {
    const t = e.values[0].number, r = e.values;
    return (n, o)=>{
        if (n === null) return t;
        switch(typeof n){
            case "number":
                if (Number.isInteger(n)) return n;
                break;
            case "string":
                {
                    const i = r.find((s)=>s.name === n);
                    if (i !== void 0) return i.number;
                    if (o) return Ka;
                    break;
                }
        }
        throw new Error(`cannot decode ${e} from JSON: ${St(n)}`);
    };
}
a(ou, "compileEnumConverter");
function au(e) {
    if (e.open) return En(N.INT32);
    const t = e.values;
    return (r)=>t.some((n)=>n.number === r);
}
a(au, "compileEnumCheck");
function tb(e) {
    const t = iu(e), r = En(e.scalar), n = su(e);
    return (o)=>{
        const i = t(o), s = r(i);
        if (s !== !0) throw new ct(e, Er(e, i, s));
        return n(i);
    };
}
a(tb, "compileScalarConverter");
function iu(e) {
    switch(e.scalar){
        case N.DOUBLE:
        case N.FLOAT:
            return (t)=>{
                if (t === "NaN") return NaN;
                if (t === "Infinity") return Number.POSITIVE_INFINITY;
                if (t === "-Infinity") return Number.NEGATIVE_INFINITY;
                if (typeof t == "number") {
                    if (Number.isNaN(t)) throw new ct(e, "unexpected NaN number");
                    if (!Number.isFinite(t)) throw new ct(e, "unexpected infinite number");
                    return t;
                }
                if (typeof t == "string") {
                    if (t === "" || t.trim().length !== t.length) return t;
                    const r = Number(t);
                    return Number.isFinite(r) ? r : t;
                }
                return t;
            };
        case N.INT32:
        case N.FIXED32:
        case N.SFIXED32:
        case N.SINT32:
        case N.UINT32:
            return rb;
        case N.BYTES:
            return (t)=>{
                if (typeof t == "string") {
                    if (t === "") return new Uint8Array(0);
                    try {
                        return Gm(t);
                    } catch (r) {
                        const n = r instanceof Error ? r.message : String(r);
                        throw new ct(e, n);
                    }
                }
                return t;
            };
        default:
            return (t)=>t;
    }
}
a(iu, "compileScalarParse");
function su(e) {
    const t = e.fieldKind !== "map" && e.longAsString;
    switch(e.scalar){
        case N.INT64:
        case N.SFIXED64:
        case N.SINT64:
            return t ? (r)=>String(r) : (r)=>typeof r == "string" || typeof r == "number" ? st.parse(r) : r;
        case N.FIXED64:
        case N.UINT64:
            return t ? (r)=>String(r) : (r)=>typeof r == "string" || typeof r == "number" ? st.uParse(r) : r;
        default:
            return (r)=>r;
    }
}
a(su, "compileScalarToLocal");
function aO(e) {
    switch(e){
        case N.BOOL:
            return (t)=>{
                switch(t){
                    case "true":
                        return !0;
                    case "false":
                        return !1;
                }
                return t;
            };
        case N.INT32:
        case N.FIXED32:
        case N.UINT32:
        case N.SFIXED32:
        case N.SINT32:
            return rb;
        case N.INT64:
        case N.SINT64:
        case N.SFIXED64:
        case N.UINT64:
        case N.FIXED64:
            return (t)=>/^-?0+$/.test(t) ? "0" : t.replace(/^(-?)0+(?=\d)/, "$1");
        default:
            return (t)=>t;
    }
}
a(aO, "compileMapKeyParse");
function rb(e) {
    if (typeof e == "string") {
        if (e === "" || e.trim().length !== e.length) return e;
        const t = Number(e);
        return Number.isNaN(t) ? e : t;
    }
    return e;
}
a(rb, "int32FromJson");
function iO(e, t) {
    let r;
    try {
        r = JSON.parse(e);
    } catch (n) {
        const o = n instanceof Error ? n.message : String(n);
        throw new Error(`cannot decode message ${t} from JSON: ${o}`, {
            cause: n
        });
    }
    return sO(e, t), r;
}
a(iO, "parseJsonString");
function sO(e, t) {
    const r = [];
    let n = !1, o = 0;
    for(; o < e.length;)switch(e[o]){
        case "{":
            r.push(new Set), n = !0, o++;
            break;
        case "[":
            r.push(null), n = !1, o++;
            break;
        case "}":
        case "]":
            r.pop(), n = !1, o++;
            break;
        case ",":
            n = r[r.length - 1] != null, o++;
            break;
        case ":":
            n = !1, o++;
            break;
        case '"':
            {
                const i = o++;
                let s = !1;
                for(; o < e.length;){
                    if (e[o] == "\\") {
                        s = !0, o += 2;
                        continue;
                    }
                    if (e[o] == '"') break;
                    o++;
                }
                const c = o++, l = r[r.length - 1];
                if (n && l) {
                    const m = s ? JSON.parse(e.substring(i, c + 1)) : e.substring(i + 1, c);
                    if (l.has(m)) throw new Error(`cannot decode message ${t} from JSON: duplicate object key "${m}"`);
                    l.add(m);
                }
                n = !1;
                break;
            }
        default:
            o++;
            break;
    }
}
a(sO, "checkDuplicateKeys");
function cO(e, t, r) {
    var n;
    if (t === null || Array.isArray(t) || typeof t != "object") throw new Error(`cannot decode message ${e.$typeName} from JSON: expected object but got ${St(t)}`);
    if (Object.keys(t).length == 0) return;
    const o = t["@type"];
    if (typeof o != "string" || o == "") throw new Error(`cannot decode message ${e.$typeName} from JSON: "@type" is empty`);
    const i = o.includes("/") ? o.substring(o.lastIndexOf("/") + 1) : o;
    if (!i.length) throw new Error(`cannot decode message ${e.$typeName} from JSON: "@type" is invalid`);
    const s = (n = r.registry) === null || n === void 0 ? void 0 : n.getMessage(i);
    if (!s) throw new Error(`cannot decode message ${e.$typeName} from JSON: ${o} is not in the type registry`);
    const c = At(s);
    if (sv(s) && Object.prototype.hasOwnProperty.call(t, "value")) No(s)(c, t.value, r);
    else {
        const l = Object.assign({}, t);
        delete l["@type"], No(s)(c, l, r);
    }
    b3(s, c, e);
}
a(cO, "anyFromJson");
function lO(e, t) {
    if (typeof t != "string") throw new Error(`cannot decode message ${e.$typeName} from JSON: ${St(t)}`);
    const r = t.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:\.([0-9]{1,9}))?(?:Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!r) throw new Error(`cannot decode message ${e.$typeName} from JSON: invalid RFC 3339 string`);
    const n = Date.parse(r[1] + "-" + r[2] + "-" + r[3] + "T" + r[4] + ":" + r[5] + ":" + r[6] + (r[8] ? r[8] : "Z"));
    if (Number.isNaN(n)) throw new Error(`cannot decode message ${e.$typeName} from JSON: invalid RFC 3339 string`);
    if (n < I3 || n > A3) throw new Error(`cannot decode message ${e.$typeName} from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
    e.seconds = st.parse(n / 1e3), e.nanos = 0, r[7] && (e.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9);
}
a(lO, "timestampFromJson");
function mO(e, t) {
    if (typeof t != "string") throw new Error(`cannot decode message ${e.$typeName} from JSON: ${St(t)}`);
    const r = t.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (r === null) throw new Error(`cannot decode message ${e.$typeName} from JSON: ${St(t)}`);
    const n = Number(r[1]);
    if (n > N3 || n < R3) throw new Error(`cannot decode message ${e.$typeName} from JSON: ${St(t)}`);
    if (e.seconds = st.parse(n), typeof r[2] != "string") return;
    const o = r[2] + "0".repeat(9 - r[2].length);
    e.nanos = parseInt(o), (n < 0 || Object.is(n, -0)) && (e.nanos = -e.nanos);
}
a(mO, "durationFromJson");
function uO(e, t) {
    if (typeof t != "string") throw new Error(`cannot decode message ${e.$typeName} from JSON: ${St(t)}`);
    t !== "" && (e.paths = t.split(",").map((r)=>{
        if (r.includes("_")) throw new Error(`cannot decode message ${e.$typeName} from JSON: path names must be lowerCamelCase`);
        return Tv(r);
    }));
}
a(uO, "fieldMaskFromJson");
function nb(e, t, r) {
    if (typeof t != "object" || t == null || Array.isArray(t)) throw new Error(`cannot decode message ${e.$typeName} from JSON ${St(t)}`);
    const n = Object.keys(t);
    for(let o = 0; o < n.length; o++){
        const i = n[o], s = At(E3);
        cu(s, t[i], r), e.fields[i] = s;
    }
}
a(nb, "structFromJson");
function cu(e, t, r) {
    if (++r.depth > r.recursionLimit) throw new Error(`cannot decode ${e.$typeName} from JSON: maximum recursion depth of ${r.recursionLimit} reached`);
    switch(typeof t){
        case "number":
            e.kind = {
                case: "numberValue",
                value: t
            };
            break;
        case "string":
            e.kind = {
                case: "stringValue",
                value: t
            };
            break;
        case "boolean":
            e.kind = {
                case: "boolValue",
                value: t
            };
            break;
        case "object":
            if (t === null) e.kind = {
                case: "nullValue",
                value: Hv.NULL_VALUE
            };
            else if (Array.isArray(t)) {
                const n = At(ZH);
                ob(n, t, r), e.kind = {
                    case: "listValue",
                    value: n
                };
            } else {
                const n = At(XH);
                nb(n, t, r), e.kind = {
                    case: "structValue",
                    value: n
                };
            }
            break;
        default:
            throw new Error(`cannot decode message ${e.$typeName} from JSON ${St(t)}`);
    }
    return r.depth--, e;
}
a(cu, "valueFromJson");
function ob(e, t, r) {
    if (!Array.isArray(t)) throw new Error(`cannot decode message ${e.$typeName} from JSON ${St(t)}`);
    for(let n = 0; n < t.length; n++){
        const o = At(E3);
        cu(o, t[n], r), e.values.push(o);
    }
}
a(ob, "listValueFromJson");
var Fe;
(function(e) {
    e[e.Canceled = 1] = "Canceled", e[e.Unknown = 2] = "Unknown", e[e.InvalidArgument = 3] = "InvalidArgument", e[e.DeadlineExceeded = 4] = "DeadlineExceeded", e[e.NotFound = 5] = "NotFound", e[e.AlreadyExists = 6] = "AlreadyExists", e[e.PermissionDenied = 7] = "PermissionDenied", e[e.ResourceExhausted = 8] = "ResourceExhausted", e[e.FailedPrecondition = 9] = "FailedPrecondition", e[e.Aborted = 10] = "Aborted", e[e.OutOfRange = 11] = "OutOfRange", e[e.Unimplemented = 12] = "Unimplemented", e[e.Internal = 13] = "Internal", e[e.Unavailable = 14] = "Unavailable", e[e.DataLoss = 15] = "DataLoss", e[e.Unauthenticated = 16] = "Unauthenticated";
})(Fe || (Fe = {}));
function ab(e) {
    const t = Fe[e];
    return typeof t != "string" ? e.toString() : t[0].toLowerCase() + t.substring(1).replace(/[A-Z]/g, (r)=>"_" + r.toLowerCase());
}
a(ab, "codeToString");
var vt = class Xa extends Error {
    static{
        a(this, "ConnectError");
    }
    constructor(t, r = Fe.Unknown, n, o, i){
        super(dO(t, r)), this.name = "ConnectError", this.isWireError = !1, Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = t, this.code = r, this.metadata = new Headers(n ?? {}), this.details = o ?? [], this.cause = i;
    }
    static from(t, r = Fe.Unknown) {
        return t instanceof Xa ? t : t instanceof Error ? t.name == "AbortError" || t.name == "TimeoutError" ? new Xa(t.message, Fe.Canceled) : new Xa(t.message, r, void 0, void 0, t) : new Xa(String(t), r, void 0, void 0, t);
    }
    static [Symbol.hasInstance](t) {
        return t instanceof Error ? Object.getPrototypeOf(t) === Xa.prototype ? !0 : t.name === "ConnectError" && "code" in t && typeof t.code == "number" && "metadata" in t && "details" in t && Array.isArray(t.details) && "rawMessage" in t && typeof t.rawMessage == "string" && "cause" in t : !1;
    }
    findDetails(t) {
        const r = t.kind === "message" ? {
            getMessage: a((o)=>o === t.typeName ? t : void 0, "getMessage")
        } : t, n = [];
        for (const o of this.details){
            if ("desc" in o) {
                r.getMessage(o.desc.typeName) && n.push(At(o.desc, o.value));
                continue;
            }
            const i = r.getMessage(o.type);
            if (i) try {
                n.push($a(i, o.value));
            } catch  {}
        }
        return n;
    }
};
function dO(e, t) {
    return e.length ? `[${ab(t)}] ${e}` : `[${ab(t)}]`;
}
a(dO, "createMessage");
function pO(e, t, r) {
    try {
        const n = Gm(e);
        return t ? $a(t, n, r) : n;
    } catch (n) {
        throw vt.from(n, Fe.DataLoss);
    }
}
a(pO, "decodeBinaryHeader");
function fO(e, t) {
    const r = {};
    for (const n of e.methods){
        const o = t(n);
        o != null && (r[n.localName] = o);
    }
    return r;
}
a(fO, "makeAnyClient");
var hO = 1;
function xO(e, t, r = !1) {
    if (t > e) {
        let n = `message size is larger than configured readMaxBytes ${e}`;
        throw r && (n = `message size ${t} is larger than configured readMaxBytes ${e}`), new vt(n, Fe.ResourceExhausted);
    }
}
a(xO, "assertReadMaxBytes");
function gO(e) {
    return new eG(e);
}
a(gO, "createEnvelopeDecoder");
var eG = class {
    static{
        a(this, "EnvelopeDecoderImpl");
    }
    constructor(e){
        this.readMaxBytes = e, this.header = new Uint8Array(5), this.headerView = new DataView(this.header.buffer), this.buf = [];
    }
    get byteLength() {
        return this.buf.reduce((e, t)=>e + t.byteLength, 0);
    }
    decode(e) {
        this.buf.push(e);
        const t = [];
        for(;;){
            let r = this.pop();
            if (!r) break;
            t.push(r);
        }
        return t;
    }
    pop() {
        if (!(!this.env && (this.env = this.head(), !this.env)) && this.cons(this.env.data)) {
            const e = this.env;
            return this.env = void 0, e;
        }
    }
    head() {
        if (!this.cons(this.header)) return;
        const e = this.headerView.getUint8(0), t = this.headerView.getUint32(1);
        return xO(this.readMaxBytes, t, !0), {
            flags: e,
            data: new Uint8Array(t)
        };
    }
    cons(e) {
        const t = e.byteLength;
        if (this.byteLength < t) return !1;
        let r = 0;
        for(; r < t;){
            const n = this.buf.shift();
            n.byteLength > t - r ? (e.set(n.subarray(0, t - r), r), this.buf.unshift(n.subarray(t - r)), r += t - r) : (e.set(n, r), r += n.byteLength);
        }
        return !0;
    }
};
function ib(e) {
    let t;
    const r = gO(4294967295);
    return new ReadableStream({
        start () {
            t = e.getReader();
        },
        async pull (n) {
            let o = !1;
            for(; !o;){
                const i = await t.read();
                if (i.done) r.byteLength > 0 && n.error(new vt("protocol error: incomplete envelope", Fe.InvalidArgument)), n.close();
                else for (const s of r.decode(i.value))n.enqueue(s), o = !0;
            }
        }
    });
}
a(ib, "createEnvelopeReadableStream");
function sb(e, t) {
    const r = new Uint8Array(t.length + 5);
    r.set(t, 5);
    const n = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return n.setUint8(0, e), n.setUint32(1, t.length), r;
}
a(sb, "encodeEnvelope");
var tG = function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], r;
    return t ? t.call(e) : (e = typeof Us == "function" ? Us(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
        return this;
    }, r);
    function n(i) {
        r[i] = e[i] && function(s) {
            return new Promise(function(c, l) {
                s = e[i](s), o(c, l, s.done, s.value);
            });
        };
    }
    function o(i, s, c, l) {
        Promise.resolve(l).then(function(m) {
            i({
                value: m,
                done: c
            });
        }, s);
    }
}, Ts = function(e) {
    return this instanceof Ts ? (this.v = e, this) : new Ts(e);
}, rG = function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(e, t || []), o, i = [];
    return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", s), o[Symbol.asyncIterator] = function() {
        return this;
    }, o;
    function s(h) {
        return function(f) {
            return Promise.resolve(f).then(h, d);
        };
    }
    function c(h, f) {
        n[h] && (o[h] = function(v) {
            return new Promise(function(x, g) {
                i.push([
                    h,
                    v,
                    x,
                    g
                ]) > 1 || l(h, v);
            });
        }, f && (o[h] = f(o[h])));
    }
    function l(h, f) {
        try {
            m(n[h](f));
        } catch (v) {
            p(i[0][3], v);
        }
    }
    function m(h) {
        h.value instanceof Ts ? Promise.resolve(h.value.v).then(u, d) : p(i[0][2], h);
    }
    function u(h) {
        l("next", h);
    }
    function d(h) {
        l("throw", h);
    }
    function p(h, f) {
        h(f), i.shift(), i.length && l(i[0][0], i[0][1]);
    }
}, nG = function(e) {
    var t, r;
    return t = {}, n("next"), n("throw", function(o) {
        throw o;
    }), n("return"), t[Symbol.iterator] = function() {
        return this;
    }, t;
    function n(o, i) {
        t[o] = e[o] ? function(s) {
            return (r = !r) ? {
                value: Ts(e[o](s)),
                done: !1
            } : i ? i(s) : s;
        } : i;
    }
};
function vO(e) {
    return rG(this, arguments, a(function*() {
        yield Ts(yield* nG(tG(e)));
    }, "createAsyncIterable_1"));
}
a(vO, "createAsyncIterable");
var bO = function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], r;
    return t ? t.call(e) : (e = typeof Us == "function" ? Us(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
        return this;
    }, r);
    function n(i) {
        r[i] = e[i] && function(s) {
            return new Promise(function(c, l) {
                s = e[i](s), o(c, l, s.done, s.value);
            });
        };
    }
    function o(i, s, c, l) {
        Promise.resolve(l).then(function(m) {
            i({
                value: m,
                done: c
            });
        }, s);
    }
}, Wa = function(e) {
    return this instanceof Wa ? (this.v = e, this) : new Wa(e);
}, oG = function(e) {
    var t, r;
    return t = {}, n("next"), n("throw", function(o) {
        throw o;
    }), n("return"), t[Symbol.iterator] = function() {
        return this;
    }, t;
    function n(o, i) {
        t[o] = e[o] ? function(s) {
            return (r = !r) ? {
                value: Wa(e[o](s)),
                done: !1
            } : i ? i(s) : s;
        } : i;
    }
}, aG = function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(e, t || []), o, i = [];
    return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", s), o[Symbol.asyncIterator] = function() {
        return this;
    }, o;
    function s(h) {
        return function(f) {
            return Promise.resolve(f).then(h, d);
        };
    }
    function c(h, f) {
        n[h] && (o[h] = function(v) {
            return new Promise(function(x, g) {
                i.push([
                    h,
                    v,
                    x,
                    g
                ]) > 1 || l(h, v);
            });
        }, f && (o[h] = f(o[h])));
    }
    function l(h, f) {
        try {
            m(n[h](f));
        } catch (v) {
            p(i[0][3], v);
        }
    }
    function m(h) {
        h.value instanceof Wa ? Promise.resolve(h.value.v).then(u, d) : p(i[0][2], h);
    }
    function u(h) {
        l("next", h);
    }
    function d(h) {
        l("throw", h);
    }
    function p(h, f) {
        h(f), i.shift(), i.length && l(i[0][0], i[0][1]);
    }
};
function yO(e, t) {
    return fO(e, (r)=>{
        switch(r.methodKind){
            case "unary":
                return wO(t, r);
            case "server_streaming":
                return SO(t, r);
            case "client_streaming":
                return EO(t, r);
            case "bidi_streaming":
                return kO(t, r);
            default:
                return null;
        }
    });
}
a(yO, "createClient");
function wO(e, t) {
    return async (r, n)=>{
        var o, i;
        const s = await e.unary(t, n?.signal, n?.timeoutMs, n?.headers, r, n?.contextValues);
        return (o = n?.onHeader) === null || o === void 0 || o.call(n, s.header), (i = n?.onTrailer) === null || i === void 0 || i.call(n, s.trailer), s.message;
    };
}
a(wO, "createUnaryFn");
function SO(e, t) {
    return (r, n)=>cb(e.stream(t, n?.signal, n?.timeoutMs, n?.headers, vO([
            r
        ]), n?.contextValues), n);
}
a(SO, "createServerStreamingFn");
function EO(e, t) {
    return async (r, n)=>{
        var o, i, s, c, l, m;
        const u = await e.stream(t, n?.signal, n?.timeoutMs, n?.headers, r, n?.contextValues);
        (l = n?.onHeader) === null || l === void 0 || l.call(n, u.header);
        let d, p = 0;
        try {
            for(var h = !0, f = bO(u.message), v; v = await f.next(), o = v.done, !o; h = !0)c = v.value, h = !1, d = c, p++;
        } catch (x) {
            i = {
                error: x
            };
        } finally{
            try {
                !h && !o && (s = f.return) && await s.call(f);
            } finally{
                if (i) throw i.error;
            }
        }
        if (!d) throw new vt("protocol error: missing response message", Fe.Unimplemented);
        if (p > 1) throw new vt("protocol error: received extra messages for client streaming method", Fe.Unimplemented);
        return (m = n?.onTrailer) === null || m === void 0 || m.call(n, u.trailer), d;
    };
}
a(EO, "createClientStreamingFn");
function kO(e, t) {
    return (r, n)=>cb(e.stream(t, n?.signal, n?.timeoutMs, n?.headers, r, n?.contextValues), n);
}
a(kO, "createBiDiStreamingFn");
function cb(e, t) {
    const r = (function() {
        return aG(this, arguments, function*() {
            var n, o;
            const i = yield Wa(e);
            (n = t?.onHeader) === null || n === void 0 || n.call(t, i.header), yield Wa(yield* oG(bO(i.message))), (o = t?.onTrailer) === null || o === void 0 || o.call(t, i.trailer);
        });
    })()[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                next: a(()=>r.next(), "next")
            })
    };
}
a(cb, "handleStreamResponse");
function TO(...e) {
    const t = new AbortController, r = e.filter((o)=>o !== void 0).concat(t.signal);
    for (const o of r){
        if (o.aborted) {
            n.apply(o);
            break;
        }
        o.addEventListener("abort", n);
    }
    function n() {
        t.signal.aborted || t.abort(lu(this));
        for (const o of r)o.removeEventListener("abort", n);
    }
    return a(n, "onAbort"), t;
}
a(TO, "createLinkedAbortController");
function CO(e) {
    const t = new AbortController, r = a(()=>{
        t.abort(new vt("the operation timed out", Fe.DeadlineExceeded));
    }, "listener");
    let n;
    return e !== void 0 && (e <= 0 ? r() : n = setTimeout(r, e)), {
        signal: t.signal,
        cleanup: a(()=>clearTimeout(n), "cleanup")
    };
}
a(CO, "createDeadlineSignal");
function lu(e) {
    if (!e.aborted) return;
    if (e.reason !== void 0) return e.reason;
    const t = new Error("This operation was aborted");
    return t.name = "AbortError", t;
}
a(lu, "getAbortSignalReason");
function lb() {
    return {
        get (e) {
            return e.id in this ? this[e.id] : e.defaultValue;
        },
        set (e, t) {
            return this[e.id] = t, this;
        },
        delete (e) {
            return delete this[e.id], this;
        }
    };
}
a(lb, "createContextValues");
var mb = 128;
function ub(e) {
    const t = new Headers, r = new TextDecoder().decode(e).split(`\r
`);
    for (const n of r){
        if (n === "") continue;
        const o = n.indexOf(":");
        if (o > 0) {
            const i = n.substring(0, o).trim(), s = n.substring(o + 1).trim();
            t.append(i, s);
        }
    }
    return t;
}
a(ub, "trailerParse");
var iG = "Content-Type", sG = "Grpc-Timeout", Ya = "Grpc-Status", IO = "Grpc-Message", cG = "Grpc-Status-Details-Bin", AO = "User-Agent", RO = "X-User-Agent", lG = "X-Grpc-Web", mG = "application/grpc-web+proto", uG = "application/grpc-web+json";
function NO(e, t, ...r) {
    if (r.length > 0) throw new Error;
    return e.services[t];
}
a(NO, "serviceDesc");
var dG = qn("CgxzdGF0dXMucHJvdG8SCmdvb2dsZS5ycGMiTgoGU3RhdHVzEgwKBGNvZGUYASABKAUSDwoHbWVzc2FnZRgCIAEoCRIlCgdkZXRhaWxzGAMgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueUJeCg5jb20uZ29vZ2xlLnJwY0ILU3RhdHVzUHJvdG9QAVo3Z29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9ycGMvc3RhdHVzO3N0YXR1c6ICA1JQQ2IGcHJvdG8z", [
    i3
]), pG = sn(dG, 0), fG = "0";
function db(e) {
    var t;
    const r = e.get(cG);
    if (r != null) {
        const o = pO(r, pG);
        if (o.code == 0) return;
        const i = new vt(o.message, o.code, e);
        return i.details = o.details.map((s)=>({
                type: s.typeUrl.substring(s.typeUrl.lastIndexOf("/") + 1),
                value: s.value
            })), i.isWireError = !0, i;
    }
    const n = e.get(Ya);
    if (n != null) {
        if (n === fG) return;
        const o = parseInt(n, 10);
        let i;
        return o in Fe ? i = new vt(decodeURIComponent((t = e.get(IO)) !== null && t !== void 0 ? t : ""), o, e) : i = new vt(`invalid grpc-status: ${n}`, Fe.Internal, e), i.isWireError = !0, i;
    }
}
a(db, "findTrailerError");
function pb(e, t) {
    return e.toString().replace(/\/?$/, `/${t.parent.typeName}/${t.name}`);
}
a(pb, "createMethodUrl");
function fb(e, t) {
    return At(e, t);
}
a(fb, "normalize");
function PO(e, t) {
    function r(n) {
        return n.done === !0 ? n : {
            done: n.done,
            value: fb(e, n.value)
        };
    }
    return a(r, "transform"), {
        [Symbol.asyncIterator] () {
            const n = t[Symbol.asyncIterator](), o = {
                next: a(()=>n.next().then(r), "next")
            };
            return n.throw !== void 0 && (o.throw = (i)=>n.throw(i).then(r)), n.return !== void 0 && (o.return = (i)=>n.return(i).then(r)), o;
        }
    };
}
a(PO, "normalizeIterable");
function hb(e, t) {
    if (!t) return e;
    for (const r of t.concat().reverse())e = r(e);
    return e;
}
a(hb, "applyInterceptors");
function _O(e) {
    var t;
    const r = Object.assign({}, e);
    return (t = r.ignoreUnknownFields) !== null && t !== void 0 || (r.ignoreUnknownFields = !0), r;
}
a(_O, "getJsonOptions");
function xb(e, t, r, n) {
    const o = t ? gb(e.input, n) : vb(e.input, r);
    return {
        parse: (t ? gb(e.output, n) : vb(e.output, r)).parse,
        serialize: o.serialize
    };
}
a(xb, "createClientMethodSerializers");
function gb(e, t) {
    return {
        parse (r) {
            try {
                return $a(e, r, t);
            } catch (n) {
                const o = n instanceof Error ? n.message : String(n);
                throw new vt(`parse binary: ${o}`, Fe.Internal);
            }
        },
        serialize (r) {
            try {
                return Vv(e, r, t);
            } catch (n) {
                const o = n instanceof Error ? n.message : String(n);
                throw new vt(`serialize binary: ${o}`, Fe.Internal);
            }
        }
    };
}
a(gb, "createBinarySerialization");
function vb(e, t) {
    var r, n;
    const o = (r = t?.textEncoder) !== null && r !== void 0 ? r : new TextEncoder, i = (n = t?.textDecoder) !== null && n !== void 0 ? n : new TextDecoder, s = _O(t);
    return {
        parse (c) {
            try {
                const l = i.decode(c);
                return Y3(e, l, s);
            } catch (l) {
                throw vt.from(l, Fe.InvalidArgument);
            }
        },
        serialize (c) {
            try {
                const l = O3(e, c, s);
                return o.encode(l);
            } catch (l) {
                throw vt.from(l, Fe.Internal);
            }
        }
    };
}
a(vb, "createJsonSerialization");
function MO(e) {
    const t = hb(e.next, e.interceptors), [r, n, o] = bb(e), i = Object.assign(Object.assign({}, e.req), {
        message: fb(e.req.method.input, e.req.message),
        signal: r
    });
    return t(i).then((s)=>(o(), s), n);
}
a(MO, "runUnaryCall");
function OO(e) {
    const t = hb(e.next, e.interceptors), [r, n, o] = bb(e), i = Object.assign(Object.assign({}, e.req), {
        message: PO(e.req.method.input, e.req.message),
        signal: r
    });
    let s = !1;
    return r.addEventListener("abort", function() {
        var c, l;
        const m = e.req.message[Symbol.asyncIterator]();
        s || (c = m.throw) === null || c === void 0 || c.call(m, this.reason).catch(()=>{}), (l = m.return) === null || l === void 0 || l.call(m).catch(()=>{});
    }), t(i).then((c)=>Object.assign(Object.assign({}, c), {
            message: {
                [Symbol.asyncIterator] () {
                    const l = c.message[Symbol.asyncIterator]();
                    return {
                        next () {
                            return !s && r.aborted ? n(lu(r)) : l.next().then((m)=>(m.done == !0 && (s = !0, o()), m), n);
                        }
                    };
                }
            }
        }), n);
}
a(OO, "runStreamingCall");
function bb(e) {
    const { signal: t, cleanup: r } = CO(e.timeoutMs), n = TO(e.signal, t);
    return [
        n.signal,
        a(function(i) {
            const s = n.signal.aborted ? vt.from(lu(n.signal), Fe.Canceled) : vt.from(i);
            return n.abort(s), r(), Promise.reject(s);
        }, "abort"),
        a(function() {
            r(), n.abort();
        }, "done")
    ];
}
a(bb, "setupSignal"), fr();
var yb = qn("CiRwcm9kL2NoYXJnZXItcHJvdG8vcHJvdG8vdHlwZXMucHJvdG8SDHByb2RfY2hhcmdlciITCgRDZW50EgsKA3ZhbBgBIAEoAyIwChpDaGVja291dFVpTG9jYXRpb25FbWJlZGRlZBISCgpyZXR1cm5fdXJsGAEgASgJIjUKHkNoZWNrb3V0VWlMb2NhdGlvblN0cmlwZUhvc3RlZBITCgtzdWNjZXNzX3VybBgBIAEoCSI2CiBDaGVja291dFVpTG9jYXRpb25TdHJpcGVFbGVtZW50cxISCgpyZXR1cm5fdXJsGAEgASgJIvABChJDaGVja291dFVpTG9jYXRpb24SPAoIZW1iZWRkZWQYCiABKAsyKC5wcm9kX2NoYXJnZXIuQ2hlY2tvdXRVaUxvY2F0aW9uRW1iZWRkZWRIABJFCg1zdHJpcGVfaG9zdGVkGBQgASgLMiwucHJvZF9jaGFyZ2VyLkNoZWNrb3V0VWlMb2NhdGlvblN0cmlwZUhvc3RlZEgAEkkKD3N0cmlwZV9lbGVtZW50cxgeIAEoCzIuLnByb2RfY2hhcmdlci5DaGVja291dFVpTG9jYXRpb25TdHJpcGVFbGVtZW50c0gAQgoKCGxvY2F0aW9uIlwKEkNoZWNrb3V0U2Vzc2lvbklkcxIQCgN1cmwYASABKAlIAIgBARIaCg1jbGllbnRfc2VjcmV0GAIgASgJSAGIAQFCBgoEX3VybEIQCg5fY2xpZW50X3NlY3JldGIGcHJvdG8z"), hG = sn(yb, 0), xG = sn(yb, 4), Cs = qn("CjBwcm9kL2dyb2svYmFja2VuZC9wcm90by9ncm9rX2J1aWxkX2JpbGxpbmcucHJvdG8SC2dyb2tfYXBpX3YyInEKEUdyb2tDcmVkaXRzQ29uZmlnEisKD3ByZXBhaWRfYmFsYW5jZRgMIAEoCzISLnByb2RfY2hhcmdlci5DZW50Ei8KDXRvcF91cF9tZXRob2QYDSABKA4yGC5ncm9rX2FwaV92Mi5Ub3BVcE1ldGhvZCJDChtHZXRHcm9rQ3JlZGl0c0NvbmZpZ1JlcXVlc3QSJAocZXhjbHVkZV9sZWdhY3lfbW9udGhseV91c2FnZRgBIAEoCCJOChxHZXRHcm9rQ3JlZGl0c0NvbmZpZ1Jlc3BvbnNlEi4KBmNvbmZpZxgBIAEoCzIeLmdyb2tfYXBpX3YyLkdyb2tDcmVkaXRzQ29uZmlnIqoBCiZUb3BVcE9yR2V0RXhpc3RpbmdQZW5kaW5nQ2hhbmdlUmVxdWVzdBIiCgZhbW91bnQYASABKAsyEi5wcm9kX2NoYXJnZXIuQ2VudBIeChFwYXltZW50X21ldGhvZF9pZBgCIAEoCUgAiAEBEhcKCmJlbmVmaXRfaWQYCiABKAlIAYgBAUIUChJfcGF5bWVudF9tZXRob2RfaWRCDQoLX2JlbmVmaXRfaWQiXAonVG9wVXBPckdldEV4aXN0aW5nUGVuZGluZ0NoYW5nZVJlc3BvbnNlEjEKBmNoYW5nZRgBIAEoCzIhLmdyb2tfYXBpX3YyLlByZXBhaWRCYWxhbmNlQ2hhbmdlIrIBCiRUb3BVcFVzaW5nSW5saW5lUGF5bWVudE1ldGhvZFJlcXVlc3QSIgoGYW1vdW50GAEgASgLMhIucHJvZF9jaGFyZ2VyLkNlbnQSPgoUY2hlY2tvdXRfdWlfbG9jYXRpb24YAiABKAsyIC5wcm9kX2NoYXJnZXIuQ2hlY2tvdXRVaUxvY2F0aW9uEhcKCmJlbmVmaXRfaWQYCiABKAlIAIgBAUINCgtfYmVuZWZpdF9pZCKPAQolVG9wVXBVc2luZ0lubGluZVBheW1lbnRNZXRob2RSZXNwb25zZRI+ChRjaGVja291dF9zZXNzaW9uX2lkcxgBIAEoCzIgLnByb2RfY2hhcmdlci5DaGVja291dFNlc3Npb25JZHMSFwoKaW52b2ljZV9pZBgCIAEoCUgAiAEBQg0KC19pbnZvaWNlX2lkIugEChRQcmVwYWlkQmFsYW5jZUNoYW5nZRIiCgZhbW91bnQYASABKAsyEi5wcm9kX2NoYXJnZXIuQ2VudBIXCgppbnZvaWNlX2lkGAIgASgJSACIAQESHgoRaW52b2ljZV9yZWZlcmVuY2UYAyABKAlIAYgBARIvCgtjcmVhdGVfdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASSAoMdG9wdXBfc3RhdHVzGAUgASgOMi0uZ3Jva19hcGlfdjIuUHJlcGFpZEJhbGFuY2VDaGFuZ2UuVG9wVXBTdGF0dXNIAogBARJFCg1jaGFuZ2Vfb3JpZ2luGAYgASgOMi4uZ3Jva19hcGlfdjIuUHJlcGFpZEJhbGFuY2VDaGFuZ2UuQ2hhbmdlT3JpZ2luIocBCgtUb3BVcFN0YXR1cxILCgdJTlZBTElEEAASFwoTVE9fR0VORVJBVEVfSU5WT0lDRRABEh4KGkZBSUxFRF9UT19HRU5FUkFURV9JTlZPSUNFEAISDQoJVE9fQ0hBUkdFEAMSFAoQRkFJTEVEX1RPX0NIQVJHRRAEEg0KCVNVQ0NFRURFRBAFInEKDENoYW5nZU9yaWdpbhISCg5JTlZBTElEX09SSUdJThAAEgwKCFBVUkNIQVNFEAESCQoFU1BFTkQQAhIKCgZSRUZVTkQQAxIKCgZNQU5VQUwQBBIRCg1BVVRPX1BVUkNIQVNFEAUSCQoFUFJPTU8QBkINCgtfaW52b2ljZV9pZEIUChJfaW52b2ljZV9yZWZlcmVuY2VCDwoNX3RvcHVwX3N0YXR1cyJ6CiFMaXN0UHJlcGFpZEJhbGFuY2VDaGFuZ2VzUmVzcG9uc2USMgoHY2hhbmdlcxgBIAMoCzIhLmdyb2tfYXBpX3YyLlByZXBhaWRCYWxhbmNlQ2hhbmdlEiEKBXRvdGFsGAIgASgLMhIucHJvZF9jaGFyZ2VyLkNlbnQizQEKDUF1dG9Ub3B1cFJ1bGUSDwoHZW5hYmxlZBgBIAEoCBIxChVtaW5fYmVmb3JlX2hpdHRpbmdfc2wYAiABKAsyEi5wcm9kX2NoYXJnZXIuQ2VudBIoCgx0b3B1cF9hbW91bnQYAyABKAsyEi5wcm9kX2NoYXJnZXIuQ2VudBI1ChRtYXhfYW1vdW50X3Blcl9tb250aBgEIAEoCzISLnByb2RfY2hhcmdlci5DZW50SACIAQFCFwoVX21heF9hbW91bnRfcGVyX21vbnRoIlIKGEdldEF1dG9Ub3B1cFJ1bGVSZXNwb25zZRItCgRydWxlGAEgASgLMhouZ3Jva19hcGlfdjIuQXV0b1RvcHVwUnVsZUgAiAEBQgcKBV9ydWxlIkMKF1NldEF1dG9Ub3B1cFJ1bGVSZXF1ZXN0EigKBHJ1bGUYASABKAsyGi5ncm9rX2FwaV92Mi5BdXRvVG9wdXBSdWxlIhoKGFNldEF1dG9Ub3B1cFJ1bGVSZXNwb25zZSKgAQoZR2V0QXV0b1RvcHVwU3RhdHNSZXNwb25zZRImCh5jdXJyX251bV9vZl90b3B1cHNfaW5fMjRfaG91cnMYASABKAMSJQodbWF4X251bV9vZl90b3B1cHNfaW5fMjRfaG91cnMYAiABKAMSNAoYYW1vdW50X3RvcHBlZF91cF90aGlzX2JwGAMgASgLMhIucHJvZF9jaGFyZ2VyLkNlbnQqfQoLVG9wVXBNZXRob2QSHQoZVE9QX1VQX01FVEhPRF9VTlNQRUNJRklFRBAAEiYKIlRPUF9VUF9NRVRIT0RfU0FWRURfUEFZTUVOVF9NRVRIT0QQARInCiNUT1BfVVBfTUVUSE9EX0lOTElORV9QQVlNRU5UX01FVEhPRBACMpMGChBHcm9rQnVpbGRCaWxsaW5nEm0KFEdldEdyb2tDcmVkaXRzQ29uZmlnEiguZ3Jva19hcGlfdjIuR2V0R3Jva0NyZWRpdHNDb25maWdSZXF1ZXN0GikuZ3Jva19hcGlfdjIuR2V0R3Jva0NyZWRpdHNDb25maWdSZXNwb25zZSIAEmUKGUxpc3RQcmVwYWlkQmFsYW5jZUNoYW5nZXMSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaLi5ncm9rX2FwaV92Mi5MaXN0UHJlcGFpZEJhbGFuY2VDaGFuZ2VzUmVzcG9uc2UiABKOAQofVG9wVXBPckdldEV4aXN0aW5nUGVuZGluZ0NoYW5nZRIzLmdyb2tfYXBpX3YyLlRvcFVwT3JHZXRFeGlzdGluZ1BlbmRpbmdDaGFuZ2VSZXF1ZXN0GjQuZ3Jva19hcGlfdjIuVG9wVXBPckdldEV4aXN0aW5nUGVuZGluZ0NoYW5nZVJlc3BvbnNlIgASiAEKHVRvcFVwVXNpbmdJbmxpbmVQYXltZW50TWV0aG9kEjEuZ3Jva19hcGlfdjIuVG9wVXBVc2luZ0lubGluZVBheW1lbnRNZXRob2RSZXF1ZXN0GjIuZ3Jva19hcGlfdjIuVG9wVXBVc2luZ0lubGluZVBheW1lbnRNZXRob2RSZXNwb25zZSIAElMKEEdldEF1dG9Ub3B1cFJ1bGUSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaJS5ncm9rX2FwaV92Mi5HZXRBdXRvVG9wdXBSdWxlUmVzcG9uc2UiABJhChBTZXRBdXRvVG9wdXBSdWxlEiQuZ3Jva19hcGlfdjIuU2V0QXV0b1RvcHVwUnVsZVJlcXVlc3QaJS5ncm9rX2FwaV92Mi5TZXRBdXRvVG9wdXBSdWxlUmVzcG9uc2UiABJVChFHZXRBdXRvVG9wdXBTdGF0cxIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRomLmdyb2tfYXBpX3YyLkdldEF1dG9Ub3B1cFN0YXRzUmVzcG9uc2UiAGIGcHJvdG8z", [
    YH,
    GH,
    yb
]), Is = Qm(qm(Cs, 7, 0)), Po = Qm(qm(Cs, 7, 1)), gG = sn(Cs, 9), wb = Qm(qm(Cs, 0)), vG = NO(Cs, 0);
function mu(e, t) {
    const r = e?.val ?? 0n;
    if (r > BigInt(Number.MAX_SAFE_INTEGER) || r < -BigInt(Number.MAX_SAFE_INTEGER)) throw new RangeError(`Cent value ${r} exceeds the safe integer range`);
    return Cc(Number(r), t);
}
a(mu, "moneyFromCent");
function _o(e) {
    return At(hG, {
        val: BigInt(Ic(e))
    });
}
a(_o, "centFromMoney");
function As(e, t) {
    const r = mu(e.amount, t), n = {
        id: [
            e.invoiceId ?? e.invoiceReference ?? "",
            e.originCode,
            e.createdAtMs,
            r.unitMicros
        ].join(":"),
        kind: e.origin,
        amount: {
            currencyCode: t,
            unitMicros: 0 - r.unitMicros
        },
        createdAt: e.createdAtMs
    }, o = LO(e.status);
    return o !== void 0 && (n.status = o), n;
}
a(As, "mapBalanceChange");
function DO(e) {
    const t = new Map;
    return e.map((r)=>{
        const n = t.get(r.id) ?? 0;
        return t.set(r.id, n + 1), n === 0 ? r : {
            ...r,
            id: `${r.id}#${n}`
        };
    });
}
a(DO, "dedupeHistoryIds");
var bG = {
    succeeded: "succeeded",
    "failed-charge": "failed",
    "failed-invoice": "failed",
    pending: "pending"
};
function LO(e) {
    return e === void 0 ? void 0 : bG[e];
}
a(LO, "mapTopUpStatus");
function Sb(e, t) {
    const r = e?.amount === void 0 ? t : As(e, t.currencyCode).amount;
    switch(e?.status){
        case "succeeded":
            return {
                kind: "succeeded",
                amount: r
            };
        case "pending":
            return {
                kind: "processing",
                amount: r,
                reference: e.invoiceReference ?? e.invoiceId ?? As(e, t.currencyCode).id
            };
        case "failed-charge":
            return {
                kind: "failed",
                amount: r,
                code: "CHARGE_FAILED",
                retriable: !0
            };
        case "failed-invoice":
            return {
                kind: "failed",
                amount: r,
                code: "INVOICE_GENERATION_FAILED",
                retriable: !0
            };
        default:
            throw new Pe("UNKNOWN_TOP_UP_STATUS", "The server answered with a top-up status this adapter does not know", {
                retriable: !0
            });
    }
}
a(Sb, "mapTopUpOutcome");
function Rs(e, t) {
    const r = mu(e, t);
    return {
        ...r,
        unitMicros: Math.abs(r.unitMicros)
    };
}
a(Rs, "moneyMagnitudeFromCent");
function uu(e, t) {
    if (e === void 0) return null;
    const r = Rs(e.topupAmount, t);
    if (!e.enabled && r.unitMicros === 0) return null;
    const n = Rs(e.maxAmountPerMonth, t);
    return {
        enabled: e.enabled,
        threshold: Rs(e.minBeforeHittingSl, t),
        amount: r,
        monthlyCap: n.unitMicros === 0 ? null : n
    };
}
a(uu, "mapAutoTopUpRule");
function FO(e, t) {
    if (e === null) {
        const r = _o({
            currencyCode: t,
            unitMicros: 0
        });
        return {
            enabled: !1,
            minBeforeHittingSl: r,
            topupAmount: r,
            maxAmountPerMonth: void 0
        };
    }
    return {
        enabled: e.enabled,
        minBeforeHittingSl: _o(e.threshold),
        topupAmount: _o(e.amount),
        maxAmountPerMonth: e.monthlyCap === null ? void 0 : _o(e.monthlyCap)
    };
}
a(FO, "mapAutoTopUpRuleRequest");
function VO(e, t) {
    return At(xG, e === "stripe-hosted" ? {
        location: {
            case: "stripeHosted",
            value: {
                successUrl: t ?? ""
            }
        }
    } : {
        location: {
            case: "embedded",
            value: {
                returnUrl: t ?? ""
            }
        }
    });
}
a(VO, "mapCheckoutUiLocation");
function BO(e, t) {
    return t === "stripe-hosted" ? e.url !== void 0 && e.url !== "" ? {
        kind: "redirect",
        url: e.url
    } : void 0 : e.clientSecret !== void 0 && e.clientSecret !== "" ? {
        kind: "embedded",
        clientSecret: e.clientSecret
    } : void 0;
}
a(BO, "mapInlineHandoff");
var yG = "USD", wG = 20;
function UO(e) {
    return {
        minimum: so(5, e),
        maximum: so(1e4, e),
        monthlyCapMaximum: so(1e6, e)
    };
}
a(UO, "defaultLimits");
var SG = {
    [Fe.PermissionDenied]: {
        code: "PERMISSION_DENIED",
        retriable: !1
    },
    [Fe.Unauthenticated]: {
        code: "SUBJECT_REQUIRED",
        retriable: !1
    },
    [Fe.FailedPrecondition]: {
        code: "PREPAID_UNAVAILABLE",
        retriable: !1
    },
    [Fe.InvalidArgument]: {
        code: "INVALID_REQUEST",
        retriable: !1
    },
    [Fe.ResourceExhausted]: {
        code: "RATE_LIMITED",
        retriable: !0
    },
    [Fe.NotFound]: {
        code: "NOT_FOUND",
        retriable: !1
    }
};
function jO(e) {
    const t = SG[e.code];
    if (t !== void 0) return new Pe(t.code, e.rawMessage, {
        retriable: t.retriable
    });
}
a(jO, "businessErrorFrom");
async function kn(e) {
    try {
        return await e();
    } catch (t) {
        if (t instanceof vt) {
            const r = jO(t);
            if (r !== void 0) throw r;
        }
        throw t;
    }
}
a(kn, "call");
async function zO(e) {
    try {
        return await kn(e);
    } catch (t) {
        throw t instanceof Pe ? t.retriable ? new Pe(t.code, t.message, {
            retriable: !1
        }) : t : new Pe("INLINE_TOP_UP_INTERRUPTED", "The inline top-up request did not complete; a checkout session may already exist", {
            retriable: !1
        });
    }
}
a(zO, "callNonRetriable");
var EG = 6e4;
function HO(e, { authed: t = !0, currencyCode: r = yG, countryCode: n, limits: o = UO(r), historyLimit: i = wG, inlineCheckout: s = "stripe-hosted" }) {
    function c() {
        if (!t) throw new Pe("SUBJECT_REQUIRED", "This operation requires an authenticated billing account", {
            retriable: !1
        });
    }
    a(c, "requireSubject");
    async function l() {
        try {
            const [x, g, y] = await Promise.all([
                kn(()=>e.getAutoTopupRule()),
                kn(()=>e.getAutoTopupStats()),
                kn(()=>e.getSupportedTopUpMethod(n))
            ]);
            return {
                permitted: !0,
                rule: uu(x, r),
                spent: Rs(g.amountToppedUpThisBp, r),
                availability: y === void 0 ? {
                    kind: "unavailable",
                    reason: "unknown"
                } : {
                    kind: "available",
                    topUpMethod: y
                }
            };
        } catch (x) {
            if (x instanceof Pe && x.code === "PERMISSION_DENIED") return {
                permitted: !1
            };
            throw x;
        }
    }
    a(l, "readManagement");
    const m = new Map, u = new Map, d = new Map, p = new Set;
    async function h(x) {
        let g;
        try {
            g = await e.listBalanceChanges();
        } catch  {
            return {
                kind: "unknown"
            };
        }
        const y = g.rows.map((w)=>({
                wireRow: w,
                row: As(w, r)
            })).filter(({ row: w })=>w.kind === "purchase" && Ln(w.amount, x.amount) && w.createdAt >= x.startedAt - EG).toSorted((w, b)=>b.row.createdAt - w.row.createdAt)[0];
        return y === void 0 ? {
            kind: "no-charge"
        } : {
            kind: "recovered",
            outcome: Sb(y.wireRow, x.amount)
        };
    }
    a(h, "recoverFromLedger");
    async function f(x, g) {
        const y = m.get(g);
        if (y !== void 0) {
            const T = await h(y);
            if (T.kind === "recovered") return T.outcome;
            if (T.kind === "unknown") throw new Pe("LEDGER_UNAVAILABLE", "Could not confirm whether the earlier top-up was charged", {
                retriable: !0
            });
        }
        const w = y ?? {
            amount: x,
            startedAt: Date.now()
        };
        m.set(g, w);
        let b;
        try {
            b = await kn(()=>e.topUp(_o(x)));
        } catch (T) {
            if (T instanceof Pe) throw T;
            const R = await h(w);
            if (R.kind === "recovered") return R.outcome;
            throw T;
        }
        return Sb(b, x);
    }
    a(f, "sendTopUp");
    async function v(x, g, y) {
        const w = BO(await zO(()=>e.topUpInline(_o(x), VO(s, g), y ?? n)), s);
        if (w === void 0) throw new Pe("INLINE_TOP_UP_UNAVAILABLE", "The server returned no checkout session for the top-up", {
            retriable: !1
        });
        return w;
    }
    return a(v, "mintInlineSession"), {
        capabilities: {
            authed: t
        },
        async getWallet () {
            c();
            const [x, g] = await Promise.all([
                kn(()=>e.listBalanceChanges()),
                l()
            ]), y = DO(x.rows.map((T)=>As(T, r)).toSorted((T, R)=>R.createdAt - T.createdAt)), w = y.filter((T)=>T.status === "pending").length, b = {
                balance: {
                    currencyCode: r,
                    unitMicros: 0 - mu(x.total, r).unitMicros
                },
                pendingTopUps: w,
                limits: o,
                history: y.slice(0, i)
            };
            return g.permitted ? {
                ...b,
                availability: g.availability,
                autoTopUp: g.rule,
                autoTopUpSpentThisPeriod: g.spent
            } : {
                ...b,
                availability: {
                    kind: "unavailable",
                    reason: "not-permitted"
                },
                autoTopUp: null,
                autoTopUpSpentThisPeriod: so(0, r)
            };
        },
        topUp ({ amount: x, idempotencyKey: g }) {
            c();
            const y = u.get(g);
            if (y !== void 0) return y;
            const w = f(x, g).finally(()=>{
                u.delete(g);
            });
            return u.set(g, w), w;
        },
        startInlineTopUp ({ amount: x, idempotencyKey: g, returnUrl: y, countryCode: w }) {
            c();
            const b = d.get(g);
            if (b !== void 0) return b;
            if (p.has(g)) return Promise.reject(new Pe("INLINE_TOP_UP_INTERRUPTED", "This inline top-up already failed once and must not be sent again; a checkout session may exist", {
                retriable: !1
            }));
            if (s === "stripe-hosted" && (y === void 0 || y.trim() === "")) return Promise.reject(new Pe("RETURN_URL_REQUIRED", "A hosted inline top-up needs a returnUrl to send the payer back to", {
                retriable: !1
            }));
            const T = v(x, y, w);
            return d.set(g, T), T.catch(()=>{
                d.delete(g), p.add(g);
            }), T;
        },
        async setAutoTopUpRule (x) {
            c();
            const g = FO(x, r);
            try {
                await kn(()=>e.setAutoTopupRule(g));
            } catch (y) {
                throw x?.enabled === !0 && y instanceof Pe && y.code === "PREPAID_UNAVAILABLE" ? new Pe("PAYMENT_METHOD_REQUIRED", y.message, {
                    retriable: !1
                }) : y;
            }
            try {
                return uu(await kn(()=>e.getAutoTopupRule()), r);
            } catch (y) {
                if (y instanceof Pe) throw y;
                return uu(g, r);
            }
        }
    };
}
a(HO, "createPrepaidEdgeFromWire");
var kG = {
    [Po.INVALID_ORIGIN]: "unknown",
    [Po.PURCHASE]: "purchase",
    [Po.SPEND]: "spend",
    [Po.REFUND]: "refund",
    [Po.MANUAL]: "adjustment",
    [Po.AUTO_PURCHASE]: "auto-purchase",
    [Po.PROMO]: "adjustment"
};
function GO(e) {
    switch(e){
        case Is.SUCCEEDED:
            return "succeeded";
        case Is.FAILED_TO_CHARGE:
            return "failed-charge";
        case Is.FAILED_TO_GENERATE_INVOICE:
            return "failed-invoice";
        case Is.TO_CHARGE:
        case Is.TO_GENERATE_INVOICE:
            return "pending";
        default:
            return;
    }
}
a(GO, "rowStatus");
function Eb(e) {
    return {
        amount: e.amount,
        createdAtMs: e.createTime === void 0 ? 0 : a3(e.createTime),
        invoiceId: e.invoiceId,
        invoiceReference: e.invoiceReference,
        origin: kG[e.changeOrigin] ?? "unknown",
        originCode: e.changeOrigin,
        status: GO(e.topupStatus)
    };
}
a(Eb, "grokBillingRow");
function $O(e) {
    if (e !== void 0) return {
        enabled: e.enabled,
        minBeforeHittingSl: e.minBeforeHittingSl,
        topupAmount: e.topupAmount,
        maxAmountPerMonth: e.maxAmountPerMonth
    };
}
a($O, "grokBillingRule");
function KO(e) {
    switch(e){
        case wb.SAVED_PAYMENT_METHOD:
            return "saved-payment-method";
        case wb.INLINE_PAYMENT_METHOD:
            return "inline-payment-method";
        default:
            return;
    }
}
a(KO, "topUpMethod");
function WO(e, t = {}) {
    const r = yO(vG, e);
    return HO({
        async listBalanceChanges () {
            const n = await r.listPrepaidBalanceChanges({});
            return {
                rows: n.changes.map(Eb),
                total: n.total
            };
        },
        async getAutoTopupRule () {
            return $O((await r.getAutoTopupRule({})).rule);
        },
        async getAutoTopupStats () {
            return {
                amountToppedUpThisBp: (await r.getAutoTopupStats({})).amountToppedUpThisBp
            };
        },
        async getSupportedTopUpMethod () {
            return KO((await r.getGrokCreditsConfig({
                excludeLegacyMonthlyUsage: !0
            })).config?.topUpMethod ?? wb.UNSPECIFIED);
        },
        async topUp (n) {
            const o = await r.topUpOrGetExistingPendingChange({
                amount: n
            });
            return o.change === void 0 ? void 0 : Eb(o.change);
        },
        async topUpInline (n, o) {
            const i = await r.topUpUsingInlinePaymentMethod({
                amount: n,
                checkoutUiLocation: o
            });
            return {
                url: i.checkoutSessionIds?.url,
                clientSecret: i.checkoutSessionIds?.clientSecret
            };
        },
        async setAutoTopupRule (n) {
            await r.setAutoTopupRule({
                rule: At(gG, n)
            });
        }
    }, t);
}
a(WO, "createGrokBillingPrepaidEdge");
function YO() {
    try {
        new Headers;
    } catch  {
        throw new Error("connect-web requires the fetch API. Are you running on an old version of Node.js? Node.js is not supported in Connect for Web - please stay tuned for Connect for Node.");
    }
}
a(YO, "assertFetchApi");
function kb(e, t) {
    const r = db(e);
    if (r) throw t.forEach((n, o)=>{
        r.metadata.append(o, n);
    }), r;
    if (!t.has(Ya) && !e.has(Ya)) throw new vt("protocol error: missing status", Fe.Internal);
}
a(kb, "validateTrailer");
function Tb(e, t, r, n) {
    var o, i;
    const s = new Headers(r ?? {});
    s.set(iG, e ? mG : uG), s.set(lG, "1");
    const c = (i = (o = s.get(AO)) !== null && o !== void 0 ? o : s.get(RO)) !== null && i !== void 0 ? i : "connect-es/2.2.0";
    return s.set(RO, c), n && s.set(AO, c), t !== void 0 && s.set(sG, `${t}m`), s;
}
a(Tb, "requestHeader");
function XO(e) {
    switch(e){
        case 400:
            return Fe.Internal;
        case 401:
            return Fe.Unauthenticated;
        case 403:
            return Fe.PermissionDenied;
        case 404:
            return Fe.Unimplemented;
        case 429:
            return Fe.Unavailable;
        case 502:
            return Fe.Unavailable;
        case 503:
            return Fe.Unavailable;
        case 504:
            return Fe.Unavailable;
        default:
            return Fe.Unknown;
    }
}
a(XO, "codeFromHttpStatus");
function Cb(e, t) {
    var r;
    if (e >= 200 && e < 300) return {
        foundStatus: t.has(Ya),
        headerError: db(t)
    };
    throw new vt(decodeURIComponent((r = t.get(IO)) !== null && r !== void 0 ? r : `HTTP ${e}`), XO(e), t);
}
a(Cb, "validateResponse");
var Mo = function(e) {
    return this instanceof Mo ? (this.v = e, this) : new Mo(e);
}, TG = function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(e, t || []), o, i = [];
    return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", s), o[Symbol.asyncIterator] = function() {
        return this;
    }, o;
    function s(h) {
        return function(f) {
            return Promise.resolve(f).then(h, d);
        };
    }
    function c(h, f) {
        n[h] && (o[h] = function(v) {
            return new Promise(function(x, g) {
                i.push([
                    h,
                    v,
                    x,
                    g
                ]) > 1 || l(h, v);
            });
        }, f && (o[h] = f(o[h])));
    }
    function l(h, f) {
        try {
            m(n[h](f));
        } catch (v) {
            p(i[0][3], v);
        }
    }
    function m(h) {
        h.value instanceof Mo ? Promise.resolve(h.value.v).then(u, d) : p(i[0][2], h);
    }
    function u(h) {
        l("next", h);
    }
    function d(h) {
        l("throw", h);
    }
    function p(h, f) {
        h(f), i.shift(), i.length && l(i[0][0], i[0][1]);
    }
}, ZO = {
    redirect: "error"
};
function qO(e) {
    var t;
    YO();
    const r = (t = e.useBinaryFormat) !== null && t !== void 0 ? t : !0;
    return {
        async unary (n, o, i, s, c, l) {
            const { serialize: m, parse: u } = xb(n, r, e.jsonOptions, e.binaryOptions);
            return i = i === void 0 ? e.defaultTimeoutMs : i <= 0 ? void 0 : i, await MO({
                interceptors: e.interceptors,
                signal: o,
                timeoutMs: i,
                req: {
                    stream: !1,
                    service: n.parent,
                    method: n,
                    requestMethod: "POST",
                    url: pb(e.baseUrl, n),
                    header: Tb(r, i, s, !1),
                    contextValues: l ?? lb(),
                    message: c
                },
                next: a(async (d)=>{
                    var p;
                    const f = await ((p = e.fetch) !== null && p !== void 0 ? p : globalThis.fetch)(d.url, Object.assign(Object.assign({}, ZO), {
                        method: d.requestMethod,
                        headers: d.header,
                        signal: d.signal,
                        body: sb(0, m(d.message))
                    })), { headerError: v } = Cb(f.status, f.headers);
                    if (!f.body) throw v !== void 0 ? v : "missing response body";
                    const x = ib(f.body).getReader();
                    let g, y;
                    for(;;){
                        const w = await x.read();
                        if (w.done) break;
                        const { flags: b, data: T } = w.value;
                        if ((b & hO) === hO) throw new vt("protocol error: received unsupported compressed output", Fe.Internal);
                        if (b === mb) {
                            if (g !== void 0) throw "extra trailer";
                            g = ub(T);
                            continue;
                        }
                        if (y !== void 0) throw new vt("extra message", Fe.Unimplemented);
                        y = u(T);
                    }
                    if (g === void 0) throw v !== void 0 ? v : new vt("missing trailer", f.headers.has(Ya) ? Fe.Unimplemented : Fe.Unknown);
                    if (kb(g, f.headers), y === void 0) throw new vt("missing message", g.has(Ya) ? Fe.Unimplemented : Fe.Unknown);
                    return {
                        stream: !1,
                        service: n.parent,
                        method: n,
                        header: f.headers,
                        message: y,
                        trailer: g
                    };
                }, "next")
            });
        },
        async stream (n, o, i, s, c, l) {
            const { serialize: m, parse: u } = xb(n, r, e.jsonOptions, e.binaryOptions);
            function d(h, f, v, x, g) {
                return TG(this, arguments, a(function*() {
                    const w = ib(h).getReader();
                    if (f) {
                        if (!(yield Mo(w.read())).done) throw "extra data for trailers-only";
                        return yield Mo(void 0);
                    }
                    let b = !1;
                    for(;;){
                        const T = yield Mo(w.read());
                        if (T.done) break;
                        const { flags: R, data: E } = T.value;
                        if ((R & mb) === mb) {
                            if (b) throw "extra trailer";
                            b = !0;
                            const S = ub(E);
                            kb(S, x), S.forEach((A, C)=>v.set(C, A));
                            continue;
                        }
                        if (b) throw "extra message";
                        yield yield Mo(u(E));
                    }
                    if ("throwIfAborted" in g && g.throwIfAborted(), !b) throw "missing trailer";
                }, "parseResponseBody_1"));
            }
            a(d, "parseResponseBody");
            async function p(h) {
                if (n.methodKind != "server_streaming") throw "The fetch API does not support streaming request bodies";
                const f = await h[Symbol.asyncIterator]().next();
                if (f.done == !0) throw "missing request message";
                return sb(0, m(f.value));
            }
            return a(p, "createRequestBody"), i = i === void 0 ? e.defaultTimeoutMs : i <= 0 ? void 0 : i, OO({
                interceptors: e.interceptors,
                signal: o,
                timeoutMs: i,
                req: {
                    stream: !0,
                    service: n.parent,
                    method: n,
                    requestMethod: "POST",
                    url: pb(e.baseUrl, n),
                    header: Tb(r, i, s, !1),
                    contextValues: l ?? lb(),
                    message: c
                },
                next: a(async (h)=>{
                    var f;
                    const x = await ((f = e.fetch) !== null && f !== void 0 ? f : globalThis.fetch)(h.url, Object.assign(Object.assign({}, ZO), {
                        method: h.requestMethod,
                        headers: h.header,
                        signal: h.signal,
                        body: await p(h.message)
                    })), { foundStatus: g, headerError: y } = Cb(x.status, x.headers);
                    if (y != null) throw y;
                    if (!x.body) throw "missing response body";
                    const w = new Headers;
                    return Object.assign(Object.assign({}, h), {
                        header: x.headers,
                        trailer: w,
                        message: d(x.body, g, w, x.headers, h.signal)
                    });
                }, "next")
            });
        }
    };
}
a(qO, "createGrpcWebTransport");
var CG = 3e4;
function QO(e) {
    return (t)=>async (r)=>(r.header.set("Authorization", `Bearer ${await e()}`), t(r));
}
a(QO, "createXaiBearerInterceptor");
function JO(e) {
    let t;
    try {
        t = new URL(e);
    } catch  {
        throw new Error("xai-commerce-prepaid: baseUrl is not a URL");
    }
    if (t.protocol !== "https:" || t.pathname !== "/" || t.search !== "" || t.hash !== "" || t.username !== "" || t.password !== "") throw new Error("xai-commerce-prepaid: baseUrl must be a bare https origin");
}
a(JO, "assertBareHttpsOrigin");
function eD({ baseUrl: e, getBearer: t, edge: r, defaultTimeoutMs: n = CG }) {
    if (JO(e), !Number.isFinite(n) || n <= 0) throw new Error("xai-commerce-prepaid: defaultTimeoutMs must be a positive number");
    const o = qO({
        baseUrl: e,
        defaultTimeoutMs: n,
        interceptors: [
            QO(t)
        ]
    });
    return WO(o, {
        inlineCheckout: "stripe-hosted",
        ...r
    });
}
a(eD, "createXaiPrepaidEdge");
export { gP as CURSOR_COMMERCE_COPY_KEYS, fP as CURSOR_COMMERCE_STYLESHEET, oH as CURSOR_DASHBOARD_COPY, o_ as CURSOR_SETTINGS_LIMIT_PIN_MS, q0 as CURSOR_SETTINGS_READ_CACHE_MS, n_ as CURSOR_SETTINGS_READ_TIMEOUT_MS, Pe as CommerceBusinessError, xP as CursorAutoTopUpModal, QP as CursorCreditsCard, r_ as CursorMonthlySpendLimitModal, c_ as CursorTopUpModal, pP as PREPAID_ONLY_COMMERCE_CODE, bP as applyCursorCommerceCopy, wi as autoTopUpRulesEqual, WS as createPrepaidClient, B0 as createPrepaidOnlyCommerceClient, V0 as createPrepaidOnlyCommerceEdge, eD as createXaiPrepaidEdge, t_ as cursorSettingsFromReads, Yt as formatMoneyAmount, e_ as hardLimitWriteFromLimitCents, Z0 as limitCentsFromHardLimit, Ln as moneyEqual, Cc as moneyFromMinorUnits, so as moneyFromUnits, Ic as moneyToMinorUnits, s_ as withCursorOwnedSettings };
