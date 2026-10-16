import { i } from "./plugin-brand-icon.js";
var ytr, Bme, C$t, fB, qme, Ume, wtr, S$t, Gme, E$t, A$t, _tr, ktr, T$t, vtr, xtr, Ctr, Str, Etr, Atr, Ttr, $$t, $tr, Itr, IIe, NIe, Ntr, I$t, Wme, Mtr, N$t;
export { $$t, $tr, A$t, Atr, Bme, C$t, Ctr, E$t, Etr, Gme, I$t, IIe, Itr, Mtr, N$t, NIe, Ntr, S$t, Str, T$t, Ttr, Ume, Wme, _tr, fB, ktr, qme, vtr, wtr, xtr, ytr };
var __wakaru_Rtr_initialized = false;
export function Rtr() {
if (__wakaru_Rtr_initialized) return;
__wakaru_Rtr_initialized = true;
ytr = [
    "input:not([inert]):not([inert] *)",
    "select:not([inert]):not([inert] *)",
    "textarea:not([inert]):not([inert] *)",
    "a[href]:not([inert]):not([inert] *)",
    "button:not([inert]):not([inert] *)",
    "[tabindex]:not(slot):not([inert]):not([inert] *)",
    "audio[controls]:not([inert]):not([inert] *)",
    "video[controls]:not([inert]):not([inert] *)",
    '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)',
    "details>summary:first-of-type:not([inert]):not([inert] *)",
    "details:not([inert]):not([inert] *)"
], Bme = ytr.join(","), C$t = typeof Element > "u", fB = C$t ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, qme = !C$t && Element.prototype.getRootNode ? function(r) {
    var e;
    return r == null || (e = r.getRootNode) === null || e === void 0 ? void 0 : e.call(r);
} : function(r) {
    return r?.ownerDocument;
}, Ume = i(function(e, a) {
    var s;
    a === void 0 && (a = !0);
    var l = e == null || (s = e.getAttribute) === null || s === void 0 ? void 0 : s.call(e, "inert"), u = l === "" || l === "true", p = u || a && e && (typeof e.closest == "function" ? e.closest("[inert]") : Ume(e.parentNode));
    return p;
}, "isInert"), wtr = i(function(e) {
    var a, s = e == null || (a = e.getAttribute) === null || a === void 0 ? void 0 : a.call(e, "contenteditable");
    return s === "" || s === "true";
}, "isContentEditable"), S$t = i(function(e, a, s) {
    if (Ume(e)) return [];
    var l = Array.prototype.slice.apply(e.querySelectorAll(Bme));
    return a && fB.call(e, Bme) && l.unshift(e), l = l.filter(s), l;
}, "getCandidates"), Gme = i(function(e, a, s) {
    for(var l = [], u = Array.from(e); u.length;){
        var p = u.shift();
        if (!Ume(p, !1)) if (p.tagName === "SLOT") {
            var m = p.assignedElements(), b = m.length ? m : p.children, g = Gme(b, !0, s);
            s.flatten ? l.push.apply(l, g) : l.push({
                scopeParent: p,
                candidates: g
            });
        } else {
            var _ = fB.call(p, Bme);
            _ && s.filter(p) && (a || !e.includes(p)) && l.push(p);
            var v = p.shadowRoot || typeof s.getShadowRoot == "function" && s.getShadowRoot(p), x = !Ume(v, !1) && (!s.shadowRootFilter || s.shadowRootFilter(p));
            if (v && x) {
                var C = Gme(v === !0 ? p.children : v.children, !0, s);
                s.flatten ? l.push.apply(l, C) : l.push({
                    scopeParent: p,
                    candidates: C
                });
            } else u.unshift.apply(u, p.children);
        }
    }
    return l;
}, "getCandidatesIteratively"), E$t = i(function(e) {
    return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, "hasTabIndex"), A$t = i(function(e) {
    if (!e) throw new Error("No node provided");
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || wtr(e)) && !E$t(e) ? 0 : e.tabIndex;
}, "getTabIndex"), _tr = i(function(e, a) {
    var s = A$t(e);
    return s < 0 && a && !E$t(e) ? 0 : s;
}, "getSortOrderTabIndex"), ktr = i(function(e, a) {
    return e.tabIndex === a.tabIndex ? e.documentOrder - a.documentOrder : e.tabIndex - a.tabIndex;
}, "sortOrderedTabbables"), T$t = i(function(e) {
    return e.tagName === "INPUT";
}, "isInput"), vtr = i(function(e) {
    return T$t(e) && e.type === "hidden";
}, "isHiddenInput"), xtr = i(function(e) {
    var a = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(s) {
        return s.tagName === "SUMMARY";
    });
    return a;
}, "isDetailsWithSummary"), Ctr = i(function(e, a) {
    for(var s = 0; s < e.length; s++)if (e[s].checked && e[s].form === a) return e[s];
}, "getCheckedRadio"), Str = i(function(e) {
    if (!e.name) return !0;
    var a = e.form || qme(e), s = i(function(m) {
        return a.querySelectorAll('input[type="radio"][name="' + m + '"]');
    }, "queryRadios"), l;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") l = s(window.CSS.escape(e.name));
    else try {
        l = s(e.name);
    } catch (p) {
        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", p.message), !1;
    }
    var u = Ctr(l, e.form);
    return !u || u === e;
}, "isTabbableRadio"), Etr = i(function(e) {
    return T$t(e) && e.type === "radio";
}, "isRadio"), Atr = i(function(e) {
    return Etr(e) && !Str(e);
}, "isNonTabbableRadio"), Ttr = i(function(e) {
    var a, s = e && qme(e), l = (a = s) === null || a === void 0 ? void 0 : a.host, u = !1;
    if (s && s !== e) {
        var p, m, b;
        for(u = !!((p = l) !== null && p !== void 0 && (m = p.ownerDocument) !== null && m !== void 0 && m.contains(l) || e != null && (b = e.ownerDocument) !== null && b !== void 0 && b.contains(e)); !u && l;){
            var g, _, v;
            s = qme(l), l = (g = s) === null || g === void 0 ? void 0 : g.host, u = !!((_ = l) !== null && _ !== void 0 && (v = _.ownerDocument) !== null && v !== void 0 && v.contains(l));
        }
    }
    return u;
}, "isNodeAttached"), $$t = i(function(e) {
    var a = e.getBoundingClientRect(), s = a.width, l = a.height;
    return s === 0 && l === 0;
}, "isZeroArea"), $tr = i(function(e, a) {
    var s = a.displayCheck, l = a.getShadowRoot;
    if (s === "full-native" && "checkVisibility" in e) {
        var u = e.checkVisibility({
            checkOpacity: !1,
            opacityProperty: !1,
            contentVisibilityAuto: !0,
            visibilityProperty: !0,
            checkVisibilityCSS: !0
        });
        return !u;
    }
    if (getComputedStyle(e).visibility === "hidden") return !0;
    var p = fB.call(e, "details>summary:first-of-type"), m = p ? e.parentElement : e;
    if (fB.call(m, "details:not([open]) *")) return !0;
    if (!s || s === "full" || s === "full-native" || s === "legacy-full") {
        if (typeof l == "function") {
            for(var b = e; e;){
                var g = e.parentElement, _ = qme(e);
                if (g && !g.shadowRoot && l(g) === !0) return $$t(e);
                e.assignedSlot ? e = e.assignedSlot : !g && _ !== e.ownerDocument ? e = _.host : e = g;
            }
            e = b;
        }
        if (Ttr(e)) return !e.getClientRects().length;
        if (s !== "legacy-full") return !0;
    } else if (s === "non-zero-area") return $$t(e);
    return !1;
}, "isHidden"), Itr = i(function(e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for(var a = e.parentElement; a;){
        if (a.tagName === "FIELDSET" && a.disabled) {
            for(var s = 0; s < a.children.length; s++){
                var l = a.children.item(s);
                if (l.tagName === "LEGEND") return fB.call(a, "fieldset[disabled] *") ? !0 : !l.contains(e);
            }
            return !0;
        }
        a = a.parentElement;
    }
    return !1;
}, "isDisabledFromFieldset"), IIe = i(function(e, a) {
    return !(a.disabled || vtr(a) || $tr(a, e) || xtr(a) || Itr(a));
}, "isNodeMatchingSelectorFocusable"), NIe = i(function(e, a) {
    return !(Atr(a) || A$t(a) < 0 || !IIe(e, a));
}, "isNodeMatchingSelectorTabbable"), Ntr = i(function(e) {
    var a = parseInt(e.getAttribute("tabindex"), 10);
    return !!(isNaN(a) || a >= 0);
}, "isShadowRootTabbable"), I$t = i(function(e) {
    var a = [], s = [];
    return e.forEach(function(l, u) {
        var p = !!l.scopeParent, m = p ? l.scopeParent : l, b = _tr(m, p), g = p ? I$t(l.candidates) : m;
        b === 0 ? p ? a.push.apply(a, g) : a.push(m) : s.push({
            documentOrder: u,
            tabIndex: b,
            item: l,
            isScope: p,
            content: g
        });
    }), s.sort(ktr).reduce(function(l, u) {
        return u.isScope ? l.push.apply(l, u.content) : l.push(u.content), l;
    }, []).concat(a);
}, "sortByOrder"), Wme = i(function(e, a) {
    a = a || {};
    var s;
    return a.getShadowRoot ? s = Gme([
        e
    ], a.includeContainer, {
        filter: NIe.bind(null, a),
        flatten: !1,
        getShadowRoot: a.getShadowRoot,
        shadowRootFilter: Ntr
    }) : s = S$t(e, a.includeContainer, NIe.bind(null, a)), I$t(s);
}, "tabbable"), Mtr = i(function(e, a) {
    a = a || {};
    var s;
    return a.getShadowRoot ? s = Gme([
        e
    ], a.includeContainer, {
        filter: IIe.bind(null, a),
        flatten: !0,
        getShadowRoot: a.getShadowRoot
    }) : s = S$t(e, a.includeContainer, IIe.bind(null, a)), s;
}, "focusable"), N$t = i(function(e, a) {
    if (a = a || {}, !e) throw new Error("No node provided");
    return fB.call(e, Bme) === !1 ? !1 : NIe(a, e);
}, "isTabbable");

}
