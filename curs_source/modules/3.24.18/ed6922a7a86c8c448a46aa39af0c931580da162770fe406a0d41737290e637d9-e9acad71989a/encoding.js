import { Dl, Fo } from "./HVr.js";
import { $Bh, D0t, Znr, r7e } from "./amdX.js";
import { dr } from "./arrays.js";
import { Ar } from "./cancellation.js";
import { Fqe, Gd, INt } from "./network.js";
import { nwe } from "./stream.js";
import { x } from "./tslib.es6.js";
async function Pq(e, t, n) {
    n === void 0 && (n = !!(globalThis._VSCODE_PRODUCT_JSON ?? globalThis.vscode?.context?.configuration()?.product)?.commit);
    const i = t ? `${e}/${t}` : e;
    if (Znr.has(i)) return Znr.get(i);
    let r;
    if (/^\w[\w\d+.-]*:\/\//.test(i)) r = i;
    else {
        const c = `${D0t && n && !Dl ? INt : Fqe}/${i}`;
        r = Gd.asBrowserUri(c).toString(!0);
    }
    const s = $Bh.INSTANCE.load(r);
    return Znr.set(i, s), s;
}
function _Do(e) {
    return e === FLe || e === null ? J6 : e;
}
var J6, FLe, Snt, knt, y5n, Qnr, ozt, WBh, GBh, VBh, jBh, qBh, zBh, KBh, YBh, bG, S5n;
export { FLe, GBh, J6, KBh, Pq, Qnr, S5n, Snt, VBh, WBh, YBh, _Do, bG, jBh, knt, ozt, qBh, y5n, zBh };
var __wakaru_k5n_initialized = false;
export function k5n() {
if (__wakaru_k5n_initialized) return;
__wakaru_k5n_initialized = true;
"use strict";
x(), nwe(), Fo(), r7e(), Ar(), dr(), J6 = "utf8", FLe = "utf8bom", Snt = "utf16be", knt = "utf16le", y5n = [
    254,
    255
], Qnr = [
    255,
    254
], ozt = [
    239,
    187,
    191
], WBh = 512, GBh = 512, VBh = 512 * 8, jBh = 512 * 128, qBh = class extends Error {
    constructor(e, t){
        super(e), this.decodeStreamErrorKind = t;
    }
}, zBh = class BCm {
    constructor(t){
        this.iconvLiteDecoder = t;
    }
    static async create(t) {
        let n;
        if (t !== J6) n = (await Pq("@vscode/iconv-lite-umd", "lib/iconv-lite-umd.js")).getDecoder(_Do(t));
        else {
            const i = new TextDecoder;
            n = {
                write (r) {
                    return i.decode(r, {
                        stream: !0
                    });
                },
                end () {
                    return i.decode();
                }
            };
        }
        return new BCm(n);
    }
    write(t) {
        return this.iconvLiteDecoder.write(t);
    }
    end() {
        return this.iconvLiteDecoder.end();
    }
}, KBh = [
    "ascii",
    "utf-16",
    "utf-32"
], YBh = {
    ibm866: "cp866",
    big5: "cp950"
}, bG = {
    utf8: {
        labelLong: "UTF-8",
        labelShort: "UTF-8",
        order: 1,
        alias: "utf8bom",
        guessableName: "UTF-8"
    },
    utf8bom: {
        labelLong: "UTF-8 with BOM",
        labelShort: "UTF-8 with BOM",
        encodeOnly: !0,
        order: 2,
        alias: "utf8"
    },
    utf16le: {
        labelLong: "UTF-16 LE",
        labelShort: "UTF-16 LE",
        order: 3,
        guessableName: "UTF-16LE"
    },
    utf16be: {
        labelLong: "UTF-16 BE",
        labelShort: "UTF-16 BE",
        order: 4,
        guessableName: "UTF-16BE"
    },
    windows1252: {
        labelLong: "Western (Windows 1252)",
        labelShort: "Windows 1252",
        order: 5,
        guessableName: "windows-1252"
    },
    iso88591: {
        labelLong: "Western (ISO 8859-1)",
        labelShort: "ISO 8859-1",
        order: 6
    },
    iso88593: {
        labelLong: "Western (ISO 8859-3)",
        labelShort: "ISO 8859-3",
        order: 7
    },
    iso885915: {
        labelLong: "Western (ISO 8859-15)",
        labelShort: "ISO 8859-15",
        order: 8
    },
    macroman: {
        labelLong: "Western (Mac Roman)",
        labelShort: "Mac Roman",
        order: 9
    },
    cp437: {
        labelLong: "DOS (CP 437)",
        labelShort: "CP437",
        order: 10
    },
    windows1256: {
        labelLong: "Arabic (Windows 1256)",
        labelShort: "Windows 1256",
        order: 11
    },
    iso88596: {
        labelLong: "Arabic (ISO 8859-6)",
        labelShort: "ISO 8859-6",
        order: 12
    },
    windows1257: {
        labelLong: "Baltic (Windows 1257)",
        labelShort: "Windows 1257",
        order: 13
    },
    iso88594: {
        labelLong: "Baltic (ISO 8859-4)",
        labelShort: "ISO 8859-4",
        order: 14
    },
    iso885914: {
        labelLong: "Celtic (ISO 8859-14)",
        labelShort: "ISO 8859-14",
        order: 15
    },
    windows1250: {
        labelLong: "Central European (Windows 1250)",
        labelShort: "Windows 1250",
        order: 16,
        guessableName: "windows-1250"
    },
    iso88592: {
        labelLong: "Central European (ISO 8859-2)",
        labelShort: "ISO 8859-2",
        order: 17,
        guessableName: "ISO-8859-2"
    },
    cp852: {
        labelLong: "Central European (CP 852)",
        labelShort: "CP 852",
        order: 18
    },
    windows1251: {
        labelLong: "Cyrillic (Windows 1251)",
        labelShort: "Windows 1251",
        order: 19,
        guessableName: "windows-1251"
    },
    cp866: {
        labelLong: "Cyrillic (CP 866)",
        labelShort: "CP 866",
        order: 20,
        guessableName: "IBM866"
    },
    cp1125: {
        labelLong: "Cyrillic (CP 1125)",
        labelShort: "CP 1125",
        order: 21,
        guessableName: "IBM1125"
    },
    iso88595: {
        labelLong: "Cyrillic (ISO 8859-5)",
        labelShort: "ISO 8859-5",
        order: 22,
        guessableName: "ISO-8859-5"
    },
    koi8r: {
        labelLong: "Cyrillic (KOI8-R)",
        labelShort: "KOI8-R",
        order: 23,
        guessableName: "KOI8-R"
    },
    koi8u: {
        labelLong: "Cyrillic (KOI8-U)",
        labelShort: "KOI8-U",
        order: 24
    },
    iso885913: {
        labelLong: "Estonian (ISO 8859-13)",
        labelShort: "ISO 8859-13",
        order: 25
    },
    windows1253: {
        labelLong: "Greek (Windows 1253)",
        labelShort: "Windows 1253",
        order: 26,
        guessableName: "windows-1253"
    },
    iso88597: {
        labelLong: "Greek (ISO 8859-7)",
        labelShort: "ISO 8859-7",
        order: 27,
        guessableName: "ISO-8859-7"
    },
    windows1255: {
        labelLong: "Hebrew (Windows 1255)",
        labelShort: "Windows 1255",
        order: 28,
        guessableName: "windows-1255"
    },
    iso88598: {
        labelLong: "Hebrew (ISO 8859-8)",
        labelShort: "ISO 8859-8",
        order: 29,
        guessableName: "ISO-8859-8"
    },
    iso885910: {
        labelLong: "Nordic (ISO 8859-10)",
        labelShort: "ISO 8859-10",
        order: 30
    },
    iso885916: {
        labelLong: "Romanian (ISO 8859-16)",
        labelShort: "ISO 8859-16",
        order: 31
    },
    windows1254: {
        labelLong: "Turkish (Windows 1254)",
        labelShort: "Windows 1254",
        order: 32
    },
    iso88599: {
        labelLong: "Turkish (ISO 8859-9)",
        labelShort: "ISO 8859-9",
        order: 33
    },
    windows1258: {
        labelLong: "Vietnamese (Windows 1258)",
        labelShort: "Windows 1258",
        order: 34
    },
    gbk: {
        labelLong: "Simplified Chinese (GBK)",
        labelShort: "GBK",
        order: 35
    },
    gb18030: {
        labelLong: "Simplified Chinese (GB18030)",
        labelShort: "GB18030",
        order: 36
    },
    cp950: {
        labelLong: "Traditional Chinese (Big5)",
        labelShort: "Big5",
        order: 37,
        guessableName: "Big5"
    },
    big5hkscs: {
        labelLong: "Traditional Chinese (Big5-HKSCS)",
        labelShort: "Big5-HKSCS",
        order: 38
    },
    shiftjis: {
        labelLong: "Japanese (Shift JIS)",
        labelShort: "Shift JIS",
        order: 39,
        guessableName: "SHIFT_JIS"
    },
    eucjp: {
        labelLong: "Japanese (EUC-JP)",
        labelShort: "EUC-JP",
        order: 40,
        guessableName: "EUC-JP"
    },
    euckr: {
        labelLong: "Korean (EUC-KR)",
        labelShort: "EUC-KR",
        order: 41,
        guessableName: "EUC-KR"
    },
    windows874: {
        labelLong: "Thai (Windows 874)",
        labelShort: "Windows 874",
        order: 42
    },
    iso885911: {
        labelLong: "Latin/Thai (ISO 8859-11)",
        labelShort: "ISO 8859-11",
        order: 43
    },
    koi8ru: {
        labelLong: "Cyrillic (KOI8-RU)",
        labelShort: "KOI8-RU",
        order: 44
    },
    koi8t: {
        labelLong: "Tajik (KOI8-T)",
        labelShort: "KOI8-T",
        order: 45
    },
    gb2312: {
        labelLong: "Simplified Chinese (GB 2312)",
        labelShort: "GB 2312",
        order: 46,
        guessableName: "GB2312"
    },
    cp865: {
        labelLong: "Nordic DOS (CP 865)",
        labelShort: "CP 865",
        order: 47
    },
    cp850: {
        labelLong: "Western European DOS (CP 850)",
        labelShort: "CP 850",
        order: 48
    }
}, S5n = (()=>{
    const e = {};
    for(const t in bG)bG[t].guessableName && (e[t] = bG[t]);
    return e;
})();

}
