import { x } from "./tslib.es6.js";
var Czs, IMu, AMu, RMu, Tzs, DMu, WUi, GUi, Ezs, xzs, MMu;
export { AMu, Czs, DMu, Ezs, GUi, IMu, MMu, RMu, Tzs, WUi, xzs };
var __wakaru_ihv_initialized = false;
export function ihv() {
if (__wakaru_ihv_initialized) return;
__wakaru_ihv_initialized = true;
"use strict";
x(), Czs = "Creation Provider", IMu = "Choose whether pull requests are created on GitHub or Origin for repositories mirrored between the two", AMu = "Set to Origin for internal dogfooding", RMu = "origin_dogfooding_cursor_creation_provider_override", Tzs = {
    github: "GitHub",
    origin: "Origin"
}, DMu = "Team default", WUi = {
    id: "github",
    label: Tzs.github
}, GUi = {
    id: "origin",
    label: Tzs.origin
}, Ezs = {
    id: "team_default",
    label: DMu
}, xzs = [
    WUi,
    GUi
], MMu = [
    Ezs,
    ...xzs
];

}
