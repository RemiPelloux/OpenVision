var __wakaru_require_file_type_cache;
export function require_file_type() {
if (__wakaru_require_file_type_cache) return __wakaru_require_file_type_cache.exports;
var exports = {};
var module = { exports: exports };
__wakaru_require_file_type_cache = module;
"use strict";
var toBytes = (s3)=>[
        ...s3
    ].map((c)=>c.charCodeAt(0));
var xpiZipFilename = toBytes("META-INF/mozilla.rsa");
var oxmlContentTypes = toBytes("[Content_Types].xml");
var oxmlRels = toBytes("_rels/.rels");
function readUInt64LE(buf, offset = 0) {
    let n = buf[offset];
    let mul = 1;
    let i = 0;
    while(++i < 8){
        mul *= 256;
        n += buf[offset + i] * mul;
    }
    return n;
}
var fileType = (input)=>{
    if (!(input instanceof Uint8Array || input instanceof ArrayBuffer || Buffer.isBuffer(input))) {
        throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof input}\``);
    }
    const buf = input instanceof Uint8Array ? input : new Uint8Array(input);
    if (!(buf && buf.length > 1)) {
        return null;
    }
    const check2 = (header, options2)=>{
        options2 = Object.assign({
            offset: 0
        }, options2);
        for(let i = 0; i < header.length; i++){
            if (options2.mask) {
                if (header[i] !== (options2.mask[i] & buf[i + options2.offset])) {
                    return false;
                }
            } else if (header[i] !== buf[i + options2.offset]) {
                return false;
            }
        }
        return true;
    };
    const checkString = (header, options2)=>check2(toBytes(header), options2);
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
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10
    ])) {
        return {
            ext: "png",
            mime: "image/png"
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
    if (check2([
        87,
        69,
        66,
        80
    ], {
        offset: 8
    })) {
        return {
            ext: "webp",
            mime: "image/webp"
        };
    }
    if (check2([
        70,
        76,
        73,
        70
    ])) {
        return {
            ext: "flif",
            mime: "image/flif"
        };
    }
    if ((check2([
        73,
        73,
        42,
        0
    ]) || check2([
        77,
        77,
        0,
        42
    ])) && check2([
        67,
        82
    ], {
        offset: 8
    })) {
        return {
            ext: "cr2",
            mime: "image/x-canon-cr2"
        };
    }
    if (check2([
        73,
        73,
        42,
        0
    ]) || check2([
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
        56,
        66,
        80,
        83
    ])) {
        return {
            ext: "psd",
            mime: "image/vnd.adobe.photoshop"
        };
    }
    if (check2([
        80,
        75,
        3,
        4
    ])) {
        if (check2([
            109,
            105,
            109,
            101,
            116,
            121,
            112,
            101,
            97,
            112,
            112,
            108,
            105,
            99,
            97,
            116,
            105,
            111,
            110,
            47,
            101,
            112,
            117,
            98,
            43,
            122,
            105,
            112
        ], {
            offset: 30
        })) {
            return {
                ext: "epub",
                mime: "application/epub+zip"
            };
        }
        if (check2(xpiZipFilename, {
            offset: 30
        })) {
            return {
                ext: "xpi",
                mime: "application/x-xpinstall"
            };
        }
        if (checkString("mimetypeapplication/vnd.oasis.opendocument.text", {
            offset: 30
        })) {
            return {
                ext: "odt",
                mime: "application/vnd.oasis.opendocument.text"
            };
        }
        if (checkString("mimetypeapplication/vnd.oasis.opendocument.spreadsheet", {
            offset: 30
        })) {
            return {
                ext: "ods",
                mime: "application/vnd.oasis.opendocument.spreadsheet"
            };
        }
        if (checkString("mimetypeapplication/vnd.oasis.opendocument.presentation", {
            offset: 30
        })) {
            return {
                ext: "odp",
                mime: "application/vnd.oasis.opendocument.presentation"
            };
        }
        const findNextZipHeaderIndex = (arr, startAt = 0)=>arr.findIndex((el, i, arr2)=>i >= startAt && arr2[i] === 80 && arr2[i + 1] === 75 && arr2[i + 2] === 3 && arr2[i + 3] === 4);
        let zipHeaderIndex = 0;
        let oxmlFound = false;
        let type2 = null;
        do {
            const offset = zipHeaderIndex + 30;
            if (!oxmlFound) {
                oxmlFound = check2(oxmlContentTypes, {
                    offset
                }) || check2(oxmlRels, {
                    offset
                });
            }
            if (!type2) {
                if (checkString("word/", {
                    offset
                })) {
                    type2 = {
                        ext: "docx",
                        mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    };
                } else if (checkString("ppt/", {
                    offset
                })) {
                    type2 = {
                        ext: "pptx",
                        mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                    };
                } else if (checkString("xl/", {
                    offset
                })) {
                    type2 = {
                        ext: "xlsx",
                        mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    };
                }
            }
            if (oxmlFound && type2) {
                return type2;
            }
            zipHeaderIndex = findNextZipHeaderIndex(buf, offset);
        }while (zipHeaderIndex >= 0)
        if (type2) {
            return type2;
        }
    }
    if (check2([
        80,
        75
    ]) && (buf[2] === 3 || buf[2] === 5 || buf[2] === 7) && (buf[3] === 4 || buf[3] === 6 || buf[3] === 8)) {
        return {
            ext: "zip",
            mime: "application/zip"
        };
    }
    if (check2([
        117,
        115,
        116,
        97,
        114
    ], {
        offset: 257
    })) {
        return {
            ext: "tar",
            mime: "application/x-tar"
        };
    }
    if (check2([
        82,
        97,
        114,
        33,
        26,
        7
    ]) && (buf[6] === 0 || buf[6] === 1)) {
        return {
            ext: "rar",
            mime: "application/x-rar-compressed"
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
        120,
        1
    ])) {
        return {
            ext: "dmg",
            mime: "application/x-apple-diskimage"
        };
    }
    if (check2([
        51,
        103,
        112,
        53
    ]) || check2([
        0,
        0,
        0
    ]) && check2([
        102,
        116,
        121,
        112
    ], {
        offset: 4
    }) && (check2([
        109,
        112,
        52,
        49
    ], {
        offset: 8
    }) || check2([
        109,
        112,
        52,
        50
    ], {
        offset: 8
    }) || check2([
        105,
        115,
        111,
        109
    ], {
        offset: 8
    }) || check2([
        105,
        115,
        111,
        50
    ], {
        offset: 8
    }) || check2([
        109,
        109,
        112,
        52
    ], {
        offset: 8
    }) || check2([
        77,
        52,
        86
    ], {
        offset: 8
    }) || check2([
        100,
        97,
        115,
        104
    ], {
        offset: 8
    }))) {
        return {
            ext: "mp4",
            mime: "video/mp4"
        };
    }
    if (check2([
        77,
        84,
        104,
        100
    ])) {
        return {
            ext: "mid",
            mime: "audio/midi"
        };
    }
    if (check2([
        26,
        69,
        223,
        163
    ])) {
        const sliced = buf.subarray(4, 4 + 4096);
        const idPos = sliced.findIndex((el, i, arr)=>arr[i] === 66 && arr[i + 1] === 130);
        if (idPos !== -1) {
            const docTypePos = idPos + 3;
            const findDocType = (type2)=>[
                    ...type2
                ].every((c, i)=>sliced[docTypePos + i] === c.charCodeAt(0));
            if (findDocType("matroska")) {
                return {
                    ext: "mkv",
                    mime: "video/x-matroska"
                };
            }
            if (findDocType("webm")) {
                return {
                    ext: "webm",
                    mime: "video/webm"
                };
            }
        }
    }
    if (check2([
        0,
        0,
        0,
        20,
        102,
        116,
        121,
        112,
        113,
        116,
        32,
        32
    ]) || check2([
        102,
        114,
        101,
        101
    ], {
        offset: 4
    }) || check2([
        102,
        116,
        121,
        112,
        113,
        116,
        32,
        32
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
        let offset = 30;
        do {
            const objectSize = readUInt64LE(buf, offset + 16);
            if (check2([
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
            ], {
                offset
            })) {
                if (check2([
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
                ], {
                    offset: offset + 24
                })) {
                    return {
                        ext: "wma",
                        mime: "audio/x-ms-wma"
                    };
                }
                if (check2([
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
                ], {
                    offset: offset + 24
                })) {
                    return {
                        ext: "wmv",
                        mime: "video/x-ms-asf"
                    };
                }
                break;
            }
            offset += objectSize;
        }while (offset + 24 <= buf.length)
        return {
            ext: "asf",
            mime: "application/vnd.ms-asf"
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
        102,
        116,
        121,
        112,
        51,
        103
    ], {
        offset: 4
    })) {
        return {
            ext: "3gp",
            mime: "video/3gpp"
        };
    }
    for(let start = 0; start < 2 && start < buf.length - 16; start++){
        if (check2([
            73,
            68,
            51
        ], {
            offset: start
        }) || check2([
            255,
            226
        ], {
            offset: start,
            mask: [
                255,
                226
            ]
        })) {
            return {
                ext: "mp3",
                mime: "audio/mpeg"
            };
        }
        if (check2([
            255,
            228
        ], {
            offset: start,
            mask: [
                255,
                228
            ]
        })) {
            return {
                ext: "mp2",
                mime: "audio/mpeg"
            };
        }
        if (check2([
            255,
            248
        ], {
            offset: start,
            mask: [
                255,
                252
            ]
        })) {
            return {
                ext: "mp2",
                mime: "audio/mpeg"
            };
        }
        if (check2([
            255,
            240
        ], {
            offset: start,
            mask: [
                255,
                252
            ]
        })) {
            return {
                ext: "mp4",
                mime: "audio/mpeg"
            };
        }
    }
    if (check2([
        102,
        116,
        121,
        112,
        77,
        52,
        65
    ], {
        offset: 4
    })) {
        return {
            ext: "m4a",
            mime: "audio/mp4"
        };
    }
    if (check2([
        79,
        112,
        117,
        115,
        72,
        101,
        97,
        100
    ], {
        offset: 28
    })) {
        return {
            ext: "opus",
            mime: "audio/opus"
        };
    }
    if (check2([
        79,
        103,
        103,
        83
    ])) {
        if (check2([
            128,
            116,
            104,
            101,
            111,
            114,
            97
        ], {
            offset: 28
        })) {
            return {
                ext: "ogv",
                mime: "video/ogg"
            };
        }
        if (check2([
            1,
            118,
            105,
            100,
            101,
            111,
            0
        ], {
            offset: 28
        })) {
            return {
                ext: "ogm",
                mime: "video/ogg"
            };
        }
        if (check2([
            127,
            70,
            76,
            65,
            67
        ], {
            offset: 28
        })) {
            return {
                ext: "oga",
                mime: "audio/ogg"
            };
        }
        if (check2([
            83,
            112,
            101,
            101,
            120,
            32,
            32
        ], {
            offset: 28
        })) {
            return {
                ext: "spx",
                mime: "audio/ogg"
            };
        }
        if (check2([
            1,
            118,
            111,
            114,
            98,
            105,
            115
        ], {
            offset: 28
        })) {
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
        102,
        76,
        97,
        67
    ])) {
        return {
            ext: "flac",
            mime: "audio/x-flac"
        };
    }
    if (check2([
        77,
        65,
        67,
        32
    ])) {
        return {
            ext: "ape",
            mime: "audio/ape"
        };
    }
    if (check2([
        119,
        118,
        112,
        107
    ])) {
        return {
            ext: "wv",
            mime: "audio/wavpack"
        };
    }
    if (check2([
        35,
        33,
        65,
        77,
        82,
        10
    ])) {
        return {
            ext: "amr",
            mime: "audio/amr"
        };
    }
    if (check2([
        37,
        80,
        68,
        70
    ])) {
        return {
            ext: "pdf",
            mime: "application/pdf"
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
    if ((buf[0] === 67 || buf[0] === 70) && check2([
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
        123,
        92,
        114,
        116,
        102
    ])) {
        return {
            ext: "rtf",
            mime: "application/rtf"
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
        119,
        79,
        70,
        70
    ]) && (check2([
        0,
        1,
        0,
        0
    ], {
        offset: 4
    }) || check2([
        79,
        84,
        84,
        79
    ], {
        offset: 4
    }))) {
        return {
            ext: "woff",
            mime: "font/woff"
        };
    }
    if (check2([
        119,
        79,
        70,
        50
    ]) && (check2([
        0,
        1,
        0,
        0
    ], {
        offset: 4
    }) || check2([
        79,
        84,
        84,
        79
    ], {
        offset: 4
    }))) {
        return {
            ext: "woff2",
            mime: "font/woff2"
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
    if (check2([
        37,
        33
    ])) {
        return {
            ext: "ps",
            mime: "application/postscript"
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
    if (check2([
        83,
        81,
        76,
        105
    ])) {
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
    if (check2([
        67,
        114,
        50,
        52
    ])) {
        return {
            ext: "crx",
            mime: "application/x-google-chrome-extension"
        };
    }
    if (check2([
        77,
        83,
        67,
        70
    ]) || check2([
        73,
        83,
        99,
        40
    ])) {
        return {
            ext: "cab",
            mime: "application/vnd.ms-cab-compressed"
        };
    }
    if (check2([
        33,
        60,
        97,
        114,
        99,
        104,
        62,
        10,
        100,
        101,
        98,
        105,
        97,
        110,
        45,
        98,
        105,
        110,
        97,
        114,
        121
    ])) {
        return {
            ext: "deb",
            mime: "application/x-deb"
        };
    }
    if (check2([
        33,
        60,
        97,
        114,
        99,
        104,
        62
    ])) {
        return {
            ext: "ar",
            mime: "application/x-unix-archive"
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
        76,
        90,
        73,
        80
    ])) {
        return {
            ext: "lz",
            mime: "application/x-lzip"
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
            ext: "msi",
            mime: "application/x-msi"
        };
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
        76,
        69,
        78,
        68,
        69,
        82
    ])) {
        return {
            ext: "blend",
            mime: "application/x-blender"
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
        if (check2([
            106,
            112,
            50,
            32
        ], {
            offset: 20
        })) {
            return {
                ext: "jp2",
                mime: "image/jp2"
            };
        }
        if (check2([
            106,
            112,
            120,
            32
        ], {
            offset: 20
        })) {
            return {
                ext: "jpx",
                mime: "image/jpx"
            };
        }
        if (check2([
            106,
            112,
            109,
            32
        ], {
            offset: 20
        })) {
            return {
                ext: "jpm",
                mime: "image/jpm"
            };
        }
        if (check2([
            109,
            106,
            112,
            50
        ], {
            offset: 20
        })) {
            return {
                ext: "mj2",
                mime: "image/mj2"
            };
        }
    }
    if (check2([
        70,
        79,
        82,
        77
    ])) {
        return {
            ext: "aif",
            mime: "audio/aiff"
        };
    }
    if (checkString("<?xml ")) {
        return {
            ext: "xml",
            mime: "application/xml"
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
        102,
        116,
        121,
        112
    ], {
        offset: 4
    })) {
        if (check2([
            109,
            105,
            102,
            49
        ], {
            offset: 8
        })) {
            return {
                ext: "heic",
                mime: "image/heif"
            };
        }
        if (check2([
            109,
            115,
            102,
            49
        ], {
            offset: 8
        })) {
            return {
                ext: "heic",
                mime: "image/heif-sequence"
            };
        }
        if (check2([
            104,
            101,
            105,
            99
        ], {
            offset: 8
        }) || check2([
            104,
            101,
            105,
            120
        ], {
            offset: 8
        })) {
            return {
                ext: "heic",
                mime: "image/heic"
            };
        }
        if (check2([
            104,
            101,
            118,
            99
        ], {
            offset: 8
        }) || check2([
            104,
            101,
            118,
            120
        ], {
            offset: 8
        })) {
            return {
                ext: "heic",
                mime: "image/heic-sequence"
            };
        }
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
        77,
        80,
        43
    ])) {
        return {
            ext: "mpc",
            mime: "audio/x-musepack"
        };
    }
    if (check2([
        77,
        80,
        67,
        75
    ])) {
        return {
            ext: "mpc",
            mime: "audio/x-musepack"
        };
    }
    if (check2([
        66,
        69,
        71,
        73,
        78,
        58
    ])) {
        return {
            ext: "ics",
            mime: "text/calendar"
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
    return null;
};
module.exports = fileType;
module.exports.default = fileType;
Object.defineProperty(fileType, "minimumBytes", {
    value: 4100
});
module.exports.stream = (readableStream)=>new Promise((resolve, reject)=>{
        const stream = eval("require")("stream");
        readableStream.once("readable", ()=>{
            const pass = new stream.PassThrough();
            const chunk = readableStream.read(module.exports.minimumBytes) || readableStream.read();
            try {
                pass.fileType = fileType(chunk);
            } catch (error3) {
                reject(error3);
            }
            readableStream.unshift(chunk);
            if (stream.pipeline) {
                resolve(stream.pipeline(readableStream, pass, ()=>{}));
            } else {
                resolve(readableStream.pipe(pass));
            }
        });
    });

return module.exports;
}
