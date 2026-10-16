"use strict";
require.d(exports, {
    $O: ()=>_,
    $S: ()=>X,
    Au: ()=>$,
    Be: ()=>l,
    Bj: ()=>g,
    Ct: ()=>y,
    Dl: ()=>m,
    ER: ()=>Q,
    Eb: ()=>H,
    F7: ()=>R,
    FO: ()=>ie,
    Fk: ()=>Y,
    Fn: ()=>p,
    G1: ()=>I,
    G8: ()=>B,
    Hi: ()=>z,
    Il: ()=>ne,
    KA: ()=>L,
    KB: ()=>T,
    Kn: ()=>P,
    LK: ()=>D,
    Mu: ()=>i,
    Ny: ()=>b,
    Pw: ()=>v,
    Rl: ()=>s,
    Tx: ()=>j,
    Uy: ()=>S,
    WN: ()=>re,
    YA: ()=>G,
    Zm: ()=>q,
    _L: ()=>N,
    _z: ()=>w,
    aC: ()=>h,
    bS: ()=>ee,
    cU: ()=>E,
    dR: ()=>Z,
    dZ: ()=>se,
    db: ()=>A,
    em: ()=>U,
    f2: ()=>M,
    fU: ()=>ae,
    fs: ()=>f,
    gP: ()=>x,
    hH: ()=>V,
    jw: ()=>F,
    lo: ()=>te,
    m9: ()=>W,
    nA: ()=>c,
    pY: ()=>u,
    qF: ()=>K,
    qG: ()=>O,
    qm: ()=>J,
    rk: ()=>C,
    rt: ()=>k,
    tB: ()=>a,
    wA: ()=>d,
    xY: ()=>oe
});
var n = require("./module-39567.js"), o = require("./module-7246.js");
function s(e, t) {
    return new e({
        type: "string",
        ...o.A2(t)
    });
}
function i(e, t) {
    return new e({
        type: "string",
        format: "email",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function a(e, t) {
    return new e({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function l(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function c(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v4",
        ...o.A2(t)
    });
}
function u(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v6",
        ...o.A2(t)
    });
}
function d(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v7",
        ...o.A2(t)
    });
}
function p(e, t) {
    return new e({
        type: "string",
        format: "url",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function h(e, t) {
    return new e({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function m(e, t) {
    return new e({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function f(e, t) {
    return new e({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function g(e, t) {
    return new e({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function y(e, t) {
    return new e({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function v(e, t) {
    return new e({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function w(e, t) {
    return new e({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function b(e, t) {
    return new e({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function _(e, t) {
    return new e({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function S(e, t) {
    return new e({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function x(e, t) {
    return new e({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function k(e, t) {
    return new e({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function E(e, t) {
    return new e({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function T(e, t) {
    return new e({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function C(e, t) {
    return new e({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function I(e, t) {
    return new e({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: !1,
        local: !1,
        precision: null,
        ...o.A2(t)
    });
}
function A(e, t) {
    return new e({
        type: "string",
        format: "date",
        check: "string_format",
        ...o.A2(t)
    });
}
function P(e, t) {
    return new e({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...o.A2(t)
    });
}
function M(e, t) {
    return new e({
        type: "string",
        format: "duration",
        check: "string_format",
        ...o.A2(t)
    });
}
function R(e, t) {
    return new e({
        type: "number",
        checks: [],
        ...o.A2(t)
    });
}
function O(e, t) {
    return new e({
        type: "number",
        coerce: !0,
        checks: [],
        ...o.A2(t)
    });
}
function D(e, t) {
    return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "safeint",
        ...o.A2(t)
    });
}
function N(e, t) {
    return new e({
        type: "boolean",
        ...o.A2(t)
    });
}
function F(e, t) {
    return new e({
        type: "null",
        ...o.A2(t)
    });
}
function L(e) {
    return new e({
        type: "any"
    });
}
function U(e) {
    return new e({
        type: "unknown"
    });
}
function B(e, t) {
    return new e({
        type: "never",
        ...o.A2(t)
    });
}
function $(e, t) {
    return new n.sm({
        check: "less_than",
        ...o.A2(t),
        value: e,
        inclusive: !1
    });
}
function q(e, t) {
    return new n.sm({
        check: "less_than",
        ...o.A2(t),
        value: e,
        inclusive: !0
    });
}
function j(e, t) {
    return new n.J_({
        check: "greater_than",
        ...o.A2(t),
        value: e,
        inclusive: !1
    });
}
function J(e, t) {
    return new n.J_({
        check: "greater_than",
        ...o.A2(t),
        value: e,
        inclusive: !0
    });
}
function z(e, t) {
    return new n.Jk({
        check: "multiple_of",
        ...o.A2(t),
        value: e
    });
}
function H(e, t) {
    return new n.Yk({
        check: "max_length",
        ...o.A2(t),
        maximum: e
    });
}
function W(e, t) {
    return new n.Kk({
        check: "min_length",
        ...o.A2(t),
        minimum: e
    });
}
function G(e, t) {
    return new n.RM({
        check: "length_equals",
        ...o.A2(t),
        length: e
    });
}
function Y(e, t) {
    return new n.DG({
        check: "string_format",
        format: "regex",
        ...o.A2(t),
        pattern: e
    });
}
function V(e) {
    return new n.NI({
        check: "string_format",
        format: "lowercase",
        ...o.A2(e)
    });
}
function K(e) {
    return new n.kH({
        check: "string_format",
        format: "uppercase",
        ...o.A2(e)
    });
}
function Z(e, t) {
    return new n.Tt({
        check: "string_format",
        format: "includes",
        ...o.A2(t),
        includes: e
    });
}
function X(e, t) {
    return new n.J({
        check: "string_format",
        format: "starts_with",
        ...o.A2(t),
        prefix: e
    });
}
function Q(e, t) {
    return new n.E6({
        check: "string_format",
        format: "ends_with",
        ...o.A2(t),
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
function oe() {
    return ee((e)=>e.toUpperCase());
}
function se(e, t, r) {
    return new e({
        type: "array",
        element: t,
        ...o.A2(r)
    });
}
function ie(e, t, r) {
    const n = o.A2(r);
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
        ...o.A2(r)
    });
}
