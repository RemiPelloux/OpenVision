import { a } from "./business-error.js";
function R2({ sink: e, source: t, host: r, onError: n }) {
    let o = crypto.randomUUID(), i, s, c = r;
    return {
        get fid () {
            return o;
        },
        track (l) {
            try {
                e.track({
                    catalogVersion: s?.catalogVersion,
                    entrypoint: i,
                    fid: o,
                    hostApp: c?.app,
                    hostAppVersion: c?.appVersion,
                    hostClient: c?.client,
                    hostPlatform: c?.platform,
                    packageVersion: N2,
                    personalized: s?.personalized,
                    schemaVersion: 1,
                    source: t,
                    ...l
                });
            } catch (m) {
                n?.(m);
            }
        },
        startJourney (l) {
            o = l?.fid ?? crypto.randomUUID(), i = l?.entrypoint;
        },
        setCatalogContext (l) {
            s = l;
        },
        setHostContext (l) {
            c = l;
        }
    };
}
var N2;
export { N2, R2 };
var __wakaru_EV_initialized = false;
export function EV() {
if (__wakaru_EV_initialized) return;
__wakaru_EV_initialized = true;
N2 = "3.56.2", a(R2, "createCommerceEventTracker");

}
