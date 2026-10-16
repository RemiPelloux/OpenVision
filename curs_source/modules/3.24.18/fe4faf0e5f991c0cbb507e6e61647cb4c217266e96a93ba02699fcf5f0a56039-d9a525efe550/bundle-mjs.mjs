import { i } from "./plugin-brand-icon.js";
function hmr() {
    let r = 0, e, a, s = "";
    for(; r < arguments.length;)(e = arguments[r++]) && (a = cPt(e)) && (s && (s += " "), s += a);
    return s;
}
function gmr(r, ...e) {
    let a, s, l, u = p;
    function p(b) {
        const g = e.reduce((_, v)=>v(_), r());
        return a = Smr(g), s = a.cache.get, l = a.cache.set, u = m, m(b);
    }
    i(p, "initTailwindMerge");
    function m(b) {
        const g = s(b);
        if (g) return g;
        const _ = Amr(b, a);
        return l(b, _), _;
    }
    return i(m, "tailwindMerge"), i(function() {
        return u(hmr.apply(null, arguments));
    }, "callTailwindMerge");
}
var cMe, bmr, iPt, aPt, ymr, wmr, lMe, oPt, _mr, kmr, vmr, sPt, xmr, Cmr, Smr, Emr, Amr, cPt, Kp, lPt, Tmr, $mr, Imr, Nmr, Mmr, Rmr, Pmr, LS, n$, PB, uMe, EJ, jmr, Nc, r$, Lmr, Dmr, Fmr, Omr, zmr, Bmr, AJ, jB, qmr, uPt, Umr, Gmr, Wmr, dPt;
export { $mr, AJ, Amr, Bmr, Cmr, Dmr, EJ, Emr, Fmr, Gmr, Imr, Kp, LS, Lmr, Mmr, Nc, Nmr, Omr, PB, Pmr, Rmr, Smr, Tmr, Umr, Wmr, _mr, aPt, bmr, cMe, cPt, dPt, gmr, hmr, iPt, jB, jmr, kmr, lMe, lPt, n$, oPt, qmr, r$, sPt, uMe, uPt, vmr, wmr, xmr, ymr, zmr };
var __wakaru_pxi_initialized = false;
export function pxi() {
if (__wakaru_pxi_initialized) return;
__wakaru_pxi_initialized = true;
cMe = "-", bmr = i((r)=>{
    const e = wmr(r), { conflictingClassGroups: a, conflictingClassGroupModifiers: s } = r;
    return {
        getClassGroupId: i((p)=>{
            const m = p.split(cMe);
            return m[0] === "" && m.length !== 1 && m.shift(), iPt(m, e) || ymr(p);
        }, "getClassGroupId"),
        getConflictingClassGroupIds: i((p, m)=>{
            const b = a[p] || [];
            return m && s[p] ? [
                ...b,
                ...s[p]
            ] : b;
        }, "getConflictingClassGroupIds")
    };
}, "createClassGroupUtils"), iPt = i((r, e)=>{
    if (r.length === 0) return e.classGroupId;
    const a = r[0], s = e.nextPart.get(a), l = s ? iPt(r.slice(1), s) : void 0;
    if (l) return l;
    if (e.validators.length === 0) return;
    const u = r.join(cMe);
    return e.validators.find(({ validator: p })=>p(u))?.classGroupId;
}, "getGroupRecursive"), aPt = /^\[(.+)\]$/, ymr = i((r)=>{
    if (aPt.test(r)) {
        const e = aPt.exec(r)[1], a = e?.substring(0, e.indexOf(":"));
        if (a) return "arbitrary.." + a;
    }
}, "getGroupIdForArbitraryProperty"), wmr = i((r)=>{
    const { theme: e, prefix: a } = r, s = {
        nextPart: new Map,
        validators: []
    };
    return kmr(Object.entries(r.classGroups), a).forEach(([u, p])=>{
        lMe(p, s, u, e);
    }), s;
}, "createClassMap"), lMe = i((r, e, a, s)=>{
    r.forEach((l)=>{
        if (typeof l == "string") {
            const u = l === "" ? e : oPt(e, l);
            u.classGroupId = a;
            return;
        }
        if (typeof l == "function") {
            if (_mr(l)) {
                lMe(l(s), e, a, s);
                return;
            }
            e.validators.push({
                validator: l,
                classGroupId: a
            });
            return;
        }
        Object.entries(l).forEach(([u, p])=>{
            lMe(p, oPt(e, u), a, s);
        });
    });
}, "processClassesRecursively"), oPt = i((r, e)=>{
    let a = r;
    return e.split(cMe).forEach((s)=>{
        a.nextPart.has(s) || a.nextPart.set(s, {
            nextPart: new Map,
            validators: []
        }), a = a.nextPart.get(s);
    }), a;
}, "getPart"), _mr = i((r)=>r.isThemeGetter, "isThemeGetter"), kmr = i((r, e)=>e ? r.map(([a, s])=>{
        const l = s.map((u)=>typeof u == "string" ? e + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(([p, m])=>[
                    e + p,
                    m
                ])) : u);
        return [
            a,
            l
        ];
    }) : r, "getPrefixedClassGroupEntries"), vmr = i((r)=>{
    if (r < 1) return {
        get: i(()=>{}, "get"),
        set: i(()=>{}, "set")
    };
    let e = 0, a = new Map, s = new Map;
    const l = i((u, p)=>{
        a.set(u, p), e++, e > r && (e = 0, s = a, a = new Map);
    }, "update");
    return {
        get (u) {
            let p = a.get(u);
            if (p !== void 0) return p;
            if ((p = s.get(u)) !== void 0) return l(u, p), p;
        },
        set (u, p) {
            a.has(u) ? a.set(u, p) : l(u, p);
        }
    };
}, "createLruCache"), sPt = "!", xmr = i((r)=>{
    const { separator: e, experimentalParseClassName: a } = r, s = e.length === 1, l = e[0], u = e.length, p = i((m)=>{
        const b = [];
        let g = 0, _ = 0, v;
        for(let $ = 0; $ < m.length; $++){
            let I = m[$];
            if (g === 0) {
                if (I === l && (s || m.slice($, $ + u) === e)) {
                    b.push(m.slice(_, $)), _ = $ + u;
                    continue;
                }
                if (I === "/") {
                    v = $;
                    continue;
                }
            }
            I === "[" ? g++ : I === "]" && g--;
        }
        const x = b.length === 0 ? m : m.substring(_), C = x.startsWith(sPt), E = C ? x.substring(1) : x, A = v && v > _ ? v - _ : void 0;
        return {
            modifiers: b,
            hasImportantModifier: C,
            baseClassName: E,
            maybePostfixModifierPosition: A
        };
    }, "parseClassName");
    return a ? (m)=>a({
            className: m,
            parseClassName: p
        }) : p;
}, "createParseClassName"), Cmr = i((r)=>{
    if (r.length <= 1) return r;
    const e = [];
    let a = [];
    return r.forEach((s)=>{
        s[0] === "[" ? (e.push(...a.sort(), s), a = []) : a.push(s);
    }), e.push(...a.sort()), e;
}, "sortModifiers"), Smr = i((r)=>({
        cache: vmr(r.cacheSize),
        parseClassName: xmr(r),
        ...bmr(r)
    }), "createConfigUtils"), Emr = /\s+/, Amr = i((r, e)=>{
    const { parseClassName: a, getClassGroupId: s, getConflictingClassGroupIds: l } = e, u = [], p = r.trim().split(Emr);
    let m = "";
    for(let b = p.length - 1; b >= 0; b -= 1){
        const g = p[b], { modifiers: _, hasImportantModifier: v, baseClassName: x, maybePostfixModifierPosition: C } = a(g);
        let E = !!C, A = s(E ? x.substring(0, C) : x);
        if (!A) {
            if (!E) {
                m = g + (m.length > 0 ? " " + m : m);
                continue;
            }
            if (A = s(x), !A) {
                m = g + (m.length > 0 ? " " + m : m);
                continue;
            }
            E = !1;
        }
        const $ = Cmr(_).join(":"), I = v ? $ + sPt : $, N = I + A;
        if (u.includes(N)) continue;
        u.push(N);
        const R = l(A, E);
        for(let P = 0; P < R.length; ++P){
            const L = R[P];
            u.push(I + L);
        }
        m = g + (m.length > 0 ? " " + m : m);
    }
    return m;
}, "mergeClassList"), i(hmr, "twJoin"), cPt = i((r)=>{
    if (typeof r == "string") return r;
    let e, a = "";
    for(let s = 0; s < r.length; s++)r[s] && (e = cPt(r[s])) && (a && (a += " "), a += e);
    return a;
}, "toValue"), i(gmr, "createTailwindMerge"), Kp = i((r)=>{
    const e = i((a)=>a[r] || [], "themeGetter");
    return e.isThemeGetter = !0, e;
}, "fromTheme"), lPt = /^\[(?:([a-z-]+):)?(.+)\]$/i, Tmr = /^\d+\/\d+$/, $mr = new Set([
    "px",
    "full",
    "screen"
]), Imr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Nmr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Mmr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Rmr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Pmr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, LS = i((r)=>PB(r) || $mr.has(r) || Tmr.test(r), "isLength"), n$ = i((r)=>jB(r, "length", qmr), "isArbitraryLength"), PB = i((r)=>!!r && !Number.isNaN(Number(r)), "isNumber"), uMe = i((r)=>jB(r, "number", PB), "isArbitraryNumber"), EJ = i((r)=>!!r && Number.isInteger(Number(r)), "isInteger"), jmr = i((r)=>r.endsWith("%") && PB(r.slice(0, -1)), "isPercent"), Nc = i((r)=>lPt.test(r), "isArbitraryValue"), r$ = i((r)=>Imr.test(r), "isTshirtSize"), Lmr = new Set([
    "length",
    "size",
    "percentage"
]), Dmr = i((r)=>jB(r, Lmr, uPt), "isArbitrarySize"), Fmr = i((r)=>jB(r, "position", uPt), "isArbitraryPosition"), Omr = new Set([
    "image",
    "url"
]), zmr = i((r)=>jB(r, Omr, Gmr), "isArbitraryImage"), Bmr = i((r)=>jB(r, "", Umr), "isArbitraryShadow"), AJ = i(()=>!0, "isAny"), jB = i((r, e, a)=>{
    const s = lPt.exec(r);
    return s ? s[1] ? typeof e == "string" ? s[1] === e : e.has(s[1]) : a(s[2]) : !1;
}, "getIsArbitraryValue"), qmr = i((r)=>Nmr.test(r) && !Mmr.test(r), "isLengthOnly"), uPt = i(()=>!1, "isNever"), Umr = i((r)=>Rmr.test(r), "isShadow"), Gmr = i((r)=>Pmr.test(r), "isImage"), Wmr = i(()=>{
    const r = Kp("colors"), e = Kp("spacing"), a = Kp("blur"), s = Kp("brightness"), l = Kp("borderColor"), u = Kp("borderRadius"), p = Kp("borderSpacing"), m = Kp("borderWidth"), b = Kp("contrast"), g = Kp("grayscale"), _ = Kp("hueRotate"), v = Kp("invert"), x = Kp("gap"), C = Kp("gradientColorStops"), E = Kp("gradientColorStopPositions"), A = Kp("inset"), $ = Kp("margin"), I = Kp("opacity"), N = Kp("padding"), R = Kp("saturate"), P = Kp("scale"), L = Kp("sepia"), j = Kp("skew"), z = Kp("space"), q = Kp("translate"), O = i(()=>[
            "auto",
            "contain",
            "none"
        ], "getOverscroll"), B = i(()=>[
            "auto",
            "hidden",
            "clip",
            "visible",
            "scroll"
        ], "getOverflow"), V = i(()=>[
            "auto",
            Nc,
            e
        ], "getSpacingWithAutoAndArbitrary"), H = i(()=>[
            Nc,
            e
        ], "getSpacingWithArbitrary"), Z = i(()=>[
            "",
            LS,
            n$
        ], "getLengthWithEmptyAndArbitrary"), K = i(()=>[
            "auto",
            PB,
            Nc
        ], "getNumberWithAutoAndArbitrary"), Y = i(()=>[
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top"
        ], "getPositions"), J = i(()=>[
            "solid",
            "dashed",
            "dotted",
            "double",
            "none"
        ], "getLineStyles"), re = i(()=>[
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity"
        ], "getBlendModes"), ne = i(()=>[
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch"
        ], "getAlign"), ae = i(()=>[
            "",
            "0",
            Nc
        ], "getZeroAndEmpty"), W = i(()=>[
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column"
        ], "getBreaks"), oe = i(()=>[
            PB,
            Nc
        ], "getNumberAndArbitrary");
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [
                AJ
            ],
            spacing: [
                LS,
                n$
            ],
            blur: [
                "none",
                "",
                r$,
                Nc
            ],
            brightness: oe(),
            borderColor: [
                r
            ],
            borderRadius: [
                "none",
                "",
                "full",
                r$,
                Nc
            ],
            borderSpacing: H(),
            borderWidth: Z(),
            contrast: oe(),
            grayscale: ae(),
            hueRotate: oe(),
            invert: ae(),
            gap: H(),
            gradientColorStops: [
                r
            ],
            gradientColorStopPositions: [
                jmr,
                n$
            ],
            inset: V(),
            margin: V(),
            opacity: oe(),
            padding: H(),
            saturate: oe(),
            scale: oe(),
            sepia: ae(),
            skew: oe(),
            space: H(),
            translate: H()
        },
        classGroups: {
            aspect: [
                {
                    aspect: [
                        "auto",
                        "square",
                        "video",
                        Nc
                    ]
                }
            ],
            container: [
                "container"
            ],
            columns: [
                {
                    columns: [
                        r$
                    ]
                }
            ],
            "break-after": [
                {
                    "break-after": W()
                }
            ],
            "break-before": [
                {
                    "break-before": W()
                }
            ],
            "break-inside": [
                {
                    "break-inside": [
                        "auto",
                        "avoid",
                        "avoid-page",
                        "avoid-column"
                    ]
                }
            ],
            "box-decoration": [
                {
                    "box-decoration": [
                        "slice",
                        "clone"
                    ]
                }
            ],
            box: [
                {
                    box: [
                        "border",
                        "content"
                    ]
                }
            ],
            display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden"
            ],
            float: [
                {
                    float: [
                        "right",
                        "left",
                        "none",
                        "start",
                        "end"
                    ]
                }
            ],
            clear: [
                {
                    clear: [
                        "left",
                        "right",
                        "both",
                        "none",
                        "start",
                        "end"
                    ]
                }
            ],
            isolation: [
                "isolate",
                "isolation-auto"
            ],
            "object-fit": [
                {
                    object: [
                        "contain",
                        "cover",
                        "fill",
                        "none",
                        "scale-down"
                    ]
                }
            ],
            "object-position": [
                {
                    object: [
                        ...Y(),
                        Nc
                    ]
                }
            ],
            overflow: [
                {
                    overflow: B()
                }
            ],
            "overflow-x": [
                {
                    "overflow-x": B()
                }
            ],
            "overflow-y": [
                {
                    "overflow-y": B()
                }
            ],
            overscroll: [
                {
                    overscroll: O()
                }
            ],
            "overscroll-x": [
                {
                    "overscroll-x": O()
                }
            ],
            "overscroll-y": [
                {
                    "overscroll-y": O()
                }
            ],
            position: [
                "static",
                "fixed",
                "absolute",
                "relative",
                "sticky"
            ],
            inset: [
                {
                    inset: [
                        A
                    ]
                }
            ],
            "inset-x": [
                {
                    "inset-x": [
                        A
                    ]
                }
            ],
            "inset-y": [
                {
                    "inset-y": [
                        A
                    ]
                }
            ],
            start: [
                {
                    start: [
                        A
                    ]
                }
            ],
            end: [
                {
                    end: [
                        A
                    ]
                }
            ],
            top: [
                {
                    top: [
                        A
                    ]
                }
            ],
            right: [
                {
                    right: [
                        A
                    ]
                }
            ],
            bottom: [
                {
                    bottom: [
                        A
                    ]
                }
            ],
            left: [
                {
                    left: [
                        A
                    ]
                }
            ],
            visibility: [
                "visible",
                "invisible",
                "collapse"
            ],
            z: [
                {
                    z: [
                        "auto",
                        EJ,
                        Nc
                    ]
                }
            ],
            basis: [
                {
                    basis: V()
                }
            ],
            "flex-direction": [
                {
                    flex: [
                        "row",
                        "row-reverse",
                        "col",
                        "col-reverse"
                    ]
                }
            ],
            "flex-wrap": [
                {
                    flex: [
                        "wrap",
                        "wrap-reverse",
                        "nowrap"
                    ]
                }
            ],
            flex: [
                {
                    flex: [
                        "1",
                        "auto",
                        "initial",
                        "none",
                        Nc
                    ]
                }
            ],
            grow: [
                {
                    grow: ae()
                }
            ],
            shrink: [
                {
                    shrink: ae()
                }
            ],
            order: [
                {
                    order: [
                        "first",
                        "last",
                        "none",
                        EJ,
                        Nc
                    ]
                }
            ],
            "grid-cols": [
                {
                    "grid-cols": [
                        AJ
                    ]
                }
            ],
            "col-start-end": [
                {
                    col: [
                        "auto",
                        {
                            span: [
                                "full",
                                EJ,
                                Nc
                            ]
                        },
                        Nc
                    ]
                }
            ],
            "col-start": [
                {
                    "col-start": K()
                }
            ],
            "col-end": [
                {
                    "col-end": K()
                }
            ],
            "grid-rows": [
                {
                    "grid-rows": [
                        AJ
                    ]
                }
            ],
            "row-start-end": [
                {
                    row: [
                        "auto",
                        {
                            span: [
                                EJ,
                                Nc
                            ]
                        },
                        Nc
                    ]
                }
            ],
            "row-start": [
                {
                    "row-start": K()
                }
            ],
            "row-end": [
                {
                    "row-end": K()
                }
            ],
            "grid-flow": [
                {
                    "grid-flow": [
                        "row",
                        "col",
                        "dense",
                        "row-dense",
                        "col-dense"
                    ]
                }
            ],
            "auto-cols": [
                {
                    "auto-cols": [
                        "auto",
                        "min",
                        "max",
                        "fr",
                        Nc
                    ]
                }
            ],
            "auto-rows": [
                {
                    "auto-rows": [
                        "auto",
                        "min",
                        "max",
                        "fr",
                        Nc
                    ]
                }
            ],
            gap: [
                {
                    gap: [
                        x
                    ]
                }
            ],
            "gap-x": [
                {
                    "gap-x": [
                        x
                    ]
                }
            ],
            "gap-y": [
                {
                    "gap-y": [
                        x
                    ]
                }
            ],
            "justify-content": [
                {
                    justify: [
                        "normal",
                        ...ne()
                    ]
                }
            ],
            "justify-items": [
                {
                    "justify-items": [
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            "justify-self": [
                {
                    "justify-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            "align-content": [
                {
                    content: [
                        "normal",
                        ...ne(),
                        "baseline"
                    ]
                }
            ],
            "align-items": [
                {
                    items: [
                        "start",
                        "end",
                        "center",
                        "baseline",
                        "stretch"
                    ]
                }
            ],
            "align-self": [
                {
                    self: [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch",
                        "baseline"
                    ]
                }
            ],
            "place-content": [
                {
                    "place-content": [
                        ...ne(),
                        "baseline"
                    ]
                }
            ],
            "place-items": [
                {
                    "place-items": [
                        "start",
                        "end",
                        "center",
                        "baseline",
                        "stretch"
                    ]
                }
            ],
            "place-self": [
                {
                    "place-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            p: [
                {
                    p: [
                        N
                    ]
                }
            ],
            px: [
                {
                    px: [
                        N
                    ]
                }
            ],
            py: [
                {
                    py: [
                        N
                    ]
                }
            ],
            ps: [
                {
                    ps: [
                        N
                    ]
                }
            ],
            pe: [
                {
                    pe: [
                        N
                    ]
                }
            ],
            pt: [
                {
                    pt: [
                        N
                    ]
                }
            ],
            pr: [
                {
                    pr: [
                        N
                    ]
                }
            ],
            pb: [
                {
                    pb: [
                        N
                    ]
                }
            ],
            pl: [
                {
                    pl: [
                        N
                    ]
                }
            ],
            m: [
                {
                    m: [
                        $
                    ]
                }
            ],
            mx: [
                {
                    mx: [
                        $
                    ]
                }
            ],
            my: [
                {
                    my: [
                        $
                    ]
                }
            ],
            ms: [
                {
                    ms: [
                        $
                    ]
                }
            ],
            me: [
                {
                    me: [
                        $
                    ]
                }
            ],
            mt: [
                {
                    mt: [
                        $
                    ]
                }
            ],
            mr: [
                {
                    mr: [
                        $
                    ]
                }
            ],
            mb: [
                {
                    mb: [
                        $
                    ]
                }
            ],
            ml: [
                {
                    ml: [
                        $
                    ]
                }
            ],
            "space-x": [
                {
                    "space-x": [
                        z
                    ]
                }
            ],
            "space-x-reverse": [
                "space-x-reverse"
            ],
            "space-y": [
                {
                    "space-y": [
                        z
                    ]
                }
            ],
            "space-y-reverse": [
                "space-y-reverse"
            ],
            w: [
                {
                    w: [
                        "auto",
                        "min",
                        "max",
                        "fit",
                        "svw",
                        "lvw",
                        "dvw",
                        Nc,
                        e
                    ]
                }
            ],
            "min-w": [
                {
                    "min-w": [
                        Nc,
                        e,
                        "min",
                        "max",
                        "fit"
                    ]
                }
            ],
            "max-w": [
                {
                    "max-w": [
                        Nc,
                        e,
                        "none",
                        "full",
                        "min",
                        "max",
                        "fit",
                        "prose",
                        {
                            screen: [
                                r$
                            ]
                        },
                        r$
                    ]
                }
            ],
            h: [
                {
                    h: [
                        Nc,
                        e,
                        "auto",
                        "min",
                        "max",
                        "fit",
                        "svh",
                        "lvh",
                        "dvh"
                    ]
                }
            ],
            "min-h": [
                {
                    "min-h": [
                        Nc,
                        e,
                        "min",
                        "max",
                        "fit",
                        "svh",
                        "lvh",
                        "dvh"
                    ]
                }
            ],
            "max-h": [
                {
                    "max-h": [
                        Nc,
                        e,
                        "min",
                        "max",
                        "fit",
                        "svh",
                        "lvh",
                        "dvh"
                    ]
                }
            ],
            size: [
                {
                    size: [
                        Nc,
                        e,
                        "auto",
                        "min",
                        "max",
                        "fit"
                    ]
                }
            ],
            "font-size": [
                {
                    text: [
                        "base",
                        r$,
                        n$
                    ]
                }
            ],
            "font-smoothing": [
                "antialiased",
                "subpixel-antialiased"
            ],
            "font-style": [
                "italic",
                "not-italic"
            ],
            "font-weight": [
                {
                    font: [
                        "thin",
                        "extralight",
                        "light",
                        "normal",
                        "medium",
                        "semibold",
                        "bold",
                        "extrabold",
                        "black",
                        uMe
                    ]
                }
            ],
            "font-family": [
                {
                    font: [
                        AJ
                    ]
                }
            ],
            "fvn-normal": [
                "normal-nums"
            ],
            "fvn-ordinal": [
                "ordinal"
            ],
            "fvn-slashed-zero": [
                "slashed-zero"
            ],
            "fvn-figure": [
                "lining-nums",
                "oldstyle-nums"
            ],
            "fvn-spacing": [
                "proportional-nums",
                "tabular-nums"
            ],
            "fvn-fraction": [
                "diagonal-fractions",
                "stacked-fractions"
            ],
            tracking: [
                {
                    tracking: [
                        "tighter",
                        "tight",
                        "normal",
                        "wide",
                        "wider",
                        "widest",
                        Nc
                    ]
                }
            ],
            "line-clamp": [
                {
                    "line-clamp": [
                        "none",
                        PB,
                        uMe
                    ]
                }
            ],
            leading: [
                {
                    leading: [
                        "none",
                        "tight",
                        "snug",
                        "normal",
                        "relaxed",
                        "loose",
                        LS,
                        Nc
                    ]
                }
            ],
            "list-image": [
                {
                    "list-image": [
                        "none",
                        Nc
                    ]
                }
            ],
            "list-style-type": [
                {
                    list: [
                        "none",
                        "disc",
                        "decimal",
                        Nc
                    ]
                }
            ],
            "list-style-position": [
                {
                    list: [
                        "inside",
                        "outside"
                    ]
                }
            ],
            "placeholder-color": [
                {
                    placeholder: [
                        r
                    ]
                }
            ],
            "placeholder-opacity": [
                {
                    "placeholder-opacity": [
                        I
                    ]
                }
            ],
            "text-alignment": [
                {
                    text: [
                        "left",
                        "center",
                        "right",
                        "justify",
                        "start",
                        "end"
                    ]
                }
            ],
            "text-color": [
                {
                    text: [
                        r
                    ]
                }
            ],
            "text-opacity": [
                {
                    "text-opacity": [
                        I
                    ]
                }
            ],
            "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline"
            ],
            "text-decoration-style": [
                {
                    decoration: [
                        ...J(),
                        "wavy"
                    ]
                }
            ],
            "text-decoration-thickness": [
                {
                    decoration: [
                        "auto",
                        "from-font",
                        LS,
                        n$
                    ]
                }
            ],
            "underline-offset": [
                {
                    "underline-offset": [
                        "auto",
                        LS,
                        Nc
                    ]
                }
            ],
            "text-decoration-color": [
                {
                    decoration: [
                        r
                    ]
                }
            ],
            "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case"
            ],
            "text-overflow": [
                "truncate",
                "text-ellipsis",
                "text-clip"
            ],
            "text-wrap": [
                {
                    text: [
                        "wrap",
                        "nowrap",
                        "balance",
                        "pretty"
                    ]
                }
            ],
            indent: [
                {
                    indent: H()
                }
            ],
            "vertical-align": [
                {
                    align: [
                        "baseline",
                        "top",
                        "middle",
                        "bottom",
                        "text-top",
                        "text-bottom",
                        "sub",
                        "super",
                        Nc
                    ]
                }
            ],
            whitespace: [
                {
                    whitespace: [
                        "normal",
                        "nowrap",
                        "pre",
                        "pre-line",
                        "pre-wrap",
                        "break-spaces"
                    ]
                }
            ],
            break: [
                {
                    break: [
                        "normal",
                        "words",
                        "all",
                        "keep"
                    ]
                }
            ],
            hyphens: [
                {
                    hyphens: [
                        "none",
                        "manual",
                        "auto"
                    ]
                }
            ],
            content: [
                {
                    content: [
                        "none",
                        Nc
                    ]
                }
            ],
            "bg-attachment": [
                {
                    bg: [
                        "fixed",
                        "local",
                        "scroll"
                    ]
                }
            ],
            "bg-clip": [
                {
                    "bg-clip": [
                        "border",
                        "padding",
                        "content",
                        "text"
                    ]
                }
            ],
            "bg-opacity": [
                {
                    "bg-opacity": [
                        I
                    ]
                }
            ],
            "bg-origin": [
                {
                    "bg-origin": [
                        "border",
                        "padding",
                        "content"
                    ]
                }
            ],
            "bg-position": [
                {
                    bg: [
                        ...Y(),
                        Fmr
                    ]
                }
            ],
            "bg-repeat": [
                {
                    bg: [
                        "no-repeat",
                        {
                            repeat: [
                                "",
                                "x",
                                "y",
                                "round",
                                "space"
                            ]
                        }
                    ]
                }
            ],
            "bg-size": [
                {
                    bg: [
                        "auto",
                        "cover",
                        "contain",
                        Dmr
                    ]
                }
            ],
            "bg-image": [
                {
                    bg: [
                        "none",
                        {
                            "gradient-to": [
                                "t",
                                "tr",
                                "r",
                                "br",
                                "b",
                                "bl",
                                "l",
                                "tl"
                            ]
                        },
                        zmr
                    ]
                }
            ],
            "bg-color": [
                {
                    bg: [
                        r
                    ]
                }
            ],
            "gradient-from-pos": [
                {
                    from: [
                        E
                    ]
                }
            ],
            "gradient-via-pos": [
                {
                    via: [
                        E
                    ]
                }
            ],
            "gradient-to-pos": [
                {
                    to: [
                        E
                    ]
                }
            ],
            "gradient-from": [
                {
                    from: [
                        C
                    ]
                }
            ],
            "gradient-via": [
                {
                    via: [
                        C
                    ]
                }
            ],
            "gradient-to": [
                {
                    to: [
                        C
                    ]
                }
            ],
            rounded: [
                {
                    rounded: [
                        u
                    ]
                }
            ],
            "rounded-s": [
                {
                    "rounded-s": [
                        u
                    ]
                }
            ],
            "rounded-e": [
                {
                    "rounded-e": [
                        u
                    ]
                }
            ],
            "rounded-t": [
                {
                    "rounded-t": [
                        u
                    ]
                }
            ],
            "rounded-r": [
                {
                    "rounded-r": [
                        u
                    ]
                }
            ],
            "rounded-b": [
                {
                    "rounded-b": [
                        u
                    ]
                }
            ],
            "rounded-l": [
                {
                    "rounded-l": [
                        u
                    ]
                }
            ],
            "rounded-ss": [
                {
                    "rounded-ss": [
                        u
                    ]
                }
            ],
            "rounded-se": [
                {
                    "rounded-se": [
                        u
                    ]
                }
            ],
            "rounded-ee": [
                {
                    "rounded-ee": [
                        u
                    ]
                }
            ],
            "rounded-es": [
                {
                    "rounded-es": [
                        u
                    ]
                }
            ],
            "rounded-tl": [
                {
                    "rounded-tl": [
                        u
                    ]
                }
            ],
            "rounded-tr": [
                {
                    "rounded-tr": [
                        u
                    ]
                }
            ],
            "rounded-br": [
                {
                    "rounded-br": [
                        u
                    ]
                }
            ],
            "rounded-bl": [
                {
                    "rounded-bl": [
                        u
                    ]
                }
            ],
            "border-w": [
                {
                    border: [
                        m
                    ]
                }
            ],
            "border-w-x": [
                {
                    "border-x": [
                        m
                    ]
                }
            ],
            "border-w-y": [
                {
                    "border-y": [
                        m
                    ]
                }
            ],
            "border-w-s": [
                {
                    "border-s": [
                        m
                    ]
                }
            ],
            "border-w-e": [
                {
                    "border-e": [
                        m
                    ]
                }
            ],
            "border-w-t": [
                {
                    "border-t": [
                        m
                    ]
                }
            ],
            "border-w-r": [
                {
                    "border-r": [
                        m
                    ]
                }
            ],
            "border-w-b": [
                {
                    "border-b": [
                        m
                    ]
                }
            ],
            "border-w-l": [
                {
                    "border-l": [
                        m
                    ]
                }
            ],
            "border-opacity": [
                {
                    "border-opacity": [
                        I
                    ]
                }
            ],
            "border-style": [
                {
                    border: [
                        ...J(),
                        "hidden"
                    ]
                }
            ],
            "divide-x": [
                {
                    "divide-x": [
                        m
                    ]
                }
            ],
            "divide-x-reverse": [
                "divide-x-reverse"
            ],
            "divide-y": [
                {
                    "divide-y": [
                        m
                    ]
                }
            ],
            "divide-y-reverse": [
                "divide-y-reverse"
            ],
            "divide-opacity": [
                {
                    "divide-opacity": [
                        I
                    ]
                }
            ],
            "divide-style": [
                {
                    divide: J()
                }
            ],
            "border-color": [
                {
                    border: [
                        l
                    ]
                }
            ],
            "border-color-x": [
                {
                    "border-x": [
                        l
                    ]
                }
            ],
            "border-color-y": [
                {
                    "border-y": [
                        l
                    ]
                }
            ],
            "border-color-s": [
                {
                    "border-s": [
                        l
                    ]
                }
            ],
            "border-color-e": [
                {
                    "border-e": [
                        l
                    ]
                }
            ],
            "border-color-t": [
                {
                    "border-t": [
                        l
                    ]
                }
            ],
            "border-color-r": [
                {
                    "border-r": [
                        l
                    ]
                }
            ],
            "border-color-b": [
                {
                    "border-b": [
                        l
                    ]
                }
            ],
            "border-color-l": [
                {
                    "border-l": [
                        l
                    ]
                }
            ],
            "divide-color": [
                {
                    divide: [
                        l
                    ]
                }
            ],
            "outline-style": [
                {
                    outline: [
                        "",
                        ...J()
                    ]
                }
            ],
            "outline-offset": [
                {
                    "outline-offset": [
                        LS,
                        Nc
                    ]
                }
            ],
            "outline-w": [
                {
                    outline: [
                        LS,
                        n$
                    ]
                }
            ],
            "outline-color": [
                {
                    outline: [
                        r
                    ]
                }
            ],
            "ring-w": [
                {
                    ring: Z()
                }
            ],
            "ring-w-inset": [
                "ring-inset"
            ],
            "ring-color": [
                {
                    ring: [
                        r
                    ]
                }
            ],
            "ring-opacity": [
                {
                    "ring-opacity": [
                        I
                    ]
                }
            ],
            "ring-offset-w": [
                {
                    "ring-offset": [
                        LS,
                        n$
                    ]
                }
            ],
            "ring-offset-color": [
                {
                    "ring-offset": [
                        r
                    ]
                }
            ],
            shadow: [
                {
                    shadow: [
                        "",
                        "inner",
                        "none",
                        r$,
                        Bmr
                    ]
                }
            ],
            "shadow-color": [
                {
                    shadow: [
                        AJ
                    ]
                }
            ],
            opacity: [
                {
                    opacity: [
                        I
                    ]
                }
            ],
            "mix-blend": [
                {
                    "mix-blend": [
                        ...re(),
                        "plus-lighter",
                        "plus-darker"
                    ]
                }
            ],
            "bg-blend": [
                {
                    "bg-blend": re()
                }
            ],
            filter: [
                {
                    filter: [
                        "",
                        "none"
                    ]
                }
            ],
            blur: [
                {
                    blur: [
                        a
                    ]
                }
            ],
            brightness: [
                {
                    brightness: [
                        s
                    ]
                }
            ],
            contrast: [
                {
                    contrast: [
                        b
                    ]
                }
            ],
            "drop-shadow": [
                {
                    "drop-shadow": [
                        "",
                        "none",
                        r$,
                        Nc
                    ]
                }
            ],
            grayscale: [
                {
                    grayscale: [
                        g
                    ]
                }
            ],
            "hue-rotate": [
                {
                    "hue-rotate": [
                        _
                    ]
                }
            ],
            invert: [
                {
                    invert: [
                        v
                    ]
                }
            ],
            saturate: [
                {
                    saturate: [
                        R
                    ]
                }
            ],
            sepia: [
                {
                    sepia: [
                        L
                    ]
                }
            ],
            "backdrop-filter": [
                {
                    "backdrop-filter": [
                        "",
                        "none"
                    ]
                }
            ],
            "backdrop-blur": [
                {
                    "backdrop-blur": [
                        a
                    ]
                }
            ],
            "backdrop-brightness": [
                {
                    "backdrop-brightness": [
                        s
                    ]
                }
            ],
            "backdrop-contrast": [
                {
                    "backdrop-contrast": [
                        b
                    ]
                }
            ],
            "backdrop-grayscale": [
                {
                    "backdrop-grayscale": [
                        g
                    ]
                }
            ],
            "backdrop-hue-rotate": [
                {
                    "backdrop-hue-rotate": [
                        _
                    ]
                }
            ],
            "backdrop-invert": [
                {
                    "backdrop-invert": [
                        v
                    ]
                }
            ],
            "backdrop-opacity": [
                {
                    "backdrop-opacity": [
                        I
                    ]
                }
            ],
            "backdrop-saturate": [
                {
                    "backdrop-saturate": [
                        R
                    ]
                }
            ],
            "backdrop-sepia": [
                {
                    "backdrop-sepia": [
                        L
                    ]
                }
            ],
            "border-collapse": [
                {
                    border: [
                        "collapse",
                        "separate"
                    ]
                }
            ],
            "border-spacing": [
                {
                    "border-spacing": [
                        p
                    ]
                }
            ],
            "border-spacing-x": [
                {
                    "border-spacing-x": [
                        p
                    ]
                }
            ],
            "border-spacing-y": [
                {
                    "border-spacing-y": [
                        p
                    ]
                }
            ],
            "table-layout": [
                {
                    table: [
                        "auto",
                        "fixed"
                    ]
                }
            ],
            caption: [
                {
                    caption: [
                        "top",
                        "bottom"
                    ]
                }
            ],
            transition: [
                {
                    transition: [
                        "none",
                        "all",
                        "",
                        "colors",
                        "opacity",
                        "shadow",
                        "transform",
                        Nc
                    ]
                }
            ],
            duration: [
                {
                    duration: oe()
                }
            ],
            ease: [
                {
                    ease: [
                        "linear",
                        "in",
                        "out",
                        "in-out",
                        Nc
                    ]
                }
            ],
            delay: [
                {
                    delay: oe()
                }
            ],
            animate: [
                {
                    animate: [
                        "none",
                        "spin",
                        "ping",
                        "pulse",
                        "bounce",
                        Nc
                    ]
                }
            ],
            transform: [
                {
                    transform: [
                        "",
                        "gpu",
                        "none"
                    ]
                }
            ],
            scale: [
                {
                    scale: [
                        P
                    ]
                }
            ],
            "scale-x": [
                {
                    "scale-x": [
                        P
                    ]
                }
            ],
            "scale-y": [
                {
                    "scale-y": [
                        P
                    ]
                }
            ],
            rotate: [
                {
                    rotate: [
                        EJ,
                        Nc
                    ]
                }
            ],
            "translate-x": [
                {
                    "translate-x": [
                        q
                    ]
                }
            ],
            "translate-y": [
                {
                    "translate-y": [
                        q
                    ]
                }
            ],
            "skew-x": [
                {
                    "skew-x": [
                        j
                    ]
                }
            ],
            "skew-y": [
                {
                    "skew-y": [
                        j
                    ]
                }
            ],
            "transform-origin": [
                {
                    origin: [
                        "center",
                        "top",
                        "top-right",
                        "right",
                        "bottom-right",
                        "bottom",
                        "bottom-left",
                        "left",
                        "top-left",
                        Nc
                    ]
                }
            ],
            accent: [
                {
                    accent: [
                        "auto",
                        r
                    ]
                }
            ],
            appearance: [
                {
                    appearance: [
                        "none",
                        "auto"
                    ]
                }
            ],
            cursor: [
                {
                    cursor: [
                        "auto",
                        "default",
                        "pointer",
                        "wait",
                        "text",
                        "move",
                        "help",
                        "not-allowed",
                        "none",
                        "context-menu",
                        "progress",
                        "cell",
                        "crosshair",
                        "vertical-text",
                        "alias",
                        "copy",
                        "no-drop",
                        "grab",
                        "grabbing",
                        "all-scroll",
                        "col-resize",
                        "row-resize",
                        "n-resize",
                        "e-resize",
                        "s-resize",
                        "w-resize",
                        "ne-resize",
                        "nw-resize",
                        "se-resize",
                        "sw-resize",
                        "ew-resize",
                        "ns-resize",
                        "nesw-resize",
                        "nwse-resize",
                        "zoom-in",
                        "zoom-out",
                        Nc
                    ]
                }
            ],
            "caret-color": [
                {
                    caret: [
                        r
                    ]
                }
            ],
            "pointer-events": [
                {
                    "pointer-events": [
                        "none",
                        "auto"
                    ]
                }
            ],
            resize: [
                {
                    resize: [
                        "none",
                        "y",
                        "x",
                        ""
                    ]
                }
            ],
            "scroll-behavior": [
                {
                    scroll: [
                        "auto",
                        "smooth"
                    ]
                }
            ],
            "scroll-m": [
                {
                    "scroll-m": H()
                }
            ],
            "scroll-mx": [
                {
                    "scroll-mx": H()
                }
            ],
            "scroll-my": [
                {
                    "scroll-my": H()
                }
            ],
            "scroll-ms": [
                {
                    "scroll-ms": H()
                }
            ],
            "scroll-me": [
                {
                    "scroll-me": H()
                }
            ],
            "scroll-mt": [
                {
                    "scroll-mt": H()
                }
            ],
            "scroll-mr": [
                {
                    "scroll-mr": H()
                }
            ],
            "scroll-mb": [
                {
                    "scroll-mb": H()
                }
            ],
            "scroll-ml": [
                {
                    "scroll-ml": H()
                }
            ],
            "scroll-p": [
                {
                    "scroll-p": H()
                }
            ],
            "scroll-px": [
                {
                    "scroll-px": H()
                }
            ],
            "scroll-py": [
                {
                    "scroll-py": H()
                }
            ],
            "scroll-ps": [
                {
                    "scroll-ps": H()
                }
            ],
            "scroll-pe": [
                {
                    "scroll-pe": H()
                }
            ],
            "scroll-pt": [
                {
                    "scroll-pt": H()
                }
            ],
            "scroll-pr": [
                {
                    "scroll-pr": H()
                }
            ],
            "scroll-pb": [
                {
                    "scroll-pb": H()
                }
            ],
            "scroll-pl": [
                {
                    "scroll-pl": H()
                }
            ],
            "snap-align": [
                {
                    snap: [
                        "start",
                        "end",
                        "center",
                        "align-none"
                    ]
                }
            ],
            "snap-stop": [
                {
                    snap: [
                        "normal",
                        "always"
                    ]
                }
            ],
            "snap-type": [
                {
                    snap: [
                        "none",
                        "x",
                        "y",
                        "both"
                    ]
                }
            ],
            "snap-strictness": [
                {
                    snap: [
                        "mandatory",
                        "proximity"
                    ]
                }
            ],
            touch: [
                {
                    touch: [
                        "auto",
                        "none",
                        "manipulation"
                    ]
                }
            ],
            "touch-x": [
                {
                    "touch-pan": [
                        "x",
                        "left",
                        "right"
                    ]
                }
            ],
            "touch-y": [
                {
                    "touch-pan": [
                        "y",
                        "up",
                        "down"
                    ]
                }
            ],
            "touch-pz": [
                "touch-pinch-zoom"
            ],
            select: [
                {
                    select: [
                        "none",
                        "text",
                        "all",
                        "auto"
                    ]
                }
            ],
            "will-change": [
                {
                    "will-change": [
                        "auto",
                        "scroll",
                        "contents",
                        "transform",
                        Nc
                    ]
                }
            ],
            fill: [
                {
                    fill: [
                        r,
                        "none"
                    ]
                }
            ],
            "stroke-w": [
                {
                    stroke: [
                        LS,
                        n$,
                        uMe
                    ]
                }
            ],
            stroke: [
                {
                    stroke: [
                        r,
                        "none"
                    ]
                }
            ],
            sr: [
                "sr-only",
                "not-sr-only"
            ],
            "forced-color-adjust": [
                {
                    "forced-color-adjust": [
                        "auto",
                        "none"
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                "overflow-x",
                "overflow-y"
            ],
            overscroll: [
                "overscroll-x",
                "overscroll-y"
            ],
            inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left"
            ],
            "inset-x": [
                "right",
                "left"
            ],
            "inset-y": [
                "top",
                "bottom"
            ],
            flex: [
                "basis",
                "grow",
                "shrink"
            ],
            gap: [
                "gap-x",
                "gap-y"
            ],
            p: [
                "px",
                "py",
                "ps",
                "pe",
                "pt",
                "pr",
                "pb",
                "pl"
            ],
            px: [
                "pr",
                "pl"
            ],
            py: [
                "pt",
                "pb"
            ],
            m: [
                "mx",
                "my",
                "ms",
                "me",
                "mt",
                "mr",
                "mb",
                "ml"
            ],
            mx: [
                "mr",
                "ml"
            ],
            my: [
                "mt",
                "mb"
            ],
            size: [
                "w",
                "h"
            ],
            "font-size": [
                "leading"
            ],
            "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction"
            ],
            "fvn-ordinal": [
                "fvn-normal"
            ],
            "fvn-slashed-zero": [
                "fvn-normal"
            ],
            "fvn-figure": [
                "fvn-normal"
            ],
            "fvn-spacing": [
                "fvn-normal"
            ],
            "fvn-fraction": [
                "fvn-normal"
            ],
            "line-clamp": [
                "display",
                "overflow"
            ],
            rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-s": [
                "rounded-ss",
                "rounded-es"
            ],
            "rounded-e": [
                "rounded-se",
                "rounded-ee"
            ],
            "rounded-t": [
                "rounded-tl",
                "rounded-tr"
            ],
            "rounded-r": [
                "rounded-tr",
                "rounded-br"
            ],
            "rounded-b": [
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-l": [
                "rounded-tl",
                "rounded-bl"
            ],
            "border-spacing": [
                "border-spacing-x",
                "border-spacing-y"
            ],
            "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l"
            ],
            "border-w-x": [
                "border-w-r",
                "border-w-l"
            ],
            "border-w-y": [
                "border-w-t",
                "border-w-b"
            ],
            "border-color": [
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l"
            ],
            "border-color-x": [
                "border-color-r",
                "border-color-l"
            ],
            "border-color-y": [
                "border-color-t",
                "border-color-b"
            ],
            "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml"
            ],
            "scroll-mx": [
                "scroll-mr",
                "scroll-ml"
            ],
            "scroll-my": [
                "scroll-mt",
                "scroll-mb"
            ],
            "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl"
            ],
            "scroll-px": [
                "scroll-pr",
                "scroll-pl"
            ],
            "scroll-py": [
                "scroll-pt",
                "scroll-pb"
            ],
            touch: [
                "touch-x",
                "touch-y",
                "touch-pz"
            ],
            "touch-x": [
                "touch"
            ],
            "touch-y": [
                "touch"
            ],
            "touch-pz": [
                "touch"
            ]
        },
        conflictingClassGroupModifiers: {
            "font-size": [
                "leading"
            ]
        }
    };
}, "getDefaultConfig"), dPt = gmr(Wmr);

}
