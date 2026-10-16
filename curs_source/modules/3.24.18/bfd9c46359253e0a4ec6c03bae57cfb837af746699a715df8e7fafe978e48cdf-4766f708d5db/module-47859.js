"use strict";
require.d(exports, {
    a: ()=>o,
    w: ()=>s
});
const n = new Map([
    [
        "api.origin.cursor.com",
        "origin.cursor.com"
    ],
    [
        "api.origin-staging.cursor.com",
        "origin-staging.cursor.com"
    ],
    [
        "api.origin-test.cursor.com",
        "origin-test.cursor.com"
    ]
]);
function s(e) {
    if (void 0 !== e && "" !== e.trim()) try {
        const t = new URL(e), r = n.get(t.hostname) ?? t.host;
        return r.length > 0 ? r : void 0;
    } catch  {
        return;
    }
}
function o(e, t) {
    if (void 0 === t || 0 === t.length) return;
    const r = `Authorization: Basic ${(n = `x-access-token:${t}`, "undefined" != typeof Buffer ? Buffer.from(n).toString("base64") : btoa(n))}`;
    var n;
    return Object.fromEntries(e.map((e)=>[
            `http.https://${e}/.extraheader`,
            r
        ]));
}
