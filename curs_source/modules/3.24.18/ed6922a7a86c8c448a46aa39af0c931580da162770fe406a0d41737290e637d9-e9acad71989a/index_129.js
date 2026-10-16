import { $ft, C9t, CIi, Czg, DCe, DIi, Dzg, Ezg, Fzg, Hft, Izg, KYe, Mzg, Nzg, Ozg, Pzg, S9e, Sxl, TIi, Tzg, XEl, YEl, aCn, bxl, dSs, f6, fxl, gxl, hSs, iSs, jEl, k9t, kxl, mSs, nSs, pSs, pxl, rSs, uSs, vxl, wIi, wxl, wzg, zYe } from "./I0l.js";
import { oxl } from "./atomic.js";
import { bzg } from "./index_128.js";
import { fzg } from "./internals.js";
import { zEl } from "./node-utils.js";
import { ozg } from "./parse_2.js";
import { azg } from "./traverse.js";
import { x } from "./tslib.es6.js";
var Cxl, Txl, Exl, gSs, xxl, Ixl, MIi, ZJ, Wft, MCe, fSs, Axl, Gft, YYe, T9t, Vft, E9t, PIi, vSs, cCn, IU, yk, sDe, _Ss, Rxl, Dxl, Mxl, oDe, LIi, Pxl, Lxl, Nxl, Oxl, bSs, Fxl, Bxl, Uxl, $xl, Hxl, Wxl, Gxl, Vxl, ySs, jxl, qxl;
export { $xl, Axl, Bxl, Cxl, Dxl, E9t, Exl, Fxl, Gft, Gxl, Hxl, IU, Ixl, LIi, Lxl, MCe, MIi, Mxl, Nxl, Oxl, PIi, Pxl, Rxl, T9t, Txl, Uxl, Vft, Vxl, Wft, Wxl, YYe, ZJ, _Ss, bSs, cCn, fSs, gSs, jxl, oDe, qxl, sDe, vSs, xxl, ySs, yk };
var __wakaru_$zg_initialized = false;
export function $zg() {
if (__wakaru_$zg_initialized) return;
__wakaru_$zg_initialized = true;
x(), ozg(), azg(), fzg(), bzg(), zEl(), oxl(), Cxl = Object.defineProperty, Txl = Object.getPrototypeOf, Exl = Reflect.get, gSs = (e)=>{
    throw TypeError(e);
}, xxl = (e, t, n)=>t in e ? Cxl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, Ixl = (e, t, n)=>xxl(e, typeof t != "symbol" ? t + "" : t, n), MIi = (e, t, n)=>t.has(e) || gSs("Cannot " + n), ZJ = (e, t, n)=>(MIi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Wft = (e, t, n)=>t.has(e) ? gSs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), MCe = (e, t, n, i)=>(MIi(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n), fSs = (e, t, n)=>(MIi(e, t, "access private method"), n), Axl = (e, t, n)=>Exl(Txl(e), n, t), IU = String.fromCodePoint, yk = String.raw, sDe = {
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
}, sDe.bugFlagVLiteralHyphenIsRange = sDe.unicodeSets ? (()=>{
    try {
        new RegExp(yk`[\d\-a]`, "v");
    } catch  {
        return !0;
    }
    return !1;
})() : !1, sDe.bugNestedClassIgnoresNegation = sDe.unicodeSets && new RegExp("[[^a]]", "v").test("a"), _Ss = {
    ES2025: 2025,
    ES2024: 2024,
    ES2018: 2018
}, Rxl = {
    auto: "auto",
    ES2025: "ES2025",
    ES2024: "ES2024",
    ES2018: "ES2018"
}, Dxl = "[	-\r ]", Mxl = new Set([
    IU(304),
    IU(305)
]), oDe = yk`[\p{L}\p{M}\p{N}\p{Pc}]`, LIi = new Map(`C Other
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
XID_Start XIDS`.split(/\s/).map((e)=>[
        TIi(e),
        e
    ])), Pxl = new Map([
    [
        "s",
        IU(383)
    ],
    [
        IU(383),
        "s"
    ]
]), Lxl = new Map([
    [
        IU(223),
        IU(7838)
    ],
    [
        IU(107),
        IU(8490)
    ],
    [
        IU(229),
        IU(8491)
    ],
    [
        IU(969),
        IU(8486)
    ]
]), Nxl = new Map([
    zYe(453),
    zYe(456),
    zYe(459),
    zYe(498),
    ...uSs(8072, 8079),
    ...uSs(8088, 8095),
    ...uSs(8104, 8111),
    zYe(8124),
    zYe(8140),
    zYe(8188)
]), Oxl = new Map([
    [
        "alnum",
        yk`[\p{Alpha}\p{Nd}]`
    ],
    [
        "alpha",
        yk`\p{Alpha}`
    ],
    [
        "ascii",
        yk`\p{ASCII}`
    ],
    [
        "blank",
        yk`[\p{Zs}\t]`
    ],
    [
        "cntrl",
        yk`\p{Cc}`
    ],
    [
        "digit",
        yk`\p{Nd}`
    ],
    [
        "graph",
        yk`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`
    ],
    [
        "lower",
        yk`\p{Lower}`
    ],
    [
        "print",
        yk`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`
    ],
    [
        "punct",
        yk`[\p{P}\p{S}]`
    ],
    [
        "space",
        yk`\p{space}`
    ],
    [
        "upper",
        yk`\p{Upper}`
    ],
    [
        "word",
        yk`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`
    ],
    [
        "xdigit",
        yk`\p{AHex}`
    ]
]), bSs = new Set([
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
]), Fxl = {
    AbsenceFunction ({ node: e, parent: t, replaceWith: n }) {
        const { body: i, kind: r } = e;
        if (r === "repeater") {
            const s = DCe();
            s.body[0].body.push(Hft({
                negate: !0,
                body: i
            }), k9t("Any"));
            const o = DCe();
            o.body[0].body.push(XEl("greedy", 0, 1 / 0, s)), n(f6(o, t), {
                traverse: !0
            });
        } else throw new Error('Unsupported absence function "(?~|"');
    },
    Alternative: {
        enter ({ node: e, parent: t, key: n }, { flagDirectivesByAlt: i }) {
            const r = e.body.filter((s)=>s.kind === "flags");
            for(let s = n + 1; s < t.body.length; s++){
                const o = t.body[s];
                aCn(i, o, []).push(...r);
            }
        },
        exit ({ node: e }, { flagDirectivesByAlt: t }) {
            if (t.get(e)?.length) {
                const n = vxl(t.get(e));
                if (n) {
                    const i = DCe({
                        flags: n
                    });
                    i.body[0].body = e.body, e.body = [
                        f6(i, e)
                    ];
                }
            }
        }
    },
    Assertion ({ node: e, parent: t, key: n, container: i, root: r, remove: s, replaceWith: o }, a) {
        const { kind: c, negate: l } = e, { asciiWordBoundaries: u, avoidSubclass: h, supportedGNodes: p, wordIsAscii: g } = a;
        if (c === "text_segment_boundary") throw new Error(`Unsupported text segment boundary "\\${l ? "Y" : "y"}"`);
        if (c === "line_end") o(f6(Hft({
            body: [
                $ft({
                    body: [
                        nSs("string_end")
                    ]
                }),
                $ft({
                    body: [
                        wIi(10)
                    ]
                })
            ]
        }), t));
        else if (c === "line_start") o(f6(S9e(yk`(?<=\A|\n(?!\z))`, {
            skipLookbehindValidation: !0
        }), t));
        else if (c === "search_start") if (p.has(e)) r.flags.sticky = !0, s();
        else {
            const f = i[n - 1];
            if (f && Izg(f)) o(f6(Hft({
                negate: !0
            }), t));
            else {
                if (h) throw new Error(yk`Uses "\G" in a way that requires a subclass`);
                o(KYe(nSs("string_start"), t)), a.strategy = "clip_search";
            }
        }
        else if (!(c === "string_end" || c === "string_start")) if (c === "string_end_newline") o(f6(S9e(yk`(?=\n?\z)`), t));
        else if (c === "word_boundary") {
            if (!g && !u) {
                const f = `(?:(?<=${oDe})(?!${oDe})|(?<!${oDe})(?=${oDe}))`, v = `(?:(?<=${oDe})(?=${oDe})|(?<!${oDe})(?!${oDe}))`;
                o(f6(S9e(l ? v : f), t));
            }
        } else throw new Error(`Unexpected assertion kind "${c}"`);
    },
    Backreference ({ node: e }, { jsGroupNameMap: t }) {
        let { ref: n } = e;
        typeof n == "string" && !hSs(n) && (n = dSs(n, t), e.ref = n);
    },
    CapturingGroup ({ node: e }, { jsGroupNameMap: t, subroutineRefMap: n }) {
        let { name: i } = e;
        i && !hSs(i) && (i = dSs(i, t), e.name = i), n.set(e.number, e), i && n.set(i, e);
    },
    CharacterClassRange ({ node: e, parent: t, replaceWith: n }) {
        if (t.kind === "intersection") {
            const i = CIi({
                body: [
                    e
                ]
            });
            n(f6(i, t), {
                traverse: !0
            });
        }
    },
    CharacterSet ({ node: e, parent: t, replaceWith: n }, { accuracy: i, minTargetEs2024: r, digitIsAscii: s, spaceIsAscii: o, wordIsAscii: a }) {
        const { kind: c, negate: l, value: u } = e;
        if (s && (c === "digit" || u === "digit")) {
            n(KYe(rSs("digit", {
                negate: l
            }), t));
            return;
        }
        if (o && (c === "space" || u === "space")) {
            n(f6(pSs(S9e(Dxl), l), t));
            return;
        }
        if (a && (c === "word" || u === "word")) {
            n(KYe(rSs("word", {
                negate: l
            }), t));
            return;
        }
        if (c === "any") n(KYe(k9t("Any"), t));
        else if (c === "digit") n(KYe(k9t("Nd", {
            negate: l
        }), t));
        else if (c !== "dot") if (c === "text_segment") {
            if (i === "strict") throw new Error(yk`Use of "\X" requires non-strict accuracy`);
            const h = "\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?", p = yk`\p{RI}{2}|${h}(?:\u200D${h})*`;
            n(f6(S9e(yk`(?>\r\n|${r ? yk`\p{RGI_Emoji}` : p}|\P{M}\p{M}*)`, {
                skipPropertyNameValidation: !0
            }), t));
        } else if (c === "hex") n(KYe(k9t("AHex", {
            negate: l
        }), t));
        else if (c === "newline") n(f6(S9e(l ? `[^
]` : `(?>\r
?|[
\v\f\x85\u2028\u2029])`), t));
        else if (c === "posix") if (!r && (u === "graph" || u === "print")) {
            if (i === "strict") throw new Error(`POSIX class "${u}" requires min target ES2024 or non-strict accuracy`);
            let h = {
                graph: "!-~",
                print: " -~"
            }[u];
            l && (h = `\0-${IU(h.codePointAt(0) - 1)}${IU(h.codePointAt(2) + 1)}-\u{10FFFF}`), n(f6(S9e(`[${h}]`), t));
        } else n(f6(pSs(S9e(Oxl.get(u)), l), t));
        else if (c === "property") LIi.has(TIi(u)) || (e.key = "sc");
        else if (c === "space") n(KYe(k9t("space", {
            negate: l
        }), t));
        else if (c === "word") n(f6(pSs(S9e(oDe), l), t));
        else throw new Error(`Unexpected character set kind "${c}"`);
    },
    Directive ({ node: e, parent: t, root: n, remove: i, replaceWith: r, removeAllPrevSiblings: s, removeAllNextSiblings: o }) {
        const { kind: a, flags: c } = e;
        if (a === "flags") if (!c.enable && !c.disable) i();
        else {
            const l = DCe({
                flags: c
            });
            l.body[0].body = o(), r(f6(l, t), {
                traverse: !0
            });
        }
        else if (a === "keep") {
            const l = n.body[0], h = n.body.length === 1 && jEl(l, {
                type: "Group"
            }) && l.body[0].body.length === 1 ? l.body[0] : n;
            if (t.parent !== h || h.body.length > 1) throw new Error(yk`Uses "\K" in a way that's unsupported`);
            const p = Hft({
                behind: !0
            });
            p.body[0].body = s(), r(f6(p, t));
        } else throw new Error(`Unexpected directive kind "${a}"`);
    },
    Flags ({ node: e, parent: t }) {
        if (e.posixIsAscii) throw new Error('Unsupported flag "P"');
        if (e.textSegmentMode === "word") throw new Error('Unsupported flag "y{w}"');
        [
            "digitIsAscii",
            "extended",
            "posixIsAscii",
            "spaceIsAscii",
            "wordIsAscii",
            "textSegmentMode"
        ].forEach((n)=>delete e[n]), Object.assign(e, {
            global: !1,
            hasIndices: !1,
            multiline: !1,
            sticky: e.sticky ?? !1
        }), t.options = {
            disable: {
                x: !0,
                n: !0
            },
            force: {
                v: !0
            }
        };
    },
    Group ({ node: e }) {
        if (!e.flags) return;
        const { enable: t, disable: n } = e.flags;
        t?.extended && delete t.extended, n?.extended && delete n.extended, t?.dotAll && n?.dotAll && delete t.dotAll, t?.ignoreCase && n?.ignoreCase && delete t.ignoreCase, t && !Object.keys(t).length && delete e.flags.enable, n && !Object.keys(n).length && delete e.flags.disable, !e.flags.enable && !e.flags.disable && delete e.flags;
    },
    LookaroundAssertion ({ node: e }, t) {
        const { kind: n } = e;
        n === "lookbehind" && (t.passedLookbehind = !0);
    },
    NamedCallout ({ node: e, parent: t, replaceWith: n }) {
        const { kind: i } = e;
        if (i === "fail") n(f6(Hft({
            negate: !0
        }), t));
        else throw new Error(`Unsupported named callout "(*${i.toUpperCase()}"`);
    },
    Quantifier ({ node: e }) {
        if (e.body.type === "Quantifier") {
            const t = DCe();
            t.body[0].body.push(e.body), e.body = f6(t, e);
        }
    },
    Regex: {
        enter ({ node: e }, { supportedGNodes: t }) {
            const n = [];
            let i = !1, r = !1;
            for (const s of e.body)if (s.body.length === 1 && s.body[0].kind === "search_start") s.body.pop();
            else {
                const o = bxl(s.body);
                o ? (i = !0, Array.isArray(o) ? n.push(...o) : n.push(o)) : r = !0;
            }
            i && !r && n.forEach((s)=>t.add(s));
        },
        exit (e, { accuracy: t, passedLookbehind: n, strategy: i }) {
            if (t === "strict" && n && i) throw new Error(yk`Uses "\G" in a way that requires non-strict accuracy`);
        }
    },
    Subroutine ({ node: e }, { jsGroupNameMap: t }) {
        let { ref: n } = e;
        typeof n == "string" && !hSs(n) && (n = dSs(n, t), e.ref = n);
    }
}, Bxl = {
    Backreference ({ node: e }, { multiplexCapturesToLeftByRef: t, reffedNodesByReferencer: n }) {
        const { orphan: i, ref: r } = e;
        i || n.set(e, [
            ...t.get(r).map(({ node: s })=>s)
        ]);
    },
    CapturingGroup: {
        enter ({ node: e, parent: t, replaceWith: n, skip: i }, { groupOriginByCopy: r, groupsByName: s, multiplexCapturesToLeftByRef: o, openRefs: a, reffedNodesByReferencer: c }) {
            const l = r.get(e);
            if (l && a.has(e.number)) {
                const h = KYe(fxl(e.number), t);
                c.set(h, a.get(e.number)), n(h);
                return;
            }
            a.set(e.number, e), o.set(e.number, []), e.name && aCn(o, e.name, []);
            const u = o.get(e.name ?? e.number);
            for(let h = 0; h < u.length; h++){
                const p = u[h];
                if (l === p.node || l && l === p.origin || e === p.origin) {
                    u.splice(h, 1);
                    break;
                }
            }
            if (o.get(e.number).push({
                node: e,
                origin: l
            }), e.name && o.get(e.name).push({
                node: e,
                origin: l
            }), e.name) {
                const h = aCn(s, e.name, new Map);
                let p = !1;
                if (l) p = !0;
                else for (const g of h.values())if (!g.hasDuplicateNameToRemove) {
                    p = !0;
                    break;
                }
                s.get(e.name).set(e, {
                    node: e,
                    hasDuplicateNameToRemove: p
                });
            }
        },
        exit ({ node: e }, { openRefs: t }) {
            t.delete(e.number);
        }
    },
    Group: {
        enter ({ node: e }, t) {
            t.prevFlags = t.currentFlags, e.flags && (t.currentFlags = DIi(t.currentFlags, e.flags));
        },
        exit (e, t) {
            t.currentFlags = t.prevFlags;
        }
    },
    Subroutine ({ node: e, parent: t, replaceWith: n }, i) {
        const { isRecursive: r, ref: s } = e;
        if (r) {
            let u = t;
            for(; (u = u.parent) && !(u.type === "CapturingGroup" && (u.name === s || u.number === s)););
            i.reffedNodesByReferencer.set(e, u);
            return;
        }
        const o = i.subroutineRefMap.get(s), a = s === 0, c = a ? fxl(0) : gxl(o, i.groupOriginByCopy, null);
        let l = c;
        if (!a) {
            const u = vxl(Tzg(o, (p)=>p.type === "Group" && !!p.flags)), h = u ? DIi(i.globalFlags, u) : i.globalFlags;
            wzg(h, i.currentFlags) || (l = DCe({
                flags: Ezg(h)
            }), l.body[0].body.push(c));
        }
        n(f6(l, t), {
            traverse: !a
        });
    }
}, Uxl = {
    Backreference ({ node: e, parent: t, replaceWith: n }, i) {
        if (e.orphan) {
            i.highestOrphanBackref = Math.max(i.highestOrphanBackref, e.ref);
            return;
        }
        const s = i.reffedNodesByReferencer.get(e).filter((o)=>Czg(o, e));
        if (!s.length) n(f6(Hft({
            negate: !0
        }), t));
        else if (s.length > 1) {
            const o = DCe({
                atomic: !0,
                body: s.reverse().map((a)=>$ft({
                        body: [
                            iSs(a.number)
                        ]
                    }))
            });
            n(f6(o, t));
        } else e.ref = s[0].number;
    },
    CapturingGroup ({ node: e }, t) {
        e.number = ++t.numCapturesToLeft, e.name && t.groupsByName.get(e.name).get(e).hasDuplicateNameToRemove && delete e.name;
    },
    Regex: {
        exit ({ node: e }, t) {
            const n = Math.max(t.highestOrphanBackref - t.numCapturesToLeft, 0);
            for(let i = 0; i < n; i++){
                const r = YEl();
                e.body.at(-1).body.push(r);
            }
        }
    },
    Subroutine ({ node: e }, t) {
        !e.isRecursive || e.ref === 0 || (e.ref = t.reffedNodesByReferencer.get(e).number);
    }
}, $xl = {
    "*": {
        enter ({ node: e }, t) {
            if (kxl(e)) {
                const n = t.getCurrentModI();
                t.pushModI(e.flags ? DIi({
                    ignoreCase: n
                }, e.flags).ignoreCase : n);
            }
        },
        exit ({ node: e }, t) {
            kxl(e) && t.popModI();
        }
    },
    Backreference (e, t) {
        t.setHasCasedChar();
    },
    Character ({ node: e }, t) {
        mSs(IU(e.value)) && t.setHasCasedChar();
    },
    CharacterClassRange ({ node: e, skip: t }, n) {
        t(), Sxl(e, {
            firstOnly: !0
        }).length && n.setHasCasedChar();
    },
    CharacterSet ({ node: e }, t) {
        e.kind === "property" && bSs.has(e.value) && t.setHasCasedChar();
    }
}, Hxl = {
    Alternative ({ body: e }, t, n) {
        return e.map(n).join("");
    },
    Assertion ({ kind: e, negate: t }) {
        if (e === "string_end") return "$";
        if (e === "string_start") return "^";
        if (e === "word_boundary") return t ? yk`\B` : yk`\b`;
        throw new Error(`Unexpected assertion kind "${e}"`);
    },
    Backreference ({ ref: e }, t) {
        if (typeof e != "number") throw new Error("Unexpected named backref in transformed AST");
        if (!t.useFlagMods && t.accuracy === "strict" && t.currentFlags.ignoreCase && !t.captureMap.get(e).ignoreCase) throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
        return "\\" + e;
    },
    CapturingGroup (e, t, n) {
        const { body: i, name: r, number: s } = e, o = {
            ignoreCase: t.currentFlags.ignoreCase
        }, a = t.originMap.get(e);
        return a && (o.hidden = !0, s > a.number && (o.transferTo = a.number)), t.captureMap.set(s, o), `(${r ? `?<${r}>` : ""}${i.map(n).join("|")})`;
    },
    Character ({ value: e }, t) {
        const n = IU(e), i = C9t(e, {
            escDigit: t.lastNode.type === "Backreference",
            inCharClass: t.inCharClass,
            useFlagV: t.useFlagV
        });
        if (i !== n) return i;
        if (t.useAppliedIgnoreCase && t.currentFlags.ignoreCase && mSs(n)) {
            const r = pxl(n);
            return t.inCharClass ? r.join("") : r.length > 1 ? `[${r.join("")}]` : r[0];
        }
        return n;
    },
    CharacterClass (e, t, n) {
        const { kind: i, negate: r, parent: s } = e;
        let { body: o } = e;
        if (i === "intersection" && !t.useFlagV) throw new Error("Use of character class intersection requires min target ES2024");
        sDe.bugFlagVLiteralHyphenIsRange && t.useFlagV && o.some(wxl) && (o = [
            wIi(45),
            ...o.filter((l)=>!wxl(l))
        ]);
        const a = ()=>`[${r ? "^" : ""}${o.map(n).join(i === "intersection" ? "&&" : "")}]`;
        if (!t.inCharClass) {
            if ((!t.useFlagV || sDe.bugNestedClassIgnoresNegation) && !r) {
                const u = o.filter((h)=>h.type === "CharacterClass" && h.kind === "union" && h.negate);
                if (u.length) {
                    const h = DCe(), p = h.body[0];
                    return h.parent = s, p.parent = h, o = o.filter((g)=>!u.includes(g)), e.body = o, o.length ? (e.parent = p, p.body.push(e)) : h.body.pop(), u.forEach((g)=>{
                        const f = $ft({
                            body: [
                                g
                            ]
                        });
                        g.parent = f, f.parent = h, h.body.push(f);
                    }), n(h);
                }
            }
            t.inCharClass = !0;
            const l = a();
            return t.inCharClass = !1, l;
        }
        const c = o[0];
        if (i === "union" && !r && c && ((!t.useFlagV || !t.verbose) && s.kind === "union" && !(sDe.bugFlagVLiteralHyphenIsRange && t.useFlagV) || !t.verbose && s.kind === "intersection" && o.length === 1 && c.type !== "CharacterClassRange")) return o.map(n).join("");
        if (!t.useFlagV && s.type === "CharacterClass") throw new Error("Uses nested character class in a way that requires min target ES2024");
        return a();
    },
    CharacterClassRange (e, t) {
        const n = e.min.value, i = e.max.value, r = {
            escDigit: !1,
            inCharClass: !0,
            useFlagV: t.useFlagV
        }, s = C9t(n, r), o = C9t(i, r), a = new Set;
        if (t.useAppliedIgnoreCase && t.currentFlags.ignoreCase) {
            const c = Sxl(e);
            Dzg(c).forEach((u)=>{
                a.add(Array.isArray(u) ? `${C9t(u[0], r)}-${C9t(u[1], r)}` : C9t(u, r));
            });
        }
        return `${s}-${o}${[
            ...a
        ].join("")}`;
    },
    CharacterSet ({ kind: e, negate: t, value: n, key: i }, r) {
        if (e === "dot") return r.currentFlags.dotAll ? r.appliedGlobalFlags.dotAll || r.useFlagMods ? "." : "[^]" : yk`[^\n]`;
        if (e === "digit") return t ? yk`\D` : yk`\d`;
        if (e === "property") {
            if (r.useAppliedIgnoreCase && r.currentFlags.ignoreCase && bSs.has(n)) throw new Error(`Unicode property "${n}" can't be case-insensitive when other chars have specific case`);
            return `${t ? yk`\P` : yk`\p`}{${i ? `${i}=` : ""}${n}}`;
        }
        if (e === "word") return t ? yk`\W` : yk`\w`;
        throw new Error(`Unexpected character set kind "${e}"`);
    },
    Flags (e, t) {
        return (t.appliedGlobalFlags.ignoreCase ? "i" : "") + (e.dotAll ? "s" : "") + (e.sticky ? "y" : "");
    },
    Group ({ atomic: e, body: t, flags: n, parent: i }, r, s) {
        const o = r.currentFlags;
        n && (r.currentFlags = DIi(o, n));
        const a = t.map(s).join("|"), c = !r.verbose && t.length === 1 && i.type !== "Quantifier" && !e && (!r.useFlagMods || !n) ? a : `(?${Mzg(e, n, r.useFlagMods)}${a})`;
        return r.currentFlags = o, c;
    },
    LookaroundAssertion ({ body: e, kind: t, negate: n }, i, r) {
        return `(?${`${t === "lookahead" ? "" : "<"}${n ? "!" : "="}`}${e.map(r).join("|")})`;
    },
    Quantifier (e, t, n) {
        return n(e.body) + Pzg(e);
    },
    Subroutine ({ isRecursive: e, ref: t }, n) {
        if (!e) throw new Error("Unexpected non-recursive subroutine in transformed AST");
        const i = n.recursionLimit;
        return t === 0 ? `(?R=${i})` : yk`\g<${t}&R=${i}>`;
    }
}, Wxl = new Set([
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
]), Gxl = new Set([
    "-",
    "\\",
    "]",
    "^",
    "["
]), Vxl = new Set([
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
]), ySs = new Map([
    [
        9,
        yk`\t`
    ],
    [
        10,
        yk`\n`
    ],
    [
        11,
        yk`\v`
    ],
    [
        12,
        yk`\f`
    ],
    [
        13,
        yk`\r`
    ],
    [
        8232,
        yk`\u2028`
    ],
    [
        8233,
        yk`\u2029`
    ],
    [
        65279,
        yk`\uFEFF`
    ]
]), jxl = /^\p{Cased}$/u, qxl = (cCn = class extends RegExp {
    constructor(e, t, n){
        var i = (...s)=>(super(...s), Wft(this, PIi), Wft(this, Gft, new Map), Wft(this, YYe, null), Wft(this, T9t), Wft(this, Vft, null), Wft(this, E9t, null), Ixl(this, "rawOptions", {}), this);
        const r = !!n?.lazyCompile;
        if (e instanceof RegExp) {
            if (n) throw new Error("Cannot provide options when copying a regexp");
            const s = e;
            i(s, t), MCe(this, T9t, s.source), s instanceof cCn && (MCe(this, Gft, ZJ(s, Gft)), MCe(this, Vft, ZJ(s, Vft)), MCe(this, E9t, ZJ(s, E9t)), this.rawOptions = s.rawOptions);
        } else {
            const s = {
                hiddenCaptures: [],
                strategy: null,
                transfers: [],
                ...n
            };
            i(r ? "" : e, t), MCe(this, T9t, e), MCe(this, Gft, Ozg(s.hiddenCaptures, s.transfers)), MCe(this, E9t, s.strategy), this.rawOptions = n ?? {};
        }
        r || MCe(this, YYe, this);
    }
    get source() {
        return ZJ(this, T9t) || "(?:)";
    }
    exec(e) {
        if (!ZJ(this, YYe)) {
            const { lazyCompile: i, ...r } = this.rawOptions;
            MCe(this, YYe, new cCn(ZJ(this, T9t), this.flags, r));
        }
        const t = this.global || this.sticky, n = this.lastIndex;
        if (ZJ(this, E9t) === "clip_search" && t && n) {
            this.lastIndex = 0;
            const i = fSs(this, PIi, vSs).call(this, e.slice(n));
            return i && (Nzg(i, n, e, this.hasIndices), this.lastIndex += n), i;
        }
        return fSs(this, PIi, vSs).call(this, e);
    }
}, Gft = new WeakMap, YYe = new WeakMap, T9t = new WeakMap, Vft = new WeakMap, E9t = new WeakMap, PIi = new WeakSet, vSs = function(e) {
    ZJ(this, YYe).lastIndex = this.lastIndex;
    const t = Axl(cCn.prototype, this, "exec").call(ZJ(this, YYe), e);
    if (this.lastIndex = ZJ(this, YYe).lastIndex, !t || !ZJ(this, Gft).size) return t;
    const n = [
        ...t
    ];
    t.length = 1;
    let i;
    this.hasIndices && (i = [
        ...t.indices
    ], t.indices.length = 1);
    const r = [
        0
    ];
    for(let s = 1; s < n.length; s++){
        const { hidden: o, transferTo: a } = ZJ(this, Gft).get(s) ?? {};
        if (o ? r.push(null) : (r.push(t.length), t.push(n[s]), this.hasIndices && t.indices.push(i[s])), a && n[s] !== void 0) {
            const c = r[a];
            if (!c) throw new Error(`Invalid capture transfer to "${c}"`);
            if (t[c] = n[s], this.hasIndices && (t.indices[c] = i[s]), t.groups) {
                ZJ(this, Vft) || MCe(this, Vft, Fzg(this.source));
                const l = ZJ(this, Vft).get(a);
                l && (t.groups[l] = n[s], this.hasIndices && (t.indices.groups[l] = i[s]));
            }
        }
    }
    return t;
}, cCn);

}
