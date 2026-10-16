import { B4, BS, Bxr, Dhe, Fhe, Gxr, HFt, Hxr, JRe, Jxr, KFt, Kxr, Lhe, PP, QRe, Qxr, RP, Uxr, VFt, Vxr, WB, Wxr, Xxr, Yxr, ZB, Zxr, _Ot, _h, a4r, bOt, cPe, dOt, dPe, e4r, ePe, fOt, gOt, hOt, i4r, kOt, l$, lPe, mOt, n4r, oPe, pOt, qhe, qxr, r4r, rQ, sPe, t4r, u$, uOt, uPe, wOt, yOt, zxr } from "./Iwr.js";
import { D5i } from "./index_134.js";
import { L5i } from "./internals.js";
import { Ye } from "./marked.esm.js";
import { tPe } from "./parse_2.js";
import { i } from "./plugin-brand-icon.js";
import { Txr } from "./traverse.js";
var aYn = Object.getPrototypeOf, T_i = Reflect.get, oYn = (r)=>{
    throw TypeError(r);
}, ZAt = (r, e, a)=>e.has(r) || oYn("Cannot " + a), X_ = (r, e, a)=>(ZAt(r, e, "read from private field"), a ? a.call(r) : e.get(r)), IY = (r, e, a)=>e.has(r) ? oYn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, a), vS = (r, e, a, s)=>(ZAt(r, e, "write to private field"), s ? s.call(r, a) : e.set(r, a), a), cYn = (r, e, a)=>(ZAt(r, e, "access private method"), a), N_i = (r, e, a)=>T_i(aYn(r), a, e);
var qg, fc, qS, vOt, o4r, s4r, c4r, US, pPe, l4r, u4r, d4r, p4r, xOt, m4r, f4r, h4r, g4r, b4r, y4r, w4r, _4r, COt, k4r, VB, LP, iQ, KB, aQ, mPe, SOt, oQ, v4r;
export { COt, IY, KB, LP, N_i, SOt, T_i, US, VB, X_, _4r, aQ, b4r, c4r, cYn, d4r, f4r, fc, g4r, h4r, iQ, k4r, l4r, m4r, mPe, o4r, oQ, p4r, pPe, qS, qg, s4r, u4r, v4r, vOt, vS, w4r, xOt, y4r };
var __wakaru_F5i_initialized = false;
export function F5i() {
if (__wakaru_F5i_initialized) return;
__wakaru_F5i_initialized = true;
tPe(), tPe(), Txr(), tPe(), Txr(), tPe(), L5i(), D5i(), qg = String.fromCodePoint, fc = String.raw, qS = {
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
}, qS.bugFlagVLiteralHyphenIsRange = qS.unicodeSets ? (()=>{
    try {
        new RegExp(fc`[\d\-a]`, "v");
    } catch  {
        return !0;
    }
    return !1;
})() : !1, qS.bugNestedClassIgnoresNegation = qS.unicodeSets && new RegExp("[[^a]]", "v").test("a"), i(qhe, "getNewCurrentFlags"), i(rQ, "getOrInsert"), i(oPe, "isMinTarget"), i(zxr, "throwIfNullish"), vOt = {
    ES2025: 2025,
    ES2024: 2024,
    ES2018: 2018
}, o4r = {
    auto: "auto",
    ES2025: "ES2025",
    ES2024: "ES2024",
    ES2018: "ES2018"
}, i(uOt, "getOptions"), s4r = "[	-\r ]", c4r = new Set([
    qg(304),
    qg(305)
]), US = fc`[\p{L}\p{M}\p{N}\p{Pc}]`, i(dOt, "getIgnoreCaseMatchChars"), pPe = new Map(`C Other
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
XID_Start XIDS`.split(/\s/).map((r)=>[
        Fhe(r),
        r
    ])), l4r = new Map([
    [
        "s",
        qg(383)
    ],
    [
        qg(383),
        "s"
    ]
]), u4r = new Map([
    [
        qg(223),
        qg(7838)
    ],
    [
        qg(107),
        qg(8490)
    ],
    [
        qg(229),
        qg(8491)
    ],
    [
        qg(969),
        qg(8486)
    ]
]), d4r = new Map([
    l$(453),
    l$(456),
    l$(459),
    l$(498),
    ...sPe(8072, 8079),
    ...sPe(8088, 8095),
    ...sPe(8104, 8111),
    l$(8124),
    l$(8140),
    l$(8188)
]), p4r = new Map([
    [
        "alnum",
        fc`[\p{Alpha}\p{Nd}]`
    ],
    [
        "alpha",
        fc`\p{Alpha}`
    ],
    [
        "ascii",
        fc`\p{ASCII}`
    ],
    [
        "blank",
        fc`[\p{Zs}\t]`
    ],
    [
        "cntrl",
        fc`\p{Cc}`
    ],
    [
        "digit",
        fc`\p{Nd}`
    ],
    [
        "graph",
        fc`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`
    ],
    [
        "lower",
        fc`\p{Lower}`
    ],
    [
        "print",
        fc`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`
    ],
    [
        "punct",
        fc`[\p{P}\p{S}]`
    ],
    [
        "space",
        fc`\p{space}`
    ],
    [
        "upper",
        fc`\p{Upper}`
    ],
    [
        "word",
        fc`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`
    ],
    [
        "xdigit",
        fc`\p{AHex}`
    ]
]), i(Bxr, "range"), i(l$, "titleEntry"), i(sPe, "titleRange"), xOt = new Set([
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
]), i(qxr, "transform"), m4r = {
    AbsenceFunction ({ node: r, parent: e, replaceWith: a }) {
        const { body: s, kind: l } = r;
        if (l === "repeater") {
            const u = B4();
            u.body[0].body.push(PP({
                negate: !0,
                body: s
            }), WB("Any"));
            const p = B4();
            p.body[0].body.push(KFt("greedy", 0, 1 / 0, u)), a(_h(p, e), {
                traverse: !0
            });
        } else throw new Error('Unsupported absence function "(?~|"');
    },
    Alternative: {
        enter ({ node: r, parent: e, key: a }, { flagDirectivesByAlt: s }) {
            const l = r.body.filter((u)=>u.kind === "flags");
            for(let u = a + 1; u < e.body.length; u++){
                const p = e.body[u];
                rQ(s, p, []).push(...l);
            }
        },
        exit ({ node: r }, { flagDirectivesByAlt: e }) {
            if (e.get(r)?.length) {
                const a = hOt(e.get(r));
                if (a) {
                    const s = B4({
                        flags: a
                    });
                    s.body[0].body = r.body, r.body = [
                        _h(s, r)
                    ];
                }
            }
        }
    },
    Assertion ({ node: r, parent: e, key: a, container: s, root: l, remove: u, replaceWith: p }, m) {
        const { kind: b, negate: g } = r, { asciiWordBoundaries: _, avoidSubclass: v, supportedGNodes: x, wordIsAscii: C } = m;
        if (b === "text_segment_boundary") throw new Error(`Unsupported text segment boundary "\\${g ? "Y" : "y"}"`);
        if (b === "line_end") p(_h(PP({
            body: [
                RP({
                    body: [
                        JRe("string_end")
                    ]
                }),
                RP({
                    body: [
                        Lhe(10)
                    ]
                })
            ]
        }), e));
        else if (b === "line_start") p(_h(BS(fc`(?<=\A|\n(?!\z))`, {
            skipLookbehindValidation: !0
        }), e));
        else if (b === "search_start") if (x.has(r)) l.flags.sticky = !0, u();
        else {
            const E = s[a - 1];
            if (E && Vxr(E)) p(_h(PP({
                negate: !0
            }), e));
            else {
                if (v) throw new Error(fc`Uses "\G" in a way that requires a subclass`);
                p(u$(JRe("string_start"), e)), m.strategy = "clip_search";
            }
        }
        else if (!(b === "string_end" || b === "string_start")) if (b === "string_end_newline") p(_h(BS(fc`(?=\n?\z)`), e));
        else if (b === "word_boundary") {
            if (!C && !_) {
                const E = `(?:(?<=${US})(?!${US})|(?<!${US})(?=${US}))`, A = `(?:(?<=${US})(?=${US})|(?<!${US})(?!${US}))`;
                p(_h(BS(g ? A : E), e));
            }
        } else throw new Error(`Unexpected assertion kind "${b}"`);
    },
    Backreference ({ node: r }, { jsGroupNameMap: e }) {
        let { ref: a } = r;
        typeof a == "string" && !lPe(a) && (a = cPe(a, e), r.ref = a);
    },
    CapturingGroup ({ node: r }, { jsGroupNameMap: e, subroutineRefMap: a }) {
        let { name: s } = r;
        s && !lPe(s) && (s = cPe(s, e), r.name = s), a.set(r.number, r), s && a.set(s, r);
    },
    CharacterClassRange ({ node: r, parent: e, replaceWith: a }) {
        if (e.kind === "intersection") {
            const s = Dhe({
                body: [
                    r
                ]
            });
            a(_h(s, e), {
                traverse: !0
            });
        }
    },
    CharacterSet ({ node: r, parent: e, replaceWith: a }, { accuracy: s, minTargetEs2024: l, digitIsAscii: u, spaceIsAscii: p, wordIsAscii: m }) {
        const { kind: b, negate: g, value: _ } = r;
        if (u && (b === "digit" || _ === "digit")) {
            a(u$(ePe("digit", {
                negate: g
            }), e));
            return;
        }
        if (p && (b === "space" || _ === "space")) {
            a(_h(uPe(BS(s4r), g), e));
            return;
        }
        if (m && (b === "word" || _ === "word")) {
            a(u$(ePe("word", {
                negate: g
            }), e));
            return;
        }
        if (b === "any") a(u$(WB("Any"), e));
        else if (b === "digit") a(u$(WB("Nd", {
            negate: g
        }), e));
        else if (b !== "dot") if (b === "text_segment") {
            if (s === "strict") throw new Error(fc`Use of "\X" requires non-strict accuracy`);
            const v = "\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?", x = fc`\p{RI}{2}|${v}(?:\u200D${v})*`;
            a(_h(BS(fc`(?>\r\n|${l ? fc`\p{RGI_Emoji}` : x}|\P{M}\p{M}*)`, {
                skipPropertyNameValidation: !0
            }), e));
        } else if (b === "hex") a(u$(WB("AHex", {
            negate: g
        }), e));
        else if (b === "newline") a(_h(BS(g ? `[^
]` : `(?>\r
?|[
\v\f\x85\u2028\u2029])`), e));
        else if (b === "posix") if (!l && (_ === "graph" || _ === "print")) {
            if (s === "strict") throw new Error(`POSIX class "${_}" requires min target ES2024 or non-strict accuracy`);
            let v = {
                graph: "!-~",
                print: " -~"
            }[_];
            g && (v = `\0-${qg(v.codePointAt(0) - 1)}${qg(v.codePointAt(2) + 1)}-\u{10FFFF}`), a(_h(BS(`[${v}]`), e));
        } else a(_h(uPe(BS(p4r.get(_)), g), e));
        else if (b === "property") pPe.has(Fhe(_)) || (r.key = "sc");
        else if (b === "space") a(u$(WB("space", {
            negate: g
        }), e));
        else if (b === "word") a(_h(uPe(BS(US), g), e));
        else throw new Error(`Unexpected character set kind "${b}"`);
    },
    Directive ({ node: r, parent: e, root: a, remove: s, replaceWith: l, removeAllPrevSiblings: u, removeAllNextSiblings: p }) {
        const { kind: m, flags: b } = r;
        if (m === "flags") if (!b.enable && !b.disable) s();
        else {
            const g = B4({
                flags: b
            });
            g.body[0].body = p(), l(_h(g, e), {
                traverse: !0
            });
        }
        else if (m === "keep") {
            const g = a.body[0], v = a.body.length === 1 && HFt(g, {
                type: "Group"
            }) && g.body[0].body.length === 1 ? g.body[0] : a;
            if (e.parent !== v || v.body.length > 1) throw new Error(fc`Uses "\K" in a way that's unsupported`);
            const x = PP({
                behind: !0
            });
            x.body[0].body = u(), l(_h(x, e));
        } else throw new Error(`Unexpected directive kind "${m}"`);
    },
    Flags ({ node: r, parent: e }) {
        if (r.posixIsAscii) throw new Error('Unsupported flag "P"');
        if (r.textSegmentMode === "word") throw new Error('Unsupported flag "y{w}"');
        [
            "digitIsAscii",
            "extended",
            "posixIsAscii",
            "spaceIsAscii",
            "wordIsAscii",
            "textSegmentMode"
        ].forEach((a)=>delete r[a]), Object.assign(r, {
            global: !1,
            hasIndices: !1,
            multiline: !1,
            sticky: r.sticky ?? !1
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
    Group ({ node: r }) {
        if (!r.flags) return;
        const { enable: e, disable: a } = r.flags;
        e?.extended && delete e.extended, a?.extended && delete a.extended, e?.dotAll && a?.dotAll && delete e.dotAll, e?.ignoreCase && a?.ignoreCase && delete e.ignoreCase, e && !Object.keys(e).length && delete r.flags.enable, a && !Object.keys(a).length && delete r.flags.disable, !r.flags.enable && !r.flags.disable && delete r.flags;
    },
    LookaroundAssertion ({ node: r }, e) {
        const { kind: a } = r;
        a === "lookbehind" && (e.passedLookbehind = !0);
    },
    NamedCallout ({ node: r, parent: e, replaceWith: a }) {
        const { kind: s } = r;
        if (s === "fail") a(_h(PP({
            negate: !0
        }), e));
        else throw new Error(`Unsupported named callout "(*${s.toUpperCase()}"`);
    },
    Quantifier ({ node: r }) {
        if (r.body.type === "Quantifier") {
            const e = B4();
            e.body[0].body.push(r.body), r.body = _h(e, r);
        }
    },
    Regex: {
        enter ({ node: r }, { supportedGNodes: e }) {
            const a = [];
            let s = !1, l = !1;
            for (const u of r.body)if (u.body.length === 1 && u.body[0].kind === "search_start") u.body.pop();
            else {
                const p = bOt(u.body);
                p ? (s = !0, Array.isArray(p) ? a.push(...p) : a.push(p)) : l = !0;
            }
            s && !l && a.forEach((u)=>e.add(u));
        },
        exit (r, { accuracy: e, passedLookbehind: a, strategy: s }) {
            if (e === "strict" && a && s) throw new Error(fc`Uses "\G" in a way that requires non-strict accuracy`);
        }
    },
    Subroutine ({ node: r }, { jsGroupNameMap: e }) {
        let { ref: a } = r;
        typeof a == "string" && !lPe(a) && (a = cPe(a, e), r.ref = a);
    }
}, f4r = {
    Backreference ({ node: r }, { multiplexCapturesToLeftByRef: e, reffedNodesByReferencer: a }) {
        const { orphan: s, ref: l } = r;
        s || a.set(r, [
            ...e.get(l).map(({ node: u })=>u)
        ]);
    },
    CapturingGroup: {
        enter ({ node: r, parent: e, replaceWith: a, skip: s }, { groupOriginByCopy: l, groupsByName: u, multiplexCapturesToLeftByRef: p, openRefs: m, reffedNodesByReferencer: b }) {
            const g = l.get(r);
            if (g && m.has(r.number)) {
                const v = u$(fOt(r.number), e);
                b.set(v, m.get(r.number)), a(v);
                return;
            }
            m.set(r.number, r), p.set(r.number, []), r.name && rQ(p, r.name, []);
            const _ = p.get(r.name ?? r.number);
            for(let v = 0; v < _.length; v++){
                const x = _[v];
                if (g === x.node || g && g === x.origin || r === x.origin) {
                    _.splice(v, 1);
                    break;
                }
            }
            if (p.get(r.number).push({
                node: r,
                origin: g
            }), r.name && p.get(r.name).push({
                node: r,
                origin: g
            }), r.name) {
                const v = rQ(u, r.name, new Map);
                let x = !1;
                if (g) x = !0;
                else for (const C of v.values())if (!C.hasDuplicateNameToRemove) {
                    x = !0;
                    break;
                }
                u.get(r.name).set(r, {
                    node: r,
                    hasDuplicateNameToRemove: x
                });
            }
        },
        exit ({ node: r }, { openRefs: e }) {
            e.delete(r.number);
        }
    },
    Group: {
        enter ({ node: r }, e) {
            e.prevFlags = e.currentFlags, r.flags && (e.currentFlags = qhe(e.currentFlags, r.flags));
        },
        exit (r, e) {
            e.currentFlags = e.prevFlags;
        }
    },
    Subroutine ({ node: r, parent: e, replaceWith: a }, s) {
        const { isRecursive: l, ref: u } = r;
        if (l) {
            let _ = e;
            for(; (_ = _.parent) && !(_.type === "CapturingGroup" && (_.name === u || _.number === u)););
            s.reffedNodesByReferencer.set(r, _);
            return;
        }
        const p = s.subroutineRefMap.get(u), m = u === 0, b = m ? fOt(0) : mOt(p, s.groupOriginByCopy, null);
        let g = b;
        if (!m) {
            const _ = hOt(Wxr(p, (x)=>x.type === "Group" && !!x.flags)), v = _ ? qhe(s.globalFlags, _) : s.globalFlags;
            Uxr(v, s.currentFlags) || (g = B4({
                flags: Hxr(v)
            }), g.body[0].body.push(b));
        }
        a(_h(g, e), {
            traverse: !m
        });
    }
}, h4r = {
    Backreference ({ node: r, parent: e, replaceWith: a }, s) {
        if (r.orphan) {
            s.highestOrphanBackref = Math.max(s.highestOrphanBackref, r.ref);
            return;
        }
        const u = s.reffedNodesByReferencer.get(r).filter((p)=>Gxr(p, r));
        if (!u.length) a(_h(PP({
            negate: !0
        }), e));
        else if (u.length > 1) {
            const p = B4({
                atomic: !0,
                body: u.reverse().map((m)=>RP({
                        body: [
                            QRe(m.number)
                        ]
                    }))
            });
            a(_h(p, e));
        } else r.ref = u[0].number;
    },
    CapturingGroup ({ node: r }, e) {
        r.number = ++e.numCapturesToLeft, r.name && e.groupsByName.get(r.name).get(r).hasDuplicateNameToRemove && delete r.name;
    },
    Regex: {
        exit ({ node: r }, e) {
            const a = Math.max(e.highestOrphanBackref - e.numCapturesToLeft, 0);
            for(let s = 0; s < a; s++){
                const l = VFt();
                r.body.at(-1).body.push(l);
            }
        }
    },
    Subroutine ({ node: r }, e) {
        !r.isRecursive || r.ref === 0 || (r.ref = e.reffedNodesByReferencer.get(r).number);
    }
}, i(pOt, "addParentProperties"), i(Uxr, "areFlagsEqual"), i(Gxr, "canParticipateWithNode"), i(mOt, "cloneCapturingGroup"), i(fOt, "createRecursion"), i(Wxr, "getAllParents"), i(cPe, "getAndStoreJsGroupName"), i(hOt, "getCombinedFlagModsFromFlagNodes"), i(Hxr, "getFlagModsFromFlags"), i(gOt, "getKids"), i(bOt, "getLeadingG"), i(yOt, "isAncestorOf"), i(Zxr, "isAlwaysZeroLength"), i(Vxr, "isAlwaysNonZeroLength"), i(Kxr, "isLoneGLookaround"), i(lPe, "isValidJsGroupName"), i(BS, "parseFragment"), i(uPe, "setNegate"), i(u$, "setParent"), i(_h, "setParentDeep"), i(Xxr, "generate"), g4r = {
    "*": {
        enter ({ node: r }, e) {
            if (_Ot(r)) {
                const a = e.getCurrentModI();
                e.pushModI(r.flags ? qhe({
                    ignoreCase: a
                }, r.flags).ignoreCase : a);
            }
        },
        exit ({ node: r }, e) {
            _Ot(r) && e.popModI();
        }
    },
    Backreference (r, e) {
        e.setHasCasedChar();
    },
    Character ({ node: r }, e) {
        dPe(qg(r.value)) && e.setHasCasedChar();
    },
    CharacterClassRange ({ node: r, skip: e }, a) {
        e(), wOt(r, {
            firstOnly: !0
        }).length && a.setHasCasedChar();
    },
    CharacterSet ({ node: r }, e) {
        r.kind === "property" && xOt.has(r.value) && e.setHasCasedChar();
    }
}, b4r = {
    Alternative ({ body: r }, e, a) {
        return r.map(a).join("");
    },
    Assertion ({ kind: r, negate: e }) {
        if (r === "string_end") return "$";
        if (r === "string_start") return "^";
        if (r === "word_boundary") return e ? fc`\B` : fc`\b`;
        throw new Error(`Unexpected assertion kind "${r}"`);
    },
    Backreference ({ ref: r }, e) {
        if (typeof r != "number") throw new Error("Unexpected named backref in transformed AST");
        if (!e.useFlagMods && e.accuracy === "strict" && e.currentFlags.ignoreCase && !e.captureMap.get(r).ignoreCase) throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
        return "\\" + r;
    },
    CapturingGroup (r, e, a) {
        const { body: s, name: l, number: u } = r, p = {
            ignoreCase: e.currentFlags.ignoreCase
        }, m = e.originMap.get(r);
        return m && (p.hidden = !0, u > m.number && (p.transferTo = m.number)), e.captureMap.set(u, p), `(${l ? `?<${l}>` : ""}${s.map(a).join("|")})`;
    },
    Character ({ value: r }, e) {
        const a = qg(r), s = ZB(r, {
            escDigit: e.lastNode.type === "Backreference",
            inCharClass: e.inCharClass,
            useFlagV: e.useFlagV
        });
        if (s !== a) return s;
        if (e.useAppliedIgnoreCase && e.currentFlags.ignoreCase && dPe(a)) {
            const l = dOt(a);
            return e.inCharClass ? l.join("") : l.length > 1 ? `[${l.join("")}]` : l[0];
        }
        return a;
    },
    CharacterClass (r, e, a) {
        const { kind: s, negate: l, parent: u } = r;
        let { body: p } = r;
        if (s === "intersection" && !e.useFlagV) throw new Error("Use of character class intersection requires min target ES2024");
        qS.bugFlagVLiteralHyphenIsRange && e.useFlagV && p.some(kOt) && (p = [
            Lhe(45),
            ...p.filter((g)=>!kOt(g))
        ]);
        const m = i(()=>`[${l ? "^" : ""}${p.map(a).join(s === "intersection" ? "&&" : "")}]`, "genClass");
        if (!e.inCharClass) {
            if ((!e.useFlagV || qS.bugNestedClassIgnoresNegation) && !l) {
                const _ = p.filter((v)=>v.type === "CharacterClass" && v.kind === "union" && v.negate);
                if (_.length) {
                    const v = B4(), x = v.body[0];
                    return v.parent = u, x.parent = v, p = p.filter((C)=>!_.includes(C)), r.body = p, p.length ? (r.parent = x, x.body.push(r)) : v.body.pop(), _.forEach((C)=>{
                        const E = RP({
                            body: [
                                C
                            ]
                        });
                        C.parent = E, E.parent = v, v.body.push(E);
                    }), a(v);
                }
            }
            e.inCharClass = !0;
            const g = m();
            return e.inCharClass = !1, g;
        }
        const b = p[0];
        if (s === "union" && !l && b && ((!e.useFlagV || !e.verbose) && u.kind === "union" && !(qS.bugFlagVLiteralHyphenIsRange && e.useFlagV) || !e.verbose && u.kind === "intersection" && p.length === 1 && b.type !== "CharacterClassRange")) return p.map(a).join("");
        if (!e.useFlagV && u.type === "CharacterClass") throw new Error("Uses nested character class in a way that requires min target ES2024");
        return m();
    },
    CharacterClassRange (r, e) {
        const a = r.min.value, s = r.max.value, l = {
            escDigit: !1,
            inCharClass: !0,
            useFlagV: e.useFlagV
        }, u = ZB(a, l), p = ZB(s, l), m = new Set;
        if (e.useAppliedIgnoreCase && e.currentFlags.ignoreCase) {
            const b = wOt(r);
            Yxr(b).forEach((_)=>{
                m.add(Array.isArray(_) ? `${ZB(_[0], l)}-${ZB(_[1], l)}` : ZB(_, l));
            });
        }
        return `${u}-${p}${[
            ...m
        ].join("")}`;
    },
    CharacterSet ({ kind: r, negate: e, value: a, key: s }, l) {
        if (r === "dot") return l.currentFlags.dotAll ? l.appliedGlobalFlags.dotAll || l.useFlagMods ? "." : "[^]" : fc`[^\n]`;
        if (r === "digit") return e ? fc`\D` : fc`\d`;
        if (r === "property") {
            if (l.useAppliedIgnoreCase && l.currentFlags.ignoreCase && xOt.has(a)) throw new Error(`Unicode property "${a}" can't be case-insensitive when other chars have specific case`);
            return `${e ? fc`\P` : fc`\p`}{${s ? `${s}=` : ""}${a}}`;
        }
        if (r === "word") return e ? fc`\W` : fc`\w`;
        throw new Error(`Unexpected character set kind "${r}"`);
    },
    Flags (r, e) {
        return (e.appliedGlobalFlags.ignoreCase ? "i" : "") + (r.dotAll ? "s" : "") + (r.sticky ? "y" : "");
    },
    Group ({ atomic: r, body: e, flags: a, parent: s }, l, u) {
        const p = l.currentFlags;
        a && (l.currentFlags = qhe(p, a));
        const m = e.map(u).join("|"), b = !l.verbose && e.length === 1 && s.type !== "Quantifier" && !r && (!l.useFlagMods || !a) ? m : `(?${Jxr(r, a, l.useFlagMods)}${m})`;
        return l.currentFlags = p, b;
    },
    LookaroundAssertion ({ body: r, kind: e, negate: a }, s, l) {
        return `(?${`${e === "lookahead" ? "" : "<"}${a ? "!" : "="}`}${r.map(l).join("|")})`;
    },
    Quantifier (r, e, a) {
        return a(r.body) + Qxr(r);
    },
    Subroutine ({ isRecursive: r, ref: e }, a) {
        if (!r) throw new Error("Unexpected non-recursive subroutine in transformed AST");
        const s = a.recursionLimit;
        return e === 0 ? `(?R=${s})` : fc`\g<${e}&R=${s}>`;
    }
}, y4r = new Set([
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
]), w4r = new Set([
    "-",
    "\\",
    "]",
    "^",
    "["
]), _4r = new Set([
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
]), COt = new Map([
    [
        9,
        fc`\t`
    ],
    [
        10,
        fc`\n`
    ],
    [
        11,
        fc`\v`
    ],
    [
        12,
        fc`\f`
    ],
    [
        13,
        fc`\r`
    ],
    [
        8232,
        fc`\u2028`
    ],
    [
        8233,
        fc`\u2029`
    ],
    [
        65279,
        fc`\uFEFF`
    ]
]), k4r = /^\p{Cased}$/u, i(dPe, "charHasCase"), i(wOt, "getCasesOutsideCharClassRange"), i(ZB, "getCharEscape"), i(Yxr, "getCodePointRangesFromChars"), i(Jxr, "getGroupPrefix"), i(Qxr, "getQuantifierStr"), i(_Ot, "isAnyGroup"), i(e4r, "isDigitCharCode"), i(kOt, "isLiteralHyphen"), v4r = (oQ = class extends RegExp {
    constructor(r, e, a){
        var s = (...u)=>(super(...u), IY(this, mPe), IY(this, VB, new Map), IY(this, LP, null), IY(this, iQ), IY(this, KB, null), IY(this, aQ, null), Ye(this, "rawOptions", {}), this);
        const l = !!a?.lazyCompile;
        if (r instanceof RegExp) {
            if (a) throw new Error("Cannot provide options when copying a regexp");
            const u = r;
            s(u, e), vS(this, iQ, u.source), u instanceof oQ && (vS(this, VB, X_(u, VB)), vS(this, KB, X_(u, KB)), vS(this, aQ, X_(u, aQ)), this.rawOptions = u.rawOptions);
        } else {
            const u = {
                hiddenCaptures: [],
                strategy: null,
                transfers: [],
                ...a
            };
            s(l ? "" : r, e), vS(this, iQ, r), vS(this, VB, n4r(u.hiddenCaptures, u.transfers)), vS(this, aQ, u.strategy), this.rawOptions = a ?? {};
        }
        l || vS(this, LP, this);
    }
    get source() {
        return X_(this, iQ) || "(?:)";
    }
    exec(r) {
        if (!X_(this, LP)) {
            const { lazyCompile: s, ...l } = this.rawOptions;
            vS(this, LP, new oQ(X_(this, iQ), this.flags, l));
        }
        const e = this.global || this.sticky, a = this.lastIndex;
        if (X_(this, aQ) === "clip_search" && e && a) {
            this.lastIndex = 0;
            const s = cYn(this, mPe, SOt).call(this, r.slice(a));
            return s && (t4r(s, a, r, this.hasIndices), this.lastIndex += a), s;
        }
        return cYn(this, mPe, SOt).call(this, r);
    }
}, VB = new WeakMap, LP = new WeakMap, iQ = new WeakMap, KB = new WeakMap, aQ = new WeakMap, mPe = new WeakSet, SOt = i(function(r) {
    X_(this, LP).lastIndex = this.lastIndex;
    const e = N_i(oQ.prototype, this, "exec").call(X_(this, LP), r);
    if (this.lastIndex = X_(this, LP).lastIndex, !e || !X_(this, VB).size) return e;
    const a = [
        ...e
    ];
    e.length = 1;
    let s;
    this.hasIndices && (s = [
        ...e.indices
    ], e.indices.length = 1);
    const l = [
        0
    ];
    for(let u = 1; u < a.length; u++){
        const { hidden: p, transferTo: m } = X_(this, VB).get(u) ?? {};
        if (p ? l.push(null) : (l.push(e.length), e.push(a[u]), this.hasIndices && e.indices.push(s[u])), m && a[u] !== void 0) {
            const b = l[m];
            if (!b) throw new Error(`Invalid capture transfer to "${b}"`);
            if (e[b] = a[u], this.hasIndices && (e.indices[b] = s[u]), e.groups) {
                X_(this, KB) || vS(this, KB, r4r(this.source));
                const g = X_(this, KB).get(m);
                g && (e.groups[g] = a[u], this.hasIndices && (e.indices.groups[g] = s[u]));
            }
        }
    }
    return e;
}, "#execCore"), i(oQ, "_EmulatedRegExp"), oQ), i(t4r, "adjustMatchDetailsForOffset"), i(n4r, "createCaptureMap"), i(r4r, "createNameMap"), i(i4r, "toRegExp"), i(a4r, "toRegExpDetails");

}
