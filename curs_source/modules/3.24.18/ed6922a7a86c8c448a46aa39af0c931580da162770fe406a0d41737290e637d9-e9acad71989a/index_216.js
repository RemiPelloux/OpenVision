import { apn } from "./HVr.js";
import { ihi } from "./browser.js";
import { fI } from "./client.js";
import { Qh } from "./debug-build.js";
import { zr } from "./debug-logger.js";
import { $u } from "./index_10.js";
import { Pu, nv } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
import { Pie } from "./utils_29.js";
import { Og } from "./worldwide.js";
function Gce() {
    try {
        return ihi.document.location.href;
    } catch  {
        return "";
    }
}
function Odt(e) {
    const t = Pu();
    if (!t) {
        Qh && zr.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);
        return;
    }
    t.addIntegration(e);
}
function spi(e, t = {}, n = nv()) {
    const { message: i, name: r, email: s, url: o, source: a, associatedEventId: c, tags: l } = e, u = {
        contexts: {
            feedback: {
                contact_email: s,
                name: r,
                message: i,
                url: o,
                source: a,
                associated_event_id: c
            }
        },
        type: "feedback",
        level: "info",
        tags: l
    }, h = n?.getClient() || Pu();
    return h && h.emit("beforeSendFeedback", u, t), n.captureEvent(u, t);
}
function _y_() {
    return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(zzt.userAgent) || /Macintosh/i.test(zzt.userAgent) && zzt.maxTouchPoints && zzt.maxTouchPoints > 1 || !isSecureContext);
}
function hsr(e, t) {
    return {
        ...e,
        ...t,
        tags: {
            ...e.tags,
            ...t.tags
        },
        onFormOpen: ()=>{
            t.onFormOpen?.(), e.onFormOpen?.();
        },
        onFormClose: ()=>{
            t.onFormClose?.(), e.onFormClose?.();
        },
        onSubmitSuccess: (n, i)=>{
            t.onSubmitSuccess?.(n, i), e.onSubmitSuccess?.(n, i);
        },
        onSubmitError: (n)=>{
            t.onSubmitError?.(n), e.onSubmitError?.(n);
        },
        onFormSubmitted: ()=>{
            t.onFormSubmitted?.(), e.onFormSubmitted?.();
        },
        themeDark: {
            ...e.themeDark,
            ...t.themeDark
        },
        themeLight: {
            ...e.themeLight,
            ...t.themeLight
        }
    };
}
function by_(e) {
    const t = oP.createElement("style");
    return t.textContent = `
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`, e && t.setAttribute("nonce", e), t;
}
function _he(e, t) {
    return Object.entries(t).forEach(([n, i])=>{
        e.setAttributeNS(null, n, i);
    }), e;
}
function yy_() {
    const e = (a)=>fbe.document.createElementNS(QVh, a), t = _he(e("svg"), {
        width: `${J0t}`,
        height: `${J0t}`,
        viewBox: `0 0 ${J0t} ${J0t}`,
        fill: "var(--actor-color, var(--foreground))"
    }), n = _he(e("g"), {
        clipPath: "url(#clip0_57_80)"
    }), i = _he(e("path"), {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
    });
    t.appendChild(n).appendChild(i);
    const r = e("defs"), s = _he(e("clipPath"), {
        id: "clip0_57_80"
    }), o = _he(e("rect"), {
        width: `${J0t}`,
        height: `${J0t}`,
        fill: "white"
    });
    return s.appendChild(o), r.appendChild(s), t.appendChild(r).appendChild(s).appendChild(o), t;
}
function Sy_({ triggerLabel: e, triggerAriaLabel: t, shadow: n, styleNonce: i }) {
    const r = oP.createElement("button");
    if (r.type = "button", r.className = "widget__actor", r.ariaHidden = "false", r.ariaLabel = t || e || KNo, r.appendChild(yy_()), e) {
        const o = oP.createElement("span");
        o.appendChild(oP.createTextNode(e)), r.appendChild(o);
    }
    const s = by_(i);
    return {
        el: r,
        appendToDom () {
            n.appendChild(s), n.appendChild(r);
        },
        removeFromDom () {
            r.remove(), s.remove();
        },
        show () {
            r.ariaHidden = "false";
        },
        hide () {
            r.ariaHidden = "true";
        }
    };
}
function yVh(e) {
    return `
  --foreground: ${e.foreground};
  --background: ${e.background};
  --accent-foreground: ${e.accentForeground};
  --accent-background: ${e.accentBackground};
  --success-color: ${e.successColor};
  --error-color: ${e.errorColor};
  --border: ${e.border};
  --box-shadow: ${e.boxShadow};
  --outline: ${e.outline};
  --interactive-filter: ${e.interactiveFilter};
  `;
}
function ky_({ colorScheme: e, themeDark: t, themeLight: n, styleNonce: i }) {
    const r = oP.createElement("style");
    return r.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${e !== "system" ? "color-scheme: only light;" : ""}

  ${yVh(e === "dark" ? {
        ...ZNo,
        ...t
    } : {
        ...JVh,
        ...n
    })}
}

