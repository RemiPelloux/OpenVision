import { E } from "./tslib.es6.js";
var puh, Eci, rta, k7t, Ici, xci, muh, sta, Aci, ota, ata, guh, fuh, lta, vuh, _uh, buh, yuh, Suh, kuh, wuh, cta, Cuh, Tuh, iPr, rPr, Euh, uta, Rci, Iuh, dta;
export { Aci, Cuh, Eci, Euh, Ici, Iuh, Rci, Suh, Tuh, _uh, ata, buh, cta, dta, fuh, guh, iPr, k7t, kuh, lta, muh, ota, puh, rPr, rta, sta, uta, vuh, wuh, xci, yuh };
var __wakaru_xuh_initialized = false;
export function xuh() {
if (__wakaru_xuh_initialized) return;
__wakaru_xuh_initialized = true;
E(), puh = [
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
], Eci = puh.join(","), rta = typeof Element > "u", k7t = rta ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ici = !rta && Element.prototype.getRootNode ? function(t) {
    var e;
    return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
    return t?.ownerDocument;
}, xci = function(e, n) {
    var i;
    n === void 0 && (n = !0);
    var r = e == null || (i = e.getAttribute) === null || i === void 0 ? void 0 : i.call(e, "inert"), s = r === "" || r === "true", o = s || n && e && (typeof e.closest == "function" ? e.closest("[inert]") : xci(e.parentNode));
    return o;
}, muh = function(e) {
    var n, i = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
    return i === "" || i === "true";
}, sta = function(e, n, i) {
    if (xci(e)) return [];
    var r = Array.prototype.slice.apply(e.querySelectorAll(Eci));
    return n && k7t.call(e, Eci) && r.unshift(e), r = r.filter(i), r;
}, Aci = function(e, n, i) {
    for(var r = [], s = Array.from(e); s.length;){
        var o = s.shift();
        if (!xci(o, !1)) if (o.tagName === "SLOT") {
            var a = o.assignedElements(), l = a.length ? a : o.children, c = Aci(l, !0, i);
            i.flatten ? r.push.apply(r, c) : r.push({
                scopeParent: o,
                candidates: c
            });
        } else {
            var u = k7t.call(o, Eci);
            u && i.filter(o) && (n || !e.includes(o)) && r.push(o);
            var d = o.shadowRoot || typeof i.getShadowRoot == "function" && i.getShadowRoot(o), h = !xci(d, !1) && (!i.shadowRootFilter || i.shadowRootFilter(o));
            if (d && h) {
                var p = Aci(d === !0 ? o.children : d.children, !0, i);
                i.flatten ? r.push.apply(r, p) : r.push({
                    scopeParent: o,
                    candidates: p
                });
            } else s.unshift.apply(s, o.children);
        }
    }
    return r;
}, ota = function(e) {
    return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, ata = function(e) {
    if (!e) throw new Error("No node provided");
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || muh(e)) && !ota(e) ? 0 : e.tabIndex;
}, guh = function(e, n) {
    var i = ata(e);
    return i < 0 && n && !ota(e) ? 0 : i;
}, fuh = function(e, n) {
    return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, lta = function(e) {
    return e.tagName === "INPUT";
}, vuh = function(e) {
    return lta(e) && e.type === "hidden";
}, _uh = function(e) {
    var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(i) {
        return i.tagName === "SUMMARY";
    });
    return n;
}, buh = function(e, n) {
    for(var i = 0; i < e.length; i++)if (e[i].checked && e[i].form === n) return e[i];
}, yuh = function(e) {
    if (!e.name) return !0;
    var n = e.form || Ici(e), i = function(a) {
        return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
    }, r;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") r = i(window.CSS.escape(e.name));
    else try {
        r = i(e.name);
    } catch (o) {
        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
    var s = buh(r, e.form);
    return !s || s === e;
}, Suh = function(e) {
    return lta(e) && e.type === "radio";
}, kuh = function(e) {
    return Suh(e) && !yuh(e);
}, wuh = function(e) {
    var n, i = e && Ici(e), r = (n = i) === null || n === void 0 ? void 0 : n.host, s = !1;
    if (i && i !== e) {
        var o, a, l;
        for(s = !!((o = r) !== null && o !== void 0 && (a = o.ownerDocument) !== null && a !== void 0 && a.contains(r) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !s && r;){
            var c, u, d;
            i = Ici(r), r = (c = i) === null || c === void 0 ? void 0 : c.host, s = !!((u = r) !== null && u !== void 0 && (d = u.ownerDocument) !== null && d !== void 0 && d.contains(r));
        }
    }
    return s;
}, cta = function(e) {
    var n = e.getBoundingClientRect(), i = n.width, r = n.height;
    return i === 0 && r === 0;
}, Cuh = function(e, n) {
    var i = n.displayCheck, r = n.getShadowRoot;
    if (i === "full-native" && "checkVisibility" in e) {
        var s = e.checkVisibility({
            checkOpacity: !1,
            opacityProperty: !1,
            contentVisibilityAuto: !0,
            visibilityProperty: !0,
            checkVisibilityCSS: !0
        });
        return !s;
    }
    if (getComputedStyle(e).visibility === "hidden") return !0;
    var o = k7t.call(e, "details>summary:first-of-type"), a = o ? e.parentElement : e;
    if (k7t.call(a, "details:not([open]) *")) return !0;
    if (!i || i === "full" || i === "full-native" || i === "legacy-full") {
        if (typeof r == "function") {
            for(var l = e; e;){
                var c = e.parentElement, u = Ici(e);
                if (c && !c.shadowRoot && r(c) === !0) return cta(e);
                e.assignedSlot ? e = e.assignedSlot : !c && u !== e.ownerDocument ? e = u.host : e = c;
            }
            e = l;
        }
        if (wuh(e)) return !e.getClientRects().length;
        if (i !== "legacy-full") return !0;
    } else if (i === "non-zero-area") return cta(e);
    return !1;
}, Tuh = function(e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for(var n = e.parentElement; n;){
        if (n.tagName === "FIELDSET" && n.disabled) {
            for(var i = 0; i < n.children.length; i++){
                var r = n.children.item(i);
                if (r.tagName === "LEGEND") return k7t.call(n, "fieldset[disabled] *") ? !0 : !r.contains(e);
            }
            return !0;
        }
        n = n.parentElement;
    }
    return !1;
}, iPr = function(e, n) {
    return !(n.disabled || vuh(n) || Cuh(n, e) || _uh(n) || Tuh(n));
}, rPr = function(e, n) {
    return !(kuh(n) || ata(n) < 0 || !iPr(e, n));
}, Euh = function(e) {
    var n = parseInt(e.getAttribute("tabindex"), 10);
    return !!(isNaN(n) || n >= 0);
}, uta = function(e) {
    var n = [], i = [];
    return e.forEach(function(r, s) {
        var o = !!r.scopeParent, a = o ? r.scopeParent : r, l = guh(a, o), c = o ? uta(r.candidates) : a;
        l === 0 ? o ? n.push.apply(n, c) : n.push(a) : i.push({
            documentOrder: s,
            tabIndex: l,
            item: r,
            isScope: o,
            content: c
        });
    }), i.sort(fuh).reduce(function(r, s) {
        return s.isScope ? r.push.apply(r, s.content) : r.push(s.content), r;
    }, []).concat(n);
}, Rci = function(e, n) {
    n = n || {};
    var i;
    return n.getShadowRoot ? i = Aci([
        e
    ], n.includeContainer, {
        filter: rPr.bind(null, n),
        flatten: !1,
        getShadowRoot: n.getShadowRoot,
        shadowRootFilter: Euh
    }) : i = sta(e, n.includeContainer, rPr.bind(null, n)), uta(i);
}, Iuh = function(e, n) {
    n = n || {};
    var i;
    return n.getShadowRoot ? i = Aci([
        e
    ], n.includeContainer, {
        filter: iPr.bind(null, n),
        flatten: !0,
        getShadowRoot: n.getShadowRoot
    }) : i = sta(e, n.includeContainer, iPr.bind(null, n)), i;
}, dta = function(e, n) {
    if (n = n || {}, !e) throw new Error("No node provided");
    return k7t.call(e, Eci) === !1 ? !1 : rPr(n, e);
};

}
