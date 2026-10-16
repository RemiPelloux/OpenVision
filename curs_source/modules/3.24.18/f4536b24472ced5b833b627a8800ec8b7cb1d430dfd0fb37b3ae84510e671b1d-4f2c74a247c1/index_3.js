import { a } from "./business-error.js";
import { Bw, Dw, Lw, h6 } from "./index_2.js";
function Td(e) {
    return e.type === 0;
}
function Hw(e) {
    return e.type === 1;
}
function Cd(e) {
    return e.type === 2;
}
function Id(e) {
    return e.type === 3;
}
function Ad(e) {
    return e.type === 4;
}
function Rd(e) {
    return e.type === 5;
}
function Nd(e) {
    return e.type === 6;
}
function Gw(e) {
    return e.type === 7;
}
function Pd(e) {
    return e.type === 8;
}
function _d(e) {
    return !!(e && typeof e == "object" && e.type === 0);
}
function pc(e) {
    return !!(e && typeof e == "object" && e.type === 1);
}
function $w(e, t) {
    let r = "";
    for(let n = 0; n < e.length; n++){
        const o = e.charAt(n);
        if (o === "j") {
            let i = 0;
            for(; n + 1 < e.length && e.charAt(n + 1) === o;)i++, n++;
            let s = 1 + (i & 1), c = i < 2 ? 1 : 3 + (i >> 1), l = "a", m = Kw(t);
            for((m == "H" || m == "k") && (c = 0); c-- > 0;)r += l;
            for(; s-- > 0;)r = m + r;
        } else o === "J" ? r += "H" : r += o;
    }
    return r;
}
function Kw(e) {
    let t = e.hourCycle;
    if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch(t){
        case "h24":
            return "k";
        case "h23":
            return "H";
        case "h12":
            return "h";
        case "h11":
            return "K";
        default:
            throw new Error("Invalid hourCycle");
    }
    const r = e.language;
    let n;
    return r !== "root" && (n = e.maximize().region), (ui[n || ""] || ui[r || ""] || ui[`${r}-001`] || ui["001"])[0];
}
function $e(e, t) {
    return {
        start: e,
        end: t
    };
}
function Ww(e, t) {
    return Dd.lastIndex = t, Dd.exec(e)[1] ?? "";
}
function Yw(e) {
    if (e.length === 0) return null;
    let t = 1, r = 1;
    for(let n = 0; n < e.length;){
        const o = e.charCodeAt(n);
        switch(o){
            case 35:
            case 39:
            case 60:
            case 123:
            case 125:
                return null;
        }
        if (o === 10) t++, r = 1, n++;
        else if (r++, o >= 55296 && o <= 56319 && n + 1 < e.length) {
            const i = e.charCodeAt(n + 1);
            n += i >= 56320 && i <= 57343 ? 2 : 1;
        } else n++;
    }
    return {
        offset: e.length,
        line: t,
        column: r
    };
}
function fc(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Xw(e) {
    return fc(e) || e === 47;
}
function Zw(e) {
    return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function qw(e) {
    return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function hc(e) {
    e.forEach((t)=>{
        if (delete t.location, Rd(t) || Nd(t)) for(const r in t.options)delete t.options[r].location, hc(t.options[r].value);
        else Cd(t) && _d(t.style) || (Id(t) || Ad(t)) && pc(t.style) ? delete t.style.location : Pd(t) && hc(t.children);
    });
}
function Qw(e, t = {}) {
    t = {
        shouldParseSkeletons: !0,
        requiresOtherClause: !0,
        ...t
    };
    const r = new s1(e, t).parse();
    if (r.err) {
        const n = SyntaxError(Jw[r.err.kind]);
        throw n.location = r.err.location, n.originalMessage = r.err.message, n;
    }
    return t?.captureLocation || hc(r.val), r.val;
}
var Jw, Md, ui, e1, t1, r1, n1, o1, Od, a1, i1, Dd, s1;
export { $e, $w, Ad, Cd, Dd, Gw, Hw, Id, Jw, Kw, Md, Nd, Od, Pd, Qw, Rd, Td, Ww, Xw, Yw, Zw, _d, a1, e1, fc, hc, i1, n1, o1, pc, qw, r1, s1, t1, ui };
var __wakaru_x6_initialized = false;
export function x6() {
if (__wakaru_x6_initialized) return;
__wakaru_x6_initialized = true;
h6(), Jw = (function(e) {
    return e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", e;
})({}), a(Td, "isLiteralElement"), a(Hw, "isArgumentElement"), a(Cd, "isNumberElement"), a(Id, "isDateElement"), a(Ad, "isTimeElement"), a(Rd, "isSelectElement"), a(Nd, "isPluralElement"), a(Gw, "isPoundElement"), a(Pd, "isTagElement"), a(_d, "isNumberSkeleton"), a(pc, "isDateTimeSkeleton"), Md = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, ui = {
    "001": [
        "H",
        "h"
    ],
    419: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    AC: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    AD: [
        "H",
        "hB"
    ],
    AE: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    AF: [
        "H",
        "hb",
        "hB",
        "h"
    ],
    AG: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    AI: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    AL: [
        "h",
        "H",
        "hB"
    ],
    AM: [
        "H",
        "hB"
    ],
    AO: [
        "H",
        "hB"
    ],
    AR: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    AS: [
        "h",
        "H"
    ],
    AT: [
        "H",
        "hB"
    ],
    AU: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    AW: [
        "H",
        "hB"
    ],
    AX: [
        "H"
    ],
    AZ: [
        "H",
        "hB",
        "h"
    ],
    BA: [
        "H",
        "hB",
        "h"
    ],
    BB: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    BD: [
        "h",
        "hB",
        "H"
    ],
    BE: [
        "H",
        "hB"
    ],
    BF: [
        "H",
        "hB"
    ],
    BG: [
        "H",
        "hB",
        "h"
    ],
    BH: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    BI: [
        "H",
        "h"
    ],
    BJ: [
        "H",
        "hB"
    ],
    BL: [
        "H",
        "hB"
    ],
    BM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    BN: [
        "hb",
        "hB",
        "h",
        "H"
    ],
    BO: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    BQ: [
        "H"
    ],
    BR: [
        "H",
        "hB"
    ],
    BS: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    BT: [
        "h",
        "H"
    ],
    BW: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    BY: [
        "H",
        "h"
    ],
    BZ: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    CA: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    CC: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    CD: [
        "hB",
        "H"
    ],
    CF: [
        "H",
        "h",
        "hB"
    ],
    CG: [
        "H",
        "hB"
    ],
    CH: [
        "H",
        "hB",
        "h"
    ],
    CI: [
        "H",
        "hB"
    ],
    CK: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    CL: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    CM: [
        "H",
        "h",
        "hB"
    ],
    CN: [
        "H",
        "hB",
        "hb",
        "h"
    ],
    CO: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    CP: [
        "H"
    ],
    CR: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    CU: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    CV: [
        "H",
        "hB"
    ],
    CW: [
        "H",
        "hB"
    ],
    CX: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    CY: [
        "h",
        "H",
        "hb",
        "hB"
    ],
    CZ: [
        "H"
    ],
    DE: [
        "H",
        "hB"
    ],
    DG: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    DJ: [
        "h",
        "H"
    ],
    DK: [
        "H"
    ],
    DM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    DO: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    DZ: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    EA: [
        "H",
        "h",
        "hB",
        "hb"
    ],
    EC: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    EE: [
        "H",
        "hB"
    ],
    EG: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    EH: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    ER: [
        "h",
        "H"
    ],
    ES: [
        "H",
        "hB",
        "h",
        "hb"
    ],
    ET: [
        "hB",
        "hb",
        "h",
        "H"
    ],
    FI: [
        "H"
    ],
    FJ: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    FK: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    FM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    FO: [
        "H",
        "h"
    ],
    FR: [
        "H",
        "hB"
    ],
    GA: [
        "H",
        "hB"
    ],
    GB: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    GD: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    GE: [
        "H",
        "hB",
        "h"
    ],
    GF: [
        "H",
        "hB"
    ],
    GG: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    GH: [
        "h",
        "H"
    ],
    GI: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    GL: [
        "H",
        "h"
    ],
    GM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    GN: [
        "H",
        "hB"
    ],
    GP: [
        "H",
        "hB"
    ],
    GQ: [
        "H",
        "hB",
        "h",
        "hb"
    ],
    GR: [
        "h",
        "H",
        "hb",
        "hB"
    ],
    GS: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    GT: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    GU: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    GW: [
        "H",
        "hB"
    ],
    GY: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    HK: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    HN: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    HR: [
        "H",
        "hB"
    ],
    HU: [
        "H",
        "h"
    ],
    IC: [
        "H",
        "h",
        "hB",
        "hb"
    ],
    ID: [
        "H"
    ],
    IE: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    IL: [
        "H",
        "hB"
    ],
    IM: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    IN: [
        "h",
        "H"
    ],
    IO: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    IQ: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    IR: [
        "hB",
        "H"
    ],
    IS: [
        "H"
    ],
    IT: [
        "H",
        "hB"
    ],
    JE: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    JM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    JO: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    JP: [
        "H",
        "K",
        "h"
    ],
    KE: [
        "hB",
        "hb",
        "H",
        "h"
    ],
    KG: [
        "H",
        "h",
        "hB",
        "hb"
    ],
    KH: [
        "hB",
        "h",
        "H",
        "hb"
    ],
    KI: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    KM: [
        "H",
        "h",
        "hB",
        "hb"
    ],
    KN: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    KP: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    KR: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    KW: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    KY: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    KZ: [
        "H",
        "hB"
    ],
    LA: [
        "H",
        "hb",
        "hB",
        "h"
    ],
    LB: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    LC: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    LI: [
        "H",
        "hB",
        "h"
    ],
    LK: [
        "H",
        "h",
        "hB",
        "hb"
    ],
    LR: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    LS: [
        "h",
        "H"
    ],
    LT: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    LU: [
        "H",
        "h",
        "hB"
    ],
    LV: [
        "H",
        "hB",
        "hb",
        "h"
    ],
    LY: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    MA: [
        "H",
        "h",
        "hB",
        "hb"
    ],
    MC: [
        "H",
        "hB"
    ],
    MD: [
        "H",
        "hB"
    ],
    ME: [
        "H",
        "hB",
        "h"
    ],
    MF: [
        "H",
        "hB"
    ],
    MG: [
        "H",
        "h"
    ],
    MH: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    MK: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    ML: [
        "H"
    ],
    MM: [
        "hB",
        "hb",
        "H",
        "h"
    ],
    MN: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    MO: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    MP: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    MQ: [
        "H",
        "hB"
    ],
    MR: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    MS: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    MT: [
        "H",
        "h"
    ],
    MU: [
        "H",
        "h"
    ],
    MV: [
        "H",
        "h"
    ],
    MW: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    MX: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    MY: [
        "hb",
        "hB",
        "h",
        "H"
    ],
    MZ: [
        "H",
        "hB"
    ],
    NA: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    NC: [
        "H",
        "hB"
    ],
    NE: [
        "H"
    ],
    NF: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    NG: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    NI: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    NL: [
        "H",
        "hB"
    ],
    NO: [
        "H",
        "h"
    ],
    NP: [
        "H",
        "h",
        "hB"
    ],
    NR: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    NU: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    NZ: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    OM: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    PA: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    PE: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    PF: [
        "H",
        "h",
        "hB"
    ],
    PG: [
        "h",
        "H"
    ],
    PH: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    PK: [
        "h",
        "hB",
        "H"
    ],
    PL: [
        "H",
        "h"
    ],
    PM: [
        "H",
        "hB"
    ],
    PN: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    PR: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    PS: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    PT: [
        "H",
        "hB"
    ],
    PW: [
        "h",
        "H"
    ],
    PY: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    QA: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    RE: [
        "H",
        "hB"
    ],
    RO: [
        "H",
        "hB"
    ],
    RS: [
        "H",
        "hB",
        "h"
    ],
    RU: [
        "H"
    ],
    RW: [
        "H",
        "h"
    ],
    SA: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    SB: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    SC: [
        "H",
        "h",
        "hB"
    ],
    SD: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    SE: [
        "H"
    ],
    SG: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    SH: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    SI: [
        "H",
        "hB"
    ],
    SJ: [
        "H"
    ],
    SK: [
        "H"
    ],
    SL: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    SM: [
        "H",
        "h",
        "hB"
    ],
    SN: [
        "H",
        "h",
        "hB"
    ],
    SO: [
        "h",
        "H"
    ],
    SR: [
        "H",
        "hB"
    ],
    SS: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    ST: [
        "H",
        "hB"
    ],
    SV: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    SX: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    SY: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    SZ: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    TA: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    TC: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    TD: [
        "h",
        "H",
        "hB"
    ],
    TF: [
        "H",
        "h",
        "hB"
    ],
    TG: [
        "H",
        "hB"
    ],
    TH: [
        "H",
        "h"
    ],
    TJ: [
        "H",
        "h"
    ],
    TL: [
        "H",
        "hB",
        "hb",
        "h"
    ],
    TM: [
        "H",
        "h"
    ],
    TN: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    TO: [
        "h",
        "H"
    ],
    TR: [
        "H",
        "hB"
    ],
    TT: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    TW: [
        "hB",
        "hb",
        "h",
        "H"
    ],
    TZ: [
        "hB",
        "hb",
        "H",
        "h"
    ],
    UA: [
        "H",
        "hB",
        "h"
    ],
    UG: [
        "hB",
        "hb",
        "H",
        "h"
    ],
    UM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    US: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    UY: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    UZ: [
        "H",
        "hB",
        "h"
    ],
    VA: [
        "H",
        "h",
        "hB"
    ],
    VC: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    VE: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    VG: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    VI: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    VN: [
        "H",
        "h"
    ],
    VU: [
        "h",
        "H"
    ],
    WF: [
        "H",
        "hB"
    ],
    WS: [
        "h",
        "H"
    ],
    XK: [
        "H",
        "hB",
        "h"
    ],
    YE: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    YT: [
        "H",
        "hB"
    ],
    ZA: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    ZM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    ZW: [
        "H",
        "h"
    ],
    "af-ZA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "ar-001": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ca-ES": [
        "H",
        "h",
        "hB"
    ],
    "en-001": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-HK": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-IL": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "en-MY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "es-BR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-ES": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-GQ": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "fr-CA": [
        "H",
        "h",
        "hB"
    ],
    "gl-ES": [
        "H",
        "h",
        "hB"
    ],
    "gu-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "hi-IN": [
        "hB",
        "h",
        "H"
    ],
    "it-CH": [
        "H",
        "h",
        "hB"
    ],
    "it-IT": [
        "H",
        "h",
        "hB"
    ],
    "kn-IN": [
        "hB",
        "h",
        "H"
    ],
    "ku-SY": [
        "H",
        "hB"
    ],
    "ml-IN": [
        "hB",
        "h",
        "H"
    ],
    "mr-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "pa-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "ta-IN": [
        "hB",
        "h",
        "hb",
        "H"
    ],
    "te-IN": [
        "hB",
        "h",
        "H"
    ],
    "zu-ZA": [
        "H",
        "hB",
        "hb",
        "h"
    ]
}, a($w, "getBestPattern"), a(Kw, "getDefaultHourSymbolFromLocale"), e1 = new RegExp(`^${Md.source}*`), t1 = new RegExp(`${Md.source}*$`), a($e, "createLocation"), r1 = !!Object.fromEntries, n1 = !!String.prototype.trimStart, o1 = !!String.prototype.trimEnd, Od = r1 ? Object.fromEntries : a(function(t) {
    const r = {};
    for (const [n, o] of t)r[n] = o;
    return r;
}, "fromEntries"), a1 = a(n1 ? function(t) {
    return t.trimStart();
} : function(t) {
    return t.replace(e1, "");
}, "trimStart"), i1 = a(o1 ? function(t) {
    return t.trimEnd();
} : function(t) {
    return t.replace(t1, "");
}, "trimEnd"), Dd = new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu"), a(Ww, "matchIdentifierAtIndex"), a(Yw, "plainTopLevelEndPosition"), s1 = class {
    static{
        a(this, "Parser");
    }
    constructor(e, t = {}){
        this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
        }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
    }
    parse() {
        if (this.offset() !== 0) throw Error("parser can only be used once");
        if (this.message.length > 0) {
            const e = this.message.charCodeAt(0);
            if (e !== 35 && e !== 39 && e !== 60 && e !== 123 && e !== 125) {
                const t = Yw(this.message);
                if (t) {
                    const r = this.clonePosition();
                    return this.position = t, {
                        val: [
                            {
                                type: 0,
                                value: this.message,
                                location: $e(r, this.clonePosition())
                            }
                        ],
                        err: null
                    };
                }
            }
        }
        return this.parseMessage(0, "", !1);
    }
    parseMessage(e, t, r) {
        let n = [];
        for(; !this.isEOF();){
            const o = this.char();
            if (o === 123) {
                const i = this.parseArgument(e, r);
                if (i.err) return i;
                n.push(i.val);
            } else {
                if (o === 125 && e > 0) break;
                if (o === 35 && (t === "plural" || t === "selectordinal")) {
                    const i = this.clonePosition();
                    this.bump(), n.push({
                        type: 7,
                        location: $e(i, this.clonePosition())
                    });
                } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
                    if (r) break;
                    return this.error(26, $e(this.clonePosition(), this.clonePosition()));
                } else if (o === 60 && !this.ignoreTag && fc(this.peek() || 0)) {
                    const i = this.parseTag(e, t);
                    if (i.err) return i;
                    n.push(i.val);
                } else {
                    const i = this.parseLiteral(e, t);
                    if (i.err) return i;
                    n.push(i.val);
                }
            }
        }
        return {
            val: n,
            err: null
        };
    }
    parseTag(e, t) {
        const r = this.clonePosition();
        this.bump();
        const n = this.parseTagName();
        if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
                type: 0,
                value: `<${n}/>`,
                location: $e(r, this.clonePosition())
            },
            err: null
        };
        if (this.bumpIf(">")) {
            const o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            const i = o.val, s = this.clonePosition();
            if (this.bumpIf("</")) {
                if (this.isEOF() || !fc(this.char())) return this.error(23, $e(s, this.clonePosition()));
                const c = this.clonePosition();
                return n !== this.parseTagName() ? this.error(26, $e(c, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                    val: {
                        type: 8,
                        value: n,
                        children: i,
                        location: $e(r, this.clonePosition())
                    },
                    err: null
                } : this.error(23, $e(s, this.clonePosition())));
            } else return this.error(27, $e(r, this.clonePosition()));
        } else return this.error(23, $e(r, this.clonePosition()));
    }
    parseTagName() {
        const e = this.offset();
        for(this.bump(); !this.isEOF() && Zw(this.char());)this.bump();
        return this.message.slice(e, this.offset());
    }
    parseLiteral(e, t) {
        const r = this.clonePosition();
        let n = "";
        for(;;){
            const i = this.tryParseQuote(t);
            if (i) {
                n += i;
                continue;
            }
            const s = this.tryParseUnquoted(e, t);
            if (s) {
                n += s;
                continue;
            }
            const c = this.tryParseLeftAngleBracket();
            if (c) {
                n += c;
                continue;
            }
            break;
        }
        const o = $e(r, this.clonePosition());
        return {
            val: {
                type: 0,
                value: n,
                location: o
            },
            err: null
        };
    }
    tryParseLeftAngleBracket() {
        return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Xw(this.peek() || 0)) ? (this.bump(), "<") : null;
    }
    tryParseQuote(e) {
        if (this.isEOF() || this.char() !== 39) return null;
        switch(this.peek()){
            case 39:
                return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35:
                if (e === "plural" || e === "selectordinal") break;
                return null;
            default:
                return null;
        }
        this.bump();
        const t = [
            this.char()
        ];
        for(this.bump(); !this.isEOF();){
            const r = this.char();
            if (r === 39) if (this.peek() === 39) t.push(39), this.bump();
            else {
                this.bump();
                break;
            }
            else t.push(r);
            this.bump();
        }
        return String.fromCodePoint(...t);
    }
    tryParseUnquoted(e, t) {
        if (this.isEOF()) return null;
        const r = this.char();
        return r === 60 || r === 123 || r === 35 && (t === "plural" || t === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), String.fromCodePoint(r));
    }
    parseArgument(e, t) {
        const r = this.clonePosition();
        if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(1, $e(r, this.clonePosition()));
        if (this.char() === 125) return this.bump(), this.error(2, $e(r, this.clonePosition()));
        let n = this.parseIdentifierIfPossible().value;
        if (!n) return this.error(3, $e(r, this.clonePosition()));
        if (this.bumpSpace(), this.isEOF()) return this.error(1, $e(r, this.clonePosition()));
        switch(this.char()){
            case 125:
                return this.bump(), {
                    val: {
                        type: 1,
                        value: n,
                        location: $e(r, this.clonePosition())
                    },
                    err: null
                };
            case 44:
                return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(1, $e(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
                return this.error(3, $e(r, this.clonePosition()));
        }
    }
    parseIdentifierIfPossible() {
        const e = this.clonePosition(), t = this.offset(), r = Ww(this.message, t), n = t + r.length;
        return this.bumpTo(n), {
            value: r,
            location: $e(e, this.clonePosition())
        };
    }
    parseArgumentOptions(e, t, r, n) {
        let o = this.clonePosition(), i = this.parseIdentifierIfPossible().value, s = this.clonePosition();
        switch(i){
            case "":
                return this.error(4, $e(o, s));
            case "number":
            case "date":
            case "time":
                {
                    this.bumpSpace();
                    let c = null;
                    if (this.bumpIf(",")) {
                        this.bumpSpace();
                        const u = this.clonePosition(), d = this.parseSimpleArgStyleIfPossible();
                        if (d.err) return d;
                        const p = i1(d.val);
                        if (p.length === 0) return this.error(6, $e(this.clonePosition(), this.clonePosition()));
                        c = {
                            style: p,
                            styleLocation: $e(u, this.clonePosition())
                        };
                    }
                    const l = this.tryParseArgumentClose(n);
                    if (l.err) return l;
                    const m = $e(n, this.clonePosition());
                    if (c && c.style.startsWith("::")) {
                        let u = a1(c.style.slice(2));
                        if (i === "number") {
                            const d = this.parseNumberSkeletonFromString(u, c.styleLocation);
                            return d.err ? d : {
                                val: {
                                    type: 2,
                                    value: r,
                                    location: m,
                                    style: d.val
                                },
                                err: null
                            };
                        } else {
                            if (u.length === 0) return this.error(10, m);
                            let d = u;
                            this.locale && (d = $w(u, this.locale));
                            const p = {
                                type: 1,
                                pattern: d,
                                location: c.styleLocation,
                                parsedOptions: this.shouldParseSkeletons ? Dw(d) : {}
                            };
                            return {
                                val: {
                                    type: i === "date" ? 3 : 4,
                                    value: r,
                                    location: m,
                                    style: p
                                },
                                err: null
                            };
                        }
                    }
                    return {
                        val: {
                            type: i === "number" ? 2 : i === "date" ? 3 : 4,
                            value: r,
                            location: m,
                            style: c?.style ?? null
                        },
                        err: null
                    };
                }
            case "plural":
            case "selectordinal":
            case "select":
                {
                    const c = this.clonePosition();
                    if (this.bumpSpace(), !this.bumpIf(",")) return this.error(12, $e(c, {
                        ...c
                    }));
                    this.bumpSpace();
                    let l = this.parseIdentifierIfPossible(), m = 0;
                    if (i !== "select" && l.value === "offset") {
                        if (!this.bumpIf(":")) return this.error(13, $e(this.clonePosition(), this.clonePosition()));
                        this.bumpSpace();
                        const h = this.tryParseDecimalInteger(13, 14);
                        if (h.err) return h;
                        this.bumpSpace(), l = this.parseIdentifierIfPossible(), m = h.val;
                    }
                    const u = this.tryParsePluralOrSelectOptions(e, i, t, l);
                    if (u.err) return u;
                    const d = this.tryParseArgumentClose(n);
                    if (d.err) return d;
                    const p = $e(n, this.clonePosition());
                    return i === "select" ? {
                        val: {
                            type: 5,
                            value: r,
                            options: Od(u.val),
                            location: p
                        },
                        err: null
                    } : {
                        val: {
                            type: 6,
                            value: r,
                            options: Od(u.val),
                            offset: m,
                            pluralType: i === "plural" ? "cardinal" : "ordinal",
                            location: p
                        },
                        err: null
                    };
                }
            default:
                return this.error(5, $e(o, s));
        }
    }
    tryParseArgumentClose(e) {
        return this.isEOF() || this.char() !== 125 ? this.error(1, $e(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
        });
    }
    parseSimpleArgStyleIfPossible() {
        let e = 0;
        const t = this.clonePosition();
        for(; !this.isEOF();)switch(this.char()){
            case 39:
                {
                    this.bump();
                    let r = this.clonePosition();
                    if (!this.bumpUntil("'")) return this.error(11, $e(r, this.clonePosition()));
                    this.bump();
                    break;
                }
            case 123:
                e += 1, this.bump();
                break;
            case 125:
                if (e > 0) e -= 1;
                else return {
                    val: this.message.slice(t.offset, this.offset()),
                    err: null
                };
                break;
            default:
                this.bump();
        }
        return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
        };
    }
    parseNumberSkeletonFromString(e, t) {
        let r = [];
        try {
            r = Lw(e);
        } catch  {
            return this.error(7, t);
        }
        return {
            val: {
                type: 0,
                tokens: r,
                location: t,
                parsedOptions: this.shouldParseSkeletons ? Bw(r) : {}
            },
            err: null
        };
    }
    tryParsePluralOrSelectOptions(e, t, r, n) {
        let o = !1;
        const i = [], s = new Set;
        let { value: c, location: l } = n;
        for(;;){
            if (c.length === 0) {
                const p = this.clonePosition();
                if (t !== "select" && this.bumpIf("=")) {
                    const h = this.tryParseDecimalInteger(16, 19);
                    if (h.err) return h;
                    l = $e(p, this.clonePosition()), c = this.message.slice(p.offset, this.offset());
                } else break;
            }
            if (s.has(c)) return this.error(t === "select" ? 21 : 20, l);
            c === "other" && (o = !0), this.bumpSpace();
            const m = this.clonePosition();
            if (!this.bumpIf("{")) return this.error(t === "select" ? 17 : 18, $e(this.clonePosition(), this.clonePosition()));
            const u = this.parseMessage(e + 1, t, r);
            if (u.err) return u;
            const d = this.tryParseArgumentClose(m);
            if (d.err) return d;
            i.push([
                c,
                {
                    value: u.val,
                    location: $e(m, this.clonePosition())
                }
            ]), s.add(c), this.bumpSpace(), { value: c, location: l } = this.parseIdentifierIfPossible();
        }
        return i.length === 0 ? this.error(t === "select" ? 15 : 16, $e(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(22, $e(this.clonePosition(), this.clonePosition())) : {
            val: i,
            err: null
        };
    }
    tryParseDecimalInteger(e, t) {
        let r = 1;
        const n = this.clonePosition();
        this.bumpIf("+") || this.bumpIf("-") && (r = -1);
        let o = !1, i = 0;
        for(; !this.isEOF();){
            const c = this.char();
            if (c >= 48 && c <= 57) o = !0, i = i * 10 + (c - 48), this.bump();
            else break;
        }
        const s = $e(n, this.clonePosition());
        return o ? (i *= r, Number.isSafeInteger(i) ? {
            val: i,
            err: null
        } : this.error(t, s)) : this.error(e, s);
    }
    offset() {
        return this.position.offset;
    }
    isEOF() {
        return this.offset() === this.message.length;
    }
    clonePosition() {
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
        };
    }
    char() {
        const e = this.position.offset;
        if (e >= this.message.length) throw Error("out of bound");
        const t = this.message.codePointAt(e);
        if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
        return t;
    }
    error(e, t) {
        return {
            val: null,
            err: {
                kind: e,
                message: this.message,
                location: t
            }
        };
    }
    bump() {
        if (this.isEOF()) return;
        const e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
    }
    bumpIf(e) {
        if (this.message.startsWith(e, this.offset())) {
            for(let t = 0; t < e.length; t++)this.bump();
            return !0;
        }
        return !1;
    }
    bumpUntil(e) {
        const t = this.offset(), r = this.message.indexOf(e, t);
        return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }
    bumpTo(e) {
        if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
        for(e = Math.min(e, this.message.length);;){
            const t = this.offset();
            if (t === e) break;
            if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
            if (this.bump(), this.isEOF()) break;
        }
    }
    bumpSpace() {
        for(; !this.isEOF() && qw(this.char());)this.bump();
    }
    peek() {
        if (this.isEOF()) return null;
        const e = this.char(), t = this.offset();
        return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
    }
}, a(fc, "_isAlpha"), a(Xw, "_isAlphaOrSlash"), a(Zw, "_isPotentialElementNameChar"), a(qw, "_isWhiteSpace"), a(hc, "pruneLocation"), a(Qw, "parse");

}
