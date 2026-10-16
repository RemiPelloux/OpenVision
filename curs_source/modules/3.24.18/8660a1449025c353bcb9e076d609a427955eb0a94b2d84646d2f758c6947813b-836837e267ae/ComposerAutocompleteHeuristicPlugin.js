import { yaf } from "./ComposerAutocomplete.css";
import { BUk, kaf } from "./ComposerAutocompleteHeuristics.js";
import { UUk, waf } from "./ComposerViewportSnapshotManager.js";
import { BPg, U9e, vhs } from "./GhostTextNode.js";
import { B0l, F0l, OPn, U0l, ogs } from "./GhostTextUtils.js";
import { cI, t1 } from "./LexicalComposerContext.js";
import { Xat } from "./MentionNode.js";
import { Gr, YB, dTe } from "./Ycg.js";
import { Afs, Rfs, UEl, baf } from "./autocompleteUtils.js";
import { EB } from "./getIconClasses.js";
import { Ak, Au, Cc, JGe, M6e, Sb, Xg, ku, mGr, nS, pR, q2e, qyi } from "./ipa.js";
import { Ole } from "./solidApplicationSetting.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { Sz, eC, to } from "./types_4.js";
import { fn, rt } from "./uri.js";
import { Cn, On, pi, vt } from "./ze.js";
var Caf, Taf, Eaf, jEl, Iaf, $El, xaf, Aaf;
export { $El, Aaf, Caf, Eaf, Iaf, Taf, jEl, xaf };
var __wakaru_jUk_initialized = false;
export function jUk() {
if (__wakaru_jUk_initialized) return;
__wakaru_jUk_initialized = true;
"use strict";
E(), pi(), cI(), Ak(), fn(), EB(), Ole(), vo(), Xat(), Sz(), UEl(), yaf(), BUk(), UUk(), vhs(), U0l(), Caf = new Set([
    "css",
    "scss",
    "sass",
    "less",
    "jsx",
    "tsx",
    "mjs",
    "cjs",
    "json",
    "mdx",
    "html",
    "htm",
    "yaml",
    "yml",
    "xml",
    "svg",
    "png",
    "jpg",
    "jpeg",
    "gif",
    "bmp",
    "ico",
    "csv",
    "pdf",
    "toml",
    "ini",
    "env",
    "txt",
    "map",
    "sql",
    "vue",
    "wasm",
    "proto",
    "java",
    "class",
    "conf",
    "lock",
    "cpp",
    "hpp",
    "cxx",
    "hxx",
    "kts",
    "svelte",
    "astro"
]), Taf = (t, e)=>{
    const n = t.match(/([A-Za-z0-9_-]+)\.([a-z]{3,5})$/);
    if (!n) return !1;
    const i = n[2];
    return i === e.toLowerCase() && Caf.has(i);
}, Eaf = 100, jEl = 2e5, Iaf = "composer_autocomplete_lsp_killswitch", $El = (t)=>{
    const e = t.match(/[A-Za-z0-9_-]+$/);
    return e ? e[0] : "";
}, xaf = (t, e)=>{
    const n = Math.min(t.length, e.length), i = t.toLowerCase(), r = e.toLowerCase();
    for(let s = n; s > 0; s--)if (i.slice(-s) === r.slice(0, s)) return s;
    return 0;
}, Aaf = (t)=>{
    const e = Gr(), [n] = YB(e.storageService, "composerAutocompleteHeuristicsEnabled");
    if (!vt(()=>n() === !0)()) return null;
    const [r] = t1();
    let s = !1, o = !1, a = !1, l = "";
    const c = new waf((G)=>!s || e.cursorIgnoreService.shouldBlockUriFromReading(G));
    let u, d;
    const h = ()=>{
        d && (d.dispose(), d = void 0);
        const G = e.codeEditorService.getActiveCodeEditor?.();
        G && (d = G.onDidScrollChange(()=>{
            o === !0 && (u !== void 0 && (clearTimeout(u), u = void 0), u = window.setTimeout(()=>{
                const q = {
                    codeEditorService: e.codeEditorService,
                    editorService: e.editorService,
                    workspaceContextService: e.workspaceContextService,
                    modelService: e.modelService
                };
                c.buildOnFocus(q, 50, 5);
            }, 150));
        }));
    }, p = ()=>{
        const G = {
            codeEditorService: e.codeEditorService,
            editorService: e.editorService,
            workspaceContextService: e.workspaceContextService,
            modelService: e.modelService
        };
        c.buildOnFocus(G, 50, 5);
    };
    On(()=>{
        a = !0;
    }), e.cursorIgnoreService.addOnCursorIgnoreLoadedCallback(()=>{
        a || (s = !0, o && p());
    }), Cn(()=>{
        const G = e.cursorIgnoreService.onDidCursorIgnoreChange(()=>{
            c.clearSnapshots(), ogs(r), l = "", s && o && p();
        });
        On(()=>{
            G.dispose();
        });
    }), Cn(()=>{
        const G = e.editorService.onWillOpenEditor(()=>{
            p();
        });
        On(()=>{
            G.dispose();
        });
    }), Cn(()=>{
        const G = e.editorService.onDidActiveEditorChange(()=>{
            e.experimentService?.checkFeatureGate?.(Iaf, {
                disableExposureLog: !1
            }) === !0 || c.enrichActiveWithOutline({
                codeEditorService: e.codeEditorService,
                editorService: e.editorService,
                outlineService: e.outlineService
            }), h();
        });
        On(()=>{
            G.dispose();
        });
    }), Cn(()=>{
        h();
    });
    let g, f = !1, _ = !1, b = new Map;
    const y = new Set, S = (G)=>{
        if (G.length < 6 || /^[A-Z][a-z]+$/.test(G)) return !1;
        const q = G.includes("_") || G.includes("-"), K = /[a-z][A-Z]/.test(G), V = /^[A-Z][A-Z0-9_-]*$/.test(G);
        return q || K || V;
    }, k = (G)=>{
        if (!S(G)) return;
        const q = G.toLowerCase();
        if (y.has(q)) return;
        y.add(q);
        const K = q.slice(0, 3);
        if (K.length === 3) {
            const V = b.get(K) ?? [];
            V.length < Afs && V.push(G), b.set(K, V);
        }
    }, C = (G)=>{
        const q = G.length;
        let K = G;
        q > jEl && (K = G.slice(q - jEl));
        const V = Rfs(K, S);
        b = new Map(V), y.clear();
        for (const Y of b.values())for (const J of Y)y.add(J.toLowerCase());
    };
    Cn(()=>{
        f = t.isMentionsMenuOpen();
    }), Cn(()=>{
        _ = t.isGenerating();
    });
    const T = ()=>F0l(r), I = ()=>{
        ogs(r), l = "";
    }, A = ()=>B0l(r), P = ()=>{
        const G = Xg();
        for (const q of G.getAllTextNodes())U9e(q) && q.remove();
    }, M = (G, q, K)=>{
        const V = Xg();
        let Y;
        for (const re of V.getAllTextNodes())if (U9e(re)) {
            Y = re;
            break;
        }
        if (G.trim().length === 0) {
            Y && Y.remove();
            return;
        }
        if (Y && Y.getTextContent() === G) return;
        P();
        const Q = BPg(structuredClone(G));
        K && Q.setCanonicalSuggestion(structuredClone(K)), q && Q.setPendingFileMention({
            name: q.name,
            relativePath: q.relativePath,
            uri: q.uri,
            typedFragmentLength: q.typedFragmentLength
        });
        let te = !1;
        const ee = ku();
        if (Cc(ee) && ee.isCollapsed()) {
            const re = ee.anchor.getNode();
            Au(re) && (re.insertAfter(Q), te = !0);
        }
        if (te) {
            l = A();
            try {
                const re = q ? "file" : "symbol";
                e.analyticsService.trackEvent("composer.autocomplete.heuristic.appeared", {
                    type: re,
                    suggestionLength: G.length,
                    fragmentLength: $El(l).length
                });
            } catch  {}
        }
    }, O = ()=>{
        let G = !1;
        return r.update(()=>{
            const K = Xg().getAllTextNodes();
            let V;
            const Y = [];
            for (const ie of K)U9e(ie) ? V = ie : Y.push(ie);
            const J = ku();
            if (!Cc(J) || J.isCollapsed() !== !0 || Y.length === 0) {
                V && (V.remove(), l = "");
                return;
            }
            const Q = J.anchor.getNode(), te = Y[Y.length - 1];
            if (Q !== te || J.anchor.offset !== te.getTextContent().length) {
                V && (V.remove(), l = "");
                return;
            }
            if (!V) return;
            const ee = A(), re = l;
            if (ee.length >= re.length) {
                const ie = ee.slice(re.length);
                if (ie.length === 0) {
                    G = !0;
                    return;
                }
                if (ie.length > 0) {
                    const oe = V.getTextContent(), se = ie.toLowerCase();
                    if (oe.toLowerCase().startsWith(se)) {
                        const ce = oe.slice(ie.length);
                        ce.length === 0 ? V.remove() : V.setTextContent(ce), l = ee, G = !0;
                        return;
                    }
                }
            }
            V.remove(), l = "";
        }, {
            tag: OPn
        }), G;
    }, N = ()=>{
        g !== void 0 && (clearTimeout(g), g = void 0), g = window.setTimeout(()=>{
            let G = !1, q = !1, K = "", V = "";
            if (r.getEditorState().read(()=>{
                const J = ku();
                if (Cc(J) && J.isCollapsed()) {
                    const te = Xg().getAllTextNodes(), ee = te.filter((oe)=>!U9e(oe)), re = ee.length > 0 ? ee[ee.length - 1] : null, ie = J.anchor.getNode();
                    if (re && Au(ie)) {
                        G = ie === re && J.anchor.offset === re.getTextContent().length, V = re.getTextContent();
                        const oe = V.match(/[A-Za-z0-9_-]+$/);
                        K = oe ? oe[0] : "";
                    }
                    q = te.some((oe)=>U9e(oe));
                }
            }), !G || f || _ || q || K.length === 0 || !s || Taf(V, K)) return;
            const Y = kaf(K, {
                vs: e,
                snapshotProvider: c,
                promptBuckets: b
            });
            Y && r.update(()=>{
                M(Y.suffix, Y.meta, Y.canonical);
            }, {
                tag: OPn
            });
        }, Eaf);
    };
    Cn(()=>{
        const G = r.registerUpdateListener(({ tags: q })=>{
            if (q.has(OPn)) return;
            O() || N(), r.getEditorState().read(()=>{
                const V = ku();
                if (Cc(V) && V.isCollapsed()) {
                    const Y = V.anchor.getNode();
                    if (Au(Y)) {
                        const J = Y.getTextContent(), Q = V.anchor.offset, te = J.slice(0, Q), ee = te.slice(-1);
                        if (/\s|[.,;:!?()\[\]{}]/.test(ee)) {
                            const ie = te.slice(0, -1).match(/[A-Za-z0-9_-]+$/), oe = ie ? ie[0] : "";
                            oe.length > 0 && k(oe);
                        }
                    }
                }
            });
        });
        On(G);
    });
    const U = r.registerCommand(qyi, ()=>{
        o = !0;
        const G = {
            codeEditorService: e.codeEditorService,
            editorService: e.editorService,
            workspaceContextService: e.workspaceContextService,
            modelService: e.modelService
        };
        return c.buildOnFocus(G, 50, 5), setTimeout(()=>{
            C(A());
        }, 0), h(), !1;
    }, Sb), j = r.registerCommand(JGe, (G)=>{
        const q = T();
        return q ? (r.update(()=>{
            const K = q.getTextContent(), V = q.getPendingFileMention?.(), Y = V ? "file" : "symbol", J = $El(l).length;
            try {
                e.analyticsService.trackEvent("composer.autocomplete.heuristic.accepted", {
                    type: Y,
                    suggestionLength: K.length,
                    fragmentLength: J
                });
            } catch  {}
            const Q = Xg();
            if (V !== void 0 && V.name !== void 0) {
                const se = Q.getAllTextNodes().filter((ce)=>!U9e(ce)), le = se[se.length - 1];
                if (Au(le)) {
                    const ce = le.getTextContent(), ae = xaf(ce, V.name);
                    ae > 0 && ce.length >= ae && le.setTextContent(ce.slice(0, ce.length - ae)), q.remove();
                    const de = V.uri ? rt.revive(V.uri) : void 0, he = new eC(V.name, void 0, to.file, 10, de ? {
                        uri: de
                    } : void 0, void 0, V.relativePath), ge = de ? pR(e.modelService, e.languageService, de) : [
                        "file-icon"
                    ], pe = V.relativePath ?? V.name, ve = dTe(V.name, void 0, void 0, to.file, void 0, void 0, he, void 0, pe);
                    ve.metadata ? ve.metadata.iconClasses = ge : ve.metadata = {
                        iconClasses: ge
                    }, le.insertAfter(ve);
                    const fe = nS(" ");
                    ve.insertAfter(fe), fe.select(), P();
                    return;
                }
            }
            const te = q.getCanonicalSuggestion();
            if (te !== void 0) {
                let oe = q.getPreviousSibling(), se = null;
                for(; oe;){
                    if (U9e(oe)) {
                        oe = oe.getPreviousSibling();
                        continue;
                    }
                    if (Au(oe)) {
                        se = oe;
                        break;
                    }
                    oe = oe.getPreviousSibling();
                }
                const le = q.getTextContent();
                let ce = "";
                if (se) {
                    const de = se.getTextContent().match(/[A-Za-z0-9_-]+$/);
                    ce = de ? de[0] : "";
                }
                if (baf(ce, le, te) && se) {
                    const de = se.getTextContent();
                    if (de.length >= ce.length) {
                        se.setTextContent(de.slice(0, de.length - ce.length));
                        const he = nS(te);
                        q.replace(he), P();
                        const ge = he.getTextContent().length;
                        he.select(ge, ge);
                        return;
                    }
                }
            }
            const ee = q.getTextContent(), re = nS(ee);
            q.replace(re), P();
            const ie = re.getTextContent().length;
            re.select(ie, ie);
        }), G.preventDefault(), G.stopPropagation(), r.focus(), N(), !0) : !1;
    }, q2e), $ = r.registerCommand(M6e, (G)=>T() ? (I(), G.preventDefault(), G.stopPropagation(), !0) : !1, Sb), H = r.registerCommand(mGr, ()=>(o = !1, u !== void 0 && (clearTimeout(u), u = void 0), I(), b.clear(), y.clear(), !1), Sb);
    return On(()=>{
        j(), $(), U(), H(), g !== void 0 && clearTimeout(g), u !== void 0 && clearTimeout(u), d && (d.dispose(), d = void 0), I();
    }), Cn(()=>{
        (t.isMentionsMenuOpen() || t.isGenerating()) && I();
    }), null;
};

}