${e === "system" ? `
@media (prefers-color-scheme: dark) {
  :host {
    ${yVh({
        ...ZNo,
        ...t
    })}
  }
}` : ""}
}
`, i && r.setAttribute("nonce", i), r;
}
function Gnt(e, t) {
    for(var n in t)e[n] = t[n];
    return e;
}
function SVh(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
}
function h0(e, t, n) {
    var i, r, s, o = {};
    for(s in t)s == "key" ? i = t[s] : s == "ref" ? r = t[s] : o[s] = t[s];
    if (arguments.length > 2 && (o.children = arguments.length > 3 ? _sr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for(s in e.defaultProps)o[s] === void 0 && (o[s] = e.defaultProps[s]);
    return psr(e, o, i, r, null);
}
function psr(e, t, n, i, r) {
    var s = {
        type: e,
        props: t,
        key: n,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: r ?? ++ejh,
        __i: -1,
        __u: 0
    };
    return r == null && _L.vnode != null && _L.vnode(s), s;
}
function x9n(e) {
    return e.children;
}
function msr(e, t) {
    this.props = e, this.context = t;
}
function jzt(e, t) {
    if (t == null) return e.__ ? jzt(e.__, e.__i + 1) : null;
    for(var n; t < e.__k.length; t++)if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == "function" ? jzt(e) : null;
}
function Cy_(e, t, n) {
    var i, r = e.__v, s = r.__e, o = e.__P;
    if (o) return (i = Gnt({}, r)).__v = r.__v + 1, _L.vnode && _L.vnode(i), BNo(o, i, r, e.__n, o.ownerSVGElement !== void 0, 32 & r.__u ? [
        s
    ] : null, t, s ?? jzt(r), !!(32 & r.__u), n), i.__.__k[i.__i] = i, i.__d = void 0, i.__e != s && kVh(i), i;
}
function kVh(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
        for(e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)if ((n = e.__k[t]) != null && n.__e != null) {
            e.__e = e.__c.base = n.__e;
            break;
        }
        return kVh(e);
    }
}
function wVh(e) {
    (!e.__d && (e.__d = !0) && e1t.push(e) && !gsr.__r++ || tjh !== _L.debounceRendering) && ((tjh = _L.debounceRendering) || njh)(gsr);
}
function gsr() {
    var e, t, n, i = [], r = [];
    for(e1t.sort(JNo); e = e1t.shift();)e.__d && (n = e1t.length, t = Cy_(e, i, r) || t, n === 0 || e1t.length > n ? (UNo(i, t, r), r.length = i.length = 0, t = void 0, e1t.sort(JNo)) : t && _L.__c && _L.__c(t, bsr));
    t && UNo(i, t, r), gsr.__r = 0;
}
function CVh(e, t, n, i, r, s, o, a, c, l, u) {
    var h, p, g, f, v, b = i && i.__k || bsr, y = t.length;
    for(n.__d = c, Ty_(n, t, b), c = n.__d, h = 0; h < y; h++)(g = n.__k[h]) != null && typeof g != "boolean" && typeof g != "function" && (p = g.__i === -1 ? Kzt : b[g.__i] || Kzt, g.__i = h, BNo(e, g, p, r, s, o, a, c, l, u), f = g.__e, g.ref && p.ref != g.ref && (p.ref && $No(p.ref, null, g), u.push(g.ref, g.__c || f, g)), v == null && f != null && (v = f), 65536 & g.__u || p.__k === g.__k ? c = TVh(g, c, e) : typeof g.type == "function" && g.__d !== void 0 ? c = g.__d : f && (c = f.nextSibling), g.__d = void 0, g.__u &= -196609);
    n.__d = c, n.__e = v;
}
function Ty_(e, t, n) {
    var i, r, s, o, a, c = t.length, l = n.length, u = l, h = 0;
    for(e.__k = [], i = 0; i < c; i++)(r = e.__k[i] = (r = t[i]) == null || typeof r == "boolean" || typeof r == "function" ? null : typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? psr(null, r, null, null, r) : ysr(r) ? psr(x9n, {
        children: r
    }, null, null, null) : r.constructor === void 0 && r.__b > 0 ? psr(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r) != null ? (r.__ = e, r.__b = e.__b + 1, a = Ey_(r, n, o = i + h, u), r.__i = a, s = null, a !== -1 && (u--, (s = n[a]) && (s.__u |= 131072)), s == null || s.__v === null ? (a == -1 && h--, typeof r.type != "function" && (r.__u |= 65536)) : a !== o && (a === o + 1 ? h++ : a > o ? u > c - o ? h += a - o : h-- : h = a < o && a == o - 1 ? a - o : 0, a !== i + h && (r.__u |= 65536))) : (s = n[i]) && s.key == null && s.__e && (s.__e == e.__d && (e.__d = jzt(s)), HNo(s, s, !1), n[i] = null, u--);
    if (u) for(i = 0; i < l; i++)(s = n[i]) != null && (131072 & s.__u) == 0 && (s.__e == e.__d && (e.__d = jzt(s)), HNo(s, s));
}
function TVh(e, t, n) {
    var i, r;
    if (typeof e.type == "function") {
        for(i = e.__k, r = 0; i && r < i.length; r++)i[r] && (i[r].__ = e, t = TVh(i[r], t, n));
        return t;
    }
    e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
    do t = t && t.nextSibling;
    while (t != null && t.nodeType === 8)
    return t;
}
function Ey_(e, t, n, i) {
    var r = e.key, s = e.type, o = n - 1, a = n + 1, c = t[n];
    if (c === null || c && r == c.key && s === c.type) return n;
    if (i > (c != null && (131072 & c.__u) == 0 ? 1 : 0)) for(; o >= 0 || a < t.length;){
        if (o >= 0) {
            if ((c = t[o]) && (131072 & c.__u) == 0 && r == c.key && s === c.type) return o;
            o--;
        }
        if (a < t.length) {
            if ((c = t[a]) && (131072 & c.__u) == 0 && r == c.key && s === c.type) return a;
            a++;
        }
    }
    return -1;
}
function EVh(e, t, n) {
    t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || ijh.test(t) ? n : n + "px";
}
function fsr(e, t, n, i, r) {
    var s;
    e: if (t === "style") if (typeof n == "string") e.style.cssText = n;
    else {
        if (typeof i == "string" && (e.style.cssText = i = ""), i) for(t in i)n && t in n || EVh(e.style, t, "");
        if (n) for(t in n)i && n[t] === i[t] || EVh(e.style, t, n[t]);
    }
    else if (t[0] === "o" && t[1] === "n") s = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? i ? n.u = i.u : (n.u = Date.now(), e.addEventListener(t, s ? IVh : xVh, s)) : e.removeEventListener(t, s ? IVh : xVh, s);
    else {
        if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t !== "role" && t in e) try {
            e[t] = n ?? "";
            break e;
        } catch  {}
        typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function xVh(e) {
    if (this.l) {
        var t = this.l[e.type + !1];
        if (e.t) {
            if (e.t <= t.u) return;
        } else e.t = Date.now();
        return t(_L.event ? _L.event(e) : e);
    }
}
function IVh(e) {
    if (this.l) return this.l[e.type + !0](_L.event ? _L.event(e) : e);
}
function BNo(e, t, n, i, r, s, o, a, c, l) {
    var u, h, p, g, f, v, b, y, T, E, A, R, D, P, N, O = t.type;
    if (t.constructor !== void 0) return null;
    128 & n.__u && (c = !!(32 & n.__u), s = [
        a = t.__e = n.__e
    ]), (u = _L.__b) && u(t);
    e: if (typeof O == "function") try {
        if (y = t.props, T = (u = O.contextType) && i[u.__c], E = u ? T ? T.props.value : u.__ : i, n.__c ? b = (h = t.__c = n.__c).__ = h.__E : ("prototype" in O && O.prototype.render ? t.__c = h = new O(y, E) : (t.__c = h = new msr(y, E), h.constructor = O, h.render = Iy_), T && T.sub(h), h.props = y, h.state || (h.state = {}), h.context = E, h.__n = i, p = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), O.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Gnt({}, h.__s)), Gnt(h.__s, O.getDerivedStateFromProps(y, h.__s))), g = h.props, f = h.state, h.__v = t, p) O.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
            if (O.getDerivedStateFromProps == null && y !== g && h.componentWillReceiveProps != null && h.componentWillReceiveProps(y, E), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(y, h.__s, E) === !1 || t.__v === n.__v)) {
                for(t.__v !== n.__v && (h.props = y, h.state = h.__s, h.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(F) {
                    F && (F.__ = t);
                }), A = 0; A < h._sb.length; A++)h.__h.push(h._sb[A]);
                h._sb = [], h.__h.length && o.push(h);
                break e;
            }
            h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, E), h.componentDidUpdate != null && h.__h.push(function() {
                h.componentDidUpdate(g, f, v);
            });
        }
        if (h.context = E, h.props = y, h.__P = e, h.__e = !1, R = _L.__r, D = 0, "prototype" in O && O.prototype.render) {
            for(h.state = h.__s, h.__d = !1, R && R(t), u = h.render(h.props, h.state, h.context), P = 0; P < h._sb.length; P++)h.__h.push(h._sb[P]);
            h._sb = [];
        } else do h.__d = !1, R && R(t), u = h.render(h.props, h.state, h.context), h.state = h.__s;
        while (h.__d && ++D < 25)
        h.state = h.__s, h.getChildContext != null && (i = Gnt(Gnt({}, i), h.getChildContext())), p || h.getSnapshotBeforeUpdate == null || (v = h.getSnapshotBeforeUpdate(g, f)), CVh(e, ysr(N = u != null && u.type === x9n && u.key == null ? u.props.children : u) ? N : [
            N
        ], t, n, i, r, s, o, a, c, l), h.base = t.__e, t.__u &= -161, h.__h.length && o.push(h), b && (h.__E = h.__ = null);
    } catch (F) {
        t.__v = null, c || s != null ? (t.__e = a, t.__u |= c ? 160 : 32, s[s.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), _L.__e(F, t, n);
    }
    else s == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = xy_(n.__e, t, n, i, r, s, o, c, l);
    (u = _L.diffed) && u(t);
}
function UNo(e, t, n) {
    for(var i = 0; i < n.length; i++)$No(n[i], n[++i], n[++i]);
    _L.__c && _L.__c(t, e), e.some(function(r) {
        try {
            e = r.__h, r.__h = [], e.some(function(s) {
                s.call(r);
            });
        } catch (s) {
            _L.__e(s, r.__v);
        }
    });
}
function xy_(e, t, n, i, r, s, o, a, c) {
    var l, u, h, p, g, f, v, b = n.props, y = t.props, T = t.type;
    if (T === "svg" && (r = !0), s != null) {
        for(l = 0; l < s.length; l++)if ((g = s[l]) && "setAttribute" in g == !!T && (T ? g.localName === T : g.nodeType === 3)) {
            e = g, s[l] = null;
            break;
        }
    }
    if (e == null) {
        if (T === null) return document.createTextNode(y);
        e = r ? document.createElementNS("http://www.w3.org/2000/svg", T) : document.createElement(T, y.is && y), s = null, a = !1;
    }
    if (T === null) b === y || a && e.data === y || (e.data = y);
    else {
        if (s = s && _sr.call(e.childNodes), b = n.props || Kzt, !a && s != null) for(b = {}, l = 0; l < e.attributes.length; l++)b[(g = e.attributes[l]).name] = g.value;
        for(l in b)g = b[l], l == "children" || (l == "dangerouslySetInnerHTML" ? h = g : l === "key" || l in y || fsr(e, l, null, g, r));
        for(l in y)g = y[l], l == "children" ? p = g : l == "dangerouslySetInnerHTML" ? u = g : l == "value" ? f = g : l == "checked" ? v = g : l === "key" || a && typeof g != "function" || b[l] === g || fsr(e, l, g, b[l], r);
        if (u) a || h && (u.__html === h.__html || u.__html === e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
        else if (h && (e.innerHTML = ""), CVh(e, ysr(p) ? p : [
            p
        ], t, n, i, r && T !== "foreignObject", s, o, s ? s[0] : n.__k && jzt(n, 0), a, c), s != null) for(l = s.length; l--;)s[l] != null && SVh(s[l]);
        a || (l = "value", f !== void 0 && (f !== e[l] || T === "progress" && !f || T === "option" && f !== b[l]) && fsr(e, l, f, b[l], !1), l = "checked", v !== void 0 && v !== e[l] && fsr(e, l, v, b[l], !1));
    }
    return e;
}
function $No(e, t, n) {
    try {
        typeof e == "function" ? e(t) : e.current = t;
    } catch (i) {
        _L.__e(i, n);
    }
}
function HNo(e, t, n) {
    var i, r;
    if (_L.unmount && _L.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || $No(i, null, t)), (i = e.__c) != null) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (s) {
            _L.__e(s, t);
        }
        i.base = i.__P = null, e.__c = void 0;
    }
    if (i = e.__k) for(r = 0; r < i.length; r++)i[r] && HNo(i[r], t, n || typeof e.type != "function");
    n || e.__e == null || SVh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Iy_(e, t, n) {
    return this.constructor(e, n);
}
function Ay_(e, t, n) {
    var i, r, s, o;
    _L.__ && _L.__(e, t), r = (i = !1) ? null : t.__k, s = [], o = [], BNo(t, e = t.__k = h0(x9n, null, [
        e
    ]), r || Kzt, Kzt, t.ownerSVGElement !== void 0, r ? null : t.firstChild ? _sr.call(t.childNodes) : null, s, r ? r.__e : t.firstChild, i, o), e.__d = void 0, UNo(s, e, o);
}
function Z0t(e, t) {
    bF.__h && bF.__h(bL, e, t1t || t), t1t = 0;
    var n = bL.__H || (bL.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({
        __V: R9n
    }), n.__[e];
}
function Q0t(e) {
    return t1t = 1, AVh(DVh, e);
}
function AVh(e, t, n) {
    var i = Z0t(b7e++, 2);
    if (i.t = e, !i.__c && (i.__ = [
        n ? n(t) : DVh(void 0, t),
        function(a) {
            var c = i.__N ? i.__N[0] : i.__[0], l = i.t(c, a);
            c !== l && (i.__N = [
                l,
                i.__[1]
            ], i.__c.setState({}));
        }
    ], i.__c = bL, !bL.u)) {
        var r = function(a, c, l) {
            if (!i.__c.__H) return !0;
            var u = i.__c.__H.__.filter(function(p) {
                return !!p.__c;
            });
            if (u.every(function(p) {
                return !p.__N;
            })) return !s || s.call(this, a, c, l);
            var h = !1;
            return u.forEach(function(p) {
                if (p.__N) {
                    var g = p.__[0];
                    p.__ = p.__N, p.__N = void 0, g !== p.__[0] && (h = !0);
                }
            }), !(!h && i.__c.props === a) && (!s || s.call(this, a, c, l));
        };
        bL.u = !0;
        var s = bL.shouldComponentUpdate, o = bL.componentWillUpdate;
        bL.componentWillUpdate = function(a, c, l) {
            if (this.__e) {
                var u = s;
                s = void 0, r(a, c, l), s = u;
            }
            o && o.call(this, a, c, l);
        }, bL.shouldComponentUpdate = r;
    }
    return i.__N || i.__;
}
function Ry_(e, t) {
    var n = Z0t(b7e++, 3);
    !bF.__s && GNo(n.__H, t) && (n.__ = e, n.i = t, bL.__H.__h.push(n));
}
function RVh(e, t) {
    var n = Z0t(b7e++, 4);
    !bF.__s && GNo(n.__H, t) && (n.__ = e, n.i = t, bL.__h.push(n));
}
function Dy_(e) {
    return t1t = 5, I9n(function() {
        return {
            current: e
        };
    }, []);
}
function My_(e, t, n) {
    t1t = 6, RVh(function() {
        return typeof e == "function" ? (e(t()), function() {
            return e(null);
        }) : e ? (e.current = t(), function() {
            return e.current = null;
        }) : void 0;
    }, n == null ? n : n.concat(e));
}
function I9n(e, t) {
    var n = Z0t(b7e++, 7);
    return GNo(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function qzt(e, t) {
    return t1t = 8, I9n(function() {
        return e;
    }, t);
}
function Py_(e) {
    var t = bL.context[e.__c], n = Z0t(b7e++, 9);
    return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(bL)), t.props.value) : e.__;
}
function Ly_(e, t) {
    bF.useDebugValue && bF.useDebugValue(t ? t(e) : e);
}
function Ny_(e) {
    var t = Z0t(b7e++, 10), n = Q0t();
    return t.__ = e, bL.componentDidCatch || (bL.componentDidCatch = function(i, r) {
        t.__ && t.__(i, r), n[1](i);
    }), [
        n[0],
        function() {
            n[1](void 0);
        }
    ];
}
function Oy_() {
    var e = Z0t(b7e++, 11);
    if (!e.__) {
        for(var t = bL.__v; t !== null && !t.__m && t.__ !== null;)t = t.__;
        var n = t.__m || (t.__m = [
            0,
            0
        ]);
        e.__ = "P" + n[0] + "-" + n[1]++;
    }
    return e.__;
}
function Fy_() {
    for(var e; e = t2o.shift();)if (e.__P && e.__H) try {
        e.__H.__h.forEach(vsr), e.__H.__h.forEach(WNo), e.__H.__h = [];
    } catch (t) {
        e.__H.__h = [], bF.__e(t, e.__v);
    }
}
function By_(e) {
    var t, n = function() {
        clearTimeout(i), c2o && cancelAnimationFrame(t), setTimeout(e);
    }, i = setTimeout(n, 100);
    c2o && (t = requestAnimationFrame(n));
}
function vsr(e) {
    var t = bL, n = e.__c;
    typeof n == "function" && (e.__c = void 0, n()), bL = t;
}
function WNo(e) {
    var t = bL;
    e.__c = e.__(), bL = t;
}
function GNo(e, t) {
    return !e || e.length !== t.length || t.some(function(n, i) {
        return n !== e[i];
    });
}
function DVh(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Uy_() {
    const e = (i)=>oP.createElementNS(ojh, i), t = _he(e("svg"), {
        width: "32",
        height: "30",
        viewBox: "0 0 72 66",
        fill: "inherit"
    }), n = _he(e("path"), {
        transform: "translate(11, 11)",
        d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
    });
    return t.appendChild(n), t;
}
function $y_({ options: e }) {
    const t = I9n(()=>({
            __html: Uy_().outerHTML
        }), []);
    return h0("h2", {
        class: "dialog__header"
    }, h0("span", {
        class: "dialog__title"
    }, e.formTitle), e.showBranding ? h0("a", {
        class: "brand-link",
        target: "_blank",
        href: "https://sentry.io/welcome/",
        title: "Powered by Sentry",
        rel: "noopener noreferrer",
        dangerouslySetInnerHTML: t
    }) : null);
}
function Hy_(e, t) {
    const n = [];
    return t.isNameRequired && !e.name && n.push(t.nameLabel), t.isEmailRequired && !e.email && n.push(t.emailLabel), e.message || n.push(t.messageLabel), n;
}
function VNo(e, t) {
    const n = e.get(t);
    return typeof n == "string" ? n.trim() : "";
}
function Wy_({ options: e, defaultEmail: t, defaultName: n, onFormClose: i, onSubmit: r, onSubmitSuccess: s, onSubmitError: o, showEmail: a, showName: c, screenshotInput: l }) {
    const { tags: u, addScreenshotButtonLabel: h, removeScreenshotButtonLabel: p, cancelButtonLabel: g, emailLabel: f, emailPlaceholder: v, isEmailRequired: b, isNameRequired: y, messageLabel: T, messagePlaceholder: E, nameLabel: A, namePlaceholder: R, submitButtonLabel: D, isRequiredLabel: P } = e, [N, O] = Q0t(!1), [F, H] = Q0t(null), [$, W] = Q0t(!1), G = l?.input, [q, z] = Q0t(null), X = qzt((K)=>{
        z(K), W(!1);
    }, []), Y = qzt((K)=>{
        const J = Hy_(K, {
            emailLabel: f,
            isEmailRequired: b,
            isNameRequired: y,
            messageLabel: T,
            nameLabel: A
        });
        return J.length > 0 ? H(`Please enter in the following required fields: ${J.join(", ")}`) : H(null), J.length === 0;
    }, [
        f,
        b,
        y,
        T,
        A
    ]), Z = qzt(async (K)=>{
        O(!0);
        try {
            if (K.preventDefault(), !(K.target instanceof HTMLFormElement)) return;
            const J = new FormData(K.target), ne = await (l && $ ? l.value() : void 0), ee = {
                name: VNo(J, "name"),
                email: VNo(J, "email"),
                message: VNo(J, "message"),
                attachments: ne ? [
                    ne
                ] : void 0
            };
            if (!Y(ee)) return;
            try {
                const se = await r({
                    name: ee.name,
                    email: ee.email,
                    message: ee.message,
                    source: YVh,
                    tags: u
                }, {
                    attachments: ee.attachments
                });
                s(ee, se);
            } catch (se) {
                A9n && zr.error(se), H(se), o(se);
            }
        } finally{
            O(!1);
        }
    }, [
        l && $,
        s,
        o
    ]);
    return h0("form", {
        class: "form",
        onSubmit: Z
    }, G && $ ? h0(G, {
        onError: X
    }) : null, h0("fieldset", {
        class: "form__right",
        "data-sentry-feedback": !0,
        disabled: N
    }, h0("div", {
        class: "form__top"
    }, F ? h0("div", {
        class: "form__error-container"
    }, F) : null, c ? h0("label", {
        for: "name",
        class: "form__label"
    }, h0(jNo, {
        label: A,
        isRequiredLabel: P,
        isRequired: y
    }), h0("input", {
        class: "form__input",
        defaultValue: n,
        id: "name",
        name: "name",
        placeholder: R,
        required: y,
        type: "text"
    })) : h0("input", {
        "aria-hidden": !0,
        value: n,
        name: "name",
        type: "hidden"
    }), a ? h0("label", {
        for: "email",
        class: "form__label"
    }, h0(jNo, {
        label: f,
        isRequiredLabel: P,
        isRequired: b
    }), h0("input", {
        class: "form__input",
        defaultValue: t,
        id: "email",
        name: "email",
        placeholder: v,
        required: b,
        type: "email"
    })) : h0("input", {
        "aria-hidden": !0,
        value: t,
        name: "email",
        type: "hidden"
    }), h0("label", {
        for: "message",
        class: "form__label"
    }, h0(jNo, {
        label: T,
        isRequiredLabel: P,
        isRequired: !0
    }), h0("textarea", {
        autoFocus: !0,
        class: "form__input form__input--textarea",
        id: "message",
        name: "message",
        placeholder: E,
        required: !0,
        rows: 5
    })), G ? h0("label", {
        for: "screenshot",
        class: "form__label"
    }, h0("button", {
        class: "btn btn--default",
        disabled: N,
        type: "button",
        onClick: ()=>{
            z(null), W((K)=>!K);
        }
    }, $ ? p : h), q ? h0("div", {
        class: "form__error-container"
    }, q.message) : null) : null), h0("div", {
        class: "btn-group"
    }, h0("button", {
        class: "btn btn--primary",
        disabled: N,
        type: "submit"
    }, D), h0("button", {
        class: "btn btn--default",
        disabled: N,
        type: "button",
        onClick: i
    }, g))));
}
function jNo({ label: e, isRequired: t, isRequiredLabel: n }) {
    return h0("span", {
        class: "form__label__text"
    }, e, t && h0("span", {
        class: "form__label__text--required"
    }, n));
}
function Gy_() {
    const e = (c)=>fbe.document.createElementNS(ajh, c), t = _he(e("svg"), {
        width: `${D9n}`,
        height: `${l2o}`,
        viewBox: `0 0 ${D9n} ${l2o}`,
        fill: "inherit"
    }), n = _he(e("g"), {
        clipPath: "url(#clip0_57_156)"
    }), i = _he(e("path"), {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
    }), r = _he(e("path"), {
        d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
    });
    t.appendChild(n).append(r, i);
    const s = e("defs"), o = _he(e("clipPath"), {
        id: "clip0_57_156"
    }), a = _he(e("rect"), {
        width: `${D9n}`,
        height: `${D9n}`,
        fill: "white",
        transform: "translate(0 0.5)"
    });
    return o.appendChild(a), s.appendChild(o), t.appendChild(s).appendChild(o).appendChild(a), t;
}
function Vy_({ open: e, onFormSubmitted: t, ...n }) {
    const i = n.options, r = I9n(()=>({
            __html: Gy_().outerHTML
        }), []), [s, o] = Q0t(null), a = qzt(()=>{
        s && (clearTimeout(s), o(null)), t();
    }, [
        s
    ]), c = qzt((l, u)=>{
        n.onSubmitSuccess(l, u), o(setTimeout(()=>{
            t(), o(null);
        }, ZVh));
    }, [
        t
    ]);
    return h0(x9n, null, s ? h0("div", {
        class: "success__position",
        onClick: a
    }, h0("div", {
        class: "success__content"
    }, i.successMessageText, h0("span", {
        class: "success__icon",
        dangerouslySetInnerHTML: r
    }))) : h0("dialog", {
        class: "dialog",
        onClick: i.onFormClose,
        open: e
    }, h0("div", {
        class: "dialog__position"
    }, h0("div", {
        class: "dialog__content",
        onClick: (l)=>{
            l.stopPropagation();
        }
    }, h0($y_, {
        options: i
    }), h0(Wy_, {
        ...n,
        onSubmitSuccess: c
    })))));
}
function jy_(e) {
    const t = oP.createElement("style");
    return t.textContent = `
