import { TY, i } from "./plugin-brand-icon.js";
var $_i = (r, e, a)=>e in r ? TY(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : r[e] = a, Ye = (r, e, a)=>$_i(r, typeof e != "symbol" ? e + "" : e, a);
function AMe() {
    return {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null
    };
}
function qPt(r) {
    SP = r;
}
function xu(r, e = "") {
    let a = typeof r == "string" ? r : r.source, s = {
        replace: i((l, u)=>{
            let p = typeof u == "string" ? u : u.source;
            return p = p.replace(Vy.caret, "$1"), a = a.replace(l, p), s;
        }, "replace"),
        getRegex: i(()=>new RegExp(a, e), "getRegex")
    };
    return s;
}
function DS(r, e) {
    if (e) {
        if (Vy.escapeTest.test(r)) return r.replace(Vy.escapeReplace, ijt);
    } else if (Vy.escapeTestNoEncode.test(r)) return r.replace(Vy.escapeReplaceNoEncode, ijt);
    return r;
}
function UPt(r) {
    try {
        r = encodeURI(r).replace(Vy.percentDecode, "%");
    } catch  {
        return null;
    }
    return r;
}
function GPt(r, e) {
    let a = r.replace(Vy.findPipe, (u, p, m)=>{
        let b = !1, g = p;
        for(; --g >= 0 && m[g] === "\\";)b = !b;
        return b ? "|" : " |";
    }), s = a.split(Vy.splitPipe), l = 0;
    if (s[0].trim() || s.shift(), s.length > 0 && !s.at(-1)?.trim() && s.pop(), e) if (s.length > e) s.splice(e);
    else for(; s.length < e;)s.push("");
    for(; l < s.length; l++)s[l] = s[l].trim().replace(Vy.slashPipe, "|");
    return s;
}
function NJ(r, e, a) {
    let s = r.length;
    if (s === 0) return "";
    let l = 0;
    for(; l < s;){
        let u = r.charAt(s - l - 1);
        if (u === e && !a) l++;
        else if (u !== e && a) l++;
        else break;
    }
    return r.slice(0, s - l);
}
function igr(r, e) {
    if (r.indexOf(e[1]) === -1) return -1;
    let a = 0;
    for(let s = 0; s < r.length; s++)if (r[s] === "\\") s++;
    else if (r[s] === e[0]) a++;
    else if (r[s] === e[1] && (a--, a < 0)) return s;
    return a > 0 ? -2 : -1;
}
function WPt(r, e, a, s, l) {
    let u = e.href, p = e.title || null, m = r[1].replace(l.other.outputLinkReplace, "$1");
    s.state.inLink = !0;
    let b = {
        type: r[0].charAt(0) === "!" ? "image" : "link",
        raw: a,
        href: u,
        title: p,
        text: m,
        tokens: s.inlineTokens(m)
    };
    return s.state.inLink = !1, b;
}
function agr(r, e, a) {
    let s = r.match(a.other.indentCodeCompensation);
    if (s === null) return e;
    let l = s[1];
    return e.split(`
`).map((u)=>{
        let p = u.match(a.other.beginningSpace);
        if (p === null) return u;
        let [m] = p;
        return m.length >= l.length ? u.slice(l.length) : u;
    }).join(`
`);
}
function Wd(r, e) {
    return EP.parse(r, e);
}
var SP, MJ, ogr, Vy, sgr, cgr, lgr, RJ, ugr, TMe, HPt, ZPt, dgr, $Me, pgr, IMe, mgr, fgr, Wfe, NMe, hgr, VPt, ggr, MMe, KPt, bgr, ygr, wgr, _gr, XPt, kgr, Hfe, RMe, YPt, vgr, JPt, xgr, Cgr, Sgr, QPt, Egr, Agr, ejt, Tgr, $gr, Igr, Ngr, Mgr, Rgr, Pgr, Zfe, jgr, tjt, njt, Lgr, rjt, PMe, Dgr, jMe, Fgr, Vfe, PJ, Ogr, ijt, ajt, Kfe, Xfe, ak, ojt, Yfe, sjt, LMe, Jfe, D4, Qfe, jJ, cjt, zgr, EP, I4i, N4i, M4i, R4i, P4i, j4i, L4i;
export { $Me, $gr, AMe, Agr, Cgr, D4, DS, Dgr, EP, Egr, Fgr, GPt, HPt, Hfe, I4i, IMe, Igr, JPt, Jfe, KPt, Kfe, L4i, LMe, Lgr, M4i, MJ, MMe, Mgr, N4i, NJ, NMe, Ngr, Ogr, P4i, PJ, PMe, Pgr, QPt, Qfe, R4i, RJ, RMe, Rgr, SP, Sgr, TMe, Tgr, UPt, VPt, Vfe, Vy, WPt, Wd, Wfe, XPt, Xfe, YPt, Ye, Yfe, ZPt, Zfe, _gr, agr, ajt, ak, bgr, cgr, cjt, dgr, ejt, fgr, ggr, hgr, igr, ijt, j4i, jJ, jMe, jgr, kgr, lgr, mgr, njt, ogr, ojt, pgr, qPt, rjt, sgr, sjt, tjt, ugr, vgr, wgr, xgr, xu, ygr, zgr };
var __wakaru_Bgr_initialized = false;
export function Bgr() {
if (__wakaru_Bgr_initialized) return;
__wakaru_Bgr_initialized = true;
i(AMe, "L"), SP = AMe(), i(qPt, "Z"), MJ = {
    exec: i(()=>null, "exec")
}, i(xu, "k"), ogr = (()=>{
    try {
        return !!new RegExp("(?<=1)(?<!1)");
    } catch  {
        return !1;
    }
})(), Vy = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] +\S/,
    listReplaceTask: /^\[[ xX]\] +/,
    listTaskCheckbox: /\[[ xX]\]/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: i((r)=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), "listItemRegex"),
    nextBulletRegex: i((r)=>new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), "nextBulletRegex"),
    hrRegex: i((r)=>new RegExp(`^ {0,${Math.min(3, r - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), "hrRegex"),
    fencesBeginRegex: i((r)=>new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:\`\`\`|~~~)`), "fencesBeginRegex"),
    headingBeginRegex: i((r)=>new RegExp(`^ {0,${Math.min(3, r - 1)}}#`), "headingBeginRegex"),
    htmlBeginRegex: i((r)=>new RegExp(`^ {0,${Math.min(3, r - 1)}}<(?:[a-z].*>|!--)`, "i"), "htmlBeginRegex")
}, sgr = /^(?:[ \t]*(?:\n|$))+/, cgr = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, lgr = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, RJ = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ugr = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, TMe = /(?:[*+-]|\d{1,9}[.)])/, HPt = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table| {0,3}(?:(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n|$)))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, ZPt = xu(HPt).replace(/bull/g, TMe).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), dgr = xu(HPt).replace(/bull/g, TMe).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), $Me = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, pgr = /^[^\n]+/, IMe = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, mgr = xu(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", IMe).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), fgr = xu(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, TMe).getRegex(), Wfe = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", NMe = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, hgr = xu("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", NMe).replace("tag", Wfe).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), VPt = xu($Me).replace("hr", RJ).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Wfe).getRegex(), ggr = xu(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", VPt).getRegex(), MMe = {
    blockquote: ggr,
    code: cgr,
    def: mgr,
    fences: lgr,
    heading: ugr,
    hr: RJ,
    html: hgr,
    lheading: ZPt,
    list: fgr,
    newline: sgr,
    paragraph: VPt,
    table: MJ,
    text: pgr
}, KPt = xu("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", RJ).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Wfe).getRegex(), bgr = {
    ...MMe,
    lheading: dgr,
    table: KPt,
    paragraph: xu($Me).replace("hr", RJ).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", KPt).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Wfe).getRegex()
}, ygr = {
    ...MMe,
    html: xu(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", NMe).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: MJ,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: xu($Me).replace("hr", RJ).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ZPt).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, wgr = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, _gr = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, XPt = /^( {2,}|\\)\n(?!\s*$)/, kgr = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Hfe = /[\p{P}\p{S}]/u, RMe = /[\s\p{P}\p{S}]/u, YPt = /[^\s\p{P}\p{S}]/u, vgr = xu(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, RMe).getRegex(), JPt = /(?!~)[\p{P}\p{S}]/u, xgr = /(?!~)[\s\p{P}\p{S}]/u, Cgr = /(?:[^\s\p{P}\p{S}]|~)/u, Sgr = xu(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", ogr ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), QPt = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Egr = xu(QPt, "u").replace(/punct/g, Hfe).getRegex(), Agr = xu(QPt, "u").replace(/punct/g, JPt).getRegex(), ejt = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Tgr = xu(ejt, "gu").replace(/notPunctSpace/g, YPt).replace(/punctSpace/g, RMe).replace(/punct/g, Hfe).getRegex(), $gr = xu(ejt, "gu").replace(/notPunctSpace/g, Cgr).replace(/punctSpace/g, xgr).replace(/punct/g, JPt).getRegex(), Igr = xu("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, YPt).replace(/punctSpace/g, RMe).replace(/punct/g, Hfe).getRegex(), Ngr = xu(/\\(punct)/, "gu").replace(/punct/g, Hfe).getRegex(), Mgr = xu(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Rgr = xu(NMe).replace("(?:-->|$)", "-->").getRegex(), Pgr = xu("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Rgr).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Zfe = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, jgr = xu(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Zfe).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), tjt = xu(/^!?\[(label)\]\[(ref)\]/).replace("label", Zfe).replace("ref", IMe).getRegex(), njt = xu(/^!?\[(ref)\](?:\[\])?/).replace("ref", IMe).getRegex(), Lgr = xu("reflink|nolink(?!\\()", "g").replace("reflink", tjt).replace("nolink", njt).getRegex(), rjt = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, PMe = {
    _backpedal: MJ,
    anyPunctuation: Ngr,
    autolink: Mgr,
    blockSkip: Sgr,
    br: XPt,
    code: _gr,
    del: MJ,
    emStrongLDelim: Egr,
    emStrongRDelimAst: Tgr,
    emStrongRDelimUnd: Igr,
    escape: wgr,
    link: jgr,
    nolink: njt,
    punctuation: vgr,
    reflink: tjt,
    reflinkSearch: Lgr,
    tag: Pgr,
    text: kgr,
    url: MJ
}, Dgr = {
    ...PMe,
    link: xu(/^!?\[(label)\]\((.*?)\)/).replace("label", Zfe).getRegex(),
    reflink: xu(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Zfe).getRegex()
}, jMe = {
    ...PMe,
    emStrongRDelimAst: $gr,
    emStrongLDelim: Agr,
    url: xu(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", rjt).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
    text: xu(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", rjt).getRegex()
}, Fgr = {
    ...jMe,
    br: xu(XPt).replace("{2,}", "*").getRegex(),
    text: xu(jMe.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Vfe = {
    normal: MMe,
    gfm: bgr,
    pedantic: ygr
}, PJ = {
    normal: PMe,
    gfm: jMe,
    breaks: Fgr,
    pedantic: Dgr
}, Ogr = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}, ijt = i((r)=>Ogr[r], "ke"), i(DS, "w"), i(UPt, "X"), i(GPt, "J"), i(NJ, "z"), i(igr, "de"), i(WPt, "ge"), i(agr, "Je"), Kfe = (ajt = class {
    constructor(r){
        Ye(this, "options"), Ye(this, "rules"), Ye(this, "lexer"), this.options = r || SP;
    }
    space(r) {
        let e = this.rules.block.newline.exec(r);
        if (e && e[0].length > 0) return {
            type: "space",
            raw: e[0]
        };
    }
    code(r) {
        let e = this.rules.block.code.exec(r);
        if (e) {
            let a = e[0].replace(this.rules.other.codeRemoveIndent, "");
            return {
                type: "code",
                raw: e[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? a : NJ(a, `
`)
            };
        }
    }
    fences(r) {
        let e = this.rules.block.fences.exec(r);
        if (e) {
            let a = e[0], s = agr(a, e[3] || "", this.rules);
            return {
                type: "code",
                raw: a,
                lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
                text: s
            };
        }
    }
    heading(r) {
        let e = this.rules.block.heading.exec(r);
        if (e) {
            let a = e[2].trim();
            if (this.rules.other.endingHash.test(a)) {
                let s = NJ(a, "#");
                (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (a = s.trim());
            }
            return {
                type: "heading",
                raw: e[0],
                depth: e[1].length,
                text: a,
                tokens: this.lexer.inline(a)
            };
        }
    }
    hr(r) {
        let e = this.rules.block.hr.exec(r);
        if (e) return {
            type: "hr",
            raw: NJ(e[0], `
`)
        };
    }
    blockquote(r) {
        let e = this.rules.block.blockquote.exec(r);
        if (e) {
            let a = NJ(e[0], `
`).split(`
`), s = "", l = "", u = [];
            for(; a.length > 0;){
                let p = !1, m = [], b;
                for(b = 0; b < a.length; b++)if (this.rules.other.blockquoteStart.test(a[b])) m.push(a[b]), p = !0;
                else if (!p) m.push(a[b]);
                else break;
                a = a.slice(b);
                let g = m.join(`
`), _ = g.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
                s = s ? `${s}
${g}` : g, l = l ? `${l}
${_}` : _;
                let v = this.lexer.state.top;
                if (this.lexer.state.top = !0, this.lexer.blockTokens(_, u, !0), this.lexer.state.top = v, a.length === 0) break;
                let x = u.at(-1);
                if (x?.type === "code") break;
                if (x?.type === "blockquote") {
                    let C = x, E = C.raw + `
` + a.join(`
`), A = this.blockquote(E);
                    u[u.length - 1] = A, s = s.substring(0, s.length - C.raw.length) + A.raw, l = l.substring(0, l.length - C.text.length) + A.text;
                    break;
                } else if (x?.type === "list") {
                    let C = x, E = C.raw + `
` + a.join(`
`), A = this.list(E);
                    u[u.length - 1] = A, s = s.substring(0, s.length - x.raw.length) + A.raw, l = l.substring(0, l.length - C.raw.length) + A.raw, a = E.substring(u.at(-1).raw.length).split(`
`);
                    continue;
                }
            }
            return {
                type: "blockquote",
                raw: s,
                tokens: u,
                text: l
            };
        }
    }
    list(r) {
        let e = this.rules.block.list.exec(r);
        if (e) {
            let a = e[1].trim(), s = a.length > 1, l = {
                type: "list",
                raw: "",
                ordered: s,
                start: s ? +a.slice(0, -1) : "",
                loose: !1,
                items: []
            };
            a = s ? `\\d{1,9}\\${a.slice(-1)}` : `\\${a}`, this.options.pedantic && (a = s ? a : "[*+-]");
            let u = this.rules.other.listItemRegex(a), p = !1;
            for(; r;){
                let b = !1, g = "", _ = "";
                if (!(e = u.exec(r)) || this.rules.block.hr.test(r)) break;
                g = e[0], r = r.substring(g.length);
                let v = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (A)=>" ".repeat(3 * A.length)), x = r.split(`
`, 1)[0], C = !v.trim(), E = 0;
                if (this.options.pedantic ? (E = 2, _ = v.trimStart()) : C ? E = e[1].length + 1 : (E = e[2].search(this.rules.other.nonSpaceChar), E = E > 4 ? 1 : E, _ = v.slice(E), E += e[1].length), C && this.rules.other.blankLine.test(x) && (g += x + `
`, r = r.substring(x.length + 1), b = !0), !b) {
                    let A = this.rules.other.nextBulletRegex(E), $ = this.rules.other.hrRegex(E), I = this.rules.other.fencesBeginRegex(E), N = this.rules.other.headingBeginRegex(E), R = this.rules.other.htmlBeginRegex(E);
                    for(; r;){
                        let P = r.split(`
`, 1)[0], L;
                        if (x = P, this.options.pedantic ? (x = x.replace(this.rules.other.listReplaceNesting, "  "), L = x) : L = x.replace(this.rules.other.tabCharGlobal, "    "), I.test(x) || N.test(x) || R.test(x) || A.test(x) || $.test(x)) break;
                        if (L.search(this.rules.other.nonSpaceChar) >= E || !x.trim()) _ += `
` + L.slice(E);
                        else {
                            if (C || v.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || I.test(v) || N.test(v) || $.test(v)) break;
                            _ += `
` + x;
                        }
                        !C && !x.trim() && (C = !0), g += P + `
`, r = r.substring(P.length + 1), v = L.slice(E);
                    }
                }
                l.loose || (p ? l.loose = !0 : this.rules.other.doubleBlankLine.test(g) && (p = !0)), l.items.push({
                    type: "list_item",
                    raw: g,
                    task: !!this.options.gfm && this.rules.other.listIsTask.test(_),
                    loose: !1,
                    text: _,
                    tokens: []
                }), l.raw += g;
            }
            let m = l.items.at(-1);
            if (m) m.raw = m.raw.trimEnd(), m.text = m.text.trimEnd();
            else return;
            l.raw = l.raw.trimEnd();
            for (let b of l.items){
                if (this.lexer.state.top = !1, b.tokens = this.lexer.blockTokens(b.text, []), b.task) {
                    if (b.text = b.text.replace(this.rules.other.listReplaceTask, ""), b.tokens[0]?.type === "text" || b.tokens[0]?.type === "paragraph") {
                        b.tokens[0].raw = b.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), b.tokens[0].text = b.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
                        for(let _ = this.lexer.inlineQueue.length - 1; _ >= 0; _--)if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[_].src)) {
                            this.lexer.inlineQueue[_].src = this.lexer.inlineQueue[_].src.replace(this.rules.other.listReplaceTask, "");
                            break;
                        }
                    }
                    let g = this.rules.other.listTaskCheckbox.exec(b.raw);
                    if (g) {
                        let _ = {
                            type: "checkbox",
                            raw: g[0] + " ",
                            checked: g[0] !== "[ ]"
                        };
                        b.checked = _.checked, l.loose ? b.tokens[0] && [
                            "paragraph",
                            "text"
                        ].includes(b.tokens[0].type) && "tokens" in b.tokens[0] && b.tokens[0].tokens ? (b.tokens[0].raw = _.raw + b.tokens[0].raw, b.tokens[0].text = _.raw + b.tokens[0].text, b.tokens[0].tokens.unshift(_)) : b.tokens.unshift({
                            type: "paragraph",
                            raw: _.raw,
                            text: _.raw,
                            tokens: [
                                _
                            ]
                        }) : b.tokens.unshift(_);
                    }
                }
                if (!l.loose) {
                    let g = b.tokens.filter((v)=>v.type === "space"), _ = g.length > 0 && g.some((v)=>this.rules.other.anyLine.test(v.raw));
                    l.loose = _;
                }
            }
            if (l.loose) for (let b of l.items){
                b.loose = !0;
                for (let g of b.tokens)g.type === "text" && (g.type = "paragraph");
            }
            return l;
        }
    }
    html(r) {
        let e = this.rules.block.html.exec(r);
        if (e) return {
            type: "html",
            block: !0,
            raw: e[0],
            pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
            text: e[0]
        };
    }
    def(r) {
        let e = this.rules.block.def.exec(r);
        if (e) {
            let a = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", l = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
            return {
                type: "def",
                tag: a,
                raw: e[0],
                href: s,
                title: l
            };
        }
    }
    table(r) {
        let e = this.rules.block.table.exec(r);
        if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
        let a = GPt(e[1]), s = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), l = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], u = {
            type: "table",
            raw: e[0],
            header: [],
            align: [],
            rows: []
        };
        if (a.length === s.length) {
            for (let p of s)this.rules.other.tableAlignRight.test(p) ? u.align.push("right") : this.rules.other.tableAlignCenter.test(p) ? u.align.push("center") : this.rules.other.tableAlignLeft.test(p) ? u.align.push("left") : u.align.push(null);
            for(let p = 0; p < a.length; p++)u.header.push({
                text: a[p],
                tokens: this.lexer.inline(a[p]),
                header: !0,
                align: u.align[p]
            });
            for (let p of l)u.rows.push(GPt(p, u.header.length).map((m, b)=>({
                    text: m,
                    tokens: this.lexer.inline(m),
                    header: !1,
                    align: u.align[b]
                })));
            return u;
        }
    }
    lheading(r) {
        let e = this.rules.block.lheading.exec(r);
        if (e) return {
            type: "heading",
            raw: e[0],
            depth: e[2].charAt(0) === "=" ? 1 : 2,
            text: e[1],
            tokens: this.lexer.inline(e[1])
        };
    }
    paragraph(r) {
        let e = this.rules.block.paragraph.exec(r);
        if (e) {
            let a = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
            return {
                type: "paragraph",
                raw: e[0],
                text: a,
                tokens: this.lexer.inline(a)
            };
        }
    }
    text(r) {
        let e = this.rules.block.text.exec(r);
        if (e) return {
            type: "text",
            raw: e[0],
            text: e[0],
            tokens: this.lexer.inline(e[0])
        };
    }
    escape(r) {
        let e = this.rules.inline.escape.exec(r);
        if (e) return {
            type: "escape",
            raw: e[0],
            text: e[1]
        };
    }
    tag(r) {
        let e = this.rules.inline.tag.exec(r);
        if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), {
            type: "html",
            raw: e[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: !1,
            text: e[0]
        };
    }
    link(r) {
        let e = this.rules.inline.link.exec(r);
        if (e) {
            let a = e[2].trim();
            if (!this.options.pedantic && this.rules.other.startAngleBracket.test(a)) {
                if (!this.rules.other.endAngleBracket.test(a)) return;
                let u = NJ(a.slice(0, -1), "\\");
                if ((a.length - u.length) % 2 === 0) return;
            } else {
                let u = igr(e[2], "()");
                if (u === -2) return;
                if (u > -1) {
                    let p = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + u;
                    e[2] = e[2].substring(0, u), e[0] = e[0].substring(0, p).trim(), e[3] = "";
                }
            }
            let s = e[2], l = "";
            if (this.options.pedantic) {
                let u = this.rules.other.pedanticHrefTitle.exec(s);
                u && (s = u[1], l = u[3]);
            } else l = e[3] ? e[3].slice(1, -1) : "";
            return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(a) ? s = s.slice(1) : s = s.slice(1, -1)), WPt(e, {
                href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
                title: l && l.replace(this.rules.inline.anyPunctuation, "$1")
            }, e[0], this.lexer, this.rules);
        }
    }
    reflink(r, e) {
        let a;
        if ((a = this.rules.inline.reflink.exec(r)) || (a = this.rules.inline.nolink.exec(r))) {
            let s = (a[2] || a[1]).replace(this.rules.other.multipleSpaceGlobal, " "), l = e[s.toLowerCase()];
            if (!l) {
                let u = a[0].charAt(0);
                return {
                    type: "text",
                    raw: u,
                    text: u
                };
            }
            return WPt(a, l, a[0], this.lexer, this.rules);
        }
    }
    emStrong(r, e, a = "") {
        let s = this.rules.inline.emStrongLDelim.exec(r);
        if (!(!s || s[3] && a.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[2]) || !a || this.rules.inline.punctuation.exec(a))) {
            let l = [
                ...s[0]
            ].length - 1, u, p, m = l, b = 0, g = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
            for(g.lastIndex = 0, e = e.slice(-1 * r.length + l); (s = g.exec(e)) != null;){
                if (u = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !u) continue;
                if (p = [
                    ...u
                ].length, s[3] || s[4]) {
                    m += p;
                    continue;
                } else if ((s[5] || s[6]) && l % 3 && !((l + p) % 3)) {
                    b += p;
                    continue;
                }
                if (m -= p, m > 0) continue;
                p = Math.min(p, p + m + b);
                let _ = [
                    ...s[0]
                ][0].length, v = r.slice(0, l + s.index + _ + p);
                if (Math.min(l, p) % 2) {
                    let C = v.slice(1, -1);
                    return {
                        type: "em",
                        raw: v,
                        text: C,
                        tokens: this.lexer.inlineTokens(C)
                    };
                }
                let x = v.slice(2, -2);
                return {
                    type: "strong",
                    raw: v,
                    text: x,
                    tokens: this.lexer.inlineTokens(x)
                };
            }
        }
    }
    codespan(r) {
        let e = this.rules.inline.code.exec(r);
        if (e) {
            let a = e[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(a), l = this.rules.other.startingSpaceChar.test(a) && this.rules.other.endingSpaceChar.test(a);
            return s && l && (a = a.substring(1, a.length - 1)), {
                type: "codespan",
                raw: e[0],
                text: a
            };
        }
    }
    br(r) {
        let e = this.rules.inline.br.exec(r);
        if (e) return {
            type: "br",
            raw: e[0]
        };
    }
    del(r) {
        let e = this.rules.inline.del.exec(r);
        if (e) return {
            type: "del",
            raw: e[0],
            text: e[2],
            tokens: this.lexer.inlineTokens(e[2])
        };
    }
    autolink(r) {
        let e = this.rules.inline.autolink.exec(r);
        if (e) {
            let a, s;
            return e[2] === "@" ? (a = e[1], s = "mailto:" + a) : (a = e[1], s = a), {
                type: "link",
                raw: e[0],
                text: a,
                href: s,
                tokens: [
                    {
                        type: "text",
                        raw: a,
                        text: a
                    }
                ]
            };
        }
    }
    url(r) {
        let e;
        if (e = this.rules.inline.url.exec(r)) {
            let a, s;
            if (e[2] === "@") a = e[0], s = "mailto:" + a;
            else {
                let l;
                do l = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
                while (l !== e[0])
                a = e[0], e[1] === "www." ? s = "http://" + e[0] : s = e[0];
            }
            return {
                type: "link",
                raw: e[0],
                text: a,
                href: s,
                tokens: [
                    {
                        type: "text",
                        raw: a,
                        text: a
                    }
                ]
            };
        }
    }
    inlineText(r) {
        let e = this.rules.inline.text.exec(r);
        if (e) {
            let a = this.lexer.state.inRawBlock;
            return {
                type: "text",
                raw: e[0],
                text: e[0],
                escaped: a
            };
        }
    }
}, i(ajt, "y"), ajt), ak = (Xfe = class {
    constructor(r){
        Ye(this, "tokens"), Ye(this, "options"), Ye(this, "state"), Ye(this, "inlineQueue"), Ye(this, "tokenizer"), this.tokens = [], this.tokens.links = Object.create(null), this.options = r || SP, this.options.tokenizer = this.options.tokenizer || new Kfe, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
            inLink: !1,
            inRawBlock: !1,
            top: !0
        };
        let e = {
            other: Vy,
            block: Vfe.normal,
            inline: PJ.normal
        };
        this.options.pedantic ? (e.block = Vfe.pedantic, e.inline = PJ.pedantic) : this.options.gfm && (e.block = Vfe.gfm, this.options.breaks ? e.inline = PJ.breaks : e.inline = PJ.gfm), this.tokenizer.rules = e;
    }
    static get rules() {
        return {
            block: Vfe,
            inline: PJ
        };
    }
    static lex(r, e) {
        return new Xfe(e).lex(r);
    }
    static lexInline(r, e) {
        return new Xfe(e).inlineTokens(r);
    }
    lex(r) {
        r = r.replace(Vy.carriageReturn, `
`), this.blockTokens(r, this.tokens);
        for(let e = 0; e < this.inlineQueue.length; e++){
            let a = this.inlineQueue[e];
            this.inlineTokens(a.src, a.tokens);
        }
        return this.inlineQueue = [], this.tokens;
    }
    blockTokens(r, e = [], a = !1) {
        for(this.options.pedantic && (r = r.replace(Vy.tabCharGlobal, "    ").replace(Vy.spaceLine, "")); r;){
            let s;
            if (this.options.extensions?.block?.some((u)=>(s = u.call({
                    lexer: this
                }, r, e)) ? (r = r.substring(s.raw.length), e.push(s), !0) : !1)) continue;
            if (s = this.tokenizer.space(r)) {
                r = r.substring(s.raw.length);
                let u = e.at(-1);
                s.raw.length === 1 && u !== void 0 ? u.raw += `
` : e.push(s);
                continue;
            }
            if (s = this.tokenizer.code(r)) {
                r = r.substring(s.raw.length);
                let u = e.at(-1);
                u?.type === "paragraph" || u?.type === "text" ? (u.raw += (u.raw.endsWith(`
`) ? "" : `
`) + s.raw, u.text += `
` + s.text, this.inlineQueue.at(-1).src = u.text) : e.push(s);
                continue;
            }
            if (s = this.tokenizer.fences(r)) {
                r = r.substring(s.raw.length), e.push(s);
                continue;
            }
            if (s = this.tokenizer.heading(r)) {
                r = r.substring(s.raw.length), e.push(s);
                continue;
            }
            if (s = this.tokenizer.hr(r)) {
                r = r.substring(s.raw.length), e.push(s);
                continue;
            }
            if (s = this.tokenizer.blockquote(r)) {
                r = r.substring(s.raw.length), e.push(s);
                continue;
            }
            if (s = this.tokenizer.list(r)) {
                r = r.substring(s.raw.length), e.push(s);
                continue;
            }
            if (s = this.tokenizer.html(r)) {
                r = r.substring(s.raw.length), e.push(s);
                continue;
            }
            if (s = this.tokenizer.def(r)) {
                r = r.substring(s.raw.length);
                let u = e.at(-1);
                u?.type === "paragraph" || u?.type === "text" ? (u.raw += (u.raw.endsWith(`
`) ? "" : `
`) + s.raw, u.text += `
` + s.raw, this.inlineQueue.at(-1).src = u.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = {
                    href: s.href,
                    title: s.title
                }, e.push(s));
                continue;
            }
            if (s = this.tokenizer.table(r)) {
                r = r.substring(s.raw.length), e.push(s);
                continue;
            }
            if (s = this.tokenizer.lheading(r)) {
                r = r.substring(s.raw.length), e.push(s);
                continue;
            }
            let l = r;
            if (this.options.extensions?.startBlock) {
                let u = 1 / 0, p = r.slice(1), m;
                this.options.extensions.startBlock.forEach((b)=>{
                    m = b.call({
                        lexer: this
                    }, p), typeof m == "number" && m >= 0 && (u = Math.min(u, m));
                }), u < 1 / 0 && u >= 0 && (l = r.substring(0, u + 1));
            }
            if (this.state.top && (s = this.tokenizer.paragraph(l))) {
                let u = e.at(-1);
                a && u?.type === "paragraph" ? (u.raw += (u.raw.endsWith(`
`) ? "" : `
`) + s.raw, u.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : e.push(s), a = l.length !== r.length, r = r.substring(s.raw.length);
                continue;
            }
            if (s = this.tokenizer.text(r)) {
                r = r.substring(s.raw.length);
                let u = e.at(-1);
                u?.type === "text" ? (u.raw += (u.raw.endsWith(`
`) ? "" : `
`) + s.raw, u.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : e.push(s);
                continue;
            }
            if (r) {
                let u = "Infinite loop on byte: " + r.charCodeAt(0);
                if (this.options.silent) {
                    console.error(u);
                    break;
                } else throw new Error(u);
            }
        }
        return this.state.top = !0, e;
    }
    inline(r, e = []) {
        return this.inlineQueue.push({
            src: r,
            tokens: e
        }), e;
    }
    inlineTokens(r, e = []) {
        let a = r, s = null;
        if (this.tokens.links) {
            let m = Object.keys(this.tokens.links);
            if (m.length > 0) for(; (s = this.tokenizer.rules.inline.reflinkSearch.exec(a)) != null;)m.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for(; (s = this.tokenizer.rules.inline.anyPunctuation.exec(a)) != null;)a = a.slice(0, s.index) + "++" + a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        let l;
        for(; (s = this.tokenizer.rules.inline.blockSkip.exec(a)) != null;)l = s[2] ? s[2].length : 0, a = a.slice(0, s.index + l) + "[" + "a".repeat(s[0].length - l - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        a = this.options.hooks?.emStrongMask?.call({
            lexer: this
        }, a) ?? a;
        let u = !1, p = "";
        for(; r;){
            u || (p = ""), u = !1;
            let m;
            if (this.options.extensions?.inline?.some((g)=>(m = g.call({
                    lexer: this
                }, r, e)) ? (r = r.substring(m.raw.length), e.push(m), !0) : !1)) continue;
            if (m = this.tokenizer.escape(r)) {
                r = r.substring(m.raw.length), e.push(m);
                continue;
            }
            if (m = this.tokenizer.tag(r)) {
                r = r.substring(m.raw.length), e.push(m);
                continue;
            }
            if (m = this.tokenizer.link(r)) {
                r = r.substring(m.raw.length), e.push(m);
                continue;
            }
            if (m = this.tokenizer.reflink(r, this.tokens.links)) {
                r = r.substring(m.raw.length);
                let g = e.at(-1);
                m.type === "text" && g?.type === "text" ? (g.raw += m.raw, g.text += m.text) : e.push(m);
                continue;
            }
            if (m = this.tokenizer.emStrong(r, a, p)) {
                r = r.substring(m.raw.length), e.push(m);
                continue;
            }
            if (m = this.tokenizer.codespan(r)) {
                r = r.substring(m.raw.length), e.push(m);
                continue;
            }
            if (m = this.tokenizer.br(r)) {
                r = r.substring(m.raw.length), e.push(m);
                continue;
            }
            if (m = this.tokenizer.del(r)) {
                r = r.substring(m.raw.length), e.push(m);
                continue;
            }
            if (m = this.tokenizer.autolink(r)) {
                r = r.substring(m.raw.length), e.push(m);
                continue;
            }
            if (!this.state.inLink && (m = this.tokenizer.url(r))) {
                r = r.substring(m.raw.length), e.push(m);
                continue;
            }
            let b = r;
            if (this.options.extensions?.startInline) {
                let g = 1 / 0, _ = r.slice(1), v;
                this.options.extensions.startInline.forEach((x)=>{
                    v = x.call({
                        lexer: this
                    }, _), typeof v == "number" && v >= 0 && (g = Math.min(g, v));
                }), g < 1 / 0 && g >= 0 && (b = r.substring(0, g + 1));
            }
            if (m = this.tokenizer.inlineText(b)) {
                r = r.substring(m.raw.length), m.raw.slice(-1) !== "_" && (p = m.raw.slice(-1)), u = !0;
                let g = e.at(-1);
                g?.type === "text" ? (g.raw += m.raw, g.text += m.text) : e.push(m);
                continue;
            }
            if (r) {
                let g = "Infinite loop on byte: " + r.charCodeAt(0);
                if (this.options.silent) {
                    console.error(g);
                    break;
                } else throw new Error(g);
            }
        }
        return e;
    }
}, i(Xfe, "u"), Xfe), Yfe = (ojt = class {
    constructor(r){
        Ye(this, "options"), Ye(this, "parser"), this.options = r || SP;
    }
    space(r) {
        return "";
    }
    code({ text: r, lang: e, escaped: a }) {
        let s = (e || "").match(Vy.notSpaceStart)?.[0], l = r.replace(Vy.endingNewline, "") + `
`;
        return s ? '<pre><code class="language-' + DS(s) + '">' + (a ? l : DS(l, !0)) + `</code></pre>
` : "<pre><code>" + (a ? l : DS(l, !0)) + `</code></pre>
`;
    }
    blockquote({ tokens: r }) {
        return `<blockquote>
${this.parser.parse(r)}</blockquote>
`;
    }
    html({ text: r }) {
        return r;
    }
    def(r) {
        return "";
    }
    heading({ tokens: r, depth: e }) {
        return `<h${e}>${this.parser.parseInline(r)}</h${e}>
`;
    }
    hr(r) {
        return `<hr>
`;
    }
    list(r) {
        let e = r.ordered, a = r.start, s = "";
        for(let p = 0; p < r.items.length; p++){
            let m = r.items[p];
            s += this.listitem(m);
        }
        let l = e ? "ol" : "ul", u = e && a !== 1 ? ' start="' + a + '"' : "";
        return "<" + l + u + `>
` + s + "</" + l + `>
`;
    }
    listitem(r) {
        return `<li>${this.parser.parse(r.tokens)}</li>
`;
    }
    checkbox({ checked: r }) {
        return "<input " + (r ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
    }
    paragraph({ tokens: r }) {
        return `<p>${this.parser.parseInline(r)}</p>
`;
    }
    table(r) {
        let e = "", a = "";
        for(let l = 0; l < r.header.length; l++)a += this.tablecell(r.header[l]);
        e += this.tablerow({
            text: a
        });
        let s = "";
        for(let l = 0; l < r.rows.length; l++){
            let u = r.rows[l];
            a = "";
            for(let p = 0; p < u.length; p++)a += this.tablecell(u[p]);
            s += this.tablerow({
                text: a
            });
        }
        return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + s + `</table>
`;
    }
    tablerow({ text: r }) {
        return `<tr>
${r}</tr>
`;
    }
    tablecell(r) {
        let e = this.parser.parseInline(r.tokens), a = r.header ? "th" : "td";
        return (r.align ? `<${a} align="${r.align}">` : `<${a}>`) + e + `</${a}>
`;
    }
    strong({ tokens: r }) {
        return `<strong>${this.parser.parseInline(r)}</strong>`;
    }
    em({ tokens: r }) {
        return `<em>${this.parser.parseInline(r)}</em>`;
    }
    codespan({ text: r }) {
        return `<code>${DS(r, !0)}</code>`;
    }
    br(r) {
        return "<br>";
    }
    del({ tokens: r }) {
        return `<del>${this.parser.parseInline(r)}</del>`;
    }
    link({ href: r, title: e, tokens: a }) {
        let s = this.parser.parseInline(a), l = UPt(r);
        if (l === null) return s;
        r = l;
        let u = '<a href="' + r + '"';
        return e && (u += ' title="' + DS(e) + '"'), u += ">" + s + "</a>", u;
    }
    image({ href: r, title: e, text: a, tokens: s }) {
        s && (a = this.parser.parseInline(s, this.parser.textRenderer));
        let l = UPt(r);
        if (l === null) return DS(a);
        r = l;
        let u = `<img src="${r}" alt="${a}"`;
        return e && (u += ` title="${DS(e)}"`), u += ">", u;
    }
    text(r) {
        return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : DS(r.text);
    }
}, i(ojt, "P"), ojt), LMe = (sjt = class {
    strong({ text: r }) {
        return r;
    }
    em({ text: r }) {
        return r;
    }
    codespan({ text: r }) {
        return r;
    }
    del({ text: r }) {
        return r;
    }
    html({ text: r }) {
        return r;
    }
    text({ text: r }) {
        return r;
    }
    link({ text: r }) {
        return "" + r;
    }
    image({ text: r }) {
        return "" + r;
    }
    br() {
        return "";
    }
    checkbox({ raw: r }) {
        return r;
    }
}, i(sjt, "$"), sjt), D4 = (Jfe = class {
    constructor(r){
        Ye(this, "options"), Ye(this, "renderer"), Ye(this, "textRenderer"), this.options = r || SP, this.options.renderer = this.options.renderer || new Yfe, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new LMe;
    }
    static parse(r, e) {
        return new Jfe(e).parse(r);
    }
    static parseInline(r, e) {
        return new Jfe(e).parseInline(r);
    }
    parse(r) {
        let e = "";
        for(let a = 0; a < r.length; a++){
            let s = r[a];
            if (this.options.extensions?.renderers?.[s.type]) {
                let u = s, p = this.options.extensions.renderers[u.type].call({
                    parser: this
                }, u);
                if (p !== !1 || ![
                    "space",
                    "hr",
                    "heading",
                    "code",
                    "table",
                    "blockquote",
                    "list",
                    "html",
                    "def",
                    "paragraph",
                    "text"
                ].includes(u.type)) {
                    e += p || "";
                    continue;
                }
            }
            let l = s;
            switch(l.type){
                case "space":
                    {
                        e += this.renderer.space(l);
                        break;
                    }
                case "hr":
                    {
                        e += this.renderer.hr(l);
                        break;
                    }
                case "heading":
                    {
                        e += this.renderer.heading(l);
                        break;
                    }
                case "code":
                    {
                        e += this.renderer.code(l);
                        break;
                    }
                case "table":
                    {
                        e += this.renderer.table(l);
                        break;
                    }
                case "blockquote":
                    {
                        e += this.renderer.blockquote(l);
                        break;
                    }
                case "list":
                    {
                        e += this.renderer.list(l);
                        break;
                    }
                case "checkbox":
                    {
                        e += this.renderer.checkbox(l);
                        break;
                    }
                case "html":
                    {
                        e += this.renderer.html(l);
                        break;
                    }
                case "def":
                    {
                        e += this.renderer.def(l);
                        break;
                    }
                case "paragraph":
                    {
                        e += this.renderer.paragraph(l);
                        break;
                    }
                case "text":
                    {
                        e += this.renderer.text(l);
                        break;
                    }
                default:
                    {
                        let u = 'Token with "' + l.type + '" type was not found.';
                        if (this.options.silent) return console.error(u), "";
                        throw new Error(u);
                    }
            }
        }
        return e;
    }
    parseInline(r, e = this.renderer) {
        let a = "";
        for(let s = 0; s < r.length; s++){
            let l = r[s];
            if (this.options.extensions?.renderers?.[l.type]) {
                let p = this.options.extensions.renderers[l.type].call({
                    parser: this
                }, l);
                if (p !== !1 || ![
                    "escape",
                    "html",
                    "link",
                    "image",
                    "strong",
                    "em",
                    "codespan",
                    "br",
                    "del",
                    "text"
                ].includes(l.type)) {
                    a += p || "";
                    continue;
                }
            }
            let u = l;
            switch(u.type){
                case "escape":
                    {
                        a += e.text(u);
                        break;
                    }
                case "html":
                    {
                        a += e.html(u);
                        break;
                    }
                case "link":
                    {
                        a += e.link(u);
                        break;
                    }
                case "image":
                    {
                        a += e.image(u);
                        break;
                    }
                case "checkbox":
                    {
                        a += e.checkbox(u);
                        break;
                    }
                case "strong":
                    {
                        a += e.strong(u);
                        break;
                    }
                case "em":
                    {
                        a += e.em(u);
                        break;
                    }
                case "codespan":
                    {
                        a += e.codespan(u);
                        break;
                    }
                case "br":
                    {
                        a += e.br(u);
                        break;
                    }
                case "del":
                    {
                        a += e.del(u);
                        break;
                    }
                case "text":
                    {
                        a += e.text(u);
                        break;
                    }
                default:
                    {
                        let p = 'Token with "' + u.type + '" type was not found.';
                        if (this.options.silent) return console.error(p), "";
                        throw new Error(p);
                    }
            }
        }
        return a;
    }
}, i(Jfe, "u"), Jfe), jJ = (Qfe = class {
    constructor(r){
        Ye(this, "options"), Ye(this, "block"), this.options = r || SP;
    }
    preprocess(r) {
        return r;
    }
    postprocess(r) {
        return r;
    }
    processAllTokens(r) {
        return r;
    }
    emStrongMask(r) {
        return r;
    }
    provideLexer() {
        return this.block ? ak.lex : ak.lexInline;
    }
    provideParser() {
        return this.block ? D4.parse : D4.parseInline;
    }
}, i(Qfe, "S"), Ye(Qfe, "passThroughHooks", new Set([
    "preprocess",
    "postprocess",
    "processAllTokens",
    "emStrongMask"
])), Ye(Qfe, "passThroughHooksRespectAsync", new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
])), Qfe), zgr = (cjt = class {
    constructor(...r){
        Ye(this, "defaults", AMe()), Ye(this, "options", this.setOptions), Ye(this, "parse", this.parseMarkdown(!0)), Ye(this, "parseInline", this.parseMarkdown(!1)), Ye(this, "Parser", D4), Ye(this, "Renderer", Yfe), Ye(this, "TextRenderer", LMe), Ye(this, "Lexer", ak), Ye(this, "Tokenizer", Kfe), Ye(this, "Hooks", jJ), this.use(...r);
    }
    walkTokens(r, e) {
        let a = [];
        for (let s of r)switch(a = a.concat(e.call(this, s)), s.type){
            case "table":
                {
                    let l = s;
                    for (let u of l.header)a = a.concat(this.walkTokens(u.tokens, e));
                    for (let u of l.rows)for (let p of u)a = a.concat(this.walkTokens(p.tokens, e));
                    break;
                }
            case "list":
                {
                    let l = s;
                    a = a.concat(this.walkTokens(l.items, e));
                    break;
                }
            default:
                {
                    let l = s;
                    this.defaults.extensions?.childTokens?.[l.type] ? this.defaults.extensions.childTokens[l.type].forEach((u)=>{
                        let p = l[u].flat(1 / 0);
                        a = a.concat(this.walkTokens(p, e));
                    }) : l.tokens && (a = a.concat(this.walkTokens(l.tokens, e)));
                }
        }
        return a;
    }
    use(...r) {
        let e = this.defaults.extensions || {
            renderers: {},
            childTokens: {}
        };
        return r.forEach((a)=>{
            let s = {
                ...a
            };
            if (s.async = this.defaults.async || s.async || !1, a.extensions && (a.extensions.forEach((l)=>{
                if (!l.name) throw new Error("extension name required");
                if ("renderer" in l) {
                    let u = e.renderers[l.name];
                    u ? e.renderers[l.name] = function(...p) {
                        let m = l.renderer.apply(this, p);
                        return m === !1 && (m = u.apply(this, p)), m;
                    } : e.renderers[l.name] = l.renderer;
                }
                if ("tokenizer" in l) {
                    if (!l.level || l.level !== "block" && l.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                    let u = e[l.level];
                    u ? u.unshift(l.tokenizer) : e[l.level] = [
                        l.tokenizer
                    ], l.start && (l.level === "block" ? e.startBlock ? e.startBlock.push(l.start) : e.startBlock = [
                        l.start
                    ] : l.level === "inline" && (e.startInline ? e.startInline.push(l.start) : e.startInline = [
                        l.start
                    ]));
                }
                "childTokens" in l && l.childTokens && (e.childTokens[l.name] = l.childTokens);
            }), s.extensions = e), a.renderer) {
                let l = this.defaults.renderer || new Yfe(this.defaults);
                for(let u in a.renderer){
                    if (!(u in l)) throw new Error(`renderer '${u}' does not exist`);
                    if ([
                        "options",
                        "parser"
                    ].includes(u)) continue;
                    let p = u, m = a.renderer[p], b = l[p];
                    l[p] = (...g)=>{
                        let _ = m.apply(l, g);
                        return _ === !1 && (_ = b.apply(l, g)), _ || "";
                    };
                }
                s.renderer = l;
            }
            if (a.tokenizer) {
                let l = this.defaults.tokenizer || new Kfe(this.defaults);
                for(let u in a.tokenizer){
                    if (!(u in l)) throw new Error(`tokenizer '${u}' does not exist`);
                    if ([
                        "options",
                        "rules",
                        "lexer"
                    ].includes(u)) continue;
                    let p = u, m = a.tokenizer[p], b = l[p];
                    l[p] = (...g)=>{
                        let _ = m.apply(l, g);
                        return _ === !1 && (_ = b.apply(l, g)), _;
                    };
                }
                s.tokenizer = l;
            }
            if (a.hooks) {
                let l = this.defaults.hooks || new jJ;
                for(let u in a.hooks){
                    if (!(u in l)) throw new Error(`hook '${u}' does not exist`);
                    if ([
                        "options",
                        "block"
                    ].includes(u)) continue;
                    let p = u, m = a.hooks[p], b = l[p];
                    jJ.passThroughHooks.has(u) ? l[p] = (g)=>{
                        if (this.defaults.async && jJ.passThroughHooksRespectAsync.has(u)) return (async ()=>{
                            let v = await m.call(l, g);
                            return b.call(l, v);
                        })();
                        let _ = m.call(l, g);
                        return b.call(l, _);
                    } : l[p] = (...g)=>{
                        if (this.defaults.async) return (async ()=>{
                            let v = await m.apply(l, g);
                            return v === !1 && (v = await b.apply(l, g)), v;
                        })();
                        let _ = m.apply(l, g);
                        return _ === !1 && (_ = b.apply(l, g)), _;
                    };
                }
                s.hooks = l;
            }
            if (a.walkTokens) {
                let l = this.defaults.walkTokens, u = a.walkTokens;
                s.walkTokens = function(p) {
                    let m = [];
                    return m.push(u.call(this, p)), l && (m = m.concat(l.call(this, p))), m;
                };
            }
            this.defaults = {
                ...this.defaults,
                ...s
            };
        }), this;
    }
    setOptions(r) {
        return this.defaults = {
            ...this.defaults,
            ...r
        }, this;
    }
    lexer(r, e) {
        return ak.lex(r, e ?? this.defaults);
    }
    parser(r, e) {
        return D4.parse(r, e ?? this.defaults);
    }
    parseMarkdown(r) {
        return (e, a)=>{
            let s = {
                ...a
            }, l = {
                ...this.defaults,
                ...s
            }, u = this.onError(!!l.silent, !!l.async);
            if (this.defaults.async === !0 && s.async === !1) return u(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
            if (typeof e > "u" || e === null) return u(new Error("marked(): input parameter is undefined or null"));
            if (typeof e != "string") return u(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
            if (l.hooks && (l.hooks.options = l, l.hooks.block = r), l.async) return (async ()=>{
                let p = l.hooks ? await l.hooks.preprocess(e) : e, m = await (l.hooks ? await l.hooks.provideLexer() : r ? ak.lex : ak.lexInline)(p, l), b = l.hooks ? await l.hooks.processAllTokens(m) : m;
                l.walkTokens && await Promise.all(this.walkTokens(b, l.walkTokens));
                let g = await (l.hooks ? await l.hooks.provideParser() : r ? D4.parse : D4.parseInline)(b, l);
                return l.hooks ? await l.hooks.postprocess(g) : g;
            })().catch(u);
            try {
                l.hooks && (e = l.hooks.preprocess(e));
                let p = (l.hooks ? l.hooks.provideLexer() : r ? ak.lex : ak.lexInline)(e, l);
                l.hooks && (p = l.hooks.processAllTokens(p)), l.walkTokens && this.walkTokens(p, l.walkTokens);
                let m = (l.hooks ? l.hooks.provideParser() : r ? D4.parse : D4.parseInline)(p, l);
                return l.hooks && (m = l.hooks.postprocess(m)), m;
            } catch (p) {
                return u(p);
            }
        };
    }
    onError(r, e) {
        return (a)=>{
            if (a.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
                let s = "<p>An error occurred:</p><pre>" + DS(a.message + "", !0) + "</pre>";
                return e ? Promise.resolve(s) : s;
            }
            if (e) return Promise.reject(a);
            throw a;
        };
    }
}, i(cjt, "B"), cjt), EP = new zgr, i(Wd, "d"), Wd.options = Wd.setOptions = function(r) {
    return EP.setOptions(r), Wd.defaults = EP.defaults, qPt(Wd.defaults), Wd;
}, Wd.getDefaults = AMe, Wd.defaults = SP, Wd.use = function(...r) {
    return EP.use(...r), Wd.defaults = EP.defaults, qPt(Wd.defaults), Wd;
}, Wd.walkTokens = function(r, e) {
    return EP.walkTokens(r, e);
}, Wd.parseInline = EP.parseInline, Wd.Parser = D4, Wd.parser = D4.parse, Wd.Renderer = Yfe, Wd.TextRenderer = LMe, Wd.Lexer = ak, Wd.lexer = ak.lex, Wd.Tokenizer = Kfe, Wd.Hooks = jJ, Wd.parse = Wd, I4i = Wd.options, N4i = Wd.setOptions, M4i = Wd.use, R4i = Wd.walkTokens, P4i = Wd.parseInline, j4i = D4.parse, L4i = ak.lex;

}
