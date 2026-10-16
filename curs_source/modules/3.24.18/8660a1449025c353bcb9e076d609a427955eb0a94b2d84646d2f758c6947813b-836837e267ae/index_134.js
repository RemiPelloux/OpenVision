import { B3r, BAh, Cla, Dla, Dyn, Ela, FAh, GAh, HAh, JaS, Lla, Lyn, MW, Mla, NAh, Nla, OAh, Ola, Pit, QaS, Tla, U3r, WAh, ZaS, _1t, alS, bdi, clS, dlS, elS, fAh, hAh, j3r, jAh, nlS, olS, rUt, sUt, slS, ulS, v1t, vAh, vFe, z3r } from "./KTh.js";
import { IAh } from "./atomic.js";
import { VaS } from "./index_133.js";
import { GaS } from "./internals.js";
import { mAh } from "./node-utils.js";
import { NaS } from "./parse_4.js";
import { LaS } from "./traverse.js";
import { E } from "./tslib.es6.js";
var qAh, zAh, VAh, Fla, KAh, YAh, V3r, xhe, oUt, _Fe, Bla, XAh, aUt, b1t, Oyn, lUt, Fyn, K3r, Ula, ydi, Pz, nC, wWe, jla, ZAh, QAh, JAh, CWe, Y3r, eRh, tRh, nRh, iRh, $la, rRh, sRh, oRh, aRh, lRh, cRh, uRh, dRh, Hla, hRh, pRh;
export { $la, Bla, CWe, Fla, Fyn, Hla, JAh, K3r, KAh, Oyn, Pz, QAh, Ula, V3r, VAh, XAh, Y3r, YAh, ZAh, _Fe, aRh, aUt, b1t, cRh, dRh, eRh, hRh, iRh, jla, lRh, lUt, nC, nRh, oRh, oUt, pRh, qAh, rRh, sRh, tRh, uRh, wWe, xhe, ydi, zAh };
var __wakaru_mlS_initialized = false;
export function mlS() {
if (__wakaru_mlS_initialized) return;
__wakaru_mlS_initialized = true;
E(), NaS(), LaS(), GaS(), VaS(), mAh(), IAh(), qAh = Object.defineProperty, zAh = Object.getPrototypeOf, VAh = Reflect.get, Fla = (t)=>{
    throw TypeError(t);
}, KAh = (t, e, n)=>e in t ? qAh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, YAh = (t, e, n)=>KAh(t, typeof e != "symbol" ? e + "" : e, n), V3r = (t, e, n)=>e.has(t) || Fla("Cannot " + n), xhe = (t, e, n)=>(V3r(t, e, "read from private field"), n ? n.call(t) : e.get(t)), oUt = (t, e, n)=>e.has(t) ? Fla("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), _Fe = (t, e, n, i)=>(V3r(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n), Bla = (t, e, n)=>(V3r(t, e, "access private method"), n), XAh = (t, e, n)=>VAh(zAh(t), n, e), Pz = String.fromCodePoint, nC = String.raw, wWe = {
    flagGroups: (()=>{
        try {
            new RegExp("(?i:)");
        } catch  {
            return !1;
        }
        return !0;
    })(),
    unicodeSets: (()=>{
        try {
            new RegExp("[[]]", "v");
        } catch  {
            return !1;
        }
        return !0;
    })()
}, wWe.bugFlagVLiteralHyphenIsRange = wWe.unicodeSets ? (()=>{
    try {
        new RegExp(nC`[\d\-a]`, "v");
    } catch  {
        return !0;
    }
    return !1;
})() : !1, wWe.bugNestedClassIgnoresNegation = wWe.unicodeSets && new RegExp("[[^a]]", "v").test("a"), jla = {
    ES2025: 2025,
    ES2024: 2024,
    ES2018: 2018
}, ZAh = {
    auto: "auto",
    ES2025: "ES2025",
    ES2024: "ES2024",
    ES2018: "ES2018"
}, QAh = "[	-\r ]", JAh = new Set([
    Pz(304),
    Pz(305)
]), CWe = nC`[\p{L}\p{M}\p{N}\p{Pc}]`, Y3r = new Map(`C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/).map((t)=>[
        j3r(t),
        t
    ])), eRh = new Map([
    [
        "s",
        Pz(383)
    ],
    [
        Pz(383),
        "s"
    ]
]), tRh = new Map([
    [
        Pz(223),
        Pz(7838)
    ],
    [
        Pz(107),
        Pz(8490)
    ],
    [
        Pz(229),
        Pz(8491)
    ],
    [
        Pz(969),
        Pz(8486)
    ]
]), nRh = new Map([
    v1t(453),
    v1t(456),
    v1t(459),
    v1t(498),
    ...Mla(8072, 8079),
    ...Mla(8088, 8095),
    ...Mla(8104, 8111),
    v1t(8124),
    v1t(8140),
    v1t(8188)
]), iRh = new Map([
    [
        "alnum",
        nC`[\p{Alpha}\p{Nd}]`
    ],
    [
        "alpha",
        nC`\p{Alpha}`
    ],
    [
        "ascii",
        nC`\p{ASCII}`
    ],
    [
        "blank",
        nC`[\p{Zs}\t]`
    ],
    [
        "cntrl",
        nC`\p{Cc}`
    ],
    [
        "digit",
        nC`\p{Nd}`
    ],
    [
        "graph",
        nC`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`
    ],
    [
        "lower",
        nC`\p{Lower}`
    ],
    [
        "print",
        nC`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`
    ],
    [
        "punct",
        nC`[\p{P}\p{S}]`
    ],
    [
        "space",
        nC`\p{space}`
    ],
    [
        "upper",
        nC`\p{Upper}`
    ],
    [
        "word",
        nC`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`
    ],
    [
        "xdigit",
        nC`\p{AHex}`
    ]
]), $la = new Set([
    "Lower",
    "Lowercase",
    "Upper",
    "Uppercase",
    "Ll",
    "Lowercase_Letter",
    "Lt",
    "Titlecase_Letter",
    "Lu",
    "Uppercase_Letter"
]), rRh = {
    AbsenceFunction ({ node: t, parent: e, replaceWith: n }) {
        const { body: i, kind: r } = t;
        if (r === "repeater") {
            const s = vFe();
            s.body[0].body.push(sUt({
                negate: !0,
                body: i
            }), Dyn("Any"));
            const o = vFe();
            o.body[0].body.push(vAh("greedy", 0, 1 / 0, s)), n(MW(o, e), {
                traverse: !0
            });
        } else throw new Error('Unsupported absence function "(?~|"');
    },
    Alternative: {
        enter ({ node: t, parent: e, key: n }, { flagDirectivesByAlt: i }) {
            const r = t.body.filter((s)=>s.kind === "flags");
            for(let s = n + 1; s < e.body.length; s++){
                const o = e.body[s];
                bdi(i, o, []).push(...r);
            }
        },
        exit ({ node: t }, { flagDirectivesByAlt: e }) {
            if (e.get(t)?.length) {
                const n = BAh(e.get(t));
                if (n) {
                    const i = vFe({
                        flags: n
                    });
                    i.body[0].body = t.body, t.body = [
                        MW(i, t)
                    ];
                }
            }
        }
    },
    Assertion ({ node: t, parent: e, key: n, container: i, root: r, remove: s, replaceWith: o }, a) {
        const { kind: l, negate: c } = t, { asciiWordBoundaries: u, avoidSubclass: d, supportedGNodes: h, wordIsAscii: p } = a;
        if (l === "text_segment_boundary") throw new Error(`Unsupported text segment boundary "\\${c ? "Y" : "y"}"`);
        if (l === "line_end") o(MW(sUt({
            body: [
                rUt({
                    body: [
                        Cla("string_end")
                    ]
                }),
                rUt({
                    body: [
                        B3r(10)
                    ]
                })
            ]
        }), e));
        else if (l === "line_start") o(MW(Pit(nC`(?<=\A|\n(?!\z))`, {
            skipLookbehindValidation: !0
        }), e));
        else if (l === "search_start") if (h.has(t)) r.flags.sticky = !0, s();
        else {
            const g = i[n - 1];
            if (g && nlS(g)) o(MW(sUt({
                negate: !0
            }), e));
            else {
                if (d) throw new Error(nC`Uses "\G" in a way that requires a subclass`);
                o(_1t(Cla("string_start"), e)), a.strategy = "clip_search";
            }
        }
        else if (!(l === "string_end" || l === "string_start")) if (l === "string_end_newline") o(MW(Pit(nC`(?=\n?\z)`), e));
        else if (l === "word_boundary") {
            if (!p && !u) {
                const g = `(?:(?<=${CWe})(?!${CWe})|(?<!${CWe})(?=${CWe}))`, f = `(?:(?<=${CWe})(?=${CWe})|(?<!${CWe})(?!${CWe}))`;
                o(MW(Pit(c ? f : g), e));
            }
        } else throw new Error(`Unexpected assertion kind "${l}"`);
    },
    Backreference ({ node: t }, { jsGroupNameMap: e }) {
        let { ref: n } = t;
        typeof n == "string" && !Nla(n) && (n = Dla(n, e), t.ref = n);
    },
    CapturingGroup ({ node: t }, { jsGroupNameMap: e, subroutineRefMap: n }) {
        let { name: i } = t;
        i && !Nla(i) && (i = Dla(i, e), t.name = i), n.set(t.number, t), i && n.set(i, t);
    },
    CharacterClassRange ({ node: t, parent: e, replaceWith: n }) {
        if (e.kind === "intersection") {
            const i = U3r({
                body: [
                    t
                ]
            });
            n(MW(i, e), {
                traverse: !0
            });
        }
    },
    CharacterSet ({ node: t, parent: e, replaceWith: n }, { accuracy: i, minTargetEs2024: r, digitIsAscii: s, spaceIsAscii: o, wordIsAscii: a }) {
        const { kind: l, negate: c, value: u } = t;
        if (s && (l === "digit" || u === "digit")) {
            n(_1t(Ela("digit", {
                negate: c
            }), e));
            return;
        }
        if (o && (l === "space" || u === "space")) {
            n(MW(Lla(Pit(QAh), c), e));
            return;
        }
        if (a && (l === "word" || u === "word")) {
            n(_1t(Ela("word", {
                negate: c
            }), e));
            return;
        }
        if (l === "any") n(_1t(Dyn("Any"), e));
        else if (l === "digit") n(_1t(Dyn("Nd", {
            negate: c
        }), e));
        else if (l !== "dot") if (l === "text_segment") {
            if (i === "strict") throw new Error(nC`Use of "\X" requires non-strict accuracy`);
            const d = "\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?", h = nC`\p{RI}{2}|${d}(?:\u200D${d})*`;
            n(MW(Pit(nC`(?>\r\n|${r ? nC`\p{RGI_Emoji}` : h}|\P{M}\p{M}*)`, {
                skipPropertyNameValidation: !0
            }), e));
        } else if (l === "hex") n(_1t(Dyn("AHex", {
            negate: c
        }), e));
        else if (l === "newline") n(MW(Pit(c ? `[^
]` : `(?>\r
?|[
\v\f\x85\u2028\u2029])`), e));
        else if (l === "posix") if (!r && (u === "graph" || u === "print")) {
            if (i === "strict") throw new Error(`POSIX class "${u}" requires min target ES2024 or non-strict accuracy`);
            let d = {
                graph: "!-~",
                print: " -~"
            }[u];
            c && (d = `\0-${Pz(d.codePointAt(0) - 1)}${Pz(d.codePointAt(2) + 1)}-\u{10FFFF}`), n(MW(Pit(`[${d}]`), e));
        } else n(MW(Lla(Pit(iRh.get(u)), c), e));
        else if (l === "property") Y3r.has(j3r(u)) || (t.key = "sc");
        else if (l === "space") n(_1t(Dyn("space", {
            negate: c
        }), e));
        else if (l === "word") n(MW(Lla(Pit(CWe), c), e));
        else throw new Error(`Unexpected character set kind "${l}"`);
    },
    Directive ({ node: t, parent: e, root: n, remove: i, replaceWith: r, removeAllPrevSiblings: s, removeAllNextSiblings: o }) {
        const { kind: a, flags: l } = t;
        if (a === "flags") if (!l.enable && !l.disable) i();
        else {
            const c = vFe({
                flags: l
            });
            c.body[0].body = o(), r(MW(c, e), {
                traverse: !0
            });
        }
        else if (a === "keep") {
            const c = n.body[0], d = n.body.length === 1 && hAh(c, {
                type: "Group"
            }) && c.body[0].body.length === 1 ? c.body[0] : n;
            if (e.parent !== d || d.body.length > 1) throw new Error(nC`Uses "\K" in a way that's unsupported`);
            const h = sUt({
                behind: !0
            });
            h.body[0].body = s(), r(MW(h, e));
        } else throw new Error(`Unexpected directive kind "${a}"`);
    },
    Flags ({ node: t, parent: e }) {
        if (t.posixIsAscii) throw new Error('Unsupported flag "P"');
        if (t.textSegmentMode === "word") throw new Error('Unsupported flag "y{w}"');
        [
            "digitIsAscii",
            "extended",
            "posixIsAscii",
            "spaceIsAscii",
            "wordIsAscii",
            "textSegmentMode"
        ].forEach((n)=>delete t[n]), Object.assign(t, {
            global: !1,
            hasIndices: !1,
            multiline: !1,
            sticky: t.sticky ?? !1
        }), e.options = {
            disable: {
                x: !0,
                n: !0
            },
            force: {
                v: !0
            }
        };
    },
    Group ({ node: t }) {
        if (!t.flags) return;
        const { enable: e, disable: n } = t.flags;
        e?.extended && delete e.extended, n?.extended && delete n.extended, e?.dotAll && n?.dotAll && delete e.dotAll, e?.ignoreCase && n?.ignoreCase && delete e.ignoreCase, e && !Object.keys(e).length && delete t.flags.enable, n && !Object.keys(n).length && delete t.flags.disable, !t.flags.enable && !t.flags.disable && delete t.flags;
    },
    LookaroundAssertion ({ node: t }, e) {
        const { kind: n } = t;
        n === "lookbehind" && (e.passedLookbehind = !0);
    },
    NamedCallout ({ node: t, parent: e, replaceWith: n }) {
        const { kind: i } = t;
        if (i === "fail") n(MW(sUt({
            negate: !0
        }), e));
        else throw new Error(`Unsupported named callout "(*${i.toUpperCase()}"`);
    },
    Quantifier ({ node: t }) {
        if (t.body.type === "Quantifier") {
            const e = vFe();
            e.body[0].body.push(t.body), t.body = MW(e, t);
        }
    },
    Regex: {
        enter ({ node: t }, { supportedGNodes: e }) {
            const n = [];
            let i = !1, r = !1;
            for (const s of t.body)if (s.body.length === 1 && s.body[0].kind === "search_start") s.body.pop();
            else {
                const o = jAh(s.body);
                o ? (i = !0, Array.isArray(o) ? n.push(...o) : n.push(o)) : r = !0;
            }
            i && !r && n.forEach((s)=>e.add(s));
        },
        exit (t, { accuracy: e, passedLookbehind: n, strategy: i }) {
            if (e === "strict" && n && i) throw new Error(nC`Uses "\G" in a way that requires non-strict accuracy`);
        }
    },
    Subroutine ({ node: t }, { jsGroupNameMap: e }) {
        let { ref: n } = t;
        typeof n == "string" && !Nla(n) && (n = Dla(n, e), t.ref = n);
    }
}, sRh = {
    Backreference ({ node: t }, { multiplexCapturesToLeftByRef: e, reffedNodesByReferencer: n }) {
        const { orphan: i, ref: r } = t;
        i || n.set(t, [
            ...e.get(r).map(({ node: s })=>s)
        ]);
    },
    CapturingGroup: {
        enter ({ node: t, parent: e, replaceWith: n, skip: i }, { groupOriginByCopy: r, groupsByName: s, multiplexCapturesToLeftByRef: o, openRefs: a, reffedNodesByReferencer: l }) {
            const c = r.get(t);
            if (c && a.has(t.number)) {
                const d = _1t(FAh(t.number), e);
                l.set(d, a.get(t.number)), n(d);
                return;
            }
            a.set(t.number, t), o.set(t.number, []), t.name && bdi(o, t.name, []);
            const u = o.get(t.name ?? t.number);
            for(let d = 0; d < u.length; d++){
                const h = u[d];
                if (c === h.node || c && c === h.origin || t === h.origin) {
                    u.splice(d, 1);
                    break;
                }
            }
            if (o.get(t.number).push({
                node: t,
                origin: c
            }), t.name && o.get(t.name).push({
                node: t,
                origin: c
            }), t.name) {
                const d = bdi(s, t.name, new Map);
                let h = !1;
                if (c) h = !0;
                else for (const p of d.values())if (!p.hasDuplicateNameToRemove) {
                    h = !0;
                    break;
                }
                s.get(t.name).set(t, {
                    node: t,
                    hasDuplicateNameToRemove: h
                });
            }
        },
        exit ({ node: t }, { openRefs: e }) {
            e.delete(t.number);
        }
    },
    Group: {
        enter ({ node: t }, e) {
            e.prevFlags = e.currentFlags, t.flags && (e.currentFlags = z3r(e.currentFlags, t.flags));
        },
        exit (t, e) {
            e.currentFlags = e.prevFlags;
        }
    },
    Subroutine ({ node: t, parent: e, replaceWith: n }, i) {
        const { isRecursive: r, ref: s } = t;
        if (r) {
            let u = e;
            for(; (u = u.parent) && !(u.type === "CapturingGroup" && (u.name === s || u.number === s)););
            i.reffedNodesByReferencer.set(t, u);
            return;
        }
        const o = i.subroutineRefMap.get(s), a = s === 0, l = a ? FAh(0) : OAh(o, i.groupOriginByCopy, null);
        let c = l;
        if (!a) {
            const u = BAh(JaS(o, (h)=>h.type === "Group" && !!h.flags)), d = u ? z3r(i.globalFlags, u) : i.globalFlags;
            ZaS(d, i.currentFlags) || (c = vFe({
                flags: elS(d)
            }), c.body[0].body.push(l));
        }
        n(MW(c, e), {
            traverse: !a
        });
    }
}, oRh = {
    Backreference ({ node: t, parent: e, replaceWith: n }, i) {
        if (t.orphan) {
            i.highestOrphanBackref = Math.max(i.highestOrphanBackref, t.ref);
            return;
        }
        const s = i.reffedNodesByReferencer.get(t).filter((o)=>QaS(o, t));
        if (!s.length) n(MW(sUt({
            negate: !0
        }), e));
        else if (s.length > 1) {
            const o = vFe({
                atomic: !0,
                body: s.reverse().map((a)=>rUt({
                        body: [
                            Tla(a.number)
                        ]
                    }))
            });
            n(MW(o, e));
        } else t.ref = s[0].number;
    },
    CapturingGroup ({ node: t }, e) {
        t.number = ++e.numCapturesToLeft, t.name && e.groupsByName.get(t.name).get(t).hasDuplicateNameToRemove && delete t.name;
    },
    Regex: {
        exit ({ node: t }, e) {
            const n = Math.max(e.highestOrphanBackref - e.numCapturesToLeft, 0);
            for(let i = 0; i < n; i++){
                const r = fAh();
                t.body.at(-1).body.push(r);
            }
        }
    },
    Subroutine ({ node: t }, e) {
        !t.isRecursive || t.ref === 0 || (t.ref = e.reffedNodesByReferencer.get(t).number);
    }
}, aRh = {
    "*": {
        enter ({ node: t }, e) {
            if (WAh(t)) {
                const n = e.getCurrentModI();
                e.pushModI(t.flags ? z3r({
                    ignoreCase: n
                }, t.flags).ignoreCase : n);
            }
        },
        exit ({ node: t }, e) {
            WAh(t) && e.popModI();
        }
    },
    Backreference (t, e) {
        e.setHasCasedChar();
    },
    Character ({ node: t }, e) {
        Ola(Pz(t.value)) && e.setHasCasedChar();
    },
    CharacterClassRange ({ node: t, skip: e }, n) {
        e(), HAh(t, {
            firstOnly: !0
        }).length && n.setHasCasedChar();
    },
    CharacterSet ({ node: t }, e) {
        t.kind === "property" && $la.has(t.value) && e.setHasCasedChar();
    }
}, lRh = {
    Alternative ({ body: t }, e, n) {
        return t.map(n).join("");
    },
    Assertion ({ kind: t, negate: e }) {
        if (t === "string_end") return "$";
        if (t === "string_start") return "^";
        if (t === "word_boundary") return e ? nC`\B` : nC`\b`;
        throw new Error(`Unexpected assertion kind "${t}"`);
    },
    Backreference ({ ref: t }, e) {
        if (typeof t != "number") throw new Error("Unexpected named backref in transformed AST");
        if (!e.useFlagMods && e.accuracy === "strict" && e.currentFlags.ignoreCase && !e.captureMap.get(t).ignoreCase) throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
        return "\\" + t;
    },
    CapturingGroup (t, e, n) {
        const { body: i, name: r, number: s } = t, o = {
            ignoreCase: e.currentFlags.ignoreCase
        }, a = e.originMap.get(t);
        return a && (o.hidden = !0, s > a.number && (o.transferTo = a.number)), e.captureMap.set(s, o), `(${r ? `?<${r}>` : ""}${i.map(n).join("|")})`;
    },
    Character ({ value: t }, e) {
        const n = Pz(t), i = Lyn(t, {
            escDigit: e.lastNode.type === "Backreference",
            inCharClass: e.inCharClass,
            useFlagV: e.useFlagV
        });
        if (i !== n) return i;
        if (e.useAppliedIgnoreCase && e.currentFlags.ignoreCase && Ola(n)) {
            const r = NAh(n);
            return e.inCharClass ? r.join("") : r.length > 1 ? `[${r.join("")}]` : r[0];
        }
        return n;
    },
    CharacterClass (t, e, n) {
        const { kind: i, negate: r, parent: s } = t;
        let { body: o } = t;
        if (i === "intersection" && !e.useFlagV) throw new Error("Use of character class intersection requires min target ES2024");
        wWe.bugFlagVLiteralHyphenIsRange && e.useFlagV && o.some(GAh) && (o = [
            B3r(45),
            ...o.filter((c)=>!GAh(c))
        ]);
        const a = ()=>`[${r ? "^" : ""}${o.map(n).join(i === "intersection" ? "&&" : "")}]`;
        if (!e.inCharClass) {
            if ((!e.useFlagV || wWe.bugNestedClassIgnoresNegation) && !r) {
                const u = o.filter((d)=>d.type === "CharacterClass" && d.kind === "union" && d.negate);
                if (u.length) {
                    const d = vFe(), h = d.body[0];
                    return d.parent = s, h.parent = d, o = o.filter((p)=>!u.includes(p)), t.body = o, o.length ? (t.parent = h, h.body.push(t)) : d.body.pop(), u.forEach((p)=>{
                        const g = rUt({
                            body: [
                                p
                            ]
                        });
                        p.parent = g, g.parent = d, d.body.push(g);
                    }), n(d);
                }
            }
            e.inCharClass = !0;
            const c = a();
            return e.inCharClass = !1, c;
        }
        const l = o[0];
        if (i === "union" && !r && l && ((!e.useFlagV || !e.verbose) && s.kind === "union" && !(wWe.bugFlagVLiteralHyphenIsRange && e.useFlagV) || !e.verbose && s.kind === "intersection" && o.length === 1 && l.type !== "CharacterClassRange")) return o.map(n).join("");
        if (!e.useFlagV && s.type === "CharacterClass") throw new Error("Uses nested character class in a way that requires min target ES2024");
        return a();
    },
    CharacterClassRange (t, e) {
        const n = t.min.value, i = t.max.value, r = {
            escDigit: !1,
            inCharClass: !0,
            useFlagV: e.useFlagV
        }, s = Lyn(n, r), o = Lyn(i, r), a = new Set;
        if (e.useAppliedIgnoreCase && e.currentFlags.ignoreCase) {
            const l = HAh(t);
            slS(l).forEach((u)=>{
                a.add(Array.isArray(u) ? `${Lyn(u[0], r)}-${Lyn(u[1], r)}` : Lyn(u, r));
            });
        }
        return `${s}-${o}${[
            ...a
        ].join("")}`;
    },
    CharacterSet ({ kind: t, negate: e, value: n, key: i }, r) {
        if (t === "dot") return r.currentFlags.dotAll ? r.appliedGlobalFlags.dotAll || r.useFlagMods ? "." : "[^]" : nC`[^\n]`;
        if (t === "digit") return e ? nC`\D` : nC`\d`;
        if (t === "property") {
            if (r.useAppliedIgnoreCase && r.currentFlags.ignoreCase && $la.has(n)) throw new Error(`Unicode property "${n}" can't be case-insensitive when other chars have specific case`);
            return `${e ? nC`\P` : nC`\p`}{${i ? `${i}=` : ""}${n}}`;
        }
        if (t === "word") return e ? nC`\W` : nC`\w`;
        throw new Error(`Unexpected character set kind "${t}"`);
    },
    Flags (t, e) {
        return (e.appliedGlobalFlags.ignoreCase ? "i" : "") + (t.dotAll ? "s" : "") + (t.sticky ? "y" : "");
    },
    Group ({ atomic: t, body: e, flags: n, parent: i }, r, s) {
        const o = r.currentFlags;
        n && (r.currentFlags = z3r(o, n));
        const a = e.map(s).join("|"), l = !r.verbose && e.length === 1 && i.type !== "Quantifier" && !t && (!r.useFlagMods || !n) ? a : `(?${olS(t, n, r.useFlagMods)}${a})`;
        return r.currentFlags = o, l;
    },
    LookaroundAssertion ({ body: t, kind: e, negate: n }, i, r) {
        return `(?${`${e === "lookahead" ? "" : "<"}${n ? "!" : "="}`}${t.map(r).join("|")})`;
    },
    Quantifier (t, e, n) {
        return n(t.body) + alS(t);
    },
    Subroutine ({ isRecursive: t, ref: e }, n) {
        if (!t) throw new Error("Unexpected non-recursive subroutine in transformed AST");
        const i = n.recursionLimit;
        return e === 0 ? `(?R=${i})` : nC`\g<${e}&R=${i}>`;
    }
}, cRh = new Set([
    "$",
    "(",
    ")",
    "*",
    "+",
    ".",
    "?",
    "[",
    "\\",
    "]",
    "^",
    "{",
    "|",
    "}"
]), uRh = new Set([
    "-",
    "\\",
    "]",
    "^",
    "["
]), dRh = new Set([
    "(",
    ")",
    "-",
    "/",
    "[",
    "\\",
    "]",
    "^",
    "{",
    "|",
    "}",
    "!",
    "#",
    "$",
    "%",
    "&",
    "*",
    "+",
    ",",
    ".",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "`",
    "~"
]), Hla = new Map([
    [
        9,
        nC`\t`
    ],
    [
        10,
        nC`\n`
    ],
    [
        11,
        nC`\v`
    ],
    [
        12,
        nC`\f`
    ],
    [
        13,
        nC`\r`
    ],
    [
        8232,
        nC`\u2028`
    ],
    [
        8233,
        nC`\u2029`
    ],
    [
        65279,
        nC`\uFEFF`
    ]
]), hRh = /^\p{Cased}$/u, pRh = (ydi = class extends RegExp {
    constructor(t, e, n){
        var i = (...s)=>(super(...s), oUt(this, K3r), oUt(this, aUt, new Map), oUt(this, b1t, null), oUt(this, Oyn), oUt(this, lUt, null), oUt(this, Fyn, null), YAh(this, "rawOptions", {}), this);
        const r = !!n?.lazyCompile;
        if (t instanceof RegExp) {
            if (n) throw new Error("Cannot provide options when copying a regexp");
            const s = t;
            i(s, e), _Fe(this, Oyn, s.source), s instanceof ydi && (_Fe(this, aUt, xhe(s, aUt)), _Fe(this, lUt, xhe(s, lUt)), _Fe(this, Fyn, xhe(s, Fyn)), this.rawOptions = s.rawOptions);
        } else {
            const s = {
                hiddenCaptures: [],
                strategy: null,
                transfers: [],
                ...n
            };
            i(r ? "" : t, e), _Fe(this, Oyn, t), _Fe(this, aUt, ulS(s.hiddenCaptures, s.transfers)), _Fe(this, Fyn, s.strategy), this.rawOptions = n ?? {};
        }
        r || _Fe(this, b1t, this);
    }
    get source() {
        return xhe(this, Oyn) || "(?:)";
    }
    exec(t) {
        if (!xhe(this, b1t)) {
            const { lazyCompile: i, ...r } = this.rawOptions;
            _Fe(this, b1t, new ydi(xhe(this, Oyn), this.flags, r));
        }
        const e = this.global || this.sticky, n = this.lastIndex;
        if (xhe(this, Fyn) === "clip_search" && e && n) {
            this.lastIndex = 0;
            const i = Bla(this, K3r, Ula).call(this, t.slice(n));
            return i && (clS(i, n, t, this.hasIndices), this.lastIndex += n), i;
        }
        return Bla(this, K3r, Ula).call(this, t);
    }
}, aUt = new WeakMap, b1t = new WeakMap, Oyn = new WeakMap, lUt = new WeakMap, Fyn = new WeakMap, K3r = new WeakSet, Ula = function(t) {
    xhe(this, b1t).lastIndex = this.lastIndex;
    const e = XAh(ydi.prototype, this, "exec").call(xhe(this, b1t), t);
    if (this.lastIndex = xhe(this, b1t).lastIndex, !e || !xhe(this, aUt).size) return e;
    const n = [
        ...e
    ];
    e.length = 1;
    let i;
    this.hasIndices && (i = [
        ...e.indices
    ], e.indices.length = 1);
    const r = [
        0
    ];
    for(let s = 1; s < n.length; s++){
        const { hidden: o, transferTo: a } = xhe(this, aUt).get(s) ?? {};
        if (o ? r.push(null) : (r.push(e.length), e.push(n[s]), this.hasIndices && e.indices.push(i[s])), a && n[s] !== void 0) {
            const l = r[a];
            if (!l) throw new Error(`Invalid capture transfer to "${l}"`);
            if (e[l] = n[s], this.hasIndices && (e.indices[l] = i[s]), e.groups) {
                xhe(this, lUt) || _Fe(this, lUt, dlS(this.source));
                const c = xhe(this, lUt).get(a);
                c && (e.groups[c] = n[s], this.hasIndices && (e.indices.groups[c] = i[s]));
            }
        }
    }
    return e;
}, ydi);

}
