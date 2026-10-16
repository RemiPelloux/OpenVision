import { E } from "./tslib.es6.js";
var w5e;
export { w5e };
var __wakaru_uHo_initialized = false;
export function uHo() {
if (__wakaru_uHo_initialized) return;
__wakaru_uHo_initialized = true;
"use strict";
E(), ((t)=>{
    const e = {
        total: 0,
        min: Number.MAX_VALUE,
        max: 0
    }, n = {
        ...e
    }, i = {
        ...e
    }, r = {
        ...e
    };
    let s = 0, o;
    ((A)=>{
        A[A.Before = 0] = "Before", A[A.InProgress = 1] = "InProgress", A[A.Finished = 2] = "Finished";
    })(o || (o = {}));
    const a = {
        keydown: 0,
        input: 0,
        render: 0
    };
    function l() {
        y(), (a.keydown !== 0 || a.input !== 0 || a.render !== 0) && k(), performance.mark("inputlatency/start"), performance.mark("keydown/start"), a.keydown = 1, queueMicrotask(c);
    }
    t.onKeyDown = l;
    function c() {
        a.keydown === 1 && (performance.mark("keydown/end"), a.keydown = 2);
    }
    function u() {
        performance.mark("input/start"), a.input = 1, b();
    }
    t.onBeforeInput = u;
    function d() {
        a.input === 0 && u(), queueMicrotask(h);
    }
    t.onInput = d;
    function h() {
        a.input === 1 && (performance.mark("input/end"), a.input = 2);
    }
    function p() {
        y();
    }
    t.onKeyUp = p;
    function g() {
        y();
    }
    t.onSelectionChange = g;
    function f() {
        a.keydown === 2 && a.input === 2 && a.render === 0 && (performance.mark("render/start"), a.render = 1, queueMicrotask(_), b());
    }
    t.onRenderStart = f;
    function _() {
        a.render === 1 && (performance.mark("render/end"), a.render = 2);
    }
    function b() {
        setTimeout(y);
    }
    function y() {
        a.keydown === 2 && a.input === 2 && a.render === 2 && (performance.mark("inputlatency/end"), performance.measure("keydown", "keydown/start", "keydown/end"), performance.measure("input", "input/start", "input/end"), performance.measure("render", "render/start", "render/end"), performance.measure("inputlatency", "inputlatency/start", "inputlatency/end"), S("keydown", e), S("input", n), S("render", i), S("inputlatency", r), s++, k());
    }
    function S(A, P) {
        const M = performance.getEntriesByName(A)[0].duration;
        P.total += M, P.min = Math.min(P.min, M), P.max = Math.max(P.max, M);
    }
    function k() {
        performance.clearMarks("keydown/start"), performance.clearMarks("keydown/end"), performance.clearMarks("input/start"), performance.clearMarks("input/end"), performance.clearMarks("render/start"), performance.clearMarks("render/end"), performance.clearMarks("inputlatency/start"), performance.clearMarks("inputlatency/end"), performance.clearMeasures("keydown"), performance.clearMeasures("input"), performance.clearMeasures("render"), performance.clearMeasures("inputlatency"), a.keydown = 0, a.input = 0, a.render = 0;
    }
    function C() {
        if (s === 0) return;
        const A = {
            keydown: T(e),
            input: T(n),
            render: T(i),
            total: T(r),
            sampleCount: s
        };
        return I(e), I(n), I(i), I(r), s = 0, A;
    }
    t.getAndClearMeasurements = C;
    function T(A) {
        return {
            average: A.total / s,
            max: A.max,
            min: A.min
        };
    }
    function I(A) {
        A.total = 0, A.min = Number.MAX_VALUE, A.max = 0;
    }
})(w5e || (w5e = {}));

}
