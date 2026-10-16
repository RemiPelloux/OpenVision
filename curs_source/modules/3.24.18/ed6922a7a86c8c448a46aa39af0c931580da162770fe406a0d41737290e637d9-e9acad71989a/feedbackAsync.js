import { z_ } from "./helpers.js";
import { QNo, u2o } from "./index_216.js";
import { _jh, h2o, vjh } from "./lazyLoadIntegration.js";
import { Pu } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
import { Vke } from "./version.js";
async function fjh(e, t) {
    const n = vjh[e], i = h2o.Sentry = h2o.Sentry || {};
    if (!n) throw new Error(`Cannot lazy load integration: ${e}`);
    const r = i[e];
    if (typeof r == "function" && !("_isShim" in r)) return r;
    const s = eS_(n), o = z_.document.createElement("script");
    o.src = s, o.crossOrigin = "anonymous", o.referrerPolicy = "strict-origin", t && o.setAttribute("nonce", t);
    const a = new Promise((h, p)=>{
        o.addEventListener("load", ()=>h()), o.addEventListener("error", p);
    }), c = z_.document.currentScript, l = z_.document.body || z_.document.head || c?.parentElement;
    if (l) l.appendChild(o);
    else throw new Error(`Could not find parent element to insert lazy-loaded ${e} script`);
    try {
        await a;
    } catch  {
        throw new Error(`Error when loading integration: ${e}`);
    }
    const u = i[e];
    if (typeof u != "function") throw new Error(`Could not load integration: ${e}`);
    return u;
}
function eS_(e) {
    const n = Pu()?.getOptions()?.cdnBaseUrl || "https://browser.sentry-cdn.com";
    return new URL(`/${Vke}/${e}.min.js`, n).toString();
}
var bjh;
export { bjh, eS_, fjh };
var __wakaru_tS__initialized = false;
export function tS_() {
if (__wakaru_tS__initialized) return;
__wakaru_tS__initialized = true;
x(), u2o(), _jh(), bjh = QNo({
    lazyLoadIntegration: fjh
});

}
