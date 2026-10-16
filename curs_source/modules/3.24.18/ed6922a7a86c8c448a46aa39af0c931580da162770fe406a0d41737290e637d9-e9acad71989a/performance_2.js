import { x } from "./tslib.es6.js";
var xwe;
export { xwe };
var __wakaru_aes_initialized = false;
export function aes() {
if (__wakaru_aes_initialized) return;
__wakaru_aes_initialized = true;
"use strict";
x(), ((e)=>{
    const t = {
        total: 0,
        min: Number.MAX_VALUE,
        max: 0
    }, n = {
        ...t
    }, i = {
        ...t
    }, r = {
        ...t
    };
    let s = 0, o;
    ((N)=>{
        N[N.Before = 0] = "Before", N[N.InProgress = 1] = "InProgress", N[N.Finished = 2] = "Finished";
    })(o || (o = {}));
    const a = {
        keydown: 0,
        input: 0,
        render: 0
    };
    function c() {
        T(), (a.keydown !== 0 || a.input !== 0 || a.render !== 0) && A(), performance.mark("inputlatency/start"), performance.mark("keydown/start"), a.keydown = 1, queueMicrotask(l);
    }
    e.onKeyDown = c;
    function l() {
        a.keydown === 1 && (performance.mark("keydown/end"), a.keydown = 2);
    }
    function u() {
        performance.mark("input/start"), a.input = 1, y();
    }
    e.onBeforeInput = u;
    function h() {
        a.input === 0 && u(), queueMicrotask(p);
    }
    e.onInput = h;
    function p() {
        a.input === 1 && (performance.mark("input/end"), a.input = 2);
    }
    function g() {
        T();
    }
    e.onKeyUp = g;
    function f() {
        T();
    }
    e.onSelectionChange = f;
    function v() {
        a.keydown === 2 && a.input === 2 && a.render === 0 && (performance.mark("render/start"), a.render = 1, queueMicrotask(b), y());
    }
    e.onRenderStart = v;
    function b() {
        a.render === 1 && (performance.mark("render/end"), a.render = 2);
    }
    function y() {
        setTimeout(T);
    }
    function T() {
        a.keydown === 2 && a.input === 2 && a.render === 2 && (performance.mark("inputlatency/end"), performance.measure("keydown", "keydown/start", "keydown/end"), performance.measure("input", "input/start", "input/end"), performance.measure("render", "render/start", "render/end"), performance.measure("inputlatency", "inputlatency/start", "inputlatency/end"), E("keydown", t), E("input", n), E("render", i), E("inputlatency", r), s++, A());
    }
    function E(N, O) {
        const F = performance.getEntriesByName(N)[0].duration;
        O.total += F, O.min = Math.min(O.min, F), O.max = Math.max(O.max, F);
    }
    function A() {
        performance.clearMarks("keydown/start"), performance.clearMarks("keydown/end"), performance.clearMarks("input/start"), performance.clearMarks("input/end"), performance.clearMarks("render/start"), performance.clearMarks("render/end"), performance.clearMarks("inputlatency/start"), performance.clearMarks("inputlatency/end"), performance.clearMeasures("keydown"), performance.clearMeasures("input"), performance.clearMeasures("render"), performance.clearMeasures("inputlatency"), a.keydown = 0, a.input = 0, a.render = 0;
    }
    function R() {
        if (s === 0) return;
        const N = {
            keydown: D(t),
            input: D(n),
            render: D(i),
            total: D(r),
            sampleCount: s
        };
        return P(t), P(n), P(i), P(r), s = 0, N;
    }
    e.getAndClearMeasurements = R;
    function D(N) {
        return {
            average: N.total / s,
            max: N.max,
            min: N.min
        };
    }
    function P(N) {
        N.total = 0, N.min = Number.MAX_VALUE, N.max = 0;
    }
})(xwe || (xwe = {}));

}
