import { a } from "./business-error.js";
import { fd, pd } from "./i18next.js";
import { T1, v6 } from "./index_5.js";
import { Gd, M1 } from "./initReactI18next.js";
import { JF, nc, tw } from "./languages.js";
async function O1(e, t) {
    const r = Array.isArray(t) ? t : [
        t
    ], n = await Promise.all(r.map((o)=>typeof o == "function" ? o(e) : Promise.resolve(o)));
    return Object.assign({}, ...n);
}
async function D1(e, t, r, { bindGlobalReactInstance: n = !0, renderEnglishFromKeys: o = !1 } = {}) {
    const i = r ?? pd();
    i.use(new T1({
        memoizeFallback: !0
    })), n && i.use(M1);
    const s = await tw(e), c = o && F1.has(s), l = c ? {} : await O1(s, t);
    return await i.init({
        lng: s,
        fallbackLng: "en",
        lowerCaseLng: !0,
        supportedLngs: c ? nc : L1,
        interpolation: {
            escapeValue: !1,
            prefix: "{",
            suffix: "}"
        },
        keySeparator: !1,
        nsSeparator: !1,
        react: {
            useSuspense: !0
        },
        resources: {
            [s]: {
                translation: l
            }
        }
    }), i;
}
var L1, F1;
export { D1, F1, L1, O1 };
var __wakaru_b6_initialized = false;
export function b6() {
if (__wakaru_b6_initialized) return;
__wakaru_b6_initialized = true;
JF(), fd(), v6(), Gd(), L1 = nc.filter((e)=>e !== "en-gb"), F1 = new Set([
    "en",
    "en-gb"
]), a(O1, "resolveResources"), a(D1, "initI18n");

}
