import { x } from "./tslib.es6.js";
var Piu, D5;
export { D5, Piu };
var __wakaru_fVf_initialized = false;
export function fVf() {
if (__wakaru_fVf_initialized) return;
__wakaru_fVf_initialized = true;
"use strict";
x(), Piu = 256 * 1024, D5 = Object.freeze({
    tasks: 256,
    properties: 32,
    optionsPerProperty: 64,
    blockedByReferencesPerTask: 32,
    propertyValuesPerTask: 32,
    multiSelectValuesPerProperty: 64,
    projectTitleCharacters: 512,
    projectDescriptionCharacters: 8 * 1024,
    propertyNameCharacters: 256,
    optionLabelCharacters: 256,
    taskSubtitleCharacters: 2 * 1024,
    taskBodyCharacters: 16 * 1024,
    textPropertyValueCharacters: 4 * 1024
});

}
