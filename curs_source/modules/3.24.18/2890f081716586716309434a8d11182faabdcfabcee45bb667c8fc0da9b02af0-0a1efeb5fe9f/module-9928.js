"use strict";
require.r(exports), require.d(exports, {
    default: ()=>i
});
var n = require("./module-1182.js");
function a(e) {
    return "number" == typeof e ? e : e instanceof Uint8Array ? e[0] : "string" == typeof e[0] ? parseInt(e[0]) : e[0];
}
function i() {
    return {
        mime: "image/tiff",
        encode: (e)=>{
            const t = n.encodeImage(e.data, e.width, e.height);
            return Buffer.from(t);
        },
        decode: (e)=>{
            const t = n.decode(e), r = t[0];
            if (!r) throw new Error("No page found in TIFF");
            if (!r.t256) throw new Error("No image width found in TIFF");
            if (!r.t257) throw new Error("No image height found in TIFF");
            t.forEach((t)=>{
                n.decodeImage(e, t);
            });
            const i = n.toRGBA8(r);
            return {
                data: Buffer.from(i),
                width: a(r.t256),
                height: a(r.t257)
            };
        }
    };
}
