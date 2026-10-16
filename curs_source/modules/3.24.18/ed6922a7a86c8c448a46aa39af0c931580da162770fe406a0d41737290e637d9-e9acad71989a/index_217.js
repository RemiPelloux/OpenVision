import { $jr, CV, Djr, Fjr, IEc, Lpi, Mjr, Qdt, TV, XLt, _qe, apn, bpn, nEc } from "./HVr.js";
import { IGr, aqe, fI } from "./client.js";
import { Km } from "./composerMessageStorageService.js";
import { zr } from "./debug-logger.js";
import { sA } from "./growthbook.js";
import { $u } from "./index_10.js";
import { XH } from "./index_11.js";
import { Gce } from "./index_216.js";
import { Y4, gK, mD } from "./inp.js";
import { Ahi, Bhi, Dhi, NLt, ZB, dCc, oVr, rAe, sVr, uGr } from "./qIc.js";
import { gI } from "./scope.js";
import { zL } from "./semanticAttributes.js";
import { Kce, Pu, iv, nv, pD } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
import { TLt, eJ } from "./utils_29.js";
import { Og } from "./worldwide.js";
import { Uie } from "./xhr.js";
function ck_(e) {
    return e.nodeType === e.ELEMENT_NODE;
}
function L9n(e) {
    return e?.host?.shadowRoot === e;
}
function N9n(e) {
    return Object.prototype.toString.call(e) === "[object ShadowRoot]";
}
function lk_(e) {
    return e.includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") && (e = e.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), e;
}
function uk_(e) {
    const { cssText: t } = e;
    if (t.split('"').length < 3) return t;
    const n = [
        "@import",
        `url(${JSON.stringify(e.href)})`
    ];
    return e.layerName === "" ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`), e.supportsText && n.push(`supports(${e.supportsText})`), e.media.length && n.push(e.media.mediaText), n.join(" ") + ";";
}
function Tsr(e) {
    try {
        const t = e.rules || e.cssRules;
        return t ? lk_(Array.from(t, Wqh).join("")) : null;
    } catch  {
        return null;
    }
}
function dk_(e) {
    let t = "";
    for(let n = 0; n < e.style.length; n++){
        const i = e.style, r = i[n], s = i.getPropertyPriority(r);
        t += `${r}:${i.getPropertyValue(r)}${s ? " !important" : ""};`;
    }
    return `${e.selectorText} { ${t} }`;
}
function Wqh(e) {
    let t;
    if (pk_(e)) try {
        t = Tsr(e.styleSheet) || uk_(e);
    } catch  {}
    else if (mk_(e)) {
        let n = e.cssText;
        const i = e.selectorText.includes(":"), r = typeof e.style.all == "string" && e.style.all;
        if (r && (n = dk_(e)), i && (n = hk_(n)), i || r) return n;
    }
    return t || e.cssText;
}
function hk_(e) {
    const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
    return e.replace(t, "$1\\$2");
}
function pk_(e) {
    return "styleSheet" in e;
}
function mk_(e) {
    return "selectorText" in e;
}
function gk_() {
    return new sOo;
}
function Esr({ maskInputOptions: e, tagName: t, type: n }) {
    return t === "OPTION" && (t = "SELECT"), !!(e[t.toLowerCase()] || n && e[n] || n === "password" || t === "INPUT" && !n && e.text);
}
function O9n({ isMasked: e, element: t, value: n, maskInputFn: i }) {
    let r = n || "";
    return e ? (i && (r = i(r, t)), "*".repeat(r.length)) : r;
}
function Zzt(e) {
    return e.toLowerCase();
}
function P2o(e) {
    return e.toUpperCase();
}
function fk_(e) {
    const t = e.getContext("2d");
    if (!t) return !0;
    const n = 50;
    for(let i = 0; i < e.width; i += n)for(let r = 0; r < e.height; r += n){
        const s = t.getImageData, o = oOo in s ? s[oOo] : s;
        if (new Uint32Array(o.call(t, i, r, Math.min(n, e.width - i), Math.min(n, e.height - r)).data.buffer).some((c)=>c !== 0)) return !1;
    }
    return !0;
}
function L2o(e) {
    const t = e.type;
    return e.hasAttribute("data-rr-is-password") ? "password" : t ? Zzt(t) : null;
}
function xsr(e, t, n) {
    return t === "INPUT" && (n === "radio" || n === "checkbox") ? e.getAttribute("value") || "" : e.value;
}
function Gqh(e, t) {
    let n;
    try {
        n = new URL(e, t ?? window.location.href);
    } catch  {
        return null;
    }
    const i = /\.([0-9a-z]+)(?:$)/i;
    return n.pathname.match(i)?.[1] ?? null;
}
function Vqh(e) {
    const t = aOo[e];
    if (t) return t;
    const n = window.document;
    let i = window[e];
    if (n && typeof n.createElement == "function") try {
        const r = n.createElement("iframe");
        r.hidden = !0, n.head.appendChild(r);
        const s = r.contentWindow;
        s && s[e] && (i = s[e]), n.head.removeChild(r);
    } catch  {}
    return aOo[e] = i.bind(window);
}
function N2o(...e) {
    return Vqh("setTimeout")(...e);
}
function jqh(...e) {
    return Vqh("clearTimeout")(...e);
}
function qqh(e) {
    try {
        return e.contentDocument;
    } catch  {}
}
function O2o() {
    return Kzh++;
}
function vk_(e) {
    if (e instanceof HTMLFormElement) return "form";
    const t = Zzt(e.tagName);
    return Yzh.test(t) ? "div" : t;
}
function _k_(e) {
    let t = "";
    return e.indexOf("//") > -1 ? t = e.split("/").slice(0, 3).join("/") : t = e.split("/")[0], t = t.split("?")[0], t;
}
function bk_(e, t) {
    if (!e || t.size === 0) return e;
    try {
        const n = e.split(";"), i = [];
        for (let r of n){
            if (r = r.trim(), !r) continue;
            const s = r.indexOf(":");
            if (s === -1) {
                i.push(r);
                continue;
            }
            const o = r.slice(0, s).trim();
            t.has(o) || i.push(r);
        }
        return i.join("; ") + (i.length > 0 && e.endsWith(";") ? ";" : "");
    } catch (n) {
        return console.warn("Error filtering CSS properties:", n), e;
    }
}
function Isr(e, t) {
    return (e || "").replace(Zzh, (n, i, r, s, o, a)=>{
        const c = r || o || a, l = i || s || "";
        if (!c) return n;
        if (Qzh.test(c) || Jzh.test(c)) return `url(${l}${c}${l})`;
        if (eKh.test(c)) return `url(${l}${c}${l})`;
        if (c[0] === "/") return `url(${l}${_k_(t) + c}${l})`;
        const u = t.split("/"), h = c.split("/");
        u.pop();
        for (const p of h)p !== "." && (p === ".." ? u.pop() : u.push(p));
        return `url(${l}${u.join("/")}${l})`;
    });
}
function yk_(e, t) {
    if (t.trim() === "") return t;
    let n = 0;
    function i(s) {
        let o;
        const a = s.exec(t.substring(n));
        return a ? (o = a[0], n += o.length, o) : "";
    }
    const r = [];
    for(; i(nKh), !(n >= t.length);){
        let s = i(tKh);
        if (s.slice(-1) === ",") s = Qzt(e, s.substring(0, s.length - 1)), r.push(s);
        else {
            let o = "";
            s = Qzt(e, s);
            let a = !1;
            for(;;){
                const c = t.charAt(n);
                if (c === "") {
                    r.push((s + o).trim());
                    break;
                } else if (a) c === ")" && (a = !1);
                else if (c === ",") {
                    n += 1, r.push((s + o).trim());
                    break;
                } else c === "(" && (a = !0);
                o += c, n += 1;
            }
        }
    }
    return r.join(", ");
}
function Qzt(e, t) {
    return !t || t.trim() === "" ? t : Asr(e, t);
}
function Sk_(e) {
    return !!(e.tagName === "svg" || e.ownerSVGElement);
}
function Asr(e, t) {
    let n = cOo.get(e);
    if (n || (n = e.createElement("a"), cOo.set(e, n)), !t) t = "";
    else if (t.startsWith("blob:") || t.startsWith("data:")) return t;
    return n.setAttribute("href", t), n.href;
}
function zqh(e, t, n, i, r, s, o) {
    if (!i) return i;
    if (n === "src" || n === "href" && !(t === "use" && i[0] === "#")) return Qzt(e, i);
    if (n === "xlink:href" && i[0] !== "#") return Qzt(e, i);
    if (n === "background" && (t === "table" || t === "td" || t === "th")) return Qzt(e, i);
    if (n === "srcset") return yk_(e, i);
    if (n === "style") {
        let a = Isr(i, Asr(e));
        return o && o.size > 0 && (a = bk_(a, o)), a;
    } else if (t === "object" && n === "data") return Qzt(e, i);
    return typeof s == "function" ? s(n, i, r) : i;
}
function Kqh(e, t, n) {
    return (e === "video" || e === "audio") && t === "autoplay";
}
function kk_(e, t, n, i) {
    try {
        if (i && e.matches(i)) return !1;
        if (typeof t == "string") {
            if (e.classList.contains(t)) return !0;
        } else for(let r = e.classList.length; r--;){
            const s = e.classList[r];
            if (t.test(s)) return !0;
        }
        if (n) return e.matches(n);
    } catch  {}
    return !1;
}
function wk_(e, t) {
    for(let n = e.classList.length; n--;){
        const i = e.classList[n];
        if (t.test(i)) return !0;
    }
    return !1;
}
function n1t(e, t, n = 1 / 0, i = 0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || i > n ? -1 : t(e) ? i : n1t(e.parentNode, t, n, i + 1);
}
function Jzt(e, t) {
    return (n)=>{
        const i = n;
        if (i === null) return !1;
        try {
            if (e) {
                if (typeof e == "string") {
                    if (i.matches(`.${e}`)) return !0;
                } else if (wk_(i, e)) return !0;
            }
            return !!(t && i.matches(t));
        } catch  {
            return !1;
        }
    };
}
function eKt(e, t, n, i, r, s) {
    try {
        const o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (o === null) return !1;
        if (o.tagName === "INPUT") {
            const l = o.getAttribute("autocomplete");
            if ([
                "current-password",
                "new-password",
                "cc-number",
                "cc-exp",
                "cc-exp-month",
                "cc-exp-year",
                "cc-csc"
            ].includes(l)) return !0;
        }
        let a = -1, c = -1;
        if (s) {
            if (c = n1t(o, Jzt(i, r)), c < 0) return !0;
            a = n1t(o, Jzt(t, n), c >= 0 ? c : 1 / 0);
        } else {
            if (a = n1t(o, Jzt(t, n)), a < 0) return !1;
            c = n1t(o, Jzt(i, r), a >= 0 ? a : 1 / 0);
        }
        return a >= 0 ? c >= 0 ? a <= c : !0 : c >= 0 ? !1 : !!s;
    } catch  {}
    return !!s;
}
function Ck_(e, t, n) {
    const i = e.contentWindow;
    if (!i) return;
    let r = !1, s;
    try {
        s = i.document.readyState;
    } catch  {
        return;
    }
    if (s !== "complete") {
        const a = N2o(()=>{
            r || (t(), r = !0);
        }, n);
        e.addEventListener("load", ()=>{
            jqh(a), r = !0, t();
        }, {
            once: !0
        });
        return;
    }
    const o = "about:blank";
    if (i.location.href !== o || e.src === o || e.src === "") return N2o(t, 0), e.addEventListener("load", t, {
        once: !0
    });
    e.addEventListener("load", t, {
        once: !0
    });
}
function Tk_(e, t, n) {
    let i = !1, r;
    try {
        r = e.sheet;
    } catch  {
        return;
    }
    if (r) return;
    const s = N2o(()=>{
        i || (t(), i = !0);
    }, n);
    e.addEventListener("load", ()=>{
        jqh(s), i = !0, t();
    });
}
function Ek_(e, t) {
    const { doc: n, mirror: i, blockClass: r, blockSelector: s, unblockSelector: o, maskAllText: a, maskAttributeFn: c, maskTextClass: l, unmaskTextClass: u, maskTextSelector: h, unmaskTextSelector: p, inlineStylesheet: g, maskInputOptions: f = {}, maskTextFn: v, maskInputFn: b, dataURLOptions: y = {}, inlineImages: T, recordCanvas: E, keepIframeSrcFn: A, newlyAddedElement: R = !1, ignoreCSSAttributes: D } = t, P = xk_(n, i);
    switch(e.nodeType){
        case e.DOCUMENT_NODE:
            return e.compatMode !== "CSS1Compat" ? {
                type: n4.Document,
                childNodes: [],
                compatMode: e.compatMode
            } : {
                type: n4.Document,
                childNodes: []
            };
        case e.DOCUMENT_TYPE_NODE:
            return {
                type: n4.DocumentType,
                name: e.name,
                publicId: e.publicId,
                systemId: e.systemId,
                rootId: P
            };
        case e.ELEMENT_NODE:
            return Ak_(e, {
                doc: n,
                blockClass: r,
                blockSelector: s,
                unblockSelector: o,
                inlineStylesheet: g,
                maskAttributeFn: c,
                maskInputOptions: f,
                maskInputFn: b,
                dataURLOptions: y,
                inlineImages: T,
                recordCanvas: E,
                keepIframeSrcFn: A,
                newlyAddedElement: R,
                rootId: P,
                maskTextClass: l,
                unmaskTextClass: u,
                maskTextSelector: h,
                unmaskTextSelector: p,
                ignoreCSSAttributes: D
            });
        case e.TEXT_NODE:
            return Ik_(e, {
                doc: n,
                maskAllText: a,
                maskTextClass: l,
                unmaskTextClass: u,
                maskTextSelector: h,
                unmaskTextSelector: p,
                maskTextFn: v,
                maskInputOptions: f,
                maskInputFn: b,
                rootId: P
            });
        case e.CDATA_SECTION_NODE:
            return {
                type: n4.CDATA,
                textContent: "",
                rootId: P
            };
        case e.COMMENT_NODE:
            return {
                type: n4.Comment,
                textContent: e.textContent || "",
                rootId: P
            };
        default:
            return !1;
    }
}
function xk_(e, t) {
    if (!t.hasNode(e)) return;
    const n = t.getId(e);
    return n === 1 ? void 0 : n;
}
function Ik_(e, t) {
    const { maskAllText: n, maskTextClass: i, unmaskTextClass: r, maskTextSelector: s, unmaskTextSelector: o, maskTextFn: a, maskInputOptions: c, maskInputFn: l, rootId: u } = t, h = e.parentNode && e.parentNode.tagName;
    let p = e.textContent;
    const g = h === "STYLE" ? !0 : void 0, f = h === "SCRIPT" ? !0 : void 0, v = h === "TEXTAREA" ? !0 : void 0;
    if (g && p) {
        try {
            e.nextSibling || e.previousSibling || e.parentNode.sheet?.cssRules && (p = Tsr(e.parentNode.sheet));
        } catch (y) {
            console.warn(`Cannot get CSS styles from text's parentNode. Error: ${y}`, e);
        }
        p = Isr(p, Asr(t.doc));
    }
    f && (p = "SCRIPT_PLACEHOLDER");
    const b = eKt(e, i, s, r, o, n);
    if (!g && !f && !v && p && b && (p = a ? a(p, e.parentElement) : p.replace(/[\S]/g, "*")), v && p && (c.textarea || b) && (p = l ? l(p, e.parentNode) : p.replace(/[\S]/g, "*")), h === "OPTION" && p) {
        const y = Esr({
            type: null,
            tagName: h,
            maskInputOptions: c
        });
        p = O9n({
            isMasked: eKt(e, i, s, r, o, y),
            element: e,
            value: p,
            maskInputFn: l
        });
    }
    return {
        type: n4.Text,
        textContent: p || "",
        isStyle: g,
        rootId: u
    };
}
function Ak_(e, t) {
    const { doc: n, blockClass: i, blockSelector: r, unblockSelector: s, inlineStylesheet: o, maskInputOptions: a = {}, maskAttributeFn: c, maskInputFn: l, dataURLOptions: u = {}, inlineImages: h, recordCanvas: p, keepIframeSrcFn: g, newlyAddedElement: f = !1, rootId: v, maskTextClass: b, unmaskTextClass: y, maskTextSelector: T, unmaskTextSelector: E, ignoreCSSAttributes: A } = t, R = kk_(e, i, r, s), D = vk_(e);
    let P = {};
    const N = e.attributes.length;
    for(let F = 0; F < N; F++){
        const H = e.attributes[F];
        H.name && !Kqh(D, H.name, H.value) && (P[H.name] = zqh(n, D, Zzt(H.name), H.value, e, c, A));
    }
    if (D === "link" && o) {
        const F = Array.from(n.styleSheets).find(($)=>$.href === e.href);
        let H = null;
        F && (H = Tsr(F)), H && (P.rel = null, P.href = null, P.crossorigin = null, P._cssText = Isr(H, F.href));
    }
    if (D === "style" && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
        const F = Tsr(e.sheet);
        F && (P._cssText = Isr(F, Asr(n)));
    }
    if (D === "input" || D === "textarea" || D === "select" || D === "option") {
        const F = e, H = L2o(F), $ = xsr(F, P2o(D), H), W = F.checked;
        if (H !== "submit" && H !== "button" && $) {
            const G = eKt(F, b, T, y, E, Esr({
                type: H,
                tagName: P2o(D),
                maskInputOptions: a
            }));
            P.value = O9n({
                isMasked: G,
                element: F,
                value: $,
                maskInputFn: l
            });
        }
        W && (P.checked = W);
    }
    if (D === "option" && (e.selected && !a.select ? P.selected = !0 : delete P.selected), D === "canvas" && p) {
        if (e.__context === "2d") fk_(e) || (P.rr_dataURL = e.toDataURL(u.type, u.quality));
        else if (!("__context" in e)) {
            const F = e.toDataURL(u.type, u.quality), H = n.createElement("canvas");
            H.width = e.width, H.height = e.height;
            const $ = H.toDataURL(u.type, u.quality);
            F !== $ && (P.rr_dataURL = F);
        }
    }
    if (D === "img" && h) {
        rKt || (rKt = n.createElement("canvas"), Xzh = rKt.getContext("2d"));
        const F = e, H = F.currentSrc || F.getAttribute("src") || "<unknown-src>", $ = F.crossOrigin, W = ()=>{
            F.removeEventListener("load", W);
            try {
                rKt.width = F.naturalWidth, rKt.height = F.naturalHeight, Xzh.drawImage(F, 0, 0), P.rr_dataURL = rKt.toDataURL(u.type, u.quality);
            } catch (G) {
                if (F.crossOrigin !== "anonymous") {
                    F.crossOrigin = "anonymous", F.complete && F.naturalWidth !== 0 ? W() : F.addEventListener("load", W);
                    return;
                } else console.warn(`Cannot inline img src=${H}! Error: ${G}`);
            }
            F.crossOrigin === "anonymous" && ($ ? P.crossOrigin = $ : F.removeAttribute("crossorigin"));
        };
        F.complete && F.naturalWidth !== 0 ? W() : F.addEventListener("load", W);
    }
    if ((D === "audio" || D === "video") && (P.rr_mediaState = e.paused ? "paused" : "played", P.rr_mediaCurrentTime = e.currentTime), f || (e.scrollLeft && (P.rr_scrollLeft = e.scrollLeft), e.scrollTop && (P.rr_scrollTop = e.scrollTop)), R) {
        const { width: F, height: H } = e.getBoundingClientRect();
        P = {
            class: P.class,
            rr_width: `${F}px`,
            rr_height: `${H}px`
        };
    }
    D === "iframe" && !g(P.src) && (!R && !qqh(e) && (P.rr_src = P.src), delete P.src);
    let O;
    try {
        customElements.get(D) && (O = !0);
    } catch  {}
    return {
        type: n4.Element,
        tagName: D,
        attributes: P,
        childNodes: [],
        isSVG: Sk_(e) || void 0,
        needBlock: R,
        rootId: v,
        isCustom: O
    };
}
function PN(e) {
    return e == null ? "" : e.toLowerCase();
}
function Rk_(e, t) {
    if (t.comment && e.type === n4.Comment) return !0;
    if (e.type === n4.Element) {
        if (t.script && (e.tagName === "script" || e.tagName === "link" && (e.attributes.rel === "preload" || e.attributes.rel === "modulepreload") || e.tagName === "link" && e.attributes.rel === "prefetch" && typeof e.attributes.href == "string" && Gqh(e.attributes.href) === "js")) return !0;
        if (t.headFavicon && (e.tagName === "link" && e.attributes.rel === "shortcut icon" || e.tagName === "meta" && (PN(e.attributes.name).match(/^msapplication-tile(image|color)$/) || PN(e.attributes.name) === "application-name" || PN(e.attributes.rel) === "icon" || PN(e.attributes.rel) === "apple-touch-icon" || PN(e.attributes.rel) === "shortcut icon"))) return !0;
        if (e.tagName === "meta") {
            if (t.headMetaDescKeywords && PN(e.attributes.name).match(/^description|keywords$/)) return !0;
            if (t.headMetaSocial && (PN(e.attributes.property).match(/^(og|twitter|fb):/) || PN(e.attributes.name).match(/^(og|twitter):/) || PN(e.attributes.name) === "pinterest")) return !0;
            if (t.headMetaRobots && (PN(e.attributes.name) === "robots" || PN(e.attributes.name) === "googlebot" || PN(e.attributes.name) === "bingbot")) return !0;
            if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0) return !0;
            if (t.headMetaAuthorship && (PN(e.attributes.name) === "author" || PN(e.attributes.name) === "generator" || PN(e.attributes.name) === "framework" || PN(e.attributes.name) === "publisher" || PN(e.attributes.name) === "progid" || PN(e.attributes.property).match(/^article:/) || PN(e.attributes.property).match(/^product:/))) return !0;
            if (t.headMetaVerification && (PN(e.attributes.name) === "google-site-verification" || PN(e.attributes.name) === "yandex-verification" || PN(e.attributes.name) === "csrf-token" || PN(e.attributes.name) === "p:domain_verify" || PN(e.attributes.name) === "verify-v1" || PN(e.attributes.name) === "verification" || PN(e.attributes.name) === "shopify-checkout-api-token")) return !0;
        }
    }
    return !1;
}
function tKt(e, t) {
    const { doc: n, mirror: i, blockClass: r, blockSelector: s, unblockSelector: o, maskAllText: a, maskTextClass: c, unmaskTextClass: l, maskTextSelector: u, unmaskTextSelector: h, skipChild: p = !1, inlineStylesheet: g = !0, maskInputOptions: f = {}, maskAttributeFn: v, maskTextFn: b, maskInputFn: y, slimDOMOptions: T, dataURLOptions: E = {}, inlineImages: A = !1, recordCanvas: R = !1, onSerialize: D, onIframeLoad: P, iframeLoadTimeout: N = 5e3, onBlockedImageLoad: O, onStylesheetLoad: F, stylesheetLoadTimeout: H = 5e3, keepIframeSrcFn: $ = ()=>!1, newlyAddedElement: W = !1, ignoreCSSAttributes: G } = t;
    let { preserveWhiteSpace: q = !0 } = t;
    const z = Ek_(e, {
        doc: n,
        mirror: i,
        blockClass: r,
        blockSelector: s,
        maskAllText: a,
        unblockSelector: o,
        maskTextClass: c,
        unmaskTextClass: l,
        maskTextSelector: u,
        unmaskTextSelector: h,
        inlineStylesheet: g,
        maskInputOptions: f,
        maskAttributeFn: v,
        maskTextFn: b,
        maskInputFn: y,
        dataURLOptions: E,
        inlineImages: A,
        recordCanvas: R,
        keepIframeSrcFn: $,
        newlyAddedElement: W,
        ignoreCSSAttributes: G
    });
    if (!z) return console.warn(e, "not serialized"), null;
    let X;
    i.hasNode(e) ? X = i.getId(e) : Rk_(z, T) || !q && z.type === n4.Text && !z.isStyle && !z.textContent.replace(/^\s+|\s+$/gm, "").length ? X = iKt : X = O2o();
    const Y = Object.assign(z, {
        id: X
    });
    if (i.add(e, Y), X === iKt) return null;
    D && D(e);
    let Z = !p;
    if (Y.type === n4.Element) {
        Z = Z && !Y.needBlock;
        const K = e.shadowRoot;
        K && N9n(K) && (Y.isShadowHost = !0);
    }
    if ((Y.type === n4.Document || Y.type === n4.Element) && Z) {
        T.headWhitespace && Y.type === n4.Element && Y.tagName === "head" && (q = !1);
        const K = {
            doc: n,
            mirror: i,
            blockClass: r,
            blockSelector: s,
            maskAllText: a,
            unblockSelector: o,
            maskTextClass: c,
            unmaskTextClass: l,
            maskTextSelector: u,
            unmaskTextSelector: h,
            skipChild: p,
            inlineStylesheet: g,
            maskInputOptions: f,
            maskAttributeFn: v,
            maskTextFn: b,
            maskInputFn: y,
            slimDOMOptions: T,
            dataURLOptions: E,
            inlineImages: A,
            recordCanvas: R,
            preserveWhiteSpace: q,
            onSerialize: D,
            onIframeLoad: P,
            iframeLoadTimeout: N,
            onBlockedImageLoad: O,
            onStylesheetLoad: F,
            stylesheetLoadTimeout: H,
            keepIframeSrcFn: $,
            ignoreCSSAttributes: G
        }, J = e.childNodes ? Array.from(e.childNodes) : [];
        for (const ne of J){
            const ee = tKt(ne, K);
            ee && Y.childNodes.push(ee);
        }
        if (ck_(e) && e.shadowRoot) for (const ne of Array.from(e.shadowRoot.childNodes)){
            const ee = tKt(ne, K);
            ee && (N9n(e.shadowRoot) && (ee.isShadow = !0), Y.childNodes.push(ee));
        }
    }
    if (e.parentNode && L9n(e.parentNode) && N9n(e.parentNode) && (Y.isShadow = !0), Y.type === n4.Element && Y.tagName === "iframe" && !Y.needBlock && Ck_(e, ()=>{
        const K = qqh(e);
        if (K && P) {
            const J = tKt(K, {
                doc: K,
                mirror: i,
                blockClass: r,
                blockSelector: s,
                unblockSelector: o,
                maskAllText: a,
                maskTextClass: c,
                unmaskTextClass: l,
                maskTextSelector: u,
                unmaskTextSelector: h,
                skipChild: !1,
                inlineStylesheet: g,
                maskInputOptions: f,
                maskAttributeFn: v,
                maskTextFn: b,
                maskInputFn: y,
                slimDOMOptions: T,
                dataURLOptions: E,
                inlineImages: A,
                recordCanvas: R,
                preserveWhiteSpace: q,
                onSerialize: D,
                onIframeLoad: P,
                iframeLoadTimeout: N,
                onStylesheetLoad: F,
                stylesheetLoadTimeout: H,
                keepIframeSrcFn: $,
                ignoreCSSAttributes: G
            });
            J && P(e, J);
        }
    }, N), Y.type === n4.Element && Y.tagName === "img" && !e.complete && Y.needBlock) {
        const K = e, J = ()=>{
            if (K.isConnected && !K.complete && O) try {
                const ne = K.getBoundingClientRect();
                ne.width > 0 && ne.height > 0 && O(K, Y, ne);
            } catch  {}
            K.removeEventListener("load", J);
        };
        K.isConnected && K.addEventListener("load", J);
    }
    return Y.type === n4.Element && Y.tagName === "link" && typeof Y.attributes.rel == "string" && (Y.attributes.rel === "stylesheet" || Y.attributes.rel === "preload" && typeof Y.attributes.href == "string" && Gqh(Y.attributes.href) === "css") && Tk_(e, ()=>{
        if (F) {
            const K = tKt(e, {
                doc: n,
                mirror: i,
                blockClass: r,
                blockSelector: s,
                unblockSelector: o,
                maskAllText: a,
                maskTextClass: c,
                unmaskTextClass: l,
                maskTextSelector: u,
                unmaskTextSelector: h,
                skipChild: !1,
                inlineStylesheet: g,
                maskInputOptions: f,
                maskAttributeFn: v,
                maskTextFn: b,
                maskInputFn: y,
                slimDOMOptions: T,
                dataURLOptions: E,
                inlineImages: A,
                recordCanvas: R,
                preserveWhiteSpace: q,
                onSerialize: D,
                onIframeLoad: P,
                iframeLoadTimeout: N,
                onStylesheetLoad: F,
                stylesheetLoadTimeout: H,
                keepIframeSrcFn: $,
                ignoreCSSAttributes: G
            });
            K && F(e, K);
        }
    }, H), Y.type === n4.Element && delete Y.needBlock, Y;
}
function Dk_(e, t) {
    const { mirror: n = new sOo, blockClass: i = "rr-block", blockSelector: r = null, unblockSelector: s = null, maskAllText: o = !1, maskTextClass: a = "rr-mask", unmaskTextClass: c = null, maskTextSelector: l = null, unmaskTextSelector: u = null, inlineStylesheet: h = !0, inlineImages: p = !1, recordCanvas: g = !1, maskAllInputs: f = !1, maskAttributeFn: v, maskTextFn: b, maskInputFn: y, slimDOM: T = !1, dataURLOptions: E, preserveWhiteSpace: A, onSerialize: R, onIframeLoad: D, iframeLoadTimeout: P, onBlockedImageLoad: N, onStylesheetLoad: O, stylesheetLoadTimeout: F, keepIframeSrcFn: H = ()=>!1, ignoreCSSAttributes: $ = new Set([]) } = t || {};
    return tKt(e, {
        doc: e,
        mirror: n,
        blockClass: i,
        blockSelector: r,
        unblockSelector: s,
        maskAllText: o,
        maskTextClass: a,
        unmaskTextClass: c,
        maskTextSelector: l,
        unmaskTextSelector: u,
        skipChild: !1,
        inlineStylesheet: h,
        maskInputOptions: f === !0 ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0
        } : f === !1 ? {} : f,
        maskAttributeFn: v,
        maskTextFn: b,
        maskInputFn: y,
        slimDOMOptions: T === !0 || T === "all" ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: T === "all",
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0
        } : T === !1 ? {} : T,
        dataURLOptions: E,
        inlineImages: p,
        recordCanvas: g,
        preserveWhiteSpace: A,
        onSerialize: R,
        onIframeLoad: D,
        iframeLoadTimeout: P,
        onBlockedImageLoad: N,
        onStylesheetLoad: O,
        stylesheetLoadTimeout: F,
        keepIframeSrcFn: H,
        newlyAddedElement: !1,
        ignoreCSSAttributes: $
    });
}
function bte(e, t, n = document) {
    const i = {
        capture: !0,
        passive: !0
    };
    return n.addEventListener(e, t, i), ()=>n.removeEventListener(e, t, i);
}
function F9n(e, t, n = {}) {
    let i = null, r = 0;
    return function(...s) {
        const o = Date.now();
        !r && n.leading === !1 && (r = o);
        const a = t - (o - r), c = this;
        a <= 0 || a > t ? (i && (Fk_(i), i = null), r = o, e.apply(c, s)) : !i && n.trailing !== !1 && (i = Rsr(()=>{
            r = n.leading === !1 ? 0 : Date.now(), i = null, e.apply(c, s);
        }, a));
    };
}
function Yqh(e, t, n, i, r = window) {
    const s = r.Object.getOwnPropertyDescriptor(e, t);
    return r.Object.defineProperty(e, t, i ? n : {
        set (o) {
            Rsr(()=>{
                n.set.call(this, o);
            }, 0), s && s.set && s.set.call(this, o);
        }
    }), ()=>Yqh(e, t, s || {}, !0);
}
function F2o(e, t, n) {
    try {
        if (!(t in e)) return ()=>{};
        const i = e[t], r = n(i);
        return typeof r == "function" && (r.prototype = r.prototype || {}, Object.defineProperties(r, {
            __rrweb_original__: {
                enumerable: !1,
                value: i
            }
        })), e[t] = r, ()=>{
            e[t] = i;
        };
    } catch  {
        return ()=>{};
    }
}
function Xqh(e) {
    const t = e.document;
    return {
        left: t.scrollingElement ? t.scrollingElement.scrollLeft : e.pageXOffset !== void 0 ? e.pageXOffset : t?.documentElement.scrollLeft || t?.body?.parentElement?.scrollLeft || t?.body?.scrollLeft || 0,
        top: t.scrollingElement ? t.scrollingElement.scrollTop : e.pageYOffset !== void 0 ? e.pageYOffset : t?.documentElement.scrollTop || t?.body?.parentElement?.scrollTop || t?.body?.scrollTop || 0
    };
}
function Zqh() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}
function Qqh() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}
function Jqh(e) {
    if (!e) return null;
    try {
        return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
    } catch  {
        return null;
    }
}
function bhe(e, t, n, i, r) {
    if (!e) return !1;
    const s = Jqh(e);
    if (!s) return !1;
    const o = Jzt(t, n);
    if (!r) {
        const l = i && s.matches(i);
        return o(s) && !l;
    }
    const a = n1t(s, o);
    let c = -1;
    return a < 0 ? !1 : (i && (c = n1t(s, Jzt(null, i))), a > -1 && c < 0 ? !0 : a < c);
}
function Mk_(e, t) {
    return t.getId(e) !== -1;
}
function B2o(e, t) {
    return t.getId(e) === iKt;
}
function ezh(e, t) {
    if (L9n(e)) return !1;
    const n = t.getId(e);
    return t.has(n) ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE ? !1 : e.parentNode ? ezh(e.parentNode, t) : !0 : !0;
}
function U2o(e) {
    return !!e.changedTouches;
}
function Pk_(e = window) {
    "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...t)=>{
        let n = t[0];
        if (!(0 in t)) throw new TypeError("1 argument is required");
        do if (this === n) return !0;
        while (n = n && n.parentNode)
        return !1;
    });
}
function tzh(e, t) {
    return !!(e.nodeName === "IFRAME" && t.getMeta(e));
}
function nzh(e, t) {
    return !!(e.nodeName === "LINK" && e.nodeType === e.ELEMENT_NODE && e.getAttribute && e.getAttribute("rel") === "stylesheet" && t.getMeta(e));
}
function $2o(e) {
    return !!e?.shadowRoot;
}
function izh(e) {
    let t = null;
    return e.getRootNode?.()?.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t;
}
function Lk_(e) {
    let t = e, n;
    for(; n = izh(t);)t = n;
    return t;
}
function Nk_(e) {
    const t = e.ownerDocument;
    if (!t) return !1;
    const n = Lk_(e);
    return t.contains(n);
}
function rzh(e) {
    const t = e.ownerDocument;
    return t ? t.contains(e) || Nk_(e) : !1;
}
function H2o(e) {
    const t = uOo[e];
    if (t) return t;
    const n = window.document;
    let i = window[e];
    if (n && typeof n.createElement == "function") try {
        const r = n.createElement("iframe");
        r.hidden = !0, n.head.appendChild(r);
        const s = r.contentWindow;
        s && s[e] && (i = s[e]), n.head.removeChild(r);
    } catch  {}
    return uOo[e] = i.bind(window);
}
function Ok_(...e) {
    return H2o("requestAnimationFrame")(...e);
}
function Rsr(...e) {
    return H2o("setTimeout")(...e);
}
function Fk_(...e) {
    return H2o("clearTimeout")(...e);
}
function W2o(e) {
    try {
        return e.contentDocument;
    } catch  {}
}
function Bk_(e) {
    try {
        return e.contentWindow;
    } catch  {}
}
function szh(e) {
    return "__ln" in e;
}
function G2o(e, t) {
    e.delete(t), t.childNodes?.forEach((n)=>G2o(e, n));
}
function ozh(e, t, n) {
    return e.length === 0 ? !1 : Uk_(e, t, n);
}
function Uk_(e, t, n) {
    let i = t.parentNode;
    for(; i;){
        const r = n.getId(i);
        if (e.some((s)=>s.id === r)) return !0;
        i = i.parentNode;
    }
    return !1;
}
function azh(e, t) {
    return e.size === 0 ? !1 : czh(e, t);
}
function czh(e, t) {
    const { parentNode: n } = t;
    return n ? e.has(n) ? !0 : czh(e, n) : !1;
}
function $k_(e) {
    V9n = e;
}
function Hk_() {
    V9n = void 0;
}
function B9n(e) {
    try {
        if ("composedPath" in e) {
            const t = e.composedPath();
            if (t.length) return t[0];
        } else if ("path" in e && e.path.length) return e.path[0];
    } catch  {}
    return e && e.target;
}
function lzh(e, t) {
    const n = new sKh;
    znt.push(n), n.init(e);
    let i = window.MutationObserver || window.__rrMutationObserver;
    const r = window?.Zone?.__symbol__?.("MutationObserver");
    r && window[r] && (i = window[r]);
    const s = new i(dE((o)=>{
        e.onMutation && e.onMutation(o) === !1 || n.processMutations.bind(n)(o);
    }));
    return s.observe(t, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
    }), s;
}
function Wk_({ mousemoveCb: e, sampling: t, doc: n, mirror: i }) {
    if (t.mousemove === !1) return ()=>{};
    const r = typeof t.mousemove == "number" ? t.mousemove : 50, s = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
    let o = [], a;
    const c = F9n(dE((h)=>{
        const p = Date.now() - a;
        e(o.map((g)=>(g.timeOffset -= p, g)), h), o = [], a = null;
    }), s), l = dE(F9n(dE((h)=>{
        const p = B9n(h), { clientX: g, clientY: f } = U2o(h) ? h.changedTouches[0] : h;
        a || (a = G9n()), o.push({
            x: g,
            y: f,
            id: i.getId(p),
            timeOffset: G9n() - a
        }), c(typeof DragEvent < "u" && h instanceof DragEvent ? xS.Drag : h instanceof MouseEvent ? xS.MouseMove : xS.TouchMove);
    }), r, {
        trailing: !1
    })), u = [
        bte("mousemove", l, n),
        bte("touchmove", l, n),
        bte("drag", l, n)
    ];
    return dE(()=>{
        u.forEach((h)=>h());
    });
}
function Gk_({ mouseInteractionCb: e, doc: t, mirror: n, blockClass: i, blockSelector: r, unblockSelector: s, sampling: o }) {
    if (o.mouseInteraction === !1) return ()=>{};
    const a = o.mouseInteraction === !0 || o.mouseInteraction === void 0 ? {} : o.mouseInteraction, c = [];
    let l = null;
    const u = (h)=>(p)=>{
            const g = B9n(p);
            if (bhe(g, i, r, s, !0)) return;
            let f = null, v = h;
            if ("pointerType" in p) {
                switch(p.pointerType){
                    case "mouse":
                        f = jLe.Mouse;
                        break;
                    case "touch":
                        f = jLe.Touch;
                        break;
                    case "pen":
                        f = jLe.Pen;
                        break;
                }
                f === jLe.Touch ? bZ[h] === bZ.MouseDown ? v = "TouchStart" : bZ[h] === bZ.MouseUp && (v = "TouchEnd") : jLe.Pen;
            } else U2o(p) && (f = jLe.Touch);
            f !== null ? (l = f, (v.startsWith("Touch") && f === jLe.Touch || v.startsWith("Mouse") && f === jLe.Mouse) && (f = null)) : bZ[h] === bZ.Click && (f = l, l = null);
            const b = U2o(p) ? p.changedTouches[0] : p;
            if (!b) return;
            const y = n.getId(g), { clientX: T, clientY: E } = b;
            dE(e)({
                type: bZ[v],
                id: y,
                x: T,
                y: E,
                ...f !== null && {
                    pointerType: f
                }
            });
        };
    return Object.keys(bZ).filter((h)=>Number.isNaN(Number(h)) && !h.endsWith("_Departed") && a[h] !== !1).forEach((h)=>{
        let p = Zzt(h);
        const g = u(h);
        if (window.PointerEvent) switch(bZ[h]){
            case bZ.MouseDown:
            case bZ.MouseUp:
                p = p.replace("mouse", "pointer");
                break;
            case bZ.TouchStart:
            case bZ.TouchEnd:
                return;
        }
        c.push(bte(p, g, t));
    }), dE(()=>{
        c.forEach((h)=>h());
    });
}
function uzh({ scrollCb: e, doc: t, mirror: n, blockClass: i, blockSelector: r, unblockSelector: s, sampling: o }) {
    const a = dE(F9n(dE((c)=>{
        const l = B9n(c);
        if (!l || bhe(l, i, r, s, !0)) return;
        const u = n.getId(l);
        if (l === t && t.defaultView) {
            const h = Xqh(t.defaultView);
            e({
                id: u,
                x: h.left,
                y: h.top
            });
        } else e({
            id: u,
            x: l.scrollLeft,
            y: l.scrollTop
        });
    }), o.scroll || 100));
    return bte("scroll", a, t);
}
function Vk_({ viewportResizeCb: e }, { win: t }) {
    let n = -1, i = -1;
    const r = dE(F9n(dE(()=>{
        const s = Zqh(), o = Qqh();
        (n !== s || i !== o) && (e({
            width: Number(o),
            height: Number(s)
        }), n = s, i = o);
    }), 200));
    return bte("resize", r, t);
}
function jk_({ inputCb: e, doc: t, mirror: n, blockClass: i, blockSelector: r, unblockSelector: s, ignoreClass: o, ignoreSelector: a, maskInputOptions: c, maskInputFn: l, sampling: u, userTriggeredOnInput: h, maskTextClass: p, unmaskTextClass: g, maskTextSelector: f, unmaskTextSelector: v }) {
    function b(P) {
        let N = B9n(P);
        const O = P.isTrusted, F = N && P2o(N.tagName);
        if (F === "OPTION" && (N = N.parentElement), !N || !F || oKh.indexOf(F) < 0 || bhe(N, i, r, s, !0)) return;
        const H = N;
        if (H.classList.contains(o) || a && H.matches(a)) return;
        const $ = L2o(N);
        let W = xsr(H, F, $), G = !1;
        const q = Esr({
            maskInputOptions: c,
            tagName: F,
            type: $
        }), z = eKt(N, p, f, g, v, q);
        ($ === "radio" || $ === "checkbox") && (G = N.checked), W = O9n({
            isMasked: z,
            element: N,
            value: W,
            maskInputFn: l
        }), y(N, h ? {
            text: W,
            isChecked: G,
            userTriggered: O
        } : {
            text: W,
            isChecked: G
        });
        const X = N.name;
        $ === "radio" && X && G && t.querySelectorAll(`input[type="radio"][name="${X}"]`).forEach((Y)=>{
            if (Y !== N) {
                const Z = O9n({
                    isMasked: z,
                    element: Y,
                    value: xsr(Y, F, $),
                    maskInputFn: l
                });
                y(Y, h ? {
                    text: Z,
                    isChecked: !G,
                    userTriggered: !1
                } : {
                    text: Z,
                    isChecked: !G
                });
            }
        });
    }
    function y(P, N) {
        const O = hOo.get(P);
        if (!O || O.text !== N.text || O.isChecked !== N.isChecked) {
            hOo.set(P, N);
            const F = n.getId(P);
            dE(e)({
                ...N,
                id: F
            });
        }
    }
    const E = (u.input === "last" ? [
        "change"
    ] : [
        "input",
        "change"
    ]).map((P)=>bte(P, dE(b), t)), A = t.defaultView;
    if (!A) return ()=>{
        E.forEach((P)=>P());
    };
    const R = A.Object.getOwnPropertyDescriptor(A.HTMLInputElement.prototype, "value"), D = [
        [
            A.HTMLInputElement.prototype,
            "value"
        ],
        [
            A.HTMLInputElement.prototype,
            "checked"
        ],
        [
            A.HTMLSelectElement.prototype,
            "value"
        ],
        [
            A.HTMLTextAreaElement.prototype,
            "value"
        ],
        [
            A.HTMLSelectElement.prototype,
            "selectedIndex"
        ],
        [
            A.HTMLOptionElement.prototype,
            "selected"
        ]
    ];
    return R && R.set && E.push(...D.map((P)=>Yqh(P[0], P[1], {
            set () {
                dE(b)({
                    target: this,
                    isTrusted: !1
                });
            }
        }, !1, A))), dE(()=>{
        E.forEach((P)=>P());
    });
}
function Dsr(e) {
    const t = [];
    function n(i, r) {
        if (Msr("CSSGroupingRule") && i.parentRule instanceof CSSGroupingRule || Msr("CSSMediaRule") && i.parentRule instanceof CSSMediaRule || Msr("CSSSupportsRule") && i.parentRule instanceof CSSSupportsRule || Msr("CSSConditionRule") && i.parentRule instanceof CSSConditionRule) {
            const o = Array.from(i.parentRule.cssRules).indexOf(i);
            r.unshift(o);
        } else if (i.parentStyleSheet) {
            const o = Array.from(i.parentStyleSheet.cssRules).indexOf(i);
            r.unshift(o);
        }
        return r;
    }
    return n(e, t);
}
function jnt(e, t, n) {
    let i, r;
    return e ? (e.ownerNode ? i = t.getId(e.ownerNode) : r = n.getId(e), {
        styleId: r,
        id: i
    }) : {};
}
function qk_({ styleSheetRuleCb: e, mirror: t, stylesheetManager: n }, { win: i }) {
    if (!i.CSSStyleSheet || !i.CSSStyleSheet.prototype) return ()=>{};
    const r = i.CSSStyleSheet.prototype.insertRule;
    i.CSSStyleSheet.prototype.insertRule = new Proxy(r, {
        apply: dE((u, h, p)=>{
            const [g, f] = p, { id: v, styleId: b } = jnt(h, t, n.styleMirror);
            return (v && v !== -1 || b && b !== -1) && e({
                id: v,
                styleId: b,
                adds: [
                    {
                        rule: g,
                        index: f
                    }
                ]
            }), u.apply(h, p);
        })
    });
    const s = i.CSSStyleSheet.prototype.deleteRule;
    i.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
        apply: dE((u, h, p)=>{
            const [g] = p, { id: f, styleId: v } = jnt(h, t, n.styleMirror);
            return (f && f !== -1 || v && v !== -1) && e({
                id: f,
                styleId: v,
                removes: [
                    {
                        index: g
                    }
                ]
            }), u.apply(h, p);
        })
    });
    let o;
    i.CSSStyleSheet.prototype.replace && (o = i.CSSStyleSheet.prototype.replace, i.CSSStyleSheet.prototype.replace = new Proxy(o, {
        apply: dE((u, h, p)=>{
            const [g] = p, { id: f, styleId: v } = jnt(h, t, n.styleMirror);
            return (f && f !== -1 || v && v !== -1) && e({
                id: f,
                styleId: v,
                replace: g
            }), u.apply(h, p);
        })
    }));
    let a;
    i.CSSStyleSheet.prototype.replaceSync && (a = i.CSSStyleSheet.prototype.replaceSync, i.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
        apply: dE((u, h, p)=>{
            const [g] = p, { id: f, styleId: v } = jnt(h, t, n.styleMirror);
            return (f && f !== -1 || v && v !== -1) && e({
                id: f,
                styleId: v,
                replaceSync: g
            }), u.apply(h, p);
        })
    }));
    const c = {};
    Psr("CSSGroupingRule") ? c.CSSGroupingRule = i.CSSGroupingRule : (Psr("CSSMediaRule") && (c.CSSMediaRule = i.CSSMediaRule), Psr("CSSConditionRule") && (c.CSSConditionRule = i.CSSConditionRule), Psr("CSSSupportsRule") && (c.CSSSupportsRule = i.CSSSupportsRule));
    const l = {};
    return Object.entries(c).forEach(([u, h])=>{
        l[u] = {
            insertRule: h.prototype.insertRule,
            deleteRule: h.prototype.deleteRule
        }, h.prototype.insertRule = new Proxy(l[u].insertRule, {
            apply: dE((p, g, f)=>{
                const [v, b] = f, { id: y, styleId: T } = jnt(g.parentStyleSheet, t, n.styleMirror);
                return (y && y !== -1 || T && T !== -1) && e({
                    id: y,
                    styleId: T,
                    adds: [
                        {
                            rule: v,
                            index: [
                                ...Dsr(g),
                                b || 0
                            ]
                        }
                    ]
                }), p.apply(g, f);
            })
        }), h.prototype.deleteRule = new Proxy(l[u].deleteRule, {
            apply: dE((p, g, f)=>{
                const [v] = f, { id: b, styleId: y } = jnt(g.parentStyleSheet, t, n.styleMirror);
                return (b && b !== -1 || y && y !== -1) && e({
                    id: b,
                    styleId: y,
                    removes: [
                        {
                            index: [
                                ...Dsr(g),
                                v
                            ]
                        }
                    ]
                }), p.apply(g, f);
            })
        });
    }), dE(()=>{
        i.CSSStyleSheet.prototype.insertRule = r, i.CSSStyleSheet.prototype.deleteRule = s, o && (i.CSSStyleSheet.prototype.replace = o), a && (i.CSSStyleSheet.prototype.replaceSync = a), Object.entries(c).forEach(([u, h])=>{
            h.prototype.insertRule = l[u].insertRule, h.prototype.deleteRule = l[u].deleteRule;
        });
    });
}
function dzh({ mirror: e, stylesheetManager: t }, n) {
    let i = null;
    n.nodeName === "#document" ? i = e.getId(n) : i = e.getId(n.host);
    const r = n.nodeName === "#document" ? n.defaultView?.Document : n.ownerDocument?.defaultView?.ShadowRoot, s = r?.prototype ? Object.getOwnPropertyDescriptor(r?.prototype, "adoptedStyleSheets") : void 0;
    return i === null || i === -1 || !r || !s ? ()=>{} : (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: s.configurable,
        enumerable: s.enumerable,
        get () {
            return s.get?.call(this);
        },
        set (o) {
            const a = s.set?.call(this, o);
            if (i !== null && i !== -1) try {
                t.adoptStyleSheets(o, i);
            } catch  {}
            return a;
        }
    }), dE(()=>{
        Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: s.configurable,
            enumerable: s.enumerable,
            get: s.get,
            set: s.set
        });
    }));
}
function zk_({ styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: n, stylesheetManager: i }, { win: r }) {
    const s = r.CSSStyleDeclaration.prototype.setProperty;
    r.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
        apply: dE((a, c, l)=>{
            const [u, h, p] = l;
            if (n.has(u)) return s.apply(c, [
                u,
                h,
                p
            ]);
            const { id: g, styleId: f } = jnt(c.parentRule?.parentStyleSheet, t, i.styleMirror);
            return (g && g !== -1 || f && f !== -1) && e({
                id: g,
                styleId: f,
                set: {
                    property: u,
                    value: h,
                    priority: p
                },
                index: Dsr(c.parentRule)
            }), a.apply(c, l);
        })
    });
    const o = r.CSSStyleDeclaration.prototype.removeProperty;
    return r.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
        apply: dE((a, c, l)=>{
            const [u] = l;
            if (n.has(u)) return o.apply(c, [
                u
            ]);
            const { id: h, styleId: p } = jnt(c.parentRule?.parentStyleSheet, t, i.styleMirror);
            return (h && h !== -1 || p && p !== -1) && e({
                id: h,
                styleId: p,
                remove: {
                    property: u
                },
                index: Dsr(c.parentRule)
            }), a.apply(c, l);
        })
    }), dE(()=>{
        r.CSSStyleDeclaration.prototype.setProperty = s, r.CSSStyleDeclaration.prototype.removeProperty = o;
    });
}
function Kk_({ mediaInteractionCb: e, blockClass: t, blockSelector: n, unblockSelector: i, mirror: r, sampling: s, doc: o }) {
    const a = dE((l)=>F9n(dE((u)=>{
            const h = B9n(u);
            if (!h || bhe(h, t, n, i, !0)) return;
            const { currentTime: p, volume: g, muted: f, playbackRate: v } = h;
            e({
                type: l,
                id: r.getId(h),
                currentTime: p,
                volume: g,
                muted: f,
                playbackRate: v
            });
        }), s.media || 500)), c = [
        bte("play", a(r1t.Play), o),
        bte("pause", a(r1t.Pause), o),
        bte("seeked", a(r1t.Seeked), o),
        bte("volumechange", a(r1t.VolumeChange), o),
        bte("ratechange", a(r1t.RateChange), o)
    ];
    return dE(()=>{
        c.forEach((l)=>l());
    });
}
function Yk_({ fontCb: e, doc: t }) {
    const n = t.defaultView;
    if (!n) return ()=>{};
    const i = [], r = new WeakMap, s = n.FontFace;
    n.FontFace = function(c, l, u) {
        const h = new s(c, l, u);
        return r.set(h, {
            family: c,
            buffer: typeof l != "string",
            descriptors: u,
            fontSource: typeof l == "string" ? l : JSON.stringify(Array.from(new Uint8Array(l)))
        }), h;
    };
    const o = F2o(t.fonts, "add", function(a) {
        return function(c) {
            return Rsr(dE(()=>{
                const l = r.get(c);
                l && (e(l), r.delete(c));
            }), 0), a.apply(this, [
                c
            ]);
        };
    });
    return i.push(()=>{
        n.FontFace = s;
    }), i.push(o), dE(()=>{
        i.forEach((a)=>a());
    });
}
function Xk_(e) {
    const { doc: t, mirror: n, blockClass: i, blockSelector: r, unblockSelector: s, selectionCb: o } = e;
    let a = !0;
    const c = dE(()=>{
        const l = t.getSelection();
        if (!l || a && l?.isCollapsed) return;
        a = l.isCollapsed || !1;
        const u = [], h = l.rangeCount || 0;
        for(let p = 0; p < h; p++){
            const g = l.getRangeAt(p), { startContainer: f, startOffset: v, endContainer: b, endOffset: y } = g;
            bhe(f, i, r, s, !0) || bhe(b, i, r, s, !0) || u.push({
                start: n.getId(f),
                startOffset: v,
                end: n.getId(b),
                endOffset: y
            });
        }
        o({
            ranges: u
        });
    });
    return c(), bte("selectionchange", c);
}
function Zk_({ doc: e, customElementCb: t }) {
    const n = e.defaultView;
    return !n || !n.customElements ? ()=>{} : F2o(n.customElements, "define", function(r) {
        return function(s, o, a) {
            try {
                t({
                    define: {
                        name: s
                    }
                });
            } catch  {}
            return r.apply(this, [
                s,
                o,
                a
            ]);
        };
    });
}
function Qk_(e, t = {}) {
    const n = e.doc.defaultView;
    if (!n) return ()=>{};
    let i;
    e.recordDOM && (i = lzh(e, e.doc));
    const r = Wk_(e), s = Gk_(e), o = uzh(e), a = Vk_(e, {
        win: n
    }), c = jk_(e), l = Kk_(e);
    let u = ()=>{}, h = ()=>{}, p = ()=>{}, g = ()=>{};
    e.recordDOM && (u = qk_(e, {
        win: n
    }), h = dzh(e, e.doc), p = zk_(e, {
        win: n
    }), e.collectFonts && (g = Yk_(e)));
    const f = Xk_(e), v = Zk_(e), b = [];
    for (const y of e.plugins)b.push(y.observer(y.callback, n, y.options));
    return dE(()=>{
        znt.forEach((y)=>y.reset()), znt.length = 0, i?.disconnect(), r(), s(), o(), a(), c(), l(), u(), h(), p(), g(), f(), v(), b.forEach((y)=>y());
    });
}
function Msr(e) {
    return typeof window[e] < "u";
}
function Psr(e) {
    return !!(typeof window[e] < "u" && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype);
}
function y7e(e = {}) {
    const { emit: t, checkoutEveryNms: n, checkoutEveryNth: i, blockClass: r = "rr-block", blockSelector: s = null, unblockSelector: o = null, ignoreClass: a = "rr-ignore", ignoreSelector: c = null, maskAllText: l = !1, maskTextClass: u = "rr-mask", unmaskTextClass: h = null, maskTextSelector: p = null, unmaskTextSelector: g = null, inlineStylesheet: f = !0, maskAllInputs: v, maskInputOptions: b, slimDOMOptions: y, maskAttributeFn: T, maskInputFn: E, maskTextFn: A, maxCanvasSize: R = null, packFn: D, sampling: P = {}, dataURLOptions: N = {}, mousemoveWait: O, recordDOM: F = !0, recordCanvas: H = !1, recordCrossOriginIframes: $ = !1, recordAfter: W = e.recordAfter === "DOMContentLoaded" ? e.recordAfter : "load", userTriggeredOnInput: G = !1, collectFonts: q = !1, inlineImages: z = !1, plugins: X, keepIframeSrcFn: Y = ()=>!1, ignoreCSSAttributes: Z = new Set([]), errorHandler: K, onMutation: J, getCanvasManager: ne } = e;
    $k_(K);
    const ee = $ ? window.parent === window : !0;
    let se = !1;
    if (!ee) try {
        window.parent.document && (se = !1);
    } catch  {
        se = !0;
    }
    if (ee && !t) throw new Error("emit function is required");
    if (!ee && !se) return ()=>{};
    O !== void 0 && P.mousemove === void 0 && (P.mousemove = O), vbe.reset();
    const re = v === !0 ? {
        color: !0,
        date: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
        textarea: !0,
        select: !0,
        radio: !0,
        checkbox: !0
    } : b !== void 0 ? b : {}, ue = y === !0 || y === "all" ? {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaVerification: !0,
        headMetaAuthorship: y === "all",
        headMetaDescKeywords: y === "all"
    } : y || {};
    Pk_();
    let ce, de = 0;
    const le = (Ke)=>{
        for (const et of X || [])et.eventProcessor && (Ke = et.eventProcessor(Ke));
        return D && !se && (Ke = D(Ke)), Ke;
    };
    n9 = (Ke, et)=>{
        const We = Ke;
        if (We.timestamp = G9n(), znt[0]?.isFrozen() && We.type !== NC.FullSnapshot && !(We.type === NC.IncrementalSnapshot && We.data.source === xS.Mutation) && znt.forEach((it)=>it.unfreeze()), ee) t?.(le(We), et);
        else if (se) {
            const it = {
                type: "rrweb",
                event: le(We),
                origin: window.location.origin,
                isCheckout: et
            };
            window.parent.postMessage(it, "*");
        }
        if (We.type === NC.FullSnapshot) ce = We, de = 0;
        else if (We.type === NC.IncrementalSnapshot) {
            if (We.data.source === xS.Mutation && We.data.isAttachIframe) return;
            de++;
            const it = i && de >= i, Ne = n && ce && We.timestamp - ce.timestamp > n;
            (it || Ne) && Xe(!0);
        }
    };
    const ye = (Ke)=>{
        n9({
            type: NC.IncrementalSnapshot,
            data: {
                source: xS.Mutation,
                ...Ke
            }
        });
    }, _e = (Ke)=>n9({
            type: NC.IncrementalSnapshot,
            data: {
                source: xS.Scroll,
                ...Ke
            }
        }), me = (Ke)=>n9({
            type: NC.IncrementalSnapshot,
            data: {
                source: xS.CanvasMutation,
                ...Ke
            }
        }), Ce = (Ke)=>n9({
            type: NC.IncrementalSnapshot,
            data: {
                source: xS.AdoptedStyleSheet,
                ...Ke
            }
        }), xe = new hKh({
        mutationCb: ye,
        adoptedStyleSheetCb: Ce
    }), Le = typeof __RRWEB_EXCLUDE_IFRAME__ == "boolean" && __RRWEB_EXCLUDE_IFRAME__ ? new aKh : new cKh({
        mirror: vbe,
        mutationCb: ye,
        stylesheetManager: xe,
        recordCrossOriginIframes: $,
        wrappedEmit: n9
    });
    for (const Ke of X || [])Ke.getMirror && Ke.getMirror({
        nodeMirror: vbe,
        crossOriginIframeMirror: Le.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: Le.crossOriginIframeStyleMirror
    });
    const Be = new pKh, je = ew_(ne, {
        mirror: vbe,
        win: window,
        mutationCb: (Ke)=>n9({
                type: NC.IncrementalSnapshot,
                data: {
                    source: xS.CanvasMutation,
                    ...Ke
                }
            }),
        recordCanvas: H,
        blockClass: r,
        blockSelector: s,
        unblockSelector: o,
        maxCanvasSize: R,
        sampling: P.canvas,
        dataURLOptions: N,
        errorHandler: K
    }), Ge = typeof __RRWEB_EXCLUDE_SHADOW_DOM__ == "boolean" && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new lKh : new uKh({
        mutationCb: ye,
        scrollCb: _e,
        bypassOptions: {
            onMutation: J,
            blockClass: r,
            blockSelector: s,
            unblockSelector: o,
            maskAllText: l,
            maskTextClass: u,
            unmaskTextClass: h,
            maskTextSelector: p,
            unmaskTextSelector: g,
            inlineStylesheet: f,
            maskInputOptions: re,
            dataURLOptions: N,
            maskAttributeFn: T,
            maskTextFn: A,
            maskInputFn: E,
            recordCanvas: H,
            inlineImages: z,
            sampling: P,
            slimDOMOptions: ue,
            iframeManager: Le,
            stylesheetManager: xe,
            canvasManager: je,
            keepIframeSrcFn: Y,
            processedNodeManager: Be,
            ignoreCSSAttributes: Z
        },
        mirror: vbe
    }), Xe = (Ke = !1)=>{
        if (!F) return;
        n9({
            type: NC.Meta,
            data: {
                href: window.location.href,
                width: Qqh(),
                height: Zqh()
            }
        }, Ke), xe.reset(), Ge.init(), znt.forEach((We)=>We.lock());
        const et = Dk_(document, {
            mirror: vbe,
            blockClass: r,
            blockSelector: s,
            unblockSelector: o,
            maskAllText: l,
            maskTextClass: u,
            unmaskTextClass: h,
            maskTextSelector: p,
            unmaskTextSelector: g,
            inlineStylesheet: f,
            maskAllInputs: re,
            maskAttributeFn: T,
            maskInputFn: E,
            maskTextFn: A,
            slimDOM: ue,
            dataURLOptions: N,
            recordCanvas: H,
            inlineImages: z,
            onSerialize: (We)=>{
                tzh(We, vbe) && Le.addIframe(We), nzh(We, vbe) && xe.trackLinkElement(We), $2o(We) && Ge.addShadowRoot(We.shadowRoot, document);
            },
            onIframeLoad: (We, it)=>{
                Le.attachIframe(We, it), We.contentWindow && je.addWindow(We.contentWindow), Ge.observeAttachShadow(We);
            },
            onStylesheetLoad: (We, it)=>{
                xe.attachLinkElement(We, it);
            },
            onBlockedImageLoad: (We, it, { width: Ne, height: Fe })=>{
                ye({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [
                        {
                            id: it.id,
                            attributes: {
                                style: {
                                    width: `${Ne}px`,
                                    height: `${Fe}px`
                                }
                            }
                        }
                    ]
                });
            },
            keepIframeSrcFn: Y,
            ignoreCSSAttributes: Z
        });
        if (!et) return console.warn("Failed to snapshot the document");
        n9({
            type: NC.FullSnapshot,
            data: {
                node: et,
                initialOffset: Xqh(window)
            }
        }), znt.forEach((We)=>We.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && xe.adoptStyleSheets(document.adoptedStyleSheets, vbe.getId(document));
    };
    Gsr = Xe;
    try {
        const Ke = [], et = (it)=>dE(Qk_)({
                onMutation: J,
                mutationCb: ye,
                mousemoveCb: (Ne, Fe)=>n9({
                        type: NC.IncrementalSnapshot,
                        data: {
                            source: Fe,
                            positions: Ne
                        }
                    }),
                mouseInteractionCb: (Ne)=>n9({
                        type: NC.IncrementalSnapshot,
                        data: {
                            source: xS.MouseInteraction,
                            ...Ne
                        }
                    }),
                scrollCb: _e,
                viewportResizeCb: (Ne)=>n9({
                        type: NC.IncrementalSnapshot,
                        data: {
                            source: xS.ViewportResize,
                            ...Ne
                        }
                    }),
                inputCb: (Ne)=>n9({
                        type: NC.IncrementalSnapshot,
                        data: {
                            source: xS.Input,
                            ...Ne
                        }
                    }),
                mediaInteractionCb: (Ne)=>n9({
                        type: NC.IncrementalSnapshot,
                        data: {
                            source: xS.MediaInteraction,
                            ...Ne
                        }
                    }),
                styleSheetRuleCb: (Ne)=>n9({
                        type: NC.IncrementalSnapshot,
                        data: {
                            source: xS.StyleSheetRule,
                            ...Ne
                        }
                    }),
                styleDeclarationCb: (Ne)=>n9({
                        type: NC.IncrementalSnapshot,
                        data: {
                            source: xS.StyleDeclaration,
                            ...Ne
                        }
                    }),
                canvasMutationCb: me,
                fontCb: (Ne)=>n9({
                        type: NC.IncrementalSnapshot,
                        data: {
                            source: xS.Font,
                            ...Ne
                        }
                    }),
                selectionCb: (Ne)=>{
                    n9({
                        type: NC.IncrementalSnapshot,
                        data: {
                            source: xS.Selection,
                            ...Ne
                        }
                    });
                },
                customElementCb: (Ne)=>{
                    n9({
                        type: NC.IncrementalSnapshot,
                        data: {
                            source: xS.CustomElement,
                            ...Ne
                        }
                    });
                },
                blockClass: r,
                ignoreClass: a,
                ignoreSelector: c,
                maskAllText: l,
                maskTextClass: u,
                unmaskTextClass: h,
                maskTextSelector: p,
                unmaskTextSelector: g,
                maskInputOptions: re,
                inlineStylesheet: f,
                sampling: P,
                recordDOM: F,
                recordCanvas: H,
                inlineImages: z,
                userTriggeredOnInput: G,
                collectFonts: q,
                doc: it,
                maskAttributeFn: T,
                maskInputFn: E,
                maskTextFn: A,
                keepIframeSrcFn: Y,
                blockSelector: s,
                unblockSelector: o,
                slimDOMOptions: ue,
                dataURLOptions: N,
                mirror: vbe,
                iframeManager: Le,
                stylesheetManager: xe,
                shadowDomManager: Ge,
                processedNodeManager: Be,
                canvasManager: je,
                ignoreCSSAttributes: Z,
                plugins: X?.filter((Ne)=>Ne.observer)?.map((Ne)=>({
                        observer: Ne.observer,
                        options: Ne.options,
                        callback: (Fe)=>n9({
                                type: NC.Plugin,
                                data: {
                                    plugin: Ne.name,
                                    payload: Fe
                                }
                            })
                    })) || []
            }, {});
        Le.addLoadListener((it)=>{
            try {
                Ke.push(et(it.contentDocument));
            } catch (Ne) {
                console.warn(Ne);
            }
        });
        const We = ()=>{
            Xe(), Ke.push(et(document));
        };
        return document.readyState === "interactive" || document.readyState === "complete" ? We() : (Ke.push(bte("DOMContentLoaded", ()=>{
            n9({
                type: NC.DomContentLoaded,
                data: {}
            }), W === "DOMContentLoaded" && We();
        })), Ke.push(bte("load", ()=>{
            n9({
                type: NC.Load,
                data: {}
            }), W === "load" && We();
        }, window))), ()=>{
            Ke.forEach((it)=>it()), Be.destroy(), Gsr = void 0, ce = void 0, Hk_();
        };
    } catch (Ke) {
        console.warn(Ke);
    }
}
function Jk_(e) {
    if (!Gsr) throw new Error("please take full snapshot after start recording");
    Gsr(e);
}
function ew_(e, t) {
    try {
        return e ? e(t) : new mOo;
    } catch  {
        return console.warn("Unable to initialize CanvasManager"), new mOo;
    }
}
function V2o(e) {
    return e > 9999999999 ? e : e * 1e3;
}
function j2o(e) {
    return e > 9999999999 ? e / 1e3 : e;
}
function U9n(e, t) {
    t.category !== "sentry.transaction" && ([
        "ui.click",
        "ui.input"
    ].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate(()=>(e.throttledAddEvent({
            type: NC.Custom,
            timestamp: (t.timestamp || 0) * 1e3,
            data: {
                tag: "breadcrumb",
                payload: TV(t, 10, 1e3)
            }
        }), t.category === "console")));
}
function hzh(e) {
    return e.closest(vKh) || e;
}
function pzh(e) {
    const t = mzh(e);
    return !t || !(t instanceof Element) ? t : hzh(t);
}
function mzh(e) {
    return tw_(e) ? e.target : e;
}
function tw_(e) {
    return typeof e == "object" && !!e && "target" in e;
}
function nw_(e) {
    return Knt || (Knt = [], iw_()), Knt.push(e), ()=>{
        const t = Knt ? Knt.indexOf(e) : -1;
        t > -1 && Knt.splice(t, 1);
    };
}
function iw_() {
    sA(yL, "open", function(e) {
        return function(...t) {
            if (Knt) try {
                Knt.forEach((n)=>n());
            } catch  {}
            return e.apply(yL, t);
        };
    });
}
function rw_(e, t, n) {
    e.handleClick(t, n);
}
function sw_(e, t) {
    return !!(!yKh.includes(e.tagName) || e.tagName === "INPUT" && ![
        "submit",
        "button"
    ].includes(e.getAttribute("type") || "") || e.tagName === "A" && (e.hasAttribute("download") || e.hasAttribute("target") && e.getAttribute("target") !== "_self") || t && e.matches(t));
}
function ow_(e) {
    return !!(e.data && typeof e.data.nodeId == "number" && e.timestamp);
}
function gzh() {
    return Date.now() / 1e3;
}
function aw_(e, t) {
    try {
        if (!cw_(t)) return;
        const { source: n } = t.data;
        if (_Kh.has(n) && e.registerMutation(t.timestamp), n === xS.Scroll && e.registerScroll(t.timestamp), lw_(t)) {
            const { type: i, id: r } = t.data, s = y7e.mirror.getNode(r);
            s instanceof HTMLElement && i === bZ.Click && e.registerClick(s);
        }
    } catch  {}
}
function cw_(e) {
    return e.type === gKh;
}
function lw_(e) {
    return e.data.source === xS.MouseInteraction;
}
function VLe(e) {
    return {
        timestamp: Date.now() / 1e3,
        type: "default",
        ...e
    };
}
function uw_(e) {
    const t = {};
    !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]);
    for(const n in e)if (SKh.has(n)) {
        let i = n;
        (n === "data-testid" || n === "data-test-id") && (i = "testId"), t[i] = e[n];
    }
    return t;
}
function fzh(e, t) {
    const n = y7e.mirror.getId(e), i = n && y7e.mirror.getNode(n), r = i && y7e.mirror.getMeta(i), s = r && pw_(r) ? r : null;
    return {
        message: t,
        data: s ? {
            nodeId: n,
            node: {
                id: n,
                tagName: s.tagName,
                textContent: Array.from(s.childNodes).map((o)=>o.type === Vsr.Text && o.textContent).filter(Boolean).map((o)=>o.trim()).join(""),
                attributes: uw_(s.attributes)
            }
        } : {}
    };
}
function dw_(e) {
    const { target: t, message: n } = hw_(e);
    return VLe({
        category: `ui.${e.name}`,
        ...fzh(t, n)
    });
}
function hw_(e) {
    const t = e.name === "click";
    let n, i = null;
    try {
        i = t ? pzh(e.event) : mzh(e.event), n = gK(i, {
            maxStringLength: 200
        }) || "<unknown>";
    } catch  {
        n = "<unknown>";
    }
    return {
        target: i,
        message: n
    };
}
function pw_(e) {
    return e.type === Vsr.Element;
}
function mw_(e, t) {
    if (!e.isEnabled()) return;
    e.updateUserActivity();
    const n = gw_(t);
    n && U9n(e, n);
}
function gw_(e) {
    const { metaKey: t, shiftKey: n, ctrlKey: i, altKey: r, key: s, target: o } = e;
    if (!o || fw_(o) || !s) return null;
    const a = t || i || r, c = s.length === 1;
    if (!a && c) return null;
    const l = gK(o, {
        maxStringLength: 200
    }) || "<unknown>", u = fzh(o, l);
    return VLe({
        category: "ui.keyDown",
        message: l,
        data: {
            ...u.data,
            metaKey: t,
            shiftKey: n,
            ctrlKey: i,
            altKey: r,
            key: s
        }
    });
}
function fw_(e) {
    return e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable;
}
function q2o(e, t) {
    return ({ metric: n })=>void t.replayPerformanceEntries.push(e(n));
}
function vw_(e) {
    return e.map(_w_).filter(Boolean);
}
function _w_(e) {
    const t = wKh[e.entryType];
    return t ? t(e) : null;
}
function nKt(e) {
    return ((Y4() || yL.performance.timeOrigin) + e) / 1e3;
}
function bw_(e) {
    const { duration: t, entryType: n, name: i, startTime: r } = e, s = nKt(r);
    return {
        type: n,
        name: i,
        start: s,
        end: s + t,
        data: void 0
    };
}
function yw_(e) {
    const { entryType: t, name: n, decodedBodySize: i, duration: r, domComplete: s, encodedBodySize: o, domContentLoadedEventStart: a, domContentLoadedEventEnd: c, domInteractive: l, loadEventStart: u, loadEventEnd: h, redirectCount: p, startTime: g, transferSize: f, type: v } = e;
    return r === 0 ? null : {
        type: `${t}.${v}`,
        start: nKt(g),
        end: nKt(s),
        name: n,
        data: {
            size: f,
            decodedBodySize: i,
            encodedBodySize: o,
            duration: r,
            domInteractive: l,
            domContentLoadedEventStart: a,
            domContentLoadedEventEnd: c,
            loadEventStart: u,
            loadEventEnd: h,
            domComplete: s,
            redirectCount: p
        }
    };
}
function Sw_(e) {
    const { entryType: t, initiatorType: n, name: i, responseEnd: r, startTime: s, decodedBodySize: o, encodedBodySize: a, responseStatus: c, transferSize: l } = e;
    return [
        "fetch",
        "xmlhttprequest"
    ].includes(n) ? null : {
        type: `${t}.${n}`,
        start: nKt(s),
        end: nKt(r),
        name: i,
        data: {
            size: l,
            statusCode: c,
            decodedBodySize: o,
            encodedBodySize: a
        }
    };
}
function kw_(e) {
    const t = e.entries[e.entries.length - 1], n = t?.element ? [
        t.element
    ] : void 0;
    return z2o(e, "largest-contentful-paint", n);
}
function ww_(e) {
    return e.sources !== void 0;
}
function Cw_(e) {
    const t = [], n = [];
    for (const i of e.entries)if (ww_(i)) {
        const r = [];
        for (const s of i.sources)if (s.node) {
            n.push(s.node);
            const o = y7e.mirror.getId(s.node);
            o && r.push(o);
        }
        t.push({
            value: i.value,
            nodeIds: r.length ? r : void 0
        });
    }
    return z2o(e, "cumulative-layout-shift", n, t);
}
function Tw_(e) {
    const t = e.entries[e.entries.length - 1], n = t?.target ? [
        t.target
    ] : void 0;
    return z2o(e, "interaction-to-next-paint", n);
}
function z2o(e, t, n, i) {
    const r = e.value, s = e.rating, o = nKt(r);
    return {
        type: "web-vital",
        name: t,
        start: o,
        end: o,
        data: {
            value: r,
            size: r,
            rating: s,
            nodeIds: n ? n.map((a)=>y7e.mirror.getId(a)) : void 0,
            attributions: i
        }
    };
}
function Ew_(e) {
    const t = new WeakSet;
    function n(s) {
        t.has(s) || (t.add(s), e.performanceEntries.push(s));
    }
    function i({ entries: s }) {
        s.forEach(n);
    }
    const r = [];
    return [
        "navigation",
        "paint",
        "resource"
    ].forEach((s)=>{
        r.push(_qe(s, i));
    }), r.push(Mjr(q2o(kw_, e)), Djr(q2o(Cw_, e)), nEc(q2o(Tw_, e))), ()=>{
        r.forEach((s)=>s());
    };
}
function xw_() {
    const e = new Blob([
        CKh
    ]);
    return URL.createObjectURL(e);
}
function K2o(e, t = "info") {
    ZB({
        category: "console",
        data: {
            logger: "replay"
        },
        level: t,
        message: `${j9n}${e}`
    }, {
        level: t
    });
}
function Iw_() {
    let e = !1, t = !1;
    const n = {
        exception: ()=>{},
        infoTick: ()=>{},
        setConfig: (i)=>{
            e = !!i.captureExceptions, t = !!i.traceInternals;
        }
    };
    return My ? (gOo.forEach((i)=>{
        n[i] = (...r)=>{
            zr[i](j9n, ...r), t && K2o(r.join(""), NLt(i));
        };
    }), n.exception = (i, ...r)=>{
        r.length && n.error && n.error(...r), zr.error(j9n, i), e ? Km(i, {
            mechanism: {
                handled: !0,
                type: "auto.function.replay.debug"
            }
        }) : t && K2o(i, "error");
    }, n.infoTick = (...i)=>{
        zr.log(j9n, ...i), t && setTimeout(()=>K2o(i[0]), 0);
    }) : gOo.forEach((i)=>{
        n[i] = ()=>{};
    }), n;
}
function Aw_({ useCompression: e, workerUrl: t }) {
    if (e && window.Worker) {
        const n = Rw_(t);
        if (n) return n;
    }
    return My && Py.log("Using simple buffer"), new fOo;
}
function Rw_(e) {
    try {
        const t = e || Dw_();
        if (!t) return;
        My && Py.log(`Using compression worker${e ? ` from ${e}` : ""}`);
        const n = new Worker(t);
        return new xKh(n);
    } catch (t) {
        My && Py.exception(t, "Failed to create compression worker");
    }
}
function Dw_() {
    return typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ > "u" || !__SENTRY_EXCLUDE_REPLAY_WORKER__ ? xw_() : "";
}
function Y2o() {
    try {
        return "sessionStorage" in yL && !!yL.sessionStorage;
    } catch  {
        return !1;
    }
}
function Mw_(e) {
    Pw_(), e.session = void 0;
}
function Pw_() {
    if (Y2o()) try {
        yL.sessionStorage.removeItem(Usr);
    } catch  {}
}
function vzh(e) {
    return e === void 0 ? !1 : Math.random() < e;
}
function Lsr(e) {
    if (Y2o()) try {
        yL.sessionStorage.setItem(Usr, JSON.stringify(e));
    } catch  {}
}
function _zh(e) {
    const t = Date.now(), n = e.id || gI(), i = e.started || t, r = e.lastActivity || t, s = e.segmentId || 0, o = e.sampled, a = e.previousSessionId, c = e.dirty || !1;
    return {
        id: n,
        started: i,
        lastActivity: r,
        segmentId: s,
        sampled: o,
        previousSessionId: a,
        dirty: c
    };
}
function Lw_(e, t) {
    return vzh(e) ? "session" : t ? "buffer" : !1;
}
function bzh({ sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 }, { previousSessionId: i } = {}) {
    const r = Lw_(e, t), s = _zh({
        sampled: r,
        previousSessionId: i
    });
    return n && Lsr(s), s;
}
function Nw_() {
    if (!Y2o()) return null;
    try {
        const e = yL.sessionStorage.getItem(Usr);
        if (!e) return null;
        const t = JSON.parse(e);
        return My && Py.infoTick("Loading existing session"), _zh(t);
    } catch  {
        return null;
    }
}
function X2o(e, t, n = +new Date) {
    return e === null || t === void 0 || t < 0 ? !0 : t === 0 ? !1 : e + t <= n;
}
function yzh(e, { maxReplayDuration: t, sessionIdleExpire: n, targetTime: i = Date.now() }) {
    return X2o(e.started, t, i) || X2o(e.lastActivity, n, i);
}
function Szh(e, { sessionIdleExpire: t, maxReplayDuration: n }) {
    return !(!yzh(e, {
        sessionIdleExpire: t,
        maxReplayDuration: n
    }) || e.sampled === "buffer" && e.segmentId === 0);
}
function Z2o({ sessionIdleExpire: e, maxReplayDuration: t, previousSessionId: n }, i) {
    const r = i.stickySession && Nw_();
    return r ? Szh(r, {
        sessionIdleExpire: e,
        maxReplayDuration: t
    }) ? (My && Py.infoTick("Session in sessionStorage is expired, creating new one..."), bzh(i, {
        previousSessionId: r.id
    })) : r : (My && Py.infoTick("Creating new session"), bzh(i, {
        previousSessionId: n
    }));
}
function Ow_(e) {
    return e.type === NC.Custom;
}
function Q2o(e, t, n) {
    return wzh(e, t) ? (kzh(e, t, n), !0) : !1;
}
function Fw_(e, t, n) {
    return wzh(e, t) ? kzh(e, t, n) : Promise.resolve(null);
}
async function kzh(e, t, n) {
    const { eventBuffer: i } = e;
    if (!i || i.waitForCheckout && !n) return null;
    const r = e.recordingMode === "buffer";
    try {
        n && r && i.clear(), n && (i.hasCheckout = !0, i.waitForCheckout = !1);
        const s = e.getOptions(), o = Bw_(t, s.beforeAddRecordingEvent);
        return o ? await i.addEvent(o) : void 0;
    } catch (s) {
        const o = s && s instanceof jsr, a = o ? "addEventSizeExceeded" : "addEvent", c = Pu();
        if (c) {
            const l = o ? "buffer_overflow" : "internal_sdk_error";
            c.recordDroppedEvent(l, "replay");
        }
        if (o && r) return i.clear(), i.waitForCheckout = !0, null;
        e.handleException(s), await e.stop({
            reason: a
        });
    }
}
function wzh(e, t) {
    if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
    const n = V2o(t.timestamp);
    return n + e.timeouts.sessionIdlePause < Date.now() ? !1 : n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration ? (My && Py.infoTick(`Skipping event with timestamp ${n} because it is after maxReplayDuration`), !1) : !0;
}
function Bw_(e, t) {
    try {
        if (typeof t == "function" && Ow_(e)) return t(e);
    } catch (n) {
        return My && Py.exception(n, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event..."), null;
    }
    return e;
}
function J2o(e) {
    return !e.type;
}
function eOo(e) {
    return e.type === "transaction";
}
function Uw_(e) {
    return e.type === "replay_event";
}
function Czh(e) {
    return e.type === "feedback";
}
function $w_(e) {
    return (t, n)=>{
        if (!e.isEnabled() || !J2o(t) && !eOo(t)) return;
        const i = n.statusCode;
        if (!(!i || i < 200 || i >= 300)) {
            if (eOo(t)) {
                Hw_(e, t);
                return;
            }
            Ww_(e, t);
        }
    };
}
function Hw_(e, t) {
    const n = e.getContext();
    t.contexts?.trace?.trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id);
}
function Ww_(e, t) {
    const n = e.getContext();
    if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id), e.recordingMode !== "buffer" || !t.tags || !t.tags.replayId) return;
    const { beforeErrorSampling: i } = e.getOptions();
    typeof i == "function" && !i(t) || bpn(async ()=>{
        try {
            await e.sendBufferedReplayOrFlush();
        } catch (r) {
            e.handleException(r);
        }
    });
}
function Gw_(e) {
    return (t)=>{
        !e.isEnabled() || !J2o(t) || Vw_(e, t);
    };
}
function Vw_(e, t) {
    const n = t.exception?.values?.[0]?.value;
    if (typeof n == "string" && (n.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i))) {
        const i = VLe({
            category: "replay.hydrate-error",
            data: {
                url: Gce()
            }
        });
        U9n(e, i);
    }
}
function jw_(e) {
    const t = Pu();
    t && t.on("beforeAddBreadcrumb", (n)=>qw_(e, n));
}
function qw_(e, t) {
    if (!e.isEnabled() || !Tzh(t)) return;
    const n = zw_(t);
    n && U9n(e, n);
}
function zw_(e) {
    return !Tzh(e) || [
        "fetch",
        "xhr",
        "sentry.event",
        "sentry.transaction"
    ].includes(e.category) || e.category.startsWith("ui.") ? null : e.category === "console" ? Kw_(e) : VLe(e);
}
function Kw_(e) {
    const t = e.data?.arguments;
    if (!Array.isArray(t) || t.length === 0) return VLe(e);
    let n = !1;
    const i = t.map((r)=>{
        if (!r) return r;
        if (typeof r == "string") return r.length > W9n ? (n = !0, `${r.slice(0, W9n)}\u2026`) : r;
        if (typeof r == "object") try {
            const s = TV(r, 7);
            return JSON.stringify(s).length > W9n ? (n = !0, `${JSON.stringify(s, null, 2).slice(0, W9n)}\u2026`) : s;
        } catch  {}
        return r;
    });
    return VLe({
        ...e,
        data: {
            ...e.data,
            arguments: i,
            ...n ? {
                _meta: {
                    warnings: [
                        "CONSOLE_ARG_TRUNCATED"
                    ]
                }
            } : {}
        }
    });
}
function Tzh(e) {
    return !!e.category;
}
function Yw_(e, t) {
    return e.type || !e.exception?.values?.length ? !1 : !!t.originalException?.__rrweb__;
}
function Ezh() {
    const e = nv().getPropagationContext().dsc;
    e && delete e.replay_id;
    const t = mD();
    if (t) {
        const n = Kce(t);
        delete n.replay_id;
    }
}
function Xw_(e, t) {
    e.triggerUserActivity(), e.addUpdate(()=>t.timestamp ? (e.throttledAddEvent({
            type: NC.Custom,
            timestamp: t.timestamp * 1e3,
            data: {
                tag: "breadcrumb",
                payload: {
                    timestamp: t.timestamp,
                    type: "default",
                    category: "sentry.feedback",
                    data: {
                        feedbackId: t.event_id
                    }
                }
            }
        }), !1) : !0);
}
function Zw_(e, t) {
    return e.recordingMode !== "buffer" || t.message === $sr || !t.exception || t.type ? !1 : vzh(e.getOptions().errorSampleRate);
}
function Qw_(e) {
    return Object.assign((t, n)=>{
        if (!e.isEnabled() || e.isPaused()) return t;
        if (Uw_(t)) return delete t.breadcrumbs, t;
        if (!J2o(t) && !eOo(t) && !Czh(t)) return t;
        if (!e.checkAndHandleExpiredSession()) return Ezh(), t;
        if (Czh(t)) return e.flush(), t.contexts.feedback.replay_id = e.getSessionId(), Xw_(e, t), t;
        if (Yw_(t, n) && !e.getOptions()._experiments.captureExceptions) return My && Py.log("Ignoring error from rrweb internals", t), null;
        const r = Zw_(e, t);
        if ((r || e.recordingMode === "session") && (t.tags = {
            ...t.tags,
            replayId: e.getSessionId()
        }), r && e.recordingMode === "buffer" && e.session?.sampled === "buffer") {
            const o = e.session;
            o.dirty = !0, e.getOptions().stickySession && Lsr(o);
        }
        return t;
    }, {
        id: "Replay"
    });
}
function Nsr(e, t) {
    return t.map(({ type: n, start: i, end: r, name: s, data: o })=>{
        const a = e.throttledAddEvent({
            type: NC.Custom,
            timestamp: i,
            data: {
                tag: "performanceSpan",
                payload: {
                    op: n,
                    description: s,
                    startTimestamp: i,
                    endTimestamp: r,
                    data: o
                }
            }
        });
        return typeof a == "string" ? Promise.resolve(null) : a;
    });
}
function Jw_(e) {
    const { from: t, to: n } = e, i = Date.now() / 1e3;
    return {
        type: "navigation.push",
        start: i,
        end: i,
        name: n,
        data: {
            previous: t
        }
    };
}
function eC_(e) {
    return (t)=>{
        if (!e.isEnabled()) return;
        const n = Jw_(t);
        n !== null && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(()=>(Nsr(e, [
                n
            ]), !1)));
    };
}
function tC_(e, t) {
    return My && e.getOptions()._experiments.traceInternals ? !1 : Bhi(t, Pu());
}
function xzh(e, t) {
    e.isEnabled() && t !== null && (tC_(e, t.name) || e.addUpdate(()=>(Nsr(e, [
            t
        ]), !0)));
}
function Osr(e) {
    if (!e) return;
    const t = new TextEncoder;
    try {
        if (typeof e == "string") return t.encode(e).length;
        if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
        if (e instanceof FormData) {
            const n = IEc(e);
            return t.encode(n).length;
        }
        if (e instanceof Blob) return e.size;
        if (e instanceof ArrayBuffer) return e.byteLength;
    } catch  {}
}
function Izh(e) {
    if (!e) return;
    const t = parseInt(e, 10);
    return isNaN(t) ? void 0 : t;
}
function Fsr(e, t) {
    if (!e) return {
        headers: {},
        size: void 0,
        _meta: {
            warnings: [
                t
            ]
        }
    };
    const n = {
        ...e._meta
    }, i = n.warnings || [];
    return n.warnings = [
        ...i,
        t
    ], e._meta = n, e;
}
function Azh(e, t) {
    if (!t) return null;
    const { startTimestamp: n, endTimestamp: i, url: r, method: s, statusCode: o, request: a, response: c } = t;
    return {
        type: e,
        start: n / 1e3,
        end: i / 1e3,
        name: r,
        data: {
            method: s,
            statusCode: o,
            request: a,
            response: c
        }
    };
}
function $9n(e) {
    return {
        headers: {},
        size: e,
        _meta: {
            warnings: [
                "URL_SKIPPED"
            ]
        }
    };
}
function qnt(e, t, n) {
    if (!t && Object.keys(e).length === 0) return;
    if (!t) return {
        headers: e
    };
    if (!n) return {
        headers: e,
        size: t
    };
    const i = {
        headers: e,
        size: t
    }, { body: r, warnings: s } = nC_(n);
    return i.body = r, s?.length && (i._meta = {
        warnings: s
    }), i;
}
function tOo(e, t) {
    return Object.entries(e).reduce((n, [i, r])=>{
        const s = i.toLowerCase();
        return t.includes(s) && e[i] && (n[s] = r), n;
    }, {});
}
function nC_(e) {
    if (!e || typeof e != "string") return {
        body: e
    };
    const t = e.length > nOo, n = iC_(e);
    if (t) {
        const i = e.slice(0, nOo);
        return n ? {
            body: i,
            warnings: [
                "MAYBE_JSON_TRUNCATED"
            ]
        } : {
            body: `${i}\u2026`,
            warnings: [
                "TEXT_TRUNCATED"
            ]
        };
    }
    if (n) try {
        return {
            body: JSON.parse(e)
        };
    } catch  {}
    return {
        body: e
    };
}
function iC_(e) {
    const t = e[0], n = e[e.length - 1];
    return t === "[" && n === "]" || t === "{" && n === "}";
}
function Bsr(e, t) {
    const n = rC_(e);
    return CV(n, t);
}
function rC_(e, t = yL.document.baseURI) {
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(yL.location.origin)) return e;
    const n = new URL(e, t);
    if (n.origin !== new URL(t).origin) return e;
    const i = n.href;
    return !e.endsWith("/") && i.endsWith("/") ? i.slice(0, -1) : i;
}
async function sC_(e, t, n) {
    try {
        const i = await aC_(e, t, n), r = Azh("resource.fetch", i);
        xzh(n.replay, r);
    } catch (i) {
        My && Py.exception(i, "Failed to capture fetch breadcrumb");
    }
}
function oC_(e, t) {
    const { input: n, response: i } = t, r = n ? Lpi(n) : void 0, s = Osr(r), o = i ? Izh(i.headers.get("content-length")) : void 0;
    s !== void 0 && (e.data.request_body_size = s), o !== void 0 && (e.data.response_body_size = o);
}
async function aC_(e, t, n) {
    const i = Date.now(), { startTimestamp: r = i, endTimestamp: s = i } = t, { url: o, method: a, status_code: c = 0, request_body_size: l, response_body_size: u } = e.data, h = Bsr(o, n.networkDetailAllowUrls) && !Bsr(o, n.networkDetailDenyUrls), p = h ? cC_(n, t.input, l) : $9n(l), g = await lC_(h, n, t.response, u);
    return {
        startTimestamp: r,
        endTimestamp: s,
        url: o,
        method: a,
        statusCode: c,
        request: p,
        response: g
    };
}
function cC_({ networkCaptureBodies: e, networkRequestHeaders: t }, n, i) {
    const r = n ? hC_(n, t) : {};
    if (!e) return qnt(r, i, void 0);
    const s = Lpi(n), [o, a] = XLt(s, Py), c = qnt(r, i, o);
    return a ? Fsr(c, a) : c;
}
async function lC_(e, { networkCaptureBodies: t, networkResponseHeaders: n }, i, r) {
    if (!e && r !== void 0) return $9n(r);
    const s = i ? Rzh(i.headers, n) : {};
    if (!i || !t && r !== void 0) return qnt(s, r, void 0);
    const [o, a] = await dC_(i), c = uC_(o, {
        networkCaptureBodies: t,
        responseBodySize: r,
        captureDetails: e,
        headers: s
    });
    return a ? Fsr(c, a) : c;
}
function uC_(e, { networkCaptureBodies: t, responseBodySize: n, captureDetails: i, headers: r }) {
    try {
        const s = e?.length && n === void 0 ? Osr(e) : n;
        return i ? t ? qnt(r, s, e) : qnt(r, s, void 0) : $9n(s);
    } catch (s) {
        return My && Py.exception(s, "Failed to serialize response body"), qnt(r, n, void 0);
    }
}
async function dC_(e) {
    const t = pC_(e);
    if (!t) return [
        void 0,
        "BODY_PARSE_ERROR"
    ];
    try {
        return [
            await mC_(t)
        ];
    } catch (n) {
        return n instanceof Error && n.message.indexOf("Timeout") > -1 ? (My && Py.warn("Parsing text body from response timed out"), [
            void 0,
            "BODY_PARSE_TIMEOUT"
        ]) : (My && Py.exception(n, "Failed to get text body from response"), [
            void 0,
            "BODY_PARSE_ERROR"
        ]);
    }
}
function Rzh(e, t) {
    const n = {};
    return t.forEach((i)=>{
        e.get(i) && (n[i] = e.get(i));
    }), n;
}
function hC_(e, t) {
    return e.length === 1 && typeof e[0] != "string" ? Dzh(e[0], t) : e.length === 2 ? Dzh(e[1], t) : {};
}
function Dzh(e, t) {
    if (!e) return {};
    const n = e.headers;
    return n ? n instanceof Headers ? Rzh(n, t) : Array.isArray(n) ? {} : tOo(n, t) : {};
}
function pC_(e) {
    try {
        return e.clone();
    } catch (t) {
        My && Py.exception(t, "Failed to clone response body");
    }
}
function mC_(e) {
    return new Promise((t, n)=>{
        const i = bpn(()=>n(new Error("Timeout while trying to read response body")), 500);
        gC_(e).then((r)=>t(r), (r)=>n(r)).finally(()=>clearTimeout(i));
    });
}
async function gC_(e) {
    return await e.text();
}
async function fC_(e, t, n) {
    try {
        const i = _C_(e, t, n), r = Azh("resource.xhr", i);
        xzh(n.replay, r);
    } catch (i) {
        My && Py.exception(i, "Failed to capture xhr breadcrumb");
    }
}
function vC_(e, t) {
    const { xhr: n, input: i } = t;
    if (!n) return;
    const r = Osr(i), s = n.getResponseHeader("content-length") ? Izh(n.getResponseHeader("content-length")) : SC_(n.response, n.responseType);
    r !== void 0 && (e.data.request_body_size = r), s !== void 0 && (e.data.response_body_size = s);
}
function _C_(e, t, n) {
    const i = Date.now(), { startTimestamp: r = i, endTimestamp: s = i, input: o, xhr: a } = t, { url: c, method: l, status_code: u = 0, request_body_size: h, response_body_size: p } = e.data;
    if (!c) return null;
    if (!a || !Bsr(c, n.networkDetailAllowUrls) || Bsr(c, n.networkDetailDenyUrls)) {
        const D = $9n(h), P = $9n(p);
        return {
            startTimestamp: r,
            endTimestamp: s,
            url: c,
            method: l,
            statusCode: u,
            request: D,
            response: P
        };
    }
    const g = a[Uie], f = g ? tOo(g.request_headers, n.networkRequestHeaders) : {}, v = tOo($jr(a), n.networkResponseHeaders), [b, y] = n.networkCaptureBodies ? XLt(o, Py) : [
        void 0
    ], [T, E] = n.networkCaptureBodies ? bC_(a) : [
        void 0
    ], A = qnt(f, h, b), R = qnt(v, p, T);
    return {
        startTimestamp: r,
        endTimestamp: s,
        url: c,
        method: l,
        statusCode: u,
        request: y ? Fsr(A, y) : A,
        response: E ? Fsr(R, E) : R
    };
}
function bC_(e) {
    const t = [];
    try {
        return [
            e.responseText
        ];
    } catch (n) {
        t.push(n);
    }
    try {
        return yC_(e.response, e.responseType);
    } catch (n) {
        t.push(n);
    }
    return My && Py.warn("Failed to get xhr response body", ...t), [
        void 0
    ];
}
function yC_(e, t) {
    try {
        if (typeof e == "string") return [
            e
        ];
        if (e instanceof Document) return [
            e.body.outerHTML
        ];
        if (t === "json" && e && typeof e == "object") return [
            JSON.stringify(e)
        ];
        if (!e) return [
            void 0
        ];
    } catch (n) {
        return My && Py.exception(n, "Failed to serialize body", e), [
            void 0,
            "BODY_PARSE_ERROR"
        ];
    }
    return My && Py.log("Skipping network body because of body type", e), [
        void 0,
        "UNPARSEABLE_BODY_TYPE"
    ];
}
function SC_(e, t) {
    try {
        const n = t === "json" && e && typeof e == "object" ? JSON.stringify(e) : e;
        return Osr(n);
    } catch  {
        return;
    }
}
function kC_(e) {
    const t = Pu();
    try {
        const { networkDetailAllowUrls: n, networkDetailDenyUrls: i, networkCaptureBodies: r, networkRequestHeaders: s, networkResponseHeaders: o } = e.getOptions(), a = {
            replay: e,
            networkDetailAllowUrls: n,
            networkDetailDenyUrls: i,
            networkCaptureBodies: r,
            networkRequestHeaders: s,
            networkResponseHeaders: o
        };
        t && t.on("beforeAddBreadcrumb", (c, l)=>wC_(a, c, l));
    } catch  {}
}
function wC_(e, t, n) {
    if (t.data) try {
        CC_(t) && EC_(n) && (vC_(t, n), fC_(t, n, e)), TC_(t) && xC_(n) && (oC_(t, n), sC_(t, n, e));
    } catch (i) {
        My && Py.exception(i, "Error when enriching network breadcrumb");
    }
}
function CC_(e) {
    return e.category === "xhr";
}
function TC_(e) {
    return e.category === "fetch";
}
function EC_(e) {
    return e?.xhr;
}
function xC_(e) {
    return e?.response;
}
function IC_(e) {
    const t = Pu();
    Fjr(kKh(e)), Qdt(eC_(e)), jw_(e), kC_(e);
    const n = Qw_(e);
    Dhi(n), t && (t.on("beforeSendEvent", Gw_(e)), t.on("afterSendEvent", $w_(e)), t.on("createDsc", (i)=>{
        const r = e.getSessionId();
        r && e.isEnabled() && e.recordingMode === "session" && e.checkAndHandleExpiredSession() && (i.replay_id = r);
    }), t.on("spanStart", (i)=>{
        e.lastActiveSpan = i;
    }), t.on("spanEnd", (i)=>{
        e.lastActiveSpan = i;
    }), t.on("beforeSendFeedback", async (i, r)=>{
        const s = e.getSessionId();
        r?.includeReplay && e.isEnabled() && s && i.contexts?.feedback && (i.contexts.feedback.source === "api" && await e.sendBufferedReplayOrFlush(), i.contexts.feedback.replay_id = s);
    }), t.on("openFeedbackWidget", async ()=>{
        await e.sendBufferedReplayOrFlush();
    }));
}
async function AC_(e) {
    try {
        return Promise.all(Nsr(e, [
            RC_(yL.performance.memory)
        ]));
    } catch  {
        return [];
    }
}
function RC_(e) {
    const { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: i } = e, r = Date.now() / 1e3;
    return {
        type: "memory",
        name: "memory",
        start: r,
        end: r,
        data: {
            memory: {
                jsHeapSizeLimit: t,
                totalJSHeapSize: n,
                usedJSHeapSize: i
            }
        }
    };
}
function DC_(e, t, n) {
    return dCc(e, t, {
        ...n,
        setTimeoutImpl: bpn
    });
}
function MC_() {
    return /iPhone|iPad|iPod/i.test(q9n?.userAgent ?? "") || /Macintosh/i.test(q9n?.userAgent ?? "") && q9n?.maxTouchPoints && q9n?.maxTouchPoints > 1 ? {
        sampling: {
            mousemove: !1
        }
    } : {};
}
function PC_(e) {
    let t = !1;
    return (n, i)=>{
        if (!e.checkAndHandleExpiredSession()) {
            My && Py.warn("Received replay event after session expired.");
            return;
        }
        const r = i || !t;
        t = !0, e.clickDetector && aw_(e.clickDetector, n), e.addUpdate(()=>{
            if (e.recordingMode === "buffer" && r && e.setInitialState(), !Q2o(e, n, r)) return !0;
            if (!r) return !1;
            const s = e.session;
            if (NC_(e, r), e.recordingMode === "buffer" && s && e.eventBuffer && !s.dirty) {
                const o = e.eventBuffer.getEarliestTimestamp();
                o && (My && Py.log(`Updating session start time to earliest event in buffer to ${new Date(o)}`), s.started = o, e.getOptions().stickySession && Lsr(s));
            }
            return s?.previousSessionId || e.recordingMode === "session" && e.flush(), !0;
        });
    };
}
function LC_(e) {
    const t = e.getOptions();
    return {
        type: NC.Custom,
        timestamp: Date.now(),
        data: {
            tag: "options",
            payload: {
                shouldRecordCanvas: e.isRecordingCanvas(),
                sessionSampleRate: t.sessionSampleRate,
                errorSampleRate: t.errorSampleRate,
                useCompressionOption: t.useCompression,
                blockAllMedia: t.blockAllMedia,
                maskAllText: t.maskAllText,
                maskAllInputs: t.maskAllInputs,
                useCompression: e.eventBuffer ? e.eventBuffer.type === "worker" : !1,
                networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                networkCaptureBodies: t.networkCaptureBodies,
                networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                networkResponseHasHeaders: t.networkResponseHeaders.length > 0
            }
        }
    };
}
function NC_(e, t) {
    !t || !e.session || e.session.segmentId !== 0 || Q2o(e, LC_(e), !1);
}
function OC_(e) {
    if (!e) return null;
    try {
        return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
    } catch  {
        return null;
    }
}
function FC_(e, t, n, i) {
    return eJ(uGr(e, TLt(e), i, n), [
        [
            {
                type: "replay_event"
            },
            e
        ],
        [
            {
                type: "replay_recording",
                length: typeof t == "string" ? new TextEncoder().encode(t).length : t.length
            },
            t
        ]
    ]);
}
function BC_({ recordingData: e, headers: t }) {
    let n;
    const i = `${JSON.stringify(t)}
`;
    if (typeof e == "string") n = `${i}${e}`;
    else {
        const s = new TextEncoder().encode(i);
        n = new Uint8Array(s.length + e.length), n.set(s), n.set(e, s.length);
    }
    return n;
}
async function UC_({ client: e, scope: t, replayId: n, event: i }) {
    const r = typeof e._integrations == "object" && e._integrations !== null && !Array.isArray(e._integrations) ? Object.keys(e._integrations) : void 0, s = {
        event_id: n,
        integrations: r
    };
    e.emit("preprocessEvent", i, s);
    const o = await IGr(e.getOptions(), i, s, t, e, fI());
    if (!o) return null;
    e.emit("postprocessEvent", o, s), o.platform = o.platform || "javascript";
    const a = e.getSdkMetadata(), { name: c, version: l, settings: u } = a?.sdk || {};
    return o.sdk = {
        ...o.sdk,
        name: c || "sentry.javascript.unknown",
        version: l || "0.0.0",
        settings: u
    }, o;
}
async function $C_({ recordingData: e, replayId: t, segmentId: n, eventContext: i, timestamp: r, session: s }) {
    const o = BC_({
        recordingData: e,
        headers: {
            segment_id: n
        }
    }), { urls: a, errorIds: c, traceIds: l, initialTimestamp: u } = i, h = Pu(), p = nv(), g = h?.getTransport(), f = h?.getDsn();
    if (!h || !g || !f || !s.sampled) return Promise.resolve({});
    const v = {
        type: Lzh,
        replay_start_timestamp: u / 1e3,
        timestamp: r / 1e3,
        error_ids: c,
        trace_ids: l,
        urls: a,
        replay_id: t,
        segment_id: n,
        replay_type: s.sampled
    }, b = await UC_({
        scope: p,
        client: h,
        replayId: t,
        event: v
    });
    if (!b) return h.recordDroppedEvent("event_processor", "replay"), My && Py.log("An event processor returned `null`, will not send event."), Promise.resolve({});
    delete b.sdkProcessingMetadata;
    const y = FC_(b, o, f, h.getOptions().tunnel);
    let T;
    try {
        T = await g.send(y);
    } catch (A) {
        const R = new Error($sr);
        try {
            R.cause = A;
        } catch  {}
        throw R;
    }
    if (typeof T.statusCode == "number" && (T.statusCode < 200 || T.statusCode >= 300)) throw new vOo(T.statusCode);
    const E = oVr({}, T);
    if (sVr(E, "replay")) throw new qsr(E);
    return T;
}
async function Mzh(e, t = {
    count: 0,
    interval: $zh
}) {
    const { recordingData: n, onError: i } = e;
    if (n.length) try {
        return await $C_(e), !0;
    } catch (r) {
        if (r instanceof vOo || r instanceof qsr) throw r;
        if (Ahi("Replays", {
            _retryCount: t.count
        }), i && i(r), t.count >= Hzh) {
            const s = new Error(`${$sr} - max retries exceeded`);
            try {
                s.cause = r;
            } catch  {}
            throw s;
        }
        return t.interval *= ++t.count, new Promise((s, o)=>{
            bpn(async ()=>{
                try {
                    await Mzh(e, t), s(!0);
                } catch (a) {
                    o(a);
                }
            }, t.interval);
        });
    }
}
function HC_(e, t, n) {
    const i = new Map, r = (a)=>{
        const c = a - n;
        i.forEach((l, u)=>{
            u < c && i.delete(u);
        });
    }, s = ()=>[
            ...i.values()
        ].reduce((a, c)=>a + c, 0);
    let o = !1;
    return (...a)=>{
        const c = Math.floor(Date.now() / 1e3);
        if (r(c), s() >= t) {
            const u = o;
            return o = !0, u ? IKh : _Oo;
        }
        o = !1;
        const l = i.get(c) || 0;
        return i.set(c, l + 1), e(...a);
    };
}
function H9n(e, t) {
    return [
        ...e,
        ...t
    ].join(",");
}
function WC_({ mask: e, unmask: t, block: n, unblock: i, ignore: r }) {
    const s = [
        "base",
        "iframe[srcdoc]:not([src])"
    ], o = H9n(e, [
        ".sentry-mask",
        "[data-sentry-mask]"
    ]), a = H9n(t, []);
    return {
        maskTextSelector: o,
        unmaskTextSelector: a,
        blockSelector: H9n(n, [
            ".sentry-block",
            "[data-sentry-block]",
            ...s
        ]),
        unblockSelector: H9n(i, []),
        ignoreSelector: H9n(r, [
            ".sentry-ignore",
            "[data-sentry-ignore]",
            'input[type="file"]'
        ])
    };
}
function GC_({ el: e, key: t, maskAttributes: n, maskAllText: i, privacyOptions: r, value: s }) {
    return !i || r.unmaskTextSelector && e.matches(r.unmaskTextSelector) ? s : n.includes(t) || t === "value" && e.tagName === "INPUT" && [
        "submit",
        "button"
    ].includes(e.getAttribute("type") || "") ? s.replace(/[\S]/g, "*") : s;
}
function VC_(e, t) {
    const n = t.getOptions(), i = {
        sessionSampleRate: 0,
        errorSampleRate: 0,
        ...e
    }, r = aqe(n.replaysSessionSampleRate), s = aqe(n.replaysOnErrorSampleRate);
    return r == null && s == null && rAe(()=>{
        console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.");
    }), r != null && (i.sessionSampleRate = r), s != null && (i.errorSampleRate = s), i;
}
function Pzh(e) {
    return [
        ...RKh,
        ...e.map((t)=>t.toLowerCase())
    ];
}
var yL, Usr, Lzh, $sr, Nzh, Ozh, Fzh, Bzh, Uzh, $zh, Hzh, nOo, W9n, Wzh, Gzh, Hsr, Vzh, jzh, iOo, qzh, zzh, rOo, n4, sOo, oOo, aOo, Kzh, Yzh, iKt, rKt, Xzh, Zzh, Qzh, Jzh, eKh, tKh, nKh, cOo, i1t, lOo, G9n, iKh, uOo, NC, xS, bZ, jLe, r1t, rKh, dOo, sKh, V9n, dE, znt, oKh, hOo, Wsr, aKh, cKh, lKh, uKh, pOo, dKh, hxe, mOo, hKh, pKh, n9, Gsr, vbe, mKh, gKh, fKh, vKh, Knt, _Kh, bKh, yKh, Vsr, SKh, kKh, wKh, My, CKh, gOo, j9n, Py, jsr, fOo, TKh, EKh, xKh, q9n, vOo, qsr, _Oo, IKh, AKh, bOo, RKh, yOo, DKh, MKh;
function zC_() {
    return new $Kh;
}
function KC_(e, t) {
    for(let n = e.classList.length; n--;){
        const i = e.classList[n];
        if (t.test(i)) return !0;
    }
    return !1;
}
function SOo(e, t, n = 1 / 0, i = 0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || i > n ? -1 : t(e) ? i : SOo(e.parentNode, t, n, i + 1);
}
function PKh(e, t) {
    return (n)=>{
        const i = n;
        if (i === null) return !1;
        try {
            if (e) {
                if (typeof e == "string") {
                    if (i.matches(`.${e}`)) return !0;
                } else if (KC_(i, e)) return !0;
            }
            return !!(t && i.matches(t));
        } catch  {
            return !1;
        }
    };
}
function kOo(e, t, n, i, r = window) {
    const s = r.Object.getOwnPropertyDescriptor(e, t);
    return r.Object.defineProperty(e, t, i ? n : {
        set (o) {
            NKh(()=>{
                n.set.call(this, o);
            }, 0), s && s.set && s.set.call(this, o);
        }
    }), ()=>kOo(e, t, s || {}, !0);
}
function wOo(e, t, n) {
    try {
        if (!(t in e)) return ()=>{};
        const i = e[t], r = n(i);
        return typeof r == "function" && (r.prototype = r.prototype || {}, Object.defineProperties(r, {
            __rrweb_original__: {
                enumerable: !1,
                value: i
            }
        })), e[t] = r, ()=>{
            e[t] = i;
        };
    } catch  {
        return ()=>{};
    }
}
function YC_(e) {
    if (!e) return null;
    try {
        return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
    } catch  {
        return null;
    }
}
function zsr(e, t, n, i, r) {
    if (!e) return !1;
    const s = YC_(e);
    if (!s) return !1;
    const o = PKh(t, n);
    if (!r) {
        const l = i && s.matches(i);
        return o(s) && !l;
    }
    const a = SOo(s, o);
    let c = -1;
    return a < 0 ? !1 : (i && (c = SOo(s, PKh(null, i))), a > -1 && c < 0 ? !0 : a < c);
}
function LKh(e) {
    const t = EOo[e];
    if (t) return t;
    const n = window.document;
    let i = window[e];
    if (n && typeof n.createElement == "function") try {
        const r = n.createElement("iframe");
        r.hidden = !0, n.head.appendChild(r);
        const s = r.contentWindow;
        s && s[e] && (i = s[e]), n.head.removeChild(r);
    } catch  {}
    return EOo[e] = i.bind(window);
}
function s1t(...e) {
    return LKh("requestAnimationFrame")(...e);
}
function NKh(...e) {
    return LKh("setTimeout")(...e);
}
function XC_(e) {
    Ysr = e;
}
function ZC_(e, t) {
    let n = xOo.get(e);
    return n || (n = new Map, xOo.set(e, n)), n.has(t) || n.set(t, []), n.get(t);
}
function Ksr(e, t, n) {
    if (e instanceof Array) return e.map((i)=>Ksr(i, t, n));
    if (e === null) return e;
    if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) return {
        rr_type: e.constructor.name,
        args: [
            Object.values(e)
        ]
    };
    if (e instanceof ArrayBuffer) {
        const i = e.constructor.name, r = WKh(e);
        return {
            rr_type: i,
            base64: r
        };
    } else {
        if (e instanceof DataView) return {
            rr_type: e.constructor.name,
            args: [
                Ksr(e.buffer, t, n),
                e.byteOffset,
                e.byteLength
            ]
        };
        if (e instanceof HTMLImageElement) {
            const i = e.constructor.name, { src: r } = e;
            return {
                rr_type: i,
                src: r
            };
        } else if (e instanceof HTMLCanvasElement) {
            const i = "HTMLImageElement", r = e.toDataURL();
            return {
                rr_type: i,
                src: r
            };
        } else {
            if (e instanceof ImageData) return {
                rr_type: e.constructor.name,
                args: [
                    Ksr(e.data, t, n),
                    e.width,
                    e.height
                ]
            };
            if (ROo(e, t) || typeof e == "object") {
                const i = e.constructor.name, r = IOo(e, t, n);
                return {
                    rr_type: i,
                    index: r
                };
            }
        }
    }
    return e;
}
function QC_(e, t, n, i, r) {
    const s = [], o = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
    for (const a of o)try {
        if (typeof t.CanvasRenderingContext2D.prototype[a] != "function") continue;
        const c = wOo(t.CanvasRenderingContext2D.prototype, a, function(l) {
            return function(...u) {
                return zsr(this.canvas, n, i, r, !0) || NKh(()=>{
                    const h = AOo(u, t, this);
                    e(this.canvas, {
                        type: a1t["2D"],
                        property: a,
                        args: h
                    });
                }, 0), l.apply(this, u);
            };
        });
        s.push(c);
    } catch  {
        const c = kOo(t.CanvasRenderingContext2D.prototype, a, {
            set (l) {
                e(this.canvas, {
                    type: a1t["2D"],
                    property: a,
                    args: [
                        l
                    ],
                    setter: !0
                });
            }
        });
        s.push(c);
    }
    return ()=>{
        s.forEach((a)=>a());
    };
}
function JC_(e) {
    return e === "experimental-webgl" ? "webgl" : e;
}
function OKh(e, t, n, i, r) {
    const s = [];
    try {
        const o = wOo(e.HTMLCanvasElement.prototype, "getContext", function(a) {
            return function(c, ...l) {
                if (!zsr(this, t, n, i, !0)) {
                    const u = JC_(c);
                    if ("__context" in this || (this.__context = u), r && [
                        "webgl",
                        "webgl2"
                    ].includes(u)) if (l[0] && typeof l[0] == "object") {
                        const h = l[0];
                        h.preserveDrawingBuffer || (h.preserveDrawingBuffer = !0);
                    } else l.splice(0, 1, {
                        preserveDrawingBuffer: !0
                    });
                }
                return a.apply(this, [
                    c,
                    ...l
                ]);
            };
        });
        s.push(o);
    } catch  {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext");
    }
    return ()=>{
        s.forEach((o)=>o());
    };
}
function FKh(e, t, n, i, r, s, o, a) {
    const c = [], l = Object.getOwnPropertyNames(e);
    for (const u of l)if (![
        "isContextLost",
        "canvas",
        "drawingBufferWidth",
        "drawingBufferHeight"
    ].includes(u)) try {
        if (typeof e[u] != "function") continue;
        const h = wOo(e, u, function(p) {
            return function(...g) {
                const f = p.apply(this, g);
                if (IOo(f, a, this), "tagName" in this.canvas && !zsr(this.canvas, i, r, s, !0)) {
                    const v = AOo(g, a, this), b = {
                        type: t,
                        property: u,
                        args: v
                    };
                    n(this.canvas, b);
                }
                return f;
            };
        });
        c.push(h);
    } catch  {
        const h = kOo(e, u, {
            set (p) {
                n(this.canvas, {
                    type: t,
                    property: u,
                    args: [
                        p
                    ],
                    setter: !0
                });
            }
        });
        c.push(h);
    }
    return c;
}
function e0_(e, t, n, i, r, s) {
    const o = [];
    return o.push(...FKh(t.WebGLRenderingContext.prototype, a1t.WebGL, e, n, i, r, s, t)), typeof t.WebGL2RenderingContext < "u" && o.push(...FKh(t.WebGL2RenderingContext.prototype, a1t.WebGL2, e, n, i, r, s, t)), ()=>{
        o.forEach((a)=>a());
    };
}
function t0_() {
    const e = new Blob([
        GKh
    ]);
    return URL.createObjectURL(e);
}
var BKh, UKh, COo, $Kh, o1t, TOo, EOo, a1t, Ysr, Xsr, c1t, HKh, hxe, WKh, xOo, IOo, AOo, ROo, GKh, VKh, jKh, DOo, qKh, z9n, zKh, KKh;
export { $2o, $9n, $C_, $Kh, $k_, $sr, $w_, $zh, AC_, AKh, AOo, Ak_, Asr, Aw_, Azh, B2o, B9n, BC_, BKh, Bk_, Bsr, Bw_, Bzh, CC_, CKh, COo, Ck_, Cw_, Czh, DC_, DKh, DOo, Dk_, Dsr, Dw_, Dzh, EC_, EKh, EOo, Ek_, Esr, Ew_, Ezh, F2o, F9n, FC_, FKh, Fk_, Fsr, Fw_, Fzh, G2o, G9n, GC_, GKh, Gk_, Gqh, Gsr, Gw_, Gzh, H2o, H9n, HC_, HKh, Hk_, Hsr, Hw_, Hzh, IC_, IKh, IOo, Ik_, Isr, Iw_, Izh, J2o, JC_, Jk_, Jqh, Jw_, Jzh, Jzt, K2o, KC_, KKh, Kk_, Knt, Kqh, Ksr, Kw_, Kzh, L2o, L9n, LC_, LKh, Lk_, Lsr, Lw_, Lzh, MC_, MKh, Mk_, Msr, Mw_, My, Mzh, N2o, N9n, NC, NC_, NKh, Nk_, Nsr, Nw_, Nzh, O2o, O9n, OC_, OKh, Ok_, Osr, Ow_, Ozh, P2o, PC_, PKh, PN, Pk_, Psr, Pw_, Py, Pzh, Q2o, QC_, Qk_, Qqh, Qw_, Qzh, Qzt, RC_, RKh, ROo, Rk_, Rsr, Rw_, Rzh, SC_, SKh, SOo, Sk_, Sw_, Szh, TC_, TKh, TOo, Tk_, Tsr, Tw_, Tzh, U2o, U9n, UC_, UKh, Uk_, Usr, Uw_, Uzh, V2o, V9n, VC_, VKh, VLe, Vk_, Vqh, Vsr, Vw_, Vzh, W2o, W9n, WC_, WKh, Wk_, Wqh, Wsr, Ww_, Wzh, X2o, XC_, Xk_, Xqh, Xsr, Xw_, Xzh, Y2o, YC_, Yk_, Yqh, Ysr, Yw_, Yzh, Z2o, ZC_, Zk_, Zqh, Zw_, Zzh, Zzt, _C_, _Kh, _Oo, _k_, _w_, _zh, a1t, aC_, aKh, aOo, aw_, azh, bC_, bKh, bOo, bZ, bhe, bk_, bte, bw_, bzh, c1t, cC_, cKh, cOo, ck_, cw_, czh, dC_, dE, dKh, dOo, dk_, dw_, dzh, e0_, eC_, eKh, eKt, eOo, ew_, ezh, fC_, fKh, fOo, fk_, fw_, fzh, gC_, gKh, gOo, gk_, gw_, gzh, hC_, hKh, hOo, hk_, hw_, hxe, hzh, i1t, iC_, iKh, iKt, iOo, iw_, izh, j2o, j9n, jKh, jLe, jk_, jnt, jqh, jsr, jw_, jzh, kC_, kKh, kOo, kk_, kw_, kzh, lC_, lKh, lOo, lk_, lw_, lzh, mC_, mKh, mOo, mk_, mw_, mzh, n1t, n4, n9, nC_, nKh, nKt, nOo, nw_, nzh, o1t, oC_, oKh, oOo, ow_, ozh, pC_, pKh, pOo, pk_, pw_, pzh, q2o, q9n, qKh, qk_, qnt, qqh, qsr, qw_, qzh, r1t, rC_, rKh, rKt, rOo, rw_, rzh, s1t, sC_, sKh, sOo, sw_, szh, t0_, tC_, tKh, tKt, tOo, tw_, tzh, uC_, uKh, uOo, uk_, uw_, uzh, vC_, vKh, vOo, vbe, vk_, vw_, vzh, wC_, wKh, wOo, wk_, ww_, wzh, xC_, xKh, xOo, xS, xk_, xsr, xw_, xzh, y7e, yC_, yKh, yL, yOo, yk_, yw_, yzh, z2o, z9n, zC_, zKh, zk_, znt, zqh, zsr, zw_, zzh };
var __wakaru_qC__initialized = false;
export function qC_() {
if (__wakaru_qC__initialized) return;
__wakaru_qC__initialized = true;
for(x(), $u(), XH(), yL = Og, Usr = "sentryReplaySession", Lzh = "replay_event", $sr = "Unable to send Replay", Nzh = 3e5, Ozh = 9e5, Fzh = 5e3, Bzh = 5500, Uzh = 6e4, $zh = 5e3, Hzh = 3, nOo = 15e4, W9n = 5e3, Wzh = 3e3, Gzh = 300, Hsr = 2e7, Vzh = 4999, jzh = 15e3, iOo = 36e5, qzh = Object.defineProperty, zzh = (e, t, n)=>(t in e) ? qzh(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, rOo = (e, t, n)=>zzh(e, typeof t != "symbol" ? t + "" : t, n), n4 = ((e)=>(e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment", e))(n4 || {}), sOo = class {
    constructor(){
        rOo(this, "idNodeMap", new Map), rOo(this, "nodeMetaMap", new WeakMap);
    }
    getId(e) {
        return e ? this.getMeta(e)?.id ?? -1 : -1;
    }
    getNode(e) {
        return this.idNodeMap.get(e) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(e) {
        return this.nodeMetaMap.get(e) || null;
    }
    removeNodeFromMap(e) {
        const t = this.getId(e);
        this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach((n)=>this.removeNodeFromMap(n));
    }
    has(e) {
        return this.idNodeMap.has(e);
    }
    hasNode(e) {
        return this.nodeMetaMap.has(e);
    }
    add(e, t) {
        const n = t.id;
        this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t);
    }
    replace(e, t) {
        const n = this.getNode(e);
        if (n) {
            const i = this.nodeMetaMap.get(n);
            i && this.nodeMetaMap.set(t, i);
        }
        this.idNodeMap.set(e, t);
    }
    reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap;
    }
}, oOo = "__rrweb_original__", aOo = {}, Kzh = 1, Yzh = new RegExp("[^a-z0-9-_:]"), iKt = -2, Zzh = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, Qzh = /^(?:[a-z+]+:)?\/\//i, Jzh = /^www\..*/i, eKh = /^(data:)([^,]*),(.*)/i, tKh = /^[^ \t\n\r\u000c]+/, nKh = /^[, \t\n\r\u000c]+/, cOo = new WeakMap, i1t = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`, lOo = {
    map: {},
    getId () {
        return console.error(i1t), -1;
    },
    getNode () {
        return console.error(i1t), null;
    },
    removeNodeFromMap () {
        console.error(i1t);
    },
    has () {
        return console.error(i1t), !1;
    },
    reset () {
        console.error(i1t);
    }
}, typeof window < "u" && window.Proxy && window.Reflect && (lOo = new Proxy(lOo, {
    get (e, t, n) {
        return t === "map" && console.error(i1t), Reflect.get(e, t, n);
    }
})), G9n = Date.now, /[1-9][0-9]{12}/.test(Date.now().toString()) || (G9n = ()=>new Date().getTime()), iKh = class {
    constructor(){
        this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map;
    }
    getId(e) {
        return this.styleIDMap.get(e) ?? -1;
    }
    has(e) {
        return this.styleIDMap.has(e);
    }
    add(e, t) {
        if (this.has(e)) return this.getId(e);
        let n;
        return t === void 0 ? n = this.id++ : n = t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n;
    }
    getStyle(e) {
        return this.idStyleMap.get(e) || null;
    }
    reset() {
        this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1;
    }
    generateId() {
        return this.id++;
    }
}, uOo = {}, NC = ((e)=>(e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(NC || {}), xS = ((e)=>(e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e[e.CustomElement = 16] = "CustomElement", e))(xS || {}), bZ = ((e)=>(e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel", e))(bZ || {}), jLe = ((e)=>(e[e.Mouse = 0] = "Mouse", e[e.Pen = 1] = "Pen", e[e.Touch = 2] = "Touch", e))(jLe || {}), r1t = ((e)=>(e[e.Play = 0] = "Play", e[e.Pause = 1] = "Pause", e[e.Seeked = 2] = "Seeked", e[e.VolumeChange = 3] = "VolumeChange", e[e.RateChange = 4] = "RateChange", e))(r1t || {}), rKh = class {
    constructor(){
        this.length = 0, this.head = null, this.tail = null;
    }
    get(e) {
        if (e >= this.length) throw new Error("Position outside of list range");
        let t = this.head;
        for(let n = 0; n < e; n++)t = t?.next || null;
        return t;
    }
    addNode(e) {
        const t = {
            value: e,
            previous: null,
            next: null
        };
        if (e.__ln = t, e.previousSibling && szh(e.previousSibling)) {
            const n = e.previousSibling.__ln.next;
            t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t);
        } else if (e.nextSibling && szh(e.nextSibling) && e.nextSibling.__ln.previous) {
            const n = e.nextSibling.__ln.previous;
            t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t);
        } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
        t.next === null && (this.tail = t), this.length++;
    }
    removeNode(e) {
        const t = e.__ln;
        this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--);
    }
}, dOo = (e, t)=>`${e}@${t}`, sKh = class {
    constructor(){
        this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = (e)=>{
            e.forEach(this.processMutation), this.emit();
        }, this.emit = ()=>{
            if (this.frozen || this.locked) return;
            const e = [], t = new Set, n = new rKh, i = (a)=>{
                let c = a, l = iKt;
                for(; l === iKt;)c = c && c.nextSibling, l = c && this.mirror.getId(c);
                return l;
            }, r = (a)=>{
                if (!a.parentNode || !rzh(a)) return;
                const c = L9n(a.parentNode) ? this.mirror.getId(izh(a)) : this.mirror.getId(a.parentNode), l = i(a);
                if (c === -1 || l === -1) return n.addNode(a);
                const u = tKt(a, {
                    doc: this.doc,
                    mirror: this.mirror,
                    blockClass: this.blockClass,
                    blockSelector: this.blockSelector,
                    maskAllText: this.maskAllText,
                    unblockSelector: this.unblockSelector,
                    maskTextClass: this.maskTextClass,
                    unmaskTextClass: this.unmaskTextClass,
                    maskTextSelector: this.maskTextSelector,
                    unmaskTextSelector: this.unmaskTextSelector,
                    skipChild: !0,
                    newlyAddedElement: !0,
                    inlineStylesheet: this.inlineStylesheet,
                    maskInputOptions: this.maskInputOptions,
                    maskAttributeFn: this.maskAttributeFn,
                    maskTextFn: this.maskTextFn,
                    maskInputFn: this.maskInputFn,
                    slimDOMOptions: this.slimDOMOptions,
                    dataURLOptions: this.dataURLOptions,
                    recordCanvas: this.recordCanvas,
                    inlineImages: this.inlineImages,
                    onSerialize: (h)=>{
                        tzh(h, this.mirror) && !bhe(h, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(h), nzh(h, this.mirror) && this.stylesheetManager.trackLinkElement(h), $2o(a) && this.shadowDomManager.addShadowRoot(a.shadowRoot, this.doc);
                    },
                    onIframeLoad: (h, p)=>{
                        bhe(h, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (this.iframeManager.attachIframe(h, p), h.contentWindow && this.canvasManager.addWindow(h.contentWindow), this.shadowDomManager.observeAttachShadow(h));
                    },
                    onStylesheetLoad: (h, p)=>{
                        this.stylesheetManager.attachLinkElement(h, p);
                    },
                    onBlockedImageLoad: (h, p, { width: g, height: f })=>{
                        this.mutationCb({
                            adds: [],
                            removes: [],
                            texts: [],
                            attributes: [
                                {
                                    id: p.id,
                                    attributes: {
                                        style: {
                                            width: `${g}px`,
                                            height: `${f}px`
                                        }
                                    }
                                }
                            ]
                        });
                    },
                    ignoreCSSAttributes: this.ignoreCSSAttributes
                });
                u && (e.push({
                    parentId: c,
                    nextId: l,
                    node: u
                }), t.add(u.id));
            };
            for(; this.mapRemoves.length;)this.mirror.removeNodeFromMap(this.mapRemoves.shift());
            for (const a of this.movedSet)ozh(this.removes, a, this.mirror) && !this.movedSet.has(a.parentNode) || r(a);
            for (const a of this.addedSet)!azh(this.droppedSet, a) && !ozh(this.removes, a, this.mirror) || azh(this.movedSet, a) ? r(a) : this.droppedSet.add(a);
            let s = null;
            for(; n.length;){
                let a = null;
                if (s) {
                    const c = this.mirror.getId(s.value.parentNode), l = i(s.value);
                    c !== -1 && l !== -1 && (a = s);
                }
                if (!a) {
                    let c = n.tail;
                    for(; c;){
                        const l = c;
                        if (c = c.previous, l) {
                            const u = this.mirror.getId(l.value.parentNode);
                            if (i(l.value) === -1) continue;
                            if (u !== -1) {
                                a = l;
                                break;
                            } else {
                                const p = l.value;
                                if (p.parentNode && p.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                    const g = p.parentNode.host;
                                    if (this.mirror.getId(g) !== -1) {
                                        a = l;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                if (!a) {
                    for(; n.head;)n.removeNode(n.head.value);
                    break;
                }
                s = a.previous, n.removeNode(a.value), r(a.value);
            }
            const o = {
                texts: this.texts.map((a)=>({
                        id: this.mirror.getId(a.node),
                        value: a.value
                    })).filter((a)=>!t.has(a.id)).filter((a)=>this.mirror.has(a.id)),
                attributes: this.attributes.map((a)=>{
                    const { attributes: c } = a;
                    if (typeof c.style == "string") {
                        const l = JSON.stringify(a.styleDiff), u = JSON.stringify(a._unchangedStyles);
                        l.length < c.style.length && (l + u).split("var(").length === c.style.split("var(").length && (c.style = a.styleDiff);
                    }
                    return {
                        id: this.mirror.getId(a.node),
                        attributes: c
                    };
                }).filter((a)=>!t.has(a.id)).filter((a)=>this.mirror.has(a.id)),
                removes: this.removes,
                adds: e
            };
            !o.texts.length && !o.attributes.length && !o.removes.length && !o.adds.length || (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(o));
        }, this.processMutation = (e)=>{
            if (!B2o(e.target, this.mirror)) switch(e.type){
                case "characterData":
                    {
                        const t = e.target.textContent;
                        !bhe(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) && t !== e.oldValue && this.texts.push({
                            value: eKt(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, Jqh(e.target)) : t.replace(/[\S]/g, "*") : t,
                            node: e.target
                        });
                        break;
                    }
                case "attributes":
                    {
                        const t = e.target;
                        let n = e.attributeName, i = e.target.getAttribute(n);
                        if (n === "value") {
                            const s = L2o(t), o = t.tagName;
                            i = xsr(t, o, s);
                            const a = Esr({
                                maskInputOptions: this.maskInputOptions,
                                tagName: o,
                                type: s
                            }), c = eKt(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, a);
                            i = O9n({
                                isMasked: c,
                                element: t,
                                value: i,
                                maskInputFn: this.maskInputFn
                            });
                        }
                        if (bhe(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || i === e.oldValue) return;
                        let r = this.attributeMap.get(e.target);
                        if (t.tagName === "IFRAME" && n === "src" && !this.keepIframeSrcFn(i)) if (!W2o(t)) n = "rr_src";
                        else return;
                        if (r || (r = {
                            node: e.target,
                            attributes: {},
                            styleDiff: {},
                            _unchangedStyles: {}
                        }, this.attributes.push(r), this.attributeMap.set(e.target, r)), n === "type" && t.tagName === "INPUT" && (e.oldValue || "").toLowerCase() === "password" && t.setAttribute("data-rr-is-password", "true"), !Kqh(t.tagName, n) && (r.attributes[n] = zqh(this.doc, Zzt(t.tagName), Zzt(n), i, t, this.maskAttributeFn), n === "style")) {
                            if (!this.unattachedDoc) try {
                                this.unattachedDoc = document.implementation.createHTMLDocument();
                            } catch  {
                                this.unattachedDoc = this.doc;
                            }
                            const s = this.unattachedDoc.createElement("span");
                            e.oldValue && s.setAttribute("style", e.oldValue);
                            for (const o of Array.from(t.style)){
                                const a = t.style.getPropertyValue(o), c = t.style.getPropertyPriority(o);
                                a !== s.style.getPropertyValue(o) || c !== s.style.getPropertyPriority(o) ? c === "" ? r.styleDiff[o] = a : r.styleDiff[o] = [
                                    a,
                                    c
                                ] : r._unchangedStyles[o] = [
                                    a,
                                    c
                                ];
                            }
                            for (const o of Array.from(s.style))t.style.getPropertyValue(o) === "" && (r.styleDiff[o] = !1);
                        }
                        break;
                    }
                case "childList":
                    {
                        if (bhe(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                        e.addedNodes.forEach((t)=>this.genAdds(t, e.target)), e.removedNodes.forEach((t)=>{
                            const n = this.mirror.getId(t), i = L9n(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                            bhe(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || B2o(t, this.mirror) || !Mk_(t, this.mirror) || (this.addedSet.has(t) ? (G2o(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && n === -1 || ezh(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[dOo(n, i)] ? G2o(this.movedSet, t) : this.removes.push({
                                parentId: i,
                                id: n,
                                isShadow: L9n(e.target) && N9n(e.target) ? !0 : void 0
                            })), this.mapRemoves.push(t));
                        });
                        break;
                    }
            }
        }, this.genAdds = (e, t)=>{
            if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
                if (this.mirror.hasNode(e)) {
                    if (B2o(e, this.mirror)) return;
                    this.movedSet.add(e);
                    let n = null;
                    t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && n !== -1 && (this.movedMap[dOo(this.mirror.getId(e), n)] = !0);
                } else this.addedSet.add(e), this.droppedSet.delete(e);
                bhe(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (e.childNodes && e.childNodes.forEach((n)=>this.genAdds(n)), $2o(e) && e.shadowRoot.childNodes.forEach((n)=>{
                    this.processedNodeManager.add(n, this), this.genAdds(n, e);
                }));
            }
        };
    }
    init(e) {
        [
            "mutationCb",
            "blockClass",
            "blockSelector",
            "unblockSelector",
            "maskAllText",
            "maskTextClass",
            "unmaskTextClass",
            "maskTextSelector",
            "unmaskTextSelector",
            "inlineStylesheet",
            "maskInputOptions",
            "maskAttributeFn",
            "maskTextFn",
            "maskInputFn",
            "keepIframeSrcFn",
            "recordCanvas",
            "inlineImages",
            "slimDOMOptions",
            "dataURLOptions",
            "doc",
            "mirror",
            "iframeManager",
            "stylesheetManager",
            "shadowDomManager",
            "canvasManager",
            "processedNodeManager",
            "ignoreCSSAttributes"
        ].forEach((t)=>{
            this[t] = e[t];
        });
    }
    freeze() {
        this.frozen = !0, this.canvasManager.freeze();
    }
    unfreeze() {
        this.frozen = !1, this.canvasManager.unfreeze(), this.emit();
    }
    isFrozen() {
        return this.frozen;
    }
    lock() {
        this.locked = !0, this.canvasManager.lock();
    }
    unlock() {
        this.locked = !1, this.canvasManager.unlock(), this.emit();
    }
    reset() {
        this.shadowDomManager.reset(), this.canvasManager.reset();
    }
}, dE = (e)=>V9n ? (...n)=>{
        try {
            return e(...n);
        } catch (i) {
            if (V9n && V9n(i) === !0) return ()=>{};
            throw i;
        }
    } : e, znt = [], oKh = [
    "INPUT",
    "TEXTAREA",
    "SELECT"
], hOo = new WeakMap, Wsr = class {
    constructor(e){
        this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
    }
    getId(e, t, n, i) {
        const r = n || this.getIdToRemoteIdMap(e), s = i || this.getRemoteIdToIdMap(e);
        let o = r.get(t);
        return o || (o = this.generateIdFn(), r.set(t, o), s.set(o, t)), o;
    }
    getIds(e, t) {
        const n = this.getIdToRemoteIdMap(e), i = this.getRemoteIdToIdMap(e);
        return t.map((r)=>this.getId(e, r, n, i));
    }
    getRemoteId(e, t, n) {
        const i = n || this.getRemoteIdToIdMap(e);
        if (typeof t != "number") return t;
        const r = i.get(t);
        return r || -1;
    }
    getRemoteIds(e, t) {
        const n = this.getRemoteIdToIdMap(e);
        return t.map((i)=>this.getRemoteId(e, i, n));
    }
    reset(e) {
        if (!e) {
            this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
            return;
        }
        this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e);
    }
    getIdToRemoteIdMap(e) {
        let t = this.iframeIdToRemoteIdMap.get(e);
        return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t;
    }
    getRemoteIdToIdMap(e) {
        let t = this.iframeRemoteIdToIdMap.get(e);
        return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t;
    }
}, aKh = class {
    constructor(){
        this.crossOriginIframeMirror = new Wsr(O2o), this.crossOriginIframeRootIdMap = new WeakMap;
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}, cKh = class {
    constructor(e){
        this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new Wsr(O2o), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new Wsr(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
    }
    addIframe(e) {
        this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e);
    }
    addLoadListener(e) {
        this.loadListener = e;
    }
    attachIframe(e, t) {
        this.mutationCb({
            adds: [
                {
                    parentId: this.mirror.getId(e),
                    nextId: null,
                    node: t
                }
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
        }), this.recordCrossOriginIframes && e.contentWindow?.addEventListener("message", this.handleMessage.bind(this)), this.loadListener?.(e);
        const n = W2o(e);
        n && n.adoptedStyleSheets && n.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(n.adoptedStyleSheets, this.mirror.getId(n));
    }
    handleMessage(e) {
        const t = e;
        if (t.data.type !== "rrweb" || t.origin !== t.data.origin || !e.source) return;
        const i = this.crossOriginIframeMap.get(e.source);
        if (!i) return;
        const r = this.transformCrossOriginEvent(i, t.data.event);
        r && this.wrappedEmit(r, t.data.isCheckout);
    }
    transformCrossOriginEvent(e, t) {
        switch(t.type){
            case NC.FullSnapshot:
                {
                    this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), this.replaceIdOnNode(t.data.node, e);
                    const n = t.data.node.id;
                    return this.crossOriginIframeRootIdMap.set(e, n), this.patchRootIdOnNode(t.data.node, n), {
                        timestamp: t.timestamp,
                        type: NC.IncrementalSnapshot,
                        data: {
                            source: xS.Mutation,
                            adds: [
                                {
                                    parentId: this.mirror.getId(e),
                                    nextId: null,
                                    node: t.data.node
                                }
                            ],
                            removes: [],
                            texts: [],
                            attributes: [],
                            isAttachIframe: !0
                        }
                    };
                }
            case NC.Meta:
            case NC.Load:
            case NC.DomContentLoaded:
                return !1;
            case NC.Plugin:
                return t;
            case NC.Custom:
                return this.replaceIds(t.data.payload, e, [
                    "id",
                    "parentId",
                    "previousId",
                    "nextId"
                ]), t;
            case NC.IncrementalSnapshot:
                switch(t.data.source){
                    case xS.Mutation:
                        return t.data.adds.forEach((n)=>{
                            this.replaceIds(n, e, [
                                "parentId",
                                "nextId",
                                "previousId"
                            ]), this.replaceIdOnNode(n.node, e);
                            const i = this.crossOriginIframeRootIdMap.get(e);
                            i && this.patchRootIdOnNode(n.node, i);
                        }), t.data.removes.forEach((n)=>{
                            this.replaceIds(n, e, [
                                "parentId",
                                "id"
                            ]);
                        }), t.data.attributes.forEach((n)=>{
                            this.replaceIds(n, e, [
                                "id"
                            ]);
                        }), t.data.texts.forEach((n)=>{
                            this.replaceIds(n, e, [
                                "id"
                            ]);
                        }), t;
                    case xS.Drag:
                    case xS.TouchMove:
                    case xS.MouseMove:
                        return t.data.positions.forEach((n)=>{
                            this.replaceIds(n, e, [
                                "id"
                            ]);
                        }), t;
                    case xS.ViewportResize:
                        return !1;
                    case xS.MediaInteraction:
                    case xS.MouseInteraction:
                    case xS.Scroll:
                    case xS.CanvasMutation:
                    case xS.Input:
                        return this.replaceIds(t.data, e, [
                            "id"
                        ]), t;
                    case xS.StyleSheetRule:
                    case xS.StyleDeclaration:
                        return this.replaceIds(t.data, e, [
                            "id"
                        ]), this.replaceStyleIds(t.data, e, [
                            "styleId"
                        ]), t;
                    case xS.Font:
                        return t;
                    case xS.Selection:
                        return t.data.ranges.forEach((n)=>{
                            this.replaceIds(n, e, [
                                "start",
                                "end"
                            ]);
                        }), t;
                    case xS.AdoptedStyleSheet:
                        return this.replaceIds(t.data, e, [
                            "id"
                        ]), this.replaceStyleIds(t.data, e, [
                            "styleIds"
                        ]), t.data.styles?.forEach((n)=>{
                            this.replaceStyleIds(n, e, [
                                "styleId"
                            ]);
                        }), t;
                }
        }
        return !1;
    }
    replace(e, t, n, i) {
        for (const r of i)!Array.isArray(t[r]) && typeof t[r] != "number" || (Array.isArray(t[r]) ? t[r] = e.getIds(n, t[r]) : t[r] = e.getId(n, t[r]));
        return t;
    }
    replaceIds(e, t, n) {
        return this.replace(this.crossOriginIframeMirror, e, t, n);
    }
    replaceStyleIds(e, t, n) {
        return this.replace(this.crossOriginIframeStyleMirror, e, t, n);
    }
    replaceIdOnNode(e, t) {
        this.replaceIds(e, t, [
            "id",
            "rootId"
        ]), "childNodes" in e && e.childNodes.forEach((n)=>{
            this.replaceIdOnNode(n, t);
        });
    }
    patchRootIdOnNode(e, t) {
        e.type !== n4.Document && !e.rootId && (e.rootId = t), "childNodes" in e && e.childNodes.forEach((n)=>{
            this.patchRootIdOnNode(n, t);
        });
    }
}, lKh = class {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
}, uKh = class {
    constructor(e){
        this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init();
    }
    init() {
        this.reset(), this.patchAttachShadow(Element, document);
    }
    addShadowRoot(e, t) {
        if (!N9n(e) || this.shadowDoms.has(e)) return;
        this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
        const n = lzh({
            ...this.bypassOptions,
            doc: t,
            mutationCb: this.mutationCb,
            mirror: this.mirror,
            shadowDomManager: this
        }, e);
        this.restoreHandlers.push(()=>n.disconnect()), this.restoreHandlers.push(uzh({
            ...this.bypassOptions,
            scrollCb: this.scrollCb,
            doc: e,
            mirror: this.mirror
        })), Rsr(()=>{
            e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(dzh({
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager
            }, e));
        }, 0);
    }
    observeAttachShadow(e) {
        const t = W2o(e), n = Bk_(e);
        !t || !n || this.patchAttachShadow(n.Element, t);
    }
    patchAttachShadow(e, t) {
        const n = this;
        this.restoreHandlers.push(F2o(e.prototype, "attachShadow", function(i) {
            return function(r) {
                const s = i.call(this, r);
                return this.shadowRoot && rzh(this) && n.addShadowRoot(this.shadowRoot, t), s;
            };
        }));
    }
    reset() {
        this.restoreHandlers.forEach((e)=>{
            try {
                e();
            } catch  {}
        }), this.restoreHandlers = [], this.shadowDoms = new WeakSet, this.bypassOptions.canvasManager.resetShadowRoots();
    }
}, pOo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", dKh = typeof Uint8Array > "u" ? [] : new Uint8Array(256), hxe = 0; hxe < pOo.length; hxe++)dKh[pOo.charCodeAt(hxe)] = hxe;
mOo = class {
    reset() {}
    freeze() {}
    unfreeze() {}
    lock() {}
    unlock() {}
    snapshot() {}
    addWindow() {}
    addShadowRoot() {}
    resetShadowRoots() {}
}, hKh = class {
    constructor(e){
        this.trackedLinkElements = new WeakSet, this.styleMirror = new iKh, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb;
    }
    attachLinkElement(e, t) {
        "_cssText" in t.attributes && this.mutationCb({
            adds: [],
            removes: [],
            texts: [],
            attributes: [
                {
                    id: t.id,
                    attributes: t.attributes
                }
            ]
        }), this.trackLinkElement(e);
    }
    trackLinkElement(e) {
        this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e));
    }
    adoptStyleSheets(e, t) {
        if (e.length === 0) return;
        const n = {
            id: t,
            styleIds: []
        }, i = [];
        for (const r of e){
            let s;
            this.styleMirror.has(r) ? s = this.styleMirror.getId(r) : (s = this.styleMirror.add(r), i.push({
                styleId: s,
                rules: Array.from(r.rules || CSSRule, (o, a)=>({
                        rule: Wqh(o),
                        index: a
                    }))
            })), n.styleIds.push(s);
        }
        i.length > 0 && (n.styles = i), this.adoptedStyleSheetCb(n);
    }
    reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet;
    }
    trackStylesheetInLinkElement(e) {}
}, pKh = class {
    constructor(){
        this.nodeMap = new WeakMap, this.active = !1;
    }
    inOtherBuffer(e, t) {
        const n = this.nodeMap.get(e);
        return n && Array.from(n).some((i)=>i !== t);
    }
    add(e, t) {
        this.active || (this.active = !0, Ok_(()=>{
            this.nodeMap = new WeakMap, this.active = !1;
        })), this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t));
    }
    destroy() {}
};
try {
    if (Array.from([
        1
    ], (e)=>e * 2)[0] !== 2) {
        const e = document.createElement("iframe");
        document.body.appendChild(e), Array.from = e.contentWindow?.Array.from || Array.from, document.body.removeChild(e);
    }
} catch (e) {
    console.debug("Unable to override Array.from", e);
}
vbe = gk_(), y7e.mirror = vbe, y7e.takeFullSnapshot = Jk_, (function(e) {
    e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
})(mKh || (mKh = {})), gKh = 3, fKh = 5, vKh = "button,a", _Kh = new Set([
    xS.Mutation,
    xS.StyleSheetRule,
    xS.StyleDeclaration,
    xS.AdoptedStyleSheet,
    xS.CanvasMutation,
    xS.Selection,
    xS.MediaInteraction
]), bKh = class {
    constructor(e, t, n = U9n){
        this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scrollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = n;
    }
    addListeners() {
        const e = nw_(()=>{
            this._lastMutation = gzh();
        });
        this._teardown = ()=>{
            e(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0;
        };
    }
    removeListeners() {
        this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
    }
    handleClick(e, t) {
        if (sw_(t, this._ignoreSelector) || !ow_(e)) return;
        const n = {
            timestamp: j2o(e.timestamp),
            clickBreadcrumb: e,
            clickCount: 0,
            node: t
        };
        this._clicks.some((i)=>i.node === n.node && Math.abs(i.timestamp - n.timestamp) < 1) || (this._clicks.push(n), this._clicks.length === 1 && this._scheduleCheckClicks());
    }
    registerMutation(e = Date.now()) {
        this._lastMutation = j2o(e);
    }
    registerScroll(e = Date.now()) {
        this._lastScroll = j2o(e);
    }
    registerClick(e) {
        const t = hzh(e);
        this._handleMultiClick(t);
    }
    _handleMultiClick(e) {
        this._getClicks(e).forEach((t)=>{
            t.clickCount++;
        });
    }
    _getClicks(e) {
        return this._clicks.filter((t)=>t.node === e);
    }
    _checkClicks() {
        const e = [], t = gzh();
        this._clicks.forEach((n)=>{
            !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= t && e.push(n);
        });
        for (const n of e){
            const i = this._clicks.indexOf(n);
            i > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(i, 1));
        }
        this._clicks.length && this._scheduleCheckClicks();
    }
    _generateBreadcrumbs(e) {
        const t = this._replay, n = e.scrollAfter && e.scrollAfter <= this._scrollTimeout, i = e.mutationAfter && e.mutationAfter <= this._threshold, r = !n && !i, { clickCount: s, clickBreadcrumb: o } = e;
        if (r) {
            const a = Math.min(e.mutationAfter || this._timeout, this._timeout) * 1e3, c = a < this._timeout * 1e3 ? "mutation" : "timeout", l = {
                type: "default",
                message: o.message,
                timestamp: o.timestamp,
                category: "ui.slowClickDetected",
                data: {
                    ...o.data,
                    url: yL.location.href,
                    route: t.getCurrentRoute(),
                    timeAfterClickMs: a,
                    endReason: c,
                    clickCount: s || 1
                }
            };
            this._addBreadcrumbEvent(t, l);
            return;
        }
        if (s > 1) {
            const a = {
                type: "default",
                message: o.message,
                timestamp: o.timestamp,
                category: "ui.multiClick",
                data: {
                    ...o.data,
                    url: yL.location.href,
                    route: t.getCurrentRoute(),
                    clickCount: s,
                    metric: !0
                }
            };
            this._addBreadcrumbEvent(t, a);
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = bpn(()=>this._checkClicks(), 1e3);
    }
}, yKh = [
    "A",
    "BUTTON",
    "INPUT"
], Vsr = ((e)=>(e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment", e))(Vsr || {}), SKh = new Set([
    "id",
    "class",
    "aria-label",
    "role",
    "name",
    "alt",
    "title",
    "data-test-id",
    "data-testid",
    "disabled",
    "aria-disabled",
    "data-sentry-component"
]), kKh = (e)=>(t)=>{
        if (!e.isEnabled()) return;
        const n = dw_(t);
        if (!n) return;
        const i = t.name === "click", r = i ? t.event : void 0;
        i && e.clickDetector && r?.target && !r.altKey && !r.metaKey && !r.ctrlKey && !r.shiftKey && rw_(e.clickDetector, n, pzh(t.event)), U9n(e, n);
    }, wKh = {
    resource: Sw_,
    paint: bw_,
    navigation: yw_
}, My = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, CKh = 'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(t,n){return t.f-n.f}),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort(function(t,n){return p[n.s]-p[t.s]||t.f-n.f});s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,s=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),a=s.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(s,n),O(s,a-8,r.d()),O(s,a-4,e),s}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){j.prototype.flush.call(this)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(G)return G.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J((t,n)=>{this.deflate.push(t,n)}),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}}),postMessage({id:void 0,method:"init",success:!0,response:void 0});', gOo = [
    "log",
    "warn",
    "error"
], j9n = "[Replay] ", Py = Iw_(), jsr = class extends Error {
    constructor(){
        super(`Event buffer exceeded maximum size of ${Hsr}.`);
    }
}, fOo = class {
    constructor(){
        this.events = [], this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1;
    }
    get hasEvents() {
        return this.events.length > 0;
    }
    get type() {
        return "sync";
    }
    destroy() {
        this.events = [];
    }
    async addEvent(e) {
        const t = JSON.stringify(e).length;
        if (this._totalSize += t, this._totalSize > Hsr) throw new jsr;
        this.events.push(e);
    }
    finish() {
        return new Promise((e)=>{
            const t = this.events;
            this.clear(), e(JSON.stringify(t));
        });
    }
    clear() {
        this.events = [], this._totalSize = 0, this.hasCheckout = !1;
    }
    getEarliestTimestamp() {
        const e = this.events.map((t)=>t.timestamp).sort()[0];
        return e ? V2o(e) : null;
    }
}, TKh = class {
    constructor(e){
        this._worker = e, this._id = 0, this._pending = new Map, this._onMessage = ({ data: t })=>{
            const n = t;
            if (typeof n.id != "number") return;
            const i = this._pending.get(n.id);
            if (!(!i || i.method !== n.method)) {
                if (this._pending.delete(n.id), !n.success) {
                    My && Py.error("Error in compression worker: ", n.response), i.reject(new Error("Error in compression worker"));
                    return;
                }
                i.resolve(n.response);
            }
        }, this._worker.addEventListener("message", this._onMessage);
    }
    ensureReady() {
        return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise((e, t)=>{
            this._worker.addEventListener("message", ({ data: n })=>{
                n.success ? e() : t();
            }, {
                once: !0
            }), this._worker.addEventListener("error", (n)=>{
                t(n);
            }, {
                once: !0
            });
        }), this._ensureReadyPromise);
    }
    destroy() {
        My && Py.log("Destroying compression worker"), this._worker.removeEventListener("message", this._onMessage), this._pending.forEach((e)=>e.reject(new Error("Worker destroyed"))), this._pending.clear(), this._worker.terminate();
    }
    postMessage(e, t) {
        const n = this._getAndIncrementId();
        return new Promise((i, r)=>{
            this._pending.set(n, {
                method: e,
                resolve: i,
                reject: r
            });
            try {
                this._worker.postMessage({
                    id: n,
                    method: e,
                    arg: t
                });
            } catch (s) {
                this._pending.delete(n), r(s);
            }
        });
    }
    _getAndIncrementId() {
        return this._id++;
    }
}, EKh = class {
    constructor(e){
        this._worker = new TKh(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1;
    }
    get hasEvents() {
        return !!this._earliestTimestamp;
    }
    get type() {
        return "worker";
    }
    ensureReady() {
        return this._worker.ensureReady();
    }
    destroy() {
        this._worker.destroy();
    }
    addEvent(e) {
        const t = V2o(e.timestamp);
        (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
        const n = JSON.stringify(e);
        return this._totalSize += n.length, this._totalSize > Hsr ? Promise.reject(new jsr) : this._sendEventToWorker(n);
    }
    finish() {
        return this._finishRequest();
    }
    clear() {
        this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, (e)=>{
            My && Py.exception(e, 'Sending "clear" message to worker failed', e);
        });
    }
    getEarliestTimestamp() {
        return this._earliestTimestamp;
    }
    _sendEventToWorker(e) {
        return this._worker.postMessage("addEvent", e);
    }
    async _finishRequest() {
        const e = await this._worker.postMessage("finish");
        return this._earliestTimestamp = null, this._totalSize = 0, e;
    }
}, xKh = class {
    constructor(e){
        this._fallback = new fOo, this._compression = new EKh(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded();
    }
    get waitForCheckout() {
        return this._used.waitForCheckout;
    }
    get type() {
        return this._used.type;
    }
    get hasEvents() {
        return this._used.hasEvents;
    }
    get hasCheckout() {
        return this._used.hasCheckout;
    }
    set hasCheckout(e) {
        this._used.hasCheckout = e;
    }
    set waitForCheckout(e) {
        this._used.waitForCheckout = e;
    }
    destroy() {
        this._fallback.destroy(), this._compression.destroy();
    }
    clear() {
        return this._used.clear();
    }
    getEarliestTimestamp() {
        return this._used.getEarliestTimestamp();
    }
    addEvent(e) {
        return this._used.addEvent(e);
    }
    async finish() {
        return await this.ensureWorkerIsLoaded(), this._used.finish();
    }
    ensureWorkerIsLoaded() {
        return this._ensureWorkerIsLoadedPromise;
    }
    async _ensureWorkerIsLoaded() {
        try {
            await this._compression.ensureReady();
        } catch (e) {
            My && Py.exception(e, "Failed to load the compression worker, falling back to simple buffer");
            return;
        }
        await this._switchToCompressionWorker();
    }
    async _switchToCompressionWorker() {
        const { events: e, hasCheckout: t, waitForCheckout: n } = this._fallback, i = [];
        for (const r of e)i.push(this._compression.addEvent(r));
        this._compression.hasCheckout = t, this._compression.waitForCheckout = n, this._used = this._compression;
        try {
            await Promise.all(i), this._fallback.clear();
        } catch (r) {
            My && Py.exception(r, "Failed to add events when switching buffers.");
        }
    }
}, q9n = Og.navigator, vOo = class extends Error {
    constructor(e){
        super(`Transport returned status code ${e}`);
    }
}, qsr = class extends Error {
    constructor(e){
        super("Rate limit hit"), this.rateLimits = e;
    }
}, _Oo = "__THROTTLED", IKh = "__SKIPPED", AKh = class {
    constructor({ options: e, recordingOptions: t }){
        this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
            sessionIdlePause: Nzh,
            sessionIdleExpire: Ozh
        }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._requiresManualStart = !1, this._hasInitializedCoreListeners = !1, this._context = {
            errorIds: new Set,
            traceIds: new Set,
            urls: [],
            initialTimestamp: Date.now(),
            initialUrl: ""
        }, this._recordingOptions = t, this._options = e, this._debouncedFlush = DC_(()=>this._flush(), this._options.flushMinDelay, {
            maxWait: this._options.flushMaxDelay
        }), this._throttledAddEvent = HC_((s, o)=>Fw_(this, s, o), 300, 5);
        const { slowClickTimeout: n, slowClickIgnoreSelectors: i } = this.getOptions(), r = n ? {
            threshold: Math.min(Wzh, n),
            timeout: n,
            scrollTimeout: Gzh,
            ignoreSelector: i ? i.join(",") : ""
        } : void 0;
        if (r && (this.clickDetector = new bKh(this, r)), My) {
            const s = e._experiments;
            Py.setConfig({
                captureExceptions: !!s.captureExceptions,
                traceInternals: !!s.traceInternals
            });
        }
        this._handleVisibilityChange = ()=>{
            yL.document.visibilityState === "visible" ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks();
        }, this._handleWindowBlur = ()=>{
            const s = VLe({
                category: "ui.blur"
            });
            this._doChangeToBackgroundTasks(s);
        }, this._handleWindowFocus = ()=>{
            const s = VLe({
                category: "ui.focus"
            });
            this._doChangeToForegroundTasks(s);
        }, this._handleKeyboardEvent = (s)=>{
            mw_(this, s);
        };
    }
    getContext() {
        return this._context;
    }
    isEnabled() {
        return this._isEnabled;
    }
    isPaused() {
        return this._isPaused;
    }
    isRecordingCanvas() {
        return !!this._canvas;
    }
    getOptions() {
        return this._options;
    }
    handleException(e) {
        My && Py.exception(e), this._options.onError && this._options.onError(e);
    }
    initializeSampling(e) {
        const { errorSampleRate: t, sessionSampleRate: n } = this._options, i = t <= 0 && n <= 0;
        if (this._requiresManualStart = i, !i) {
            if (this._initializeSessionForSampling(e), !this.session) {
                My && Py.exception(new Error("Unable to initialize and create session"));
                return;
            }
            this.session.sampled !== !1 && (this.recordingMode = this.session.sampled === "buffer" && this.session.segmentId === 0 ? "buffer" : "session", My && Py.infoTick(`Starting replay in ${this.recordingMode} mode`), this._initializeRecording());
        }
    }
    start() {
        if (this._isEnabled && this.recordingMode === "session") {
            My && Py.log("Recording is already in progress");
            return;
        }
        if (this._isEnabled && this.recordingMode === "buffer") {
            My && Py.log("Buffering is in progress, call `flush()` to save the replay");
            return;
        }
        My && Py.infoTick("Starting replay in session mode"), this._updateUserActivity();
        const e = Z2o({
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 1,
            allowBuffering: !1
        });
        this.session = e, this.recordingMode = "session", this._initializeRecording();
    }
    startBuffering() {
        if (this._isEnabled) {
            My && Py.log("Buffering is in progress, call `flush()` to save the replay");
            return;
        }
        My && Py.infoTick("Starting replay in buffer mode");
        const e = Z2o({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 0,
            allowBuffering: !0
        });
        this.session = e, this.recordingMode = "buffer", this._initializeRecording();
    }
    startRecording() {
        try {
            const e = this._canvas;
            this._stopRecording = y7e({
                ...this._recordingOptions,
                ...this.recordingMode === "buffer" ? {
                    checkoutEveryNms: Uzh
                } : this._options._experiments.continuousCheckout && {
                    checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
                },
                emit: PC_(this),
                ...MC_(),
                onMutation: this._onMutationHandler.bind(this),
                ...e ? {
                    recordCanvas: e.recordCanvas,
                    getCanvasManager: e.getCanvasManager,
                    sampling: e.sampling,
                    dataURLOptions: e.dataURLOptions
                } : {}
            });
        } catch (e) {
            this.handleException(e);
        }
    }
    stopRecording() {
        try {
            return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0;
        } catch (e) {
            return this.handleException(e), !1;
        }
    }
    async stop({ forceFlush: e = !1, reason: t } = {}) {
        if (this._isEnabled) {
            this._isEnabled = !1, this.recordingMode = "buffer";
            try {
                My && Py.log(`Stopping Replay${t ? ` triggered by ${t}` : ""}`), Ezh(), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({
                    force: !0
                }), this.eventBuffer?.destroy(), this.eventBuffer = null, Mw_(this);
            } catch (n) {
                this.handleException(n);
            }
        }
    }
    pause() {
        this._isPaused || (this._isPaused = !0, this.stopRecording(), My && Py.log("Pausing replay"));
    }
    resume() {
        !this._isPaused || !this._checkSession() || (this._isPaused = !1, this.startRecording(), My && Py.log("Resuming replay"));
    }
    async sendBufferedReplayOrFlush({ continueRecording: e = !0 } = {}) {
        if (this.recordingMode === "session") return this.flushImmediate();
        const t = Date.now();
        My && Py.log("Converting buffer to session"), await this.flushImmediate();
        const n = this.stopRecording();
        !e || !n || this.recordingMode !== "session" && (this.recordingMode = "session", this.session && (this.session.dirty = !1, this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession()), this.startRecording());
    }
    addUpdate(e) {
        const t = e();
        this.recordingMode === "buffer" || !this._isEnabled || t !== !0 && this._debouncedFlush();
    }
    triggerUserActivity() {
        if (this._updateUserActivity(), !this._stopRecording) {
            if (!this._checkSession()) return;
            this.resume();
            return;
        }
        this.checkAndHandleExpiredSession(), this._updateSessionActivity();
    }
    updateUserActivity() {
        this._updateUserActivity(), this._updateSessionActivity();
    }
    conditionalFlush() {
        return this.recordingMode === "buffer" ? Promise.resolve() : this.flushImmediate();
    }
    flush() {
        return this._debouncedFlush();
    }
    flushImmediate() {
        return this._debouncedFlush(), this._debouncedFlush.flush();
    }
    cancelFlush() {
        this._debouncedFlush.cancel();
    }
    getSessionId(e) {
        if (!(e && this.session?.sampled === !1)) return this.session?.id;
    }
    checkAndHandleExpiredSession() {
        if (this._lastActivity && X2o(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && this.session.sampled === "session") {
            this.pause();
            return;
        }
        return !!this._checkSession();
    }
    setInitialState() {
        const e = `${yL.location.pathname}${yL.location.hash}${yL.location.search}`, t = `${yL.location.origin}${e}`;
        this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t);
    }
    throttledAddEvent(e, t) {
        const n = this._throttledAddEvent(e, t);
        if (n === _Oo) {
            const i = VLe({
                category: "replay.throttled"
            });
            this.addUpdate(()=>!Q2o(this, {
                    type: fKh,
                    timestamp: i.timestamp || 0,
                    data: {
                        tag: "breadcrumb",
                        payload: i,
                        metric: !0
                    }
                }));
        }
        return n;
    }
    getCurrentRoute() {
        const e = this.lastActiveSpan || mD(), t = e && pD(e), i = (t && iv(t).data || {})[zL];
        if (!(!t || !i || ![
            "route",
            "custom"
        ].includes(i))) return iv(t).description;
    }
    _initializeRecording() {
        this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = Aw_({
            useCompression: this._options.useCompression,
            workerUrl: this._options.workerUrl
        }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording();
    }
    _initializeSessionForSampling(e) {
        const t = this._options.errorSampleRate > 0, n = Z2o({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration,
            previousSessionId: e
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: this._options.sessionSampleRate,
            allowBuffering: t
        });
        this.session = n;
    }
    _checkSession() {
        if (!this.session) return !1;
        const e = this.session;
        return Szh(e, {
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
        }) ? (this._refreshSession(e), !1) : !0;
    }
    async _refreshSession(e) {
        this._isEnabled && (await this.stop({
            reason: "refresh session"
        }), this.initializeSampling(e.id));
    }
    _addListeners() {
        try {
            yL.document.addEventListener("visibilitychange", this._handleVisibilityChange), yL.addEventListener("blur", this._handleWindowBlur), yL.addEventListener("focus", this._handleWindowFocus), yL.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (IC_(this), this._hasInitializedCoreListeners = !0);
        } catch (e) {
            this.handleException(e);
        }
        this._performanceCleanupCallback = Ew_(this);
    }
    _removeListeners() {
        try {
            yL.document.removeEventListener("visibilitychange", this._handleVisibilityChange), yL.removeEventListener("blur", this._handleWindowBlur), yL.removeEventListener("focus", this._handleWindowFocus), yL.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback();
        } catch (e) {
            this.handleException(e);
        }
    }
    _doChangeToBackgroundTasks(e) {
        !this.session || yzh(this.session, {
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
        }) || (e && this._createCustomBreadcrumb(e), this.conditionalFlush());
    }
    _doChangeToForegroundTasks(e) {
        if (!this.session) return;
        if (!this.checkAndHandleExpiredSession()) {
            My && Py.log("Document has become active, but session has expired");
            return;
        }
        e && this._createCustomBreadcrumb(e);
    }
    _updateUserActivity(e = Date.now()) {
        this._lastActivity = e;
    }
    _updateSessionActivity(e = Date.now()) {
        this.session && (this.session.lastActivity = e, this._maybeSaveSession());
    }
    _createCustomBreadcrumb(e) {
        this.addUpdate(()=>{
            this.throttledAddEvent({
                type: NC.Custom,
                timestamp: e.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: e
                }
            });
        });
    }
    _addPerformanceEntries() {
        let e = vw_(this.performanceEntries).concat(this.replayPerformanceEntries);
        if (this.performanceEntries = [], this.replayPerformanceEntries = [], this._requiresManualStart) {
            const t = this._context.initialTimestamp / 1e3;
            e = e.filter((n)=>n.start >= t);
        }
        return Promise.all(Nsr(this, e));
    }
    _clearContext() {
        this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = [];
    }
    _updateInitialTimestampFromEventBuffer() {
        const { session: e, eventBuffer: t } = this;
        if (!e || !t || this._requiresManualStart || e.segmentId) return;
        const n = t.getEarliestTimestamp();
        n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n);
    }
    _popEventContext() {
        const e = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls
        };
        return this._clearContext(), e;
    }
    async _runFlush() {
        const e = this.getSessionId();
        if (!this.session || !this.eventBuffer || !e) {
            My && Py.error("No session or eventBuffer found to flush.");
            return;
        }
        if (await this._addPerformanceEntries(), !!this.eventBuffer?.hasEvents && (await AC_(this), !!this.eventBuffer && e === this.getSessionId())) try {
            this._updateInitialTimestampFromEventBuffer();
            const t = Date.now();
            if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw new Error("Session is too long, not sending replay");
            const n = this._popEventContext(), i = this.session.segmentId++;
            this._maybeSaveSession();
            const r = await this.eventBuffer.finish();
            await Mzh({
                replayId: e,
                recordingData: r,
                segmentId: i,
                eventContext: n,
                session: this.session,
                timestamp: t,
                onError: (s)=>this.handleException(s)
            });
        } catch (t) {
            this.handleException(t), this.stop({
                reason: "sendReplay"
            });
            const n = Pu();
            if (n) {
                const i = t instanceof qsr ? "ratelimit_backoff" : "send_error";
                n.recordDroppedEvent(i, "replay");
            }
        }
    }
    async _flush({ force: e = !1 } = {}) {
        if (!this._isEnabled && !e) return;
        if (!this.checkAndHandleExpiredSession()) {
            My && Py.error("Attempting to finish replay event after session expired.");
            return;
        }
        if (!this.session) return;
        const t = this.session.started, i = Date.now() - t;
        this._debouncedFlush.cancel();
        const r = i < this._options.minReplayDuration, s = i > this._options.maxReplayDuration + 5e3;
        if (r || s) {
            My && Py.log(`Session duration (${Math.floor(i / 1e3)}s) is too ${r ? "short" : "long"}, not sending replay.`), r && this._debouncedFlush();
            return;
        }
        const o = this.eventBuffer;
        o && this.session.segmentId === 0 && !o.hasCheckout && My && Py.log("Flushing initial segment without checkout.");
        const a = !!this._flushLock;
        this._flushLock || (this._flushLock = this._runFlush());
        try {
            await this._flushLock;
        } catch (c) {
            this.handleException(c);
        } finally{
            this._flushLock = void 0, a && this._debouncedFlush();
        }
    }
    _maybeSaveSession() {
        this.session && this._options.stickySession && Lsr(this.session);
    }
    _onMutationHandler(e) {
        const { ignoreMutations: t } = this._options._experiments;
        if (t?.length && e.some((o)=>{
            const a = OC_(o.target), c = t.join(",");
            return a?.matches(c);
        })) return !1;
        const n = e.length, i = this._options.mutationLimit, r = this._options.mutationBreadcrumbLimit, s = i && n > i;
        if (n > r || s) {
            const o = VLe({
                category: "replay.mutations",
                data: {
                    count: n,
                    limit: s
                }
            });
            this._createCustomBreadcrumb(o);
        }
        return s ? (this.stop({
            reason: "mutationLimit",
            forceFlush: this.recordingMode === "session"
        }), !1) : !0;
    }
}, bOo = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]', RKh = [
    "content-length",
    "content-type",
    "accept"
], yOo = !1, DKh = ((e)=>new MKh(e)), MKh = class {
    constructor({ flushMinDelay: e = Fzh, flushMaxDelay: t = Bzh, minReplayDuration: n = Vzh, maxReplayDuration: i = iOo, stickySession: r = !0, useCompression: s = !0, workerUrl: o, _experiments: a = {}, maskAllText: c = !0, maskAllInputs: l = !0, blockAllMedia: u = !0, mutationBreadcrumbLimit: h = 750, mutationLimit: p = 1e4, slowClickTimeout: g = 7e3, slowClickIgnoreSelectors: f = [], networkDetailAllowUrls: v = [], networkDetailDenyUrls: b = [], networkCaptureBodies: y = !0, networkRequestHeaders: T = [], networkResponseHeaders: E = [], mask: A = [], maskAttributes: R = [
        "title",
        "placeholder",
        "aria-label"
    ], unmask: D = [], block: P = [], unblock: N = [], ignore: O = [], maskFn: F, beforeAddRecordingEvent: H, beforeErrorSampling: $, onError: W } = {}){
        this.name = "Replay";
        const G = WC_({
            mask: A,
            unmask: D,
            block: P,
            unblock: N,
            ignore: O
        });
        if (this._recordingOptions = {
            maskAllInputs: l,
            maskAllText: c,
            maskInputOptions: {
                password: !0
            },
            maskTextFn: F,
            maskInputFn: F,
            maskAttributeFn: (q, z, X)=>GC_({
                    maskAttributes: R,
                    maskAllText: c,
                    privacyOptions: G,
                    key: q,
                    value: z,
                    el: X
                }),
            ...G,
            slimDOMOptions: "all",
            inlineStylesheet: !0,
            inlineImages: !1,
            collectFonts: !0,
            errorHandler: (q)=>{
                try {
                    q.__rrweb__ = !0;
                } catch  {}
            },
            recordCrossOriginIframes: !!a.recordCrossOriginIframes
        }, this._initialOptions = {
            flushMinDelay: e,
            flushMaxDelay: t,
            minReplayDuration: Math.min(n, jzh),
            maxReplayDuration: Math.min(i, iOo),
            stickySession: r,
            useCompression: s,
            workerUrl: o,
            blockAllMedia: u,
            maskAllInputs: l,
            maskAllText: c,
            mutationBreadcrumbLimit: h,
            mutationLimit: p,
            slowClickTimeout: g,
            slowClickIgnoreSelectors: f,
            networkDetailAllowUrls: v,
            networkDetailDenyUrls: b,
            networkCaptureBodies: y,
            networkRequestHeaders: Pzh(T),
            networkResponseHeaders: Pzh(E),
            beforeAddRecordingEvent: H,
            beforeErrorSampling: $,
            onError: W,
            _experiments: a
        }, this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${bOo}` : bOo, this._recordingOptions.ignoreCSSAttributes = new Set([
            "background-image"
        ])), this._isInitialized && apn()) throw new Error("Multiple Sentry Session Replay instances are not supported");
        this._isInitialized = !0;
    }
    get _isInitialized() {
        return yOo;
    }
    set _isInitialized(e) {
        yOo = e;
    }
    afterAllSetup(e) {
        !apn() || this._replay || (this._setup(e), this._initialize(e));
    }
    start() {
        this._replay && this._replay.start();
    }
    startBuffering() {
        this._replay && this._replay.startBuffering();
    }
    stop() {
        return this._replay ? this._replay.stop({
            forceFlush: this._replay.recordingMode === "session"
        }) : Promise.resolve();
    }
    flush(e) {
        return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : (this._replay.start(), Promise.resolve()) : Promise.resolve();
    }
    getReplayId(e) {
        if (this._replay?.isEnabled()) return this._replay.getSessionId(e);
    }
    getRecordingMode() {
        if (this._replay?.isEnabled()) return this._replay.recordingMode;
    }
    _initialize(e) {
        this._replay && (this._maybeLoadFromReplayCanvasIntegration(e), this._replay.initializeSampling());
    }
    _setup(e) {
        const t = VC_(this._initialOptions, e);
        this._replay = new AKh({
            options: t,
            recordingOptions: this._recordingOptions
        });
    }
    _maybeLoadFromReplayCanvasIntegration(e) {
        try {
            const t = e.getIntegrationByName("ReplayCanvas");
            if (!t) return;
            this._replay._canvas = t.getOptions();
        } catch  {}
    }
};

}
var __wakaru_n0__initialized = false;
export function n0_() {
if (__wakaru_n0__initialized) return;
__wakaru_n0__initialized = true;
for(x(), $u(), BKh = Object.defineProperty, UKh = (e, t, n)=>(t in e) ? BKh(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, COo = (e, t, n)=>UKh(e, typeof t != "symbol" ? t + "" : t, n), $Kh = class {
    constructor(){
        COo(this, "idNodeMap", new Map), COo(this, "nodeMetaMap", new WeakMap);
    }
    getId(e) {
        return e ? this.getMeta(e)?.id ?? -1 : -1;
    }
    getNode(e) {
        return this.idNodeMap.get(e) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(e) {
        return this.nodeMetaMap.get(e) || null;
    }
    removeNodeFromMap(e) {
        const t = this.getId(e);
        this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach((n)=>this.removeNodeFromMap(n));
    }
    has(e) {
        return this.idNodeMap.has(e);
    }
    hasNode(e) {
        return this.nodeMetaMap.has(e);
    }
    add(e, t) {
        const n = t.id;
        this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t);
    }
    replace(e, t) {
        const n = this.getNode(e);
        if (n) {
            const i = this.nodeMetaMap.get(n);
            i && this.nodeMetaMap.set(t, i);
        }
        this.idNodeMap.set(e, t);
    }
    reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap;
    }
}, o1t = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`, TOo = {
    map: {},
    getId () {
        return console.error(o1t), -1;
    },
    getNode () {
        return console.error(o1t), null;
    },
    removeNodeFromMap () {
        console.error(o1t);
    },
    has () {
        return console.error(o1t), !1;
    },
    reset () {
        console.error(o1t);
    }
}, typeof window < "u" && window.Proxy && window.Reflect && (TOo = new Proxy(TOo, {
    get (e, t, n) {
        return t === "map" && console.error(o1t), Reflect.get(e, t, n);
    }
})), Date.now().toString(), EOo = {}, a1t = ((e)=>(e[e["2D"] = 0] = "2D", e[e.WebGL = 1] = "WebGL", e[e.WebGL2 = 2] = "WebGL2", e))(a1t || {}), Xsr = (e)=>Ysr ? (...n)=>{
        try {
            return e(...n);
        } catch (i) {
            if (Ysr && Ysr(i) === !0) return ()=>{};
            throw i;
        }
    } : e, c1t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", HKh = typeof Uint8Array > "u" ? [] : new Uint8Array(256), hxe = 0; hxe < c1t.length; hxe++)HKh[c1t.charCodeAt(hxe)] = hxe;
WKh = function(e) {
    var t = new Uint8Array(e), n, i = t.length, r = "";
    for(n = 0; n < i; n += 3)r += c1t[t[n] >> 2], r += c1t[(t[n] & 3) << 4 | t[n + 1] >> 4], r += c1t[(t[n + 1] & 15) << 2 | t[n + 2] >> 6], r += c1t[t[n + 2] & 63];
    return i % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : i % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="), r;
}, xOo = new Map, IOo = (e, t, n)=>{
    if (!e || !(ROo(e, t) || typeof e == "object")) return;
    const i = e.constructor.name, r = ZC_(n, i);
    let s = r.indexOf(e);
    return s === -1 && (s = r.length, r.push(e)), s;
}, AOo = (e, t, n)=>e.map((i)=>Ksr(i, t, n)), ROo = (e, t)=>!![
        "WebGLActiveInfo",
        "WebGLBuffer",
        "WebGLFramebuffer",
        "WebGLProgram",
        "WebGLRenderbuffer",
        "WebGLShader",
        "WebGLShaderPrecisionFormat",
        "WebGLTexture",
        "WebGLUniformLocation",
        "WebGLVertexArrayObject",
        "WebGLVertexArrayObjectOES"
    ].filter((r)=>typeof t[r] == "function").find((r)=>e instanceof t[r]), GKh = 'for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w?.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};', VKh = class {
    constructor(e){
        this.pendingCanvasMutations = new Map, this.rafStamps = {
            latestId: 0,
            invokeId: null
        }, this.shadowDoms = new Set, this.windowsSet = new WeakSet, this.windows = [], this.restoreHandlers = [], this.frozen = !1, this.locked = !1, this.snapshotInProgressMap = new Map, this.worker = null, this.lastSnapshotTime = 0, this.processMutation = (o, a)=>{
            (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(o) || this.pendingCanvasMutations.set(o, []), this.pendingCanvasMutations.get(o).push(a);
        };
        const { enableManualSnapshot: t, sampling: n = "all", win: i, recordCanvas: r, errorHandler: s } = e;
        e.sampling = n, this.mutationCb = e.mutationCb, this.mirror = e.mirror, this.options = e, s && XC_(s), (r && typeof n == "number" || t) && (this.worker = this.initFPSWorker()), this.addWindow(i), !t && Xsr(()=>{
            r && n === "all" && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()), r && typeof n == "number" && this.initCanvasFPSObserver();
        })();
    }
    reset() {
        this.pendingCanvasMutations.clear(), this.restoreHandlers.forEach((e)=>{
            try {
                e();
            } catch  {}
        }), this.restoreHandlers = [], this.windowsSet = new WeakSet, this.windows = [], this.shadowDoms = new Set, this.worker?.terminate(), this.worker = null, this.snapshotInProgressMap = new Map;
    }
    freeze() {
        this.frozen = !0;
    }
    unfreeze() {
        this.frozen = !1;
    }
    lock() {
        this.locked = !0;
    }
    unlock() {
        this.locked = !1;
    }
    addWindow(e) {
        const { sampling: t = "all", blockClass: n, blockSelector: i, unblockSelector: r, recordCanvas: s, enableManualSnapshot: o } = this.options;
        if (!this.windowsSet.has(e)) {
            if (o) {
                this.windowsSet.add(e), this.windows.push(new WeakRef(e));
                return;
            }
            Xsr(()=>{
                if (s && t === "all" && this.initCanvasMutationObserver(e, n, i, r), s && typeof t == "number") {
                    const a = OKh(e, n, i, r, !0);
                    this.restoreHandlers.push(()=>{
                        a();
                    });
                }
            })(), this.windowsSet.add(e), this.windows.push(new WeakRef(e));
        }
    }
    addShadowRoot(e) {
        this.shadowDoms.add(new WeakRef(e));
    }
    resetShadowRoots() {
        this.shadowDoms = new Set;
    }
    snapshot(e, t) {
        if (t?.skipRequestAnimationFrame) {
            this.takeSnapshot(performance.now(), !0, e);
            return;
        }
        s1t((n)=>this.takeSnapshot(n, !0, e));
    }
    initFPSWorker() {
        const e = new Worker(t0_());
        return e.onmessage = (t)=>{
            const n = t.data, { id: i } = n;
            if (this.snapshotInProgressMap.set(i, !1), !("base64" in n)) return;
            const { base64: r, type: s, width: o, height: a } = n;
            this.mutationCb({
                id: i,
                type: a1t["2D"],
                commands: [
                    {
                        property: "clearRect",
                        args: [
                            0,
                            0,
                            o,
                            a
                        ]
                    },
                    {
                        property: "drawImage",
                        args: [
                            {
                                rr_type: "ImageBitmap",
                                args: [
                                    {
                                        rr_type: "Blob",
                                        data: [
                                            {
                                                rr_type: "ArrayBuffer",
                                                base64: r
                                            }
                                        ],
                                        type: s
                                    }
                                ]
                            },
                            0,
                            0,
                            o,
                            a
                        ]
                    }
                ]
            });
        }, e;
    }
    initCanvasFPSObserver() {
        let e;
        if (!this.windows.length && !this.shadowDoms.size) return;
        const t = (n)=>{
            this.takeSnapshot(n, !1), e = s1t(t);
        };
        e = s1t(t), this.restoreHandlers.push(()=>{
            e && cancelAnimationFrame(e);
        });
    }
    initCanvasMutationObserver(e, t, n, i) {
        const r = OKh(e, t, n, i, !1), s = QC_(this.processMutation.bind(this), e, t, n, i), o = e0_(this.processMutation.bind(this), e, t, n, i, this.mirror);
        this.restoreHandlers.push(()=>{
            r(), s(), o();
        });
    }
    getCanvasElements(e, t, n) {
        const i = [], r = (s)=>{
            s.querySelectorAll("canvas").forEach((o)=>{
                zsr(o, e, t, n, !0) || i.push(o);
            });
        };
        for (const s of this.windows){
            const o = s.deref();
            let a;
            try {
                a = o && o.document;
            } catch  {}
            a && r(a);
        }
        for (const s of this.shadowDoms){
            const o = s.deref();
            o && r(o);
        }
        return i;
    }
    takeSnapshot(e, t, n) {
        const { sampling: i, blockClass: r, blockSelector: s, unblockSelector: o, dataURLOptions: a, maxCanvasSize: c } = this.options, u = 1e3 / (i === "all" ? 2 : i || 2);
        return this.lastSnapshotTime && e - this.lastSnapshotTime < u ? !1 : (this.lastSnapshotTime = e, (n ? [
            n
        ] : this.getCanvasElements(r, s, o)).forEach((g)=>{
            const f = this.mirror.getId(g);
            if (!(!this.mirror.hasNode(g) || !g.width || !g.height || this.snapshotInProgressMap.get(f))) {
                if (this.snapshotInProgressMap.set(f, !0), !t && [
                    "webgl",
                    "webgl2"
                ].includes(g.__context)) {
                    const v = g.getContext(g.__context);
                    v?.getContextAttributes()?.preserveDrawingBuffer === !1 && v.clear(v.COLOR_BUFFER_BIT);
                }
                createImageBitmap(g).then((v)=>{
                    this.worker?.postMessage({
                        id: f,
                        bitmap: v,
                        width: g.width,
                        height: g.height,
                        dataURLOptions: a,
                        maxCanvasSize: c
                    }, [
                        v
                    ]);
                }).catch((v)=>{
                    Xsr(()=>{
                        throw this.snapshotInProgressMap.delete(f), v;
                    })();
                });
            }
        }), !0);
    }
    startPendingCanvasMutationFlusher() {
        s1t(()=>this.flushPendingCanvasMutations());
    }
    startRAFTimestamping() {
        const e = (t)=>{
            this.rafStamps.latestId = t, s1t(e);
        };
        s1t(e);
    }
    flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach((e, t)=>{
            const n = this.mirror.getId(t);
            this.flushPendingCanvasMutationFor(t, n);
        }), s1t(()=>this.flushPendingCanvasMutations());
    }
    flushPendingCanvasMutationFor(e, t) {
        if (this.frozen || this.locked) return;
        const n = this.pendingCanvasMutations.get(e);
        if (!n || t === -1) return;
        const i = n.map((s)=>{
            const { type: o, ...a } = s;
            return a;
        }), { type: r } = n[0];
        this.mutationCb({
            id: t,
            type: r,
            commands: i
        }), this.pendingCanvasMutations.delete(e);
    }
};
try {
    if (Array.from([
        1
    ], (e)=>e * 2)[0] !== 2) {
        const e = document.createElement("iframe");
        document.body.appendChild(e), Array.from = e.contentWindow?.Array.from || Array.from, document.body.removeChild(e);
    }
} catch (e) {
    console.debug("Unable to override Array.from", e);
}
zC_(), (function(e) {
    e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
})(jKh || (jKh = {})), DOo = {
    low: {
        sampling: {
            canvas: 1
        },
        dataURLOptions: {
            type: "image/webp",
            quality: .25
        }
    },
    medium: {
        sampling: {
            canvas: 2
        },
        dataURLOptions: {
            type: "image/webp",
            quality: .4
        }
    },
    high: {
        sampling: {
            canvas: 4
        },
        dataURLOptions: {
            type: "image/webp",
            quality: .5
        }
    }
}, qKh = "ReplayCanvas", z9n = 1280, zKh = ((e = {})=>{
    const [t, n] = e.maxCanvasSize || [], i = {
        quality: e.quality || "medium",
        enableManualSnapshot: e.enableManualSnapshot,
        maxCanvasSize: [
            t ? Math.min(t, z9n) : z9n,
            n ? Math.min(n, z9n) : z9n
        ]
    };
    let r;
    const s = new Promise((o)=>r = o);
    return {
        name: qKh,
        getOptions () {
            const { quality: o, enableManualSnapshot: a, maxCanvasSize: c } = i;
            return {
                enableManualSnapshot: a,
                recordCanvas: !0,
                getCanvasManager: (l)=>{
                    const u = new VKh({
                        ...l,
                        enableManualSnapshot: a,
                        maxCanvasSize: c,
                        errorHandler: (h)=>{
                            try {
                                typeof h == "object" && (h.__rrweb__ = !0);
                            } catch  {}
                        }
                    });
                    return r(u), u;
                },
                ...DOo[o] || DOo.medium
            };
        },
        async snapshot (o, a) {
            (await s).snapshot(o, a);
        }
    };
}), KKh = zKh;

}
