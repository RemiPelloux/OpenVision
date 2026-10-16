import { T8g } from "./qIc.js";
import { x } from "./tslib.es6.js";
var GEi, kfl, $vs, Hvs, wfl, Cfl, VEi, Wvs, Tfl, Efl, xfl, Gvs, Ifl, Afl, Rfl, Dfl, Mfl, Vvs, uN, jvs, Pfl, Lfl, Nfl, Ofl, Ffl, Bfl, Ufl, nDe, p9e, Eft, jEi, W5t, $fl, cw, m9e, Hfl, Wfl, Gfl, Vfl, jfl, qfl, G5t, xft, zfl, qvs, Kfl, Yfl, Xfl, zvs;
export { $fl, $vs, Afl, Bfl, Cfl, Dfl, Efl, Eft, Ffl, G5t, GEi, Gfl, Gvs, Hfl, Hvs, Ifl, Kfl, Lfl, Mfl, Nfl, Ofl, Pfl, Rfl, Tfl, Ufl, VEi, Vfl, Vvs, W5t, Wfl, Wvs, Xfl, Yfl, cw, jEi, jfl, jvs, kfl, m9e, nDe, p9e, qfl, qvs, uN, wfl, xfl, xft, zfl, zvs };
var __wakaru_E8g_initialized = false;
export function E8g() {
if (__wakaru_E8g_initialized) return;
__wakaru_E8g_initialized = true;
x(), GEi = "-", kfl = (e)=>{
    const t = Cfl(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: i } = e;
    return {
        getClassGroupId: (o)=>{
            const a = o.split(GEi);
            return a[0] === "" && a.length !== 1 && a.shift(), $vs(a, t) || wfl(o);
        },
        getConflictingClassGroupIds: (o, a)=>{
            const c = n[o] || [];
            return a && i[o] ? [
                ...c,
                ...i[o]
            ] : c;
        }
    };
}, $vs = (e, t)=>{
    if (e.length === 0) return t.classGroupId;
    const n = e[0], i = t.nextPart.get(n), r = i ? $vs(e.slice(1), i) : void 0;
    if (r) return r;
    if (t.validators.length === 0) return;
    const s = e.join(GEi);
    return t.validators.find(({ validator: o })=>o(s))?.classGroupId;
}, Hvs = /^\[(.+)\]$/, wfl = (e)=>{
    if (Hvs.test(e)) {
        const t = Hvs.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n;
    }
}, Cfl = (e)=>{
    const { theme: t, prefix: n } = e, i = {
        nextPart: new Map,
        validators: []
    };
    return Efl(Object.entries(e.classGroups), n).forEach(([s, o])=>{
        VEi(o, i, s, t);
    }), i;
}, VEi = (e, t, n, i)=>{
    e.forEach((r)=>{
        if (typeof r == "string") {
            const s = r === "" ? t : Wvs(t, r);
            s.classGroupId = n;
            return;
        }
        if (typeof r == "function") {
            if (Tfl(r)) {
                VEi(r(i), t, n, i);
                return;
            }
            t.validators.push({
                validator: r,
                classGroupId: n
            });
            return;
        }
        Object.entries(r).forEach(([s, o])=>{
            VEi(o, Wvs(t, s), n, i);
        });
    });
}, Wvs = (e, t)=>{
    let n = e;
    return t.split(GEi).forEach((i)=>{
        n.nextPart.has(i) || n.nextPart.set(i, {
            nextPart: new Map,
            validators: []
        }), n = n.nextPart.get(i);
    }), n;
}, Tfl = (e)=>e.isThemeGetter, Efl = (e, t)=>t ? e.map(([n, i])=>{
        const r = i.map((s)=>typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([o, a])=>[
                    t + o,
                    a
                ])) : s);
        return [
            n,
            r
        ];
    }) : e, xfl = (e)=>{
    if (e < 1) return {
        get: ()=>{},
        set: ()=>{}
    };
    let t = 0, n = new Map, i = new Map;
    const r = (s, o)=>{
        n.set(s, o), t++, t > e && (t = 0, i = n, n = new Map);
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
}, Gvs = "!", Ifl = (e)=>{
    const { separator: t, experimentalParseClassName: n } = e, i = t.length === 1, r = t[0], s = t.length, o = (a)=>{
        const c = [];
        let l = 0, u = 0, h;
        for(let b = 0; b < a.length; b++){
            let y = a[b];
            if (l === 0) {
                if (y === r && (i || a.slice(b, b + s) === t)) {
                    c.push(a.slice(u, b)), u = b + s;
                    continue;
                }
                if (y === "/") {
                    h = b;
                    continue;
                }
            }
            y === "[" ? l++ : y === "]" && l--;
        }
        const p = c.length === 0 ? a : a.substring(u), g = p.startsWith(Gvs), f = g ? p.substring(1) : p, v = h && h > u ? h - u : void 0;
        return {
            modifiers: c,
            hasImportantModifier: g,
            baseClassName: f,
            maybePostfixModifierPosition: v
        };
    };
    return n ? (a)=>n({
            className: a,
            parseClassName: o
        }) : o;
}, Afl = (e)=>{
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach((i)=>{
        i[0] === "[" ? (t.push(...n.sort(), i), n = []) : n.push(i);
    }), t.push(...n.sort()), t;
}, Rfl = (e)=>({
        cache: xfl(e.cacheSize),
        parseClassName: Ifl(e),
        ...kfl(e)
    }), Dfl = /\s+/, Mfl = (e, t)=>{
    const { parseClassName: n, getClassGroupId: i, getConflictingClassGroupIds: r } = t, s = [], o = e.trim().split(Dfl);
    let a = "";
    for(let c = o.length - 1; c >= 0; c -= 1){
        const l = o[c], { modifiers: u, hasImportantModifier: h, baseClassName: p, maybePostfixModifierPosition: g } = n(l);
        let f = !!g, v = i(f ? p.substring(0, g) : p);
        if (!v) {
            if (!f) {
                a = l + (a.length > 0 ? " " + a : a);
                continue;
            }
            if (v = i(p), !v) {
                a = l + (a.length > 0 ? " " + a : a);
                continue;
            }
            f = !1;
        }
        const b = Afl(u).join(":"), y = h ? b + Gvs : b, T = y + v;
        if (s.includes(T)) continue;
        s.push(T);
        const E = r(v, f);
        for(let A = 0; A < E.length; ++A){
            const R = E[A];
            s.push(y + R);
        }
        a = l + (a.length > 0 ? " " + a : a);
    }
    return a;
}, Vvs = (e)=>{
    if (typeof e == "string") return e;
    let t, n = "";
    for(let i = 0; i < e.length; i++)e[i] && (t = Vvs(e[i])) && (n && (n += " "), n += t);
    return n;
}, uN = (e)=>{
    const t = (n)=>n[e] || [];
    return t.isThemeGetter = !0, t;
}, jvs = /^\[(?:([a-z-]+):)?(.+)\]$/i, Pfl = /^\d+\/\d+$/, Lfl = new Set([
    "px",
    "full",
    "screen"
]), Nfl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ofl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ffl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Bfl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ufl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, nDe = (e)=>Eft(e) || Lfl.has(e) || Pfl.test(e), p9e = (e)=>xft(e, "length", zfl), Eft = (e)=>!!e && !Number.isNaN(Number(e)), jEi = (e)=>xft(e, "number", Eft), W5t = (e)=>!!e && Number.isInteger(Number(e)), $fl = (e)=>e.endsWith("%") && Eft(e.slice(0, -1)), cw = (e)=>jvs.test(e), m9e = (e)=>Nfl.test(e), Hfl = new Set([
    "length",
    "size",
    "percentage"
]), Wfl = (e)=>xft(e, Hfl, qvs), Gfl = (e)=>xft(e, "position", qvs), Vfl = new Set([
    "image",
    "url"
]), jfl = (e)=>xft(e, Vfl, Yfl), qfl = (e)=>xft(e, "", Kfl), G5t = ()=>!0, xft = (e, t, n)=>{
    const i = jvs.exec(e);
    return i ? i[1] ? typeof t == "string" ? i[1] === t : t.has(i[1]) : n(i[2]) : !1;
}, zfl = (e)=>Ofl.test(e) && !Ffl.test(e), qvs = ()=>!1, Kfl = (e)=>Bfl.test(e), Yfl = (e)=>Ufl.test(e), Xfl = ()=>{
    const e = uN("colors"), t = uN("spacing"), n = uN("blur"), i = uN("brightness"), r = uN("borderColor"), s = uN("borderRadius"), o = uN("borderSpacing"), a = uN("borderWidth"), c = uN("contrast"), l = uN("grayscale"), u = uN("hueRotate"), h = uN("invert"), p = uN("gap"), g = uN("gradientColorStops"), f = uN("gradientColorStopPositions"), v = uN("inset"), b = uN("margin"), y = uN("opacity"), T = uN("padding"), E = uN("saturate"), A = uN("scale"), R = uN("sepia"), D = uN("skew"), P = uN("space"), N = uN("translate"), O = ()=>[
            "auto",
            "contain",
            "none"
        ], F = ()=>[
            "auto",
            "hidden",
            "clip",
            "visible",
            "scroll"
        ], H = ()=>[
            "auto",
            cw,
            t
        ], $ = ()=>[
            cw,
            t
        ], W = ()=>[
            "",
            nDe,
            p9e
        ], G = ()=>[
            "auto",
            Eft,
            cw
        ], q = ()=>[
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top"
        ], z = ()=>[
            "solid",
            "dashed",
            "dotted",
            "double",
            "none"
        ], X = ()=>[
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
        ], Y = ()=>[
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch"
        ], Z = ()=>[
            "",
            "0",
            cw
        ], K = ()=>[
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column"
        ], J = ()=>[
            Eft,
            cw
        ];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [
                G5t
            ],
            spacing: [
                nDe,
                p9e
            ],
            blur: [
                "none",
                "",
                m9e,
                cw
            ],
            brightness: J(),
            borderColor: [
                e
            ],
            borderRadius: [
                "none",
                "",
                "full",
                m9e,
                cw
            ],
            borderSpacing: $(),
            borderWidth: W(),
            contrast: J(),
            grayscale: Z(),
            hueRotate: J(),
            invert: Z(),
            gap: $(),
            gradientColorStops: [
                e
            ],
            gradientColorStopPositions: [
                $fl,
                p9e
            ],
            inset: H(),
            margin: H(),
            opacity: J(),
            padding: $(),
            saturate: J(),
            scale: J(),
            sepia: Z(),
            skew: J(),
            space: $(),
            translate: $()
        },
        classGroups: {
            aspect: [
                {
                    aspect: [
                        "auto",
                        "square",
                        "video",
                        cw
                    ]
                }
            ],
            container: [
                "container"
            ],
            columns: [
                {
                    columns: [
                        m9e
                    ]
                }
            ],
            "break-after": [
                {
                    "break-after": K()
                }
            ],
            "break-before": [
                {
                    "break-before": K()
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
                        ...q(),
                        cw
                    ]
                }
            ],
            overflow: [
                {
                    overflow: F()
                }
            ],
            "overflow-x": [
                {
                    "overflow-x": F()
                }
            ],
            "overflow-y": [
                {
                    "overflow-y": F()
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
                        v
                    ]
                }
            ],
            "inset-x": [
                {
                    "inset-x": [
                        v
                    ]
                }
            ],
            "inset-y": [
                {
                    "inset-y": [
                        v
                    ]
                }
            ],
            start: [
                {
                    start: [
                        v
                    ]
                }
            ],
            end: [
                {
                    end: [
                        v
                    ]
                }
            ],
            top: [
                {
                    top: [
                        v
                    ]
                }
            ],
            right: [
                {
                    right: [
                        v
                    ]
                }
            ],
            bottom: [
                {
                    bottom: [
                        v
                    ]
                }
            ],
            left: [
                {
                    left: [
                        v
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
                        W5t,
                        cw
                    ]
                }
            ],
            basis: [
                {
                    basis: H()
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
                        cw
                    ]
                }
            ],
            grow: [
                {
                    grow: Z()
                }
            ],
            shrink: [
                {
                    shrink: Z()
                }
            ],
            order: [
                {
                    order: [
                        "first",
                        "last",
                        "none",
                        W5t,
                        cw
                    ]
                }
            ],
            "grid-cols": [
                {
                    "grid-cols": [
                        G5t
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
                                W5t,
                                cw
                            ]
                        },
                        cw
                    ]
                }
            ],
            "col-start": [
                {
                    "col-start": G()
                }
            ],
            "col-end": [
                {
                    "col-end": G()
                }
            ],
            "grid-rows": [
                {
                    "grid-rows": [
                        G5t
                    ]
                }
            ],
            "row-start-end": [
                {
                    row: [
                        "auto",
                        {
                            span: [
                                W5t,
                                cw
                            ]
                        },
                        cw
                    ]
                }
            ],
            "row-start": [
                {
                    "row-start": G()
                }
            ],
            "row-end": [
                {
                    "row-end": G()
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
                        cw
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
                        cw
                    ]
                }
            ],
            gap: [
                {
                    gap: [
                        p
                    ]
                }
            ],
            "gap-x": [
                {
                    "gap-x": [
                        p
                    ]
                }
            ],
            "gap-y": [
                {
                    "gap-y": [
                        p
                    ]
                }
            ],
            "justify-content": [
                {
                    justify: [
                        "normal",
                        ...Y()
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
                        ...Y(),
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
                        ...Y(),
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
                        T
                    ]
                }
            ],
            px: [
                {
                    px: [
                        T
                    ]
                }
            ],
            py: [
                {
                    py: [
                        T
                    ]
                }
            ],
            ps: [
                {
                    ps: [
                        T
                    ]
                }
            ],
            pe: [
                {
                    pe: [
                        T
                    ]
                }
            ],
            pt: [
                {
                    pt: [
                        T
                    ]
                }
            ],
            pr: [
                {
                    pr: [
                        T
                    ]
                }
            ],
            pb: [
                {
                    pb: [
                        T
                    ]
                }
            ],
            pl: [
                {
                    pl: [
                        T
                    ]
                }
            ],
            m: [
                {
                    m: [
                        b
                    ]
                }
            ],
            mx: [
                {
                    mx: [
                        b
                    ]
                }
            ],
            my: [
                {
                    my: [
                        b
                    ]
                }
            ],
            ms: [
                {
                    ms: [
                        b
                    ]
                }
            ],
            me: [
                {
                    me: [
                        b
                    ]
                }
            ],
            mt: [
                {
                    mt: [
                        b
                    ]
                }
            ],
            mr: [
                {
                    mr: [
                        b
                    ]
                }
            ],
            mb: [
                {
                    mb: [
                        b
                    ]
                }
            ],
            ml: [
                {
                    ml: [
                        b
                    ]
                }
            ],
            "space-x": [
                {
                    "space-x": [
                        P
                    ]
                }
            ],
            "space-x-reverse": [
                "space-x-reverse"
            ],
            "space-y": [
                {
                    "space-y": [
                        P
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
                        cw,
                        t
                    ]
                }
            ],
            "min-w": [
                {
                    "min-w": [
                        cw,
                        t,
                        "min",
                        "max",
                        "fit"
                    ]
                }
            ],
            "max-w": [
                {
                    "max-w": [
                        cw,
                        t,
                        "none",
                        "full",
                        "min",
                        "max",
                        "fit",
                        "prose",
                        {
                            screen: [
                                m9e
                            ]
                        },
                        m9e
                    ]
                }
            ],
            h: [
                {
                    h: [
                        cw,
                        t,
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
                        cw,
                        t,
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
                        cw,
                        t,
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
                        cw,
                        t,
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
                        m9e,
                        p9e
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
                        jEi
                    ]
                }
            ],
            "font-family": [
                {
                    font: [
                        G5t
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
                        cw
                    ]
                }
            ],
            "line-clamp": [
                {
                    "line-clamp": [
                        "none",
                        Eft,
                        jEi
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
                        nDe,
                        cw
                    ]
                }
            ],
            "list-image": [
                {
                    "list-image": [
                        "none",
                        cw
                    ]
                }
            ],
            "list-style-type": [
                {
                    list: [
                        "none",
                        "disc",
                        "decimal",
                        cw
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
                        e
                    ]
                }
            ],
            "placeholder-opacity": [
                {
                    "placeholder-opacity": [
                        y
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
                        e
                    ]
                }
            ],
            "text-opacity": [
                {
                    "text-opacity": [
                        y
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
                        ...z(),
                        "wavy"
                    ]
                }
            ],
            "text-decoration-thickness": [
                {
                    decoration: [
                        "auto",
                        "from-font",
                        nDe,
                        p9e
                    ]
                }
            ],
            "underline-offset": [
                {
                    "underline-offset": [
                        "auto",
                        nDe,
                        cw
                    ]
                }
            ],
            "text-decoration-color": [
                {
                    decoration: [
                        e
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
                    indent: $()
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
                        cw
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
                        cw
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
                        y
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
                        ...q(),
                        Gfl
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
                        Wfl
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
                        jfl
                    ]
                }
            ],
            "bg-color": [
                {
                    bg: [
                        e
                    ]
                }
            ],
            "gradient-from-pos": [
                {
                    from: [
                        f
                    ]
                }
            ],
            "gradient-via-pos": [
                {
                    via: [
                        f
                    ]
                }
            ],
            "gradient-to-pos": [
                {
                    to: [
                        f
                    ]
                }
            ],
            "gradient-from": [
                {
                    from: [
                        g
                    ]
                }
            ],
            "gradient-via": [
                {
                    via: [
                        g
                    ]
                }
            ],
            "gradient-to": [
                {
                    to: [
                        g
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
                        y
                    ]
                }
            ],
            "border-style": [
                {
                    border: [
                        ...z(),
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
                        y
                    ]
                }
            ],
            "divide-style": [
                {
                    divide: z()
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
                        ...z()
                    ]
                }
            ],
            "outline-offset": [
                {
                    "outline-offset": [
                        nDe,
                        cw
                    ]
                }
            ],
            "outline-w": [
                {
                    outline: [
                        nDe,
                        p9e
                    ]
                }
            ],
            "outline-color": [
                {
                    outline: [
                        e
                    ]
                }
            ],
            "ring-w": [
                {
                    ring: W()
                }
            ],
            "ring-w-inset": [
                "ring-inset"
            ],
            "ring-color": [
                {
                    ring: [
                        e
                    ]
                }
            ],
            "ring-opacity": [
                {
                    "ring-opacity": [
                        y
                    ]
                }
            ],
            "ring-offset-w": [
                {
                    "ring-offset": [
                        nDe,
                        p9e
                    ]
                }
            ],
            "ring-offset-color": [
                {
                    "ring-offset": [
                        e
                    ]
                }
            ],
            shadow: [
                {
                    shadow: [
                        "",
                        "inner",
                        "none",
                        m9e,
                        qfl
                    ]
                }
            ],
            "shadow-color": [
                {
                    shadow: [
                        G5t
                    ]
                }
            ],
            opacity: [
                {
                    opacity: [
                        y
                    ]
                }
            ],
            "mix-blend": [
                {
                    "mix-blend": [
                        ...X(),
                        "plus-lighter",
                        "plus-darker"
                    ]
                }
            ],
            "bg-blend": [
                {
                    "bg-blend": X()
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
                        c
                    ]
                }
            ],
            "drop-shadow": [
                {
                    "drop-shadow": [
                        "",
                        "none",
                        m9e,
                        cw
                    ]
                }
            ],
            grayscale: [
                {
                    grayscale: [
                        l
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
                        h
                    ]
                }
            ],
            saturate: [
                {
                    saturate: [
                        E
                    ]
                }
            ],
            sepia: [
                {
                    sepia: [
                        R
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
                        c
                    ]
                }
            ],
            "backdrop-grayscale": [
                {
                    "backdrop-grayscale": [
                        l
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
                        h
                    ]
                }
            ],
            "backdrop-opacity": [
                {
                    "backdrop-opacity": [
                        y
                    ]
                }
            ],
            "backdrop-saturate": [
                {
                    "backdrop-saturate": [
                        E
                    ]
                }
            ],
            "backdrop-sepia": [
                {
                    "backdrop-sepia": [
                        R
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
                        cw
                    ]
                }
            ],
            duration: [
                {
                    duration: J()
                }
            ],
            ease: [
                {
                    ease: [
                        "linear",
                        "in",
                        "out",
                        "in-out",
                        cw
                    ]
                }
            ],
            delay: [
                {
                    delay: J()
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
                        cw
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
                        A
                    ]
                }
            ],
            "scale-x": [
                {
                    "scale-x": [
                        A
                    ]
                }
            ],
            "scale-y": [
                {
                    "scale-y": [
                        A
                    ]
                }
            ],
            rotate: [
                {
                    rotate: [
                        W5t,
                        cw
                    ]
                }
            ],
            "translate-x": [
                {
                    "translate-x": [
                        N
                    ]
                }
            ],
            "translate-y": [
                {
                    "translate-y": [
                        N
                    ]
                }
            ],
            "skew-x": [
                {
                    "skew-x": [
                        D
                    ]
                }
            ],
            "skew-y": [
                {
                    "skew-y": [
                        D
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
                        cw
                    ]
                }
            ],
            accent: [
                {
                    accent: [
                        "auto",
                        e
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
                        cw
                    ]
                }
            ],
            "caret-color": [
                {
                    caret: [
                        e
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
                    "scroll-m": $()
                }
            ],
            "scroll-mx": [
                {
                    "scroll-mx": $()
                }
            ],
            "scroll-my": [
                {
                    "scroll-my": $()
                }
            ],
            "scroll-ms": [
                {
                    "scroll-ms": $()
                }
            ],
            "scroll-me": [
                {
                    "scroll-me": $()
                }
            ],
            "scroll-mt": [
                {
                    "scroll-mt": $()
                }
            ],
            "scroll-mr": [
                {
                    "scroll-mr": $()
                }
            ],
            "scroll-mb": [
                {
                    "scroll-mb": $()
                }
            ],
            "scroll-ml": [
                {
                    "scroll-ml": $()
                }
            ],
            "scroll-p": [
                {
                    "scroll-p": $()
                }
            ],
            "scroll-px": [
                {
                    "scroll-px": $()
                }
            ],
            "scroll-py": [
                {
                    "scroll-py": $()
                }
            ],
            "scroll-ps": [
                {
                    "scroll-ps": $()
                }
            ],
            "scroll-pe": [
                {
                    "scroll-pe": $()
                }
            ],
            "scroll-pt": [
                {
                    "scroll-pt": $()
                }
            ],
            "scroll-pr": [
                {
                    "scroll-pr": $()
                }
            ],
            "scroll-pb": [
                {
                    "scroll-pb": $()
                }
            ],
            "scroll-pl": [
                {
                    "scroll-pl": $()
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
                        cw
                    ]
                }
            ],
            fill: [
                {
                    fill: [
                        e,
                        "none"
                    ]
                }
            ],
            "stroke-w": [
                {
                    stroke: [
                        nDe,
                        p9e,
                        jEi
                    ]
                }
            ],
            stroke: [
                {
                    stroke: [
                        e,
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
}, zvs = T8g(Xfl);

}
