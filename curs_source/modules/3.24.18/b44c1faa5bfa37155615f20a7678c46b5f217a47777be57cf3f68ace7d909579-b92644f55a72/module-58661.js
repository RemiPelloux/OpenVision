"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.uploadToSignedUrl = async function(e) {
    const t = await n.promises.stat(e.filePath).catch(()=>{});
    if (void 0 === t) return {
        success: !1,
        fallbackUsed: !1,
        putFailure: {}
    };
    const r = (l = e.mimeType, u = t.size, {
        "Content-Type": l,
        "Content-Length": String(u)
    }), a = t.size > 0 ? {
        start: 0,
        end: t.size - 1
    } : void 0, c = {
        method: "PUT",
        body: o.Readable.toWeb((0, n.createReadStream)(e.filePath, a)),
        headers: r,
        duplex: "half"
    };
    var l, u;
    let d;
    try {
        const t = await fetch(e.putUrl, c);
        if (t.ok) return {
            success: !0,
            fallbackUsed: !1
        };
        d = await i(t);
    } catch  {
        d = {};
    }
    if (!e.postUrl || !e.postFields) return {
        success: !1,
        fallbackUsed: !1,
        putFailure: d
    };
    try {
        const t = new FormData;
        for (const [r, n] of Object.entries(e.postFields))t.append(r, n);
        t.append("file", await (0, n.openAsBlob)(e.filePath, {
            type: e.mimeType
        }), (0, s.basename)(e.filePath));
        const r = await fetch(e.postUrl, {
            method: "POST",
            body: t
        });
        return r.ok ? {
            success: !0,
            fallbackUsed: !0,
            putFailure: d
        } : {
            success: !1,
            fallbackUsed: !0,
            putFailure: d,
            postFailure: await i(r)
        };
    } catch  {
        return {
            success: !1,
            fallbackUsed: !0,
            putFailure: d,
            postFailure: {}
        };
    }
};
const n = require("./module-73024.js"), s = require("./module-76760.js"), o = require("./module-57075.js");
async function i(e) {
    let t;
    try {
        const r = (await e.text()).slice(0, 500);
        t = r.match(/<Code>([A-Za-z0-9]{1,64})<\/Code>/u)?.[1];
    } catch  {}
    return {
        httpStatus: e.status,
        ...void 0 === t ? {} : {
            s3ErrorCode: t
        }
    };
}
