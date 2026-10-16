import { i } from "./plugin-brand-icon.js";
function $nr(r) {
    return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Inr(r) {
    return $nr(r.replace(/^\/+/, "").replace(/\/+$/, ""));
}
function Nnr(r) {
    const e = [];
    for (const a of r.replace(/\\/g, "/").split("/"))if (!(a === "" || a === ".")) {
        if (a === "..") {
            e.pop();
            continue;
        }
        e.push(a);
    }
    return e.join("/");
}
function Mnr(r) {
    const e = Nnr(r);
    return Lnr.test(e) || Dnr.test(e) || Fnr.test(e);
}
var Rnr, Pnr, jnr, Lnr, Dnr, Fnr;
export { $nr, Dnr, Fnr, Inr, Lnr, Mnr, Nnr, Pnr, Rnr, jnr };
var __wakaru_Tki_initialized = false;
export function Tki() {
if (__wakaru_Tki_initialized) return;
__wakaru_Tki_initialized = true;
"use strict";
Rnr = "user|automation", Pnr = "/cursor/stores", jnr = "canvases", Lnr = /(?:^|\/)\.cursor\/projects\/[^/]+\/canvases\/[^/]+\.canvas\.tsx$/i, i($nr, "escapeRegExp"), i(Inr, "anchoredRoot"), Dnr = new RegExp(`^${Inr(Pnr)}/(?:${Rnr})/${jnr}/(?:[^/]+/)?[^/]+\\.canvas\\.tsx$`), Fnr = /(?:^|\/)[^/]+\/files\/canvases\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/source\.canvas\.tsx$/i, i(Nnr, "normalizeCanvasPath"), i(Mnr, "isManagedCanvasPath");

}
