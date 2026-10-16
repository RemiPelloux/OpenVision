"use strict";
require.d(exports, {
    Yd: ()=>x,
    lt: ()=>J,
    Bh: ()=>R,
    zV: ()=>M,
    d8: ()=>C,
    yR: ()=>A
});
var n = require("./module-4573.js"), s = require("./module-51455.js"), o = require("./module-76760.js"), i = require("./module-57975.js"), a = require("./module-59158.js"), c = require("./module-99653.js");
const l = "utf8", u = "utf8bom", d = "latin1", p = {
    "windows-1250": "cp1250",
    "windows-1251": "cp1251",
    "windows-1252": "cp1252",
    "windows-1253": "cp1253",
    "windows-1254": "cp1254",
    "windows-1255": "cp1255",
    "windows-1256": "cp1256",
    "windows-1257": "cp1257",
    "windows-1258": "cp1258",
    "iso-8859-1": "iso88591",
    "iso-8859-2": "iso88592",
    "iso-8859-5": "iso88595",
    "iso-8859-6": "iso88596",
    "iso-8859-7": "iso88597",
    "iso-8859-8": "iso88598",
    "iso-8859-9": "iso88599",
    "iso-8859-15": "iso885915",
    "iso-8859-16": "iso885916",
    shift_jis: "shiftjis",
    "euc-jp": "eucjp",
    "euc-kr": "euckr",
    "iso-2022-jp": "iso2022jp",
    "iso-2022-kr": "iso2022kr",
    gb2312: "gb2312",
    gbk: "gbk",
    gb18030: "gb18030",
    big5: "big5",
    "big5-hkscs": "big5hkscs",
    "koi8-r": "koi8r",
    "koi8-u": "koi8u",
    ibm855: "cp855",
    ibm866: "cp866",
    maccyrillic: "maccyrillic",
    "utf-16le": "utf16le",
    "utf-16be": "utf16be",
    "utf-32le": "utf32le",
    "utf-32be": "utf32be",
    johab: "johab",
    cp949: "cp949",
    cp932: "cp932"
};
function m(e) {
    return e.startsWith("\ufeff") ? e.slice(1) : e;
}
function h(e) {
    const t = e.toLowerCase();
    return "latin-1" === t ? d : "utf-8" === t ? l : "utf-8-bom" === t || "utf-8 bom" === t ? u : t;
}
var f;
!function(e) {
    e.CRLF = "CRLF", e.LF = "LF";
}(f || (f = {}));
const g = [
    ".mp4",
    ".webm",
    ".mov",
    ".avi",
    ".mkv",
    ".wmv",
    ".flv",
    ".m4v"
], y = new Set(g), w = new i.TextDecoder("utf-8", {
    fatal: !0
}), v = new i.TextDecoder("latin1"), _ = 100, b = Buffer.from([
    239,
    187,
    191
]), S = 27, k = "UTF-8", x = new Map, E = new Set([
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".ico",
    ".bmp",
    ".svg",
    ".pdf",
    ".zip",
    ".tar",
    ".gz",
    ".exe",
    ".dll",
    ".so",
    ".dylib",
    ".bin",
    ...g
]), I = /\.(png|jpg|jpeg|gif|webp|ico|bmp|svg)$/i;
function T(e) {
    const t = e.toLowerCase(), r = t.lastIndexOf(".");
    return -1 === r ? "" : t.substring(r);
}
function C(e) {
    const t = T(e);
    return y.has(t);
}
function P(e) {
    const t = T(e);
    return {
        encoding: "binary",
        lineEnding: f.LF,
        isBinaryFile: !0,
        isImageFile: I.test(t),
        isVideoFile: y.has(t)
    };
}
async function A(e, t) {
    const r = await (0, s.readFile)(e), n = O(r);
    if (n.isBinaryFile) throw new Error("Binary file cannot be decoded as text");
    const o = x.get(e);
    let i;
    i = t || o || n.encoding;
    const { text: c, encoding: g } = function(e, t) {
        const r = h(t);
        if (r === l || r === u || "ascii" === r) {
            const t = L(e);
            return r === u && t.encoding === l ? {
                text: t.text,
                encoding: u
            } : t;
        }
        if (r === d) return {
            text: v.decode(e),
            encoding: d
        };
        try {
            const t = function(e) {
                return p[e] || e;
            }(r);
            if (a.encodingExists(t)) {
                return {
                    text: a.decode(e, t),
                    encoding: r
                };
            }
        } catch  {}
        return L(e);
    }(r, i), y = m(c);
    return U(e, g === l && $(r) ? u : g), n.lineEnding === f.CRLF ? y.replaceAll("\r\n", "\n") : y;
}
async function R(e, t, r, n) {
    let s;
    try {
        s = r ? await async function(e, t) {
            try {
                return await M(e);
            } catch  {}
            const r = T(e);
            if (E.has(r)) return P(e);
            try {
                return await async function(e) {
                    const t = new Map;
                    let r = 0;
                    const n = 100;
                    for await (const s of N(e)){
                        if (r >= n) break;
                        try {
                            const e = await M(s);
                            if (!e.isBinaryFile) {
                                const r = `${e.encoding}:${e.lineEnding}`, n = t.get(r);
                                if (n) {
                                    if (n.count++, n.count >= 3) return n.format;
                                } else t.set(r, {
                                    format: e,
                                    count: 1
                                });
                            }
                            r++;
                        } catch (e) {}
                    }
                    let s;
                    for (const e of t.values())(!s || e.count > s.count) && (s = e);
                    if (s) return s.format;
                    return F();
                }(t);
            } catch  {
                return F();
            }
        }(e, r) : await M(e);
    } catch  {
        const t = T(e);
        s = E.has(t) ? P(e) : F();
    }
    const o = x.get(e);
    if (!s.isBinaryFile) {
        let t;
        t = h(n || o || s.encoding);
        const r = t === u || t === l && !n && await async function(e) {
            try {
                return $(await q(e));
            } catch  {
                return !1;
            }
        }(e);
        s = {
            ...s,
            encoding: r ? u : t
        }, U(e, s.encoding);
    }
    const i = J(t);
    if (s.lineEnding === f.CRLF && (t = t.replace(/(?<!\r)\n/g, "\r\n")), "binary" === s.encoding) {
        const e = function(e) {
            const t = e.trim().replace(/\s/g, ""), r = /^[A-Za-z0-9+/]*={0,2}$/, n = 50, s = .5;
            if (t.length > n && r.test(t)) try {
                const e = Buffer.from(t, "base64");
                if (e.length > 0) {
                    const r = Math.floor(t.length * s);
                    if (e.length >= r) return e;
                }
            } catch  {}
            return Buffer.from(e, "latin1");
        }(t);
        return {
            lines: i,
            buffer: e,
            format: s
        };
    }
    return {
        lines: i,
        buffer: s.encoding === u ? Buffer.concat([
            b,
            a.encode(m(t), l, {
                defaultEncoding: l
            })
        ]) : a.encode(t, s.encoding, {
            defaultEncoding: l
        }),
        format: s
    };
}
async function M(e) {
    const t = O(await q(e));
    return t.isBinaryFile ? {
        ...t,
        isVideoFile: C(e)
    } : {
        ...t,
        isVideoFile: !1
    };
}
function J(e) {
    if ("" === e) return 1;
    let t = 1;
    for(let r = 0; r < e.length; r++)"\n" === e[r] && t++;
    return t;
}
function O(e) {
    if (0 === e.length) return F();
    const t = function(e) {
        if (e.length < 4) return null;
        if (255 === e[0] && 254 === e[1] && (0 !== e[2] || 0 !== e[3])) return "UTF-16LE";
        if (254 === e[0] && 255 === e[1]) return "UTF-16BE";
        let t = 0, r = 0;
        const n = Math.min(50, Math.floor(e.length / 2));
        for(let s = 0; s < 2 * n && !(s + 1 >= e.length); s += 2){
            if (0 === e[s + 1]) {
                const r = e[s];
                (r >= 32 && r <= 126 || 9 === r || 10 === r || 13 === r) && t++;
            }
            if (0 === e[s]) {
                const t = e[s + 1];
                (t >= 32 && t <= 126 || 9 === t || 10 === t || 13 === t) && r++;
            }
        }
        if (t > .8 * n) return "UTF-16LE";
        if (r > .8 * n) return "UTF-16BE";
        return null;
    }(e);
    if (t) return {
        encoding: t,
        lineEnding: B(e),
        isBinaryFile: !1,
        isImageFile: !1,
        isVideoFile: !1
    };
    const r = function(e) {
        if (e.length < 8) return null;
        if (0 === e[0] && 0 === e[1] && 254 === e[2] && 255 === e[3]) return "UTF-32BE";
        if (255 === e[0] && 254 === e[1] && 0 === e[2] && 0 === e[3]) return "UTF-32LE";
        let t = 0, r = 0;
        const n = Math.min(50, Math.floor(e.length / 4));
        for(let s = 0; s < 4 * n && !(s + 3 >= e.length); s += 4){
            if (0 === e[s] && 0 === e[s + 1] && 0 === e[s + 2]) {
                const r = e[s + 3];
                (r >= 32 && r <= 126 || 9 === r || 10 === r || 13 === r) && t++;
            }
            if (0 === e[s + 1] && 0 === e[s + 2] && 0 === e[s + 3]) {
                const t = e[s];
                (t >= 32 && t <= 126 || 9 === t || 10 === t || 13 === t) && r++;
            }
        }
        if (t > .8 * n) return "UTF-32BE";
        if (r > .8 * n) return "UTF-32LE";
        return null;
    }(e);
    if (r) return {
        encoding: r,
        lineEnding: B(e),
        isBinaryFile: !1,
        isImageFile: !1,
        isVideoFile: !1
    };
    if (!function(e) {
        const t = Math.min(4096, e.length);
        if (0 === t) return !0;
        for(let r = 0; r < t; r++)if (0 === e[r]) return !1;
        let r = 0;
        for(let n = 0; n < t; n++){
            const t = e[n];
            t < 32 && 9 !== t && 10 !== t && 13 !== t && r++;
        }
        return r / t * 100 < 5;
    }(e)) return {
        encoding: "binary",
        lineEnding: f.LF,
        isBinaryFile: !0,
        isImageFile: D(e),
        isVideoFile: !1
    };
    if ((0, n.isUtf8)(e) && !e.includes(S)) return {
        encoding: k,
        lineEnding: B(e),
        isBinaryFile: !1,
        isImageFile: !1,
        isVideoFile: !1
    };
    const s = c.detect(e);
    let o = s.confidence > .7 ? s.encoding : "utf-8";
    return "ascii" === o && (o = "utf-8"), {
        encoding: o ?? "utf-8",
        lineEnding: B(e),
        isBinaryFile: !1,
        isImageFile: !1,
        isVideoFile: !1
    };
}
function B(e) {
    let t = 0, r = 0;
    for(let n = 0; n < e.length; n++)10 === e[n] && (n > 0 && 13 === e[n - 1] ? t++ : r++);
    if (0 === t && 0 === r) return f.LF;
    return t / (t + r) * 100 >= 5 ? f.CRLF : f.LF;
}
function D(e) {
    return !(e.length < 4) && (e.length >= 8 && 137 === e[0] && 80 === e[1] && 78 === e[2] && 71 === e[3] && 13 === e[4] && 10 === e[5] && 26 === e[6] && 10 === e[7] || 255 === e[0] && 216 === e[1] && 255 === e[2] || e.length >= 12 && 82 === e[0] && 73 === e[1] && 70 === e[2] && 70 === e[3] && 87 === e[8] && 69 === e[9] && 66 === e[10] && 80 === e[11] || e.length >= 6 && 71 === e[0] && 73 === e[1] && 70 === e[2] && 56 === e[3] && (55 === e[4] || 57 === e[4]) && 97 === e[5]);
}
async function q(e) {
    const t = await (0, s.open)(e, "r");
    try {
        const e = Buffer.allocUnsafe(8192), { bytesRead: r } = await t.read(e, 0, 8192, 0);
        return e.subarray(0, r);
    } finally{
        await t.close();
    }
}
async function* N(e) {
    const t = new Set([
        "node_modules",
        ".git",
        ".svn",
        ".hg",
        "dist",
        "build",
        "out",
        ".next",
        ".cache",
        "coverage",
        "__pycache__",
        ".venv",
        "venv",
        ".turbo"
    ]);
    try {
        const r = await (0, s.readdir)(e, {
            withFileTypes: !0
        });
        for (const n of r){
            if (n.name.startsWith(".") && ".gitignore" !== n.name) continue;
            const r = (0, o.join)(e, n.name);
            n.isDirectory() ? t.has(n.name) || (yield* N(r)) : n.isFile() && (yield r);
        }
    } catch (e) {
        return;
    }
}
function F() {
    return {
        encoding: l,
        lineEnding: "win32" === process.platform ? f.CRLF : f.LF,
        isBinaryFile: !1,
        isImageFile: !1,
        isVideoFile: !1
    };
}
function U(e, t) {
    if (x.has(e) && x.delete(e), x.set(e, t), x.size <= _) return;
    const r = x.keys().next().value;
    void 0 !== r && x.delete(r);
}
function L(e) {
    try {
        return {
            text: w.decode(e),
            encoding: l
        };
    } catch  {
        return {
            text: v.decode(e),
            encoding: d
        };
    }
}
function $(e) {
    return e.length >= b.length && e[0] === b[0] && e[1] === b[1] && e[2] === b[2];
}
