import { E } from "./tslib.es6.js";
var ALa, tOp, nOp, iOp, RLa, rOp, qGr, zGr, PLa, MLa, sOp;
export { ALa, MLa, PLa, RLa, iOp, nOp, qGr, rOp, sOp, tOp, zGr };
var __wakaru_k21_initialized = false;
export function k21() {
if (__wakaru_k21_initialized) return;
__wakaru_k21_initialized = true;
"use strict";
E(), ALa = "Creation Provider", tOp = "Choose whether pull requests are created on GitHub or Origin for repositories mirrored between the two", nOp = "Set to Origin for internal dogfooding", iOp = "origin_dogfooding_cursor_creation_provider_override", RLa = {
    github: "GitHub",
    origin: "Origin"
}, rOp = "Team default", qGr = {
    id: "github",
    label: RLa.github
}, zGr = {
    id: "origin",
    label: RLa.origin
}, PLa = {
    id: "team_default",
    label: rOp
}, MLa = [
    qGr,
    zGr
], sOp = [
    PLa,
    ...MLa
];

}
