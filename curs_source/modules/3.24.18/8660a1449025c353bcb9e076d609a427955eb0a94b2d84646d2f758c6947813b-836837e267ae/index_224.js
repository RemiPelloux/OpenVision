import { $0s, A0s, A5w, C0s, C5w, C7l, CWf, DLw, DWf, EWf, FLw, H0s, HLw, I5w, JNi, Jct, KLw, LLw, M5w, NWf, OLw, P5w, QLw, RKe, RLw, S0s, S5w, T7l, TWf, UWf, W0s, XLw, YGf, ZLw, _5w, _7l, _Wf, a7l, aWf, b5w, bWf, bZt, c5w, c7l, cLi, cLw, cOw, d7l, eLi, f7l, fNn, fWf, g7l, gLw, gWf, hWf, iOw, kWf, l5w, mOw, mWf, o5w, oOw, oWf, p5w, p7l, pLw, pNn, pWf, qLw, qWf, rLi, s5w, sOw, tLi, tWf, u5w, u7l, v7l, vNn, vWf, w7l, wWf, x0s, x5w, xWf, y0s, y5w, yWf, zNw, zTe, zWf } from "./BA.js";
import { IXn, UXn } from "./Iwo.js";
import { fh } from "./index_10.js";
import { pQ } from "./index_11.js";
import { eL } from "./inp.js";
import { YF } from "./semanticAttributes.js";
import { JN, Yb, ah } from "./spanUtils.js";
import { E } from "./tslib.es6.js";
import { o_ } from "./worldwide.js";
var eUe;
var ZGf, QGf, Z7l, JGf, yZt, Q7l, J7l, SZt, G0s, kZt, eqf, eUe, tqf, eUl, tUl, nUl, iUl, nqf, iqf, rqf, rUl, sqf, hLi, oqf, aqf;
export { G0s, J7l, JGf, Q7l, QGf, SZt, Z7l, ZGf, aqf, eUe, eUl, eqf, hLi, iUl, iqf, kZt, nUl, nqf, oqf, rUl, rqf, sqf, tUl, tqf, yZt };
var __wakaru_w5w_initialized = false;
export function w5w() {
if (__wakaru_w5w_initialized) return;
__wakaru_w5w_initialized = true;
for(E(), fh(), pQ(), _F = o_, D0s = "sentryReplaySession", VWf = "replay_event", N0s = "Unable to send Replay", KWf = 3e5, YWf = 9e5, XWf = 5e3, ZWf = 5500, QWf = 6e4, JWf = 5e3, eGf = 3, A7l = 15e4, aLi = 5e3, tGf = 3e3, nGf = 300, L0s = 2e7, iGf = 4999, rGf = 15e3, R7l = 36e5, sGf = Object.defineProperty, oGf = (t, e, n)=>(e in t) ? sGf(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, P7l = (t, e, n)=>oGf(t, typeof e != "symbol" ? e + "" : e, n), LG = ((t)=>(t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment", t))(LG || {}), M7l = class {
    constructor(){
        P7l(this, "idNodeMap", new Map), P7l(this, "nodeMetaMap", new WeakMap);
    }
    getId(t) {
        return t ? this.getMeta(t)?.id ?? -1 : -1;
    }
    getNode(t) {
        return this.idNodeMap.get(t) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(t) {
        return this.nodeMetaMap.get(t) || null;
    }
    removeNodeFromMap(t) {
        const e = this.getId(t);
        this.idNodeMap.delete(e), t.childNodes && t.childNodes.forEach((n)=>this.removeNodeFromMap(n));
    }
    has(t) {
        return this.idNodeMap.has(t);
    }
    hasNode(t) {
        return this.nodeMetaMap.has(t);
    }
    add(t, e) {
        const n = e.id;
        this.idNodeMap.set(n, t), this.nodeMetaMap.set(t, e);
    }
    replace(t, e) {
        const n = this.getNode(t);
        if (n) {
            const i = this.nodeMetaMap.get(n);
            i && this.nodeMetaMap.set(e, i);
        }
        this.idNodeMap.set(t, e);
    }
    reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap;
    }
}, D7l = "__rrweb_original__", N7l = {}, aGf = 1, lGf = new RegExp("[^a-z0-9-_:]"), bNn = -2, uGf = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, dGf = /^(?:[a-z+]+:)?\/\//i, hGf = /^www\..*/i, pGf = /^(data:)([^,]*),(.*)/i, mGf = /^[^ \t\n\r\u000c]+/, gGf = /^[, \t\n\r\u000c]+/, L7l = new WeakMap, vZt = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`, O7l = {
    map: {},
    getId () {
        return console.error(vZt), -1;
    },
    getNode () {
        return console.error(vZt), null;
    },
    removeNodeFromMap () {
        console.error(vZt);
    },
    has () {
        return console.error(vZt), !1;
    },
    reset () {
        console.error(vZt);
    }
}, typeof window < "u" && window.Proxy && window.Reflect && (O7l = new Proxy(O7l, {
    get (t, e, n) {
        return e === "map" && console.error(vZt), Reflect.get(t, e, n);
    }
})), lLi = Date.now, /[1-9][0-9]{12}/.test(Date.now().toString()) || (lLi = ()=>new Date().getTime()), fGf = class {
    constructor(){
        this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map;
    }
    getId(t) {
        return this.styleIDMap.get(t) ?? -1;
    }
    has(t) {
        return this.styleIDMap.has(t);
    }
    add(t, e) {
        if (this.has(t)) return this.getId(t);
        let n;
        return e === void 0 ? n = this.id++ : n = e, this.styleIDMap.set(t, n), this.idStyleMap.set(n, t), n;
    }
    getStyle(t) {
        return this.idStyleMap.get(t) || null;
    }
    reset() {
        this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1;
    }
    generateId() {
        return this.id++;
    }
}, F7l = {}, FE = ((t)=>(t[t.DomContentLoaded = 0] = "DomContentLoaded", t[t.Load = 1] = "Load", t[t.FullSnapshot = 2] = "FullSnapshot", t[t.IncrementalSnapshot = 3] = "IncrementalSnapshot", t[t.Meta = 4] = "Meta", t[t.Custom = 5] = "Custom", t[t.Plugin = 6] = "Plugin", t))(FE || {}), m0 = ((t)=>(t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", t[t.StyleSheetRule = 8] = "StyleSheetRule", t[t.CanvasMutation = 9] = "CanvasMutation", t[t.Font = 10] = "Font", t[t.Log = 11] = "Log", t[t.Drag = 12] = "Drag", t[t.StyleDeclaration = 13] = "StyleDeclaration", t[t.Selection = 14] = "Selection", t[t.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", t[t.CustomElement = 16] = "CustomElement", t))(m0 || {}), dce = ((t)=>(t[t.MouseUp = 0] = "MouseUp", t[t.MouseDown = 1] = "MouseDown", t[t.Click = 2] = "Click", t[t.ContextMenu = 3] = "ContextMenu", t[t.DblClick = 4] = "DblClick", t[t.Focus = 5] = "Focus", t[t.Blur = 6] = "Blur", t[t.TouchStart = 7] = "TouchStart", t[t.TouchMove_Departed = 8] = "TouchMove_Departed", t[t.TouchEnd = 9] = "TouchEnd", t[t.TouchCancel = 10] = "TouchCancel", t))(dce || {}), PKe = ((t)=>(t[t.Mouse = 0] = "Mouse", t[t.Pen = 1] = "Pen", t[t.Touch = 2] = "Touch", t))(PKe || {}), _Zt = ((t)=>(t[t.Play = 0] = "Play", t[t.Pause = 1] = "Pause", t[t.Seeked = 2] = "Seeked", t[t.VolumeChange = 3] = "VolumeChange", t[t.RateChange = 4] = "RateChange", t))(_Zt || {}), vGf = class {
    constructor(){
        this.length = 0, this.head = null, this.tail = null;
    }
    get(t) {
        if (t >= this.length) throw new Error("Position outside of list range");
        let e = this.head;
        for(let n = 0; n < t; n++)e = e?.next || null;
        return e;
    }
    addNode(t) {
        const e = {
            value: t,
            previous: null,
            next: null
        };
        if (t.__ln = e, t.previousSibling && _Wf(t.previousSibling)) {
            const n = t.previousSibling.__ln.next;
            e.next = n, e.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = e, n && (n.previous = e);
        } else if (t.nextSibling && _Wf(t.nextSibling) && t.nextSibling.__ln.previous) {
            const n = t.nextSibling.__ln.previous;
            e.previous = n, e.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = e, n && (n.next = e);
        } else this.head && (this.head.previous = e), e.next = this.head, this.head = e;
        e.next === null && (this.tail = e), this.length++;
    }
    removeNode(t) {
        const e = t.__ln;
        this.head && (e.previous ? (e.previous.next = e.next, e.next ? e.next.previous = e.previous : this.tail = e.previous) : (this.head = e.next, this.head ? this.head.previous = null : this.tail = null), t.__ln && delete t.__ln, this.length--);
    }
}, B7l = (t, e)=>`${t}@${e}`, _Gf = class {
    constructor(){
        this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = (t)=>{
            t.forEach(this.processMutation), this.emit();
        }, this.emit = ()=>{
            if (this.frozen || this.locked) return;
            const t = [], e = new Set, n = new vGf, i = (a)=>{
                let l = a, c = bNn;
                for(; c === bNn;)l = l && l.nextSibling, c = l && this.mirror.getId(l);
                return c;
            }, r = (a)=>{
                if (!a.parentNode || !vWf(a)) return;
                const l = JNi(a.parentNode) ? this.mirror.getId(fWf(a)) : this.mirror.getId(a.parentNode), c = i(a);
                if (l === -1 || c === -1) return n.addNode(a);
                const u = vNn(a, {
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
                    onSerialize: (d)=>{
                        mWf(d, this.mirror) && !zTe(d, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(d), gWf(d, this.mirror) && this.stylesheetManager.trackLinkElement(d), p7l(a) && this.shadowDomManager.addShadowRoot(a.shadowRoot, this.doc);
                    },
                    onIframeLoad: (d, h)=>{
                        zTe(d, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (this.iframeManager.attachIframe(d, h), d.contentWindow && this.canvasManager.addWindow(d.contentWindow), this.shadowDomManager.observeAttachShadow(d));
                    },
                    onStylesheetLoad: (d, h)=>{
                        this.stylesheetManager.attachLinkElement(d, h);
                    },
                    onBlockedImageLoad: (d, h, { width: p, height: g })=>{
                        this.mutationCb({
                            adds: [],
                            removes: [],
                            texts: [],
                            attributes: [
                                {
                                    id: h.id,
                                    attributes: {
                                        style: {
                                            width: `${p}px`,
                                            height: `${g}px`
                                        }
                                    }
                                }
                            ]
                        });
                    },
                    ignoreCSSAttributes: this.ignoreCSSAttributes
                });
                u && (t.push({
                    parentId: l,
                    nextId: c,
                    node: u
                }), e.add(u.id));
            };
            for(; this.mapRemoves.length;)this.mirror.removeNodeFromMap(this.mapRemoves.shift());
            for (const a of this.movedSet)bWf(this.removes, a, this.mirror) && !this.movedSet.has(a.parentNode) || r(a);
            for (const a of this.addedSet)!yWf(this.droppedSet, a) && !bWf(this.removes, a, this.mirror) || yWf(this.movedSet, a) ? r(a) : this.droppedSet.add(a);
            let s = null;
            for(; n.length;){
                let a = null;
                if (s) {
                    const l = this.mirror.getId(s.value.parentNode), c = i(s.value);
                    l !== -1 && c !== -1 && (a = s);
                }
                if (!a) {
                    let l = n.tail;
                    for(; l;){
                        const c = l;
                        if (l = l.previous, c) {
                            const u = this.mirror.getId(c.value.parentNode);
                            if (i(c.value) === -1) continue;
                            if (u !== -1) {
                                a = c;
                                break;
                            } else {
                                const h = c.value;
                                if (h.parentNode && h.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                    const p = h.parentNode.host;
                                    if (this.mirror.getId(p) !== -1) {
                                        a = c;
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
                    })).filter((a)=>!e.has(a.id)).filter((a)=>this.mirror.has(a.id)),
                attributes: this.attributes.map((a)=>{
                    const { attributes: l } = a;
                    if (typeof l.style == "string") {
                        const c = JSON.stringify(a.styleDiff), u = JSON.stringify(a._unchangedStyles);
                        c.length < l.style.length && (c + u).split("var(").length === l.style.split("var(").length && (l.style = a.styleDiff);
                    }
                    return {
                        id: this.mirror.getId(a.node),
                        attributes: l
                    };
                }).filter((a)=>!e.has(a.id)).filter((a)=>this.mirror.has(a.id)),
                removes: this.removes,
                adds: t
            };
            !o.texts.length && !o.attributes.length && !o.removes.length && !o.adds.length || (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(o));
        }, this.processMutation = (t)=>{
            if (!d7l(t.target, this.mirror)) switch(t.type){
                case "characterData":
                    {
                        const e = t.target.textContent;
                        !zTe(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) && e !== t.oldValue && this.texts.push({
                            value: fNn(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && e ? this.maskTextFn ? this.maskTextFn(e, hWf(t.target)) : e.replace(/[\S]/g, "*") : e,
                            node: t.target
                        });
                        break;
                    }
                case "attributes":
                    {
                        const e = t.target;
                        let n = t.attributeName, i = t.target.getAttribute(n);
                        if (n === "value") {
                            const s = a7l(e), o = e.tagName;
                            i = S0s(e, o, s);
                            const a = y0s({
                                maskInputOptions: this.maskInputOptions,
                                tagName: o,
                                type: s
                            }), l = fNn(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, a);
                            i = tLi({
                                isMasked: l,
                                element: e,
                                value: i,
                                maskInputFn: this.maskInputFn
                            });
                        }
                        if (zTe(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || i === t.oldValue) return;
                        let r = this.attributeMap.get(t.target);
                        if (e.tagName === "IFRAME" && n === "src" && !this.keepIframeSrcFn(i)) if (!g7l(e)) n = "rr_src";
                        else return;
                        if (r || (r = {
                            node: t.target,
                            attributes: {},
                            styleDiff: {},
                            _unchangedStyles: {}
                        }, this.attributes.push(r), this.attributeMap.set(t.target, r)), n === "type" && e.tagName === "INPUT" && (t.oldValue || "").toLowerCase() === "password" && e.setAttribute("data-rr-is-password", "true"), !aWf(e.tagName, n) && (r.attributes[n] = oWf(this.doc, pNn(e.tagName), pNn(n), i, e, this.maskAttributeFn), n === "style")) {
                            if (!this.unattachedDoc) try {
                                this.unattachedDoc = document.implementation.createHTMLDocument();
                            } catch  {
                                this.unattachedDoc = this.doc;
                            }
                            const s = this.unattachedDoc.createElement("span");
                            t.oldValue && s.setAttribute("style", t.oldValue);
                            for (const o of Array.from(e.style)){
                                const a = e.style.getPropertyValue(o), l = e.style.getPropertyPriority(o);
                                a !== s.style.getPropertyValue(o) || l !== s.style.getPropertyPriority(o) ? l === "" ? r.styleDiff[o] = a : r.styleDiff[o] = [
                                    a,
                                    l
                                ] : r._unchangedStyles[o] = [
                                    a,
                                    l
                                ];
                            }
                            for (const o of Array.from(s.style))e.style.getPropertyValue(o) === "" && (r.styleDiff[o] = !1);
                        }
                        break;
                    }
                case "childList":
                    {
                        if (zTe(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                        t.addedNodes.forEach((e)=>this.genAdds(e, t.target)), t.removedNodes.forEach((e)=>{
                            const n = this.mirror.getId(e), i = JNi(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                            zTe(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || d7l(e, this.mirror) || !cLw(e, this.mirror) || (this.addedSet.has(e) ? (f7l(this.addedSet, e), this.droppedSet.add(e)) : this.addedSet.has(t.target) && n === -1 || pWf(t.target, this.mirror) || (this.movedSet.has(e) && this.movedMap[B7l(n, i)] ? f7l(this.movedSet, e) : this.removes.push({
                                parentId: i,
                                id: n,
                                isShadow: JNi(t.target) && eLi(t.target) ? !0 : void 0
                            })), this.mapRemoves.push(e));
                        });
                        break;
                    }
            }
        }, this.genAdds = (t, e)=>{
            if (!this.processedNodeManager.inOtherBuffer(t, this) && !(this.addedSet.has(t) || this.movedSet.has(t))) {
                if (this.mirror.hasNode(t)) {
                    if (d7l(t, this.mirror)) return;
                    this.movedSet.add(t);
                    let n = null;
                    e && this.mirror.hasNode(e) && (n = this.mirror.getId(e)), n && n !== -1 && (this.movedMap[B7l(this.mirror.getId(t), n)] = !0);
                } else this.addedSet.add(t), this.droppedSet.delete(t);
                zTe(t, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (t.childNodes && t.childNodes.forEach((n)=>this.genAdds(n)), p7l(t) && t.shadowRoot.childNodes.forEach((n)=>{
                    this.processedNodeManager.add(n, this), this.genAdds(n, t);
                }));
            }
        };
    }
    init(t) {
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
        ].forEach((e)=>{
            this[e] = t[e];
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
}, ER = (t)=>cLi ? (...n)=>{
        try {
            return t(...n);
        } catch (i) {
            if (cLi && cLi(i) === !0) return ()=>{};
            throw i;
        }
    } : t, mAt = [], bGf = [
    "INPUT",
    "TEXTAREA",
    "SELECT"
], U7l = new WeakMap, O0s = class {
    constructor(t){
        this.generateIdFn = t, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
    }
    getId(t, e, n, i) {
        const r = n || this.getIdToRemoteIdMap(t), s = i || this.getRemoteIdToIdMap(t);
        let o = r.get(e);
        return o || (o = this.generateIdFn(), r.set(e, o), s.set(o, e)), o;
    }
    getIds(t, e) {
        const n = this.getIdToRemoteIdMap(t), i = this.getRemoteIdToIdMap(t);
        return e.map((r)=>this.getId(t, r, n, i));
    }
    getRemoteId(t, e, n) {
        const i = n || this.getRemoteIdToIdMap(t);
        if (typeof e != "number") return e;
        const r = i.get(e);
        return r || -1;
    }
    getRemoteIds(t, e) {
        const n = this.getRemoteIdToIdMap(t);
        return e.map((i)=>this.getRemoteId(t, i, n));
    }
    reset(t) {
        if (!t) {
            this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
            return;
        }
        this.iframeIdToRemoteIdMap.delete(t), this.iframeRemoteIdToIdMap.delete(t);
    }
    getIdToRemoteIdMap(t) {
        let e = this.iframeIdToRemoteIdMap.get(t);
        return e || (e = new Map, this.iframeIdToRemoteIdMap.set(t, e)), e;
    }
    getRemoteIdToIdMap(t) {
        let e = this.iframeRemoteIdToIdMap.get(t);
        return e || (e = new Map, this.iframeRemoteIdToIdMap.set(t, e)), e;
    }
}, yGf = class {
    constructor(){
        this.crossOriginIframeMirror = new O0s(c7l), this.crossOriginIframeRootIdMap = new WeakMap;
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}, SGf = class {
    constructor(t){
        this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new O0s(c7l), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = t.mutationCb, this.wrappedEmit = t.wrappedEmit, this.stylesheetManager = t.stylesheetManager, this.recordCrossOriginIframes = t.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new O0s(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = t.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
    }
    addIframe(t) {
        this.iframes.set(t, !0), t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t);
    }
    addLoadListener(t) {
        this.loadListener = t;
    }
    attachIframe(t, e) {
        this.mutationCb({
            adds: [
                {
                    parentId: this.mirror.getId(t),
                    nextId: null,
                    node: e
                }
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
        }), this.recordCrossOriginIframes && t.contentWindow?.addEventListener("message", this.handleMessage.bind(this)), this.loadListener?.(t);
        const n = g7l(t);
        n && n.adoptedStyleSheets && n.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(n.adoptedStyleSheets, this.mirror.getId(n));
    }
    handleMessage(t) {
        const e = t;
        if (e.data.type !== "rrweb" || e.origin !== e.data.origin || !t.source) return;
        const i = this.crossOriginIframeMap.get(t.source);
        if (!i) return;
        const r = this.transformCrossOriginEvent(i, e.data.event);
        r && this.wrappedEmit(r, e.data.isCheckout);
    }
    transformCrossOriginEvent(t, e) {
        switch(e.type){
            case FE.FullSnapshot:
                {
                    this.crossOriginIframeMirror.reset(t), this.crossOriginIframeStyleMirror.reset(t), this.replaceIdOnNode(e.data.node, t);
                    const n = e.data.node.id;
                    return this.crossOriginIframeRootIdMap.set(t, n), this.patchRootIdOnNode(e.data.node, n), {
                        timestamp: e.timestamp,
                        type: FE.IncrementalSnapshot,
                        data: {
                            source: m0.Mutation,
                            adds: [
                                {
                                    parentId: this.mirror.getId(t),
                                    nextId: null,
                                    node: e.data.node
                                }
                            ],
                            removes: [],
                            texts: [],
                            attributes: [],
                            isAttachIframe: !0
                        }
                    };
                }
            case FE.Meta:
            case FE.Load:
            case FE.DomContentLoaded:
                return !1;
            case FE.Plugin:
                return e;
            case FE.Custom:
                return this.replaceIds(e.data.payload, t, [
                    "id",
                    "parentId",
                    "previousId",
                    "nextId"
                ]), e;
            case FE.IncrementalSnapshot:
                switch(e.data.source){
                    case m0.Mutation:
                        return e.data.adds.forEach((n)=>{
                            this.replaceIds(n, t, [
                                "parentId",
                                "nextId",
                                "previousId"
                            ]), this.replaceIdOnNode(n.node, t);
                            const i = this.crossOriginIframeRootIdMap.get(t);
                            i && this.patchRootIdOnNode(n.node, i);
                        }), e.data.removes.forEach((n)=>{
                            this.replaceIds(n, t, [
                                "parentId",
                                "id"
                            ]);
                        }), e.data.attributes.forEach((n)=>{
                            this.replaceIds(n, t, [
                                "id"
                            ]);
                        }), e.data.texts.forEach((n)=>{
                            this.replaceIds(n, t, [
                                "id"
                            ]);
                        }), e;
                    case m0.Drag:
                    case m0.TouchMove:
                    case m0.MouseMove:
                        return e.data.positions.forEach((n)=>{
                            this.replaceIds(n, t, [
                                "id"
                            ]);
                        }), e;
                    case m0.ViewportResize:
                        return !1;
                    case m0.MediaInteraction:
                    case m0.MouseInteraction:
                    case m0.Scroll:
                    case m0.CanvasMutation:
                    case m0.Input:
                        return this.replaceIds(e.data, t, [
                            "id"
                        ]), e;
                    case m0.StyleSheetRule:
                    case m0.StyleDeclaration:
                        return this.replaceIds(e.data, t, [
                            "id"
                        ]), this.replaceStyleIds(e.data, t, [
                            "styleId"
                        ]), e;
                    case m0.Font:
                        return e;
                    case m0.Selection:
                        return e.data.ranges.forEach((n)=>{
                            this.replaceIds(n, t, [
                                "start",
                                "end"
                            ]);
                        }), e;
                    case m0.AdoptedStyleSheet:
                        return this.replaceIds(e.data, t, [
                            "id"
                        ]), this.replaceStyleIds(e.data, t, [
                            "styleIds"
                        ]), e.data.styles?.forEach((n)=>{
                            this.replaceStyleIds(n, t, [
                                "styleId"
                            ]);
                        }), e;
                }
        }
        return !1;
    }
    replace(t, e, n, i) {
        for (const r of i)!Array.isArray(e[r]) && typeof e[r] != "number" || (Array.isArray(e[r]) ? e[r] = t.getIds(n, e[r]) : e[r] = t.getId(n, e[r]));
        return e;
    }
    replaceIds(t, e, n) {
        return this.replace(this.crossOriginIframeMirror, t, e, n);
    }
    replaceStyleIds(t, e, n) {
        return this.replace(this.crossOriginIframeStyleMirror, t, e, n);
    }
    replaceIdOnNode(t, e) {
        this.replaceIds(t, e, [
            "id",
            "rootId"
        ]), "childNodes" in t && t.childNodes.forEach((n)=>{
            this.replaceIdOnNode(n, e);
        });
    }
    patchRootIdOnNode(t, e) {
        t.type !== LG.Document && !t.rootId && (t.rootId = e), "childNodes" in t && t.childNodes.forEach((n)=>{
            this.patchRootIdOnNode(n, e);
        });
    }
}, kGf = class {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
}, wGf = class {
    constructor(t){
        this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = t.mutationCb, this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror, this.init();
    }
    init() {
        this.reset(), this.patchAttachShadow(Element, document);
    }
    addShadowRoot(t, e) {
        if (!eLi(t) || this.shadowDoms.has(t)) return;
        this.shadowDoms.add(t), this.bypassOptions.canvasManager.addShadowRoot(t);
        const n = kWf({
            ...this.bypassOptions,
            doc: e,
            mutationCb: this.mutationCb,
            mirror: this.mirror,
            shadowDomManager: this
        }, t);
        this.restoreHandlers.push(()=>n.disconnect()), this.restoreHandlers.push(wWf({
            ...this.bypassOptions,
            scrollCb: this.scrollCb,
            doc: t,
            mirror: this.mirror
        })), C0s(()=>{
            t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(t.host)), this.restoreHandlers.push(CWf({
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager
            }, t));
        }, 0);
    }
    observeAttachShadow(t) {
        const e = g7l(t), n = gLw(t);
        !e || !n || this.patchAttachShadow(n.Element, e);
    }
    patchAttachShadow(t, e) {
        const n = this;
        this.restoreHandlers.push(u7l(t.prototype, "attachShadow", function(i) {
            return function(r) {
                const s = i.call(this, r);
                return this.shadowRoot && vWf(this) && n.addShadowRoot(this.shadowRoot, e), s;
            };
        }));
    }
    reset() {
        this.restoreHandlers.forEach((t)=>{
            try {
                t();
            } catch  {}
        }), this.restoreHandlers = [], this.shadowDoms = new WeakSet, this.bypassOptions.canvasManager.resetShadowRoots();
    }
}, j7l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", CGf = typeof Uint8Array > "u" ? [] : new Uint8Array(256), eUe = 0; eUe < j7l.length; eUe++)CGf[j7l.charCodeAt(eUe)] = eUe;
$7l = class {
    reset() {}
    freeze() {}
    unfreeze() {}
    lock() {}
    unlock() {}
    snapshot() {}
    addWindow() {}
    addShadowRoot() {}
    resetShadowRoots() {}
}, TGf = class {
    constructor(t){
        this.trackedLinkElements = new WeakSet, this.styleMirror = new fGf, this.mutationCb = t.mutationCb, this.adoptedStyleSheetCb = t.adoptedStyleSheetCb;
    }
    attachLinkElement(t, e) {
        "_cssText" in e.attributes && this.mutationCb({
            adds: [],
            removes: [],
            texts: [],
            attributes: [
                {
                    id: e.id,
                    attributes: e.attributes
                }
            ]
        }), this.trackLinkElement(t);
    }
    trackLinkElement(t) {
        this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t));
    }
    adoptStyleSheets(t, e) {
        if (t.length === 0) return;
        const n = {
            id: e,
            styleIds: []
        }, i = [];
        for (const r of t){
            let s;
            this.styleMirror.has(r) ? s = this.styleMirror.getId(r) : (s = this.styleMirror.add(r), i.push({
                styleId: s,
                rules: Array.from(r.rules || CSSRule, (o, a)=>({
                        rule: tWf(o),
                        index: a
                    }))
            })), n.styleIds.push(s);
        }
        i.length > 0 && (n.styles = i), this.adoptedStyleSheetCb(n);
    }
    reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet;
    }
    trackStylesheetInLinkElement(t) {}
}, EGf = class {
    constructor(){
        this.nodeMap = new WeakMap, this.active = !1;
    }
    inOtherBuffer(t, e) {
        const n = this.nodeMap.get(t);
        return n && Array.from(n).some((i)=>i !== e);
    }
    add(t, e) {
        this.active || (this.active = !0, pLw(()=>{
            this.nodeMap = new WeakMap, this.active = !1;
        })), this.nodeMap.set(t, (this.nodeMap.get(t) || new Set).add(e));
    }
    destroy() {}
};
try {
    if (Array.from([
        1
    ], (t)=>t * 2)[0] !== 2) {
        const t = document.createElement("iframe");
        document.body.appendChild(t), Array.from = t.contentWindow?.Array.from || Array.from, document.body.removeChild(t);
    }
} catch (t) {
    console.debug("Unable to override Array.from", t);
}
kDe = zNw(), Jct.mirror = kDe, Jct.takeFullSnapshot = RLw, (function(t) {
    t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
})(IGf || (IGf = {})), xGf = 3, AGf = 5, RGf = "button,a", PGf = new Set([
    m0.Mutation,
    m0.StyleSheetRule,
    m0.StyleDeclaration,
    m0.AdoptedStyleSheet,
    m0.CanvasMutation,
    m0.Selection,
    m0.MediaInteraction
]), MGf = class {
    constructor(t, e, n = rLi){
        this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = e.timeout / 1e3, this._threshold = e.threshold / 1e3, this._scrollTimeout = e.scrollTimeout / 1e3, this._replay = t, this._ignoreSelector = e.ignoreSelector, this._addBreadcrumbEvent = n;
    }
    addListeners() {
        const t = DLw(()=>{
            this._lastMutation = xWf();
        });
        this._teardown = ()=>{
            t(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0;
        };
    }
    removeListeners() {
        this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
    }
    handleClick(t, e) {
        if (OLw(e, this._ignoreSelector) || !FLw(t)) return;
        const n = {
            timestamp: _7l(t.timestamp),
            clickBreadcrumb: t,
            clickCount: 0,
            node: e
        };
        this._clicks.some((i)=>i.node === n.node && Math.abs(i.timestamp - n.timestamp) < 1) || (this._clicks.push(n), this._clicks.length === 1 && this._scheduleCheckClicks());
    }
    registerMutation(t = Date.now()) {
        this._lastMutation = _7l(t);
    }
    registerScroll(t = Date.now()) {
        this._lastScroll = _7l(t);
    }
    registerClick(t) {
        const e = TWf(t);
        this._handleMultiClick(e);
    }
    _handleMultiClick(t) {
        this._getClicks(t).forEach((e)=>{
            e.clickCount++;
        });
    }
    _getClicks(t) {
        return this._clicks.filter((e)=>e.node === t);
    }
    _checkClicks() {
        const t = [], e = xWf();
        this._clicks.forEach((n)=>{
            !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= e && t.push(n);
        });
        for (const n of t){
            const i = this._clicks.indexOf(n);
            i > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(i, 1));
        }
        this._clicks.length && this._scheduleCheckClicks();
    }
    _generateBreadcrumbs(t) {
        const e = this._replay, n = t.scrollAfter && t.scrollAfter <= this._scrollTimeout, i = t.mutationAfter && t.mutationAfter <= this._threshold, r = !n && !i, { clickCount: s, clickBreadcrumb: o } = t;
        if (r) {
            const a = Math.min(t.mutationAfter || this._timeout, this._timeout) * 1e3, l = a < this._timeout * 1e3 ? "mutation" : "timeout", c = {
                type: "default",
                message: o.message,
                timestamp: o.timestamp,
                category: "ui.slowClickDetected",
                data: {
                    ...o.data,
                    url: _F.location.href,
                    route: e.getCurrentRoute(),
                    timeAfterClickMs: a,
                    endReason: l,
                    clickCount: s || 1
                }
            };
            this._addBreadcrumbEvent(e, c);
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
                    url: _F.location.href,
                    route: e.getCurrentRoute(),
                    clickCount: s,
                    metric: !0
                }
            };
            this._addBreadcrumbEvent(e, a);
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = UXn(()=>this._checkClicks(), 1e3);
    }
}, DGf = [
    "A",
    "BUTTON",
    "INPUT"
], B0s = ((t)=>(t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment", t))(B0s || {}), NGf = new Set([
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
]), LGf = (t)=>(e)=>{
        if (!t.isEnabled()) return;
        const n = HLw(e);
        if (!n) return;
        const i = e.name === "click", r = i ? e.event : void 0;
        i && t.clickDetector && r?.target && !r.altKey && !r.metaKey && !r.ctrlKey && !r.shiftKey && LLw(t.clickDetector, n, EWf(e.event)), rLi(t, n);
    }, OGf = {
    resource: QLw,
    paint: XLw,
    navigation: ZLw
}, cw = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, FGf = 'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(t,n){return t.f-n.f}),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort(function(t,n){return p[n.s]-p[t.s]||t.f-n.f});s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,s=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),a=s.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(s,n),O(s,a-8,r.d()),O(s,a-4,e),s}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){j.prototype.flush.call(this)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(G)return G.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J((t,n)=>{this.deflate.push(t,n)}),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}}),postMessage({id:void 0,method:"init",success:!0,response:void 0});', H7l = [
    "log",
    "warn",
    "error"
], uLi = "[Replay] ", uw = sOw(), U0s = class extends Error {
    constructor(){
        super(`Event buffer exceeded maximum size of ${L0s}.`);
    }
}, W7l = class {
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
    async addEvent(t) {
        const e = JSON.stringify(t).length;
        if (this._totalSize += e, this._totalSize > L0s) throw new U0s;
        this.events.push(t);
    }
    finish() {
        return new Promise((t)=>{
            const e = this.events;
            this.clear(), t(JSON.stringify(e));
        });
    }
    clear() {
        this.events = [], this._totalSize = 0, this.hasCheckout = !1;
    }
    getEarliestTimestamp() {
        const t = this.events.map((e)=>e.timestamp).sort()[0];
        return t ? v7l(t) : null;
    }
}, BGf = class {
    constructor(t){
        this._worker = t, this._id = 0, this._pending = new Map, this._onMessage = ({ data: e })=>{
            const n = e;
            if (typeof n.id != "number") return;
            const i = this._pending.get(n.id);
            if (!(!i || i.method !== n.method)) {
                if (this._pending.delete(n.id), !n.success) {
                    cw && uw.error("Error in compression worker: ", n.response), i.reject(new Error("Error in compression worker"));
                    return;
                }
                i.resolve(n.response);
            }
        }, this._worker.addEventListener("message", this._onMessage);
    }
    ensureReady() {
        return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise((t, e)=>{
            this._worker.addEventListener("message", ({ data: n })=>{
                n.success ? t() : e();
            }, {
                once: !0
            }), this._worker.addEventListener("error", (n)=>{
                e(n);
            }, {
                once: !0
            });
        }), this._ensureReadyPromise);
    }
    destroy() {
        cw && uw.log("Destroying compression worker"), this._worker.removeEventListener("message", this._onMessage), this._pending.forEach((t)=>t.reject(new Error("Worker destroyed"))), this._pending.clear(), this._worker.terminate();
    }
    postMessage(t, e) {
        const n = this._getAndIncrementId();
        return new Promise((i, r)=>{
            this._pending.set(n, {
                method: t,
                resolve: i,
                reject: r
            });
            try {
                this._worker.postMessage({
                    id: n,
                    method: t,
                    arg: e
                });
            } catch (s) {
                this._pending.delete(n), r(s);
            }
        });
    }
    _getAndIncrementId() {
        return this._id++;
    }
}, UGf = class {
    constructor(t){
        this._worker = new BGf(t), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1;
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
    addEvent(t) {
        const e = v7l(t.timestamp);
        (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
        const n = JSON.stringify(t);
        return this._totalSize += n.length, this._totalSize > L0s ? Promise.reject(new U0s) : this._sendEventToWorker(n);
    }
    finish() {
        return this._finishRequest();
    }
    clear() {
        this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, (t)=>{
            cw && uw.exception(t, 'Sending "clear" message to worker failed', t);
        });
    }
    getEarliestTimestamp() {
        return this._earliestTimestamp;
    }
    _sendEventToWorker(t) {
        return this._worker.postMessage("addEvent", t);
    }
    async _finishRequest() {
        const t = await this._worker.postMessage("finish");
        return this._earliestTimestamp = null, this._totalSize = 0, t;
    }
}, jGf = class {
    constructor(t){
        this._fallback = new W7l, this._compression = new UGf(t), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded();
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
    set hasCheckout(t) {
        this._used.hasCheckout = t;
    }
    set waitForCheckout(t) {
        this._used.waitForCheckout = t;
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
    addEvent(t) {
        return this._used.addEvent(t);
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
        } catch (t) {
            cw && uw.exception(t, "Failed to load the compression worker, falling back to simple buffer");
            return;
        }
        await this._switchToCompressionWorker();
    }
    async _switchToCompressionWorker() {
        const { events: t, hasCheckout: e, waitForCheckout: n } = this._fallback, i = [];
        for (const r of t)i.push(this._compression.addEvent(r));
        this._compression.hasCheckout = e, this._compression.waitForCheckout = n, this._used = this._compression;
        try {
            await Promise.all(i), this._fallback.clear();
        } catch (r) {
            cw && uw.exception(r, "Failed to add events when switching buffers.");
        }
    }
}, dLi = o_.navigator, G7l = class extends Error {
    constructor(t){
        super(`Transport returned status code ${t}`);
    }
}, j0s = class extends Error {
    constructor(t){
        super("Rate limit hit"), this.rateLimits = t;
    }
}, q7l = "__THROTTLED", $Gf = "__SKIPPED", HGf = class {
    constructor({ options: t, recordingOptions: e }){
        this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
            sessionIdlePause: KWf,
            sessionIdleExpire: YWf
        }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._requiresManualStart = !1, this._hasInitializedCoreListeners = !1, this._context = {
            errorIds: new Set,
            traceIds: new Set,
            urls: [],
            initialTimestamp: Date.now(),
            initialUrl: ""
        }, this._recordingOptions = e, this._options = t, this._debouncedFlush = l5w(()=>this._flush(), this._options.flushMinDelay, {
            maxWait: this._options.flushMaxDelay
        }), this._throttledAddEvent = _5w((s, o)=>mOw(this, s, o), 300, 5);
        const { slowClickTimeout: n, slowClickIgnoreSelectors: i } = this.getOptions(), r = n ? {
            threshold: Math.min(tGf, n),
            timeout: n,
            scrollTimeout: nGf,
            ignoreSelector: i ? i.join(",") : ""
        } : void 0;
        if (r && (this.clickDetector = new MGf(this, r)), cw) {
            const s = t._experiments;
            uw.setConfig({
                captureExceptions: !!s.captureExceptions,
                traceInternals: !!s.traceInternals
            });
        }
        this._handleVisibilityChange = ()=>{
            _F.document.visibilityState === "visible" ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks();
        }, this._handleWindowBlur = ()=>{
            const s = RKe({
                category: "ui.blur"
            });
            this._doChangeToBackgroundTasks(s);
        }, this._handleWindowFocus = ()=>{
            const s = RKe({
                category: "ui.focus"
            });
            this._doChangeToForegroundTasks(s);
        }, this._handleKeyboardEvent = (s)=>{
            qLw(this, s);
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
    handleException(t) {
        cw && uw.exception(t), this._options.onError && this._options.onError(t);
    }
    initializeSampling(t) {
        const { errorSampleRate: e, sessionSampleRate: n } = this._options, i = e <= 0 && n <= 0;
        if (this._requiresManualStart = i, !i) {
            if (this._initializeSessionForSampling(t), !this.session) {
                cw && uw.exception(new Error("Unable to initialize and create session"));
                return;
            }
            this.session.sampled !== !1 && (this.recordingMode = this.session.sampled === "buffer" && this.session.segmentId === 0 ? "buffer" : "session", cw && uw.infoTick(`Starting replay in ${this.recordingMode} mode`), this._initializeRecording());
        }
    }
    start() {
        if (this._isEnabled && this.recordingMode === "session") {
            cw && uw.log("Recording is already in progress");
            return;
        }
        if (this._isEnabled && this.recordingMode === "buffer") {
            cw && uw.log("Buffering is in progress, call `flush()` to save the replay");
            return;
        }
        cw && uw.infoTick("Starting replay in session mode"), this._updateUserActivity();
        const t = C7l({
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 1,
            allowBuffering: !1
        });
        this.session = t, this.recordingMode = "session", this._initializeRecording();
    }
    startBuffering() {
        if (this._isEnabled) {
            cw && uw.log("Buffering is in progress, call `flush()` to save the replay");
            return;
        }
        cw && uw.infoTick("Starting replay in buffer mode");
        const t = C7l({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 0,
            allowBuffering: !0
        });
        this.session = t, this.recordingMode = "buffer", this._initializeRecording();
    }
    startRecording() {
        try {
            const t = this._canvas;
            this._stopRecording = Jct({
                ...this._recordingOptions,
                ...this.recordingMode === "buffer" ? {
                    checkoutEveryNms: QWf
                } : this._options._experiments.continuousCheckout && {
                    checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
                },
                emit: u5w(this),
                ...c5w(),
                onMutation: this._onMutationHandler.bind(this),
                ...t ? {
                    recordCanvas: t.recordCanvas,
                    getCanvasManager: t.getCanvasManager,
                    sampling: t.sampling,
                    dataURLOptions: t.dataURLOptions
                } : {}
            });
        } catch (t) {
            this.handleException(t);
        }
    }
    stopRecording() {
        try {
            return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0;
        } catch (t) {
            return this.handleException(t), !1;
        }
    }
    async stop({ forceFlush: t = !1, reason: e } = {}) {
        if (this._isEnabled) {
            this._isEnabled = !1, this.recordingMode = "buffer";
            try {
                cw && uw.log(`Stopping Replay${e ? ` triggered by ${e}` : ""}`), UWf(), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), t && await this._flush({
                    force: !0
                }), this.eventBuffer?.destroy(), this.eventBuffer = null, cOw(this);
            } catch (n) {
                this.handleException(n);
            }
        }
    }
    pause() {
        this._isPaused || (this._isPaused = !0, this.stopRecording(), cw && uw.log("Pausing replay"));
    }
    resume() {
        !this._isPaused || !this._checkSession() || (this._isPaused = !1, this.startRecording(), cw && uw.log("Resuming replay"));
    }
    async sendBufferedReplayOrFlush({ continueRecording: t = !0 } = {}) {
        if (this.recordingMode === "session") return this.flushImmediate();
        const e = Date.now();
        cw && uw.log("Converting buffer to session"), await this.flushImmediate();
        const n = this.stopRecording();
        !t || !n || this.recordingMode !== "session" && (this.recordingMode = "session", this.session && (this.session.dirty = !1, this._updateUserActivity(e), this._updateSessionActivity(e), this._maybeSaveSession()), this.startRecording());
    }
    addUpdate(t) {
        const e = t();
        this.recordingMode === "buffer" || !this._isEnabled || e !== !0 && this._debouncedFlush();
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
    getSessionId(t) {
        if (!(t && this.session?.sampled === !1)) return this.session?.id;
    }
    checkAndHandleExpiredSession() {
        if (this._lastActivity && w7l(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && this.session.sampled === "session") {
            this.pause();
            return;
        }
        return !!this._checkSession();
    }
    setInitialState() {
        const t = `${_F.location.pathname}${_F.location.hash}${_F.location.search}`, e = `${_F.location.origin}${t}`;
        this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e);
    }
    throttledAddEvent(t, e) {
        const n = this._throttledAddEvent(t, e);
        if (n === q7l) {
            const i = RKe({
                category: "replay.throttled"
            });
            this.addUpdate(()=>!T7l(this, {
                    type: AGf,
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
        const t = this.lastActiveSpan || eL(), e = t && JN(t), i = (e && Yb(e).data || {})[YF];
        if (!(!e || !i || ![
            "route",
            "custom"
        ].includes(i))) return Yb(e).description;
    }
    _initializeRecording() {
        this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = oOw({
            useCompression: this._options.useCompression,
            workerUrl: this._options.workerUrl
        }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording();
    }
    _initializeSessionForSampling(t) {
        const e = this._options.errorSampleRate > 0, n = C7l({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration,
            previousSessionId: t
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: this._options.sessionSampleRate,
            allowBuffering: e
        });
        this.session = n;
    }
    _checkSession() {
        if (!this.session) return !1;
        const t = this.session;
        return NWf(t, {
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
        }) ? (this._refreshSession(t), !1) : !0;
    }
    async _refreshSession(t) {
        this._isEnabled && (await this.stop({
            reason: "refresh session"
        }), this.initializeSampling(t.id));
    }
    _addListeners() {
        try {
            _F.document.addEventListener("visibilitychange", this._handleVisibilityChange), _F.addEventListener("blur", this._handleWindowBlur), _F.addEventListener("focus", this._handleWindowFocus), _F.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (s5w(this), this._hasInitializedCoreListeners = !0);
        } catch (t) {
            this.handleException(t);
        }
        this._performanceCleanupCallback = iOw(this);
    }
    _removeListeners() {
        try {
            _F.document.removeEventListener("visibilitychange", this._handleVisibilityChange), _F.removeEventListener("blur", this._handleWindowBlur), _F.removeEventListener("focus", this._handleWindowFocus), _F.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback();
        } catch (t) {
            this.handleException(t);
        }
    }
    _doChangeToBackgroundTasks(t) {
        !this.session || DWf(this.session, {
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
        }) || (t && this._createCustomBreadcrumb(t), this.conditionalFlush());
    }
    _doChangeToForegroundTasks(t) {
        if (!this.session) return;
        if (!this.checkAndHandleExpiredSession()) {
            cw && uw.log("Document has become active, but session has expired");
            return;
        }
        t && this._createCustomBreadcrumb(t);
    }
    _updateUserActivity(t = Date.now()) {
        this._lastActivity = t;
    }
    _updateSessionActivity(t = Date.now()) {
        this.session && (this.session.lastActivity = t, this._maybeSaveSession());
    }
    _createCustomBreadcrumb(t) {
        this.addUpdate(()=>{
            this.throttledAddEvent({
                type: FE.Custom,
                timestamp: t.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: t
                }
            });
        });
    }
    _addPerformanceEntries() {
        let t = KLw(this.performanceEntries).concat(this.replayPerformanceEntries);
        if (this.performanceEntries = [], this.replayPerformanceEntries = [], this._requiresManualStart) {
            const e = this._context.initialTimestamp / 1e3;
            t = t.filter((n)=>n.start >= e);
        }
        return Promise.all(A0s(this, t));
    }
    _clearContext() {
        this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = [];
    }
    _updateInitialTimestampFromEventBuffer() {
        const { session: t, eventBuffer: e } = this;
        if (!t || !e || this._requiresManualStart || t.segmentId) return;
        const n = e.getEarliestTimestamp();
        n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n);
    }
    _popEventContext() {
        const t = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls
        };
        return this._clearContext(), t;
    }
    async _runFlush() {
        const t = this.getSessionId();
        if (!this.session || !this.eventBuffer || !t) {
            cw && uw.error("No session or eventBuffer found to flush.");
            return;
        }
        if (await this._addPerformanceEntries(), !!this.eventBuffer?.hasEvents && (await o5w(this), !!this.eventBuffer && t === this.getSessionId())) try {
            this._updateInitialTimestampFromEventBuffer();
            const e = Date.now();
            if (e - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw new Error("Session is too long, not sending replay");
            const n = this._popEventContext(), i = this.session.segmentId++;
            this._maybeSaveSession();
            const r = await this.eventBuffer.finish();
            await qWf({
                replayId: t,
                recordingData: r,
                segmentId: i,
                eventContext: n,
                session: this.session,
                timestamp: e,
                onError: (s)=>this.handleException(s)
            });
        } catch (e) {
            this.handleException(e), this.stop({
                reason: "sendReplay"
            });
            const n = ah();
            if (n) {
                const i = e instanceof j0s ? "ratelimit_backoff" : "send_error";
                n.recordDroppedEvent(i, "replay");
            }
        }
    }
    async _flush({ force: t = !1 } = {}) {
        if (!this._isEnabled && !t) return;
        if (!this.checkAndHandleExpiredSession()) {
            cw && uw.error("Attempting to finish replay event after session expired.");
            return;
        }
        if (!this.session) return;
        const e = this.session.started, i = Date.now() - e;
        this._debouncedFlush.cancel();
        const r = i < this._options.minReplayDuration, s = i > this._options.maxReplayDuration + 5e3;
        if (r || s) {
            cw && uw.log(`Session duration (${Math.floor(i / 1e3)}s) is too ${r ? "short" : "long"}, not sending replay.`), r && this._debouncedFlush();
            return;
        }
        const o = this.eventBuffer;
        o && this.session.segmentId === 0 && !o.hasCheckout && cw && uw.log("Flushing initial segment without checkout.");
        const a = !!this._flushLock;
        this._flushLock || (this._flushLock = this._runFlush());
        try {
            await this._flushLock;
        } catch (l) {
            this.handleException(l);
        } finally{
            this._flushLock = void 0, a && this._debouncedFlush();
        }
    }
    _maybeSaveSession() {
        this.session && this._options.stickySession && x0s(this.session);
    }
    _onMutationHandler(t) {
        const { ignoreMutations: e } = this._options._experiments;
        if (e?.length && t.some((o)=>{
            const a = p5w(o.target), l = e.join(",");
            return a?.matches(l);
        })) return !1;
        const n = t.length, i = this._options.mutationLimit, r = this._options.mutationBreadcrumbLimit, s = i && n > i;
        if (n > r || s) {
            const o = RKe({
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
}, z7l = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]', WGf = [
    "content-length",
    "content-type",
    "accept"
], V7l = !1, GGf = ((t)=>new qGf(t)), qGf = class {
    constructor({ flushMinDelay: t = XWf, flushMaxDelay: e = ZWf, minReplayDuration: n = iGf, maxReplayDuration: i = R7l, stickySession: r = !0, useCompression: s = !0, workerUrl: o, _experiments: a = {}, maskAllText: l = !0, maskAllInputs: c = !0, blockAllMedia: u = !0, mutationBreadcrumbLimit: d = 750, mutationLimit: h = 1e4, slowClickTimeout: p = 7e3, slowClickIgnoreSelectors: g = [], networkDetailAllowUrls: f = [], networkDetailDenyUrls: _ = [], networkCaptureBodies: b = !0, networkRequestHeaders: y = [], networkResponseHeaders: S = [], mask: k = [], maskAttributes: C = [
        "title",
        "placeholder",
        "aria-label"
    ], unmask: T = [], block: I = [], unblock: A = [], ignore: P = [], maskFn: M, beforeAddRecordingEvent: O, beforeErrorSampling: N, onError: U } = {}){
        this.name = "Replay";
        const j = b5w({
            mask: k,
            unmask: T,
            block: I,
            unblock: A,
            ignore: P
        });
        if (this._recordingOptions = {
            maskAllInputs: c,
            maskAllText: l,
            maskInputOptions: {
                password: !0
            },
            maskTextFn: M,
            maskInputFn: M,
            maskAttributeFn: ($, H, G)=>y5w({
                    maskAttributes: C,
                    maskAllText: l,
                    privacyOptions: j,
                    key: $,
                    value: H,
                    el: G
                }),
            ...j,
            slimDOMOptions: "all",
            inlineStylesheet: !0,
            inlineImages: !1,
            collectFonts: !0,
            errorHandler: ($)=>{
                try {
                    $.__rrweb__ = !0;
                } catch  {}
            },
            recordCrossOriginIframes: !!a.recordCrossOriginIframes
        }, this._initialOptions = {
            flushMinDelay: t,
            flushMaxDelay: e,
            minReplayDuration: Math.min(n, rGf),
            maxReplayDuration: Math.min(i, R7l),
            stickySession: r,
            useCompression: s,
            workerUrl: o,
            blockAllMedia: u,
            maskAllInputs: c,
            maskAllText: l,
            mutationBreadcrumbLimit: d,
            mutationLimit: h,
            slowClickTimeout: p,
            slowClickIgnoreSelectors: g,
            networkDetailAllowUrls: f,
            networkDetailDenyUrls: _,
            networkCaptureBodies: b,
            networkRequestHeaders: zWf(y),
            networkResponseHeaders: zWf(S),
            beforeAddRecordingEvent: O,
            beforeErrorSampling: N,
            onError: U,
            _experiments: a
        }, this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${z7l}` : z7l, this._recordingOptions.ignoreCSSAttributes = new Set([
            "background-image"
        ])), this._isInitialized && IXn()) throw new Error("Multiple Sentry Session Replay instances are not supported");
        this._isInitialized = !0;
    }
    get _isInitialized() {
        return V7l;
    }
    set _isInitialized(t) {
        V7l = t;
    }
    afterAllSetup(t) {
        !IXn() || this._replay || (this._setup(t), this._initialize(t));
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
    flush(t) {
        return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : (this._replay.start(), Promise.resolve()) : Promise.resolve();
    }
    getReplayId(t) {
        if (this._replay?.isEnabled()) return this._replay.getSessionId(t);
    }
    getRecordingMode() {
        if (this._replay?.isEnabled()) return this._replay.recordingMode;
    }
    _initialize(t) {
        this._replay && (this._maybeLoadFromReplayCanvasIntegration(t), this._replay.initializeSampling());
    }
    _setup(t) {
        const e = S5w(this._initialOptions, t);
        this._replay = new HGf({
            options: e,
            recordingOptions: this._recordingOptions
        });
    }
    _maybeLoadFromReplayCanvasIntegration(t) {
        try {
            const e = t.getIntegrationByName("ReplayCanvas");
            if (!e) return;
            this._replay._canvas = e.getOptions();
        } catch  {}
    }
};

}
var __wakaru_D5w_initialized = false;
export function D5w() {
if (__wakaru_D5w_initialized) return;
__wakaru_D5w_initialized = true;
for(E(), fh(), ZGf = Object.defineProperty, QGf = (t, e, n)=>(e in t) ? ZGf(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, Z7l = (t, e, n)=>QGf(t, typeof e != "symbol" ? e + "" : e, n), JGf = class {
    constructor(){
        Z7l(this, "idNodeMap", new Map), Z7l(this, "nodeMetaMap", new WeakMap);
    }
    getId(t) {
        return t ? this.getMeta(t)?.id ?? -1 : -1;
    }
    getNode(t) {
        return this.idNodeMap.get(t) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(t) {
        return this.nodeMetaMap.get(t) || null;
    }
    removeNodeFromMap(t) {
        const e = this.getId(t);
        this.idNodeMap.delete(e), t.childNodes && t.childNodes.forEach((n)=>this.removeNodeFromMap(n));
    }
    has(t) {
        return this.idNodeMap.has(t);
    }
    hasNode(t) {
        return this.nodeMetaMap.has(t);
    }
    add(t, e) {
        const n = e.id;
        this.idNodeMap.set(n, t), this.nodeMetaMap.set(t, e);
    }
    replace(t, e) {
        const n = this.getNode(t);
        if (n) {
            const i = this.nodeMetaMap.get(n);
            i && this.nodeMetaMap.set(e, i);
        }
        this.idNodeMap.set(t, e);
    }
    reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap;
    }
}, yZt = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`, Q7l = {
    map: {},
    getId () {
        return console.error(yZt), -1;
    },
    getNode () {
        return console.error(yZt), null;
    },
    removeNodeFromMap () {
        console.error(yZt);
    },
    has () {
        return console.error(yZt), !1;
    },
    reset () {
        console.error(yZt);
    }
}, typeof window < "u" && window.Proxy && window.Reflect && (Q7l = new Proxy(Q7l, {
    get (t, e, n) {
        return e === "map" && console.error(yZt), Reflect.get(t, e, n);
    }
})), Date.now().toString(), J7l = {}, SZt = ((t)=>(t[t["2D"] = 0] = "2D", t[t.WebGL = 1] = "WebGL", t[t.WebGL2 = 2] = "WebGL2", t))(SZt || {}), G0s = (t)=>W0s ? (...n)=>{
        try {
            return t(...n);
        } catch (i) {
            if (W0s && W0s(i) === !0) return ()=>{};
            throw i;
        }
    } : t, kZt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", eqf = typeof Uint8Array > "u" ? [] : new Uint8Array(256), eUe = 0; eUe < kZt.length; eUe++)eqf[kZt.charCodeAt(eUe)] = eUe;
tqf = function(t) {
    var e = new Uint8Array(t), n, i = e.length, r = "";
    for(n = 0; n < i; n += 3)r += kZt[e[n] >> 2], r += kZt[(e[n] & 3) << 4 | e[n + 1] >> 4], r += kZt[(e[n + 1] & 15) << 2 | e[n + 2] >> 6], r += kZt[e[n + 2] & 63];
    return i % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : i % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="), r;
}, eUl = new Map, tUl = (t, e, n)=>{
    if (!t || !(iUl(t, e) || typeof t == "object")) return;
    const i = t.constructor.name, r = x5w(n, i);
    let s = r.indexOf(t);
    return s === -1 && (s = r.length, r.push(t)), s;
}, nUl = (t, e, n)=>t.map((i)=>H0s(i, e, n)), iUl = (t, e)=>!![
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
    ].filter((r)=>typeof e[r] == "function").find((r)=>t instanceof e[r]), nqf = 'for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w?.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};', iqf = class {
    constructor(t){
        this.pendingCanvasMutations = new Map, this.rafStamps = {
            latestId: 0,
            invokeId: null
        }, this.shadowDoms = new Set, this.windowsSet = new WeakSet, this.windows = [], this.restoreHandlers = [], this.frozen = !1, this.locked = !1, this.snapshotInProgressMap = new Map, this.worker = null, this.lastSnapshotTime = 0, this.processMutation = (o, a)=>{
            (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(o) || this.pendingCanvasMutations.set(o, []), this.pendingCanvasMutations.get(o).push(a);
        };
        const { enableManualSnapshot: e, sampling: n = "all", win: i, recordCanvas: r, errorHandler: s } = t;
        t.sampling = n, this.mutationCb = t.mutationCb, this.mirror = t.mirror, this.options = t, s && I5w(s), (r && typeof n == "number" || e) && (this.worker = this.initFPSWorker()), this.addWindow(i), !e && G0s(()=>{
            r && n === "all" && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()), r && typeof n == "number" && this.initCanvasFPSObserver();
        })();
    }
    reset() {
        this.pendingCanvasMutations.clear(), this.restoreHandlers.forEach((t)=>{
            try {
                t();
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
    addWindow(t) {
        const { sampling: e = "all", blockClass: n, blockSelector: i, unblockSelector: r, recordCanvas: s, enableManualSnapshot: o } = this.options;
        if (!this.windowsSet.has(t)) {
            if (o) {
                this.windowsSet.add(t), this.windows.push(new WeakRef(t));
                return;
            }
            G0s(()=>{
                if (s && e === "all" && this.initCanvasMutationObserver(t, n, i, r), s && typeof e == "number") {
                    const a = YGf(t, n, i, r, !0);
                    this.restoreHandlers.push(()=>{
                        a();
                    });
                }
            })(), this.windowsSet.add(t), this.windows.push(new WeakRef(t));
        }
    }
    addShadowRoot(t) {
        this.shadowDoms.add(new WeakRef(t));
    }
    resetShadowRoots() {
        this.shadowDoms = new Set;
    }
    snapshot(t, e) {
        if (e?.skipRequestAnimationFrame) {
            this.takeSnapshot(performance.now(), !0, t);
            return;
        }
        bZt((n)=>this.takeSnapshot(n, !0, t));
    }
    initFPSWorker() {
        const t = new Worker(M5w());
        return t.onmessage = (e)=>{
            const n = e.data, { id: i } = n;
            if (this.snapshotInProgressMap.set(i, !1), !("base64" in n)) return;
            const { base64: r, type: s, width: o, height: a } = n;
            this.mutationCb({
                id: i,
                type: SZt["2D"],
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
        }, t;
    }
    initCanvasFPSObserver() {
        let t;
        if (!this.windows.length && !this.shadowDoms.size) return;
        const e = (n)=>{
            this.takeSnapshot(n, !1), t = bZt(e);
        };
        t = bZt(e), this.restoreHandlers.push(()=>{
            t && cancelAnimationFrame(t);
        });
    }
    initCanvasMutationObserver(t, e, n, i) {
        const r = YGf(t, e, n, i, !1), s = A5w(this.processMutation.bind(this), t, e, n, i), o = P5w(this.processMutation.bind(this), t, e, n, i, this.mirror);
        this.restoreHandlers.push(()=>{
            r(), s(), o();
        });
    }
    getCanvasElements(t, e, n) {
        const i = [], r = (s)=>{
            s.querySelectorAll("canvas").forEach((o)=>{
                $0s(o, t, e, n, !0) || i.push(o);
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
    takeSnapshot(t, e, n) {
        const { sampling: i, blockClass: r, blockSelector: s, unblockSelector: o, dataURLOptions: a, maxCanvasSize: l } = this.options, u = 1e3 / (i === "all" ? 2 : i || 2);
        return this.lastSnapshotTime && t - this.lastSnapshotTime < u ? !1 : (this.lastSnapshotTime = t, (n ? [
            n
        ] : this.getCanvasElements(r, s, o)).forEach((p)=>{
            const g = this.mirror.getId(p);
            if (!(!this.mirror.hasNode(p) || !p.width || !p.height || this.snapshotInProgressMap.get(g))) {
                if (this.snapshotInProgressMap.set(g, !0), !e && [
                    "webgl",
                    "webgl2"
                ].includes(p.__context)) {
                    const f = p.getContext(p.__context);
                    f?.getContextAttributes()?.preserveDrawingBuffer === !1 && f.clear(f.COLOR_BUFFER_BIT);
                }
                createImageBitmap(p).then((f)=>{
                    this.worker?.postMessage({
                        id: g,
                        bitmap: f,
                        width: p.width,
                        height: p.height,
                        dataURLOptions: a,
                        maxCanvasSize: l
                    }, [
                        f
                    ]);
                }).catch((f)=>{
                    G0s(()=>{
                        throw this.snapshotInProgressMap.delete(g), f;
                    })();
                });
            }
        }), !0);
    }
    startPendingCanvasMutationFlusher() {
        bZt(()=>this.flushPendingCanvasMutations());
    }
    startRAFTimestamping() {
        const t = (e)=>{
            this.rafStamps.latestId = e, bZt(t);
        };
        bZt(t);
    }
    flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach((t, e)=>{
            const n = this.mirror.getId(e);
            this.flushPendingCanvasMutationFor(e, n);
        }), bZt(()=>this.flushPendingCanvasMutations());
    }
    flushPendingCanvasMutationFor(t, e) {
        if (this.frozen || this.locked) return;
        const n = this.pendingCanvasMutations.get(t);
        if (!n || e === -1) return;
        const i = n.map((s)=>{
            const { type: o, ...a } = s;
            return a;
        }), { type: r } = n[0];
        this.mutationCb({
            id: e,
            type: r,
            commands: i
        }), this.pendingCanvasMutations.delete(t);
    }
};
try {
    if (Array.from([
        1
    ], (t)=>t * 2)[0] !== 2) {
        const t = document.createElement("iframe");
        document.body.appendChild(t), Array.from = t.contentWindow?.Array.from || Array.from, document.body.removeChild(t);
    }
} catch (t) {
    console.debug("Unable to override Array.from", t);
}
C5w(), (function(t) {
    t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
})(rqf || (rqf = {})), rUl = {
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
}, sqf = "ReplayCanvas", hLi = 1280, oqf = ((t = {})=>{
    const [e, n] = t.maxCanvasSize || [], i = {
        quality: t.quality || "medium",
        enableManualSnapshot: t.enableManualSnapshot,
        maxCanvasSize: [
            e ? Math.min(e, hLi) : hLi,
            n ? Math.min(n, hLi) : hLi
        ]
    };
    let r;
    const s = new Promise((o)=>r = o);
    return {
        name: sqf,
        getOptions () {
            const { quality: o, enableManualSnapshot: a, maxCanvasSize: l } = i;
            return {
                enableManualSnapshot: a,
                recordCanvas: !0,
                getCanvasManager: (c)=>{
                    const u = new iqf({
                        ...c,
                        enableManualSnapshot: a,
                        maxCanvasSize: l,
                        errorHandler: (d)=>{
                            try {
                                typeof d == "object" && (d.__rrweb__ = !0);
                            } catch  {}
                        }
                    });
                    return r(u), u;
                },
                ...rUl[o] || rUl.medium
            };
        },
        async snapshot (o, a) {
            (await s).snapshot(o, a);
        }
    };
}), aqf = oqf;

}
