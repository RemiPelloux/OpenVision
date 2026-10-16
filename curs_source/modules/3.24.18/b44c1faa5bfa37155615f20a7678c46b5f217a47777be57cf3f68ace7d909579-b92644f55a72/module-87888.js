"use strict";
require.d(exports, {
    $O: ()=>A,
    $S: ()=>Z,
    Au: ()=>U,
    Be: ()=>c,
    Bj: ()=>g,
    Ct: ()=>y,
    Dl: ()=>h,
    ER: ()=>X,
    Eb: ()=>G,
    F7: ()=>P,
    FO: ()=>ie,
    Fk: ()=>W,
    Fn: ()=>p,
    G1: ()=>x,
    G8: ()=>F,
    Hi: ()=>j,
    Il: ()=>ne,
    KA: ()=>O,
    KB: ()=>C,
    Kn: ()=>R,
    LK: ()=>M,
    Mu: ()=>i,
    Ny: ()=>_,
    Pw: ()=>w,
    Rl: ()=>o,
    Tx: ()=>$,
    Uy: ()=>S,
    WN: ()=>re,
    YA: ()=>z,
    Zm: ()=>L,
    _L: ()=>q,
    _z: ()=>v,
    aC: ()=>m,
    bS: ()=>ee,
    cU: ()=>I,
    dR: ()=>Y,
    dZ: ()=>oe,
    db: ()=>T,
    em: ()=>N,
    f2: ()=>B,
    fU: ()=>ae,
    fs: ()=>f,
    gP: ()=>b,
    hH: ()=>V,
    jw: ()=>D,
    lo: ()=>te,
    m9: ()=>H,
    nA: ()=>l,
    pY: ()=>u,
    qF: ()=>K,
    qG: ()=>J,
    qm: ()=>Q,
    rk: ()=>k,
    rt: ()=>E,
    tB: ()=>a,
    wA: ()=>d,
    xY: ()=>se
});
var n = require("./module-39567.js"), s = require("./module-7246.js");
function o(e, t) {
    return new e({
        type: "string",
        ...s.A2(t)
    });
}
function i(e, t) {
    return new e({
        type: "string",
        format: "email",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function a(e, t) {
    return new e({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function c(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function l(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v4",
        ...s.A2(t)
    });
}
function u(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v6",
        ...s.A2(t)
    });
}
function d(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v7",
        ...s.A2(t)
    });
}
function p(e, t) {
    return new e({
        type: "string",
        format: "url",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function m(e, t) {
    return new e({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function h(e, t) {
    return new e({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function f(e, t) {
    return new e({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function g(e, t) {
    return new e({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function y(e, t) {
    return new e({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function w(e, t) {
    return new e({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function v(e, t) {
    return new e({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function _(e, t) {
    return new e({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function A(e, t) {
    return new e({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function S(e, t) {
    return new e({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function b(e, t) {
    return new e({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function E(e, t) {
    return new e({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function I(e, t) {
    return new e({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function C(e, t) {
    return new e({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function k(e, t) {
    return new e({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: !1,
        ...s.A2(t)
    });
}
function x(e, t) {
    return new e({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: !1,
        local: !1,
        precision: null,
        ...s.A2(t)
    });
}
function T(e, t) {
    return new e({
        type: "string",
        format: "date",
        check: "string_format",
        ...s.A2(t)
    });
}
function R(e, t) {
    return new e({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...s.A2(t)
    });
}
function B(e, t) {
    return new e({
        type: "string",
        format: "duration",
        check: "string_format",
        ...s.A2(t)
    });
}
function P(e, t) {
    return new e({
        type: "number",
        checks: [],
        ...s.A2(t)
    });
}
function J(e, t) {
    return new e({
        type: "number",
        coerce: !0,
        checks: [],
        ...s.A2(t)
    });
}
function M(e, t) {
    return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "safeint",
        ...s.A2(t)
    });
}
function q(e, t) {
    return new e({
        type: "boolean",
        ...s.A2(t)
    });
}
function D(e, t) {
    return new e({
        type: "null",
        ...s.A2(t)
    });
}
function O(e) {
    return new e({
        type: "any"
    });
}
function N(e) {
    return new e({
        type: "unknown"
    });
}
function F(e, t) {
    return new e({
        type: "never",
        ...s.A2(t)
    });
}
function U(e, t) {
    return new n.sm({
        check: "less_than",
        ...s.A2(t),
        value: e,
        inclusive: !1
    });
}
function L(e, t) {
    return new n.sm({
        check: "less_than",
        ...s.A2(t),
        value: e,
        inclusive: !0
    });
}
function $(e, t) {
    return new n.J_({
        check: "greater_than",
        ...s.A2(t),
        value: e,
        inclusive: !1
    });
}
function Q(e, t) {
    return new n.J_({
        check: "greater_than",
        ...s.A2(t),
        value: e,
        inclusive: !0
    });
}
function j(e, t) {
    return new n.Jk({
        check: "multiple_of",
        ...s.A2(t),
        value: e
    });
}
function G(e, t) {
    return new n.Yk({
        check: "max_length",
        ...s.A2(t),
        maximum: e
    });
}
function H(e, t) {
    return new n.Kk({
        check: "min_length",
        ...s.A2(t),
        minimum: e
    });
}
function z(e, t) {
    return new n.RM({
        check: "length_equals",
        ...s.A2(t),
        length: e
    });
}
function W(e, t) {
    return new n.DG({
        check: "string_format",
        format: "regex",
        ...s.A2(t),
        pattern: e
    });
}
function V(e) {
    return new n.NI({
        check: "string_format",
        format: "lowercase",
        ...s.A2(e)
    });
}
function K(e) {
    return new n.kH({
        check: "string_format",
        format: "uppercase",
        ...s.A2(e)
    });
}
function Y(e, t) {
    return new n.Tt({
        check: "string_format",
        format: "includes",
        ...s.A2(t),
        includes: e
    });
}
function Z(e, t) {
    return new n.J({
        check: "string_format",
        format: "starts_with",
        ...s.A2(t),
        prefix: e
    });
}
function X(e, t) {
    return new n.E6({
        check: "string_format",
        format: "ends_with",
        ...s.A2(t),
        suffix: e
    });
}
function ee(e) {
    return new n.v$({
        check: "overwrite",
        tx: e
    });
}
function te(e) {
    return ee((t)=>t.normalize(e));
}
function re() {
    return ee((e)=>e.trim());
}
function ne() {
    return ee((e)=>e.toLowerCase());
}
function se() {
    return ee((e)=>e.toUpperCase());
}
function oe(e, t, r) {
    return new e({
        type: "array",
        element: t,
        ...s.A2(r)
    });
}
function ie(e, t, r) {
    const n = s.A2(r);
    n.abort ?? (n.abort = !0);
    return new e({
        type: "custom",
        check: "custom",
        fn: t,
        ...n
    });
}
function ae(e, t, r) {
    return new e({
        type: "custom",
        check: "custom",
        fn: t,
        ...s.A2(r)
    });
}