:host {
  --dialog-inset: var(--inset);
}

${cjh}
${ljh}
${ujh}
${djh}
${hjh}
`, e && t.setAttribute("nonce", e), t;
}
function qy_() {
    const e = nv().getUser(), t = fI().getUser(), n = Pie().getUser();
    return e && Object.keys(e).length ? e : t && Object.keys(t).length ? t : n;
}
function zy_({ h: e }) {
    return function() {
        return e("svg", {
            "data-test-id": "icon-close",
            viewBox: "0 0 16 16",
            fill: "#2B2233",
            height: "25px",
            width: "25px"
        }, e("circle", {
            r: "7",
            cx: "8",
            cy: "8",
            fill: "white"
        }), e("path", {
            strokeWidth: "1.5",
            d: "M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z"
        }), e("path", {
            strokeWidth: "1.5",
            d: "M5.34,11.41a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06l5.32-5.32a.75.75,0,0,1,1.06,1.06L5.87,11.19A.74.74,0,0,1,5.34,11.41Z"
        }), e("path", {
            strokeWidth: "1.5",
            d: "M10.66,11.41a.74.74,0,0,1-.53-.22L4.81,5.87A.75.75,0,0,1,5.87,4.81l5.32,5.32a.74.74,0,0,1,0,1.06A.71.71,0,0,1,10.66,11.41Z"
        }));
    };
}
function Ky_(e) {
    const t = oP.createElement("style"), n = "#1A141F", i = "#302735";
    return t.textContent = `
