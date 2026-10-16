"use strict";
require.d(exports, {
    O2: ()=>i,
    sh: ()=>a,
    sk: ()=>s
});
var n = require("./module-68503.js");
(()=>{
    const e = globalThis.Intl?.Segmenter;
    e && new e(void 0, {
        granularity: "grapheme"
    });
})();
function s(e) {
    const t = (0, n.sh)(e.conversationId);
    if ("subagent" === e.kind && e.parentConversationId) {
        const r = (0, n.sh)(e.parentConversationId);
        return `${n.O2}/${r}/subagents/${t}.${e.ext}`;
    }
    return `${n.O2}/${t}/${t}.${e.ext}`;
}
var o;
!function(e) {
    e.INTERNAL = "INTERNAL", e.EXTERNAL = "EXTERNAL", e.NO_PREAMBLE = "NO_PREAMBLE";
}(o || (o = {}));
"function" == typeof SuppressedError && SuppressedError;
const i = n.O2, a = n.sh;
function c(e, t) {
    return t instanceof Uint8Array ? {
        __type: "Uint8Array",
        hex: (r = t, Array.from(r).map((e)=>e.toString(16).padStart(2, "0")).join(""))
    } : "bigint" == typeof t ? t.toString() : t;
    var r;
}
function l(e, t) {
    if (t && "object" == typeof t && "Uint8Array" === t.__type && "string" == typeof t.hex) {
        return `[Binary data omitted from transcript: ${t.hex.length / 2} bytes]`;
    }
    return t;
}
const u = new TextEncoder, d = new TextDecoder;
new class {
    serialize(e) {
        const t = JSON.stringify(e, c);
        return u.encode(t);
    }
    deserialize(e) {
        const t = d.decode(e);
        return t.includes('"__type":"Uint8Array"') ? JSON.parse(t, l) : JSON.parse(t);
    }
};
