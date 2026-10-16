import { E } from "./tslib.es6.js";
var B0i, oIn, tXa, nXa, y7m, S7m, iXa, rXa, k7m, w7m, C7m, T7m, ies, E7m, I7m, x7m, A7m, R7m, sXa;
export { A7m, B0i, C7m, E7m, I7m, R7m, S7m, T7m, iXa, ies, k7m, nXa, oIn, rXa, sXa, tXa, w7m, x7m, y7m };
var __wakaru_oXa_initialized = false;
export function oXa() {
if (__wakaru_oXa_initialized) return;
__wakaru_oXa_initialized = true;
"use strict";
E(), B0i = [
    "video",
    "audio",
    "shell",
    "diff",
    "textreference",
    "preview"
];
for (const t of B0i);
oIn = "/opt/cursor/artifacts/", tXa = /<(img|video)\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi, nXa = `(?:[^>"']|"[^"]*"|'[^']*')*?`, y7m = new RegExp(`<(textreference|preview)\\b(${nXa})\\s*/>`, "gi"), S7m = /<(?:textreference|preview)/i, iXa = /!\[[^\]]*]\(([^)]+)\)/g, rXa = /`([^`\n]+)`/g, k7m = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".bmp",
    ".webp",
    ".svg",
    ".ico"
], w7m = [
    ".mp4",
    ".mov",
    ".avi",
    ".webm",
    ".mkv",
    ".flv",
    ".wmv",
    ".m4v",
    ".3gp",
    ".ogv"
], C7m = new Set(k7m), T7m = new Set(w7m), ies = B0i.join("|"), E7m = new RegExp(`<\\/?(?:${ies})\\b`, "i"), I7m = new RegExp(`^\\s*<(\\/?)(${ies})(?=[\\s/>]|$)`, "i"), x7m = new RegExp(`^\\s*<(?:${ies})${nXa}\\s*\\/>`, "i"), A7m = new Map(B0i.map((t)=>[
        t,
        new RegExp(`<\\/${t}\\s*>`, "i")
    ])), R7m = /^\s*(`{3,}|~{3,})(.*)$/, sXa = /<img\s+[^>]*src=["']([^"']+)["'][^>]*\/?>/gi;

}