.editor {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.editor__image-container {
  justify-items: center;
  padding: 15px;
  position: relative;
  height: 100%;
  border-radius: var(--menu-border-radius, 6px);

  background-color: ${n};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${n} 8px,
      ${n} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${i} 15px,
      ${i} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container > * {
  object-fit: contain;
  position: absolute;
}

.editor__tool-container {
  padding-top: 8px;
  display: flex;
  justify-content: center;
}

.editor__tool-bar {
  display: flex;
  gap: 8px;
}

.editor__tool {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  background: var(--button-background, var(--background));
  color: var(--button-color, var(--foreground));
}

.editor__tool--active {
  background: var(--button-primary-background, var(--accent-background));
  color: var(--button-primary-color, var(--accent-foreground));
}

.editor__rect {
  position: absolute;
  z-index: 2;
}

.editor__rect button {
  opacity: 0;
  position: absolute;
  top: -12px;
  right: -12px;
  cursor: pointer;
  padding: 0;
  z-index: 3;
  border: none;
  background: none;
}

.editor__rect:hover button {
  opacity: 1;
}
`, e && t.setAttribute("nonce", e), t;
}
function Yy_({ h: e }) {
    return function({ action: n, setAction: i, options: r }) {
        return e("div", {
            class: "editor__tool-container"
        }, e("div", {
            class: "editor__tool-bar"
        }, e("button", {
            type: "button",
            class: `editor__tool ${n === "highlight" ? "editor__tool--active" : ""}`,
            onClick: ()=>{
                i(n === "highlight" ? "" : "highlight");
            }
        }, r.highlightToolText), e("button", {
            type: "button",
            class: `editor__tool ${n === "hide" ? "editor__tool--active" : ""}`,
            onClick: ()=>{
                i(n === "hide" ? "" : "hide");
            }
        }, r.hideToolText)));
    };
}
function Xy_({ hooks: e }) {
    function t() {
        const [n, i] = e.useState(fbe.devicePixelRatio ?? 1);
        return e.useEffect(()=>{
            const r = ()=>{
                i(fbe.devicePixelRatio);
            }, s = matchMedia(`(resolution: ${fbe.devicePixelRatio}dppx)`);
            return s.addEventListener("change", r), ()=>{
                s.removeEventListener("change", r);
            };
        }, []), n;
    }
    return function({ onBeforeScreenshot: i, onScreenshot: r, onAfterScreenshot: s, onError: o }) {
        const a = t();
        e.useEffect(()=>{
            (async ()=>{
                i();
                const l = await zzt.mediaDevices.getDisplayMedia({
                    video: {
                        width: fbe.innerWidth * a,
                        height: fbe.innerHeight * a
                    },
                    audio: !1,
                    monitorTypeSurfaces: "exclude",
                    preferCurrentTab: !0,
                    selfBrowserSurface: "include",
                    surfaceSwitching: "exclude"
                }), u = oP.createElement("video");
                await new Promise((h, p)=>{
                    u.srcObject = l, u.onloadedmetadata = ()=>{
                        r(u, a), l.getTracks().forEach((g)=>g.stop()), h();
                    }, u.play().catch(p);
                }), s();
            })().catch(o);
        }, []);
    };
}
function Zy_(e, t, n) {
    switch(e.type){
        case "highlight":
            {
                t.shadowColor = "rgba(0, 0, 0, 0.7)", t.shadowBlur = 50, t.fillStyle = n, t.fillRect(e.x - 1, e.y - 1, e.w + 2, e.h + 2), t.clearRect(e.x, e.y, e.w, e.h);
                break;
            }
        case "hide":
            t.fillStyle = "rgb(0, 0, 0)", t.fillRect(e.x, e.y, e.w, e.h);
            break;
    }
}
function Vnt(e, t, n) {
    if (!e) return;
    const i = e.getContext("2d", t);
    i && n(e, i);
}
function qNo(e, t) {
    Vnt(e, {
        alpha: !0
    }, (n, i)=>{
        i.drawImage(t, 0, 0, t.width, t.height, 0, 0, n.width, n.height);
    });
}
function zNo(e, t, n) {
    Vnt(e, {
        alpha: !0
    }, (i, r)=>{
        n.length && (r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, i.width, i.height)), n.forEach((s)=>{
            Zy_(s, r, t);
        });
    });
}
function Qy_({ h: e, hooks: t, outputBuffer: n, dialog: i, options: r }) {
    const s = Xy_({
        hooks: t
    }), o = Yy_({
        h: e
    }), a = zy_({
        h: e
    }), c = {
        __html: Ky_(r.styleNonce).innerText
    }, l = i.el.style, u = ({ screenshot: h })=>{
        const [p, g] = t.useState("highlight"), [f, v] = t.useState([]), b = t.useRef(null), y = t.useRef(null), T = t.useRef(null), E = t.useRef(null), [A, R] = t.useState(1), D = t.useMemo(()=>{
            const $ = oP.getElementById(r.id);
            if (!$) return "white";
            const W = getComputedStyle($);
            return W.getPropertyValue("--button-primary-background") || W.getPropertyValue("--accent-background");
        }, [
            r.id
        ]);
        t.useLayoutEffect(()=>{
            const $ = ()=>{
                const W = b.current;
                W && (Vnt(h.canvas, {
                    alpha: !1
                }, (G)=>{
                    const q = Math.min(W.clientWidth / G.width, W.clientHeight / G.height);
                    R(q);
                }), (W.clientHeight === 0 || W.clientWidth === 0) && setTimeout($, 0));
            };
            return $(), fbe.addEventListener("resize", $), ()=>{
                fbe.removeEventListener("resize", $);
            };
        }, [
            h
        ]);
        const P = t.useCallback(($, W)=>{
            Vnt($, {
                alpha: !0
            }, (G, q)=>{
                q.scale(W, W), G.width = h.canvas.width, G.height = h.canvas.height;
            });
        }, [
            h
        ]);
        t.useEffect(()=>{
            P(y.current, h.dpi), qNo(y.current, h.canvas);
        }, [
            h
        ]), t.useEffect(()=>{
            P(T.current, h.dpi), Vnt(T.current, {
                alpha: !0
            }, ($, W)=>{
                W.clearRect(0, 0, $.width, $.height);
            }), zNo(T.current, D, f);
        }, [
            f,
            D
        ]), t.useEffect(()=>{
            P(n, h.dpi), qNo(n, h.canvas), Vnt(oP.createElement("canvas"), {
                alpha: !0
            }, ($, W)=>{
                W.scale(h.dpi, h.dpi), $.width = h.canvas.width, $.height = h.canvas.height, zNo($, D, f), qNo(n, $);
            });
        }, [
            f,
            h,
            D
        ]);
        const N = ($)=>{
            if (!p || !E.current) return;
            const W = E.current.getBoundingClientRect(), G = {
                type: p,
                x: $.offsetX / A,
                y: $.offsetY / A
            }, q = (Y, Z)=>{
                const K = (Z.clientX - W.x) / A, J = (Z.clientY - W.y) / A;
                return {
                    type: Y.type,
                    x: Math.min(Y.x, K),
                    y: Math.min(Y.y, J),
                    w: Math.abs(K - Y.x),
                    h: Math.abs(J - Y.y)
                };
            }, z = (Y)=>{
                Vnt(T.current, {
                    alpha: !0
                }, (Z, K)=>{
                    K.clearRect(0, 0, Z.width, Z.height);
                }), zNo(T.current, D, [
                    ...f,
                    q(G, Y)
                ]);
            }, X = (Y)=>{
                const Z = q(G, Y);
                Z.w * A >= 1 && Z.h * A >= 1 && v((K)=>[
                        ...K,
                        Z
                    ]), oP.removeEventListener("mousemove", z), oP.removeEventListener("mouseup", X);
            };
            oP.addEventListener("mousemove", z), oP.addEventListener("mouseup", X);
        }, O = t.useCallback(($)=>(W)=>{
                W.preventDefault(), W.stopPropagation(), v((G)=>{
                    const q = [
                        ...G
                    ];
                    return q.splice($, 1), q;
                });
            }, []), F = {
            width: `${h.canvas.width * A}px`,
            height: `${h.canvas.height * A}px`
        }, H = ($)=>{
            $.stopPropagation();
        };
        return e("div", {
            class: "editor"
        }, e("style", {
            nonce: r.styleNonce,
            dangerouslySetInnerHTML: c
        }), e("div", {
            class: "editor__image-container"
        }, e("div", {
            class: "editor__canvas-container",
            ref: b
        }, e("canvas", {
            ref: y,
            id: "background",
            style: F
        }), e("canvas", {
            ref: T,
            id: "foreground",
            style: F
        }), e("div", {
            ref: E,
            onMouseDown: N,
            style: F
        }, f.map(($, W)=>e("div", {
                key: W,
                class: "editor__rect",
                style: {
                    top: `${$.y * A}px`,
                    left: `${$.x * A}px`,
                    width: `${$.w * A}px`,
                    height: `${$.h * A}px`
                }
            }, e("button", {
                "aria-label": r.removeHighlightText,
                onClick: O(W),
                onMouseDown: H,
                onMouseUp: H,
                type: "button"
            }, e(a, null))))))), e(o, {
            options: r,
            action: p,
            setAction: g
        }));
    };
    return function({ onError: p }) {
        const [g, f] = t.useState();
        return s({
            onBeforeScreenshot: t.useCallback(()=>{
                l.display = "none";
            }, []),
            onScreenshot: t.useCallback((v, b)=>{
                Vnt(oP.createElement("canvas"), {
                    alpha: !1
                }, (y, T)=>{
                    T.scale(b, b), y.width = v.videoWidth, y.height = v.videoHeight, T.drawImage(v, 0, 0, y.width, y.height), f({
                        canvas: y,
                        dpi: b
                    });
                }), n.width = v.videoWidth, n.height = v.videoHeight;
            }, []),
            onAfterScreenshot: t.useCallback(()=>{
                l.display = "block";
            }, []),
            onError: t.useCallback((v)=>{
                l.display = "block", p(v);
            }, [])
        }), g ? e(u, {
            screenshot: g
        }) : e("div", null);
    };
}
var fbe, oP, zzt, KNo, MVh, PVh, LVh, NVh, OVh, FVh, BVh, UVh, $Vh, HVh, WVh, GVh, VVh, jVh, qVh, zVh, KVh, YVh, XVh, ZVh, YNo, A9n, J0t, QVh, XNo, JVh, ZNo, QNo, _sr, _L, ejh, e1t, tjh, njh, JNo, Kzt, bsr, ijh, ysr, b7e, bL, e2o, rjh, t1t, t2o, R9n, bF, n2o, i2o, r2o, s2o, o2o, a2o, c2o, sjh, ojh, D9n, l2o, ajh, cjh, ljh, ujh, djh, hjh, pjh, mjh;
export { $No, $Vh, $y_, A9n, AVh, Ay_, BNo, BVh, By_, CVh, Cy_, D9n, DVh, Dy_, EVh, Ey_, FVh, Fy_, GNo, GVh, Gce, Gnt, Gy_, HNo, HVh, Hy_, I9n, IVh, Iy_, J0t, JNo, JVh, KNo, KVh, Ky_, Kzt, LVh, Ly_, MVh, My_, NVh, Ny_, OVh, Odt, Oy_, PVh, Py_, Q0t, QNo, QVh, Qy_, R9n, RVh, Ry_, SVh, Sy_, TVh, Ty_, UNo, UVh, Uy_, VNo, VVh, Vnt, Vy_, WNo, WVh, Wy_, XNo, XVh, Xy_, YNo, YVh, Yy_, Z0t, ZNo, ZVh, Zy_, _L, _he, _sr, _y_, a2o, ajh, b7e, bF, bL, bsr, by_, c2o, cjh, djh, e1t, e2o, ejh, fbe, fsr, gsr, h0, hjh, hsr, i2o, ijh, jNo, jVh, jy_, jzt, kVh, ky_, l2o, ljh, mjh, msr, n2o, njh, o2o, oP, ojh, pjh, psr, qNo, qVh, qy_, qzt, r2o, rjh, s2o, sjh, spi, t1t, t2o, tjh, ujh, vsr, wVh, x9n, xVh, xy_, yVh, ysr, yy_, zNo, zVh, zy_, zzt };
var __wakaru_u2o_initialized = false;
export function u2o() {
if (__wakaru_u2o_initialized) return;
__wakaru_u2o_initialized = true;
x(), $u(), fbe = Og, oP = fbe.document, zzt = fbe.navigator, KNo = "Report a Bug", MVh = "Cancel", PVh = "Send Bug Report", LVh = "Confirm", NVh = "Report a Bug", OVh = "your.email@example.org", FVh = "Email", BVh = "What's the bug? What did you expect?", UVh = "Description", $Vh = "Your Name", HVh = "Name", WVh = "Thank you for your report!", GVh = "(required)", VVh = "Add a screenshot", jVh = "Remove screenshot", qVh = "Highlight", zVh = "Hide", KVh = "Remove", YVh = "widget", XVh = "api", ZVh = 5e3, YNo = (e, t = {
    includeReplay: !0
})=>{
    if (!e.message) throw new Error("Unable to submit feedback with empty message");
    const n = Pu();
    if (!n) throw new Error("No client setup, cannot send feedback.");
    e.tags && Object.keys(e.tags).length && nv().setTags(e.tags);
    const i = spi({
        source: XVh,
        url: Gce(),
        ...e
    }, t);
    return new Promise((r, s)=>{
        const o = setTimeout(()=>s("Unable to determine if Feedback was correctly sent."), 3e4), a = n.on("afterSendEvent", (c, l)=>{
            if (c.event_id === i) return clearTimeout(o), a(), l?.statusCode && l.statusCode >= 200 && l.statusCode < 300 ? r(i) : l?.statusCode === 403 ? s("Unable to send feedback. This could be because this domain is not in your list of allowed domains.") : s("Unable to send feedback. This could be because of network issues, or because you are using an ad-blocker.");
        });
    });
}, A9n = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, J0t = 20, QVh = "http://www.w3.org/2000/svg", XNo = "rgba(88, 74, 192, 1)", JVh = {
    foreground: "#2b2233",
    background: "#ffffff",
    accentForeground: "white",
    accentBackground: XNo,
    successColor: "#268d75",
    errorColor: "#df3338",
    border: "1.5px solid rgba(41, 35, 47, 0.13)",
    boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
    outline: "1px auto var(--accent-background)",
    interactiveFilter: "brightness(95%)"
}, ZNo = {
    foreground: "#ebe6ef",
    background: "#29232f",
    accentForeground: "white",
    accentBackground: XNo,
    successColor: "#2da98c",
    errorColor: "#f55459",
    border: "1.5px solid rgba(235, 230, 239, 0.15)",
    boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
    outline: "1px auto var(--accent-background)",
    interactiveFilter: "brightness(150%)"
}, QNo = ({ lazyLoadIntegration: e, getModalIntegration: t, getScreenshotIntegration: n })=>(({ id: r = "sentry-feedback", autoInject: s = !0, showBranding: o = !0, isEmailRequired: a = !1, isNameRequired: c = !1, showEmail: l = !0, showName: u = !0, enableScreenshot: h = !0, useSentryUser: p = {
        email: "email",
        name: "username"
    }, tags: g, styleNonce: f, scriptNonce: v, colorScheme: b = "system", themeLight: y = {}, themeDark: T = {}, addScreenshotButtonLabel: E = VVh, cancelButtonLabel: A = MVh, confirmButtonLabel: R = LVh, emailLabel: D = FVh, emailPlaceholder: P = OVh, formTitle: N = NVh, isRequiredLabel: O = GVh, messageLabel: F = UVh, messagePlaceholder: H = BVh, nameLabel: $ = HVh, namePlaceholder: W = $Vh, removeScreenshotButtonLabel: G = jVh, submitButtonLabel: q = PVh, successMessageText: z = WVh, triggerLabel: X = KNo, triggerAriaLabel: Y = "", highlightToolText: Z = qVh, hideToolText: K = zVh, removeHighlightText: J = KVh, onFormOpen: ne, onFormClose: ee, onSubmitSuccess: se, onSubmitError: re, onFormSubmitted: ue } = {})=>{
        const ce = {
            id: r,
            autoInject: s,
            showBranding: o,
            isEmailRequired: a,
            isNameRequired: c,
            showEmail: l,
            showName: u,
            enableScreenshot: h,
            useSentryUser: p,
            tags: g,
            styleNonce: f,
            scriptNonce: v,
            colorScheme: b,
            themeDark: T,
            themeLight: y,
            triggerLabel: X,
            triggerAriaLabel: Y,
            cancelButtonLabel: A,
            submitButtonLabel: q,
            confirmButtonLabel: R,
            formTitle: N,
            emailLabel: D,
            emailPlaceholder: P,
            messageLabel: F,
            messagePlaceholder: H,
            nameLabel: $,
            namePlaceholder: W,
            successMessageText: z,
            isRequiredLabel: O,
            addScreenshotButtonLabel: E,
            removeScreenshotButtonLabel: G,
            highlightToolText: Z,
            hideToolText: K,
            removeHighlightText: J,
            onFormClose: ee,
            onFormOpen: ne,
            onSubmitError: re,
            onSubmitSuccess: se,
            onFormSubmitted: ue
        };
        let de = null, le = [];
        const ye = (xe)=>{
            if (!de) {
                const Le = oP.createElement("div");
                Le.id = String(xe.id), oP.body.appendChild(Le), de = Le.attachShadow({
                    mode: "open"
                }), de.appendChild(ky_(xe));
            }
            return de;
        }, _e = async (xe)=>{
            const Le = xe.enableScreenshot && _y_();
            let Be, je;
            try {
                Be = (t ? t() : await e("feedbackModalIntegration", v))(), Odt(Be);
            } catch  {
                throw A9n && zr.error("[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`."), new Error("[Feedback] Missing feedback modal integration!");
            }
            try {
                const Xe = Le ? n ? n() : await e("feedbackScreenshotIntegration", v) : void 0;
                Xe && (je = Xe(), Odt(je));
            } catch  {
                A9n && zr.error("[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.");
            }
            const Ge = Be.createDialog({
                options: {
                    ...xe,
                    onFormClose: ()=>{
                        Ge?.close(), xe.onFormClose?.();
                    },
                    onFormSubmitted: ()=>{
                        Ge?.close(), xe.onFormSubmitted?.();
                    }
                },
                screenshotIntegration: je,
                sendFeedback: YNo,
                shadow: ye(xe)
            });
            return Ge;
        }, me = (xe, Le = {})=>{
            const Be = hsr(ce, Le), je = typeof xe == "string" ? oP.querySelector(xe) : typeof xe.addEventListener == "function" ? xe : null;
            if (!je) throw A9n && zr.error("[Feedback] Unable to attach to target element"), new Error("Unable to attach to target element");
            let Ge = null;
            const Xe = async ()=>{
                Ge || (Ge = await _e({
                    ...Be,
                    onFormSubmitted: ()=>{
                        Ge?.removeFromDom(), Be.onFormSubmitted?.();
                    }
                })), Ge.appendToDom(), Ge.open();
            };
            je.addEventListener("click", Xe);
            const Ke = ()=>{
                le = le.filter((et)=>et !== Ke), Ge?.removeFromDom(), Ge = null, je.removeEventListener("click", Xe);
            };
            return le.push(Ke), Ke;
        }, Ce = (xe = {})=>{
            const Le = hsr(ce, xe), Be = ye(Le), je = Sy_({
                triggerLabel: Le.triggerLabel,
                triggerAriaLabel: Le.triggerAriaLabel,
                shadow: Be,
                styleNonce: f
            });
            return me(je.el, {
                ...Le,
                onFormOpen () {
                    je.hide();
                },
                onFormClose () {
                    je.show();
                },
                onFormSubmitted () {
                    je.show();
                }
            }), je;
        };
        return {
            name: "Feedback",
            setupOnce () {
                !apn() || !ce.autoInject || (oP.readyState === "loading" ? oP.addEventListener("DOMContentLoaded", ()=>Ce().appendToDom()) : Ce().appendToDom());
            },
            attachTo: me,
            createWidget (xe = {}) {
                const Le = Ce(hsr(ce, xe));
                return Le.appendToDom(), Le;
            },
            async createForm (xe = {}) {
                return _e(hsr(ce, xe));
            },
            remove () {
                de && (de.parentElement?.remove(), de = null), le.forEach((xe)=>xe()), le = [];
            }
        };
    }), Kzt = {}, bsr = [], ijh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ysr = Array.isArray, _sr = bsr.slice, _L = {
    __e: function(e, t, n, i) {
        for(var r, s, o; t = t.__;)if ((r = t.__c) && !r.__) try {
            if ((s = r.constructor) && s.getDerivedStateFromError != null && (r.setState(s.getDerivedStateFromError(e)), o = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, i || {}), o = r.__d), o) return r.__E = r;
        } catch (a) {
            e = a;
        }
        throw e;
    }
}, ejh = 0, msr.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Gnt({}, this.state), typeof e == "function" && (e = e(Gnt({}, n), this.props)), e && Gnt(n, e), e != null && this.__v && (t && this._sb.push(t), wVh(this));
}, msr.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), wVh(this));
}, msr.prototype.render = x9n, e1t = [], njh = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, JNo = function(e, t) {
    return e.__v.__b - t.__v.__b;
}, gsr.__r = 0, t1t = 0, t2o = [], R9n = [], bF = _L, n2o = bF.__b, i2o = bF.__r, r2o = bF.diffed, s2o = bF.__c, o2o = bF.unmount, a2o = bF.__, bF.__b = function(e) {
    bL = null, n2o && n2o(e);
}, bF.__ = function(e, t) {
    t.__k && t.__k.__m && (e.__m = t.__k.__m), a2o && a2o(e, t);
}, bF.__r = function(e) {
    i2o && i2o(e), b7e = 0;
    var t = (bL = e.__c).__H;
    t && (e2o === bL ? (t.__h = [], bL.__h = [], t.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.__V = R9n, n.__N = n.i = void 0;
    })) : (t.__h.forEach(vsr), t.__h.forEach(WNo), t.__h = [], b7e = 0)), e2o = bL;
}, bF.diffed = function(e) {
    r2o && r2o(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (t2o.push(t) !== 1 && rjh === bF.requestAnimationFrame || ((rjh = bF.requestAnimationFrame) || By_)(Fy_)), t.__H.__.forEach(function(n) {
        n.i && (n.__H = n.i), n.__V !== R9n && (n.__ = n.__V), n.i = void 0, n.__V = R9n;
    })), e2o = bL = null;
}, bF.__c = function(e, t) {
    t.some(function(n) {
        try {
            n.__h.forEach(vsr), n.__h = n.__h.filter(function(i) {
                return !i.__ || WNo(i);
            });
        } catch (i) {
            t.some(function(r) {
                r.__h && (r.__h = []);
            }), t = [], bF.__e(i, n.__v);
        }
    }), s2o && s2o(e, t);
}, bF.unmount = function(e) {
    o2o && o2o(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach(function(i) {
        try {
            vsr(i);
        } catch (r) {
            t = r;
        }
    }), n.__H = void 0, t && bF.__e(t, n.__v));
}, c2o = typeof requestAnimationFrame == "function", sjh = Object.defineProperty({
    __proto__: null,
    useCallback: qzt,
    useContext: Py_,
    useDebugValue: Ly_,
    useEffect: Ry_,
    useErrorBoundary: Ny_,
    useId: Oy_,
    useImperativeHandle: My_,
    useLayoutEffect: RVh,
    useMemo: I9n,
    useReducer: AVh,
    useRef: Dy_,
    useState: Q0t
}, Symbol.toStringTag, {
    value: "Module"
}), ojh = "http://www.w3.org/2000/svg", D9n = 16, l2o = 17, ajh = "http://www.w3.org/2000/svg", cjh = `
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}

`, ljh = `
.dialog__header {
  display: flex;
  gap: 4px;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}
.dialog__title {
  align-self: center;
  width: var(--form-width, 272px);
}

@media (max-width: 600px) {
  .dialog__title {
    width: auto;
  }
}

.dialog__position:has(.editor) .dialog__title {
  width: auto;
}


.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`, ujh = `
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

.form__right {
  flex: 0 0 auto;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: var(--form-width, 100%);
}

.dialog__position:has(.editor) .form__right {
  width: var(--form-width, 272px);
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`, djh = `
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`, hjh = `
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`, pjh = (()=>({
        name: "FeedbackModal",
        setupOnce () {},
        createDialog: ({ options: e, screenshotIntegration: t, sendFeedback: n, shadow: i })=>{
            const r = i, s = e.useSentryUser, o = qy_(), a = oP.createElement("div"), c = jy_(e.styleNonce);
            let l = "";
            const u = {
                get el () {
                    return a;
                },
                appendToDom () {
                    !r.contains(c) && !r.contains(a) && (r.appendChild(c), r.appendChild(a));
                },
                removeFromDom () {
                    a.remove(), c.remove(), oP.body.style.overflow = l;
                },
                open () {
                    p(!0), e.onFormOpen?.(), Pu()?.emit("openFeedbackWidget"), l = oP.body.style.overflow, oP.body.style.overflow = "hidden";
                },
                close () {
                    p(!1), oP.body.style.overflow = l;
                }
            }, h = t?.createInput({
                h: h0,
                hooks: sjh,
                dialog: u,
                options: e
            }), p = (g)=>{
                Ay_(h0(Vy_, {
                    options: e,
                    screenshotInput: h,
                    showName: e.showName || e.isNameRequired,
                    showEmail: e.showEmail || e.isEmailRequired,
                    defaultName: s && o?.[s.name] || "",
                    defaultEmail: s && o?.[s.email] || "",
                    onFormClose: ()=>{
                        p(!1), e.onFormClose?.();
                    },
                    onSubmit: n,
                    onSubmitSuccess: (f, v)=>{
                        p(!1), e.onSubmitSuccess?.(f, v);
                    },
                    onSubmitError: (f)=>{
                        e.onSubmitError?.(f);
                    },
                    onFormSubmitted: ()=>{
                        e.onFormSubmitted?.();
                    },
                    open: g
                }), a);
            };
            return u;
        }
    })), mjh = (()=>({
        name: "FeedbackScreenshot",
        setupOnce () {},
        createInput: ({ h: e, hooks: t, dialog: n, options: i })=>{
            const r = oP.createElement("canvas");
            return {
                input: Qy_({
                    h: e,
                    hooks: t,
                    outputBuffer: r,
                    dialog: n,
                    options: i
                }),
                value: async ()=>{
                    const s = await new Promise((o)=>{
                        r.toBlob(o, "image/png");
                    });
                    if (s) return {
                        data: new Uint8Array(await s.arrayBuffer()),
                        filename: "screenshot.png",
                        contentType: "application/png"
                    };
                }
            };
        }
    }));

}
