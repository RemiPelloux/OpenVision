import { $i, Pl, oa, yt } from "./A3u.js";
import { Se, jn, mNt, ns, si } from "./HVr.js";
import { pKg } from "./I0l.js";
import { Ta_, ZNh } from "./bridge-controller.js";
import { So } from "./constants_8.js";
import { Ma_ } from "./cursorIconStyles.js";
import { en } from "./dom_2.js";
import { m1 } from "./editorOptions.js";
import { R_t, Zrv, udf } from "./f0s.js";
import { kpu, mi } from "./index_188.js";
import { AC, foh } from "./index_201.js";
import { Pa_ } from "./katex.css";
import { kl, pc } from "./language.js";
import { Ky } from "./languages.js";
import { Ra_, n2h } from "./native-app-drag-data-transfer-policy.js";
import { An, HJ, Jt, Kc, Rn, Sv, dS, lr, mS, nw, qn, t2 } from "./qIc.js";
import { Vs, dTe } from "./solidContext.js";
import { yv } from "./tracing_2.js";
import { x } from "./tslib.es6.js";
import { Ftr, jIo, snt } from "./use-now.react.js";
import { DNh, Dtr, FNh, GBn, HNh, LNh, MNh, Mtr, NIo, NNh, OIo, ONh, PNh, Sqt, WNh, kqt, o0t, yqt } from "./vscodeCodeLineTokenizer.js";
import { FIo, GNh, _a_ } from "./vscodeCodeTokenizerProvider.react.js";
import { $e } from "./web.js";
import { a1e } from "./webConstants.js";
import { lo, on } from "./window.js";
import { Rtr, WBn } from "./workbenchWorkspaceInstanceService.js";
import { Atr, Iq } from "./workspace-context.react.js";
import { Yv, lL } from "./workspaceCollectionService.js";
import Eqt from "./react-runtime/react/esm-index-production.js";
import { useState as Ia_ } from "./react-runtime/react/esm-index-production.js";
import { flushSync as Ka_ } from "./react-runtime/react-dom/esm-index-production.js";
import { c as QNh } from "./react-runtime/react/esm-compiler-runtime-production.js";
import Ya_ from "./react-runtime/react-dom/esm-client-production.js";
import { useCallback as da_ } from "./react-runtime/react/esm-index-production.js";
import { jsx as e2h } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useSyncExternalStore as ha_ } from "./react-runtime/react/esm-index-production.js";
import { useMemo as ia_ } from "./react-runtime/react/esm-index-production.js";
import { jsx as pa_ } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as ra_ } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useEffect as xa_ } from "./react-runtime/react/esm-index-production.js";
function aZ({ services: e, children: t }) {
    const n = ia_(()=>({
            ...e
        }), [
        e
    ]);
    return ra_(Atr.Provider, {
        value: n,
        children: t
    });
}
function sa_(e, t) {
    return [
        ...new Set(e)
    ].filter((n)=>n > 0 && n <= t).sort((n, i)=>n - i).slice(0, PNh);
}
function ENh(e) {
    const t = /\S/.exec(e);
    return t ? t.index + 1 : 0;
}
function oa_(e, t) {
    let n = ENh(e[t - 1] ?? "");
    const i = [];
    let r = 0;
    const s = Math.max(0, t - 1 - NNh);
    for(let o = t - 2; n > 1 && o >= s && i.length < LNh; o--){
        const a = e[o], c = ENh(a);
        if (c !== 0 && !(c >= n) && !(a.length > kqt)) {
            if (r + a.length > ONh) break;
            i.push(a), r += a.length, n = c;
        }
    }
    return i.reverse();
}
function aa_(e, t) {
    if (t.length === 0) return [];
    const n = [];
    let i = t[0], r = i, s = [
        i
    ];
    const o = ()=>{
        n.push({
            startLineNumber: i,
            endLineNumber: r,
            requestedLineNumbers: s,
            heuristicPrefixLines: oa_(e, i)
        });
    };
    for(let a = 1; a < t.length; a++){
        const c = t[a];
        if (c - r <= FNh) {
            r = c, s.push(c);
            continue;
        }
        o(), i = c, r = c, s = [
            c
        ];
    }
    return o(), n;
}
function ca_(e, t) {
    return e.length <= kqt && t.tokenizedLines < GBn && t.tokenizedChars + e.length <= Sqt;
}
function xNh(e, t) {
    return ca_(e, t) ? (t.tokenizedLines++, t.tokenizedChars += e.length, !0) : !1;
}
function INh(e) {
    return e.tokenizedLines >= GBn || e.tokenizedChars >= Sqt;
}
function LIo(e) {
    return async ({ language: t, text: n, lineNumbers: i })=>{
        if (i.length === 0) return new Map;
        const r = n.split(/\r\n|\r|\n/), s = sa_(i, r.length);
        if (s.length === 0) return new Map;
        const o = Dtr(t, e), a = Ky.get(o) ?? await Ky.getOrCreate(o);
        if (!a) return new Map;
        const c = new Map, l = {
            tokenizedLines: 0,
            tokenizedChars: 0
        }, u = aa_(r, s);
        for (const h of u){
            let p = a.getInitialState();
            for (const f of h.heuristicPrefixLines){
                if (!xNh(f, l)) {
                    if (INh(l)) return c;
                    continue;
                }
                await OIo.yieldIfExhausted(), p = a.tokenizeEncoded(f, !0, p).endState;
            }
            const g = new Set(h.requestedLineNumbers);
            for(let f = h.startLineNumber; f <= h.endLineNumber; f++){
                const v = r[f - 1];
                if (!xNh(v, l)) {
                    if (INh(l)) return c;
                    continue;
                }
                await OIo.yieldIfExhausted();
                const b = a.tokenizeEncoded(v, !0, p);
                g.has(f) && c.set(f, Mtr(v, b.tokens, e)), p = b.endState;
            }
        }
        return c;
    };
}
function ua_(e) {
    return {
        languageStatus (t) {
            const n = NIo(t, e);
            return n === void 0 ? "no-grammar" : Ky.get(n) ? "loaded" : "unloaded";
        },
        async loadLanguage (t) {
            const n = NIo(t, e);
            return n === void 0 || await Ky.getOrCreate(n) !== null;
        },
        onDidLoadLanguage (t) {
            const n = Ky.onDidChange((i)=>{
                i.changedLanguages.length > 0 && t();
            });
            return ()=>n.dispose();
        },
        tokenizeSync (t, n) {
            if (t.length > Sqt) return o0t(t);
            const i = DNh(n, e);
            if (!i) return o0t(t);
            try {
                const r = t.split(yqt), s = [];
                let o = i.getInitialState();
                for (const a of r){
                    if (s.length >= GBn) {
                        s.push([
                            {
                                content: a,
                                col: 0
                            }
                        ]);
                        continue;
                    }
                    const c = MNh(i, a, o, e);
                    s.push(c.tokens), o = c.endState;
                }
                return s;
            } catch  {
                return o0t(t);
            }
        },
        createIncrementalTokenizer (t) {
            return new HNh(e, Math.max(1, t?.maxCachedTexts ?? WNh));
        },
        lineTokenizer: LIo(e)
    };
}
function ma_(e) {
    const t = Ky.getColorMap() ?? GNh;
    let n = FIo.get(t);
    n === void 0 && (n = new WeakMap, FIo.set(t, n));
    let i = n.get(e);
    return i === void 0 && (i = ua_(e), n.set(e, i)), i;
}
function ga_(e) {
    const t = Ky.onDidChange((n)=>{
        n.changedColorMap && e();
    });
    return ()=>t.dispose();
}
function fa_(e) {
    const t = da_(()=>ma_(e), [
        e
    ]);
    return ha_(ga_, t, t);
}
function va_({ languageService: e, children: t }) {
    const n = fa_(e);
    return pa_(pKg, {
        tokenizer: n,
        children: t
    });
}
function GIo(e) {
    const t = QNh(7), { children: n } = e, [i, r] = Ia_(Aa_), { schedule: s } = R_t();
    let o, a;
    t[0] !== i || t[1] !== s ? (o = ()=>{
        s(()=>r(Date.now()), jIo - i % jIo);
    }, a = [
        i,
        s
    ], t[0] = i, t[1] = s, t[2] = o, t[3] = a) : (o = t[2], a = t[3]), xa_(o, a);
    let c;
    return t[4] !== n || t[5] !== i ? (c = e2h(Ftr.Provider, {
        value: i,
        children: n
    }), t[4] = n, t[5] = i, t[6] = c) : c = t[6], c;
}
function Aa_() {
    return Date.now();
}
function La_() {
    try {
        const e = Zrv(), t = on.document.getElementById(Btr);
        if (t) {
            t.textContent = e;
            return;
        }
        dS(on.document.head, (n)=>{
            n.id = Btr, n.textContent = e;
        });
    } catch (e) {
        console.error("[uiPackageStyles] Failed to generate token CSS:", e);
    }
}
function Na_() {
    on.document.getElementById(Btr) || La_();
}
function Oa_() {
    if (!on.document.getElementById(YIo)) try {
        dS(on.document.head, (e)=>{
            e.id = YIo, e.textContent = kpu;
        });
    } catch (e) {
        console.error("[uiPackageStyles] Failed to inject component styles:", e);
    }
}
function Fa_() {
    if (!on.document.getElementById(XIo)) try {
        dS(on.document.head, (e)=>{
            e.id = XIo, e.textContent = foh;
        });
    } catch (e) {
        console.error("[uiPackageStyles] Failed to inject cursor-ui component styles:", e);
    }
}
function Ba_() {
    if (!on.document.getElementById(ZIo)) try {
        dS(on.document.head, (e)=>{
            e.id = ZIo, e.textContent = ".monaco-workbench :is(.ui-button, .ui-icon-button):focus{outline:none;}.monaco-workbench :is(.ui-button, .ui-icon-button):focus-visible{outline:2px solid var(--cursor-stroke-focused);outline-offset:2px;}.monaco-workbench .ui-input-group :is(.ui-input-group__input, .ui-input-group__textarea):focus{outline:none;}";
        });
    } catch  {}
}
function Ua_() {
    if (!on.document.getElementById(QIo)) try {
        dS(on.document.head, (e)=>{
            e.id = QIo, e.textContent = s2h;
        });
    } catch  {}
}
function $a_() {
    const e = on.document.documentElement;
    e.style.getPropertyValue(JIo).trim().length === 0 && e.style.setProperty(JIo, `${Date.now() % 6e4}ms`);
}
function YBn() {
    eAo || (eAo = !0, $a_(), Oa_(), Fa_(), Na_(), Ua_(), Ba_());
}
var YIo, XIo, Btr, ZIo, QIo, JIo, eAo, s2h, tAo, o2h;
function Xa_(e) {
    if (Utr) {
        e();
        return;
    }
    Utr = !0;
    try {
        Ka_(e);
    } finally{
        Utr = !1;
    }
}
function Za_(e, t) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    const n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (const r of n)if (!(typeof e[r] == "function" && typeof t[r] == "function") && e[r] !== t[r]) return !1;
    return !0;
}
function Qa_(e) {
    if (e === void 0) return;
    let t = nAo.get(e);
    return t === void 0 && (t = Ja_(e), t !== void 0 && nAo.set(e, t)), t;
}
function Ja_(e) {
    let t;
    try {
        e.invokeFunction((n)=>{
            t = {
                workspace: n.get(WBn).workbenchWorkspace,
                workspaceCollectionService: n.get(lL)
            };
        });
    } catch  {
        return;
    }
    return t;
}
function ec_(e) {
    if (e === void 0) return;
    let t = iAo.get(e);
    if (t === void 0) {
        try {
            e.invokeFunction((n)=>{
                t = n.get(pc);
            });
        } catch  {
            return;
        }
        t !== void 0 && iAo.set(e, t);
    }
    return t;
}
function tc_(e, t) {
    ns(e), t2(e, {
        extra: {
            componentStack: t.componentStack
        }
    });
}
function nc_(e, t, n) {
    const i = ec_(t), r = i !== void 0 ? Eqt.createElement(va_, {
        languageService: i,
        children: e
    }) : e, s = Eqt.createElement(GIo, {
        children: r
    }), o = Qa_(t), a = o !== void 0 ? Eqt.createElement(aZ, {
        services: o,
        children: s
    }) : s, c = n !== void 0 ? Eqt.createElement(HJ, {
        root: n,
        children: a
    }) : a;
    return mNt ? Eqt.createElement(udf, {
        policy: n2h,
        children: c
    }) : c;
}
var a2h, Utr, nAo, iAo, fG;
export { $a_, Aa_, Ba_, Btr, ENh, Fa_, GIo, INh, JIo, Ja_, LIo, La_, Na_, Oa_, QIo, Qa_, Ua_, Utr, XIo, Xa_, YBn, YIo, ZIo, Za_, a2h, aZ, aa_, ca_, eAo, ec_, fG, fa_, ga_, iAo, ma_, nAo, nc_, o2h, oa_, s2h, sa_, tAo, tc_, ua_, va_, xNh };
var __wakaru_Tqt_initialized = false;
export function Tqt() {
if (__wakaru_Tqt_initialized) return;
__wakaru_Tqt_initialized = true;
"use strict";
x(), AC(), mi(), en(), nw(), lo(), So(), Se(), m1(), Ma_(), Pa_(), YIo = "anysphere-ui-styles", XIo = "anysphere-cursor-ui-styles", Btr = "anysphere-ui-tokens", ZIo = "cursor-ui-button-focus", QIo = "cursor-icon-base", JIo = "--cursor-spinner-sync-epoch-ms", eAo = !1, s2h = `@layer anysphere.scss {
	.cursor-icon {
		font: normal normal normal 16px / 1 cursor-icons;
		display: inline-block;
		text-decoration: none;
		text-rendering: auto;
		text-align: center;
		text-transform: none;
		-webkit-font-smoothing: var(--cursor-font-smoothing-webkit, antialiased);
		-moz-osx-font-smoothing: var(--cursor-font-smoothing-moz, grayscale);
		user-select: none;
		-webkit-user-select: none;
	}
	.cursor-icon::before { content: var(--cursor-icon-content); }
	.cursor-icon-modifier-spin { animation: cursor-icon-spin var(--cursor-spinner-sync-duration, 1s) linear infinite; }
	.cursor-icon-modifier-disabled { opacity: 0.4; }
	.cursor-icon-modifier-hidden { visibility: hidden; }
	@keyframes cursor-icon-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
	.ui-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: inherit;
		line-height: 1;
		vertical-align: middle;
		width: var(--icon-size);
		height: var(--icon-size);
		--icon-size: 0.75rem;
		--icon-weight: 400;
	}
	.ui-icon[data-size="xs"] { --icon-size: 0.625rem; }
	.ui-icon[data-size="sm"] { --icon-size: 0.75rem; }
	.ui-icon[data-size="base"] { --icon-size: 0.875rem; }
	.ui-icon[data-size="lg"] { --icon-size: 1rem; }
	.ui-icon[data-size="xl"] { --icon-size: 1.25rem; }
	.ui-icon[data-size="2xl"] { --icon-size: 1.5rem; }
	.ui-icon.cursor-icon { font-size: var(--icon-size); font-weight: var(--icon-weight); }
	.ui-icon[data-color="primary"] { color: var(--cursor-icon-primary); }
	.ui-icon[data-color="secondary"] { color: var(--cursor-icon-secondary); }
	.ui-icon[data-color="tertiary"] { color: var(--cursor-icon-tertiary); }
	.ui-icon[data-color="quaternary"] { color: var(--cursor-icon-quaternary); }
	.ui-icon[data-color="cyan"] { color: var(--cursor-icon-cyan-primary); }
	.ui-icon[data-color="blue"] { color: var(--cursor-icon-blue-primary); }
	.ui-icon[data-color="red"] { color: var(--cursor-icon-red-primary); }
	.ui-icon[data-color="green"] { color: var(--cursor-icon-green-primary); }
	.ui-icon[data-color="yellow"] { color: var(--cursor-icon-yellow-primary); }
	.ui-icon[data-color="magenta"] { color: var(--cursor-icon-magenta-primary); }
	.ui-icon[data-color="purple"] { color: var(--cursor-icon-purple-primary); }
	.ui-icon[data-color="accent"] { color: var(--cursor-icon-accent-primary); }
}`, tAo = [
    [
        "keyword",
        [
            "keyword"
        ]
    ],
    [
        "string",
        [
            "string"
        ]
    ],
    [
        "function",
        [
            "entity.name.function",
            "support.function",
            "variable.function"
        ]
    ],
    [
        "number",
        [
            "constant.numeric"
        ]
    ],
    [
        "comment",
        [
            "comment"
        ]
    ],
    [
        "constant",
        [
            "constant"
        ]
    ],
    [
        "parameter",
        [
            "variable.parameter",
            "variable"
        ]
    ],
    [
        "punctuation",
        [
            "punctuation",
            "punctuation.definition",
            "meta.brace"
        ]
    ],
    [
        "link",
        [
            "markup.underline.link"
        ]
    ],
    [
        "string-expression",
        [
            "string"
        ]
    ],
    [
        "tag",
        [
            "entity.name.tag"
        ]
    ],
    [
        "attribute",
        [
            "entity.other.attribute-name"
        ]
    ],
    [
        "property",
        [
            "variable.other.property",
            "support.variable.property"
        ]
    ],
    [
        "type",
        [
            "entity.name.type",
            "support.type"
        ]
    ],
    [
        "variable",
        [
            "variable.other.readwrite",
            "variable"
        ]
    ],
    [
        "class",
        [
            "entity.name.class",
            "support.class"
        ]
    ],
    [
        "language-variable",
        [
            "variable.language"
        ]
    ],
    [
        "constant-variable",
        [
            "variable.other.constant"
        ]
    ]
], o2h = new Set([
    "parameter",
    "punctuation"
]);

}
var __wakaru_Ay_initialized = false;
export function Ay() {
if (__wakaru_Ay_initialized) return;
__wakaru_Ay_initialized = true;
"use strict";
x(), $e(), $e(), $e(), $e(), $e(), $e(), mi(), qn(), en(), a1e(), lo(), si(), Se(), jn(), kl(), yv(), Iq(), Rtr(), Yv(), _a_(), Ta_(), snt(), Ra_(), Vs(), Tqt(), a2h = yt("<div>"), YBn(), Utr = !1, nAo = new WeakMap, iAo = new WeakMap, fG = (e)=>{
    const t = mS(dTe), n = t?.window;
    let i, r, s, o, a, c, l;
    const u = ()=>nc_(Eqt.createElement(e.reactComponent, e.reactProps), t?.instantiationService, e.portalRoot), h = ()=>{
        if (!i) return;
        const g = i, f = u();
        Xa_(()=>{
            g.render(f);
        });
    }, p = (g)=>{
        const f = n ?? g.ownerDocument.defaultView ?? on, v = ZNh.get(f);
        v ? (o = v, lr(()=>{
            s = v.register(e.reactComponent, e.reactProps, g, e.portalRoot), a = e.reactProps, c = e.reactComponent, l = e.portalRoot;
        })) : (i = Ya_.createRoot(g, {
            onUncaughtError: tc_
        }), e.deferStandaloneInitialRenderUntilMount === !0 ? r = g : lr(()=>{
            h(), a = e.reactProps, c = e.reactComponent, l = e.portalRoot;
        }));
    };
    return Kc(()=>{
        !i || !r || lr(()=>{
            h(), a = e.reactProps, c = e.reactComponent, l = e.portalRoot;
        });
    }), Jt(Sv(()=>[
            e.reactComponent,
            e.reactProps,
            e.portalRoot
        ], ()=>{
        const g = e.reactComponent !== c, f = !Za_(e.reactProps, a), v = e.portalRoot !== l;
        if (g || f || v) if (c = e.reactComponent, a = e.reactProps, l = e.portalRoot, s && o) {
            const b = s, y = e.reactComponent, T = e.reactProps, E = e.portalRoot;
            o.batch(()=>{
                b.update(y, T, E);
            });
        } else h();
    }, {
        defer: !0
    })), An(()=>{
        if (s) s.dispose(), s = void 0, o = void 0;
        else if (i) {
            const g = i;
            i = void 0, r = void 0, queueMicrotask(()=>{
                g.unmount();
            });
        }
        a = void 0, c = void 0, l = void 0;
    }), (()=>{
        var g = a2h();
        return Pl((f)=>p(f), g), Rn((f)=>{
            var v = e.class, b = {
                display: "contents",
                ...e.style
            };
            return v !== f.e && $i(g, f.e = v), f.t = oa(g, b, f.t), f;
        }, {
            e: void 0,
            t: void 0
        }), g;
    })();
};

}
