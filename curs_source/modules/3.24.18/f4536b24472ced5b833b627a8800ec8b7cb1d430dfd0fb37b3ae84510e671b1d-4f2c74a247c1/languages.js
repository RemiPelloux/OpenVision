import { a } from "./business-error.js";
function Yu(e) {
    return ew(e) ?? Xu;
}
function ew(e) {
    const t = e.toLowerCase(), r = oc[t] ?? t;
    if (Zu.has(r)) return r;
    const [n = "", o] = r.split("-");
    if (!n) return null;
    const i = o?.length === 4 ? oc[`${n}-${o}`] : void 0;
    if (i !== void 0) return i;
    const s = oc[n] ?? n;
    return Zu.has(s) ? s : null;
}
async function tw(e) {
    if (typeof e == "string") return Yu(e);
    const t = Array.isArray(e) ? e : [
        e
    ];
    for (const r of t){
        const n = await r();
        if (n != null && n !== "") return Yu(n);
    }
    return Xu;
}
var nc, Xu, Zu, oc;
export { Xu, Yu, Zu, ew, nc, oc, tw };
var __wakaru_JF_initialized = false;
export function JF() {
if (__wakaru_JF_initialized) return;
__wakaru_JF_initialized = true;
nc = [
    "ar",
    "ar-x-fm",
    "bg",
    "bn",
    "ca",
    "cs",
    "da",
    "de",
    "el",
    "en",
    "en-gb",
    "en-ss",
    "en-xx",
    "es",
    "fa",
    "fi",
    "fil",
    "fr",
    "gu",
    "he",
    "hi",
    "hr",
    "hu",
    "id",
    "it",
    "ja",
    "kn",
    "ko",
    "mr",
    "msa",
    "nl",
    "no",
    "pl",
    "pt",
    "ro",
    "ru",
    "sk",
    "sr",
    "sv",
    "ta",
    "th",
    "tr",
    "uk",
    "vi",
    "zh-cn",
    "zh-tw"
], Xu = "en", Zu = new Set(nc), oc = {
    ms: "msa",
    nb: "no",
    tl: "fil",
    zh: "zh-cn",
    "zh-hans": "zh-cn",
    "zh-hant": "zh-tw",
    "zh-hk": "zh-tw"
}, a(Yu, "resolveLanguage"), a(ew, "tryResolveLanguage"), a(tw, "resolveLanguageInput");

}
