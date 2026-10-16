import { h } from "./tslib.es6.js";
function Pb(e) {
    const t = [];
    typeof e == "number" && t.push("code/timeOrigin", e);
    function n(i, a) {
        t.push(i, a?.startTime ?? Date.now());
    }
    function r() {
        const i = [];
        for(let a = 0; a < t.length; a += 2)i.push({
            name: t[a],
            startTime: t[a + 1]
        });
        return i;
    }
    function s(i) {
        for(let a = t.length - 2; a >= 0; a -= 2)t[a] === i && t.splice(a, 2);
    }
    return {
        mark: n,
        getMarks: r,
        clearMarks: s
    };
}
function DLe() {
    if (typeof performance == "object" && typeof performance.mark == "function" && !performance.nodeTiming) {
        if (typeof performance.timeOrigin != "number" && !performance.timing) return Pb();
        {
            const e = new Map;
            return {
                mark (t, n) {
                    if (!e.has(t)) {
                        const [r] = performance.getEntriesByName(t, "mark");
                        r && e.set(t, r.startTime);
                    }
                    e.has(t) && performance.clearMarks(t), performance.mark(t, n);
                },
                clearMarks (t) {
                    e.delete(t), performance.clearMarks(t);
                },
                getMarks () {
                    let t = performance.timeOrigin;
                    typeof t != "number" && (t = performance.timing.navigationStart || performance.timing.redirectStart || performance.timing.fetchStart);
                    const n = [];
                    for (const [s, i] of e)n.push({
                        name: s,
                        startTime: i
                    });
                    for (const s of performance.getEntriesByType("mark"))n.push({
                        name: s.name,
                        startTime: s.startTime
                    });
                    n.sort((s, i)=>s.startTime - i.startTime);
                    const r = [
                        {
                            name: "code/timeOrigin",
                            startTime: Math.round(t)
                        }
                    ];
                    for (const s of n)r.push({
                        name: s.name,
                        startTime: Math.round(t + s.startTime)
                    });
                    return r;
                }
            };
        }
    } else if (typeof process == "object") {
        const e = performance?.timeOrigin;
        return Pb(e);
    } else return console.trace("perf-util loaded in UNKNOWN environment"), Pb();
}
function OLe(e) {
    return e.MonacoPerformanceMarks || (e.MonacoPerformanceMarks = DLe()), e.MonacoPerformanceMarks;
}
var yv, At, Nb, wv;
export { At, DLe, Nb, OLe, Pb, wv, yv };
var __wakaru_sa_initialized = false;
export function sa() {
if (__wakaru_sa_initialized) return;
__wakaru_sa_initialized = true;
"use strict";
h(), yv = OLe(globalThis), At = yv.mark, Nb = yv.getMarks, wv = yv.clearMarks;

}
