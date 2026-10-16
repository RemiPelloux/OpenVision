import { nY1 } from "./ComposerMentionPreviewPrimitives.js";
import { C$m, S$m, dY1, rY1, sY1 } from "./gYa.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { jsx as GO } from "./react-runtime/react/esm-jsx-runtime-production.js";
var T$m, YXa, XXa, ZXa, QXa, JXa;
export { JXa, QXa, T$m, XXa, YXa, ZXa };
var __wakaru_eZa_initialized = false;
export function eZa() {
if (__wakaru_eZa_initialized) return;
__wakaru_eZa_initialized = true;
"use strict";
E(), Mt(), nY1(), T$m = 12, YXa = 4, XXa = {
    id: "file-path-staircase",
    priority: 20,
    match: (t)=>t.type === "file" && rY1(t.payload),
    Preview: (t)=>GO(C$m, {
            ...t
        })
}, ZXa = {
    id: "code-path-staircase",
    priority: 18,
    match: (t)=>t.type === "code" && sY1(t.payload),
    Preview: (t)=>GO(C$m, {
            ...t
        })
}, QXa = {
    id: "folder-staircase",
    priority: 10,
    match: (t)=>t.type === "folder" && S$m(t.payload),
    Preview: ({ item: t })=>{
        const e = S$m(t.payload) ? t.payload.relativePath : "";
        return GO(dY1, {
            relativePath: e
        });
    }
}, JXa = [
    XXa,
    ZXa,
    QXa
];

}
