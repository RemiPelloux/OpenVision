"use strict";
function n(e) {
    const t = (new TextEncoder).encode(e);
    let r = "";
    for (const e of t)r += String.fromCharCode(e);
    return ("function" == typeof btoa ? btoa(r) : Buffer.from(t).toString("base64")).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/u, "");
}
function o(e) {
    const t = e.padEnd(4 * Math.ceil(e.length / 4), "=").replace(/-/g, "+").replace(/_/g, "/"), r = "function" == typeof atob ? atob(t) : Buffer.from(t, "base64").toString("binary"), n = Uint8Array.from(r, (e)=>e.charCodeAt(0));
    return (new TextDecoder).decode(n);
}
require.d(exports, {
    $: ()=>n,
    Z: ()=>o
});
