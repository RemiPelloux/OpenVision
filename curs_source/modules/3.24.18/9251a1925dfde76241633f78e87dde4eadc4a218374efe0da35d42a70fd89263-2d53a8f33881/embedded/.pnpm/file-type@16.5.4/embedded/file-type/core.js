import { require_supported } from "./supported.js";
import { require_util17 } from "./util.js";
import { require_core4 } from "../../../strtok3@6.3.0/node_modules/strtok3/lib/core.js";
import { require_lib2 } from "../../../token-types@4.2.1/node_modules/token-types/lib/index.js";
var __wakaru_require_core5_cache;
export function require_core5() {
if (__wakaru_require_core5_cache) return __wakaru_require_core5_cache.exports;
var exports = {};
var module = { exports: exports };
__wakaru_require_core5_cache = module;
"use strict";
var Token = require_lib2();
var strtok3 = require_core4();
var { stringToBytes, tarHeaderChecksumMatches, uint32SyncSafeToken } = require_util17();
var supported = require_supported();
var minimumBytes = 4100;
async function fromStream(stream3) {
    const tokenizer = await strtok3.fromStream(stream3);
    try {
        return await fromTokenizer(tokenizer);
    } finally{
        await tokenizer.close();
    }
}
async function fromBuffer(input) {
    if (!(input instanceof Uint8Array || input instanceof ArrayBuffer || Buffer.isBuffer(input))) {
        throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof input}\``);
    }
    const buffer = input instanceof Buffer ? input : Buffer.from(input);
    if (!(buffer && buffer.length > 1)) {
        return;
    }
    const tokenizer = strtok3.fromBuffer(buffer);
    return fromTokenizer(tokenizer);
}
function _check(buffer, headers, options2) {
    options2 = {
        offset: 0,
        ...options2
    };
    for (const [index, header] of headers.entries()){
        if (options2.mask) {
            if (header !== (options2.mask[index] & buffer[index + options2.offset])) {
                return false;
            }
        } else if (header !== buffer[index + options2.offset]) {
            return false;
        }
    }
    return true;
}
async function fromTokenizer(tokenizer) {
    try {
        return _fromTokenizer(tokenizer);
    } catch (error3) {
        if (!(error3 instanceof strtok3.EndOfStreamError)) {
            throw error3;
        }
    }
}
async function _fromTokenizer(tokenizer) {
    let buffer = Buffer.alloc(minimumBytes);
    const bytesRead = 12;
    const check2 = (header, options2)=>_check(buffer, header, options2);
    const checkString = (header, options2)=>check2(stringToBytes(header), options2);
    if (!tokenizer.fileInfo.size) {
        tokenizer.fileInfo.size = Number.MAX_SAFE_INTEGER;
    }
    await tokenizer.peekBuffer(buffer, {
        length: bytesRead,
        mayBeLess: true
    });
    if (check2([
        66,
        77
    ])) {
        return {
            ext: "bmp",
            mime: "image/bmp"
        };
    }
    if (check2([
        11,
        119
    ])) {
        return {
            ext: "ac3",
            mime: "audio/vnd.dolby.dd-raw"
        };
    }
    if (check2([
        120,
        1
    ])) {
        return {
            ext: "dmg",
            mime: "application/x-apple-diskimage"
        };
    }
    if (check2([
        77,
        90
    ])) {
        return {
            ext: "exe",
            mime: "application/x-msdownload"
        };
    }
    if (check2([
        37,
        33
    ])) {
        await tokenizer.peekBuffer(buffer, {
            length: 24,
            mayBeLess: true
        });
        if (checkString("PS-Adobe-", {
            offset: 2
        }) && checkString(" EPSF-", {
            offset: 14
        })) {
            return {
                ext: "eps",
                mime: "application/eps"
            };
        }
        return {
            ext: "ps",
            mime: "application/postscript"
        };
    }
    if (check2([
        31,
        160
    ]) || check2([
        31,
        157
    ])) {
        return {
            ext: "Z",
            mime: "application/x-compress"
        };
    }
    if (check2([
        255,
        216,
        255
    ])) {
        return {
            ext: "jpg",
            mime: "image/jpeg"
        };
    }
    if (check2([
        73,
        73,
        188
    ])) {
        return {
            ext: "jxr",
            mime: "image/vnd.ms-photo"
        };
    }
    if (check2([
        31,
        139,
        8
    ])) {
        return {
            ext: "gz",
            mime: "application/gzip"
        };
    }
    if (check2([
        66,
        90,
        104
    ])) {
        return {
            ext: "bz2",
            mime: "application/x-bzip2"
        };
    }
    if (checkString("ID3")) {
        await tokenizer.ignore(6);
        const id3HeaderLen = await tokenizer.readToken(uint32SyncSafeToken);
        if (tokenizer.position + id3HeaderLen > tokenizer.fileInfo.size) {
            return {
                ext: "mp3",
                mime: "audio/mpeg"
            };
        }
        await tokenizer.ignore(id3HeaderLen);
        return fromTokenizer(tokenizer);
    }
    if (checkString("MP+")) {
        return {
            ext: "mpc",
            mime: "audio/x-musepack"
        };
    }
    if ((buffer[0] === 67 || buffer[0] === 70) && check2([
        87,
        83
    ], {
        offset: 1
    })) {
        return {
            ext: "swf",
            mime: "application/x-shockwave-flash"
        };
    }
    if (check2([
        71,
        73,
        70
    ])) {
        return {
            ext: "gif",
            mime: "image/gif"
        };
    }
    if (checkString("FLIF")) {
        return {
            ext: "flif",
            mime: "image/flif"
        };
    }
    if (checkString("8BPS")) {
        return {
            ext: "psd",
            mime: "image/vnd.adobe.photoshop"
        };
    }
    if (checkString("WEBP", {
        offset: 8
    })) {
        return {
            ext: "webp",
            mime: "image/webp"
        };
    }
    if (checkString("MPCK")) {
        return {
            ext: "mpc",
            mime: "audio/x-musepack"
        };
    }
    if (checkString("FORM")) {
        return {
            ext: "aif",
            mime: "audio/aiff"
        };
    }
    if (checkString("icns", {
        offset: 0
    })) {
        return {
            ext: "icns",
            mime: "image/icns"
        };
    }
    if (check2([
        80,
        75,
        3,
        4
    ])) {
        try {
            while(tokenizer.position + 30 < tokenizer.fileInfo.size){
                await tokenizer.readBuffer(buffer, {
                    length: 30
                });
                const zipHeader = {
                    compressedSize: buffer.readUInt32LE(18),
                    uncompressedSize: buffer.readUInt32LE(22),
                    filenameLength: buffer.readUInt16LE(26),
                    extraFieldLength: buffer.readUInt16LE(28)
                };
                zipHeader.filename = await tokenizer.readToken(new Token.StringType(zipHeader.filenameLength, "utf-8"));
                await tokenizer.ignore(zipHeader.extraFieldLength);
                if (zipHeader.filename === "META-INF/mozilla.rsa") {
                    return {
                        ext: "xpi",
                        mime: "application/x-xpinstall"
                    };
                }
                if (zipHeader.filename.endsWith(".rels") || zipHeader.filename.endsWith(".xml")) {
                    const type2 = zipHeader.filename.split("/")[0];
                    switch(type2){
                        case "_rels":
                            break;
                        case "word":
                            return {
                                ext: "docx",
                                mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            };
                        case "ppt":
                            return {
                                ext: "pptx",
                                mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                            };
                        case "xl":
                            return {
                                ext: "xlsx",
                                mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                            };
                        default:
                            break;
                    }
                }
                if (zipHeader.filename.startsWith("xl/")) {
                    return {
                        ext: "xlsx",
                        mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    };
                }
                if (zipHeader.filename.startsWith("3D/") && zipHeader.filename.endsWith(".model")) {
                    return {
                        ext: "3mf",
                        mime: "model/3mf"
                    };
                }
                if (zipHeader.filename === "mimetype" && zipHeader.compressedSize === zipHeader.uncompressedSize) {
                    const mimeType = await tokenizer.readToken(new Token.StringType(zipHeader.compressedSize, "utf-8"));
                    switch(mimeType){
                        case "application/epub+zip":
                            return {
                                ext: "epub",
                                mime: "application/epub+zip"
                            };
                        case "application/vnd.oasis.opendocument.text":
                            return {
                                ext: "odt",
                                mime: "application/vnd.oasis.opendocument.text"
                            };
                        case "application/vnd.oasis.opendocument.spreadsheet":
                            return {
                                ext: "ods",
                                mime: "application/vnd.oasis.opendocument.spreadsheet"
                            };
                        case "application/vnd.oasis.opendocument.presentation":
                            return {
                                ext: "odp",
                                mime: "application/vnd.oasis.opendocument.presentation"
                            };
                        default:
                    }
                }
                if (zipHeader.compressedSize === 0) {
                    let nextHeaderIndex = -1;
                    while(nextHeaderIndex < 0 && tokenizer.position < tokenizer.fileInfo.size){
                        await tokenizer.peekBuffer(buffer, {
                            mayBeLess: true
                        });
                        nextHeaderIndex = buffer.indexOf("504B0304", 0, "hex");
                        await tokenizer.ignore(nextHeaderIndex >= 0 ? nextHeaderIndex : buffer.length);
                    }
                } else {
                    await tokenizer.ignore(zipHeader.compressedSize);
                }
            }
        } catch (error3) {
            if (!(error3 instanceof strtok3.EndOfStreamError)) {
                throw error3;
            }
        }
        return {
            ext: "zip",
            mime: "application/zip"
        };
    }
    if (checkString("OggS")) {
        await tokenizer.ignore(28);
        const type2 = Buffer.alloc(8);
        await tokenizer.readBuffer(type2);
        if (_check(type2, [
            79,
            112,
            117,
            115,
            72,
            101,
            97,
            100
        ])) {
            return {
                ext: "opus",
                mime: "audio/opus"
            };
        }
        if (_check(type2, [
            128,
            116,
            104,
            101,
            111,
            114,
            97
        ])) {
            return {
                ext: "ogv",
                mime: "video/ogg"
            };
        }
        if (_check(type2, [
            1,
            118,
            105,
            100,
            101,
            111,
            0
        ])) {
            return {
                ext: "ogm",
                mime: "video/ogg"
            };
        }
        if (_check(type2, [
            127,
            70,
            76,
            65,
            67
        ])) {
            return {
                ext: "oga",
                mime: "audio/ogg"
            };
        }
        if (_check(type2, [
            83,
            112,
            101,
            101,
            120,
            32,
            32
        ])) {
            return {
                ext: "spx",
                mime: "audio/ogg"
            };
        }
        if (_check(type2, [
            1,
            118,
            111,
            114,
            98,
            105,
            115
        ])) {
            return {
                ext: "ogg",
                mime: "audio/ogg"
            };
        }
        return {
            ext: "ogx",
            mime: "application/ogg"
        };
    }
    if (check2([
        80,
        75
    ]) && (buffer[2] === 3 || buffer[2] === 5 || buffer[2] === 7) && (buffer[3] === 4 || buffer[3] === 6 || buffer[3] === 8)) {
        return {
            ext: "zip",
            mime: "application/zip"
        };
    }
    if (checkString("ftyp", {
        offset: 4
    }) && (buffer[8] & 96) !== 0) {
        const brandMajor = buffer.toString("binary", 8, 12).replace("\0", " ").trim();
        switch(brandMajor){
            case "avif":
                return {
                    ext: "avif",
                    mime: "image/avif"
                };
            case "mif1":
                return {
                    ext: "heic",
                    mime: "image/heif"
                };
            case "msf1":
                return {
                    ext: "heic",
                    mime: "image/heif-sequence"
                };
            case "heic":
            case "heix":
                return {
                    ext: "heic",
                    mime: "image/heic"
                };
            case "hevc":
            case "hevx":
                return {
                    ext: "heic",
                    mime: "image/heic-sequence"
                };
            case "qt":
                return {
                    ext: "mov",
                    mime: "video/quicktime"
                };
            case "M4V":
            case "M4VH":
            case "M4VP":
                return {
                    ext: "m4v",
                    mime: "video/x-m4v"
                };
            case "M4P":
                return {
                    ext: "m4p",
                    mime: "video/mp4"
                };
            case "M4B":
                return {
                    ext: "m4b",
                    mime: "audio/mp4"
                };
            case "M4A":
                return {
                    ext: "m4a",
                    mime: "audio/x-m4a"
                };
            case "F4V":
                return {
                    ext: "f4v",
                    mime: "video/mp4"
                };
            case "F4P":
                return {
                    ext: "f4p",
                    mime: "video/mp4"
                };
            case "F4A":
                return {
                    ext: "f4a",
                    mime: "audio/mp4"
                };
            case "F4B":
                return {
                    ext: "f4b",
                    mime: "audio/mp4"
                };
            case "crx":
                return {
                    ext: "cr3",
                    mime: "image/x-canon-cr3"
                };
            default:
                if (brandMajor.startsWith("3g")) {
                    if (brandMajor.startsWith("3g2")) {
                        return {
                            ext: "3g2",
                            mime: "video/3gpp2"
                        };
                    }
                    return {
                        ext: "3gp",
                        mime: "video/3gpp"
                    };
                }
                return {
                    ext: "mp4",
                    mime: "video/mp4"
                };
        }
    }
    if (checkString("MThd")) {
        return {
            ext: "mid",
            mime: "audio/midi"
        };
    }
    if (checkString("wOFF") && (check2([
        0,
        1,
        0,
        0
    ], {
        offset: 4
    }) || checkString("OTTO", {
        offset: 4
    }))) {
        return {
            ext: "woff",
            mime: "font/woff"
        };
    }
    if (checkString("wOF2") && (check2([
        0,
        1,
        0,
        0
    ], {
        offset: 4
    }) || checkString("OTTO", {
        offset: 4
    }))) {
        return {
            ext: "woff2",
            mime: "font/woff2"
        };
    }
    if (check2([
        212,
        195,
        178,
        161
    ]) || check2([
        161,
        178,
        195,
        212
    ])) {
        return {
            ext: "pcap",
            mime: "application/vnd.tcpdump.pcap"
        };
    }
    if (checkString("DSD ")) {
        return {
            ext: "dsf",
            mime: "audio/x-dsf"
        };
    }
    if (checkString("LZIP")) {
        return {
            ext: "lz",
            mime: "application/x-lzip"
        };
    }
    if (checkString("fLaC")) {
        return {
            ext: "flac",
            mime: "audio/x-flac"
        };
    }
    if (check2([
        66,
        80,
        71,
        251
    ])) {
        return {
            ext: "bpg",
            mime: "image/bpg"
        };
    }
    if (checkString("wvpk")) {
        return {
            ext: "wv",
            mime: "audio/wavpack"
        };
    }
    if (checkString("%PDF")) {
        await tokenizer.ignore(1350);
        const maxBufferSize = 10 * 1024 * 1024;
        const buffer2 = Buffer.alloc(Math.min(maxBufferSize, tokenizer.fileInfo.size));
        await tokenizer.readBuffer(buffer2, {
            mayBeLess: true
        });
        if (buffer2.includes(Buffer.from("AIPrivateData"))) {
            return {
                ext: "ai",
                mime: "application/postscript"
            };
        }
        return {
            ext: "pdf",
            mime: "application/pdf"
        };
    }
    if (check2([
        0,
        97,
        115,
        109
    ])) {
        return {
            ext: "wasm",
            mime: "application/wasm"
        };
    }
    if (check2([
        73,
        73,
        42,
        0
    ])) {
        if (checkString("CR", {
            offset: 8
        })) {
            return {
                ext: "cr2",
                mime: "image/x-canon-cr2"
            };
        }
        if (check2([
            28,
            0,
            254,
            0
        ], {
            offset: 8
        }) || check2([
            31,
            0,
            11,
            0
        ], {
            offset: 8
        })) {
            return {
                ext: "nef",
                mime: "image/x-nikon-nef"
            };
        }
        if (check2([
            8,
            0,
            0,
            0
        ], {
            offset: 4
        }) && (check2([
            45,
            0,
            254,
            0
        ], {
            offset: 8
        }) || check2([
            39,
            0,
            254,
            0
        ], {
            offset: 8
        }))) {
            return {
                ext: "dng",
                mime: "image/x-adobe-dng"
            };
        }
        buffer = Buffer.alloc(24);
        await tokenizer.peekBuffer(buffer);
        if ((check2([
            16,
            251,
            134,
            1
        ], {
            offset: 4
        }) || check2([
            8,
            0,
            0,
            0
        ], {
            offset: 4
        })) && check2([
            0,
            254,
            0,
            4,
            0,
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            3,
            1
        ], {
            offset: 9
        })) {
            return {
                ext: "arw",
                mime: "image/x-sony-arw"
            };
        }
        return {
            ext: "tif",
            mime: "image/tiff"
        };
    }
    if (check2([
        77,
        77,
        0,
        42
    ])) {
        return {
            ext: "tif",
            mime: "image/tiff"
        };
    }
    if (checkString("MAC ")) {
        return {
            ext: "ape",
            mime: "audio/ape"
        };
    }
    if (check2([
        26,
        69,
        223,
        163
    ])) {
        async function readField3() {
            const msb = await tokenizer.peekNumber(Token.UINT8);
            let mask = 128;
            let ic = 0;
            while((msb & mask) === 0 && mask !== 0){
                ++ic;
                mask >>= 1;
            }
            const id = Buffer.alloc(ic + 1);
            await tokenizer.readBuffer(id);
            return id;
        }
        async function readElement() {
            const id = await readField3();
            const lenField = await readField3();
            lenField[0] ^= 128 >> lenField.length - 1;
            const nrLen = Math.min(6, lenField.length);
            return {
                id: id.readUIntBE(0, id.length),
                len: lenField.readUIntBE(lenField.length - nrLen, nrLen)
            };
        }
        async function readChildren(level, children) {
            while(children > 0){
                const e = await readElement();
                if (e.id === 17026) {
                    return tokenizer.readToken(new Token.StringType(e.len, "utf-8"));
                }
                await tokenizer.ignore(e.len);
                --children;
            }
        }
        const re3 = await readElement();
        const docType = await readChildren(1, re3.len);
        switch(docType){
            case "webm":
                return {
                    ext: "webm",
                    mime: "video/webm"
                };
            case "matroska":
                return {
                    ext: "mkv",
                    mime: "video/x-matroska"
                };
            default:
                return;
        }
    }
    if (check2([
        82,
        73,
        70,
        70
    ])) {
        if (check2([
            65,
            86,
            73
        ], {
            offset: 8
        })) {
            return {
                ext: "avi",
                mime: "video/vnd.avi"
            };
        }
        if (check2([
            87,
            65,
            86,
            69
        ], {
            offset: 8
        })) {
            return {
                ext: "wav",
                mime: "audio/vnd.wave"
            };
        }
        if (check2([
            81,
            76,
            67,
            77
        ], {
            offset: 8
        })) {
            return {
                ext: "qcp",
                mime: "audio/qcelp"
            };
        }
    }
    if (checkString("SQLi")) {
        return {
            ext: "sqlite",
            mime: "application/x-sqlite3"
        };
    }
    if (check2([
        78,
        69,
        83,
        26
    ])) {
        return {
            ext: "nes",
            mime: "application/x-nintendo-nes-rom"
        };
    }
    if (checkString("Cr24")) {
        return {
            ext: "crx",
            mime: "application/x-google-chrome-extension"
        };
    }
    if (checkString("MSCF") || checkString("ISc(")) {
        return {
            ext: "cab",
            mime: "application/vnd.ms-cab-compressed"
        };
    }
    if (check2([
        237,
        171,
        238,
        219
    ])) {
        return {
            ext: "rpm",
            mime: "application/x-rpm"
        };
    }
    if (check2([
        197,
        208,
        211,
        198
    ])) {
        return {
            ext: "eps",
            mime: "application/eps"
        };
    }
    if (check2([
        40,
        181,
        47,
        253
    ])) {
        return {
            ext: "zst",
            mime: "application/zstd"
        };
    }
    if (check2([
        79,
        84,
        84,
        79,
        0
    ])) {
        return {
            ext: "otf",
            mime: "font/otf"
        };
    }
    if (checkString("#!AMR")) {
        return {
            ext: "amr",
            mime: "audio/amr"
        };
    }
    if (checkString("{\\rtf")) {
        return {
            ext: "rtf",
            mime: "application/rtf"
        };
    }
    if (check2([
        70,
        76,
        86,
        1
    ])) {
        return {
            ext: "flv",
            mime: "video/x-flv"
        };
    }
    if (checkString("IMPM")) {
        return {
            ext: "it",
            mime: "audio/x-it"
        };
    }
    if (checkString("-lh0-", {
        offset: 2
    }) || checkString("-lh1-", {
        offset: 2
    }) || checkString("-lh2-", {
        offset: 2
    }) || checkString("-lh3-", {
        offset: 2
    }) || checkString("-lh4-", {
        offset: 2
    }) || checkString("-lh5-", {
        offset: 2
    }) || checkString("-lh6-", {
        offset: 2
    }) || checkString("-lh7-", {
        offset: 2
    }) || checkString("-lzs-", {
        offset: 2
    }) || checkString("-lz4-", {
        offset: 2
    }) || checkString("-lz5-", {
        offset: 2
    }) || checkString("-lhd-", {
        offset: 2
    })) {
        return {
            ext: "lzh",
            mime: "application/x-lzh-compressed"
        };
    }
    if (check2([
        0,
        0,
        1,
        186
    ])) {
        if (check2([
            33
        ], {
            offset: 4,
            mask: [
                241
            ]
        })) {
            return {
                ext: "mpg",
                mime: "video/MP1S"
            };
        }
        if (check2([
            68
        ], {
            offset: 4,
            mask: [
                196
            ]
        })) {
            return {
                ext: "mpg",
                mime: "video/MP2P"
            };
        }
    }
    if (checkString("ITSF")) {
        return {
            ext: "chm",
            mime: "application/vnd.ms-htmlhelp"
        };
    }
    if (check2([
        253,
        55,
        122,
        88,
        90,
        0
    ])) {
        return {
            ext: "xz",
            mime: "application/x-xz"
        };
    }
    if (checkString("<?xml ")) {
        return {
            ext: "xml",
            mime: "application/xml"
        };
    }
    if (check2([
        55,
        122,
        188,
        175,
        39,
        28
    ])) {
        return {
            ext: "7z",
            mime: "application/x-7z-compressed"
        };
    }
    if (check2([
        82,
        97,
        114,
        33,
        26,
        7
    ]) && (buffer[6] === 0 || buffer[6] === 1)) {
        return {
            ext: "rar",
            mime: "application/x-rar-compressed"
        };
    }
    if (checkString("solid ")) {
        return {
            ext: "stl",
            mime: "model/stl"
        };
    }
    if (checkString("BLENDER")) {
        return {
            ext: "blend",
            mime: "application/x-blender"
        };
    }
    if (checkString("!<arch>")) {
        await tokenizer.ignore(8);
        const str3 = await tokenizer.readToken(new Token.StringType(13, "ascii"));
        if (str3 === "debian-binary") {
            return {
                ext: "deb",
                mime: "application/x-deb"
            };
        }
        return {
            ext: "ar",
            mime: "application/x-unix-archive"
        };
    }
    if (check2([
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10
    ])) {
        await tokenizer.ignore(8);
        async function readChunkHeader() {
            return {
                length: await tokenizer.readToken(Token.INT32_BE),
                type: await tokenizer.readToken(new Token.StringType(4, "binary"))
            };
        }
        do {
            const chunk = await readChunkHeader();
            if (chunk.length < 0) {
                return;
            }
            switch(chunk.type){
                case "IDAT":
                    return {
                        ext: "png",
                        mime: "image/png"
                    };
                case "acTL":
                    return {
                        ext: "apng",
                        mime: "image/apng"
                    };
                default:
                    await tokenizer.ignore(chunk.length + 4);
            }
        }while (tokenizer.position + 8 < tokenizer.fileInfo.size)
        return {
            ext: "png",
            mime: "image/png"
        };
    }
    if (check2([
        65,
        82,
        82,
        79,
        87,
        49,
        0,
        0
    ])) {
        return {
            ext: "arrow",
            mime: "application/x-apache-arrow"
        };
    }
    if (check2([
        103,
        108,
        84,
        70,
        2,
        0,
        0,
        0
    ])) {
        return {
            ext: "glb",
            mime: "model/gltf-binary"
        };
    }
    if (check2([
        102,
        114,
        101,
        101
    ], {
        offset: 4
    }) || check2([
        109,
        100,
        97,
        116
    ], {
        offset: 4
    }) || check2([
        109,
        111,
        111,
        118
    ], {
        offset: 4
    }) || check2([
        119,
        105,
        100,
        101
    ], {
        offset: 4
    })) {
        return {
            ext: "mov",
            mime: "video/quicktime"
        };
    }
    if (check2([
        73,
        73,
        82,
        79,
        8,
        0,
        0,
        0,
        24
    ])) {
        return {
            ext: "orf",
            mime: "image/x-olympus-orf"
        };
    }
    if (checkString("gimp xcf ")) {
        return {
            ext: "xcf",
            mime: "image/x-xcf"
        };
    }
    if (check2([
        73,
        73,
        85,
        0,
        24,
        0,
        0,
        0,
        136,
        231,
        116,
        216
    ])) {
        return {
            ext: "rw2",
            mime: "image/x-panasonic-rw2"
        };
    }
    if (check2([
        48,
        38,
        178,
        117,
        142,
        102,
        207,
        17,
        166,
        217
    ])) {
        async function readHeader() {
            const guid2 = Buffer.alloc(16);
            await tokenizer.readBuffer(guid2);
            return {
                id: guid2,
                size: Number(await tokenizer.readToken(Token.UINT64_LE))
            };
        }
        await tokenizer.ignore(30);
        while(tokenizer.position + 24 < tokenizer.fileInfo.size){
            const header = await readHeader();
            let payload = header.size - 24;
            if (_check(header.id, [
                145,
                7,
                220,
                183,
                183,
                169,
                207,
                17,
                142,
                230,
                0,
                192,
                12,
                32,
                83,
                101
            ])) {
                const typeId = Buffer.alloc(16);
                payload -= await tokenizer.readBuffer(typeId);
                if (_check(typeId, [
                    64,
                    158,
                    105,
                    248,
                    77,
                    91,
                    207,
                    17,
                    168,
                    253,
                    0,
                    128,
                    95,
                    92,
                    68,
                    43
                ])) {
                    return {
                        ext: "asf",
                        mime: "audio/x-ms-asf"
                    };
                }
                if (_check(typeId, [
                    192,
                    239,
                    25,
                    188,
                    77,
                    91,
                    207,
                    17,
                    168,
                    253,
                    0,
                    128,
                    95,
                    92,
                    68,
                    43
                ])) {
                    return {
                        ext: "asf",
                        mime: "video/x-ms-asf"
                    };
                }
                break;
            }
            await tokenizer.ignore(payload);
        }
        return {
            ext: "asf",
            mime: "application/vnd.ms-asf"
        };
    }
    if (check2([
        171,
        75,
        84,
        88,
        32,
        49,
        49,
        187,
        13,
        10,
        26,
        10
    ])) {
        return {
            ext: "ktx",
            mime: "image/ktx"
        };
    }
    if ((check2([
        126,
        16,
        4
    ]) || check2([
        126,
        24,
        4
    ])) && check2([
        48,
        77,
        73,
        69
    ], {
        offset: 4
    })) {
        return {
            ext: "mie",
            mime: "application/x-mie"
        };
    }
    if (check2([
        39,
        10,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ], {
        offset: 2
    })) {
        return {
            ext: "shp",
            mime: "application/x-esri-shape"
        };
    }
    if (check2([
        0,
        0,
        0,
        12,
        106,
        80,
        32,
        32,
        13,
        10,
        135,
        10
    ])) {
        await tokenizer.ignore(20);
        const type2 = await tokenizer.readToken(new Token.StringType(4, "ascii"));
        switch(type2){
            case "jp2 ":
                return {
                    ext: "jp2",
                    mime: "image/jp2"
                };
            case "jpx ":
                return {
                    ext: "jpx",
                    mime: "image/jpx"
                };
            case "jpm ":
                return {
                    ext: "jpm",
                    mime: "image/jpm"
                };
            case "mjp2":
                return {
                    ext: "mj2",
                    mime: "image/mj2"
                };
            default:
                return;
        }
    }
    if (check2([
        255,
        10
    ]) || check2([
        0,
        0,
        0,
        12,
        74,
        88,
        76,
        32,
        13,
        10,
        135,
        10
    ])) {
        return {
            ext: "jxl",
            mime: "image/jxl"
        };
    }
    if (check2([
        0,
        0,
        1,
        186
    ]) || check2([
        0,
        0,
        1,
        179
    ])) {
        return {
            ext: "mpg",
            mime: "video/mpeg"
        };
    }
    if (check2([
        0,
        1,
        0,
        0,
        0
    ])) {
        return {
            ext: "ttf",
            mime: "font/ttf"
        };
    }
    if (check2([
        0,
        0,
        1,
        0
    ])) {
        return {
            ext: "ico",
            mime: "image/x-icon"
        };
    }
    if (check2([
        0,
        0,
        2,
        0
    ])) {
        return {
            ext: "cur",
            mime: "image/x-icon"
        };
    }
    if (check2([
        208,
        207,
        17,
        224,
        161,
        177,
        26,
        225
    ])) {
        return {
            ext: "cfb",
            mime: "application/x-cfb"
        };
    }
    await tokenizer.peekBuffer(buffer, {
        length: Math.min(256, tokenizer.fileInfo.size),
        mayBeLess: true
    });
    if (checkString("BEGIN:")) {
        if (checkString("VCARD", {
            offset: 6
        })) {
            return {
                ext: "vcf",
                mime: "text/vcard"
            };
        }
        if (checkString("VCALENDAR", {
            offset: 6
        })) {
            return {
                ext: "ics",
                mime: "text/calendar"
            };
        }
    }
    if (checkString("FUJIFILMCCD-RAW")) {
        return {
            ext: "raf",
            mime: "image/x-fujifilm-raf"
        };
    }
    if (checkString("Extended Module:")) {
        return {
            ext: "xm",
            mime: "audio/x-xm"
        };
    }
    if (checkString("Creative Voice File")) {
        return {
            ext: "voc",
            mime: "audio/x-voc"
        };
    }
    if (check2([
        4,
        0,
        0,
        0
    ]) && buffer.length >= 16) {
        const jsonSize = buffer.readUInt32LE(12);
        if (jsonSize > 12 && buffer.length >= jsonSize + 16) {
            try {
                const header = buffer.slice(16, jsonSize + 16).toString();
                const json2 = JSON.parse(header);
                if (json2.files) {
                    return {
                        ext: "asar",
                        mime: "application/x-asar"
                    };
                }
            } catch (_2) {}
        }
    }
    if (check2([
        6,
        14,
        43,
        52,
        2,
        5,
        1,
        1,
        13,
        1,
        2,
        1,
        1,
        2
    ])) {
        return {
            ext: "mxf",
            mime: "application/mxf"
        };
    }
    if (checkString("SCRM", {
        offset: 44
    })) {
        return {
            ext: "s3m",
            mime: "audio/x-s3m"
        };
    }
    if (check2([
        71
    ], {
        offset: 4
    }) && (check2([
        71
    ], {
        offset: 192
    }) || check2([
        71
    ], {
        offset: 196
    }))) {
        return {
            ext: "mts",
            mime: "video/mp2t"
        };
    }
    if (check2([
        66,
        79,
        79,
        75,
        77,
        79,
        66,
        73
    ], {
        offset: 60
    })) {
        return {
            ext: "mobi",
            mime: "application/x-mobipocket-ebook"
        };
    }
    if (check2([
        68,
        73,
        67,
        77
    ], {
        offset: 128
    })) {
        return {
            ext: "dcm",
            mime: "application/dicom"
        };
    }
    if (check2([
        76,
        0,
        0,
        0,
        1,
        20,
        2,
        0,
        0,
        0,
        0,
        0,
        192,
        0,
        0,
        0,
        0,
        0,
        0,
        70
    ])) {
        return {
            ext: "lnk",
            mime: "application/x.ms.shortcut"
        };
    }
    if (check2([
        98,
        111,
        111,
        107,
        0,
        0,
        0,
        0,
        109,
        97,
        114,
        107,
        0,
        0,
        0,
        0
    ])) {
        return {
            ext: "alias",
            mime: "application/x.apple.alias"
        };
    }
    if (check2([
        76,
        80
    ], {
        offset: 34
    }) && (check2([
        0,
        0,
        1
    ], {
        offset: 8
    }) || check2([
        1,
        0,
        2
    ], {
        offset: 8
    }) || check2([
        2,
        0,
        2
    ], {
        offset: 8
    }))) {
        return {
            ext: "eot",
            mime: "application/vnd.ms-fontobject"
        };
    }
    if (check2([
        6,
        6,
        237,
        245,
        216,
        29,
        70,
        229,
        189,
        49,
        239,
        231,
        254,
        116,
        183,
        29
    ])) {
        return {
            ext: "indd",
            mime: "application/x-indesign"
        };
    }
    await tokenizer.peekBuffer(buffer, {
        length: Math.min(512, tokenizer.fileInfo.size),
        mayBeLess: true
    });
    if (tarHeaderChecksumMatches(buffer)) {
        return {
            ext: "tar",
            mime: "application/x-tar"
        };
    }
    if (check2([
        255,
        254,
        255,
        14,
        83,
        0,
        107,
        0,
        101,
        0,
        116,
        0,
        99,
        0,
        104,
        0,
        85,
        0,
        112,
        0,
        32,
        0,
        77,
        0,
        111,
        0,
        100,
        0,
        101,
        0,
        108,
        0
    ])) {
        return {
            ext: "skp",
            mime: "application/vnd.sketchup.skp"
        };
    }
    if (checkString("-----BEGIN PGP MESSAGE-----")) {
        return {
            ext: "pgp",
            mime: "application/pgp-encrypted"
        };
    }
    if (buffer.length >= 2 && check2([
        255,
        224
    ], {
        offset: 0,
        mask: [
            255,
            224
        ]
    })) {
        if (check2([
            16
        ], {
            offset: 1,
            mask: [
                22
            ]
        })) {
            if (check2([
                8
            ], {
                offset: 1,
                mask: [
                    8
                ]
            })) {
                return {
                    ext: "aac",
                    mime: "audio/aac"
                };
            }
            return {
                ext: "aac",
                mime: "audio/aac"
            };
        }
        if (check2([
            2
        ], {
            offset: 1,
            mask: [
                6
            ]
        })) {
            return {
                ext: "mp3",
                mime: "audio/mpeg"
            };
        }
        if (check2([
            4
        ], {
            offset: 1,
            mask: [
                6
            ]
        })) {
            return {
                ext: "mp2",
                mime: "audio/mpeg"
            };
        }
        if (check2([
            6
        ], {
            offset: 1,
            mask: [
                6
            ]
        })) {
            return {
                ext: "mp1",
                mime: "audio/mpeg"
            };
        }
    }
}
var stream = (readableStream)=>new Promise((resolve, reject)=>{
        const stream = eval("require")("stream");
        readableStream.on("error", reject);
        readableStream.once("readable", async ()=>{
            const pass = new stream.PassThrough();
            let outputStream;
            if (stream.pipeline) {
                outputStream = stream.pipeline(readableStream, pass, ()=>{});
            } else {
                outputStream = readableStream.pipe(pass);
            }
            const chunk = readableStream.read(minimumBytes) || readableStream.read() || Buffer.alloc(0);
            try {
                const fileType3 = await fromBuffer(chunk);
                pass.fileType = fileType3;
            } catch (error3) {
                reject(error3);
            }
            resolve(outputStream);
        });
    });
var fileType = {
    fromStream,
    fromTokenizer,
    fromBuffer,
    stream
};
Object.defineProperty(fileType, "extensions", {
    get () {
        return new Set(supported.extensions);
    }
});
Object.defineProperty(fileType, "mimeTypes", {
    get () {
        return new Set(supported.mimeTypes);
    }
});
module.exports = fileType;

return module.exports;
}
