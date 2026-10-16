"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.uploadToSignedUrl = async function(t) {
    const e = await n.promises.stat(t.filePath).catch(()=>{});
    if (void 0 === e) return {
        success: !1,
        fallbackUsed: !1,
        putFailure: {}
    };
    const r = (c = t.mimeType, l = e.size, {
        "Content-Type": c,
        "Content-Length": String(l)
    }), a = e.size > 0 ? {
        start: 0,
        end: e.size - 1
    } : void 0, u = {
        method: "PUT",
        body: i.Readable.toWeb((0, n.createReadStream)(t.filePath, a)),
        headers: r,
        duplex: "half"
    };
    var c, l;
    let m;
    try {
        const e = await fetch(t.putUrl, u);
        if (e.ok) return {
            success: !0,
            fallbackUsed: !1
        };
        m = await o(e);
    } catch  {
        m = {};
    }
    if (!t.postUrl || !t.postFields) return {
        success: !1,
        fallbackUsed: !1,
        putFailure: m
    };
    try {
        const e = new FormData;
        for (const [r, n] of Object.entries(t.postFields))e.append(r, n);
        e.append("file", await (0, n.openAsBlob)(t.filePath, {
            type: t.mimeType
        }), (0, s.basename)(t.filePath));
        const r = await fetch(t.postUrl, {
            method: "POST",
            body: e
        });
        return r.ok ? {
            success: !0,
            fallbackUsed: !0,
            putFailure: m
        } : {
            success: !1,
            fallbackUsed: !0,
            putFailure: m,
            postFailure: await o(r)
        };
    } catch  {
        return {
            success: !1,
            fallbackUsed: !0,
            putFailure: m,
            postFailure: {}
        };
    }
};
const n = require("./module-3024.js"), s = require("./module-6760.js"), i = require("./module-7075.js");
async function o(t) {
    let e;
    try {
        const r = (await t.text()).slice(0, 500);
        e = r.match(/<Code>([A-Za-z0-9]{1,64})<\/Code>/u)?.[1];
    } catch  {}
    return {
        httpStatus: t.status,
        ...void 0 === e ? {} : {
            s3ErrorCode: e
        }
    };
}
