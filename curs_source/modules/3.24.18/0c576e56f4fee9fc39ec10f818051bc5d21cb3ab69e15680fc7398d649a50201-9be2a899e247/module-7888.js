"use strict";
require.d(exports, {
    $O: ()=>b,
    $S: ()=>X,
    Au: ()=>q,
    Be: ()=>c,
    Bj: ()=>g,
    Ct: ()=>y,
    Dl: ()=>h,
    ER: ()=>Q,
    Eb: ()=>V,
    F7: ()=>$,
    FO: ()=>ie,
    Fk: ()=>W,
    Fn: ()=>p,
    G1: ()=>P,
    G8: ()=>F,
    Hi: ()=>L,
    Il: ()=>ne,
    KA: ()=>j,
    KB: ()=>T,
    Kn: ()=>C,
    LK: ()=>N,
    Mu: ()=>i,
    Ny: ()=>w,
    Pw: ()=>_,
    Rl: ()=>s,
    Tx: ()=>U,
    Uy: ()=>S,
    WN: ()=>re,
    YA: ()=>Z,
    Zm: ()=>z,
    _L: ()=>M,
    _z: ()=>v,
    aC: ()=>f,
    bS: ()=>ee,
    cU: ()=>x,
    dR: ()=>G,
    dZ: ()=>se,
    db: ()=>I,
    em: ()=>D,
    f2: ()=>A,
    fU: ()=>ae,
    fs: ()=>m,
    gP: ()=>k,
    hH: ()=>H,
    jw: ()=>J,
    lo: ()=>te,
    m9: ()=>K,
    nA: ()=>u,
    pY: ()=>l,
    qF: ()=>Y,
    qG: ()=>R,
    qm: ()=>B,
    rk: ()=>O,
    rt: ()=>E,
    tB: ()=>a,
    wA: ()=>d,
    xY: ()=>oe
});
var n = require("./module-9567.js"), o = require("./module-7246.js");
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
function c(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function u(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v4",
        ...o.A2(t)
    });
}
function l(e, t) {
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
function f(e, t) {
    return new e({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function h(e, t) {
    return new e({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function m(e, t) {
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
function _(e, t) {
    return new e({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function v(e, t) {
    return new e({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function w(e, t) {
    return new e({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function b(e, t) {
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
function k(e, t) {
    return new e({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function E(e, t) {
    return new e({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function x(e, t) {
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
function O(e, t) {
    return new e({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: !1,
        ...o.A2(t)
    });
}
function P(e, t) {
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
function I(e, t) {
    return new e({
        type: "string",
        format: "date",
        check: "string_format",
        ...o.A2(t)
    });
}
function C(e, t) {
    return new e({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...o.A2(t)
    });
}
function A(e, t) {
    return new e({
        type: "string",
        format: "duration",
        check: "string_format",
        ...o.A2(t)
    });
}
function $(e, t) {
    return new e({
        type: "number",
        checks: [],
        ...o.A2(t)
    });
}
function R(e, t) {
    return new e({
        type: "number",
        coerce: !0,
        checks: [],
        ...o.A2(t)
    });
}
function N(e, t) {
    return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "safeint",
        ...o.A2(t)
    });
}
function M(e, t) {
    return new e({
        type: "boolean",
        ...o.A2(t)
    });
}
function J(e, t) {
    return new e({
        type: "null",
        ...o.A2(t)
    });
}
function j(e) {
    return new e({
        type: "any"
    });
}
function D(e) {
    return new e({
        type: "unknown"
    });
}
function F(e, t) {
    return new e({
        type: "never",
        ...o.A2(t)
    });
}
function q(e, t) {
    return new n.sm({
        check: "less_than",
        ...o.A2(t),
        value: e,
        inclusive: !1
    });
}
function z(e, t) {
    return new n.sm({
        check: "less_than",
        ...o.A2(t),
        value: e,
        inclusive: !0
    });
}
function U(e, t) {
    return new n.J_({
        check: "greater_than",
        ...o.A2(t),
        value: e,
        inclusive: !1
    });
}
function B(e, t) {
    return new n.J_({
        check: "greater_than",
        ...o.A2(t),
        value: e,
        inclusive: !0
    });
}
function L(e, t) {
    return new n.Jk({
        check: "multiple_of",
        ...o.A2(t),
        value: e
    });
}
function V(e, t) {
    return new n.Yk({
        check: "max_length",
        ...o.A2(t),
        maximum: e
    });
}
function K(e, t) {
    return new n.Kk({
        check: "min_length",
        ...o.A2(t),
        minimum: e
    });
}
function Z(e, t) {
    return new n.RM({
        check: "length_equals",
        ...o.A2(t),
        length: e
    });
}
function W(e, t) {
    return new n.DG({
        check: "string_format",
        format: "regex",
        ...o.A2(t),
        pattern: e
    });
}
function H(e) {
    return new n.NI({
        check: "string_format",
        format: "lowercase",
        ...o.A2(e)
    });
}
function Y(e) {
    return new n.kH({
        check: "string_format",
        format: "uppercase",
        ...o.A2(e)
    });
}
function G(e, t) {
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
