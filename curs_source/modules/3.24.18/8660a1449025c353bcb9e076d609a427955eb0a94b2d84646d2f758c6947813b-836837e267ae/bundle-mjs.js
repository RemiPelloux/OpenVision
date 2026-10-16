import { oJy } from "./LYd.js";
import { E } from "./tslib.es6.js";
var nDr, G_h, esa, tsa, q_h, z_h, iDr, nsa, V_h, K_h, Y_h, isa, X_h, Z_h, Q_h, J_h, ebh, rsa, u6, ssa, tbh, nbh, ibh, rbh, sbh, obh, abh, _We, kit, H7t, rDr, nyn, lbh, uT, wit, cbh, ubh, dbh, hbh, pbh, mbh, iyn, W7t, gbh, osa, fbh, vbh, _bh, asa;
export { G_h, H7t, J_h, K_h, Q_h, V_h, W7t, X_h, Y_h, Z_h, _We, _bh, abh, asa, cbh, dbh, ebh, esa, fbh, gbh, hbh, iDr, ibh, isa, iyn, kit, lbh, mbh, nDr, nbh, nsa, nyn, obh, osa, pbh, q_h, rDr, rbh, rsa, sbh, ssa, tbh, tsa, u6, uT, ubh, vbh, wit, z_h };
var __wakaru_aJy_initialized = false;
export function aJy() {
if (__wakaru_aJy_initialized) return;
__wakaru_aJy_initialized = true;
E(), nDr = "-", G_h = (t)=>{
    const e = z_h(t), { conflictingClassGroups: n, conflictingClassGroupModifiers: i } = t;
    return {
        getClassGroupId: (o)=>{
            const a = o.split(nDr);
            return a[0] === "" && a.length !== 1 && a.shift(), esa(a, e) || q_h(o);
        },
        getConflictingClassGroupIds: (o, a)=>{
            const l = n[o] || [];
            return a && i[o] ? [
                ...l,
                ...i[o]
            ] : l;
        }
    };
}, esa = (t, e)=>{
    if (t.length === 0) return e.classGroupId;
    const n = t[0], i = e.nextPart.get(n), r = i ? esa(t.slice(1), i) : void 0;
    if (r) return r;
    if (e.validators.length === 0) return;
    const s = t.join(nDr);
    return e.validators.find(({ validator: o })=>o(s))?.classGroupId;
}, tsa = /^\[(.+)\]$/, q_h = (t)=>{
    if (tsa.test(t)) {
        const e = tsa.exec(t)[1], n = e?.substring(0, e.indexOf(":"));
        if (n) return "arbitrary.." + n;
    }
}, z_h = (t)=>{
    const { theme: e, prefix: n } = t, i = {
        nextPart: new Map,
        validators: []
    };
    return K_h(Object.entries(t.classGroups), n).forEach(([s, o])=>{
        iDr(o, i, s, e);
    }), i;
}, iDr = (t, e, n, i)=>{
    t.forEach((r)=>{
        if (typeof r == "string") {
            const s = r === "" ? e : nsa(e, r);
            s.classGroupId = n;
            return;
        }
        if (typeof r == "function") {
            if (V_h(r)) {
                iDr(r(i), e, n, i);
                return;
            }
            e.validators.push({
                validator: r,
                classGroupId: n
            });
            return;
        }
        Object.entries(r).forEach(([s, o])=>{
            iDr(o, nsa(e, s), n, i);
        });
    });
}, nsa = (t, e)=>{
    let n = t;
    return e.split(nDr).forEach((i)=>{
        n.nextPart.has(i) || n.nextPart.set(i, {
            nextPart: new Map,
            validators: []
        }), n = n.nextPart.get(i);
    }), n;
}, V_h = (t)=>t.isThemeGetter, K_h = (t, e)=>e ? t.map(([n, i])=>{
        const r = i.map((s)=>typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([o, a])=>[
                    e + o,
                    a
                ])) : s);
        return [
            n,
            r
        ];
    }) : t, Y_h = (t)=>{
    if (t < 1) return {
        get: ()=>{},
        set: ()=>{}
    };
    let e = 0, n = new Map, i = new Map;
    const r = (s, o)=>{
        n.set(s, o), e++, e > t && (e = 0, i = n, n = new Map);
    };
    return {
        get (s) {
            let o = n.get(s);
            if (o !== void 0) return o;
            if ((o = i.get(s)) !== void 0) return r(s, o), o;
        },
        set (s, o) {
            n.has(s) ? n.set(s, o) : r(s, o);
        }
    };
}, isa = "!", X_h = (t)=>{
    const { separator: e, experimentalParseClassName: n } = t, i = e.length === 1, r = e[0], s = e.length, o = (a)=>{
        const l = [];
        let c = 0, u = 0, d;
        for(let _ = 0; _ < a.length; _++){
            let b = a[_];
            if (c === 0) {
                if (b === r && (i || a.slice(_, _ + s) === e)) {
                    l.push(a.slice(u, _)), u = _ + s;
                    continue;
                }
                if (b === "/") {
                    d = _;
                    continue;
                }
            }
            b === "[" ? c++ : b === "]" && c--;
        }
        const h = l.length === 0 ? a : a.substring(u), p = h.startsWith(isa), g = p ? h.substring(1) : h, f = d && d > u ? d - u : void 0;
        return {
            modifiers: l,
            hasImportantModifier: p,
            baseClassName: g,
            maybePostfixModifierPosition: f
        };
    };
    return n ? (a)=>n({
            className: a,
            parseClassName: o
        }) : o;
}, Z_h = (t)=>{
    if (t.length <= 1) return t;
    const e = [];
    let n = [];
    return t.forEach((i)=>{
        i[0] === "[" ? (e.push(...n.sort(), i), n = []) : n.push(i);
    }), e.push(...n.sort()), e;
}, Q_h = (t)=>({
        cache: Y_h(t.cacheSize),
        parseClassName: X_h(t),
        ...G_h(t)
    }), J_h = /\s+/, ebh = (t, e)=>{
    const { parseClassName: n, getClassGroupId: i, getConflictingClassGroupIds: r } = e, s = [], o = t.trim().split(J_h);
    let a = "";
    for(let l = o.length - 1; l >= 0; l -= 1){
        const c = o[l], { modifiers: u, hasImportantModifier: d, baseClassName: h, maybePostfixModifierPosition: p } = n(c);
        let g = !!p, f = i(g ? h.substring(0, p) : h);
        if (!f) {
            if (!g) {
                a = c + (a.length > 0 ? " " + a : a);
                continue;
            }
            if (f = i(h), !f) {
                a = c + (a.length > 0 ? " " + a : a);
                continue;
            }
            g = !1;
        }
        const _ = Z_h(u).join(":"), b = d ? _ + isa : _, y = b + f;
        if (s.includes(y)) continue;
        s.push(y);
        const S = r(f, g);
        for(let k = 0; k < S.length; ++k){
            const C = S[k];
            s.push(b + C);
        }
        a = c + (a.length > 0 ? " " + a : a);
    }
    return a;
}, rsa = (t)=>{
    if (typeof t == "string") return t;
    let e, n = "";
    for(let i = 0; i < t.length; i++)t[i] && (e = rsa(t[i])) && (n && (n += " "), n += e);
    return n;
}, u6 = (t)=>{
    const e = (n)=>n[t] || [];
    return e.isThemeGetter = !0, e;
}, ssa = /^\[(?:([a-z-]+):)?(.+)\]$/i, tbh = /^\d+\/\d+$/, nbh = new Set([
    "px",
    "full",
    "screen"
]), ibh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, rbh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, sbh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, obh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, abh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, _We = (t)=>H7t(t) || nbh.has(t) || tbh.test(t), kit = (t)=>W7t(t, "length", gbh), H7t = (t)=>!!t && !Number.isNaN(Number(t)), rDr = (t)=>W7t(t, "number", H7t), nyn = (t)=>!!t && Number.isInteger(Number(t)), lbh = (t)=>t.endsWith("%") && H7t(t.slice(0, -1)), uT = (t)=>ssa.test(t), wit = (t)=>ibh.test(t), cbh = new Set([
    "length",
    "size",
    "percentage"
]), ubh = (t)=>W7t(t, cbh, osa), dbh = (t)=>W7t(t, "position", osa), hbh = new Set([
    "image",
    "url"
]), pbh = (t)=>W7t(t, hbh, vbh), mbh = (t)=>W7t(t, "", fbh), iyn = ()=>!0, W7t = (t, e, n)=>{
    const i = ssa.exec(t);
    return i ? i[1] ? typeof e == "string" ? i[1] === e : e.has(i[1]) : n(i[2]) : !1;
}, gbh = (t)=>rbh.test(t) && !sbh.test(t), osa = ()=>!1, fbh = (t)=>obh.test(t), vbh = (t)=>abh.test(t), _bh = ()=>{
    const t = u6("colors"), e = u6("spacing"), n = u6("blur"), i = u6("brightness"), r = u6("borderColor"), s = u6("borderRadius"), o = u6("borderSpacing"), a = u6("borderWidth"), l = u6("contrast"), c = u6("grayscale"), u = u6("hueRotate"), d = u6("invert"), h = u6("gap"), p = u6("gradientColorStops"), g = u6("gradientColorStopPositions"), f = u6("inset"), _ = u6("margin"), b = u6("opacity"), y = u6("padding"), S = u6("saturate"), k = u6("scale"), C = u6("sepia"), T = u6("skew"), I = u6("space"), A = u6("translate"), P = ()=>[
            "auto",
            "contain",
            "none"
        ], M = ()=>[
            "auto",
            "hidden",
            "clip",
            "visible",
            "scroll"
        ], O = ()=>[
            "auto",
            uT,
            e
        ], N = ()=>[
            uT,
            e
        ], U = ()=>[
            "",
            _We,
            kit
        ], j = ()=>[
            "auto",
            H7t,
            uT
        ], $ = ()=>[
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top"
        ], H = ()=>[
            "solid",
            "dashed",
            "dotted",
            "double",
            "none"
        ], G = ()=>[
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
        ], q = ()=>[
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch"
        ], K = ()=>[
            "",
            "0",
            uT
        ], V = ()=>[
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column"
        ], Y = ()=>[
            H7t,
            uT
        ];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [
                iyn
            ],
            spacing: [
                _We,
                kit
            ],
            blur: [
                "none",
                "",
                wit,
                uT
            ],
            brightness: Y(),
            borderColor: [
                t
            ],
            borderRadius: [
                "none",
                "",
                "full",
                wit,
                uT
            ],
            borderSpacing: N(),
            borderWidth: U(),
            contrast: Y(),
            grayscale: K(),
            hueRotate: Y(),
            invert: K(),
            gap: N(),
            gradientColorStops: [
                t
            ],
            gradientColorStopPositions: [
                lbh,
                kit
            ],
            inset: O(),
            margin: O(),
            opacity: Y(),
            padding: N(),
            saturate: Y(),
            scale: Y(),
            sepia: K(),
            skew: Y(),
            space: N(),
            translate: N()
        },
        classGroups: {
            aspect: [
                {
                    aspect: [
                        "auto",
                        "square",
                        "video",
                        uT
                    ]
                }
            ],
            container: [
                "container"
            ],
            columns: [
                {
                    columns: [
                        wit
                    ]
                }
            ],
            "break-after": [
                {
                    "break-after": V()
                }
            ],
            "break-before": [
                {
                    "break-before": V()
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
                        ...$(),
                        uT
                    ]
                }
            ],
            overflow: [
                {
                    overflow: M()
                }
            ],
            "overflow-x": [
                {
                    "overflow-x": M()
                }
            ],
            "overflow-y": [
                {
                    "overflow-y": M()
                }
            ],
            overscroll: [
                {
                    overscroll: P()
                }
            ],
            "overscroll-x": [
                {
                    "overscroll-x": P()
                }
            ],
            "overscroll-y": [
                {
                    "overscroll-y": P()
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
                        f
                    ]
                }
            ],
            "inset-x": [
                {
                    "inset-x": [
                        f
                    ]
                }
            ],
            "inset-y": [
                {
                    "inset-y": [
                        f
                    ]
                }
            ],
            start: [
                {
                    start: [
                        f
                    ]
                }
            ],
            end: [
                {
                    end: [
                        f
                    ]
                }
            ],
            top: [
                {
                    top: [
                        f
                    ]
                }
            ],
            right: [
                {
                    right: [
                        f
                    ]
                }
            ],
            bottom: [
                {
                    bottom: [
                        f
                    ]
                }
            ],
            left: [
                {
                    left: [
                        f
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
                        nyn,
                        uT
                    ]
                }
            ],
            basis: [
                {
                    basis: O()
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
                        uT
                    ]
                }
            ],
            grow: [
                {
                    grow: K()
                }
            ],
            shrink: [
                {
                    shrink: K()
                }
            ],
            order: [
                {
                    order: [
                        "first",
                        "last",
                        "none",
                        nyn,
                        uT
                    ]
                }
            ],
            "grid-cols": [
                {
                    "grid-cols": [
                        iyn
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
                                nyn,
                                uT
                            ]
                        },
                        uT
                    ]
                }
            ],
            "col-start": [
                {
                    "col-start": j()
                }
            ],
            "col-end": [
                {
                    "col-end": j()
                }
            ],
            "grid-rows": [
                {
                    "grid-rows": [
                        iyn
                    ]
                }
            ],
            "row-start-end": [
                {
                    row: [
                        "auto",
                        {
                            span: [
                                nyn,
                                uT
                            ]
                        },
                        uT
                    ]
                }
            ],
            "row-start": [
                {
                    "row-start": j()
                }
            ],
            "row-end": [
                {
                    "row-end": j()
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
                        uT
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
                        uT
                    ]
                }
            ],
            gap: [
                {
                    gap: [
                        h
                    ]
                }
            ],
            "gap-x": [
                {
                    "gap-x": [
                        h
                    ]
                }
            ],
            "gap-y": [
                {
                    "gap-y": [
                        h
                    ]
                }
            ],
            "justify-content": [
                {
                    justify: [
                        "normal",
                        ...q()
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
                        ...q(),
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
                        ...q(),
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
                        y
                    ]
                }
            ],
            px: [
                {
                    px: [
                        y
                    ]
                }
            ],
            py: [
                {
                    py: [
                        y
                    ]
                }
            ],
            ps: [
                {
                    ps: [
                        y
                    ]
                }
            ],
            pe: [
                {
                    pe: [
                        y
                    ]
                }
            ],
            pt: [
                {
                    pt: [
                        y
                    ]
                }
            ],
            pr: [
                {
                    pr: [
                        y
                    ]
                }
            ],
            pb: [
                {
                    pb: [
                        y
                    ]
                }
            ],
            pl: [
                {
                    pl: [
                        y
                    ]
                }
            ],
            m: [
                {
                    m: [
                        _
                    ]
                }
            ],
            mx: [
                {
                    mx: [
                        _
                    ]
                }
            ],
            my: [
                {
                    my: [
                        _
                    ]
                }
            ],
            ms: [
                {
                    ms: [
                        _
                    ]
                }
            ],
            me: [
                {
                    me: [
                        _
                    ]
                }
            ],
            mt: [
                {
                    mt: [
                        _
                    ]
                }
            ],
            mr: [
                {
                    mr: [
                        _
                    ]
                }
            ],
            mb: [
                {
                    mb: [
                        _
                    ]
                }
            ],
            ml: [
                {
                    ml: [
                        _
                    ]
                }
            ],
            "space-x": [
                {
                    "space-x": [
                        I
                    ]
                }
            ],
            "space-x-reverse": [
                "space-x-reverse"
            ],
            "space-y": [
                {
                    "space-y": [
                        I
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
                        uT,
                        e
                    ]
                }
            ],
            "min-w": [
                {
                    "min-w": [
                        uT,
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
                        uT,
                        e,
                        "none",
                        "full",
                        "min",
                        "max",
                        "fit",
                        "prose",
                        {
                            screen: [
                                wit
                            ]
                        },
                        wit
                    ]
                }
            ],
            h: [
                {
                    h: [
                        uT,
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
                        uT,
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
                        uT,
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
                        uT,
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
                        wit,
                        kit
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
                        rDr
                    ]
                }
            ],
            "font-family": [
                {
                    font: [
                        iyn
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
                        uT
                    ]
                }
            ],
            "line-clamp": [
                {
                    "line-clamp": [
                        "none",
                        H7t,
                        rDr
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
                        _We,
                        uT
                    ]
                }
            ],
            "list-image": [
                {
                    "list-image": [
                        "none",
                        uT
                    ]
                }
            ],
            "list-style-type": [
                {
                    list: [
                        "none",
                        "disc",
                        "decimal",
                        uT
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
                        t
                    ]
                }
            ],
            "placeholder-opacity": [
                {
                    "placeholder-opacity": [
                        b
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
                        t
                    ]
                }
            ],
            "text-opacity": [
                {
                    "text-opacity": [
                        b
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
                        ...H(),
                        "wavy"
                    ]
                }
            ],
            "text-decoration-thickness": [
                {
                    decoration: [
                        "auto",
                        "from-font",
                        _We,
                        kit
                    ]
                }
            ],
            "underline-offset": [
                {
                    "underline-offset": [
                        "auto",
                        _We,
                        uT
                    ]
                }
            ],
            "text-decoration-color": [
                {
                    decoration: [
                        t
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
                    indent: N()
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
                        uT
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
                        uT
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
                        b
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
                        ...$(),
                        dbh
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
                        ubh
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
                        pbh
                    ]
                }
            ],
            "bg-color": [
                {
                    bg: [
                        t
                    ]
                }
            ],
            "gradient-from-pos": [
                {
                    from: [
                        g
                    ]
                }
            ],
            "gradient-via-pos": [
                {
                    via: [
                        g
                    ]
                }
            ],
            "gradient-to-pos": [
                {
                    to: [
                        g
                    ]
                }
            ],
            "gradient-from": [
                {
                    from: [
                        p
                    ]
                }
            ],
            "gradient-via": [
                {
                    via: [
                        p
                    ]
                }
            ],
            "gradient-to": [
                {
                    to: [
                        p
                    ]
                }
            ],
            rounded: [
                {
                    rounded: [
                        s
                    ]
                }
            ],
            "rounded-s": [
                {
                    "rounded-s": [
                        s
                    ]
                }
            ],
            "rounded-e": [
                {
                    "rounded-e": [
                        s
                    ]
                }
            ],
            "rounded-t": [
                {
                    "rounded-t": [
                        s
                    ]
                }
            ],
            "rounded-r": [
                {
                    "rounded-r": [
                        s
                    ]
                }
            ],
            "rounded-b": [
                {
                    "rounded-b": [
                        s
                    ]
                }
            ],
            "rounded-l": [
                {
                    "rounded-l": [
                        s
                    ]
                }
            ],
            "rounded-ss": [
                {
                    "rounded-ss": [
                        s
                    ]
                }
            ],
            "rounded-se": [
                {
                    "rounded-se": [
                        s
                    ]
                }
            ],
            "rounded-ee": [
                {
                    "rounded-ee": [
                        s
                    ]
                }
            ],
            "rounded-es": [
                {
                    "rounded-es": [
                        s
                    ]
                }
            ],
            "rounded-tl": [
                {
                    "rounded-tl": [
                        s
                    ]
                }
            ],
            "rounded-tr": [
                {
                    "rounded-tr": [
                        s
                    ]
                }
            ],
            "rounded-br": [
                {
                    "rounded-br": [
                        s
                    ]
                }
            ],
            "rounded-bl": [
                {
                    "rounded-bl": [
                        s
                    ]
                }
            ],
            "border-w": [
                {
                    border: [
                        a
                    ]
                }
            ],
            "border-w-x": [
                {
                    "border-x": [
                        a
                    ]
                }
            ],
            "border-w-y": [
                {
                    "border-y": [
                        a
                    ]
                }
            ],
            "border-w-s": [
                {
                    "border-s": [
                        a
                    ]
                }
            ],
            "border-w-e": [
                {
                    "border-e": [
                        a
                    ]
                }
            ],
            "border-w-t": [
                {
                    "border-t": [
                        a
                    ]
                }
            ],
            "border-w-r": [
                {
                    "border-r": [
                        a
                    ]
                }
            ],
            "border-w-b": [
                {
                    "border-b": [
                        a
                    ]
                }
            ],
            "border-w-l": [
                {
                    "border-l": [
                        a
                    ]
                }
            ],
            "border-opacity": [
                {
                    "border-opacity": [
                        b
                    ]
                }
            ],
            "border-style": [
                {
                    border: [
                        ...H(),
                        "hidden"
                    ]
                }
            ],
            "divide-x": [
                {
                    "divide-x": [
                        a
                    ]
                }
            ],
            "divide-x-reverse": [
                "divide-x-reverse"
            ],
            "divide-y": [
                {
                    "divide-y": [
                        a
                    ]
                }
            ],
            "divide-y-reverse": [
                "divide-y-reverse"
            ],
            "divide-opacity": [
                {
                    "divide-opacity": [
                        b
                    ]
                }
            ],
            "divide-style": [
                {
                    divide: H()
                }
            ],
            "border-color": [
                {
                    border: [
                        r
                    ]
                }
            ],
            "border-color-x": [
                {
                    "border-x": [
                        r
                    ]
                }
            ],
            "border-color-y": [
                {
                    "border-y": [
                        r
                    ]
                }
            ],
            "border-color-s": [
                {
                    "border-s": [
                        r
                    ]
                }
            ],
            "border-color-e": [
                {
                    "border-e": [
                        r
                    ]
                }
            ],
            "border-color-t": [
                {
                    "border-t": [
                        r
                    ]
                }
            ],
            "border-color-r": [
                {
                    "border-r": [
                        r
                    ]
                }
            ],
            "border-color-b": [
                {
                    "border-b": [
                        r
                    ]
                }
            ],
            "border-color-l": [
                {
                    "border-l": [
                        r
                    ]
                }
            ],
            "divide-color": [
                {
                    divide: [
                        r
                    ]
                }
            ],
            "outline-style": [
                {
                    outline: [
                        "",
                        ...H()
                    ]
                }
            ],
            "outline-offset": [
                {
                    "outline-offset": [
                        _We,
                        uT
                    ]
                }
            ],
            "outline-w": [
                {
                    outline: [
                        _We,
                        kit
                    ]
                }
            ],
            "outline-color": [
                {
                    outline: [
                        t
                    ]
                }
            ],
            "ring-w": [
                {
                    ring: U()
                }
            ],
            "ring-w-inset": [
                "ring-inset"
            ],
            "ring-color": [
                {
                    ring: [
                        t
                    ]
                }
            ],
            "ring-opacity": [
                {
                    "ring-opacity": [
                        b
                    ]
                }
            ],
            "ring-offset-w": [
                {
                    "ring-offset": [
                        _We,
                        kit
                    ]
                }
            ],
            "ring-offset-color": [
                {
                    "ring-offset": [
                        t
                    ]
                }
            ],
            shadow: [
                {
                    shadow: [
                        "",
                        "inner",
                        "none",
                        wit,
                        mbh
                    ]
                }
            ],
            "shadow-color": [
                {
                    shadow: [
                        iyn
                    ]
                }
            ],
            opacity: [
                {
                    opacity: [
                        b
                    ]
                }
            ],
            "mix-blend": [
                {
                    "mix-blend": [
                        ...G(),
                        "plus-lighter",
                        "plus-darker"
                    ]
                }
            ],
            "bg-blend": [
                {
                    "bg-blend": G()
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
                        n
                    ]
                }
            ],
            brightness: [
                {
                    brightness: [
                        i
                    ]
                }
            ],
            contrast: [
                {
                    contrast: [
                        l
                    ]
                }
            ],
            "drop-shadow": [
                {
                    "drop-shadow": [
                        "",
                        "none",
                        wit,
                        uT
                    ]
                }
            ],
            grayscale: [
                {
                    grayscale: [
                        c
                    ]
                }
            ],
            "hue-rotate": [
                {
                    "hue-rotate": [
                        u
                    ]
                }
            ],
            invert: [
                {
                    invert: [
                        d
                    ]
                }
            ],
            saturate: [
                {
                    saturate: [
                        S
                    ]
                }
            ],
            sepia: [
                {
                    sepia: [
                        C
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
                        n
                    ]
                }
            ],
            "backdrop-brightness": [
                {
                    "backdrop-brightness": [
                        i
                    ]
                }
            ],
            "backdrop-contrast": [
                {
                    "backdrop-contrast": [
                        l
                    ]
                }
            ],
            "backdrop-grayscale": [
                {
                    "backdrop-grayscale": [
                        c
                    ]
                }
            ],
            "backdrop-hue-rotate": [
                {
                    "backdrop-hue-rotate": [
                        u
                    ]
                }
            ],
            "backdrop-invert": [
                {
                    "backdrop-invert": [
                        d
                    ]
                }
            ],
            "backdrop-opacity": [
                {
                    "backdrop-opacity": [
                        b
                    ]
                }
            ],
            "backdrop-saturate": [
                {
                    "backdrop-saturate": [
                        S
                    ]
                }
            ],
            "backdrop-sepia": [
                {
                    "backdrop-sepia": [
                        C
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
                        o
                    ]
                }
            ],
            "border-spacing-x": [
                {
                    "border-spacing-x": [
                        o
                    ]
                }
            ],
            "border-spacing-y": [
                {
                    "border-spacing-y": [
                        o
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
                        uT
                    ]
                }
            ],
            duration: [
                {
                    duration: Y()
                }
            ],
            ease: [
                {
                    ease: [
                        "linear",
                        "in",
                        "out",
                        "in-out",
                        uT
                    ]
                }
            ],
            delay: [
                {
                    delay: Y()
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
                        uT
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
                        k
                    ]
                }
            ],
            "scale-x": [
                {
                    "scale-x": [
                        k
                    ]
                }
            ],
            "scale-y": [
                {
                    "scale-y": [
                        k
                    ]
                }
            ],
            rotate: [
                {
                    rotate: [
                        nyn,
                        uT
                    ]
                }
            ],
            "translate-x": [
                {
                    "translate-x": [
                        A
                    ]
                }
            ],
            "translate-y": [
                {
                    "translate-y": [
                        A
                    ]
                }
            ],
            "skew-x": [
                {
                    "skew-x": [
                        T
                    ]
                }
            ],
            "skew-y": [
                {
                    "skew-y": [
                        T
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
                        uT
                    ]
                }
            ],
            accent: [
                {
                    accent: [
                        "auto",
                        t
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
                        uT
                    ]
                }
            ],
            "caret-color": [
                {
                    caret: [
                        t
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
                    "scroll-m": N()
                }
            ],
            "scroll-mx": [
                {
                    "scroll-mx": N()
                }
            ],
            "scroll-my": [
                {
                    "scroll-my": N()
                }
            ],
            "scroll-ms": [
                {
                    "scroll-ms": N()
                }
            ],
            "scroll-me": [
                {
                    "scroll-me": N()
                }
            ],
            "scroll-mt": [
                {
                    "scroll-mt": N()
                }
            ],
            "scroll-mr": [
                {
                    "scroll-mr": N()
                }
            ],
            "scroll-mb": [
                {
                    "scroll-mb": N()
                }
            ],
            "scroll-ml": [
                {
                    "scroll-ml": N()
                }
            ],
            "scroll-p": [
                {
                    "scroll-p": N()
                }
            ],
            "scroll-px": [
                {
                    "scroll-px": N()
                }
            ],
            "scroll-py": [
                {
                    "scroll-py": N()
                }
            ],
            "scroll-ps": [
                {
                    "scroll-ps": N()
                }
            ],
            "scroll-pe": [
                {
                    "scroll-pe": N()
                }
            ],
            "scroll-pt": [
                {
                    "scroll-pt": N()
                }
            ],
            "scroll-pr": [
                {
                    "scroll-pr": N()
                }
            ],
            "scroll-pb": [
                {
                    "scroll-pb": N()
                }
            ],
            "scroll-pl": [
                {
                    "scroll-pl": N()
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
                        uT
                    ]
                }
            ],
            fill: [
                {
                    fill: [
                        t,
                        "none"
                    ]
                }
            ],
            "stroke-w": [
                {
                    stroke: [
                        _We,
                        kit,
                        rDr
                    ]
                }
            ],
            stroke: [
                {
                    stroke: [
                        t,
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
}, asa = oJy(_bh);

}
