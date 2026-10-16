import { x } from "./tslib.es6.js";
var Hal, pkn, Jps, lft, mkn, gkn, Wal, ems, fkn, tms, nms, Gal, Val, ims, jal, qal, zal, Kal, Yal, Xal, Zal, rms, Qal, Jal, nTi, iTi, ecl, sms, vkn, tcl, oms;
export { Gal, Hal, Jal, Jps, Kal, Qal, Val, Wal, Xal, Yal, Zal, ecl, ems, fkn, gkn, iTi, ims, jal, lft, mkn, nTi, nms, oms, pkn, qal, rms, sms, tcl, tms, vkn, zal };
var __wakaru_ncl_initialized = false;
export function ncl() {
if (__wakaru_ncl_initialized) return;
__wakaru_ncl_initialized = true;
x(), Hal = [
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
], pkn = Hal.join(","), Jps = typeof Element > "u", lft = Jps ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, mkn = !Jps && Element.prototype.getRootNode ? function(e) {
    var t;
    return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
    return e?.ownerDocument;
}, gkn = function(t, n) {
    var i;
    n === void 0 && (n = !0);
    var r = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), s = r === "" || r === "true", o = s || n && t && (typeof t.closest == "function" ? t.closest("[inert]") : gkn(t.parentNode));
    return o;
}, Wal = function(t) {
    var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
    return i === "" || i === "true";
}, ems = function(t, n, i) {
    if (gkn(t)) return [];
    var r = Array.prototype.slice.apply(t.querySelectorAll(pkn));
    return n && lft.call(t, pkn) && r.unshift(t), r = r.filter(i), r;
}, fkn = function(t, n, i) {
    for(var r = [], s = Array.from(t); s.length;){
        var o = s.shift();
        if (!gkn(o, !1)) if (o.tagName === "SLOT") {
            var a = o.assignedElements(), c = a.length ? a : o.children, l = fkn(c, !0, i);
            i.flatten ? r.push.apply(r, l) : r.push({
                scopeParent: o,
                candidates: l
            });
        } else {
            var u = lft.call(o, pkn);
            u && i.filter(o) && (n || !t.includes(o)) && r.push(o);
            var h = o.shadowRoot || typeof i.getShadowRoot == "function" && i.getShadowRoot(o), p = !gkn(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(o));
            if (h && p) {
                var g = fkn(h === !0 ? o.children : h.children, !0, i);
                i.flatten ? r.push.apply(r, g) : r.push({
                    scopeParent: o,
                    candidates: g
                });
            } else s.unshift.apply(s, o.children);
        }
    }
    return r;
}, tms = function(t) {
    return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, nms = function(t) {
    if (!t) throw new Error("No node provided");
    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Wal(t)) && !tms(t) ? 0 : t.tabIndex;
}, Gal = function(t, n) {
    var i = nms(t);
    return i < 0 && n && !tms(t) ? 0 : i;
}, Val = function(t, n) {
    return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, ims = function(t) {
    return t.tagName === "INPUT";
}, jal = function(t) {
    return ims(t) && t.type === "hidden";
}, qal = function(t) {
    var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
        return i.tagName === "SUMMARY";
    });
    return n;
}, zal = function(t, n) {
    for(var i = 0; i < t.length; i++)if (t[i].checked && t[i].form === n) return t[i];
}, Kal = function(t) {
    if (!t.name) return !0;
    var n = t.form || mkn(t), i = function(a) {
        return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
    }, r;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") r = i(window.CSS.escape(t.name));
    else try {
        r = i(t.name);
    } catch (o) {
        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
    var s = zal(r, t.form);
    return !s || s === t;
}, Yal = function(t) {
    return ims(t) && t.type === "radio";
}, Xal = function(t) {
    return Yal(t) && !Kal(t);
}, Zal = function(t) {
    var n, i = t && mkn(t), r = (n = i) === null || n === void 0 ? void 0 : n.host, s = !1;
    if (i && i !== t) {
        var o, a, c;
        for(s = !!((o = r) !== null && o !== void 0 && (a = o.ownerDocument) !== null && a !== void 0 && a.contains(r) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !s && r;){
            var l, u, h;
            i = mkn(r), r = (l = i) === null || l === void 0 ? void 0 : l.host, s = !!((u = r) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(r));
        }
    }
    return s;
}, rms = function(t) {
    var n = t.getBoundingClientRect(), i = n.width, r = n.height;
    return i === 0 && r === 0;
}, Qal = function(t, n) {
    var i = n.displayCheck, r = n.getShadowRoot;
    if (i === "full-native" && "checkVisibility" in t) {
        var s = t.checkVisibility({
            checkOpacity: !1,
            opacityProperty: !1,
            contentVisibilityAuto: !0,
            visibilityProperty: !0,
            checkVisibilityCSS: !0
        });
        return !s;
    }
    if (getComputedStyle(t).visibility === "hidden") return !0;
    var o = lft.call(t, "details>summary:first-of-type"), a = o ? t.parentElement : t;
    if (lft.call(a, "details:not([open]) *")) return !0;
    if (!i || i === "full" || i === "full-native" || i === "legacy-full") {
        if (typeof r == "function") {
            for(var c = t; t;){
                var l = t.parentElement, u = mkn(t);
                if (l && !l.shadowRoot && r(l) === !0) return rms(t);
                t.assignedSlot ? t = t.assignedSlot : !l && u !== t.ownerDocument ? t = u.host : t = l;
            }
            t = c;
        }
        if (Zal(t)) return !t.getClientRects().length;
        if (i !== "legacy-full") return !0;
    } else if (i === "non-zero-area") return rms(t);
    return !1;
}, Jal = function(t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName)) for(var n = t.parentElement; n;){
        if (n.tagName === "FIELDSET" && n.disabled) {
            for(var i = 0; i < n.children.length; i++){
                var r = n.children.item(i);
                if (r.tagName === "LEGEND") return lft.call(n, "fieldset[disabled] *") ? !0 : !r.contains(t);
            }
            return !0;
        }
        n = n.parentElement;
    }
    return !1;
}, nTi = function(t, n) {
    return !(n.disabled || jal(n) || Qal(n, t) || qal(n) || Jal(n));
}, iTi = function(t, n) {
    return !(Xal(n) || nms(n) < 0 || !nTi(t, n));
}, ecl = function(t) {
    var n = parseInt(t.getAttribute("tabindex"), 10);
    return !!(isNaN(n) || n >= 0);
}, sms = function(t) {
    var n = [], i = [];
    return t.forEach(function(r, s) {
        var o = !!r.scopeParent, a = o ? r.scopeParent : r, c = Gal(a, o), l = o ? sms(r.candidates) : a;
        c === 0 ? o ? n.push.apply(n, l) : n.push(a) : i.push({
            documentOrder: s,
            tabIndex: c,
            item: r,
            isScope: o,
            content: l
        });
    }), i.sort(Val).reduce(function(r, s) {
        return s.isScope ? r.push.apply(r, s.content) : r.push(s.content), r;
    }, []).concat(n);
}, vkn = function(t, n) {
    n = n || {};
    var i;
    return n.getShadowRoot ? i = fkn([
        t
    ], n.includeContainer, {
        filter: iTi.bind(null, n),
        flatten: !1,
        getShadowRoot: n.getShadowRoot,
        shadowRootFilter: ecl
    }) : i = ems(t, n.includeContainer, iTi.bind(null, n)), sms(i);
}, tcl = function(t, n) {
    n = n || {};
    var i;
    return n.getShadowRoot ? i = fkn([
        t
    ], n.includeContainer, {
        filter: nTi.bind(null, n),
        flatten: !0,
        getShadowRoot: n.getShadowRoot
    }) : i = ems(t, n.includeContainer, nTi.bind(null, n)), i;
}, oms = function(t, n) {
    if (n = n || {}, !t) throw new Error("No node provided");
    return lft.call(t, pkn) === !1 ? !1 : iTi(n, t);
};

}
