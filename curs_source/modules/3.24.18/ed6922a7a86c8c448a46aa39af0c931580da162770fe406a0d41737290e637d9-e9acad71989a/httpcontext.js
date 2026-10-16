import { Q$, z_ } from "./helpers.js";
import { $u } from "./index_10.js";
import { Gce } from "./index_216.js";
import { x } from "./tslib.es6.js";
function d2o() {
    const e = Gce(), { referrer: t } = z_.document || {}, { userAgent: n } = z_.navigator || {}, i = {
        ...t && {
            Referer: t
        },
        ...n && {
            "User-Agent": n
        }
    };
    return {
        url: e,
        headers: i
    };
}
var R2o;
export { R2o, d2o };
var __wakaru_uqh_initialized = false;
export function uqh() {
if (__wakaru_uqh_initialized) return;
__wakaru_uqh_initialized = true;
x(), $u(), Q$(), R2o = ()=>({
        name: "HttpContext",
        preprocessEvent (e) {
            if (!z_.navigator && !z_.location && !z_.document) return;
            const t = d2o(), n = {
                ...t.headers,
                ...e.request?.headers
            };
            e.request = {
                ...t,
                ...e.request,
                headers: n
            };
        }
    });

}
